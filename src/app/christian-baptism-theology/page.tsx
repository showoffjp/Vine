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
const TEAL = "#0D9488";

const TABS = [
  { id: "what-baptism-is", label: "What Baptism Is" },
  { id: "believers-baptism", label: "Believer&rsquo;s Baptism" },
  { id: "infant-baptism", label: "Infant Baptism" },
  { id: "baptismal-regeneration", label: "Baptismal Regeneration" },
  { id: "mode", label: "Mode of Baptism" },
  { id: "videos", label: "Videos" },
];

const WHAT_BAPTISM_IS = [
  {
    title: "John&rsquo;s Baptism vs. Christian Baptism",
    body: "John&rsquo;s baptism was a baptism of repentance in preparation for the coming Messiah &mdash; a public turning from sin and an expectation of the one who would &ldquo;baptize with the Holy Spirit and fire&rdquo; (Matt 3:11). Christian baptism is administered in the name of the risen Christ and the triune God, and is tied to the gift of the Holy Spirit (Acts 2:38). The disciples of John who had not yet received the Spirit were rebaptized in Jesus&rsquo; name (Acts 19:1&ndash;7). Christian baptism is thus more than a rite of moral renewal &mdash; it is entrance into the community of the new covenant.",
    color: TEAL,
  },
  {
    title: "Matthew 28:19 &mdash; The Great Commission",
    body: "Jesus commands his disciples to &ldquo;Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo; This establishes baptism as a Trinitarian act &mdash; performed in the singular &ldquo;name&rdquo; (not &ldquo;names&rdquo;) of the three persons. Baptism is thus woven into the mission of the church from the beginning and is normative for all who become disciples.",
    color: GREEN,
  },
  {
    title: "Romans 6:3&ndash;4 &mdash; Buried and Raised with Christ",
    body: "Paul writes: &ldquo;Don&rsquo;t you know that all of us who were baptized into Christ Jesus were baptized into his death? We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.&rdquo; Baptism here is a sign of union with Christ in his death and resurrection. Whether Paul means the rite itself or the spiritual reality it represents is the crux of the regeneration debate.",
    color: PURPLE,
  },
  {
    title: "Colossians 2:11&ndash;12 &mdash; Circumcision Made Without Hands",
    body: "Paul draws a parallel between OT circumcision and NT baptism: &ldquo;In him you were also circumcised with a circumcision not performed by human hands... having been buried with him in baptism, in which you were also raised with him.&rdquo; This text is the linchpin of the paedobaptist argument &mdash; as circumcision was the covenant sign for Israel&rsquo;s infants, so baptism is the covenant sign for the new covenant community. Credobaptists counter that the circumcision Paul has in mind is spiritual regeneration, not a physical rite paralleling infant circumcision.",
    color: GOLD,
  },
  {
    title: "What Baptism Signifies and What It Effects",
    body: "All major traditions agree that baptism signifies union with Christ, forgiveness of sins, death to the old life, and entrance into the covenant community. The contested question is what baptism <em>effects</em>. The Catholic and some Lutheran positions hold that the rite itself confers regenerating grace. The Reformed position holds that baptism is a sign and seal of the covenant promise &mdash; it confirms what is received by faith but does not automatically produce it. The Baptist position holds that baptism is an ordinance &mdash; an act of obedience that publicly declares what God has already done in the believer&rsquo;s heart.",
    color: TEAL,
  },
];

