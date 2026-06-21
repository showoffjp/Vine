"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";

const STORAGE_KEY = "vine_christianpilgrimage_entries";

interface PLGEntry {
  id: string;
  date: string;
  journeyType: string;
  whatWasLearned: string;
  howItChanged: string;
}

const theologySections = [
  {
    title: "Strangers and Aliens on the Earth &mdash; Hebrews 11:13",
    body: "The eleventh chapter of Hebrews surveys the great witnesses of faith and pauses to name what they shared: 'These all died in faith, not having received the things promised, but having seen them and greeted them from afar, and having acknowledged that they were strangers and exiles on the earth.' The Greek word is xenos — foreigner, outsider, one who does not quite belong. The pilgrim identity is not a temporary condition believers pass through on the way to settlement; it is the permanent description of the people of God in every age. We are, as Peter puts it, paroikoi — resident aliens (1 Peter 2:11), living in a place that is not finally ours, with a citizenship that lies elsewhere. This has always been a countercultural claim. Every culture offers belonging through conformity: absorb our values, adopt our habits, share our loyalties, and you can be at home here. The pilgrim refuses this bargain — not out of arrogance but out of allegiance to a different kingdom. The pilgrim's homesickness, properly understood, is not neurosis but theology: an accurate perception of the world's incompleteness and a longing for the city whose architect and builder is God.",
  },
  {
    title: "The Exodus: The Archetypal Pilgrimage",
    body: "Before there were pilgrim shrines, there was the Exodus — and Israel's forty years in the wilderness became the founding template for all subsequent reflection on sacred journey. The Exodus was not merely a geographical movement from Egypt to Canaan; it was a complete formation of a people. In the desert, Israel learned who God is: the One who goes before in a pillar of cloud and fire, who provides manna one day at a time, who gives water from rock, who dwells among his people in a tabernacle that travels with them. The wilderness was the school of dependence. No crop cycles, no granaries, no cities — only the daily mercy of God. This is why the prophets later call Israel back to the wilderness as a place of renewal (Hosea 2:14), and why Jesus himself is driven into the wilderness to recapitulate and redeem Israel's story. Every pilgrimage, literal or metaphorical, carries Exodus DNA: you leave what is familiar and sufficient, you enter a space where normal provisions fail, and you discover whether the God who provided for Israel will provide for you. The pilgrim who has genuinely walked the road knows that the journey strips away what you thought you needed and reveals what you actually have.",
  },
  {
    title: "Psalms of Ascent &mdash; Songs for the Road to Jerusalem",
    body: "Psalms 120 through 134 form a distinct collection called Shir HaMa&rsquo;alot — Songs of Ascent — almost certainly used by Jewish pilgrims walking to Jerusalem for the three great feasts: Passover, Pentecost, and Tabernacles. The journey to Jerusalem required a literal ascent, since the city sits atop a ridge; these fifteen psalms trace the pilgrim's inner journey from wherever they have been scattered back to the place where God has put his name. The collection opens in distress: 'I am for peace, but when I speak, they are for war' (Ps 120:7). It moves through countryside and city: 'I lift my eyes to the hills — where does my help come from?' (Ps 121:1). It arrives at community and temple: 'I was glad when they said to me, let us go to the house of the Lord' (Ps 122:1). It ends in blessing and doxology: 'Behold, bless the Lord, all you servants of the Lord' (Ps 134:1). The sequence shows that pilgrimage is not a single moment of arrival but a graduated journey of the heart. Eugene Peterson built his entire guide to discipleship, A Long Obedience in the Same Direction, around these fifteen psalms, arguing that the pilgrim's road — with its struggles, companionship, dangers, and arrival — maps the shape of the whole Christian life.",
  },
  {
    title: "Paroikoi: The Christian as Resident Alien",
    body: "The New Testament uses a cluster of related Greek words to describe the social position of believers in the world: paroikos (resident alien), parepidemos (temporary resident), and xenos (foreigner, stranger). These were not metaphors plucked from thin air; in the Greco-Roman world, resident aliens were a defined legal class — people who lived in a city without full citizenship rights, who owed primary loyalty elsewhere, and who were therefore always slightly suspect to the dominant culture. Peter's first letter addresses its recipients as 'elect exiles of the Dispersion' (1 Peter 1:1) and urges them to 'conduct yourselves with fear throughout the time of your exile' (1 Peter 1:17). This resident-alien status had pastoral implications: it explained why Christians did not share the wider culture's ultimate loyalties — to empire, to ethnic identity, to the pursuit of status and security. It also explained why the Christian community was itself a kind of homeland within the land of exile: a colony of the coming kingdom, a foretaste of the city toward which all pilgrims are walking. The contemporary recovery of this language — particularly through Stanley Hauerwas and William Willimon's Resident Aliens — has renewed the church's understanding that it is not at home in any culture and should not aim to be.",
  },
  {
    title: "Literal Pilgrimage: Jerusalem, Santiago, Iona, Taizé",
    body: "Christians have made physical pilgrimages since the third century, and the great pilgrimage sites encode different aspects of the tradition. Jerusalem is the primordial destination — the city where Christ died, was buried, and rose, where the Holy Spirit descended, where the church began. To walk the Via Dolorosa is to place your feet where his feet walked and to feel, bodily, the geography of salvation. The Camino de Santiago de Compostela — 800 kilometers across northern Spain to the tomb of James — has been walked since the ninth century and has experienced a massive contemporary revival: over 400,000 pilgrims complete it annually, many of them post-Christian and searching. Iona, off the western coast of Scotland, carries the heritage of Columba and Celtic Christianity; its remoteness and the thinness of the veil between visible and invisible have made it a place of profound encounter for generations. Taizé in Burgundy, founded by Brother Roger in 1940, draws 100,000 young pilgrims a year to a community of prayer, silence, and reconciliation. The dangers of pilgrimage are equally real: it can become spiritual tourism, the accumulation of religious experiences without transformation, or the delusion that a location can generate grace. The corrective is the interior journey: the outer road must correspond to an inner surrender, or the feet have merely traveled while the heart stayed home.",
  },
  {
    title: "Chaucer&rsquo;s Canterbury Tales: Pilgrimage as Cultural Mirror",
    body: "Geoffrey Chaucer began The Canterbury Tales around 1387, and the frame he chose — a company of pilgrims traveling from Southwark to the shrine of Thomas Becket at Canterbury — was not incidental. Medieval pilgrimage was the great social mixer: knight and plowman, prioress and wife of Bath, pardoner and poor parson traveled the same road and told each other stories. Chaucer's genius was to see that the road to a holy place is walked by thoroughly unholy people — vain, lustful, greedy, deceitful, and sometimes genuinely devout people — and that both the holiness of the destination and the humanity of the pilgrims are true at once. The Canterbury Tales is not a satire of pilgrimage but a realist portrait of it: the sacred journey undertaken by broken people who are, despite themselves, on their way to something real. The Parson's Tale, which closes the collection, is a genuine sermon on penitence — the inner pilgrimage that underlies all outer ones. Chaucer understood what every honest pilgrim eventually discovers: the most important part of the journey is not the arrival at the shrine but what the road has done to you by the time you get there.",
  },
  {
    title: "The Inner Pilgrimage: Spiritual Journey as Movement",
    body: "Alongside literal pilgrimage, the Christian tradition has always spoken of an inner journey — a movement of the soul from its condition of self-enclosure toward God. The great mystics mapped this journey in different ways: Bonaventure's The Soul's Journey into God traces a threefold movement through the world, into the self, and above the self toward the Trinity. John of the Cross describes a Dark Night of the Soul that is precisely a pilgrimage through spiritual desolation toward union. Walter Hilton's The Scale of Perfection describes the ascent of a ladder. Bernard of Clairvaux traces a journey through four stages of love. What these maps share is the conviction that the spiritual life is dynamic, not static: you are always either moving toward God or drifting away from him; there is no neutral position. The pilgrim image captures this better than any other: it holds together direction (there is somewhere to go), movement (you must actually travel), cost (the road is not always easy), and hope (the destination is real). Thomas à Kempis, whose Imitation of Christ has formed more Christians than almost any other devotional text, opens with this challenge: 'What doth it profit thee to enter into deep discussion concerning the Holy Trinity if thou lack humility?' The inner pilgrimage always begins with this question: where are you actually going, and are you moving?",
  },
  {
    title: "Pilgrimage and Detachment: What You Leave Behind",
    body: "Every physical pilgrim understands this practically: you cannot walk 500 miles carrying everything you own. The pack gets lighter with each day as luxuries reveal themselves. This is the spiritual logic of pilgrimage: it is an enacted poverty, a deliberate leaving-behind. Augustine identifies the pilgrim's core problem as disordered attachment — loving things in the wrong order, holding temporal goods with a grip appropriate only to eternal ones. The pilgrim who sets out with too much arrives having dropped much along the way, sometimes involuntarily. The mystical tradition speaks of detachment (apatheia in the Greek fathers, detachment or gelassenheit in the Anabaptist tradition, kenosis in the broader tradition of self-emptying) as the interior work that corresponds to the exterior act of leaving home. You cannot genuinely be a stranger in the world if you cling to the world's consolations with both hands. Richard Rohr, drawing on the Franciscan tradition, speaks of the first and second halves of life: the first half is about building a container — identity, career, family, achievement; the second half is about learning what the container is for, which often requires a journey away from the container itself. Pilgrimage accelerates this process. The question is not what you will see at the shrine but what you will have surrendered by the time you arrive.",
  },
  {
    title: "Arriving and Returning: What Pilgrimage Does to You",
    body: "The pilgrimage tradition has always known that return is as important as arrival. The medieval pilgrim who reached Canterbury did not stay there; they came home. And the question the tradition pressed was: how do you carry the road back with you? Does the encounter with the holy at the destination reshape the ordinary, or does it evaporate the moment you step back into daily life? The honest answer is that most pilgrims struggle to integrate what the road gave them. The insight that blazed in the mountain silence goes dark in the Tuesday afternoon meeting. But the tradition also testifies that some pilgrims carry something home that does not fade — a reordering of what matters, a loosened grip on what was too tightly held, a new appetite for prayer, a gentler handling of the people they had been taking for granted. What the road cannot do, the Spirit does in and through the road: the pilgrimage becomes the occasion for a grace that belongs to no place but can be found in all of them. Pilgrimage teaches, finally, that God is not only at the shrine but on every road that leads toward him — which is to say, that every road, walked rightly, is a holy way.",
  },
];

