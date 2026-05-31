"use client";
import { useState } from "react";

const CREEDS = [
  {
    id: "apostles",
    name: "The Apostles' Creed",
    date: "c. AD 140–390 (final form)",
    origin: "Western Church",
    usage: "Used in baptism services, morning/evening prayer, and catechism across Catholic, Lutheran, Reformed, Anglican, and many evangelical traditions.",
    text: `I believe in God, the Father almighty,
Creator of heaven and earth.

I believe in Jesus Christ, his only Son, our Lord,
who was conceived by the Holy Spirit,
born of the Virgin Mary,
suffered under Pontius Pilate,
was crucified, died, and was buried;
he descended to the dead.
On the third day he rose again;
he ascended into heaven,
he is seated at the right hand of the Father,
and he will come to judge the living and the dead.

I believe in the Holy Spirit,
the holy catholic Church,
the communion of saints,
the forgiveness of sins,
the resurrection of the body,
and life everlasting. Amen.`,
    lineByLine: [
      { line: "God, the Father almighty, Creator of heaven and earth.", explanation: "God is personal (Father), omnipotent, and the source of all creation — both physical and spiritual reality." },
      { line: "Jesus Christ, his only Son, our Lord", explanation: "'Only Son' = unique divine relationship, not one among many. 'Lord' (Kyrios) = the Greek equivalent of YHWH, a declaration of Christ's full divinity." },
      { line: "was crucified, died, and was buried", explanation: "Emphasizes the full reality of Jesus's death against early heresies (Docetism) that denied his physical humanity." },
      { line: "the holy catholic Church", explanation: "'Catholic' means universal — the one worldwide body of believers, not the Roman Catholic institution specifically." },
      { line: "the communion of saints", explanation: "The living community of believers, united across time — all who have died in faith are still members of the one body of Christ." },
    ],
  },
  {
    id: "nicene",
    name: "The Nicene Creed",
    date: "AD 325 (Nicaea), revised 381 (Constantinople)",
    origin: "Ecumenical Councils",
    usage: "The most universal Christian creed — recited by Catholics, Eastern Orthodox, and most Protestant denominations at Eucharist. Foundational statement of Trinitarian orthodoxy.",
    text: `We believe in one God,
the Father almighty,
maker of heaven and earth,
of all things visible and invisible.

We believe in one Lord Jesus Christ,
the only Son of God,
eternally begotten of the Father,
God from God, Light from Light,
true God from true God,
begotten, not made,
of one Being with the Father.
Through him all things were made.
For us and for our salvation
he came down from heaven:
by the power of the Holy Spirit
he became incarnate from the Virgin Mary,
and was made man.
For our sake he was crucified under Pontius Pilate;
he suffered death and was buried.
On the third day he rose again
in accordance with the Scriptures;
he ascended into heaven
and is seated at the right hand of the Father.
He will come again in glory
to judge the living and the dead,
and his kingdom will have no end.

We believe in the Holy Spirit, the Lord, the giver of life,
who proceeds from the Father and the Son.
With the Father and the Son he is worshiped and glorified.
He has spoken through the Prophets.

We believe in one holy catholic and apostolic Church.
We acknowledge one baptism for the forgiveness of sins.
We look for the resurrection of the dead,
and the life of the world to come. Amen.`,
    lineByLine: [
      { line: "eternally begotten of the Father", explanation: "Directly addresses Arianism — the Son was not created at a point in time but eternally generated from the Father's being." },
      { line: "of one Being with the Father", explanation: "The Greek word homoousios — 'same substance' — was the key theological victory at Nicaea. Christ shares the same divine nature, not merely similar nature (homoiousios)." },
      { line: "For us and for our salvation he came down from heaven", explanation: "The Incarnation has a purpose: it is for us. The creed emphasizes the soteriological (salvation) motive for the Incarnation." },
      { line: "in accordance with the Scriptures", explanation: "The resurrection is not a new idea — it was foretold. The creed ties the resurrection to the entire OT witness." },
      { line: "his kingdom will have no end", explanation: "Against any view that Christ's reign is temporary or that there will be a time without his lordship." },
    ],
  },
  {
    id: "chalcedon",
    name: "The Definition of Chalcedon",
    date: "AD 451",
    origin: "Council of Chalcedon (modern Turkey)",
    usage: "The authoritative statement on the two natures of Christ. Less commonly recited in worship, but foundational to Christology across all major traditions.",
    text: `Following the holy Fathers, we all with one accord teach men to acknowledge one and the same Son, our Lord Jesus Christ, at once complete in Godhead and complete in manhood, truly God and truly man, consisting also of a reasonable soul and body; of one substance with the Father as regards his Godhead, and at the same time of one substance with us as regards his manhood; like us in all respects, apart from sin.

As regards his Godhead, begotten of the Father before the ages, but yet as regards his manhood begotten, for us men and for our salvation, of Mary the Virgin, the God-bearer; one and the same Christ, Son, Lord, Only-begotten, recognized in two natures, without confusion, without change, without division, without separation.`,
    lineByLine: [
      { line: "complete in Godhead and complete in manhood", explanation: "The 'two-natures' doctrine: Jesus is 100% God and 100% human — not 50/50, not God dressed as man, not a lesser god." },
      { line: "without confusion, without change, without division, without separation", explanation: "The four 'withouts' — rejecting four heresies: Eutychianism (confusion), Monophysitism (change into one nature), Nestorianism (division), and Arianism (separation)." },
      { line: "Mary the Virgin, the God-bearer", explanation: "Theotokos ('God-bearer') — Mary is called God-bearer not to exalt Mary but to protect Christ's full divinity from birth." },
    ],
  },
  {
    id: "athanasian",
    name: "The Athanasian Creed",
    date: "c. AD 500",
    origin: "Western Church (likely not Athanasius himself)",
    usage: "Used in some Lutheran, Anglican, and Catholic traditions. The most detailed of the three ecumenical creeds on the Trinity and Christology. Rarely recited in full, but theologically rich.",
    text: `Whoever desires to be saved should above all hold to the catholic faith. Anyone who does not keep it whole and unbroken will doubtless perish eternally.

Now this is the catholic faith: That we worship one God in trinity and the trinity in unity, neither blending their persons nor dividing their essence. For the person of the Father is a distinct person, the person of the Son is another, and that of the Holy Spirit still another. But the divinity of the Father, Son, and Holy Spirit is one, their glory equal, their majesty coeternal.

Such as the Father is, such is the Son and such is the Holy Spirit. The Father is uncreated, the Son is uncreated, the Holy Spirit is uncreated... The Father is immeasurable, the Son is immeasurable, the Holy Spirit is immeasurable. The Father is eternal, the Son is eternal, the Holy Spirit is eternal. And yet there are not three eternal beings; there is but one eternal being.`,
    lineByLine: [
      { line: "one God in trinity and the trinity in unity", explanation: "The paradox of the Trinity: one essence (ousia), three persons (hypostases). Monotheism without collapsing the distinctions." },
      { line: "neither blending their persons nor dividing their essence", explanation: "The two errors the creed guards against: modalism (blending persons into one) and tritheism (three separate gods)." },
      { line: "The Father is uncreated, the Son is uncreated, the Holy Spirit is uncreated... and yet there are not three eternal beings", explanation: "Three fully divine persons who are each eternal, omnipotent, immeasurable — yet not three gods but one." },
    ],
  },
];

