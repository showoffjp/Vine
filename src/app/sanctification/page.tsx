"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "views" | "means" | "struggle" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "definitive",
    title: "Definitive Sanctification",
    verse: "Romans 6:1-11 / 1 Corinthians 6:11",
    body: "Before progressive sanctification can be rightly understood, definitive sanctification must be grasped. Romans 6:1-11 declares that the believer has already died to sin — not is dying, not should die, but has died. Paul grounds the imperative to stop sinning in an accomplished indicative: 'You also must consider yourselves dead to sin' (6:11). This is not fiction but forensic and spiritual reality. 1 Corinthians 6:11 seals the point with three aorist past-tense verbs: 'you were washed, you were sanctified, you were justified.' The indicative precedes and enables the imperative. The one who died to sin is, in a decisive sense, dead to it. Moral effort flows from identity, not toward it.",
  },
  {
    id: "progressive",
    title: "Progressive Sanctification",
    verse: "Philippians 2:12-13 / 2 Peter 3:18 / 2 Corinthians 3:18",
    body: "Alongside definitive sanctification, Scripture calls believers into a lifelong process of moral and spiritual transformation. Philippians 2:12-13 commands believers to 'work out your salvation with fear and trembling' — the same salvation they already possess is to be worked out in daily obedience. 2 Peter 3:18 closes the letter with a summary exhortation: 'grow in the grace and knowledge of our Lord and Savior Jesus Christ.' Growth is expected, not optional. 2 Corinthians 3:18 provides the mechanism and the goal: 'we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another.' Transformation is gradual, Spirit-mediated, and glory-oriented. The process runs the full length of the Christian life and is never complete in this age.",
  },
  {
    id: "glorification",
    title: "Final Glorification",
    verse: "Romans 8:29-30 / 1 John 3:2 / Philippians 1:6",
    body: "Sanctification has an eschatological terminus. Romans 8:29-30 presents the golden chain: foreknown, predestined, called, justified, and finally glorified — the last link is given in the past tense, such is its certainty. 1 John 3:2 supplies the content of glorification: 'when he appears we shall be like him, because we shall see him as he is.' The vision of Christ produces final conformity to Christ. Philippians 1:6 grounds present perseverance in future certainty: 'he who began a good work in you will bring it to completion at the day of Jesus Christ.' God does not abandon projects. The completion of sanctification is not achieved by human striving alone but by divine faithfulness at the return of Christ, when the struggle ends, the flesh is redeemed, and holiness is perfected.",
  },
  {
    id: "spirit",
    title: "The Spirit's Role",
    verse: "Galatians 5:16-25 / Romans 8:13",
    body: "Sanctification is pneumatological — it is the work of the Holy Spirit. Galatians 5:16-25 presents the Spirit as the source of the fruit (love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control) and the power by which the flesh is overcome: 'walk by the Spirit, and you will not gratify the desires of the flesh' (5:16). The fruit is not produced by effort applied to a list but by the Spirit working in the life of the one who walks with him. Romans 8:13 sharpens this: 'if by the Spirit you put to death the deeds of the body, you will live.' The Spirit is not a supplement to human willpower — he is the agent. Apart from him, the deeds of the body are not put to death; they are merely managed.",
  },
  {
    id: "effort",
    title: "Human Effort and Grace",
    verse: "Philippians 2:12-13",
    body: "Philippians 2:12-13 holds human effort and divine grace in the same sentence: 'work out your salvation with fear and trembling, for it is God who works in you to will and to act in order to fulfill his good purpose.' The 'for' is crucial — the reason to work is that God is working. This is not a contradiction but a cooperation. Theologians call it synergism, but it is not a symmetrical cooperation: God's contribution is prior, inward, and foundational; the believer's response is real but derivative. Jonathan Edwards argued that God's sovereignty does not eliminate human agency but rather grounds and enables it — the more fully God works, the more genuinely the will is engaged. 'Work out' is not 'work for'; the salvation being worked out is already possessed, not being earned.",
  },
  {
    id: "imperfectibility",
    title: "The Imperfectibility Problem",
    verse: "1 John 1:8 / Romans 7",
    body: "1 John 1:8 is a standing rebuke to perfectionism: 'if we claim to be without sin, we deceive ourselves, and the truth is not in us.' The claim to sinlessness is not a spiritual achievement — it is a form of self-deception. Romans 7 complicates the picture further: 'I do not do the good I want, but the evil I do not want is what I keep on doing' (7:19). The interpretive debate over whether Romans 7 describes Paul as a believer or a pre-Christian is significant, but the pastoral reality holds either way — the experience of moral failure is a Christian experience, not only a pre-Christian one. Perfectionism is dangerous precisely because it either breeds pride when one imagines success or despair when the gap between ideal and reality becomes visible. The biblical standard is not sinlessness in this life but ongoing repentance and ongoing faith.",
  },
];

