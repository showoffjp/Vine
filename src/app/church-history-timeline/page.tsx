"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const PURPLE = "#6B4FBB";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";
const RED = "#EF4444";

type Event = {
  title: string;
  date: string;
  summary: string;
  significance: string;
};

type Period = {
  id: string;
  label: string;
  era: string;
  accent: string;
  blurb: string;
  quote: { text: string; source: string };
  events: Event[];
};

const PERIODS: Period[] = [
  {
    id: "early-church",
    label: "The Early Church",
    era: "AD 33–313",
    accent: RED,
    blurb:
      "From a frightened band in an upper room to a movement spanning the Roman Empire — without armies, buildings, or political power. Three centuries of preaching, persecution, and quiet endurance, in which the church defined itself by the apostles' teaching and sealed its witness in blood.",
    quote: {
      text: "Eighty-six years I have served him, and he has done me no wrong. How can I blaspheme my King who saved me?",
      source: "Polycarp of Smyrna, at his martyrdom, c. 155",
    },
    events: [
      {
        title: "Pentecost & the Apostolic Age",
        date: "AD 33–c. 100",
        summary:
          "Fifty days after the Resurrection, the Holy Spirit descends on the disciples in Jerusalem and Peter preaches to crowds gathered from across the known world; about three thousand are baptized in a single day. Over the following decades the apostles carry the gospel outward — Peter to the Jewish diaspora and eventually Rome, Paul through Asia Minor and Greece on three missionary journeys, Thomas (by strong ancient tradition) as far as India. The Council of Jerusalem (c. AD 49) settles the explosive question of whether Gentile converts must keep the Mosaic law, opening the door for a truly multi-ethnic church. By the end of the first century, churches dot the Mediterranean rim and the apostolic writings that will become the New Testament are circulating among them.",
        significance:
          "The church is not a human institution that drifted away from a merely human Jesus — it was born in the power of the Spirit and built on apostolic eyewitness testimony. Everything that follows in two thousand years flows from this fountainhead.",
      },
      {
        title: "Persecution Under the Emperors",
        date: "64–311",
        summary:
          "After the great fire of Rome in AD 64, Nero deflects blame onto the Christians, executing them with theatrical cruelty — Peter and Paul both die in this persecution, according to early and consistent tradition. Domitian (90s) and later emperors follow with sporadic, regional persecutions; Pliny the Younger's letter to Trajan (c. 112) shows Christians being executed simply for the name. Decius (250) demands universal sacrifice to the gods, producing both martyrs and the painful problem of the 'lapsed' who complied. Diocletian launches the Great Persecution (303–311) — the empire-wide, systematic attempt to destroy the church by burning Scriptures, demolishing buildings, and executing clergy. It fails.",
        significance:
          "For its first three centuries Christianity grew not despite suffering but through it. The church's normal condition in the New Testament and the early centuries was weakness and faithfulness, not cultural power — a sobering corrective for Christians who assume the faith requires the state's favor to survive.",
      },
      {
        title: "The Apostolic Fathers",
        date: "c. 95–155",
        summary:
          "The generation that knew the apostles personally leaves the church its earliest post-biblical writings. Clement of Rome writes to the quarreling Corinthian church (c. 95), urging order and humility. Ignatius of Antioch, condemned to the beasts, writes seven letters on his journey to martyrdom in Rome (c. 110), pleading for church unity around the bishop and calling Christ unambiguously 'our God.' Polycarp of Smyrna, a disciple of the apostle John, is burned at the stake around 155; when ordered to curse Christ, the old man answers, 'Eighty-six years I have served him, and he has done me no wrong. How can I blaspheme my King who saved me?'",
        significance:
          "These writings show that the core of the faith — the deity of Christ, the authority of the apostles' teaching, the centrality of the local church — was in place within living memory of the apostles, not invented centuries later.",
      },
      {
        title: "The Apologists: Justin Martyr",
        date: "c. 150–165",
        summary:
          "As rumors spread that Christians practiced atheism (no idols), cannibalism (the Eucharist misunderstood), and incest ('love feasts' among 'brothers and sisters'), a new kind of writer arises: the apologist, who defends the faith to educated pagans. Justin Martyr, a philosopher converted after years of searching the Greek schools, addresses two Apologies to the emperor himself, arguing that Christianity is the true philosophy and that the divine Logos who enlightened the Greek thinkers became flesh in Jesus. His Dialogue with Trypho engages Judaism at length. He is beheaded in Rome around 165, faithful to his name.",
        significance:
          "Justin pioneered the conviction that the gospel can stand up in the marketplace of ideas — that Christians need not choose between rigorous thinking and devoted faith. Every work of Christian apologetics since stands in his lineage.",
      },
      {
        title: "The Martyrs: Perpetua & Felicity",
        date: "203",
        summary:
          "In Carthage, a 22-year-old noblewoman and new mother named Vibia Perpetua is arrested with her pregnant slave Felicity and several companions, all catechumens preparing for baptism. Perpetua's prison diary — one of the earliest surviving texts by a Christian woman — records her father's anguished pleas for her to recant and her steady refusal: 'I cannot be called anything other than what I am, a Christian.' Felicity gives birth in prison days before the games. On March 7, 203, they are exposed to wild beasts and finally killed by the sword in the arena, exchanging a kiss of peace before they die.",
        significance:
          "The martyrs demonstrated that Christ was worth more than family, status, safety, and life itself — and the watching world noticed. Tertullian, their North African contemporary, wrote that 'the blood of the martyrs is the seed of the church.' Conviction sealed by suffering proved unanswerable.",
      },
      {
        title: "Irenaeus & the Fight with Gnosticism",
        date: "c. 180",
        summary:
          "A flood of 'Gnostic' teachers — Valentinus, Basilides, and others — offer a rival Christianity: secret knowledge (gnosis) for spiritual elites, a material world made by a lesser, ignorant god, and a Christ who only seemed to be human, since flesh was beneath redemption. Irenaeus, bishop of Lyons and a hearer of Polycarp (who had heard John), answers in his massive Against Heresies (c. 180). His arguments: the apostolic churches teach one public faith handed down openly from the apostles, not secret traditions; the God of creation and the God of redemption are one; and salvation is not escape from the body but its resurrection — 'the glory of God is a living man.' He is also the first writer to name all four Gospels as the church's exclusive, settled witness.",
        significance:
          "Irenaeus secured the biblical conviction that creation is good, the Incarnation is real, and the gospel is public truth for everyone — not esoteric wisdom for insiders. Every time the church resists the temptation to turn faith into private spiritual technique, it is standing on his shoulders.",
      },
      {
        title: "The Canon Takes Shape",
        date: "c. 100–367",
        summary:
          "The four Gospels and Paul's letters are read in worship and cited as Scripture from very early — 2 Peter already classes Paul's letters with 'the other Scriptures.' Pressure from the heretic Marcion (who rejected the Old Testament and trimmed the New, c. 140) and from Gnostic gospels forces the church to articulate which books carry apostolic authority. The Muratorian Fragment (c. 170–200) lists most of the New Testament; the criteria are apostolicity, universal use in the churches, and conformity to the rule of faith. Athanasius's Easter letter of 367 is the first list naming exactly our 27 New Testament books — recognizing, not creating, a consensus long in place.",
        significance:
          "The church did not invent the canon by committee; it recognized the books that bore apostolic authority and had nourished the churches from the beginning. Christians can trust that the Bible in their hands is the church's ancient rule, not a later political construction.",
      },
    ],
  },
  {
    id: "imperial-church",
    label: "The Imperial Church",
    era: "313–590",
    accent: GOLD,
    blurb:
      "Overnight, the persecuted faith becomes the favored one. The church gains freedom, basilicas, and imperial patronage — and faces new dangers: heresy backed by emperors, nominal conversion, and worldliness. Its answer: the great councils, the great theologians, and the flight to the desert.",
    quote: {
      text: "You have made us for yourself, and our heart is restless until it rests in you.",
      source: "Augustine of Hippo, Confessions, c. 397",
    },
    events: [
      {
        title: "Constantine & the Edict of Milan",
        date: "312–313",
        summary:
          "Before the battle of the Milvian Bridge (312), Constantine reports a vision of a cross of light and the words 'In this sign, conquer.' Victorious, he and his co-emperor Licinius issue the Edict of Milan (313), granting full legal toleration to Christianity and restoring confiscated church property. Constantine showers the church with favor — building basilicas, exempting clergy from taxes, making Sunday a public day of rest — and convenes its first ecumenical council. Whether his own faith was deep or political has been debated ever since (he was baptized only on his deathbed in 337), but the change he wrought was total: within a century Christianity would be the empire's official religion under Theodosius (380).",
        significance:
          "Constantine's embrace ended the age of martyrs and began the age of Christendom — a double-edged legacy. The church gained freedom to worship, evangelize, and build, but also began its long, complicated entanglement with worldly power, which would bless and compromise it by turns for fifteen centuries.",
      },
      {
        title: "The Council of Nicaea & the Arian Controversy",
        date: "325",
        summary:
          "Arius, a popular presbyter in Alexandria, teaches that the Son is the first and greatest creature — 'there was when he was not.' The slogan spreads through catchy songs, and the controversy threatens to split the newly legal church. Constantine summons some 300 bishops — many bearing scars from the recent persecution — to Nicaea in 325. The council condemns Arius and confesses the Son as 'of one substance (homoousios) with the Father,' begotten, not made. The fight is far from over: Arianism enjoys imperial backing for decades, and Athanasius of Alexandria, the doctrine's tireless defender, is exiled five times — contra mundum, 'against the world' — before the Council of Constantinople (381) finalizes the Nicene Creed still recited today.",
        significance:
          "Nicaea settled the question on which the gospel hangs: is Jesus truly God? If Christ is a creature, however exalted, he cannot bear the sins of the world or be worshiped without idolatry. The creed's single technical word, homoousios, guards the heart of salvation itself.",
      },
      {
        title: "The Council of Chalcedon",
        date: "451",
        summary:
          "After Nicaea settled that Christ is fully God, a new question pressed: how do deity and humanity relate in him? Apollinaris said the divine Logos replaced Christ's human mind; Nestorius was accused of splitting Christ into two persons; Eutyches blended the natures into one new hybrid. The Council of Chalcedon (451), drawing on Pope Leo's Tome, confesses one person in two natures — truly God and truly man — 'without confusion, without change, without division, without separation.' The definition does not explain the mystery; it fences it, ruling out the errors on every side.",
        significance:
          "Chalcedon protects both halves of the gospel: only one who is fully God can save us, and only one who is fully human can stand in our place. As Gregory of Nazianzus had put it, 'What is not assumed is not healed' — Christ took our whole humanity in order to redeem it whole.",
      },
      {
        title: "Augustine of Hippo",
        date: "354–430",
        summary:
          "A brilliant, restless North African rhetorician chases ambition, philosophy, and pleasure until, in a Milan garden in 386, he hears a child's voice chanting 'take up and read,' opens Romans 13, and surrenders to Christ. As bishop of Hippo for 35 years, Augustine becomes the most influential theologian in Western history. His Confessions invents the introspective spiritual autobiography — 'You have made us for yourself, and our heart is restless until it rests in you.' Against Pelagius he argues that salvation is by grace from first to last, since the fallen will cannot heal itself. As Rome falls to the Goths (410) and pagans blame the Christians, he writes The City of God, setting all of history within the story of two cities — the city of man, built on love of self, and the city of God, built on love of God.",
        significance:
          "Augustine's vision of sovereign grace shaped the entire Western church; a millennium later, both Reformers and Catholic reformers claimed his mantle. His two-cities framework still teaches Christians how to live faithfully in collapsing empires: civilizations rise and fall, but the city of God endures.",
      },
      {
        title: "Jerome & the Vulgate",
        date: "c. 382–405",
        summary:
          "Jerome — brilliant, irascible, and the finest Christian scholar of his age — is commissioned by Pope Damasus to produce a reliable Latin Bible from the chaos of competing translations. Jerome learns Hebrew from Jewish teachers (controversial at the time, since most Christians worked only from the Greek Septuagint) and settles in a monastery in Bethlehem, where he labors over two decades to translate the Scriptures from the original languages into the common — 'vulgar' — Latin of the people. The Vulgate becomes the Bible of the Western church for over a thousand years. His famous dictum: 'Ignorance of the Scriptures is ignorance of Christ.'",
        significance:
          "Jerome established the principle that the church's Bible must rest on the original Hebrew and Greek, and that Scripture belongs in the language people actually speak — a conviction Wycliffe, Tyndale, and Luther would later turn against the very church that had canonized Jerome's translation.",
      },
      {
        title: "The Desert Fathers & the Rise of Monasticism",
        date: "c. 270–547",
        summary:
          "As the church grows comfortable, some flee comfort. Around 270, Antony of Egypt hears 'sell all you have' read in church, obeys it literally, and withdraws to the desert for a life of prayer and combat with temptation; Athanasius's Life of Antony makes him famous across the empire, and thousands follow into the Egyptian and Syrian wilderness. Pachomius organizes hermits into the first communal monasteries; Basil the Great gives Eastern monasticism its enduring rule. In the West, Benedict of Nursia writes his Rule (c. 530) for the monastery of Monte Cassino — a balanced, humane pattern of prayer, work, study, and stability (ora et labora) that becomes the foundation of Western monasticism for fifteen centuries.",
        significance:
          "When martyrdom ceased, monasticism became the church's new radical edge — a standing protest against nominal, comfortable Christianity. The monasteries would go on to preserve Scripture and learning through the coming dark centuries, evangelize barbarian Europe, and supply nearly every renewal movement the medieval church produced.",
      },
    ],
  },
  {
    id: "medieval-church",
    label: "The Medieval Church",
    era: "590–1054",
    accent: TEAL,
    blurb:
      "Rome's empire collapses in the West, and the church is left standing amid the ruins. Missionary monks carry the gospel to the pagan peoples of Europe, a Frankish king revives the idea of a Christian empire, and a long-widening crack between Greek East and Latin West finally breaks open.",
    quote: {
      text: "Christ with me, Christ before me, Christ behind me, Christ in me, Christ beneath me, Christ above me.",
      source: "St. Patrick's Breastplate, traditional, 5th century",
    },
    events: [
      {
        title: "Gregory the Great",
        date: "590–604",
        summary:
          "Gregory, a Roman aristocrat who sold his estates to found monasteries and became a monk himself, is dragged unwillingly to the papacy in 590 — calling himself 'servant of the servants of God,' a title popes still use. With imperial government in the West effectively gone, Gregory feeds Rome during famine, negotiates with Lombard invaders, reforms the clergy, shapes the church's worship (Gregorian chant bears his name), and writes pastoral works read for a millennium. Seeing fair-haired English slaves in the Roman market — 'not Angles but angels,' he reportedly quipped — he dispatches the missionary Augustine to Canterbury in 596.",
        significance:
          "Gregory stands at the hinge between the ancient and medieval church: the model of a pastor who used institutional power as service rather than self-aggrandizement. His missionary vision set the pattern for the conversion of Europe.",
      },
      {
        title: "Missionaries to the Pagan North",
        date: "c. 432–885",
        summary:
          "The conversion of Europe is the work of monks. Patrick, once kidnapped into Irish slavery, returns voluntarily around 432 to evangelize his captors; within a few generations Ireland is a land of monasteries that send missionaries (like Columba to Scotland) back to the continent. Augustine of Canterbury plants the church among the Anglo-Saxons (597); a century later the Englishman Boniface evangelizes the Germans, famously felling the sacred Oak of Thor at Geismar — and dies a martyr in Frisia (754). In the East, the brothers Cyril and Methodius take the gospel to the Slavs (from 863), inventing an alphabet to translate Scripture and liturgy into Slavonic — the ancestor of the Cyrillic script used by hundreds of millions today.",
        significance:
          "The 'Dark Ages' were in fact the great age of missions: nearly every nation of Europe was evangelized in these centuries, usually by monks who came with books and plows rather than swords. Cyril and Methodius's insistence on the vernacular planted a principle — every people should hear God in its own tongue — that missions still lives by.",
      },
      {
        title: "The Rise of Islam & the Eastern Churches",
        date: "622–732",
        summary:
          "Within a single century of Muhammad's death (632), Arab armies carry Islam across the ancient heartlands of Christianity — Syria, the Holy Land, Egypt, North Africa, and Spain — lands that had given the church Antioch, Alexandria, Carthage, Augustine, and the desert fathers. Jerusalem falls in 638; the advance into Western Europe is checked only at Tours (732) by Charles Martel. Christian communities under Muslim rule survive as dhimmis — tolerated but second-class, taxed, and barred from evangelism — and over centuries many slowly convert. Meanwhile the Church of the East, already separated after Ephesus (431), pursues one of history's most astonishing missions along the Silk Road: by 635 its missionary Alopen is received at the Tang court of China, as recorded on the Xi'an stele, and metropolitans are eventually seated from Samarkand to India.",
        significance:
          "Islam's rise reshaped the map of Christianity permanently, severing three of the five ancient patriarchates from Christendom and turning the faith's center of gravity north and west. Yet the Church of the East's forgotten mission to Asia testifies that the gospel was never merely European — and the endurance of Coptic, Syriac, and other ancient churches under fourteen centuries of pressure is one of history's quiet miracles of perseverance.",
      },
      {
        title: "Charlemagne & the Holy Roman Empire",
        date: "800",
        summary:
          "On Christmas Day 800, Pope Leo III places a crown on the head of the Frankish king Charles the Great as he kneels at Mass in St. Peter's, hailing him as Roman Emperor — the first in the West since 476. Charlemagne takes Christian kingship seriously: he sponsors the Carolingian Renaissance, gathering scholars like Alcuin of York to reform education, correct biblical texts, and train clergy; monasteries copy manuscripts in the clear new 'Carolingian minuscule' hand, preserving most of the classical literature we possess. But he also imposes baptism on the conquered Saxons at sword-point, fusing faith and force.",
        significance:
          "Charlemagne's coronation created the medieval ideal of Christendom — one society under Christ, with pope and emperor as its two arms — and with it a thousand years of struggle over which arm ruled the other. His forced conversions stand as a permanent warning of what happens when the cross is carried by the sword.",
      },
      {
        title: "The Iconoclasm Controversy",
        date: "726–843",
        summary:
          "Byzantine emperor Leo III orders the destruction of icons — images of Christ and the saints — in 726, possibly influenced by the success of image-rejecting Islam, igniting a struggle that convulses the Eastern church for over a century. Iconoclasts ('image-breakers') argue that venerating images violates the second commandment; defenders like John of Damascus answer that since the invisible God has become visible flesh in Christ, depicting him affirms the reality of the Incarnation — and that veneration passes to the one depicted, while worship belongs to God alone. The Second Council of Nicaea (787) vindicates the icons; after a second iconoclast period, their final restoration in 843 is still celebrated in Orthodoxy as the 'Triumph of Orthodoxy.'",
        significance:
          "Beneath the argument about art lay an argument about the Incarnation: if God truly took a human face, then matter can carry holiness. The controversy also deepened the estrangement between East and West, who followed the dispute on different terms — another step toward 1054.",
      },
      {
        title: "The Great Schism",
        date: "1054",
        summary:
          "Centuries of drift — different languages (Greek and Latin), rival centers (Constantinople and Rome), divergent customs (married versus celibate clergy, leavened versus unleavened bread) — come to a head over two issues: the West's addition of the filioque ('and the Son') to the Nicene Creed's article on the Spirit's procession, made without an ecumenical council, and Rome's escalating claims of universal papal jurisdiction. In 1054, papal legate Cardinal Humbert lays a bull of excommunication on the altar of Hagia Sophia against Patriarch Michael Cerularius, who excommunicates the legates in return. The breach hardens over the following centuries — sealed bitterly when Western crusaders sack Constantinople itself in 1204 — and has never been healed, though the mutual excommunications were formally lifted in 1965.",
        significance:
          "The first great tearing of the visible church split Christendom into Roman Catholic West and Orthodox East — a wound nearly a thousand years old. It stands as a lasting lesson in how pride, politics, and cultural distance can turn theological differences into permanent division, against Christ's prayer 'that they may all be one.'",
      },
    ],
  },
  {
    id: "high-middle-ages",
    label: "The High Middle Ages",
    era: "1054–1517",
    accent: BLUE,
    blurb:
      "The medieval church at its height — cathedrals climbing toward heaven, universities born from cathedral schools, theology built into vast intellectual systems — and at its depths: holy wars, papal corruption, and the first voices crying for reform that would not be silenced.",
    quote: {
      text: "I do not seek to understand in order that I may believe, but I believe in order to understand.",
      source: "Anselm of Canterbury, Proslogion, 1078",
    },
    events: [
      {
        title: "The Crusades",
        date: "1095–1291",
        summary:
          "At Clermont in 1095, Pope Urban II calls Western knights to liberate Jerusalem from Muslim rule, promising spiritual reward; the crowd roars 'Deus vult!' — 'God wills it!' The First Crusade takes Jerusalem in 1099 amid a horrific massacre of Muslims and Jews. Eight major crusades follow over two centuries, with episodes of genuine courage and piety overshadowed by atrocity: pogroms against Rhineland Jews en route, the doomed Children's Crusade, and the catastrophe of 1204, when the Fourth Crusade sacks Christian Constantinople. The last crusader stronghold, Acre, falls in 1291.",
        significance:
          "The Crusades are Christendom's cautionary tale: what begins as defense of pilgrims and Eastern Christians becomes holy war that betrays the gospel of the crucified Christ, who conquered by dying. Their legacy still shadows Christian-Muslim and Catholic-Orthodox relations — and warns every generation against baptizing violence in Christ's name.",
      },
      {
        title: "Anselm: Faith Seeking Understanding",
        date: "1033–1109",
        summary:
          "Anselm, a Benedictine monk who becomes Archbishop of Canterbury, embodies the medieval marriage of devotion and intellect — his motto: 'faith seeking understanding' (fides quaerens intellectum). In the Proslogion he frames the famous ontological argument, that God is 'that than which nothing greater can be conceived.' His masterpiece Cur Deus Homo ('Why the God-Man?') asks why the Incarnation was necessary and answers with the satisfaction theory of the atonement: sin is an infinite offense against God's honor that humanity owes but cannot pay, and God is owed but cannot justly waive — so only one who is both God and man can make satisfaction. Twice exiled for resisting royal control of the church, he dies in 1109.",
        significance:
          "Anselm gave the Western church its deepest pre-Reformation account of why the cross was necessary — the soil from which the Reformers' doctrine of penal substitution would grow. He models a faith that worships with the mind, asking hard questions from the posture of prayer.",
      },
      {
        title: "Thomas Aquinas & Scholasticism",
        date: "1225–1274",
        summary:
          "In the new universities of Paris, Oxford, and Bologna, theology becomes the 'queen of the sciences,' pursued through rigorous disputation — scholasticism. Its greatest master is Thomas Aquinas, a Dominican friar so quiet in class he was nicknamed 'the dumb ox.' His Summa Theologiae — left unfinished at his death — orders all Christian doctrine into a vast architecture, engaging the newly recovered philosophy of Aristotle and arguing that grace does not destroy nature but perfects it, and that reason and revelation, rightly understood, cannot contradict, since both come from God. Near the end of his life, after an experience in prayer, he stopped writing: 'All that I have written seems like straw compared to what has been revealed to me.'",
        significance:
          "Aquinas represents the high-water mark of the conviction that all truth is God's truth — that Christians can engage the best of human learning without fear. His final silence is its own sermon: the greatest theology ends not in mastery but in worship.",
      },
      {
        title: "Francis of Assisi & the Mendicant Orders",
        date: "1209–1226",
        summary:
          "The son of a wealthy cloth merchant in Assisi renounces his inheritance — stripping off his fine clothes in the public square — to marry 'Lady Poverty' and rebuild Christ's church, which he first takes to mean a ruined chapel. Francis and his followers, the Friars Minor (approved by Innocent III in 1209), own nothing, preach everywhere, and serve lepers and the poor; Clare of Assisi founds the parallel women's order. During the Fifth Crusade, Francis crosses the battle lines to preach Christ peacefully to the Sultan of Egypt. With the Dominicans — Dominic's Order of Preachers, founded to teach and preach against heresy — the mendicant ('begging') friars take the monastic ideal out of the cloister and into the booming cities.",
        significance:
          "At the church's wealthiest, most powerful moment, Francis re-presented the poor, crucified Christ — renewal not by seizing power but by renouncing it. The friars proved that reform usually enters the church not from the top down but from below, through ordinary radical obedience.",
      },
      {
        title: "Wycliffe & Hus: The Morning Stars of Reform",
        date: "c. 1370–1415",
        summary:
          "As the papacy descends into scandal — exile in Avignon, then the Great Western Schism (1378–1417) with two and eventually three rival popes excommunicating each other — Oxford professor John Wycliffe argues that Scripture, not the papacy, is the supreme authority, that the church is the body of the elect rather than a clerical hierarchy, and that the Bible belongs in English; his followers produce the first complete English Bible and are derided as 'Lollards.' His writings ignite Bohemia, where the Prague preacher Jan Hus calls for reform of clerical corruption and Christ's sole headship over the church. Promised safe conduct to the Council of Constance, Hus is instead condemned and burned at the stake in 1415, singing psalms in the flames. The same council, unable to refute the dead Wycliffe, orders his bones dug up and burned.",
        significance:
          "A century before Luther, the Reformation's core convictions — supreme Scripture, vernacular Bibles, Christ's headship, a church defined by faith rather than hierarchy — were already alive, and already costing blood. Luther would later be startled to be told, 'You are saying what Hus said.' The pre-reformers prove the Reformation was a long-ripening fruit, not one monk's tantrum.",
      },
      {
        title: "Gutenberg & the Printing Press",
        date: "c. 1455",
        summary:
          "In Mainz, Germany, Johannes Gutenberg perfects printing with movable metal type, and the first major book off his press is the Bible — the magnificent 42-line Latin Vulgate of c. 1455. Books that took a monastery scriptorium a year to copy can now be produced by the hundreds in weeks, at a fraction of the cost. Print shops spread to every major European city within a generation. Ideas — and Scripture — can now travel faster than any authority can suppress them, as the events of 1517 will spectacularly demonstrate: Luther's theses will reach all of Germany in weeks and much of Europe within months.",
        significance:
          "It is no accident that the Reformation followed the printing press by sixty years. God's providence in technology put the Scriptures within reach of ordinary people for the first time since the ancient church — a reminder that media revolutions, then as now, reshape how the gospel moves through the world.",
      },
    ],
  },
  {
    id: "reformation",
    label: "Reformation",
    era: "1517–1648",
    accent: PURPLE,
    blurb:
      "A monk with a mallet, a Bible in the plow-boy's tongue, and a century of upheaval. The Reformation recovers the gospel of grace alone through faith alone — and shatters Western Christendom into the confessional families that still shape the church today.",
    quote: {
      text: "My conscience is captive to the Word of God... Here I stand; I can do no other. God help me.",
      source: "Martin Luther at the Diet of Worms, 1521",
    },
    events: [
      {
        title: "Luther & the Ninety-Five Theses",
        date: "1517–1521",
        summary:
          "Martin Luther, an Augustinian monk and Bible professor tormented by the question of how a sinner can stand before a holy God, finds his answer in Romans 1:17 — the righteousness of God is not a standard that condemns but a gift that justifies, received by faith alone. When the friar Tetzel hawks indulgences near Wittenberg ('When a coin in the coffer rings, a soul from purgatory springs'), Luther posts ninety-five theses for debate on October 31, 1517; the printing press makes them a continental sensation within weeks. Pressed to recant before Emperor Charles V at the Diet of Worms (1521), he refuses: 'My conscience is captive to the Word of God... Here I stand; I can do no other. God help me.' Hidden in the Wartburg castle, he translates the New Testament into vigorous German in eleven weeks.",
        significance:
          "The Reformation's material principle — justification by grace alone through faith alone in Christ alone — restored the gospel of a gracious God to the center of the church; its formal principle, Scripture alone as final authority, restored the ground on which to stand. Luther's stand at Worms made the bound conscience under God's Word the hinge of the modern era.",
      },
      {
        title: "Zwingli & Calvin: The Reformed Tradition",
        date: "1519–1564",
        summary:
          "In Zurich, Ulrich Zwingli begins expository preaching straight through Matthew in 1519, and the city reforms its worship and life by the test of Scripture; he dies in battle in 1531 defending the Protestant cantons. A generation later the French exile John Calvin, intercepted in Geneva by William Farel's thundering charge that God would curse his quiet scholar's life, reluctantly stays to organize the church there. His Institutes of the Christian Religion — revised across his lifetime — becomes Protestantism's most influential systematic theology, centered on the glory and sovereignty of God; his commentaries cover nearly the whole Bible. Geneva becomes a haven for refugees and a school for reformers: John Knox, who carries the Reformation to Scotland, calls it 'the most perfect school of Christ since the days of the apostles.'",
        significance:
          "The Reformed branch of the Reformation pressed sola scriptura into every corner of life — church government, worship, vocation, education, and civil society — with a world-embracing vision summed up in living 'coram Deo,' before the face of God. Calvin's Geneva exported the Reformation across Europe and, through the Puritans, to the New World.",
      },
      {
        title: "The English Reformation: Tyndale & Cranmer",
        date: "1525–1556",
        summary:
          "William Tyndale, refused permission to translate the Bible in England, does it in exile — vowing to a clergyman that 'a boy that driveth the plough' would know more Scripture than he. His New Testament (1526), translated from the Greek, is smuggled into England in bales of cloth; betrayed in 1536, he is strangled and burned, praying 'Lord, open the King of England's eyes.' Within three years a royally licensed English Bible — mostly Tyndale's work — stands in every parish church. Henry VIII's break with Rome (1534) is political, but under Edward VI Archbishop Thomas Cranmer gives the English church a genuinely reformed soul: the Book of Common Prayer (1549, 1552), whose cadences shape English-speaking worship to this day. Under Catholic Mary I, Cranmer is burned at Oxford (1556), first thrusting into the flames the hand that had signed his recantations.",
        significance:
          "Tyndale's translation underlies some four-fifths of the King James Version and stamped the English language itself ('let there be light,' 'the powers that be,' 'the salt of the earth'). The English Reformation shows God writing straight with crooked lines — a king's divorce politics becoming the channel for an open Bible and reformed worship for the English-speaking world.",
      },
      {
        title: "The Anabaptists: The Radical Reformation",
        date: "1525–1561",
        summary:
          "In Zurich in 1525, a circle of Zwingli's own students — Conrad Grebel, Felix Manz — concludes that Scripture knows only the baptism of believers, and they baptize one another, founding the movement opponents mock as 'Anabaptists' (re-baptizers). They go further than the magisterial reformers: the church should be a free, voluntary community of committed disciples, separate from the state, refusing oaths and the sword. For this they are persecuted by Catholics and Protestants alike — Manz is drowned in the Limmat in 1527, a cruel parody of his baptismal teaching, and thousands die in the following decades. The former priest Menno Simons gathers the scattered survivors into the peaceful communities later called Mennonites; the Amish and Hutterites also descend from the movement.",
        significance:
          "The Anabaptists anticipated convictions much of the modern church now takes for granted: religious liberty, the separation of church and state, and the church as a believing community rather than a population. Their suffering at fellow Protestants' hands is a sobering reminder that the persecuted can become persecutors.",
      },
      {
        title: "The Catholic Counter-Reformation",
        date: "1540–1563",
        summary:
          "Rome answers the Protestant challenge with its own reform and consolidation. The Council of Trent (1545–1563) cleans up the worst abuses — indulgence-selling, absentee bishops, untrained clergy (mandating seminaries) — while doctrinally rejecting the Reformation, anathematizing justification by faith alone and affirming Scripture-plus-tradition, the seven sacraments, and the Latin Vulgate. Meanwhile Ignatius of Loyola, a Spanish soldier converted while convalescing from a cannonball wound, founds the Society of Jesus (approved 1540): rigorously educated, vowed to special obedience to the pope, the Jesuits become the era's schoolmasters and its boldest missionaries — Francis Xavier carries the gospel to India and Japan, Matteo Ricci to the court of Ming China.",
        significance:
          "Trent defined Roman Catholicism for the next four centuries, hardening the Reformation divide into formal, mutually anathematizing confessions. Yet the Counter-Reformation also shows the genuine spiritual seriousness on the Catholic side — and the Jesuit missions made the 'age of division' simultaneously an age of unprecedented global expansion.",
      },
      {
        title: "Wars of Religion & the Peace of Westphalia",
        date: "1562–1648",
        summary:
          "Confessional division turns murderous. France suffers decades of Catholic-Huguenot civil war, including the St. Bartholomew's Day Massacre (1572), in which thousands of Protestants are slaughtered in Paris and beyond; the Edict of Nantes (1598) buys a fragile toleration. The climax is the Thirty Years' War (1618–1648), which begins as a Protestant-Catholic struggle in Bohemia and engulfs Europe, killing — by war, famine, and plague — perhaps a third of the German lands' population. The Peace of Westphalia (1648) finally ends it, recognizing Catholic, Lutheran, and Reformed territories and effectively abandoning the dream of a single confessional Christendom enforced by arms.",
        significance:
          "Westphalia marks the exhaustion of coercive Christendom: Europe concedes that faith cannot finally be imposed by the sword, opening the slow road to religious liberty. The wars' carnage also helped breed Enlightenment skepticism toward all dogma — a warning that the church's violence preaches louder than its words, and for generations.",
      },
    ],
  },
  {
    id: "awakenings",
    label: "Awakenings & Missions",
    era: "1648–1900",
    accent: GREEN,
    blurb:
      "Cold orthodoxy and Enlightenment doubt meet their answer: fire. Revival sweeps the Atlantic world, a cobbler launches the modern missionary movement, and awakened Christians take aim at the slave trade. The church learns again that doctrine is meant to burn.",
    quote: {
      text: "Expect great things from God; attempt great things for God.",
      source: "William Carey, Nottingham sermon, 1792",
    },
    events: [
      {
        title: "Pietism & the Moravians",
        date: "1675–1738",
        summary:
          "Reacting against a Lutheranism grown coldly doctrinal, Philipp Jakob Spener's Pia Desideria (1675) calls for living faith: small groups for Bible study and prayer, lay involvement, and preaching aimed at conversion and holiness — Pietism. The movement's most remarkable fruit grows at Herrnhut, the estate where Count Nikolaus von Zinzendorf shelters Moravian refugees; after a profound communal renewal in 1727, the community begins a round-the-clock prayer watch that continues for a century and sends out missionaries decades before the great missionary societies exist — to the Caribbean (where the first volunteers were prepared to sell themselves into slavery to reach slaves), Greenland, Africa, and the Americas. On a storm-tossed Atlantic crossing in 1736, the Moravians' calm hymn-singing unsettles a frightened young Anglican missionary named John Wesley.",
        significance:
          "Pietism re-centered Protestantism on the converted heart — faith as living trust, not bare assent — and the Moravians fused that warmth to world mission and unceasing prayer. Their influence on Wesley makes them a hidden hinge of the entire evangelical movement.",
      },
      {
        title: "The Great Awakening: Edwards & Whitefield",
        date: "1734–1750s",
        summary:
          "In Northampton, Massachusetts, the preaching of pastor-theologian Jonathan Edwards on justification by faith sparks a surprising work of God (1734–35) that he documents with a scientist's care; his sermon 'Sinners in the Hands of an Angry God' (1741) becomes the era's most famous, though his greater legacy is his luminous theology of God's beauty and 'religious affections' — and his careful test for distinguishing true revival from froth. The awakening goes continental through George Whitefield, the cross-eyed English evangelist with a voice Benjamin Franklin calculated could reach thirty thousand in the open air; in seven American tours and tireless British campaigns he preaches perhaps eighteen thousand sermons, knitting the colonies' scattered revivals into one transatlantic movement.",
        significance:
          "The Great Awakening forged evangelicalism: conversion-centered, Bible-driven, cross-focused, activist Christianity that leaps denominational walls. Edwards remains its theological gold standard — proof that revival fire and rigorous thought can live in the same mind.",
      },
      {
        title: "The Wesleys & Methodism",
        date: "1738–1791",
        summary:
          "John Wesley — failed missionary to Georgia, meticulous Oxford 'Methodist' — attends a meeting on Aldersgate Street in May 1738 where Luther's preface to Romans is read, and feels his heart 'strangely warmed': he trusts Christ alone for salvation. Barred from many pulpits, he follows Whitefield into open-air preaching to miners and mill-workers, and for fifty years rides a quarter-million miles on horseback preaching some forty thousand sermons, declaring 'the world is my parish.' His genius is organization: converts are gathered into societies, classes, and bands for accountability and growth, served by lay preachers. His brother Charles writes over six thousand hymns — 'And Can It Be,' 'O for a Thousand Tongues,' 'Hark! the Herald Angels Sing' — putting the gospel in the people's mouths.",
        significance:
          "Methodism showed that revival need not evaporate: structured discipleship turned awakened crowds into transformed communities, reaching the industrial poor the established church had lost. Historians still argue Wesley's revival changed the moral fabric of England; his fusion of evangelism, organization, and social conscience remains a working blueprint.",
      },
      {
        title: "William Carey & the Modern Missions Movement",
        date: "1792–1834",
        summary:
          "William Carey, a poor Northamptonshire shoemaker who teaches himself Greek, Hebrew, and half a dozen other languages at his workbench beside a homemade world map, is told by an older minister, 'Sit down, young man; when God pleases to convert the heathen, he will do it without your help or mine.' Carey instead publishes his Enquiry (1792), preaches 'Expect great things from God; attempt great things for God,' and helps found the Baptist Missionary Society — then goes himself to India in 1793. Through poverty, his son's death, his wife's mental collapse, and a fire that destroys years of manuscripts, he perseveres for forty years without furlough: translating the whole Bible into six languages and portions into many more, founding Serampore College, and campaigning against widow-burning (sati), outlawed in 1829.",
        significance:
          "Carey detonated the modern Protestant missionary movement: within decades, societies multiplied and the gospel was moving into Asia, Africa, and the Pacific in the greatest sustained expansion since the apostles. His life is the standing answer to every comfortable theology that makes the Great Commission someone else's job.",
      },
      {
        title: "Abolition: Wilberforce & the Clapham Sect",
        date: "1787–1833",
        summary:
          "William Wilberforce, a wealthy young MP transformed by evangelical conversion in 1785, considers leaving politics for ministry until John Newton — the former slave-ship captain turned pastor and author of 'Amazing Grace' — urges him to stay and serve God in Parliament. From 1787 Wilberforce leads the parliamentary war against the slave trade, sustained by the 'Clapham Sect,' a community of evangelical activists (Hannah More, Granville Sharp, Zachary Macaulay) who pioneer the modern tools of moral campaigning: investigative research, petitions, boycotts, mass publication. Defeated year after year for two decades, they win abolition of the trade in 1807; slavery itself is abolished across the British Empire in 1833 — the news reaching Wilberforce three days before he dies.",
        significance:
          "Abolition is the modern era's clearest demonstration that awakened faith transforms public life: the gospel that frees souls drove men and women to free bodies. The Clapham pattern — long obedience, holy alliance, and persistence through defeat — remains the church's template for confronting entrenched social evil.",
      },
      {
        title: "The Birth of the Black Church",
        date: "1773–1816",
        summary:
          "Out of the crucible of American slavery rises one of church history's most remarkable communities. Enslaved Africans, evangelized in the awakenings, hear in Scripture what their masters missed — Exodus, the prophets, and a crucified Lord who knew the lash — and forge a faith of their own in 'hush harbors' and the spirituals. The first independent Black congregations form (Silver Bluff and First African Baptist of Savannah, 1770s); in Philadelphia, Richard Allen and Absalom Jones walk out of St. George's Methodist church after being pulled from their knees in a whites-only section, and Allen founds the African Methodist Episcopal Church (1816), the first independent Black denomination. Preachers like David Walker and later Frederick Douglass wield Scripture against slavery itself, indicting the 'Christianity of this land' by the Christianity of Christ.",
        significance:
          "The Black church stands as a standing miracle and a standing rebuke: people given a distorted gospel meant to pacify them found in it the true God who liberates. It became the enduring center of African American life — mother of the spirituals, the abolitionist witness, and a century later the Civil Rights movement — and proof that the Word of God cannot be chained by those who carry it unworthily.",
      },
      {
        title: "Hudson Taylor & the Inland Missions",
        date: "1853–1905",
        summary:
          "A generation after Carey, the young Yorkshireman James Hudson Taylor sails for China (1853) and breaks the missionary mold: he adopts Chinese dress and queue, insists missionaries live among the people rather than in coastal compounds, and in 1865 founds the China Inland Mission — a 'faith mission' that never solicits funds, accepts unordained workers and single women, and aims at the vast unreached interior. By his death in 1905 the CIM fields over 800 missionaries; the model inspires a wave of faith missions toward Africa's and Asia's interiors, while the Student Volunteer Movement (1886) channels some 20,000 university graduates into world missions under the banner 'the evangelization of the world in this generation.'",
        significance:
          "Taylor's identification principle — becoming culturally Chinese to win the Chinese — recovered Paul's 'all things to all people' as a missions method, anticipating the indigenous churches of the next century. His radical trust ('God's work done in God's way will never lack God's supply') and the student missions wave set the stage for Christianity's twentieth-century globalization.",
      },
      {
        title: "The Second Great Awakening & Spurgeon",
        date: "1801–1892",
        summary:
          "A new wave of revival sweeps the young United States: camp meetings like Cane Ridge, Kentucky (1801), draw tens of thousands; Methodist circuit riders and Baptist farmer-preachers plant churches across the frontier; Charles Finney's urban campaigns press for immediate decision; and the awakening's energy births a 'benevolent empire' of missionary, Bible, education, and abolition societies, while also fueling the explosive growth of the Black church. Across the Atlantic, Charles Haddon Spurgeon — converted at fifteen in a snowstorm-emptied Methodist chapel — becomes pastor of London's New Park Street Chapel at nineteen and preaches to thousands weekly at the Metropolitan Tabernacle for nearly four decades, founding a pastors' college and orphanages; his printed sermons sell in the tens of millions worldwide, earning him the title 'Prince of Preachers.'",
        significance:
          "The Second Awakening made the United States a substantially churchgoing nation and wove evangelical conviction into its reform movements; Spurgeon proved that the old gospel, plainly and warmly preached, could command the modern city. Together they close the century with the evangel ascendant — on the eve of its hardest modern tests.",
      },
    ],
  },
  {
    id: "global-church",
    label: "The Global Church",
    era: "1900–today",
    accent: GOLD,
    blurb:
      "The century of world wars, totalitarianism, and secularization — and the century in which Christianity becomes, for the first time, a truly global faith. The church's center of gravity moves south and east, and more believers suffer for Christ than in any era before.",
    quote: {
      text: "Cheap grace is the deadly enemy of our church. We are fighting today for costly grace.",
      source: "Dietrich Bonhoeffer, The Cost of Discipleship, 1937",
    },
    events: [
      {
        title: "Azusa Street & the Birth of Pentecostalism",
        date: "1906–1915",
        summary:
          "In April 1906, in a former livery stable on Azusa Street in Los Angeles, a revival breaks out under the preaching of William J. Seymour, a Black holiness preacher and son of formerly enslaved parents, who had absorbed Charles Parham's teaching on Spirit baptism while listening from the hallway of a segregated classroom. For three years, services run day and night: speaking in tongues, healings, and — scandalous to the era's press — Blacks, whites, Latinos, and Asians worshiping together ('the color line was washed away in the blood,' one observer wrote). Visitors carry the Pentecostal message around the world within months, seeding denominations like the Assemblies of God and the Church of God in Christ.",
        significance:
          "From this unpromising address sprang the fastest-growing Christian movement in history: Pentecostal and charismatic Christianity now numbers over 600 million and powers much of the church's growth in the Global South. Azusa is also a parable — God once again choosing 'what is lowly and despised in the world' to renew his church.",
      },
      {
        title: "Edinburgh 1910: The World Missionary Conference",
        date: "1910",
        summary:
          "Twelve hundred delegates from missionary societies across the Protestant world gather in Edinburgh under the watchword 'the evangelization of the world in this generation,' chaired by the American Methodist layman John R. Mott. The conference surveys the global state of missions with unprecedented thoroughness and breathes a confident optimism — within four years shattered by a World War that begins among the 'Christian' nations of Europe. Edinburgh's continuation committees grow into the modern ecumenical movement (eventually the World Council of Churches, 1948), while its missionary DNA later flows into the evangelical Lausanne movement (1974), where Global South leaders speak as equals.",
        significance:
          "Edinburgh marks both the high tide of Western missionary confidence and the seed of what replaced it: a genuinely world church. The century that followed humbled the senders — and revealed that the gospel had taken root so deeply abroad that the 'mission field' would soon be sending missionaries back.",
      },
      {
        title: "Bonhoeffer & the Confessing Church",
        date: "1933–1945",
        summary:
          "When Hitler takes power in 1933, the 'German Christian' movement eagerly Nazifies the Protestant church — swastikas on altars, the Old Testament disparaged, a ban on pastors of Jewish descent. In protest, the Confessing Church arises; its Barmen Declaration (1934), drafted chiefly by Karl Barth, confesses Jesus Christ as 'the one Word of God which we have to hear, trust, and obey in life and in death' — against every Führer. The young theologian Dietrich Bonhoeffer trains pastors in an illegal seminary, writes The Cost of Discipleship ('cheap grace is the deadly enemy of our church... grace without the cross') and Life Together, and finally joins the resistance against Hitler. Arrested in 1943, he is hanged at Flossenbürg on April 9, 1945, weeks before the war's end, telling a fellow prisoner: 'This is the end — for me, the beginning of life.'",
        significance:
          "The German church struggle is the modern era's starkest test case of Christ versus Caesar: most of the church accommodated; a costly minority confessed. Bonhoeffer's witness — that when Christ calls a man, 'he bids him come and die' — remains the standard question put to every church tempted to trade its soul for national favor.",
      },
      {
        title: "Billy Graham & Modern Evangelicalism",
        date: "1949–2018",
        summary:
          "A North Carolina farm boy turned evangelist, Billy Graham vaults to prominence at the 1949 Los Angeles tent crusade and goes on to preach the gospel in person to more people than anyone in history — some 215 million in over 185 countries, from a sixteen-week crusade at Harlem-adjacent Madison Square Garden (1957) to over a million hearers in Seoul (1973). He insists on integrated seating in the Jim Crow South, personally pulling down segregation ropes in Chattanooga (1953); founds Christianity Today (1956) to give post-fundamentalist evangelicalism an intellectual voice; and convenes the Lausanne Congress on World Evangelization (1974), whose covenant — shaped by voices like John Stott and Latin America's René Padilla — binds evangelism and social responsibility together for a global evangelical movement.",
        significance:
          "Graham embodied a mid-century evangelicalism that was confident, cooperative, and centered on the simple call to be born again — leading millions to faith while pulling conservative Protestantism out of its separatist bunker. Lausanne, perhaps his most enduring institutional legacy, gave the now-global evangelical family its common table.",
      },
      {
        title: "Vatican II & the Quest for Christian Unity",
        date: "1962–1965",
        summary:
          "Pope John XXIII stuns the Catholic world by summoning an ecumenical council 'to open the windows' of the church — the Second Vatican Council, the largest gathering of bishops in history, with Protestant and Orthodox observers present. Without changing core Catholic doctrine, the council transforms Catholic practice: the Mass in the people's languages instead of Latin, Scripture restored to the center of Catholic piety with the laity urged to read it, the church redefined as the whole 'people of God,' religious liberty affirmed as a human right (a reversal of nineteenth-century positions), and other Christians acknowledged as 'separated brethren' rather than simply heretics. In 1965, Pope Paul VI and Patriarch Athenagoras mutually nullify the excommunications of 1054. The era also sees broader thaw: Catholic-Lutheran dialogue eventually produces the Joint Declaration on the Doctrine of Justification (1999).",
        significance:
          "After four centuries of frozen hostility since Trent, the divided branches of Christianity began speaking to one another again — even where real doctrinal differences remain. For all Christians, Vatican II is a reminder that Jesus' prayer 'that they may all be one' (John 17:21) is not optional sentiment but unfinished business.",
      },
      {
        title: "The Explosion of the Global South",
        date: "1900–today",
        summary:
          "In 1900, roughly four out of five of the world's Christians lived in Europe and North America. Today the proportions have inverted: the majority of Christians live in Africa, Asia, and Latin America. Sub-Saharan Africa has gone from around ten million Christians in 1900 to well over 600 million — historian Philip Jenkins calls it the greatest religious change of the century — driven largely by African evangelists, prophets, and independent churches rather than foreign missionaries. China's church, perhaps a million when missionaries were expelled in 1949, has grown under persecution to scores of millions, largely in unregistered house churches. South Korea, Brazil, and Nigeria now rank among the world's great missionary-sending nations: the mission field has become the mission force.",
        significance:
          "Christianity is not and never was a 'Western religion' — born in Asia, cradled in Africa (Augustine, Athanasius, the desert fathers), it has simply come home to the whole world. The average Christian today is more likely a woman in Lagos or São Paulo than a man in London — and the younger churches are now evangelizing the secularizing West.",
      },
      {
        title: "Persecution & the Digital-Age Church",
        date: "1900–today",
        summary:
          "By many estimates, more Christians died for their faith in the twentieth century than in all previous centuries combined — under Soviet and Maoist communism, the Armenian genocide, and successive waves of nationalist and Islamist violence; credible monitors today count hundreds of millions of believers facing high levels of persecution, from North Korean prison camps to attacked congregations in Nigeria. Yet the persecuted church keeps growing, often fastest where pressure is greatest — Iran's underground church among the world's fastest-growing. Meanwhile the gospel rides new media as it once rode Roman roads and Gutenberg's press: Scripture in roughly 700+ languages with portions in over 3,500, Bible apps with hundreds of millions of installs, churches streaming worship worldwide — alongside new digital-age temptations of distraction, outrage, and disembodied community.",
        significance:
          "Tertullian's ancient word still holds: the blood of the martyrs is seed. The church of 2026 looks more like the church of AD 100 than the church of 1950 — minority status in many places, suffering in some, multiplying at the margins — and the same Lord still keeps the same promise: 'I will build my church, and the gates of hell shall not prevail against it.'",
      },
    ],
  },
];

