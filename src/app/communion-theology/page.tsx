"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState } from "react";

type Tab = "theology" | "views" | "practice" | "history" | "videos";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theologyItems = [
  {
    id: "institution",
    title: "The Night of Institution",
    content:
      'Four Gospel accounts bear witness to the same sacred night: Matthew 26:26-28, Mark 14:22-24, Luke 22:19-20, and Paul\'s received tradition in 1 Corinthians 11:23-26. Each preserves distinct emphases — Matthew includes "for the forgiveness of sins," Luke\'s account carries the explicit command "do this in remembrance of me," and Paul frames it within the context of the Lord\'s Supper as proclamation. The fourfold witness establishes that the command to remember was not incidental but central: Jesus himself instituted the meal as an ongoing covenant practice for his people.',
  },
  {
    id: "eucharistia",
    title: "The Eucharist as Eucharistia",
    content:
      'The word "Eucharist" derives from the Greek eucharistia, meaning thanksgiving. At the heart of Luke 22:19, Jesus says "this is my body given FOR YOU" — a startling particularity. The meal is the church\'s great act of thanksgiving: not offering something to God to earn favor, but receiving what has already been given. The offertory moment in liturgical tradition reflects this: the bread and wine are brought forward as an act of grateful acknowledgment that all things come from God and are returned to him. The Eucharist is not primarily what we do for God, but what we receive from him with gratitude.',
  },
  {
    id: "anamnesis",
    title: "Remembrance (Anamnesis)",
    content:
      'The Greek anamnesis (Luke 22:19; 1 Cor 11:24-25) is not mere mental recollection. Rooted in the Hebrew zikkaron, it carries the weight of covenant re-presentation — making the past event present and effective. The Jewish Passover Seder shaped this understanding profoundly: Israel did not merely remember the Exodus; every generation was commanded to understand itself as having come out of Egypt. Paul draws this trajectory forward: "as often as you eat this bread and drink the cup, you proclaim the Lord\'s death until he comes" (1 Cor 11:26). Proclamation, not nostalgia — the death and resurrection are made present at the table.',
  },
  {
    id: "koinonia",
    title: "Koinonia at the Table",
    content:
      'In 1 Corinthians 10:16-17, Paul makes a stunning claim: "The cup of blessing that we bless, is it not a participation (koinonia) in the blood of Christ? The bread that we break, is it not a participation in the body of Christ?" Then immediately: "Because there is one bread, we who are many are one body, for we all partake of the one bread." The communion creates community. Paul cannot separate the eucharistic body (the bread) from the ecclesial body (the church). To receive Communion is to be constituted as the body of Christ — which is precisely why the Corinthian abuse was so devastating: it contradicted the very thing the meal was meant to signify.',
  },
  {
    id: "judgment",
    title: "Eating and Drinking Judgment",
    content:
      'First Corinthians 11:27-32 contains one of the most sobering passages in the New Testament: "Whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of sinning against the body and blood of the Lord." The phrase "without discerning the body" (v. 29) must be read in context: the Corinthian sin was that wealthier members ate ahead of the poor, humiliating them (v. 21-22). "Unworthy manner" refers not to personal moral imperfection — if that were the standard, no one could commune — but to the communal ethics of the meal. To eat while despising the poor members is to contradict the body of Christ you claim to celebrate. The judgment is social, not merely spiritual.',
  },
  {
    id: "eschatological",
    title: "The Eschatological Dimension",
    content:
      'Jesus declares in Luke 22:16 and 18 that he will not eat the Passover or drink of the fruit of the vine again "until the kingdom of God comes." Paul echoes this forward gaze: "you proclaim the Lord\'s death until he comes" (1 Cor 11:26). Every Communion service is therefore an eschatological act — a foretaste of the Marriage Supper of the Lamb (Revelation 19:9). The church eats between the times: the meal is a memorial of what has been accomplished and an anticipation of what is yet to come. To gather at the table is to declare that history is moving toward a banquet, and this broken bread is its down payment.',
  },
];

