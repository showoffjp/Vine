"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ERA_FILTERS = ["All", "18th Century", "19th Century", "20th Century"];

const WARRIORS = [
  {
    name: "George Müller",
    era: "19th Century",
    years: "1805-1898",
    nationality: "German / British",
    color: GREEN,
    known_for: "Faith-based orphanages; prayer as sole means of provision",
    background: "George Müller was a Prussian-born Christian who moved to Bristol, England, and founded a network of orphanages that at its peak housed 2,000 children — entirely funded by prayer, without ever making public financial appeals. Müller deliberately refused to ask anyone but God for money, wanting to demonstrate that God hears and answers prayer.",
    prayer_life: "Müller kept detailed journals of his prayers and God's answers — over 50,000 specific answers recorded in his lifetime. He prayed for 52 years for the conversion of five friends; the last was saved at his funeral. He read the entire Bible through over 200 times in his life. His method: start every morning with Scripture first, then prayer — not prayer then Scripture. 'The first thing to do when I get up is to have a quiet hour, prayer and the reading of God's Word.'",
    famous_story: "One morning the children in the orphanage sat down to breakfast with no food. Müller prayed. A baker knocked on the door — he had felt compelled to bake extra bread at 2am. Then a milkman's cart broke down outside — his milk would spoil if they didn't take it. This story was repeated in various forms throughout his ministry.",
    quote: "The beginning of anxiety is the end of faith, and the beginning of true faith is the end of anxiety.",
    read_more: "George Müller: Man of Faith (Roger Steer)",
    initials: "GM",
  },
  {
    name: "Hudson Taylor",
    era: "19th Century",
    years: "1832-1905",
    nationality: "British",
    color: "#F59E0B",
    known_for: "China Inland Mission; prayer for the interior of China",
    background: "J. Hudson Taylor founded the China Inland Mission in 1865 after a dramatic conversion and call to reach China. He was the first Western missionary to venture into inland China, adopting Chinese dress and culture in a radical act of contextualization. He died after 51 years in China, having personally baptized over 50 converts and trained hundreds of missionaries.",
    prayer_life: "Taylor is famous for saying: 'It is possible to move men, through God, by prayer alone.' He was known for waking at 2am every night to pray for an hour, then returning to sleep. He prayed specifically, named specific people, provinces, and spiritual conditions. When he needed 24 workers for inland China, he prayed — and 24 arrived. When he needed more, he prayed, and more came. His biography by Dr. and Mrs. Howard Taylor is considered one of the great missionary biographies.",
    famous_story: "After a dramatic encounter with God in Brighton in June 1865, Taylor prayed for 24 'willing, skilful labourers' for China, and committed to trust God alone for their support. He wrote his prayer in the margin of his Bible, and over the following months 24 people came forward. The China Inland Mission eventually sent over 900 missionaries to China.",
    quote: "All God's giants have been weak men who did great things for God because they reckoned on God being with them.",
    read_more: "Hudson Taylor's Spiritual Secret (Dr. and Mrs. Howard Taylor)",
    initials: "HT",
  },
  {
    name: "Rees Howells",
    era: "20th Century",
    years: "1879-1950",
    nationality: "Welsh",
    color: PURPLE,
    known_for: "Intercession for World War II; the Bible College of Wales",
    background: "Rees Howells was a Welsh coal miner who experienced a profound encounter with the Holy Spirit in 1906 and became an intercessor of extraordinary intensity. He founded the Bible College of Wales in 1924, which became a center of prayer and missions training. During World War II, Howells and his students prayed with extraordinary specificity for each military campaign.",
    prayer_life: "Howells practiced what he called 'intercession' in the deepest sense — not just prayer but identification with the suffering of those prayed for. He fasted for long periods, slept minimally, and spent hours in prayer. During the North African campaign, the Battle of Dunkirk, and the Battle of Britain, Howells and his college prayed day and night, keeping detailed records. After Dunkirk, Winston Churchill called the rescue 'a miracle of deliverance' — Howells believed it was the direct answer to their intercession.",
    famous_story: "During the darkest days of World War II, Howells led his college in prolonged intercession, believing God had given them a burden to pray against Hitler. When news came that Hitler had halted his advance into Dunkirk — allowing 338,000 Allied troops to escape in the miraculous evacuation — Howells told his students: 'God gave us the victory.'",
    quote: "When God burdens you for a person or a situation, he is calling you to intercede — to stand in the gap between where they are and where God wants them to be.",
    read_more: "Rees Howells, Intercessor (Norman Grubb)",
    initials: "RH",
  },
  {
    name: "Praying Hyde (John Hyde)",
    era: "19th Century",
    years: "1865-1912",
    nationality: "American",
    color: "#3B82F6",
    known_for: "Missionary in India; hours-long prayer marathons",
    background: "John Hyde was an American Presbyterian missionary who served in India from 1892. He became known as 'Praying Hyde' for his extraordinary prayer life — he was reported to spend 30+ hours on his knees in prayer. He was deeply burdened for the conversion of India and prayed for specific numbers of souls — first one per day, then two, then four — and saw corresponding results.",
    prayer_life: "Hyde prayed so intensely that doctors examining him found his heart had literally shifted from its normal position in his chest from his posture of prayer. He frequently went without sleep, spending entire nights in intercession. He prayed for specific people by name, specific villages by name, and kept records of conversions. At one Sialkot Convention, he prayed for 30 consecutive days before the conference began — the resulting revival was widely reported.",
    famous_story: "Hyde had prayed for one soul per day in 1908. By the end of the year, he had recorded 400 conversions. The next year he prayed for two per day, the year after four per day. He trained local evangelists, planted churches across Punjab, and saw a remarkable movement of God in a region previously resistant to the gospel.",
    quote: "Give me souls, O God, or I die!",
    read_more: "Praying Hyde (Francis McGaw)",
    initials: "PH",
  },
  {
    name: "Amy Carmichael",
    era: "19th Century",
    years: "1867-1951",
    nationality: "Irish",
    color: "#EC4899",
    known_for: "Dohnavur Fellowship; rescuing temple children in India",
    background: "Amy Carmichael was an Irish missionary who spent 55 years in India without a furlough — the longest unbroken missionary service of the modern era. She founded the Dohnavur Fellowship, a home for children rescued from temple prostitution in South India. She spent the last 20 years of her life bedridden from a severe accident but continued to write prolifically.",
    prayer_life: "Carmichael is known for her conviction that everything in the mission was born in prayer. She made no public appeals for funds, trusting God to provide. She wrote many of her famous poems and devotional books during her years of suffering. Her prayer life was characterized by intimacy — she spoke to God as a trusted friend and expected him to act in concrete situations.",
    famous_story: "In 1901, a seven-year-old girl named Preena appeared at Carmichael's door, having escaped from a temple where she was being trained for temple prostitution. Carmichael took her in, which opened her eyes to a widespread practice. She spent the rest of her life rescuing hundreds of such children, despite significant opposition from local religious establishments and colonial authorities.",
    quote: "You can give without loving, but you cannot love without giving.",
    read_more: "Amy Carmichael of Dohnavur (Frank Houghton)",
    initials: "AC",
  },
  {
    name: "E.M. Bounds",
    era: "19th Century",
    years: "1835-1913",
    nationality: "American",
    color: "#EF4444",
    known_for: "Classic books on prayer; pre-dawn prayer discipline",
    background: "Edward McKendree Bounds was a Methodist Episcopal minister who served as a Confederate chaplain during the Civil War, was captured and imprisoned, and later became one of the most influential writers on prayer in Christian history. He wrote eight books on prayer, most of which were published posthumously.",
    prayer_life: "Bounds rose every day at 4am to pray from 4 to 7am before the day's work began. He did this for decades without interruption. He believed that the great lack of the modern church was not programs or talent but praying men and women. His books — Power Through Prayer, Purpose in Prayer, The Necessity of Prayer — remain among the most influential devotional books on prayer ever written.",
    famous_story: "Bounds wrote: 'What the church needs today is not more machinery or better, not new organizations or more and novel methods, but men whom the Holy Ghost can use — men of prayer, men mighty in prayer. The Holy Ghost does not flow through methods, but through men. He does not come on machinery, but on men. He does not anoint plans, but men — men of prayer.'",
    quote: "The men who have done the most for God in this world have been early on their knees.",
    read_more: "Power Through Prayer (E.M. Bounds)",
    initials: "EMB",
  },
  {
    name: "C.H. Spurgeon",
    era: "19th Century",
    years: "1834-1892",
    nationality: "British",
    color: "#A855F7",
    known_for: "The Prince of Preachers; prayer meetings at Metropolitan Tabernacle",
    background: "Charles Haddon Spurgeon was the most popular preacher in Victorian England, preaching to congregations of 5,000-10,000 every Sunday at the Metropolitan Tabernacle in London. He is one of the most widely read Christian authors in history, with 63 volumes of sermons. Behind his extraordinary public ministry was an extraordinary private prayer life.",
    prayer_life: "Spurgeon attributed every aspect of his ministry to prayer. Before entering the pulpit, he always descended into a room below the Tabernacle where hundreds of people were already praying while he preached. He called this 'the boiler room' — the source of the steam. He said: 'The Metropolitan Tabernacle has been a praying church. I believe this is one secret of whatever success it has had.' His book Lectures to My Students has extensive teaching on prayer.",
    famous_story: "When visitors came to see the Tabernacle, Spurgeon would offer to show them its greatest wonder. He would lead them to a basement room full of people on their knees in prayer during the services. 'There,' he said, 'is the boiler room.' The prayer meetings of the Tabernacle were as famous as the sermons.",
    quote: "Pray without ceasing is only the continuous expression of what the Bible teaches when it says, 'In all things, by prayer and supplication, with thanksgiving, let your requests be made known to God.'",
    read_more: "C.H. Spurgeon Autobiography (4 vols.)",
    initials: "CHS",
  },
  {
    name: "Brother Andrew",
    era: "20th Century",
    years: "1928-2022",
    nationality: "Dutch",
    color: "#10B981",
    known_for: "Smuggling Bibles behind the Iron Curtain; Open Doors",
    background: "Andrew van der Bijl — 'Brother Andrew' — was a Dutch missionary who began smuggling Bibles into communist countries in the late 1950s. His 1967 autobiography God's Smuggler has sold millions of copies and inspired generations of Christians in the persecuted church. He founded Open Doors (now serving 60+ countries of persecution).",
    prayer_life: "Brother Andrew's entire ministry was built on two things: bold obedience and prayer. His famous 'customs officer prayer' — praying before crossing borders with Bibles: 'Lord, make seeing eyes blind' — was answered hundreds of times. He prayed for specific doors to open in closed countries, for specific regimes to fall, and for specific prisoners to be released. He visited Yasser Arafat and Hamas leaders, praying with them and sharing the gospel.",
    famous_story: "On one of his first Bible smuggling trips, Andrew loaded his small car with Bibles and drove toward the Romanian border. As he approached the customs line, he prayed: 'Lord, in my luggage I have Scriptures that I want to take to Your children across this border. When you were on earth, You made blind eyes see. Now I pray that You will make seeing eyes blind. Do not let the guards see those things You do not want them to see.' The guards searched other cars thoroughly. They waved Andrew through without opening his trunk.",
    quote: "Faith is not the absence of doubt, but the courage to act in spite of it.",
    read_more: "God's Smuggler (Brother Andrew)",
    initials: "BA",
  },
];

