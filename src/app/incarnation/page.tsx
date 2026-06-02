"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Word Became Flesh", verse: "John 1:14", body: "'The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth' (John 1:14). This is the most astonishing sentence in all of literature. The eternal Word — through whom all things were made (1:3) — took on human flesh. Not as an appearance (Docetism) but in full, genuine humanity. God became what we are so that we could become what he is." },
  { title: "Fully God and Fully Human", verse: "Colossians 2:9", body: "'In Christ all the fullness of the Deity lives in bodily form' (Colossians 2:9). The Council of Chalcedon (451 AD) gave the orthodox formulation: Christ is one person with two natures — fully divine, fully human — without confusion, change, division, or separation. He is not half-God and half-man, nor alternately divine and human, but permanently, completely both. This is not a philosophical puzzle to solve but a mystery to confess." },
  { title: "The Kenosis", verse: "Philippians 2:6-7", body: "'Though he was in the form of God, did not consider equality with God something to be used to his own advantage; rather, he made himself nothing' (Philippians 2:6-7). The Greek word translated 'made himself nothing' is kenosen — he emptied himself. This has generated intense debate: What did the Son empty himself of? The consensus is not of divine attributes but of their independent exercise — he voluntarily lived within human limitations, dependent on the Father and the Spirit." },
  { title: "Why the Incarnation?", verse: "Hebrews 2:14-17", body: "Hebrews 2:14-17 gives multiple reasons: to destroy the devil's power over death, to make atonement for sin, and to become a merciful and faithful high priest. Athanasius added: 'He became what we are so that we might become what he is.' The incarnation is not a regrettable emergency — it is the fitting, beautiful act by which God, who created humanity for union with himself, recapitulated what had been lost and opened the way to divinization." },
  { title: "The Permanent Humanity of Christ", verse: "1 Timothy 2:5", body: "'There is one God and one mediator between God and mankind, the man Christ Jesus' (1 Timothy 2:5). The incarnation did not end at the resurrection or ascension. Jesus rose bodily, ascended bodily, and sits at the Father's right hand as the glorified, embodied God-man. The Incarnation is permanent. At this moment, there is a human being at the center of the Godhead — the firstborn of the new creation, the pattern and pledge of our own bodily resurrection." },
];

const HERESIES = [
  { name: "Docetism", era: "1st-2nd Century", color: "#EF4444", claim: "Jesus only appeared to have a body — he was pure spirit. The divine Christ could not truly suffer or die in physical flesh.", error: "Denies the genuine humanity of Christ. If Jesus did not truly become human, his suffering was theater and his resurrection irrelevant to our embodied humanity.", key_verse: "1 John 4:2 — 'Every spirit that acknowledges that Jesus Christ has come in the flesh is from God'" },
  { name: "Arianism", era: "4th Century", color: "#F59E0B", claim: "The Son was the highest created being — not truly divine, but subordinate to the Father and brought into existence at a point in time. 'There was a time when he was not.'", error: "Denies the true divinity of Christ. If Christ is not truly God, he cannot truly save; only God can redeem humanity. The Council of Nicaea (325) rejected Arianism and affirmed the Son is 'of one substance with the Father.'", key_verse: "John 1:1 — 'In the beginning was the Word, and the Word was with God, and the Word was God'" },
  { name: "Nestorianism", era: "5th Century", color: PURPLE, claim: "Christ has two distinct persons, not two natures in one person. The divine Son and the human Jesus are separate subjects, only loosely united. Mary is not theotokos (God-bearer) but only Christotokos (Christ-bearer).", error: "Divides the unity of Christ. The Council of Ephesus (431) rejected this, affirming that Mary can rightly be called theotokos because the one she bore was truly God incarnate.", key_verse: "Luke 1:43 — 'Why am I so favored, that the mother of my Lord should come to me?'" },
  { name: "Eutychianism", era: "5th Century", color: "#3B82F6", claim: "After the Incarnation, Christ has only one nature — a merged divine-human nature. The human nature was absorbed into and transformed by the divine.", error: "Confuses and mingles the two natures. The Council of Chalcedon (451) rejected this, insisting the two natures remain distinct even as they are united in one person.", key_verse: "Hebrews 2:17 — 'He had to be made like them, fully human in every way'" },
  { name: "Apollinarianism", era: "4th Century", color: GREEN, claim: "Jesus had a human body but the divine Logos replaced his human mind or spirit. He was thus not fully human — missing the highest human faculty.", error: "Denies the completeness of Christ's humanity. Gregory of Nazianzus countered: 'What has not been assumed cannot be healed' — if Christ did not take on our full humanity, our full humanity is unredeemed.", key_verse: "John 1:14 — 'The Word became flesh' — fully, not partially" },
];