const viewsList = [
  {
    id: "transubstantiation",
    label: "Transubstantiation",
    subtitle: "Roman Catholic",
    claim:
      "The substance of the bread and wine are truly converted into the body and blood of Christ; only the accidents (appearance, taste, smell) remain. Christ is therefore bodily present on the altar after consecration.",
    proponent: "Thomas Aquinas (Summa Theologiae, III, Q. 75)",
    scripture: '"This is my body" (Matthew 26:26)',
    strength:
      "Takes the real presence with complete seriousness; the table becomes the most sacred space in creation.",
    weakness:
      "Imposes Aristotelian categories of substance and accident onto Scripture; requires a philosophical framework foreign to the biblical text.",
  },
  {
    id: "lutheran",
    label: "Consubstantiation",
    subtitle: "Lutheran",
    claim:
      'Christ is "in, with, and under" the elements — the bread remains bread, the wine remains wine, but Christ\'s body and blood are truly and substantially present alongside them. Luther coined the term "sacramental union."',
    proponent: "Martin Luther (The Babylonian Captivity of the Church, 1520)",
    scripture: '"The cup of blessing that we bless, is it not a participation in the blood of Christ?" (1 Cor 10:16)',
    strength:
      "Preserves genuine real presence without requiring Aristotelian metaphysics; remains tethered to the plain reading of the words of institution.",
    weakness:
      "Still philosophically difficult to explain; Luther's insistence on bodily presence led to the breakdown at the Marburg Colloquy (1529) and permanent division among Reformers.",
  },
  {
    id: "reformed",
    label: "Reformed / Calvin's View",
    subtitle: "Reformed / Presbyterian",
    claim:
      'Christ is spiritually but truly present at the Supper through faith and the agency of the Holy Spirit. The elements do not change, but the believer genuinely feeds on Christ — "the third way" between Rome and Zurich.',
    proponent: "John Calvin (Institutes, IV.17)",
    scripture: '"The cup of blessing that we bless, is it not a participation in the blood of Christ?" (1 Cor 10:16)',
    strength:
      "Preserves spiritual reality and genuine encounter with Christ without collapsing into mere symbolism; avoids both rationalism and philosophical excess.",
    weakness:
      "The distinction between spiritual and bodily presence can be difficult to articulate; sometimes collapses toward memorialism in practice even when not in theology.",
  },
  {
    id: "memorialism",
    label: "Memorialism",
    subtitle: "Zwinglian / Baptist",
    claim:
      'The bread and cup are signs or symbols of Christ\'s sacrifice; they represent his body and blood but do not convey or contain his presence. "This is my body" means "this signifies my body."',
    proponent: "Ulrich Zwingli (On the Lord's Supper, 1526)",
    scripture: '"Do this in remembrance of me" (Luke 22:19)',
    strength:
      "Simplicity and accessibility; guards against superstition and magical thinking about the elements.",
    weakness:
      "Risks evacuating the meal of mystery and transformative power; reduces the Supper to a cognitive exercise and loses the participatory language of 1 Corinthians 10.",
  },
];

