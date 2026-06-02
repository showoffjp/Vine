"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "what" | "hours" | "resources" | "howto" | "videos";

const HOURS = [
  { hour: "Vigils / Matins", time: "3–6 AM", latin: "Vigilia / Matutinum", color: PURPLE, tradition: "Monastic", psalm: "Psalm 63:1-8", desc: "The overnight office — practiced by monastic communities who rise in the night to pray before dawn. Based on Psalm 119:62 ('At midnight I rise to praise you') and Luke 6:12 (Jesus praying all night before choosing the Twelve). In the Anglican tradition, Matins (Morning Prayer) absorbed this office and moved it to early morning. Most lay Christians encounter only a liturgical echo of this hour.", modern: "Occasional night prayer; retreat-based vigil services; Holy Saturday vigil (the Great Vigil of Easter)." },
  { hour: "Lauds / Morning Prayer", time: "Sunrise", latin: "Laudes", color: GREEN, tradition: "Universal", psalm: "Psalm 5; Psalm 100; Psalm 150", desc: "The great morning office — greeting God at the beginning of the day with praise. 'Lauds' means praise. The morning office has been central to Christian prayer since the Didache (c. 100 AD), which instructed believers to pray three times daily. The Anglican Book of Common Prayer's Morning Prayer (Cranmer's revision) made the daily office available to lay Christians for the first time — one of the Reformation's most significant gifts.", modern: "Morning Prayer (Anglican/Episcopal BCP); the morning liturgy in many Lutheran and Catholic traditions; any structured morning prayer time." },
  { hour: "Prime", time: "6 AM (First Hour)", latin: "Prima", color: "#3B82F6", tradition: "Monastic / Historical", psalm: "Psalm 1; Psalm 25", desc: "The first hour of the workday — dedicating the beginning of work to God. Prime was the office that opened the working day in monastic communities. It was abolished in the Roman Catholic Church after Vatican II (1970) as redundant with Lauds. Some Anglican and monastic communities retain it. Its spiritual purpose — consecrating the beginning of the workday to God — can be practiced informally by any working Christian.", modern: "A brief prayer at the beginning of the workday; some use Phyllis Tickle's 'The Divine Hours' Morning Office." },
  { hour: "Terce", time: "9 AM (Third Hour)", latin: "Tertia", color: "#EF4444", tradition: "Monastic / New Testament", psalm: "Psalm 119:33-48", desc: "The third hour of the day — the hour of the Holy Spirit's outpouring at Pentecost (Acts 2:15). This office marks the mid-morning pause in work. The Jerusalem community prayed at the third hour (Acts 2:15); Peter went to the rooftop to pray at the sixth hour (Acts 10:9). The three-hour office pattern is rooted in the New Testament's reference to these prayer hours as already established practice.", modern: "A brief mid-morning prayer; some churches observe this as a staff or community prayer time." },
  { hour: "Sext", time: "Noon (Sixth Hour)", latin: "Sexta", color: "#F59E0B", tradition: "Monastic / New Testament", psalm: "Psalm 23; Psalm 121", desc: "The noon office — the hour when Jesus was crucified (Mark 15:33: 'When the sixth hour came, there was darkness'). The noon pause for prayer is one of the most natural of the seven hours for lay Christians — it coincides with the midday meal break. In some traditions, the Angelus bell rings three times daily (6 AM, noon, 6 PM) to mark the Incarnation. The noon hour is also mentioned in Acts 10 as a natural prayer time.", modern: "The Angelus (Catholic); noon prayer in many religious communities; midday chapel services in churches and seminaries." },
  { hour: "None", time: "3 PM (Ninth Hour)", latin: "Nona", color: "#10B981", tradition: "Universal / New Testament", psalm: "Psalm 46; Psalm 91", desc: "The ninth hour — the hour of Jesus's death on the cross ('At the ninth hour Jesus cried out in a loud voice' — Mark 15:34). This is the most theologically charged of the seven hours. Cornelius was praying at the ninth hour when the angel appeared to him (Acts 10:3). The word 'noon' in English is derived from 'None' because the office shifted from 3 PM to midday over time in some traditions.", modern: "3 PM prayer in some Catholic and Anglican communities; the Divine Mercy prayer (Catholic, established by Faustina Kowalska) at 3 PM." },
  { hour: "Vespers / Evening Prayer", time: "Sunset", latin: "Vesperae", color: "#EC4899", tradition: "Universal", psalm: "Psalm 141; Psalm 121; Psalm 134", desc: "The great evening office — marking the end of the day with thanksgiving, the lighting of lamps (echoing Jesus as the light of the world), and prayer for protection through the night. Vespers is one of the two great hinges of the daily office (with Lauds/Morning Prayer). The Magnificat (Mary's Song, Luke 1:46-55) is the traditional evening canticle, prayed daily at Vespers in Catholic, Anglican, and Lutheran traditions.", modern: "Evening Prayer (Anglican BCP); Vespers in Catholic, Lutheran, and Orthodox traditions; any structured evening prayer practice." },
  { hour: "Compline / Night Prayer", time: "Before Sleep", latin: "Completorium", color: "#6366F1", tradition: "Universal", psalm: "Psalm 4; Psalm 91; Psalm 134", desc: "The final office of the day — a brief service of examination, confession, and entrusting oneself to God for the night. Compline has been described as 'the perfect ending to a Christian day.' Psalm 4:8 ('I will lie down and sleep in peace') and Psalm 91's protection promises are characteristic. The ancient practice of examining your conscience before sleep (the Examen, from Jesuit spirituality) fits naturally at Compline.", modern: "Night Prayer (BCP); Compline in Catholic and Anglican communities; informal prayer before sleep; Phyllis Tickle's 'The Divine Hours' Night Office." },
];

