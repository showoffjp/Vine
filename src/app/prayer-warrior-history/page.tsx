"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ERA_FILTERS = ["All", "18th Century", "19th Century", "20th Century"];

const WARRIORS = [
  {
    name: "George Müller",
    era: "19th Century",
    years: "1805–1898",
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
    years: "1832–1905",
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
    years: "1879–1950",
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
    years: "1865–1912",
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
    years: "1867–1951",
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
    years: "1835–1913",
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
    years: "1834–1892",
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
    years: "1928–2022",
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

export default function PrayerWarriorHistoryPage() {
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = WARRIORS.filter(w => era === "All" || w.era === era);
  const warrior = WARRIORS.find(w => w.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙏</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Great Prayer Warriors of History</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The men and women who took prayer seriously enough to let it reshape their lives — and through whom God moved nations, opened closed countries, and fed thousands of orphans.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>📖</span>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            "The history of the church is the history of answered prayer. These men and women did not have extraordinary gifts — they had extraordinary faith that God would do what he promised." Reading the biographies of the great intercessors is one of the most faith-building exercises available to Christians.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {ERA_FILTERS.map(e => (
            <button key={e} onClick={() => setEra(e)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {e}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: warrior ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((w, i) => (
              <button key={i} onClick={() => setSelected(selected === w.name ? null : w.name)}
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
                <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>"{warrior.quote}"</p>
              </div>

              <div style={{ color: MUTED, fontSize: 12 }}>
                📚 <span style={{ fontWeight: 600 }}>Read more:</span> {warrior.read_more}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
