"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", ROSE = "#E11D48";

const TABS = [
  { id: "biblical", label: "The Biblical Basis" },
  { id: "nicene", label: "The Nicene Creed" },
  { id: "heresies", label: "The Great Heresies" },
  { id: "perichoresis", label: "Perichoresis" },
  { id: "life", label: "Trinity and Christian Life" },
  { id: "videos", label: "Videos" },
];

const BIBLICAL_SECTIONS = [
  {
    title: "The Shema and Jewish Monotheism",
    color: GOLD,
    desc: "Deuteronomy 6:4 — \"Hear, O Israel: The LORD our God, the LORD is one\" — is the bedrock of Jewish monotheism and the starting point for all Trinitarian theology. The Trinity is not three gods but the God of Israel. Yet the Hebrew word echad (one) allows for a composite unity: the same word describes a man and woman becoming \"one flesh\" (Gen 2:24) and the cluster of grapes (Num 13:23). The early church did not abandon Jewish monotheism — they were pressed by the data of Jesus and the Spirit to re-describe what that one God is like.",
  },
  {
    title: "New Testament Evidence",
    color: BLUE,
    desc: "The NT provides the data the doctrine of the Trinity synthesizes. Matthew 28:19 commands baptism in the singular \"name\" of Father, Son, and Holy Spirit — one name, three persons. 2 Corinthians 13:14 offers the earliest Trinitarian benediction: \"the grace of the Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit.\" John 1:1–14 identifies Jesus as the eternal Word who \"was God\" and \"became flesh.\" Hebrews 1:3 says the Son is \"the exact representation of his being\" (charakter tes hypostaseos). The Spirit is identified as God in Acts 5:3–4.",
  },
  {
    title: "The Deity of the Spirit: Acts 5:3–4",
    color: TEAL,
    desc: "Acts 5:3–4 is the clearest NT statement of the Spirit's deity. Ananias is told he has \"lied to the Holy Spirit\" (v.3) and then immediately that he has \"lied... to God\" (v.4). The equation is explicit: lying to the Spirit is lying to God. This passage, combined with the Spirit's omniscience (1 Cor 2:10–11), omnipresence (Ps 139:7), and the Trinitarian formula of Matthew 28:19, provides the exegetical foundation for affirming the Spirit as fully God — the third person of the Trinity.",
  },
  {
    title: "Economic vs. Immanent Trinity",
    color: PURPLE,
    desc: "The economic Trinity refers to how the three persons act in creation and redemption — Father sends, Son is sent, Spirit is poured out. The immanent Trinity (or ontological Trinity) refers to who God is in himself, apart from creation — the eternal relations of Father, Son, and Spirit. Karl Rahner’s Rule states: \"The economic Trinity is the immanent Trinity and vice versa.\" In other words, what God does in salvation history reveals who God really is eternally. The Father who sends is not playing a role — he is eternally the Father.",
  },
  {
    title: "How the Early Church Worked This Out",
    color: GREEN,
    desc: "The early church did not begin with a ready-made doctrine of the Trinity. They began with the monotheism of Israel, the worship of Jesus alongside God (Philippians 2:9–11; Rev 5:12–13), and the experience of the Spirit as God among them. The question forced by this data: how can there be one God if the Father is God, the Son is God, and the Spirit is God? The church worked through this over three centuries, rejecting subordinationism (Son is less than God), modalism (God in three modes), and tritheism (three gods) before arriving at the Nicene formula.",
  },
];