const practices = [
  {
    name: "The Camino as Practice: Walking a Sacred Route",
    body: "If circumstances allow, walk at least a portion of a recognized pilgrimage route — the Camino de Santiago, the Jerusalem pilgrimage, the Iona Way, the Canterbury Trail in England. Even a day-walk on a section of the Camino differs from a hike: the waymarked yellow arrows, the albergues, the community of pilgrims, the accumulated centuries of prayer along the path all create a different quality of attention. If travel is impossible, design a local pilgrimage: walk a route with an intentional beginning, a dedicated prayer or scripture for the journey, and a destination — a church, a hilltop, a place of natural beauty — where you pause, pray, and receive. The body in motion prays differently than the body at a desk.",
  },
  {
    name: "The Psalms of Ascent as a Seven-Day Retreat",
    body: "Take Psalms 120-134 and read two or three each morning for a week, in the order they appear. Read them as a traveler, not a student: not 'what does this mean?' but 'where am I in this journey?' Note where in the psalms your heart currently lives — are you in Psalm 120's distress, Psalm 121's countryside, Psalm 122's arrival, or Psalm 131's childlike stillness? Pray whichever psalm you are in most honestly. By the end of the week you will have walked the full liturgical road to Jerusalem and returned with something the pilgrims who sang these songs carried: a sense of the shape of the journey and your place in it.",
  },
  {
    name: "The Pilgrim Pack: A Detachment Exercise",
    body: "Imagine you are about to walk 500 miles. What would you pack? Now consider your actual life: what are you currently carrying that you could not take on such a journey — not because it is bad but because it is too heavy for the road God is calling you to walk? Write a list. This is not an exercise in self-deprivation but in seeing clearly. Augustine's diagnostic question is useful here: 'Is there anything in my life that I could not give up if God asked?' Whatever your answer reveals, bring it to prayer. The pilgrim life is the ongoing willingness to travel light, not because possessions are evil but because the road requires your hands free.",
  },
  {
    name: "The Stranger in the Land: Practicing Resident-Alien Awareness",
    body: "For one week, deliberately notice the moments when the wider culture's values press on you to conform: the assumption that ultimate security comes from financial accumulation, the expectation that your loyalty to family or nation supersedes your loyalty to the kingdom, the entertainment that treats what Scripture calls sin as pleasure and what Scripture calls holiness as naivety. Do not respond with resentment or superiority — the resident alien is not contemptuous of the land where they live. Respond instead with the pilgrim's quiet detachment: 'This is not my deepest home.' Practice saying, even inwardly, 'I am a stranger here — I belong to a different kingdom,' and notice how this reorients your daily choices.",
  },
  {
    name: "The Interior Pilgrimage: A Journal Practice",
    body: "At the beginning of a new season, write a one-page account of your spiritual journey over the past year, using the language of movement: Where have you been? What did you leave behind? What was given to you on the road? What obstacles did you encounter? Where did you lose the path? Where did you find it again? Where are you now? What does the road ahead look like? Do not aim for theological sophistication — aim for honest cartography. The practice of mapping your inner journey builds the self-awareness that pilgrimage is meant to produce, even when the outer journey is not possible.",
  },
  {
    name: "Arriving Practice: Integrating What the Journey Gave",
    body: "Within a week of returning from any significant journey — pilgrimage, retreat, conference, mission trip — write down the three things the journey gave you that you most want to carry home. Then design one concrete practice for each: a change in your daily prayer, a relationship to tend differently, a habit to begin or end. The purpose of this discipline is to resist the inevitable dissipation of insight that occurs when the ordinary reasserts itself. What the road showed you was real; the question is whether you will let it reorder what comes next. Review these practices one month later and ask honestly: which ones held?",
  },
];