const INCARNATION_THINKERS = [
  {
    id: "irenaeus",
    name: "Irenaeus of Lyon",
    era: "2nd century",
    context: "Bishop of Lyon; Against Heresies (c. 180 AD); recapitulation theology",
    bio: "Irenaeus was the first great systematic theologian of the Christian tradition, writing Against Heresies to combat the Gnostic claim that the material world was evil and Christ only appeared to be human. His response was the doctrine of recapitulation: Christ became human to retrace and redeem the entire human story from within. Where Adam disobeyed, Christ obeyed. Where humanity fell, Christ restored. The Incarnation is not an accident but the climax of a plan that began at creation.",
    quote: "The Word of God was made man so that you, being made man, might in return become God.",
    contribution: "Irenaeus established the foundational theological principle: the Incarnation must be genuine for salvation to be genuine. Against the Gnostics who wanted a purely spiritual Christ, he insisted that if Christ did not truly assume our flesh, he did not truly redeem it. This principle — what is not assumed cannot be healed — became the defining test for every subsequent Christological proposal.",
  },
  {
    id: "athanasius",
    name: "Athanasius of Alexandria",
    era: "4th century",
    context: "Bishop of Alexandria; On the Incarnation (c. 318 AD); defender of Nicene orthodoxy",
    bio: "Athanasius spent his life defending the full divinity of Christ against Arianism — the view that the Son was a created being, not truly God. His early masterwork On the Incarnation, written when he was around 23, remains one of the most accessible accounts of why God became human. His argument: humanity was created in the image of God; sin corrupted and defaced that image; only God himself, taking on the image he had given, could restore it. Only the Creator can recreate.",
    quote: "He became what we are so that we might become what he is.",
    contribution: "Athanasius bequeathed the Church the logic of exchange at the heart of the Incarnation: God became human so that humanity might share in the divine life. This exchange — technically called theosis or divinization — is not the merging of humanity with the divine but participation in the divine life through union with the incarnate Son. He is the firstborn of the new creation; we follow in his wake.",
  },
  {
    id: "gregory",
    name: "Gregory of Nazianzus",
    era: "4th century",
    context: "Archbishop of Constantinople; Five Theological Orations (380 AD); Cappadocian Father",
    bio: "Gregory of Nazianzus, together with Basil of Caesarea and Gregory of Nyssa, shaped Trinitarian and incarnation theology in the generation after Nicaea. Against Apollinaris, who taught that the divine Logos replaced the human mind of Christ, Gregory gave one of the most important theological arguments in history: if Christ did not assume every aspect of our humanity, he could not redeem every aspect of it. A Christ without a human mind could not redeem the human mind — and the mind is precisely where sin enters most deeply.",
    quote: "What has not been assumed cannot be healed; what is united to God is saved.",
    contribution: "Gregory's soteriological axiom became a permanent test for Christology: whatever Christ did not assume, he did not redeem. A Christ who was fully divine but only partially human could only offer partial salvation. Full redemption requires full assumption — flesh, mind, emotion, will, and all. His argument continues to shape how the church thinks about the scope of what Christ came to save.",
  },
  {
    id: "barth",
    name: "Karl Barth",
    era: "20th century",
    context: "Church Dogmatics IV/1-3 (1953-1959); The Humanity of God (1956); Swiss Reformed theologian",
    bio: "Karl Barth is the most important Protestant theologian of the 20th century. In his short essay The Humanity of God (1956), he reflected on how his earlier theology had overcorrected toward divine transcendence — at the cost of genuine engagement with the human. The Incarnation, Barth argued, reveals that it is not against God's nature to be human; humanity was always the intention of creation, and the God-man Jesus Christ is the original and true human being.",
    quote: "In Jesus Christ there is no isolation of man from God or of God from man. Rather, in Him we encounter the history, the dialogue, in which God and man meet together.",
    contribution: "Barth reversed the instinct to see God's humanity as something surprising or unprecedented. For Barth, the Incarnation is not a concession to human weakness but the revelation of who God eternally is: the One who, even before creation, determined to be for humanity in the person of the Son. The cross and resurrection are not God's reaction to sin but the execution of an eternal election.",
  },
  {
    id: "sayers",
    name: "Dorothy L. Sayers",
    era: "20th century",
    context: "The Man Born to Be King (1941-1942); Creed or Chaos? (1947); novelist and playwright",
    bio: "Dorothy L. Sayers was not a systematic theologian but a playwright and novelist who brought the Incarnation to life with unusual power. Her radio play cycle The Man Born to Be King — broadcast on the BBC during World War II — depicted Jesus as a fully human, historically specific figure speaking in recognizable language. It caused a national controversy among those who thought dramatic portrayal of Christ was blasphemous. Sayers responded that the real blasphemy was treating the Incarnation as if it had not actually happened in a real body, in a real culture, at a real moment.",
    quote: "The Christian affirmation is that a certain event happened in Palestine under Augustus Caesar and Pontius Pilate. It is a statement about something that actually happened in history.",
    contribution: "Sayers recovered the scandal of particularity: the Incarnation is not a general spiritual truth but a specific historical event. God did not become 'humanity in general'; he became this specific Jewish man, in this specific culture, at this specific moment. The particular, embarrassing, located nature of the Incarnation is not a limitation to be spiritualized away — it is the whole point.",
  },
];