const NICENE_SECTIONS = [
  {
    title: "The Council of Nicaea (325 AD) and the Arian Crisis",
    color: GOLD,
    desc: "Arius, a presbyter in Alexandria, taught that the Son was the greatest of all created beings — the first and highest creature — but not of the same divine substance as the Father. His slogan: \"There was when he was not.\" This preserved simple monotheism but denied the Son's full deity. The Council of Nicaea (325 AD) was called by Constantine to resolve the controversy. It condemned Arianism and produced a creed affirming the Son as homoousios (of the same substance) with the Father — fully God, not a demi-god.",
  },
  {
    title: "Athanasius Contra Mundum",
    color: ROSE,
    desc: "Athanasius of Alexandria was the great champion of Nicene orthodoxy. He served as bishop for 45 years and was exiled five times by emperors sympathetic to Arianism. When told he stood against the whole world, he replied: \"Then Athanasius contra mundum\" (Athanasius against the world). His central argument: if the Son is not fully God, he cannot save us. Only God can forgive sins and restore the divine image (Gen 1:26). A creature cannot accomplish what only the Creator can do. Salvation requires a divine Savior.",
  },
  {
    title: "Homoousios vs. Homoiousios",
    color: BLUE,
    desc: "The great controversy of the 4th century hung on a single Greek letter: homoousios (same substance) vs. homoiousios (similar substance). Arianism held the Son is heteroousios (different substance) — fully created. Semi-Arians proposed homoiousios — like the Father but not identical. Nicene orthodoxy insisted on homoousios — the Son is of the very same divine essence as the Father. Philip Schaff later observed that the most important question in Christian history was decided by a single iota (Greek i).",
  },
  {
    title: "The Council of Constantinople (381 AD)",
    color: TEAL,
    desc: "The Council of Constantinople completed the Nicene Creed and addressed the pneumatomachians (\"Spirit-fighters\") — those who affirmed the Son's full deity but denied the Spirit's. Led by the Cappadocian Fathers (Basil of Caesarea, Gregory of Nyssa, Gregory of Nazianzus), Constantinople affirmed the Spirit as \"the Lord and Giver of life, who proceeds from the Father, who together with the Father and the Son is worshiped and glorified.\" The Spirit received the same doxology as Father and Son.",
  },
  {
    title: "The Filioque Controversy",
    color: PURPLE,
    desc: "The Western church, beginning in Spain (589 AD), added filioque (\"and from the Son\") to the Nicene Creed: the Spirit proceeds from the Father and the Son. This was a theological development — Augustine had argued that the Spirit is the mutual love of Father and Son, and therefore proceeds from both. The Eastern church rejected this addition as unauthorized and as implying two sources in the Godhead. The filioque became a major fault line in the Great Schism of 1054 that separated Eastern Orthodoxy from Western Catholicism.",
  },
  {
    title: "What the Creeds Protect",
    color: GREEN,
    desc: "The Nicene Creed is not a human addition to Scripture — it is a summary of what Scripture teaches, designed to exclude specific errors. It protects the full deity of the Son against Arianism, the full deity of the Spirit against pneumatomachianism, the personal distinction of the three against modalism, and the unity of God against tritheism. To abandon the creeds is not to be more biblical but to be more vulnerable to the ancient errors they were written to prevent. The creeds are guardrails, not innovations.",
  },
];

