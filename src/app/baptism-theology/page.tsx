"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "views" | "practice" | "history" | "videos";

const THEOLOGY_ITEMS = [
  {
    title: "The Great Commission",
    ref: "Matthew 28:19-20",
    body: "Jesus closes Matthew's Gospel with a sweeping command: 'Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to obey everything I have commanded you' (Matt 28:19-20). Baptism is not incidental — it is embedded in the very definition of disciple-making. The Trinitarian formula ('in the name of') is singular, suggesting the three persons share one divine name, and this formula marks entry into that relationship. Why does Jesus command it? Because baptism is the appointed rite of initiation — the moment of public, embodied commitment to Christ and incorporation into his community. The Great Commission is also the Great Context: discipleship precedes baptism in the command structure, giving the credobaptist tradition its primary text, while the full commission (make disciples by baptizing and teaching) is the paedobaptist's reminder that children grow into what the covenant promises.",
  },
  {
    title: "What Baptism Signifies",
    ref: "Romans 6:3-4",
    body: "Paul asks: 'Don't you know that all of us who were baptized into Christ Jesus were baptized into his death? We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life' (Romans 6:3-4). Baptism enacts the gospel in physical form — going under the water images death and burial with Christ; rising from the water images resurrection to new life. Colossians 2:11-12 deepens the imagery by linking baptism to 'the circumcision of Christ,' a spiritual surgery that cuts away the sinful nature. Galatians 3:27 adds the clothing image: 'All of you who were baptized into Christ have clothed yourselves with Christ.' Together these texts present baptism as extraordinarily rich in symbolism: a death, a burial, a resurrection, a stripping, a re-clothing, a circumcision of the heart. Whether one understands these as effecting the realities they depict or publicly testifying to an inner reality already received, the language is striking — the NT never treats baptism as a mere formality.",
  },
  {
    title: "Baptism and the Spirit",
    ref: "Acts 2:38",
    body: "Peter's Pentecost call is direct: 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit' (Acts 2:38). The structure links repentance, baptism, forgiveness, and the Spirit's gift in a single sentence — fueling the sacramental reading that these are inseparable. Yet Acts also shows the Spirit arriving before baptism (Acts 10:44-48, Cornelius's household) and Paul asking the Ephesian disciples whether they received the Spirit when they believed (Acts 19:2), suggesting the Spirit is not mechanically tied to the water. The Pentecostal tradition distinguishes a 'two-stage' experience: initial indwelling at conversion and a subsequent 'baptism in the Spirit' evidenced by tongues (Acts 2:4; 10:46; 19:6). Reformed and Baptist traditions read the Spirit's work as coincident with regenerating faith, with baptism as the outward sign. The tension between these texts has generated ongoing debate about the ordo salutis (order of salvation) and whether 'baptism of the Spirit' is a category distinct from water baptism.",
  },
  {
    title: "The Household Baptisms",
    ref: "Acts 10, 16, 18",
    body: "The NT records several 'household baptisms' that the paedobaptist tradition finds significant. Cornelius 'and all his household' were baptized after the Spirit fell on them (Acts 10:44-48). Lydia 'and the members of her household' were baptized (Acts 16:15). The Philippian jailer 'and all his household' were baptized the same night he believed (Acts 16:33). Crispus, the synagogue leader, 'and his entire household believed in the Lord' and were baptized (Acts 18:8). The argument runs: households in the ancient world included children and infants; if the NT never stops to exclude them, the presumption is that the household sign of the covenant was applied to all household members, as circumcision was in the OT. The credobaptist response: these texts don't actually say infants were present; 'household' can mean adult members; Lydia and the jailer's households are said to have believed and rejoiced (Acts 16:34), suggesting they were capable of doing so. The silence cuts both ways — it neither proves nor disproves infant inclusion — making this one of the most intractable exegetical debates in the baptism discussion.",
  },
  {
    title: "Baptism and Salvation",
    ref: "Acts 2:38; 1 Peter 3:21",
    body: "Some texts seem to connect baptism directly to salvation in ways that cannot be easily dismissed. Acts 2:38 ties baptism to forgiveness; Mark 16:16 says 'whoever believes and is baptized will be saved'; 1 Peter 3:21 states plainly: 'baptism...now saves you.' The question of 'baptismal regeneration' — the teaching that baptism itself effects the new birth — hangs on these texts. Those who affirm it (Catholic, some Lutheran) take the texts at face value: baptism is the instrument of new birth, and grace is genuinely operative in the rite. Those who deny it argue that context changes everything: 1 Peter 3:21 immediately qualifies itself ('not the removal of dirt from the body but the pledge of a clear conscience toward God'), indicating the water is not the operative element but the act of faith it represents. Mark 16:16b notably says 'whoever does not believe will be condemned' — not 'whoever is not baptized,' suggesting belief is the decisive element. Most evangelical traditions hold that baptism is not the cause of salvation but the expected, immediate outward act of a person already regenerated by faith.",
  },
  {
    title: "Baptism as Covenant Sign",
    ref: "Colossians 2:11-12",
    body: "The Reformed argument for infant baptism rests on covenant theology: God structures redemptive history through covenants that have a family/community dimension, and each covenant has an initiatory sign. Circumcision was the sign of the Abrahamic covenant, applied to all male infants in believing households (Genesis 17:12). Colossians 2:11-12 links 'the circumcision of Christ' with baptism, suggesting baptism is the new covenant counterpart to the old covenant's circumcision. If so, the question becomes: does the new covenant extend the covenant sign to the children of believers as the old covenant extended circumcision? The paedobaptist says yes — the covenant community is still familial, and children of believers are 'holy' (set apart, 1 Corinthians 7:14). The credobaptist says no — the new covenant is explicitly a covenant of those who personally know the Lord (Jeremiah 31:34), and unlike circumcision (applied at birth), baptism follows repentance and faith. The debate ultimately turns on whether the new covenant is structurally continuous with the old in its membership principles or represents a decisive shift to a regenerate-only community.",
  },
];