const BELIEVERS_BAPTISM = [
  {
    title: "The NT Pattern: Hear, Believe, Be Baptized",
    body: "Throughout Acts, the sequence is consistent: people hear the gospel, repent and believe, and then are baptized. Acts 2:38 &mdash; &ldquo;Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins.&rdquo; Acts 8:12 &mdash; &ldquo;But when they believed Philip as he proclaimed the good news... they were baptized, both men and women.&rdquo; Acts 10:47&ndash;48 &mdash; the Gentiles receive the Spirit and then are baptized. The pattern implies conscious faith precedes the rite.",
    color: GREEN,
  },
  {
    title: "Baptism as Public Profession",
    body: "For Baptists and Anabaptists, baptism is the believer&rsquo;s public declaration of saving faith in Jesus Christ. It is the answer of a good conscience toward God (1 Pet 3:21), not a means of grace that operates apart from personal faith. This public profession is inseparable from church membership: baptism is how one enters the visible covenant community, and only regenerate believers can truly be members of the church.",
    color: PURPLE,
  },
  {
    title: "The Ordinance View",
    body: "Baptists distinguish between sacraments (which confer grace) and ordinances (which are acts of obedience commanded by Christ). Baptism is an ordinance &mdash; it does not produce the new birth but publicly testifies to it. This view resists any suggestion that the external rite can accomplish what only the Spirit does inwardly. The ordinance view is closely associated with Zwingli&rsquo;s memorial understanding, though Baptists would not use that label for baptism.",
    color: GOLD,
  },
  {
    title: "Credobaptism and Church Membership",
    body: "Credobaptism (believer&rsquo;s baptism) is the threshold for church membership in Baptist ecclesiology. A church of baptized believers is a church of people who have each publicly professed faith. This makes church discipline more coherent: the community of the baptized is a community of those who have made explicit commitments. Critics note that this creates a two-tier community when the children of believers are excluded from membership and the Lord&rsquo;s Table.",
    color: TEAL,
  },
];

const INFANT_BAPTISM = [
  {
    title: "Baptism as the Covenant Sign",
    body: "The Reformed argument begins with the unity of the covenant of grace across both testaments. Circumcision was the covenant sign for Israel, administered to infants as a seal of the promise before they could personally respond in faith (Gen 17:7&ndash;12). Colossians 2:11&ndash;12 identifies baptism as the new covenant counterpart to circumcision. If circumcision was rightly administered to infants as the covenant sign, then baptism &mdash; the sign that supersedes it &mdash; may also be administered to the infant children of believers.",
    color: PURPLE,
  },
  {
    title: "Household Baptisms in Acts",
    body: "Several passages in Acts record the baptism of entire households: Acts 16:15 (Lydia&rsquo;s household), Acts 16:33 (the jailer&rsquo;s household), 1 Cor 1:16 (Stephanas&rsquo; household). Paedobaptists argue these households likely included infants, and their inclusion reflects the covenant pattern of including children. Credobaptists counter that the texts often include belief and rejoicing language for all household members, implying adult comprehension.",
    color: GREEN,
  },
  {
    title: "Children of Believers in the Covenant",
    body: "1 Corinthians 7:14 describes the children of at least one believing parent as &ldquo;holy&rdquo; &mdash; set apart, belonging to the covenant sphere. The new covenant community, paedobaptists argue, does not exclude children of believers; it includes them as members who receive the covenant sign and grow up in the community of faith. This is not a guarantee of salvation but of covenant inclusion and the promise of the gospel.",
    color: GOLD,
  },
  {
    title: "The Sign Precedes Faith",
    body: "In the Abrahamic covenant, circumcision preceded the responsive faith of the infant. Abraham himself received circumcision as &ldquo;a seal of the righteousness that he had by faith&rdquo; (Rom 4:11) &mdash; after faith. But his descendants received it before faith. This pattern, paedobaptists argue, is not abolished in the new covenant: the sign may precede the full appropriation of what it signifies. Baptism does not save the infant but places them within the sphere of the covenant promise.",
    color: TEAL,
  },
  {
    title: "The Credobaptist Response",
    body: "Credobaptists argue that the new covenant is explicitly a covenant of the regenerate: &ldquo;They will all know me, from the least of them to the greatest&rdquo; (Jer 31:34). The church is not a mixed community like national Israel but a gathered community of those who personally know the Lord. Infant baptism, on this view, confuses the covenant community with biological families, undermines the NT pattern of conscious faith preceding baptism, and can give false assurance to the unbaptized.",
    color: PURPLE,
  },
];