const PRACTICES = [
  { title: "Let Christmas Have Its Weight", desc: "The birth of Christ is not a sentimental occasion but the most dramatic event in the history of the universe. The eternal Creator became a nursing infant. Sit with the strangeness and the glory of it. Don't let familiarity dull the astonishment that the Word became flesh.", icon: "⭐" },
  { title: "Pray to a God Who Knows", desc: "The permanent humanity of Christ means God has experienced human weakness, temptation, grief, exhaustion, and pain — not abstractly but from the inside. 'We do not have a high priest who is unable to empathize with our weaknesses' (Hebrews 4:15). Pray to him as one who has been where you are.", icon: "🙏" },
  { title: "Honor Your Own Body", desc: "God took on flesh. The Incarnation declares that matter matters — that bodies are not merely containers for souls but are the site of redemption. The resurrection of the body is the goal, not escape from it. Honor your body as the temple of the Spirit and the object of God's redemptive concern.", icon: "🏛️" },
  { title: "Read On the Incarnation", desc: "Read Athanasius's On the Incarnation — it is short, accessible, and C.S. Lewis called it one of the great Christian works. Reading it is not dry theology but encounter with the logic of why God became what we are, in language that still astonishes after 1700 years.", icon: "📜" },
  { title: "Celebrate the Fullness of Salvation", desc: "Because Christ assumed full humanity, he redeemed the whole person — body, mind, spirit, emotions. Salvation is not escape from embodied life but its redemption and transformation. Anything that treats physical existence as irrelevant or shameful is sub-Christian.", icon: "✝️" },
  { title: "Wonder at Divinization", desc: "Athanasius's formula — he became what we are so that we might become what he is — points to the goal of salvation: participation in the divine nature (2 Peter 1:4). This is theosis or divinization — not that we become God, but that through union with Christ we share in his divine life. Let this expand your vision of what salvation means.", icon: "✨" },
];

type Tab = "theology" | "heresies" | "thinkers" | "practices" | "videos";

