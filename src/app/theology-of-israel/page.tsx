"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "overview" | "positions" | "romans" | "today" | "journal" | "videos";

const OVERVIEW = [
  { title: "Election — Israel as God's chosen people", color: GREEN, ref: "Deuteronomy 7:6-9; Romans 9:4-5; Genesis 12:1-3", content: "The election of Israel is one of the most theologically demanding facts in the Bible. God did not choose Israel because of their size (they were 'the fewest of all peoples' — Deut 7:7), their righteousness (Deuteronomy 9 repeatedly denies this), or their culture. He chose them because of his love and his faithfulness to his oath to their fathers. This is the paradigm of grace: election is based entirely on God's free choice, not on human merit. Paul will use Israel's election as the foundation of his argument that God's election of Gentiles through Christ is not a contradiction of his faithfulness but its extension." },
  { title: "Covenant faithfulness and Israel's consistent failure", color: PURPLE, ref: "Exodus 19:5-6; Judges (the entire book); Romans 3:1-4", content: "The tragedy of the Old Testament is the repeated pattern: God gives covenant, Israel breaks covenant, God disciplines, Israel repents, God restores — and the cycle repeats. The book of Judges is twelve repetitions of this pattern. The prophets' primary message was not prediction of distant future events but calling Israel back to covenant faithfulness. And yet — and this is the miracle — God's faithfulness is not defeated by Israel's faithlessness (Romans 3:3-4). The covenant is maintained on God's side even when Israel fails on their side." },
  { title: "The remnant — faithfulness within failure", color: "#3B82F6", ref: "Isaiah 10:20-22; Romans 9:27-29; Romans 11:5", content: "Throughout Israel's history, even in moments of greatest apostasy, there was always a remnant — a faithful minority who remained true to God. Elijah believed he was the only faithful Israelite left; God told him there were 7,000 who had not bowed to Baal (1 Kings 19:18). Paul uses this remnant theology in Romans 11:5 to explain that the Jewish Christians of his day ('a remnant, chosen by grace') are the continuation of this pattern — Israel's faithfulness has never depended on the whole nation but on the faithful remnant within it." },
  { title: "The promises — land, seed, and blessing", color: "#EF4444", ref: "Genesis 12:1-3; Genesis 15; Galatians 3:16; Romans 4:13", content: "The Abrahamic promises are the backbone of Old Testament hope: land (a place for God's people to flourish), seed (descendants who will carry the blessing), and blessing to all nations. Paul's reading of these promises in Galatians 3 and Romans 4 is decisive: the seed (singular) is Christ (Gal 3:16); the land promise is expanded to include the whole world (Rom 4:13, quoting the Septuagint); and the blessing of all nations is fulfilled in the gospel reaching Gentiles. This does not eliminate the promises to ethnic Israel — it shows their fulfillment in a dimension larger than their original scope." },
  { title: "The New Covenant — continuity and discontinuity", color: "#F59E0B", ref: "Jeremiah 31:31-34; Ezekiel 36:24-28; Hebrews 8-10", content: "Jeremiah promises a 'new covenant' explicitly distinguished from the Mosaic covenant: unlike the Sinai covenant, it will be written on the heart, not on stone tablets; its law will be internalized, not external; full forgiveness will be realized, not only anticipated; and everyone in the covenant community will know God personally. The New Covenant is both continuous (it fulfills the Abrahamic promises) and discontinuous (it replaces the Mosaic covenant's external law, sacrificial system, and priesthood). Hebrews argues that Jesus is the mediator of this better covenant (Heb 8:6)." },
  { title: "The middle wall of partition broken down", color: "#10B981", ref: "Ephesians 2:11-22; Galatians 3:28; Romans 10:12-13", content: "One of Paul's most revolutionary claims: in Christ, the 'dividing wall of hostility' between Jew and Gentile has been abolished. The Gentiles who were 'excluded from citizenship in Israel and foreigners to the covenants of the promise' have now been 'brought near through the blood of Christ' (Eph 2:12-13). This is not the replacement of Israel but the enlargement of the covenant community — Gentiles are grafted into the olive tree (Israel), not transplanted into a separate tree (Rom 11:17-24). The church is not a second people of God but the eschatological fulfillment of Israel's calling to be a light to the nations." },
];