const BAPTISMAL_REGENERATION = [
  {
    title: "The Catholic and High Lutheran Position",
    body: "Roman Catholic theology holds that baptism confers sanctifying grace and removes original sin, effecting regeneration &mdash; except when an adult places an obstaculum (obstacle) by lack of faith. Lutherans (particularly confessional Lutherans following Luther&rsquo;s Large Catechism) similarly hold that &ldquo;baptism effects forgiveness of sins, rescues from death and the devil, and gives eternal salvation to all who believe it.&rdquo; The key texts: John 3:5 (&ldquo;born of water and the Spirit&rdquo;), Titus 3:5 (&ldquo;washing of rebirth and renewing by the Holy Spirit&rdquo;), Acts 2:38 (&ldquo;for the forgiveness of your sins&rdquo;), 1 Pet 3:21 (&ldquo;this water symbolizes baptism that now saves you&rdquo;).",
    color: TEAL,
  },
  {
    title: "Key Texts Examined",
    body: "John 3:5: &ldquo;born of water and the Spirit&rdquo; &mdash; Does water mean baptism? Some interpreters (Chrysostom, Luther) say yes. Others (Calvin, many evangelicals) argue &ldquo;water&rdquo; refers to natural birth (amniotic fluid) or the Spirit&rsquo;s cleansing, not the rite. Titus 3:5: &ldquo;washing of rebirth&rdquo; &mdash; palingenesia (regeneration) linked to &ldquo;washing&rdquo; (loutron) and &ldquo;renewing by the Holy Spirit.&rdquo; Whether the washing is the rite or the Spirit&rsquo;s inner work is disputed. 1 Pet 3:21: Peter explicitly says &ldquo;not the removal of dirt from the body but the pledge of a clear conscience toward God.&rdquo; This qualifier is the Baptist&rsquo;s strongest textual ally in 1 Peter.",
    color: GOLD,
  },
  {
    title: "The Baptist Response",
    body: "Baptists argue that these texts use baptism as shorthand for conversion &mdash; in the NT world, baptism followed immediately upon belief, so the whole event (faith + baptism) could be referenced by either term. Acts 2:38 commands repentance alongside baptism &mdash; it is repentance that effects forgiveness. 1 Pet 3:21 itself denies that the water washes sin; the saving element is the appeal to God made in conscience. The pattern of Cornelius (Acts 10) is decisive: the Spirit fell before baptism, proving that regeneration is not tied to the rite.",
    color: GREEN,
  },
  {
    title: "The Reformed Middle Position",
    body: "The Reformed position holds that baptism is a sign and seal of the covenant promise of regeneration and forgiveness. It does not guarantee regeneration &mdash; the sign can be received without the reality (Simon Magus, Acts 8). But neither is it merely symbolic: God ordinarily works through the means of grace, and baptism is a means through which covenant promises are made tangible. The elect who are baptized will certainly be regenerated &mdash; in God&rsquo;s time, not necessarily at the moment of the rite.",
    color: PURPLE,
  },
];

