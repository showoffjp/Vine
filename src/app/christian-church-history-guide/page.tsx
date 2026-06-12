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
const ROSE = "#E11D48";

const tabs = [
  { id: "early", label: "Early Church (1-313 AD)" },
  { id: "councils", label: "Councils &amp; Creeds" },
  { id: "schism", label: "The Great Schism" },
  { id: "reformation", label: "The Reformation" },
  { id: "modern", label: "Modern Church" },
  { id: "videos", label: "Videos" },
];

const earlyItems = [
  {
    title: "Pentecost and the Expansion of the Church",
    text: "The church was born at Pentecost (Acts 2) with the outpouring of the Holy Spirit on 120 disciples in Jerusalem. Within days, 3,000 had been added. The book of Acts narrates the explosive expansion outward: from Jerusalem to Judea and Samaria, along the Roman road network, to Antioch (where believers were first called Christians), across Asia Minor, Greece, and eventually to Rome. Paul&rsquo;s three missionary journeys planted churches in strategic urban centers. By the end of the first century, Christian communities existed from Spain to Mesopotamia. The expansion was largely organic, driven by ordinary believers fleeing persecution and carrying the gospel with them.",
  },
  {
    title: "The Destruction of Jerusalem (70 AD)",
    text: "The Roman destruction of Jerusalem in 70 AD, under Titus, was a catastrophic event that reshaped both Judaism and Christianity. The Temple was razed; the sacrificial system ceased. For Christians, the destruction confirmed Jesus&rsquo;s prophecy (Matthew 24) and severed the church&rsquo;s final institutional ties to Jerusalem. Jewish Christianity survived, but the center of gravity shifted decisively to Antioch, Ephesus, Alexandria, and Rome. The destruction forced Christians to articulate their identity apart from the Temple and the land &mdash; accelerating the development of Scripture, creed, and sacrament as the markers of the community.",
  },
  {
    title: "The Roman Persecutions: Nero to Diocletian",
    text: "The Roman Empire subjected Christians to sporadic and then systematic persecution for nearly three centuries. Nero (64 AD) blamed Christians for the great fire of Rome, inaugurating the first major persecution. Domitian, Decius, Valerian, and Diocletian all launched organized efforts to suppress the church. Diocletian&rsquo;s &ldquo;Great Persecution&rdquo; (303-311 AD) was the most severe: Scriptures were burned, churches demolished, clergy imprisoned and executed. Yet the church grew through persecution. Tertullian&rsquo;s observation became proverbial: &ldquo;The blood of the martyrs is the seed of the church.&rdquo; The willingness to die for the faith was itself a powerful apologetic witness.",
  },
  {
    title: "Martyrdom as Seed: Ignatius, Polycarp, Justin Martyr",
    text: "Ignatius of Antioch (died c. 107 AD) wrote seven letters on his way to martyrdom in Rome that remain among the most important documents of the early church. His letters emphasize the authority of the bishop, the reality of the incarnation against Docetism, and the Eucharist as the &ldquo;medicine of immortality.&rdquo; Polycarp of Smyrna (died c. 155 AD), a disciple of John the Apostle, refused to deny Christ before the proconsul and was burned at the stake at age 86. Justin Martyr (died c. 165 AD) was a philosopher who converted to Christianity and wrote the first major Christian apologetic works, arguing that Christianity was the fulfillment of Greek philosophy.",
  },
  {
    title: "The Catacombs and the Didache",
    text: "The Roman catacombs (underground burial galleries) served as Christian worship spaces during periods of persecution and as vivid testimony to the early church&rsquo;s hope of resurrection. Their artwork &mdash; fish, bread, the Good Shepherd, Jonah &mdash; provides the earliest visual record of Christian symbolism. The <em>Didache</em> (&ldquo;The Teaching of the Twelve Apostles&rdquo;), probably composed in the late first or early second century, is the earliest surviving Christian catechism and church manual. It contains instructions on baptism, fasting, the Eucharist, and church leadership, giving a vivid picture of how the earliest communities ordered their life together.",
  },
  {
    title: "How Persecution Shaped Christian Identity",
    text: "The centuries of persecution forged a distinctively Christian understanding of suffering, witness, and identity. The Greek word for &ldquo;witness&rdquo; (<em>martys</em>) became &ldquo;martyr&rdquo; because the ultimate witness was death. The church developed a robust theology of suffering as participation in Christ&rsquo;s passion (Colossians 1:24). Christian communities cared for the sick during plagues when pagan Romans fled &mdash; the care for the dying was itself evangelistic. The willingness to die rather than offer a pinch of incense to Caesar articulated the fundamental Christian conviction: Caesar is not Lord; Christ is. This political claim, more than any theological abstraction, was what made Christianity dangerous and compelling.",
  },
];

