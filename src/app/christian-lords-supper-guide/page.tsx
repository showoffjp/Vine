"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706";

const TABS = [
  { id: "institution", label: "Words of Institution" },
  { id: "transubstantiation", label: "Transubstantiation" },
  { id: "lutheran-reformed", label: "Lutheran & Reformed" },
  { id: "memorial", label: "Memorial View" },
  { id: "community", label: "Supper & Community" },
  { id: "videos", label: "Videos" },
];

const INSTITUTION_CARDS = [
  {
    title: "The Four Accounts and Their Relationship",
    body: "The Lord&rsquo;s Supper is recorded in four places: Matthew 26:26&ndash;29, Mark 14:22&ndash;25, Luke 22:14&ndash;20, and 1 Corinthians 11:23&ndash;26. Paul&rsquo;s account in 1 Corinthians is the earliest written record &mdash; composed around AD 53&ndash;55, before any of the Gospels. Paul explicitly says he &ldquo;received&rdquo; this tradition, tracing it to the Lord himself. Matthew and Mark are closely parallel; Luke and Paul share distinctive elements (the cup after supper, the command &ldquo;do this in remembrance of me&rdquo;). Together they form a fourfold witness to a single event of decisive importance.",
  },
  {
    title: "The Words: &ldquo;This Is My Body&rdquo; and &ldquo;This Is My Blood of the Covenant&rdquo;",
    body: "Jesus took bread, gave thanks, broke it, and said: &ldquo;This is my body.&rdquo; He then took the cup and said: &ldquo;This is my blood of the covenant, which is poured out for many&rdquo; (Mark 14:22&ndash;24). The phrase &ldquo;blood of the covenant&rdquo; directly echoes Exodus 24:8, where Moses sprinkled blood on the people after the Sinai covenant. Jesus is announcing a new covenant sealed in his own blood. How to interpret the copula &ldquo;is&rdquo; &mdash; literally, figuratively, sacramentally &mdash; has divided the church for five centuries and remains the crux of every debate about Christ&rsquo;s presence in the Supper.",
  },
  {
    title: "The Passover Context &mdash; The Supper as the New Passover",
    body: "The Supper was instituted during a Passover meal (Matt 26:17&ndash;19; Mark 14:12&ndash;16; Luke 22:7&ndash;15). The Passover commemorated Israel&rsquo;s liberation from Egypt through the blood of the lamb. Jesus reframes the Passover elements around himself: he is the lamb whose blood marks the doorpost of a new exodus. Paul makes the typology explicit: &ldquo;Christ, our Passover lamb, has been sacrificed&rdquo; (1 Cor 5:7). The Lord&rsquo;s Supper is not a replacement for the Passover but its fulfillment &mdash; the meal in which the true Passover lamb is remembered, received, and proclaimed.",
  },
  {
    title: "The Eschatological Dimension &mdash; &ldquo;Until He Comes&rdquo;",
    body: "Both Luke and Paul record Jesus saying he will not drink the fruit of the vine again &ldquo;until the kingdom of God comes&rdquo; (Luke 22:18), and Paul adds that every Communion proclaims the Lord&rsquo;s death &ldquo;until he comes&rdquo; (1 Cor 11:26). The Supper is not merely backward-looking; it is eschatologically charged. Every time the church gathers at the Table, it enacts a foretaste of the wedding supper of the Lamb (Rev 19:9). The Supper lives in the tension between the already and the not yet &mdash; Christ has come, Christ is spiritually present, Christ will come again.",
  },
];