const MODE_OF_BAPTISM = [
  {
    title: "Immersion &mdash; The Baptist Argument",
    body: "Baptists argue that immersion is the only valid mode because (1) the Greek word <em>baptizo</em> means to immerse, dip, or plunge &mdash; not to pour or sprinkle; (2) Romans 6:3&ndash;4 images burial and resurrection, which immersion enacts dramatically; (3) the Jordan River baptisms and the going &ldquo;down into&rdquo; the water (Acts 8:38) suggest immersion. Many Baptist scholars hold that mode is not incidental but essential to the meaning of the rite.",
    color: GREEN,
  },
  {
    title: "Pouring / Affusion &mdash; Historical Practice",
    body: "The Didache (c. 100 AD), one of the earliest Christian documents outside the NT, gives detailed instructions on baptism: &ldquo;Baptize in the name of the Father and of the Son and of the Holy Spirit in living [running] water. If you have no living water, baptize in other water... if you cannot do it in cold, then in warm. If you have neither, pour water on the head three times in the name of Father and Son and Holy Spirit.&rdquo; This shows that affusion was practiced as early as the late first century, tolerated when immersion was impractical.",
    color: TEAL,
  },
  {
    title: "Sprinkling / Aspersion &mdash; The OT Imagery",
    body: "The Reformed tradition has historically accepted sprinkling, pointing to the OT imagery of purification by sprinkling (Num 8:7; Ezek 36:25; Heb 9:13&ndash;14; 1 Pet 1:2 &mdash; &ldquo;sprinkled with his blood&rdquo;). Pentecost is understood as a fulfillment of Joel&rsquo;s promise of the Spirit &ldquo;poured out&rdquo; &mdash; language of pouring, not immersion. Westminster Standards allow any mode: &ldquo;Dipping of the person into the water is not necessary; but baptism is rightly administered by pouring or sprinkling water upon the person.&rdquo;",
    color: PURPLE,
  },
  {
    title: "What the Didache (c. 100 AD) Says",
    body: "The Didache&rsquo;s baptismal instructions are remarkable for their flexibility: running water is preferred, but still water is acceptable; cold is preferred over warm; and pouring is explicitly approved when immersion is not possible. The preference for &ldquo;living water&rdquo; may refer to the symbolism of the Spirit (John 7:38&ndash;39) rather than a strictly practical requirement. The document also specifies a fast before baptism and a preparatory period of instruction &mdash; suggesting baptism was taken with great seriousness even in the earliest post-apostolic community.",
    color: GOLD,
  },
  {
    title: "Is Mode Essential to Validity?",
    body: "The Baptist position generally holds that immersion is required for a valid baptism &mdash; hence the practice of rebaptizing converts from other traditions. Most Reformed, Lutheran, Anglican, and Catholic traditions hold that the mode is not essential: what matters is the use of water in the triune name. The ecumenical Lima Document (Baptism, Eucharist and Ministry, 1982) acknowledges both views and urges mutual recognition. The question touches the deeper issue of what makes baptism baptism: the element (water), the formula (triune name), the mode, the subject (believer/infant), or all of these together.",
    color: TEAL,
  },
];

const VIDEOS = [
  { videoId: "S9uXEt26EFM", title: "Tim Keller on Baptism" },
  { videoId: "f1dfKUbY5c4", title: "John Piper on Believer&rsquo;s Baptism" },
  { videoId: "4R-lC2V2D2g", title: "Paedobaptism vs Credobaptism" },
];

