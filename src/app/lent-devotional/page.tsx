"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "journey" | "practices" | "holyweek" | "journal" | "videos";

const THEOLOGY_ITEMS = [
  {
    title: "What Is Lent?",
    body: "Lent is the 40-day liturgical season from Ash Wednesday through Holy Saturday, preparing the church for Easter. The number 40 is deeply biblical: Moses on Sinai (Exod 34:28), Elijah's journey (1 Kings 19:8), and most importantly Jesus's 40 days in the wilderness (Matt 4:1-11). Lent invites Christians to enter that wilderness with Jesus — to be tested, emptied, and renewed before the celebration of resurrection. It is not a season of morbid self-flagellation but of honest self-examination in light of the cross.",
  },
  {
    title: "Repentance and the Ash Wednesday Invitation",
    body: "Ash Wednesday opens Lent with the imposition of ashes and the words 'Remember that you are dust, and to dust you shall return' (Genesis 3:19). This is not pessimism but realism — the honest admission of mortality and sin that precedes the good news of resurrection. In many traditions, the ash is made from burning the previous year's Palm Sunday branches — a symbol of turning from palms-and-hosannas enthusiasm to the long road of discipleship. The ashes are a public sign of private penitence.",
  },
  {
    title: "Fasting as Spiritual Discipline",
    body: "Lent has historically involved three disciplines from Jesus's Sermon on the Mount: almsgiving (giving), prayer (deepened), and fasting (from food or other things). Fasting in Lent is not legalistic but formative — it trains the body that it is not ultimate, creates space for prayer, and aligns the body with the suffering of Christ. Historic observances include abstaining from meat on Fridays, partial fasts on Ash Wednesday and Good Friday. Modern adaptations include fasting from social media, entertainment, or specific foods.",
  },
  {
    title: "Lament as a Lenten Discipline",
    body: "Lent makes room for the full range of human emotion before God. The psalms of lament (Ps 22, 51, 88, 130) are central Lenten texts. Where Advent teaches us to wait and Advent is penitential, Lent intensifies this: we walk with Jesus toward the cross, knowing what is coming. The Stations of the Cross — a Catholic and increasingly Protestant practice — structure a meditative walk through Jesus's passion. Lament is not faithlessness; it is the honest expression of the distance between the world as it is and the world as God intends it.",
  },
  {
    title: "Holy Week as the Heart of Lent",
    body: "Lent culminates in Holy Week: Palm Sunday (triumphal entry), Monday-Wednesday (teachings in the temple), Maundy Thursday (the Last Supper and foot-washing), Good Friday (the crucifixion), Holy Saturday (the silence of the tomb), Easter Sunday (the resurrection). Each day of Holy Week has its own texture. Good Friday is the most solemn — no Communion, no bells, stripped altars. Holy Saturday teaches us to sit in the disorientation of death before resurrection, which is the condition of all human life.",
  },
  {
    title: "Easter Makes Lent Worth Keeping",
    body: "Lent is not the destination — Easter is. But without Lent, Easter becomes shallow. The 40-day journey strips away complacency, cultivates hunger for God, and makes the resurrection proclamation land with full weight. As Fleming Rutledge writes: 'The church that does not prepare for Easter through Lent tends to produce a Christianity without a cross.' The joy of Easter Sunday is proportional to the depth of the Lenten journey. Every Sunday in Lent is a 'mini-Easter' — fasting is suspended on Sundays because every Sunday celebrates the resurrection.",
  },
];

