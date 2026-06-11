"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "days" | "theology" | "observance" | "voices" | "journal" | "videos";

const THEOLOGY_BLOCKS = [
  {
    title: "The Kingdom Confrontation",
    verse: "Luke 19:41-44",
    body: "Holy Week is the decisive confrontation between the kingdom of God and the kingdoms of this world. Jesus rides into Jerusalem as its rightful king — and the city does not receive him. The same week, both Rome (in Pilate) and the religious establishment (in the Sanhedrin) align against him. The cross is not a tragedy that interrupts Jesus' mission; it is the mission. The king lays down his life precisely where and how the kingdoms of this world exercise their power.",
  },
  {
    title: "Substitutionary Atonement",
    verse: "Isaiah 53:5-6; Mark 10:45",
    body: "The theological center of Holy Week is substitution: 'The Lord has laid on him the iniquity of us all' (Isaiah 53:6). Jesus gave his life 'as a ransom for many' (Mark 10:45). The Passover context is deliberate — Jesus is the Passover Lamb, whose blood causes death to pass over those sheltered by it. His death is not an example of self-sacrifice (though it is that); it is the payment of a debt he did not owe, covering the debt owed by those he came to save.",
  },
  {
    title: "The New Covenant in His Blood",
    verse: "Luke 22:20; Jeremiah 31:31-34",
    body: "At the Last Supper, Jesus takes the cup and says: 'This cup is the new covenant in my blood.' He is fulfilling Jeremiah's prophecy of a new covenant — one in which the law would be written on hearts, not tablets; in which God would be their God and they his people; in which sin would be forgiven and remembered no more. The entire Old Testament covenant history — Abraham, Moses, David — reaches its fulfillment in the Passover supper and the cross.",
  },
  {
    title: "The Resurrection as Vindication",
    verse: "Romans 1:4; Acts 2:24",
    body: "The resurrection is not simply 'the happy ending.' It is God's verdict on Jesus's life, death, and claims. By raising him from the dead, God declares that Jesus is indeed 'the Son of God in power' (Romans 1:4) — that his death was accepted as the ransom he claimed it to be, that death could not hold the one through whom life itself entered the world (Acts 2:24). The resurrection vindicates every claim Jesus made and grounds every promise he offered.",
  },
  {
    title: "The Torn Veil",
    verse: "Matthew 27:51; Hebrews 10:19-22",
    body: "At the moment of Jesus' death, 'the curtain of the temple was torn in two from top to bottom' (Matthew 27:51). The veil separated the Holy of Holies — the place of God's presence — from the rest of the temple. Only the High Priest could enter, once a year. God tears it open. The way to his presence is now open — not through the Levitical priesthood but through the great High Priest who has passed through the heavens (Hebrews 4:14). Holy Week ends with access: the veil is gone.",
  },
];

