"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PETITIONS = [
  {
    line: "Our Father in heaven",
    section: "Address",
    color: "#6B4FBB",
    meaning: "The address is revolutionary. Jesus teaches his disciples to approach God as Father — not a distant deity, not a judge, not an impersonal force, but a Father. The Aramaic Abba carries the intimacy of 'Daddy.' This address is not presumptuousness — it is the inheritance of those who are adopted through Christ (Romans 8:15). 'Our' is equally significant: prayer is not private consumption. You approach God as a member of a family, not alone.",
    application: "Begin prayer by remembering who you are addressing. Not a vending machine. Not a genie. Not a distant god. Your Father, who knows you fully and loves you completely. Let this settle before you say anything else.",
    older: "The ancient Jewish Kaddish prayer opens similarly: 'Magnified and sanctified be his great name in the world.' Jesus was giving his disciples a pattern within the prayer tradition they knew, and radicalizing it with Father.",
  },
  {
    line: "Hallowed be your name",
    section: "Thy Kingdom",
    color: "#3B82F6",
    meaning: "The first petition is not for anything the disciple needs — it is for God's reputation. 'Hallowed' means 'set apart as holy, treated as holy.' This petition says: let your name be recognized for what it actually is — holy, majestic, worthy. This is worship as petition: I am asking you to be known as you truly are.",
    application: "Before asking for anything, worship. Before presenting your agenda, acknowledge his. The Lord's Prayer deliberately reorients the praying person away from self-centeredness by beginning with God's glory rather than our needs.",
    older: "The Kaddish: 'Magnified and sanctified be his great name.' The opening is not accidental — Jewish prayer tradition begins with praise before petition, and Jesus follows this structure.",
  },
  {
    line: "Your kingdom come, your will be done, on earth as it is in heaven",
    section: "Thy Kingdom",
    color: "#2563EB",
    meaning: "The second and third petitions are inseparable. The kingdom of God comes wherever his will is done. This is a petition for the alignment of earth with heaven — for the rule of God to be as complete and uncontested in human history as it is in the heavenly realm. It is a political petition, an eschatological petition, and a personal surrender all at once: 'your will, not mine.'",
    application: "Praying 'your will be done' is not passive resignation — it is active alignment. It means: I commit to do your will in my sphere today. Where in your life is your will competing with God's? Name it and surrender it in this petition.",
    older: "This petition shaped the entire theology of Christian mission. The church does not create the kingdom; it witnesses to it and prays for its coming. Evangelism, justice work, and compassion ministry are expressions of this prayer.",
  },
  {
    line: "Give us today our daily bread",
    section: "Our Needs",
    color: "#10B981",
    meaning: "'Daily bread' is the request for today's provision — not next week, not next year. The word 'daily' (epiousios) is unusual and may mean 'bread for the coming day.' This petition teaches dependence: you ask for today. You trust for tomorrow. The manna in the wilderness could not be stored — it was given daily. This petition re-trains the soul away from self-sufficiency toward radical trust.",
    application: "What are you anxious about that this petition is meant to address? Make your concrete material needs known to God today — and practice leaving tomorrow's needs with him until tomorrow. This is the prayer that makes anxiety theologically out of place.",
    older: "The church fathers debated whether 'daily bread' is literal (food) or the Eucharist (communion). Most settled on 'both': the bread that sustains physical life and the bread of life (John 6:35) that sustains spiritual life.",
  },
  {
    line: "Forgive us our debts as we also have forgiven our debtors",
    section: "Our Needs",
    color: "#EF4444",
    meaning: "This is the only petition that Jesus immediately comments on after the prayer (Matthew 6:14-15). The connection is stark: your experience of receiving forgiveness and your willingness to give it are linked. Not that you earn forgiveness by forgiving — but that those who have truly received forgiveness cannot withhold it. The unforgiving servant (Matthew 18) illustrates the contradiction of claiming forgiveness while refusing to give it.",
    application: "Before asking God to forgive you, ask: who have I not forgiven? The petition will not be honest if you are nursing a grudge. This is the most uncomfortable line in the prayer — and the most diagnostic.",
    older: "'Debts' (opheilema in Matthew) and 'trespasses' (paraptoma in Luke 11:4) are slightly different words used for the same petition. The early church used 'trespasses' liturgically; many Protestant traditions follow Luke's version.",
  },
  {
    line: "Lead us not into temptation, but deliver us from the evil one",
    section: "Our Needs",
    color: "#7C3AED",
    meaning: "The final petition acknowledges ongoing vulnerability. 'Lead us not into temptation' can also be translated 'do not bring us to the time of trial' — acknowledging that we cannot handle what we think we can. It is the prayer of James 4:13: 'not in my own strength.' 'Deliver us from the evil one' (or 'from evil') names that the source of the deepest threat is personal and spiritual, not merely circumstantial.",
    application: "This petition is most useful as a morning prayer — before the day begins, before the temptation comes. Ask for deliverance structurally, not just in the moment of temptation. Include in this prayer the specific area of your known vulnerability.",
    older: "The Didache (early 2nd century church document) adds the doxology: 'For thine is the kingdom, the power and the glory, forever. Amen.' This addition, absent in earliest manuscripts, entered the liturgy and is still used in Protestant worship.",
  },
];