const voices = [
  {
    name: "Augustine of Hippo",
    years: "354–430",
    role: "Theologian of pilgrimage and restlessness",
    body: "The opening of Augustine's Confessions — 'our heart is restless until it rests in thee' — is not merely a beautiful sentence; it is the theological foundation of an entire understanding of human existence as pilgrimage. For Augustine, the soul is created with a homing instinct that cannot be satisfied by any earthly destination; every attempt to find rest in wealth, pleasure, reputation, or human love reveals the same insufficiency. His own life was an enacted pilgrimage: from Thagaste in North Africa to Carthage, to Rome, to Milan, through Manicheism, Neoplatonism, and finally to the garden where he heard a child's voice and was converted. His masterwork, The City of God, written as Rome fell to the Visigoths, develops the contrast between two cities — the City of Man, ordered toward earthly goods, and the City of God, which even now exists as a pilgrim people on its way to the heavenly homeland. The Christian, for Augustine, is always in transit: at home in God, in exile in the world, longing for the city whose builder and maker is God.",
    quote: "Thou madest us for Thyself, and our heart is restless until it repose in Thee.",
  },
  {
    name: "Thomas à Kempis",
    years: "1380–1471",
    role: "Author of the inner pilgrimage",
    body: "Thomas à Kempis spent his entire adult life in the same Augustinian monastery near Zwolle in the Netherlands — and yet his Imitation of Christ is the definitive guide to the inner pilgrimage. His opening challenge — 'What doth it profit thee to enter into deep discussion concerning the Holy Trinity if thou lack humility?' — cuts through the self-deception of all religious tourism, whether of the intellectual or geographical variety. True pilgrimage, for Thomas, is the movement of the soul away from self-love and toward conformity with Christ, a journey that can be made entirely within the walls of a cell. He describes four books of interior progress: self-knowledge and humility, drawing inward, the inner consolations of the Spirit, and finally the Sacrament as the destination where the pilgrim meets Christ face to face. À Kempis proves that the geography of pilgrimage is ultimately interior: the road to God is shorter than a step and longer than a lifetime, and no outer journey substitutes for it.",
    quote: "What doth it profit thee to enter into deep discussion concerning the Holy Trinity if thou lack humility, and be thus displeasing to the Trinity?",
  },
  {
    name: "Eugene Peterson",
    years: "1932–2018",
    role: "Guide through the Psalms of Ascent",
    body: "Peterson's A Long Obedience in the Same Direction built an entire theology of discipleship around the fifteen Psalms of Ascent. His central argument was that the contemporary church has absorbed modernity's impatience — we want experiences, not journeys; conversions, not formation; excitement, not the long obedience of a pilgrim people walking together toward a holy city. Peterson showed that the Psalms of Ascent are not merely ancient liturgy but a living curriculum for the shape of Christian life: they begin in distress and conflict (Ps 120), move through dependence and community (Ps 121-131), arrive at doxology (Ps 134), and then the pilgrim goes home — and does it all again the next year. The journey is not a one-time event but a recurring rhythm, a spiral ascent. Peterson's great contribution was to dignify the ordinariness of the pilgrim road: the blisters, the companions who are not always easy to love, the long stretches that feel like nothing is happening — all of this is the life of faith, and it is enough.",
    quote: "A Christian is a person who decides to face and live through suffering. If we do not make that decision, we are endangered on every side.",
  },
  {
    name: "Philip Sheldrake",
    years: "b. 1950",
    role: "Scholar of sacred space and pilgrimage",
    body: "Philip Sheldrake, a Jesuit scholar, has written extensively on the theology of place, sacred space, and pilgrimage. His Spaces for the Sacred and Living Between Worlds trace the way particular places have functioned in Christian experience as sites of encounter with the holy — not because the holy is confined to them but because human beings are embodied creatures who need to locate their experience in space as well as time. Sheldrake argues that the Celtic tradition, with its concept of 'thin places' where the boundary between the visible and invisible seems permeable, captures something real about the phenomenology of sacred encounter. He is equally attentive to the dangers: the commodification of pilgrimage, the way sites like Lourdes or Santiago can become destinations for religious tourism that generates experience without transformation. His corrective is to insist that what makes a place holy is not the geography but the attentiveness the pilgrim brings — and that this attentiveness, cultivated at a famous shrine, must then be brought to the decidedly unfamous geography of ordinary life.",
    quote: "Every place is potentially a threshold if we have the eyes to see it.",
  },
  {
    name: "Martin Robinson",
    years: "Contemporary",
    role: "Writer on pilgrimage and Celtic spirituality",
    body: "Martin Robinson's Sacred Places, Pilgrim Paths explores the revival of pilgrimage in a post-Christian culture and asks why secular people are walking the Camino in record numbers. His answer is that the Camino and other routes are offering what the post-modern West craves but struggles to name: a structured encounter with silence, simplicity, embodiment, and community — the very things the consumer economy cannot deliver. Robinson argues that the church's invitation is not to recapture these routes for explicitly Christian purposes but to walk them alongside the searchers, embodying the faith that gives the hunger its name. He is also a serious student of Celtic Christianity and its practice of the peregrinatio — wandering for Christ without a fixed destination, trusting God for the road itself. This radical form of pilgrimage, practiced by Columba and countless Irish monks, was not tourism but martyrdom by migration: leaving everything known and placing oneself entirely in God's hands for the sake of the gospel.",
    quote: "To walk is to pray with your whole body.",
  },
  {
    name: "Jonathan Wilson-Hartgrove",
    years: "b. 1980",
    role: "New Monasticism and the geography of faithfulness",
    body: "Wilson-Hartgrove co-founded the Rutba House, a new monastic community in Durham, North Carolina, and has written on what it means to be a geographically faithful community — a people who stay in one place, root themselves among their neighbors, and resist the mobility that American culture treats as a virtue. His The Wisdom of Stability draws on the Benedictine vow of stabilitas to argue that staying is itself a form of pilgrimage — not the movement away from one place toward another but the movement deeper into one place and its people. The pilgrim, in his account, is not always the one on the road; sometimes the pilgrim is the one who has arrived and is learning to inhabit arrival fully. Wilson-Hartgrove challenges the romanticization of the journey and asks what it would mean to love the specific neighbors, the specific soil, the specific community you have been given — and to find in that rootedness a form of the pilgrim life no less demanding and no less holy than the road.",
    quote: "Stability is not the absence of pilgrimage but its completion.",
  },
];

