"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SERIF = "var(--font-cormorant, Georgia, serif)";

type Phrase = {
  id: string;
  phrase: string;
  ref: string;
  color: string;
  icon: string;
  meaning: string;
  depth: string;
  fathers: string;
};

const PHRASES: Phrase[] = [
  {
    id: "father",
    phrase: "Our Father in heaven",
    ref: "Matthew 6:9",
    color: "#F59E0B",
    icon: "👑",
    meaning: "Jesus invites us to approach God not as a distant deity but as 'Father' — in Aramaic, Abba, a word of intimate trust (Romans 8:15; Galatians 4:6). This was startling: Jewish prayer rarely addressed God so personally. Yet 'our' makes the prayer communal — we never pray alone but as members of a family — and 'in heaven' guards against over-familiarity, reminding us this Father is the transcendent, sovereign God of the universe. Intimacy and reverence are held together in three words.",
    depth: "The opening establishes the foundation of all prayer: relationship. Before any petition, we are reminded who God is to us. 'Our Father' tells us we are adopted children with access; 'in heaven' tells us we address One of infinite majesty and power who is able to answer. The combination dismantles both servile fear and casual presumption.",
    fathers: "Tertullian called the Lord's Prayer 'a summary of the whole gospel,' and noted that to call God 'Father' is also to acknowledge the Son, for no one comes to the Father except through him. Cyprian observed that we say 'our,' not 'my' — 'we do not pray for one alone, but for the whole people, because we, the whole people, are one.' Augustine taught that calling God 'Father' should stir us to live as his children, ashamed to dishonor so great a Father.",
  },
  {
    id: "hallowed",
    phrase: "Hallowed be your name",
    ref: "Matthew 6:9",
    color: "#8B5CF6",
    icon: "✨",
    meaning: "To 'hallow' is to treat as holy, to sanctify, to set apart as sacred. In Hebrew thought a person's 'name' is their revealed character and reputation. This first petition asks that God's name — his very being and renown — be honored, revered, and glorified throughout the earth. It is striking that the prayer's first request is not for our needs but for God's glory. Before we ask anything for ourselves, we ask that he be exalted.",
    depth: "God's name is already perfectly holy in itself; we cannot make it more so. So this petition asks that his holiness be recognized and honored — in us, and through us, and in all the world. It reorders our priorities: God's glory comes first. As Luther's catechism puts it, we pray 'that it may be holy among us also,' which happens when God's Word is taught truly and we live as his children.",
    fathers: "Augustine explained that the petition does not ask that God become holy — he is eternally holy — but 'that his name may be held holy by men,' that his holiness might be acknowledged and not despised. Chrysostom said that to pray this rightly is to ask that we live such lives that through us God is glorified, recalling Jesus' words: 'Let your light shine before others, so that they may glorify your Father.'",
  },
  {
    id: "kingdom",
    phrase: "Your kingdom come",
    ref: "Matthew 6:10",
    color: "#3a7d56",
    icon: "🌍",
    meaning: "The kingdom of God is the reign and rule of God — his sovereign, saving authority breaking into the world through Jesus. To pray 'your kingdom come' is to ask for the advance of God's rule: in our own hearts now, in the church, in the spread of the gospel, and ultimately in the consummation when Christ returns and 'the kingdom of the world has become the kingdom of our Lord' (Revelation 11:15). It is a prayer of longing for the day when every rival rule is overthrown.",
    depth: "The petition has a present and a future dimension. We pray that God's reign would come now — that more hearts would bow to him, that his church would grow, that injustice would yield to his righteous rule. And we pray maranatha — 'Come, Lord Jesus' (Revelation 22:20) — for the full and final coming of the kingdom. To pray it sincerely is to enlist in the kingdom's work and to surrender our own competing kingdoms.",
    fathers: "Tertullian noted that we are really praying for the hastening of God's will and the end of the age — that his kingdom would be fully realized. Cyprian connected the coming kingdom with Christ himself: 'It may be that the kingdom of God whose coming we ask to be hastened is Christ himself, whom we daily desire to come.' Augustine cautioned that we pray not to bring about something that would not otherwise happen, but to align our desire with God's certain purpose.",
  },
  {
    id: "will",
    phrase: "Your will be done, on earth as it is in heaven",
    ref: "Matthew 6:10",
    color: "#3B82F6",
    icon: "🕊️",
    meaning: "Having prayed for God's name and kingdom, we now pray for his will — that what God desires would be accomplished. The standard is staggering: 'as it is in heaven,' where the angels do his bidding instantly, joyfully, and completely. We ask that the same perfect obedience would mark the earth, beginning with us. It is a prayer of surrender, echoing Jesus in Gethsemane: 'not my will, but yours, be done' (Luke 22:42).",
    depth: "This petition teaches submission. We bring our requests, but we subordinate them to God's wisdom and purpose. It is not resignation but trust — believing that what God wills is best, even when it differs from what we want. To pray it is to lay down our self-will. The three 'your' petitions (name, kingdom, will) all put God first, training us to desire his glory above our own comfort.",
    fathers: "Cyprian beautifully interpreted 'on earth as in heaven' as a prayer for the union of body and soul: that as God's will is done in heaven (the spirit), so it may be done on earth (the flesh). Augustine read it as a prayer that God's will be done in the church (those still on earth) as it is in the saints already perfected (in heaven). Chrysostom marveled that Jesus teaches us to seek nothing less than angelic obedience.",
  },
  {
    id: "bread",
    phrase: "Give us this day our daily bread",
    ref: "Matthew 6:11",
    color: "#10B981",
    icon: "🍞",
    meaning: "After three petitions for God's glory, the prayer turns to our needs — and begins with the most basic: bread. This is permission to bring ordinary, physical needs to God. The Greek word epiousios ('daily') is rare and difficult — it may mean 'bread for today,' 'bread for tomorrow,' or 'necessary bread' — but the thrust is clear: we ask God for our needs one day at a time, like Israel gathering manna each morning (Exodus 16), trusting him afresh rather than hoarding.",
    depth: "The petition teaches dependence and contentment. We ask for 'daily' bread, not abundance or surplus — enough for today. 'Give us' acknowledges that even what we earn is ultimately gift. It also stretches us beyond ourselves: 'our' bread reminds us to pray for the needs of others and to share. Many of the church fathers also saw a deeper layer — that Christ himself, the Bread of Life (John 6), and the bread of the Eucharist, are our truest daily sustenance.",
    fathers: "Cyprian and others took 'daily bread' in two senses at once: literal bread for the body, and Christ the Bread of Life for the soul — received especially in the Eucharist. Augustine listed three meanings: necessary food, the sacrament of the altar, and the Word of God on which we daily feed. Chrysostom stressed the word 'daily,' teaching that Jesus deliberately curbs excessive anxiety about the future by training us to ask only for what the present day requires.",
  },
  {
    id: "forgive",
    phrase: "And forgive us our debts, as we also have forgiven our debtors",
    ref: "Matthew 6:12",
    color: "#EC4899",
    icon: "🤍",
    meaning: "Sin is pictured as a 'debt' we owe to God — an obligation we cannot pay. We ask God to cancel that debt, to forgive freely on the basis of Christ's atoning work. But the petition contains a sobering condition: 'as we also have forgiven our debtors.' Our willingness to forgive others is the evidence that we have truly received God's forgiveness; the two are inseparable, as Jesus underscores immediately after the prayer (Matthew 6:14–15) and in the parable of the unforgiving servant (Matthew 18:23–35).",
    depth: "This is the only petition Jesus comments on after the prayer, signaling its weight. He is not teaching that we earn forgiveness by forgiving — forgiveness is grace — but that a heart truly forgiven becomes a forgiving heart. To refuse to forgive while claiming God's forgiveness exposes a contradiction. The petition also keeps us humble: we come daily as debtors, never graduating from our need for mercy.",
    fathers: "Augustine called this the petition that 'wipes out the daily faults' of believers and warned that whoever refuses to forgive prays this clause to their own condemnation. Cyprian noted that by tying our forgiveness to our forgiving, Christ leaves us no excuse for bitterness — we cut ourselves off from mercy if we withhold it. Chrysostom marveled at the mercy: God makes the remedy depend on us, putting the power of pardon in our own hands.",
  },
  {
    id: "temptation",
    phrase: "And lead us not into temptation",
    ref: "Matthew 6:13",
    color: "#F97316",
    icon: "🛡️",
    meaning: "This petition asks God to keep us from situations of testing and temptation that would overwhelm us, and to guard us from the trials that lead to sin. Since 'God cannot be tempted with evil, and he himself tempts no one' (James 1:13), the prayer is not asking God to stop doing something he never does. Rather, in the idiom of Scripture, it asks: 'Do not let us be led into temptation; do not abandon us to the test.' It is a confession of weakness and a plea for divine protection.",
    depth: "The petition cultivates humility about our own frailty. We do not presume on our strength; we ask not to be brought to the point of trial where we might fall. It pairs with Jesus' counsel in Gethsemane: 'Watch and pray that you may not enter into temptation' (Matthew 26:41). And it carries an implicit confidence: 'God is faithful, and he will not let you be tempted beyond your ability' (1 Corinthians 10:13).",
    fathers: "Tertullian explained the sense as 'do not allow us to be led into temptation by the tempter,' since it is the devil, not God, who tempts. Cyprian taught that the petition shows 'that the adversary can do nothing against us unless God first permits it,' so we ask God to withhold that permission. Augustine distinguished being 'tempted' (which can prove and strengthen us) from being 'led into' temptation — that is, overcome by it — and it is the latter we pray to be spared.",
  },
  {
    id: "deliver",
    phrase: "But deliver us from evil",
    ref: "Matthew 6:13",
    color: "#6366F1",
    icon: "⚔️",
    meaning: "The final petition asks for rescue 'from evil' — or, as the Greek (apo tou ponērou) may better read, 'from the evil one,' the devil himself. It is the positive counterpart to the previous request: not only 'keep us from the test' but 'rescue us from the grip of evil and the enemy.' It acknowledges that we are in a spiritual battle and that our deliverance comes from God alone. It echoes Jesus' high-priestly prayer: 'keep them from the evil one' (John 17:15).",
    depth: "Where the previous petition is preventive, this one is rescuing — a cry for God to deliver us from all the power of sin, the world, and the devil. It ends the prayer on a note of dependence: from beginning ('Our Father') to end ('deliver us'), we are utterly reliant on God. It also looks to the final deliverance, when God will rescue his people from all evil forever.",
    fathers: "Cyprian noted that when we have asked God's protection from evil, 'there remains nothing further to be asked' — every need is covered. Augustine taught that in praying for deliverance from evil, believers ask to be freed from every evil, present and to come, and that this petition fittingly concludes the prayer because in escaping evil we enter into every good. Chrysostom saw here a call to recognize the reality of the 'wicked one' and to depend wholly on God for victory.",
  },
  {
    id: "doxology",
    phrase: "For yours is the kingdom and the power and the glory forever. Amen",
    ref: "Matthew 6:13 (later manuscripts)",
    color: "#EAB308",
    icon: "🎺",
    meaning: "The closing doxology — ascribing the kingdom, the power, and the glory to God forever — does not appear in the earliest Greek manuscripts of Matthew, which is why many modern translations footnote it. It likely entered the text from very early liturgical use, drawing on David's prayer in 1 Chronicles 29:11: 'Yours, O LORD, is the greatness and the power and the glory.' Whatever its textual history, it forms a fitting, scripturally rooted conclusion that returns the prayer to where it began — with God's glory.",
    depth: "The doxology grounds every petition in the character of God. Why can we ask for daily bread, forgiveness, and deliverance? Because 'yours is the kingdom' (he reigns), 'the power' (he is able), and 'the glory' (it is for his honor). It is the answer to all our asking: God can do it, God will do it, and it will redound to his glory. 'Amen' — 'so be it' — seals the prayer in faith.",
    fathers: "Early liturgies, including the Didache (a first- or second-century church manual), already attach a doxology to the prayer, showing how naturally the church concluded the Lord's Prayer with praise. The reformers, while recognizing it as likely a later addition to the text, retained it as a fitting and biblically grounded conclusion. It teaches the church to end prayer as it begins — fixed on the majesty of God.",
  },
];