const JOURNEY_MILESTONES = [
  {
    number: 1,
    title: "Ash Wednesday: Enter the Wilderness",
    scripture: "Matthew 4:1-11, Joel 2:12-18",
    reflection: "Begin with ashes and the reminder of mortality. Confess sin specifically. Begin a Lenten practice (fast, prayer discipline, almsgiving commitment). Sit with silence.",
    practice: "Attend an Ash Wednesday service; if none available, mark your forehead with a cross of oil and read Matthew 4 aloud.",
  },
  {
    number: 2,
    title: "Week 1: The Temptation",
    scripture: "Luke 4:1-13, Psalm 91",
    reflection: "Jesus is tempted in the areas of physical need, spiritual pride, and political power. Where do you feel tempted in these same ways? The Spirit drives Jesus into the wilderness — wilderness is not abandonment but divine preparation.",
    practice: "Identify your Lenten fast and begin; keep a brief journal noting when hunger/craving arises.",
  },
  {
    number: 3,
    title: "Week 2: The Call to Follow",
    scripture: "Mark 8:31-38, Genesis 17:1-7",
    reflection: "Jesus predicts his death and calls disciples to take up their cross. This is the pivot of the Gospel. What does cross-carrying look like in your specific life?",
    practice: "Practice giving (almsgiving): choose a specific Lenten giving focus — a local ministry, a food bank, International Justice Mission.",
  },
  {
    number: 4,
    title: "Week 3: Living Water",
    scripture: "John 4:5-42, Exodus 17:1-7",
    reflection: "The woman at the well — outcaste, multiply-married, seeking in the wrong places. Jesus offers water that becomes 'a spring of water welling up to eternal life.' Where are you drawing water from sources that leave you thirsty?",
    practice: "Fast from social media for one day this week; spend that time in prayer and John's Gospel.",
  },
  {
    number: 5,
    title: "Week 4: Light in the Darkness (Laetare Sunday)",
    scripture: "John 9:1-41, 1 Samuel 16:1-13",
    reflection: "Laetare ('Rejoice') Sunday — the midpoint of Lent, a breath of Easter light. The man born blind is given sight. Jesus is the Light of the world. What do you need to see more clearly?",
    practice: "Write a Lenten reflection or letter of gratitude; take one act of intentional joy this Sunday.",
  },
  {
    number: 6,
    title: "Holy Week: Walk with Jesus to the Cross",
    scripture: "Matthew 21-27, Isaiah 52:13-53:12",
    reflection: "Enter each day of Holy Week with Scripture and prayer: Palm Sunday triumph, Maundy Thursday foot-washing and the Lord's Supper, Good Friday vigil at the cross, Holy Saturday in silence, Easter Sunday explosion of joy.",
    practice: "Read Isaiah 52-53 on Good Friday. Attend a Good Friday service. Wake early on Easter Sunday and go to an outdoor sunrise service.",
  },
];

const PRACTICES_DATA = [
  {
    title: "Choosing Your Lenten Fast",
    body: "Don't fast from something meaningless. Choose something that creates genuine space: a meal per day, social media, streaming, alcohol, dessert. The test: Does this create actual hunger or restlessness that can be redirected to prayer?",
  },
  {
    title: "Daily Lenten Reading",
    body: "Use a Lenten lectionary (RCL) or a devotional guide (Fleming Rutledge's 'Advent: The Once and Future Coming' extends to Lent; Walter Wangerin's 'Reliving the Passion' is a classic). Read the Gospel of Mark in one sitting — perfect for Lent.",
  },
  {
    title: "The Examen During Lent",
    body: "The Daily Examen (see /daily-examen) is particularly suited to Lent: at night, review the day with God. Where was God? Where did you fail? Where were you invited and declined? Confess specifically. Rest in grace.",
  },
  {
    title: "Stations of the Cross",
    body: "A devotional walk through 14 traditional moments of the Passion. Many churches hold Stations on Fridays during Lent. You can also use a written or app-based guide alone. It combines physical movement, Scripture, and meditative prayer.",
  },
  {
    title: "Lenten Almsgiving",
    body: "Lent has always included generosity alongside fasting. Redirect money saved through fasting (that meal you didn't buy) to someone in need. Partner with a specific organization for 40 days. Consider: World Relief, International Justice Mission, your local food pantry.",
  },
  {
    title: "Praying the Psalms of Lent",
    body: "Key Lenten psalms: 22 (My God, why?), 51 (Create in me a clean heart), 130 (Out of the depths), 32 (Blessed is the one whose sin is forgiven), 143 (Do not bring your servant into judgment). Read one per day through Lent, slowly, aloud.",
  },
];