const VIEWS = [
  {
    id: "reformed",
    label: "Reformed / Calvinistic",
    claim: "God sovereignly works through means — Word, sacrament, and Spirit — to produce holiness in the elect. The Christian cooperates genuinely, but God is primary and indispensable.",
    proponents: "R.C. Sproul, John Owen, Louis Berkhof, John Calvin",
    scripture: "Philippians 2:12-13; Ezekiel 36:26-27; Westminster Confession ch. 13",
    strength: "Keeps the initiative firmly with God and guards against moralism. The believer's effort is real but never meritorious — it flows from regeneration and is sustained by grace.",
    weakness: "Can be misread as passive; critics argue it underemphasizes the urgency of human striving and may discourage the spiritual disciplines if not carefully balanced.",
  },
  {
    id: "wesleyan",
    label: "Wesleyan / Holiness",
    claim: "Entire sanctification is possible as a second definite work of grace after conversion — a crisis experience in which the power (though not the presence) of sin is broken, enabling perfect love toward God and neighbor.",
    proponents: "John Wesley, Phoebe Palmer, Charles Finney",
    scripture: "1 Thessalonians 5:23; 1 John 4:18; Matthew 22:37-38",
    strength: "Takes seriously the biblical call to holiness and refuses to accept ongoing sinful patterns as inevitable. The aspiration toward love-perfection is genuinely motivating.",
    weakness: "The claim to entire sanctification is difficult to reconcile with 1 John 1:8 and the ongoing experience of sin in even the most devout. The 'second work' model can create a two-tier Christianity.",
  },
  {
    id: "keswick",
    label: "Keswick / Higher Life",
    claim: "The victorious Christian life is available through the 'deeper work' of surrender and passive reception. The key is not trying harder but yielding fully — 'let go and let God.'",
    proponents: "Hannah Whitall Smith, Andrew Murray, Evan Hopkins",
    scripture: "Romans 6:11-13; Galatians 2:20",
    strength: "Rightly identifies the danger of self-reliant striving and points to the necessity of dependence on the Spirit. The emphasis on surrender is genuinely biblical.",
    weakness: "The passivity of the 'let go' language misreads the biblical call to active, Spirit-empowered effort. The New Testament commands believers to fight, run, press on, and put to death — not merely to yield.",
  },
  {
    id: "lutheran",
    label: "Lutheran",
    claim: "The believer is simul justus et peccator — simultaneously justified and sinner. The law convicts of sin and drives to the gospel; the gospel liberates and motivates love. The 'third use of the law' as a guide for the regenerate is debated.",
    proponents: "Martin Luther, C.F.W. Walther, Gerhard Forde",
    scripture: "Romans 7:14-25; Galatians 3:24; Romans 3:21-26",
    strength: "The law/gospel distinction guards against moralism and keeps the cross central. The simul is honest about the ongoing reality of sin in the believer's life.",
    weakness: "Some Lutheran theologians so emphasize the simul that growth in holiness is underplayed. The rejection of the third use of the law by some Lutherans can leave the moral life without adequate structure.",
  },
  {
    id: "orthodox",
    label: "Eastern Orthodox Theosis",
    claim: "Salvation is participation in the divine nature (2 Peter 1:4) — deification, or theosis. The goal of the Christian life is union with God through the uncreated divine energies, not merely forgiveness or moral improvement.",
    proponents: "Gregory Palamas, Maximus the Confessor, Alexander Schmemann",
    scripture: "2 Peter 1:4; John 17:21-23; 2 Corinthians 3:18",
    strength: "Recovers the patristic vision of salvation as participation in divine life. Union with God is a richer frame than mere legal acquittal, and it accounts for the depth of transformation the New Testament envisions.",
    weakness: "The Palamite distinction between essence and energies is philosophically contested. Western theology has largely missed this tradition, which means engagement requires significant conceptual translation.",
  },
];

