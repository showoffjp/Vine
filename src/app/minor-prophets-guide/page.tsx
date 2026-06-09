"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "amos", label: "Amos" },
  { id: "hosea", label: "Hosea" },
  { id: "micah", label: "Micah" },
  { id: "jonah", label: "Jonah" },
  { id: "habakkuk", label: "Habakkuk" },
  { id: "themes", label: "Common Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const THEMES = [
  { color: RED, title: "Justice and the Oppressed", text: "The minor prophets share an unflinching concern for justice, particularly for the marginalized — the widow, the orphan, the poor, the alien. Amos thunders against those who sell the righteous for silver and the poor for a pair of sandals (2:6). Micah condemns those who devise wickedness on their beds, then seize fields and houses (2:1-2). Habakkuk cries out about violence going unpunished (1:2-3). The prophets are not social activists in the modern sense — they are covenant enforcers. Injustice violates the Sinai covenant, which demanded care for the vulnerable." },
  { color: GOLD, title: "Covenant Faithfulness and Unfaithfulness", text: "Israel's relationship with God is repeatedly described in marital terms — and Israel is repeatedly described as an adulterous spouse. Hosea lives this metaphor; his marriage to Gomer becomes a walking sermon about God's grief over Israel's worship of Baal. The same metaphor runs through Ezekiel 16 and 23. The prophets understand Israel's idolatry not as a theological error but as a relational betrayal — forsaking the one who loves them for gods who cannot save." },
  { color: TEAL, title: "The Day of the Lord", text: "\"The Day of the LORD\" appears across multiple minor prophets — Amos 5:18-20, Joel 2, Obadiah 15, Zephaniah 1:14-18. It refers to a decisive divine intervention in history when God judges sin and vindicates the righteous. Israel assumed the Day of the LORD would be a day of triumph for them against the nations — Amos shockingly reverses this: it will be darkness and not light for unfaithful Israel too (5:18). The NT reads the Day of the LORD as pointing toward the final judgment and the return of Christ." },
  { color: PURPLE, title: "Remnant Theology", text: "Despite devastating judgment oracles, almost every minor prophet preserves a remnant hope — a small group of the faithful who survive judgment and become the seed of restoration. Amos ends with the raising of David's fallen tent (9:11). Micah sees a remnant gathered as a flock (2:12). Zechariah speaks of two-thirds perishing but a third refined as silver. The remnant theology preserves both the seriousness of judgment and the certainty of God's redemptive purposes continuing beyond it — a pattern Paul uses in Romans 9-11." },
  { color: BLUE, title: "The Nations in God's Purposes", text: "Jonah is the most dramatic expression of a truth woven through all the prophets: God cares about the nations, not only Israel. Amos' oracles begin with judgments on the surrounding nations before landing on Israel — showing that God holds all nations accountable to basic moral standards. Micah 4:1-3 envisions the nations streaming to Jerusalem to learn God's ways. Zechariah 8:20-23 sees many nations coming to seek the LORD. The mission to the nations is not a NT invention — it is the fulfillment of God's purpose to bless all nations through Abraham's offspring (Gen 12:3)." },
  { color: GREEN, title: "The Future Restoration", text: "Every prophet pairs judgment with restoration — sometimes in the same breath. Hosea ends with God wooing Israel back to the wilderness and betrothing her again (14:4-7). Micah envisions swords beaten into plowshares (4:3). Amos ends with restored fortunes and replanted Israel (9:14-15). Habakkuk ends with exultant faith despite devastation (3:17-19). The prophetic vision is not finally one of doom but of a God who disciplines in order to restore — the same pattern visible in the cross and resurrection." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type MinorTab = "overview" | "amos" | "hosea" | "micah" | "jonah" | "habakkuk" | "themes" | "journal" | "videos";

export default function MinorProphetsGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<MinorTab>("vine_minor_tab", "overview");
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_minor_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_minor_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveEntry = useCallback(() => {
    if (!jForm.verse && !jForm.reflection) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...jForm };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2000);
  }, [jForm]);

  const deleteEntry = useCallback((id: string) => setJEntries(prev => prev.filter(e => e.id !== id)), []);

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${TEAL}20`, border: `1px solid ${TEAL}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: TEAL, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Prophecy · OT</div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>The Minor Prophets</h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>Twelve prophetic books — the Book of the Twelve — delivering God&apos;s word to Israel and the nations: thundering for justice, weeping over unfaithfulness, wrestling with God, and glimpsing the restoration that lies beyond judgment.</p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? TEAL : BORDER}`, background: activeTab === t.id ? `${TEAL}20` : "transparent", color: activeTab === t.id ? TEAL : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 13, cursor: "pointer" }}>
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The term &ldquo;Minor Prophets&rdquo; refers to the twelve shorter prophetic books at the end of the OT canon — minor in length, not importance. In the Hebrew Bible they form a single scroll called the Book of the Twelve (Tere Asar). Their arrangement is not purely chronological; it is theological and literary, creating a coherent arc from the judgment of Israel and Judah through the exile to the return and the hope of ultimate restoration.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The minor prophets span roughly four centuries (8th-5th century BC), addressing very different historical contexts. Amos and Hosea speak to the Northern Kingdom in the 8th century. Micah, Nahum, Habakkuk, Zephaniah address the 8th-7th century. Haggai, Zechariah, and Malachi address the post-exilic community. Yet the theological concerns are strikingly consistent: covenant faithfulness, justice for the oppressed, the Day of the LORD, and the hope of ultimate restoration.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { name: "Hosea", color: GOLD, period: "8th C BC · N. Kingdom", summary: "Covenant love and unfaithfulness — God as husband to unfaithful Israel. Hosea's marriage to Gomer is a living parable of God's relentless pursuit." },
                { name: "Joel", color: GREEN, period: "Uncertain", summary: "A locust plague as the Day of the LORD, calling for repentance, and the promise of the Spirit poured out on all flesh — fulfilled at Pentecost (Acts 2)." },
                { name: "Amos", color: RED, period: "8th C BC · N. Kingdom", summary: "Justice for the poor and judgment on economic exploitation. 'Let justice roll down like waters, and righteousness like an ever-flowing stream' (5:24)." },
                { name: "Obadiah", color: MUTED, period: "~587 BC", summary: "The shortest OT book — judgment on Edom for its treatment of Judah, and the Day of the LORD coming on all nations." },
                { name: "Jonah", color: BLUE, period: "8th C BC", summary: "The reluctant prophet sent to Nineveh. Less about the fish and more about God's mercy extending beyond Israel to Israel's enemies." },
                { name: "Micah", color: TEAL, period: "8th C BC", summary: "'Do justice, love mercy, walk humbly with your God' (6:8). Justice for the poor and messianic hope — the ruler from Bethlehem (5:2)." },
                { name: "Nahum", color: PURPLE, period: "7th C BC", summary: "Oracle against Nineveh — the fall of the Assyrian empire is God's just judgment on a brutal power that crushed nations." },
                { name: "Habakkuk", color: GOLD, period: "7th C BC", summary: "A prophet's argument with God about injustice and the Babylonian crisis. 'The righteous shall live by his faith' (2:4) — quoted three times in the NT." },
                { name: "Zephaniah", color: RED, period: "7th C BC", summary: "The Day of the LORD as judgment on all — including Judah. But ends with God rejoicing over his people with singing (3:17)." },
                { name: "Haggai", color: GREEN, period: "520 BC · Post-exile", summary: "Calls the returned exiles to rebuild the temple, promising God's glory will fill the second temple greater than the first." },
                { name: "Zechariah", color: BLUE, period: "520-518 BC · Post-exile", summary: "Eight night visions of restoration and messianic hope — the king coming on a donkey (9:9), thirty pieces of silver (11:12-13), piercing (12:10)." },
                { name: "Malachi", color: TEAL, period: "~450 BC · Post-exile", summary: "The last OT prophet — addressing a tired, half-hearted post-exilic community. Ends with a promise of Elijah before the great and terrible Day of the LORD." },
              ].map(p => (
                <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                    <span style={{ background: `${p.color}20`, border: `1px solid ${p.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: p.color, fontWeight: 700 }}>{p.name}</span>
                    <span style={{ color: MUTED, fontSize: 11 }}>{p.period}</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "amos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: RED, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Amos: Let Justice Roll</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: RED, fontSize: 17, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;But let justice roll down like waters, and righteousness like an ever-flowing stream.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Amos 5:24</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Amos is a shepherd from the Southern Kingdom (Tekoa, in Judah) sent to preach to the Northern Kingdom during a period of great prosperity under Jeroboam II (786-746 BC). Israel is economically booming, religiously active, and politically secure — and completely corrupt. The wealthy exploit the poor, the judges are bribed, religious festivals continue in Bethel while injustice reigns in the streets. Amos arrives as the spokesperson of a God who is angry.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Amos opens with a series of judgment oracles against the surrounding nations (Damascus, Gaza, Tyre, Edom, Ammon, Moab), each for specific atrocities. Israel hears these and approves — then Amos turns to Judah, and then to Israel itself. The most damning charges are not idolatry (though that is present) but economic injustice: selling the righteous for silver, the poor for a pair of sandals (2:6).</p>
            </div>
            {[
              { ref: "Amos 2:6-7", color: RED, title: "Israel Sells the Poor for Sandals", content: "\"They sell the righteous for silver, and the needy for a pair of sandals — they who trample the head of the poor into the dust of the earth and turn aside the way of the afflicted.\" This is the indictment at the core of Amos: economic exploitation of the poorest members of the covenant community. The covenant law (Lev 25, Deut 24) provided extensive protections for the poor — gleaning rights, debt cancellation, restrictions on pledges. The wealthy of Samaria are systematically violating these laws while maintaining their religious observances. To God, this combination is intolerable." },
              { ref: "Amos 5:21-24", color: GOLD, title: "I Hate Your Religious Festivals", content: "\"I hate, I despise your feasts, and I take no delight in your solemn assemblies... But let justice roll down like waters, and righteousness like an ever-flowing stream.\" This is not a rejection of worship — it is a rejection of worship divorced from covenant justice. God does not want their music while the poor are oppressed in the gates. Religious performance without ethical transformation is repugnant to God. The same tension runs through Isaiah 58 (true fasting vs. false fasting), the Sermon on the Mount, James 2, and 1 John 4:20." },
              { ref: "Amos 8:11-12", color: PURPLE, title: "The Famine for God's Word", content: "\"Behold, the days are coming, declares the Lord GOD, when I will send a famine on the land — not a famine of bread, nor a thirst for water, but of hearing the words of the LORD. They shall wander from sea to sea, and from north to east; they shall run to and fro, to seek the word of the LORD, but they shall not find it.\" The worst judgment God can bring on a people is silence — withdrawing his word from them. The famine of the word is worse than any material famine. In the NT, the coming of the Word-made-flesh (John 1:14) ends the famine definitively." },
              { ref: "Amos 9:11-12", color: GREEN, title: "David's Fallen Tent Restored", content: "\"In that day I will raise up the booth of David that is fallen and repair its breaches, and raise up its ruins and rebuild it as in the days of old, that they may possess the remnant of Edom and all the nations who are called by my name.\" The book ends with unexpected restoration. The fallen tent/booth of David — the dynasty that seemed ended — will be raised up, and the nations will be gathered. Acts 15:16-17 quotes this passage at the Jerusalem Council as justification for welcoming Gentiles into the church — the restoration of David's tent includes all the nations." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "hosea" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Hosea: God&apos;s Relentless Love</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: GOLD, fontSize: 16, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;When Israel was a child, I loved him, and out of Egypt I called my son... How can I give you up, O Ephraim? How can I hand you over, O Israel?&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Hosea 11:1, 8</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Hosea is commanded by God to marry a woman who will be unfaithful to him — a marriage that becomes a living parable of God&apos;s relationship with Israel. Gomer (Hosea&apos;s wife) leaves, pursues other men, and ends up enslaved. Hosea buys her back (chapter 3) — a dramatic enactment of God&apos;s covenant love that persists even when Israel chases after the Baals.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Hosea introduces one of the OT&apos;s most important theological concepts: hesed — often translated &ldquo;steadfast love,&rdquo; &ldquo;lovingkindness,&rdquo; or &ldquo;covenant faithfulness.&rdquo; This is the word Jesus echoes in Matthew 9:13 and 12:7 when he quotes Hosea 6:6: &ldquo;I desire mercy (hesed) and not sacrifice.&rdquo;</p>
            </div>
            {[
              { ref: "Hosea 1-3", color: GOLD, title: "The Marriage Metaphor", content: "God tells Hosea to marry Gomer, a woman who proves unfaithful. She leaves, and Hosea pursues and redeems her (3:1-3), instructed to love her as 'the LORD loves the children of Israel, though they turn to other gods.' The metaphor is deliberately shocking — God's relationship with Israel is intimate, personal, and grieving. Israel's worship of Baal (a fertility deity) is not theological error — it is adultery. The covenant is a marriage, and unfaithfulness is betrayal at the deepest personal level." },
              { ref: "Hosea 6:6", color: TEAL, title: "I Desire Mercy, Not Sacrifice", content: "\"For I desire steadfast love (hesed) and not sacrifice, the knowledge of God rather than burnt offerings.\" This verse is quoted by Jesus twice (Matt 9:13, 12:7) as the interpretive key for understanding his ministry. It does not oppose ritual worship per se but insists that the inner reality (hesed — covenant faithfulness, steadfast love) is the point of which external ritual is the sign. When the sign is present without the reality, God's prophets denounce it." },
              { ref: "Hosea 11:1-4", color: PURPLE, title: "Out of Egypt I Called My Son", content: "\"When Israel was a child, I loved him, and out of Egypt I called my son.\" This is arguably the tenderest image of God in the minor prophets. God speaks as a parent who taught Israel to walk, held their hands, lifted them to his cheek. Matthew 2:15 applies this verse to Jesus' return from Egypt — reading Jesus as the true Israel, the Son who recapitulates Israel's story and succeeds where Israel failed. The original exile from Egypt becomes a type of the incarnation: God's Son called out of Egypt." },
              { ref: "Hosea 14:4-7", color: GREEN, title: "I Will Heal Their Unfaithfulness", content: "\"I will heal their apostasy; I will love them freely, for my anger has turned from them. I will be like the dew to Israel; he shall blossom like the lily; he shall take root like the trees of Lebanon.\" The book ends not in judgment but in extravagant restoration — the metaphors pile up: dew, lily, Lebanon cedar, fragrant cedar, wine. God's love is not exhausted by Israel's unfaithfulness. This is the theodramatic hinge at the heart of the gospel: the God who should abandon his unfaithful people chooses instead to heal and restore them." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "micah" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Micah: Justice, Mercy, and Humility</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: TEAL, fontSize: 17, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Micah 6:8 — arguably the greatest summary of covenant ethics in the OT</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Micah is a contemporary of Isaiah, prophesying to Judah in the 8th century BC. He brings together two concerns that might seem separate: justice for the poor and messianic hope for the future. He condemns corrupt leaders, unjust merchants, and false prophets — while simultaneously offering some of the most remarkable messianic promises in the OT: the ruler from Bethlehem (5:2), the nations streaming to Jerusalem (4:1-3), swords beaten into plowshares (4:3).</p>
            </div>
            {[
              { ref: "Micah 5:2", color: BLUE, title: "Out of Bethlehem — The Ruler", content: "\"But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days.\" This is the text the chief priests and scribes cite when Herod asks where the Messiah is to be born (Matt 2:4-6). The ruler comes from the smallest, most insignificant place — Bethlehem, the town of David, too small to be counted among the clans of Judah. The gospel's pattern of the least becoming greatest, the small becoming significant, runs deep in Scripture." },
              { ref: "Micah 6:1-8", color: TEAL, title: "The LORD's Controversy with Israel", content: "Micah 6 is structured as a covenant lawsuit — God takes Israel to court, with the mountains as witnesses. He asks: 'What have I done to you? How have I wearied you? Answer me.' He recalls the Exodus, Balaam, the crossing of the Jordan. Israel asks what sacrifice could appease God — thousands of rams? Ten thousand rivers of oil? Shall I give my firstborn? The answer is stunning in its simplicity: you already know what God requires. Justice. Mercy. Humility. Not sacrifice but character." },
              { ref: "Micah 6:8 analyzed", color: GOLD, title: "Three Dimensions of Covenant Life", content: "Do justice (mishpat) — active, concrete, costly engagement with making right what is wrong in the social order. Love mercy/kindness (hesed) — the covenant faithfulness that binds people together in committed love. Walk humbly with your God (hatznea lechet) — literally 'to walk quietly/carefully with your God,' a posture of humility and attentiveness before the God who made you. The three dimensions are inseparable: you cannot walk humbly with God while ignoring his demand for justice; you cannot do justice without the hesed that motivates it." },
              { ref: "Micah 7:18-19", color: GREEN, title: "Who Is a God Like You?", content: "\"Who is a God like you, pardoning iniquity and passing over transgression for the remnant of his inheritance? He does not retain his anger forever, because he delights in steadfast love. He will again have compassion on us; he will tread our iniquities underfoot. You will cast all our sins into the depths of the sea.\" The book ends with a meditation on the character of God — the God whose name means 'Who is like the LORD?' The final image — sins cast into the depths of the sea — is one of the Bible's most beautiful pictures of total forgiveness." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "jonah" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Jonah: The Reluctant Prophet</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Jonah is one of the most theologically subversive books in the OT — and it has been domesticated into a children&apos;s story about a fish. The fish is almost incidental. The book is really about a prophet who despises the people he is sent to, runs from his calling, reluctantly obeys, and then is furious when God shows mercy to Israel&apos;s enemies. It is a book about the scope of divine mercy — and about the ugliness of selective compassion.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Nineveh was the capital of Assyria — the brutal empire that would destroy the Northern Kingdom in 722 BC. Jonah would have known this. He does not want to go to Nineveh because he does not want God to save Nineveh. He flees — and the book demolishes every attempt to contain God&apos;s mercy within Israel&apos;s borders. Jesus cites Jonah twice: his three days in the fish as a sign of the resurrection (Matt 12:40), and the repentance of Nineveh as a rebuke to his unrepentant generation (Matt 12:41).</p>
            </div>
            {[
              { ref: "Jonah 1", color: BLUE, title: "Running from God", content: "\"But Jonah rose to flee to Tarshish from the presence of the LORD.\" Tarshish is the opposite direction from Nineveh — as far west as Jonah can go. This is the ancient absurdity of fleeing from the God who made the sea and the dry land. A storm arises; the pagan sailors (interestingly portrayed with sympathy and genuine fear of God) discover Jonah is the source of the trouble. Jonah confesses and instructs them to throw him overboard. They do — reluctantly, and with prayer. A great fish swallows Jonah. The sailors make vows to the LORD (1:16). God's purposes advance even through the prophet's disobedience." },
              { ref: "Jonah 2", color: PURPLE, title: "Prayer from the Belly", content: "Jonah's prayer from inside the fish is a pastiche of Psalm language — echoing multiple psalms of lament and deliverance. This is striking: a prophet who is fleeing God prays his most authentic prayer at the bottom of the sea, in the belly of a fish. 'Salvation belongs to the LORD!' (2:9) is the theological climax of the prayer — before the fish vomits him onto dry land. The belly of the fish is simultaneously Jonah's grave and the place of his rebirth: a pattern Jesus explicitly connects to his own death and resurrection." },
              { ref: "Jonah 3", color: GREEN, title: "Nineveh Repents", content: "Jonah preaches the shortest, least enthusiastic sermon in Scripture: 'Yet forty days, and Nineveh shall be overthrown!' (3:4). No call to repentance; no offer of mercy; no gospel. Just doom. And yet — the whole city repents, from the king to the cattle. 'When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them' (3:10). The most reluctant prophet produces the most dramatic revival in Scripture. God's word is effective regardless of the prophet's heart." },
              { ref: "Jonah 4", color: GOLD, title: "Angry That God Is Good", content: "\"But it displeased Jonah exceedingly, and he was angry.\" When Nineveh is spared, Jonah is furious — and reveals his true motive for fleeing: 'I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster' (4:2). He is quoting Exodus 34:6-7 as a complaint. God is too gracious. God cares too widely. The book ends with God's question left unanswered: 'Should I not pity Nineveh, that great city, in which there are more than 120,000 persons...?' The reader — and the church — must sit with that question." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "habakkuk" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Habakkuk: Wrestling with God&apos;s Justice</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: PURPLE, fontSize: 16, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;The righteous shall live by his faith.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Habakkuk 2:4 — the verse quoted by Paul in Romans 1:17, Galatians 3:11, and Hebrews 10:38</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Habakkuk is unique among the prophets: instead of delivering God&apos;s word to the people, he conducts a dialogue with God about injustice. The book opens with the prophet&apos;s complaint — why is God allowing injustice to go unpunished in Judah? God responds: he is raising up the Babylonians to bring judgment. This horrifies Habakkuk even more: how can God use an even more wicked nation as his instrument of judgment?</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The book is a masterclass in what honest theological wrestling with God looks like — and it legitimizes the questions rather than suppressing them. It is the Job of the minor prophets. Its climax is one of the most extraordinary declarations of faith in Scripture: even if everything material fails, &ldquo;yet I will rejoice in the LORD; I will take joy in the God of my salvation&rdquo; (3:17-18).</p>
            </div>
            {[
              { ref: "Hab 1:2-4", color: RED, title: "How Long, O LORD?", content: "\"O LORD, how long shall I cry for help, and you will not hear? Or cry to you 'Violence!' and you will not save? Why do you make me see iniquity, and why do you idly look at wrong? Destruction and violence are before me; strife and contention arise.\" Habakkuk opens with raw complaint — unanswered prayer, unaddressed injustice. This is not faithlessness; it is the ancient language of lament, directed at the God who is responsible for the world's order. The legitimacy of this complaint is affirmed by the entire book's structure: God does not rebuke Habakkuk for asking, he answers him." },
              { ref: "Hab 1:12-13", color: BLUE, title: "How Can You Use Babylon?", content: "God's first answer — raising up Babylon as instrument of judgment — prompts a second, deeper complaint: You are of purer eyes than to see evil and cannot look at wrong; why do you idly look at traitors and remain silent when the wicked swallows up the man more righteous than he? Habakkuk is grappling with the problem that Paul will later address in Romans 3:1-8: if God uses human sin to accomplish his purposes, does that not make the whole project morally incoherent? The prophet asks the question that only the cross can fully answer." },
              { ref: "Hab 2:4", color: GOLD, title: "The Righteous Shall Live by Faith", content: "\"Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith (emunah).\" God's second answer includes this compressed declaration that becomes one of the NT's most important OT quotations. Romans 1:17 builds an entire theology of justification from it. Galatians 3:11 uses it to contrast faith with works of the law. Hebrews 10:38 applies it to persevering faith under persecution. The Hebrew emunah means faithfulness, steadfastness, reliability — trust expressed over time. The righteous person lives by trusting God's faithfulness even when circumstances are inexplicable." },
              { ref: "Hab 3:17-19", color: PURPLE, title: "Yet I Will Rejoice", content: "\"Though the fig tree should not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food, the flock be cut off from the fold and there be no herd in the stalls, yet I will rejoice in the LORD; I will take joy in the God of my salvation.\" This is perhaps the most extraordinary declaration of unconditional faith in the entire OT. Every material basis for joy is stripped away — fig tree, vine, olive, field, flock, herd. In the total absence of earthly blessing, Habakkuk declares joy in God alone. He is not rejoicing in circumstances; he is rejoicing in the God of his salvation." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "themes" && (
          <div>
            {THEMES.map(t => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{t.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Minor Prophets Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record what you&apos;re learning from Amos, Hosea, Micah, Jonah, Habakkuk, and the other minor prophets.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Passage</label><textarea rows={2} value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Amos 5:24, Hosea 6:6, Micah 6:8, Jonah 4:2, Habakkuk 3:17-19" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Reflection</label><textarea rows={4} value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What does this prophet say about God's justice, love, or purposes? What does it mean for your life?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Prayer response</label><textarea rows={3} value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="How are you praying in response to these prophetic words?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <button type="button" onClick={saveEntry} style={{ alignSelf: "flex-start", background: TEAL, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{jSaved ? "Saved ✓" : "Save Entry"}</button>
              </div>
            </div>
            {jEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {jEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}><span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span><button type="button" onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button></div>
                    {e.verse && <div style={{ marginBottom: 8 }}><span style={{ color: GOLD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Passage</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.verse}</p></div>}
                    {e.reflection && <div style={{ marginBottom: 8 }}><span style={{ color: TEAL, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Reflection</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.reflection}</p></div>}
                    {e.prayer && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Prayer</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.prayer}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on the Minor Prophets</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Sermons and overviews on Amos, Hosea, Micah, Jonah, Habakkuk, and the prophetic tradition.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "Fo0oO_wvNTs", title: "The Book of Amos Overview", channel: "BibleProject", description: "BibleProject's animated overview of Amos — the shepherd-prophet from Tekoa, his oracles against the nations, the thundering call for justice, and the surprising restoration at the end." },
                  { videoId: "v16UjNLFwNs", title: "Hosea: God's Relentless Love", channel: "BibleProject", description: "BibleProject on Hosea — the marriage metaphor, Gomer's unfaithfulness as Israel's idolatry, and God's extraordinary hesed that pursues and redeems even the unfaithful spouse." },
                  { videoId: "nVNKjuXfFr8", title: "Micah 6:8 — Justice, Mercy, Humility", channel: "Tim Keller", description: "Keller unpacking the three dimensions of Micah 6:8 — what it means to do justice, love mercy, and walk humbly with God, and why these three cannot be separated." },
                  { videoId: "bJl7lXVIVQs", title: "Jonah: The Reluctant Prophet", channel: "Gospel Coalition", description: "The book of Jonah as a story about the scope of God's mercy — why Jonah ran, what the fish means, why Nineveh's repentance matters, and the question the book leaves open." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: TEAL, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