export default function ChristianBaptismTheologyPage() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("what-baptism-is");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const card: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: "1.5rem",
  };

  function getItems() {
    if (tab === "what-baptism-is") return WHAT_BAPTISM_IS;
    if (tab === "believers-baptism") return BELIEVERS_BAPTISM;
    if (tab === "infant-baptism") return INFANT_BAPTISM;
    if (tab === "baptismal-regeneration") return BAPTISMAL_REGENERATION;
    if (tab === "mode") return MODE_OF_BAPTISM;
    return [];
  }

  const tabColors: Record<string, string> = {
    "what-baptism-is": TEAL,
    "believers-baptism": GREEN,
    "infant-baptism": PURPLE,
    "baptismal-regeneration": GOLD,
    mode: TEAL,
    videos: PURPLE,
  };

  const accentColor = tabColors[tab] ?? TEAL;

  const tabLabels: Record<string, string> = {
    "what-baptism-is": "What Baptism Is",
    "believers-baptism": "Believer’s Baptism",
    "infant-baptism": "Infant Baptism (Paedobaptism)",
    "baptismal-regeneration": "Baptismal Regeneration",
    mode: "Mode of Baptism",
    videos: "Videos",
  };

  const tabDescriptions: Record<string, string> = {
    "what-baptism-is":
      "The New Testament background to Christian baptism — its origins in John’s baptism of repentance, its institution by Christ, and what it signifies and may effect.",
    "believers-baptism":
      "The Baptist and Anabaptist position: only conscious believers should be baptized. Baptism is a public profession of faith, not a sacrament that confers grace.",
    "infant-baptism":
      "The Reformed and Lutheran position: baptism as the sign and seal of the covenant, administered to the children of believers as circumcision was to Israel’s children.",
    "baptismal-regeneration":
      "The Catholic and some Lutheran position that baptism actually effects regeneration — and the Baptist and Reformed responses.",
    mode: "Immersion, pouring, or sprinkling? What the Greek word baptizo means, what the Didache teaches, and whether mode is essential to a valid baptism.",
    videos: "Video teaching on the theology of baptism from multiple traditions.",
  };

  const items = getItems();

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        minHeight: "100vh",
        color: TEXT,
      }}
    >
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: 2,
                color: TEAL,
                textTransform: "uppercase",
              }}
            >
              Christian Theology
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            The Theology of Baptism
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            Believer&rsquo;s baptism or infant baptism? Immersion, pouring, or sprinkling? Does
            baptism regenerate? What does it signify? These questions have divided Christians since
            the Reformation &mdash; and answering them requires careful attention to the New
            Testament, the early church, and the structure of the covenant.
          </p>
        </div>

        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setTab(t.id);
                setOpenIdx(null);
              }}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: "0.82rem",
                background: tab === t.id ? accentColor : "transparent",
                color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? accentColor : BORDER}`,
                cursor: "pointer",
                transition: "all .18s",
              }}
              dangerouslySetInnerHTML={{ __html: t.label }}
            />
          ))}
        </div>

        {/* Tab heading */}
        {tab !== "videos" && (
          <div style={{ marginBottom: "1.5rem" }}>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "1.3rem",
                color: accentColor,
                marginBottom: "0.4rem",
              }}
            >
              {tabLabels[tab]}
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              {tabDescriptions[tab]}
            </p>
          </div>
        )}

        {/* Content tabs */}
        {tab !== "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {items.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={i} style={{ ...card, padding: 0, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem 1.25rem",
                      background: isOpen ? `${item.color}12` : "transparent",
                      border: "none",
                      borderBottom: isOpen ? `1px solid ${item.color}30` : "1px solid transparent",
                      cursor: "pointer",
                      color: TEXT,
                      fontWeight: 700,
                      fontSize: "1rem",
                      transition: "all .2s",
                    }}
                  >
                    <span
                      style={{ color: isOpen ? item.color : TEXT }}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <span
                      style={{
                        color: item.color,
                        fontSize: "1.3rem",
                        fontWeight: 400,
                        flexShrink: 0,
                        marginLeft: "1rem",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "1rem 1.25rem",
                        background: `${item.color}08`,
                      }}
                    >
                      <p
                        style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Videos tab */}
        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "1.3rem",
                marginBottom: "0.5rem",
                color: PURPLE,
              }}
            >
              Video Teaching on Baptism
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Perspectives from multiple traditions on the meaning, subjects, and mode of baptism.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <p
                    style={{
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.5rem",
                      fontSize: "0.95rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                  <VideoEmbed videoId={v.videoId} title={v.title.replace(/&[a-z]+;/g, "’")} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Texts Panel */}
        <div
          style={{
            ...card,
            marginTop: "2rem",
            borderLeft: `3px solid ${TEAL}`,
          }}
        >
          <h3 style={{ fontWeight: 800, color: TEAL, marginBottom: "1rem", fontSize: "1rem" }}>
            Key Texts on Baptism
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                ref: "Matthew 28:19",
                text: "Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
                color: GREEN,
              },
              {
                ref: "Romans 6:3–4",
                text: "All of us who were baptized into Christ Jesus were baptized into his death... buried with him through baptism into death in order that... we too may live a new life.",
                color: PURPLE,
              },
              {
                ref: "Acts 2:38",
                text: "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.",
                color: GOLD,
              },
              {
                ref: "Colossians 2:11–12",
                text: "In him you were also circumcised with a circumcision not performed by human hands... having been buried with him in baptism, in which you were also raised with him.",
                color: TEAL,
              },
              {
                ref: "1 Peter 3:21",
                text: "This water symbolizes baptism that now saves you also — not the removal of dirt from the body but the pledge of a clear conscience toward God. It saves you by the resurrection of Jesus Christ.",
                color: GREEN,
              },
              {
                ref: "Titus 3:5",
                text: "He saved us through the washing of rebirth and renewing by the Holy Spirit, whom he poured out on us generously through Jesus Christ our Savior.",
                color: PURPLE,
              },
            ].map((entry) => (
              <div
                key={entry.ref}
                style={{
                  background: `${entry.color}10`,
                  border: `1px solid ${entry.color}30`,
                  borderRadius: 10,
                  padding: "0.85rem 1rem",
                  borderLeft: `3px solid ${entry.color}`,
                }}
              >
                <span
                  style={{
                    fontWeight: 800,
                    color: entry.color,
                    fontSize: "0.82rem",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  {entry.ref}
                </span>
                <p style={{ color: TEXT, lineHeight: 1.65, margin: 0, fontSize: "0.95rem" }}>
                  &ldquo;{entry.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Traditions at a Glance */}
        <div style={{ ...card, marginTop: "1.5rem" }}>
          <h3 style={{ fontWeight: 800, color: GOLD, marginBottom: "1rem", fontSize: "1rem" }}>
            Traditions at a Glance
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {[
              {
                tradition: "Roman Catholic",
                subject: "Infants",
                mode: "Pouring / Sprinkling",
                effect: "Regeneration (ex opere operato)",
                color: GOLD,
              },
              {
                tradition: "Lutheran (Confessional)",
                subject: "Infants",
                mode: "Pouring / Sprinkling",
                effect: "Regeneration (by the Spirit through the Word)",
                color: TEAL,
              },
              {
                tradition: "Reformed / Presbyterian",
                subject: "Infants of believers",
                mode: "Any mode",
                effect: "Sign and seal of covenant promise",
                color: PURPLE,
              },
              {
                tradition: "Anglican",
                subject: "Infants (traditionally)",
                mode: "Pouring / Sprinkling",
                effect: "Varied (sacramental to memorialist)",
                color: GREEN,
              },
              {
                tradition: "Baptist",
                subject: "Believers only",
                mode: "Immersion",
                effect: "Public ordinance; no sacramental effect",
                color: GREEN,
              },
              {
                tradition: "Anabaptist / Mennonite",
                subject: "Believers only",
                mode: "Immersion or Pouring",
                effect: "Ordinance; sign of discipleship",
                color: TEAL,
              },
            ].map((t) => (
              <div
                key={t.tradition}
                style={{
                  background: `${t.color}0A`,
                  border: `1px solid ${t.color}25`,
                  borderRadius: 10,
                  padding: "0.85rem",
                }}
              >
                <span
                  style={{
                    fontWeight: 800,
                    color: t.color,
                    fontSize: "0.85rem",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {t.tradition}
                </span>
                <div style={{ fontSize: "0.8rem", color: MUTED, lineHeight: 1.6 }}>
                  <div>
                    <span style={{ color: TEXT }}>Subjects: </span>
                    {t.subject}
                  </div>
                  <div>
                    <span style={{ color: TEXT }}>Mode: </span>
                    {t.mode}
                  </div>
                  <div>
                    <span style={{ color: TEXT }}>Effect: </span>
                    {t.effect}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