const scriptures = [
  {
    ref: "Hebrews 11:13-16",
    text: "These all died in faith, not having received the things promised, but having seen them and greeted them from afar, and having acknowledged that they were strangers and exiles on the earth. For people who speak thus make it clear that they are seeking a homeland. If they had been thinking of that land from which they had gone out, they would have had opportunity to return. But as it is, they desire a better country, that is, a heavenly one. Therefore God is not ashamed to be called their God, for he has prepared for them a city.",
    note: "The pilgrim's identity is not a temporary inconvenience but a permanent vocation. To acknowledge that you are a stranger is to declare where your real citizenship lies — and to enlist in the company of every person of faith who has ever walked the earth.",
  },
  {
    ref: "Psalm 84:5-7",
    text: "Blessed are those whose strength is in you, in whose heart are the highways to Zion. As they go through the Valley of Baca they make it a place of springs; the autumn rains also cover it with pools. They go from strength to strength; each one appears before God in Zion.",
    note: "The Valley of Baca — possibly 'weeping' — becomes a place of springs for the pilgrim who carries God's strength. This is the paradox of pilgrimage: the hardest stretches of the road become, retrospectively, the places of deepest provision.",
  },
  {
    ref: "1 Peter 2:11",
    text: "Beloved, I urge you as sojourners and exiles to abstain from the passions of the flesh, which wage war against your soul.",
    note: "Peter's ethical exhortation is grounded in identity: because you are a sojourner, live like one. The pilgrim's detachment from disordered desire is not a moral achievement but a logical consequence of knowing where you actually belong.",
  },
  {
    ref: "Psalm 121:1-2",
    text: "I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth.",
    note: "Sung by pilgrims ascending toward Jerusalem, this is the pilgrim's confession at the moment when the road reveals its difficulty. The hills are real — and so is the Maker of them who goes with the traveler through every ascent.",
  },
  {
    ref: "Psalm 122:1",
    text: "I was glad when they said to me, 'Let us go to the house of the Lord!'",
    note: "The joy of arrival. After the long road, the companionship, the obstacles, and the ascent, there is the moment of coming home to the presence of God. This gladness is what the pilgrim has been walking toward — and what sustains the whole journey.",
  },
  {
    ref: "Philippians 3:20",
    text: "But our citizenship is in heaven, and from it we await a Savior, the Lord Jesus Christ.",
    note: "Paul uses the language of politeuma — commonwealth, colony. The church is a colony of heaven planted in the present age. The pilgrim is not wandering aimlessly but heading home to the city from which they have already been given citizenship.",
  },
];

