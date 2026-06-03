"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

const THEOLOGY = [
  { title: "Galatians 5 in Context", verse: "Galatians 5:16-26", body: "Paul's list of the fruit of the Spirit comes at the climax of his letter's ethical section. The backdrop is the conflict between flesh and Spirit (vv. 16-17): 'For the flesh desires what is contrary to the Spirit, and the Spirit what is contrary to the flesh. They are in conflict with each other, so that you are not to do whatever you want.' The contrast with the 'works of the flesh' (sexual immorality, idolatry, hatred, discord, jealousy, fits of rage... vv. 19-21) shows what a life not governed by the Spirit produces. The fruit of the Spirit is the alternative: what a life genuinely yielded to God's Spirit looks like." },
  { title: "Singular Fruit, Nine Qualities", verse: "Galatians 5:22-23", body: "Paul uses the singular: fruit, not fruits. The nine qualities are not nine separate optional extras that different Christians may or may not possess — they are one integrated character portrait of Jesus himself. You cannot have genuine love without patience; you cannot have peace without self-control; you cannot have goodness without faithfulness. The fruit of the Spirit is a unified whole. This means that growth in one quality is growth in all, and that a character marked by these qualities together is what it looks like to be conformed to the image of Christ (Romans 8:29)." },
  { title: "Spirit-Produced, Not Self-Produced", verse: "John 15:4-5", body: "'Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me... apart from me you can do nothing' (John 15:4-5). The fruit of the Spirit is not the fruit of human moral effort — it is the fruit of the Spirit. The critical distinction: we cooperate with God's transforming work; we do not produce the transformation ourselves. This prevents both passivity (waiting for God to do it all) and self-improvement (trying to produce love, joy, and peace through willpower). The path is participation: stay connected to the vine." },
  { title: "Works vs. Fruit", verse: "Galatians 5:19-21", body: "Notice the contrast: the text speaks of 'works' (erga) of the flesh but 'fruit' (karpos) of the Spirit. Works are what you manufacture through effort; fruit is what grows naturally from a healthy tree. The deeds of the flesh require effort and cultivation in sinful patterns — the addictive cycles, the practiced selfishness, the cultivated resentments. The fruit of the Spirit, by contrast, is the natural overflow of a life connected to God. This does not mean spiritual formation requires no effort — tending a vineyard requires constant work. But the effort is in remaining connected, not in producing the fruit directly." },
  { title: "Against Such Things, No Law", verse: "Galatians 5:23", body: "Paul's comment that 'against such things there is no law' (v. 23) is more than an aside — it is a theological claim. The fruit of the Spirit transcends legal categories. No law can command love, joy, and peace into existence; no legal system can produce faithfulness and gentleness by external regulation. The law can restrain the worst manifestations of the flesh; it cannot produce the fruit of the Spirit. Only the Spirit does that — which is why Paul's argument throughout Galatians is that the law cannot save and that the Spirit cannot be received by works of the law but by faith (Galatians 3:2)." },
];