const practiceItems = [
  {
    id: "frequency",
    title: "Frequency",
    content:
      "The early church broke bread daily (Acts 2:46) and gathered on the first day of the week for the breaking of bread (Acts 20:7). Calvin argued strongly for weekly Communion in Geneva but was overruled by the city council, who instituted quarterly practice — an accident of Reformation politics that became normative for much of Protestantism. Monthly Communion became standard in many Baptist and evangelical churches. Arguments for weekly practice: it was universal in the early church; the sermon and the table together form the full word of God proclaimed and enacted. Arguments for less frequent practice: familiarity breeds contempt; preparation and solemnity require spacing. The pastoral question is not how often we must commune, but how often we dare deprive our congregations of the feast.",
  },
  {
    id: "open-closed",
    title: "Open vs. Closed Table",
    content:
      'Who may receive? This question cuts to the heart of ecclesiology. A closed table restricts Communion to members of a specific congregation or denomination. A close(d) table (common Baptist usage) restricts it to baptized believers. An open table welcomes all who confess faith in Christ. The practice of "fencing the table" — explicitly warning unworthy recipients before serving — derives from 1 Corinthians 11:27-29 and was standard in Reformed and Puritan practice. Paedo-communion (children of believing parents receiving the elements) is practiced in some Reformed traditions, arguing from the Passover\'s inclusion of children and covenant theology. The tension is between hospitality (the gospel is for all) and integrity (the meal signifies covenant membership).',
  },
  {
    id: "four-actions",
    title: "The Four Actions",
    content:
      "Dom Gregory Dix's influential 1945 work The Shape of the Liturgy identified the fourfold action at the Last Supper as the structural backbone of all Christian eucharistic worship: Jesus (1) took the bread, (2) gave thanks (eucharistia), (3) broke it, and (4) gave it to his disciples (Luke 22:19-20; cf. 1 Cor 11:23-24). This fourfold shape — offertory, prayer of thanksgiving, fraction, communion — has structured Christian liturgy across traditions for two millennia. Even low-church evangelical services follow this pattern, often without recognizing it. The breaking of the bread is not incidental; it is the moment of recognition (cf. Luke 24:35).",
  },
  {
    id: "elements",
    title: "Elements",
    content:
      "Bread: most traditions use unleavened bread (connecting to the Passover), though many Protestant churches use ordinary leavened bread, emphasizing the new covenant discontinuity. Wine vs. grape juice: the shift to grape juice in many American Protestant churches is largely a 19th-century development tied to the temperance movement. Thomas Bramwell Welch, a Methodist dentist, pasteurized grape juice in 1869 specifically to provide an alcohol-free communion option. The New Testament consistently uses the word for wine (oinos). The common cup vs. individual cups: the shift to individual cups is also modern (late 19th century), driven by germ theory concerns. Theologically, the common cup more powerfully signifies koinonia; individual cups are more hygienically practical.",
  },
  {
    id: "posture",
    title: "Posture and Space",
    content:
      "Where and how the meal is celebrated communicates theology. A table in the midst of the congregation suggests the communal meal Jesus hosted; an altar rail at a distance from the people suggests sacrifice offered to God. Standing to receive (common in the early church and many Reformed traditions) emphasizes resurrection and eschatological feast; kneeling (common in Anglican and Catholic traditions) emphasizes adoration and unworthiness. Intinction — dipping the bread into the cup — combines the elements into a single act; separate elements preserve the double sign of body and blood. The physical arrangement of space is not theologically neutral: it is a visual sermon about what the meal means.",
  },
  {
    id: "examination",
    title: "Preparation and Self-Examination",
    content:
      'Paul commands in 1 Corinthians 11:28: "Let a person examine himself, then, and so eat of the bread and drink of the cup." This has sometimes been interpreted as a barrier: "I am not worthy, therefore I should not come." But this misreads the text. Self-examination is preparation for coming, not grounds for abstaining. The invitation to examine oneself is followed immediately by the command to eat and drink. The classical practice of the Examen before Communion — developed in Ignatian and Puritan devotion alike — involves honest reflection on sin, renewed gratitude for grace, and intentional turning toward the table. The goal is not perfect purity but prepared receptivity. The words of institution already announce that this body is "given for you" — the unworthy are precisely those for whom it was given.',
  },
];

