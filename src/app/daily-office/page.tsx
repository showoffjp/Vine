"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#c9a227";

const OFFICES = {
  morning: {
    title: "Morning Prayer",
    time: "6–8 AM",
    color: GOLD,
    icon: "🌅",
    opening: { label: "Opening Versicle", text: "O Lord, open my lips, and my mouth shall proclaim your praise.", response: "Thanks be to God." },
    canticle: { title: "Venite — Psalm 95:1-7", text: "Come, let us sing to the LORD; let us shout aloud to the Rock of our salvation. Let us come before him with thanksgiving and extol him with music and song. For the LORD is the great God, the great King above all gods. In his hand are the depths of the earth, and the mountain peaks belong to him. The sea is his, for he made it, and his hands formed the dry land. Come, let us bow down in worship, let us kneel before the LORD our Maker; for he is our God and we are the people of his pasture, the flock under his care." },
    readings: [
      { type: "Old Testament", ref: "Isaiah 55:1-9", text: "Come, all you who are thirsty, come to the waters; and you who have no money, come, buy and eat! Come, buy wine and milk without money and without cost. Why spend money on what is not bread, and your labor on what does not satisfy? Listen, listen to me, and eat what is good, and you will delight in the richest of fare. Give ear and come to me; listen, that you may live..." },
      { type: "Psalm", ref: "Psalm 5:1-8", text: "Listen to my words, LORD, consider my lament. Hear my cry for help, my King and my God, for to you I pray. In the morning, LORD, you hear my voice; in the morning I lay my requests before you and wait expectantly. For you are not a God who is pleased with wickedness; with you, evil people are not welcome..." },
      { type: "Gospel", ref: "Mark 1:35", text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed." },
    ],
    collect: "Almighty God, you have given us this new day. Strengthen us to do your will, that we may bring you honor and glory in all that we do. Through Jesus Christ our Lord. Amen.",
    prayers: ["For those we will encounter today", "For wisdom in our work and responsibilities", "For protection and guidance", "For those who are suffering this morning"],
  },
  midday: {
    title: "Midday Prayer",
    time: "12 PM",
    color: GREEN,
    icon: "☀️",
    opening: { label: "Opening", text: "O God, make speed to save us.", response: "O Lord, make haste to help us." },
    canticle: { title: "A Song of Creation", text: "Glorify the Lord, all you works of the Lord, praise him and highly exalt him forever. In the firmament of his power, glorify the Lord, praise him and highly exalt him forever. Glorify the Lord, O chill and cold, drops of dew and flakes of snow, frost and cold, ice and sleet; glorify the Lord, praise him and highly exalt him forever." },
    readings: [
      { type: "Psalm", ref: "Psalm 119:57-64", text: "You are my portion, LORD; I have promised to obey your words. I have sought your face with all my heart; be gracious to me according to your promise. I have considered my ways and have turned my steps to your statutes. I will hasten and not delay to obey your commands." },
      { type: "Scripture", ref: "Matthew 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light." },
    ],
    collect: "Lord God, you have called your servants to ventures of which we cannot see the ending, by paths as yet untrodden, through perils unknown. Give us faith to go out with good courage, not knowing where we go, but only that your hand is leading us and your love supporting us; through Jesus Christ our Lord. Amen.",
    prayers: ["Pause from the day's busyness", "Intercession for ongoing needs", "Thanksgiving for the morning", "Renewed surrender of the afternoon"],
  },
  evening: {
    title: "Evening Prayer",
    time: "6–8 PM",
    color: PURPLE,
    icon: "🌆",
    opening: { label: "Opening Versicle", text: "O God, make speed to save us.", response: "O Lord, make haste to help us." },
    canticle: { title: "Phos Hilaron (O Gladsome Light) — 3rd Century", text: "O gracious Light, pure brightness of the everliving Father in heaven, O Jesus Christ, holy and blessed! Now as we come to the setting of the sun, and our eyes behold the vesper light, we sing your praises, O God: Father, Son, and Holy Spirit. You are worthy at all times to be praised by happy voices, O Son of God, O Giver of life, and to be glorified through all the worlds." },
    readings: [
      { type: "Psalm", ref: "Psalm 4:6-8", text: "Many, LORD, are asking, 'Who will bring us prosperity?' Let the light of your face shine on us. Fill my heart with joy when their grain and new wine abound. In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety." },
      { type: "Old Testament", ref: "Deuteronomy 6:4-9", text: "Hear, O Israel: The LORD our God, the LORD is one. Love the LORD your God with all your heart and with all your soul and with all your strength. These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up." },
      { type: "Epistle", ref: "Ephesians 6:10-17", text: "Finally, be strong in the Lord and in his mighty power. Put on the full armor of God, so that you can take your stand against the devil's schemes. For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms..." },
    ],
    collect: "Lord Jesus, stay with us, for evening is at hand and the day is past; be our companion in the way, kindle our hearts, and awaken hope, that we may know you as you are revealed in Scripture and the breaking of bread. Grant this for the sake of your love. Amen.",
    prayers: ["Examination of the day — where did I see God? Where did I fall short?", "Confession and reception of forgiveness", "Intercession for family and neighbors", "Surrender of unfinished things"],
  },
  compline: {
    title: "Compline (Night Prayer)",
    time: "Before Sleep",
    color: "#3B82F6",
    icon: "🌙",
    opening: { label: "Opening", text: "The Lord Almighty grant us a peaceful night and a perfect end.", response: "Amen." },
    canticle: { title: "Nunc Dimittis — Luke 2:29-32", text: "Lord, now let your servant go in peace; your word has been fulfilled. My own eyes have seen the salvation which you have prepared in the sight of every people: a light to reveal you to the nations and the glory of your people Israel." },
    readings: [
      { type: "Psalm", ref: "Psalm 91:1-6", text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the LORD, 'He is my refuge and my fortress, my God, in whom I trust.' Surely he will save you from the fowler's snare and from the deadly pestilence. He will cover you with his feathers, and under his wings you will find refuge..." },
      { type: "Final Reading", ref: "1 Peter 5:8-9", text: "Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour. Resist him, firm in your faith, knowing that the same kinds of suffering are being experienced by your brotherhood throughout the world." },
    ],
    collect: "Be present, O merciful God, and protect us through the silent hours of this night, so that we who are wearied by the changes and chances of this fleeting world may repose upon your eternal changelessness; through Jesus Christ our Lord. Amen.",
    prayers: ["Confession of the day's failures", "Gratitude for the day's gifts", "Commendation of sleep to God", "Peace for the night"],
  },
};

const HISTORY = [
  { period: "The Ancient Church (1st–5th Century)", color: GREEN, desc: "The daily offices developed from Jewish prayer practices — the Psalms were the prayer book of the Temple. The early Christians inherited the practice of praying at set hours. The Didache (c. 100 AD) instructs prayer three times daily. By the 3rd century, Tertullian, Origen, and Cyprian all reference a pattern of prayer at dawn, midday, and evening. The Desert Fathers organized their entire communal life around the office." },
  { period: "The Benedictine Rule (6th Century)", color: PURPLE, desc: "St. Benedict codified the monastic hours in his famous Rule (c. 530 AD): Vigils (2-3 AM), Lauds (dawn), Prime (6 AM), Terce (9 AM), Sext (noon), None (3 PM), Vespers (sunset), and Compline (before sleep). 'Ora et Labora' — prayer and work — became the rhythm of monastic life. 'Seven times a day I praise you' (Ps. 119:164) was taken as a literal prescription." },
  { period: "The Reformation (16th Century)", color: GOLD, desc: "Thomas Cranmer's 1549 Book of Common Prayer condensed the eight monastic hours into two daily offices — Morning Prayer (Matins) and Evening Prayer (Evensong) — accessible to laypeople, not just monks. The genius of Cranmer's daily office was that it read the entire Psalter monthly and the New Testament twice yearly — formation through Scripture, not just petition." },
  { period: "The Modern Recovery (20th–21st Century)", color: "#3B82F6", desc: "The practice of fixed-hour prayer has seen a remarkable revival among Protestants and evangelicals who were not raised with liturgical tradition. Phyllis Tickle's 'The Divine Hours' (2000-2001) brought the daily office to millions of non-liturgical Christians. The popularity of the Book of Common Prayer, Common Prayer: A Liturgy for Ordinary Radicals, and daily office apps has made this ancient rhythm newly available." },
];

type Tab = "offices" | "history" | "howto" | "videos";
type OfficeKey = "morning" | "midday" | "evening" | "compline";

export default function DailyOfficePage() {
  const [tab, setTab] = useState<Tab>("offices");
  const [selectedOffice, setSelectedOffice] = useState<OfficeKey>("morning");

  const office = OFFICES[selectedOffice];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ background: "linear-gradient(135deg, #050e07 0%, #0d1408 50%, #07070F 100%)", padding: "100px 24px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,162,39,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)", borderRadius: 6, padding: "5px 16px", fontSize: 11, color: GOLD, fontWeight: 700, letterSpacing: 2, marginBottom: 20, textTransform: "uppercase" }}>Spiritual Disciplines</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 300, color: "#f2e6c8", marginBottom: 16, lineHeight: 1.1 }}>
            The Daily Office
          </h1>
          <p style={{ color: "#9a8f72", fontSize: 16, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>
            An ancient rhythm of prayer — four times a day, every day — drawn from Scripture, canticles, and the Psalms. Practiced by Christians for two thousand years.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {["Morning Prayer", "Midday", "Evening Prayer", "Compline", "1,500 Year History"].map(tag => (
              <span key={tag} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: MUTED }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0 28px", overflowX: "auto" }}>
          {([
            { id: "offices" as const, label: "The Four Offices", icon: "🕐" },
            { id: "history" as const, label: "History", icon: "📜" },
            { id: "howto" as const, label: "How to Start", icon: "🌱" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
          ]).map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? GREEN : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "offices" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {(Object.keys(OFFICES) as OfficeKey[]).map(key => {
                const o = OFFICES[key];
                return (
                  <button key={key} onClick={() => setSelectedOffice(key)}
                    style={{ flex: 1, minWidth: 120, padding: "12px 16px", borderRadius: 10, border: `1px solid ${selectedOffice === key ? o.color : BORDER}`, background: selectedOffice === key ? `${o.color}18` : CARD, cursor: "pointer", transition: "all 0.2s ease", textAlign: "center" }}>
                    <div style={{ fontSize: 20, marginBottom: 4 }}>{o.icon}</div>
                    <div style={{ color: selectedOffice === key ? o.color : TEXT, fontWeight: 700, fontSize: 13 }}>{o.title}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{o.time}</div>
                  </button>
                );
              })}
            </div>
            <div style={{ background: CARD, border: `1px solid ${office.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 28 }}>{office.icon}</span>
                  <div>
                    <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: office.color, fontSize: 24, fontWeight: 700, margin: 0 }}>{office.title}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>{office.time}</div>
                  </div>
                </div>
                <span style={{ background: `${office.color}15`, color: office.color, padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>Fixed-Hour Prayer</span>
              </div>

              {/* Opening Versicle */}
              <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 16, borderLeft: `3px solid ${office.color}` }}>
                <div style={{ color: office.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 10, textTransform: "uppercase" }}>{office.opening.label}</div>
                <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 16, color: "#f2e6c8", fontStyle: "italic", marginBottom: 6 }}>{office.opening.text}</div>
                <div style={{ color: MUTED, fontSize: 14 }}>Response: {office.opening.response}</div>
              </div>

              {/* Canticle */}
              <div style={{ background: `${office.color}08`, border: `1px solid ${office.color}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                <div style={{ color: office.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 10, textTransform: "uppercase" }}>Canticle — {office.canticle.title}</div>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 15, fontStyle: "italic", color: "#f2e6c8", lineHeight: 1.75, margin: 0 }}>{office.canticle.text}</p>
              </div>

              {/* Scripture Readings */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 10, textTransform: "uppercase" }}>Scripture Readings</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {office.readings.map((r, i) => (
                    <div key={i} style={{ background: BG, borderRadius: 8, padding: 16, border: `1px solid ${BORDER}` }}>
                      <div style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "center" }}>
                        <span style={{ background: `${office.color}15`, color: office.color, padding: "2px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700 }}>{r.type}</span>
                        <span style={{ color: MUTED, fontSize: 12 }}>{r.ref}</span>
                      </div>
                      <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 15, fontStyle: "italic", color: "#f2e6c8", lineHeight: 1.7, margin: 0 }}>{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collect */}
              <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 16, border: `1px solid ${office.color}25` }}>
                <div style={{ color: office.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 10, textTransform: "uppercase" }}>The Collect</div>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 16, fontStyle: "italic", color: "#f2e6c8", lineHeight: 1.8, margin: 0 }}>{office.collect}</p>
              </div>

              {/* Prayer Intentions */}
              <div>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 10, textTransform: "uppercase" }}>Suggested Prayers</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {office.prayers.map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", background: BG, borderRadius: 7, border: `1px solid ${BORDER}` }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: office.color, flexShrink: 0 }} />
                      <span style={{ color: TEXT, fontSize: 14 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "history" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 4 }}>
              <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>The daily office is not a medieval invention — it is rooted in Jewish practice and continuous in the Christian tradition from the apostolic age to the present day. To pray the daily office is to join a two-thousand-year river of prayer.</p>
            </div>
            {HISTORY.map((h, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${h.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: h.color, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>{h.period}</div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 14, margin: 0 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "howto" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>The daily office was designed to be accessible — not just for monks but for ordinary people. You do not need a printed prayer book or a church to start. Begin with one office. Do it for two weeks. Then add another.</p>
            </div>
            {[
              { step: 1, title: "Start with Morning Prayer only", color: GOLD, desc: "Pick a time in the morning before the day's demands begin. 10-15 minutes is enough. Use the Morning Office structure above: opening versicle, one psalm, one Scripture reading, collect, and a brief prayer for those you will encounter. Do this for two weeks before adding anything else." },
              { step: 2, title: "Get a resource", color: GREEN, desc: "Options: Phyllis Tickle's 'The Divine Hours' (3 volumes, most comprehensive), Shane Claiborne's 'Common Prayer: A Liturgy for Ordinary Radicals' (more contemporary), the Book of Common Prayer (traditional), or the 'Daily Office' app. Any of these will carry you through." },
              { step: 3, title: "Add Evening Prayer", color: PURPLE, desc: "After a few weeks of consistent morning prayer, add the evening office. The evening examen — where did I see God today? Where did I fall short? — is one of the most transformative spiritual practices available. Even 5 minutes of reflective evening prayer reshapes how you live through the day." },
              { step: 4, title: "Develop a pattern", color: "#3B82F6", desc: "The goal is not perfection but consistency. You will miss mornings. You will fall asleep during Compline. You will skip a week. Come back. The daily office rewards perseverance with a slow and profound transformation of the habitual orientation of your heart toward God." },
              { step: 5, title: "Pray with others when possible", color: "#EF4444", desc: "The daily office was designed for communal practice. Many churches offer weekly or daily morning prayer services. Some small groups use the daily office as a shared rhythm. Even a text to a friend with the day's psalm creates an experience of the communion of prayer that transcends physical location." },
            ].map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 12, padding: 22, marginBottom: 12, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${s.color}15`, border: `2px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, color: s.color, flexShrink: 0 }}>{s.step}</div>
                <div>
                  <div style={{ color: s.color, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{s.title}</div>
                  <p style={{ color: TEXT, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {[
              { title: "The Daily Office Explained", id: "cAIJGFp9Myo", desc: "An introduction to fixed-hour prayer" },
              { title: "Phyllis Tickle on The Divine Hours", id: "3NsHWAKXXXo", desc: "The scholar who recovered the daily office for evangelicals" },
              { title: "Morning Prayer Service — BCP", id: "HW6fHFgYFuo", desc: "A traditional Morning Prayer service" },
              { title: "The Daily Office for Modern Christians", id: "V9TmJ2WwEaE", desc: "How to integrate fixed-hour prayer into contemporary life" },
            ].map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", background: "#000" }}>
                  <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: TEXT, marginBottom: 4 }}>{v.title}</div>
                  <div style={{ fontSize: 12, color: MUTED }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
