"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";


const TABS = [
  { id: "overview", label: "Overview" },
  { id: "biblical", label: "Biblical Evidence" },
  { id: "history", label: "Historical Development" },
  { id: "relations", label: "Relations & Roles" },
  { id: "analogies", label: "Analogies" },
  { id: "heresies", label: "Heresies" },
  { id: "practical", label: "Practical Life" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const TRINITY_TEXTS = [
  { ref: "Matthew 28:19", text: "Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.", color: GREEN },
  { ref: "2 Corinthians 13:14", text: "May the grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all.", color: BLUE },
  { ref: "John 1:1, 14", text: "In the beginning was the Word, and the Word was with God, and the Word was God... The Word became flesh and made his dwelling among us.", color: GOLD },
  { ref: "John 14:16–17", text: "I will ask the Father, and he will give you another advocate to help you and be with you forever — the Spirit of truth.", color: TEAL },
  { ref: "Ephesians 1:3–14", text: "The Father who chose us... Christ who redeemed us... the Spirit who sealed us — a Trinitarian structure of salvation.", color: PURPLE },
];

const TRINITY_FORMULA = [
  { point: "One God", desc: "Monotheism is non-negotiable. Deuteronomy 6:4: 'The LORD our God, the LORD is one.' Christianity is not tritheism — three gods — but one God who exists as three persons.", icon: "1", color: GOLD },
  { point: "Three Persons", desc: "Father, Son, and Holy Spirit are genuinely distinct — not three modes, roles, or aspects of one God. They address each other, relate to each other, and have distinct personal properties.", icon: "3", color: BLUE },
  { point: "Full Deity", desc: "Each person fully possesses the one divine nature. The Father is God; the Son is God (John 1:1; 20:28); the Spirit is God (Acts 5:3–4). Not three parts of God but one God in three persons.", icon: "∞", color: TEAL },
  { point: "Distinct Persons", desc: "The three are not identical. The Father sends; the Son is sent. The Spirit proceeds. There are real relations of origin and real personal distinctions within the one God.", icon: "≠", color: GREEN },
];

const BIBLICAL_EVIDENCE = [
  {
    title: "Old Testament Anticipations",
    desc: "The Hebrew echad ('one') in the Shema allows for a unified composite (as in Ezek 37:17). The plural 'us' in Genesis (1:26; 3:22; 11:7) and the Angel of the LORD who is identified with YHWH yet distinct from him. The Spirit of God at creation (Gen 1:2). Wisdom as a distinct person (Prov 8:22–31). The Son promised in Psalm 2 and Daniel 7:13–14.",
    color: GOLD,
  },
  {
    title: "Jesus's Trinitarian Statements",
    desc: "Jesus distinguishes himself from the Father ('the Father is greater than I' — John 14:28; 'I and the Father are one' — John 10:30) while claiming full divine equality (John 5:18–23). He prays to the Father, sends the Spirit, and commands Trinitarian baptism (Matt 28:19). John 17's High Priestly Prayer is deeply Trinitarian.",
    color: BLUE,
  },
  {
    title: "The Baptism of Jesus",
    desc: "Matthew 3:16–17: at Jesus's baptism, the Son is in the water, the Spirit descends as a dove, the Father speaks from heaven. All three persons are present and active simultaneously — a foundational Trinitarian moment.",
    color: TEAL,
  },
  {
    title: "Pauline and Petrine Evidence",
    desc: "2 Corinthians 13:14 (grace/love/fellowship Trinitarian benediction); Ephesians 1:3–14 (Father elects, Son redeems, Spirit seals); Ephesians 2:18 (access through Christ by the Spirit to the Father); 1 Peter 1:2 (foreknown by the Father, sanctified by the Spirit, sprinkled by Christ's blood).",
    color: GREEN,
  },
];

const HISTORICAL_DEVELOPMENT = [
  { year: "~100–170", event: "Apostolic Fathers", desc: "Justin Martyr and others speak of Father, Son, and Spirit in a functional rather than fully developed ontological Trinitarian framework. The seeds are present; the systematic articulation is still developing." },
  { year: "~180–220", event: "Tertullian", desc: "First to use the term 'Trinity' (trinitas) and key formula: 'one substance (substantia), three persons (personae).' Coined critical vocabulary for Western Trinitarian theology." },
  { year: "250–325", event: "Arius vs. Alexander", desc: "Arius taught the Son was a creature — 'there was when he was not.' His bishop Alexander opposed him. The controversy led directly to the Council of Nicaea (325)." },
  { year: "325", event: "Council of Nicaea", desc: "Condemned Arianism. Affirmed the Son is homoousios — of the same substance as the Father. Key creedal formulation: 'God from God, Light from Light, True God from True God, begotten not made, of one being with the Father.'" },
  { year: "381", event: "Council of Constantinople", desc: "Completed the Nicene Creed. Addressed pneumatomachians ('Spirit-fighters') who denied the Spirit's full deity. Affirmed the Spirit as 'the Lord and Giver of life, who proceeds from the Father, who with the Father and Son is worshiped and glorified.'" },
  { year: "589", event: "Filioque Controversy", desc: "The Western church added 'and from the Son' (filioque) to the Creed — the Spirit proceeds from Father and Son. The Eastern church rejects this addition, holding the Spirit proceeds from the Father alone (monopatrist). This split deepened the Great Schism (1054)." },
  { year: "~400", event: "Augustine's De Trinitate", desc: "Augustine developed the psychological analogies for the Trinity (memory/understanding/will; lover/beloved/love). His work shaped Western Trinitarian theology profoundly for over a millennium." },
];

const RELATIONS_ROLES = [
  {
    title: "Relations of Origin",
    desc: "The persons are distinguished by their relations of origin. The Father is unbegotten — he is the source. The Son is eternally begotten of the Father (John 1:14, 18 — monogenes, 'only-begotten'). The Spirit eternally proceeds from the Father (and the Son in Western theology). These relations are eternal, not temporal.",
    color: GOLD,
  },
  {
    title: "Personal Properties",
    desc: "Each person has unique personal properties: the Father is unbegotten; the Son is begotten; the Spirit proceeds. These are real distinctions within the one God — not just external roles but internal relations that constitute the divine life.",
    color: BLUE,
  },
  {
    title: "Economic Trinity",
    desc: "How the Trinity acts in creation and redemption — the Father sends the Son and Spirit; the Son becomes incarnate and accomplishes redemption; the Spirit applies redemption. The works of the Trinity ad extra (toward creation) are undivided, but appropriated distinctly to each person.",
    color: TEAL,
  },
  {
    title: "Immanent Trinity",
    desc: "The Trinity as God is in himself — the eternal relations of Father, Son, and Spirit before and apart from creation. Rahner's rule: 'The economic Trinity is the immanent Trinity and vice versa' — what God does in salvation reflects who God is eternally.",
    color: GREEN,
  },
  {
    title: "Eternal Subordination Debate",
    desc: "Is the Son eternally subordinate to the Father in authority (Eternal Subordination of the Son / EFS), or is this only an economic role in the Incarnation? Traditional Nicene theology holds the Son is equal in being and authority; the subordination is relational (the Son is from the Father) but not hierarchical. ESS/EFS is rejected by most systematic theologians as a departure from Nicene orthodoxy.",
    color: PURPLE,
  },
];

const ANALOGIES = [
  {
    title: "Augustine: Memory, Understanding, Will",
    desc: "The human mind bears traces of the Trinity: memory (the Father's self-knowledge), understanding (the Son as the Word), and will/love (the Spirit). Helpful for showing three-in-one coherence. Limitation: this is within one person, not three.",
    verdict: "Good for showing unity; weak on distinctness.",
    color: GOLD,
  },
  {
    title: "The Three-Leaf Clover",
    desc: "Three leaves in one shamrock. Patrick supposedly used this. Easy to visualize. Limitation: it implies the parts of the leaf are the Trinity — which leads to partialism (each person is one-third of God).",
    verdict: "Helpful illustration; theologically misleading if taken far.",
    color: GREEN,
  },
  {
    title: "Water (Ice / Liquid / Steam)",
    desc: "H2O in three forms. Very popular. Limitation: this is modalism — one substance in three different modes, not three simultaneous persons. Categorically wrong when applied to the Trinity.",
    verdict: "Never use this — it teaches heresy.",
    color: RED,
  },
  {
    title: "The Sun (Ball / Light / Heat)",
    desc: "Some use the sun's ball, light rays, and heat as an analogy. Limitation: These are really parts or effects of one thing, not distinct persons. Also risks implying the Son/Spirit are created by or derivative from the Father.",
    verdict: "Imprecise — avoid.",
    color: MUTED,
  },
  {
    title: "Perichoresis (Mutual Indwelling)",
    desc: "The Cappadocian Fathers' concept of perichoresis (Greek: mutual interpenetration) — each person fully indwells and is fully known by the other two. Not three isolated beings but a communion of mutual self-giving love. This is not an analogy but a theological description.",
    verdict: "Best theological description of Trinitarian unity-in-distinction.",
    color: TEAL,
  },
];

const HERESIES = [
  { title: "Modalism / Sabellianism", desc: "One person who appears in three different modes — Father in OT, Son in the Incarnation, Spirit at Pentecost. God is not simultaneously three persons but one person wearing three masks. Modern form: Oneness Pentecostalism.", color: RED },
  { title: "Arianism", desc: "The Son is a created being — the greatest of creatures, but not of the same substance as the Father. 'There was when he was not.' Condemned at Nicaea (325). Survives in Jehovah's Witnesses and other groups.", color: PURPLE },
  { title: "Tritheism", desc: "Three separate gods who cooperate. Denies the numerical unity of God. 'Social Trinity' models pushed too far can slide toward tritheism. No major denomination holds this.", color: BLUE },
  { title: "Subordinationism", desc: "The Son (or Spirit) is ontologically inferior to the Father — not just economically ordered but essentially less divine. Some forms of Arianism; also a risk in Eternal Functional Subordination (ESS) if not carefully qualified.", color: GOLD },
  { title: "Pneumatomachianism", desc: "The 'Spirit-fighters' of the 4th century who affirmed the Son's full deity but denied the Spirit's. Condemned at Constantinople (381). Led to the explicit affirmation of the Spirit's deity and worship in the Creed.", color: TEAL },
];

const PRACTICAL_POINTS = [
  { title: "Prayer is Trinitarian", desc: "We pray to the Father (Matt 6:9), through the Son (John 14:13–14; 16:23), empowered by the Spirit (Rom 8:26–27). Christian prayer is participatory — entering into the Trinitarian communion.", color: GREEN },
  { title: "Salvation is Trinitarian", desc: "The Father elects and sends; the Son redeems; the Spirit applies and assures. Every blessing of salvation is a Trinitarian act. Knowing this guards against both grace-without-Christ and Christ-without-the-Spirit.", color: BLUE },
  { title: "Community Reflects the Trinity", desc: "The perichoretic community of the Trinity is the model for human community. Genesis 2:18 ('not good to be alone') and John 17 suggest that human community at its best reflects the self-giving, mutually honoring love of the Trinity.", color: TEAL },
  { title: "Mission Is Grounded in the Trinity", desc: "The missio Dei — God's mission — is rooted in the sending actions of the Trinity. 'As the Father has sent me, I am sending you... receive the Holy Spirit' (John 20:21–22). Mission flows from the Trinitarian life of God.", color: GOLD },
  { title: "Worship Is Trinitarian", desc: "The Creeds structure baptism and worship in Trinitarian form. The great doxologies are Trinitarian ('Glory to the Father and to the Son and to the Holy Spirit'). All true worship is offered to the Father through the Son in the Spirit.", color: PURPLE },
];

const VIDEOS = [
  { videoId: "K5mS7JOT8GA", title: "The Trinity Explained — R.C. Sproul" },
  { videoId: "xLMqJnBfFxA", title: "How to Explain the Trinity — Tim Keller" },
  { videoId: "Ld3LPuHLAGU", title: "The Doctrine of the Trinity — Ligonier" },
  { videoId: "vbhGLlWJkHQ", title: "Social vs. Classical Trinity — Bruce Ware" },
  { videoId: "MRFJf0t3f2U", title: "The Trinity and Your Prayer Life" },
];

export default function TrinityGuidePage() {
  const [tab, setTab] = usePersistedState<string>("vine_trin_tab", "overview");
  const [openHistory, setOpenHistory] = usePersistedState<string>("vine_trin_hist", "");
  const [openHeresy, setOpenHeresy] = usePersistedState<string>("vine_trin_her", "");
  const [openAnalogy, setOpenAnalogy] = usePersistedState<string>("vine_trin_anal", "");
  const [journal, setJournal] = usePersistedState<string>("vine_trin_journal", "");

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
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>∞</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: PURPLE, textTransform: "uppercase" }}>Systematic Theology</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            The Trinity: One God in Three Persons
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            The doctrine of the Trinity — one God eternally existing as Father, Son, and Holy Spirit — is Christianity&apos;s most distinctive and profound claim about God. This guide explores its biblical foundations, historical development, and profound implications for Christian life.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? PURPLE : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: PURPLE }}>Key Trinitarian Texts</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {TRINITY_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>The Trinitarian Formula</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                {TRINITY_FORMULA.map((item) => (
                  <div key={item.point} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1rem", textAlign: "center" }}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: item.color, marginBottom: "0.4rem" }}>{item.icon}</div>
                    <div style={{ fontWeight: 800, color: item.color, marginBottom: "0.4rem" }}>{item.point}</div>
                    <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "biblical" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GOLD }}>Biblical Evidence for the Trinity</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              The word &quot;Trinity&quot; never appears in Scripture — but the reality does. The biblical data includes the deity of each person, their personal distinctness, and their unity as one God.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {BIBLICAL_EVIDENCE.map((item) => (
                <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "history" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>Historical Development</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              The church did not invent the Trinity — it recognized what Scripture taught, and formalized that recognition under pressure from heresy.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {HISTORICAL_DEVELOPMENT.map((item, i) => {
                const key = String(i);
                const open = openHistory === key;
                const color = [GOLD, BLUE, TEAL, GREEN, PURPLE, RED, GOLD][i % 7];
                return (
                  <div key={item.year}>
                    <button type="button" style={accordionBtn(open, color)} onClick={() => setOpenHistory(open ? "" : key)}>
                      <span><span style={{ color, marginRight: "0.5rem" }}>{item.year}</span>{item.event}</span>
                      <span style={{ color }}>{open ? "−" : "+"}</span>
                    </button>
                    {open && (
                      <div style={{ background: `${color}0A`, border: `1px solid ${color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                        <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "relations" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: BLUE }}>Relations and Roles</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              The persons are distinguished by their eternal relations of origin. The Trinity is not three gods, nor one God in three disguises, but one divine being in three eternal personal relations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {RELATIONS_ROLES.map((item) => (
                <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "analogies" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GREEN }}>Analogies and Their Limits</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              All analogies for the Trinity break down — because there is nothing else like the Trinity. Augustine: &quot;If you have understood it, it is not God.&quot; The analogies illuminate aspects but fail at others.
            </p>
            {ANALOGIES.map((a, i) => {
              const key = String(i);
              const open = openAnalogy === key;
              return (
                <div key={a.title}>
                  <button type="button" style={accordionBtn(open, a.color)} onClick={() => setOpenAnalogy(open ? "" : key)}>
                    <span>{a.title}</span>
                    <span style={{ color: a.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${a.color}0A`, border: `1px solid ${a.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }}>{a.desc}</p>
                      <p style={{ color: a.color === RED ? RED : GREEN, fontWeight: 700, fontSize: "0.9rem" }}>Verdict: {a.verdict}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "heresies" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: RED }}>Trinitarian Heresies</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Every Trinitarian heresy errs by emphasizing either unity (at the expense of distinction) or distinction (at the expense of unity). The orthodox formula holds both: one God, three persons.
            </p>
            {HERESIES.map((h, i) => {
              const key = String(i);
              const open = openHeresy === key;
              return (
                <div key={h.title}>
                  <button type="button" style={accordionBtn(open, h.color)} onClick={() => setOpenHeresy(open ? "" : key)}>
                    <span>{h.title}</span>
                    <span style={{ color: h.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${h.color}0A`, border: `1px solid ${h.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{h.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "practical" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: GREEN, margin: 0 }}>Practical Implications</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              The Trinity is not an abstract puzzle — it is the shape of God&apos;s very life, and it has profound implications for how we pray, worship, live in community, and understand mission.
            </p>
            {PRACTICAL_POINTS.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Personal Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "1rem" }}>How does the reality that God is Trinity — a community of self-giving love — change how you think about prayer, community, and what it means to be made in his image?</p>
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
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on the Trinity</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Christology Guide", href: "/christology-guide" },
            { label: "Pneumatology Guide", href: "/pneumatology-guide" },
            { label: "Classic Heresies", href: "/classic-heresies" },
            { label: "Systematic Theology 101", href: "/systematic-theology-101" },
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
