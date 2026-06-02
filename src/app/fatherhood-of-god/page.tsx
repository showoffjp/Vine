"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "adoption" | "fatherwound" | "practices" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "ot",
    title: "God as Father in the Old Testament",
    body: "The OT uses father-language for God sparingly but meaningfully. Deuteronomy 32:6 calls God the Father who created Israel. Psalm 103:13 draws the analogy: 'As a father has compassion on his children, so the Lord has compassion on those who fear him.' Isaiah 63:16 and 64:8 address God directly as Father — a startling intimacy in an ancient Near Eastern context where the gods were typically distant cosmic powers. The OT prepares for the NT disclosure but does not yet make the Father-Son-Spirit relationship explicit. What it establishes: God relates to Israel with parental love, discipline, and compassion.",
  },
  {
    id: "abba",
    title: "Jesus and 'Abba'",
    body: "Jesus's revolution was to address God as 'Abba' — an Aramaic term of intimate, familial address (closer to 'Papa' or 'Dad' than the formal 'Father'). Joachim Jeremias argued this was historically unprecedented in Jewish prayer. Jesus used it in Gethsemane (Mark 14:36), and Paul reports that by the Spirit, Christians now cry 'Abba, Father' (Romans 8:15, Galatians 4:6). The incarnate Son's relationship with the Father is the original; ours is a sharing in it. When Jesus taught the disciples to pray 'Our Father,' he was inviting them into his own intimacy with God — something without precedent in the history of religion.",
  },
  {
    id: "prodigal",
    title: "The Prodigal Son: Portrait of the Father",
    body: "Luke 15:11-32 is more properly called the Parable of the Running Father. The son wastes his inheritance, comes to his senses, and plans a speech asking to be received as a hired servant. But the father sees him 'while he was still a long way off' — he has been watching and waiting. He runs (undignified for a Middle Eastern patriarch), falls on his neck, and commands a feast before the son can finish his rehearsed speech. This is the definitive portrait of God's fatherhood: prodigal (lavish) in welcome, running before repentance is complete, restoring sonship rather than accepting servant status. The elder son's anger reveals the opposite spirit — and reveals the Pharisees in Jesus's audience.",
  },
  {
    id: "trinity",
    title: "The Father in Trinitarian Theology",
    body: "Properly, 'Father' in trinitarian theology names the first person of the Trinity — the one who eternally generates the Son (not in time, but in eternal relation) and breathes the Spirit. This is the technical sense of 'Father' in the Nicene Creed: 'I believe in one God, the Father Almighty.' The Father is not identical to the Son or the Spirit, though all three share one divine essence. Before creation existed, the Father was already Father — in eternal relation to the Son. God's fatherhood is not a projection of human family onto God; rather, human fatherhood is a created reflection of the eternal reality (Ephesians 3:14-15: 'from whom every family in heaven and on earth derives its name').",
  },
  {
    id: "discipline",
    title: "A Father Who Disciplines",
    body: "Hebrews 12:5-11 quotes Proverbs 3:11-12 directly: 'The Lord disciplines the one he loves, and he chastens everyone he accepts as his son.' The author is careful: God's discipline is not punishment for condemnation (Christ absorbed that at the cross) but training for holiness — 'the harvest of righteousness and peace for those who have been trained by it.' A father who never disciplines has abdicated; a father who only disciplines has confused punishment with training. God's discipline is purposive, painful, and producing something: 'the peaceful fruit of righteousness' in those who endure it.",
  },
  {
    id: "perfect",
    title: "The Perfect Father",
    body: "Jesus's most stunning claim about the Father's character comes in Matthew 7:11: 'If you, then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give good gifts to those who ask him!' The argument from lesser to greater: even imperfect human fathers give rather than withhold. God's fatherhood is defined by giving — he gave his Son (John 3:16), he gives the Spirit (Luke 11:13), he gives 'every good and perfect gift' (James 1:17). No human father has ever been a perfect father. God's fatherhood is not defined by human experience but stands as the original against which all human fatherhood is measured — and often found wanting.",
  },
];