const PRACTICES = [
  { fruit: "Love", discipline: "Intentional service", desc: "Choose one difficult relationship and make a specific, costly act of service this week — not because you feel like it but as a practice of the will. Love as an act of will, repeated over time, reshapes the affections until feeling follows.", icon: "❤️" },
  { fruit: "Joy", discipline: "Gratitude journaling", desc: "Write three specific things you are grateful for each morning — not general blessings but specific people, moments, and gifts. Gratitude is the spiritual practice most directly connected to joy. Name what you actually received, not what you think you should be thankful for.", icon: "🌞" },
  { fruit: "Peace", discipline: "Surrender prayer", desc: "Identify your primary anxiety and practice a daily prayer of surrender: name the thing, give it to God explicitly, and ask for the peace that passes understanding (Phil 4:6-7). Peace is not the absence of trouble but the presence of God in the trouble.", icon: "🕊️" },
  { fruit: "Patience", discipline: "Fasting", desc: "Fasting — intentionally delaying satisfaction of a physical appetite — is the most direct training in patience. Choose one fast per week (a meal, social media, entertainment) as practice in saying 'not now' to an immediate desire. This trains the patience needed for relationships and ministry.", icon: "⏳" },
  { fruit: "Kindness", discipline: "Noticing people", desc: "For one week, set an intention to notice the specific needs of every person you interact with — not just 'how are you?' but 'what does this person actually need today?' Kindness begins with attention. Practice being curious about others' actual situations.", icon: "🤍" },
  { fruit: "Goodness", discipline: "Moral examination", desc: "The Ignatian Examen — reviewing your day in God's presence, noticing where you were drawn toward good and where you compromised — cultivates moral sensitivity. Do it nightly for a month. What patterns do you notice? Where is moral cowardice habitual?", icon: "🌿" },
  { fruit: "Faithfulness", discipline: "Accountability", desc: "Choose one commitment — to a person, a practice, a discipline — and ask one other person to check in with you weekly. The external accountability trains internal faithfulness. Start small: show up consistently where you said you would.", icon: "🔗" },
  { fruit: "Gentleness", discipline: "Silence practice", desc: "Spend 10 minutes per day in silence — no input, no output, no agenda. Gentleness is undermined by constant reactivity and the need to fill every space with response. Silence creates the internal space that allows you to choose your response rather than simply react.", icon: "🌊" },
  { fruit: "Self-Control", discipline: "Digital fast", desc: "Choose one digital platform or entertainment source and abstain from it entirely for 30 days. This is not primarily about that thing but about training the capacity to say no to appetite generally. Self-control in small appetites builds the muscle for larger ones.", icon: "🎯" },
];

const VOICES_FRUIT = [
  {
    id: "torrey-ra",
    name: "R.A. Torrey",
    era: "1856–1928 · Evangelical",
    context: "How to Obtain the Fullness of the Holy Spirit",
    bio: "Reuben Archer Torrey, evangelist and first superintendent of Moody Bible Institute, wrote extensively on the Holy Spirit and the fruit he produces in believers. His book The Person and Work of the Holy Spirit (1910) remains a foundational evangelical treatment. Torrey insisted that the fruit of the Spirit is not produced by human effort or emotional experience but by the Spirit's abiding presence in a yielded life — and that every individual fruit can be traced back to the quality of one's relationship to the Spirit himself.",
    quote: "The fruit of the Spirit is not the product of our self-improvement programs. It is what the Spirit naturally produces when we get out of the way and let Him work.",
    contribution: "Torrey's pneumatology — his theology of the Holy Spirit — anchored the fruit-of-the-Spirit doctrine in the Spirit's person rather than human moral effort. His accessible writing helped ordinary believers understand that character transformation is not achieved but received, changing how evangelicals approach sanctification.",
  },
  {
    id: "packer-ji",
    name: "J.I. Packer",
    era: "1926–2020 · Anglican Evangelical",
    context: "Rediscovering Holiness",
    bio: "James Innell Packer, perhaps the most influential Anglican evangelical theologian of the 20th century, devoted much of his later career to recovering a robust doctrine of Christian holiness. His book Rediscovering Holiness (1992) is a sustained argument that the nine fruit of the Spirit are the substance of what holiness means. Packer warned against a truncated Christianity that is big on justification but thin on sanctification — and argued that the two cannot finally be separated.",
    quote: "Holiness is not a condition attained; it is a direction traveled. The question is not whether you have arrived but whether you are walking the right way.",
    contribution: "Packer's integration of Reformed soteriology with a robust practical ethic of holiness gave an entire generation of evangelicals permission to take character formation as seriously as doctrinal precision. His work bridged the gap between Reformed theology and the spirituality of the Puritans.",
  },
  {
    id: "thomas-gary",
    name: "Gary Thomas",
    era: "b. 1958 · Evangelical",
    context: "Authentic Faith",
    bio: "Gary Thomas, author of Sacred Pathways and Authentic Faith, explored how the fruit of the Spirit is cultivated through difficulty as much as through discipline. His work emphasizes that God often produces patience not by removing pressure but by increasing it — that the very situations we pray would be removed are frequently the occasions God uses to form the character we need. Thomas draws on both spiritual direction traditions and practical psychology.",
    quote: "God is more interested in forming you than in delivering you. The trial you are asking Him to end may be the very furnace in which He is producing exactly what you lack.",
    contribution: "Thomas's work gave permission to ordinary believers to see their difficult circumstances not as evidence of God's absence but as his most active formation work. His integration of spiritual formation with life's unavoidable hardships made character formation accessible and practical for believers who would never read academic theology.",
  },
  {
    id: "lewis-cs",
    name: "C.S. Lewis",
    era: "1898–1963 · Anglican",
    context: "Mere Christianity: The Great Sin & Virtue Chapters",
    bio: "C.S. Lewis devoted the third and fourth books of Mere Christianity to the theological virtues and Christian behavior, producing perhaps the most widely read popular treatment of character in the 20th century. His chapter on Pride ('The Great Sin') and his discussion of Christian virtue stand in essential conversation with the fruit of the Spirit — Lewis anchoring virtue in grace rather than effort, and sin in pride rather than appetite.",
    quote: "Do not waste time bothering whether you love your neighbor; act as if you did. As soon as we do this we find one of the great secrets. When you are behaving as if you loved someone, you will presently come to love him.",
    contribution: "Lewis's treatment of Christian virtue is the entry point for millions into a serious engagement with character formation. His ability to make theological ethics both intellectually rigorous and emotionally accessible, without reducing it to moralism, has made him the most-read gateway into the tradition of virtue ethics in the English-speaking world.",
  },
  {
    id: "willard-d2",
    name: "Dallas Willard",
    era: "1935–2013 · Evangelical",
    context: "Renovation of the Heart",
    bio: "Dallas Willard's Renovation of the Heart (2002) is a systematic theology of spiritual formation, arguing that the fruit of the Spirit is the natural result of a transformed character — and that character transformation requires deliberate engagement of the will, body, mind, and social environment. Willard rejected both passive mysticism and anxious striving, arguing instead for VIM: Vision, Intention, and Means — a comprehensive approach to becoming the kind of person who naturally produces fruit.",
    quote: "Grace is not opposed to effort, it is opposed to earning. The disciplines are not works of the law. They are a way of arranging our lives so that God can transform us.",
    contribution: "Willard's Renovation of the Heart provides the most comprehensive contemporary framework for understanding how the fruit of the Spirit is actually produced. His VIM model — and his integration of body, mind, will, soul, and relationships into the formation process — has shaped an entire generation of spiritual formation practitioners.",
  },
];