const PRAYERS = [
  {
    name: "The Lord's Prayer",
    tradition: "All",
    text: `Our Father who art in heaven,
hallowed be thy name.
Thy kingdom come.
Thy will be done
on earth as it is in heaven.
Give us this day our daily bread,
and forgive us our trespasses,
as we forgive those who trespass against us,
and lead us not into temptation,
but deliver us from evil.
For thine is the kingdom and the power
and the glory, forever. Amen.`,
    notes: "Matthew 6:9–13. The doxology ('For thine is the kingdom...') appears in early manuscripts and the Didache (c. AD 100) but not in the oldest manuscripts of Matthew. It is used in most Protestant traditions.",
  },
  {
    name: "Morning Collect (Book of Common Prayer)",
    tradition: "Anglican / Episcopal",
    text: `O Lord our God, grant us grace to desire Thee with our whole heart;
that so desiring, we may seek and find Thee;
and so finding Thee, may love Thee;
and loving Thee, may hate those sins
from which Thou hast redeemed us;
through Jesus Christ our Lord. Amen.`,
    notes: "St. Anselm of Canterbury (c. 1109). Adapted in Thomas Cranmer's Book of Common Prayer.",
  },
  {
    name: "Prayer of St. Francis",
    tradition: "Catholic / Ecumenical",
    text: `Lord, make me an instrument of your peace.
Where there is hatred, let me sow love;
Where there is injury, pardon;
Where there is doubt, faith;
Where there is despair, hope;
Where there is darkness, light;
Where there is sadness, joy.

O Divine Master,
grant that I may not so much seek
to be consoled as to console,
to be understood as to understand,
to be loved as to love.
For it is in giving that we receive,
it is in pardoning that we are pardoned,
and it is in dying that we are born to eternal life. Amen.`,
    notes: "Attributed to St. Francis of Assisi (1181–1226), though the earliest written form dates to 1912. Used across all Christian traditions.",
  },
  {
    name: "Wesley's Covenant Prayer",
    tradition: "Methodist",
    text: `I am no longer my own, but thine.
Put me to what thou wilt, rank me with whom thou wilt.
Put me to doing, put me to suffering.
Let me be employed by thee or laid aside for thee,
exalted for thee or brought low for thee.
Let me be full, let me be empty.
Let me have all things, let me have nothing.
I freely and heartily yield all things to thy pleasure and disposal.
And now, O glorious and blessed God, Father, Son, and Holy Spirit,
thou art mine, and I am thine. So be it.
And the covenant which I have made on earth,
let it be ratified in heaven. Amen.`,
    notes: "John Wesley's Covenant Prayer, used in the annual Methodist Covenant Service since 1755. One of the most radical prayers of full surrender in Christian tradition.",
  },
];