type Tab = "overview" | "phrase" | "howto" | "journal" | "videos";

const HOWTO = [
  {
    title: "A Pattern, Not Only a Formula",
    ref: "Matthew 6:9",
    body: "Jesus introduces the prayer with 'Pray then like this' (Matthew 6:9) — in Luke 11:2 he says 'When you pray, say.' So the Lord's Prayer is both: a prayer to be prayed word-for-word and a pattern to shape all our praying. Use it both ways. Recite it slowly and thoughtfully as Jesus' own words on your lips; and use its structure as a scaffold for extended prayer, pausing at each petition to fill it with your own concerns. It is a trellis on which the vine of your prayer can grow.",
  },
  {
    title: "Praise Before Petition",
    ref: "Matthew 6:9–10",
    body: "Notice the order. Before a single request for ourselves, three petitions are aimed at God: his name, his kingdom, his will. Jesus is teaching us to begin prayer by lifting our eyes to God — adoring him, longing for his glory, surrendering to his purposes — before we descend to our own needs. This order reorders the heart: it cures the self-centeredness that turns prayer into a wish list and places our requests in their proper, God-glorifying context.",
  },
  {
    title: "Pray as 'We,' Not Just 'I'",
    ref: "Matthew 6:11–12",
    body: "Every petition is plural: our Father, our bread, our debts, lead us, deliver us. There is no 'I' or 'me' in the Lord's Prayer. Even in private, Jesus teaches us to pray as members of a family, carrying others before God. Let this shape your praying: when you ask for daily bread, remember the hungry; when you seek forgiveness, intercede for those who have wronged you and those who need grace; when you cry for deliverance, pray for the whole persecuted and tempted church.",
  },
  {
    title: "Use It to Examine Your Heart",
    ref: "Matthew 6:12, 14–15",
    body: "The Lord's Prayer is a mirror. Praying 'hallowed be your name' asks whether God is truly first in your affections. 'Your will be done' surfaces the places you are still clinging to your own will. 'Forgive us as we forgive' forces you to name the grudges you are holding. Pray each line slowly enough to let it search you, and let the Spirit convict, cleanse, and realign your heart as you go.",
  },
  {
    title: "Pray It Slowly and Daily",
    ref: "Luke 11:1",
    body: "The disciples asked, 'Lord, teach us to pray' (Luke 11:1), and this is his answer. The early church prayed it three times a day (the Didache instructs exactly this). Make it a daily anchor. Resist rushing; the familiarity that lets us recite it from memory can also let us race past its depths. Slow down. Breathe between petitions. Let each phrase open into meditation. Familiarity should deepen, not dull, the prayer.",
  },
  {
    title: "Let It End in Worship",
    ref: "Matthew 6:13",
    body: "However we account for the doxology's text history, ending in praise — 'yours is the kingdom and the power and the glory forever' — is profoundly fitting. We bring our needs, then we lift our eyes again to the One who is able to meet them. Close your praying by returning adoration to God, sealing your requests with 'Amen' — an act of faith that says, 'Let it be so,' resting your petitions in his sovereign, glorious, and good hands.",
  },
];