const PRINCIPLES_PWH: { id: string; principle: string; icon: string; warrior: string; explanation: string; practice: string }[] = [
  {
    id: "specific",
    principle: "Specific Prayer",
    icon: "🎯",
    warrior: "George Müller",
    explanation: "Müller kept detailed journals of specific requests and their answers, recording over 50,000 answered prayers in his lifetime. Vague prayers produce vague faith. When you name exactly what you are asking God for, you create a clear record of his faithfulness — and a powerful test of whether you truly believe he will act. Specificity forces honesty before God about what you actually want and expect.",
    practice: "Write one specific, concrete prayer request each morning. Date it. Leave space to record when and how God answers.",
  },
  {
    id: "ERR0Zq7TBgU",
    principle: "Persevering Prayer",
    icon: "🔥",
    warrior: "George Müller",
    explanation: "Müller prayed for the conversion of five specific friends for 52 years. One was converted at his funeral. Perseverance in prayer is not about twisting God's arm — it is about aligning your will with his over time, staying in relationship with him around a burden, and refusing to let go of what you believe he has promised. The length of the wait is often the measure of the depth of the work.",
    practice: "Keep a 'long-term list' of prayers you will not give up on — people, situations, and promises you believe God has laid on your heart. Review and pray through this list every week.",
  },
  {
    id: "scripture-soaked",
    principle: "Scripture-Soaked Prayer",
    icon: "📖",
    warrior: "Hudson Taylor",
    explanation: "Taylor prayed biblical promises back to God, turning Scripture into the language of his intercession. Praying God's own Word back to him aligns your requests with his revealed will, builds faith as you recall his character and past faithfulness, and gives your prayers a precision that comes from divine authorship. The Bible is not just a resource for understanding God — it is fuel for talking to him.",
    practice: "Take one Scripture promise per day and pray it back to God in your own words. Start with Matthew 7:7, Philippians 4:6-7, or Jeremiah 33:3.",
  },
  {
    id: "corporate",
    principle: "Corporate Intercession",
    icon: "👥",
    warrior: "Rees Howells",
    explanation: "Howells gathered an entire community of intercessors at the Bible College of Wales, believing that corporate prayer carried a weight that individual prayer could not. When believers agree together in prayer, there is a multiplication of faith, accountability, and spiritual authority. Jesus promised special presence where two or three are gathered in his name. The great revivals in history have almost always been preceded by communities praying together.",
    practice: "Find one person to commit to praying with weekly. Fix a time. Start with 20 minutes. Pray out loud together for specific people and situations.",
  },
  {
    id: "dy9nwe9zeU8",
    principle: "Sacrificial Prayer",
    icon: "⚔️",
    warrior: "Rees Howells",
    explanation: "Howells taught that true intercession costs something — it requires identification with the one prayed for, entering into their suffering and bearing it before God. Prayer that costs nothing may accomplish nothing. Fasting is one ancient form of this: voluntarily embracing hunger to express the urgency of your dependence on God and your seriousness about what you are asking. The body's hunger becomes a physical prayer.",
    practice: "Fast one meal per week, using that time to pray for a specific person or situation rather than eating. Begin with one meal; build from there.",
  },
  {
    id: "bold-faith",
    principle: "Bold Faith",
    icon: "🚀",
    warrior: "Brother Andrew",
    explanation: "Andrew prayed specific, seemingly impossible prayers before every border crossing — and saw specific, impossible answers. Bold faith is not presumption; it is taking God at his word in situations where the odds are humanly impossible. It asks for what only God can do, which is the only kind of prayer that requires faith. Small, safe prayers do not stretch faith; bold prayers do.",
    practice: "Add one 'impossible request' to your prayer list every month — something that would require clear divine intervention. Track what God does.",
  },
];

