"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "overview" | "themes" | "covenants" | "resources";

const STORYLINE = [
  { act: "Creation", key: "Gen 1-2", color: GREEN, desc: "God creates a good world and places image-bearing humans in it as his vice-regents, commissioned to fill and subdue it — to spread the garden of God's presence throughout the earth. The creation is a cosmic temple; humans are the priests within it. The 'very good' of Genesis 1:31 is the baseline against which all that follows is measured.", theme: "The world is God's creation, designed for his glory and human flourishing" },
  { act: "Fall", key: "Gen 3", color: "#EF4444", desc: "Adam and Eve's rebellion is simultaneously a covenant violation, an idolatrous exchange (creature for Creator), a spiritual death, and the beginning of the world's fracture. The consequences — exile from the garden, enmity, toil, pain — are not arbitrary punishments but the intrinsic results of choosing disorder over order. Yet God immediately promises a seed of the woman who will crush the serpent's head (Gen 3:15 — the protoevangelium, the first gospel promise).", theme: "Human sin has fractured every relationship: with God, each other, self, and creation" },
  { act: "Abraham", key: "Gen 12–50", color: PURPLE, desc: "God's response to the universal fracture of Genesis 3-11 is to call one man — Abraham — through whom he will bless all nations. The Abrahamic covenant promises land (a new creation), seed (a new humanity), and blessing (restoration of the lost shalom). Paul argues in Galatians 3 that this is the gospel preached beforehand: 'In you all nations will be blessed' anticipates the Gentile inclusion of the New Covenant. All subsequent Old Testament history is the outworking of this promise.", theme: "God's plan of redemption operates through covenant promise — particular (Abraham) for universal (all nations)" },
  { act: "Exodus and Sinai", key: "Exod 1–40; Lev–Deut", color: "#3B82F6", desc: "The Exodus is the paradigmatic act of Old Testament redemption — God hearing the cry of his people, acting in power to deliver them, and bringing them to himself in covenant at Sinai. The tabernacle (Exod 25-40) is a portable Eden — the garden restored in miniature, with God's presence dwelling among his people. The Torah (Law) at Sinai is not a way of earning salvation but a covenant constitution for a people already redeemed.", theme: "Redemption precedes law — Israel is delivered, then given covenant instructions for a redeemed life" },
  { act: "Kingdom and Temple", key: "1 Sam – 1 Kgs 11", color: "#F59E0B", desc: "David's covenant (2 Samuel 7) promises an eternal dynasty — a son of David who will build God's house and rule forever. The temple Solomon builds fulfills what the tabernacle anticipated: God dwelling permanently with his people in a fixed house. But the kingdom fractures, the temple is corrupted, and the promised Davidic king seems to recede. The prophets repeatedly point forward to a coming Son of David who will rule the world in righteousness.", theme: "The kingdom of God advances through a human king — but no human king is adequate; a greater Son of David is needed" },
  { act: "Exile and Return", key: "2 Kgs 17–25; Ezra–Neh; Daniel; Major Prophets", color: "#EC4899", desc: "The Babylonian exile (586 BC) is Israel's expulsion from the land — a re-enactment of Adam's expulsion from the garden on the national scale. The prophets (Isaiah, Jeremiah, Ezekiel) promise a new exodus more glorious than the first: God will make a New Covenant (Jer 31), pour out his Spirit (Ezek 36-37), and bring his people back from spiritual exile. The physical return under Ezra and Nehemiah does not fulfill these promises — it anticipates them.", theme: "Exile is not the end — but only a greater-than-Moses can lead the greater exodus" },
  { act: "Intertestamental Period", key: "400 Years of Silence", color: MUTED, desc: "Between Malachi and Matthew, 400 years pass with no new revelation — sometimes called the 'silent years.' The Persian Empire gives way to Greece (Alexander) and then Rome. Hellenistic culture spreads throughout the Mediterranean. The Synagogue system develops (the people learn to live in exile without a temple). The Septuagint (Greek translation of the Hebrew Bible) is produced. Jewish expectations for Messiah, resurrection, and restoration intensify. The world is being prepared for the gospel.", theme: "God's silence is not God's absence; the expectation of fulfillment intensifies precisely when it is delayed" },
  { act: "Incarnation and Kingdom", key: "The Gospels", color: GREEN, desc: "Jesus arrives announcing 'The kingdom of God is at hand' — the long-awaited rule of God over his world, breaking into history in the person of the king. He is the Seed of Abraham, the greater Moses, the true Israel, the Son of David, the new Adam, the temple-in-person. His miracles are signs of the new creation invading the old. His teaching reconfigures the Law around himself ('You have heard it said, but I say to you'). His death and resurrection are the new Exodus — deliverance from the greater Egypt of sin and death.", theme: "In Jesus, all Old Testament themes converge and are fulfilled — not by replacement but by completion" },
  { act: "Pentecost and Church", key: "Acts; Epistles", color: PURPLE, desc: "The outpouring of the Spirit at Pentecost fulfills the new covenant promise of Ezekiel 36-37 and Joel 2. The church is not a pause in Israel's story but its eschatological continuation — the international, multi-ethnic community in which the blessing of Abraham has reached all nations. Paul's epistles articulate the theology of what Christ has accomplished; Acts traces the geographic expansion from Jerusalem to Rome. The church lives between the already and the not-yet — the new creation has begun but not been completed.", theme: "The Spirit-filled church is the new covenant community living in the already/not-yet of God's kingdom" },
  { act: "New Creation", key: "Revelation; 2 Pet 3; Rom 8", color: GREEN, desc: "The biblical story ends not with souls floating in heaven but with a renewed creation — the new Jerusalem descending from heaven to earth (Rev 21:2), God tabernacling with his people (Rev 21:3), and the reversal of every curse (Rev 22:3). The garden of Genesis is the seed; the city of Revelation is the flower. Creation is not abandoned but transformed. The resurrection of Christ is the firstfruits of the new creation — the guarantee that the entire cosmos will be renewed.", theme: "Redemption restores creation — the telos (end goal) of history is a new heavens and new earth, not escape from earth" },
];