type MeansCategory = "Word" | "Prayer" | "Community" | "Disciplines" | "Sacraments";

interface MeansItem {
  category: MeansCategory;
  name: string;
  description: string;
}

const MEANS_ITEMS: MeansItem[] = [
  { category: "Word", name: "Bible Reading", description: "Daily, disciplined reading of Scripture exposes the mind to the full counsel of God and renews it over time. The practice itself — not merely the insights extracted — is formative." },
  { category: "Word", name: "Scripture Memorization", description: "Committing Scripture to memory makes the Word an internal resource available in moments of temptation, grief, or confusion. Psalm 119:11 points to this directly." },
  { category: "Word", name: "Expository Preaching", description: "Regular sitting under faithful preaching that works through Scripture passage by passage forms the Christian in the shape of the biblical narrative and corrects doctrinal drift." },
  { category: "Word", name: "Biblical Meditation", description: "Meditation in the biblical sense is not emptying the mind but filling it — returning repeatedly to a passage, turning it over, letting it address the particular circumstances of the day." },
  { category: "Prayer", name: "Daily Prayer", description: "Structured daily prayer — morning and evening — anchors the rhythms of the day in dependence on God and cultivates the habit of speaking honestly to him." },
  { category: "Prayer", name: "The Examen", description: "The Ignatian Examen is a twice-daily prayerful review of the previous hours: where was God present? Where did I resist his grace? It develops a sensitivity to the Spirit's movements." },
  { category: "Prayer", name: "Intercessory Prayer", description: "Praying for others trains the heart away from self-preoccupation and cultivates love. What you pray for consistently, you tend to care about." },
  { category: "Prayer", name: "Praying the Psalms", description: "The Psalms supply a vocabulary for the full range of human experience — lament, praise, confession, trust — and praying them teaches us to address God truthfully." },
  { category: "Community", name: "Church Membership", description: "Committed, covenanted membership in a local congregation is not optional for sanctification. The body is the primary context in which the graces of the Spirit are exercised and tested." },
  { category: "Community", name: "Confession to Another", description: "James 5:16 commands mutual confession of sin. Confessing sin to a trusted brother or sister breaks its power to remain secret and hidden, and invites prayer and accountability." },
  { category: "Community", name: "Accountability", description: "Regular, honest conversation with another believer about the state of one's soul — sin, temptation, spiritual life — creates structured vulnerability that resists the tendency to self-deception." },
  { category: "Community", name: "Spiritual Direction", description: "A spiritual director is a trained companion who helps another attend to the movements of God in their life. The practice is ancient, deeply formative, and increasingly recovered in evangelical contexts." },
  { category: "Community", name: "Breaking Bread Together", description: "Shared meals in the Christian community — not only the Lord's Supper but ordinary table fellowship — are formative. They embody the unity of the body and practice the hospitality that belongs to the new creation." },
  { category: "Disciplines", name: "Fasting", description: "Fasting from food trains the will and reveals the degree to which bodily appetite governs the soul. It is not meritorious but it creates space for prayer and loosens the grip of comfort." },
  { category: "Disciplines", name: "Silence and Solitude", description: "Extended periods of silence and aloneness surface the noise of the soul that is normally drowned out. They create the conditions in which God's voice can be heard and the self honestly examined." },
  { category: "Disciplines", name: "Sabbath-Keeping", description: "Weekly rest is a rhythmic act of trust — ceasing work declares that God sustains, not our productivity. It also restores the human person against the deformation of overwork and restlessness." },
  { category: "Disciplines", name: "Simplicity", description: "Voluntary simplicity in material life resists the formation patterns of consumer culture and practices contentment. It liberates attention and resources for what actually matters." },
  { category: "Disciplines", name: "Service", description: "Regular, unglamorous service of others — often unseen — forms humility and counteracts the inward curve of the sinful self. It is one of the few disciplines that is inherently other-directed." },
  { category: "Sacraments", name: "Baptism", description: "Baptism is performed once and is the formative initiation into the body of Christ. Its ongoing power lies in returning to it as a memory — 'I was baptized' grounds identity in grace, not performance." },
  { category: "Sacraments", name: "The Lord's Supper", description: "Unlike baptism, the Lord's Supper is repeated — it is recurring nourishment. Each celebration proclaims the Lord's death, anticipates his return, and feeds the soul on the grace it signifies." },
  { category: "Sacraments", name: "Liturgical Worship", description: "Structured liturgy — even in non-liturgical traditions — forms the worshiper through repetition. The shape of the service, the confession of sin, the words of assurance, and the benediction all act on the whole person over time." },
];