type Tab = "fruit" | "theology" | "practices" | "voices" | "videos";

export default function FruitOfSpiritPage() {
  const [activeTab, setActiveTab] = useState<Tab>("fruit");
  const [selected, setSelected] = useState("Love");
  const [selectedVoice, setSelectedVoice] = useState("torrey-ra");
  const voiceItem = VOICES_FRUIT.find(v => v.id === selectedVoice)!;

  const fruit = FRUITS.find(f => f.fruit === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌿</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Fruit of the Spirit</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control' (Galatians 5:22-23). Nine qualities — singular fruit, plural manifestation. All nine flow from the same Spirit.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "fruit" as const, label: "The Fruit", icon: "🌿" },
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "voices" as const, label: "Voices", icon: "🎓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "fruit" && (
          <div>
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
        )}

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

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Each fruit is cultivated through specific spiritual disciplines and practices. These are not ways to produce the fruit by self-effort — they are ways to remain connected to the Vine, creating the conditions in which the Spirit can do his formative work.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div>
                      <div style={{ color: GREEN, fontWeight: 800, fontSize: 14 }}>{p.fruit}</div>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 600 }}>{p.discipline}</div>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_FRUIT.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : BORDER}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : CARD, cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? GREEN : TEXT, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: TEXT }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: BG, borderRadius: 12, padding: 20, borderLeft: `3px solid ${GREEN}`, marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Video teachings on the fruit of the Spirit — what they are, how they grow, and what the Holy Spirit produces in the life of a believer.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {[
                { id: "VGyBrSmiyFA", title: "The Fruit of the Spirit Is the Fruit of Faith", teacher: "John Piper" },
                { id: "BqiocPRa5kg", title: "A Deep Study of Galatians 5", teacher: "Bible Study" },
                { id: "fTBsK-KILEc", title: "The Fruit of the Spirit — Galatians 5:22-24", teacher: "Expository Sermon" },
                { id: "LEK8_hlpPYY", title: "Fruit of the Holy Spirit", teacher: "Biblical Teaching" },
              ].map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