const SCRIPTURE_PWH: { id: string; ref: string; text: string; warrior: string; how_used: string }[] = [
  {
    id: "matt77",
    ref: "Matthew 7:7-8",
    text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.",
    warrior: "George Müller",
    how_used: "Müller quoted this verse when people asked how he could pray for provision without ever making public financial appeals. He took the promise literally: ask, and it will be given. His entire orphanage ministry was a 60-year demonstration of this verse.",
  },
  {
    id: "phil46",
    ref: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    warrior: "C.H. Spurgeon",
    how_used: "Spurgeon preached on this passage repeatedly, connecting the promise of peace directly with the practice of specific prayer. He taught that anxiety is what happens when we carry burdens we were meant to give to God, and that the cure is not willpower but prayer.",
  },
  {
    id: "rom826",
    ref: "Romans 8:26-27",
    text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God's people in accordance with the will of God.",
    warrior: "Rees Howells",
    how_used: "Howells taught this as the foundation of Holy Spirit-led intercession. He believed that the deepest intercession was not self-generated but Spirit-initiated — God himself placing burdens on the intercessor that the intercessor could not manufacture. His entire theology of intercession was built on this passage.",
  },
  {
    id: "jas516",
    ref: "James 5:16",
    text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.",
    warrior: "Hudson Taylor",
    how_used: "Taylor cited this verse when he needed workers and resources for the China Inland Mission. He believed that prayer offered in righteousness — in right relationship with God — carried real spiritual power. He called his missionaries to live holy lives precisely so their prayers would be effective.",
  },
  {
    id: "1jn514",
    ref: "1 John 5:14-15",
    text: "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us. And if we know that he hears us — whatever we ask — we know that we have what we asked of him.",
    warrior: "Brother Andrew",
    how_used: "Andrew prayed 'according to his will' before every border crossing, trusting that God knew what needed to get through and what did not. He did not demand specific outcomes; he asked God to do what aligned with his purposes — and then watched, repeatedly, as Bibles crossed borders that should have stopped them.",
  },
  {
    id: "jer333",
    ref: "Jeremiah 33:3",
    text: "Call to me and I will answer you and tell you great and unsearchable things you do not know.",
    warrior: "All the warriors",
    how_used: "Known informally as 'God's telephone number' (333) among generations of prayer warriors, this verse was a touchstone for Müller, Taylor, Hyde, and the others. It is a direct divine invitation to ask — with a promise of answers that exceed human expectation. Many of these intercessors returned to it again and again as their warrant for bold prayer.",
  },
];