const THEMES = [
  { theme: "Temple / Presence of God", color: GREEN, passages: "Gen 2; Exod 25-40; 1 Kgs 6-8; Ezek 40-48; John 1:14; 2:19-22; Rev 21:22", summary: "God's desire is to dwell with his people — the entire Bible moves toward the consummation of this desire. The tabernacle is a portable garden-Eden; the temple is a fixed dwelling; Jesus is the temple in person ('Destroy this temple and I will raise it in three days' — his body); the church is a spiritual temple (1 Cor 3:16); the new creation has no temple because God himself is the temple (Rev 21:22). Every Old Testament temple passage is fulfilled in Christ and consummated in the new creation.", authors: "G.K. Beale — 'The Temple and the Church's Mission'; Peter Leithart — 'A House for My Name'" },
  { theme: "Land / New Creation", color: PURPLE, passages: "Gen 1-2; Gen 12:7; Ps 37; Isa 65:17-25; Matt 5:5; Rom 8:18-23; Rev 21", summary: "The promise of land to Abraham is not merely real estate in Canaan — it is the promise of a renewed creation under God's reign. Paul quotes Psalm 37:11 ('the meek will inherit the earth') in Matthew 5:5 without modification — but the 'earth' is now the whole creation renewed by Christ. Romans 8:21 describes the creation itself waiting for liberation. The final destination is not heaven (disembodied bliss) but a renewed physical earth in which heaven and earth are joined.", authors: "N.T. Wright — 'Surprised by Hope'; Graeme Goldsworthy — 'Gospel and Kingdom'" },
  { theme: "Seed / Offspring", color: "#EF4444", passages: "Gen 3:15; Gen 12:7; Gal 3:16; Gal 4:4; Rev 12:17", summary: "The 'seed' runs from Genesis 3:15 (the seed of the woman who will crush the serpent) through Abraham's seed, Isaac over Ishmael, Jacob over Esau, Judah, David, and finally Jesus — the one seed of Abraham (Galatians 3:16, Paul's singular/plural argument). The genealogies of Genesis and Matthew are not filler — they are the careful tracking of this seed through history. Every genealogy asks: is this the one?", authors: "T. Desmond Alexander — 'The Servant King'; James Hamilton — 'God's Glory in Salvation through Judgment'" },
  { theme: "Covenant", color: "#3B82F6", passages: "Gen 9; Gen 15; Gen 17; Exod 19-24; 2 Sam 7; Jer 31:31-34; Luke 22:20; Heb 8-10", summary: "The covenants structure the Bible's progressive revelation — each covenant develops what came before and anticipates what comes after. The New Covenant (Jeremiah 31) is not a replacement of previous covenants but their fulfillment: what they promised externally (law, land, kingship, presence), the New Covenant delivers internally through the Spirit. Jesus inaugurates the New Covenant at the Last Supper ('This cup is the new covenant in my blood').", authors: "Peter Gentry & Stephen Wellum — 'Kingdom through Covenant'; Tom Schreiner — 'Covenant and God's Purpose for the World'" },
  { theme: "Exodus / Redemption", color: "#F59E0B", passages: "Exod 1-15; Isa 40-55; Mark 10:45; Luke 9:31; 1 Cor 5:7; Rev 15", summary: "The Exodus is the primary Old Testament type of redemption — used throughout the prophets as the pattern for what God will do again. Isaiah 40-55 frames the return from Babylon as a new Exodus. Jesus's transfiguration (Luke 9:31) discusses his 'departure' (literally 'exodus') that he is about to accomplish in Jerusalem. Mark 10:45 uses ransom language that echoes Exodus redemption. The final battle of Revelation 15 is modeled on Moses's song after crossing the Red Sea.", authors: "Bryan Estelle — 'Echoes of Exodus'; Alec Motyer — 'The Prophecy of Isaiah'" },
  { theme: "Kingship / Son of David", color: "#10B981", passages: "Gen 49:10; 2 Sam 7; Ps 2; Ps 110; Isa 9; Isa 11; Dan 7; Matt 1:1; Rev 19:16", summary: "The Davidic covenant (2 Sam 7) promises an eternal Son of David who will build God's house and rule forever. The Psalms develop this theme (Ps 2, 72, 89, 110). Isaiah's Servant Songs interweave suffering and kingship. Daniel 7's Son of Man receives dominion over all nations. Jesus enters Jerusalem as the son of David (Matt 21:9), is crucified as 'King of the Jews,' and rules at the Father's right hand (Ps 110:1 is the most quoted Old Testament verse in the New Testament).", authors: "Eugene Merrill — 'Everlasting Dominion'; Craig Blaising & Darrell Bock — 'Progressive Dispensationalism'" },
];

