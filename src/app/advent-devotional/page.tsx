"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "weeks" | "practices" | "resources";

const THEOLOGY_ITEMS = [
  {
    title: "Advent Is About Two Comings, Not One",
    body: "The word 'advent' (adventus in Latin) means 'coming' or 'arrival.' Advent holds in tension two arrivals: the first coming of Christ as the Incarnate Son in Bethlehem (celebrated at Christmas), and the second coming of Christ in glory to judge the world and make all things new. The church in Advent practices a 'double memory' — we remember and mourn that Israel waited 400 years in silence before the Messiah came; we also anticipate that we are now waiting for his return. Advent refuses to let us rush to joy without first sitting in expectant, repentant longing.",
  },
  {
    title: "The Four Themes of Advent",
    body: "Traditional Advent follows a four-week structure of themes, one per Sunday: (1) Hope — the prophetic hope of Israel, Isaiah's vision of the coming King; (2) Peace — the cessation of hostility between God and humanity and among nations, the Prince of Peace; (3) Joy — the joy announced by the angel to Mary and to the shepherds, joy deeper than happiness; (4) Love — the Father's love that sent the Son, incarnate love, Emmanuel-God-with-us. These themes create a liturgical movement from expectation to fulfillment.",
  },
  {
    title: "Advent Is a Season of Waiting",
    body: "Barbara Brown Taylor calls Advent 'God's time zone, where all the clocks run slow.' The church resists culture's pressure to begin celebrating Christmas in November. Advent disciplines us in waiting — a practice the modern world has lost. We wait alongside Abraham (who waited for a son), Israel (who waited for the Messiah), Anna and Simeon (who waited at the temple). We are the generation that waits between the first and second coming. Waiting is not passive but active — watching, praying, preparing.",
  },
  {
    title: "Repentance and the Desert Fathers",
    body: "John the Baptist dominates weeks 2 and 3 of Advent in the lectionary. He comes from the desert calling for repentance — 'Prepare the way of the Lord, make his paths straight' (Matthew 3:3). Advent has historically included fasting and self-examination alongside the candles and carols. The 'O Antiphons' (December 17-23) are ancient prayers crying 'Come, Lord Jesus!' in seven different forms. The point is not self-flagellation but honest assessment: we are not yet what we will be; Christ's return will complete what his first coming began.",
  },
  {
    title: "The Advent Wreath",
    body: "The Advent wreath consists of four candles in a circle of evergreen, lit one per week through Advent, and sometimes a central white Christ candle lit on Christmas Eve. The circle represents God's eternal nature and the unending cycle of the Christian year. Evergreen represents life in death — hope in dark winter. The progressive lighting of candles represents the growing light of Christ's coming. Each candle's flame adds to the whole — a visual theology of expectation growing toward fulfillment. The practice originated in Lutheran Germany in the 16th century.",
  },
  {
    title: "Advent vs. the Christmas Industrial Complex",
    body: "Western culture begins Christmas on November 1 and ends it on December 25. The church's calendar does the opposite: Advent (preparation, waiting) runs December through Christmas Eve; the Christmas season proper runs December 25 through Epiphany (January 6), celebrating the 12 days. Keeping this counter-cultural calendar is a spiritual discipline — it reorients our year around the birth, life, death, and return of Jesus rather than around consumer holidays. The joy is deeper when it has been preceded by genuine waiting.",
  },
];