const councilItems = [
  {
    title: "The Edict of Milan (313 AD) and Constantine",
    text: "Constantine&rsquo;s Edict of Milan (313 AD) granted legal tolerance to all religions, including Christianity, ending three centuries of persecution. Constantine himself converted after attributing his military victory at the Milvian Bridge (312 AD) to the Christian God. The church&rsquo;s newfound imperial favor was a double-edged gift: persecution ended, but the temptation of imperial entanglement began. Constantine convened the Council of Nicaea (325 AD), setting a precedent for imperial involvement in theological disputes. The Constantinian settlement transformed the church from a persecuted minority to a socially dominant institution &mdash; a transformation with consequences that are still being assessed.",
  },
  {
    title: "The Council of Nicaea (325 AD) and Arianism",
    text: "The Arian controversy was the first major theological crisis of the post-persecution church. Arius of Alexandria taught that the Son of God was the highest of created beings &mdash; &ldquo;there was a time when he was not.&rdquo; Arianism spread rapidly, winning imperial support at various points and coming close to becoming the official theology of the empire. The Council of Nicaea (325 AD), convened by Constantine, condemned Arianism and produced the Nicene Creed, asserting that the Son is &ldquo;of the same substance&rdquo; (<em>homoousios</em>) as the Father &mdash; not a lesser divine being but fully God. Athanasius, the great defender of Nicene orthodoxy, was exiled five times for his convictions. His courage and tenacity preserved the Trinitarian faith: &ldquo;Athanasius against the world.&rdquo;",
  },
  {
    title: "The Cappadocian Fathers",
    text: "The three Cappadocian Fathers &mdash; Basil of Caesarea, Gregory of Nyssa, and Gregory of Nazianzus &mdash; completed the Trinitarian theology that Nicaea had begun. They clarified the language: three <em>hypostases</em> (persons), one <em>ousia</em> (substance). Gregory of Nyssa&rsquo;s theology of the divine attributes and Basil&rsquo;s work on the Holy Spirit (in <em>On the Holy Spirit</em>) were decisive in establishing the full divinity of the Spirit and thus the full Trinitarian formula affirmed at the Council of Constantinople (381 AD). Gregory of Nazianzus&rsquo;s five &ldquo;Theological Orations&rdquo; remain among the finest theological writing of the patristic period.",
  },
  {
    title: "Augustine and the Fall of Rome",
    text: "Augustine of Hippo (354-430 AD) is the most influential theologian in Western Christianity. His <em>Confessions</em> is the first spiritual autobiography; his <em>City of God</em> was written in response to the sack of Rome (410 AD) by Alaric&rsquo;s Visigoths. The pagan accusation was that Rome fell because it had abandoned its gods for Christ. Augustine&rsquo;s response distinguished the &ldquo;City of God&rdquo; (defined by love of God) from the &ldquo;City of Man&rdquo; (defined by love of self) and argued that Christianity was not responsible for Rome&rsquo;s fall &mdash; Rome&rsquo;s virtues had been corrupted long before. His theology of grace, predestination, and original sin would define Western Christianity for a millennium.",
  },
  {
    title: "The Council of Chalcedon (451 AD)",
    text: "The Council of Chalcedon (451 AD) addressed the question of how the divine and human natures relate in Christ. Against Nestorianism (which divided Christ into two persons) and Eutychianism (which fused the natures), Chalcedon formulated the &ldquo;Chalcedonian definition&rdquo;: Christ is one person in two natures, divine and human, &ldquo;without confusion, without change, without division, without separation.&rdquo; This formula was designed to exclude errors rather than resolve all mysteries. The Chalcedonian definition remains the standard Christological confession of Catholic, Orthodox, and most Protestant traditions. Non-Chalcedonian churches (Oriental Orthodox) still reject it.",
  },
  {
    title: "The Rise of Monasticism and Gregory the Great",
    text: "Monasticism emerged in the third and fourth centuries as a response to the church&rsquo;s growing worldliness after Constantine. Anthony of Egypt (c. 251-356 AD) pioneered the solitary life; Pachomius organized the first communal monastic communities. In the West, Benedict of Nursia (c. 480-547 AD) wrote the <em>Rule of Saint Benedict</em>, which governed Western monasticism for centuries: ora et labora (pray and work), stability, obedience, conversatio morum (ongoing conversion of life). Gregory the Great (Pope, 590-604 AD) reformed the papacy, sent missionaries to the Anglo-Saxons (including Augustine of Canterbury), and developed the theology of purgatory, the Mass as a sacrifice, and the authority of the bishop of Rome &mdash; establishing the medieval papacy&rsquo;s foundations.",
  },
];