const ADOPTION_ITEMS = [
  {
    id: "rom8",
    title: "Romans 8: The Spirit of Adoption",
    verse: "Romans 8:15-17",
    body: "Paul writes: 'The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, Abba, Father. The Spirit himself testifies with our spirit that we are God's children. Now if we are children, then we are heirs — heirs of God and co-heirs with Christ.' Three staggering claims: (1) Adoption is accomplished by the Spirit at regeneration — not earned or gradually achieved. (2) The Spirit produces in us the same cry of intimacy that the eternal Son makes to the Father. (3) Adoption means inheritance — everything the Father has given the Son, he shares with adopted children.",
  },
  {
    id: "gal4",
    title: "Galatians 4: From Slavery to Sonship",
    verse: "Galatians 4:4-7",
    body: "Paul's logic: we were enslaved under the law, under spiritual forces, under sin. The Son came to redeem precisely so that we could be adopted — not just forgiven, but repositioned from slaves to heirs. 'Because you are his sons, God sent the Spirit of his Son into our hearts, the Spirit who calls out, Abba, Father.' The legal metaphor of adoption (Roman law) makes the status irreversible: an adopted child in Roman culture had all the rights of a biological child and could not be disinherited. The adopting father took full legal and financial responsibility.",
  },
  {
    id: "john1",
    title: "John 1: Born of God",
    verse: "John 1:12-13",
    body: "'Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God — children born not of natural descent, nor of human decision or a husband's will, but born of God.' John's vocabulary is different (born/child rather than adopted/son) but the reality is the same: a new kind of status, grounded not in human achievement or lineage but in divine initiative. The new birth creates genuine children of God — not servants who live in the master's house, but children who belong to the family by the Father's own act.",
  },
  {
    id: "1jn3",
    title: "1 John 3: What We Shall Be",
    verse: "1 John 3:1-3",
    body: "'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!' John's language is superlative: the Father has lavished (a word of excess, abundance, overflow) love on us. The present status ('we are') grounds the future hope ('we shall be like him'). Adoption is not merely a legal fiction; it is a transformative reality with an eschatological future. The same one who lavishes love on us now will complete the work — we shall see him as he is and be made like him.",
  },
];

const WOUND_ITEMS = [
  {
    id: "absent",
    title: "The Absent Father",
    desc: "Fatherlessness — whether through death, divorce, abandonment, or emotional unavailability — is one of the defining wounds of the modern era. The absent father leaves a particular void: a hunger for approval that drives behavior long after childhood, a suspicion that love is conditional on performance, a difficulty resting in anyone's acceptance.",
    path: "Recognizing that God's fatherhood is not defined by human absence. He was not absent when your father was. He saw what happened. Psalm 27:10: 'Though my father and mother forsake me, the Lord will receive me.' The ache is real; it is also a pointer to the Father who does not leave.",
  },
  {
    id: "harsh",
    title: "The Harsh or Abusive Father",
    desc: "When the primary association with father is anger, shame, criticism, or violence, the word 'Father' for God becomes contaminated. Calling God Father feels dangerous — perhaps triggering the very fear, hypervigilance, or shame that characterized the relationship with an abusive human father.",
    path: "Differentiate slowly and deliberately. God's fatherhood is not defined by the harm done in his name. Scripture shows a Father who runs toward, not one who rages. Therapy alongside spiritual direction helps untangle the wound from the truth. Hebrews 12:10: God disciplines 'for our good, in order that we may share in his holiness' — in contrast to human fathers who 'disciplined us for a little while as they thought best.'",
  },
  {
    id: "demanding",
    title: "The Performance-Oriented Father",
    desc: "Some fathers communicate love only through achievement: approval is earned by grades, athletics, compliance. The adult child of such a father brings this paradigm to God — working, striving, performing to earn approval that is never quite secured. The assurance of grace never lands because the internal template is 'love is conditional.'",
    path: "Saturate yourself with Romans 8:38-39 and Ephesians 1:3-6. God 'predestined us for adoption' — before we did anything. The Father's love is not contingent on your performance. The prodigal son received the feast before he apologized properly. Preach this to yourself repeatedly, not once.",
  },
  {
    id: "passive",
    title: "The Passive or Emotionally Distant Father",
    desc: "Some fathers were present but not engaged — sitting in the same house but never really seeing, never asking the important questions, never initiating closeness. The child learns that relationships require one-sided pursuit, that vulnerability is unsafe, and that intimacy is what other people do.",
    path: "God pursues. 'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing' (Zephaniah 3:17). God is not a disengaged presence — he takes delight, he sings. Let that image displace the passive presence.",
  },
];