const COVENANTS = [
  { name: "Noahic Covenant", ref: "Genesis 9", party: "Noah / All Creation", color: GREEN, sign: "Rainbow", condition: "Unconditional", content: "God promises never to destroy all life by flood again. This is a universal, unconditional covenant — it establishes the stability of creation necessary for redemptive history to unfold. The covenant is with 'every living creature' (Gen 9:10) — the broadest possible scope. The rainbow is a reminder of God's commitment." },
  { name: "Abrahamic Covenant", ref: "Genesis 12, 15, 17", party: "Abraham and his seed", color: PURPLE, sign: "Circumcision", condition: "Unconditional (ratified by God alone in Gen 15)", content: "Promises land, seed, and blessing to all nations. God alone walks between the animal pieces in Genesis 15 — taking upon himself all covenant obligation. This unconditional commitment is the anchor of Old Testament hope. Paul argues in Galatians 3 and Romans 4 that Abraham was justified by faith before circumcision — the Abrahamic covenant anticipates the New Covenant's faith-righteousness." },
  { name: "Mosaic / Sinai Covenant", ref: "Exodus 19-24; Deuteronomy", party: "Israel as a nation", color: "#3B82F6", sign: "Sabbath; Tabernacle", condition: "Conditional — blessings for obedience, curses for disobedience (Deut 28-30)", content: "Israel's national covenant as a kingdom of priests and holy nation. The Torah (Law) is the covenant constitution — not a means of earning salvation but the terms of covenant faithfulness for an already-redeemed people. The covenant's conditionality explains Israel's history: repeated disobedience leading to exile. The New Covenant promises to fulfill what Israel consistently failed to fulfill." },
  { name: "Davidic Covenant", ref: "2 Samuel 7; Psalm 89", party: "David and his dynasty", color: "#EF4444", sign: "Enduring dynasty", condition: "Conditional for individuals, unconditional for the line", content: "God promises David an eternal dynasty and a son who will build his house. The covenant is conditioned on individual king's faithfulness (disobedient kings will be disciplined) but the line itself is unconditionally maintained. The succession of Davidic kings is the vehicle through which God keeps his promise until the eternal Son of David — Jesus — arrives." },
  { name: "New Covenant", ref: "Jeremiah 31:31-34; Ezekiel 36:26-27; Luke 22:20; Hebrews 8-10", party: "All who are in Christ — Jew and Gentile", color: "#F59E0B", sign: "Baptism; Lord's Supper", condition: "Unconditional — secured by Christ's blood", content: "Jeremiah 31's new covenant promises the law written on the heart (internal transformation), total forgiveness of sins, and everyone knowing God personally. Ezekiel 36 adds the gift of the Spirit enabling obedience. Jesus inaugurates this covenant at the Last Supper. It fulfills and supersedes the Mosaic covenant by providing what the Law could only demand — the power to obey." },
];

