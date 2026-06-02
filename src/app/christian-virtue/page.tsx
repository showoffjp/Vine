"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "cardinal" | "theological" | "formation" | "videos";

const THEOLOGY_ITEMS = [
  {
    title: "What Is Virtue?",
    body: "Aristotle coined the term arete — excellence, the full flourishing of a thing according to its nature. A virtue is not a rule to obey but a stable disposition of character: the person of courage does not fight fear by reciting a principle but has been formed so that courage is their natural response. For the Christian, virtue is the shape of a redeemed self — the character that grace is producing in cooperation with deliberate formation.",
  },
  {
    title: "Virtue in the NT",
    body: "Paul's catalogue in Philippians 4:8 — 'whatever is true, noble, right, pure, lovely, admirable, excellent, praiseworthy' — is structurally a virtue list. Second Peter 1:5-8 commands believers to add virtue to faith, knowledge to virtue, self-control to knowledge, perseverance to self-control, godliness, mutual affection, and love. Most striking is Galatians 5:22-23: the fruit of the Spirit — love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control — is best understood as a profile of virtuous character produced by the Spirit's indwelling.",
  },
  {
    title: "Aquinas and Virtue",
    body: "Thomas Aquinas achieved a remarkable synthesis of Aristotle and Paul. He distinguished acquired virtues (produced by repeated human action, knowable by natural reason) from infused virtues (given by grace, enabling participation in God's own life). For Aquinas, grace does not destroy nature but perfects it: the person formed by infused charity has not abandoned prudence and justice but has those very capacities elevated and ordered toward their ultimate end — union with God. His Summa Theologiae II-II treats the virtues in extraordinary depth.",
  },
  {
    title: "Dallas Willard on Character",
    body: "In The Divine Conspiracy and Renovation of the Heart, Willard argued that the goal of Christian spiritual formation is not behavioral compliance but character transformation — becoming the kind of person who naturally does what Jesus commands because they want to, not because they must. Willard located this in the tradition of virtue ethics: a disciple is not someone who follows rules but someone whose 'inner world' — mind, will, body, soul, social relationships — has been transformed into Christlikeness. Formation targets desires, not merely decisions.",
  },
  {
    title: "Virtue Ethics vs. Rule Ethics",
    body: "Moral philosophy offers three main frameworks. Deontology (Kant) asks: what duties do I have? What rules apply? Consequentialism (Mill) asks: what action produces the best outcomes? Virtue ethics asks: what kind of person should I become? Christians need all three — rules (the law, the commandments) constrain and guide; consequences matter (wisdom calculates effects); but virtues are primary because they address the formation of the agent, not just the evaluation of acts. A person of good character will generally discern rightly — and when rules and consequences conflict, character provides the integrating judgment.",
  },
  {
    title: "Community and Virtue",
    body: "Alasdair MacIntyre's After Virtue (1981) argued that virtue cannot be cultivated in isolation — it requires a tradition with a coherent account of human flourishing and a community that embodies that tradition and passes it on. MacIntyre's diagnosis of modernity: we have the vocabulary of virtue but have lost the tradition and community that gave it meaning. For Christians, this is a call to take the church seriously as a character-forming community: practices, worship, accountability, story — these are the ecology in which virtue grows. Lone-ranger Christianity produces thin characters.",
  },
];

