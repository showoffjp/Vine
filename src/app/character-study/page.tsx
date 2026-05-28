"use client";

import { useState, useEffect } from "react";

interface BiblicalCharacter {
  id: string;
  name: string;
  testament: "Old" | "New";
  role: string;
  era: string;
  emoji: string;
  keyVerse: string;
  keyVerseRef: string;
  lifeSummary: string;
  keyLessons: { title: string; body: string; verse?: string; verseRef?: string }[];
  characterTraits: { trait: string; positive: boolean }[];
  keyMoments: { moment: string; reference: string; significance: string }[];
  applicationToday: string;
  relatedCharacters: string[];
  studyQuestions: string[];
}

const characters: BiblicalCharacter[] = [
  {
    id: "david",
    name: "David",
    testament: "Old",
    role: "King, Shepherd, Psalmist",
    era: "~1000 BC",
    emoji: "👑",
    keyVerse: "I have found David son of Jesse, a man after my own heart; he will do everything I want him to do.",
    keyVerseRef: "Acts 13:22",
    lifeSummary: "David was a shepherd boy who became Israel's greatest king, a warrior who killed giants, a musician who wrote half the Psalms, and a flawed human being who committed adultery and orchestrated murder — and yet was called 'a man after God's own heart.' His life is one of Scripture's most complete portraits of grace, failure, repentance, and restoration.",
    keyLessons: [
      {
        title: "God looks at the heart, not appearance",
        body: "When Samuel came to anoint the next king, he was drawn to David's impressive older brothers. God redirected him to the overlooked youngest son. The standard God uses to evaluate is fundamentally different from the world's.",
        verse: "The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart.",
        verseRef: "1 Samuel 16:7",
      },
      {
        title: "Authentic repentance restores relationship",
        body: "After his catastrophic failures with Bathsheba and Uriah, David's response was not to rationalize, justify, or minimize — he broke before God completely. Psalm 51 is the cry of a man who knew the weight of what he'd done and the only source of cleansing.",
        verse: "Create in me a pure heart, O God, and renew a steadfast spirit within me.",
        verseRef: "Psalm 51:10",
      },
      {
        title: "Preparation in obscurity precedes promotion",
        body: "David's years of solitude as a shepherd, where he killed a lion and a bear, were not wasted time — they were the preparation that made facing Goliath possible. What God is doing in your hidden seasons is never hidden from Him.",
      },
      {
        title: "Even the best leaders fail",
        body: "David's failure with Bathsheba didn't come in a moment of weakness — it came after his greatest military successes, when he was comfortable, idle, and powerful. Pride and comfort can be more spiritually dangerous than hardship.",
      },
    ],
    characterTraits: [
      { trait: "Courageous", positive: true },
      { trait: "Worshipful", positive: true },
      { trait: "Loyal", positive: true },
      { trait: "Passionate", positive: true },
      { trait: "Humble (in his early years)", positive: true },
      { trait: "Lustful", positive: false },
      { trait: "Calculating when threatened", positive: false },
      { trait: "Passive as a father", positive: false },
    ],
    keyMoments: [
      { moment: "Anointed by Samuel while still a shepherd boy", reference: "1 Samuel 16", significance: "God's choice is counterintuitive and not based on human standards" },
      { moment: "Kills Goliath with a sling and stone", reference: "1 Samuel 17", significance: "Faith built in obscurity becomes courage in public" },
      { moment: "Refuses to kill Saul despite opportunity (twice)", reference: "1 Samuel 24, 26", significance: "Submission to God's timing over personal revenge" },
      { moment: "Dances before the Ark with abandon", reference: "2 Samuel 6", significance: "Wholehearted worship that doesn't care what others think" },
      { moment: "Sin with Bathsheba and murder of Uriah", reference: "2 Samuel 11", significance: "The destructive power of unchecked desire and power" },
      { moment: "Nathan's confrontation and David's repentance", reference: "2 Samuel 12; Psalm 51", significance: "True repentance restores relationship with God" },
    ],
    applicationToday: "David invites us to bring our whole selves — our worship, our failures, our questions, our rage, our sorrow — before God. His Psalms model a prayer life that is honest rather than polished. His life asks: where are you preparing in obscurity? Where are you overconfident in your strength? And most importantly: are you quick to repent when you fail?",
    relatedCharacters: ["Solomon", "Jonathan", "Bathsheba", "Nathan", "Goliath", "Saul"],
    studyQuestions: [
      "What does it mean practically to be 'a person after God's own heart'?",
      "Where in your life are you waiting in an obscure 'shepherd field' season? How might God be using it?",
      "How does Psalm 51 change the way you approach repentance?",
      "David's greatest failures came after his greatest successes. What does that tell us about spiritual vigilance?",
      "Which aspect of David's character do you most relate to — and which most challenges you?",
    ],
  },
  {
    id: "paul",
    name: "Paul (Saul of Tarsus)",
    testament: "New",
    role: "Apostle, Missionary, Theologian",
    era: "~5–67 AD",
    emoji: "✍️",
    keyVerse: "I can do all this through him who gives me strength.",
    keyVerseRef: "Philippians 4:13",
    lifeSummary: "Paul was a zealous persecutor of Christians who had a dramatic encounter with the risen Christ on the road to Damascus that completely reoriented his entire life. He went on to plant churches across the Roman Empire, write 13 letters that form the theological backbone of the New Testament, and was ultimately executed for his faith in Rome. His transformation from chief persecutor to chief apostle remains one of history's most compelling arguments for the resurrection.",
    keyLessons: [
      {
        title: "God uses our past — He doesn't erase it",
        body: "Paul never stopped being haunted by his past as a persecutor. But rather than letting it paralyze him, it fueled his urgency and his gratitude. His background gave him access and credibility that others didn't have.",
        verse: "For I am the least of the apostles and do not even deserve to be called an apostle, because I persecuted the church of God.",
        verseRef: "1 Corinthians 15:9",
      },
      {
        title: "Contentment is learned, not given",
        body: "Paul's famous statement about contentment came after beatings, shipwrecks, imprisonments, and betrayals — not after a comfortable life. He learned contentment in the school of hard experience, not theology.",
        verse: "I have learned to be content whatever the circumstances.",
        verseRef: "Philippians 4:11",
      },
      {
        title: "Weakness is the platform for divine power",
        body: "When Paul pleaded with God to remove his 'thorn in the flesh,' God's answer was not healing but a deeper revelation: that His power is made perfect precisely in human weakness. Paul came to boast in his weaknesses because of this.",
        verse: "My grace is sufficient for you, for my power is made perfect in weakness.",
        verseRef: "2 Corinthians 12:9",
      },
      {
        title: "The Gospel demands radical lifestyle change",
        body: "Paul's theology was never merely theoretical. The second half of nearly every letter pivots to application: 'Therefore...' The indicative (what God has done) always leads to the imperative (how we should live). Doctrine and practice were inseparable for Paul.",
      },
    ],
    characterTraits: [
      { trait: "Intellectually brilliant", positive: true },
      { trait: "Fearlessly bold", positive: true },
      { trait: "Deeply pastoral", positive: true },
      { trait: "Servant-hearted in suffering", positive: true },
      { trait: "Intensely driven before conversion", positive: false },
      { trait: "Sometimes confrontational to a fault", positive: false },
      { trait: "Struggled in some relationships (Barnabas)", positive: false },
    ],
    keyMoments: [
      { moment: "Approves the stoning of Stephen", reference: "Acts 7:58–8:1", significance: "Paul's pre-conversion position — the chief opponent of the early church" },
      { moment: "Damascus road conversion", reference: "Acts 9:1-19", significance: "The encounter that transformed history; the risen Christ confronts his persecutor" },
      { moment: "First missionary journey with Barnabas", reference: "Acts 13-14", significance: "Intentional, strategic church planting across the Roman world" },
      { moment: "The Jerusalem Council", reference: "Acts 15", significance: "Paul fights for Gentile inclusion — the Gospel is for everyone" },
      { moment: "Imprisoned in Philippi — sings at midnight", reference: "Acts 16", significance: "Worship in the worst circumstances; the jailbreak that led to a jailer's salvation" },
      { moment: "Writing letters from prison", reference: "Philippians, Colossians, Philemon, Ephesians", significance: "Some of history's most profound theology written from a jail cell" },
    ],
    applicationToday: "Paul's life challenges the idea that your past disqualifies you or that comfortable circumstances are required for effective faith. He wrote about joy from prison, contentment from suffering, and hope from chains. He asks us: are you letting your past define you or fuel you? Are you depending on your own strength, or learning to depend on God in weakness?",
    relatedCharacters: ["Barnabas", "Silas", "Timothy", "Lydia", "Priscilla & Aquila", "Peter"],
    studyQuestions: [
      "How does Paul's transformation from persecutor to apostle strengthen your confidence in the power of the Gospel?",
      "Where in your life are you trying to be strong in your own strength rather than allowing God to work through your weakness?",
      "Paul's letters show deep emotional investment in the churches he planted. What does that tell us about Christian community?",
      "How does 'learning contentment' (not receiving it) change your expectations of the spiritual life?",
      "Which of Paul's letters has most shaped your faith, and why?",
    ],
  },
  {
    id: "ruth",
    name: "Ruth",
    testament: "Old",
    role: "Moabite Widow, Ancestor of David and Jesus",
    era: "~1100 BC",
    emoji: "🌾",
    keyVerse: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.",
    keyVerseRef: "Ruth 1:16",
    lifeSummary: "Ruth was a Moabite woman — a foreigner and a widow — who chose loyalty to her mother-in-law Naomi over the security of returning to her own people after the death of both their husbands. Her faithfulness, humility, and hard work led to her redemption by Boaz and ultimately placed her in the lineage of King David and Jesus Christ. Her story is a stunning illustration of hesed — the covenant lovingkindness of God.",
    keyLessons: [
      {
        title: "Faithfulness to people reflects faithfulness to God",
        body: "Ruth's covenant with Naomi wasn't romantic — it was costly. Staying meant giving up the security of her homeland and family for an uncertain future with a bitter, grieving old woman. Her hesed (lovingkindness) mirrored God's own character.",
      },
      {
        title: "God redeems the outsider",
        body: "Ruth was a Moabite — historically excluded from Israel's covenant community. Yet she ends up in the genealogy of Jesus. The Gospel's radical inclusion has always been part of God's plan, not an afterthought.",
        verse: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.",
        verseRef: "Galatians 3:28",
      },
      {
        title: "Dignity in humble work",
        body: "Rather than waiting for rescue, Ruth gleaned in the fields — backbreaking, humbling labor designed for the poor. She worked hard within the options available to her. God honored her diligence by directing her to Boaz's field.",
      },
      {
        title: "The kinsman-redeemer points to Christ",
        body: "Boaz's role as kinsman-redeemer — one who had the right and the willingness to redeem what was lost — is one of Scripture's most beautiful pictures of what Jesus does for us. He didn't have to; he chose to.",
      },
    ],
    characterTraits: [
      { trait: "Fiercely loyal", positive: true },
      { trait: "Humble", positive: true },
      { trait: "Hard-working", positive: true },
      { trait: "Courageously vulnerable", positive: true },
      { trait: "Foreigner who trusted God", positive: true },
    ],
    keyMoments: [
      { moment: "Refuses to leave Naomi despite her urging", reference: "Ruth 1:16-17", significance: "One of Scripture's most moving declarations of loyalty and love" },
      { moment: "Gleaning in Boaz's fields", reference: "Ruth 2", significance: "Faithful work within limited options; God's provision through ordinary means" },
      { moment: "Goes to Boaz at the threshing floor", reference: "Ruth 3", significance: "Courageous vulnerability; requesting kinsman-redeemer status" },
      { moment: "Boaz redeems Ruth publicly", reference: "Ruth 4", significance: "The picture of costly redemption — pointing forward to Christ" },
      { moment: "Ruth in the lineage of David and Jesus", reference: "Matthew 1:5", significance: "A Moabite widow becomes part of the most significant genealogy in history" },
    ],
    applicationToday: "Ruth's life is a challenge to loyal love — not the feeling but the decision. She chose people over comfort, faithfulness over convenience. Her story also challenges assumptions about who is 'in' and 'out' of God's family. And it reminds us that God is often working most powerfully in what looks like ordinary, humble circumstances.",
    relatedCharacters: ["Naomi", "Boaz", "Orpah", "Obed", "David"],
    studyQuestions: [
      "Where in your life is God calling you to faithful loyalty that costs something?",
      "How does Ruth's inclusion in the lineage of Jesus expand your understanding of who God receives?",
      "How does Boaz's role as kinsman-redeemer deepen your understanding of what Jesus has done for you?",
      "What does Ruth's story say about finding God's provision in difficult, unglamorous work?",
      "How does the relationship between Ruth and Naomi challenge or inspire the way you invest in older or younger believers?",
    ],
  },
  {
    id: "esther",
    name: "Esther",
    testament: "Old",
    role: "Queen of Persia, Deliverer of Her People",
    era: "~480 BC",
    emoji: "🌸",
    keyVerse: "And who knows but that you have come to your royal position for such a time as this?",
    keyVerseRef: "Esther 4:14",
    lifeSummary: "Esther was a Jewish orphan girl raised by her cousin Mordecai who became queen of Persia under King Ahasuerus. When Haman plotted the genocide of all Jews in the empire, Esther faced the terrifying choice of risking her life by approaching the king uninvited — or staying silent. Her courage, guided by Mordecai's challenge, saved her entire people.",
    keyLessons: [
      {
        title: "God places you where you are for a purpose",
        body: "Esther didn't choose her position — she was taken, elevated, and placed in a palace. But Mordecai's challenge reframes everything: perhaps this unwanted position is exactly the one God needed her in. Your placement — wherever it is — may be for more than your own benefit.",
      },
      {
        title: "Courage requires community",
        body: "Before she acted, Esther asked the Jewish community to fast for her for three days. She didn't walk into danger alone — she invited intercession, counsel, and accountability. Courageous action is rarely a solo endeavor.",
      },
      {
        title: "God's name need not appear for His hand to be evident",
        body: "God's name never appears in the book of Esther — yet His providential hand is unmistakable on every page. God works behind the scenes in circumstances that appear ordinary, coincidental, and human.",
      },
      {
        title: "Comfort and calling are often in conflict",
        body: "Esther had everything she could want. Acting meant risking it all. Mordecai's warning was blunt: if you stay silent, deliverance will come another way — but you and your family will perish. Calling doesn't promise comfort.",
      },
    ],
    characterTraits: [
      { trait: "Courageous under pressure", positive: true },
      { trait: "Wise and strategic", positive: true },
      { trait: "Humble and teachable", positive: true },
      { trait: "Initially reluctant", positive: false },
      { trait: "Grew into boldness", positive: true },
    ],
    keyMoments: [
      { moment: "Becomes queen of Persia", reference: "Esther 2", significance: "Divine positioning through seemingly ordinary events" },
      { moment: "Learns of Haman's genocide plot", reference: "Esther 3-4", significance: "The moment of crisis that reveals calling" },
      { moment: "Calls the community to fast before acting", reference: "Esther 4:16", significance: "Intercession and community before courageous action" },
      { moment: "Approaches the king uninvited", reference: "Esther 5", significance: "Risk-taking for others; courage in the face of death" },
      { moment: "Haman's plot exposed; Jewish people saved", reference: "Esther 7-8", significance: "God's deliverance through one willing vessel" },
    ],
    applicationToday: "Esther's story challenges you to consider your placement — in your family, workplace, community, nation. Have you come to where you are 'for such a time as this'? And when the cost of action becomes real, will you act — or wait for comfort?",
    relatedCharacters: ["Mordecai", "Ahasuerus (Xerxes)", "Haman", "Vashti"],
    studyQuestions: [
      "Where in your life might God have 'placed you for such a time as this'?",
      "What does Esther's story say about the relationship between courage and community?",
      "How does God's absence from the text actually strengthen the argument for His providential presence?",
      "When has your comfort ever been in conflict with a calling?",
      "What does Mordecai's challenging question to Esther say about the responsibility that comes with privilege and position?",
    ],
  },
  {
    id: "peter",
    name: "Peter (Simon Peter)",
    testament: "New",
    role: "Apostle, First Pope (Catholic tradition), Church Leader",
    era: "~1–68 AD",
    emoji: "⚓",
    keyVerse: "And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.",
    keyVerseRef: "Matthew 16:18",
    lifeSummary: "Peter was a fisherman from Galilee who became one of Jesus's closest disciples. Impulsive, passionate, and deeply flawed, Peter was the first to confess Jesus as the Messiah — and the one who denied Him three times on the night of His arrest. After the resurrection, Jesus restored Peter personally and he became a pillar of the early church, ultimately dying by crucifixion upside-down in Rome.",
    keyLessons: [
      {
        title: "Failure is not final",
        body: "Peter's denial of Christ is one of the most brutal failures in the New Testament — three explicit denials of the person he'd promised to die for. But Jesus didn't write him off. His post-resurrection conversation with Peter on the beach, 'Do you love me?... Feed my sheep,' is one of the most tender restoration scenes in all of Scripture.",
        verse: "Jesus said to Simon Peter, 'Simon son of John, do you love me more than these?'",
        verseRef: "John 21:15",
      },
      {
        title: "Boldness and impulsivity are two sides of the same coin",
        body: "Peter walked on water — and then sank when his eyes left Jesus. Peter declared Jesus the Messiah — and then minutes later was called 'Satan' for misunderstanding the plan. His greatest qualities and his greatest failures came from the same place: wholehearted intensity. Learning to channel boldness under the Spirit is the journey.",
      },
      {
        title: "Leaders must be willing to be changed",
        body: "Peter's Cornelius vision and his public dispute with Paul (Galatians 2) show a man whose theology was still being shaped years into his apostleship. Teachability in leaders is not weakness — it's the prerequisite for ongoing effectiveness.",
      },
    ],
    characterTraits: [
      { trait: "Passionate and wholehearted", positive: true },
      { trait: "Courageous", positive: true },
      { trait: "First to step out", positive: true },
      { trait: "Impulsive and reactive", positive: false },
      { trait: "Inconsistent under pressure", positive: false },
      { trait: "Teachable and restorable", positive: true },
    ],
    keyMoments: [
      { moment: "Called from his fishing boat by Jesus", reference: "Matthew 4:18-20", significance: "An ordinary person, called immediately, responds immediately" },
      { moment: "Walks on water toward Jesus", reference: "Matthew 14:28-31", significance: "Faith bold enough to step out, honest enough to cry for help when sinking" },
      { moment: "Confesses Jesus as the Messiah", reference: "Matthew 16:13-19", significance: "The revelation on which the church is built" },
      { moment: "Denies Christ three times", reference: "Matthew 26:69-75", significance: "The worst night of Peter's life — and God's grace was bigger" },
      { moment: "Restored by Jesus at the Sea of Galilee", reference: "John 21", significance: "Three 'do you love me' questions to undo three denials" },
      { moment: "Preaches at Pentecost; 3,000 saved", reference: "Acts 2", significance: "The terrified denier becomes the Spirit-filled evangelist" },
    ],
    applicationToday: "Peter is the patron saint of everyone who has failed spectacularly and wondered if there's any coming back. His story says: there is. Jesus doesn't just tolerate Peter's return — He specifically prepares it. Where are you being invited to step out in faith? And where do you need to receive restoration for a failure you've been carrying too long?",
    relatedCharacters: ["James", "John", "Andrew", "Cornelius", "Paul", "Jesus"],
    studyQuestions: [
      "How does Peter's restoration give you hope for areas of failure in your own life?",
      "What does Peter's story say about the relationship between boldness and teachability?",
      "Where has God been asking you to 'get out of the boat' recently?",
      "How did Peter's failures actually shape him into a more effective and compassionate leader?",
      "What would it mean to receive a personal restoration conversation with Jesus like Peter had in John 21?",
    ],
  },
];

