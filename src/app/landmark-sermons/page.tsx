"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ERAS = ["All", "Historical", "20th Century", "Modern"];

const SERMONS = [
  {
    title: "Sinners in the Hands of an Angry God",
    preacher: "Jonathan Edwards",
    year: 1741,
    era: "Historical",
    color: "#F59E0B",
    theme: "Judgment / Hell / Urgency",
    verse: "Deuteronomy 32:35",
    why: "Preached in Enfield, Connecticut on July 8, 1741, this sermon became the most famous in American history. Edwards delivered it in a measured, quiet voice — yet listeners reportedly clutched their chairs and cried out in distress. It ignited the First Great Awakening. The vivid imagery of a spider dangling over fire was not designed to terrify for its own sake but to shake his congregation loose from complacency into genuine saving faith. Edwards believed people needed to truly grasp their spiritual danger before the grace of God would register.",
    key_quote: "The God that holds you over the pit of hell, much as one holds a spider, or some loathsome insect over the fire, abhors you, and is dreadfully provoked.",
    youtube: "https://youtube.com/results?search_query=sinners+in+hands+angry+god+jonathan+edwards+sermon",
    initials: "SAG",
  },
  {
    title: "I Have a Dream",
    preacher: "Martin Luther King Jr.",
    year: 1963,
    era: "20th Century",
    color: "#3B82F6",
    theme: "Justice / Freedom / Biblical Hope",
    verse: "Amos 5:24",
    why: "Delivered on the steps of the Lincoln Memorial on August 28, 1963, this is the most widely heard sermon in American history — though many hear it only as a political speech. King was a Baptist preacher whose rhetoric was saturated with biblical language and cadence. The vision of a day when 'justice rolls down like waters' is Amos 5:24. King understood himself as standing in the tradition of the Hebrew prophets. The sermon is a masterclass in the biblical theology of justice applied to a specific historical moment.",
    key_quote: "I have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain... and the glory of the Lord shall be revealed.",
    youtube: "https://youtube.com/results?search_query=i+have+a+dream+mlk+full+speech",
    initials: "IHD",
  },
  {
    title: "The Expulsive Power of a New Affection",
    preacher: "Thomas Chalmers",
    year: 1817,
    era: "Historical",
    color: PURPLE,
    theme: "Sin / Heart Change / Sanctification",
    verse: "1 John 2:15",
    why: "Scottish preacher Thomas Chalmers argued that the only way to defeat sinful desire is not willpower but a greater desire — specifically, the overwhelming affection of knowing God. The soul cannot be emptied of its affections by sheer force; it can only be filled with something greater. This insight — expulsion through replacement, not suppression — became foundational for Reformed sanctification theology and has deeply influenced pastoral counseling. Tim Keller called it one of the most important sermons in church history.",
    key_quote: "The heart is not designed to simply rest in a vacuum — it must be filled, and if not filled with God, it will be filled with the world.",
    youtube: "https://youtube.com/results?search_query=expulsive+power+new+affection+thomas+chalmers",
    initials: "EPN",
  },
  {
    title: "The Weight of Glory",
    preacher: "C.S. Lewis",
    year: 1941,
    era: "20th Century",
    color: GREEN,
    theme: "Desire / Heaven / Longing for God",
    verse: "2 Corinthians 4:17",
    why: "Preached at the Church of St. Mary the Virgin, Oxford on June 8, 1941 — during the Second World War — C.S. Lewis delivered what many consider the greatest sermon of the 20th century. Lewis argued that our deepest longings are not for earthly satisfactions but for glory — to be known and valued by God himself. The famous line about carrying potentially glorified neighbors is the sermon's ethical conclusion: we have never spoken with a mere mortal. It permanently changed how many Christians think about desire, beauty, and the significance of other people.",
    key_quote: "There are no ordinary people. You have never talked to a mere mortal. Nations, cultures, arts, civilisations — these are mortal, and their life is to ours as the life of a gnat.",
    youtube: "https://youtube.com/results?search_query=weight+of+glory+CS+Lewis+sermon",
    initials: "WOG",
  },
  {
    title: "What Is the Gospel?",
    preacher: "Tim Keller",
    year: 2006,
    era: "Modern",
    color: "#EC4899",
    theme: "Gospel / Grace / Idolatry",
    verse: "Galatians 2:14",
    why: "Keller's signature sermon and the seed of his most important book, The Prodigal God. Preached at Redeemer Presbyterian in Manhattan, it reframes the parable of the prodigal son as a story about two lost sons — and argues that moralism is as much a rejection of grace as licentiousness. The father runs to both sons. This sermon crystallized what it means to preach grace to a culture of performance and shaped a generation of urban church planters who heard that the gospel is not merely the beginning of Christian life but the whole thing.",
    key_quote: "The gospel is that you are more sinful and flawed than you ever dared believe, but more accepted and loved than you ever dared hope.",
    youtube: "https://youtube.com/results?search_query=tim+keller+prodigal+god+sermon",
    initials: "WIG",
  },
  {
    title: "Blessed Are the Poor in Spirit",
    preacher: "D. Martyn Lloyd-Jones",
    year: 1959,
    era: "20th Century",
    color: "#10B981",
    theme: "Beatitudes / Humility / Kingdom",
    verse: "Matthew 5:3",
    why: "Welsh preacher Martyn Lloyd-Jones spent 13 years preaching through the Sermon on the Mount at Westminster Chapel in London. His first Beatitudes sermon became the foundation of what is widely considered the finest expository series on the Sermon on the Mount ever preached. Lloyd-Jones's method was surgical: he dismantled every superficial reading before reconstructing the text's actual demand. The phrase 'poor in spirit' does not mean literally poor or spiritually weak — it means those who have recognized their complete spiritual bankruptcy before God. The kingdom belongs to them alone.",
    key_quote: "The man who is poor in spirit is the man who has seen himself as he truly is — one who has nothing to commend himself to God.",
    youtube: "https://youtube.com/results?search_query=martyn+lloyd+jones+blessed+poor+in+spirit+sermon",
    initials: "BPS",
  },
  {
    title: "The Sovereignty of God in the Calamities of Life",
    preacher: "John Piper",
    year: 2001,
    era: "Modern",
    color: "#EF4444",
    theme: "Sovereignty / Suffering / 9/11",
    verse: "Romans 8:28",
    why: "Preached in the immediate aftermath of September 11, 2001, this sermon became one of the most-cited pastoral responses to national tragedy in modern American evangelicalism. Piper neither denied the horror of the event nor retreated from the biblical claim that God is sovereign over all things including calamity. He argued from Luke 13 (where Jesus addresses the tower of Siloam that killed 18) that national disasters are not punishment for peculiar wickedness but calls to repentance for all. The message brought both comfort and challenge to a congregation in shock.",
    key_quote: "The lesson of 9/11 is the same as the lesson of Siloam: repent, or you will all likewise perish. God is saying: wake up. Every day is borrowed time.",
    youtube: "https://youtube.com/results?search_query=john+piper+sovereignty+god+calamities+9+11+sermon",
    initials: "SGC",
  },
  {
    title: "How Should We Then Live?",
    preacher: "Francis Schaeffer",
    year: 1976,
    era: "20th Century",
    color: "#8B5CF6",
    theme: "Culture / Christian Worldview / Apologetics",
    verse: "Romans 12:2",
    why: "Though primarily a book and film series, Schaeffer's lectures at L'Abri Fellowship in Switzerland shaped an entire generation of Christian intellectuals who had given up on engaging secular culture. Schaeffer argued that ideas have consequences and that the West's loss of Christian foundations — what he called the loss of the Christian consensus — had produced nihilism, moral relativism, and the erosion of human dignity. His work prepared millions of Christians to engage intellectually and culturally rather than retreating into subculture.",
    key_quote: "Christianity is not just a series of truths but Truth — Truth about all of reality. It comprehends all of life.",
    youtube: "https://youtube.com/results?search_query=francis+schaeffer+how+should+we+then+live+lecture",
    initials: "HSL",
  },
  {
    title: "Jesus Is Precious Because His Promises Are Unbreakable",
    preacher: "John Piper",
    year: 2019,
    era: "Modern",
    color: "#F59E0B",
    theme: "Perseverance / Promises / Assurance",
    verse: "2 Corinthians 1:20",
    why: "One of Piper's most structurally elegant sermons, delivered at Passion 2019 before 65,000 students. It builds a cascading argument: every promise of God finds its Yes in Christ (2 Cor 1:20) → therefore the magnitude of God's promises reveals the magnitude of Christ → therefore to see how precious Jesus is, catalog his promises → every anxiety you have is answered by a specific promise of God, and that promise is guaranteed by Christ's blood. Forty thousand students heard the gospel reframed as a treasury of promises, not merely a moment of decision.",
    key_quote: "Every fear you have is met by a promise. Every promise is secured by the death of Jesus. Therefore Jesus is precious precisely in proportion to how afraid you are.",
    youtube: "https://youtube.com/results?search_query=john+piper+passion+2019+promises+sermon",
    initials: "JPP",
  },
  {
    title: "The Gospel in Six Words",
    preacher: "Alistair Begg",
    year: 2018,
    era: "Modern",
    color: "#00D4AA",
    theme: "Gospel / Atonement / Simplicity",
    verse: "1 Corinthians 15:3-4",
    why: "Begg's gift is making the ancient gospel fresh and graspable without reducing its weight. This sermon distills Paul's summary in 1 Corinthians 15:3-4 into six movements: Christ died, for our sins, according to the Scriptures, was buried, rose again, and appeared. Each word carries a freight of theological meaning that Begg unpacks with characteristic Scottish directness and warmth. The sermon is a model for what expository preaching of the gospel can be: utterly clear, emotionally honest, and theologically precise without being academic.",
    key_quote: "Paul says: let me tell you what I received, and let me tell you what I passed on. The gospel is not my invention. It is a gift I hold for others.",
    youtube: "https://youtube.com/results?search_query=alistair+begg+gospel+six+words+sermon",
    initials: "GSW",
  },
  {
    title: "A Christian View of Suffering",
    preacher: "R.C. Sproul",
    year: 1995,
    era: "Modern",
    color: "#3B82F6",
    theme: "Suffering / Providence / Job",
    verse: "Job 38:4",
    why: "Sproul's most-requested lecture on the problem of evil and human suffering, delivered as part of the Ligonier series. Rather than offering a theodicy that fully resolves the problem, Sproul walks through the book of Job to show that God's response to Job's suffering is not an explanation but a revelation — the whirlwind chapters (38-41) do not explain the why of suffering but demonstrate who God is. Sproul argues that encountering God's greatness doesn't answer our questions but dwarfs them. For thousands of suffering Christians, this was more comforting than any tidy answer would have been.",
    key_quote: "God did not answer Job's question. He answered Job. That is more than enough.",
    youtube: "https://youtube.com/results?search_query=RC+Sproul+Christian+view+of+suffering+sermon",
    initials: "CVS",
  },
  {
    title: "Missions Belongs to the Cross",
    preacher: "David Platt",
    year: 2013,
    era: "Modern",
    color: "#A855F7",
    theme: "Missions / Sacrifice / Global Church",
    verse: "Revelation 7:9-10",
    why: "Platt's sermon at the Together for the Gospel conference catalyzed a wave of radical missions commitment among young Reformed evangelicals. Drawing on Revelation 7:9-10 — the vision of every tribe, tongue, and nation worshipping — and Matthew 28:18-20, Platt argued that the unreached peoples of the world are not a peripheral missions concern but the very goal toward which Christ's atoning work is aimed. The blood of Christ was shed for every people group, and therefore the church cannot be comfortable until every people group has heard.",
    key_quote: "He has purchased with his blood people from every tribe and every language and every people and every nation. The cross demands global missions.",
    youtube: "https://youtube.com/results?search_query=david+platt+missions+belongs+cross+sermon",
    initials: "MBC",
  },
];