const RESOURCES_DATA = [
  { name: "The Divine Hours (3 vols.)", author: "Phyllis Tickle", url: "phyllistickle.com", desc: "The most accessible modern guide to the daily office for lay Christians — organized by season (Autumn, Winter/Spring, Summer). Each day has morning, midday, and vespers prayers with Psalms, Scripture, collects, and canticles. Tickle was a deeply evangelical Anglican and brought the ancient practice within reach of ordinary Protestants. The three-volume set is the most widely used fixed-hour prayer guide among non-liturgical Christians.", color: GREEN },
  { name: "The Book of Common Prayer (1979 or 2019)", author: "The Episcopal/Anglican Church", url: "episcopalchurch.org/bcp", desc: "The Anglican tradition's complete Daily Office — Morning Prayer, Noonday Prayer, Evening Prayer, and Compline — with two 30-day lectionary cycles through the Psalms. Thomas Cranmer's original 1549 BCP was designed to give every lay person access to the cathedral's daily prayer. The 2019 BCP (Anglican Church in North America) is more theologically conservative and includes extended resources.", color: PURPLE },
  { name: "Common Prayer: A Liturgy for Ordinary Radicals", author: "Shane Claiborne, Jonathan Wilson-Hartgrove, Enuma Okoro", url: "commonprayer.net", desc: "A daily office designed for communities and individuals who want to combine ancient prayer forms with contemporary social engagement. Widely used in intentional communities, college students, and people disillusioned with institutional church. Free online version available.", color: "#3B82F6" },
  { name: "Pray as You Go (Podcast)", author: "Jesuit Media Initiatives", url: "pray-as-you-go.org", desc: "Free daily audio prayer guide produced by the Jesuits — 10-13 minutes each day, with music, Scripture, and guided reflection. One of the most downloaded Christian prayer apps in the world. Ideal for a daily commute or morning routine. Theologically rich but broadly accessible across denominations.", color: "#EF4444" },
  { name: "Daily Prayer (Church of England)", author: "Church of England", url: "dailyprayer.org.uk", desc: "The Church of England's free online and app-based daily office — fully liturgical Morning Prayer, Midday Prayer, Evening Prayer, and Night Prayer with seasonal variations, lectionary readings, and traditional canticles. Theologically Anglican but accessible to any Christian wanting structured daily prayer.", color: "#F59E0B" },
  { name: "Laudate App", author: "Aycka Soft", url: "laudateapp.com", desc: "Free Catholic prayer app with the Liturgy of the Hours (Divine Office) in full — all seven hours, all seasons, with the three-year lectionary cycle. The most comprehensive free daily office resource for Catholic and high-church Christians. Also includes the Rosary, Angelus, and Liturgical Calendar.", color: "#10B981" },
];