const CARDINAL_VIRTUES = [
  {
    name: "Prudence",
    greek: "Phronesis",
    definition:
      "Practical wisdom — the capacity to discern the right action in particular situations. Prudence is not caution or cleverness; it is the master virtue that governs how all other virtues are applied. Aristotle called it the 'charioteer of the virtues': you may have courage, but prudence determines when and how courage is called for.",
    classical:
      "Aristotle, Nicomachean Ethics Book VI. Aquinas, Summa Theologiae II-II Q.47-56. The 'prudent person' (phronimos) is Aristotle's model of practical excellence — the person whose judgment in particular situations is reliably good.",
    biblical:
      "Proverbs 2:1-6: 'If you accept my words and store up my commands... then you will understand the fear of the LORD and find the knowledge of God.' The fear of the LORD is the beginning of wisdom — prudence in its biblical form is wisdom rooted in covenant relationship, not merely philosophical competence.",
    cultivation:
      "Study wisdom literature (Proverbs, Ecclesiastes, Sirach). Practice deliberate decision-making: name what you are deciding, what values are at stake, what the options are. Seek counsel from those wiser and more experienced. Reflect on past decisions — what did you miss, what did you see clearly?",
    pitfalls:
      "Cleverness deployed for wrong ends (cunning). Excessive caution that never acts. Impulsiveness that acts without discernment. Confusing prudence with timidity — the prudent person acts decisively once the right action is discerned.",
  },
  {
    name: "Justice",
    greek: "Dikaiosyne",
    definition:
      "The stable disposition to give each person what they are owed — as an image-bearer of God (dignity), as a neighbor (care and help), as a covenant partner (faithfulness), as a citizen (rights). Justice is both personal (how you treat individuals) and structural (what systems and institutions do).",
    classical:
      "Plato, Republic. Aristotle, Nicomachean Ethics Book V. The classical tradition distinguished commutative justice (fair exchange between individuals), distributive justice (fair allocation by communities), and legal justice (obligations to the common good).",
    biblical:
      "Micah 6:8: 'Act justly, love mercy, walk humbly with your God.' Amos 5:24: 'Let justice roll on like a river, righteousness like a never-failing stream.' The Hebrew mishpat (justice in legal proceedings, defense of the vulnerable) and tzedakah (righteousness, right relationship) together form the biblical concept — justice is relational, not merely procedural.",
    cultivation:
      "Active engagement with the poor and marginalized — justice is learned in proximity to those denied it. Study structural injustice as well as personal wrongdoing. Practice scrupulous fairness in business, relationships, and use of power. Read the prophets regularly.",
    pitfalls:
      "Justice without mercy becomes harshness. Mercy without justice enables harm. Reducing justice to personal relationships while ignoring structural dimensions. Reducing it to structural change while ignoring personal responsibility.",
  },
  {
    name: "Fortitude",
    greek: "Andreia",
    definition:
      "The virtue of facing genuine difficulty and fear for a worthy purpose — neither fleeing what should be faced (cowardice) nor charging ahead without judgment (recklessness). Fortitude is the mean between cowardice and rashness. It is not the absence of fear but the capacity to act rightly in the presence of fear.",
    classical:
      "Aristotle, Nicomachean Ethics Book III. Aquinas distinguished fortitude as endurance (bearing suffering without being broken) and attack (confronting danger directly). The soldier going to battle is his primary example, but fortitude applies wherever genuine difficulty must be faced for the sake of the good.",
    biblical:
      "Daniel and his friends facing the furnace and the lions' den are paradigms of fortitude — they face genuine mortal danger for the sake of faithfulness, without recklessness. Philippians 4:13: 'I can do all things through Christ who strengthens me' — not a general promise of success but the confidence that sustains endurance through hardship.",
    cultivation:
      "Read the stories of martyrs and confessors — people who faced genuine threats for the sake of faith. Identify your specific areas of cowardice (what do you avoid that you know you should face?) and practice entry-level acts of facing them. Do not manufacture danger; cultivate readiness for the difficulty that comes.",
    pitfalls:
      "Recklessness that mistakes impulsiveness for courage. Stoic numbness that suppresses legitimate fear rather than acting despite it. Fortitude in wrong causes — bravery is not the same as fortitude if the cause is unjust.",
  },
  {
    name: "Temperance",
    greek: "Sophrosyne",
    definition:
      "The virtue of rightly ordered desire — not the elimination of pleasure but its proper enjoyment within appropriate limits. Temperance is not asceticism (which rejects bodily goods as evil) but ordering (which enjoys good things without being mastered by them). The temperate person can delight in food, drink, rest, and pleasure while remaining free from compulsion.",
    classical:
      "Aristotle, Nicomachean Ethics Book III. Plato associated sophrosyne with the harmony of the soul — each part doing what it should, with reason governing appetite. Aquinas extended temperance to govern all the bodily appetites and even some spiritual ones (curiosity, ambition).",
    biblical:
      "1 Corinthians 9:25-27: Paul disciplines his body like an athlete in training — not to punish it but to ensure desire serves purpose rather than overriding it. Proverbs 25:16: 'If you find honey, eat just enough — too much of it, and you will vomit.' Even good things destroy if disordered. The fruit of the Spirit includes self-control (egkrateia, Galatians 5:23).",
    cultivation:
      "Fasting trains freedom from appetite. Sabbath trains freedom from productivity-compulsion. Simplicity trains freedom from acquisitiveness. Regular examination of where desire has outrun wisdom — food, screens, approval, comfort, entertainment.",
    pitfalls:
      "Asceticism: treating bodily goods as inherently evil (condemned as Gnostic by the NT). Insensibility: refusing legitimate pleasure out of spiritual pride. Confusing temperance with joylessness — the temperate person enjoys good things freely and without guilt.",
  },
];