export default function IncarnationPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [selectedHeresy, setSelectedHeresy] = useState("Docetism");
  const [selectedThinker, setSelectedThinker] = useState("irenaeus");

  const heresy = HERESIES.find(h => h.name === selectedHeresy)!;
  const thinker = INCARNATION_THINKERS.find(t => t.id === selectedThinker)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Incarnation</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            God became human. The eternal Word took on flesh, not as a temporary disguise but as a permanent union — fully divine, fully human, one person forever. The Incarnation is the hinge of all history.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "heresies" as const, label: "Historic Errors", icon: "⚠️" },
            { id: "thinkers" as const, label: "Key Thinkers", icon: "💡" },
            { id: "practices" as const, label: "Implications", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}25`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 14, marginBottom: 8 }}>THE CHALCEDONIAN FORMULA (451 AD)</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
                "One and the same Christ, Son, Lord, only-begotten, acknowledged in two natures which undergo no confusion, no change, no division, no separation; at no point was the difference between the natures taken away through the union, but rather the property of both natures is preserved and comes together into a single person and a single subsistent being."
              </p>
            </div>
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

        {activeTab === "heresies" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The historic heresies about Christ's person are not merely ancient mistakes — they represent permanent temptations to make Christ more manageable. Understanding them sharpens the orthodox confession.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {HERESIES.map(h => (
                <button key={h.name} onClick={() => setSelectedHeresy(h.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedHeresy === h.name ? h.color : BORDER}`, background: selectedHeresy === h.name ? `${h.color}20` : "transparent", color: selectedHeresy === h.name ? h.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {h.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${heresy.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h2 style={{ color: heresy.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{heresy.name}</h2>
                <span style={{ background: `${heresy.color}15`, color: heresy.color, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{heresy.era}</span>
              </div>
              <div style={{ background: `${heresy.color}08`, border: `1px solid ${heresy.color}20`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                <div style={{ color: heresy.color, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>THE CLAIM</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{heresy.claim}</p>
              </div>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>THE ERROR</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{heresy.error}</p>
              </div>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>THE CORRECTIVE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{heresy.key_verse}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "thinkers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {INCARNATION_THINKERS.map(tk => (
                <button key={tk.id} onClick={() => setSelectedThinker(tk.id)}
                  style={{ width: "100%", background: selectedThinker === tk.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedThinker === tk.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedThinker === tk.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{tk.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{tk.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{thinker.name}</h2>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{thinker.era}</span>
              </div>
              <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{thinker.context}</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{thinker.bio}</p>
              <blockquote style={{ margin: "0 0 20px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{thinker.quote}"</p>
              </blockquote>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{thinker.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The Incarnation is not only a doctrine to defend but a reality that changes how we live — how we pray, relate to our bodies, understand suffering, and anticipate the resurrection.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Video teachings on the Incarnation — the Word become flesh, its theological meaning, and why it stands at the center of Christian faith.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "SUWBelEa_6o", title: "The Incarnation: God Became Human", channel: "The Bible Project", description: "An animated exploration of John 1:14 — what it means that the eternal Word became flesh, how this fulfills the Old Testament temple theme, and why the Incarnation matters for how we understand salvation." },
                  { videoId: "oXEgbM2tSXs", title: "Fully God and Fully Human: The Council of Chalcedon", channel: "Ligonier Ministries", description: "The story of how the church arrived at the Chalcedonian definition — two natures, one person, without confusion or separation — and why each of the rejected heresies was a pastoral as well as theological failure." },
                  { videoId: "kv46yYW66pA", title: "Why the Incarnation? Athanasius and the Logic of the Cross", channel: "Theology Explained", description: "Athanasius's answer to why God became human — to restore the divine image in corrupted humanity, to defeat death from within, and to open the way to divinization. The Incarnation as the hinge of salvation history." },
                  { videoId: "smqK6ebkXiU", title: "The Permanent Humanity of Christ", channel: "N.T. Wright Online", description: "Wright on the astonishing implication that the Incarnation did not end at the resurrection — Jesus rose and ascended bodily, and there is now a human being at the right hand of the Father." },
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