const HOLY_WEEK_DAYS = [
  {
    label: "Palm Sunday",
    scripture: "Matthew 21:1-11",
    theme: "The triumphal entry — the King comes humbly on a donkey. The crowd shouts 'Hosanna!' — which means 'Save us now!' They expected a military king. Jesus came as a suffering servant.",
    reflection: "What do you want Jesus to be vs. who he actually is?",
    practice: "Attend a Palm Sunday service; carry a palm branch home as a reminder.",
  },
  {
    label: "Monday",
    scripture: "Mark 11:15-19",
    theme: "Jesus cleanses the temple — overturning the money-changers, restoring the house of prayer for all nations. A prophetic act against religion without heart.",
    reflection: "What 'tables' in your own spiritual life need to be overturned?",
    practice: "Take 30 minutes to journal: where has religion replaced relationship for you?",
  },
  {
    label: "Tuesday",
    scripture: "Mark 12:1-44",
    theme: "Jesus teaches in the temple — the parable of the tenants, the great commandment, the widow's offering. He exposes the religious leaders' hypocrisy.",
    reflection: "Are you like the scribes — performing religion for recognition? Or like the widow — giving everything out of love?",
    practice: "Memorize Mark 12:30-31.",
  },
  {
    label: "Wednesday",
    scripture: "Mark 14:1-11",
    theme: "Mary anoints Jesus — an extravagant act of love and anticipatory burial preparation. Judas begins the betrayal.",
    reflection: "Mary's extravagant worship versus Judas's calculation. What would it look like to love Jesus wastefully?",
    practice: "Read Isaiah 53 slowly aloud.",
  },
  {
    label: "Maundy Thursday",
    scripture: "John 13:1-17, 31-35, Luke 22:14-23",
    theme: "The Last Supper — foot-washing, the new commandment (mandatum = Maundy), the institution of the Eucharist. Jesus takes the posture of a slave.",
    reflection: "Who in your life needs you to take the basin and towel?",
    practice: "Attend a Maundy Thursday service with foot-washing; receive Communion.",
  },
  {
    label: "Good Friday",
    scripture: "John 18-19, Psalm 22",
    theme: "'It is finished' (John 19:30). The atonement accomplished. The veil torn. The cost of sin paid. The center of all history.",
    reflection: "Sit at the cross. Name what Jesus bore for you specifically.",
    practice: "Attend a Good Friday service; fast if possible; observe three hours of silence (12-3 pm, the hours of the crucifixion).",
  },
  {
    label: "Holy Saturday",
    scripture: "Matthew 27:57-66, Psalm 88",
    theme: "The silence between death and resurrection. The disciples are shattered. The tomb is sealed. Hope appears dead. This is the condition of much of human life — between the tragedy and the not-yet-resolution.",
    reflection: "Where are you living in Holy Saturday?",
    practice: "Keep unusual silence and restraint today. No streaming, no noise. Read Lamentations 3. Go to an Easter Vigil tonight if possible.",
  },
];

const STATS = [
  { value: "40 days (excluding Sundays)", label: "" },
  { value: "Begins on Ash Wednesday", label: "" },
  { value: "Practiced since the 4th century", label: "" },
  { value: "Mirrors Christ's 40 days in the wilderness", label: "" },
];

const TABS: { id: Tab; label: string }[] = [
  { id: "theology", label: "Theology of Lent" },
  { id: "journey", label: "The Lenten Journey" },
  { id: "practices", label: "Lenten Practices" },
  { id: "holyweek", label: "Holy Week Guide" },
  { id: "journal", label: "📓 My Journal" },
  { id: "videos", label: "🎬 Videos" },
];