const historyItems = [
  {
    epoch: "01",
    title: "The New Testament Church",
    period: "AD 30–100",
    content:
      'The earliest Christians broke bread from house to house daily (Acts 2:42-46), interweaving the Eucharist with the Agape feast — a full shared meal. The Didache (c. AD 50-120), one of the earliest non-canonical documents, preserves eucharistic prayers of striking simplicity and beauty: "As this broken bread was scattered over the mountains, and when brought together became one, so let your Church be brought together from the ends of the earth into your Kingdom." The meal was embedded in community life, inseparable from mutual care, prayer, and teaching. Paul\'s extended treatment in 1 Corinthians 10-11 shows both the theological richness and the practical disorder of these earliest gatherings.',
  },
  {
    epoch: "02",
    title: "The Early Church Fathers",
    period: "AD 100–400",
    content:
      "Ignatius of Antioch (c. 107) describes the Eucharist as 'the medicine of immortality.' Justin Martyr's First Apology (c. 155) provides the earliest detailed description of Sunday worship: after readings and a sermon, bread and wine mixed with water are brought to the presider, who offers a lengthy thanksgiving prayer, and the elements are distributed to those present and carried to the absent. Irenaeus (c. 180) uses the Eucharist as a key argument against Gnosticism — if matter is evil, how can bread and wine become the body of Christ? By the 3rd and 4th centuries, the Agape feast was increasingly separated from the Eucharist; the meal became more formal, the language more reverential, the presider more set apart.",
  },
  {
    epoch: "03",
    title: "Medieval Catholicism",
    period: "AD 400–1500",
    content:
      "The doctrine of transubstantiation developed gradually through the early medieval period and was formally defined as dogma at the Fourth Lateran Council in 1215. The Mass came to be understood as a re-presentation (and by many, a re-offering) of Christ's sacrifice — a development that later Reformers would contest sharply. The cup was withheld from the laity from the 12th century onward, with only the bread distributed to the people; the priest alone drank from the chalice. The Corpus Christi feast (instituted 1264) and the elevation of the host became central Catholic devotions. By the eve of the Reformation, the frequency of lay reception had dropped dramatically — many Catholics communed only once a year at Easter.",
  },
  {
    epoch: "04",
    title: "The Reformation",
    period: "1517–1600",
    content:
      "Luther's The Babylonian Captivity of the Church (1520) attacked three 'captivities' of the sacrament: the withholding of the cup, transubstantiation (the doctrine, not the real presence he affirmed), and the sacrificial understanding of the Mass. He restored the cup to the laity and translated the liturgy into German. The Marburg Colloquy (October 1529) was a watershed: Philip of Hesse assembled Luther and Zwingli to forge Protestant unity. They agreed on fourteen of fifteen articles — but broke irreconcilably on the Lord's Supper. Luther reportedly wrote 'Hoc est corpus meum' on the table in chalk and refused to budge. Calvin later sought a mediating position, corresponding with both traditions, and articulated spiritual presence as the Reformed via media.",
  },
  {
    epoch: "05",
    title: "Protestant Diversity",
    period: "1600–1900",
    content:
      "The Baptist tradition, emerging in the early 17th century, largely followed the Zwinglian memorialist understanding while adding believers' baptism as the gate to the table. John Wesley (1703-1791) was a striking exception among revivalists: he communed as often as possible — reportedly over 400 times in his life — and published a collection of 166 eucharistic hymns with his brother Charles. He called the Lord's Supper a 'converting ordinance' that could bring the unconverted to faith. The Oxford Movement (beginning 1833) within Anglicanism represented a significant recovery of sacramental theology and practice in Protestant soil, emphasizing weekly Communion and the real presence in terms that brought criticism of 'Romanizing.'",
  },
  {
    epoch: "06",
    title: "Modern Renewal",
    period: "1900–Present",
    content:
      "The 20th-century liturgical renewal movement cut across Catholic, Anglican, Lutheran, and Reformed traditions, recovering the fourfold shape of the liturgy, the importance of weekly Communion, and the communal character of the meal. The most significant ecumenical document on the subject, Baptism, Eucharist and Ministry (BEM, 1982), produced by the World Council of Churches in Lima, Peru, achieved remarkable convergence across traditions on the theology of the Supper — including on anamnesis, real presence, and the epiclesis (invocation of the Spirit). Among younger evangelicals in the 21st century, there has been a notable return to weekly Communion, often paired with renewed interest in liturgy, church history, and embodied worship practices.",
  },
];