const OBSERVANCE_ITEMS = [
  {
    tradition: "Palm Sunday Procession",
    era: "Ancient-Medieval (recorded from 4th century)",
    icon: "🌿",
    desc: "The Jerusalem church reenacted the Triumphal Entry beginning in the 4th century — a procession with palm branches from the Mount of Olives into the city. The practice spread to the Western church by the 9th century and became a universal feature of Christian worship. Today it is observed in Catholic, Orthodox, Anglican, Lutheran, and many evangelical churches. The procession embodies what worship is: movement toward Jesus.",
  },
  {
    tradition: "Maundy Thursday Foot-Washing",
    era: "Ancient; widespread in the medieval church",
    icon: "💧",
    desc: "Many traditions observe foot-washing as part of Maundy Thursday liturgy, following Jesus's example in John 13. The word 'Maundy' (from Latin mandatum, 'command') refers to the new commandment Jesus gave: 'Love one another as I have loved you.' The Pope washes the feet of twelve people annually on Maundy Thursday as a public act of servant-leadership. In many evangelical churches, foot-washing has been recovered as a counter-cultural practice of humility.",
  },
  {
    tradition: "Good Friday Three Hours' Service",
    era: "Latin American origin, 17th century; spread worldwide",
    icon: "✝️",
    desc: "The 'Three Hours' service — noon to 3pm on Good Friday, corresponding to the hours of Jesus' crucifixion — originated with the Jesuits in 17th-century Lima. It involves meditations on the Seven Last Words of Christ. The service spread globally through Anglican and other traditions and remains one of the most powerful forms of Holy Week worship: three hours of deliberate, silent attention to the cross at the exact time of year and day when Jesus died.",
  },
  {
    tradition: "The Easter Vigil",
    era: "Ancient; the oldest Christian liturgy",
    icon: "🕯️",
    desc: "The Easter Vigil — held on Holy Saturday night, concluding at dawn Easter Sunday — is the oldest continuous Christian liturgy. It includes lighting the Paschal Candle from a new fire, the Exsultet (a great hymn of praise for Christ's resurrection), extensive Scripture readings tracing the whole story of salvation, and the baptism of catechumens who have been preparing all year. The Vigil moves from darkness to light, from death to resurrection, in real time. Many Protestant churches are recovering it.",
  },
  {
    tradition: "Sunrise Services",
    era: "18th-century Moravian origin; widely adopted",
    icon: "☀️",
    desc: "Sunrise Easter services began with the Moravian Brethren in Herrnhut, Germany in 1732 — gathering outdoors before dawn to meet the risen Christ as the sun rises. The Moravian service at Salem, North Carolina (begun 1772) is the oldest continuous Easter sunrise service in America. The practice spread through evangelical and mainline Protestant churches worldwide. It embodies the eschatological hope of Easter: as the sun rises, so the Son has risen.",
  },
  {
    tradition: "Ecumenical Good Friday Walk",
    era: "20th century; rapidly spreading",
    icon: "🌍",
    desc: "Good Friday walks of witness — where Christians from multiple denominations carry a cross through city streets — began in the 20th century as an act of public proclamation and ecumenical unity. They are now held in hundreds of cities worldwide. The walks make visible what would otherwise remain internal: the Christian community's corporate identification with the crucified Christ. They also provide a form of public evangelism that is embodied and communal rather than merely verbal.",
  },
];