const WEEKS_DATA = [
  {
    number: 1,
    theme: "Hope",
    color: PURPLE,
    candleName: "The Prophet's Candle",
    scriptureRefs: ["Isaiah 2:1-5", "Isaiah 64:1-9", "Matthew 24:36-44"],
    reflection: "We begin with the prophets' cry for God to come down and restore his broken world. Read Isaiah 1-9 this week.",
    practice: "Light the first candle. Set aside 15 minutes each morning to read one prophetic passage. Journal: 'What am I still waiting for God to fix in my life/world?'",
    oAntiphon: "O Wisdom (Dec 17): 'O Wisdom, coming forth from the mouth of the Most High.'",
  },
  {
    number: 2,
    theme: "Peace",
    color: PURPLE,
    candleName: "The Bethlehem Candle",
    scriptureRefs: ["Isaiah 11:1-10", "Matthew 3:1-12", "Romans 15:4-13"],
    reflection: "John is the hinge between old covenant and new — the last prophet, the voice in the wilderness. He calls us to prepare our hearts through repentance. What in your life needs to be made straight?",
    practice: "Add a short period of fasting this week (skip one meal, fast from social media). Use the time for prayer and self-examination.",
    oAntiphon: "O Lord (Dec 18): 'O Lord and Ruler of the house of Israel.'",
  },
  {
    number: 3,
    theme: "Joy",
    color: "#D4608A",
    candleName: "The Shepherd's Candle",
    scriptureRefs: ["Isaiah 35:1-10", "James 5:7-10", "Matthew 11:2-11"],
    reflection: "Gaudete means 'rejoice' (Philippians 4:4). Even John the Baptist had doubts in prison — 'Are you the one who is to come?' Jesus' answer: the blind see, the deaf hear, the dead are raised. Advent joy is not denial of suffering but confidence in what is coming.",
    practice: "Write a letter of gratitude to someone who has been a 'voice in the wilderness' in your life.",
    oAntiphon: "O Root of Jesse (Dec 19): 'O Root of Jesse, standing as a signal for the peoples.'",
  },
  {
    number: 4,
    theme: "Love",
    color: PURPLE,
    candleName: "The Angel's Candle",
    scriptureRefs: ["Isaiah 7:10-16", "Romans 1:1-7", "Matthew 1:18-25"],
    reflection: "Mary's 'Let it be to me according to your word' (Luke 1:38) is the model of Advent receptivity. God's love takes flesh through a human yes. The incarnation is the pivot of all history — Emmanuel means 'God with us.'",
    practice: "On Christmas Eve, light the Christ candle. Read Luke 1:46-55 (the Magnificat) aloud. Sing a traditional carol slowly.",
    oAntiphon: "O Emmanuel (Dec 23): 'O Emmanuel, our King and Lawgiver, the Desire of nations and their Savior.'",
  },
];

const PRACTICES_DATA = [
  {
    title: "Daily Scripture Reading",
    body: "Use the Revised Common Lectionary's Advent readings. Each day has an OT, Psalm, Epistle, and Gospel. Read them in order. Many churches post free daily readings online.",
  },
  {
    title: "The Jesse Tree",
    body: "An ancient practice of reading one OT story per day leading to Christmas (Abraham, Moses, David, Isaiah, etc.), hanging a symbol on a tree or branch. Each ornament represents a 'link in the chain' from creation to Incarnation. Great for families with children.",
  },
  {
    title: "Advent Fasting",
    body: "In the early church, Advent was a fasting season like Lent. Consider: fasting one day per week, fasting from entertainment (streaming, social media) for 30-60 minutes daily, redirecting the time to prayer and the Scripture readings.",
  },
  {
    title: "The O Antiphons",
    body: "Seven ancient Latin prayers sung or prayed December 17-23, each addressing Christ by an Old Testament title: O Wisdom, O Lord, O Root of Jesse, O Key of David, O Rising Sun, O King of the Nations, O Emmanuel. They form the basis of the hymn 'O Come O Come Emmanuel.'",
  },
  {
    title: "Advent with Family",
    body: "Light the Advent wreath candle together each evening at dinner. Read a short Scripture, sing one verse of an Advent hymn, pray together. The Jesse Tree ornament ritual gives children tangible connection to biblical narrative. Delay Christmas gifts until Christmas Day.",
  },
  {
    title: "Evening Prayer",
    body: "Use Advent evenings for Compline or simple evening prayer. Pray Psalms 141 and 130 (traditional Advent lament psalms). Conclude with the ancient prayer: 'Come, Lord Jesus. Amen.'",
  },
];