const RESOURCES_DATA = [
  { name: "Gospel and Kingdom", author: "Graeme Goldsworthy", url: "ivpbooks.com", desc: "The clearest and most accessible introduction to biblical theology ever written. Goldsworthy's framework (kingdom = God's people in God's place under God's rule) is applied across the canon. Under 100 pages; read it twice.", color: GREEN },
  { name: "According to Plan", author: "Graeme Goldsworthy", url: "ivpbooks.com", desc: "The full-length expansion of Gospel and Kingdom — a comprehensive introduction to biblical theology for lay readers and students. Goes book by book through the canon showing the progressive revelation of God's redemptive plan.", color: PURPLE },
  { name: "The Drama of Scripture", author: "Craig Bartholomew & Michael Goheen", url: "dramaofscripture.com", desc: "Frames the Bible as a six-act drama (Creation, Fall, Redemption, Church, New Creation) and is one of the most readable overviews of the biblical storyline. Widely used in college and seminary introductory courses.", color: "#3B82F6" },
  { name: "Biblical Theology (NT)", author: "Geerhardus Vos", url: "vos.org", desc: "The founding text of modern Reformed biblical theology — Vos (1862-1949) was the first professor of biblical theology at Princeton. Dense and technical but foundational. The distinction between biblical theology (progressive revelation in historical sequence) and systematic theology (doctrines in logical categories) originates with Vos.", color: "#EF4444" },
  { name: "The Temple and the Church's Mission", author: "G.K. Beale", url: "ivpbooks.com", desc: "The most detailed biblical-theological study of the temple theme in Scripture. Beale demonstrates that the entire canon is organized around God's desire to fill creation with his presence — from the garden-temple of Eden to the new Jerusalem. Advanced but transformative.", color: "#F59E0B" },
  { name: "BibleProject", author: "Tim Mackie & Jon Collins", url: "bibleproject.com", desc: "The best free visual introduction to biblical theology on the internet — animated videos on every book of the Bible, major themes, and word studies. The 'Unified Story of the Bible' video is an excellent starting point. Millions of views; used in churches, seminaries, and schools worldwide.", color: "#10B981" },
];