const HABITS_PWH = [
  {
    icon: "📓",
    title: "Daily Prayer Journal",
    description: "Each morning, write three specific prayer requests and one thanksgiving before you do anything else. Dating each entry creates a record of God's faithfulness over time — and forces the specificity that Müller practiced for 60 years.",
    time: "5 min / day",
  },
  {
    icon: "📋",
    title: "Long-Term Intercession List",
    description: "Keep a separate list of five to ten “impossible” prayers you will not give up on — people who need to come to faith, situations that seem intractable, promises you believe God has given you. Review this list weekly and pray through it. Müller prayed 52 years for one name on his list.",
    time: "Weekly review",
  },
  {
    icon: "📖",
    title: "Scripture-Prayer",
    description: "Choose one Bible verse or promise per day. Read it slowly. Then pray it back to God in your own words, letting the text shape what you ask and how you ask it. Hudson Taylor built his entire prayer life on praying biblical promises back to the God who made them.",
    time: "10 min / day",
  },
  {
    icon: "👥",
    title: "Corporate Prayer",
    description: "Commit to one fixed weekly prayer time with at least one other person. It does not need to be long — 20 to 30 minutes is enough to start. Rees Howells believed that corporate intercession carried a spiritual weight that solitary prayer could not. Jesus promised special presence where two or three gather in his name.",
    time: "30 min / week",
  },
  {
    icon: "🚶",
    title: "Prayer Walk",
    description: "Once a month, walk a neighborhood, campus, or workplace in prayer. Pray out loud quietly or silently for the people you pass, the buildings you see, and the spiritual climate of the place. This practice connects intercession to geography and makes your prayers concrete and local.",
    time: "30 min / month",
  },
];