const DAYS = [
  {
    day: "Palm Sunday",
    date: "Sunday",
    color: "#10B981",
    icon: "🌿",
    event: "The Triumphal Entry",
    refs: ["Matthew 21:1-11", "Mark 11:1-11", "Luke 19:28-44", "John 12:12-19"],
    narrative: "Jesus enters Jerusalem on a donkey — fulfilling Zechariah 9:9 — to the shouts of 'Hosanna!' from the crowds. The palm branches are a royal welcome; 'Hosanna' means 'Save us now!' The crowd expects a military king who will defeat Rome. They do not understand that the salvation coming is infinitely greater and infinitely different.",
    significance: "The entry is deliberate, staged, and theologically precise. Jesus chose a donkey (not a warhorse), fulfilling the prophecy of a humble king. The crowd's welcome and their later cries of 'Crucify him!' within the same week illustrate how quickly popular support evaporates when the Messiah doesn't match expectations.",
    practice: "Read Zechariah 9:9 before reading the Palm Sunday narrative. Notice the deliberateness of Jesus' preparation. What kind of king were the crowd expecting, and what kind did they get?",
  },
  {
    day: "Monday",
    date: "Monday",
    color: "#EF4444",
    icon: "🏛️",
    event: "The Cleansing of the Temple",
    refs: ["Matthew 21:12-17", "Mark 11:15-19", "Luke 19:45-48"],
    narrative: "Jesus enters the Temple, drives out the merchants and money-changers, and overturns their tables. 'My house will be called a house of prayer, but you are making it a den of robbers' (Matthew 21:13). The temple court being commercialized was not about commerce per se but about the exploitation of the poor who came to worship.",
    significance: "This is the most explicitly confrontational act of Jesus' ministry — a public disruption of the Temple economy. It seals his fate with the religious authorities. It also signals that the old Temple system is being challenged by the one who is himself the true Temple.",
    practice: "What in your own life has become a substitute for genuine encounter with God? What 'tables' might need overturning so that authentic worship can happen?",
  },
  {
    day: "Tuesday",
    date: "Tuesday",
    color: "#F59E0B",
    icon: "📖",
    event: "The Day of Teaching",
    refs: ["Matthew 21:23-25:46", "Mark 11:27-13:37", "Luke 20:1-21:38"],
    narrative: "The longest day of teaching in the Gospels. Jesus faces a series of hostile questions from the Pharisees, Sadducees, and scribes — on authority, taxes, resurrection, the greatest commandment. He responds with parables (the two sons, the tenants, the wedding banquet, the ten virgins, the talents). He then delivers the Olivet Discourse on the end times.",
    significance: "Tuesday is when Jesus demonstrates the breadth of his teaching authority — answering every trap, silencing every opponent, and finally pronouncing the woes on the religious leaders (Matthew 23). This is the intellectual climax of the confrontation with the establishment.",
    practice: "Read Matthew 22:37-40 (the greatest commandment). Sit with these two commands. How do they summarize the entire law? How does your life align with them?",
  },
  {
    day: "Wednesday",
    date: "Wednesday",
    color: "#6B7280",
    icon: "🤫",
    event: "The Silent Day",
    refs: [],
    narrative: "The Gospels record no specific events on Wednesday of Holy Week. Many scholars believe Jesus rested with his disciples in Bethany. It is a day of preparation — the last day before the week's center of gravity shifts entirely toward the cross.",
    significance: "The silence is itself instructive. Before the greatest event in human history, there is quiet. Before the storm of Thursday night through Sunday morning, there is rest. There is wisdom in not filling every hour — in waiting.",
    practice: "Use Wednesday of Holy Week as a day of deliberate silence and preparation. Fast from entertainment. Read slowly. Prepare to enter the final days of Jesus' life with full attention.",
  },
  {
    day: "Maundy Thursday",
    date: "Thursday",
    color: PURPLE,
    icon: "🍞",
    event: "The Last Supper",
    refs: ["Matthew 26:17-30", "John 13:1-17:26"],
    narrative: "Jesus washes his disciples' feet — the act of a servant. He institutes the Lord's Supper: 'This is my body given for you; do this in remembrance of me' (Luke 22:19). He prays for his disciples and for all future believers (John 17 — the High Priestly Prayer). They go to the Garden of Gethsemane, where Jesus agonizes in prayer: 'Not my will, but yours be done.'",
    significance: "Maundy comes from the Latin mandatum (command): 'A new command I give you: love one another as I have loved you' (John 13:34). The washing of feet and the Supper together define what love looks like — humility and sacrifice. The institution of communion here ties every future Eucharist back to this night.",
    practice: "Read John 17 as a whole. This is Jesus praying for you — by name, before you were born. Receive it as prayer, not merely as theology.",
  },
  {
    day: "Good Friday",
    date: "Friday",
    color: "#1F2937",
    icon: "✝️",
    event: "The Crucifixion",
    refs: ["Matthew 27:32-56", "Luke 23:26-49", "John 19:17-37"],
    narrative: "Jesus is tried, scourged, and crucified between two thieves at Golgotha. From the cross he speaks seven words: forgiveness for his executioners, promise of paradise to the repentant thief, care for his mother, cry of desolation ('My God, my God, why have you forsaken me?'), thirst, 'It is finished,' and commitment of his spirit. He dies at 3pm.",
    significance: "'It is finished' (tetelestai) is a single word in Greek — a commercial term meaning 'paid in full.' The work of atonement is complete. The veil in the temple tears from top to bottom (God tearing it open, not humans). The centurion declares: 'Surely this man was the Son of God.'",
    practice: "Read Isaiah 52:13-53:12 alongside the crucifixion narrative. Notice the parallels. Sit in silence at 3pm today. Do not rush to the resurrection.",
  },
  {
    day: "Holy Saturday",
    date: "Saturday",
    color: "#374151",
    icon: "⬛",
    event: "The Day of Silence",
    refs: ["Matthew 27:57-66", "Luke 23:50-56"],
    narrative: "Jesus is buried in Joseph of Arimathea's tomb. The disciples are scattered, hiding in grief and fear. The religious leaders secure the tomb with a seal and a guard. Saturday is the Sabbath — the disciples rest, as they must, unable to see anything beyond death and failure.",
    significance: "Holy Saturday is the day the disciples didn't know the story wasn't over. They lived what it felt like to be on the wrong side of death with no hope of reversal. Christians in every generation who experience God's silence know something of Holy Saturday.",
    practice: "Do not skip from Good Friday directly to Easter. Sit in Holy Saturday — in the silence and apparent absence of God. Many of the people you know are living in Holy Saturday. Let this day give you compassion for them.",
  },
  {
    day: "Easter Sunday",
    date: "Sunday",
    color: GREEN,
    icon: "☀️",
    event: "The Resurrection",
    refs: ["Matthew 28:1-10", "Mark 16:1-8", "Luke 24:1-12", "John 20:1-18"],
    narrative: "The women come to the tomb at dawn and find the stone rolled away. An angel declares: 'He is not here; he has risen!' Mary Magdalene encounters the risen Jesus in the garden and mistakes him for the gardener — until he says her name. The disciples receive the news, and Peter and John run to the tomb. The risen Jesus appears to Mary, to Peter, to the two on the road to Emmaus, and eventually to over 500 witnesses.",
    significance: "'If Christ has not been raised, your faith is futile' (1 Corinthians 15:17). The resurrection is not a metaphor or a spiritual experience — it is the hinge of history. The same body that was crucified on Friday walked out of the tomb on Sunday. Death has been defeated, not transcended. 'Death has been swallowed up in victory.'",
    practice: "Read 1 Corinthians 15:12-58 aloud on Easter morning. Let the logic of the resurrection settle: if this happened, everything has changed. If this didn't happen, nothing matters. Which do you actually believe?",
  },
];