const THEOLOGICAL_VIRTUES = [
  {
    name: "Faith",
    latin: "Fides",
    definition:
      "More than intellectual assent to propositions, faith is fiducia — the act of trusting and entrusting oneself to God and his word. Hebrews 11:1: 'faith is the substance of things hoped for, the evidence of things not seen.' The Reformers distinguished notitia (knowledge of the content), assensus (intellectual agreement), and fiducia (personal trust) — all three are required, but fiducia is what distinguishes living faith from dead.",
    scholarship:
      "The pistis Christou debate in Pauline studies: is Paul's phrase in Galatians 2:16 and Romans 3:22 'faith in Christ' (objective genitive, our faith directed toward Christ) or 'faithfulness of Christ' (subjective genitive, Christ's own faithfulness)? Most scholars now see both dimensions: Christ's faithful obedience is the ground of justification; our trust in him is its instrument. Both are virtue language.",
    cultivation:
      "Regular engagement with Scripture feeds faith on its content and promises. Prayer exercises fiducia — conversation with God is trust in action. The testimonies of other believers strengthen faith that is wavering. The Lord's Supper enacts faith bodily — receiving is a physical act of trust.",
    pitfalls:
      "Bare intellectual assent (demons believe, James 2:19). Credulity — believing without appropriate evidence or against good evidence. Doubt that becomes settled refusal rather than honest wrestling. Separating faith from faithfulness — living faith produces action (James 2:17).",
  },
  {
    name: "Hope",
    latin: "Spes",
    definition:
      "Not wishful thinking ('I hope it doesn't rain') but confident expectation based on the resurrection of Jesus. Hope is oriented toward the future — specifically the coming of the Kingdom, the resurrection of the dead, and the renewal of all things. Romans 8:24-25: 'hope that is seen is no hope at all. Who hopes for what they already have? But if we hope for what we do not yet have, we wait for it patiently.'",
    scholarship:
      "Jürgen Moltmann's Theology of Hope (1964) argued that eschatology — the doctrine of the Last Things — is not an appendix to Christian theology but its organizing center. The resurrection of Jesus is the first-fruits of a coming universal resurrection that transforms how Christians relate to the present: suffering is not the final word, present goods are not ultimate goods, and history has a goal.",
    cultivation:
      "Meditation on the resurrection — the historical ground of Christian hope. Reading Revelation as a horizon-expanding narrative rather than a code. Practicing contentment (releasing the grip of present goods). Lamenting honestly — lament is hope speaking in pain (the Psalms model this).",
    pitfalls:
      "Despair: acting as if the present darkness is final. Presumption: treating desired outcomes as certain when Scripture has not promised them. Escapism: using future hope to disengage from present responsibilities rather than to fuel courageous engagement.",
  },
  {
    name: "Love",
    latin: "Caritas",
    definition:
      "The greatest of the theological virtues — the disposition to will the genuine good of another for their own sake. First Corinthians 13 is best read as a character profile: love is patient, kind, not envious or boastful or arrogant or rude, does not insist on its own way — these are descriptions of a person shaped by love as a stable disposition, not instructions for a single act.",
    scholarship:
      "Augustine: 'Our heart is restless until it finds its rest in thee' (Confessions I.1). Love is the ordering of all other loves — the heart that loves God above all things loves other things rightly; the disordered heart loves lesser things in place of God (libido dominandi). Jonathan Edwards, The Nature of True Virtue: true virtue is love to Being in general, beginning with God as the supreme Being. Aquinas defined charity as friendship with God — not merely benevolence but participatory sharing in God's own love.",
    cultivation:
      "Acts of service to difficult people — love is formed by being exercised where it is costly. Giving without expectation of return. Regular meditation on 1 Corinthians 13 applied to oneself: where is patience thin? where does pride intrude? Regular contemplation of the cross as the definitive act of divine love (1 John 4:19: 'We love because he first loved us').",
    pitfalls:
      "Sentimentalism: substituting warm feelings for the costly will to another's genuine good. Disordered love: loving people in ways that harm them (enabling, possessiveness). Self-contempt misread as humility — caritas includes ordered love of oneself as an image-bearer. Love without truth is not love.",
  },
];

