"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "what-is-atonement", label: "What Is Atonement" },
  { id: "penal-substitution", label: "Penal Substitution" },
  { id: "christus-victor", label: "Christus Victor" },
  { id: "other-theories", label: "Other Theories" },
  { id: "cross-and-life", label: "The Cross and Christian Life" },
  { id: "videos", label: "Videos" },
];

const WHAT_IS_SECTIONS = [
  {
    color: GOLD,
    title: "At-one-ment: The Meaning",
    body: 'The English word "atonement" is almost unique to theology: at-one-ment, the making of two parties into one. In Christian theology it refers to the entire work of Christ that restores the broken relationship between God and humanity — undoing the estrangement caused by sin, removing guilt, and reconciling creatures to their Creator.',
  },
  {
    color: TEAL,
    title: "Yom Kippur: The Day of Atonement",
    body: "Leviticus 16 describes the annual Day of Atonement (Yom Kippur), the holiest day in Israel’s calendar. The high priest entered the Most Holy Place once a year with blood to make atonement for the sins of the whole nation. Two goats were used: one was sacrificed, and the other — the scapegoat — had the sins of the people symbolically laid on it and was sent into the wilderness. The NT presents Christ as the fulfillment of both: the sacrificial victim whose blood atones, and the one who bears sin away (Hebrews 9–10).",
  },
  {
    color: GREEN,
    title: "The Sacrificial System in Leviticus",
    body: 'The entire Levitical sacrificial system taught Israel that sin is serious, that it demands a cost, and that God in his mercy provides the means of atonement. The burnt offering, sin offering, and guilt offering all pointed forward to Christ. The principle of Leviticus 17:11 is foundational: "For the life of the flesh is in the blood, and I have given it for you on the altar to make atonement for your souls."',
  },
  {
    color: BLUE,
    title: "Four Key Concepts",
    body: "Biblical atonement language clusters around four terms. (1) Propitiation: God’s wrath is turned away — the holy God who must judge sin has his wrath satisfied (Romans 3:25; 1 John 2:2). (2) Expiation: sin is removed, covered, cleansed — the guilt of sin is wiped away. (3) Redemption: humanity is bought back from bondage — from slavery to sin, death, and the law (Galatians 3:13; 4:5). (4) Reconciliation: the estranged relationship between God and humanity is restored — from enemies to children (Romans 5:10–11; 2 Corinthians 5:18–20).",
  },
  {
    color: ROSE,
    title: "Why the Cross Was Necessary",
    body: 'Christian theology insists the cross was not an accident or merely a martyrdom. It was necessary — but why? The necessity flows from the character of God: God is both perfectly holy (he cannot overlook sin) and perfectly loving (he will not abandon sinners). The cross is the place where divine justice and divine love meet. God does not simply forgive by divine fiat, overlooking sin; he bears its cost himself. As 2 Corinthians 5:21 puts it: "For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God."',
  },
];

const PENAL_TEXTS = [
  { ref: "Isaiah 53:5-6", note: "He was pierced for our transgressions, crushed for our iniquities; the punishment that brought us peace was on him. The foundational OT servant passage applied to Christ throughout the NT." },
  { ref: "Romans 3:25-26", note: "God presented Christ as a propitiation by his blood — to demonstrate his justice, because in his forbearance he had left sins unpunished. Both God’s justice and his justification of sinners are vindicated at the cross." },
  { ref: "2 Corinthians 5:21", note: 'The Great Exchange: God made Christ "to be sin" so that we might become the righteousness of God. Our sin imputed to Christ; his righteousness imputed to us.' },
  { ref: "Galatians 3:13", note: "Christ became a curse for us, redeeming us from the curse of the law. The cross reverses the Deuteronomic curse that hung over covenant-breaking Israel and, in Israel’s representative, over all humanity." },
];