const VOICES_HW = [
  {
    id: "stott-jrw",
    name: "John R.W. Stott",
    era: "1921–2011 · Anglican Evangelical",
    context: "The Cross of Christ",
    bio: "John Stott's The Cross of Christ (1986) is widely regarded as the definitive evangelical treatment of the atonement — the events of Holy Week seen through the lens of their theological meaning. Stott's meticulous exposition of why the cross was necessary, what it accomplished, and how it should shape the Christian life made it a standard seminary text across denominational lines. He insisted that the cross must be understood as substitution — that Christ bore the penalty we deserved.",
    quote: "The essence of sin is man substituting himself for God; the essence of salvation is God substituting himself for man. Man asserts himself against God; God sacrifices himself for man.",
    contribution: "Stott's The Cross of Christ gave the modern evangelical church its most rigorous and accessible account of what happened on Good Friday and why. His integration of biblical, historical, and devotional reflection has made it the primary reference point for preachers and teachers on the atonement.",
  },
  {
    id: "wright-nt",
    name: "N.T. Wright",
    era: "b. 1948 · Anglican",
    context: "The Day the Revolution Began",
    bio: "N.T. Wright's The Day the Revolution Began (2016) argues that the standard evangelical account of the cross — focusing primarily on individual sin-payment — misses the larger narrative of covenant, vocation, and new creation. Wright reads Holy Week through Second Temple Jewish categories, arguing that Jesus understood his death as the moment when the Exile of Israel (and all humanity) finally ended and the new creation began. His historical Jesus scholarship has made the Gospels' passion narratives newly intelligible.",
    quote: "The revolution that began in the upper room and culminated on the first Easter morning was not about private spiritual transactions. It was the launching of God's new creation into the midst of the old.",
    contribution: "Wright's historical-theological reading of Holy Week has reshaped how a generation of preachers and scholars reads the Passion narratives. His attention to Jewish context, covenant theology, and the new creation framework has enriched evangelical accounts of the cross that had become too narrowly individualistic.",
  },
  {
    id: "ortberg-j",
    name: "John Ortberg",
    era: "b. 1957 · Evangelical",
    context: "Know Doubt & Holy Week Formation",
    bio: "John Ortberg's pastoral writing on Holy Week has emphasized it as a week of formation as much as commemoration. His approach connects the events of each day to the reader's own journey — the Monday Temple-clearing as an invitation to audit one's own worship, the Last Supper as a model of servant-leadership, Gethsemane as the paradigm for praying through one's own cross. Ortberg's populist pastoral approach makes Holy Week accessible without domesticating it.",
    quote: "Gethsemane is the answer to every prayer that has not been answered the way you wanted. Jesus modeled what it means to submit to the Father's will when the Father's will is the last thing you want.",
    contribution: "Ortberg's devotional treatment of Holy Week has helped millions of ordinary believers engage with the passion narrative not as spectators but as participants. His ability to translate the theological freight of Holy Week into lived application has made him one of the primary pastoral guides for congregational Holy Week observance.",
  },
  {
    id: "mcgrath-a",
    name: "Alister McGrath",
    era: "b. 1953 · Anglican Evangelical",
    context: "The Mystery of the Cross",
    bio: "Alister McGrath, Professor of Theology at Oxford and King's College London, has written a comprehensive historical and theological survey of how the church has understood the cross across twenty centuries. His book The Mystery of the Cross traces how each era read Holy Week through its own cultural and theological lens — from the early church's cosmic liberation imagery to Anselm's satisfaction theory to the Reformers' penal substitution. McGrath argues that multiple theories are needed to do justice to the cross's multi-dimensionality.",
    quote: "No single theory of the atonement exhausts the meaning of the cross. Each captures a facet of what was accomplished at Calvary, and we do violence to the whole when we insist that one angle of vision is the whole picture.",
    contribution: "McGrath's survey work gave the church permission to hold multiple atonement models simultaneously without feeling theologically inconsistent. His historical perspective showed that the church has always been theologically rich on the cross, and that modern debates often replay ancient arguments with new vocabulary.",
  },
  {
    id: "chester-t",
    name: "Tim Chester",
    era: "b. 1967 · Reformed",
    context: "A Meal with Jesus",
    bio: "Tim Chester's work on the Last Supper — particularly in A Meal with Jesus (2011) — explores how the meal on the night Jesus was betrayed was the culmination of a ministry defined by table fellowship. Chester reads the Thursday of Holy Week through Jesus' entire table ministry: the meals with sinners, the feeding of the multitudes, the parable of the great banquet. The Last Supper is not an isolated sacramental event but the final and definitive expression of who Jesus is and why he came.",
    quote: "Every time we eat the Lord's Supper, we are saying: this table is open to anyone. The same grace that covered Judas at the table covers us. We are all the Judas at this meal.",
    contribution: "Chester's table-fellowship hermeneutic for Holy Week has given preachers and congregations a fresh way to understand the Passover meal and Communion. His reading of the Last Supper within the broader context of Jesus' meals has enriched both preaching and Communion practice across evangelical traditions.",
  },
];

