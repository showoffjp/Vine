"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FRUITS = [
  {
    fruit: "Love",
    greek: "agape",
    color: "#EF4444",
    desc: "The first and greatest fruit — the others flow from it. Agape is not primarily a feeling but a willed commitment to the good of another regardless of their response or merit. Jesus defines it by the cross (John 15:13); Paul defines it in 1 Corinthians 13 by what it does rather than what it feels. Agape love wills the good of the enemy, the difficult person, the one who has wronged you.",
    how_it_grows: "Love grows through the practice of choosing the good of others when it costs you. Not grand gestures but daily decisions: listening when you want to speak, forgiving when you want to hold the debt, serving when you want to rest.",
    threatens: "Selfishness, indifference, the reduction of love to feeling.",
    verse: "1 Corinthians 13:4-8",
  },
  {
    fruit: "Joy",
    greek: "chara",
    color: "#F59E0B",
    desc: "Joy is the second fruit — and it is commanded ('Rejoice always,' 1 Thessalonians 5:16), which means it is not primarily a feeling but an orientation. Paul writes Philippians 4:4 from prison. Joy in the NT is rooted not in circumstances but in the reality of God's presence and grace. It is possible in suffering precisely because it is not circumstance-dependent.",
    how_it_grows: "Joy grows through deliberate gratitude, through the practice of remembering what God has done, through community that celebrates together. Thankfulness is the spiritual discipline most directly connected to joy.",
    threatens: "Comparison, ingratitude, the belief that joy must be earned or deserved.",
    verse: "Philippians 4:4",
  },
  {
    fruit: "Peace",
    greek: "eirene",
    color: "#10B981",
    desc: "The Hebrew shalom is broader than the absence of conflict — it is wholeness, flourishing, right relationships, completeness. The peace of the Spirit is first a peace with God (Romans 5:1) that overflows into peace with others and within oneself. It is what Philippians 4:7 calls 'the peace of God, which transcends all understanding' — a calmness that makes no sense given the circumstances.",
    how_it_grows: "Peace grows through prayer, through surrendering outcomes to God, through reconciling broken relationships, and through practicing trust in sovereignty — especially when circumstances seem chaotic.",
    threatens: "Anxiety, control, unresolved conflict, the inability to surrender outcomes.",
    verse: "Philippians 4:6-7",
  },
  {
    fruit: "Patience",
    greek: "makrothumia",
    color: "#3B82F6",
    desc: "Literally 'long anger' — the capacity to bear difficulty, delay, or the failures of others without giving up or erupting. It is not passivity but sustained grace under provocation. God's patience with Israel, with the disciples, and with you is the model and the source. Those who have received much patience are those most capable of extending it.",
    how_it_grows: "Patience grows precisely through the situations that test it — which is why James says to 'consider it pure joy' when trials come (James 1:2-3). Avoided trials produce no patience. Endured trials, with God, do.",
    threatens: "Entitlement, control, the belief that things should happen on your timeline.",
    verse: "James 1:3-4",
  },
  {
    fruit: "Kindness",
    greek: "chrestotes",
    color: "#8B5CF6",
    desc: "Practical goodness in action — treating others with generosity, consideration, and warmth. The word can also be translated 'usefulness.' Kindness is not sentimentality; it is practical care that makes someone's life better. God's kindness leads to repentance (Romans 2:4) — it is a softening, opening quality.",
    how_it_grows: "Kindness grows through deliberate attention to the people around you — noticing their needs, their struggles, their overlooked moments. Small acts of kindness, consistently practiced, reshape character over time.",
    threatens: "Self-absorption, the dehumanization of others, busyness that makes people invisible.",
    verse: "Romans 2:4",
  },
  {
    fruit: "Goodness",
    greek: "agathosune",
    color: "#0EA5E9",
    desc: "A more active form than kindness — goodness implies moral uprightness expressed in action. If kindness is warm, goodness has an edge: it is willing to confront evil, name wrong, and advocate for what is right even when it is uncomfortable. Jesus demonstrated goodness when he cleansed the temple — it was an act of moral courage, not gentleness.",
    how_it_grows: "Goodness grows through the internalization of God's own character — meditating on who he is, what he loves, what he hates. A person of goodness has developed strong moral instincts through sustained exposure to divine values.",
    threatens: "Moral cowardice, accommodation to evil, the loss of any sense that some things are genuinely wrong.",
    verse: "Romans 15:14",
  },
  {
    fruit: "Faithfulness",
    greek: "pistis",
    color: "#DC2626",
    desc: "Reliability, trustworthiness, keeping your word — the quality that makes you the kind of person others can count on. The faithful person does what they say, shows up when they promised, and follows through over the long term. God's own faithfulness (Lamentations 3:23) is the ground of all Christian trust.",
    how_it_grows: "Faithfulness grows through small commitments kept consistently. The person faithful in little becomes faithful over much (Luke 16:10). Every kept promise, every followed-through commitment, builds the character of faithfulness.",
    threatens: "Inconsistency, overpromising, the preference for novelty over sustainability.",
    verse: "Luke 16:10",
  },
  {
    fruit: "Gentleness",
    greek: "prautes",
    color: "#7C3AED",
    desc: "Meekness — power under control, not weakness. The same word used for a trained warhorse and for Moses (Numbers 12:3) and Jesus (Matthew 11:29). Gentleness is the ability to respond to others in proportion — not overreacting, not crushing the bruised reed (Isaiah 42:3). It is strength so confident it doesn't need to assert itself.",
    how_it_grows: "Gentleness grows through the humbling of pride — through receiving correction without defensiveness, through encountering your own weakness and failure, through the recognition that you are not the standard by which others are measured.",
    threatens: "Pride, defensiveness, the need to be right and be seen to be right.",
    verse: "Matthew 11:29",
  },
  {
    fruit: "Self-Control",
    greek: "enkrateia",
    color: "#6B7280",
    desc: "The mastery of desires, impulses, and appetites — choosing what is good over what is immediately gratifying. The final fruit is the guardian of all the others: without self-control, love collapses into impulse, joy into hedonism, and kindness into indulgence. The Spirit produces self-control not by suppressing desire but by redirecting it toward better objects.",
    how_it_grows: "Self-control grows through the practice of small disciplines: fasting, sabbath, silence, intentional limits on consumption. Every small act of saying no to appetite trains the capacity for larger acts of restraint. Physical disciplines and spiritual disciplines are more connected than we often realize.",
    threatens: "Indulgence, the belief that every desire should be satisfied, the loss of any standard beyond personal preference.",
    verse: "1 Corinthians 9:25-27",
  },
];