const TRANSUBSTANTIATION_CARDS = [
  {
    title: "The Fourth Lateran Council (1215) and the Term Transubstantiation",
    body: "The doctrine of transubstantiation was formally defined at the Fourth Lateran Council in 1215, though the theological concept had been developing since the patristic era. The Council declared that the body and blood of Christ are &ldquo;truly contained in the sacrament of the altar under the forms of bread and wine, the bread and wine having been transubstantiated by divine power into his body and blood.&rdquo; The term became the official Catholic teaching and was reaffirmed at the Council of Trent (1545&ndash;1563) in direct response to Protestant objections.",
  },
  {
    title: "The Aristotelian Substance/Accidents Distinction",
    body: "Transubstantiation is explained through Aristotelian philosophy: every physical thing has a &ldquo;substance&rdquo; (what it truly is) and &ldquo;accidents&rdquo; (its perceptible properties &mdash; color, taste, weight, texture). At consecration, the Catholic view holds that the substance of the bread and wine is converted into the body and blood of Christ while the accidents remain unchanged. This is why the Eucharist still looks, tastes, and feels like bread and wine &mdash; the accidents have not changed &mdash; but its substance is now Christ&rsquo;s body and blood. Thomas Aquinas developed this account in the Summa Theologiae and it remains the standard explanation.",
  },
  {
    title: "The Eucharist as Sacrifice &mdash; Re-Presentation of Calvary",
    body: "In Catholic theology the Mass is a genuine sacrifice &mdash; not a repetition of Calvary, but its re-presentation (making present again). The priest acts in persona Christi (in the person of Christ), and the one sacrifice of Calvary is made sacramentally present on the altar. This is why the Mass is called the sacrifice of the Mass. Protestants object that this undermines Hebrews 10:10&ndash;14, which teaches that Christ&rsquo;s one sacrifice &ldquo;for all time&rdquo; has made the people holy &mdash; implying no further sacrifice is needed or possible. Catholics respond that re-presentation is not repetition and that Calvary&rsquo;s benefits are applied, not re-enacted.",
  },
  {
    title: "How Catholics Receive the Eucharist",
    body: "Only baptized Catholics who are in a state of grace (not conscious of unconfessed mortal sin) may receive Communion. The faithful receive the consecrated host on the tongue or in the hand; in many parishes the cup is also offered. Reception while in mortal sin is itself a grave sin (1 Cor 11:27&ndash;29 is the scriptural basis). The practice of withholding Communion from those not in full communion with the Catholic Church &mdash; closed communion &mdash; follows from the Catholic understanding that the Eucharist is both a cause and an expression of ecclesial unity.",
  },
  {
    title: "Protestant Objections &mdash; Hebrews 10:10&ndash;14",
    body: "The key Protestant objection to transubstantiation as sacrifice is Hebrews 10:10&ndash;14: &ldquo;We have been sanctified through the offering of the body of Jesus Christ once for all&hellip; For by a single offering he has perfected for all time those who are being sanctified.&rdquo; The language is emphatic: &ldquo;once for all&rdquo; (Greek <em>ephapax</em>), &ldquo;a single offering,&rdquo; perfection achieved. The Reformers argued that a repeated or re-presented sacrifice implies the first was insufficient. Luther, Calvin, and Cranmer all pressed this point. The debate over whether the Mass adds to or applies Calvary&rsquo;s benefits remains one of the deepest Protestant-Catholic divides.",
  },
];

const LUTHERAN_REFORMED_CARDS = [
  {
    title: "Luther: Sacramental Union and the Real Presence",
    body: "Luther rejected transubstantiation&rsquo;s Aristotelian framework but insisted on Christ&rsquo;s Real Presence in the Supper with equal force. His formula: the body and blood of Christ are truly present &ldquo;in, with, and under&rdquo; the bread and wine. The bread remains bread; the wine remains wine; yet Christ&rsquo;s body and blood are genuinely and substantially present. Luther grounded this in a literal reading of &ldquo;this is my body&rdquo; &mdash; the word &ldquo;is&rdquo; means &ldquo;is,&rdquo; not &ldquo;signifies.&rdquo; He also appealed to the communicatio idiomatum: because Christ&rsquo;s divine nature is omnipresent, his human nature (including his body) shares in that ubiquity and can be present wherever the sacrament is celebrated.",
  },
  {
    title: "The Marburg Colloquy (1529) &mdash; The Fatal Disagreement",
    body: "In October 1529, Luther and Zwingli met at Marburg Castle for a landmark theological debate arranged by Philip of Hesse, who hoped to unite the German and Swiss Reformations. They agreed on fourteen of fifteen articles. The fifteenth &mdash; the Lord&rsquo;s Supper &mdash; could not be resolved. Luther wrote &ldquo;This is my body&rdquo; on the tablecloth in chalk and refused to yield. Zwingli argued the verb &ldquo;is&rdquo; means &ldquo;signifies&rdquo; (citing John 6:63: &ldquo;the flesh is of no avail&rdquo;). They parted without agreement. The Marburg Colloquy permanently divided the Lutheran and Reformed streams of the Reformation and created the fracture that still marks Protestant eucharistic theology.",
  },
  {
    title: "Calvin: The Spiritual Presence View",
    body: "Calvin sought a middle path between Luther and Zwingli. He rejected both transubstantiation and the bare memorial view. For Calvin, Christ is truly present in the Supper &mdash; but spiritually and dynamically, not physically located in the bread and wine. The Spirit lifts the hearts of believers to heaven where the glorified Christ is, and there they truly feed on him by faith. The elements are &ldquo;signs&rdquo; in the strong sense: they actually convey what they signify to those who receive in faith. Calvin&rsquo;s view is sometimes called receptionism: the presence is real, but actualized in the believing reception rather than in the elements themselves.",
  },
  {
    title: "The Ongoing Reformed-Lutheran Divide",
    body: "The Lutheran confessions (especially the Formula of Concord, 1577) explicitly rejected the Reformed view as insufficient, insisting on a presence &ldquo;in, with, and under&rdquo; the elements that is not dependent on the faith of the recipient. The Reformed tradition (the Heidelberg Catechism, the Westminster Standards) affirmed a genuine spiritual presence but refused to locate that presence in or under the bread and wine. The two traditions have never achieved full agreement. Attempts at fellowship (the Leuenberg Agreement in Europe, various ecumenical dialogues) have made progress but not resolved the core question. The divide reflects genuinely different hermeneutical commitments about the nature of Christ&rsquo;s glorified body and the meaning of sacramental language.",
  },
];