const schismItems = [
  {
    title: "The Filioque: East vs. West on the Holy Spirit",
    text: "The word <em>filioque</em> (Latin: &ldquo;and from the Son&rdquo;) was added to the Nicene-Constantinopolitan Creed by Western churches in the sixth and seventh centuries, so that the Spirit proceeds &ldquo;from the Father <em>and the Son</em>&rdquo; rather than &ldquo;from the Father&rdquo; alone. The Eastern church objected that (1) a regional council had no authority to alter a creed ratified by an ecumenical council, and (2) the addition was theologically problematic, subordinating the Spirit to both Father and Son and disrupting the proper relations within the Trinity. The filioque controversy was not merely academic; it reflected deep differences in how East and West approached theological authority and the nature of the Trinity.",
  },
  {
    title: "Papal Authority vs. Patriarchal Collegiality",
    text: "The Western church developed an increasingly high theology of the papacy. Leo I (&ldquo;the Great&rdquo;) argued that the Pope possessed supreme authority over the entire church as Peter&rsquo;s successor. The Eastern church recognized the Bishop of Rome as &ldquo;first among equals&rdquo; (primus inter pares) but not as possessing universal jurisdiction. The East maintained a collegial model: five patriarchates (Rome, Constantinople, Alexandria, Antioch, Jerusalem) in communion, with final authority residing in ecumenical councils rather than a single bishop. When Rome claimed jurisdiction over Eastern churches, Constantinople resisted. The mutual excommunications of 1054 AD formalized the rupture between Michael Cerularius (Patriarch of Constantinople) and Cardinal Humbert (papal legate).",
  },
  {
    title: "The Eastern Orthodox Tradition",
    text: "Eastern Orthodoxy preserves a rich theological and liturgical inheritance distinct from the Western tradition. The theology of <em>theosis</em> (deification) &mdash; that the goal of salvation is participation in the divine nature (2 Peter 1:4) &mdash; is central; Athanasius&rsquo;s famous formula: &ldquo;God became man so that man might become God.&rdquo; The Seventh Ecumenical Council (787 AD) settled the iconoclast controversy by affirming the veneration (not worship) of icons as grounded in the incarnation: if God took on a human face, that face can be depicted. The Divine Liturgy, largely attributed to John Chrysostom, has remained essentially unchanged for over a millennium. Orthodox theology is deeply apophatic: aware of the limits of all human language about God.",
  },
  {
    title: "The Crusades: A Symptom of the Distorted Western Church",
    text: "The Crusades (1095-1291 AD) were military expeditions sanctioned by the papacy to recover the Holy Land from Muslim rule. Pope Urban II&rsquo;s call at Clermont (1095) promised crusaders remission of sins. The First Crusade (1099 AD) captured Jerusalem; subsequent crusades were largely failures. The Fourth Crusade (1204 AD) notoriously sacked Constantinople &mdash; a Christian city &mdash; deepening the East-West rupture irreparably. The Crusades reveal what happens when the church fuses its mission with political and military power: the gospel is distorted, enemies are dehumanized, and the name of Christ is associated with violence. The Crusades remain a wound on the church&rsquo;s memory and a legitimate source of moral reckoning.",
  },
  {
    title: "What the Schism Reveals About Unity and Truth",
    text: "The Great Schism of 1054 AD poses a permanent question to every Christian: what is the relationship between unity and truth? The East prioritized conciliar authority and rejected Roman claims; the West prioritized the papacy and insisted on doctrinal development (filioque). Both sides believed they were defending the truth. The Schism shows that institutional divisions, once calcified over centuries, become almost impossible to undo &mdash; theological differences harden into cultural, linguistic, and political identities. Ecumenical dialogues between Rome and Constantinople have continued for decades with limited progress. The Schism is a standing rebuke to every form of ecclesial triumphalism: the church&rsquo;s unity is a gift of grace, not a human achievement, and it can be lost.",
  },
];