export default function LordsPrayerPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_lords-prayer_tab", "overview");
  const [selected, setSelected] = usePersistedState("vine_lords-prayer_selected", "father");

  const phrase = PHRASES.find((p) => p.id === selected)!;

  const [lpEntries, setLpEntries] = useState<{ id: string; date: string; phrase: string; received: string; prayer: string }[]>(() => {
    try { const s = localStorage.getItem("vine_lp_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [lpForm, setLpForm] = useState({ phrase: "Our Father", received: "", prayer: "" });
  const [lpSaved, setLpSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_lp_entries", JSON.stringify(lpEntries)); }, [lpEntries]);
  function saveLpEntry() {
    if (!lpForm.received.trim() && !lpForm.prayer.trim()) return;
    setLpEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...lpForm }, ...prev]);
    setLpForm({ phrase: "Our Father", received: "", prayer: "" });
    setLpSaved(true); setTimeout(() => setLpSaved(false), 2000);
  }
  function deleteLpEntry(id: string) { setLpEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>
        <header style={{ textAlign: "center", padding: "48px 0 36px" }}>
          <span style={{ display: "inline-block", background: `${PURPLE}22`, color: PURPLE, border: `1px solid ${PURPLE}55`, padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", marginBottom: 18 }}>
            Matthew 6:9–13
          </span>
          <h1 style={{ fontFamily: SERIF, fontSize: 52, fontWeight: 700, lineHeight: 1.05, margin: "0 0 14px" }}>
            The Lord&apos;s Prayer
          </h1>
          <p style={{ color: MUTED, fontSize: 18, maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            The prayer Jesus taught his disciples — &ldquo;a summary of the whole gospel,&rdquo; as Tertullian called it. Studied phrase by phrase, with the wisdom of the church fathers, as a pattern for all our praying.
          </p>
          <blockquote style={{ fontFamily: SERIF, fontStyle: "italic", color: TEXT, fontSize: 21, maxWidth: 720, margin: "28px auto 0", lineHeight: 1.65 }}>
            &ldquo;Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from evil.&rdquo;
            <span style={{ display: "block", fontFamily: "system-ui, sans-serif", fontStyle: "normal", color: PURPLE, fontSize: 13, fontWeight: 700, marginTop: 10 }}>— Matthew 6:9–13</span>
          </blockquote>
        </header>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "overview" as const, label: "Overview", icon: "📖" },
            { id: "phrase" as const, label: "Phrase by Phrase", icon: "🔍" },
            { id: "howto" as const, label: "How to Pray It", icon: "🙏" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map((t) => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginTop: 0, marginBottom: 12 }}>The Prayer Jesus Taught</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                The Lord&apos;s Prayer appears in two forms: a fuller version in the Sermon on the Mount (Matthew 6:9–13), given as a model against the empty, wordy prayers of the hypocrites and pagans, and a shorter version in Luke 11:1–4, given when a disciple asked, &ldquo;Lord, teach us to pray.&rdquo; It is the most prayed prayer in human history, recited by Christians across every tradition and tongue for two thousand years.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                Its structure is deliberate. After addressing God as Father, it offers three God-centered petitions (his name, his kingdom, his will), then three human-centered petitions (bread, forgiveness, deliverance from temptation and evil). It teaches us not only the words to say but the priorities to hold: God&apos;s glory first, our needs in their place, and everything resting on the character of the Father.
              </p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginTop: 0, marginBottom: 12 }}>&ldquo;A Summary of the Whole Gospel&rdquo;</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                The early church treasured this prayer as a compact gospel. Tertullian wrote a treatise on it (c. 200 AD), as did Cyprian and Origen; Augustine and Chrysostom preached on it at length; the <span style={{ fontStyle: "italic" }}>Didache</span> instructed believers to pray it three times daily. Every great catechism — Luther&apos;s, the Heidelberg, the Westminster — expounds it line by line. In nine short petitions it contains the whole of theology: who God is, what he is doing in the world, and what we may rightly ask of him.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
              {PHRASES.map((p) => (
                <button type="button" key={p.id} onClick={() => { setSelected(p.id); setActiveTab("phrase"); }}
                  style={{ textAlign: "left", background: BG, border: `1px solid ${p.color}40`, borderRadius: 12, padding: 16, cursor: "pointer" }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{p.icon}</div>
                  <div style={{ color: p.color, fontWeight: 700, fontSize: 14, lineHeight: 1.35, fontFamily: SERIF }}>{p.phrase}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === "phrase" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ width: 250, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {PHRASES.map((p) => (
                <button type="button" key={p.id} onClick={() => setSelected(p.id)}
                  style={{ width: "100%", background: selected === p.id ? `${p.color}18` : "transparent", border: `1px solid ${selected === p.id ? p.color + "70" : BORDER}`, borderRadius: 10, padding: "10px 12px", cursor: "pointer", textAlign: "left", display: "flex", gap: 9, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{p.icon}</span>
                  <span style={{ color: selected === p.id ? p.color : MUTED, fontWeight: 600, fontSize: 12, lineHeight: 1.4, fontFamily: SERIF }}>{p.phrase}</span>
                </button>
              ))}
            </div>

            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${phrase.color}35`, borderRadius: 16, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 32 }}>{phrase.icon}</span>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{phrase.ref}</span>
                </div>
                <h2 style={{ color: phrase.color, fontWeight: 800, fontSize: 24, margin: "0 0 22px", fontFamily: SERIF, lineHeight: 1.25 }}>&ldquo;{phrase.phrase}&rdquo;</h2>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8, letterSpacing: 0.5 }}>THE MEANING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{phrase.meaning}</p>
                </div>

                <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 20 }}>
                  <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 12, marginBottom: 8, letterSpacing: 0.5 }}>THEOLOGICAL DEPTH</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{phrase.depth}</p>
                </div>

                <div style={{ background: `${PURPLE}0C`, border: `1px solid ${PURPLE}25`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8, letterSpacing: 0.5 }}>THE CHURCH FATHERS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{phrase.fathers}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "howto" && (
          <div>
            {HOWTO.map((h, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{h.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{h.ref}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: 0 }}>{h.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Praying the Lord's Prayer slowly — phrase by phrase — is one of the oldest methods of Christian prayer. Record what each phrase opens up for you.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 18 }}>Lord's Prayer Journal</h3>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Phrase I am dwelling on</label>
                <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                  {["Our Father", "Hallowed be your name", "Your kingdom come", "Daily bread", "Forgive our debts", "Deliver us from evil"].map(p => (
                    <button type="button" key={p} onClick={() => setLpForm(f => ({ ...f, phrase: p }))}
                      style={{ padding: "6px 12px", borderRadius: 20, border: `1px solid ${lpForm.phrase === p ? PURPLE : BORDER}`, background: lpForm.phrase === p ? `${PURPLE}20` : "transparent", color: lpForm.phrase === p ? PURPLE : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>What it opened up today</label>
                <textarea value={lpForm.received} onChange={e => setLpForm(f => ({ ...f, received: e.target.value }))} rows={3}
                  placeholder="What did you notice, receive, or confess as you sat with this phrase?"
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>My prayer from it</label>
                <textarea value={lpForm.prayer} onChange={e => setLpForm(f => ({ ...f, prayer: e.target.value }))} rows={2}
                  placeholder="Let the phrase become your prayer..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveLpEntry}
                style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: GREEN, color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                {lpSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {lpEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Prayer Journal ({lpEntries.length})</h3>
                {lpEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 12, position: "relative" }}>
                    <button type="button" onClick={() => deleteLpEntry(e.id)}
                      style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 16 }}>×</button>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                      <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{e.phrase}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                    </div>
                    {e.received && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: "0 0 6px" }}>{e.received}</p>}
                    {e.prayer && <p style={{ color: GREEN, fontSize: 13, fontStyle: "italic", margin: 0 }}>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {activeTab === "videos" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginTop: 0, marginBottom: 8 }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 22, lineHeight: 1.7 }}>
              Teachings and expositions on the Lord&apos;s Prayer, petition by petition.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { videoId: "krxcqH522uo", title: "The Lord's Prayer Explained", channel: "The Bible Project", description: "An overview of the Lord's Prayer in its Sermon on the Mount context, walking through its structure and meaning." },
                { videoId: "KRsuCQe7aVk", title: "Teach Us to Pray — Matthew 6", channel: "John Piper / Desiring God", description: "John Piper expounds the model prayer Jesus gave, petition by petition, as a pattern for God-glorifying prayer." },
                { videoId: "52ZXFH1wzc8", title: "How to Pray the Lord's Prayer", channel: "Tim Keller Sermons", description: "Tim Keller teaches on using the Lord's Prayer as a framework for daily prayer and heart examination." },
                { videoId: "5vp9hV8bOjk", title: "The Lord's Prayer and the Church Fathers", channel: "Bible Teaching", description: "A study drawing on Tertullian, Cyprian, Augustine, and Chrysostom to unfold the depth of each petition." },
              ].map((v) => (
                <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, margin: "0 0 4px" }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, margin: "0 0 6px" }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