function AccordionItem({
  id,
  title,
  content,
  expanded,
  onToggle,
}: {
  id: string;
  title: string;
  content: string;
  expanded: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      style={{
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        marginBottom: 12,
        background: CARD,
        overflow: "hidden",
      }}
    >
      <Navbar />
      <button
        onClick={() => onToggle(id)}
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span style={{ color: TEXT, fontWeight: 600, fontSize: 15 }}>
          {title}
        </span>
        <span
          style={{
            color: GREEN,
            fontSize: 20,
            lineHeight: 1,
            flexShrink: 0,
            transition: "transform 0.2s",
            display: "inline-block",
            transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      {expanded && (
        <div
          style={{
            padding: "16px 20px 18px",
            color: MUTED,
            fontSize: 14,
            lineHeight: 1.75,
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

function DetailRow({
  label,
  value,
  highlight,
  positive,
  negative,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  positive?: boolean;
  negative?: boolean;
}) {
  let valueColor = MUTED;
  if (highlight) valueColor = TEXT;
  if (positive) valueColor = GREEN;
  if (negative) valueColor = "#FF6B6B";

  return (
    <div
      style={{
        marginBottom: 18,
        paddingBottom: 18,
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <div
        style={{
          color: MUTED,
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1,
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div style={{ color: valueColor, fontSize: 14, lineHeight: 1.7 }}>
        {value}
      </div>
    </div>
  );
}

export default function CommunionTheologyPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeView, setActiveView] = useState<string>("transubstantiation");

  function toggleAccordion(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const selectedView = viewsList.find((v) => v.id === activeView);

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Communion" },
    { id: "views", label: "Views on the Lord's Supper" },
    { id: "practice", label: "Practice" },
    { id: "history", label: "History" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: 80,
        paddingBottom: 80,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <h1
            style={{
              color: TEXT,
              fontSize: 32,
              fontWeight: 700,
              margin: 0,
              marginBottom: 8,
            }}
          >
            The Lord&apos;s Supper
          </h1>
          <p style={{ color: MUTED, fontSize: 15, margin: 0 }}>
            Theology, views, practice, and history of Communion
          </p>
        </div>

        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 32,
            borderBottom: `1px solid ${BORDER}`,
            overflowX: "auto",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px 18px",
                fontSize: 14,
                fontWeight: activeTab === tab.id ? 700 : 400,
                color: activeTab === tab.id ? GREEN : MUTED,
                borderBottom:
                  activeTab === tab.id
                    ? `2px solid ${GREEN}`
                    : "2px solid transparent",
                marginBottom: -1,
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology */}
        {activeTab === "theology" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 20,
                marginTop: 0,
              }}
            >
              Theology of Communion
            </h2>
            {theologyItems.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                expanded={!!expanded[item.id]}
                onToggle={toggleAccordion}
              />
            ))}
          </div>
        )}

        {/* Tab 2: Views */}
        {activeTab === "views" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 20,
                marginTop: 0,
              }}
            >
              Views on the Lord&apos;s Supper
            </h2>
            <div style={{ display: "flex", gap: 0, alignItems: "flex-start" }}>
              {/* Left list */}
              <div
                style={{
                  width: 210,
                  flexShrink: 0,
                  marginRight: 20,
                  position: "sticky",
                  top: 20,
                }}
              >
                {viewsList.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setActiveView(view.id)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      background:
                        activeView === view.id ? CARD : "transparent",
                      border:
                        activeView === view.id
                          ? `1px solid ${PURPLE}`
                          : "1px solid transparent",
                      borderRadius: 8,
                      padding: "12px 14px",
                      marginBottom: 6,
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        color: activeView === view.id ? GREEN : TEXT,
                        fontWeight: activeView === view.id ? 700 : 500,
                        fontSize: 14,
                      }}
                    >
                      {view.label}
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>
                      {view.subtitle}
                    </div>
                  </button>
                ))}
              </div>

              {/* Right detail */}
              {selectedView && (
                <div
                  style={{
                    flex: 1,
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 28,
                  }}
                >
                  <div style={{ marginBottom: 6 }}>
                    <span
                      style={{
                        background: PURPLE,
                        color: TEXT,
                        fontSize: 11,
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: 20,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      {selectedView.subtitle}
                    </span>
                  </div>
                  <h3
                    style={{
                      color: TEXT,
                      fontSize: 22,
                      fontWeight: 700,
                      margin: "12px 0 20px",
                    }}
                  >
                    {selectedView.label}
                  </h3>

                  <DetailRow
                    label="Theological Claim"
                    value={selectedView.claim}
                  />
                  <DetailRow
                    label="Key Proponent"
                    value={selectedView.proponent}
                  />
                  <DetailRow
                    label="Key Scripture"
                    value={selectedView.scripture}
                    highlight
                  />
                  <DetailRow
                    label="Key Strength"
                    value={selectedView.strength}
                    positive
                  />
                  <DetailRow
                    label="Key Weakness"
                    value={selectedView.weakness}
                    negative
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Practice */}
        {activeTab === "practice" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 20,
                marginTop: 0,
              }}
            >
              Practice
            </h2>
            {practiceItems.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                expanded={!!expanded[item.id]}
                onToggle={toggleAccordion}
              />
            ))}
          </div>
        )}

        {/* Tab 4: History */}
        {activeTab === "history" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 28,
                marginTop: 0,
              }}
            >
              History of the Lord&apos;s Supper
            </h2>
            <div style={{ position: "relative", paddingLeft: 52 }}>
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: 19,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: BORDER,
                  borderRadius: 2,
                }}
              />
              {historyItems.map((item, idx) => (
                <div
                  key={item.epoch}
                  style={{
                    position: "relative",
                    marginBottom: idx < historyItems.length - 1 ? 32 : 0,
                  }}
                >
                  {/* Epoch dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: -52,
                      top: 0,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: PURPLE,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: TEXT,
                      fontWeight: 700,
                      fontSize: 13,
                      border: `2px solid ${BG}`,
                      zIndex: 1,
                    }}
                  >
                    {item.epoch}
                  </div>

                  {/* Card */}
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 10,
                      padding: "18px 22px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 12,
                        marginBottom: 10,
                        flexWrap: "wrap",
                      }}
                    >
                      <h3
                        style={{
                          color: TEXT,
                          fontSize: 16,
                          fontWeight: 700,
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h3>
                      <span
                        style={{
                          color: GREEN,
                          fontSize: 12,
                          fontWeight: 600,
                          background: "rgba(58,125,86,0.08)",
                          padding: "2px 10px",
                          borderRadius: 20,
                        }}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {item.content}
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
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on the Lord's Supper, its theology, and its meaning for the church.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "2eORFeyfYt8", title: "The Lord's Supper (Luke 22:1–7)", channel: "Ligonier Ministries / R.C. Sproul", description: "R.C. Sproul examines Jesus's institution of the Lord's Supper and what it means that he said 'This is the new covenant in my blood.'" },
                  { videoId: "JhqB-WibRM8", title: "The Last Supper (Mark 14:10–26)", channel: "Ligonier Ministries / R.C. Sproul", description: "R.C. Sproul on the significance and meaning of the Last Supper — the night Jesus instituted the meal that would define Christian worship." },
                  { videoId: "fth_FkAk968", title: "The Institution of the Lord's Supper: Kingdom Feast", channel: "Ligonier Ministries / R.C. Sproul", description: "R.C. Sproul on how the Lord's Supper is a kingdom feast — a foretaste of the wedding supper of the Lamb." },
                  { videoId: "5uOY0luQsao", title: "Is Christ Present in the Lord's Supper?", channel: "Ligonier Ministries", description: "A careful examination of the different views on Christ's presence in the Eucharist — Real Presence, spiritual presence, and memorial — and what Scripture teaches." },
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