export default function BiblicalTheologyPrimerPage() {
  const [tab, setTab] = useState<Tab>("overview");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState(THEMES[0].theme);
  const sel = THEMES.find(t => t.theme === selected) || THEMES[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Biblical Theology Primer</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            The Bible is not a collection of disconnected books — it is one story, moving from creation through fall and redemption to new creation. Learn to read it as a unified whole.
          </p>
        </div>

        <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 10, padding: "14px 18px", marginBottom: 28 }}>
          <div style={{ color: PURPLE, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>What is Biblical Theology?</div>
          <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>Biblical theology traces how God's progressive revelation unfolds through history — how each part of Scripture builds on what came before and anticipates what comes after. It is different from systematic theology (which organizes doctrines in logical categories) and from historical theology (which traces how the church has interpreted Scripture). Biblical theology reads Scripture as a unified story moving toward Jesus Christ as its center and climax.</p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["overview", "themes", "covenants", "resources"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "overview" ? "The Storyline" : t === "themes" ? "Major Themes" : t === "covenants" ? "The Covenants" : "Resources"}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {STORYLINE.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: BG, flexShrink: 0 }}>{i + 1}</div>
                  {i < STORYLINE.length - 1 && <div style={{ width: 2, flex: 1, background: BORDER, minHeight: 20, marginTop: 4, marginBottom: 4 }} />}
                </div>
                <div style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 12, padding: "16px 20px", marginBottom: 12, flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ color: s.color, fontWeight: 900, fontSize: 16 }}>{s.act}</div>
                    <div style={{ background: `${s.color}20`, color: s.color, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{s.key}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 10 }}>{s.desc}</p>
                  <div style={{ background: `${s.color}08`, border: `1px solid ${s.color}15`, borderRadius: 6, padding: "6px 10px" }}>
                    <span style={{ color: s.color, fontWeight: 800, fontSize: 10 }}>Theme: </span>
                    <span style={{ color: TEXT, fontSize: 12 }}>{s.theme}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "themes" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {THEMES.map((t) => (
                <div key={t.theme} onClick={() => setSelected(t.theme)}
                  style={{ background: CARD, border: `1px solid ${selected === t.theme ? t.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ color: t.color, fontWeight: 800, fontSize: 14 }}>{t.theme}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 4 }}>{t.passages}</div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${sel.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: sel.color, fontWeight: 900, fontSize: 16, marginBottom: 4 }}>{sel.theme}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 14 }}>Key passages: {sel.passages}</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{sel.summary}</p>
              <div style={{ background: `${sel.color}10`, border: `1px solid ${sel.color}20`, borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ color: sel.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>KEY BOOKS</div>
                <div style={{ color: TEXT, fontSize: 12 }}>{sel.authors}</div>
              </div>
            </div>
          </div>
        )}

        {tab === "covenants" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {COVENANTS.map((c, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${c.color}25`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [c.name]: !e[c.name] }))}
                  style={{ width: "100%", padding: "18px 22px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: c.color, fontWeight: 900, fontSize: 16, marginBottom: 3 }}>{c.name}</div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <span style={{ color: MUTED, fontSize: 11 }}>{c.ref}</span>
                      <span style={{ color: MUTED, fontSize: 11 }}>·</span>
                      <span style={{ color: MUTED, fontSize: 11 }}>Party: {c.party}</span>
                      <span style={{ color: MUTED, fontSize: 11 }}>·</span>
                      <span style={{ color: MUTED, fontSize: 11 }}>Sign: {c.sign}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${c.color}20`, color: c.color, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{c.condition}</span>
                    <span style={{ color: MUTED, fontSize: 18 }}>{expanded[c.name] ? "−" : "+"}</span>
                  </div>
                </button>
                {expanded[c.name] && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{c.content}</p>
                  </div>
                )}
              </div>
            ))}
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
      </div>
    </div>
  );
}