const MEMORIAL_CARDS = [
  {
    title: "Zwingli&rsquo;s Memorial View",
    body: "Ulrich Zwingli, the Zurich Reformer, argued that the Lord&rsquo;s Supper is a commemorative ordinance &mdash; a pledge and memorial rather than a sacrament that conveys grace. The word &ldquo;is&rdquo; in &ldquo;this is my body&rdquo; means &ldquo;signifies&rdquo; (just as &ldquo;I am the vine&rdquo; means &ldquo;I represent the vine&rdquo;). The Supper is an act of public confession and gratitude, not a means through which Christ&rsquo;s body and blood are received. Zwingli&rsquo;s view was shaped partly by his reaction against what he saw as the Catholic confusion of physical and spiritual realities, and partly by John 6:63: &ldquo;the Spirit gives life; the flesh is of no avail.&rdquo; Zwingli died at the Battle of Kappel in 1531 before his eucharistic theology was fully systematized.",
  },
  {
    title: "The Anabaptist and Baptist Tradition",
    body: "The Anabaptists, who emerged from Zwingli&rsquo;s circle in Zurich, adopted and extended his memorial view. They preferred the term &ldquo;ordinance&rdquo; to &ldquo;sacrament&rdquo; to signal that the Supper is something the church does in obedience to Christ&rsquo;s command (&ldquo;do this in remembrance of me&rdquo;), not something that works ex opere operato (by the act itself). The Baptist tradition, which emerged in the 17th century and draws heavily on Anabaptist influence, follows the same line. Baptists celebrate the Lord&rsquo;s Supper as an ordinance: a visible symbol of an invisible grace already received, not a channel through which grace is newly conveyed.",
  },
  {
    title: "The Strength of the Memorial View",
    body: "The memorial view has genuine biblical support. Jesus himself said &ldquo;do this in remembrance of me&rdquo; (Luke 22:19; 1 Cor 11:24&ndash;25) &mdash; the language of anamnesis (active remembrance, making present through memory). Paul&rsquo;s instruction in 1 Corinthians 11 repeatedly uses the language of proclamation and remembrance. The view also avoids what critics see as the quasi-magical or mechanical tendencies of sacramental theology. It emphasizes the intentional, volitional engagement of the believer: the Supper is effective because believers come in faith and remember Christ&rsquo;s death, not because the elements have been transformed.",
  },
  {
    title: "The Weakness: 1 Corinthians 10:16",
    body: "The most serious challenge to a purely memorial view is 1 Corinthians 10:16: &ldquo;The cup of blessing that we bless, is it not a participation [Greek <em>koin&#333;nia</em>] in the blood of Christ? The bread that we break, is it not a participation in the body of Christ?&rdquo; Paul uses the strong word <em>koin&#333;nia</em> &mdash; communion, participation, sharing in &mdash; not merely &ldquo;memorial of.&rdquo; He then draws an analogy with eating food sacrificed to idols, which he treats as genuine spiritual participation in the demonic (v. 20&ndash;21). If pagan ritual produces actual spiritual communion with demons, the Lord&rsquo;s Supper must produce actual spiritual communion with Christ &mdash; not merely a mental recollection of him.",
  },
];