type Movement = {
  id: string;
  title: string;
  accent: string;
  paragraphs: string[];
};

const MOVEMENTS: Movement[] = [
  {
    id: "doctrine-through-controversy",
    title: "Doctrine Clarified Through Controversy",
    accent: BLUE,
    paragraphs: [
      "The church has rarely defined doctrine in calm seminar rooms. Nearly every major confession was hammered out under attack, because error forced the church to say precisely what Scripture had always taught. Arius denied the Son's full deity — and the church answered at Nicaea (325) that Christ is 'of one substance with the Father.' Later disputes about how deity and humanity unite in Christ produced Chalcedon's careful definition (451): one person, two natures, 'without confusion, without change, without division, without separation.' The medieval church's distortions of grace provoked the Reformation's recovery of justification by faith alone. In each case, the heresy came first; the creed was the church's considered, biblical reply.",
      "Notice the pattern: the councils did not add to Scripture but fenced it — ruling out readings that broke the Bible's own claims. Athanasius, Augustine, and Luther all understood themselves as conserving the apostolic faith, not innovating. The controversies were painful, sometimes ugly, and stretched across generations (Nicaea took over fifty years to win the field). But the church emerged each time with a clearer grasp of the gospel than it had before.",
      "For today: doctrinal conflict is not a sign that something has gone wrong with the church — it is often how the Spirit drives the church deeper into the Word. The right response to controversy is neither panic nor cynicism but patient, biblical discernment. And the creeds the controversies produced — Nicene, Chalcedonian — remain the shared inheritance of nearly all Christians everywhere, a gift bought at great cost.",
    ],
  },
  {
    id: "monasticism-renewal",
    title: "Monasticism & the Recurring Engine of Renewal",
    accent: TEAL,
    paragraphs: [
      "Whenever the church has grown comfortable, God has raised up communities of radical devotion at its margins. When the age of martyrs ended and half-converted crowds filled the churches, Antony walked into the Egyptian desert — and monasticism became the new front line of wholehearted discipleship. Benedict's Rule turned that impulse into stable communities of prayer and work that preserved Scripture, fed the poor, and evangelized barbarian Europe. When wealth corrupted the monasteries themselves, reform came through new orders — Cluny, the Cistercians under Bernard of Clairvaux — and when the cities boomed, Francis and Dominic took the vowed life out of the cloister and into the streets.",
      "The same renewal pattern continues after the Reformation in new forms: Pietist small groups within a cold Lutheranism, the Moravian community at Herrnhut with its hundred-year prayer meeting, Wesley's class meetings and bands, the holiness and Pentecostal movements, and modern intentional communities and prayer movements. The structures differ; the function is identical — a committed core whose visible seriousness about God calls the wider church back to its first love.",
      "For today: renewal rarely starts at the center of institutional power; it starts with small bands of people who actually do what the rest merely affirm. The question the monks and Moravians put to every generation is simple: what would it look like to order your whole life — time, money, community, prayer — around seeking God first?",
    ],
  },
  {
    id: "missions-journey",
    title: "Missions: From Jerusalem Outward",
    accent: GREEN,
    paragraphs: [
      "Acts 1:8 is the plot of church history: 'You will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the end of the earth.' The gospel moved from Jewish Jerusalem into the Greco-Roman world within a generation — already crossing its first great cultural frontier when the Jerusalem Council ruled that Gentiles need not become Jews to follow the Messiah. It crossed again into the barbarian north through Patrick, Boniface, and Cyril and Methodius; again into Asia with Nestorian merchants on the Silk Road, the Jesuits Xavier and Ricci, and later Carey, Hudson Taylor, and a host of others; again into the Pacific and the African interior in the nineteenth century's great missionary wave.",
      "At every crossing the same question recurred: how much of the sending culture is actually the gospel, and how much is just culture? The best missionaries — from Cyril and Methodius inventing a Slavic alphabet, to Ricci in Mandarin robes, to Carey translating rather than anglicizing — bet on translation: the conviction that God speaks every language and that the faith can take authentic root in every culture. The worst moments — forced Saxon baptisms, colonial entanglement — came when the church confused conversion with conquest.",
      "The result is the great reversal of our own era: the 'mission field' became the church's heartland. The majority church now lives in Africa, Asia, and Latin America, and Nigerian, Korean, and Brazilian missionaries evangelize Europe and North America. Mission was never the West discipling the rest; it is the body of Christ completing the map — and it now runs in every direction at once.",
    ],
  },
  {
    id: "church-and-power",
    title: "The Church & Power: Constantine's Double-Edged Legacy",
    accent: GOLD,
    paragraphs: [
      "In 313 the persecuted church suddenly found the emperor on its side — and gained much: legal freedom, the great councils (imperially convened), public influence for Christian ethics, and the slow Christianization of European law and culture. It also acquired dangers no persecutor could inflict: churches full of converts seeking advancement rather than Christ, bishops behaving like courtiers, and emperors presuming to steer doctrine. Within a century, the faith once punished by the state was being enforced by it.",
      "The medieval centuries played out the tension: popes crowning and excommunicating emperors, the moral catastrophe of the Crusades and inquisitions, and yet also Christendom's genuine fruits — hospitals, universities, the slow taming of war and slavery in Europe. The pattern is consistent: the church wielding the sword has disgraced the gospel; the church renouncing the sword — Francis before the Sultan, the Anabaptists, the Confessing Church's 'the church must remain the church' — has commended it. Augustine's two cities remain the necessary map: the city of God advances by witness and love, never by coercion.",
      "For today: every generation of Christians faces its own Constantinian bargain — cultural power and political favor in exchange for some measure of the church's independence and credibility. History's verdict is sobering: the church has usually been spiritually healthiest when politically weakest. That is not a call to withdrawal (remember Wilberforce) but to vigilance: the church serves the state's good best when it worships Christ first and refuses to become any party's chaplain.",
    ],
  },
  {
    id: "martyrdom",
    title: "Martyrdom: The Seed of the Church",
    accent: RED,
    paragraphs: [
      "Tertullian taunted Rome around AD 197: 'The more you mow us down, the more we grow; the blood of Christians is seed.' He was reporting an observed fact. Stephen's stoning scattered the Jerusalem church — and spread the gospel to Antioch. The arena deaths of Ignatius, Polycarp, Perpetua, and thousands of unnamed others did not frighten the empire's people away from Christ; their composure and forgiveness drew converts, until the empire itself capitulated. 'Martyr' simply means 'witness' — and dying well proved to be the most unanswerable sermon the church ever preached.",
      "The pattern never stopped. Hus sang in the flames and Bohemia rose; Tyndale's last prayer was answered with an English Bible within three years; the blood of Reformation-era martyrs on all sides watered convictions their executioners could not kill. The twentieth century saw more Christian martyrs than perhaps all prior centuries combined — under communism, fascism, and religious nationalism — and yet the churches of China, Iran, and sub-Saharan Africa, pressed hardest, grew fastest. Bonhoeffer's word proved true in his own body: 'When Christ calls a man, he bids him come and die.'",
      "For today: most Western Christians will never face the arena, but the martyrs still set the church's compass. They testify that Christ is not a lifestyle accessory but a Lord worth everything; that the church needs no state protection to survive; and that fear, the weapon every persecutor relies on, is broken by resurrection hope. The book of Revelation's promise belongs to them — 'they loved not their lives even unto death' — and their courage is part of the inheritance of every believer who bears the same name they died for.",
    ],
  },
  {
    id: "word-and-worship",
    title: "The Word & Worship Across the Ages",
    accent: GOLD,
    paragraphs: [
      "A quiet thread runs beneath all the louder dramas of church history: the labor to put God's Word in the people's hands and God's praise in the people's mouths. The Septuagint gave Greek-speaking Jews and then the first churches their Bible; Jerome's Vulgate gave Latin Christendom its Scriptures for a millennium; Cyril and Methodius built an alphabet so the Slavs could read; Wycliffe's Lollards copied English Gospels by hand under threat of death; Tyndale died to put the New Testament in the plow-boy's English; Carey wore out his life translating in Serampore. Today, with complete Bibles in roughly 700 languages and portions in thousands more, the translators' work continues on every continent — the longest-running project in Christian history.",
      "Worship tells the same story in song. The earliest believers sang psalms and christological hymns (fragments survive in Philippians 2 and Colossians 1); Ambrose and the Greek fathers wrote hymns to teach doctrine against the heretics, who also sang; Gregorian chant carried the medieval church's prayer; Luther put the gospel in German chorales ('A Mighty Fortress') because he wanted the congregation, not just the choir, to sing; Watts and the Wesleys gave evangelicalism its hymnbook; the enslaved Black church forged the spirituals, perhaps America's deepest contribution to Christian worship; and the global church now writes its praise in Yoruba, Korean, Portuguese, and a thousand other tongues.",
      "For today: every Bible you own and every song you sing arrived through centuries of costly labor. The pattern teaches two permanent lessons — the church is healthiest when the Word is open and the whole congregation sings; and the gospel does not merely tolerate translation into new languages and cultures, it demands it. Whatever the next media age brings, those two convictions will carry the church through it.",
    ],
  },
  {
    id: "why-history-matters",
    title: "Why Church History Matters Today",
    accent: PURPLE,
    paragraphs: [
      "We are not the first generation to follow Jesus. Every Christian today believes, worships, and reads Scripture inside a 2,000-year conversation — whether they know it or not. The Trinity you confess was defended by Athanasius through five exiles; the Bible on your shelf was copied by monks, translated by martyrs, and printed because of Gutenberg; the hymns and worship songs you sing descend from Charles Wesley and the spirituals of the enslaved Black church; the quiet time you keep echoes Pietist small groups and monastic hours. Ignoring church history doesn't free you from it — it just leaves you shaped by forces you can't see.",
      "History also supplies what the present cannot: perspective and humility. The communion of saints (Hebrews 12:1) means Augustine, Monica, Perpetua, and the unnamed millions are not dead exhibits but elder siblings — 'so great a cloud of witnesses.' Their failures humble us: the same church that produced Francis produced the Crusades, and Christians who were heroically right about Christ were grievously wrong about slavery or violence — which should make us ask what our own age is blind to. Their faithfulness steadies us: the church has already survived persecution, plague, schism, corruption, and cultural collapse, and Christ's promise — 'I will build my church' — has outlasted every empire that tried to co-opt or crush it.",
      "And history feeds gratitude. Nothing about your faith is self-made: someone evangelized your ancestors, someone preserved the text, someone died for the doctrine you take for granted. To study church history is to read your own family story — and to take your place in it. The story is not finished; the same Lord who walked with the church through twenty centuries is writing the next chapter through the believers of today, including you.",
    ],
  },
];