const MEANS_CATEGORIES: MeansCategory[] = ["Word", "Prayer", "Community", "Disciplines", "Sacraments"];

const STRUGGLE_ITEMS = [
  {
    id: "romans7",
    title: "Romans 7: Paul's Inner Conflict",
    verse: "Romans 7:15-25",
    body: "Romans 7:15-25 contains one of the most debated passages in the New Testament: 'I do not do the good I want, but the evil I do not want is what I keep on doing.' The interpretive question is whether Paul is describing his pre-conversion experience, his post-conversion experience, or an ideal figure representing Israel under the law. Douglas Moo argues persuasively that the present-tense verbs and the 'I' language point to Paul as a believer experiencing the real tension between the Spirit and the remaining flesh. Others, including Tom Schreiner, disagree. The pastoral comfort, however, does not entirely depend on resolving the exegetical question: Scripture acknowledges that the experience of moral failure and internal conflict is real, named, and not a sign of being outside grace.",
  },
  {
    id: "sin-of-saints",
    title: "The Sin of the Saints",
    verse: "Genesis 20; 2 Samuel 11; Mark 14:66-72",
    body: "The heroes of Scripture sin — dramatically, painfully, with real consequences. Abraham lies about Sarah to Abimelech, endangering her. David commits adultery with Bathsheba and then arranges the murder of her husband Uriah. Peter, who declared he would never deny Jesus, denies him three times within hours of the arrest. These are not peripheral figures. The Scripture's unflinching record of the failures of the faithful is a form of theological instruction: sainthood does not mean sinlessness, and the greatness of a person in God's story does not protect them from catastrophic moral failure. What distinguishes the saints is not the absence of sin but the presence of repentance.",
  },
  {
    id: "flesh-spirit",
    title: "The Flesh and the Spirit",
    verse: "Galatians 5:17",
    body: "Galatians 5:17 names the conflict directly: 'For the desires of the flesh are against the Spirit, and the desires of the Spirit are against the flesh, for these are opposed to each other, to keep you from doing the things you want to do.' The conflict is not between the body and the soul — as if matter were evil and spirit were good. It is between the old nature (the flesh — the self as it was before regeneration, still pressing its claims) and the new nature animated by the Spirit. The 'works of the flesh' listed in 5:19-21 include not only sexual sins but also 'enmity, strife, jealousy, fits of anger, rivalries, dissensions, divisions' — the list is a diagnostic for the whole range of ways the old self reasserts itself.",
  },
  {
    id: "repentance",
    title: "Repentance as Lifestyle",
    verse: "Acts 2:38; Matthew 3:2",
    body: "Martin Luther opened the Ninety-Five Theses with a thesis that has not received sufficient attention: 'When our Lord and Master Jesus Christ said, Repent, he willed the entire life of believers to be one of repentance.' Repentance is not a one-time act performed at conversion and then left behind as one 'moves on' to more advanced Christianity. It is an ongoing posture — a continuous turning from self toward God. The person who thinks they have repented enough has not yet understood either their own sin or the grace that receives it. Repentance is not grief that leads to paralysis; it is the turn that leads to life. It is, properly understood, a form of joy — the joy of the prodigal returning.",
  },
  {
    id: "long-defeat",
    title: "The Long Defeat",
    verse: "Hebrews 12:1-3",
    body: "J.R.R. Tolkien described his own vocation as fighting the 'long defeat' — the sense that one is working against forces that will ultimately overwhelm, that every victory is temporary and costly. The phrase captures something true about the experience of sanctification in this age. Progress is not linear. The believer who has grown significantly in patience may find themselves blindsided by a failure in a domain they thought settled. Setbacks are not necessarily failures of faith — they may be the normal texture of formation. Hebrews 12:1-3 does not promise that the race is short or easy; it promises that Jesus, who endured the cross, is the pioneer and perfecter of faith. The long arc bends toward completion, but the arc is genuinely long.",
  },
  {
    id: "glory",
    title: "Glory and the End of the Struggle",
    verse: "Romans 8:18 / 2 Corinthians 4:17",
    body: "The struggle is real, but it is not the final word. Romans 8:18 sets the scale: 'I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.' 2 Corinthians 4:17 is, if anything, more striking: 'this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison.' Paul's afflictions were not light or momentary by ordinary standards — beatings, shipwreck, imprisonment, rejection. And yet, measured against eternity, that is how they appear. The eschatological hope is not a sentimental comfort added on top of the struggle; it is the weight that ballasts the whole. The believer endures not despite knowing the end but because of knowing it.",
  },
];