const reformationItems = [
  {
    title: "Luther&rsquo;s 95 Theses and the Corruption They Targeted",
    text: "Martin Luther nailed his 95 Theses to the Wittenberg church door in 1517, primarily targeting the sale of indulgences &mdash; certificates that promised to reduce time in purgatory for the purchaser or their deceased relatives. Johann Tetzel&rsquo;s notorious marketing (&ldquo;As soon as the coin in the coffer rings, a soul from purgatory springs&rdquo;) represented the corruption Luther attacked. But the indulgence controversy quickly exposed deeper questions: On what authority does the church grant forgiveness? Can a pope forgive sins? What is the basis of salvation? Luther&rsquo;s discovery of &ldquo;the righteousness of God&rdquo; in Romans 1:17 &mdash; that God&rsquo;s righteousness is given to the sinner through faith, not earned by merit &mdash; became the theological engine of the Reformation.",
  },
  {
    title: "The Five Solas",
    text: "The Reformation was summarized in five Latin phrases. <em>Sola Scriptura</em> (Scripture alone): the Bible is the supreme authority for faith and practice, not tradition or papal decrees. <em>Sola Fide</em> (faith alone): justification is received through faith, not merit. <em>Sola Gratia</em> (grace alone): salvation is entirely God&rsquo;s gift, not a human achievement. <em>Solus Christus</em> (Christ alone): Jesus is the sole mediator between God and humanity; no saints, priests, or Mary are necessary intermediaries. <em>Soli Deo Gloria</em> (glory to God alone): all of life is to be lived for God&rsquo;s glory, rejecting the sacred-secular divide. These five solas remain the defining commitments of Protestant theology.",
  },
  {
    title: "Calvin and Reformed Theology",
    text: "John Calvin (1509-1564 AD) was the second-generation Reformer whose <em>Institutes of the Christian Religion</em> became the definitive systematic theology of the Reformed tradition. Calvin&rsquo;s theology emphasized the sovereignty of God in all things, including salvation (predestination), and the comprehensive lordship of Christ over all of life. His Geneva experiment attempted a Christian civic order. Calvin&rsquo;s influence flowed through the Reformed churches of France (Huguenots), Scotland (John Knox and Presbyterianism), the Netherlands (Dutch Reformed), and the English Puritans &mdash; shaping entire national cultures. The Westminster Confession of Faith (1646) summarized the Reformed consensus.",
  },
  {
    title: "Zwingli, the Radical Reformation, and the Anabaptists",
    text: "Huldrych Zwingli in Zurich pushed the Reformation further than Luther, abolishing images, ceremonies, and the Mass as sacrifice. His famous debate with Luther at Marburg (1529) on the Lord&rsquo;s Supper &mdash; Luther insisting on real presence, Zwingli insisting on symbolic memorial &mdash; revealed the fractures within Protestantism. More radical still were the Anabaptists (&ldquo;re-baptizers&rdquo;): Conrad Grebel, Felix Manz, and Michael Sattler argued that only believers&rsquo; baptism was biblical, that church and state must be separated, and that Christians must refuse violence. Persecuted by both Catholics and Protestants, the Anabaptists were the ancestors of the Mennonites, Amish, and Baptists.",
  },
  {
    title: "The English Reformation and the Council of Trent",
    text: "The English Reformation was driven as much by Henry VIII&rsquo;s political needs (an annulment the Pope refused to grant) as by theological conviction, though genuine Protestant reformers like Thomas Cranmer shaped its doctrinal content. Cranmer&rsquo;s <em>Book of Common Prayer</em> (1549, 1552) gave English-speaking Christianity its liturgical voice. The Council of Trent (1545-1563 AD) was the Catholic Church&rsquo;s systematic response to the Reformation: it affirmed tradition alongside Scripture, rejected justification by faith alone, clarified the seven sacraments, and reformed genuine abuses (simony, absentee bishops, sale of offices). Trent produced a revitalized Catholicism and the Jesuit order (Ignatius of Loyola), launching the Counter-Reformation.",
  },
  {
    title: "The Wars of Religion and Their Aftermath",
    text: "The Reformation shattered the religious unity of Western Christendom and unleashed a century of devastating religious wars. The French Wars of Religion (1562-1598) culminated in the St. Bartholomew&rsquo;s Day Massacre (1572), in which thousands of Huguenots were killed. The Thirty Years&rsquo; War (1618-1648), fought largely on German soil, killed as much as a third of the German population. The Peace of Westphalia (1648) ended the Wars of Religion and established the principle of cuius regio, eius religio (&ldquo;whose realm, his religion&rdquo;), along with limited religious tolerance. The wars discredited the idea of a single Christian civilization and accelerated the development of secular political theory &mdash; Hobbes, Locke, and the Enlightenment were direct intellectual responses to the horror of confessional warfare.",
  },
];