export default function PrayerWarriorHistoryPage() {
  const [era, setEra] = usePersistedState<string>("vine_prayer-warrior-history_era", "All");
  const [selected, setSelected] = useState<string | null>(null);
  type Tab = "warriors" | "principles" | "scripture" | "practices" | "videos" | "journal";
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_prayer-warrior-history_tab", "warriors");

  const filtered = WARRIORS.filter(w => era === "All" || w.era === era);
  const warrior = WARRIORS.find(w => w.name === selected);

  type PWHJournalEntry = { id: string; date: string; warrior: string; principle: string; applying: string };
  const [pwhJournal, setPwhJournal] = useState<PWHJournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_pwhj_entries") ?? "[]"); } catch { return []; } });
  const [jWarrior, setJWarrior] = useState("");
  const [jPrinciple, setJPrinciple] = useState("");
  const [jApplying, setJApplying] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_pwhj_entries", JSON.stringify(pwhJournal)); } catch {} }, [pwhJournal]);
  function savePWHEntry() {
    if (!jWarrior.trim() && !jPrinciple.trim()) return;
    setPwhJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), warrior: jWarrior, principle: jPrinciple, applying: jApplying }, ...prev]);
    setJWarrior(""); setJPrinciple(""); setJApplying("");
  }
  function deletePWHEntry(id: string) { setPwhJournal(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙏</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Great Prayer Warriors of History</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The men and women who took prayer seriously enough to let it reshape their lives &mdash; and through whom God moved nations, opened closed countries, and fed thousands of orphans.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 24, background: CARD, padding: 6, borderRadius: 10, border: `1px solid ${BORDER}` }}>
          {([
            { id: "warriors" as const, label: "Warriors", icon: "🙏" },
            { id: "principles" as const, label: "Principles", icon: "🎯" },
            { id: "scripture" as const, label: "Scripture", icon: "📖" },
            { id: "practices" as const, label: "Practices", icon: "✍️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
            { id: "journal" as const, label: "Journal", icon: "📓" },
          ]).map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "warriors" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>📖</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                &ldquo;The history of the church is the history of answered prayer. These men and women did not have extraordinary gifts &mdash; they had extraordinary faith that God would do what he promised.&rdquo; Reading the biographies of the great intercessors is one of the most faith-building exercises available to Christians.
              </p>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {ERA_FILTERS.map(e => (
                <button type="button" key={e} onClick={() => setEra(e)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {e}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: warrior ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((w, i) => (
                  <button type="button" key={i} onClick={() => setSelected(selected === w.name ? null : w.name)}
                    style={{ background: selected === w.name ? `${w.color}12` : CARD, border: `1px solid ${selected === w.name ? w.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${w.color}20`, border: `1px solid ${w.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: w.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                        {w.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{w.name}</span>
                          <span style={{ background: `${w.color}15`, color: w.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{w.era}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{w.years} · {w.nationality} · {w.known_for.split(";")[0]}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {warrior && (
                <div style={{ background: CARD, border: `1px solid ${warrior.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${warrior.color}20`, border: `1px solid ${warrior.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: warrior.color, fontWeight: 900, fontSize: 11, flexShrink: 0 }}>
                      {warrior.initials}
                    </div>
                    <div>
                      <h2 style={{ color: warrior.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{warrior.name}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>{warrior.years} · {warrior.nationality}</div>
                    </div>
                  </div>

                  <div style={{ background: `${warrior.color}08`, border: `1px solid ${warrior.color}15`, borderRadius: 8, padding: 10, marginBottom: 12 }}>
                    <div style={{ color: warrior.color, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>KNOWN FOR</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{warrior.known_for}</p>
                  </div>

                  <div style={{ marginBottom: 12 }}>
                    <div style={{ color: warrior.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>BACKGROUND</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{warrior.background}</p>
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>PRAYER LIFE</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{warrior.prayer_life}</p>
                  </div>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>FAMOUS STORY</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{warrior.famous_story}</p>
                  </div>

                  <div style={{ background: `${warrior.color}08`, border: `1px solid ${warrior.color}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                    <div style={{ color: warrior.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>QUOTE</div>
                    <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>&ldquo;{warrior.quote}&rdquo;</p>
                  </div>

                  <div style={{ color: MUTED, fontSize: 12 }}>
                    📚 <span style={{ fontWeight: 600 }}>Read more:</span> {warrior.read_more}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "principles" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>{PRINCIPLES_PWH.length} principles distilled from the lives of history&rsquo;s greatest prayer warriors.</p>
            {PRINCIPLES_PWH.map(p => (
              <div key={p.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ margin: 0 }}>{p.icon} {p.principle}</h3>
                  <span style={{ background: `${GREEN}15`, color: GREEN, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>Learned from {p.warrior}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8 }}>{p.explanation}</p>
                <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 14, marginTop: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>PRACTICE TODAY</div>
                  <p style={{ color: TEXT, margin: 0, fontSize: 14 }}>{p.practice}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>The verses that fueled the prayer lives of history&rsquo;s greatest intercessors.</p>
            {SCRIPTURE_PWH.map(s => (
              <div key={s.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{s.ref}</span>
                  <span style={{ color: MUTED, fontSize: 12 }}>&mdash; {s.warrior}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 16, fontStyle: "italic", color: TEXT, margin: "0 0 14px" }}>
                  &ldquo;{s.text}&rdquo;
                </blockquote>
                <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>HOW THEY USED IT</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{s.how_used}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>{HABITS_PWH.length} habits drawn from the lives of the great prayer warriors &mdash; simple enough to start today.</p>
            {HABITS_PWH.map((habit, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ margin: 0, fontSize: 17 }}>{habit.icon} {habit.title}</h3>
                  <span style={{ background: `${GREEN}15`, color: GREEN, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700, whiteSpace: "nowrap", marginLeft: 12 }}>{habit.time}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0 }}>{habit.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div style={{ maxWidth: 720 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 4 }}>My Prayer Warriors Journal</h2>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 20, lineHeight: 1.6 }}>Record what you&apos;re learning from history&apos;s prayer warriors, principles to carry, and how you&apos;re applying them to your own prayer life.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div><label style={{ color: MUTED, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Warrior</label><textarea value={jWarrior} onChange={e => setJWarrior(e.target.value)} placeholder="Who are you learning from?" rows={1} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Principle</label><textarea value={jPrinciple} onChange={e => setJPrinciple(e.target.value)} placeholder="What principle from their prayer life struck you?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Applying It</label><textarea value={jApplying} onChange={e => setJApplying(e.target.value)} placeholder="How will you carry this into your own prayer life?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} /></div>
                <button type="button" onClick={savePWHEntry} style={{ background: GREEN, color: "#000", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {pwhJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {pwhJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}><span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span><button type="button" onClick={() => deletePWHEntry(entry.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button></div>
                    {entry.warrior && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Warrior</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{entry.warrior}</p></div>}
                    {entry.principle && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Principle</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{entry.principle}</p></div>}
                    {entry.applying && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Applying</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{entry.applying}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Video teachings on prayer, intercession, and following in the footsteps of history's great prayer warriors.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {[
                { id: "OqwbFGoRYVo", title: "Prayer Causes Things to Happen", teacher: "John Piper" },
                { id: "npEDqbE6faE", title: "Prayer, Fasting and the Course of History", teacher: "John Piper" },
                { id: "F1Cz95NtJ4c", title: "How To Be an Intercessory Prayer Warrior", teacher: "Prayer Ministry" },
                { id: "W6NjAG4qp4M", title: "Two Types of Effective Prayer", teacher: "Paul Washer" },
              ].map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