function Accordion({
  id,
  title,
  verse,
  body,
  expanded,
  onToggle,
}: {
  id: string;
  title: string;
  verse: string;
  body: string;
  expanded: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        marginBottom: 12,
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => onToggle(id)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div>
          <div style={{ color: TEXT, fontWeight: 600, fontSize: 16, marginBottom: 2 }}>
            {title}
          </div>
          <div style={{ color: GREEN, fontSize: 12, fontFamily: "monospace" }}>{verse}</div>
        </div>
        <div style={{ color: MUTED, fontSize: 20, marginLeft: 16, flexShrink: 0 }}>
          {expanded ? "-" : "+"}
        </div>
      </button>
      {expanded && (
        <div
          style={{
            padding: "0 20px 20px",
            color: MUTED,
            fontSize: 15,
            lineHeight: 1.75,
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 16,
          }}
        >
          {body}
        </div>
      )}
    </div>
  );
}

function ViewDetail({ view }: { view: typeof VIEWS[0] }) {
  return (
    <div style={{ padding: "0 0 0 32px" }}>
      <div style={{ color: GREEN, fontSize: 12, fontFamily: "monospace", marginBottom: 8 }}>
        KEY CLAIM
      </div>
      <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{view.claim}</p>

      <div style={{ color: GREEN, fontSize: 12, fontFamily: "monospace", marginBottom: 8 }}>
        KEY PROPONENTS
      </div>
      <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>{view.proponents}</p>

      <div style={{ color: GREEN, fontSize: 12, fontFamily: "monospace", marginBottom: 8 }}>
        KEY SCRIPTURE
      </div>
      <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>{view.scripture}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
      >
        <div
          style={{
            background: "#0d1f14",
            border: `1px solid #1a3326`,
            borderRadius: 8,
            padding: 16,
          }}
        >
          <div style={{ color: GREEN, fontSize: 12, fontFamily: "monospace", marginBottom: 8 }}>
            STRENGTH
          </div>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{view.strength}</p>
        </div>
        <div
          style={{
            background: "#1a0d1a",
            border: `1px solid #2e1a2e`,
            borderRadius: 8,
            padding: 16,
          }}
        >
          <div style={{ color: PURPLE, fontSize: 12, fontFamily: "monospace", marginBottom: 8 }}>
            WEAKNESS
          </div>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{view.weakness}</p>
        </div>
      </div>
    </div>
  );
}

