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

export default function CreedsPage() {
  const [tab, setTab] = useState<"creeds" | "prayers">("creeds");
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
          {([["creeds", "Creeds"], ["prayers", "Historic Prayers"]] as const).map(([t, label]) => (
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
      </div>
    </div>
  );
}