const FORMATION_ITEMS = [
  {
    title: "Imitation",
    body: "Paul writes in 1 Corinthians 11:1: 'Be imitators of me, as I am of Christ.' Imitation is the oldest and most natural mode of human learning — we become what we observe and practice. Hebrews 11, the 'faith hall of fame,' works by placing the reader in a lineage of models: Abel, Enoch, Noah, Abraham, Sarah, Moses — each demonstrates what faith looks like in concrete circumstances. The role of mentors and models is not secondary or supplemental; it is the primary vehicle by which virtue passes between generations. Find people in whom the virtue you most need is clearly present, and put yourself in their company.",
  },
  {
    title: "Habituation",
    body: "Aristotle's foundational insight: we become just by doing just acts, courageous by doing courageous acts. Virtue is not the cause of virtuous action but its product — character is formed by repeated practice. Modern habit science (James Clear, Atomic Habits) has confirmed the mechanism: habits are built by cue-routine-reward loops repeated until the behavior becomes automatic and identity-shaping. The spiritual disciplines are best understood as virtue-training practices: fasting trains temperance; regular giving trains generosity; consistent prayer trains faith and hope; service trains love and humility. The disciplines do not produce grace but create the conditions in which grace can form character.",
  },
  {
    title: "Suffering and Virtue",
    body: "Romans 5:3-5: 'We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. And hope does not put us to shame.' James 1:2-4: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.' The pattern is consistent: hardship, rightly received, is the furnace in which character is formed. This is not masochism — suffering is not good in itself — but the recognition that resistance (physical, moral, relational) is the only medium in which strength is built.",
  },
  {
    title: "Accountability Community",
    body: "James 5:16: 'Confess your sins to each other and pray for each other so that you may be healed.' Proverbs 27:17: 'As iron sharpens iron, so one person sharpens another.' Virtue formation does not happen in isolation — it requires relationships of honest accountability where you can name your failures, receive both truth and grace, and be prayed for. The small group or spiritual friendship is not a supplement to Christian life but one of its structural necessities. MacIntyre's argument is relevant here: virtues require a community with shared practices and a shared story; without that community, virtue-talk becomes abstract and the formation it aims at becomes impossible.",
  },
  {
    title: "Liturgy and Virtue",
    body: "James K.A. Smith argues in Desiring the Kingdom and You Are What You Love that human beings are fundamentally desiring creatures — we are shaped most deeply not by what we think but by what we love, and we are shaped in love by what we do repeatedly, bodily and communally. Liturgy (whether formal or informal) is the practice of repeatedly enacting a story about what the world is and what we are for. Christian worship — gathering, confession, Scripture, sermon, table, sending — is a virtue-formation practice: it rehearses the shape of the gospel and forms the affections and character of participants. The question is not whether you are being formed liturgically but by which liturgies.",
  },
  {
    title: "Examination of Conscience",
    body: "The Ignatian Examen is a daily practice developed by Ignatius of Loyola: at the end of each day, review the day in the presence of God — give thanks, ask for light to see clearly, review the day's moments (consolations and desolations), confess where you fell short, and ask for grace for tomorrow. Applied to virtue formation: measure your day against the virtues. Where did prudence guide you well? Where did you act unjustly or fail to act justly? Where did courage fail? Where did desire get disordered? The daily examination brings virtue formation from the level of aspiration down to the level of specific concrete moments — which is where virtue actually lives.",
  },
];

