"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "revivals" | "conditions" | "figures" | "today" | "journal" | "videos";

const REVIVALS = [
  {
    name: "The First Great Awakening",
    years: "1730s–1740s",
    location: "New England & British Colonies",
    color: PURPLE,
    era: "Colonial",
    leaders: ["Jonathan Edwards", "George Whitefield", "Gilbert Tennent"],
    estimate: "50,000+ conversions in New England alone",
    summary: "The colonies were spiritually cold, formal Calvinism had become dead orthodoxy, and church attendance was declining. God used Jonathan Edwards's precise theological preaching and George Whitefield's dramatic open-air evangelism to ignite what historians consider the first mass religious movement in American history. Whitefield preached to crowds of 30,000 in open fields. Edwards's 'Sinners in the Hands of an Angry God' caused people to cry out and clutch the church pews. The Awakening produced lasting institutional results: Princeton, Dartmouth, and Brown universities; the Methodist movement in America; and a unified colonial identity that made the American Revolution possible.",
    conditions: "Theological decay, formalism in worship, lack of personal conversion emphasis, cultural complacency",
    what_god_did: "Restored experiential conversion; created hunger for Scripture; broke class barriers — enslaved and free worshiped together; unified disconnected colonies spiritually",
    legacy: "Princeton University (1746); the abolitionist movement traced directly to the Awakening's emphasis on soul equality; Methodism in America",
    learn: "The works of Jonathan Edwards (Yale Online Edition); 'George Whitefield' by Arnold Dallimore; 'The Great Awakening' by Thomas Kidd"
  },
  {
    name: "The Second Great Awakening",
    years: "1790s–1840s",
    location: "Kentucky frontier to New York",
    color: GREEN,
    era: "Frontier",
    leaders: ["Charles Finney", "Peter Cartwright", "Barton Stone", "Lyman Beecher"],
    estimate: "1 million+ conversions; new denominations formed",
    summary: "As America expanded westward, frontier communities were rough, lawless, and unchurched. Camp meetings — outdoor gatherings lasting days — became the primary vehicle for revival on the frontier. The Cane Ridge Revival of 1801 drew 10,000-20,000 people (in an era when a major city had 5,000). Physical manifestations were widespread and controversial: falling, shaking, laughing, crying. Charles Finney introduced 'new measures' — the anxious bench, sustained meetings — and brought revival to cities like Rochester, New York. The Second Great Awakening produced the abolition movement, the women's suffrage movement, and a surge in missionary societies.",
    conditions: "Frontier lawlessness, lack of churches, post-Enlightenment skepticism in educated classes, social chaos in rapidly changing society",
    what_god_did: "Mass conversions across class lines; produced social reform movements; birthed Methodism as America's largest denomination; created the Sunday School movement",
    legacy: "YMCA; American Bible Society; American Tract Society; Women's Christian Temperance Union; abolition movement leadership from Finney-trained men",
    learn: "'Autobiography of Charles Finney' (available free at ccel.org); 'A History of Christianity in the United States and Canada' by Mark Noll; 'Cane Ridge: America's Pentecost' by Paul Conkin"
  },
  {
    name: "The Prayer Revival of 1857–1858",
    years: "1857–1858",
    location: "New York City, spreading across North America",
    color: "#3B82F6",
    era: "Pre-Civil War",
    leaders: ["Jeremiah Lanphier", "Lay prayer movement"],
    estimate: "1 million conversions in one year across North America",
    summary: "A former businessman named Jeremiah Lanphier started a midday prayer meeting for businessmen in lower Manhattan on September 23, 1857. Six people came the first week. The following week, twenty came. Within months, the movement spread to every major American city. Unlike previous revivals, this one was led by laypeople, not preachers. It was quiet, prayerful, and non-spectacular — but its results were staggering. By spring 1858, an estimated 10,000 people per day were being converted. Newspapers covered it as news. Churches of all denominations reported packed services. One million Americans came to Christ in twelve months.",
    conditions: "Financial panic of 1857; growing sense of national crisis before the Civil War; collapse of stock market creating humility in business class",
    what_god_did: "United divided denominations in prayer; created a template for citywide prayer that influenced Moody, Billy Graham, and every subsequent revival movement",
    legacy: "Dwight L. Moody converted during this revival; set the pattern for urban evangelism; demonstrated that revival can come through ordinary Christians, not just star preachers",
    learn: "'The Power of Prayer' by Samuel Prime (1858, free at archive.org); 'The Businessmens Revival' — multiple historical accounts; 'Fires of Revival' documentary"
  },
  {
    name: "Welsh Revival",
    years: "1904–1905",
    location: "Wales, United Kingdom",
    color: "#EF4444",
    era: "Twentieth Century",
    leaders: ["Evan Roberts", "Seth Joshua", "Joseph Jenkins"],
    estimate: "100,000 conversions in Wales in 6 months",
    summary: "Twenty-six-year-old Evan Roberts, a former coal miner, became the primary instrument of the Welsh Revival after a series of extraordinary prayer meetings in his home area. Roberts was known for weeping, waiting silently before God, and giving the congregation four conditions for revival: confess all known sin; remove anything doubtful from life; be totally obedient to the Holy Spirit; confess Christ publicly. Within months, the revival had swept through all of Wales. Crime rates dropped so sharply that police in some towns had no arrests. Taverns closed for lack of customers. Judges received white gloves — the traditional symbol of no cases to try. The Pentecostal movement traces its roots directly to the Welsh Revival.",
    conditions: "National spiritual decline; working-class communities without gospel hope; preceding prayer movements in multiple Welsh counties",
    what_god_did: "Social transformation visible to secular press; horses used in coal mines stopped responding because miners stopped cursing; families reunited; debts repaid",
    legacy: "Directly triggered the Azusa Street Revival (Evan Roberts's reports reached Los Angeles); gave birth to Pentecostalism; produced the Keswick movement",
    learn: "'Rent Heavens' by R.B. Jones; 'The Welsh Revival of 1904' by J. Edwin Orr; 'Flame of God' by Eifion Evans"
  },
  {
    name: "Azusa Street Revival",
    years: "1906–1915",
    location: "Los Angeles, California",
    color: "#F59E0B",
    era: "Pentecostal Origins",
    leaders: ["William J. Seymour", "Charles Fox Parham"],
    estimate: "Origins of the global Pentecostal movement (600 million+ today)",
    summary: "On April 9, 1906, a Black preacher named William J. Seymour — who had been locked out of a Holiness church for preaching on tongues — led a prayer meeting in a private home at 214 Bonnie Brae Street in Los Angeles. A week later they moved to an abandoned Methodist church at 312 Azusa Street. What followed was nearly ten years of continuous revival meetings, with services running three times daily, seven days a week. People came from across America and the world. The racial barrier was extraordinary: in 1906 Jim Crow America, Black and white worshipers knelt together. The revival was reported as news in the Los Angeles Times (initially mocking), then across the world.",
    conditions: "Post-Welsh Revival expectation; Holiness movement hunger for deeper experience; Seymour's sustained prayer in response to rejection",
    what_god_did: "Broke racial barriers in Jim Crow America; sent missionaries across the world who carried Pentecostalism globally; created the template for charismatic worship",
    legacy: "Assemblies of God (1914); Church of God in Christ; global Pentecostalism now 600 million+ members — the fastest-growing Christian movement in history",
    learn: "'Azusa Street' by Frank Bartleman (eyewitness account, free at archive.org); 'The Century of the Holy Spirit' by Vinson Synan; 'Like a Mighty Wind' by Mel Tari"
  },
  {
    name: "East African Revival (Balokole)",
    years: "1930s–present",
    location: "Rwanda, Uganda, Kenya, Tanzania",
    color: "#10B981",
    era: "Twentieth Century",
    leaders: ["Joe Church", "Simeon Nsibambi", "Festo Kivengere"],
    estimate: "Transformed East African Christianity; sustained for 90+ years",
    summary: "The Balokole ('saved ones') movement began in Rwanda in the 1930s when British missionary Joe Church and Ugandan medical worker Simeon Nsibambi began meeting for prayer and mutual confession. What spread was not spectacular manifestations but a culture of radical honesty, confession of specific sin, and what they called 'walking in the light.' The movement survived the Rwanda genocide — and the testimony of those who chose death over complicity in the killing remains one of the most powerful revival testimonies of the twentieth century. Bishop Festo Kivengere wrote 'I Love Idi Amin' after fleeing Uganda under threat of death.",
    conditions: "Post-colonial church with formal Christianity but little personal transformation; missionaries and African believers who dared to become equals in Christ",
    what_god_did: "Created a culture of confession and accountability; revival cells still meeting; shaped the East African church's resilience through genocide and persecution",
    legacy: "Festo Kivengere's global ministry; the model of 'fellowship in the light' influencing small group movements; African Christianity's extraordinary growth",
    learn: "'Festo Kivengere' by Anne Coomes; 'The Flame of the East African Revival' by Kenneth Richardson; 'I Love Idi Amin' by Festo Kivengere"
  },
  {
    name: "The Jesus Movement",
    years: "1967–1974",
    location: "California, spreading across America",
    color: "#EC4899",
    era: "Twentieth Century",
    leaders: ["Chuck Smith (Calvary Chapel)", "Lonnie Frisbee", "Arthur Blessitt"],
    estimate: "Hundreds of thousands of young people converted; Christianity Today called it 'the Jesus Revolution'",
    summary: "As the Summer of Love and the counterculture swept through American youth, some of the hippies began encountering the Holy Spirit instead of just drugs. Chuck Smith opened Calvary Chapel in Costa Mesa, California, to barefoot hippies who were coming to Christ in beach baptisms. Lonnie Frisbee — a young hippie evangelist — was a primary human instrument. TIME Magazine ran a cover story 'The Jesus Revolution' in June 1971. The movement produced contemporary Christian music (Keith Green, Love Song, Second Chapter of Acts), the Vineyard movement, and a generation of pastors who shaped evangelical Christianity for the next 50 years.",
    conditions: "Cultural upheaval of the 1960s; disillusionment with drugs and free love; hunger for authentic community and transcendence",
    what_god_did: "Transformed counterculture into missional community; created contemporary worship; broke the formalism that had kept many young people out of church",
    legacy: "Contemporary Christian music industry; Calvary Chapel movement (1,500+ churches); the Vineyard movement; the style of church that became the evangelical mainstream",
    learn: "'Jesus Revolution' by Greg Laurie (film adaptation 2023); 'Lonnie Frisbee: Not by Might, Nor by Power' documentary; 'The Jesus People Movement' by David Di Sabatino"
  },
  {
    name: "Asbury Revival",
    years: "2023",
    location: "Wilmore, Kentucky — Asbury University",
    color: "#6366F1",
    era: "Contemporary",
    leaders: ["Student-led — no human leader claimed"],
    estimate: "50,000+ visitors in two weeks; global media coverage",
    summary: "On February 8, 2023, a chapel service at Asbury University in Wilmore, Kentucky did not end. Students stayed. Then more students came. Then visitors from across America and the world. For two weeks, continuous worship and prayer filled Hughes Auditorium. The revival was notable for what it was not: there were no manifestations, no famous speakers, no promotional campaigns. It was quiet, sustained worship and spontaneous confession. Major news outlets covered it. Thousands drove or flew to witness it. Whether it constitutes a full revival in the historical sense remains debated — but it ignited widespread prayer and expectation across the American church.",
    conditions: "Post-COVID cultural and spiritual exhaustion; Gen-Z church decline; preceding prayer emphasis on Asbury's campus for months",
    what_god_did: "Sparked similar chapels at multiple universities; created national conversation about genuine revival; gave young Christians a living reference point for the supernatural work of God",
    legacy: "Too recent to fully assess — spawned regional gatherings; produced significant media coverage that brought revival into mainstream conversation",
    learn: "'One More Great Awakening' by Michael Brown; Asbury University's official accounts; The Gospel Coalition's extensive coverage at tgc.org"
  },
];