const RESOURCES_DATA = [
  {
    title: "Come Thou Long Expected Jesus",
    author: "Kevin DeYoung & Sinclair Ferguson",
    publisher: "Crossway",
    description: "Excellent short Advent devotional from Reformed perspective",
  },
  {
    title: "God With Us",
    author: "Edited by Gregory Wolfe",
    publisher: "Paraclete Press",
    description: "Literary Advent anthology: essays, poems, fiction from Madeleine L'Engle, Luci Shaw, and others",
  },
  {
    title: "Watch for the Light",
    author: "Plough Publishing",
    publisher: "Plough",
    description: "Daily readings for Advent and Christmas from Kierkegaard, Bonhoeffer, Merton, Barth, Chesterton",
  },
  {
    title: "The Revised Common Lectionary",
    author: "Free online",
    publisher: "lectionary.library.vanderbilt.edu",
    description: "The church's 3-year cycle of Scripture readings, organized for Advent, Christmas, and every Sunday",
  },
  {
    title: "O Come All Ye Faithful (Advent Songs)",
    author: "Sand & Sea, Indelible Grace, Rain for Roots",
    publisher: "Playlist",
    description: "A playlist of Advent hymns done well",
  },
  {
    title: "Advent: The Once & Future Coming of Jesus Christ",
    author: "Fleming Rutledge",
    publisher: "Eerdmans",
    description: "The definitive theological treatment of Advent by a leading preacher-theologian",
  },
];

const STATS = [
  { value: "4 weeks", label: "leading to Christmas" },
  { value: "Year Start", label: "Advent begins the Christian year" },
  { value: "4th century", label: "Rooted in early church practice" },
  { value: "Adventus", label: "Advent means 'coming' in Latin" },
];

const TABS: { id: Tab; label: string }[] = [
  { id: "theology", label: "Theology of Advent" },
  { id: "weeks", label: "The Four Weeks" },
  { id: "practices", label: "Advent Practices" },
  { id: "resources", label: "Resources" },
];