const POSITIONS = [
  {
    name: "Replacement Theology (Supersessionism)",
    color: MUTED,
    desc: "The church completely replaces Israel — all promises made to ethnic Israel are now fulfilled in and through the church. Israel's national election has ended; the land promise has been spiritualized; the covenants have been taken over by the church as the new Israel. This was the dominant view in the early church after the Bar Kokhba revolt (135 AD) and in most of Western Christendom until the twentieth century.",
    strength: "Takes seriously the New Testament's identification of the church as 'the Israel of God' (Gal 6:16); emphasizes the radical discontinuity of the new covenant",
    weakness: "Romans 11:1 explicitly asks 'Did God reject his people?' and answers with 'By no means!'; must allegorize specific promises made to ethnic Israel; historically associated with antisemitic theology",
    advocates: "Augustine; much of historical Catholic and Reformed theology; replacement supersessionism"
  },
  {
    name: "Dispensational Premillennialism",
    color: PURPLE,
    desc: "Israel and the church are two distinct peoples of God with distinct programs and distinct futures. The promises made to ethnic Israel will be literally fulfilled in a future millennial kingdom. The church is a parenthesis in God's program for Israel. At the Rapture, the church is removed; God resumes his program with Israel during the seven-year tribulation; Christ returns to establish a literal 1,000-year reign in Jerusalem. Dominant in most American evangelical and Southern Baptist churches.",
    strength: "Takes the specificity of Old Testament promises to ethnic Israel seriously; robust literal hermeneutic; strong missionary motivation (world events as signs of the end)",
    weakness: "Two-peoples-of-God scheme raises concerns about the unity of the covenant of grace; parenthesis view of the church seems to contradict Paul's statements about the 'mystery' now revealed; interpretation of Revelation is contested",
    advocates: "John Darby (originator); Scofield Reference Bible; Tim LaHaye; Hal Lindsey; John MacArthur; Dallas Theological Seminary"
  },
  {
    name: "Historic Premillennialism",
    color: GREEN,
    desc: "Christ will return before a literal millennium, but without the sharp Israel-church distinction of dispensationalism. The promises to Israel are being fulfilled in Christ and the church but will have a future dimension as well, possibly including a final large-scale conversion of ethnic Jewish people before or at the Second Coming. The millennium that follows Christ's return may involve the literal fulfillment of some Old Testament promises to Israel.",
    strength: "Avoids the two-peoples problem; takes seriously Romans 11's future for ethnic Israel; robust hope for Israel's future salvation",
    weakness: "Less systematically developed than dispensationalism; interpretation of the millennium remains unclear; relationship between restored Israel and the church in the millennium is debated",
    advocates: "George Eldon Ladd; Wayne Grudem; Walter Kaiser; some of N.T. Wright's work"
  },
  {
    name: "Amillennialism with Future for Israel",
    color: "#3B82F6",
    desc: "The millennium is the present church age (Christ reigns now at God's right hand); there is no literal 1,000-year earthly reign after Christ's return. But Romans 11 anticipates a future large-scale turning of ethnic Jewish people to Christ before the end. The 'fullness' of the Gentiles leading to the 'all Israel will be saved' (Rom 11:25-26) is a future eschatological event — not the conversion of every ethnic Jew but a large-scale national turning that will be the final act before Christ's return.",
    strength: "Consistent New Testament hermeneutic; avoids the dispensational Israel-church divide; takes Romans 11 seriously without literal millennium",
    weakness: "The meaning of 'all Israel' in Romans 11:26 is genuinely contested; the 'fullness' and 'jealousy' dynamics of Romans 11 require careful interpretation",
    advocates: "John Murray; D.A. Carson; Tom Schreiner; most Reformed amillennialists with a future for Israel"
  },
  {
    name: "Postmillennialism",
    color: "#EF4444",
    desc: "The church's gospel witness will eventually produce worldwide Christianization before Christ's return — the millennium is a future golden age of gospel triumph. Within this view, the conversion of the Jewish people (Romans 11) is one of the key events that inaugurates or accompanies this period of gospel flourishing.",
    strength: "Strong basis in the Abrahamic promise that all nations will be blessed; optimistic about the gospel's power; takes the Great Commission seriously",
    weakness: "Post-World War II, naive optimism about historical progress became difficult to sustain; must interpret many apparently pessimistic eschatological texts carefully",
    advocates: "Jonathan Edwards; Charles Hodge; B.B. Warfield; R.J. Rushdoony (theonomist form); Doug Wilson"
  },
];