const CONDITIONS = [
  { condition: "Desperate Prayer", color: GREEN, desc: "Every documented revival in history has been preceded by sustained, desperate, believing prayer — often in small groups, often over years. The Welsh Revival was preceded by years of quiet intercessory meetings. The Prayer Revival of 1857 began with six men meeting at noon. Prayer is not the precondition of revival because God is capricious; it is the precondition because prayer repositions the praying church in humility and dependence.", examples: ["Jeremiah Lanphier's Noon Prayer Meeting (1857)", "Evan Roberts's prayer groups in Wales (1904)", "Morning prayer watches at Azusa Street (1906)", "Monthly prayer meetings at Herrnhut for 100 years (1727–1827)"] },
  { condition: "Genuine Repentance", color: PURPLE, desc: "Revival does not begin with converting sinners — it begins with the confession of sin among believers. The East African Revival was characterized by specific, public, named confession. The First Great Awakening produced intense conviction of sin before it produced the joy of conversion. Jonathan Edwards wrote extensively about distinguishing genuine conviction from mere emotion.", examples: ["The East African Balokole's culture of walking in the light", "Welsh Revival's four conditions (remove all doubtful things)", "Finney's 'anxious bench' — extended time for conviction", "Early Methodist class meetings — required weekly confession of sin"] },
  { condition: "Biblical Preaching", color: "#3B82F6", desc: "Most major revivals have featured preaching of remarkable clarity and faithfulness to the text of Scripture. George Whitefield memorized his sermons and preached with a theatrical intensity that even skeptics like Benjamin Franklin acknowledged. Jonathan Edwards's 'Sinners in the Hands of an Angry God' was not an emotional manipulation — it was a careful exposition of Deuteronomy 32:35 applied with pastoral urgency. Great revival preaching is typically not innovative in its theology but fresh in its application.", examples: ["Edwards's methodical exposition causing physical responses", "Whitefield preaching the same sermon 40 times until it was perfect", "Moody's simple, direct gospel presentations with no theological novelty", "Spurgeon preaching to 10,000 per week at the Metropolitan Tabernacle"] },
  { condition: "Unity Among Believers", color: "#EF4444", desc: "The Prayer Revival of 1857–58 broke through denominational walls that had divided American Christianity for a century. The Azusa Street Revival brought Black and white together in Jim Crow America. The East African Revival made class and tribal distinctions irrelevant. Revival does not produce unity by ignoring difference but by making Christ so central that difference loses its ultimacy. Psalm 133's imagery — oil running down from the head — describes anointing flowing through unity.", examples: ["Azusa Street: 'The color line was washed away by the blood' — Frank Bartleman", "1857 Prayer Revival: Methodists, Baptists, and Presbyterians in same prayer meetings", "East African Revival crossing tribal and colonial lines", "Jesus Movement: hippies and Baptists worshiping side by side"] },
  { condition: "Cultural Crisis and Humility", color: "#F59E0B", desc: "The financial panic of 1857 drove businessmen to their knees. The chaos of 1960s counterculture produced spiritual hunger. The post-COVID exhaustion of 2023 preceded Asbury. God consistently uses cultural upheaval to strip away the self-sufficiency that makes prayer unnecessary. This is not because God sends calamity (though sometimes He does) but because crisis reveals what we were always trusting instead of Him.", examples: ["Financial Panic of 1857 → Prayer Revival", "Post-WWI disillusionment → European revivals of the 1920s", "1960s counterculture collapse → Jesus Movement", "2023 post-COVID Gen-Z burnout → Asbury Revival"] },
  { condition: "Ordinary Instruments", color: "#10B981", desc: "Jeremiah Lanphier was an ordinary businessman. Evan Roberts was a coal miner turned Bible student. William Seymour was a poor Black preacher who had been locked out of churches. The Jesus Movement's Lonnie Frisbee was a barefoot hippie. God's pattern is to use the unexpected to confound the expected — because when revival comes through ordinary people, no human gets the glory. The history of revival is a sustained argument against professionalism in ministry.", examples: ["Jeremiah Lanphier — businessman, not a pastor", "Evan Roberts — never formally trained, age 26", "William Seymour — turned away from a church, started in a private home", "Student-led chapel service at Asbury — no famous speaker invited"] },
];