const modernItems = [
  {
    title: "The First and Second Great Awakenings",
    text: "The First Great Awakening (1730s-1740s) swept through Britain and the American colonies through the preaching of George Whitefield and Jonathan Edwards. Edwards&rsquo;s <em>Sinners in the Hands of an Angry God</em> (1741) was the most famous sermon; his <em>Religious Affections</em> (1746) was the most sophisticated theological analysis of revival. The Second Great Awakening (early 1800s) was centered in camp meetings on the American frontier and Charles Finney&rsquo;s &ldquo;new measures&rdquo; revivals in New York. It produced the abolitionist movement, women&rsquo;s suffrage advocacy, prison reform, and temperance. Both Awakenings shaped American Christianity&rsquo;s characteristic combination of emotional conversion experience and social activism.",
  },
  {
    title: "John Wesley, Methodism, and the Missionary Movement",
    text: "John Wesley (1703-1791 AD) was an Anglican priest whose heart-warming experience at Aldersgate (1738) launched the Methodist revival that transformed British society. Wesley&rsquo;s theology of entire sanctification &mdash; the possibility of a &ldquo;second blessing&rdquo; that purified the heart &mdash; and his disciplined small-group system (the &ldquo;class meeting&rdquo;) were immensely influential. The modern missionary movement was launched by William Carey, a Particular Baptist who sailed to India in 1793. His motto: &ldquo;Expect great things from God; attempt great things for God.&rdquo; Carey&rsquo;s example inspired a century of Protestant missionary expansion: Hudson Taylor in China, David Livingstone in Africa, Adoniram Judson in Burma.",
  },
  {
    title: "The Azusa Street Revival (1906) and Pentecostalism",
    text: "The Azusa Street Revival in Los Angeles (1906-1909), led by William Seymour, launched the Pentecostal movement. Seymour, a Black Holiness preacher, taught that speaking in tongues was the &ldquo;initial evidence&rdquo; of baptism in the Holy Spirit. Azusa Street was remarkable for its racial integration at a time of fierce segregation. Pentecostalism spread globally within decades and is now the fastest-growing segment of world Christianity. The Charismatic Renewal of the 1960s-70s brought Pentecostal spirituality into mainline Protestant and Catholic churches. Together, Pentecostal and Charismatic Christianity now numbers over 600 million adherents worldwide.",
  },
  {
    title: "The Fundamentalist-Modernist Controversy",
    text: "The late nineteenth and early twentieth centuries saw a fierce internal Protestant battle between theological liberals (modernists) who accommodated Christianity to Darwinian evolution, higher biblical criticism, and progressive social thought, and theological conservatives (fundamentalists) who insisted on biblical inerrancy, the virgin birth, the physical resurrection, the substitutionary atonement, and the literal Second Coming. <em>The Fundamentals</em> (1910-1915), a series of pamphlets distributed widely, defined conservative Protestant orthodoxy. The Scopes Trial (1925) became a cultural turning point that associated fundamentalism with anti-intellectualism in the public mind, though the theological questions it raised remain unresolved.",
  },
  {
    title: "The Global South Shift",
    text: "One of the most significant developments in twentieth-century church history is the dramatic shift in Christianity&rsquo;s center of gravity to the Global South. In 1900, approximately 80% of Christians lived in Europe and North America. By 2020, the majority of Christians lived in Africa, Asia, and Latin America. Nigeria, Brazil, China, and South Korea are now among the most significant centers of Christian growth and missionary sending. The house church movement in China &mdash; operating under government restrictions since 1949 &mdash; is estimated to include tens of millions of believers. The Global South church is generally theologically orthodox, supernaturalist, and growing; the Western church is declining and increasingly secularized.",
  },
  {
    title: "Ecumenism and Its Limits",
    text: "The twentieth century produced serious ecumenical efforts: the World Council of Churches (founded 1948), the Second Vatican Council (1962-1965) and its openings toward Protestants and Orthodox, and the Joint Declaration on the Doctrine of Justification between Rome and the Lutheran World Federation (1999). These represent genuine progress. But the limits of ecumenism are also real: structural unity has not followed theological rapprochement; the ordination of women and LGBTQ+ inclusion have deepened divides within Protestantism; and the East-West schism remains unhealed. The most significant ecumenism of the twenty-first century may be the practical cooperation of evangelical, Pentecostal, and Catholic Christians in the Global South around mission, poverty relief, and the common good &mdash; a unity of action even where structural and doctrinal unity remains elusive.",
  },
];