const ROMANS_PASSAGES = [
  { passage: "Romans 9:1-5", color: GREEN, content: "Paul's passionate grief for his own people: 'I could wish that I myself were cursed and cut off from Christ for the sake of my people, those of my own race, the people of Israel.' He then lists their extraordinary covenantal privileges: adoption, glory, covenants, law, temple worship, promises, patriarchs, and — the climax — from them Christ came, 'who is God over all, forever praised.' The privileges are not abolished but fulfilled.", key: "Paul's love for ethnic Israel, and his list of their continuing covenant privileges" },
  { passage: "Romans 9:6-29", color: PURPLE, content: "'Not all who are descended from Israel are Israel.' Paul distinguishes ethnic descent from spiritual election — within ethnic Israel there has always been a distinction between those who belong to God by faith and those who do not. The election of Isaac over Ishmael, Jacob over Esau, demonstrates that God's purposes have always operated within Israel through free sovereign election, not through ethnic membership. This does not mean God's word has failed.", key: "Election within Israel — 'Not all who are descended from Israel are Israel'" },
  { passage: "Romans 10:1-13", color: "#3B82F6", content: "Paul's prayer for Israel's salvation — 'my heart's desire and prayer to God for the Israelites is that they may be saved' — is not for a corporate future nation but for individual Jewish people hearing and believing the gospel now. The gospel is for Jew first, and also for Gentile (Rom 1:16). Israel stumbled over the stumbling stone (Christ) by pursuing righteousness through works rather than faith.", key: "The gospel is the means of Israel's salvation — Christ the stumbling stone" },
  { passage: "Romans 11:1-12", color: "#EF4444", content: "'Did God reject his people? By no means!' Paul himself is evidence that God has not abandoned ethnic Israel — he is an Israelite, descended from Abraham. The remnant within Israel who believe is the continuation of God's faithfulness. The partial hardening of Israel has served an extraordinary purpose: it opened the door for the Gentiles. 'Their transgression means riches for the world, and their loss means riches for the Gentiles, how much greater riches will their full inclusion bring!'", key: "The remnant; Israel's hardening serves Gentile inclusion; future 'full inclusion'" },
  { passage: "Romans 11:17-24", color: "#F59E0B", content: "The olive tree metaphor: the natural branches (unbelieving Israel) were broken off; wild branches (Gentiles) were grafted in. But the root is Israel's (the Abrahamic promises); the wild branches do not support the root but the root supports them. The broken-off branches can be grafted back in if they do not persist in unbelief — 'for God is able to graft them in again.'", key: "Gentiles are grafted into Israel's olive tree — not planted in a separate tree" },
  { passage: "Romans 11:25-32", color: "#10B981", content: "'All Israel will be saved' — the climactic statement of Romans 9-11. 'A hardening in part has come upon Israel until the fullness of the Gentiles has come in, and in this way all Israel will be saved.' The 'mystery' Paul reveals is that Israel's hardening is partial (not total) and temporary (until the Gentiles come in), after which there will be a large-scale turning of Israel to their Messiah. This is the theological foundation for Christian prayer for Jewish evangelism.", key: "'All Israel will be saved' — the future of ethnic Israel in God's purpose" },
];