const FIGURES = [
  { name: "Jonathan Edwards", years: "1703–1758", role: "Theologian, First Great Awakening", color: PURPLE, desc: "America's greatest theologian and primary defender of the First Great Awakening. His 'Religious Affections' (1746) remains the most careful analysis ever written of how to distinguish genuine revival from enthusiasm. He simultaneously defended revival's reality and critiqued its excesses. His pastoral career in Northampton saw multiple seasons of revival before he was voted out of his own church over communion standards.", key_work: "Religious Affections (1746); A Faithful Narrative of the Surprising Work of God (1737)", read_free: "edwards.yale.edu — complete works online free" },
  { name: "George Whitefield", years: "1714–1770", role: "Evangelist, First Great Awakening", color: GREEN, desc: "The most famous preacher of the eighteenth century and the primary evangelist of the First Great Awakening in both Britain and America. Whitefield made 13 Atlantic crossings and preached over 18,000 sermons. Benjamin Franklin calculated that Whitefield's voice could be heard by 30,000 people simultaneously. He was a Calvinist who partnered with John Wesley despite theological differences — because souls mattered more than systems.", key_work: "Journals (1738–1741); Sermons (collected); 'George Whitefield' by Arnold Dallimore", read_free: "ccel.org — selected sermons and journals" },
  { name: "Charles Finney", years: "1792–1875", role: "Evangelist, Second Great Awakening", color: "#EF4444", desc: "The most influential evangelist of the nineteenth century and the most controversial figure in American revival history. Finney's 'new measures' (sustained meetings, naming sinners publicly, the anxious bench) were attacked by his Calvinist contemporaries as manipulative. His Arminian theology was considered heterodox. But his results were undeniable: Rochester, New York saw crime drop 50% after an 1830 Finney revival. He later became president of Oberlin College and a leading abolitionist.", key_work: "Lectures on Revival of Religion (1835); Systematic Theology (1846); Autobiography", read_free: "ccel.org — Lectures on Revivals of Religion free" },
  { name: "D.L. Moody", years: "1837–1899", role: "Evangelist, 19th century urban ministry", color: "#3B82F6", desc: "Converted during the Prayer Revival of 1857–58, Moody became the most influential American evangelist of the nineteenth century. He had no formal theological training and was known for his direct, simple gospel presentations and his partnership with singer Ira Sankey — pioneering the use of music as an integral part of evangelistic meetings. He founded the Moody Bible Institute (1886) and the Northfield schools. His motto: 'The world has yet to see what God can do with a man fully consecrated to him.'", key_work: "'The Way to God' (1884); 'Sovereign Grace' sermons; multiple collected works", read_free: "moodymedia.org; ccel.org" },
  { name: "Evan Roberts", years: "1878–1951", role: "Primary instrument of the Welsh Revival", color: "#F59E0B", desc: "A former coal miner who had prayed for revival for 11 years before leading the 1904 Welsh Revival. Roberts was known for weeping, extended silence, waiting on the Spirit, and his four conditions for revival. He broke completely after the revival, spending decades in seclusion in prayer — which he considered his most important ministry. The Welsh Revival he led gave birth to Pentecostalism globally and remains the most thoroughly documented revival in history.", key_work: "'When He Is Come' (1936); eyewitness accounts in 'Rent Heavens' by R.B. Jones", read_free: "Multiple archive.org sources" },
  { name: "William J. Seymour", years: "1870–1922", role: "Leader of the Azusa Street Revival", color: "#10B981", desc: "The son of formerly enslaved parents, Seymour studied under Charles Parham but was required to sit outside the classroom door because of his race. He nevertheless absorbed Parham's teaching on tongues and, after being locked out of a Los Angeles Holiness church, led what became the Azusa Street Revival. Frank Bartleman, an eyewitness, wrote: 'Brother Seymour generally sat behind two empty shoe boxes, one on top of the other. He usually kept his head inside the top one during the meeting, in prayer.' The posture captures the man.", key_work: "The Apostolic Faith newsletter (1906–1908 — historical archive); 'William Seymour and the Origins of Global Pentecostalism' by Gastón Espinosa", read_free: "Apostolic Faith newspaper archives online" },
  { name: "A.W. Tozer", years: "1897–1963", role: "Prophet of genuine revival, twentieth century", color: "#EC4899", desc: "Though not a revival leader in the camp-meeting sense, Tozer was the twentieth century's most urgent voice for genuine spiritual awakening over religious activity. 'The Pursuit of God' (1948) and 'The Knowledge of the Holy' (1961) have shaped more Christians toward genuine hunger for God than most revival campaigns. He was deeply skeptical of revivalism as a technique while passionately advocating for the real thing. He served as pastor of a Chicago church for 31 years.", key_work: "The Pursuit of God (1948); The Knowledge of the Holy (1961); Man: The Dwelling Place of God", read_free: "ccel.org — The Pursuit of God free" },
  { name: "Festo Kivengere", years: "1919–1988", role: "East African Revival, Bishop of Uganda", color: "#6366F1", desc: "Converted through the East African Revival, Kivengere became one of the most powerful evangelists of the twentieth century and an extraordinary example of gospel-rooted courage. He fled Uganda under threat of death from Idi Amin's regime, then wrote 'I Love Idi Amin' — a testimony of forgiveness that shook the global church. His preaching combined the personal testimony of revival conversion with careful biblical exposition. Billy Graham called him 'the Billy Graham of Africa.'", key_work: "I Love Idi Amin (1977); Revolutionary Love; African Explosion", read_free: "Gospel-Centered Discipleship resources; summary articles" },
];