const MODELS = [
  { title: "Luther's Way to Pray", body: "Martin Luther taught using the Lord's Prayer as a garland: take each petition and 'make a garland' of instruction, thanksgiving, confession, and petition based on it. Don't rush through — let each phrase open into extended reflection. A single petition can sustain fifteen minutes of prayer." },
  { title: "The Daily Office", body: "Many Christian traditions (Anglican, Catholic, Lutheran, Orthodox) pray the Lord's Prayer at multiple fixed hours of the day — morning, noon, and evening. Repeating it multiple times trains the soul in its pattern until the pattern becomes second nature." },
  { title: "Praying the Petitions Separately", body: "Take one petition per day for a week. On Monday, spend your prayer time entirely on 'Our Father in heaven.' On Tuesday, 'Hallowed be your name.' By the end of the week, you have given each petition the attention it deserves." },
  { title: "Singing It", body: "The Lord's Prayer has been set to music in dozens of traditions — Gregorian chant, traditional hymn, contemporary song. Singing prayer engages the body and the memory differently than speaking. Learning a musical setting helps it become memorized scripture." },
];

export default function PrayerOfJesusPage() {
  const [selected, setSelected] = useState("Our Father in heaven");
  const [activeTab, setActiveTab] = useState<"petitions" | "models">("petitions");

  const petition = PETITIONS.find(p => p.line === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🕊️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Lord's Prayer</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            When asked how to pray, Jesus gave a pattern. Six petitions that restructure how we approach God, what we ask for, and who we are when we ask. Every line is a theology lesson.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "petitions" as const, label: "The Petitions", icon: "🙏" },
            { id: "models" as const, label: "How to Pray It", icon: "📖" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "petitions" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 220, flexShrink: 0 }}>
              {PETITIONS.map(p => (
                <button key={p.line} onClick={() => setSelected(p.line)}
                  style={{ width: "100%", background: selected === p.line ? `${p.color}15` : "transparent", border: `1px solid ${selected === p.line ? p.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selected === p.line ? MUTED : MUTED, fontSize: 10, fontWeight: 700, marginBottom: 2 }}>{p.section}</div>
                  <span style={{ color: selected === p.line ? p.color : TEXT, fontWeight: 700, fontSize: 12, lineHeight: 1.4, display: "block" }}>{p.line}</span>
                </button>
              ))}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${petition.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>{petition.section.toUpperCase()}</div>
                  <h2 style={{ color: petition.color, fontWeight: 900, fontSize: 22, lineHeight: 1.4, marginBottom: 0 }}>{petition.line}</h2>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>MEANING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{petition.meaning}</p>
                </div>

                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>APPLICATION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{petition.application}</p>
                </div>

                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>HISTORICAL CONTEXT</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{petition.older}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "models" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <div style={{ color: TEXT, fontWeight: 700, fontSize: 16, marginBottom: 12, lineHeight: 1.6 }}>
                "Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one."
              </div>
              <div style={{ color: MUTED, fontSize: 12 }}>— Matthew 6:9-13</div>
            </div>
            {MODELS.map((m, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{m.title}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{m.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