const CATEGORY_COLORS: Record<MeansCategory, string> = {
  Word: "#3a7d56",
  Prayer: "#6B4FBB",
  Community: "#00AAFF",
  Disciplines: "#FF8800",
  Sacraments: "#FF4488",
};

export default function SanctificationPage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedView, setSelectedView] = useState<string>(VIEWS[0].id);
  const [meansFilter, setMeansFilter] = useState<MeansCategory | "All">("All");

  function toggleAccordion(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const filteredMeans =
    meansFilter === "All" ? MEANS_ITEMS : MEANS_ITEMS.filter((m) => m.category === meansFilter);

  const activeView = VIEWS.find((v) => v.id === selectedView) ?? VIEWS[0];

  const TABS: { key: Tab; label: string }[] = [
    { key: "theology", label: "Theology of Sanctification" },
    { key: "views", label: "Views on Sanctification" },
    { key: "means", label: "Means of Sanctification" },
    { key: "struggle", label: "The Struggle" },
    { key: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: 80, color: TEXT }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "inline-block",
              background: PURPLE + "22",
              border: `1px solid ${PURPLE}44`,
              borderRadius: 6,
              padding: "4px 12px",
              color: PURPLE,
              fontSize: 12,
              fontFamily: "monospace",
              letterSpacing: 2,
              marginBottom: 16,
            }}
          >
            SYSTEMATIC THEOLOGY
          </div>
          <h1
            style={{
              fontSize: 38,
              fontWeight: 700,
              margin: "0 0 12px",
              background: `linear-gradient(90deg, ${TEXT}, ${PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sanctification
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.6, margin: 0, maxWidth: 620 }}>
            The process by which believers are made holy — its theological foundations, historical
            interpretations, practical means, and the honest reality of the ongoing struggle.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 32,
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 10,
            padding: 4,
            flexWrap: "wrap",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                flex: 1,
                minWidth: 120,
                background: tab === t.key ? PURPLE : "transparent",
                border: "none",
                borderRadius: 7,
                padding: "10px 14px",
                color: tab === t.key ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: tab === t.key ? 600 : 400,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: Theology */}
        {tab === "theology" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: 22, fontWeight: 600, marginBottom: 8 }}>
              Theology of Sanctification
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>
              Six foundational doctrinal topics — from the definitive work of God at conversion to
              the eschatological completion of glorification.
            </p>
            {THEOLOGY_ITEMS.map((item) => (
              <Accordion
                key={item.id}
                id={item.id}
                title={item.title}
                verse={item.verse}
                body={item.body}
                expanded={!!expanded[item.id]}
                onToggle={toggleAccordion}
              />
            ))}
          </div>
        )}

        {/* Tab: Views */}
        {tab === "views" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: 22, fontWeight: 600, marginBottom: 8 }}>
              Views on Sanctification
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>
              Five major theological traditions on how sanctification works, who does the work, and
              what the goal is.
            </p>
            <div style={{ display: "flex", gap: 0, alignItems: "flex-start" }}>
              {/* Left list */}
              <div
                style={{
                  width: 220,
                  flexShrink: 0,
                  position: "sticky",
                  top: 24,
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                {VIEWS.map((v, i) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedView(v.id)}
                    style={{
                      width: "100%",
                      background: selectedView === v.id ? PURPLE + "22" : "transparent",
                      border: "none",
                      borderBottom: i < VIEWS.length - 1 ? `1px solid ${BORDER}` : "none",
                      borderLeft: selectedView === v.id ? `3px solid ${PURPLE}` : "3px solid transparent",
                      padding: "14px 16px",
                      color: selectedView === v.id ? TEXT : MUTED,
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: selectedView === v.id ? 600 : 400,
                      textAlign: "left",
                      lineHeight: 1.4,
                    }}
                  >
                    {v.label}
                  </button>
                ))}
              </div>

              {/* Right detail */}
              <div style={{ flex: 1 }}>
                <ViewDetail view={activeView} />
              </div>
            </div>
          </div>
        )}

        {/* Tab: Means */}
        {tab === "means" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: 22, fontWeight: 600, marginBottom: 8 }}>
              Means of Sanctification
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
              The classic spiritual disciplines and practices through which the Spirit works to form
              Christlikeness in the believer.
            </p>

            {/* Category filter */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
              {(["All", ...MEANS_CATEGORIES] as (MeansCategory | "All")[]).map((cat) => {
                const isActive = meansFilter === cat;
                const color = cat === "All" ? GREEN : CATEGORY_COLORS[cat as MeansCategory];
                return (
                  <button
                    key={cat}
                    onClick={() => setMeansFilter(cat)}
                    style={{
                      background: isActive ? color + "22" : "transparent",
                      border: `1px solid ${isActive ? color : BORDER}`,
                      borderRadius: 20,
                      padding: "6px 16px",
                      color: isActive ? color : MUTED,
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Card grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 16,
              }}
            >
              {filteredMeans.map((item) => {
                const catColor = CATEGORY_COLORS[item.category];
                return (
                  <div
                    key={item.name}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 10,
                      padding: 20,
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        background: catColor + "18",
                        border: `1px solid ${catColor}44`,
                        borderRadius: 4,
                        padding: "2px 10px",
                        color: catColor,
                        fontSize: 11,
                        fontFamily: "monospace",
                        letterSpacing: 1,
                        marginBottom: 12,
                      }}
                    >
                      {item.category.toUpperCase()}
                    </div>
                    <div
                      style={{
                        color: TEXT,
                        fontWeight: 600,
                        fontSize: 15,
                        marginBottom: 8,
                      }}
                    >
                      {item.name}
                    </div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab: Struggle */}
        {tab === "struggle" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: 22, fontWeight: 600, marginBottom: 8 }}>
              The Struggle
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>
              The honest theological and pastoral account of moral failure, inner conflict, and the
              endurance required for the long road of sanctification.
            </p>
            {STRUGGLE_ITEMS.map((item) => (
              <Accordion
                key={item.id}
                id={"struggle-" + item.id}
                title={item.title}
                verse={item.verse}
                body={item.body}
                expanded={!!expanded["struggle-" + item.id]}
                onToggle={toggleAccordion}
              />
            ))}
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
                  { videoId: "tJvLyusFOR8", title: "Sanctification (Romans 8:9–17)", channel: "Ligonier Ministries", description: "R.C. Sproul preaches through Romans 8, showing how the Holy Spirit is the agent who leads God's people toward genuine holiness." },
                  { videoId: "1mP8ZCayUAs", title: "Sanctification: Foundations of Systematic Theology", channel: "Ligonier Ministries", description: "R.C. Sproul gives an overview of sanctification, explaining why there is no fast track to holiness and how growth is a Spirit-sustained daily process." },
                  { videoId: "rHCfMj9IQ8Y", title: "The Sovereignty of God", channel: "Desiring God", description: "John Piper explains how God's sovereignty undergirds sanctification — the Christian strives because God is already at work within them." },
                  { videoId: "XQFihHHjIt4", title: "God's Sovereignty and Our Responsibility", channel: "Desiring God", description: "John Piper addresses the apparent tension between divine sovereignty and human effort in the process of sanctification." },
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
      <Footer />
    </div>
  );
}