const HERESIES_SECTIONS = [
  {
    title: "Arianism: Jesus Is Not Fully God",
    color: ROSE,
    desc: "Arianism teaches that the Son is the greatest created being — not fully God. The Son had a beginning; God did not. Arius’s slogan: \"There was when he was not.\" This view is still present today in Jehovah’s Witnesses, who translate John 1:1 as \"the Word was a god\" and deny the Trinity. Mormonism teaches multiple gods. Arianism seems to preserve monotheism but guts the gospel: if Jesus is not fully God, he cannot save — a creature cannot bear infinite guilt or restore the divine image. Nicaea’s homoousios was the orthodox answer.",
  },
  {
    title: "Modalism / Sabellianism",
    color: GOLD,
    desc: "Modalism (named for Sabellius, 3rd century) teaches that Father, Son, and Spirit are not three distinct persons but three successive modes or masks of the one God. God revealed himself as Father in the OT, as Son in the Incarnation, and as Spirit at Pentecost. This seems monotheistic but destroys real relationships within the Godhead — the Father cannot send the Son if they are the same person, and Jesus cannot pray to the Father if there is only one person. Modern form: Oneness Pentecostalism, which baptizes \"in Jesus’ name only\" and denies three simultaneous persons.",
  },
  {
    title: "Tritheism: Three Gods",
    color: BLUE,
    desc: "Tritheism denies the numerical unity of God — treating Father, Son, and Spirit as three separate divine beings who cooperate. This is the opposite error from modalism. No major Christian tradition explicitly holds tritheism, but some critics argue that Social Trinitarianism (emphasizing the three persons so strongly that their unity becomes merely relational or social) slides toward tritheism. Mormon theology, with its multiple Gods who are separate beings, is a form of tritheism, though Mormonism has its own distinct theological categories.",
  },
  {
    title: "Subordinationism",
    color: TEAL,
    desc: "Subordinationism holds that the Son (or Spirit) is ontologically inferior to the Father — not just economically ordered but essentially less divine. The Eternal Subordination of the Son (ESS) debate in contemporary evangelicalism asked whether the Son is eternally subordinate in authority to the Father (not just during the Incarnation). Most systematic theologians (Bruce Ware, Wayne Grudem debated this; most concluded ESS goes too far) hold that the Son’s submission in the Incarnation is economic, not essential — based on Nicene equality of being.",
  },
  {
    title: "Why the Heresies Matter Pastorally",
    color: PURPLE,
    desc: "The Trinitarian heresies are not merely academic curiosities. Arianism produces a diminished savior who cannot fully save. Modalism produces a confused picture of prayer and salvation (who is Jesus praying to if there is only one person?). Tritheism undermines the unity that is the basis of Christian community (Eph 4:4–6). The heresies matter because they distort the God who is actually there — and a distorted God cannot grant the salvation, relationship, and community that the real Triune God offers. Correct theology is pastoral, not merely academic.",
  },
];

const PERICHORESIS_SECTIONS = [
  {
    title: "The Theological Term",
    color: TEAL,
    desc: "Perichoresis (Greek: mutual indwelling, interpenetration; Latin: circumincessio) is the theological term for the mutual indwelling of the three persons of the Trinity in one another. Each person fully contains and is fully contained by the other two — not three isolated centers of consciousness but three persons in eternal, total, mutual self-giving. John of Damascus (8th century) systematized the term. It distinguishes orthodox Trinitarianism from both modalism (one person in three modes) and tritheism (three separate beings).",
  },
  {
    title: "John 14–17: The Biblical Window",
    color: BLUE,
    desc: "John 14–17 provides the most sustained biblical window into Trinitarian perichoresis. \"I am in the Father and the Father is in me\" (John 14:11). \"The Father who dwells in me does his works\" (John 14:10). \"We will come to him and make our home with him\" (John 14:23). The High Priestly Prayer (John 17) is saturated with mutual indwelling: \"I in them and you in me, that they may become perfectly one\" (17:23). The relationship of Father and Son is the pattern into which believers are drawn through the Spirit.",
  },
  {
    title: "The Divine Dance Metaphor",
    color: GOLD,
    desc: "Some theologians have used the metaphor of a divine dance (perichorein can mean both indwelling and dancing) to capture the dynamic, joyful, mutual self-giving of the Trinitarian persons. Richard of St. Victor (12th century), Cornelius Plantinga Jr., and C. Baxter Kruger have developed this image. The Trinity is not a static hierarchy but a dynamic communion of love — the Father pours himself into the Son, the Son glorifies the Father, the Spirit is the expression and gift of that love. Caution: the dance metaphor can become sentimental if not grounded in biblical categories.",
  },
  {
    title: "Relational Ontology of the Trinity",
    color: PURPLE,
    desc: "Classical Western theology (Augustine, Aquinas) tended to speak of God as simple divine substance with relational distinctions. Contemporary theologians have proposed a relational ontology: the persons are not individuals who happen to be in relationship but are constituted by their relations. The Father is Father only in relation to the Son; the Son is Son only in relation to the Father. John Zizioulas argues that personhood and communion are ontologically foundational — being is being-in-relation. This has radical implications for understanding human personhood made in God’s image.",
  },
  {
    title: "Colin Gunton and Jürgen Moltmann on the Social Trinity",
    color: GREEN,
    desc: "Colin Gunton (The One, the Three and the Many) and Jürgen Moltmann (The Trinity and the Kingdom) developed social Trinitarianism: the Trinity as a community of three persons whose mutual love and self-giving is the ontological basis of created reality. Moltmann argued that the cross was a Trinitarian event: the Father suffers the death of the Son; the Son suffers abandonment by the Father; the Spirit is the bond of their communion through the cross. Critics note that both thinkers sometimes push so hard on the distinctness of persons that the unity of God is endangered.",
  },
  {
    title: "How the Trinity Grounds Human Community",
    color: ROSE,
    desc: "If the Triune God is the ultimate reality, and if human beings are made in God’s image (Gen 1:26–27), then human community reflects the Trinitarian structure of reality. \"It is not good for man to be alone\" (Gen 2:18) is not merely a practical observation but a theological one: the God in whose image we are made is never alone. John 17:21–23 explicitly grounds the church’s unity in the Trinitarian communion: \"that all of them may be one, Father, just as you are in me and I am in you.\" The Trinity is not a doctrine to be believed but a community to be entered.",
  },
];