const CREED_HISTORY = [
  { era: "Apostolic Age (c. 50-100)", event: "Earliest baptismal confessions", desc: "The earliest Christian creedal formulas appear in the New Testament itself: 'Jesus is Lord' (Rom 10:9), 'Jesus Christ has come in the flesh' (1 John 4:2), and the Trinitarian formula of Matthew 28:19. These simple confessions functioned as baptismal affirmations and anti-heretical markers." },
  { era: "2nd-3rd Century", event: "Rule of Faith and Old Roman Creed", desc: "As Gnosticism threatened to redefine Christianity, church fathers like Irenaeus and Tertullian appealed to the 'Rule of Faith' — a summary of apostolic teaching. The Old Roman Creed (ancestor of the Apostles' Creed) developed as a structured baptismal confession." },
  { era: "325 AD", event: "Council of Nicea", desc: "Confronting Arianism (Arius's claim that Christ was a created being), 318 bishops gathered at Nicea. The resulting Nicene Creed affirmed Christ as 'of the same substance as the Father' (homoousios) — the most consequential theological decision in church history." },
  { era: "381 AD", event: "Council of Constantinople", desc: "Expanded the Nicene Creed's treatment of the Holy Spirit, affirming him as 'the Lord and giver of life, who proceeds from the Father, who with the Father and the Son is worshiped and glorified.' This is the Nicene-Constantinopolitan Creed still used in worship today." },
  { era: "451 AD", event: "Council of Chalcedon", desc: "Resolved the question of Christ's two natures, affirming the 'hypostatic union': Jesus is truly God and truly human, the two natures existing 'without confusion, without change, without division, without separation' in one person." },
  { era: "1054 AD", event: "The Great Schism and the Filioque", desc: "The Eastern and Western churches split, partly over the Western addition of 'and the Son' (filioque) to the Nicene Creed's statement about the Spirit's procession. The Eastern church holds that the Spirit proceeds from the Father alone." },
  { era: "16th Century", event: "Reformation Confessions", desc: "The Reformation produced a new generation of confessions: the Augsburg Confession (Lutheran, 1530), the Heidelberg Catechism (Reformed, 1563), and the Westminster Confession (Presbyterian, 1647) — each seeking to articulate biblical Christianity against both Rome and radical Protestantism." },
];