const TODAY_DATA = [
  { org: "24-7 Prayer", url: "24-7prayer.com", what: "Global prayer network founded by Pete Greig in 1999 from a non-stop prayer meeting in Chichester, England that has never stopped. 24-7 Prayer rooms have now been hosted in 127 nations. Their Boiler Rooms model has become one of the most significant prayer-and-mission frameworks in the contemporary church.", seeking: "Signs of awakening prayer" },
  { org: "IHOP-KC (International House of Prayer)", url: "ihopkc.org", what: "Founded by Mike Bickle in Kansas City in 1999. Has maintained 24/7 worship and intercession continuously for 25+ years. Annual OneThing conference draws 25,000+ young adults for extended prayer and worship. One of the most significant sustained intercessory prayer communities in history.", seeking: "Signs of awakening prayer" },
  { org: "Concerts of Prayer International", url: "concertsofprayer.org", what: "Founded by David Bryant — mobilizes citywide prayer gatherings. Has led hundreds of citywide Concerts of Prayer across America. Part of the National Prayer Committee. Bridges denominational divides through unified prayer.", seeking: "Citywide unity" },
  { org: "Luis Palau Association", url: "palau.org", what: "Luis Palau preached to 1 billion+ people and held massive outdoor festivals in major American cities. The CityFest model — free outdoor festival with unified churches — represents contemporary urban evangelism at scale. Palau died in 2021; his son Andrew continues the work.", seeking: "Mass evangelism" },
  { org: "Revive Our Hearts (Nancy DeMoss Wolgemuth)", url: "reviveourhearts.com", what: "One of the most significant voices for personal and corporate revival among women. DeMoss Wolgemuth's books 'Lies Women Believe' and 'Brokenness' have served millions. The True Woman movement calls women to revival beginning with personal holiness.", seeking: "Women and revival" },
  { org: "The Gospel Coalition", url: "thegospelcoalition.org", what: "Founded by D.A. Carson and Tim Keller — a coalition of gospel-centered churches committed to renewal through faithful preaching, sound theology, and church planting. The TGC network represents one of the most significant theologically grounded renewal movements of the 21st century.", seeking: "Gospel renewal" },
];