export default function FruitOfSpiritPage() {
  const [selected, setSelected] = useState("Love");

  const fruit = FRUITS.find(f => f.fruit === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌿</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Fruit of the Spirit</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control' (Galatians 5:22-23). Nine qualities — singular fruit, plural manifestation. All nine flow from the same Spirit.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, marginBottom: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {FRUITS.map(f => (
            <button key={f.fruit} onClick={() => setSelected(f.fruit)}
              style={{ flex: "0 0 auto", padding: "8px 16px", borderRadius: 20, border: `1px solid ${selected === f.fruit ? f.color : BORDER}`, background: selected === f.fruit ? `${f.color}20` : "transparent", color: selected === f.fruit ? f.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {f.fruit}
            </button>
          ))}
        </div>

        <div style={{ background: CARD, border: `1px solid ${fruit.color}30`, borderRadius: 14, padding: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
            <div>
              <h2 style={{ color: fruit.color, fontWeight: 900, fontSize: 28, margin: 0, marginBottom: 4 }}>{fruit.fruit}</h2>
              <div style={{ color: MUTED, fontSize: 14, fontStyle: "italic" }}>Greek: {fruit.greek}</div>
            </div>
            <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{fruit.verse}</span>
          </div>

          <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{fruit.desc}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>HOW IT GROWS</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{fruit.how_it_grows}</p>
            </div>
            <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 10, padding: 18 }}>
              <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 10 }}>WHAT THREATENS IT</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{fruit.threatens}</p>
            </div>
          </div>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 20 }}>
          <div style={{ color: PURPLE, fontWeight: 700, fontSize: 14, marginBottom: 12 }}>THE SINGULAR FRUIT</div>
          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
            Paul uses the singular: fruit, not fruits. The nine qualities are not nine separate optional extras — they are one integrated character produced by one Spirit. You cannot have genuine love without patience; you cannot have peace without self-control; you cannot have goodness without faithfulness. The fruit of the Spirit is a unified character portrait of Jesus himself — and the Spirit's work is conforming us to that portrait (Romans 8:29).
          </p>
        </div>
      </div>
    </div>
  );
}