const videoItems = [
  { videoId: "NQxqO3RHRBE", title: "Church History Overview &mdash; Visual Faith Ministry" },
  { videoId: "WvnJXjU3hRY", title: "The Reformation Explained" },
  { videoId: "e2vvmBLYo8E", title: "Early Church History" },
];

export default function ChristianChurchHistoryGuidePage() {
  const [activeTab, setActiveTab] = useState("early");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const getTabColor = (tabId: string) => {
    switch (tabId) {
      case "early": return ROSE;
      case "councils": return GOLD;
      case "schism": return TEAL;
      case "reformation": return GREEN;
      case "modern": return PURPLE;
      default: return MUTED;
    }
  };

  const activeColor = getTabColor(activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem 5rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Church History</div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.4rem)", fontWeight: 800, marginBottom: "0.5rem", lineHeight: 1.2 }}>Christian Church History Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7, maxWidth: 640 }}>
          The story of the church &mdash; from Pentecost to the Global South: persecution, councils, schism, reformation, revival, and the surprising persistence of the gospel through two thousand years of faith and failure.
        </p>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t.id ? getTabColor(t.id) : BORDER}`,
                background: activeTab === t.id ? getTabColor(t.id) + "28" : "transparent",
                color: activeTab === t.id ? getTabColor(t.id) : MUTED,
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: activeTab === t.id ? 700 : 400,
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t.label }}
            />
          ))}
        </div>

        {/* TAB: Early Church */}
        {activeTab === "early" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: ROSE + "18", border: `1px solid ${ROSE}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: ROSE, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                &ldquo;The blood of the martyrs is the seed of the church.&rdquo; &mdash; Tertullian. Three centuries of persecution did not destroy Christianity; they defined it.
              </p>
            </div>
            {earlyItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Councils and Creeds */}
        {activeTab === "councils" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: GOLD + "18", border: `1px solid ${GOLD}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: GOLD, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                The great councils &mdash; Nicaea, Constantinople, Ephesus, Chalcedon &mdash; were not merely academic exercises. They fought for the soul of the gospel: who Jesus is, what salvation is, and whether God truly became flesh.
              </p>
            </div>
            {councilItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Great Schism */}
        {activeTab === "schism" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: TEAL + "18", border: `1px solid ${TEAL}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: TEAL, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                1054 AD: two legates walked into Hagia Sophia and placed a bull of excommunication on the altar. The church that had survived three centuries of imperial persecution divided &mdash; and has not been fully reunited since.
              </p>
            </div>
            {schismItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Reformation */}
        {activeTab === "reformation" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: GREEN + "18", border: `1px solid ${GREEN}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: "#6fcf97", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                October 31, 1517: Luther posts 95 Theses. The Western church had been fracturing for a century; Luther&rsquo;s hammer strike broke it open. Nothing would ever be the same.
              </p>
            </div>
            {reformationItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Modern Church */}
        {activeTab === "modern" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: PURPLE + "18", border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: "#c4b5fd", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                The most surprising fact of twenty-first century Christianity: the church is not dying. It is moving. The Global South is now the center of world Christianity, and the movement is accelerating.
              </p>
            </div>
            {modernItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Videos */}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {videoItems.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.2rem" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: PURPLE, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.title }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