const PENAL_SECTIONS = [
  {
    color: GREEN,
    title: "Anselm’s Satisfaction Theory",
    body: 'Anselm of Canterbury (1033–1109) provided the first systematic account of why the cross was necessary in his Cur Deus Homo ("Why Did God Become Man?"). His argument: God’s honor was infinitely offended by sin. Infinite satisfaction was required, which finite humans could not provide. The God-man, being both human (able to owe the debt) and divine (able to pay infinite satisfaction), alone could satisfy God’s honor. The Reformation developed this into penal substitution: not merely honor-satisfaction but the bearing of penal consequences.',
  },
  {
    color: BLUE,
    title: "The Reformation Development",
    body: "Calvin and the Reformed tradition sharpened Anselm’s framework by grounding it in criminal justice rather than feudal honor. Sin is not merely an affront to God’s honor but a violation of his law that demands punishment. Christ, as our substitute, bore the specific penalty we deserved — divine wrath, condemnation, and death. This became the dominant framework in Protestant soteriology and remains central in Anglican (Thirty-Nine Articles), Reformed, and many Baptist traditions.",
  },
  {
    color: GOLD,
    title: "John Stott’s Defense",
    body: 'In The Cross of Christ (1986), John Stott offered the most influential modern defense. His key move: penal substitution is not divine child abuse because the Father does not punish an unwilling third party. Rather, God himself — in the person of his Son — bears the penalty he imposes. It is the self-substitution of God. "The essence of sin is man substituting himself for God, while the essence of salvation is God substituting himself for man."',
  },
  {
    color: ROSE,
    title: "The Steve Chalke Controversy and Responses",
    body: 'In 2003, Steve Chalke called penal substitution "cosmic child abuse," igniting a major evangelical debate. Critics argued the doctrine presents the Father as an angry God who punishes the Son. Defenders (Steve Jeffrey, Mike Ovey, Andrew Sach in Pierced for Our Transgressions) replied: (1) The Trinity acts in unity — the Son voluntarily offers himself; (2) this is not punishment of an innocent third party but the incarnate Son identifying with sinners; (3) the doctrine upholds God’s love precisely because God bears the cost himself. The debate clarified that penal substitution must be held within a Trinitarian and voluntary framework.',
  },
];

const CHRISTUS_VICTOR_SECTIONS = [
  {
    color: TEAL,
    title: "Gustaf Aulén’s Recovery (1931)",
    body: "Swedish theologian Gustaf Aulén’s Christus Victor (1931) recovered what he argued was the dominant patristic view: the cross as cosmic drama in which Christ defeats the powers of sin, death, and the devil. Against the Latin tradition’s legal categories, Aulén emphasized the dramatic and military imagery of the NT: the cross is a conquest, not merely a transaction.",
  },
  {
    color: PURPLE,
    title: "The Ransom Theory: Origen and Gregory of Nyssa",
    body: 'Early fathers including Origen and Gregory of Nyssa spoke of Christ’s death as a ransom paid to the devil — God tricked the devil by offering the sinless Christ, whose sinlessness the devil could not hold. Gregory of Nyssa used the image of a fishhook baited with Christ’s humanity but with his divinity as the hook. Most theologians today regard "ransom paid to the devil" as a metaphor pressed too literally. The ransom language in Mark 10:45 and 1 Timothy 2:6 does not specify to whom the ransom is paid.',
  },
  {
    color: GREEN,
    title: "The Drama of Redemption",
    body: 'Colossians 2:15 captures the Christus Victor vision: "He disarmed the rulers and authorities and put them to open shame, by triumphing over them in him." The cross is a public spectacle of Christ’s victory over spiritual powers. 1 Corinthians 15:54–57 celebrates the resurrection as the moment when "death is swallowed up in victory" and "the sting of death is sin, and the power of sin is the law" are overcome.',
  },
  {
    color: GOLD,
    title: "The Resurrection as Central",
    body: "A distinctive feature of Christus Victor is that the resurrection is not an afterthought to the cross but its completion. The resurrection is the public vindication of Christ’s victory — death could not hold him. N.T. Wright argues this is the dominant framework of the Gospels: Jesus goes to the cross as the Messiah who takes on himself the powers of sin, death, and the age of exile, and the resurrection declares his victory.",
  },
  {
    color: BLUE,
    title: "Why This Resonates with the NT Narrative",
    body: 'The NT is saturated with the language of victory, liberation, and new creation. Hebrews 2:14–15 says Christ destroyed "him who has the power of death, that is, the devil, and deliver all those who through fear of death were subject to lifelong slavery." Romans 8:2 speaks of the Spirit as the liberating power that sets us free from "the law of sin and death." The Christus Victor framework connects the cross to the entire arc of the cosmic story.',
  },
];