export default function LentDevotionalPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_lent-devotional_tab", "theology");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const [ldEntries, setLdEntries] = useState<{ id: string; date: string; fast: string; reflection: string; intention: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_lentd_entries") ?? "[]"); } catch { return []; }
  });
  const [ldForm, setLdForm] = useState({ fast: "", reflection: "", intention: "" });
  const [ldSaved, setLdSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_lentd_entries", JSON.stringify(ldEntries)); } catch {} }, [ldEntries]);
  const saveLdEntry = () => {
    if (!ldForm.fast.trim()) return;
    setLdEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...ldForm }, ...prev]);
    setLdForm({ fast: "", reflection: "", intention: "" });
    setLdSaved(true); setTimeout(() => setLdSaved(false), 2000);
  };
  const deleteLdEntry = (id: string) => setLdEntries(prev => prev.filter(e => e.id !== id));

  function toggleAccordion(index: number) {
    setOpenAccordion(openAccordion === index ? null : index);
  }

  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        paddingTop: 80,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <Navbar />
      <main id="main-content">
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
          Lent: Forty Days of Repentance and Renewal
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
          Lent is the church's 40-day preparation for Easter — a season of fasting, repentance, self-examination, and renewed focus on the cross and resurrection of Jesus Christ.
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
              <div style={{ fontSize: 15, fontWeight: 700, color: GREEN, marginBottom: 4, lineHeight: 1.3 }}>
                {stat.value}
              </div>
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
          }}
        >
          {TABS.map((tab) => (
            <button type="button"
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

        {/* Tab 1 — Theology of Lent */}
        {activeTab === "theology" && (
          <div style={{ paddingBottom: 64 }}>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
              The theological foundations of the Lenten season — what it is, why the church keeps it, and what it means to walk with Jesus toward the cross.
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
                  <button type="button"
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
                        padding: "16px 24px 24px",
                        fontSize: 15,
                        color: MUTED,
                        lineHeight: 1.8,
                        borderTop: `1px solid ${BORDER}`,
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

        {/* Tab 2 — The Lenten Journey */}
        {activeTab === "journey" && (
          <div style={{ paddingBottom: 64 }}>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
              A week-by-week guide through the 40 days of Lent — from Ash Wednesday to Holy Week — with Scripture, reflection, and practice for each stage.
            </p>
            <div style={{ position: "relative", paddingLeft: 40 }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: 15,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  backgroundColor: BORDER,
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {JOURNEY_MILESTONES.map((milestone, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    {/* Circle marker */}
                    <div
                      style={{
                        position: "absolute",
                        left: -33,
                        top: 20,
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: PURPLE,
                        border: `2px solid ${BG}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    >
                      {milestone.number}
                    </div>
                    <div
                      style={{
                        backgroundColor: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 10,
                        padding: 24,
                      }}
                    >
                      <div style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 12, lineHeight: 1.3 }}>
                        {milestone.title}
                      </div>

                      <div style={{ marginBottom: 14 }}>
                        <span
                          style={{
                            display: "inline-block",
                            backgroundColor: BG,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 4,
                            padding: "3px 10px",
                            fontSize: 12,
                            color: GREEN,
                            fontWeight: 600,
                            letterSpacing: "0.04em",
                            marginBottom: 6,
                          }}
                        >
                          Scripture
                        </span>
                        <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>
                          {milestone.scripture}
                        </div>
                      </div>

                      <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 11, color: PURPLE, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6, fontWeight: 600 }}>
                          Reflection
                        </div>
                        <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                          {milestone.reflection}
                        </p>
                      </div>

                      <div
                        style={{
                          backgroundColor: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          padding: "12px 16px",
                        }}
                      >
                        <div style={{ fontSize: 11, color: GREEN, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6, fontWeight: 600 }}>
                          Practice
                        </div>
                        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                          {milestone.practice}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3 — Lenten Practices */}
        {activeTab === "practices" && (
          <div style={{ paddingBottom: 64 }}>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
              Concrete disciplines for observing Lent as a season of fasting, prayer, and renewed attention to the cross.
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

        {/* Tab 4 — Holy Week Guide */}
        {activeTab === "holyweek" && (
          <div style={{ paddingBottom: 64 }}>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
              A day-by-day guide through Holy Week — from Palm Sunday to Holy Saturday — with Scripture, theme, reflection, and practice for each day.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {/* Left column — day buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flexShrink: 0, width: 170 }}>
                {HOLY_WEEK_DAYS.map((day, i) => (
                  <button type="button"
                    key={i}
                    onClick={() => setSelectedDay(i)}
                    style={{
                      background: selectedDay === i ? PURPLE : CARD,
                      border: `1px solid ${selectedDay === i ? PURPLE : BORDER}`,
                      borderRadius: 8,
                      padding: "12px 16px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.15s",
                    }}
                  >
                    <div style={{ fontSize: 14, fontWeight: 600, color: selectedDay === i ? "#FFFFFF" : TEXT, lineHeight: 1.3 }}>
                      {day.label}
                    </div>
                    <div style={{ fontSize: 11, color: selectedDay === i ? "#C8B8F0" : MUTED, marginTop: 2 }}>
                      {day.scripture}
                    </div>
                  </button>
                ))}
              </div>

              {/* Right sticky detail panel */}
              <div style={{ flex: 1 }}>
                {(() => {
                  const day = HOLY_WEEK_DAYS[selectedDay];
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
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4 }}>
                          Holy Week
                        </div>
                        <div style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 6 }}>
                          {day.label}
                        </div>
                        <span
                          style={{
                            display: "inline-block",
                            backgroundColor: BG,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 4,
                            padding: "3px 10px",
                            fontSize: 12,
                            color: GREEN,
                            fontWeight: 600,
                          }}
                        >
                          {day.scripture}
                        </span>
                      </div>

                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 11, color: GREEN, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8, fontWeight: 600 }}>
                          Theme
                        </div>
                        <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                          {day.theme}
                        </p>
                      </div>

                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 11, color: GREEN, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8, fontWeight: 600 }}>
                          Reflection
                        </div>
                        <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
                          {day.reflection}
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
                          Practice
                        </div>
                        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                          {day.practice}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Lenten Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>Record your fast, reflections, and intentions throughout Lent.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                <input value={ldForm.fast} onChange={e => setLdForm(f => ({ ...f, fast: e.target.value }))}
                  placeholder="What are you fasting from or practicing?" aria-label="Fast"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <textarea value={ldForm.reflection} onChange={e => setLdForm(f => ({ ...f, reflection: e.target.value }))}
                  placeholder="What is God revealing through this season?" aria-label="Reflection"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, minHeight: 80, resize: "vertical", fontFamily: "inherit" }} />
                <input value={ldForm.intention} onChange={e => setLdForm(f => ({ ...f, intention: e.target.value }))}
                  placeholder="Your intention for this period (optional)" aria-label="Intention"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <button type="button" onClick={saveLdEntry}
                  style={{ padding: "10px 20px", background: GREEN, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", alignSelf: "flex-start" }}>
                  {ldSaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
              {ldEntries.length === 0 && <p style={{ color: MUTED, fontSize: 14 }}>No entries yet. Record your first Lenten reflection above.</p>}
              {ldEntries.map(e => (
                <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                    <button type="button" onClick={() => deleteLdEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 14 }}>✕</button>
                  </div>
                  <p style={{ color: TEXT, fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>{e.fast}</p>
                  {e.reflection && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: "0 0 4px" }}>{e.reflection}</p>}
                  {e.intention && <p style={{ color: GREEN, fontSize: 13, fontStyle: "italic", margin: 0 }}>→ {e.intention}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on Lent, repentance, and the journey toward Holy Week.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "mC-zw0zCCtg", title: "What Is Lent? Prayer, Fasting, Almsgiving", channel: "Bishop Robert Barron", description: "Barron explains the three pillars of Lent — prayer, fasting, and almsgiving — and why this ancient season of preparation remains vital for the church today." },
                  { videoId: "UWTYX17JGnI", title: "Lent: A Season of Repentance", channel: "Gospel Coalition", description: "A biblical and pastoral exploration of Lent as a season that invites Christians into the practices of repentance, self-examination, and renewed dependence on grace." },
                  { videoId: "f3VY6pTKm3s", title: "Lent Series: Returning to the Heart of God", channel: "St. Andrew's Church", description: "A series on Lent as a journey of returning — tracing the movements of the prodigal son as a template for the Lenten journey from wandering to homecoming." },
                  { videoId: "QS04WbSnxok", title: "The Meaning and Purpose of Lent", channel: "Catholic Answers", description: "An accessible overview of the history and spiritual purpose of Lent, including how Protestant and Catholic traditions approach this season of preparation differently." },
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
