"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "why-pray", label: "Why Pray?" },
  { id: "lords-prayer", label: "Lord's Prayer" },
  { id: "types", label: "Types of Prayer" },
  { id: "unanswered", label: "Unanswered Prayer" },
  { id: "intercession", label: "Intercession" },
  { id: "developing", label: "Developing a Life" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const PRAYER_TEXTS = [
  { ref: "Matthew 6:9–13", text: "This, then, is how you should pray: 'Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one.'", color: GREEN },
  { ref: "Philippians 4:6–7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", color: BLUE },
  { ref: "Romans 8:26–27", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.", color: TEAL },
  { ref: "1 Thessalonians 5:16–18", text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.", color: GOLD },
  { ref: "James 5:16", text: "The prayer of a righteous person is powerful and effective. Elijah was a human being, even as we are. He prayed earnestly that it would not rain, and it did not rain on the land for three and a half years.", color: PURPLE },
];

const WHY_PRAY = [
  {
    title: "God Commands and Invites Us to Pray",
    desc: "Prayer is both command (Phil 4:6; 1 Thess 5:17) and invitation (Matt 7:7–8: 'ask, seek, knock'). God could have arranged the world without prayer; he chose to make our asking part of his purposes. This is an astonishing honor — the Creator invites his creatures to participate in governing the world through intercession.",
    color: GREEN,
  },
  {
    title: "Prayer Doesn't Change God's Mind — It Changes Things",
    desc: "The classic objection: if God is sovereign, why pray? But Scripture shows God genuinely responds to prayer (James 5:16–18; Ex 32:14; Jer 18:7–10). The mystery: God sovereignly ordains both his purposes and the prayers that are the means of their fulfillment. Our prayers are not the cause of God's change of mind but the means through which his purposes unfold.",
    color: BLUE,
  },
  {
    title: "Prayer Changes the Pray-er",
    desc: "Beyond changing circumstances, prayer transforms the one who prays — aligning desires with God's will, cultivating trust, producing humility, and shaping the heart toward God. Even when God says no, the praying person is formed by the relationship. Richard Foster: 'To pray is to change.'",
    color: TEAL,
  },
  {
    title: "Prayer Is Participation in the Trinitarian Life",
    desc: "Ephesians 2:18: 'access to the Father through [the Son] by one Spirit.' Prayer is not just communication with a distant God — it is being drawn into the life of the Trinity. We pray to the Father, through the Son, empowered by the Spirit. Prayer is participation, not just petition.",
    color: GOLD,
  },
  {
    title: "Prayer and the Kingdom",
    desc: "'Your kingdom come, your will be done on earth as in heaven' — the Lord's Prayer puts kingdom advance at the center of prayer. Intercession for the world, for the lost, for justice, for missionaries: this is kingdom prayer that participates in God's mission. Prayer is part of how the kingdom spreads.",
    color: PURPLE,
  },
];

const LORDS_PRAYER_PETITIONS = [
  { petition: "Our Father in heaven", meaning: "Address", desc: "Establishes the relationship — not 'my' but 'our,' not 'God' but 'Father.' The intimacy of the address is revolutionary: Jesus gives us the right to call God 'Abba' (Rom 8:15). Prayer begins with relationship, not need.", color: GOLD },
  { petition: "Hallowed be your name", meaning: "Adoration", desc: "Before any request: recognition of who God is. 'Hallowed' — may your name be set apart, honored, glorified. Adoration reorients the pray-er from self-centeredness to God-centeredness. The first movement of prayer is worship.", color: TEAL },
  { petition: "Your kingdom come, your will be done", meaning: "Submission", desc: "Kingdom-oriented prayer — inviting God's reign to break in. 'Your will be done' is submission of our desires to God's purposes, not merely resignation but active alignment. Jesus prayed this in Gethsemane (Matt 26:42).", color: PURPLE },
  { petition: "Give us today our daily bread", meaning: "Petition", desc: "Daily dependence — not annual provision but today's need. Trains us away from anxious self-sufficiency and toward constant trust in the Father who provides. 'Daily' bread echoes manna — God's provision in small, regular portions.", color: BLUE },
  { petition: "Forgive us our debts", meaning: "Confession", desc: "Regular acknowledgment of sin and reliance on God's forgiveness. The linked clause — 'as we forgive our debtors' — is not a condition for God's forgiveness but an acknowledgment that those who receive grace must extend grace.", color: RED },
  { petition: "Lead us not into temptation", meaning: "Dependence", desc: "Recognition that we are not strong enough to navigate the world alone. God does not tempt (James 1:13) but does permit testing. This petition asks God to guard us from situations where our weakness would be our undoing.", color: GREEN },
];

const PRAYER_TYPES = [
  { name: "Adoration", desc: "Pure praise and worship of God for who he is — not for what he does. 'Great is the LORD and most worthy of praise' (Ps 48:1). Adoration lifts the focus from self and need to the nature and glory of God.", color: GOLD },
  { name: "Confession", desc: "Honest acknowledgment of sin — specific and named rather than generic. 1 John 1:9: 'If we confess our sins, he is faithful and just to forgive.' Confession clears relational debris and restores intimacy with God.", color: RED },
  { name: "Thanksgiving", desc: "Gratitude for specific gifts and provisions — not just a feeling but a discipline. Philippians 4:6: 'with thanksgiving.' Thanksgiving trains the heart toward contentment and trust by naming God's actual goodness.", color: TEAL },
  { name: "Supplication", desc: "Asking — for oneself (petition) and for others (intercession). The most common form of prayer, yet the model (Lord's Prayer) places it last — after adoration and submission have shaped the asking.", color: BLUE },
  { name: "Contemplative Prayer", desc: "Silent attentiveness before God — not speaking but listening. Lectio divina, centering prayer (with appropriate discernment), and the examen are contemplative forms. The aim is deeper awareness of God's presence and voice.", color: PURPLE },
  { name: "Corporate Prayer", desc: "Praying together — the gathered church, small group, prayer meeting, family. Acts 4:24–31: the early church prayed together in crisis and the building shook. Jesus: 'where two or three gather in my name, there I am with them' (Matt 18:20).", color: GREEN },
  { name: "Extemporaneous Prayer", desc: "Spontaneous, informal conversation with God throughout the day — 'praying continually' (1 Thess 5:17). Brother Lawrence called this 'practicing the presence of God.' The aim is a continuous rather than scheduled communion.", color: TEAL },
];

const UNANSWERED_PRAYER = [
  {
    title: "God Says Yes",
    desc: "Many prayers are answered — James 5:16–18 (Elijah's prayer), John 16:23–24 ('ask in my name and you will receive'), 1 John 5:14–15 (confidence when we ask according to his will). The testimony of Scripture and Christian history is that prayer changes things.",
    color: GREEN,
  },
  {
    title: "God Says No",
    desc: "Paul's thorn in the flesh (2 Cor 12:7–10): asked three times for removal; God said 'my grace is sufficient.' God's no is not a failure of prayer or faith but a deeper answer: 'my strength is made perfect in weakness.' No is a word of grace when it redirects us to greater good.",
    color: RED,
  },
  {
    title: "God Says Wait",
    desc: "Psalm 27:14: 'Wait for the LORD; be strong and take heart and wait for the LORD.' Delay is not denial. God's timing is not our timing. The waiting itself becomes a formation — stretching faith, building perseverance, developing trust in God's wisdom rather than our preferences.",
    color: GOLD,
  },
  {
    title: "Obstacles to Answered Prayer",
    desc: "Scripture identifies obstacles: unconfessed sin (Ps 66:18; Isa 59:2), wrong motives ('you ask with wrong motives, that you may spend what you get on your pleasures' — James 4:3), relational breakdown (1 Pet 3:7 — 'so that nothing will hinder your prayers'), and lack of faith (James 1:6). These are diagnostic rather than discouraging.",
    color: BLUE,
  },
];

const DEVELOPING_PRAYER = [
  { step: 1, title: "Start with the Lord's Prayer", desc: "Pray through the Lord's Prayer slowly — not as a recitation but as a structure. Allow each petition to become a full conversation: adore, confess, submit, ask for today's needs." },
  { step: 2, title: "Use the ACTS Framework", desc: "Adoration → Confession → Thanksgiving → Supplication. A simple four-part structure that ensures prayer is not just a list of requests." },
  { step: 3, title: "Build a Regular Time and Place", desc: "The disciples' question ('teach us to pray' — Luke 11:1) came from observing Jesus's habit of withdrawing to pray. Consistent time and place — before the demands of the day — creates the container for sustained prayer." },
  { step: 4, title: "Pray Scripture", desc: "Praying the words of Scripture — especially the Psalms — gives language when words fail and aligns prayer with God's revealed will. The Puritans, the Desert Fathers, and contemplatives all used Scripture as the grammar of prayer." },
  { step: 5, title: "Keep a Prayer Journal", desc: "Record prayers and answers over time. This builds faith by creating evidence of God's faithfulness that accumulates across months and years. N.T. Wright: 'Prayer is a way of making the past and future present.'" },
  { step: 6, title: "Pray With Others", desc: "The prayer meeting, the spouse, the small group: praying aloud together is one of the most powerful and transformative practices available. It overcomes self-consciousness, models prayer for others, and creates solidarity." },
];

const INTERCESSION_CONTENT = [
  { title: "What Is Intercession?", desc: "Intercession is standing before God on behalf of others — pleading their case, presenting their needs, asking God to act in their lives. Moses (Ex 32:11–14), Abraham (Gen 18:22–33), Paul (Eph 1:16–23; 3:14–21), and Jesus himself (John 17; Heb 7:25) all model intercession.", color: BLUE },
  { title: "Priestly Intercession", desc: "Under the new covenant, every believer is a priest (1 Pet 2:9) with direct access to God. The priest's role includes intercession for others. This gives every Christian a profound calling: to stand before God for their family, their community, the nations.", color: GOLD },
  { title: "Intercession and Social Justice", desc: "The great intercessors — Wilberforce, Booth, Romero — connected prayer and action for justice. Intercession without action risks passivity; action without prayer risks human-centered pragmatism. The intercessor stands at the intersection of God's kingdom and the world's need.", color: GREEN },
  { title: "Interceding for the Lost", desc: "Paul's deep anguish for Israel (Rom 9:1–3) and desire that all be saved (1 Tim 2:1–4) models intercessory prayer for unbelievers. This is not wishful thinking but faith that God hears and acts — and that our prayers matter for the eternal destiny of those we love.", color: TEAL },
];

const VIDEOS = [
  { videoId: "jDdM0ZWWX7g", title: "A Theology of Prayer — Tim Keller" },
  { videoId: "BnLi7mG1qrQ", title: "Why God Answers Prayer — John Piper" },
  { videoId: "5bYiCN-ygoc", title: "The Lord's Prayer Explained — N.T. Wright" },
  { videoId: "jH9Hs-FVS0s", title: "How to Develop a Prayer Life — Paul Miller" },
  { videoId: "D7oWsEzxbg8", title: "Unanswered Prayer — R.C. Sproul" },
];

export default function PrayerTheologyGuidePage() {
  const [tab, setTab] = useLocalStorage("vine_prayth_tab", "overview");
  const [openWhy, setOpenWhy] = useLocalStorage("vine_prayth_why", "");
  const [openType, setOpenType] = useLocalStorage("vine_prayth_type", "");
  const [openUnanswered, setOpenUnanswered] = useLocalStorage("vine_prayth_unans", "");
  const [journal, setJournal] = useLocalStorage("vine_prayth_journal", "");

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>🙏</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: TEAL, textTransform: "uppercase" }}>Spiritual Practice</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            A Theology of Prayer
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            Why pray if God already knows what we need? What is the Lord&apos;s Prayer really teaching? How do we pray when God seems silent? This guide covers the theology, the models, the types of prayer, unanswered prayer, intercession, and how to build a rich, sustaining prayer life.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? TEAL : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? TEAL : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Key Texts on Prayer</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {PRAYER_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GOLD }}>Prayer&apos;s Paradox</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                &quot;Pray as though everything depends on God. Work as though everything depends on you.&quot; — Augustine
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>
                Prayer holds together human agency and divine sovereignty. We ask — urgently, persistently, expectantly. God acts — according to his wisdom, timing, and purposes. The mystery is that both are real and neither undermines the other.
              </p>
            </div>
          </div>
        )}

        {tab === "why-pray" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GREEN }}>Why Pray? The Theology of Prayer</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              If God is omniscient and sovereign, what is the point of prayer? Several reasons — each deepening our understanding of what prayer is.
            </p>
            {WHY_PRAY.map((item, i) => {
              const key = String(i);
              const open = openWhy === key;
              return (
                <div key={item.title}>
                  <button type="button" style={accordionBtn(open, item.color)} onClick={() => setOpenWhy(open ? "" : key)}>
                    <span>{item.title}</span>
                    <span style={{ color: item.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "lords-prayer" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>The Lord&apos;s Prayer: Line by Line</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Jesus&apos;s model prayer (Matt 6:9–13) is not merely a text to recite — it is a structure for prayer that moves through address, adoration, submission, petition, confession, and dependence.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {LORDS_PRAYER_PETITIONS.map((item) => (
                <div key={item.petition} style={{ background: `${item.color}08`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1rem 1.25rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "baseline", marginBottom: "0.4rem" }}>
                    <span style={{ fontWeight: 800, color: item.color }}>"{item.petition}"</span>
                    <span style={{ fontSize: "0.8rem", color: MUTED }}>— {item.meaning}</span>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "types" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: BLUE }}>Types of Prayer</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Prayer is not one-dimensional. Scripture and the Christian tradition have developed a rich vocabulary for the different forms of prayer — each cultivating a different aspect of the relationship with God.
            </p>
            {PRAYER_TYPES.map((p, i) => {
              const key = String(i);
              const open = openType === key;
              return (
                <div key={p.name}>
                  <button type="button" style={accordionBtn(open, p.color)} onClick={() => setOpenType(open ? "" : key)}>
                    <span style={{ fontWeight: 800 }}>{p.name}</span>
                    <span style={{ color: p.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${p.color}0A`, border: `1px solid ${p.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{p.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "unanswered" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: RED }}>Unanswered Prayer</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              One of the greatest pastoral challenges: praying earnestly and hearing silence. Scripture is honest about this — and gives a richer framework than &quot;just have more faith.&quot;
            </p>
            {UNANSWERED_PRAYER.map((item, i) => {
              const key = String(i);
              const open = openUnanswered === key;
              return (
                <div key={item.title}>
                  <button type="button" style={accordionBtn(open, item.color)} onClick={() => setOpenUnanswered(open ? "" : key)}>
                    <span>{item.title}</span>
                    <span style={{ color: item.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "intercession" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: BLUE, margin: 0 }}>Intercessory Prayer</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Intercession — standing before God on behalf of others — is one of the most significant callings of the believer. Paul&apos;s intercessory prayers (Eph 1:16–23; 3:14–21; Phil 1:9–11) model the depth and breadth of praying for others.
            </p>
            {INTERCESSION_CONTENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "developing" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>Developing a Prayer Life</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {DEVELOPING_PRAYER.map((item) => (
                <div key={item.step} style={{ display: "flex", gap: "1rem", background: `${GREEN}08`, border: `1px solid ${GREEN}25`, borderRadius: 12, padding: "1rem 1.25rem" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${GREEN}20`, border: `1px solid ${GREEN}60`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: GREEN, flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 800, color: GREEN, marginBottom: "0.3rem" }}>{item.title}</div>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Prayer Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "1rem" }}>What is your current prayer life like? What aspect of prayer — adoration, confession, intercession, contemplation — do you most want to grow in? What obstacle is most significant for you?</p>
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
            {journal && <div style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: MUTED }}>Auto-saved · {journal.length} characters</div>}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on Prayer</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{v.title}</div>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Prayer", href: "/prayer" },
            { label: "Unanswered Prayer", href: "/prayer-answered-no" },
            { label: "Spiritual Formation Guide", href: "/spiritual-formation-guide" },
            { label: "Fasting Guide", href: "/fasting-guide" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