const OTHER_THEORIES = [
  {
    color: PURPLE,
    title: "Moral Influence / Exemplar (Abelard)",
    body: 'Peter Abelard (1079–1142) proposed that the cross is primarily a demonstration of God’s love that moves sinners to repentance and transformation. "Our redemption through the suffering of Christ is that deeper love within us which not only frees us from slavery to sin, but also secures for us the true liberty of the children of God." The cross changes us subjectively by showing us how much God loves us. The objection: if the problem is only our lack of love, why was death necessary? An example of love need not involve crucifixion.',
  },
  {
    color: TEAL,
    title: "Governmental Theory (Hugo Grotius)",
    body: 'Hugo Grotius (1583–1645) proposed a middle path. God is not a private creditor who must be satisfied but a moral governor who sets laws for the good of his moral universe. Christ’s death is not penal satisfaction but a public demonstration that sin has consequences — it upholds the moral order so that God can justly pardon without undermining his government. God "relaxes" the requirement of strict penal justice, accepting Christ’s suffering as a fitting substitute. This became influential in Arminian and Wesleyan traditions.',
  },
  {
    color: ROSE,
    title: "René Girard’s Scapegoat Theory",
    body: "Philosopher René Girard (1923–2015) proposed that human societies are founded on mimetic rivalry and scapegoating: communities discharge their violence onto a victim, whose death temporarily restores social peace. The cross exposes and ends this cycle: Jesus is the ultimate scapegoat who reveals the mechanism for what it is. The resurrection vindicates the victim. Unlike pagan sacrifice, the cross does not endorse sacred violence — it exposes and undoes it. Girard saw the Gospels as the uniquely anti-sacrificial text that unmasks human violence.",
  },
  {
    color: GREEN,
    title: "N.T. Wright’s Covenant Faithfulness Approach",
    body: "N.T. Wright argues that the cross must be understood within the story of Israel. Jesus is the Messiah who recapitulates Israel’s story: he takes on himself Israel’s exile and its curse (Galatians 3:13), bears the penalty that stood against Israel (and through Israel, all humanity), and through his resurrection inaugurates the new covenant and new creation. The cross is not primarily a legal transaction but the climactic act of covenant faithfulness: God, in the person of his Messiah, does for Israel and the world what Israel could not do for itself.",
  },
  {
    color: GOLD,
    title: "The Kaleidoscope / Multi-Model Approach",
    body: "Many contemporary theologians — including Scot McKnight (A Community Called Atonement) and Joel Green — argue that no single metaphor exhausts the meaning of the cross. The NT itself uses legal (justification, condemnation), commercial (redemption, ransom), relational (reconciliation), military (victory, disarmament), cultic (sacrifice, propitiation), and familial (adoption) imagery. These are not competing theories but facets of a reality that exceeds any single framework. The kaleidoscope approach does not relativize the theories but holds them together.",
  },
];

const CROSS_LIFE_SECTIONS = [
  {
    color: GREEN,
    title: "The Cross and Forgiveness",
    body: 'How does Christ’s death ground human forgiveness? Ephesians 4:32 links the two: "Forgiving one another, as God in Christ forgave you." The cross establishes a pattern: forgiveness is costly. God does not merely wave away sin; he absorbs its cost. This is the model for human forgiveness — not pretending the wrong did not happen but bearing its cost rather than passing it on. The cross prevents cheap grace (Bonhoeffer) from cheap forgiveness.',
  },
  {
    color: BLUE,
    title: "The Cross and Justice",
    body: "A persistent question: does substitution require justice or undermine it? Critics argue it undermines justice (a crime is committed but someone else pays the penalty). Defenders argue it is the only account that truly satisfies justice — the penalty is not waived but paid. The cross simultaneously vindicates both God’s justice and his mercy (Romans 3:26). In pastoral practice, atonement theology produces neither a sentimental God who ignores sin nor a harsh God who cannot forgive — but a God who takes sin with ultimate seriousness and deals with it at ultimate cost.",
  },
  {
    color: TEAL,
    title: "The Cross and Suffering",
    body: "The cross speaks to suffering in two modes: solidarity and substitution. In solidarity: God in Christ has suffered — the cross means God is not a distant observer of human pain. He entered it. In substitution: Christ’s suffering is unique and unrepeatable — he bore what we deserved so that our suffering is not punitive judgment but a path of formation. Romans 8:17 connects sharing in Christ’s sufferings with sharing in his glory.",
  },
  {
    color: PURPLE,
    title: "The Eucharist as Proclamation",
    body: 'The Lord’s Supper is the church’s ongoing proclamation of the cross. 1 Corinthians 11:26: "For as often as you eat this bread and drink the cup, you proclaim the Lord’s death until he comes." The elements — broken bread and poured-out cup — embody the substitutionary language: his body broken for you, his blood shed for you. The Table is not merely a memorial but a participation (koinonia) in the body and blood of Christ (1 Corinthians 10:16).',
  },
  {
    color: GOLD,
    title: "“The Word of the Cross Is Foolishness” (1 Corinthians 1:18)",
    body: 'Paul acknowledges the cross is scandalous: "For the word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God." The cross subverts human wisdom (a crucified Messiah was a contradiction in terms) and human power (the cross is weakness, not domination). The theology of the cross (Luther’s theologia crucis) insists that God reveals himself in hiddenness, weakness, and suffering — not in glory, power, and triumphalism. This shapes preaching (1 Corinthians 2:2), pastoral care (2 Corinthians 4:10–12), and Christian ethics (Philippians 2:5–8).',
  },
];