const VIEWS = [
  {
    id: "regeneration",
    label: "Baptismal Regeneration",
    subtitle: "Catholic, some Lutheran",
    claim: "Baptism effects regeneration ex opere operato — the sacrament works by the performance of the act itself, not by the merit of the minister or recipient. Water baptism is the ordinary instrument of new birth, removing original sin and incorporating the baptized into the church.",
    proponent: "Council of Trent; Luther's Small Catechism",
    scripture: "Acts 2:38; 1 Peter 3:21; John 3:5",
    strength: "Takes the biblical texts at face value without softening their direct connection between water and salvation. Maintains the objectivity of God's grace — salvation does not depend on the quality of one's subjective experience.",
    weakness: "Appears to divorce grace from faith, or at least to locate saving grace in a physical act rather than in personal trust. The NT elsewhere grounds justification in faith alone (Romans 4; Galatians 2-3), and 1 Peter 3:21 itself qualifies the saving work as 'the pledge of a clear conscience,' pointing to faith.",
  },
  {
    id: "paedo",
    label: "Covenant / Infant Baptism",
    subtitle: "Paedobaptism",
    claim: "Infants of believing parents receive the covenant sign of baptism because the covenant community is familial. As circumcision was applied to infant males in Abraham's household, so baptism is applied to the children of believers. The sign does not guarantee salvation but marks covenant membership and the promise of grace.",
    proponent: "John Calvin; R.C. Sproul; Tim Keller",
    scripture: "Colossians 2:11-12; Genesis 17:7-12; Acts 2:39; Household baptisms",
    strength: "Covenantal logic is internally consistent and historically robust — the church has practiced infant baptism since at least the early third century. Maintains the visible church as a covenant community rather than a gathered community of the already-regenerate.",
    weakness: "The NT never explicitly shows an infant being baptized. The NT order — repent, believe, be baptized — consistently presupposes a faith response that infants cannot give. The new covenant may represent a structural shift to a personally-known-Lord membership (Jeremiah 31:34).",
  },
  {
    id: "credo",
    label: "Believer's Baptism",
    subtitle: "Credobaptism",
    claim: "Only professing believers are legitimate candidates for baptism. Baptism is the public declaration of personal faith in Christ — the believer's first act of obedience, their identification with Christ's death and resurrection, and their entry into the local church. It does not convey saving grace but testifies to grace already received.",
    proponent: "Baptists; Anabaptists; Many evangelical traditions",
    scripture: "Acts 8:36-38; Matthew 28:19 (disciples → baptize); Acts 2:41",
    strength: "The NT pattern is consistently: hear, repent, believe, then be baptized. Baptism as a public declaration of personal faith is theologically coherent and pastorally clear. Avoids the problem of nominal baptized non-believers in the visible church.",
    weakness: "Must explain away the household baptism texts. Can reduce baptism to a human act of declaration rather than a divine act of grace, making it easier to deprioritize or delay. The NT's silence on unbaptized believers suggests the credobaptist separation of belief from baptism may be a modern imposition.",
  },
  {
    id: "ordinance",
    label: "Baptism as Ordinance",
    subtitle: "Memorial / Testimony",
    claim: "Baptism is an ordinance — a command to be obeyed — rather than a sacrament that conveys grace. It is primarily a public act of testimony and obedience: the believer announces their allegiance to Christ, identifies with his death and resurrection, and witnesses to the watching church and world. Grace is in no sense carried by the water.",
    proponent: "Many Baptist traditions; Zwinglian heritage",
    scripture: "Matthew 28:19; Romans 6:3-4 (as enacted testimony)",
    strength: "Protects against any hint of works-righteousness or magic in baptism. Puts the emphasis squarely on personal testimony and the priority of faith. Pastorally accessible — the meaning is transparent to anyone who witnesses a baptism.",
    weakness: "May undervalue what the NT actually says about baptism's significance. If baptism is only testimony, the strong language of Romans 6, Colossians 2, and 1 Peter 3 is difficult to account for. The term 'ordinance' itself is not biblical; the move to minimize baptism's sacramental weight may swing too far.",
  },
  {
    id: "spirit",
    label: "Spirit Baptism Priority",
    subtitle: "Pentecostal (some traditions)",
    claim: "Water baptism is real and commanded but secondary to Spirit baptism. The decisive experience is baptism in the Holy Spirit — an enduement of power distinct from and subsequent to conversion — which may be evidenced by speaking in tongues. Water baptism is the outward sign; Spirit baptism is the inner reality that gives it meaning.",
    proponent: "Some Pentecostal traditions; Assemblies of God",
    scripture: "Acts 10:44-48 (Spirit before water); Acts 1:5; Acts 2:4",
    strength: "Takes seriously the Spirit's sovereign freedom — Acts 10 shows the Spirit acting before any water was applied, which seems to subordinate the water to the Spirit's initiative. Maintains a high view of the Spirit's direct, experiential work.",
    weakness: "Can lead to undervaluing the outward sign and creating a two-tier Christian experience (the 'Spirit-baptized' and the rest). The 'initial evidence' doctrine (tongues as proof) is contested exegetically. The risk is a spiritualism that makes the communal, embodied sign of water baptism a secondary concern.",
  },
];