const ISRAEL_VIDEOS = [
  { videoId: "rtkS_8VWfB0", title: "Israel and the Church — What's the Relationship?", channel: "Gospel in Life / Tim Keller", description: "Keller addresses the covenant-theological relationship between Israel, the church, and the promises of God." },
  { videoId: "ej_6dVdJSIU", title: "The Theology of Israel in the New Testament", channel: "Ligonier Ministries", description: "How Paul's argument in Romans 9–11 reshapes our understanding of God's covenant with Israel." },
  { videoId: "4Eg_di-O8nM", title: "Has God Rejected His People? — Romans 11 Explained", channel: "Desiring God", description: "John Piper works through Romans 11 verse by verse, showing why Paul's answer is an emphatic 'no' — and what that means." },
  { videoId: "gV9JugO_5Mk", title: "Israel, the Church, and the Olive Tree", channel: "Bible Project", description: "A visual exploration of Paul's olive tree metaphor in Romans 11 and what it reveals about continuity between Israel and the church." },
];

const TODAY_DATA = [
  { org: "Jews for Jesus", url: "jewsforjesus.org", desc: "The largest Messianic Jewish evangelism organization in the world — founded by Moishe Rosen in 1973. Employs hundreds of missionaries globally, many of them Jewish believers in Jesus. Produces resources on Jewish heritage and the Messiah. The theological foundation is Romans 1:16: the gospel is for the Jew first.", color: GREEN },
  { org: "Chosen People Ministries", url: "chosenpeople.com", desc: "One of the oldest and largest Jewish evangelism organizations — founded in 1894. Operates in 14 countries with Jewish communities. Produces significant theological resources on Jewish-Christian relations, the Hebrew roots of the faith, and Romans 9-11 interpretation. Their publication Israel My Glory is widely circulated.", color: PURPLE },
  { org: "The Lausanne Consultation on Jewish Evangelism", url: "lcje.net", desc: "The primary global network of Jewish evangelism organizations and scholars — coordinates among over 200 organizations worldwide. Their annual consultations produce the most current theological and missiological thinking on Jewish evangelism.", color: "#3B82F6" },
  { org: "Israel My Glory (Friends of Israel)", url: "foi.org", desc: "Friends of Israel Gospel Ministry publishes Israel My Glory magazine — one of the most widely read Christian publications on Israel, prophecy, and Jewish evangelism. Takes a dispensational premillennial position on Israel. Strong emphasis on the Bible's teaching about modern Israel.", color: "#EF4444" },
  { org: "The Gospel Coalition: Israel Resources", url: "thegospelcoalition.org", desc: "TGC's resources on Israel and the church represent the broadly Reformed non-dispensational evangelical perspective — taking Romans 11 seriously while maintaining the unity of the covenant of grace. Useful for theological depth and nuance on contested questions.", color: "#F59E0B" },
];