const JOURNAL_PROMPTS = [
  "Which era of church history most surprises or inspires you?",
  "What would you have died for, as the martyrs did?",
  "Where do you see the church needing reformation today?",
  "How does being part of a 2,000-year story change how you see your faith?",
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
const JOURNAL_KEY = "vine_church_history_journal";

const TABS = ["Timeline", "Movements", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

const VIDEOS = [
  { videoId: "NanAOEMwXg0", title: "Church History in 5 Minutes" },
  { videoId: "rEFNBVlIzGc", title: "The Early Church Fathers" },
  { videoId: "tPLQFuHdGVQ", title: "The Protestant Reformation Explained" },
  { videoId: "OqGDLwm_PG4", title: "Global Christianity: The Modern Story" },
];

export default function ChurchHistoryTimeline() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_ch_tab", "Timeline");
  const [activeEra, setActiveEra] = usePersistedState<string>("vine_ch_era", "early-church");
  const [openEvent, setOpenEvent] = useState<string | null>(null);
  const [openMovement, setOpenMovement] = useState<string | null>(null);

  const [entries, setEntries] = useState<JEntry[]>(() => {
    try {
      const saved = localStorage.getItem(JOURNAL_KEY);
      return saved ? (JSON.parse(saved) as JEntry[]) : [];
    } catch {
      return [];
    }
  });
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(JOURNAL_KEY, JSON.stringify(entries));
    } catch {
      /* noop */
    }
  }, [entries]);

  const saveEntry = useCallback(() => {
    if (!verse.trim() && !reflection.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      verse: verse.trim(),
      reflection: reflection.trim(),
      prayer: prayer.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setVerse("");
    setReflection("");
    setPrayer("");
  }, [verse, reflection, prayer]);

  const deleteEntry = useCallback((id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  }, []);

  const period = useMemo(() => PERIODS.find(p => p.id === activeEra) ?? PERIODS[0], [activeEra]);
  const totalEvents = useMemo(() => PERIODS.reduce((n, p) => n + p.events.length, 0), []);

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 20px" }}>

          {/* Breadcrumb */}
          <div style={{ marginBottom: 16 }}>
            <Link href="/church-history" style={{ color: MUTED, fontSize: 13, textDecoration: "none" }}>
              ← Church History
            </Link>
          </div>

          {/* Header */}
          <div style={{ marginBottom: 8 }}>
            <span style={{ background: PURPLE + "22", color: PURPLE, padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase" }}>
              Interactive Timeline · 2,000 Years
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.12, marginBottom: 14, background: "linear-gradient(90deg,#fff,#bfb8e6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            2,000 Years of Church History
          </h1>
          <p style={{ color: MUTED, fontSize: "1.08rem", lineHeight: 1.7, marginBottom: 24, maxWidth: 720 }}>
            From a Jerusalem upper room to a church on every continent. Walk the whole story era by era — councils and creeds, monks and missionaries, reformers and revivalists, martyrs and movements — and discover the family history of everyone who follows Jesus.
          </p>

          {/* Stats strip */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
            {[
              { n: "7", l: "Eras" },
              { n: String(totalEvents), l: "Key Events" },
              { n: "2,000", l: "Years" },
              { n: "1", l: "Lord of It All" },
            ].map(s => (
              <div key={s.l} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "12px 18px", flex: "1 1 120px", textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: GOLD }}>{s.n}</div>
                <div style={{ fontSize: 12, color: MUTED, textTransform: "uppercase", letterSpacing: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 28, borderBottom: `1px solid ${BORDER}`, paddingBottom: 14, flexWrap: "wrap" }}>
            {TABS.map(t => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                style={{
                  padding: "8px 20px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                  background: activeTab === t ? PURPLE : CARD, color: activeTab === t ? "#fff" : MUTED,
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* TIMELINE TAB */}
          {activeTab === "Timeline" && (
            <div>
              {/* Era selector — the interactive timeline */}
              <div style={{ display: "flex", gap: 0, marginBottom: 8, overflowX: "auto", paddingBottom: 8 }}>
                {PERIODS.map(p => {
                  const isActive = p.id === activeEra;
                  return (
                    <button
                      key={p.id}
                      onClick={() => { setActiveEra(p.id); setOpenEvent(null); }}
                      style={{
                        flex: "1 0 auto", minWidth: 124, background: "none", border: "none", cursor: "pointer",
                        padding: "0 4px", textAlign: "center", position: "relative",
                      }}
                    >
                      <div style={{ height: 4, background: isActive ? p.accent : BORDER, borderRadius: 2, marginBottom: 10 }} />
                      <div style={{
                        width: 14, height: 14, borderRadius: "50%", margin: "0 auto 8px",
                        background: isActive ? p.accent : CARD, border: `2px solid ${isActive ? p.accent : BORDER}`,
                        marginTop: -19,
                      }} />
                      <div style={{ fontSize: 12, fontWeight: 700, color: isActive ? TEXT : MUTED }}>{p.label}</div>
                      <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{p.era}</div>
                    </button>
                  );
                })}
              </div>

              {/* Active era card */}
              <div style={{ background: `linear-gradient(135deg, ${period.accent}18, transparent)`, border: `1px solid ${period.accent}44`, borderRadius: 16, padding: "20px 22px", marginBottom: 20, marginTop: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: period.accent, margin: 0 }}>{period.label}</h2>
                  <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>{period.era}</span>
                </div>
                <p style={{ color: TEXT, opacity: 0.85, lineHeight: 1.7, margin: 0, fontSize: 15 }}>{period.blurb}</p>
                <div style={{ borderLeft: `3px solid ${period.accent}`, paddingLeft: 14, marginTop: 16 }}>
                  <p style={{ color: TEXT, fontStyle: "italic", fontSize: 14.5, lineHeight: 1.65, margin: 0 }}>
                    &ldquo;{period.quote.text}&rdquo;
                  </p>
                  <p style={{ color: MUTED, fontSize: 12, margin: "6px 0 0", fontWeight: 600 }}>— {period.quote.source}</p>
                </div>
              </div>

              {/* Event list */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {period.events.map((ev, idx) => {
                  const key = `${period.id}-${idx}`;
                  const isOpen = openEvent === key;
                  return (
                    <div key={key} style={{ background: CARD, border: `1px solid ${isOpen ? period.accent + "66" : BORDER}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.15s" }}>
                      <button
                        onClick={() => setOpenEvent(isOpen ? null : key)}
                        style={{
                          width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer",
                          padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12,
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <span style={{ width: 26, height: 26, borderRadius: "50%", background: period.accent + "22", color: period.accent, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>
                              {idx + 1}
                            </span>
                            <span style={{ color: TEXT, fontWeight: 700, fontSize: 16 }}>{ev.title}</span>
                          </div>
                          <span style={{
                            display: "inline-block", background: period.accent + "22", color: period.accent,
                            border: `1px solid ${period.accent}55`, borderRadius: 6, padding: "2px 8px",
                            fontSize: 12, fontWeight: 700, marginLeft: 36,
                          }}>
                            {ev.date}
                          </span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 14, marginTop: 4 }}>{isOpen ? "▲" : "▼"}</span>
                      </button>
                      {isOpen && (
                        <div style={{ padding: "0 18px 18px 54px" }}>
                          <p style={{ color: TEXT, opacity: 0.9, lineHeight: 1.75, marginBottom: 14, fontSize: 14.5 }}>{ev.summary}</p>
                          <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px" }}>
                            <div style={{ color: period.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
                              Why It Matters
                            </div>
                            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{ev.significance}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Key dates quick reference */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20, marginTop: 28 }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 12, color: TEXT }}>Ten Dates Every Christian Should Know</h3>
                <div style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
                  {[
                    { d: "AD 33", e: "Pentecost — the church is born" },
                    { d: "313", e: "Edict of Milan — persecution ends" },
                    { d: "325", e: "Council of Nicaea — Christ is fully God" },
                    { d: "451", e: "Chalcedon — fully God, fully man" },
                    { d: "1054", e: "Great Schism — East and West divide" },
                    { d: "1455", e: "Gutenberg prints the Bible" },
                    { d: "1517", e: "Luther's 95 Theses — the Reformation" },
                    { d: "1738", e: "Wesley's heart 'strangely warmed'" },
                    { d: "1793", e: "Carey sails — modern missions begin" },
                    { d: "1906", e: "Azusa Street — Pentecostalism is born" },
                  ].map(item => (
                    <div key={item.d} style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                      <span style={{ color: GOLD, fontWeight: 800, fontSize: 13, minWidth: 48, flexShrink: 0 }}>{item.d}</span>
                      <span style={{ color: MUTED, fontSize: 13.5, lineHeight: 1.5 }}>{item.e}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Era navigation footer */}
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 24 }}>
                {(() => {
                  const i = PERIODS.findIndex(p => p.id === period.id);
                  const prev = i > 0 ? PERIODS[i - 1] : null;
                  const next = i < PERIODS.length - 1 ? PERIODS[i + 1] : null;
                  return (
                    <>
                      {prev ? (
                        <button onClick={() => { setActiveEra(prev.id); setOpenEvent(null); }} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px 16px", color: MUTED, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                          ← {prev.label}
                        </button>
                      ) : <span />}
                      {next ? (
                        <button onClick={() => { setActiveEra(next.id); setOpenEvent(null); }} style={{ background: CARD, border: `1px solid ${next.accent}55`, borderRadius: 10, padding: "10px 16px", color: next.accent, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                          {next.label} →
                        </button>
                      ) : <span />}
                    </>
                  );
                })()}
              </div>
            </div>
          )}

          {/* MOVEMENTS TAB */}
          {activeTab === "Movements" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: PURPLE }}>The Big Threads</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>
                Step back from the era-by-era story and certain patterns repeat across all twenty centuries — controversy clarifying truth, radical communities renewing a comfortable church, the gospel crossing culture after culture, the perennial temptation of power, and the strange fruitfulness of suffering. These are the deep currents beneath the timeline.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {MOVEMENTS.map(m => {
                  const isOpen = openMovement === m.id;
                  return (
                    <div key={m.id} style={{ background: CARD, border: `1px solid ${isOpen ? m.accent + "66" : BORDER}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.15s" }}>
                      <button
                        onClick={() => setOpenMovement(isOpen ? null : m.id)}
                        style={{
                          width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer",
                          padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: m.accent, flexShrink: 0 }} />
                          <span style={{ color: TEXT, fontWeight: 700, fontSize: 16 }}>{m.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 14 }}>{isOpen ? "▲" : "▼"}</span>
                      </button>
                      {isOpen && (
                        <div style={{ padding: "0 18px 18px 40px" }}>
                          {m.paragraphs.map((para, i) => (
                            <p key={i} style={{ color: i === m.paragraphs.length - 1 ? MUTED : TEXT, opacity: i === m.paragraphs.length - 1 ? 1 : 0.9, lineHeight: 1.78, fontSize: 14.5, marginBottom: i === m.paragraphs.length - 1 ? 0 : 14 }}>
                              {para}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ background: `${PURPLE}14`, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: 20, marginTop: 24 }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 10, color: PURPLE }}>One Story, One Lord</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  Twenty centuries of triumph and failure, councils and schisms, martyrs and missionaries — and through it all, one promise holding: &quot;I will build my church, and the gates of hell shall not prevail against it&quot; (Matthew 16:18). Church history is finally not the story of what Christians did with the church, but of what Christ has done with his.
                </p>
              </div>
            </div>
          )}

          {/* JOURNAL TAB */}
          {activeTab === "Journal" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: PURPLE }}>Your Place in the Story</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 18, fontSize: 14 }}>
                You are part of the same story as Polycarp, Augustine, Luther, and the believers of Lagos and Seoul today. As you walk the timeline, record what the cloud of witnesses is teaching you.
              </p>

              {/* Prompts */}
              <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginBottom: 24 }}>
                {JOURNAL_PROMPTS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setReflection(r => (r ? r : p + "\n\n"))}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "14px 16px", textAlign: "left", cursor: "pointer" }}
                  >
                    <span style={{ color: GOLD, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                      Prompt {i + 1}
                    </span>
                    <span style={{ color: TEXT, fontSize: 13.5, lineHeight: 1.6 }}>{p}</span>
                  </button>
                ))}
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>ERA, EVENT, OR PASSAGE</label>
                  <input
                    value={verse}
                    onChange={e => setVerse(e.target.value)}
                    placeholder="e.g., Nicaea, the martyrs, Hebrews 12:1, the Reformation..."
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, boxSizing: "border-box" }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>REFLECTION</label>
                  <textarea
                    value={reflection}
                    onChange={e => setReflection(e.target.value)}
                    placeholder="What is this chapter of the church's story showing you?"
                    rows={4}
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>PRAYER</label>
                  <textarea
                    value={prayer}
                    onChange={e => setPrayer(e.target.value)}
                    placeholder="Respond to the Lord of the church in prayer..."
                    rows={3}
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "11px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>

              {entries.length > 0 && (
                <div>
                  <h3 style={{ fontWeight: 700, color: MUTED, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1, fontSize: 12 }}>
                    Saved Entries ({entries.length})
                  </h3>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                        <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13 }}>{e.verse || "No topic"}</span>
                        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                          <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                          <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>
                            ✕
                          </button>
                        </div>
                      </div>
                      {e.reflection && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8, whiteSpace: "pre-wrap" }}>{e.reflection}</p>}
                      {e.prayer && <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", borderTop: `1px solid ${BORDER}`, paddingTop: 8, marginTop: 8 }}>Prayer: {e.prayer}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* VIDEOS TAB */}
          {activeTab === "Videos" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: PURPLE }}>Video Resources</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 24, fontSize: 14 }}>
                Survey the whole sweep of church history — from the fathers to the Reformation to the global church today.
              </p>
              <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                {VIDEOS.map(v => (
                  <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
                ))}
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20, marginTop: 24 }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>Keep Exploring</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  Go deeper with our companion guides:{" "}
                  <Link href="/church-history" style={{ color: PURPLE, textDecoration: "none", fontWeight: 600 }}>Church History</Link>,{" "}
                  <Link href="/church-fathers-guide" style={{ color: PURPLE, textDecoration: "none", fontWeight: 600 }}>The Church Fathers</Link>, and{" "}
                  <Link href="/christians-who-changed-history" style={{ color: PURPLE, textDecoration: "none", fontWeight: 600 }}>Christians Who Changed History</Link>.
                </p>
              </div>
            </div>
          )}

        </div>
        <Footer />
      </div>
    </>
  );
}
