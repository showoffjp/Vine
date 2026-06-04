"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

interface HistoryEvent {
  id: string;
  year: string;
  yearNum: number;
  title: string;
  category: "Council" | "Reformation" | "Mission" | "Persecution" | "Theology" | "Split" | "Revival" | "Modern";
  era: "Early Church" | "Medieval" | "Reformation" | "Modern" | "Contemporary";
  description: string;
  keyFigures: string[];
  significance: string;
  scripture?: string;
  scriptureRef?: string;
}

interface HistoricalFigure {
  id: string;
  name: string;
  years: string;
  role: string;
  era: string;
  contribution: string;
  quote: string;
  legacy: string;
}

interface ChurchTheology {
  id: string;
  council: string;
  year: string;
  controversy: string;
  resolution: string;
  creed: string;
  significance: string;
}

interface HistoryVideo {
  id: string;
  title: string;
  preacher: string;
  videoId: string;
  description: string;
}

type Tab = "timeline" | "figures" | "theology" | "videos";

const EVENTS: HistoryEvent[] = [
  { id: "pentecost", year: "AD 33", yearNum: 33, title: "Pentecost & Birth of the Church", category: "Mission", era: "Early Church", description: "The Holy Spirit descends on 120 disciples gathered in Jerusalem. Peter preaches and 3,000 are baptized in a single day. The church is born not as an institution but as a Spirit-filled community.", keyFigures: ["Peter", "The Apostles", "Mary"], significance: "Every subsequent Christian mission traces its mandate and power to this moment. The church was never meant to operate by human strength alone.", scripture: "All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them.", scriptureRef: "Acts 2:4" },
  { id: "paul-missions", year: "AD 47-57", yearNum: 47, title: "Paul's Missionary Journeys", category: "Mission", era: "Early Church", description: "The Apostle Paul undertakes three major missionary journeys across the Roman world - modern Turkey, Greece, and beyond - planting churches in Antioch, Philippi, Corinth, Ephesus, and dozens of cities. His letters (epistles) become the theological backbone of Christianity.", keyFigures: ["Paul", "Barnabas", "Silas", "Timothy", "Luke"], significance: "Paul's strategy of planting self-sustaining local churches in urban centers transformed Christianity from a Jewish sect into a worldwide faith.", scripture: "I have become all things to all people so that by all possible means I might save some.", scriptureRef: "1 Corinthians 9:22" },
  { id: "roman-persecution", year: "AD 64-313", yearNum: 64, title: "Roman Persecutions", category: "Persecution", era: "Early Church", description: "Beginning under Nero (who blamed Christians for the Great Fire of Rome) and continuing through Domitian, Trajan, and Diocletian, Christians faced intermittent but brutal state persecution. Thousands died as martyrs in arenas, fires, and beheadings.", keyFigures: ["Polycarp", "Ignatius of Antioch", "Perpetua", "Felicitas"], significance: "The blood of martyrs proved to be seed. Rather than extinguishing the faith, persecution spread it as believers scattered and testified.", scripture: "Do not be afraid of what you are about to suffer... Be faithful, even to the point of death, and I will give you life as your victor's crown.", scriptureRef: "Revelation 2:10" },
  { id: "nicene-council", year: "AD 325", yearNum: 325, title: "Council of Nicaea", category: "Council", era: "Early Church", description: "Emperor Constantine convenes 318 bishops from across the empire to resolve the Arian controversy. Arius taught Christ was a created being - 'there was a time when he was not.' The council affirms the Nicene Creed: Christ is 'of the same substance' (homoousios) as the Father.", keyFigures: ["Emperor Constantine", "Athanasius", "Arius", "Alexander of Alexandria"], significance: "The Nicene Creed (expanded at Constantinople in 381) remains the most widely used statement of Christian orthodoxy, recited by Catholics, Orthodox, and most Protestants to this day.", scripture: "In the beginning was the Word, and the Word was with God, and the Word was God.", scriptureRef: "John 1:1" },
  { id: "augustine", year: "AD 386-430", yearNum: 386, title: "Augustine of Hippo", category: "Theology", era: "Early Church", description: "A North African bishop and former pleasure-seeker whose Confessions and City of God would shape Western Christianity for 1,600 years. Augustine formulated doctrines on original sin, grace, predestination, and the relationship between church and state.", keyFigures: ["Augustine", "Monica (his mother)", "Ambrose of Milan"], significance: "Almost every major theological debate in Western Christianity - Reformation, Jansenism, the free will debate - references Augustine. Luther, Calvin, and Aquinas all built on his foundation.", scripture: "You have made us for yourself, O Lord, and our heart is restless until it rests in you.", scriptureRef: "Confessions I.1" },
  { id: "great-schism", year: "AD 1054", yearNum: 1054, title: "The Great Schism", category: "Split", era: "Medieval", description: "After centuries of tension over theology, church authority, and politics, the Eastern and Western churches formally excommunicate each other. Rome (Catholic) and Constantinople (Orthodox) split, dividing Christianity's two largest branches.", keyFigures: ["Pope Leo IX", "Patriarch Michael Cerularius", "Cardinal Humbert"], significance: "This split has never been fully healed. Eastern Orthodox and Roman Catholic churches remain separate, though dialogue has increased in recent decades.", scripture: "I appeal to you, brothers and sisters, in the name of our Lord Jesus Christ, that all of you agree with one another in what you say and that there be no divisions among you.", scriptureRef: "1 Corinthians 1:10" },
  { id: "crusades", year: "AD 1095-1291", yearNum: 1095, title: "The Crusades", category: "Mission", era: "Medieval", description: "Pope Urban II calls Christian knights to retake the Holy Land from Muslim control. Eight major crusades follow over two centuries, resulting in the capture and later loss of Jerusalem, enormous bloodshed including massacres of Jews and Eastern Christians, and lasting damage to Christian-Muslim relations.", keyFigures: ["Pope Urban II", "Godfrey of Bouillon", "Saladin", "Richard I"], significance: "A cautionary tale about religious violence when mixed with political power. The Crusades are among the most cited examples of Christianity's failures.", scriptureRef: "" },
  { id: "aquinas", year: "AD 1225-1274", yearNum: 1225, title: "Thomas Aquinas & Scholasticism", category: "Theology", era: "Medieval", description: "Dominican friar Thomas Aquinas synthesizes Aristotelian philosophy with Christian theology in his massive Summa Theologica, presenting the Five Ways (cosmological arguments for God's existence) and a comprehensive system of natural law ethics.", keyFigures: ["Thomas Aquinas", "Albert the Great"], significance: "Thomism remains the official philosophical framework of the Catholic Church. His five arguments for God's existence are still debated and refined by philosophers and apologists.", scripture: "For since the creation of the world God's invisible qualities - his eternal power and divine nature - have been clearly seen.", scriptureRef: "Romans 1:20" },
  { id: "reformation", year: "AD 1517", yearNum: 1517, title: "The Protestant Reformation", category: "Reformation", era: "Reformation", description: "German monk Martin Luther nails 95 theses to the Wittenberg church door, igniting a theological revolution. His core convictions: sola scriptura (Scripture alone), sola fide (faith alone), sola gratia (grace alone). The printing press spreads his ideas across Europe in weeks.", keyFigures: ["Martin Luther", "Philip Melanchthon", "John Tetzel"], significance: "The Reformation permanently fractured Western Christianity into Catholic and Protestant streams, gave ordinary people access to the Bible in their own language, and reshaped European civilization.", scripture: "For in the gospel the righteousness of God is revealed - a righteousness that is by faith from first to last, just as it is written: 'The righteous will live by faith.'", scriptureRef: "Romans 1:17" },
  { id: "calvin-geneva", year: "AD 1536-1564", yearNum: 1536, title: "Calvin's Geneva & Reformed Theology", category: "Reformation", era: "Reformation", description: "John Calvin flees France and settles in Geneva, turning the city into a 'Protestant Rome.' His Institutes of the Christian Religion (1536, expanded 1559) systematizes Reformed theology: TULIP (Total depravity, Unconditional election, Limited atonement, Irresistible grace, Perseverance of saints).", keyFigures: ["John Calvin", "William Farel", "Theodore Beza"], significance: "Calvinist/Reformed theology spread through Scotland (Presbyterianism), Netherlands, New England Puritanism, and continues as one of the largest Protestant traditions.", scripture: "For those God foreknew he also predestined to be conformed to the image of his Son.", scriptureRef: "Romans 8:29" },
  { id: "counter-reformation", year: "AD 1545-1563", yearNum: 1545, title: "Council of Trent & Counter-Reformation", category: "Council", era: "Reformation", description: "The Catholic Church responds to the Reformation with the Council of Trent, clarifying Catholic doctrine on Scripture and Tradition, justification by faith and works, the seven sacraments, and purgatory. The Jesuits (Society of Jesus, founded by Ignatius of Loyola) become the vanguard of Catholic renewal.", keyFigures: ["Ignatius of Loyola", "Francis Xavier", "Pope Paul III"], significance: "The Counter-Reformation strengthened Catholic institutions and launched one of the most successful missionary movements in history, especially in Latin America, Africa, and Asia." },
  { id: "great-awakening", year: "AD 1730-1740", yearNum: 1730, title: "The First Great Awakening", category: "Revival", era: "Modern", description: "A transatlantic revival sweeping the American colonies and Britain. George Whitefield draws 30,000+ outdoor crowds. Jonathan Edwards' 'Sinners in the Hands of an Angry God' catalyzes mass conversion. John and Charles Wesley's Methodist movement transforms England.", keyFigures: ["George Whitefield", "Jonathan Edwards", "John Wesley", "Charles Wesley"], significance: "The Great Awakening created a common Protestant identity in colonial America, contributed to the Revolutionary era's egalitarianism, and spawned Methodism - now a global denomination of 80+ million.", scripture: "Will you not revive us again, that your people may rejoice in you?", scriptureRef: "Psalm 85:6" },
  { id: "william-carey", year: "AD 1793", yearNum: 1793, title: "William Carey & Modern Missions", category: "Mission", era: "Modern", description: "British cobbler and Baptist minister William Carey sails to India, launching the modern Protestant missionary movement. He translates the Bible into Bengali, Sanskrit, and 29 other languages, establishes schools, and campaigns against widow-burning (sati).", keyFigures: ["William Carey", "Joshua Marshman", "William Ward"], significance: "Called the 'Father of Modern Missions,' Carey's maxim 'Expect great things from God; attempt great things for God' launched a movement that would send thousands of missionaries worldwide.", scripture: "How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard?", scriptureRef: "Romans 10:14" },
  { id: "second-awakening", year: "AD 1800-1840", yearNum: 1800, title: "The Second Great Awakening", category: "Revival", era: "Modern", description: "Charles Finney's 'new measures' revival methodology sweeps America. Camp meetings on the frontier draw tens of thousands. The revival energizes abolitionism, women's suffrage, and hundreds of benevolent societies reforming society.", keyFigures: ["Charles Finney", "Lyman Beecher", "Francis Asbury"], significance: "This revival shaped American evangelical culture and directly fueled the abolitionist movement that led to the Civil War and emancipation." },
  { id: "azusa-street", year: "AD 1906", yearNum: 1906, title: "Azusa Street Revival & Pentecostalism", category: "Revival", era: "Modern", description: "In a converted stable on Azusa Street, Los Angeles, African American preacher William Seymour leads a revival featuring speaking in tongues, healing, and interracial worship (shocking in Jim Crow America). The Azusa Street Mission runs continuous services for three years.", keyFigures: ["William Seymour", "Charles Parham"], significance: "Pentecostalism is now the fastest-growing Christian movement in history. By 2025, over 700 million Christians identified as Pentecostal or charismatic.", scripture: "And afterward, I will pour out my Spirit on all people. Your sons and daughters will prophesy.", scriptureRef: "Joel 2:28" },
  { id: "wwi-wwii", year: "AD 1914-1945", yearNum: 1914, title: "Christianity Through World Wars", category: "Modern", era: "Modern", description: "Two World Wars devastate Europe and challenge liberal Protestant confidence in human progress. The Holocaust forces Christian reckoning with centuries of anti-Semitism. Dietrich Bonhoeffer's resistance to Hitler and his eventual execution make him a martyr and theological icon.", keyFigures: ["Dietrich Bonhoeffer", "Karl Barth", "Pope Pius XII"], significance: "Post-war theology grapples with theodicy (why does God allow such evil?) and the church's complicity in racism and nationalism." },
  { id: "lausanne", year: "AD 1974", yearNum: 1974, title: "Lausanne Covenant & Global Evangelicalism", category: "Mission", era: "Contemporary", description: "Billy Graham and John Stott convene 2,700 evangelical leaders from 150 nations in Lausanne, Switzerland. The resulting Lausanne Covenant defines evangelical identity: biblical authority, the uniqueness of Christ, and the dual mandate of evangelism and social action.", keyFigures: ["Billy Graham", "John Stott", "Rene Padilla"], significance: "The Lausanne movement redefined global evangelicalism, particularly integrating social justice with evangelism and elevating voices from the Global South.", scripture: "Therefore go and make disciples of all nations.", scriptureRef: "Matthew 28:19" },
  { id: "global-south", year: "AD 2000-present", yearNum: 2000, title: "Christianity's Global South Shift", category: "Modern", era: "Contemporary", description: "The center of gravity of world Christianity shifts decisively to the Global South. Nigeria, Brazil, and South Korea become sending nations. The fastest-growing churches are in sub-Saharan Africa, China, and Latin America. Church attendance in Europe and mainline North America declines sharply while the Global South surges.", keyFigures: ["Philip Jenkins (historian)", "Francis Chan", "Yemi Osinbajo"], significance: "Christianity is no longer primarily a 'Western religion.' By 2050, the majority of the world's Christians will live in Africa.", scripture: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language.", scriptureRef: "Revelation 7:9" },
];

const FIGURES: HistoricalFigure[] = [
  { id: "polycarp", name: "Polycarp of Smyrna", years: "c. 69-155", role: "Bishop, Martyr", era: "Early Church", contribution: "Disciple of the Apostle John. Burned at the stake at age 86, he refused to deny Christ: 'Eighty-six years I have served him, and he has done me no wrong. How can I blaspheme my King who saved me?'", quote: "Eighty-six years I have served him, and he has done me no wrong.", legacy: "His martyrdom is one of the earliest and most detailed accounts outside the NT. He represents the chain of discipleship from apostles to the church." },
  { id: "athanasius", name: "Athanasius of Alexandria", years: "c. 296-373", role: "Bishop, Theologian", era: "Early Church", contribution: "Known as 'Athanasius contra mundum' (against the world). He defended the full divinity of Christ against Arianism, was exiled five times, and never compromised. He also is the first to list our current 27 NT books in 367.", quote: "He became what we are that we might become what he is.", legacy: "Without Athanasius, the Nicene faith may have lost. His persistence preserved orthodox Christology." },
  { id: "augustine-hippo", name: "Augustine of Hippo", years: "354-430", role: "Bishop, Philosopher, Theologian", era: "Early Church", contribution: "Transformed from dissolute student to bishop and theologian. Confessions invented autobiography. City of God shaped Christian political theory. Defined original sin and grace in ways that still define Western Christianity.", quote: "Our heart is restless until it rests in you.", legacy: "Luther, Calvin, Aquinas, Kuyper - nearly every major Western theologian has been shaped by or reacted to Augustine." },
  { id: "luther", name: "Martin Luther", years: "1483-1546", role: "Reformer, Theologian, Translator", era: "Reformation", contribution: "Augustinian monk who recovered the biblical doctrine of justification by faith alone. Translated the Bible into common German, making Scripture accessible to ordinary people. His stand before the Diet of Worms changed history.", quote: "Here I stand, I can do no other. God help me.", legacy: "The Reformation he ignited permanently reshaped Western Christianity and laid groundwork for religious liberty, literacy, and modern education." },
  { id: "calvin", name: "John Calvin", years: "1509-1564", role: "Reformer, Pastor, Theologian", era: "Reformation", contribution: "French reformer who organized the Reformation theologically. His Institutes is the most comprehensive systematic theology of the Reformation era. Established Geneva as a model Reformed city and influenced Presbyterian and Reformed churches worldwide.", quote: "We are not our own; we are God's.", legacy: "Reformed theology, including the Westminster Confession, the Heidelberg Catechism, and Presbyterianism worldwide, flows directly from Calvin." },
  { id: "wesley", name: "John Wesley", years: "1703-1791", role: "Evangelist, Theologian, Founder of Methodism", era: "Modern", contribution: "Oxford-educated Anglican who experienced a 'heart strangely warmed' at a Moravian meeting. Rode 250,000 miles on horseback, preached 40,000+ sermons, and organized the Methodist movement with its focus on grace, holiness, and social reform.", quote: "I set myself on fire and people come to watch me burn.", legacy: "The Methodist movement grew into a global communion of 80+ million, and Wesley's emphasis on sanctification reshaped evangelical spirituality." },
  { id: "bonhoeffer", name: "Dietrich Bonhoeffer", years: "1906-1945", role: "Pastor, Theologian, Martyr", era: "Modern", contribution: "German Lutheran pastor who rejected Nazi ideology when most German churches capitulated. Founded the Confessing Church, wrote The Cost of Discipleship and Life Together, and was involved in the plot to assassinate Hitler. Hanged in Flossenbürg concentration camp weeks before liberation.", quote: "Cheap grace is the mortal enemy of our church.", legacy: "Bonhoeffer's theology of costly grace, his Ethics, and Letters from Prison make him the most-read Protestant theologian of the 20th century." },
  { id: "cs-lewis", name: "C.S. Lewis", years: "1898-1963", role: "Author, Apologist, Lay Theologian", era: "Modern", contribution: "Oxford and Cambridge literary scholar who converted from atheism in 1931. Mere Christianity, The Problem of Pain, The Screwtape Letters, and the Narnia series have introduced more people to the Christian faith than almost any other 20th-century author.", quote: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.", legacy: "C.S. Lewis is arguably the most influential lay Christian writer of the modern era, with books still selling millions annually." },
];

const CHURCH_THEOLOGY: ChurchTheology[] = [
  {
    id: "nicaea",
    council: "Council of Nicaea",
    year: "325 AD",
    controversy: "Is the Son co-equal with the Father?",
    resolution: "The council condemned Arianism and affirmed that Christ is homoousios (of the same substance) as the Father. The Son is not a created being but fully and eternally God.",
    creed: "The Nicene Creed",
    significance: "Established homoousios (same substance) as the orthodox formula. Without this council, Arianism - the view that Christ was a lesser, created god - might have defined Christianity. Athanasius stood virtually alone to defend the full divinity of Christ.",
  },
  {
    id: "constantinople",
    council: "Council of Constantinople",
    year: "381 AD",
    controversy: "Is the Holy Spirit also God?",
    resolution: "The Pneumatomachians (Spirit-fighters) denied the full divinity of the Holy Spirit. The council declared the Spirit to be worshipped and glorified together with the Father and Son, completing the Trinitarian formula.",
    creed: "Nicene-Constantinopolitan Creed",
    significance: "Completes the Trinitarian formula still recited in churches worldwide. The doctrine of the Trinity - one God in three co-equal, co-eternal persons - was not invented at this council but formally defined against sustained theological attack.",
  },
  {
    id: "ephesus",
    council: "Council of Ephesus",
    year: "431 AD",
    controversy: "Is Mary theotokos (God-bearer)?",
    resolution: "Nestorius taught that Mary bore only the human nature of Christ and should be called Christotokos (Christ-bearer), not Theotokos. The council upheld that since Christ is one person, Mary rightly bears the title God-bearer - affirming the unity of his divine and human natures.",
    creed: "Orthodox Christology",
    significance: "Upholds the unity of Christ’s two natures in one person. The debate was not primarily about Mary but about whether the divine and human in Christ are truly one person or two. The council’s answer shaped all subsequent Christology.",
  },
  {
    id: "chalcedon",
    council: "Council of Chalcedon",
    year: "451 AD",
    controversy: "Does Christ have one or two natures?",
    resolution: "Against Monophysitism (one merged nature) and Nestorianism (two separate persons), Chalcedon defined Christ as one person in two natures - divine and human - without confusion, change, division, or separation.",
    creed: "Chalcedonian Definition",
    significance: "\"Truly God and truly man, without confusion or mixture\" - the formula every orthodox Christology still uses. This definition is accepted by Catholic, Orthodox, and Protestant churches and remains the gold standard of Christological orthodoxy.",
  },
  {
    id: "reformation-controversy",
    council: "Reformation Controversies",
    year: "1517-1648",
    controversy: "Are sinners justified by faith alone, or by faith plus works?",
    resolution: "Luther recovered Paul’s doctrine: sinners are declared righteous before God on the basis of Christ’s righteousness alone, received through faith alone, apart from works. The Augsburg Confession (1530) codified this against Rome’s Council of Trent.",
    creed: "Augsburg Confession (1530)",
    significance: "The central Reformation breakthrough. Justification by faith alone is the article by which the church stands or falls, Luther said. Every Protestant tradition traces its identity to this recovery of Paul’s gospel.",
  },
  {
    id: "vatican-i",
    council: "First Vatican Council",
    year: "1870",
    controversy: "Can the Pope speak ex cathedra without error?",
    resolution: "Vatican I defined papal infallibility: when the Pope speaks ex cathedra (from the chair) on matters of faith and morals, he is preserved from error by divine assistance. This was a response to Enlightenment rationalism and Protestant challenges to Catholic authority.",
    creed: "Vatican I Definition (Pastor Aeternus)",
    significance: "Deepened Catholic-Protestant divide in ways still felt today. For Protestants, this made the papacy rather than Scripture the final authority - a direct reversal of sola scriptura. For Catholics, it provided a bulwark of certainty in a skeptical age.",
  },
];

const HISTORY_VIDEOS: HistoryVideo[] = [
  {
    id: "holiness-of-god",
    title: "The Holiness of God",
    preacher: "R.C. Sproul",
    videoId: "v6xk8e7gdMA",
    description: "Sproul traces how the church’s greatest theologians from Augustine to Calvin understood God’s holiness as the foundation of all Christian doctrine.",
  },
  {
    id: "supremacy-of-christ",
    title: "The Supremacy of Christ and Truth",
    preacher: "Voddie Baucham",
    videoId: "by8ykv7-A3c",
    description: "Baucham’s 2006 Desiring God Conference message connecting Christ’s supremacy to postmodern challenges and the church’s historic witness.",
  },
  {
    id: "dont-waste-your-life",
    title: "Don’t Waste Your Life",
    preacher: "John Piper",
    videoId: "JHdB1dYAteA",
    description: "The Passion OneDay message that called a generation to follow the same costly Christianity of the martyrs throughout church history.",
  },
  {
    id: "shocking-youth",
    title: "Shocking Youth Message",
    preacher: "Paul Washer",
    videoId: "uuabITeO4l8",
    description: "A diagnosis of cheap Christianity that mirrors the Reformation’s concern for genuine conversion over empty profession.",
  },
  {
    id: "prodigal-sons",
    title: "The Prodigal Sons",
    preacher: "Tim Keller",
    videoId: "lsTzXI7cJGA",
    description: "Keller shows how Jesus’ teaching on grace continues to reshape every era of church history and every generation of the church.",
  },
  {
    id: "radical-passion",
    title: "Radical: Passion 2011",
    preacher: "David Platt",
    videoId: "yhiHSf_L6_E",
    description: "Platt connects the global mission of the early church to our call today, drawing on 2,000 years of faithful witness across every nation.",
  },
];

const CATEGORIES = ["All", "Council", "Reformation", "Mission", "Persecution", "Theology", "Split", "Revival", "Modern"];
const ERAS = ["All", "Early Church", "Medieval", "Reformation", "Modern", "Contemporary"];

const ERA_COLORS: Record<string, string> = {
  "Early Church": "#3a7d56",
  "Medieval": "#6B4FBB",
  "Reformation": "#FF8C42",
  "Modern": "#4FC3F7",
  "Contemporary": "#FF6B9D",
};

const CAT_COLORS: Record<string, string> = {
  "Council": "#6B4FBB",
  "Reformation": "#FF8C42",
  "Mission": "#3a7d56",
  "Persecution": "#EF4444",
  "Theology": "#4FC3F7",
  "Split": "#FF6B9D",
  "Revival": "#FFD700",
  "Modern": "#9898B3",
};

export default function ChurchHistoryPage() {
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_church_history_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [readIds, setReadIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_church_history_read"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_church-history_tab", "timeline");
  const [catFilter, setCatFilter] = useState("All");
  const [eraFilter, setEraFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<HistoryEvent | null>(null);
  const [selectedFigure, setSelectedFigure] = useState<HistoricalFigure | null>(null);

  const toggleSave = (id: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_church_history_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const toggleRead = (id: string) => {
    setReadIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_church_history_read", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filteredEvents = EVENTS.filter(e => {
    if (catFilter !== "All" && e.category !== catFilter) return false;
    if (eraFilter !== "All" && e.era !== eraFilter) return false;
    if (search && !e.title.toLowerCase().includes(search.toLowerCase()) && !e.keyFigures.join(" ").toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }).sort((a, b) => a.yearNum - b.yearNum);

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>&#9962;</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Church History</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>2,000 years of faith, councils, revivals, and reformations</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
            {ERAS.filter(e => e !== "All").map(era => (
              <span key={era} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: `${ERA_COLORS[era]}18`, color: ERA_COLORS[era], border: `1px solid ${ERA_COLORS[era]}40` }}>
                {era}
              </span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 24, borderBottom: "1px solid #1E1E32" }}>
          {([
            ["timeline", "Timeline"],
            ["figures", "Key Figures"],
            ["theology", "Theology"],
            ["videos", "Videos"],
          ] as [Tab, string][]).map(([t, label]) => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: activeTab === t ? "#3a7d56" : "#6A6A88", borderBottom: `2px solid ${activeTab === t ? "#3a7d56" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Timeline Tab */}
        {activeTab === "timeline" && (
          <>
            {/* Filters */}
            <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search events or figures..."
                style={{ flex: 1, minWidth: 200, padding: "8px 14px", borderRadius: 10, background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none" }} />
              <select value={catFilter} onChange={e => setCatFilter(e.target.value)}
                style={{ padding: "8px 14px", borderRadius: 10, background: "#12121F", border: "1px solid #1E1E32", color: "#9898B3", fontSize: 14, cursor: "pointer" }}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select value={eraFilter} onChange={e => setEraFilter(e.target.value)}
                style={{ padding: "8px 14px", borderRadius: 10, background: "#12121F", border: "1px solid #1E1E32", color: "#9898B3", fontSize: 14, cursor: "pointer" }}>
                {ERAS.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>

            {/* Progress */}
            <div style={{ marginBottom: 28, background: "#12121F", borderRadius: 12, padding: "14px 18px", border: "1px solid #1E1E32" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: "#9898B3" }}>Events Explored</span>
                <span style={{ fontSize: 13, color: "#3a7d56", fontWeight: 700 }}>{readIds.size} of {EVENTS.length}</span>
              </div>
              <div style={{ height: 6, background: "#1E1E32", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(readIds.size / EVENTS.length) * 100}%`, background: "linear-gradient(90deg, #3a7d56, #6B4FBB)", borderRadius: 3, transition: "width 0.3s" }} />
              </div>
            </div>

            {/* Timeline */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, #3a7d56, #6B4FBB, #FF8C42, #4FC3F7)", opacity: 0.3 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {filteredEvents.map((e, idx) => (
                  <div key={e.id} style={{ display: "flex", gap: 20, paddingLeft: 0 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${ERA_COLORS[e.era]}20`, border: `2px solid ${ERA_COLORS[e.era]}60`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, marginTop: idx === 0 ? 0 : 16 }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: ERA_COLORS[e.era] }} />
                      </div>
                    </div>
                    <div onClick={() => setSelected(e)}
                      style={{ flex: 1, background: "#12121F", border: `1px solid ${readIds.has(e.id) ? "rgba(58,125,86,0.25)" : "#1E1E32"}`, borderRadius: 14, padding: 18, marginTop: idx === 0 ? 0 : 12, cursor: "pointer", transition: "border-color 0.2s" }}
                      onMouseEnter={ev => (ev.currentTarget as HTMLDivElement).style.borderColor = ERA_COLORS[e.era]}
                      onMouseLeave={ev => (ev.currentTarget as HTMLDivElement).style.borderColor = readIds.has(e.id) ? "rgba(58,125,86,0.25)" : "#1E1E32"}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                            <span style={{ fontSize: 13, fontWeight: 700, color: ERA_COLORS[e.era] }}>{e.year}</span>
                            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: `${CAT_COLORS[e.category]}18`, color: CAT_COLORS[e.category], border: `1px solid ${CAT_COLORS[e.category]}35` }}>{e.category}</span>
                            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "#1E1E32", color: "#6A6A88" }}>{e.era}</span>
                          </div>
                          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{e.title}</h3>
                        </div>
                        <button onClick={ev => { ev.stopPropagation(); toggleSave(e.id); }}
                          style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: savedIds.has(e.id) ? "#FFD700" : "#4A4A68", flexShrink: 0 }}>
                          {savedIds.has(e.id) ? "★" : "☆"}
                        </button>
                      </div>
                      <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {e.description}
                      </p>
                      <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                        {e.keyFigures.slice(0, 3).map(f => (
                          <span key={f} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: "#1E1E32", color: "#9898B3" }}>{f}</span>
                        ))}
                        {e.keyFigures.length > 3 && <span style={{ fontSize: 11, color: "#6A6A88" }}>+{e.keyFigures.length - 3} more</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Figures Tab */}
        {activeTab === "figures" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {FIGURES.map(f => (
              <div key={f.id} onClick={() => setSelectedFigure(f)}
                style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 22, cursor: "pointer", transition: "border-color 0.2s, transform 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#6B4FBB"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#1E1E32"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, #3a7d5630, #6B4FBB30)", border: "1px solid #2A2A40", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>
                  &#10013;&#65039;
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{f.name}</h3>
                <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, color: "#9898B3" }}>{f.years}</span>
                  <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{f.era}</span>
                </div>
                <p style={{ fontSize: 13, color: "#3a7d56", fontStyle: "italic", marginBottom: 10 }}>&ldquo;{f.quote}&rdquo;</p>
                <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {f.contribution}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Theology Tab */}
        {activeTab === "theology" && (
          <div>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 20, marginBottom: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "#F2F2F8", marginBottom: 8 }}>The Great Councils &amp; Controversies</h2>
              <p style={{ color: "#9898B3", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Christian theology was forged under pressure. Each council arose because the church faced a real challenge to the faith &mdash; a teacher with a compelling alternative account of Christ or the Trinity. The creeds are not abstract philosophy but hard-won confessions paid for in exile, suffering, and sometimes blood.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {CHURCH_THEOLOGY.map((item, idx) => (
                <div key={item.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 24, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 4, background: "linear-gradient(180deg, #3a7d56, #6B4FBB)", borderRadius: "16px 0 0 16px" }} />
                  <div style={{ paddingLeft: 8 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, fontWeight: 900, color: "#07070F", background: "#3a7d56", padding: "3px 10px", borderRadius: 20 }}>{item.year}</span>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: "#F2F2F8", margin: 0 }}>{item.council}</h3>
                    </div>

                    <div style={{ background: "rgba(107,79,187,0.12)", border: "1px solid rgba(107,79,187,0.25)", borderRadius: 10, padding: "12px 16px", marginBottom: 14 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#A080FF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>The Controversy</div>
                      <p style={{ color: "#F2F2F8", fontSize: 15, fontWeight: 600, margin: 0, fontStyle: "italic" }}>&ldquo;{item.controversy}&rdquo;</p>
                    </div>

                    <div style={{ marginBottom: 14 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#3a7d56", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Resolution</div>
                      <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.resolution}</p>
                    </div>

                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 14 }}>
                      <div style={{ background: "rgba(58,125,86,0.08)", border: "1px solid rgba(58,125,86,0.2)", borderRadius: 8, padding: "8px 14px" }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>Resulting Creed / Confession</div>
                        <div style={{ color: "#3a7d56", fontWeight: 700, fontSize: 13 }}>{item.creed}</div>
                      </div>
                    </div>

                    <div style={{ background: "#07070F", borderRadius: 10, padding: "12px 16px", borderLeft: "3px solid #6B4FBB" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#A080FF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Why It Still Matters</div>
                      <p style={{ color: "#C0C0D8", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.significance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 20, marginBottom: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "#F2F2F8", marginBottom: 8 }}>Essential Preaching on Church History &amp; Doctrine</h2>
              <p style={{ color: "#9898B3", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                These messages connect the great themes of church history &mdash; God&rsquo;s holiness, the supremacy of Christ, costly grace, genuine conversion &mdash; to the present moment. Each preacher stands in a long line of faithful witnesses.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(460px, 1fr))", gap: 24 }}>
              {HISTORY_VIDEOS.map(v => (
                <div key={v.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", borderRadius: 0, display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: 18 }}>
                    <div style={{ marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#07070F", background: "#6B4FBB", padding: "3px 10px", borderRadius: 20 }}>{v.preacher}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#F2F2F8", marginBottom: 8, lineHeight: 1.4 }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Event Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#12121F", borderRadius: 20, padding: 32, maxWidth: 660, width: "100%", border: "1px solid #2A2A40", marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: ERA_COLORS[selected.era] }}>{selected.year}</span>
                  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: `${CAT_COLORS[selected.category]}18`, color: CAT_COLORS[selected.category], border: `1px solid ${CAT_COLORS[selected.category]}35` }}>{selected.category}</span>
                  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "#1E1E32", color: "#9898B3" }}>{selected.era}</span>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800 }}>{selected.title}</h2>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer" }}>×</button>
            </div>

            <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, marginBottom: 20 }}>{selected.description}</p>

            {selected.scripture && (
              <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, marginBottom: 20, borderLeft: "3px solid #3a7d56" }}>
                <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>&ldquo;{selected.scripture}&rdquo;</p>
                <p style={{ fontSize: 12, color: "#3a7d56", marginTop: 6 }}>&mdash; {selected.scriptureRef}</p>
              </div>
            )}

            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#3a7d56", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Key Figures</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {selected.keyFigures.map(f => <span key={f} style={{ fontSize: 13, padding: "4px 12px", borderRadius: 8, background: "#1E1E32", color: "#D0D0E8" }}>{f}</span>)}
              </div>
            </div>

            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, marginBottom: 20, borderLeft: "3px solid #6B4FBB" }}>
              <h4 style={{ fontSize: 12, fontWeight: 700, color: "#A080FF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Why It Matters</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.significance}</p>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => toggleRead(selected.id)}
                style={{ flex: 1, padding: "12px 20px", borderRadius: 12, border: `1px solid ${readIds.has(selected.id) ? "rgba(58,125,86,0.4)" : "#2A2A40"}`, background: readIds.has(selected.id) ? "rgba(58,125,86,0.12)" : "#1E1E32", color: readIds.has(selected.id) ? "#3a7d56" : "#9898B3", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                {readIds.has(selected.id) ? "✓ Explored" : "Mark as Explored"}
              </button>
              <button onClick={() => toggleSave(selected.id)}
                style={{ padding: "12px 20px", borderRadius: 12, border: `1px solid ${savedIds.has(selected.id) ? "rgba(255,215,0,0.3)" : "#2A2A40"}`, background: savedIds.has(selected.id) ? "rgba(255,215,0,0.08)" : "#1E1E32", color: savedIds.has(selected.id) ? "#FFD700" : "#9898B3", cursor: "pointer", fontWeight: 700, fontSize: 16 }}>
                {savedIds.has(selected.id) ? "★" : "☆"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Figure Modal */}
      {selectedFigure && (
        <div onClick={() => setSelectedFigure(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#12121F", borderRadius: 20, padding: 32, maxWidth: 600, width: "100%", border: "1px solid #2A2A40", marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{selectedFigure.name}</h2>
                <span style={{ fontSize: 14, color: "#9898B3" }}>{selectedFigure.years} &middot; {selectedFigure.role}</span>
              </div>
              <button onClick={() => setSelectedFigure(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer" }}>×</button>
            </div>
            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, marginBottom: 20, borderLeft: "3px solid #3a7d56" }}>
              <p style={{ fontSize: 15, color: "#C0C0D8", fontStyle: "italic" }}>&ldquo;{selectedFigure.quote}&rdquo;</p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#3a7d56", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selectedFigure.contribution}</p>
            </div>
            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, borderLeft: "3px solid #6B4FBB" }}>
              <h4 style={{ fontSize: 12, fontWeight: 700, color: "#A080FF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Legacy</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selectedFigure.legacy}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
