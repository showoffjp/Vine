"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ATTRIBUTE_CATEGORIES = ["All", "Incommunicable", "Communicable", "Moral"];

const ATTRIBUTES = [
  {
    name: "Aseity (Self-Existence)",
    latin: "Aseitas",
    category: "Incommunicable",
    color: PURPLE,
    verse: "Exodus 3:14",
    definition: "God exists from himself, by himself, and for himself. He is not dependent on anything outside himself for his existence, sustenance, or purpose. When God names himself 'I AM WHO I AM,' he is saying: my existence is not derived from anything else. Everything else exists because of God; God exists because of God.",
    significance: "Aseity is the foundation of all other attributes. A God who was dependent would be a smaller God, subject to something greater. The self-existent God alone can be the ultimate foundation of reality, meaning, and morality.",
    quote: "The divine life is absolutely self-sufficient. God is not only the first cause but the last end; not only the ultimate foundation of all reality but its goal. — Herman Bavinck",
    application: "When we feel that our lives depend on circumstances or people, aseity reminds us that we depend on One who depends on nothing. Our security is in an unmovable foundation.",
  },
  {
    name: "Immutability",
    latin: "Immutabilitas",
    category: "Incommunicable",
    color: "#3B82F6",
    verse: "Malachi 3:6; James 1:17",
    definition: "God does not change in his being, character, purposes, or promises. 'I the LORD do not change' (Malachi 3:6). This is not rigidity — God acts dynamically in history, grieves, delights, and responds to prayer. But his nature, values, and covenant commitments are constant. What he loves, he always loves. What he hates, he always hates.",
    significance: "Immutability is what makes God trustworthy. A God who could change his mind about salvation, justice, or his promises would be a God you could not fully trust. The constancy of God is the stability beneath all human instability.",
    quote: "Were God's perfections changeable, he would cease to be God. God's love is the same yesterday, today, and forever. His mercy has no beginning and cannot end. — A.W. Tozer",
    application: "When God seems silent or distant, immutability reminds us: his love for us in Christ has not changed. His promises from Scripture have not expired. His commitment to our good is permanent.",
  },
  {
    name: "Omniscience",
    latin: "Omniscientia",
    category: "Incommunicable",
    color: "#10B981",
    verse: "Psalm 147:5; 1 John 3:20",
    definition: "God knows all things — past, present, and future — with complete, perfect, and immediate knowledge. He knows what has happened, what is happening, what will happen, and what could happen under every possible circumstance. He knows the number of hairs on your head (Matthew 10:30) and the thoughts of your heart (Psalm 139:2). Nothing is hidden from him.",
    significance: "Omniscience is the basis for God's judgment and the foundation for his providential governance. He doesn't make decisions with incomplete information. He sees the whole story from beginning to end.",
    quote: "There is nothing in the universe — no deed done, no thought conceived, no word spoken — that does not lie open before the gaze of God. — J.I. Packer",
    application: "Omniscience is both terrifying (every sin is known) and comforting (every suffering is seen). The God who sees everything is the God who sees you — in your worst moments and your hidden faithfulness.",
  },
  {
    name: "Omnipotence",
    latin: "Omnipotentia",
    category: "Incommunicable",
    color: "#EF4444",
    verse: "Job 42:2; Matthew 19:26; Jeremiah 32:17",
    definition: "God can do all that is consistent with his nature. He is not constrained by physical laws, limitations of power, or the opposition of creatures. 'Nothing is impossible with God' (Luke 1:37). This does not mean God can do logical contradictions (make a round square) or moral contradictions (lie or act against his nature) — those are not limitations of power but expressions of perfection.",
    significance: "Omnipotence means that nothing can finally defeat God's purposes. History is not out of control — it is under the authority of one who can bring his purposes to completion regardless of opposition.",
    quote: "We rejoice in an Almighty God because we are a people too weak to solve our own problems. The God we need is a God who can. — Alistair Begg",
    application: "When the situation seems impossible — illness, broken relationships, systemic injustice — omnipotence says: our God is not limited by what seems possible to us. He is not anxious.",
  },
  {
    name: "Omnipresence",
    latin: "Omnipraesentia",
    category: "Incommunicable",
    color: "#F59E0B",
    verse: "Psalm 139:7-10; Jeremiah 23:24",
    definition: "God is fully present everywhere simultaneously. He is not spread thin across the universe — he is wholly present in every location. 'Where can I flee from your presence?' (Psalm 139:7) — the answer is nowhere. God is fully present in the darkness and the light, in the heights and the depths. The incarnation did not limit God's omnipresence — the Son was fully present in human flesh and fully God.",
    significance: "Omnipresence means you cannot be in a place where God is not. There is no circumstance, no suffering, no depth of darkness, where God is absent.",
    quote: "God is never far away. He is not removed from us by distance but by sin. The issue is not geography but orientation. — Tim Keller",
    application: "The loneliest moment of your life is a moment in which God is fully, completely present. The awareness of God's presence is something we cultivate; the reality of it is constant.",
  },
  {
    name: "Eternity",
    latin: "Aeternitas",
    category: "Incommunicable",
    color: "#6366F1",
    verse: "Psalm 90:2; Isaiah 57:15",
    definition: "God is not bound by time. He exists in an eternal present, not in a sequence of past, present, and future. He does not age, learn, or forget. 'Before the mountains were born or you brought forth the earth and the world, from everlasting to everlasting you are God' (Psalm 90:2). Time itself is his creation — he is not inside it but above and outside it.",
    significance: "God's eternity means that our limited, temporary existence is upheld by One who sees all of history at once. The beginning and end of your story are both fully present to him.",
    quote: "God sees all of history — past, present, future — in a single eternal moment, the way we see a landscape from a mountain peak. — Augustine",
    application: "When we are trapped in the present moment of suffering, God's eternity means he sees what this moment is for and what comes after it. Our 'not yet' is his 'already known.'",
  },
  {
    name: "Holiness",
    latin: "Sanctitas",
    category: "Moral",
    color: "#EC4899",
    verse: "Isaiah 6:3; 1 Peter 1:16; Revelation 4:8",
    definition: "Holiness is the most prominent attribute of God in Scripture — the only one repeated three times as a superlative: 'Holy, holy, holy' (Isaiah 6:3; Revelation 4:8). Holiness means both moral purity (complete absence of evil) and otherness (God is categorically different from the creation). To encounter the holy God is to be undone — Isaiah falls on his face, Peter says 'depart from me, for I am a sinful man.'",
    significance: "The holiness of God is the foundation of the moral order. Sin is not just rule-breaking — it is an offense against infinite holiness. The cross is necessary because God's holiness cannot simply overlook sin.",
    quote: "The holiness of God is not one attribute among many. It is the attribute that gives all other attributes their weight and meaning. — R.C. Sproul",
    application: "Approaching God is not casual. True worship begins with the recognition of who God is — infinitely holy — and who we are by comparison. This is not primarily about guilt but about reality.",
  },
  {
    name: "Love",
    latin: "Amor Dei",
    category: "Moral",
    color: "#EF4444",
    verse: "1 John 4:8; John 3:16; Romans 5:8",
    definition: "God is love — not merely loving, but constitutively love (1 John 4:8). The love of God is not a response to lovable objects but an eternal reality within the Trinity (the Father loves the Son; the Son loves the Father in the Spirit). God's love for humanity is not based on human merit. 'God demonstrates his own love for us in this: while we were still sinners, Christ died for us' (Romans 5:8).",
    significance: "The love of God is the motive behind everything he does in redemption. The cross is not the Father punishing the Son — it is the Father and Son together acting in love to rescue lost humanity.",
    quote: "The love of God is not drawn out by our lovableness but is exercised despite our unlovableness. — D.A. Carson",
    application: "Your standing with God is not based on your performance but on his love. This does not make obedience irrelevant — it makes it a response of gratitude rather than an attempt to earn acceptance.",
  },
  {
    name: "Justice",
    latin: "Iustitia",
    category: "Moral",
    color: "#F59E0B",
    verse: "Deuteronomy 32:4; Romans 3:25-26",
    definition: "God always does what is right. He cannot ignore sin, because doing so would be unjust. He cannot punish the innocent, because that too would be unjust. Justice is not a constraint on God but an expression of his character — he is perfectly just because he is perfectly good. The cross simultaneously satisfies divine justice (sin is punished) and demonstrates divine love (God himself bears the punishment).",
    significance: "The justice of God is the ultimate answer to the problem of evil. Every unpunished evil in history will be addressed. Every injustice will be rectified. The oppressed will be vindicated. This is not wishful thinking — it is grounded in the character of a just God.",
    quote: "God's justice means that those who suffer unjustly in this world will not have suffered unjustly forever. The cross is the proof. — Tim Keller",
    application: "We can pursue justice in the world not as anxious activists but as people who know the final Judge is both just and good. Our work for justice is joining God's work, not substituting for it.",
  },
  {
    name: "Grace",
    latin: "Gratia",
    category: "Communicable",
    color: GREEN,
    verse: "Ephesians 2:8; Romans 5:20-21",
    definition: "Grace is God's unmerited favor — his disposition to bless the undeserving. Unlike mercy (which withholds deserved punishment), grace gives undeserved blessing. Every spiritual blessing is a grace: salvation, adoption, the Spirit, Scripture, the church. 'Where sin increased, grace abounded all the more' (Romans 5:20).",
    significance: "Grace redefines the relationship between God and humanity. We are not in a merit-based relationship where we earn by obedience and lose by failure. We are in a grace-based relationship where God gives lavishly to those who deserve nothing.",
    quote: "Grace is the central, organizing principle of biblical Christianity. Everything else hangs on it. Remove grace and the gospel becomes another self-improvement program. — Philip Yancey",
    application: "Living in grace means bringing your failures to God rather than hiding them. You cannot surprise God with your sin, and you cannot deplete his grace. The response to grace is not complacency but gratitude that fuels obedience.",
  },
  {
    name: "Mercy",
    latin: "Misericordia",
    category: "Communicable",
    color: "#A855F7",
    verse: "Psalm 103:8-12; Lamentations 3:22-23",
    definition: "Mercy is God's compassionate disposition toward those in misery and distress. It is the active response of God's love to human suffering and sinfulness. 'Great is his mercy toward those who fear him' (Psalm 103:11). The classic mercy text: 'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning' (Lamentations 3:22-23).",
    significance: "Mercy means that God does not treat us as our sins deserve. Mercy and justice meet at the cross: the penalty that justice demands is absorbed by God himself in Christ, so that mercy can be extended freely.",
    quote: "God's mercy is not a thin thread stretched to the breaking point — it is an ocean. He is plenteous in mercy. — Charles Spurgeon",
    application: "Every morning that you wake up is a mercy. The fact that your worst day was not your last day is a mercy. Practicing awareness of daily mercies reshapes gratitude at a foundational level.",
  },
  {
    name: "Faithfulness",
    latin: "Fidelitas",
    category: "Communicable",
    color: "#10B981",
    verse: "Lamentations 3:23; Deuteronomy 7:9; 1 Corinthians 10:13",
    definition: "God always keeps his word. His promises are not aspirational but certain. 'God is not man, that he should lie... Has he said, and will he not do it?' (Numbers 23:19). Every covenant he has made — with Noah, Abraham, David, and in Christ — he has kept. 'Great is your faithfulness' is not a hope but a declaration based on evidence.",
    significance: "Faithfulness is what makes prayer meaningful. When we bring God's promises back to him in prayer, we are not reminding him of something he forgot — we are aligning ourselves with what he has already committed to do.",
    quote: "The ground of faith is not our feelings about God but God's faithfulness. Faith is only as reliable as its object, and God's object is unimpeachable. — J.I. Packer",
    application: "When God seems slow, his faithfulness says: what he has promised, he will do — in his time and in his way. The apparent silence of God is not the absence of God.",
  },
];