const VIDEOS = [
  { videoId: "E-7oIGi_vLo", title: "Tim Keller — The Meaning of the Cross" },
  { videoId: "jmP1pVrSCcc", title: "NT Wright on Atonement Theories" },
  { videoId: "Zb2jEEnCi6k", title: "John Piper on Penal Substitution" },
];

export default function ChristianAtonementGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("what-is-atonement");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 800, marginBottom: "0.5rem", lineHeight: 1.2 }}>
            Christian Atonement Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            What the cross actually accomplished and why it matters &mdash; the major theories of atonement, their biblical foundations, and how they speak to Christian life.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: 20,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.85rem",
                background: tab === t.id ? GREEN : CARD,
                color: tab === t.id ? "#fff" : MUTED,
                transition: "all 0.2s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* WHAT IS ATONEMENT */}
        {tab === "what-is-atonement" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GOLD}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>What Is Atonement?</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                Atonement stands at the heart of Christianity: how does the death of Jesus of Nazareth accomplish the salvation of the world? The biblical writers do not offer a single technical answer but a symphony of images &mdash; sacrifice, substitution, redemption, victory, reconciliation. Each captures something true about what Christ accomplished at the cross.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {WHAT_IS_SECTIONS.map(s => (
                <div key={s.title} style={{ background: CARD, border: `1px solid ${s.color}30`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${s.color}` }}>
                  <div style={{ fontWeight: 700, color: s.color, marginBottom: "0.4rem" }}>{s.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PENAL SUBSTITUTION */}
        {tab === "penal-substitution" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>Penal Substitution</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                The dominant Protestant view: Christ bore the punishment (penalty) that sinners deserved. God is perfectly holy &mdash; sin demands a penalty. Christ, in our place, absorbs divine wrath so that God can justly forgive. This is not the whole story of atonement, but most evangelical theologians regard it as its indispensable center.
              </p>
            </div>

            <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>Key Texts</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {PENAL_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{t.note}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {PENAL_SECTIONS.map(s => (
                <div key={s.title} style={{ background: CARD, border: `1px solid ${s.color}30`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${s.color}` }}>
                  <div style={{ fontWeight: 700, color: s.color, marginBottom: "0.4rem" }}>{s.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHRISTUS VICTOR */}
        {tab === "christus-victor" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${TEAL}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${TEAL}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>Christus Victor</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                Gustaf Aul&eacute;n&rsquo;s 1931 recovery of the patristic view: the cross as the defeat of the powers of sin, death, and the devil. Where penal substitution focuses on guilt and its legal consequences, Christus Victor focuses on bondage and its cosmic defeat. The resurrection is not a postscript but the declaration of victory.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CHRISTUS_VICTOR_SECTIONS.map(s => (
                <div key={s.title} style={{ background: CARD, border: `1px solid ${s.color}30`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${s.color}` }}>
                  <div style={{ fontWeight: 700, color: s.color, marginBottom: "0.4rem" }}>{s.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OTHER THEORIES */}
        {tab === "other-theories" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${PURPLE}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: PURPLE }}>Other Atonement Theories</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                No single theory exhausts the meaning of the cross. Across two millennia, theologians have approached the mystery from multiple angles &mdash; each capturing something true. These theories are not mutually exclusive; the most faithful account holds them in conversation.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {OTHER_THEORIES.map(s => (
                <div key={s.title} style={{ background: CARD, border: `1px solid ${s.color}30`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${s.color}` }}>
                  <div style={{ fontWeight: 700, color: s.color, marginBottom: "0.4rem" }}>{s.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* THE CROSS AND CHRISTIAN LIFE */}
        {tab === "cross-and-life" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BLUE}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${BLUE}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: BLUE }}>The Cross and Christian Life</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                Atonement theology is not merely academic. The doctrine of the cross shapes how Christians preach, pray, forgive, suffer, worship, and act in the world. The cross is not only the center of Christian theology; it is the pattern of Christian existence.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CROSS_LIFE_SECTIONS.map(s => (
                <div key={s.title} style={{ background: CARD, border: `1px solid ${s.color}30`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${s.color}` }}>
                  <div style={{ fontWeight: 700, color: s.color, marginBottom: "0.4rem" }}>{s.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching on Atonement</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: "0.85rem", marginTop: "0.5rem", textAlign: "center" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