const PRACTICE_ITEMS = [
  {
    title: "Modes of Baptism",
    body: "Three modes have been practiced across church history: immersion (going fully under water), sprinkling (aspersion, water sprinkled on the head), and pouring (affusion, water poured over the head). Baptists and many evangelicals argue that immersion is the only valid mode on three grounds: (1) the Greek word baptizo means 'to dip' or 'plunge'; (2) Romans 6's imagery of burial and resurrection requires going under; (3) the NT's outdoor baptisms in rivers (Mark 1:9-10; Acts 8:36-38) imply sufficient water. Paedobaptist traditions respond that baptizo can refer to washings and pourings in Greek literature (Mark 7:4; Luke 11:38), that the mode is not prescribed in the NT, and that the Didache (c. 50-120 AD) permits pouring when immersion is impractical ('if you do not have running water, pour water three times on the head'). The historical evidence shows all three modes in use by the third century, with immersion dominant in the early church and sprinkling becoming standard in medieval Western practice.",
  },
  {
    title: "Who Should Baptize?",
    body: "The standard Protestant and Catholic practice is that ordained ministers (pastors, priests) administer baptism. The reasons are ecclesiological: baptism admits the candidate into the church, and church officers are the church's representative agents. The Great Commission is given to the apostles as commissioned leaders, not to Christians generically. However, emergency baptism — baptizing someone in danger of death when no minister is available — has been permitted across most of the tradition. The Catholic Church teaches that any person, including an unbeliever, can baptize in an emergency with water and the Trinitarian formula and the intention to 'do what the church does.' Protestant traditions vary: most restrict baptism to ordained clergy in normal circumstances, with some allowance for laypersons in genuine emergencies. The deeper question is whether baptism's authority derives from the minister or from Christ's command — a question that divides those who view ministers as acting in persona Christi from those who view them as acting as the community's representatives.",
  },
  {
    title: "Baptism and Church Membership",
    body: "In most evangelical churches, baptism is the gateway to formal membership. The sequence is: profession of faith, then baptism, then reception into membership. Baptism without membership (or long delays between them) is increasingly common but represents a departure from the NT pattern, where baptism seems to be immediate and simultaneous with incorporation into the community (Acts 2:41). The 'open membership' debate concerns whether unbaptized believers can become full members. C.H. Spurgeon, arguably the greatest Baptist preacher of the nineteenth century, practiced open membership at the Metropolitan Tabernacle — he held credobaptism as his conviction but would not bar from membership those from paedobaptist backgrounds who had genuinely been baptized as infants. The debate continues: does baptism gate-keep membership (closed membership) or does it simply represent the expected norm that may have exceptions (open membership)? The ecclesiological stakes are high: a church's membership policy reveals what it thinks the church is.",
  },
  {
    title: "Rebaptism",
    body: "The rebaptism question is practically urgent: what should a Baptist church say to someone who was baptized as an infant but has now come to personal faith and wants to be baptized as a believer? The credobaptist answer is clear: infant baptism was not baptism in the NT sense, because it lacked the required prior faith. Being immersed as a believer is not 'rebaptism' but one's first true baptism. The paedobaptist answer: rebaptism denies the validity of the covenant sign received in infancy and is a form of Anabaptism the church rightly rejected. The historical stakes were real — the Anabaptists of the sixteenth century were executed in part because their practice of 'rebaptism' was seen as heretical and subversive. Today, many paedobaptist churches encourage those who doubt the significance of their infant baptism to pursue confirmation rather than rebaptism, seeing confirmation as the moment of personal public profession. The pastoral dimension is significant: churches should handle this question with care rather than making people feel their faith experience is being dismissed.",
  },
  {
    title: "Preparing for Baptism",
    body: "The Didache (c. 50-120 AD) prescribes a three-day fast before baptism — for both the candidate and the baptizer. Justin Martyr (c. 155 AD) describes a period of instruction and prayer preceding baptism. By the third and fourth centuries, the catechumenate (preparation period) had extended to two or three years for adult converts, culminating in baptism at Easter. This history reveals that the early church took seriously the gravity of what baptism signified and did not rush candidates through it. Modern evangelical practice varies widely: some churches require only a brief class and a pastoral interview; others offer extended discipleship. The spiritual principle behind catechesis is sound regardless of the form — baptism should be understood before it is received. What does the water signify? Why the Trinitarian formula? What does it mean to die and rise with Christ? What community are you entering? Uninformed sacraments are diminished sacraments.",
  },
  {
    title: "Marking the Occasion",
    body: "Baptism should be a celebration, not a bureaucratic procedure. The NT pattern suggests immediacy and joy: the Philippian jailer was baptized in the middle of the night, and he and his household 'were filled with joy' (Acts 16:34). The early church often gathered the whole community for baptisms at Easter, making it a festive, corporate event. In many contemporary evangelical churches, baptism has become routine — a brief poolside moment with a brief formula, witnessed by whoever happens to be at that Sunday's service. The recovery of baptism's significance may require recovering the occasion's gravity and celebration: a testimony shared, witnesses invited, family members present, the congregation affirming the new believer. Whether a church baptizes in a river, a baptistry, or a backyard pool, the event can be structured to convey that the gathered community is celebrating new life — that someone who was dead is alive, someone who was lost has been found.",
  },
];