export default function CharacterStudyPage() {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<BiblicalCharacter | null>(null);
  const [activeSection, setActiveSection] = useState<"overview" | "lessons" | "moments" | "questions">("overview");
  const [filterTestament, setFilterTestament] = useState<"All" | "Old" | "New">("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const s = localStorage.getItem("vine_character_study_saved");
      if (s) setSavedIds(new Set(JSON.parse(s)));
      const c = localStorage.getItem("vine_character_study_completed");
      if (c) setCompletedIds(new Set(JSON.parse(c)));
    } catch {}
  }, []);

  const handleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_character_study_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleComplete = (id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_character_study_completed", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filtered = characters.filter((c) => {
    if (filterTestament !== "All" && c.testament !== filterTestament) return false;
    if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ background: "linear-gradient(135deg, #0a0a20 0%, #07070F 100%)", padding: "52px 24px 36px", textAlign: "center", borderBottom: "1px solid #1E1E32" }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>📜</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Biblical Character Studies</h1>
        <p style={{ fontSize: 16, color: "#9898B3", maxWidth: 520, margin: "0 auto 24px" }}>
          Deep dives into the lives of biblical figures — their failures, faithfulness, key lessons, and what they reveal about God.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { value: characters.length.toString(), label: "Characters" },
            { value: completedIds.size.toString(), label: "Studied" },
            { value: savedIds.size.toString(), label: "Saved" },
            { value: characters.reduce((s, c) => s + c.keyLessons.length, 0).toString(), label: "Key Lessons" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#00FF88" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#9898B3" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px" }}>
        {/* Filters */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24, alignItems: "center" }}>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search characters..."
            style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "9px 14px", color: "#F2F2F8", fontSize: 13, outline: "none", minWidth: 180 }} />
          {(["All", "Old", "New"] as const).map((t) => (
            <button key={t} onClick={() => setFilterTestament(t)}
              style={{ padding: "7px 18px", borderRadius: 20, fontSize: 13, cursor: "pointer",
                border: `1px solid ${filterTestament === t ? "#6B4FBB" : "#1E1E32"}`,
                background: filterTestament === t ? "#6B4FBB20" : "transparent",
                color: filterTestament === t ? "#6B4FBB" : "#9898B3" }}>
              {t === "All" ? "All" : t + " Testament"}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
          {filtered.map((char) => {
            const saved = savedIds.has(char.id);
            const done = completedIds.has(char.id);
            return (
              <div key={char.id}
                style={{ background: "#12121F", border: `1px solid ${done ? "#00FF8830" : "#1E1E32"}`, borderRadius: 16, padding: 22, cursor: "pointer" }}
                onClick={() => { setSelected(char); setActiveSection("overview"); }}>
                <div style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 40 }}>{char.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#F2F2F8", margin: 0 }}>{char.name}</h3>
                      {done && <span style={{ color: "#00FF88", fontSize: 14 }}>✓</span>}
                    </div>
                    <div style={{ fontSize: 12, color: "#9898B3" }}>{char.role}</div>
                    <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                      <span style={{ padding: "1px 8px", borderRadius: 20, fontSize: 10, background: char.testament === "Old" ? "#F59E0B20" : "#6B4FBB20", color: char.testament === "Old" ? "#F59E0B" : "#6B4FBB" }}>
                        {char.testament} Testament
                      </span>
                      <span style={{ padding: "1px 8px", borderRadius: 20, fontSize: 10, background: "#1E1E32", color: "#9898B3" }}>{char.era}</span>
                    </div>
                  </div>
                </div>

                <div style={{ borderLeft: "2px solid #6B4FBB40", paddingLeft: 10, marginBottom: 12 }}>
                  <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic" }}>"{char.keyVerse.slice(0, 80)}..."</div>
                  <div style={{ fontSize: 10, color: "#6B4FBB", marginTop: 2 }}>{char.keyVerseRef}</div>
                </div>

                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 14 }}>
                  {char.keyLessons.length} key lessons · {char.keyMoments.length} key moments · {char.studyQuestions.length} study questions
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={(e) => { e.stopPropagation(); handleSave(char.id); }}
                    style={{ padding: "6px 12px", borderRadius: 7, border: "none", background: saved ? "#6B4FBB20" : "#1E1E32", color: saved ? "#6B4FBB" : "#9898B3", cursor: "pointer", fontSize: 13 }}>
                    {saved ? "★" : "☆"}
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); setSelected(char); setActiveSection("overview"); }}
                    style={{ flex: 1, padding: "6px 12px", borderRadius: 7, border: "none", background: "#6B4FBB", color: "#fff", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
                    Study →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Character Study Modal */}
      {selected && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSelected(null)}>
          <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 28, maxWidth: 660, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", gap: 14, marginBottom: 20, alignItems: "flex-start" }}>
              <div style={{ fontSize: 48 }}>{selected.emoji}</div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: "#F2F2F8", marginBottom: 2 }}>{selected.name}</h2>
                <div style={{ fontSize: 13, color: "#9898B3" }}>{selected.role} · {selected.era}</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => handleSave(selected.id)}
                  style={{ padding: "6px 10px", borderRadius: 8, border: "none", background: savedIds.has(selected.id) ? "#6B4FBB20" : "#1E1E32", color: savedIds.has(selected.id) ? "#6B4FBB" : "#9898B3", cursor: "pointer", fontSize: 16 }}>
                  {savedIds.has(selected.id) ? "★" : "☆"}
                </button>
              </div>
            </div>

            {/* Section tabs */}
            <div style={{ display: "flex", gap: 4, background: "#07070F", borderRadius: 10, padding: 4, marginBottom: 20 }}>
              {(["overview", "lessons", "moments", "questions"] as const).map((s) => (
                <button key={s} onClick={() => setActiveSection(s)}
                  style={{ flex: 1, padding: "7px 8px", borderRadius: 7, border: "none",
                    background: activeSection === s ? "#6B4FBB" : "transparent",
                    color: activeSection === s ? "#fff" : "#9898B3",
                    cursor: "pointer", fontWeight: 600, fontSize: 11, textTransform: "capitalize" }}>
                  {s === "lessons" ? "Key Lessons" : s === "moments" ? "Key Moments" : s === "questions" ? "Study Qs" : "Overview"}
                </button>
              ))}
            </div>

            {activeSection === "overview" && (
              <div>
                <div style={{ background: "#07070F", borderRadius: 10, padding: 16, marginBottom: 16, borderLeft: "4px solid #6B4FBB" }}>
                  <div style={{ fontSize: 14, color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6 }}>"{selected.keyVerse}"</div>
                  <div style={{ fontSize: 12, color: "#6B4FBB", fontWeight: 600 }}>{selected.keyVerseRef}</div>
                </div>
                <p style={{ fontSize: 14, color: "#D0D0E8", lineHeight: 1.8, marginBottom: 20 }}>{selected.lifeSummary}</p>

                <h3 style={{ fontSize: 13, fontWeight: 700, color: "#F2F2F8", marginBottom: 10 }}>Character Traits</h3>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                  {selected.characterTraits.map((t) => (
                    <span key={t.trait} style={{
                      padding: "3px 10px", borderRadius: 20, fontSize: 11,
                      background: t.positive ? "#00FF8815" : "#EF444415",
                      color: t.positive ? "#00FF88" : "#EF4444",
                      border: `1px solid ${t.positive ? "#00FF8830" : "#EF444430"}`,
                    }}>
                      {t.positive ? "+" : "−"} {t.trait}
                    </span>
                  ))}
                </div>

                <div style={{ background: "#07070F", borderRadius: 10, padding: 16, marginBottom: 16, borderLeft: "3px solid #00FF88" }}>
                  <div style={{ fontSize: 11, color: "#00FF88", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>Application Today</div>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.7, margin: 0 }}>{selected.applicationToday}</p>
                </div>

                <div style={{ fontSize: 12, color: "#9898B3" }}>Related characters: {selected.relatedCharacters.join(", ")}</div>
              </div>
            )}

            {activeSection === "lessons" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {selected.keyLessons.map((lesson, i) => (
                  <div key={i} style={{ background: "#07070F", borderRadius: 12, padding: 16 }}>
                    <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#6B4FBB20", border: "1px solid #6B4FBB", color: "#6B4FBB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                      <h4 style={{ fontSize: 14, fontWeight: 700, color: "#F2F2F8", margin: 0 }}>{lesson.title}</h4>
                    </div>
                    <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.7, margin: "0 0 10px 34px" }}>{lesson.body}</p>
                    {lesson.verse && (
                      <div style={{ marginLeft: 34, borderLeft: "2px solid #6B4FBB40", paddingLeft: 10 }}>
                        <div style={{ fontSize: 12, color: "#F2F2F8", fontStyle: "italic" }}>"{lesson.verse}"</div>
                        <div style={{ fontSize: 11, color: "#6B4FBB", marginTop: 2 }}>{lesson.verseRef}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeSection === "moments" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {selected.keyMoments.map((m, i) => (
                  <div key={i} style={{ display: "flex", gap: 12 }}>
                    <div style={{ width: 2, background: "#6B4FBB40", flexShrink: 0, borderRadius: 2, marginTop: 4 }} />
                    <div>
                      <div style={{ fontWeight: 700, color: "#F2F2F8", fontSize: 14, marginBottom: 2 }}>{m.moment}</div>
                      <div style={{ fontSize: 11, color: "#6B4FBB", marginBottom: 4 }}>{m.reference}</div>
                      <div style={{ fontSize: 12, color: "#9898B3", lineHeight: 1.6 }}>{m.significance}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "questions" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {selected.studyQuestions.map((q, i) => (
                  <div key={i} style={{ background: "#07070F", borderRadius: 10, padding: 14 }}>
                    <div style={{ display: "flex", gap: 10 }}>
                      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#00FF8815", border: "1px solid #00FF8830", color: "#00FF88", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                      <div style={{ fontSize: 13, color: "#D0D0E8", lineHeight: 1.6, paddingTop: 2 }}>{q}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <button onClick={() => handleComplete(selected.id)}
                style={{
                  flex: 1, padding: "11px 16px", borderRadius: 10, border: "none",
                  background: completedIds.has(selected.id) ? "#00FF8820" : "#6B4FBB",
                  color: completedIds.has(selected.id) ? "#00FF88" : "#fff",
                  cursor: "pointer", fontWeight: 700, fontSize: 15,
                }}>
                {completedIds.has(selected.id) ? "✓ Studied" : "Mark as Studied"}
              </button>
              <button onClick={() => setSelected(null)}
                style={{ padding: "11px 16px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
