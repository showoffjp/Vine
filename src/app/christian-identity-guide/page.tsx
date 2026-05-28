"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const IDENTITY_STATEMENTS = [
  { category: "Belonging", statement: "I am a child of God", verse: "John 1:12", explanation: "As many as received him, to those who believed in his name, he gave the right to become children of God. Not servants, not subjects — children. The relationship is adoptive, personal, familial. God is not merely your creator; he is your Father. This is the most foundational identity statement in the New Testament." },
  { category: "Belonging", statement: "I am loved by the Father as Christ is loved", verse: "John 17:23", explanation: "I in them and you in me... so that the world may know that you sent me and have loved them even as you have loved me. Jesus prays that the Father loves believers with the same love with which he loves the Son. The love is not quantitatively reduced — it is the same love, extended to those who are in Christ." },
  { category: "Belonging", statement: "I am a friend of Jesus, not merely a servant", verse: "John 15:15", explanation: "I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you. The promotion from servant to friend is not earned — it is declared. Jesus initiates the friendship and defines its terms." },
  { category: "Position", statement: "I am justified — declared righteous before God", verse: "Romans 5:1", explanation: "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ. Justification is a legal declaration — not that we are good, but that we are counted righteous because we are in Christ. The peace with God that results is not an emotional state we manufacture but an objective status we receive." },
  { category: "Position", statement: "I am adopted into God's family", verse: "Romans 8:15", explanation: "The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. Adoption in the Roman world was a permanent, irrevocable legal act that gave full inheritance rights. God's adoption is more permanent still — it cannot be revoked." },
  { category: "Position", statement: "I am a new creation", verse: "2 Corinthians 5:17", explanation: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! The new creation is not merely reformed or improved — it is genuinely new. The same Greek word (kainē ktisis) is used of the new creation at the end of time. In Christ, the new age has broken into the present." },
  { category: "Purpose", statement: "I am God's workmanship, created for good works", verse: "Ephesians 2:10", explanation: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do. The Greek word (poiema) is the origin of the English 'poem.' We are God's poem — carefully crafted, not accidental. And we are crafted for a purpose: specific good works prepared before the foundation of the world." },
  { category: "Purpose", statement: "I am an ambassador for Christ", verse: "2 Corinthians 5:20", explanation: "We are therefore Christ's ambassadors, as though God were making his appeal through us. An ambassador speaks on behalf of a king — with the king's authority and in the king's interest. The Christian is not merely someone who believes good news; they are the official representative of the one who is good news." },
  { category: "Purpose", statement: "I am the light of the world", verse: "Matthew 5:14", explanation: "You are the light of the world. A town built on a hill cannot be hidden. Christ says this not as a compliment to moral achievement but as a statement of what believers are. Light is not something you become — it is what you are when Christ inhabits you. The call is to let that light be seen, not to manufacture it." },
  { category: "Security", statement: "I am held in the hand of God", verse: "John 10:28-29", explanation: "I give them eternal life, and they shall never perish; no one will snatch them out of my hand. My Father... is greater than all; no one can snatch them out of my Father's hand. The security is double — held in both the Son's hand and the Father's hand simultaneously. The question is not whether the believer can fall out, but whether any external force can take them — and the answer is no." },
  { category: "Security", statement: "I cannot be separated from God's love", verse: "Romans 8:38-39", explanation: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord. Paul catalogs every conceivable separating force — cosmic, temporal, spatial, supernatural — and declares none of them sufficient." },
  { category: "Security", statement: "I am sealed with the Holy Spirit", verse: "Ephesians 1:13-14", explanation: "When you believed, you were marked in him with a seal, the promised Holy Spirit, who is a deposit guaranteeing our inheritance until the redemption of those who are God's possession. The seal is God's ownership mark and guarantee of future delivery. The Spirit is the down payment (arrabon) of what is coming — not the whole but the certain promise of the whole." },
  { category: "Future", statement: "I am a citizen of heaven", verse: "Philippians 3:20", explanation: "But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ. Paul writes this to a Roman colony — Philippi — whose residents were proud Roman citizens. He claims that Christians' true citizenship is in an even greater city. This reorients allegiances: where our citizenship is, there our ultimate loyalty belongs." },
  { category: "Future", statement: "I will be glorified with Christ", verse: "Romans 8:17", explanation: "Now if we are children, then we are heirs — heirs of God and co-heirs with Christ, if indeed we share in his sufferings in order that we may also share in his glory. The inheritance is nothing less than co-heirship with the Son of God — sharing in the same glory the Father has given to Christ. The suffering of the present is not the final word." },
  { category: "Future", statement: "I am being transformed into Christ's likeness", verse: "2 Corinthians 3:18", explanation: "And we all, who with unveiled faces contemplate the Lord's glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit. Transformation is active and ongoing — a present participle. We are not finished products but people in process, being shaped into the image of the one we behold." },
];

const CATEGORIES = ["All", "Belonging", "Position", "Purpose", "Security", "Future"];

const LIES = [
  { lie: "I am what I do — my identity is my performance", truth: "You are what God says you are, not what you produce. Identity precedes activity: God declared his approval of Jesus before his ministry began (Matthew 3:17). Your standing before God is not performance-conditional." },
  { lie: "I am my worst failure — my past defines me", truth: "2 Corinthians 5:17: the old has gone. The power of sin over your identity — the way it defines you, accuses you, tags you — is broken in Christ. Forgiveness is not just legal; it is identity-changing." },
  { lie: "I am what others think of me", truth: "Human opinion is not the final court. The approval that matters — the Father's — has already been pronounced over every person in Christ. You are beloved. That verdict does not fluctuate with social feedback." },
  { lie: "I am not enough — there's always more to do to earn acceptance", truth: "The gospel is not 'God will accept you when you are good enough.' It is 'God accepts you in Christ, now, without condition.' The Prodigal Father ran before the son finished his speech (Luke 15:20). The acceptance is not earned; it is given." },
  { lie: "I am defined by my mental illness / addiction / struggle", truth: "Your struggles are real and should not be minimized. But they are things you experience, not who you are. 1 Corinthians 6:11: 'That is what some of you were' — Paul lists sins and says: the past tense now applies. Your deepest identity is not your diagnosis or your addiction." },
];

export default function ChristianIdentityGuidePage() {
  const [activeTab, setActiveTab] = useState<"statements" | "lies" | "practice">("statements");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = IDENTITY_STATEMENTS.filter(s => category === "All" || s.category === category);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🪞</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Who You Are in Christ</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Your deepest identity is not what you do, what you've done, or what others say. It is what God declares in Christ — permanently, unconditionally, irrevocably. This is who you are.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "statements" as const, label: "Identity Truths", icon: "✨" },
            { id: "lies" as const, label: "Common Lies", icon: "❌" },
            { id: "practice" as const, label: "Apply It", icon: "🙏" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "statements" && (
          <div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {CATEGORIES.map(c => (
                <button key={c} onClick={() => setCategory(c)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${category === c ? GREEN : BORDER}`, background: category === c ? `${GREEN}15` : "transparent", color: category === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {c}
                </button>
              ))}
            </div>
            {filtered.map((s, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === s.statement ? null : s.statement)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${expanded === s.statement ? GREEN + "50" : BORDER}`, borderRadius: expanded === s.statement ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{s.statement}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{s.verse} · {s.category}</div>
                  </div>
                  <span style={{ color: GREEN, flexShrink: 0 }}>{expanded === s.statement ? "−" : "+"}</span>
                </button>
                {expanded === s.statement && (
                  <div style={{ background: BG, border: `1px solid ${GREEN}20`, borderTop: "none", borderRadius: "0 0 10px 10px", padding: 20 }}>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>{s.verse}</div>
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{s.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "lies" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The gospel is not just about what Christ did — it reshapes who we are. These are the identity lies that undermine that reshaping, and the truth that displaces them.
              </p>
            </div>
            {LIES.map((l, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 14, marginBottom: 12 }}>
                  Lie: "{l.lie}"
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>TRUTH</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{l.truth}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "practice" && (
          <div>
            {[
              { title: "Memorize One Statement Per Week", desc: "Choose one identity statement from the list. Write it on a card. Read it every morning and every time you feel your identity threatened by failure, rejection, or comparison. Don't just read it — declare it: 'I am ___, because God says so in ___.' The goal is to have a scriptural response ready when the lie comes." },
              { title: "Identify Your Specific Identity Threat", desc: "Which lie do you actually believe? Most of us have one primary identity distortion — we derive identity from performance, or from others' approval, or from the past. Name the specific one and find the specific scriptural counter-truth. Generic truths resist generic lies; specific truths displace specific lies." },
              { title: "Preach the Gospel to Yourself Daily", desc: "Martin Luther: 'I must hear the gospel daily, because I forget it daily.' Every morning: remind yourself that you are accepted in Christ, not on probation. Every evening: bring specific failures to the cross, not to earn forgiveness but to receive what is already yours. Daily self-preaching resists both complacency and despair." },
              { title: "Let Worship Reinforce Identity", desc: "Songs about who God is necessarily tell you who you are. 'I am a child of God' — sung in a congregation — carries weight that private reading alone doesn't. Choose worship experiences that reinforce your identity in Christ rather than your performance for God." },
              { title: "Find Community That Speaks Identity", desc: "Paul calls believers to build each other up. The people closest to you should know your identity truths well enough to speak them to you when you forget. Ask one person in your life to remind you regularly: 'You are God's beloved. That's not based on this week's performance.' This is what Christian community is for." },
              { title: "Counter Identity Crises with Lament", desc: "When circumstances attack your identity — job loss, broken relationship, failure — bring the tension to God honestly (Psalm 13, 22, 88). Lament keeps both honesty about the pain and trust in God's character. It refuses to let circumstances rewrite identity while taking the pain seriously." },
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