const REVIVAL_VIDEOS = [
  { videoId: "rtkS_8VWfB0", title: "The First Great Awakening", channel: "Ligonier Ministries", description: "R.C. Sproul on Jonathan Edwards and the Great Awakening — what made it genuine, what accompanied it, and what we can learn." },
  { videoId: "4Eg_di-O8nM", title: "What Is Revival?", channel: "The Gospel Coalition", description: "A biblical and historical definition of revival — how the Holy Spirit renews the church and spreads through communities." },
  { videoId: "ej_6dVdJSIU", title: "The Welsh Revival of 1904", channel: "Desiring God", description: "The story of the Welsh Revival under Evan Roberts — one of the most dramatic outpourings of the Spirit in modern history." },
  { videoId: "gV9JugO_5Mk", title: "Can We Pray for Revival?", channel: "Crossway", description: "Historical and theological reflections on revival — what it is, how God brings it about, and how prayer relates to awakening." },
];

export default function GreatRevivalsPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_great-revivals_tab", "revivals");
  const [selected, setSelected] = useState(REVIVALS[0].name);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [eraFilter, setEraFilter] = usePersistedState<string>("vine_great-revivals_era_filter", "All");

  const eras = ["All", "Colonial", "Frontier", "Pre-Civil War", "Twentieth Century", "Pentecostal Origins", "Contemporary"];
  const filtered = eraFilter === "All" ? REVIVALS : REVIVALS.filter(r => r.era === eraFilter);
  const sel = REVIVALS.find(r => r.name === selected) || REVIVALS[0];

  const [revEntries, setRevEntries] = useState<{ id: string; date: string; revival: string; condition: string; prayer: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_rev_entries") ?? "[]"); } catch { return []; }
  });
  const [revForm, setRevForm] = useState({ revival: "", condition: "", prayer: "" });
  const [revSaved, setRevSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_rev_entries", JSON.stringify(revEntries)); } catch {} }, [revEntries]);
  const saveRevEntry = () => {
    if (!revForm.revival.trim()) return;
    setRevEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...revForm }, ...prev]);
    setRevForm({ revival: "", condition: "", prayer: "" });
    setRevSaved(true); setTimeout(() => setRevSaved(false), 2000);
  };
  const deleteRevEntry = (id: string) => setRevEntries(prev => prev.filter(e => e.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>🔥</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Great Revivals in Church History</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            Eight major outpourings of the Holy Spirit from 1730 to 2023 — what preceded them, what God did, and what they produced. Revival is not manufactured. It is received.
          </p>
        </div>

        <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "12px 18px", marginBottom: 28 }}>
          <span style={{ color: GREEN, fontWeight: 800, fontSize: 13 }}>Historical Note: </span>
          <span style={{ color: TEXT, fontSize: 13 }}>The word revival in the Bible refers to the restoration of life to that which is already alive — Psalm 85:6: "Will you not revive us again, that your people may rejoice in you?" Revival is a work of God among his people, not a scheduled meeting or promotional campaign. It is always preceded by prayer and always evidenced by deep conviction of sin and genuine conversion.</span>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["revivals", "conditions", "figures", "today", "journal", "videos"] as Tab[]).map(t => (
            <button type="button" key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "revivals" ? "Historical Revivals" : t === "conditions" ? "Conditions for Revival" : t === "figures" ? "Key Figures" : t === "today" ? "Seeking Revival Today" : t === "journal" ? "📓 Journal" : "Videos"}
            </button>
          ))}
        </div>

        {tab === "revivals" && (
          <div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {eras.map(e => (
                <button type="button" key={e} onClick={() => setEraFilter(e)}
                  style={{ padding: "5px 12px", borderRadius: 6, border: `1px solid ${eraFilter === e ? GREEN : BORDER}`, background: eraFilter === e ? `${GREEN}20` : "transparent", color: eraFilter === e ? GREEN : MUTED, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                  {e}
                </button>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((r) => (
                  <div role="button" tabIndex={0} key={r.name} onClick={() => setSelected(r.name)}
                    style={{ background: CARD, border: `1px solid ${selected === r.name ? r.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <div>
                        <div style={{ color: r.color, fontWeight: 800, fontSize: 15 }}>{r.name}</div>
                        <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{r.years} · {r.location}</div>
                      </div>
                      <div style={{ background: `${r.color}20`, color: r.color, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{r.era}</div>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12 }}>Leaders: {r.leaders.join(", ")}</div>
                  </div>
                ))}
              </div>
              <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${sel.color}40`, borderRadius: 14, padding: 20 }}>
                <div style={{ color: sel.color, fontWeight: 900, fontSize: 16, marginBottom: 4 }}>{sel.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 12 }}>{sel.years} · {sel.location}</div>
                <div style={{ background: `${sel.color}10`, borderRadius: 8, padding: "8px 12px", marginBottom: 14 }}>
                  <div style={{ color: sel.color, fontSize: 10, fontWeight: 800, marginBottom: 2 }}>ESTIMATED IMPACT</div>
                  <div style={{ color: TEXT, fontSize: 12 }}>{sel.estimate}</div>
                </div>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>SUMMARY</div>
                <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, marginBottom: 14 }}>{sel.summary}</p>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>CONDITIONS</div>
                <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.65, marginBottom: 12 }}>{sel.conditions}</p>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>WHAT GOD DID</div>
                <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.65, marginBottom: 12 }}>{sel.what_god_did}</p>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>LASTING LEGACY</div>
                <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.65, marginBottom: 12 }}>{sel.legacy}</p>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>TO LEARN MORE</div>
                <p style={{ color: MUTED, fontSize: 11, lineHeight: 1.6 }}>{sel.learn}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "conditions" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {CONDITIONS.map((c, i) => (
              <div role="button" tabIndex={0} key={i} style={{ background: CARD, border: `1px solid ${expanded[c.condition] ? c.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button type="button" onClick={() => setExpanded(e => ({ ...e, [c.condition]: !e[c.condition] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: c.color, fontWeight: 800, fontSize: 15 }}>{c.condition}</div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[c.condition] ? "−" : "+"}</span>
                </button>
                {expanded[c.condition] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 12px" }}>{c.desc}</p>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 800, marginBottom: 8 }}>HISTORICAL EXAMPLES</div>
                    {c.examples.map((ex, j) => (
                      <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: c.color, flexShrink: 0, marginTop: 5 }} />
                        <span style={{ color: TEXT, fontSize: 13 }}>{ex}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "figures" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
            {FIGURES.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${f.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: f.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{f.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{f.years} · {f.role}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, marginBottom: 12 }}>{f.desc}</p>
                <div style={{ background: `${f.color}08`, border: `1px solid ${f.color}20`, borderRadius: 8, padding: "8px 12px", marginBottom: 8 }}>
                  <div style={{ color: f.color, fontSize: 10, fontWeight: 800, marginBottom: 2 }}>KEY WORKS</div>
                  <div style={{ color: TEXT, fontSize: 12 }}>{f.key_work}</div>
                </div>
                <div style={{ color: MUTED, fontSize: 11 }}>Free: {f.read_free}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "today" && (
          <div>
            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}35`, borderRadius: 10, padding: "14px 18px", marginBottom: 22 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>Will There Be Another Great Awakening?</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>Every major revival in history was unexpected by most and prayed for by a remnant. America has seen four major awakenings (1730s, 1790s, 1857, 1960s) and countless regional ones. The conditions that have historically preceded revival — spiritual decline, cultural crisis, remnant prayer — are all present in early 21st century America. These organizations represent serious, sustained seeking.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
              {TODAY_DATA.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 2 }}>{t.org}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{t.url}</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, marginBottom: 10 }}>{t.what}</p>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 6, padding: "6px 10px" }}>
                    <span style={{ color: GREEN, fontSize: 10, fontWeight: 800 }}>Seeking: </span>
                    <span style={{ color: MUTED, fontSize: 11 }}>{t.seeking}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: TEXT }}>My Revival Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Record what you are learning from revivals, conditions you sense God calling you to, and your prayers for renewal. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>REVIVAL THAT IS STIRRING ME *</label>
                <textarea value={revForm.revival} onChange={e => setRevForm(f => ({ ...f, revival: e.target.value }))}
                  placeholder="Which historical revival or revival account is speaking to you?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>CONDITION I SENSE GOD CALLING ME TO</label>
                <textarea value={revForm.condition} onChange={e => setRevForm(f => ({ ...f, condition: e.target.value }))}
                  placeholder="Humility, prayer, repentance, unity — what revival condition is God working in you?" rows={3}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>MY PRAYER FOR RENEWAL</label>
                <textarea value={revForm.prayer} onChange={e => setRevForm(f => ({ ...f, prayer: e.target.value }))}
                  placeholder="Write your prayer for personal and corporate renewal." rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveRevEntry}
                style={{ background: revSaved ? GREEN : PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {revSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {revEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 14, letterSpacing: 1 }}>SAVED ENTRIES ({revEntries.length})</h3>
                {revEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                      <button type="button" onClick={() => deleteRevEntry(entry.id)}
                        style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {entry.revival && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontWeight: 700, fontSize: 11 }}>REVIVAL: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.revival}</span></div>}
                    {entry.condition && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontWeight: 700, fontSize: 11 }}>CONDITION: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.condition}</span></div>}
                    {entry.prayer && <div><span style={{ color: MUTED, fontWeight: 700, fontSize: 11 }}>PRAYER: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.prayer}</span></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {REVIVAL_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
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