const LIFE_SECTIONS = [
  {
    title: "Prayer Shaped by the Trinity",
    color: BLUE,
    desc: "Christian prayer is intrinsically Trinitarian: we pray to the Father (Matt 6:9), through the Son (John 14:13–14; 16:23–26), in the Spirit (Rom 8:26–27; Eph 6:18). The Spirit intercedes when we cannot find words (Rom 8:26); the Son mediates our prayers as our high priest (Heb 7:25); the Father receives us as his children. When we pray, we are not speaking into the void but entering into the Trinitarian communion — participating in the Son’s eternal conversation with the Father, empowered by the Spirit.",
  },
  {
    title: "Doxology as Trinitarian",
    color: GOLD,
    desc: "The great doxologies of the Christian tradition are Trinitarian: \"Glory to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end.\" The ancient liturgies structure worship in Trinitarian movement: addressed to the Father, through the Son, in the power of the Spirit. Baptismal formula is Trinitarian (Matt 28:19). The Nicene Creed is structured in three articles: the Father’s work in creation, the Son’s work in redemption, and the Spirit’s work in sanctification.",
  },
  {
    title: "The Trinity and the Ethics of Relationship",
    color: TEAL,
    desc: "Trinitarian theology grounds a relational ethic: because God himself is a communion of self-giving love, human relationships are at their best when they reflect that pattern. The husband-wife relationship (Eph 5:25–33) is modeled on Christ’s self-giving love for the church. The church’s unity (Eph 4:3–6) reflects the Trinitarian unity. The one-another commands of the NT (love one another, bear with one another, forgive one another, serve one another) are applications of Trinitarian relational ontology to human community.",
  },
  {
    title: "The Trinity and the Gender Debates",
    color: ROSE,
    desc: "The eternal subordination of the Son (ESS) debate has intersected with gender debates in evangelicalism. Some (Bruce Ware, Wayne Grudem in an earlier position) argued that the Son’s eternal subordination to the Father in authority provides a Trinitarian grounding for male headship. Critics (Kevin Giles, Liam Goligher, Carl Trueman) argued this is a departure from Nicene orthodoxy — making the Son eternally less in authority, not just economically ordered for the Incarnation. Most systematic theologians now agree that gender complementarity must be grounded on other bases, not on the eternal subordination of the Son.",
  },
  {
    title: "Michael Reeves: Delighting in the Trinity",
    color: PURPLE,
    desc: "Michael Reeves’ Delighting in the Trinity (2012) is the most accessible and joyful introduction to Trinitarian theology for lay readers. Reeves argues that the Trinity is not a dry theological problem but the very reason God is love, the reason creation exists, and the reason salvation is possible. A unitarian God could not be love before creation — there would be no one to love. But the Triune God is love eternally: the Father loves the Son in the Spirit. Creation flows from overflow of that love; salvation is being drawn into it. The Trinity is not a burden to orthodoxy but its greatest treasure.",
  },
  {
    title: "Mission Flows from the Trinitarian Life",
    color: GREEN,
    desc: "The missio Dei (mission of God) is rooted in the sending relations of the Trinity. The Father sends the Son (John 3:16–17); the Son sends the Spirit (John 15:26; 16:7); the Son sends the church as the Father sent him (John 20:21). Mission is not primarily a human program or ecclesial strategy but a participation in God’s own outward-moving life of love. The Trinity’s eternal self-giving becomes history’s self-giving through the Incarnation, Pentecost, and the church’s witness to the ends of the earth.",
  },
];