const VOICES_CREED = [
  { id: "pelikan-j", name: "Jaroslav Pelikan", era: "1923-2006", context: "Credo (2003); The Christian Tradition (5 vols.) — the greatest historian of Christian doctrine", bio: "Jaroslav Pelikan was Sterling Professor of History at Yale and the greatest 20th-century historian of Christian doctrine. His Credo: Historical and Theological Guide to Creeds and Confessions of Faith in the Christian Tradition is the most comprehensive scholarly survey of Christian confessional documents ever written. Pelikan's approach was descriptive rather than prescriptive — he aimed to understand each creed in its historical context rather than evaluate it from a particular confessional standpoint. His late conversion to Eastern Orthodoxy (1998) added a personal dimension to his lifelong scholarly engagement with creedal tradition.", quote: "Creeds are not the enemies of Scripture — they are the church's distillation of what Scripture teaches. The creed is the church's response to heresy, and heresy is the church's way of learning what it actually believes.", contribution: "Pelikan's five-volume The Christian Tradition remains the standard scholarly survey of doctrinal development in the Western and Eastern churches. His Credo gave scholars, clergy, and educated laypeople access to the full range of Christian confessional documents with historical commentary that is both rigorous and accessible." },
  { id: "hall-c", name: "Christopher A. Hall", era: "b. 1950", context: "Learning Theology with the Church Fathers (2002); Reading Scripture with the Church Fathers (1998)", bio: "Christopher Hall's work on patristic theology has made the early church fathers — and their creedal formulations — accessible to evangelical audiences who had largely been cut off from the tradition. His Learning Theology with the Church Fathers walks through the core doctrines of Christianity (Trinity, incarnation, salvation, church, Scripture) as they were understood and debated by the great figures of the patristic era. Hall argues that the creeds are not impositions on Scripture but the church's best attempt to read Scripture faithfully in the face of heretical distortion — and that evangelicals impoverish themselves by ignoring this tradition.", quote: "The creeds were not invented by councils — they were recognized by councils. The church did not create the doctrine of the Trinity; it recognized what was already there in Scripture and expressed it in language that would protect the faith from distortion.", contribution: "Hall's books on the church fathers introduced a generation of evangelical students, pastors, and laypeople to the patristic tradition as a living resource rather than ancient history. His accessible style and evangelical commitments made the creeds available to readers who might otherwise have found patristics too daunting." },
  { id: "bird-m", name: "Michael Bird", era: "b. 1975", context: "What Christians Ought to Believe (2016) — a guide to the Apostles' Creed for contemporary readers", bio: "Michael Bird's What Christians Ought to Believe: An Introduction to Christian Doctrine Through the Apostles' Creed is among the most readable modern introductions to the Apostles' Creed as a summary of Christian doctrine. Bird reads each phrase of the creed as an entry point into the full depth of Christian teaching — not as a minimalist statement but as a maximalist summary. His treatment is theologically rich while remaining accessible, and his evangelical convictions combined with his engagement with the full Christian tradition (Catholic, Orthodox, and Protestant) make the book useful across denominational lines.", quote: "The Apostles' Creed is not a least-common-denominator statement for people who can't decide what they believe. It is the church's most compressed statement of what is essential — and everything essential is in it.", contribution: "Bird's What Christians Ought to Believe has been widely adopted as an introductory text in evangelical churches and seminaries for teaching Christian doctrine through the structure of the Apostles' Creed. Its readable style and theological depth have made it a trusted guide for adult education and new member classes in churches across the English-speaking world." },
  { id: "barth-creed", name: "Karl Barth", era: "1886-1968", context: "Dogmatics in Outline (1947) — lectures on the Apostles' Creed given to prisoners of war", bio: "Karl Barth's Dogmatics in Outline is a set of lectures on the Apostles' Creed delivered to theology students and prisoners of war in Bonn in 1946, in the rubble of post-war Germany. It is arguably the most theologically profound short treatment of the creed in the 20th century. Barth's characteristic approach — reading all theology through the lens of Jesus Christ — gives his exposition of the creed a Christocentric unity: Father, Son, and Holy Spirit are all understood in relation to the revelation of God in Jesus Christ. The simplicity of the creed's language becomes, in Barth's hands, a window into the deepest mysteries of Christian revelation.", quote: "Credo — I believe. Not 'we believe' first, not 'I feel' or 'I experience,' but 'I believe.' Faith is a personal act. The creed places the individual before God and before the community of the church.", contribution: "Dogmatics in Outline demonstrated that serious, technical theological thought is not destroyed by the creed's simple language but illuminated by it. Barth's example of expounding the creed in a bombed-out lecture hall to students and former prisoners gave subsequent theologians a model for creedal theology that is simultaneously rigorous and pastorally alive." },
  { id: "mcgrath-creed", name: "Alister McGrath", era: "b. 1953", context: "I Believe: Exploring the Apostles' Creed (1991); Theology: The Basics (2004)", bio: "Alister McGrath, Oxford theologian and prolific author of introductory Christian theology, has written some of the most used evangelical introductions to creedal Christianity. His I Believe: Exploring the Apostles' Creed walks through each article of the creed with historical awareness and contemporary application, showing how the creed has functioned across Christian history as both a statement of faith and a summary of Christian teaching. McGrath's particular skill is making technical theological debate accessible without simplifying it — his treatment of the Trinitarian controversies behind the Nicene Creed is the clearest short account available.", quote: "The creeds are the church's best attempt to say in brief what the whole of Scripture says at length. They are not a replacement for Scripture but a guide to reading it.", contribution: "McGrath's introductory theology texts — including his treatment of the creeds — have been among the most widely used in evangelical colleges and seminaries for thirty years. His ability to explain complex theological debates with clarity and historical precision has made him the most trusted guide to Christian doctrine for a generation of evangelical students." },
];