export default function AttributesOfGodPage() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = ATTRIBUTES.filter(a => category === "All" || a.category === category);
  const attr = ATTRIBUTES.find(a => a.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✨</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Attributes of God</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto" }}>
            Theology proper — the study of God's nature and character — is the foundation of all Christian thought. What we believe about God shapes everything else. These are the attributes Scripture reveals.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, textAlign: "center" }}>
            {[
              { label: "Incommunicable", desc: "Unique to God alone", color: PURPLE },
              { label: "Communicable", desc: "Shared (derivatively) with humans", color: GREEN },
              { label: "Moral", desc: "God's ethical character", color: "#EF4444" },
            ].map((t, i) => (
              <div key={i}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{t.label}</div>
                <div style={{ color: MUTED, fontSize: 12 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {ATTRIBUTE_CATEGORIES.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${category === c ? GREEN : BORDER}`, background: category === c ? `${GREEN}15` : "transparent", color: category === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: attr ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((a, i) => (
              <button key={i} onClick={() => setSelected(selected === a.name ? null : a.name)}
                style={{ background: selected === a.name ? `${a.color}12` : CARD, border: `1px solid ${selected === a.name ? a.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${a.color}20`, border: `1px solid ${a.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color, fontWeight: 900, fontSize: 11, flexShrink: 0 }}>
                    {a.latin.split(" ")[0].substring(0, 3).toUpperCase()}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{a.name}</span>
                      <span style={{ background: `${a.color}15`, color: a.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{a.category}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2, fontStyle: "italic" }}>{a.latin} · {a.verse}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {attr && (
            <div style={{ background: CARD, border: `1px solid ${attr.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                <div>
                  <h2 style={{ color: attr.color, fontWeight: 900, fontSize: 22, margin: "0 0 2px" }}>{attr.name}</h2>
                  <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{attr.latin}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                <span style={{ background: `${attr.color}12`, color: attr.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{attr.category}</span>
                <span style={{ background: `${BORDER}`, color: MUTED, padding: "2px 10px", borderRadius: 8, fontSize: 12 }}>{attr.verse}</span>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{attr.definition}</p>

              <div style={{ background: `${attr.color}08`, border: `1px solid ${attr.color}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ color: attr.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>THEOLOGICAL SIGNIFICANCE</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{attr.significance}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>THEOLOGIAN QUOTE</div>
                <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>"{attr.quote}"</p>
              </div>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>PERSONAL APPLICATION</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{attr.application}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