const HISTORY_ITEMS = [
  {
    epoch: "The NT Church",
    period: "c. 27–100 AD",
    body: "John the Baptist's immersion was a baptism of repentance in preparation for the coming Messiah — distinct from what would follow. Christian baptism, inaugurated at Pentecost (Acts 2:41), is in the name of Jesus (or the Trinitarian formula, Matthew 28:19) and carries the promise of the Spirit's gift. The first 3,000 converts were baptized on the day they believed, establishing immediacy as the NT pattern. Acts records baptisms throughout the Mediterranean world — household baptisms (Acts 16), individual confessions (Acts 8), entire synagogue communities (Acts 18). The Didache (c. 50-120 AD), one of the earliest non-canonical Christian documents, provides the first detailed baptismal instructions: use running water when possible, pour water three times if not, fast three days beforehand — evidence that even in the first century, some flexibility of mode existed alongside clear conviction about baptism's importance.",
  },
  {
    epoch: "Early Church Practice",
    period: "c. 100–300 AD",
    body: "Justin Martyr (c. 155 AD), writing his First Apology to the Roman Emperor, provides the earliest detailed non-biblical description of baptism: candidates are instructed in Christian doctrine, pray and fast with the community, are brought to water, and are baptized in the Trinitarian name. They then join the full eucharistic gathering for the first time. This description shows baptism as the culmination of a process of instruction and preparation. By the third century, the catechumenate (preparation period) had extended to two or three years for adult converts — a period of moral testing and doctrinal formation before the Easter baptism. Tertullian (c. 200 AD) describes elaborate ceremonies: anointing with oil, the laying on of hands, and the Eucharist immediately following baptism. Immersion appears to have been the dominant early mode, practiced in rivers, pools, and purpose-built baptisteries that survive archaeologically across the ancient world.",
  },
  {
    epoch: "Infant Baptism's Rise",
    period: "c. 200–400 AD",
    body: "The most important fact about the rise of infant baptism is that our first certain evidence for it comes in the form of Tertullian's objection to it (c. 200 AD) — meaning the practice already existed and was common enough to require a sustained argument against it. Tertullian's objection was pastoral: delay baptism until candidates can understand what they are receiving. Origen (c. 185-254 AD) explicitly defends infant baptism as 'received from the apostles.' Augustine (354-430 AD) systematized the theological defense: because all humans inherit original sin from Adam, infants need the regenerating grace of baptism immediately. The Nicene church — East and West — universally practiced infant baptism by the fifth century, and it remained the universal Western practice until the sixteenth century. The theological question of whether infants could be regenerated without explicit faith was handled variously: some appealed to the faith of the parents or the church; others (Augustine most influentially) to the sovereign grace of God working through the sacrament.",
  },
  {
    epoch: "The Anabaptist Revolution",
    period: "1525 AD",
    body: "On January 21, 1525, in Zurich, Conrad Grebel baptized Georg Blaurock — an adult who had already been baptized as an infant. Blaurock then baptized the others present. This act — 'rebaptism' in the eyes of both Catholic and Protestant authorities — launched the Radical Reformation. The Anabaptists (literally 'rebaptizers') held that the state-church model was a corruption of the NT, that the church should be a gathered community of genuine believers rather than everyone born into a Christian territory, and that baptism without prior faith was meaningless. The response from authorities was swift and brutal: the Anabaptists were executed across German, Swiss, and Dutch territories — drowned, burned, beheaded — with the explicit theological justification that they had revived an ancient heresy. Their convictions about believer's baptism, separation of church and state, and religious liberty were vindicated in later centuries; their willingness to suffer for those convictions gave them the name 'martyrs' in their own community's memory.",
  },
  {
    epoch: "Baptist Distinctives",
    period: "1600s AD",
    body: "The English Baptist movement emerged from the Separatist tradition — Protestants who believed the Church of England was irreformably corrupt and had to be left rather than reformed from within. John Smyth, a Separatist pastor in exile in Amsterdam, concluded around 1609 that infant baptism was unscriptural and baptized himself, then his congregation — founding what would become the General Baptist movement. Thomas Helwys returned to England with a small congregation and in 1612 published a tract demanding religious liberty for all — one of the first such demands in English history — and was promptly imprisoned. The Particular Baptists, Calvinist in theology, emerged later and recovered immersion as the proper mode in the 1640s, departing from the earlier Anabaptist and General Baptist practice of pouring. Religious liberty was not incidental to the Baptist movement: the coherence of believer's baptism logically required it — if the state cannot coerce faith, it cannot properly admit citizens to the church's rites.",
  },
  {
    epoch: "Modern Ecumenical Convergence",
    period: "1900s–Present",
    body: "The twentieth century saw unexpected ecumenical convergence on baptism. The Faith and Order Commission of the World Council of Churches produced Baptism, Eucharist and Ministry (BEM, 1982), a landmark document in which Catholic, Orthodox, Lutheran, Reformed, Baptist, and Pentecostal theologians found surprising common ground on baptism's significance and its connection to the body of Christ — while acknowledging remaining differences on mode and subjects. Simultaneously, many evangelical churches have experienced a recovery of baptism's theological weight after a period of practical neglect — the 'casual baptism' problem in which baptism was treated as optional, delayed indefinitely, or administered without preparation or celebration. The liturgical renewal movement, crossing denominational lines, has encouraged churches of all traditions to make baptism a more central, celebrated, and theologically articulate rite. The challenge for the contemporary church is holding together the objectivity of grace (baptism is something God does through the church) with the necessity of personal faith (without which the water is merely water).",
  },
];