export default function CreedsPage() {
  const [tab, setTab] = useState<"creeds" | "prayers" | "history" | "voices">("creeds");
  const [selectedVoice, setSelectedVoice] = useState("pelikan-j");
  const voiceItem = VOICES_CREED.find(v => v.id === selectedVoice)!;
  const [selected, setSelected] = useState<typeof CREEDS[0] | null>(null);
  const [showLines, setShowLines] = useState(false);
  const [memorizedIds, setMemorizedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_creeds_memorized"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedPrayers, setSavedPrayers] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_creeds_prayers_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleMemorized = (id: string) => {
    setMemorizedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_creeds_memorized", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const toggleSavedPrayer = (name: string) => {
    setSavedPrayers(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      try { localStorage.setItem("vine_creeds_prayers_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const copyText = async (text: string, id: string) => {
    try { await navigator.clipboard.writeText(text); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); } catch {}
  };

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Creeds & Historic Prayers</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>The faith once delivered to all the saints</p>
          <div style={{ background: "rgba(107,79,187,0.08)", borderRadius: 14, padding: "12px 20px", marginTop: 20, border: "1px solid rgba(107,79,187,0.2)", maxWidth: 560, margin: "20px auto 0" }}>
            <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>
              "The creeds are like maps. A man who has never been to the Atlantic can still know about it from a map."
            </p>
            <p style={{ fontSize: 12, color: "#A080FF", fontWeight: 700, marginTop: 6 }}>— C.S. Lewis, Mere Christianity</p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: "1px solid #1E1E32" }}>
          {([["creeds", "Creeds"], ["prayers", "Historic Prayers"], ["history", "History"], ["voices", "Voices"]] as const).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? "#00FF88" : "#6A6A88", borderBottom: `2px solid ${tab === t ? "#00FF88" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Creeds Tab */}
        {tab === "creeds" && !selected && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CREEDS.map(c => (
              <div key={c.id} onClick={() => { setSelected(c); setShowLines(false); }}
                style={{ background: "#12121F", border: `1px solid ${memorizedIds.has(c.id) ? "rgba(0,255,136,0.25)" : "#1E1E32"}`, borderRadius: 16, padding: 24, cursor: "pointer", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "#6B4FBB"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = memorizedIds.has(c.id) ? "rgba(0,255,136,0.25)" : "#1E1E32"}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 6 }}>{c.name}</h2>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 12, padding: "2px 8px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{c.origin}</span>
                      <span style={{ fontSize: 12, padding: "2px 8px", borderRadius: 20, background: "#1E1E32", color: "#9898B3" }}>{c.date}</span>
                    </div>
                  </div>
                  {memorizedIds.has(c.id) && <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "rgba(0,255,136,0.1)", color: "#00FF88" }}>✓ Memorizing</span>}
                </div>
                <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.6 }}>{c.usage}</p>
              </div>
            ))}
          </div>
        )}

        {/* Creed Detail */}
        {tab === "creeds" && selected && (
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "#00FF88", cursor: "pointer", fontSize: 14, fontWeight: 700, marginBottom: 20, display: "flex", alignItems: "center", gap: 6, padding: 0 }}>
              ← Back to Creeds
            </button>
            <div style={{ background: "#12121F", borderRadius: 20, padding: 32, border: "1px solid #2A2A40", marginBottom: 20 }}>
              <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>{selected.name}</h2>
              <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{selected.origin}</span>
                <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "#1E1E32", color: "#9898B3" }}>{selected.date}</span>
              </div>
              <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.7, marginBottom: 24 }}>{selected.usage}</p>

              <div style={{ background: "#0D0D1A", borderRadius: 14, padding: 24, marginBottom: 20, borderLeft: "3px solid #6B4FBB" }}>
                <pre style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 2, fontFamily: "inherit", whiteSpace: "pre-wrap", margin: 0 }}>{selected.text}</pre>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
                <button onClick={() => copyText(selected.text, selected.id)}
                  style={{ padding: "10px 18px", borderRadius: 10, border: "1px solid #2A2A40", background: "#1E1E32", color: copiedId === selected.id ? "#00FF88" : "#9898B3", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                  {copiedId === selected.id ? "✓ Copied!" : "Copy Text"}
                </button>
                <button onClick={() => toggleMemorized(selected.id)}
                  style={{ padding: "10px 18px", borderRadius: 10, border: `1px solid ${memorizedIds.has(selected.id) ? "rgba(0,255,136,0.35)" : "#2A2A40"}`, background: memorizedIds.has(selected.id) ? "rgba(0,255,136,0.1)" : "#1E1E32", color: memorizedIds.has(selected.id) ? "#00FF88" : "#9898B3", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                  {memorizedIds.has(selected.id) ? "✓ Memorizing" : "Track Memorization"}
                </button>
              </div>

              <button onClick={() => setShowLines(!showLines)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#6B4FBB", fontWeight: 700, fontSize: 14, padding: 0 }}>
                {showLines ? "▲ Hide line-by-line commentary" : "▼ Show line-by-line commentary"}
              </button>

              {showLines && (
                <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                  {selected.lineByLine.map((ll, i) => (
                    <div key={i} style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, border: "1px solid #1E1E32" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#C0C0D8", marginBottom: 8, fontStyle: "italic" }}>"{ll.line}"</p>
                      <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.7 }}>{ll.explanation}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Prayers Tab */}
        {tab === "prayers" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 760, margin: "0 auto" }}>
            {PRAYERS.map(p => (
              <div key={p.name} style={{ background: "#12121F", borderRadius: 18, padding: 28, border: `1px solid ${savedPrayers.has(p.name) ? "rgba(0,255,136,0.25)" : "#1E1E32"}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 6 }}>{p.name}</h3>
                    <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{p.tradition}</span>
                  </div>
                  <button onClick={() => toggleSavedPrayer(p.name)}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: savedPrayers.has(p.name) ? "#FFD700" : "#4A4A68", flexShrink: 0 }}>
                    {savedPrayers.has(p.name) ? "★" : "☆"}
                  </button>
                </div>
                <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 20, marginBottom: 14, borderLeft: "3px solid #6B4FBB" }}>
                  <pre style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 2, fontFamily: "inherit", whiteSpace: "pre-wrap", margin: 0 }}>{p.text}</pre>
                </div>
                <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, marginBottom: 12 }}>{p.notes}</p>
                <button onClick={() => copyText(p.text, p.name)}
                  style={{ padding: "8px 16px", borderRadius: 10, border: "1px solid #2A2A40", background: "#1E1E32", color: copiedId === p.name ? "#00FF88" : "#9898B3", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
                  {copiedId === p.name ? "✓ Copied!" : "Copy Prayer"}
                </button>
              </div>
            ))}
          </div>
        )}
        {tab === "history" && (
          <div>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: "#F2F2F8", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The creeds did not fall from the sky — they were forged in controversy, hammered out in councils, and refined over centuries of theological dispute. Understanding their history illuminates why every word matters.
              </p>
            </div>
            {CREED_HISTORY.map((h, i) => (
              <div key={i} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ color: "#00FF88", fontWeight: 800, fontSize: 16, margin: 0 }}>{h.event}</h3>
                  <span style={{ background: "rgba(107,79,187,0.15)", color: "#6B4FBB", padding: "2px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{h.era}</span>
                </div>
                <p style={{ color: "#F2F2F8", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_CREED.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? "#6B4FBB" : "#12121F", border: `1px solid ${selectedVoice === v.id ? "#6B4FBB" : "#1E1E32"}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: "#F2F2F8", fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: "#9898B3", fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: "#00FF88", fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: "#9898B3", fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: "#F2F2F8", lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: "#07070F", borderLeft: "3px solid #00FF88", borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: "#00FF88", fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: "rgba(107,79,187,0.15)", borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#6B4FBB", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Legacy and Contribution</div>
                  <p style={{ color: "#F2F2F8", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