const VIDEOS = [
  { videoId: "0KQHXM9WECA", title: "Tim Keller on the Trinity" },
  { videoId: "mwNKRB3xHiI", title: "RC Sproul — What Is the Trinity" },
  { videoId: "rE3fDqcC-Hg", title: "Michael Reeves — Delighting in the Trinity" },
];

export default function ChristianTrinityGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("biblical");
  const [openItem, setOpenItem] = useState("");

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  const currentSections =
    tab === "biblical" ? BIBLICAL_SECTIONS :
    tab === "nicene" ? NICENE_SECTIONS :
    tab === "heresies" ? HERESIES_SECTIONS :
    tab === "perichoresis" ? PERICHORESIS_SECTIONS :
    tab === "life" ? LIFE_SECTIONS : [];

  const accentColor =
    tab === "biblical" ? GOLD :
    tab === "nicene" ? BLUE :
    tab === "heresies" ? ROSE :
    tab === "perichoresis" ? TEAL :
    tab === "life" ? PURPLE : PURPLE;

  const tabTitle =
    tab === "biblical" ? "The Biblical Basis" :
    tab === "nicene" ? "The Nicene Creed" :
    tab === "heresies" ? "The Great Heresies" :
    tab === "perichoresis" ? "Perichoresis" :
    tab === "life" ? "Trinity and Christian Life" : "Videos";

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: PURPLE, textTransform: "uppercase" }}>Christian Theology</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Trinity Guide
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            The doctrine of the Trinity &mdash; one God eternally existing as Father, Son, and Holy Spirit. Explore the biblical basis, the Nicene Creed, the great heresies, perichoresis, and how the Trinity shapes Christian life and prayer.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => { setTab(t.id); setOpenItem(""); }}
              style={{
                padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? accentColor : "transparent",
                color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? accentColor : BORDER}`,
                cursor: "pointer", transition: "all .18s"
              }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab !== "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1.25rem", color: accentColor }}>{tabTitle}</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {currentSections.map((section, i) => {
                const key = String(i);
                const open = openItem === key;
                return (
                  <div key={section.title}>
                    <button
                      type="button"
                      style={accordionBtn(open, section.color)}
                      onClick={() => setOpenItem(open ? "" : key)}
                    >
                      <span>{section.title}</span>
                      <span style={{ color: section.color, fontSize: "1.1rem", lineHeight: 1 }}>{open ? "−" : "+"}</span>
                    </button>
                    {open && (
                      <div style={{
                        background: `${section.color}0A`,
                        border: `1px solid ${section.color}20`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}>
                        <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{section.desc}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1.25rem", color: PURPLE }}>
              Video Teaching on the Trinity
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, color: TEXT, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{v.title}</div>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Holy Spirit Guide", href: "/christian-holy-spirit-guide" },
            { label: "Trinity Guide", href: "/trinity-guide" },
            { label: "Christology Guide", href: "/christology-guide" },
            { label: "Theology Proper Guide", href: "/theology-proper-guide" },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
