"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "saints" | "martyrs" | "theology" | "commemoration" | "videos";

const SM_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "The Cloud of Witnesses — Why the Saints Matter", channel: "Gospel in Life", description: "How the lives of those who died for the faith speak into contemporary Christian discipleship." },
  { videoId: "ACZbpLkY8To", title: "Martyrdom in Church History", channel: "Ligonier Ministries", description: "A survey of the great martyrs from Stephen to the modern era — what they believed and how they died." },
  { videoId: "fJnGJN6laqE", title: "Foxe's Book of Martyrs — An Introduction", channel: "Desiring God", description: "The stories behind one of the most influential books in Christian history, and what it means for the persecuted church today." },
  { videoId: "Z8lkuuhVkOI", title: "The Persecuted Church Today", channel: "Open Doors", description: "A look at where Christians are being martyred and imprisoned today, and how the global church can respond." },
];

type Era = "Apostolic" | "Early Church" | "Medieval" | "Reformation" | "Modern" | "Contemporary";

const SAINTS = [
  { name: "Augustine of Hippo", years: "354–430", era: "Early Church" as Era, color: PURPLE, feast: "August 28", desc: "The most influential theologian in Western Christianity after Paul. Born in North Africa, converted through the prayers of his mother Monica and the preaching of Ambrose of Milan, Augustine's Confessions (the first autobiography in history) traces his intellectual and spiritual journey through Manicheism, skepticism, and Neoplatonism to faith in Christ. His City of God is a 22-book theology of history written in response to the sack of Rome. His formulation of the doctrines of grace, predestination, sin, and the Church shaped Catholic, Lutheran, Reformed, and Anglican theology alike.", quote: "You have made us for yourself, O Lord, and our heart is restless until it rests in You.", key_works: "Confessions; The City of God; On the Trinity; On Christian Doctrine" },
  { name: "Francis of Assisi", years: "1181–1226", era: "Medieval" as Era, color: GREEN, feast: "October 4", desc: "Son of a wealthy cloth merchant who renounced everything after hearing Matthew 10:9 read in a church ('take no gold, nor silver, nor copper in your belts, no bag for your journey'). Francis founded the Franciscan Order on the principle of radical poverty in imitation of Christ. He preached to birds, reportedly tamed a wolf terrorizing a village, and received the stigmata (the wounds of Christ) two years before his death. His Canticle of the Sun is one of the earliest poems in the Italian language.", quote: "Lord, make me an instrument of your peace. Where there is hatred, let me sow love.", key_works: "Canticle of the Sun; Rule of the Franciscan Order; Little Flowers of Saint Francis" },
  { name: "Thomas Aquinas", years: "1225–1274", era: "Medieval" as Era, color: "#3B82F6", feast: "January 28", desc: "The greatest systematic theologian of the medieval period, whose Summa Theologica remains the most comprehensive Christian theological system ever attempted — addressing over 600 questions and 10,000 objections. Aquinas synthesized Aristotelian philosophy with Christian theology in a way that shaped Catholic intellectual tradition permanently. Despite being called 'the Dumb Ox' by fellow students (for his quiet demeanor and size), his teacher Albertus Magnus predicted: 'One day the lowing of this Dumb Ox will be heard around the world.'", quote: "To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.", key_works: "Summa Theologica; Summa Contra Gentiles; Commentary on the Sentences" },
  { name: "Teresa of Avila", years: "1515–1582", era: "Reformation" as Era, color: "#EF4444", feast: "October 15", desc: "Spanish Carmelite mystic, reformer of her order, and the first woman declared a Doctor of the Church (1970). Teresa entered the convent at 20 and spent two decades in spiritual mediocrity before a second conversion experience at 39. The Interior Castle describes the soul's journey through seven dwelling places toward union with God. She founded seventeen reformed convents against fierce opposition and, at 52, began traveling across Spain on a mule in all weather to plant communities of contemplative prayer.", quote: "Let nothing disturb you, let nothing frighten you. All things are passing away: God never changes. Patience obtains all things. Whoever has God lacks nothing; God alone suffices.", key_works: "The Interior Castle; The Way of Perfection; The Life of Teresa of Avila (autobiography)" },
  { name: "William Wilberforce", years: "1759–1833", era: "Modern" as Era, color: "#F59E0B", feast: "July 30 (Anglican)", desc: "Member of British Parliament who dedicated his life to abolishing the slave trade after his evangelical conversion in 1785. Wilberforce was advised by John Newton (author of Amazing Grace, himself a former slave trader) to remain in Parliament rather than enter ministry. For twenty years he introduced the abolition bill annually, failing repeatedly. The Slave Trade Act passed in 1807. Slavery in British territories was abolished in 1833; Wilberforce heard the news three days before his death. His 'Practical View of Christianity' (1797) called nominal Christians to genuine faith.", quote: "You may choose to look the other way but you can never say again that you did not know.", key_works: "Practical View of Christianity (1797); A Letter on the Abolition of the Slave Trade" },
  { name: "Amy Carmichael", years: "1867–1951", era: "Modern" as Era, color: "#10B981", feast: undefined, desc: "Irish missionary to India who founded the Dohnavur Fellowship and spent 55 years in South India without a single furlough. Carmichael rescued children — primarily girls — from temple prostitution, a practice that was both illegal and dangerous to oppose. She also wrote 35 books while bedridden for the last 20 years of her life after a serious fall. Jim Elliot described her writing as more influential in his life than any other human author. Her book 'If' — a series of searching questions about love — has shaped generations of missionaries.", quote: "If I have not compassion on my fellow-servant even as my Lord had pity on me, then I know nothing of Calvary love.", key_works: "If; Gold Cord; Toward Jerusalem; Things as They Are" },
  { name: "C.S. Lewis", years: "1898–1963", era: "Modern" as Era, color: "#EC4899", feast: "November 22 (Episcopal)", desc: "Oxford don and Cambridge professor who became the most widely read Christian apologist of the twentieth century. Lewis was an atheist until his gradual conversion at 32, chronicled in 'Surprised by Joy.' He described himself as 'the most reluctant convert in all England.' His Narnia series, Mere Christianity, The Problem of Pain, The Screwtape Letters, and The Four Loves have shaped more adult Christian converts than almost any other modern author. His friendship with J.R.R. Tolkien (who was instrumental in his conversion) produced two of the most significant literary mythologies of the twentieth century.", quote: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.", key_works: "Mere Christianity; The Chronicles of Narnia; The Screwtape Letters; The Problem of Pain; Surprised by Joy" },
  { name: "Corrie ten Boom", years: "1892–1983", era: "Contemporary" as Era, color: "#6366F1", feast: undefined, desc: "Dutch watchmaker who survived the Nazi concentration camps for hiding Jewish families in a secret room ('The Hiding Place') in her family's home in Haarlem. Her father and sister Betsie died in the camps. After her release, Corrie traveled to 60 countries proclaiming forgiveness — and in one of the most remarkable moments in modern testimony, met a guard from Ravensbruck who asked her forgiveness and extended his hand. She prayed for the grace to shake it. The Hiding Place and Tramp for the Lord are among the most widely read Christian testimonies of the twentieth century.", quote: "There is no pit so deep that God's love is not deeper still.", key_works: "The Hiding Place; Tramp for the Lord; Each New Day" },
];

const MARTYRS = [
  { name: "Stephen", died: "c. 34 AD", era: "Apostolic" as Era, color: GREEN, location: "Jerusalem", how: "Stoned to death for his speech before the Sanhedrin (Acts 6-7)", desc: "The first Christian martyr — stoned by the Jewish religious authorities after a sermon that traced Israel's history of rejecting God's prophets and ended with the accusation 'you are just like your ancestors: You always resist the Holy Spirit!' Stephen died praying for his killers, echoing Christ's words from the cross. Saul of Tarsus (Paul) stood watching, 'giving approval to his death.' Stephen's death scattered the Jerusalem church, spreading the gospel to Judea, Samaria, and beyond — exactly as Acts 1:8 predicted.", significance: "Directly caused the gospel's spread beyond Jerusalem; Paul's witness of Stephen's death likely contributed to his eventual conversion" },
  { name: "Polycarp of Smyrna", died: "155–156 AD", era: "Early Church" as Era, color: PURPLE, location: "Smyrna (modern Izmir, Turkey)", how: "Burned at the stake; stabbed when the fire did not consume him", desc: "Bishop of Smyrna who had known the Apostle John personally. At 86, arrested during a public festival and brought to the stadium where the crowd demanded he denounce Christ. His response: 'Eighty-six years I have served him, and he has done me no wrong. How can I blaspheme my King who saved me?' The Martyrdom of Polycarp (c. 156) is the earliest detailed account of a Christian martyrdom outside the New Testament.", significance: "One of the Apostolic Fathers — a living link to the first generation; his martyrdom account established the pattern for all subsequent martyr literature" },
  { name: "Perpetua and Felicity", died: "March 7, 203 AD", era: "Early Church" as Era, color: "#EF4444", location: "Carthage, North Africa", how: "Thrown to wild animals in the arena; killed by gladiator", desc: "Vibia Perpetua, a young noblewoman nursing her infant, and Felicity, her enslaved servant who gave birth to her daughter two days before execution, were martyred in the arena in Carthage. The Passion of Perpetua and Felicity contains Perpetua's own prison diary — one of the earliest writings by a Christian woman. She records visions and the parting from her infant son. Her father, a pagan, begged her repeatedly to recant. She refused.", significance: "One of the earliest surviving texts by a Christian woman; challenged the Roman social hierarchy by placing a noble and an enslaved person as equals in death and glory" },
  { name: "William Tyndale", died: "October 6, 1536", era: "Reformation" as Era, color: "#3B82F6", location: "Vilvoorde Castle, Belgium", how: "Strangled and burned at the stake", desc: "The translator who put the English Bible in the hands of common people. Tyndale translated the New Testament (1526) and portions of the Old Testament into English from the original Greek and Hebrew — a capital offense in England. He lived as a fugitive in Germany and the Low Countries for twelve years, smuggling his translation into England, before being betrayed by a supposed friend. His last words: 'Lord, open the King of England's eyes.' Within four years, Henry VIII had authorized an English Bible — using Tyndale's translation.", significance: "83% of the King James Bible is Tyndale's words; his dying prayer was answered; the English Bible he died to produce has shaped the English language itself" },
  { name: "Dietrich Bonhoeffer", died: "April 9, 1945", era: "Modern" as Era, color: "#F59E0B", location: "Flossenbürg concentration camp, Germany", how: "Hanged by the SS, sixteen days before Germany's surrender", desc: "Lutheran pastor, theologian, and conspirator against Hitler who returned to Germany from safety in America in 1939, saying he could not participate in the post-war rebuilding of Germany if he had not shared in its suffering. He joined the Abwehr (German military intelligence) and participated in the assassination plot against Hitler. Arrested in 1943. Hanged in 1945. His 'Cheap Grace' critique in The Cost of Discipleship changed how a generation understood what it means to follow Christ. His prison letters, written knowing he would die, became 'Letters and Papers from Prison.'", significance: "His theology of costly grace, religionless Christianity, and the church-for-others shaped post-war Protestant theology globally; his martyrdom gave his words moral authority" },
  { name: "Jim Elliot and the Auca Five", died: "January 8, 1956", era: "Contemporary" as Era, color: "#10B981", location: "Ecuador (Curaray River)", how: "Speared to death by the Waodani people they had come to reach", desc: "Five missionary pilots — Jim Elliot, Pete Fleming, Ed McCully, Roger Youderian, and Nate Saint — were killed by the Waodani (then called Aucas), a people who had never had peaceful contact with the outside world. All five left wives and children. Elizabeth Elliot (Jim's wife) and Rachel Saint (Nate's sister) returned to live among the Waodani and saw most of the village come to faith. The tribe who killed the missionaries eventually baptized the missionaries' children. Jim Elliot's journal contained his most famous line.", significance: "Triggered the largest single surge of missionary recruitment in twentieth-century evangelical history; the Waodani people now carry the gospel themselves", quote: "He is no fool who gives what he cannot keep to gain what he cannot lose." },
  { name: "Maximilian Kolbe", died: "August 14, 1941", era: "Modern" as Era, color: "#EC4899", location: "Auschwitz concentration camp, Poland", how: "Lethal phenol injection after surviving starvation in a bunker", desc: "Polish Franciscan priest who volunteered to die in place of a stranger — Franciszek Gajowniczek, a married man with children — when the Nazis selected ten prisoners for death by starvation as reprisal for an escape. Kolbe survived the starvation bunker for two weeks before being injected. Gajowniczek survived the war and attended Kolbe's canonization in 1982. Pope John Paul II, a fellow Pole, called Kolbe a 'martyr of charity.'", significance: "One of the most documented acts of voluntary self-sacrifice in recorded history; his death challenged secular accounts of human nature in the most brutal environment imaginable" },
  { name: "Oscar Romero", died: "March 24, 1980", era: "Contemporary" as Era, color: "#6366F1", location: "San Salvador, El Salvador", how: "Shot by a single sniper while celebrating Mass", desc: "Archbishop of San Salvador who transformed from a conservative, cautious churchman into a prophetic voice for the poor and murdered after his close friend, Father Rutilio Grande, was assassinated in 1977. Romero began broadcasting his Sunday homilies on radio to the entire country — documenting human rights abuses, naming the dead, and calling on soldiers to disobey orders to kill civilians. He wrote to President Carter asking him to stop military aid to El Salvador's government. He was shot the following day. Canonized by Pope Francis in 2018.", significance: "Defined what liberation theology looks like when it costs everything; his canonization was bitterly contested for decades; his homilies are still broadcast in El Salvador" },
];

const THEOLOGY_DATA = [
  { point: "The martyrs are witnesses, not heroes", color: GREEN, content: "The Greek word martys means witness — the martyr is one who testifies to what they have seen and known. Early Christian martyrdom was understood not as heroic resistance but as witness: the martyr confirms by their death that the resurrection is real enough to die for. The Roman arena was, paradoxically, the most effective evangelistic tool in early Christianity — the willingness to die without renouncing Christ was inexplicable except by the reality of what the martyrs claimed." },
  { point: "Cloud of witnesses — we are not alone", color: PURPLE, content: "Hebrews 12:1 describes the faithful of chapter 11 as a 'cloud of witnesses' surrounding the current race. This is not mere metaphor — the writer envisions an ongoing communion with those who have gone before. The liturgical commemoration of saints is not worship of the dead but acknowledgment that the church is not limited to the living. The saints' prayers continue; their examples encourage; their faith becomes ours through the Church's memory." },
  { point: "The distinction between Saint and saint", color: "#3B82F6", content: "In the New Testament, 'saints' (hagioi — holy ones) refers to all Christians (Romans 1:7; 1 Corinthians 1:2). The capitalized 'Saint' designating specific canonized individuals is a later development — the formal Catholic and Orthodox canonization process identifies those whose lives demonstrated heroic virtue and whose intercession has been verified by miracle. Protestant tradition honors these figures as exemplars without doctrinal claims about their post-death ministry." },
  { point: "Imitation, not veneration — what Protestants can receive", color: "#EF4444", content: "The Protestant Reformation rejected the medieval doctrine of merit — that the saints' surplus holiness could be distributed to others — along with prayers to the saints as intercessors. But the Reformers did not reject the saints themselves. Luther, Calvin, and Zwingli all honored the church fathers and early martyrs. Hebrews 13:7 commands: 'Remember your leaders, those who spoke to you the word of God. Consider the outcome of their way of life, and imitate their faith.' The saints are models, not mediators." },
  { point: "The blood of martyrs — tertullian's insight", color: "#F59E0B", content: "Tertullian (c. 197 AD): 'The blood of the martyrs is the seed of the church.' He was observing an empirical phenomenon: persecution consistently produces growth. The Roman empire's attempt to eradicate Christianity through execution produced exactly the opposite — the willingness of Christians to die convinced observers that something unprecedented was happening. The same pattern has repeated in China, Sudan, Iran, and North Korea in the twentieth and twenty-first centuries." },
  { point: "Foxe's Book of Martyrs — the Protestant martyrology", color: "#10B981", content: "John Foxe's Acts and Monuments (1563) — known as Foxe's Book of Martyrs — was required reading in every English church alongside the Bible and the Book of Common Prayer for two centuries. It documented Protestant martyrs under Mary I's reign in England (1553-1558) with detailed accounts of their trials and deaths. The book shaped English Protestant identity and the conviction that faithfulness to Scripture might cost everything. Available free at johnfoxe.org." },
];

const COMMEMORATION = [
  { period: "January", saints: "January 17: Anthony of Egypt (founder of monasticism); January 25: Conversion of Paul; January 28: Thomas Aquinas", color: GREEN },
  { period: "February", saints: "February 14: Cyril and Methodius (missionaries to the Slavs, creators of the Cyrillic alphabet); February 23: Polycarp of Smyrna", color: PURPLE },
  { period: "March", saints: "March 7: Perpetua and Felicity; March 17: Patrick of Ireland; March 19: Joseph; March 25: Annunciation", color: "#3B82F6" },
  { period: "April", saints: "April 9: Dietrich Bonhoeffer (date of death, 1945); April 21: Anselm of Canterbury", color: "#EF4444" },
  { period: "May", saints: "May 2: Athanasius of Alexandria (defender of Nicene orthodoxy); May 25: Augustine of Canterbury", color: "#F59E0B" },
  { period: "June", saints: "June 1: Justin Martyr; June 22: Thomas More and John Fisher (martyred by Henry VIII); June 24: Birth of John the Baptist", color: "#10B981" },
  { period: "July", saints: "July 22: Mary Magdalene; July 25: James the Apostle; July 30: William Wilberforce", color: "#EC4899" },
  { period: "August", saints: "August 6: Transfiguration of Christ; August 14: Maximilian Kolbe; August 28: Augustine of Hippo; August 29: Beheading of John the Baptist", color: GREEN },
  { period: "September", saints: "September 13: John Chrysostom; September 29: Michael and All Angels (Michaelmas)", color: PURPLE },
  { period: "October", saints: "October 4: Francis of Assisi; October 15: Teresa of Avila; October 31: Reformation Day (Lutheran/Reformed)", color: "#3B82F6" },
  { period: "November", saints: "November 1: All Saints Day; November 2: All Souls Day; November 22: C.S. Lewis; November 30: Andrew the Apostle", color: "#EF4444" },
  { period: "December", saints: "December 6: Nicholas of Myra; December 26: Stephen (first martyr); December 27: John the Apostle; December 28: Holy Innocents", color: "#F59E0B" },
];

export default function SaintsMartyrsPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_saints-martyrs_tab", "saints");
  const [eraFilter, setEraFilter] = usePersistedState<string>("vine_saints-martyrs_era_filter", "All");
  const [selected, setSelected] = useState(SAINTS[0].name);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const eras: Array<"All" | Era> = ["All", "Apostolic", "Early Church", "Medieval", "Reformation", "Modern", "Contemporary"];
  const filteredSaints = eraFilter === "All" ? SAINTS : SAINTS.filter(s => s.era === eraFilter);
  const filteredMartyrs = eraFilter === "All" ? MARTYRS : MARTYRS.filter(m => m.era === eraFilter);
  const selSaint = SAINTS.find(s => s.name === selected) || SAINTS[0];
  const selMartyr = MARTYRS.find(m => m.name === selected) || MARTYRS[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Saints & Martyrs</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            Two thousand years of faithful witnesses — those who lived for Christ and those who died for him. Their stories are the Church's memory and the believer's encouragement.
          </p>
        </div>

        <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "12px 18px", marginBottom: 28 }}>
          <span style={{ color: GREEN, fontWeight: 800, fontSize: 13 }}>Hebrews 12:1 </span>
          <span style={{ color: TEXT, fontSize: 13 }}>"Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us."</span>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["saints", "martyrs", "theology", "commemoration", "videos"] as Tab[]).map(t => (
            <button type="button" key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "theology" ? "Theology of Sainthood" : t === "commemoration" ? "Calendar" : t === "videos" ? "Videos" : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {(tab === "saints" || tab === "martyrs") && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
            {eras.map(e => (
              <button type="button" key={e} onClick={() => setEraFilter(e)}
                style={{ padding: "5px 12px", borderRadius: 6, border: `1px solid ${eraFilter === e ? GREEN : BORDER}`, background: eraFilter === e ? `${GREEN}20` : "transparent", color: eraFilter === e ? GREEN : MUTED, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                {e}
              </button>
            ))}
          </div>
        )}

        {tab === "saints" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filteredSaints.map((s) => (
                <div role="button" tabIndex={0} key={s.name} onClick={() => setSelected(s.name)}
                  style={{ background: CARD, border: `1px solid ${selected === s.name ? s.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ color: s.color, fontWeight: 800, fontSize: 14 }}>{s.name}</div>
                      <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{s.years} · {s.era}</div>
                    </div>
                    <div style={{ color: MUTED, fontSize: 10, background: BORDER, padding: "2px 8px", borderRadius: 4 }}>Feast: {s.feast || "Not formally observed"}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${selSaint.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: selSaint.color, fontWeight: 900, fontSize: 16, marginBottom: 2 }}>{selSaint.name}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 12 }}>{selSaint.years} · {selSaint.era}</div>
              <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, marginBottom: 14 }}>{selSaint.desc}</p>
              {selSaint.quote && (
                <div style={{ background: `${selSaint.color}10`, border: `1px solid ${selSaint.color}20`, borderRadius: 8, padding: "10px 14px", marginBottom: 12 }}>
                  <div style={{ color: selSaint.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>FAMOUS QUOTE</div>
                  <div style={{ color: TEXT, fontSize: 12, fontStyle: "italic", lineHeight: 1.6 }}>"{selSaint.quote}"</div>
                </div>
              )}
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>KEY WORKS</div>
              <div style={{ color: TEXT, fontSize: 12 }}>{selSaint.key_works}</div>
            </div>
          </div>
        )}

        {tab === "martyrs" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filteredMartyrs.map((m) => (
                <div role="button" tabIndex={0} key={m.name} onClick={() => setSelected(m.name)}
                  style={{ background: CARD, border: `1px solid ${selected === m.name ? m.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ color: m.color, fontWeight: 800, fontSize: 14 }}>{m.name}</div>
                      <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>Died {m.died} · {m.location}</div>
                    </div>
                    <div style={{ background: `${m.color}20`, color: m.color, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{m.era}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${selMartyr.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: selMartyr.color, fontWeight: 900, fontSize: 16, marginBottom: 2 }}>{selMartyr.name}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 8 }}>Died {selMartyr.died} · {selMartyr.location}</div>
              <div style={{ background: `${selMartyr.color}10`, border: `1px solid ${selMartyr.color}20`, borderRadius: 6, padding: "6px 10px", marginBottom: 12 }}>
                <div style={{ color: selMartyr.color, fontSize: 10, fontWeight: 800, marginBottom: 2 }}>HOW</div>
                <div style={{ color: TEXT, fontSize: 12 }}>{selMartyr.how}</div>
              </div>
              <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, marginBottom: 12 }}>{selMartyr.desc}</p>
              {selMartyr.quote && (
                <div style={{ background: `${selMartyr.color}10`, border: `1px solid ${selMartyr.color}20`, borderRadius: 8, padding: "10px 14px", marginBottom: 12 }}>
                  <div style={{ color: selMartyr.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>FAMOUS QUOTE</div>
                  <div style={{ color: TEXT, fontSize: 12, fontStyle: "italic", lineHeight: 1.6 }}>"{selMartyr.quote}"</div>
                </div>
              )}
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>SIGNIFICANCE</div>
              <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.6 }}>{selMartyr.significance}</div>
            </div>
          </div>
        )}

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEOLOGY_DATA.map((t, i) => (
              <div role="button" tabIndex={0} key={i} style={{ background: CARD, border: `1px solid ${expanded[t.point] ? t.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button type="button" onClick={() => setExpanded(e => ({ ...e, [t.point]: !e[t.point] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: t.color, fontWeight: 800, fontSize: 15 }}>{t.point}</div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[t.point] ? "−" : "+"}</span>
                </button>
                {expanded[t.point] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{t.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "commemoration" && (
          <div>
            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 10, padding: "14px 18px", marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>Why Commemorate?</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>The church calendar's commemoration of saints is not liturgical trivia. It is a form of discipleship — allowing the stories of the faithful dead to shape the church's collective memory. As you observe these dates, read the account of that saint's life. Let the way they faced death, persecution, or suffering speak to how you face your own trials. This is what Hebrews 12:1 means by 'cloud of witnesses.'</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 12 }}>
              {COMMEMORATION.map((c, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${c.color}25`, borderRadius: 12, padding: 18 }}>
                  <div style={{ color: c.color, fontWeight: 900, fontSize: 15, marginBottom: 8 }}>{c.period}</div>
                  <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.8 }}>{c.saints}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {SM_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
