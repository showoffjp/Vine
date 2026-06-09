"use client";

import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

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
  { id: "structure", label: "5 Discourses" },
  { id: "infancy", label: "Birth & Baptism" },
  { id: "kingdom", label: "Kingdom of Heaven" },
  { id: "parables", label: "Parables" },
  { id: "christology", label: "Christology" },
  { id: "passion", label: "Passion & Resurrection" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const DISCOURSES = [
  {
    id: "d1",
    title: "Discourse 1: Sermon on the Mount (Matt 5–7)",
    ref: "Matthew 5:1–7:29",
    content: "The kingdom manifesto. Jesus as the new Moses on a new Sinai. Eight Beatitudes describe the citizens of the kingdom. Six antitheses (\'You have heard… but I say\') deepen Torah rather than abolish it — moving from action to motive. The Lord\'s Prayer, warnings on piety, anxiety, and judging, and the two-ways conclusion (wise builder/foolish builder). The crowd\'s astonishment: \'he taught as one who had authority, not as their teachers of the law\' (7:29).",
  },
  {
    id: "d2",
    title: "Discourse 2: Mission Discourse (Matt 10)",
    ref: "Matthew 10:1–42",
    content: "Sending the Twelve. Instructions for mission: travel light, stay in worthy houses, shake dust from feet. Warnings about persecution — \'I am sending you out like sheep among wolves.\' Sayings about fear and fearlessness. The mission anticipates future church mission (10:18 — dragged before governors). Three \'whoever receives\' sayings close the discourse — receiving disciples = receiving Christ = receiving the Father.",
  },
  {
    id: "d3",
    title: "Discourse 3: Parables Discourse (Matt 13)",
    ref: "Matthew 13:1–53",
    content: "Seven kingdom parables. Sower and soils — only the explanation is given, explaining why Jesus teaches in parables (to those with ears to hear). Wheat and tares — judgment delayed until harvest. Mustard seed and yeast — the kingdom starts small but grows to fill everything. Hidden treasure and pearl — the kingdom demands everything. Dragnet — final separation. Matthew alone adds: the scribe trained for the kingdom brings out old and new.",
  },
  {
    id: "d4",
    title: "Discourse 4: Community Discourse (Matt 18)",
    ref: "Matthew 18:1–35",
    content: "How the church community should live together. The greatest in the kingdom = child-like humility. Warning against causing little ones to stumble — millstone sayings. The lost sheep (one of ninety-nine): God\'s pastoral heart. Church discipline in three steps (18:15–17): private correction → two or three witnesses → bring to the church. Where two or three gather in my name. The unforgiving servant — forgiving \'seventy-seven times\' because we have been forgiven an infinite debt.",
  },
  {
    id: "d5",
    title: "Discourse 5: Olivet Discourse (Matt 24–25)",
    ref: "Matthew 24:1–25:46",
    content: "Signs of the end and the coming of the Son of Man. Near-term: fall of Jerusalem (70 AD). Long-term: the tribulation and the parousia. \'No one knows the day or hour\' — not even the Son. Four parables of readiness: faithful/wicked servant, ten virgins (wise vs foolish), talents (faithfulness in stewardship), sheep and goats (final judgment by how we treated the least of these). The sheep and goats passage (25:31–46) is among the most socially challenging texts in the NT.",
  },
];

const INFANCY = [
  {
    title: "Genealogy & Title (Matt 1:1–17)",
    color: GOLD,
    body: "\'The book of the genealogy of Jesus Christ, son of David, son of Abraham.\' Three sets of fourteen generations (Abraham → David; David → exile; exile → Christ). Five women are included — Tamar, Rahab, Ruth, Bathsheba (\'wife of Uriah\'), Mary — all with irregular stories pointing to the grace that comes through unlikely channels. The genealogy establishes Jesus as the heir of Israel\'s whole story.",
  },
  {
    title: "Birth & Fulfillment Quotations (Matt 1:18–2:23)",
    color: GREEN,
    body: "Matthew alone has the Magi, Herod\'s slaughter of innocents, and the flight to Egypt. Four \'fulfillment quotations\' in the infancy narrative: Isa 7:14 (virgin/Immanuel), Mic 5:2 (Bethlehem ruler), Hos 11:1 (out of Egypt), and Jer 31:15 (Rachel weeping). Matthew reads OT typologically — Jesus recapitulates Israel\'s story: the exodus from Egypt, the survival of the infant Moses-figure, and the return to the land.",
  },
  {
    title: "Baptism & Temptation (Matt 3:1–4:11)",
    color: TEAL,
    body: "John the Baptist is the voice crying in the wilderness (Isa 40). Jesus\' baptism: the heavens open, the Spirit descends as a dove, the Father speaks: \'This is my beloved Son, with whom I am well pleased\' (Ps 2:7 + Isa 42:1 — Son and Servant). The Temptation in the wilderness mirrors Israel\'s 40 years. Jesus answers each temptation with Deuteronomy — he is the obedient Israel that the nation failed to be.",
  },
  {
    title: "Calling of Disciples & Early Ministry (Matt 4:12–25)",
    color: PURPLE,
    body: "Jesus moves to Capernaum — \'Galilee of the Gentiles\' (Isa 9:1–2) — inaugurating the kingdom\'s reach beyond Israel\'s borders. The first disciples are called from their nets: \'Follow me, and I will make you fishers of men.\' Jesus teaches in synagogues, proclaims the gospel of the kingdom, and heals every disease. The summary (4:23–25) frames the Sermon on the Mount as the content of his teaching.",
  },
];

const KINGDOM_ITEMS = [
  {
    title: "What Does \'Kingdom of Heaven\' Mean?",
    color: GOLD,
    body: "Matthew alone uses \'Kingdom of Heaven\' (about 32x) rather than \'Kingdom of God\' — most likely a Jewish reverential circumlocution for the divine name, not a different concept. The kingdom is both present (\'has come near\' — 4:17; already operative in exorcisms, 12:28) and future (the Son of Man coming on clouds — 24:30). This \'already-not-yet\' tension runs through all the parables. Citizens of the kingdom live by its ethics now because its full arrival is certain.",
  },
  {
    title: "Kingdom Ethics vs. Mere Moralism",
    color: GREEN,
    body: "The Sermon on the Mount is often misread as a stricter law-keeping. But Jesus opens with grace (Beatitudes) and says he came not to abolish the law but to fulfill it (5:17). The antitheses show that kingdom righteousness is not about rule-following but heart transformation — anger as murder, lust as adultery. The standard is not \'do the right thing\' but \'be the right kind of person\' (virtue, formation, Christlikeness). Matthew 5:48: \'Be perfect as your heavenly Father is perfect.\'",
  },
  {
    title: "Insiders and Outsiders",
    color: TEAL,
    body: "A striking theme in Matthew: those expected to be inside the kingdom are excluded; those expected outside enter. The centurion has greater faith than any in Israel (8:10). The Canaanite woman\'s persistence wins the healing of her daughter (15:21–28). The magi from the east come to worship while Herod the king plots murder. Tax collectors and prostitutes enter the kingdom ahead of Pharisees (21:31). The parable of the great banquet (22:1–14) drives this home: those first invited refuse, so the invitation goes to \'everyone you find.\'",
  },
  {
    title: "The Great Commission (Matt 28:16–20)",
    color: PURPLE,
    body: "The climax of Matthew\'s universalism. On a mountain in Galilee (echoing the Sermon on the Mount), the risen Jesus declares: \'All authority in heaven and on earth has been given to me.\' On that basis: Go, make disciples of ALL NATIONS — not just Israel. Baptize and teach. \'And surely I am with you always, to the very end of the age.\' The Great Commission is the culmination of Matthew\'s kingdom vision. The God of Israel is the God of all peoples, and Jesus is Lord of all.",
  },
];

const PARABLES = [
  {
    id: "p1",
    title: "Sower and the Soils (13:1–23)",
    content: "The key parable — Jesus himself explains it. Four soils = four responses to \'the word of the kingdom.\' Path: Satan snatches it away. Rocky soil: immediate joy but no root, falls away under persecution. Thorns: cares of the world and deceit of riches choke it. Good soil: understands and bears fruit (30, 60, 100-fold). The mystery of why some receive and some reject the kingdom is at the heart of this parable cycle. The explanation is given only to the disciples.",
  },
  {
    id: "p2",
    title: "Wheat and Tares (13:24–30, 36–43)",
    content: "An enemy sows weeds (darnel — looks like wheat) in the field. The servants want to pull them up immediately, but the master says wait — you\'ll uproot wheat with weeds. At harvest, angels will separate them. Jesus\' explanation: the field is the world; the Son of Man sows good seed (kingdom children); the enemy sows weeds (sons of the evil one). The delay of judgment is not failure — it is patience (cf. 2 Pet 3:9). This parable counsels against premature ecclesiastical separation.",
  },
  {
    id: "p3",
    title: "Hidden Treasure & Pearl (13:44–46)",
    content: "Two short parables with the same point: the kingdom\'s value is such that one gives everything to obtain it. The treasure-finder sells all he has in joy; the pearl merchant who finds \'the one pearl of great price\' likewise sells everything. The kingdom is not an add-on to life — it is the thing for which everything else is traded. Dietrich Bonhoeffer: \'When Christ calls a man, he bids him come and die.\' The parables are a call to radical reorientation.",
  },
  {
    id: "p4",
    title: "Unforgiving Servant (18:23–35)",
    content: "A king forgives an astronomical debt (10,000 talents — virtually incalculable). The forgiven servant immediately throttles a fellow servant over a trivial sum (100 denarii). When the king hears, he revokes the forgiveness. Jesus\' point: the community of the kingdom is to be a community of forgiveness — not because forgiveness is easy, but because we have been forgiven infinitely more than we will ever be asked to forgive. \'Forgive us our debts as we also have forgiven our debtors\' (6:12).",
  },
];

const CHRISTOLOGY = [
  {
    title: "Jesus as New Moses",
    color: GOLD,
    body: "Matthew structures Jesus\' teaching in five great discourses (matching the five books of Moses). Jesus is born under a death threat to male infants (like Moses), taken to Egypt and returned, goes through water (baptism) and 40 days in the wilderness, gives the law from a mountain. He fulfills and surpasses Moses: \'You have heard it was said… but I say to you.\' Moses gave the Torah; Jesus IS the Torah — the word of God in person.",
  },
  {
    title: "Son of David",
    color: GREEN,
    body: "\'Son of David\' appears more in Matthew (10x) than in any other Gospel. Blind Bartimaeus cries \'Son of David, have mercy on me!\' (20:30–31). The Magi ask for the King of the Jews. Palm Sunday: \'Blessed is he who comes in the name of the Lord! Hosanna to the Son of David!\' But in 22:41–46, Jesus shows that David\'s Lord cannot merely be David\'s son — the Messiah is greater than David. He is Lord as well as heir.",
  },
  {
    title: "Immanuel — God With Us",
    color: TEAL,
    body: "The first title in Matthew (1:23, citing Isa 7:14): Immanuel, \'God with us.\' The last words of the Gospel (28:20): \'I am with you always.\' The entire Gospel is bracketed by divine presence. The temple (God\'s dwelling) is replaced by Jesus: \'something greater than the temple is here\' (12:6). Matthew\'s Christology is implicitly the highest in the Synoptics: Jesus embodies and replaces the central institutions of Judaism — temple, Torah, Sabbath, priesthood.",
  },
  {
    title: "Son of Man",
    color: PURPLE,
    body: "Matthew uses \'Son of Man\' (from Dan 7:13–14) for three clusters: (1) present humility — \'the Son of Man has nowhere to lay his head\'; (2) suffering and death — \'the Son of Man must suffer many things\'; (3) eschatological glory — \'you will see the Son of Man sitting at the right hand of Power, coming on the clouds of heaven.\' This is the same figure who is given \'authority, glory, and sovereign power\' over all peoples and nations (Dan 7:14).",
  },
];

const PASSION = [
  {
    title: "Triumphal Entry & Temple Cleansing (Matt 21)",
    color: GOLD,
    body: "Jesus enters Jerusalem on a donkey (fulfilling Zech 9:9: \'your king comes to you, gentle and riding on a donkey\'). The crowd spreads cloaks and branches, crying \'Hosanna!\' He overturns the money changers\' tables: \'My house shall be called a house of prayer, but you are making it a den of robbers.\' He curses the fig tree (Israel\'s unfruitfulness). The parable of the tenants (21:33–46) is a direct challenge to the chief priests: the vineyard will be taken from them and given to another people who produce fruit.",
  },
  {
    title: "The Last Supper & Gethsemane (Matt 26:17–56)",
    color: GREEN,
    body: "The Passover meal reinterpreted: \'This is my body\' / \'This is my blood of the covenant, which is poured out for many for the forgiveness of sins.\' Jesus predicts Peter\'s denial and Judas\'s betrayal. In Gethsemane: \'My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will.\' The disciples sleep three times. Judas arrives with the crowd; Jesus is arrested. Peter cuts off an ear; Jesus: \'All who draw the sword will die by the sword.\'",
  },
  {
    title: "Trial, Crucifixion & Death (Matt 26:57–27:56)",
    color: TEAL,
    body: "Jesus before Caiaphas: at the question about being the Son of God, Jesus says \'You have said so\' — but then quotes Dan 7:13 + Ps 110:1: \'you will see the Son of Man sitting at the right hand of Power, and coming on the clouds.\' Blasphemy verdict. Pilate finds no fault; his wife warns him; he washes his hands. The crowd calls for Barabbas. Crucifixion. Unique to Matthew: darkness, earthquake, the veil torn, tombs opened and saints raised. The centurion: \'Truly this was the Son of God!\'",
  },
  {
    title: "Resurrection & Great Commission (Matt 27:57–28:20)",
    color: PURPLE,
    body: "Joseph of Arimathea buries Jesus. A guard is set (unique to Matthew — addressing the \'stolen body\' accusation). Earthquake; angel rolls back the stone. The women meet the risen Jesus; he tells them to go to Galilee. The chief priests bribe the soldiers to spread the \'disciples stole the body\' story. On the Galilean mountain, the risen Christ meets the Eleven. The Great Commission: all authority — go — all nations — baptize — teach — I am with you always. Ending that opens to mission.",
  },
];

const VIDEOS = [
  { videoId: "3Dv4-n6OYGI", title: "The Book of Matthew — BibleProject Overview" },
  { videoId: "GGCF3OPRPU4", title: "Matthew Part 1 — BibleProject" },
  { videoId: "SbCw2BARomM", title: "Matthew Part 2 — BibleProject" },
  { videoId: "9P0sBkFoLdE", title: "Kingdom of Heaven in Matthew — Explained" },
  { videoId: "fib5NtHbyBA", title: "The Sermon on the Mount (Matthew 5–7) Deep Dive" },
  { videoId: "7LGNSmYHkdU", title: "The Great Commission — Matthew 28" },
];

export default function GospelOfMatthewGuide() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_matthew_tab", "overview");
  const [openDisc, setOpenDisc] = useLocalStorage("vine_matthew_disc", "");
  const [openPar, setOpenPar] = useLocalStorage("vine_matthew_par", "");
  const [journal, setJournal] = useLocalStorage("vine_matthew_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Bible Study</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>The Gospel of Matthew</h1>
        <p style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }}>
          The first Gospel in the NT canon — written to Jewish Christians to show that Jesus is the fulfillment of Israel&apos;s entire story. Matthew structures the life of Jesus around five great discourses, presents him as the new Moses, the Son of David, and Immanuel, and ends with the Great Commission to disciple all nations.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#fff" : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Introduction to Matthew</h2>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                Matthew was almost certainly written by a Jewish Christian, likely a scribe or tax collector (cf. 9:9; 13:52), for a predominantly Jewish-Christian audience navigating its relationship to Judaism after the destruction of the Temple (70 AD). It draws heavily on Mark (its primary source) and Q (shared with Luke), adding unique material (M-source) including much of the Sermon on the Mount, the parables discourse, and the infancy narrative.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                The Gospel&apos;s central theme is the fulfillment of Scripture. Matthew cites the OT more than any other Gospel and uses a distinctive &ldquo;fulfillment formula&rdquo;: &ldquo;This was to fulfill what was spoken by the prophet...&rdquo; (appearing ~10 times). Jesus does not abolish the law and prophets — he fulfills them (5:17).
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Matthew&apos;s Structure</h3>
              {[
                "Prologue: Birth and Preparation (1:1–4:11)",
                "Ministry in Galilee + Discourse 1: Sermon on the Mount (4:12–7:29)",
                "Narrative: Miracles and Mission + Discourse 2: Mission Discourse (8:1–11:1)",
                "Controversy and Parables + Discourse 3: Parables Discourse (11:2–13:53)",
                "Identity, Community + Discourse 4: Community Discourse (13:54–18:35)",
                "Journey to Jerusalem + Discourse 5: Olivet Discourse (19:1–25:46)",
                "Passion, Death, and Resurrection (26:1–28:20)",
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ color: GOLD, fontWeight: 700, minWidth: 24 }}>{i + 1}.</span>
                  <span style={{ color: MUTED, lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5 DISCOURSES */}
        {activeTab === "structure" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>The Five Great Discourses</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Matthew organizes Jesus&apos; teaching in five major discourses, each ending with the formula &ldquo;When Jesus had finished saying these things...&rdquo; (7:28; 11:1; 13:53; 19:1; 26:1). Many scholars see this as a deliberate parallel to the five books of Moses.</p>
            {DISCOURSES.map((d) => {
              const isOpen = openDisc === d.id;
              return (
                <div key={d.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenDisc(isOpen ? "" : d.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{d.title}</div>
                      <div style={{ color: GOLD, fontSize: 12 }}>{d.ref}</div>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{d.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* BIRTH & BAPTISM */}
        {activeTab === "infancy" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Birth, Baptism & Temptation</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {INFANCY.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* KINGDOM */}
        {activeTab === "kingdom" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Kingdom of Heaven</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {KINGDOM_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PARABLES */}
        {activeTab === "parables" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>The Parables of Matthew</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Matthew contains more parables than any other Gospel. Many are unique to Matthew (the wheat and tares, hidden treasure, pearl, dragnet, unforgiving servant, workers in the vineyard, two sons, wedding banquet, wise and foolish virgins, talents, sheep and goats).</p>
            {PARABLES.map((p) => {
              const isOpen = openPar === p.id;
              return (
                <div key={p.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenPar(isOpen ? "" : p.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{p.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{p.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* CHRISTOLOGY */}
        {activeTab === "christology" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Matthew&apos;s Christology</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {CHRISTOLOGY.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PASSION */}
        {activeTab === "passion" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Passion, Death &amp; Resurrection</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {PASSION.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>Use this space to record observations, questions, and applications from Matthew. Consider: Which parable speaks most to your current season? What does it mean to you that Jesus is Immanuel — God with you?</p>
            <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }} />
            <p style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>Saved locally to your device.</p>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Video Teaching</h2>
            <div style={{ display: "grid", gap: 20 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "12px 16px" }}>
                    <p style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{v.title}</p>
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