const WHY = [
  { reason: "The rhythm of prayer shapes the rhythm of the day", color: GREEN, content: "The daily office is not a discipline added onto the Christian life — it is the skeleton around which the Christian day is structured. When morning prayer precedes everything else, the entire day is cast in a different light. When evening prayer closes the day, the temptations and failures of the day are brought to God before sleep. The seven offices of the monastery — and the simplified two-office pattern available to most lay Christians (Morning and Evening Prayer) — create a rhythm of returning to God throughout the day that trains the soul in awareness of his presence." },
  { reason: "Praying the Psalms together with the church through time", color: PURPLE, content: "Most daily office traditions use a lectionary to pray through all 150 Psalms in a fixed cycle (30 days in the Anglican tradition; four weeks in the Roman Catholic). When you pray Morning Prayer using Psalms 63 and 100, you are praying the same texts that Thomas Cranmer prayed, that Cranmer's monasteries prayed before him, that the Benedictines prayed before them, that the Jerusalem church prayed before them, that David wrote. The daily office is participation in a 3,000-year conversation." },
  { reason: "Objective prayer — not just subjective feeling", color: "#3B82F6", content: "Fixed-hour prayer is not dependent on feeling spiritually prepared or motivated. The office is prayed whether you feel like it or not — and in this it resembles going to work, eating meals, and sleeping. This objectivity is its strength: it disciplines the will before the emotions. Martin Luther's counsel to himself during spiritual dryness was not 'try to feel more spiritual' but 'keep to the schedule.' The office shows up for you even when your feelings don't." },
  { reason: "Canticles, collects, and Scripture — formation through repetition", color: "#EF4444", content: "The daily office includes canticles (the Magnificat, the Benedictus, the Nunc Dimittis), collects (brief, structured prayers), and lectionary Scripture readings repeated across years. Formation through repetition is not mindless — it is how the soul is shaped. Generations of Anglicans can recite the Magnificat from memory not because they were instructed to memorize it but because they sang it at Vespers for fifty years. The texts become part of the structure of consciousness." },
  { reason: "Intercession for the whole church and world", color: "#F59E0B", content: "Most daily office traditions include corporate intercession — for the church, for the world, for the suffering, for rulers, for the sick. This prevents prayer from becoming entirely self-focused and trains the Christian to bear the world's burdens in prayer as part of daily practice. Praying for your nation's leader, for persecuted Christians, and for those in poverty every morning — as part of a fixed order rather than as a special occasion — forms a habitual orientation of care toward the world." },
];