const PRACTICE_ITEMS = [
  {
    title: "Pray 'Our Father' Slowly",
    icon: "🙏",
    color: "#3B82F6",
    steps: [
      "Before rushing through the Lord's Prayer, pause on 'Our Father' and let it mean what it says",
      "Ask: do I actually believe God is my Father right now, in this moment?",
      "Name one thing you want to bring to a good father — and bring it to God in that posture",
      "Practice gratitude for specific things 'my Father' has given or done",
    ],
  },
  {
    title: "Read Romans 8 Weekly for a Month",
    icon: "📖",
    color: GREEN,
    steps: [
      "Romans 8:1-39 is the NT's fullest exploration of life in the Spirit as adopted children of God",
      "Read it slowly, highlighting every claim about your status as a child of God",
      "Focus especially on vv. 15-17 (adoption), 26-27 (Spirit intercedes), 38-39 (nothing separates)",
      "At the end of each reading, write one specific thing this changes about how you think of yourself",
    ],
  },
  {
    title: "Address Your Father Wound",
    icon: "💚",
    color: "#10B981",
    steps: [
      "If you carry pain from your relationship with your human father, name it specifically",
      "Bring the specific wounds to prayer — not generic prayer, but 'Father, my father did ___; I believed about you that ___'",
      "Consider working with a Christian counselor who understands inner healing",
      "Forgiveness of your human father is the long goal — not minimizing the harm, but releasing the debt",
    ],
  },
  {
    title: "Practice Receiving",
    icon: "🎁",
    color: PURPLE,
    steps: [
      "The adult child of a performance-oriented parent often cannot receive grace — they deflect compliments, cannot rest, must always be earning",
      "Practice receiving good things as gifts from the Father: 'Every good and perfect gift is from above' (James 1:17)",
      "When someone does something kind, practice saying 'Thank you' without immediately reciprocating",
      "Sit quietly and let the verse 'I am my beloved's and he is mine' (Song 2:16) land — not deserved, simply given",
    ],
  },
  {
    title: "Meditate on the Running Father",
    icon: "🏃",
    color: "#F59E0B",
    steps: [
      "Read Luke 15:11-32 slowly, placing yourself in the role of the returning son",
      "Visualize the father running — undignified, not waiting, actively moving toward you",
      "What is the speech you rehearsed? What are you prepared to offer? Notice that the father interrupts it",
      "Let the feast image be real: God celebrates when his children return. There is no reluctant welcome.",
    ],
  },
  {
    title: "Let Fatherhood Shape Your Prayers",
    icon: "✨",
    color: "#EC4899",
    steps: [
      "Children ask their fathers for things. They also just sit with them. Both are prayer.",
      "Cultivate both petition ('Father, I need') and simply being present ('Father, I'm here')",
      "Notice: do you come to God primarily as servant reporting to master, or as child to Father?",
      "Jesus said the Father knows what you need before you ask — the point of prayer is the relationship, not just the request",
    ],
  },
];