export default function AdventDevotionalPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [openAccordion, setOpenAccordion] = useState<number | undefined>(undefined);
  const [selectedWeek, setSelectedWeek] = useState<number>(0);

  function toggleAccordion(index: number) {
    setOpenAccordion(openAccordion === index ? undefined : index);
  }

  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        paddingTop: 40,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 48px" }}>
        <div
          style={{
            display: "inline-block",
            backgroundColor: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 6,
            padding: "4px 12px",
            fontSize: 12,
            color: PURPLE,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Liturgical Season
        </div>
        <h1
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: TEXT,
            margin: "0 0 16px",
            lineHeight: 1.15,
          }}
        >
          Advent: Waiting With the Church
        </h1>
        <p
          style={{
            fontSize: 17,
            color: MUTED,
            lineHeight: 1.75,
            maxWidth: 700,
            margin: 0,
          }}
        >
          Advent is not early Christmas. It is the church's season of expectant waiting — for the first coming remembered, and the second coming anticipated. Four weeks of preparation, repentance, and joy.
        </p>
      </div>

      {/* Stats Banner */}
      <div
        style={{
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          backgroundColor: CARD,
          marginBottom: 48,
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "24px 16px",
                borderRight: i < STATS.length - 1 ? `1px solid ${BORDER}` : "none",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 700, color: GREEN, marginBottom: 4 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 36,
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: 0,
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${GREEN}` : "2px solid transparent",
                color: activeTab === tab.id ? TEXT : MUTED,
                padding: "10px 18px",
                fontSize: 14,
                fontWeight: activeTab === tab.id ? 600 : 400,
                cursor: "pointer",
                marginBottom: -1,
                transition: "color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1 — Theology */}
        {activeTab === "theology" && (
          <div style={{ paddingBottom: 64 }}>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
              The theological foundations of the Advent season — what it is, what it is not, and why it matters for the church.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {THEOLOGY_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 8,
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(i)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      padding: "20px 24px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: 12,
                    }}
                  >
                    <span style={{ fontSize: 16, fontWeight: 600, color: TEXT, lineHeight: 1.4 }}>
                      {item.title}
                    </span>
                    <span
                      style={{
                        color: MUTED,
                        fontSize: 20,
                        flexShrink: 0,
                        transform: openAccordion === i ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                        lineHeight: 1,
                      }}
                    >
                      ↓
                    </span>
                  </button>
                  {openAccordion === i && (
                    <div
                      style={{
                        padding: "0 24px 24px",
                        fontSize: 15,
                        color: MUTED,
                        lineHeight: 1.8,
                        borderTop: `1px solid ${BORDER}`,
                        paddingTop: 16,
                      }}
                    >
                      {item.body}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2 — The Four Weeks */}
        {activeTab === "weeks" && (
          <div style={{ paddingBottom: 64 }}>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
              Each of the four Sundays of Advent carries its own theme, scripture, candle, and practice. Explore each week below.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {/* Left column — week buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flexShrink: 0, width: 180 }}>
                {WEEKS_DATA.map((week, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedWeek(i)}
                    style={{
                      background: selectedWeek === i ? PURPLE : CARD,
                      border: `1px solid ${selectedWeek === i ? PURPLE : BORDER}`,
                      borderRadius: 8,
                      padding: "14px 16px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.15s",
                    }}
                  >
                    <div style={{ fontSize: 11, color: selectedWeek === i ? "#C8B8F0" : MUTED, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Week {week.number}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: selectedWeek === i ? "#FFFFFF" : TEXT }}>
                      {week.theme}
                    </div>
                  </button>
                ))}
              </div>

              {/* Right sticky detail panel */}
              <div style={{ flex: 1 }}>
                {(() => {
                  const w = WEEKS_DATA[selectedWeek];
                  return (
                    <div
                      style={{
                        backgroundColor: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 12,
                        padding: 28,
                        position: "sticky",
                        top: 24,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                        <div
                          style={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            backgroundColor: w.color,
                            boxShadow: `0 0 8px ${w.color}`,
                            flexShrink: 0,
                          }}
                        />
                        <div>
                          <div style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                            Week {w.number} — {w.candleName}
                          </div>
                          <div style={{ fontSize: 22, fontWeight: 700, color: TEXT }}>
                            {w.theme}
                          </div>
                        </div>
                      </div>

                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 11, color: GREEN, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8, fontWeight: 600 }}>
                          Scripture
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {w.scriptureRefs.map((ref, j) => (
                            <span
                              key={j}
                              style={{
                                backgroundColor: BG,
                                border: `1px solid ${BORDER}`,
                                borderRadius: 4,
                                padding: "3px 10px",
                                fontSize: 12,
                                color: MUTED,
                              }}
                            >
                              {ref}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 11, color: GREEN, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8, fontWeight: 600 }}>
                          Reflection
                        </div>
                        <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                          {w.reflection}
                        </p>
                      </div>

                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 11, color: GREEN, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8, fontWeight: 600 }}>
                          Practice
                        </div>
                        <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                          {w.practice}
                        </p>
                      </div>

                      <div
                        style={{
                          backgroundColor: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          padding: "14px 16px",
                        }}
                      >
                        <div style={{ fontSize: 11, color: PURPLE, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6, fontWeight: 600 }}>
                          O Antiphon
                        </div>
                        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>
                          {w.oAntiphon}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3 — Practices */}
        {activeTab === "practices" && (
          <div style={{ paddingBottom: 64 }}>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
              Concrete disciplines for observing Advent as a season of waiting, preparation, and expectation.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
            >
              {PRACTICES_DATA.map((practice, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 10,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 6,
                      backgroundColor: PURPLE,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: 14,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: TEXT, marginBottom: 10, lineHeight: 1.4 }}>
                    {practice.title}
                  </div>
                  <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.75 }}>
                    {practice.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4 — Resources */}
        {activeTab === "resources" && (
          <div style={{ paddingBottom: 64 }}>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
              Books, recordings, and online tools for deepening your Advent observance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {RESOURCES_DATA.map((resource, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 10,
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      backgroundColor: BG,
                      border: `1px solid ${BORDER}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      color: GREEN,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: TEXT, marginBottom: 4 }}>
                      {resource.title}
                    </div>
                    <div style={{ fontSize: 12, color: PURPLE, marginBottom: 6 }}>
                      {resource.author} — {resource.publisher}
                    </div>
                    <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>
                      {resource.description}
                    </div>
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