export default function DailyOfficePage() {
  const [tab, setTab] = useState<Tab>("what");
  const [selected, setSelected] = useState(HOURS[1].hour);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const sel = HOURS.find(h => h.hour === selected) || HOURS[1];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>🕯️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Daily Office — Fixed-Hour Prayer</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            Two thousand years of structured daily prayer — from monastic vigils to morning prayer at a kitchen table. The seven hours of prayer, why they matter, and how to begin.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["what", "hours", "resources", "howto", "videos"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "what" ? "Why the Daily Office" : t === "hours" ? "The Seven Hours" : t === "resources" ? "Resources" : t === "howto" ? "How to Begin" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {tab === "what" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 22, marginBottom: 10 }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 16, marginBottom: 10 }}>What Is the Daily Office?</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8 }}>The Daily Office (from the Latin officium, duty) is the structured prayer of the church — appointed hours of prayer, Scripture reading, and the Psalms that mark the rhythm of the Christian day. It has its roots in the Jewish practice of three daily prayers (Psalm 55:17; Daniel 6:10), was practiced by the early church (Acts 2:46; 10:3, 9; 3:1), systematized by Benedict of Nursia in the 6th century into the seven hours still prayed in monasteries today, and simplified by Thomas Cranmer in 1549 into Morning and Evening Prayer for ordinary Anglican laypersons.</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginTop: 12 }}>The daily office is not private devotions (though it can be prayed alone) — it is the church's corporate prayer, which individuals participate in whether or not they are physically gathered. When you pray Morning Prayer at your kitchen table, you are joining the global church doing the same thing. The tradition calls this opus Dei — the work of God — because praying the offices is participating in God's own work of intercession for the world.</p>
            </div>
            {WHY.map((w, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[w.reason] ? w.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [w.reason]: !e[w.reason] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: w.color, fontWeight: 800, fontSize: 15 }}>{w.reason}</div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[w.reason] ? "−" : "+"}</span>
                </button>
                {expanded[w.reason] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{w.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "hours" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {HOURS.map((h) => (
                <div key={h.hour} onClick={() => setSelected(h.hour)}
                  style={{ background: CARD, border: `1px solid ${selected === h.hour ? h.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ color: h.color, fontWeight: 800, fontSize: 14 }}>{h.hour}</div>
                      <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{h.time} · {h.latin}</div>
                    </div>
                    <div style={{ background: `${h.color}20`, color: h.color, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{h.tradition}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${sel.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: sel.color, fontWeight: 900, fontSize: 16, marginBottom: 2 }}>{sel.hour}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 12 }}>{sel.time} · {sel.latin} · Traditional Psalms: {sel.psalm}</div>
              <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, marginBottom: 14 }}>{sel.desc}</p>
              <div style={{ background: `${sel.color}10`, border: `1px solid ${sel.color}20`, borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ color: sel.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>MODERN PRACTICE</div>
                <div style={{ color: TEXT, fontSize: 12 }}>{sel.modern}</div>
              </div>
            </div>
          </div>
        )}

        {tab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
            {RESOURCES_DATA.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: r.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{r.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{r.author} · {r.url}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "howto" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 24 }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 16, marginBottom: 14 }}>How to Begin a Daily Office Practice</div>
              {[
                { step: "Start with just two offices — Morning and Evening", desc: "The monastic seven hours is not for most laypeople. The Anglican tradition simplified this to Morning Prayer and Evening Prayer for good reason. Begin with these two and you have a complete structure for the day." },
                { step: "Choose one resource and stay with it for 30 days", desc: "The temptation is to find the perfect resource. Choose one — The Divine Hours, the BCP App, Daily Prayer online, or even a simple Psalm + collect structure — and commit to it for a month before evaluating." },
                { step: "Use a fixed time, not a floating intention", desc: "'When I feel like it' doesn't produce a discipline. Attach Morning Prayer to something fixed: before coffee, at the same time each day, before leaving the house. Attach Evening Prayer to a fixed point: before dinner, after work, before bed." },
                { step: "Begin with the Psalms even if nothing else", desc: "If the full office is too much, begin with a single Psalm in the morning and a single Psalm in the evening. A 30-day Psalm lectionary (rotating through all 150) takes 2-3 minutes per day and produces extraordinary spiritual formation over a year." },
                { step: "Pray it communally when possible", desc: "The daily office was designed for communal prayer — even two people together changes the quality and accountability of the practice. Some churches offer Morning Prayer weekly; some families pray Evening Prayer together at dinner. Find or create community when possible." },
                { step: "Don't let missed days become permanent abandonment", desc: "You will miss days. The structure of the daily office assumes imperfection — the next office is always available at the next appointed hour. The Benedictine tradition says: 'Begin again.' The next opportunity to pray the office is always the most important one." },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: GREEN, color: BG, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{s.step}</div>
                    <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.65 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