const COMMUNITY_CARDS = [
  {
    title: "1 Corinthians 11:17&ndash;34 &mdash; Paul&rsquo;s Rebuke",
    body: "Paul&rsquo;s most extended treatment of the Lord&rsquo;s Supper is a rebuke. The Corinthians gathered for the Supper but ate in a way that shamed the poor: wealthy members arrived early and ate their fill, while those who came later (presumably enslaved people or day laborers) went hungry. &ldquo;When you come together, it is not the Lord&rsquo;s Supper that you eat&rdquo; (1 Cor 11:20). Paul says their gathering does &ldquo;more harm than good&rdquo; (v. 17). The Supper cannot be performed while the community is fractured by economic contempt. The horizontal dimension &mdash; how we treat each other &mdash; is inseparable from the vertical dimension &mdash; how we approach God.",
  },
  {
    title: "One Bread, One Body &mdash; The Supper as Communal Act",
    body: "1 Corinthians 10:17 makes the ecclesiological claim explicit: &ldquo;Because there is one bread, we who are many are one body, for we all partake of the one bread.&rdquo; The unity of the body is not merely spiritual or metaphorical; it is enacted and constituted by the shared meal. The Lord&rsquo;s Supper is not an individual devotional act performed simultaneously by many people; it is a corporate act through which the many are made one. This means that a divided Table &mdash; one that excludes the poor, that separates races, that ignores conflict within the body &mdash; is not merely bad practice; it contradicts the very thing the Supper proclaims.",
  },
  {
    title: "The Fence Around the Table &mdash; Closed vs. Open Communion",
    body: "Who may receive at the Table is a serious pastoral and theological question that every tradition must answer. Closed communion (practiced by Catholics, Lutherans, some Reformed, many Baptists) restricts the Supper to members of a particular church or tradition, on the grounds that the Supper is an expression of full ecclesial unity and that unworthy reception brings judgment (1 Cor 11:27&ndash;29). Open communion (practiced by many evangelical and charismatic churches) invites all baptized Christians who are examining themselves. The debate is not about hospitality vs. exclusiveness but about what the Table means: if it is a sign of already-existing unity, it must be bounded; if it is an invitation to come, it may be opened.",
  },
  {
    title: "The Supper as Enacted Gospel",
    body: "1 Corinthians 11:26 describes the Supper as proclamation: &ldquo;For as often as you eat this bread and drink the cup, you proclaim the Lord&rsquo;s death until he comes.&rdquo; The Supper is not silent ritual; it is gospel announcement in physical form. Every element of the Supper preaches: the bread (his body given), the cup (his blood poured out), the eating and drinking (personal reception of what he accomplished), the communal act (we proclaim together), the temporal horizon (until he comes). When a congregation takes the Supper, it performs the gospel &mdash; it enacts in embodied, communal, repeated form the death and anticipated return of Christ.",
  },
  {
    title: "Frequency and Formation",
    body: "How often the church takes the Supper shapes what the church becomes. The early church broke bread &ldquo;on the first day of every week&rdquo; (Acts 20:7; cf. Acts 2:42, 46). Weekly Communion was the norm for at least the first millennium. The Reformers largely retained it; the Puritans reduced it out of concern for worthy reception; many contemporary evangelical churches take it monthly or quarterly. The argument for frequent Communion is formational: the enacted gospel of the Supper shapes desire, forms community, and rehearses the story of redemption. Infrequent Communion, whatever the intention, tends to make the Supper a special event rather than the regular food of the Christian community.",
  },
];

export default function LordsSupperGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("institution");

  useEffect(() => { setLoaded(true); }, []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: PURPLE + "33", color: PURPLE, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Theology &amp; Sacraments</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Christian Lord&rsquo;s Supper Guide
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          The Lord&rsquo;s Supper is the most contested meal in Christian history. From the upper room to five centuries of Reformation debate, the questions of what happens at the Table, who may come, and what the meal means have shaped the church&rsquo;s identity, divided its communions, and formed its people. This guide surveys the full theological landscape.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? GOLD : BORDER,
              background: tab === t.id ? GOLD + "22" : "transparent",
              color: tab === t.id ? GOLD : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {tab === "institution" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {INSTITUTION_CARDS.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {tab === "transubstantiation" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {TRANSUBSTANTIATION_CARDS.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {tab === "lutheran-reformed" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {LUTHERAN_REFORMED_CARDS.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {tab === "memorial" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {MEMORIAL_CARDS.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {tab === "community" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {COMMUNITY_CARDS.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GOLD, margin: "0 0 0.5rem" }}>Videos on the Lord&rsquo;s Supper</h2>
            <VideoEmbed videoId="3TLSNJkKRQg" title="Tim Keller on the Lord&rsquo;s Supper" />
            <VideoEmbed videoId="GWuygKFYNX4" title="RC Sproul on the Real Presence" />
            <VideoEmbed videoId="SJuGnfaaCe4" title="Lord&rsquo;s Supper Theology Overview" />
          </div>
        )}

      </main>
    </div>
  );
}