export default function HolyWeekPage() {
  const [selected, setSelected] = usePersistedState("vine_holy-week_selected", "Palm Sunday");
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_holy-week_tab", "days");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_holy-week_voice", "stott-jrw");
  const voiceItem = VOICES_HW.find(v => v.id === selectedVoice)!;

  const day = DAYS.find(d => d.day === selected)!;

  const [hwEntries, setHwEntries] = useState<{ id: string; date: string; day: string; meditation: string; response: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_hw_entries") ?? "[]"); } catch { return []; }
  });
  const [hwForm, setHwForm] = useState({ day: "", meditation: "", response: "" });
  const [hwSaved, setHwSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_hw_entries", JSON.stringify(hwEntries)); } catch {} }, [hwEntries]);
  const saveHwEntry = () => {
    if (!hwForm.day.trim()) return;
    setHwEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...hwForm }, ...prev]);
    setHwForm({ day: "", meditation: "", response: "" });
    setHwSaved(true); setTimeout(() => setHwSaved(false), 2000);
  };
  const deleteHwEntry = (id: string) => setHwEntries(prev => prev.filter(e => e.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Holy Week</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The most consequential week in human history, day by day. From the Triumphal Entry to the Empty Tomb — a guide for walking through Holy Week with full attention.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "days" as const, label: "The Days", icon: "📅" },
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "observance" as const, label: "Observance", icon: "🕯️" },
            { id: "voices" as const, label: "Voices", icon: "🎓" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "days" && <div style={{ display: "flex", gap: 20 }}>
          <div style={{ width: 190, flexShrink: 0 }}>
            {DAYS.map(d => (
              <button type="button" key={d.day} onClick={() => setSelected(d.day)}
                style={{ width: "100%", background: selected === d.day ? `${d.color}15` : "transparent", border: `1px solid ${selected === d.day ? d.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>{d.icon}</span>
                <div>
                  <div style={{ color: selected === d.day ? d.color : TEXT, fontWeight: 700, fontSize: 13 }}>{d.day}</div>
                  <div style={{ color: MUTED, fontSize: 10, marginTop: 1 }}>{d.event.split(' ').slice(0,3).join(' ')}...</div>
                </div>
              </button>
            ))}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ background: CARD, border: `1px solid ${day.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <span style={{ fontSize: 36 }}>{day.icon}</span>
                <div>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 2 }}>{day.date.toUpperCase()}</div>
                  <h2 style={{ color: day.color, fontWeight: 900, fontSize: 24, margin: 0 }}>{day.day}</h2>
                  <div style={{ color: MUTED, fontSize: 14, marginTop: 2 }}>{day.event}</div>
                </div>
              </div>

              {day.refs.length > 0 && (
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                  {day.refs.map(r => (
                    <span key={r} style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{r}</span>
                  ))}
                </div>
              )}

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{day.narrative}</p>

              <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>SIGNIFICANCE</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{day.significance}</p>
              </div>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>PRACTICE</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{day.practice}</p>
              </div>
            </div>
          </div>
        </div>}

        {activeTab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Holy Week is not primarily a sequence of historical events — it is the hinge of all history. These are the theological pillars that give the week its weight and make the events more than biography.
              </p>
            </div>
            {THEOLOGY_BLOCKS.map((b, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{b.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={b.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "observance" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Holy Week has been observed by the church in every generation since the first century. These are the primary ways Christians have marked the week — practices that connect us to the body of Christ across time and space.
              </p>
            </div>
            {OBSERVANCE_ITEMS.map((o, i) => (
              <div key={i} style={{ display: "flex", gap: 16, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{o.icon}</div>
                <div>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{o.tradition}</div>
                  <div style={{ color: MUTED, fontSize: 12, fontWeight: 600, marginBottom: 10 }}>{o.era}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_HW.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : BORDER}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : CARD, cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? GREEN : TEXT, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: TEXT }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: BG, borderRadius: 12, padding: 20, borderLeft: `3px solid ${GREEN}`, marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "journal" && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: TEXT }}>My Holy Week Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Record your meditations on each day of Holy Week, what God is saying to you, and your response. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>DAY / EVENT I AM MEDITATING ON *</label>
                <textarea value={hwForm.day} onChange={e => setHwForm(f => ({ ...f, day: e.target.value }))}
                  placeholder="Palm Sunday, Last Supper, the Cross, the Empty Tomb..." rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>WHAT GOD IS SAYING TO ME</label>
                <textarea value={hwForm.meditation} onChange={e => setHwForm(f => ({ ...f, meditation: e.target.value }))}
                  placeholder="What truth or conviction is landing on you through this event?" rows={3}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>MY RESPONSE</label>
                <textarea value={hwForm.response} onChange={e => setHwForm(f => ({ ...f, response: e.target.value }))}
                  placeholder="Worship, repentance, gratitude — how are you responding?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveHwEntry}
                style={{ background: hwSaved ? GREEN : PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {hwSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {hwEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 14, letterSpacing: 1 }}>SAVED ENTRIES ({hwEntries.length})</h3>
                {hwEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                      <button type="button" onClick={() => deleteHwEntry(entry.id)}
                        style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {entry.day && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontWeight: 700, fontSize: 11 }}>DAY: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.day}</span></div>}
                    {entry.meditation && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontWeight: 700, fontSize: 11 }}>MEDITATION: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.meditation}</span></div>}
                    {entry.response && <div><span style={{ color: MUTED, fontWeight: 700, fontSize: 11 }}>RESPONSE: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.response}</span></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Video teachings on Holy Week — the days, the theology, and the events that stand at the center of the Christian story.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "2go_dOJVwc4", title: "The Story of Holy Week — Day by Day", channel: "The Bible Project", description: "An animated walk through each day of Holy Week — Palm Sunday through Easter — showing how the events fulfill the Old Testament and reveal the nature of Jesus's kingdom." },
                  { videoId: "D3yMC_qoAes", title: "Why Did Jesus Have to Die? The Theology of the Cross", channel: "N.T. Wright Online", description: "Wright explains the atonement — what the cross accomplished, how to understand substitution in its Jewish context, and why it remains the center of the Christian gospel." },
                  { videoId: "dQ1xxoP7NJk", title: "Good Friday: The Meaning of the Crucifixion", channel: "Desiring God", description: "A meditation on the cross — the darkness of Good Friday, what was accomplished at Calvary, and why Christians call the worst day in history 'good.'" },
                  { videoId: "K3TYG7Q_fj4", title: "He Is Risen: The Historical Evidence for the Resurrection", channel: "Ravi Zacharias International Ministries", description: "Making the case for the bodily resurrection of Jesus — the empty tomb, the appearances, the transformation of the disciples, and why alternative explanations fail." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