const videos = [
  { videoId: "INKTRCWUxFM", title: "The Christian Life as Pilgrimage" },
  { videoId: "3-Y9oJsURhE", title: "Psalms of Ascent — Songs for the Journey" },
  { videoId: "kyCSwH9oFAw", title: "Strangers and Exiles — Hebrews 11" },
  { videoId: "pPPiFzb6YYw", title: "Walking the Camino de Santiago" },
  { videoId: "V3g_DfQWDpM", title: "Celtic Pilgrimage and Sacred Places" },
  { videoId: "gu7uIFZ0JAg", title: "Augustine: Our Hearts Are Restless" },
];

const relatedPages = [
  { href: "/christian-faithfulness", label: "Christian Faithfulness" },
  { href: "/christian-sabbatical", label: "Christian Sabbatical" },
  { href: "/spiritual-disciplines", label: "Spiritual Disciplines" },
  { href: "/christian-pilgrimage-sites", label: "Theology of Place" },
  { href: "/psalms-guide", label: "The Psalms" },
  { href: "/christian-perseverance", label: "Christian Perseverance" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianPilgrimagePage() {
  const [tab, setTab] = useState("theology");

  const [entries, setEntries] = useState<PLGEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [journeyType, setJourneyType] = useState("");
  const [whatWasLearned, setWhatWasLearned] = useState("");
  const [howItChanged, setHowItChanged] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage may be unavailable
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!journeyType.trim()) return;
    const entry: PLGEntry = {
      id: `${Date.now()}-${Math.random()}`,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      journeyType: journeyType.trim(),
      whatWasLearned: whatWasLearned.trim(),
      howItChanged: howItChanged.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setJourneyType("");
    setWhatWasLearned("");
    setHowItChanged("");
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    padding: "0.75rem 0.9rem",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.88rem",
    marginBottom: "0.4rem",
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: "0.8rem",
    margin: "0.3rem 0 0",
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: TEAL + "22",
            color: TEAL,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Sacred Journey
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Sojourners and Strangers: Christian Pilgrimage
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          From the Exodus to the Psalms of Ascent, from Jerusalem to Santiago de Compostela, Christian pilgrimage is the
          practice of making the body&rsquo;s journey correspond to the soul&rsquo;s. We are, as Peter says,
          &ldquo;sojourners and exiles&rdquo; &mdash; paroikoi, resident aliens &mdash; people whose deepest citizenship
          lies elsewhere and who are always, in some sense, on the road.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the theology of the pilgrim identity, the great roads and sites of Christian pilgrimage,
          the inner journey that every outer journey is meant to enact, and the practices that keep a wandering people
          walking in the right direction.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t.id ? TEAL : BORDER,
                background: tab === t.id ? TEAL + "22" : "transparent",
                color: tab === t.id ? TEAL : MUTED,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              A Theology of Pilgrimage
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture&rsquo;s understanding of the pilgrim life &mdash; from the Exodus and the
              Psalms of Ascent to the inner journey of the soul and the question of what pilgrimage does to you on the
              way back.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: TEAL + "11", border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology converges on the same insight: pilgrimage is not something Christians do
                occasionally; it is what Christians are. The whole life of faith is a journey from exile toward home,
                from the self turned in on itself toward the God in whom the heart can finally rest. The outer pilgrimage
                &mdash; the dusty road, the aching feet, the strange companions &mdash; is a sacrament of the inner one.
                And the inner one is not complete until we arrive at the city &ldquo;whose architect and builder is God.&rdquo;
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Practices of the Pilgrim Life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six practices that make the pilgrim identity concrete &mdash; in body, in prayer, in daily detachment, and
              in the ongoing work of integration.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: TEAL + "22",
                  color: TEAL,
                  fontWeight: 800,
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.9rem",
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0.25rem 0 0.5rem" }}>{p.name}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Voices on the Pilgrim Road
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six voices &mdash; ancient and contemporary, theologians and practitioners &mdash; whose work illuminates
              the meaning of the pilgrim life from different angles and traditions.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${TEAL}`,
                  background: TEAL + "0E",
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Scripture on Pilgrimage
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts for the pilgrim&rsquo;s way &mdash; from the Psalms of Ascent to Paul&rsquo;s declaration
              of heavenly citizenship. Each is paired with a reflection for the road.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${TEAL}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: TEAL + "11", border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>Pilgrim&rsquo;s practice:</strong> take one of these passages on your
                next walk &mdash; even a ten-minute walk around your neighborhood. Read it once before you set out, hold
                it in mind as you walk, and see what the movement of your body does to the meaning of the words.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Pilgrimage Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Log a pilgrimage journey &mdash; literal or metaphorical &mdash; what you learned on the road, and how it
              changed you. Entries are saved privately in your browser. The honest pilgrim keeps a record; what the road
              gives is too easily lost to undocumented memory.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="plg-journey-type" style={labelStyle}>The journey I&rsquo;m recording</label>
                <textarea
                  id="plg-journey-type"
                  value={journeyType}
                  onChange={e => setJourneyType(e.target.value)}
                  rows={2}
                  placeholder="e.g. Walking the Camino Portugu&eacute;s; a six-month season of illness that felt like a wilderness; a pilgrimage to Iona; a retreat that became a turning point..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Name the journey: outer or inner, recent or years ago. Be specific about what it was.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="plg-learned" style={labelStyle}>What was learned on the road</label>
                <textarea
                  id="plg-learned"
                  value={whatWasLearned}
                  onChange={e => setWhatWasLearned(e.target.value)}
                  rows={3}
                  placeholder="e.g. That I was carrying more than I knew; that God provides one day at a time; that strangers become companions; that silence is a language..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>What did the journey teach you that staying home could not have?</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="plg-changed" style={labelStyle}>How it changed you</label>
                <textarea
                  id="plg-changed"
                  value={howItChanged}
                  onChange={e => setHowItChanged(e.target.value)}
                  rows={3}
                  placeholder="e.g. I grip my routines more loosely now; I pray differently; I am less afraid of not knowing where the road leads; I left something behind I had been carrying for years..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Pilgrimage changes the pilgrim. Describe the change, even if you are still inside it.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!journeyType.trim()}
                style={{
                  background: journeyType.trim() ? TEAL : BORDER,
                  color: journeyType.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: journeyType.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Pilgrimage Record{loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}> ({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No journeys recorded yet. Name one pilgrimage &mdash; a road walked, a season survived, a journey
                    that changed you &mdash; and begin your record above.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        aria-label="Delete entry"
                        style={{
                          position: "absolute",
                          top: "0.9rem",
                          right: "0.9rem",
                          background: "transparent",
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          color: MUTED,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "0.25rem 0.65rem",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                      {entry.date && (
                        <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{entry.date}</div>
                      )}
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          The Journey
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.journeyType}</p>
                      </div>
                      {entry.whatWasLearned && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What Was Learned
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.whatWasLearned}</p>
                        </div>
                      )}
                      {entry.howItChanged && (
                        <div>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            How It Changed Me
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.howItChanged}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on the theology of pilgrimage, the Psalms of Ascent, sacred places, and the great pilgrimage
              routes of the Christian tradition.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Related pages */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
            Continue Exploring
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {relatedPages.map(r => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                  color: MUTED,
                  padding: "0.45rem 1rem",
                  borderRadius: 20,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {r.label}
              </Link>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: 660 }}>
            &ldquo;Our heart is restless until it rests in Thee.&rdquo; Every road walked in faith is a road toward
            that rest. The destination is certain; the road is long; the Company is good. Keep walking.
          </p>
        </div>
      </main>
    </div>
  );
}