function AccordionItem({
  title,
  body,
  id,
  expanded,
  toggle,
}: {
  title: string;
  body: string;
  id: string;
  expanded: Record<string, boolean>;
  toggle: (id: string) => void;
}) {
  const open = !!expanded[id];
  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 12,
        marginBottom: 10,
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => toggle(id)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "18px 22px",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{title}</span>
        <span
          style={{
            color: MUTED,
            fontSize: 20,
            lineHeight: 1,
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 22px 20px" }}>
          <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{body}</p>
        </div>
      )}
    </div>
  );
}

function DetailPanel({
  items,
  selected,
  onSelect,
  fields,
}: {
  items: Array<{ name: string; greek?: string; latin?: string; definition: string; [key: string]: string | undefined }>;
  selected: string;
  onSelect: (name: string) => void;
  fields: Array<{ key: string; label: string }>;
}) {
  const item = items.find((v) => v.name === selected) ?? items[0];
  return (
    <div style={{ display: "flex", gap: 0, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
      <div
        style={{
          width: 160,
          flexShrink: 0,
          background: CARD,
          borderRight: `1px solid ${BORDER}`,
          position: "sticky",
          top: 20,
          alignSelf: "flex-start",
        }}
      >
        {items.map((v) => (
          <button
            key={v.name}
            onClick={() => onSelect(v.name)}
            style={{
              display: "block",
              width: "100%",
              background: selected === v.name ? `${PURPLE}25` : "transparent",
              border: "none",
              borderLeft: `3px solid ${selected === v.name ? PURPLE : "transparent"}`,
              padding: "14px 16px",
              textAlign: "left",
              cursor: "pointer",
              color: selected === v.name ? TEXT : MUTED,
              fontWeight: selected === v.name ? 800 : 500,
              fontSize: 14,
            }}
          >
            {v.name}
          </button>
        ))}
      </div>
      <div style={{ flex: 1, background: "#0D0D1A", padding: 28, minHeight: 400 }}>
        <div style={{ marginBottom: 18 }}>
          <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{item.name}</h2>
          {(item.greek || item.latin) && (
            <div style={{ display: "flex", gap: 8 }}>
              {item.greek && (
                <span
                  style={{
                    background: `${GREEN}12`,
                    color: GREEN,
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "2px 10px",
                    borderRadius: 10,
                  }}
                >
                  {item.greek}
                </span>
              )}
              {item.latin && (
                <span
                  style={{
                    background: `${PURPLE}15`,
                    color: PURPLE,
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "2px 10px",
                    borderRadius: 10,
                  }}
                >
                  {item.latin}
                </span>
              )}
            </div>
          )}
        </div>
        <div style={{ marginBottom: 16 }}>
          <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{item.definition}</p>
        </div>
        {fields.map((f) =>
          item[f.key] ? (
            <div
              key={f.key}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 10,
                padding: "14px 16px",
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  color: GREEN,
                  fontWeight: 700,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 6,
                }}
              >
                {f.label}
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item[f.key]}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default function ChristianVirtuePage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedCardinal, setSelectedCardinal] = useState("Prudence");
  const [selectedTheological, setSelectedTheological] = useState("Faith");

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const TABS: Array<{ id: Tab; label: string }> = [
    { id: "theology", label: "Theology of Virtue" },
    { id: "cardinal", label: "The Cardinal Virtues" },
    { id: "theological", label: "The Theological Virtues" },
    { id: "formation", label: "Virtue Formation" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, -apple-system, sans-serif",
        paddingTop: 40,
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 900,
              margin: "0 0 10px",
              background: `linear-gradient(135deg, ${GREEN}, ${PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Christian Virtue
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Virtue ethics asks not what you should do but what kind of person you should become. The classical virtues — four cardinal, three theological — form the skeleton of a genuinely Christian character.
          </p>
        </div>

        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: 4,
            background: CARD,
            borderRadius: 14,
            padding: 6,
            border: `1px solid ${BORDER}`,
            marginBottom: 36,
            overflowX: "auto",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                minWidth: 0,
                padding: "10px 12px",
                borderRadius: 10,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology of Virtue */}
        {activeTab === "theology" && (
          <div>
            {THEOLOGY_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                id={`theology-${i}`}
                title={item.title}
                body={item.body}
                expanded={expanded}
                toggle={toggle}
              />
            ))}
          </div>
        )}

        {/* Tab 2: Cardinal Virtues */}
        {activeTab === "cardinal" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
              The four cardinal virtues — prudence, justice, fortitude, temperance — were identified by Greek philosophers and integrated into Christian theology by Aquinas. They are called cardinal (from cardo, hinge) because all other moral virtues hinge on them. Select a virtue to explore its definition, sources, biblical grounding, cultivation practices, and pitfalls.
            </p>
            <DetailPanel
              items={CARDINAL_VIRTUES as Array<{ name: string; greek?: string; latin?: string; definition: string; [key: string]: string | undefined }>}
              selected={selectedCardinal}
              onSelect={setSelectedCardinal}
              fields={[
                { key: "classical", label: "Classical Source" },
                { key: "biblical", label: "Biblical Grounding" },
                { key: "cultivation", label: "Cultivation Practices" },
                { key: "pitfalls", label: "Pitfalls" },
              ]}
            />
          </div>
        )}

        {/* Tab 3: Theological Virtues */}
        {activeTab === "theological" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
              The three theological virtues — faith, hope, and love — are so called because they have God as their immediate object and source. They cannot be produced by human effort alone; they are given by the Spirit and orient the whole person toward God. Select a virtue to explore its nature, scholarship, cultivation, and pitfalls.
            </p>
            <DetailPanel
              items={THEOLOGICAL_VIRTUES as Array<{ name: string; greek?: string; latin?: string; definition: string; [key: string]: string | undefined }>}
              selected={selectedTheological}
              onSelect={setSelectedTheological}
              fields={[
                { key: "scholarship", label: "Key Scholarship" },
                { key: "cultivation", label: "Cultivation Practices" },
                { key: "pitfalls", label: "Pitfalls" },
              ]}
            />
          </div>
        )}

        {/* Tab 4: Virtue Formation */}
        {activeTab === "formation" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 18,
              }}
            >
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Virtues are not installed by a single decision — they are cultivated through repeated practice over time in the context of community. Aristotle: we become what we repeatedly do. The Christian adds: the Spirit works through deliberate effort and rightly ordered community to transform character from the inside out. These are the primary means by which virtue is formed.
              </p>
            </div>
            {FORMATION_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                id={`formation-${i}`}
                title={item.title}
                body={item.body}
                expanded={expanded}
                toggle={toggle}
              />
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on virtue, character, and spiritual formation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "cFzsGeSFnqQ", title: "Desiring God, Part 1", channel: "Desiring God / John Piper", description: "John Piper on the foundation of Christian character: how joy in God is not the enemy of holiness but its very source." },
                  { videoId: "_f12xZekF54", title: "Developing Godly Character", channel: "Wednesday Service", description: "A teaching on the biblical basis for developing godly character through spiritual disciplines and community accountability." },
                  { videoId: "JaFRMaqHAdY", title: "The Gospel in 6 Minutes", channel: "Desiring God / John Piper", description: "John Piper on how the gospel is the foundation for all genuine virtue — character formed by grace, not mere effort." },
                  { videoId: "NUB4I5vO12o", title: "What is the Gospel?", channel: "Desiring God / John Piper", description: "A clear exposition of the gospel that forms the theological foundation for understanding Christian virtue and character formation." },
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