function AccordionItem({
  title,
  ref: refText,
  body,
  isOpen,
  onToggle,
}: {
  title: string;
  ref?: string;
  body: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${isOpen ? PURPLE : BORDER}`,
        borderRadius: 12,
        marginBottom: 12,
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 22px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
          <span
            style={{
              color: isOpen ? GREEN : MUTED,
              fontWeight: 800,
              fontSize: 16,
              flex: 1,
              minWidth: 0,
            }}
          >
            {title}
          </span>
          {refText && (
            <span
              style={{
                background: `${PURPLE}22`,
                color: PURPLE,
                padding: "3px 10px",
                borderRadius: 10,
                fontSize: 11,
                fontWeight: 700,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {refText}
            </span>
          )}
        </div>
        <span
          style={{
            color: isOpen ? GREEN : MUTED,
            fontSize: 18,
            fontWeight: 700,
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          ▾
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: "0 22px 22px", color: TEXT, lineHeight: 1.8, fontSize: 15 }}>
          {body}
        </div>
      )}
    </div>
  );
}

export default function BaptismTheologyPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_baptism-theology_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedView, setSelectedView] = useState<string>("regeneration");

  function toggleAccordion(key: string) {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const currentView = VIEWS.find((v) => v.id === selectedView);

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Baptism" },
    { id: "views", label: "Views on Baptism" },
    { id: "practice", label: "Practice" },
    { id: "history", label: "History of Baptism" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, -apple-system, sans-serif",
        paddingTop: 80,
      }}
    >
      <Navbar />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 900,
              margin: "0 0 12px",
              letterSpacing: "-0.5px",
            }}
          >
            Baptism
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 17,
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Few doctrines reveal theological commitments more sharply. What does the water signify?
            Who should receive it? What does it accomplish?
          </p>
        </div>

        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 36,
            background: CARD,
            borderRadius: 14,
            padding: 5,
            border: `1px solid ${BORDER}`,
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: "10px 6px",
                borderRadius: 10,
                border: "none",
                background: activeTab === tab.id ? PURPLE : "transparent",
                color: activeTab === tab.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology */}
        {activeTab === "theology" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
              Six foundational theological topics — tap any to expand.
            </p>
            {THEOLOGY_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                title={item.title}
                ref={item.ref}
                body={item.body}
                isOpen={!!expanded[`theology-${i}`]}
                onToggle={() => toggleAccordion(`theology-${i}`)}
              />
            ))}
          </div>
        )}

        {/* Tab 2: Views */}
        {activeTab === "views" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            {/* Left list */}
            <div style={{ flexShrink: 0, width: 210 }}>
              <p
                style={{
                  color: MUTED,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 10,
                }}
              >
                Select a View
              </p>
              {VIEWS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedView(v.id)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 14px",
                    marginBottom: 6,
                    borderRadius: 10,
                    border: `1px solid ${selectedView === v.id ? GREEN : BORDER}`,
                    background: selectedView === v.id ? `${GREEN}10` : CARD,
                    color: selectedView === v.id ? GREEN : TEXT,
                    fontWeight: selectedView === v.id ? 700 : 400,
                    fontSize: 13,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    lineHeight: 1.4,
                  }}
                >
                  <div>{v.label}</div>
                  <div
                    style={{
                      color: selectedView === v.id ? `${GREEN}99` : MUTED,
                      fontSize: 11,
                      marginTop: 2,
                    }}
                  >
                    {v.subtitle}
                  </div>
                </button>
              ))}
            </div>

            {/* Right detail */}
            {currentView && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: 28,
                    position: "sticky",
                    top: 20,
                  }}
                >
                  <h2 style={{ fontSize: 22, fontWeight: 900, color: GREEN, margin: "0 0 4px" }}>
                    {currentView.label}
                  </h2>
                  <p style={{ color: MUTED, fontSize: 13, margin: "0 0 22px" }}>
                    {currentView.subtitle}
                  </p>

                  <div
                    style={{
                      background: `${PURPLE}12`,
                      border: `1px solid ${PURPLE}30`,
                      borderRadius: 10,
                      padding: 16,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        color: PURPLE,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 6,
                      }}
                    >
                      Theological Claim
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                      {currentView.claim}
                    </p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                    <div
                      style={{
                        background: `${GREEN}08`,
                        border: `1px solid ${GREEN}20`,
                        borderRadius: 10,
                        padding: 14,
                      }}
                    >
                      <div
                        style={{
                          color: GREEN,
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: 6,
                        }}
                      >
                        Key Proponent
                      </div>
                      <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.5 }}>
                        {currentView.proponent}
                      </p>
                    </div>
                    <div
                      style={{
                        background: `${GREEN}08`,
                        border: `1px solid ${GREEN}20`,
                        borderRadius: 10,
                        padding: 14,
                      }}
                    >
                      <div
                        style={{
                          color: GREEN,
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: 6,
                        }}
                      >
                        Key Scripture
                      </div>
                      <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.5 }}>
                        {currentView.scripture}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <div
                      style={{
                        background: "#3a7d5610",
                        border: `1px solid #3a7d5630`,
                        borderRadius: 10,
                        padding: 14,
                      }}
                    >
                      <div
                        style={{
                          color: GREEN,
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: 6,
                        }}
                      >
                        Key Strength
                      </div>
                      <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.6 }}>
                        {currentView.strength}
                      </p>
                    </div>
                    <div
                      style={{
                        background: "#FF444410",
                        border: "1px solid #FF444430",
                        borderRadius: 10,
                        padding: 14,
                      }}
                    >
                      <div
                        style={{
                          color: "#FF6666",
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: 6,
                        }}
                      >
                        Key Weakness
                      </div>
                      <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.6 }}>
                        {currentView.weakness}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Practice */}
        {activeTab === "practice" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
              Six practical dimensions of baptism — from mode and candidates to preparation and celebration.
            </p>
            {PRACTICE_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                title={item.title}
                body={item.body}
                isOpen={!!expanded[`practice-${i}`]}
                onToggle={() => toggleAccordion(`practice-${i}`)}
              />
            ))}
          </div>
        )}

        {/* Tab 4: History */}
        {activeTab === "history" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 32, lineHeight: 1.6 }}>
              Two thousand years of baptismal practice — how the rite has been understood, administered, and contested across church history.
            </p>
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: 28,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: BORDER,
                  zIndex: 0,
                }}
              />
              {HISTORY_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 24,
                    marginBottom: 32,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* Number bubble */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 58,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: PURPLE,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        fontSize: 16,
                        flexShrink: 0,
                        border: `3px solid ${BG}`,
                        zIndex: 2,
                        position: "relative",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  {/* Content */}
                  <div
                    style={{
                      flex: 1,
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: 22,
                      marginBottom: 0,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 12,
                        marginBottom: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, margin: 0 }}>
                        {item.epoch}
                      </h3>
                      <span
                        style={{
                          color: MUTED,
                          fontSize: 12,
                          background: `${BORDER}`,
                          padding: "2px 10px",
                          borderRadius: 8,
                          fontWeight: 600,
                        }}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                      {item.body}
                    </p>
                  </div>
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
                Lectures and debates on baptism theology — from paedobaptism to credobaptism, and the meaning of the sacrament in Christian life.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "gLRX1WP2wg4", title: "Baptism Debate: A Paedobaptist Position with R.C. Sproul", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul presents the historic Reformed case for infant baptism — the covenant continuity argument — in a formal theological debate." },
                  { videoId: "0JdwtcFNVU4", title: "What Is the Doctrine of Baptism? — Reformed Theology", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul explains what baptism signifies within a Reformed sacramental framework, connecting it to circumcision and the covenant of grace." },
                  { videoId: "ALsluAKBZ-c", title: "Old Testament Summary: A Complete Animated Overview", channel: "BibleProject", description: "Understanding the Old Testament covenant structure is essential for the baptism debate — BibleProject provides the clearest visual overview available." },
                  { videoId: "Q0BrP8bqj0c", title: "New Testament Summary: A Complete Animated Overview", channel: "BibleProject", description: "The New Testament's development of the covenant and its signs — including baptism — explained through BibleProject's acclaimed animated overview." },
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
