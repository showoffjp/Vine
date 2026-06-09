"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706";

type NumDeutTab =
  | "overview" | "wilderness" | "shema" | "covenant" | "moses" | "passages" | "themes" | "journal" | "videos";

const TABS: { id: NumDeutTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "wilderness", label: "Wilderness" },
  { id: "shema", label: "The Shema" },
  { id: "covenant", label: "Covenant" },
  { id: "moses", label: "Moses" },
  { id: "passages", label: "Key Passages" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const WILDERNESS_EVENTS = [
  {
    title: "The Census — Two Generations",
    ref: "Numbers 1–4; 26",
    body: "Numbers opens with a census of 603,550 fighting men. The book closes with a second census of nearly the same number (601,730) — but almost none of the same people. The generation that left Egypt died in the wilderness. The second census numbers those who will enter Canaan. Between the two counts lies forty years of failure, judgment, and God's faithful provision.",
  },
  {
    title: "Kadesh Barnea — The Catastrophic Refusal",
    ref: "Numbers 13–14",
    body: "Twelve spies survey Canaan. Ten return with a bad report: giants, fortified cities, impossible odds. Only Caleb and Joshua trust God. The congregation weeps all night and wants to return to Egypt. God's verdict: forty years of wandering, one for each day of the spy mission. The generation that saw the Red Sea crossing will not see the Promised Land. This episode is referenced in Hebrews 3–4 as the definitive warning against hardening your heart.",
  },
  {
    title: "Bronze Serpent — Looking and Living",
    ref: "Numbers 21:4–9",
    body: "When fiery serpents afflict Israel and people die, God instructs Moses to make a bronze serpent and put it on a pole. Anyone bitten who looked at it would live. Jesus cites this as a type of his own crucifixion: 'As Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up' (John 3:14). Healing came through looking at the very thing that killed — judgment became the means of life.",
  },
  {
    title: "Balaam's Donkey — Unexpected Prophets",
    ref: "Numbers 22–24",
    body: "Balak, king of Moab, hires Balaam to curse Israel. God intervenes spectacularly: Balaam's donkey sees the angel of the LORD blocking the road and speaks to rebuke him. Balaam ends up blessing Israel four times. His fourth oracle contains a remarkable messianic prophecy: 'A star shall come out of Jacob, a scepter shall rise out of Israel' (24:17). The pagan prophet becomes an unwilling instrument of divine promise.",
  },
];

const SHEMA_SECTIONS = [
  {
    title: "Deuteronomy 6:4–5 — The Core Command",
    body: "Hear, O Israel: The LORD our God, the LORD is one. You shall love the LORD your God with all your heart and with all your soul and with all your might. This is the Shema (from 'shema' — 'hear'). It became the central daily prayer of Judaism, recited morning and evening. Jesus names it the greatest commandment (Mark 12:29–30), combining it with Leviticus 19:18. The oneness of God is the foundation of love — you cannot love someone you do not know.",
  },
  {
    title: "Deuteronomy 6:6–9 — Imprinting the Word",
    body: "These words shall be on your heart. Teach them diligently to your children. Talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise. Bind them as a sign on your hand, and they shall be as frontlets between your eyes. Write them on the doorposts of your house and on your gates. The Shema was not meant to be recited liturgically and forgotten — it was meant to saturate every moment of daily life.",
  },
  {
    title: "Deuteronomy 6:10–12 — The Warning of Prosperity",
    body: "When the LORD brings you into the land with great cities you did not build, houses full of all good things you did not fill, cisterns you did not dig, vineyards and olive trees you did not plant — then take care lest you forget the LORD, who brought you out of the land of Egypt, out of the house of slavery. Deuteronomy is realistic about success: abundance breeds forgetfulness. The generation in the wilderness lacked bread and water. The next generation will have everything — and that will be the greater test.",
  },
  {
    title: "Mark 12:28–34 — Jesus on the Greatest Commandment",
    body: "A scribe asks which commandment is most important. Jesus recites the Shema in full, then adds love of neighbor as the second. The scribe agrees that these two together are 'much more than all whole burnt offerings and sacrifices.' Jesus responds: 'You are not far from the kingdom of God.' The Shema is not first-century nostalgia in Jesus's mouth — it is the living center of what it means to know God.",
  },
];

const COVENANT_SECTIONS = [
  {
    title: "The Suzerain-Vassal Structure",
    body: "Scholars (especially Meredith Kline) have shown that Deuteronomy follows the pattern of ancient Near Eastern suzerain-vassal treaties: historical prologue (what the great king did), stipulations (the law), blessings and curses, witnesses, and provision for the document. This structure means Deuteronomy is not a random law code — it is a covenant document that defines the relationship between the Great King (YHWH) and his vassal people (Israel). The law is the shape of the covenant relationship.",
  },
  {
    title: "Blessings and Curses — Deuteronomy 28",
    body: "If you obey, rain will fall, enemies will flee, the land will produce. If you disobey, drought, famine, disease, exile. The curses of Deuteronomy 28 are not arbitrary punishments — they are the covenant breaking back on itself. The prophets (Hosea, Jeremiah, Ezekiel) interpret the Babylonian exile as the fulfillment of exactly these curses. Paul in Galatians 3:13 says Christ 'redeemed us from the curse of the law by becoming a curse for us.'",
  },
  {
    title: "Choose Life or Death — Deuteronomy 30:15–20",
    body: "See, I have set before you today life and good, death and evil. If you obey the commandments of the LORD your God, you shall live. But if your heart turns away and you will not hear, you shall perish. I have set before you life and death, blessing and curse. Therefore choose life. This is one of the most intense moments in Scripture — God laying out the stakes plainly. 'Choose life' is not prosperity-gospel optimism; it is the culminating appeal of everything Moses has said for four books.",
  },
  {
    title: "Covenant Renewal on the Plains of Moab",
    body: "The covenant is not made only at Sinai. Deuteronomy is a second giving of the law (its name in Greek means 'second law') to the new generation that did not stand at Horeb. Moses tells them explicitly: 'The LORD our God made a covenant with us in Horeb. Not with our fathers did the LORD make this covenant, but with us, who are all of us here alive today' (Deut 5:2–3). Covenant is not merely historical inheritance — it is renewed with each generation, lived in the present.",
  },
];

const MOSES_SECTIONS = [
  {
    title: "Moses Excluded — Numbers 20",
    body: "At Meribah, the people complain again for water. God tells Moses to speak to the rock. Moses, in anger, strikes it twice. Water comes, but God's verdict is severe: 'Because you did not believe in me, to uphold me as holy in the eyes of the people of Israel, therefore you shall not bring this assembly into the land.' The greatest leader in Israel's history, the one who spoke with God face to face, will not enter the Promised Land. The reasons are debated (anger? disobedience? misrepresenting God?) but the weight of the moment is clear: no one is above the covenant.",
  },
  {
    title: "Moses as Prophet and Priest — Deuteronomy 18",
    body: "Deuteronomy 18:15 is one of the most significant messianic texts in the Pentateuch: 'The LORD your God will raise up for you a prophet like me from among you, from your brothers — it is to him you shall listen.' Peter (Acts 3:22) and Stephen (Acts 7:37) both quote this verse as fulfilled in Jesus. Moses is the prototype of the prophet who mediates between God and humanity, stands in the breach, and delivers the word that liberates.",
  },
  {
    title: "The Song of Moses — Deuteronomy 32",
    body: "God commands Moses to write a song and teach it to Israel as a witness against them. The Song of Moses surveys the whole arc of Israel's story: God's faithful care, Israel's rebellion, God's judgment, and ultimately his vindication of his people. It ends with an invitation for the nations to rejoice with God's people (32:43), a verse Paul quotes in Romans 15:10. Revelation 15:3 pictures the redeemed in heaven singing 'the song of Moses and the song of the Lamb.'",
  },
  {
    title: "The Death of Moses — Deuteronomy 34",
    body: "Moses ascends Mount Nebo, God shows him the whole land — from Dan to the Negev — and he dies there, in the land of Moab, a hundred and twenty years old, his eye undimmed and his vigor unabated. 'The LORD buried him in the valley in the land of Moab, but no one knows his burial place to this day.' No prophet has risen since in Israel like Moses, whom the LORD knew face to face. The book ends quietly, on the border of everything Israel had waited for, with the greatest figure in the story gone.",
  },
];

const KEY_PASSAGES = [
  { ref: "Numbers 6:24–26", text: "The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.", note: "The Aaronic blessing — still used in churches worldwide as the benediction." },
  { ref: "Numbers 14:18", text: "The LORD is slow to anger, abounding in love and forgiving sin and rebellion.", note: "Moses recalls God's character from Exodus 34 as the basis of his intercession for Israel after the spy report." },
  { ref: "Deuteronomy 6:4–5", text: "Hear, O Israel: The LORD our God, the LORD is one. Love the LORD your God with all your heart and with all your soul and with all your strength.", note: "The Shema — the most fundamental confession of Jewish and Christian faith." },
  { ref: "Deuteronomy 8:3", text: "Man does not live on bread alone but on every word that comes from the mouth of God.", note: "Jesus quotes this to Satan in the wilderness (Matthew 4:4), connecting his forty days to Israel's forty years." },
  { ref: "Deuteronomy 29:29", text: "The secret things belong to the LORD our God, but the things revealed belong to us and to our children forever, that we may follow all the words of this law.", note: "The canonical boundary between what God has given us and what remains mystery." },
  { ref: "Deuteronomy 30:19", text: "I have set before you life and death, blessing and cursing. Therefore choose life, that both you and your descendants may live.", note: "The climactic appeal of Moses's farewell — the choice is real, the stakes are absolute." },
];

const THEMES = [
  { icon: "🗺️", title: "Forty Years as Classroom", body: "The wilderness is not merely punishment — it is education. Deuteronomy 8:2–3 says God led Israel in the wilderness to humble and test them, to know what was in their hearts, and to teach them that man does not live on bread alone. Suffering reveals what prosperity conceals." },
  { icon: "📖", title: "Memory as Discipline", body: "Deuteronomy returns obsessively to the command to remember. Remember that you were slaves in Egypt. Remember what happened at Horeb. Remember the wilderness. Biblical memory is not nostalgia — it is the active recollection of God's saving acts that shapes present obedience." },
  { icon: "⚖️", title: "The Deuteronomic Pattern", body: "The deuteronomic pattern — obedience leads to blessing, disobedience leads to curse — runs through the historical books (Deuteronomy–Kings). But Ecclesiastes, Job, and the Psalms of lament complicate the pattern. The New Testament fulfills it in an unexpected direction: Jesus absorbs the curse so that blessing can come to the Gentiles (Gal 3:13–14)." },
  { icon: "❤️", title: "Love as Covenant Loyalty", body: "Deuteronomy uses the language of love more than any other book in the Pentateuch. But this love is not sentimental affection — it is covenant loyalty (hesed), the commitment that keeps faith even when inconvenient or costly. When Jesus says love the Lord with all your heart, he is calling for the same total covenant fidelity Moses described." },
  { icon: "🌍", title: "The Nations in View", body: "Deuteronomy's concern is not exclusively with Israel. The Song of Moses ends with a call for the nations to rejoice. Moses predicts Israel's exile and restoration will serve as a witness to the nations. Paul reads Abraham's blessing through Deuteronomy to argue that Gentiles are always part of the covenant purpose (Gal 3, Rom 4)." },
  { icon: "✝️", title: "Moses as Type of Christ", body: "The NT consistently reads Moses typologically. Moses is the prophet like himself who will come (Deut 18:15). Jesus's forty days in the wilderness re-enact Israel's forty years. Jesus's Sermon on the Mount echoes Moses on Sinai/Horeb. The transfiguration places Moses with Jesus, with the voice saying 'listen to him' — the language of Deut 18:15. Jesus does not abolish the Torah; he fulfills it." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

export default function NumbersDeuteronomyGuide() {
  const [tab, setTab] = usePersistedState<NumDeutTab>("vine_numdeut_tab", "overview");
  const [openW, setOpenW] = useState<string | null>(null);
  const [openS, setOpenS] = useState<string | null>(null);
  const [openC, setOpenC] = useState<string | null>(null);
  const [openM, setOpenM] = useState<string | null>(null);

  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vine_numdeut_journal");
      if (saved) setEntries(JSON.parse(saved));
    } catch {}
  }, []);

  const saveEntry = () => {
    if (!verse.trim() && !reflection.trim()) return;
    const next: JEntry[] = [
      { id: Date.now().toString(), date: new Date().toLocaleDateString(), verse, reflection, prayer },
      ...entries,
    ];
    setEntries(next);
    localStorage.setItem("vine_numdeut_journal", JSON.stringify(next));
    setVerse(""); setReflection(""); setPrayer("");
  };

  const deleteEntry = (id: string) => {
    const next = entries.filter((e) => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_numdeut_journal", JSON.stringify(next));
  };

  const inputStyle = { background: "#0D0D1A", border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "10px 14px", width: "100%", fontSize: 15, outline: "none" };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏜️</div>
          <h1 style={{ fontSize: 36, fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
            Numbers &amp; Deuteronomy
          </h1>
          <p style={{ color: MUTED, marginTop: 10, fontSize: 17, maxWidth: 640, marginInline: "auto" }}>
            Forty years in the wilderness — the census, the spy mission, the bronze serpent, Balaam, the Shema, and Moses&apos;s farewell sermon. Choose life.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32, justifyContent: "center" }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "8px 18px", borderRadius: 20, fontSize: 14, fontWeight: 600, cursor: "pointer",
                background: tab === t.id ? GOLD : CARD,
                color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? GOLD : BORDER}`,
                transition: "all 0.2s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div style={{ display: "grid", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 0, color: GOLD }}>Two Books, One Journey</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                Numbers and Deuteronomy complete the Pentateuch&apos;s account of Israel&apos;s wilderness journey. <strong style={{ color: TEXT }}>Numbers</strong> covers the period from Sinai to the plains of Moab — forty years of wandering, rebellion, and God&apos;s patient provision. <strong style={{ color: TEXT }}>Deuteronomy</strong> is Moses&apos;s final address to the generation that will actually enter Canaan, a restatement and deepening of the covenant law.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                The Hebrew name for Numbers is <em>Bemidbar</em> — &quot;In the Wilderness.&quot; It is a book about what happens when the journey is longer than you expected, when the generation that was supposed to arrive never does, and when the only question is whether the next generation will trust what their parents refused to.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: "Numbers: Wilderness Wandering", val: "40 chapters, from Sinai to Moab", color: GOLD },
                { label: "Deuteronomy: Second Giving of the Law", val: "34 chapters, Moses&apos;s farewell sermons", color: GREEN },
                { label: "Key Failure", val: "Kadesh Barnea — refusing to enter the land", color: "#EF4444" },
                { label: "Key Promise", val: "Deut 18:15 — a prophet like Moses will come", color: "#3B82F6" },
              ].map((s) => (
                <div key={s.label} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ color: s.color, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{s.label}</div>
                  <div style={{ color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: s.val }} />
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginTop: 0 }}>How to Read These Books Together</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                Numbers and Deuteronomy are bookends around Israel&apos;s great failure. Numbers records the generation that could have entered the land but didn&apos;t — and why. Deuteronomy is Moses&apos;s extended plea to their children: <em>You have a second chance. Don&apos;t waste it.</em>
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                Read Numbers asking: &quot;Where did they go wrong, and why?&quot; Read Deuteronomy asking: &quot;What does Moses want the next generation to understand that the last one missed?&quot; And read both with Hebrews 3–4 open, which uses the wilderness generation as the supreme warning about hardening your heart against the living God.
              </p>
            </div>
          </div>
        )}

        {/* WILDERNESS */}
        {tab === "wilderness" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: GOLD, fontWeight: 700, marginTop: 0 }}>Forty Years of Testing</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                Deuteronomy 8:2 says God led Israel in the wilderness forty years &quot;to humble you and test you, to know what was in your heart, whether you would keep his commandments or not.&quot; The wilderness was not an obstacle to the story — it <em>was</em> the story.
              </p>
            </div>
            {WILDERNESS_EVENTS.map((ev) => (
              <div key={ev.title} style={{ background: CARD, border: `1px solid ${openW === ev.title ? GOLD : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenW(openW === ev.title ? null : ev.title)}
                  style={{ width: "100%", background: "none", border: "none", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}
                >
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{ev.title}</div>
                    <div style={{ color: GOLD, fontSize: 13, marginTop: 3 }}>{ev.ref}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20 }}>{openW === ev.title ? "−" : "+"}</span>
                </button>
                {openW === ev.title && (
                  <div style={{ padding: "0 22px 20px", color: MUTED, lineHeight: 1.8 }}>{ev.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SHEMA */}
        {tab === "shema" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: GOLD, fontWeight: 700, marginTop: 0 }}>Hear, O Israel</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                Deuteronomy 6:4–9 is the Shema, the foundational confession of Israel and the heart of Jesus&apos;s teaching about the greatest commandment. Every morning and evening for three thousand years, Jewish people have recited: <em>Shema Yisrael, Adonai Eloheinu, Adonai Echad.</em>
              </p>
            </div>
            <div style={{ background: `${GOLD}15`, border: `1px solid ${GOLD}`, borderRadius: 14, padding: 24, textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: GOLD, marginBottom: 8 }}>Deuteronomy 6:4–5</div>
              <div style={{ fontSize: 18, color: TEXT, lineHeight: 1.8, fontStyle: "italic" }}>
                &quot;Hear, O Israel: The LORD our God, the LORD is one. You shall love the LORD your God with all your heart and with all your soul and with all your might.&quot;
              </div>
            </div>
            {SHEMA_SECTIONS.map((s) => (
              <div key={s.title} style={{ background: CARD, border: `1px solid ${openS === s.title ? GOLD : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenS(openS === s.title ? null : s.title)}
                  style={{ width: "100%", background: "none", border: "none", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}
                >
                  <div style={{ fontWeight: 700, fontSize: 16, textAlign: "left" }}>{s.title}</div>
                  <span style={{ color: MUTED, fontSize: 20 }}>{openS === s.title ? "−" : "+"}</span>
                </button>
                {openS === s.title && (
                  <div style={{ padding: "0 22px 20px", color: MUTED, lineHeight: 1.8 }}>{s.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* COVENANT */}
        {tab === "covenant" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: GOLD, fontWeight: 700, marginTop: 0 }}>Covenant Structure and Stakes</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                Deuteronomy is shaped like an ancient covenant treaty — not a legal code but a document defining the relationship between King and people, with all its obligations, consequences, and promises.
              </p>
            </div>
            {COVENANT_SECTIONS.map((s) => (
              <div key={s.title} style={{ background: CARD, border: `1px solid ${openC === s.title ? GOLD : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenC(openC === s.title ? null : s.title)}
                  style={{ width: "100%", background: "none", border: "none", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}
                >
                  <div style={{ fontWeight: 700, fontSize: 16, textAlign: "left" }}>{s.title}</div>
                  <span style={{ color: MUTED, fontSize: 20 }}>{openC === s.title ? "−" : "+"}</span>
                </button>
                {openC === s.title && (
                  <div style={{ padding: "0 22px 20px", color: MUTED, lineHeight: 1.8 }}>{s.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* MOSES */}
        {tab === "moses" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: GOLD, fontWeight: 700, marginTop: 0 }}>The Greatest and Most Tragic Prophet</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                Moses towers over the entire Hebrew Bible. He is the archetypal prophet, the mediator of the covenant, the intercessor who stands between God&apos;s wrath and Israel&apos;s life. And he dies on the wrong side of the Jordan.
              </p>
            </div>
            {MOSES_SECTIONS.map((s) => (
              <div key={s.title} style={{ background: CARD, border: `1px solid ${openM === s.title ? GOLD : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenM(openM === s.title ? null : s.title)}
                  style={{ width: "100%", background: "none", border: "none", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}
                >
                  <div style={{ fontWeight: 700, fontSize: 16, textAlign: "left" }}>{s.title}</div>
                  <span style={{ color: MUTED, fontSize: 20 }}>{openM === s.title ? "−" : "+"}</span>
                </button>
                {openM === s.title && (
                  <div style={{ padding: "0 22px 20px", color: MUTED, lineHeight: 1.8 }}>{s.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* KEY PASSAGES */}
        {tab === "passages" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: GOLD, fontWeight: 700, marginTop: 0 }}>Passages Worth Memorizing</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                Numbers and Deuteronomy contain some of the most quoted texts in the entire Bible — texts Jesus memorized, texts Paul built his theology on, texts the church has used for three millennia.
              </p>
            </div>
            {KEY_PASSAGES.map((p) => (
              <div key={p.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>{p.ref}</div>
                <div style={{ color: TEXT, fontSize: 16, lineHeight: 1.7, fontStyle: "italic", marginBottom: 12 }}>&quot;{p.text}&quot;</div>
                <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{p.note}</div>
              </div>
            ))}
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div style={{ display: "grid", gap: 16 }}>
            {THEMES.map((th) => (
              <div key={th.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{th.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: GOLD }}>{th.title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{th.body}</div>
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "grid", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <h2 style={{ color: GOLD, fontWeight: 700, marginTop: 0 }}>Wilderness Journal</h2>
              <p style={{ color: MUTED, marginBottom: 20 }}>Record your reflections as you walk through these texts.</p>
              <div style={{ display: "grid", gap: 12 }}>
                <input value={verse} onChange={(e) => setVerse(e.target.value)} placeholder="Verse or passage..." style={inputStyle} />
                <textarea value={reflection} onChange={(e) => setReflection(e.target.value)} placeholder="Your reflection..." rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} placeholder="Prayer response..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                <button onClick={saveEntry} style={{ background: GOLD, border: "none", borderRadius: 10, padding: "12px 24px", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ color: GOLD, fontWeight: 700 }}>{e.verse || "Reflection"}</span>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                    <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: "#EF4444", cursor: "pointer", fontSize: 13 }}>Delete</button>
                  </div>
                </div>
                {e.reflection && <p style={{ color: TEXT, marginBottom: 8, lineHeight: 1.7 }}>{e.reflection}</p>}
                {e.prayer && <p style={{ color: MUTED, fontStyle: "italic", margin: 0 }}>{e.prayer}</p>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "grid", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: GOLD, fontWeight: 700, marginTop: 0 }}>Video Teaching</h2>
              <p style={{ color: MUTED }}>Visual overviews and deep dives into Numbers and Deuteronomy.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 20 }}>
              <div>
                <VideoEmbed videoId="EavWRB3e4mA" title="The Book of Numbers — BibleProject Overview" />
                <p style={{ color: MUTED, fontSize: 14, marginTop: 8 }}>BibleProject: The Book of Numbers</p>
              </div>
              <div>
                <VideoEmbed videoId="L7tRChGDBFU" title="The Book of Deuteronomy — BibleProject Overview" />
                <p style={{ color: MUTED, fontSize: 14, marginTop: 8 }}>BibleProject: The Book of Deuteronomy</p>
              </div>
              <div>
                <VideoEmbed videoId="r2LKiHHJuWw" title="The Shema — The Greatest Commandment" />
                <p style={{ color: MUTED, fontSize: 14, marginTop: 8 }}>Understanding Deuteronomy 6:4–9 and its significance</p>
              </div>
              <div>
                <VideoEmbed videoId="rn85KjxFVGE" title="Moses — Prophet, Mediator, Type of Christ" />
                <p style={{ color: MUTED, fontSize: 14, marginTop: 8 }}>Moses&apos;s role in redemptive history and as a type of Jesus</p>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
      <Footer />
    </div>
  );
}