export default function LandmarkSermonsPage() {
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = SERMONS.filter(s => era === "All" || s.era === era);
  const sermon = SERMONS.find(s => s.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎤</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Landmark Sermons</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            12 sermons that shaped Christian history — from Jonathan Edwards igniting revival to Tim Keller reframing grace for a secular city. Each with its context, significance, and where to find it.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {ERAS.map(e => (
            <button key={e} onClick={() => setEra(e)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {e}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: sermon ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((s, i) => (
              <button key={i} onClick={() => setSelected(selected === s.title ? null : s.title)}
                style={{ background: selected === s.title ? `${s.color}12` : CARD, border: `1px solid ${selected === s.title ? s.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.color}20`, border: `1px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                    {s.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{s.title}</span>
                      <span style={{ background: `${s.color}15`, color: s.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{s.era}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{s.preacher} · {s.year}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 11, flexShrink: 0 }}>{s.verse}</span>
                </div>
              </button>
            ))}
          </div>

          {sermon && (
            <div style={{ background: CARD, border: `1px solid ${sermon.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${sermon.color}20`, border: `1px solid ${sermon.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: sermon.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                  {sermon.initials}
                </div>
                <div>
                  <h2 style={{ color: sermon.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{sermon.title}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{sermon.preacher} · {sermon.year} · {sermon.era}</div>
                </div>
              </div>

              <div style={{ background: `${sermon.color}08`, border: `1px solid ${sermon.color}20`, borderRadius: 10, padding: 14, marginBottom: 16 }}>
                <div style={{ color: sermon.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUOTE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{sermon.key_quote}"</p>
              </div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                <span style={{ background: `${sermon.color}12`, color: sermon.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{sermon.theme}</span>
                <span style={{ background: `${PURPLE}12`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{sermon.verse}</span>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{sermon.why}</p>

              <a href={sermon.youtube} target="_blank" rel="noopener noreferrer"
                style={{ background: "#FF000015", border: "1px solid #FF000030", color: "#FF4444", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                ▶ Find on YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