export default function TheologyOfIsraelPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_theology-of-israel_tab", "overview");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState(ROMANS_PASSAGES[0].passage);
  const sel = ROMANS_PASSAGES.find(p => p.passage === selected) || ROMANS_PASSAGES[0];

  type JournalEntry = { id: string; date: string; passage: string; insight: string; prayer: string };
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_toij_entries") ?? "[]"); } catch { return []; } });
  const [jPassage, setJPassage] = useState("");
  const [jInsight, setJInsight] = useState("");
  const [jPrayer, setJPrayer] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_toij_entries", JSON.stringify(journalEntries)); } catch {} }, [journalEntries]);
  function saveJournalEntry() {
    if (!jPassage.trim() && !jInsight.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), passage: jPassage, insight: jInsight, prayer: jPrayer };
    setJournalEntries(prev => [entry, ...prev]);
    setJPassage(""); setJInsight(""); setJPrayer("");
  }
  function deleteJournalEntry(id: string) { setJournalEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>✡️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of Israel</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            Israel's election, the covenants, the five major evangelical positions on Israel's future, a deep guide to Romans 9-11, and real organizations doing Jewish evangelism today.
          </p>
        </div>

        <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "12px 18px", marginBottom: 28 }}>
          <span style={{ color: GREEN, fontWeight: 800, fontSize: 13 }}>Romans 11:1 </span>
          <span style={{ color: TEXT, fontSize: 13 }}>"I ask then: Did God reject his people? By no means! I am an Israelite myself, a descendant of Abraham, from the tribe of Benjamin."</span>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["overview", "positions", "romans", "today", "journal", "videos"] as Tab[]).map(t => (
            <button type="button" key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "overview" ? "Biblical Overview" : t === "positions" ? "5 Positions" : t === "romans" ? "Romans 9-11 Guide" : t === "today" ? "Jewish Evangelism" : t === "journal" ? "📓 My Journal" : "Videos"}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {OVERVIEW.map((o, i) => (
              <div role="button" tabIndex={0} key={i} style={{ background: CARD, border: `1px solid ${expanded[o.title] ? o.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button type="button" onClick={() => setExpanded(e => ({ ...e, [o.title]: !e[o.title] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: o.color, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{o.title}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{o.ref}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[o.title] ? "−" : "+"}</span>
                </button>
                {expanded[o.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{o.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "positions" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {POSITIONS.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${p.color === MUTED ? BORDER : p.color + "30"}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: p.color === MUTED ? TEXT : p.color, fontWeight: 900, fontSize: 15, marginBottom: 10 }}>{p.name}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>{p.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: "8px 12px" }}>
                    <div style={{ color: GREEN, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>STRENGTH</div>
                    <div style={{ color: TEXT, fontSize: 12 }}>{p.strength}</div>
                  </div>
                  <div style={{ background: `${MUTED}08`, border: `1px solid ${MUTED}15`, borderRadius: 8, padding: "8px 12px" }}>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>CONCERN</div>
                    <div style={{ color: TEXT, fontSize: 12 }}>{p.weakness}</div>
                  </div>
                </div>
                <div style={{ color: MUTED, fontSize: 11 }}>Advocates: {p.advocates}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "romans" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ROMANS_PASSAGES.map((p) => (
                <div role="button" tabIndex={0} key={p.passage} onClick={() => setSelected(p.passage)}
                  style={{ background: CARD, border: `1px solid ${selected === p.passage ? p.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ color: p.color, fontWeight: 800, fontSize: 14 }}>{p.passage}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 4 }}>{p.key}</div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${sel.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: sel.color, fontWeight: 900, fontSize: 16, marginBottom: 4 }}>{sel.passage}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 12 }}>{sel.key}</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{sel.content}</p>
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>My Theology of Israel Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Record passages from Romans 9-11 and beyond, your insights about Israel's place in God's plan, and how you are praying.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input value={jPassage} onChange={e => setJPassage(e.target.value)} placeholder="Passage (e.g. Romans 11:29, Zechariah 12)" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <textarea value={jInsight} onChange={e => setJInsight(e.target.value)} placeholder="What is God showing you about Israel in His plan?" rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jPrayer} onChange={e => setJPrayer(e.target.value)} placeholder="How are you praying for Israel and Jewish people?" rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <button type="button" onClick={saveJournalEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {journalEntries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", padding: 32 }}>No journal entries yet. Begin recording your study of God's purposes for Israel.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {journalEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 15 }}>{entry.passage || "Israel Reflection"}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                    </div>
                    {entry.insight && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Insight:</strong> {entry.insight}</p>}
                    {entry.prayer && <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}><strong>Prayer:</strong> {entry.prayer}</p>}
                    <button type="button" onClick={() => deleteJournalEntry(entry.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 12px", color: MUTED, fontSize: 12, cursor: "pointer" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {ISRAEL_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "today" && (
          <div>
            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 10, padding: "14px 18px", marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>Romans 1:16 — The Gospel for the Jew First</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>Paul's conviction that the gospel is for the Jew first (Romans 1:16) grounds the church's responsibility for Jewish evangelism. Historically, antisemitism has made Jewish evangelism a compromised enterprise; contemporary Jewish evangelism organizations work to bring the gospel to Jewish communities through culturally sensitive, theologically grounded witness.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
              {TODAY_DATA.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${t.color}25`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: t.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{t.org}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{t.url}</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