export default function FatherhoodOfGodPage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [selectedTheology, setSelectedTheology] = useState("ot");
  const [selectedAdoption, setSelectedAdoption] = useState("rom8");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  const theologyItem = THEOLOGY_ITEMS.find(t => t.id === selectedTheology)!;
  const adoptionItem = ADOPTION_ITEMS.find(a => a.id === selectedAdoption)!;

  const TABS = [
    { id: "theology" as Tab, label: "Who God Is as Father", icon: "☁️" },
    { id: "adoption" as Tab, label: "Adoption & Sonship", icon: "🏠" },
    { id: "fatherwound" as Tab, label: "Healing Father Wounds", icon: "💚" },
    { id: "practices" as Tab, label: "Living as Beloved", icon: "✨" },
    { id: "videos" as Tab, label: "Videos", icon: "🎬" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>☁️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Fatherhood of God</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.65 }}>
            Jesus taught us to begin prayer with two words that changed the history of religion: Our Father. What does it mean that the Creator of the universe is our Father, and how do we receive that truth when human fatherhood has wounded us?
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                God is not merely like a father — he is the Father from whom all human fatherhood derives its meaning (Ephesians 3:14-15). Understanding what Scripture actually reveals about God as Father is the foundation for receiving that reality personally.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 180 }}>
                {THEOLOGY_ITEMS.map(t => (
                  <button key={t.id} onClick={() => setSelectedTheology(t.id)}
                    style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedTheology === t.id ? GREEN : BORDER}`, background: selectedTheology === t.id ? `${GREEN}18` : CARD, color: selectedTheology === t.id ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                    {t.title}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 16 }}>{theologyItem.title}</h2>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{theologyItem.body}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "adoption" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Adoption (huiothesia in Greek) is the NT's legal metaphor for what happens at conversion: God does not merely forgive us from a distance but brings us into his family with full rights. These four key texts unfold the meaning and implications of divine adoption.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {ADOPTION_ITEMS.map(a => (
                <button key={a.id} onClick={() => setSelectedAdoption(a.id)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selectedAdoption === a.id ? PURPLE : BORDER}`, background: selectedAdoption === a.id ? `${PURPLE}15` : "transparent", color: selectedAdoption === a.id ? PURPLE : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {a.verse}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ marginBottom: 16 }}>
                <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 20, margin: 0 }}>{adoptionItem.title}</h2>
                <span style={{ color: MUTED, fontSize: 13 }}>{adoptionItem.verse}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{adoptionItem.body}</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 22, marginTop: 20 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>THE LOGIC OF ADOPTION</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Roman adoption law (Paul's likely background) was total and irrevocable: the adopted child gained all rights of a biological heir, previous debts were cancelled, and the adopting father took full legal and financial responsibility. Paul uses this metaphor deliberately. Your adoption by God is legally final — not provisional, not dependent on continued performance, not revocable by behavior. The Father who adopted you has taken full responsibility for you.
              </p>
            </div>
          </div>
        )}

        {tab === "fatherwound" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                For many people, the word "father" evokes pain rather than warmth — whether because of absence, harshness, demanding perfectionism, or emotional distance. These wounds do not disqualify us from receiving God's fatherhood, but they do complicate it. The path is not denial but transformation.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {WOUND_ITEMS.map(w => (
                <div key={w.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => toggleExpand(w.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", color: TEXT }}>
                    <div style={{ fontWeight: 800, fontSize: 16, textAlign: "left" }}>{w.title}</div>
                    <div style={{ color: MUTED, fontWeight: 700, fontSize: 20, flexShrink: 0 }}>{expanded[w.id] ? "−" : "+"}</div>
                  </button>
                  {expanded[w.id] && (
                    <div style={{ padding: "0 22px 22px" }}>
                      <div style={{ background: "#EF444412", border: "1px solid #EF444430", borderRadius: 10, padding: 16, marginBottom: 14 }}>
                        <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>The Wound</div>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
                      </div>
                      <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 10, padding: 16 }}>
                        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Path Forward</div>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{w.path}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}25`, borderRadius: 12, padding: 24, marginTop: 24 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>A WORD ON HEALING</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Healing father wounds is not a one-time transaction. It is a long walk of deliberately replacing the false template with the true one — bringing specific memories and specific beliefs about God to the light, receiving prayer, sometimes receiving counseling, and repeatedly preaching to yourself the truths about the Father that your experience has obscured. The goal is not forgetting what happened but having it no longer define your picture of God.
              </p>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The theological truth that God is your Father must become experiential — felt, not only believed. These practices move the truth from the head to the heart over time.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PRACTICE_ITEMS.map(p => (
                <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 28 }}>{p.icon}</span>
                    <h3 style={{ color: p.color, fontWeight: 800, fontSize: 18, margin: 0 }}>{p.title}</h3>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {p.steps.map((s, i) => (
                      <li key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.7 }}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "E5yoWkvp-k0", title: "God Our Father", channel: "Timothy Keller", description: "Tim Keller teaches that the biblical God is a father and a friend and a lover and a king — exploring what it means to know God as your personal Father." },
                  { videoId: "qcpkVgGYJ8A", title: "John Piper on Fatherhood", channel: "John Piper / Desiring God", description: "John Piper reflects on fatherhood — both God's fatherhood and human fatherhood — and what it means to live as children of the heavenly Father." },
                  { videoId: "OasF7lWlX_M", title: "The Prodigal God: The Elder Brother", channel: "Timothy Keller", description: "Tim Keller unpacks the parable of the prodigal son to show both sons' misunderstanding of the Father — and the radical grace the running Father displays." },
                  { videoId: "t0lo8AP7imU", title: "Fathers, Bring Them Up in the Discipline and Instruction of the Lord", channel: "Biblical Preaching", description: "A sermon on Ephesians 6:4 — the call to fathers to raise children in the nurture of the Lord, reflecting the Father-heart of God in the home." },
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
