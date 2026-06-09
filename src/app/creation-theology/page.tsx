"use client";
import { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";

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

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "ex-nihilo", label: "Ex Nihilo" },
  { id: "goodness", label: "Goodness & Order" },
  { id: "mandate", label: "Cultural Mandate" },
  { id: "science", label: "Faith & Science" },
  { id: "views", label: "Origins Views" },
  { id: "care", label: "Creation Care" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const CREATION_TEXTS = [
  {
    ref: "Genesis 1:1",
    text: "In the beginning, God created the heavens and the earth.",
    note: "The opening declaration of the Bible: God is the absolute originator of all that exists. Nothing is co-eternal with God.",
  },
  {
    ref: "John 1:3",
    text: "All things were made through him, and without him was not any thing made that was made.",
    note: "The Logos (Christ) is the agent of creation — creation is a Trinitarian act.",
  },
  {
    ref: "Colossians 1:16-17",
    text: "For by him all things were created... and in him all things hold together.",
    note: "Christ is not only the agent of creation but its ongoing sustainer — providence is creatio continua.",
  },
  {
    ref: "Psalm 19:1",
    text: "The heavens declare the glory of God, and the sky above proclaims his handiwork.",
    note: "Creation is a form of general revelation — it speaks of God's existence, power, and beauty.",
  },
  {
    ref: "Romans 1:20",
    text: "For his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made.",
    note: "Creation leaves humanity without excuse — God's existence is evident from the created order.",
  },
  {
    ref: "Revelation 4:11",
    text: "Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they existed and were created.",
    note: "Creation is an act of will and love — God was not compelled to create. He did so freely.",
  },
];

const EX_NIHILO_POINTS = [
  {
    title: "What It Means",
    desc: "Creation ex nihilo (Latin: 'out of nothing') means God created the universe without pre-existing material. Unlike a craftsman shaping clay, God brought the very substance of the world into existence. There was nothing — and then there was everything.",
    color: GREEN,
  },
  {
    title: "Why It Matters",
    desc: "If God created from pre-existing matter, that matter would be co-eternal and potentially outside God's control — limiting his sovereignty. Ex nihilo means God is absolutely transcendent: nothing exists independently of his creative act.",
    color: TEAL,
  },
  {
    title: "Philosophical Implications",
    desc: "The world has a beginning and is therefore contingent — it doesn't have to exist. Only God exists necessarily. This distinction between Creator and creation (the 'Creator-creature distinction') is foundational to all Christian theology.",
    color: PURPLE,
  },
  {
    title: "Distinction from Pantheism",
    desc: "Pantheism identifies God with the world (God is everything). The Christian doctrine of creation maintains an absolute distinction: God is not the world, and the world is not God. Creation reflects God but is not God.",
    color: GOLD,
  },
  {
    title: "The Trinitarian Shape",
    desc: "Creation is the work of the Father (source), through the Son (agent), by the Spirit (who hovered over the waters, Gen 1:2). The Trinity is not a later addition to Christian theology — it is embedded in the opening chapter of Scripture.",
    color: BLUE,
  },
];

const GOODNESS_POINTS = [
  {
    heading: "Creation is Good",
    desc: "God declares his creation 'good' seven times in Genesis 1, culminating in 'very good' (1:31). Material existence is not evil, not a fall from spiritual purity. This directly counters Gnosticism, Manichaeism, and various forms of body-hating spirituality.",
    color: GREEN,
  },
  {
    heading: "Creation Reflects God",
    desc: "Created things bear the imprint of their Maker — they are not God, but they express his attributes: power, beauty, wisdom, order, generosity. General revelation is real. Beauty in creation is a pointer to God's beauty.",
    color: TEAL,
  },
  {
    heading: "Order is Part of Creation",
    desc: "God creates by separating and naming — light/dark, water/land, categories and kinds. Order is not an imposition on chaotic reality; it is woven into the fabric of creation. Science depends on this created regularity.",
    color: PURPLE,
  },
  {
    heading: "The Fall Did Not Destroy Creation",
    desc: "Genesis 3 curses the ground and introduces death and suffering, but creation is not evil or beyond redemption. Romans 8 shows creation groaning in hope of liberation. The eschaton is not creation's destruction but its renewal.",
    color: GOLD,
  },
];

const MANDATE_CONTENT = [
  {
    title: "The Creation Mandate",
    verse: "Genesis 1:28",
    desc: "God commands the image-bearers to fill the earth and subdue it — to cultivate, develop, and extend creation's potential. This is not optional; it is the first commission God gives humanity.",
    color: GREEN,
  },
  {
    title: "Cultivation, Not Exploitation",
    verse: "Genesis 2:15",
    desc: "God places Adam in the garden 'to work it and keep it' — both productive development (work) and protective care (keep). Stewardship, not domination. The cultural mandate does not justify ecological destruction.",
    color: TEAL,
  },
  {
    title: "Culture as Creation Development",
    verse: "Cultural Extension",
    desc: "The cultural mandate means that all human culture — agriculture, architecture, music, government, technology, art — is the outworking of image-bearing creativity. Culture-making is not secular; it is the vocation God gave humanity at creation.",
    color: PURPLE,
  },
  {
    title: "Redemption and the Mandate",
    verse: "Colossians 3:17",
    desc: "The cultural mandate was not cancelled by the Fall or by the Great Commission. The gospel renews image-bearers for faithful culture-making. Kingdom work includes working in secular professions to the glory of God.",
    color: GOLD,
  },
];

const SCIENCE_VIEWS = [
  {
    label: "Young Earth Creationism (YEC)",
    desc: "The universe is 6,000–10,000 years old; Genesis 1 describes six literal 24-hour days. The flood is global and explains much geological evidence. Held by Ken Ham (Answers in Genesis) and many conservative evangelicals.",
    color: "#EF4444",
  },
  {
    label: "Old Earth Creationism (OEC)",
    desc: "The universe is billions of years old (accepting scientific dating), but God created each species directly and specially. The 'days' of Genesis may be long ages (day-age theory) or literary periods. Held by Hugh Ross (Reasons to Believe).",
    color: GOLD,
  },
  {
    label: "Intelligent Design (ID)",
    desc: "Biological systems show evidence of design that cannot be explained by unguided evolution — particularly irreducible complexity. ID is not exclusively creationist but argues for a designing intelligence. Michael Behe, Stephen Meyer.",
    color: TEAL,
  },
  {
    label: "Evolutionary Creationism (EC)",
    desc: "God created through the process of evolution. Genesis 1–2 is understood as ancient Near Eastern cosmological literature (not a science textbook), conveying theological truth about who created and why, not how. BioLogos (Francis Collins, N.T. Wright).",
    color: BLUE,
  },
  {
    label: "Framework Interpretation",
    desc: "Genesis 1 is structured as a literary framework (two triads of days) to make theological points: God is sovereign Creator, creation is orderly, humans are image-bearers. The days are not sequential chronology but topical arrangement. Meredith Kline.",
    color: PURPLE,
  },
];

const CARE_POINTS = [
  {
    title: "Creation Care as Stewardship",
    desc: "Christians are called to care for creation as stewards, not owners. The earth belongs to God (Psalm 24:1). We are tenants responsible for what has been entrusted to us.",
    color: GREEN,
  },
  {
    title: "Avoiding Two Errors",
    desc: "Error 1: Domination — treating creation as a resource for unlimited human exploitation. Error 2: Idolization — treating the natural world as sacred in itself (neo-paganism). The biblical view: creation is God's, humans are stewards, care is an act of worship.",
    color: GOLD,
  },
  {
    title: "Eschatological Hope, Not Despair",
    desc: "Romans 8:19-22 shows creation waiting in hope for redemption. The new earth is not the annihilation of this creation but its renewal. This motivates present care: we are tending what will one day be fully redeemed.",
    color: TEAL,
  },
  {
    title: "Justice and Environment",
    desc: "Environmental degradation disproportionately affects the poor. Creation care and economic justice are intertwined — both are expressions of biblical shalom and neighbor-love.",
    color: BLUE,
  },
];

const VIDEOS = [
  { videoId: "2Wxqv_RJFHk", title: "Theology of Creation — The Bible Project" },
  { videoId: "2Lf4bB7wBVA", title: "Genesis 1 and Ancient Cosmology" },
  { videoId: "pOtd5fDtBLk", title: "Creation Care: A Biblical Mandate" },
  { videoId: "T_PoWdvp4Cw", title: "Science and the Christian Faith" },
];

export default function CreationTheologyPage() {
  const [tab, setTab] = useLocalStorage("vine_creation_tab", "overview");
  const [openSci, setOpenSci] = useLocalStorage("vine_creation_sci", "");
  const [journal, setJournal] = useLocalStorage("vine_creation_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌍</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Theology of Creation</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            The world did not make itself. A Christian theology of creation: why God made the world, what it means, what it says about God, and what our responsibility to it is.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>Why Creation Theology Matters</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>What you believe about creation shapes almost everything else: the nature of matter, the goodness of the body, the relationship between faith and science, environmental ethics, the meaning of human work, and the shape of the final hope. Genesis 1 is not merely a disputed science text — it is a declaration of who God is, who we are, and why the world exists.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                { label: "Creator", desc: "God alone is the source of all existence — uncreated, self-sufficient, free", color: GREEN },
                { label: "Creation", desc: "The world exists by God's will, reflects his character, and belongs to him", color: TEAL },
                { label: "Humanity", desc: "Image-bearers called to steward and develop God's world", color: PURPLE },
                { label: "Destiny", desc: "Not escape from creation, but its renewal — new heaven and earth", color: GOLD },
              ].map(c => (
                <div key={c.label} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 10, padding: "1rem", borderTop: `3px solid ${c.color}`, textAlign: "center" }}>
                  <div style={{ fontWeight: 700, color: c.color, marginBottom: "0.5rem" }}>{c.label}</div>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.85rem" }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Scriptures</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CREATION_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EX NIHILO */}
        {tab === "ex-nihilo" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>Creatio Ex Nihilo</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The most foundational claim in Christian doctrine about creation is that God made everything from nothing — not from pre-existing matter, not as an emanation of his own being, but as a free, sovereign act of creative will. This is the Creator-creature distinction at the heart of all orthodox theology.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {EX_NIHILO_POINTS.map(p => (
                <div key={p.title} style={{ background: CARD, border: `1px solid ${p.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <div style={{ fontWeight: 700, color: p.color, marginBottom: "0.4rem" }}>{p.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GOODNESS */}
        {tab === "goodness" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>The Goodness of Creation</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>One of the most countercultural claims of the Christian faith in its ancient context (and still today) is that the material world is genuinely good. This counters every form of Gnosticism, Neoplatonism, and spiritual escapism that treats the physical world as a prison, an illusion, or an obstacle to spiritual reality.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {GOODNESS_POINTS.map(p => (
                <div key={p.heading} style={{ background: CARD, border: `1px solid ${p.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <div style={{ fontWeight: 700, color: p.color, marginBottom: "0.4rem" }}>{p.heading}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MANDATE */}
        {tab === "mandate" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>The Cultural Mandate</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Genesis 1:28 contains humanity&apos;s first assignment: fill, subdue, and rule. This is not merely about population and agriculture — it is the mandate to develop all of creation&apos;s God-given potential. Human culture in all its forms — art, science, government, commerce, scholarship — is the fruit of this mandate worked out across history.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {MANDATE_CONTENT.map(m => (
                <div key={m.title} style={{ background: CARD, border: `1px solid ${m.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${m.color}` }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "baseline", marginBottom: "0.4rem" }}>
                    <div style={{ fontWeight: 700, color: m.color }}>{m.title}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{m.verse}</div>
                  </div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCIENCE */}
        {tab === "science" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: BLUE }}>Faith and Science</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Christians have held a wide range of views on the relationship between Scripture and natural science, particularly on the question of origins. The debate is not between &ldquo;science&rdquo; and &ldquo;faith&rdquo; but between different hermeneutical approaches to Genesis and different evaluations of scientific evidence. All views represented here are held by sincere Christians.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {SCIENCE_VIEWS.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenSci(openSci === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: s.color, textAlign: "left" }}>{s.label}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openSci === String(i) ? "−" : "+"}</span>
                  </button>
                  {openSci === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{s.desc}</div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginTop: "1.5rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>Two Books</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>Francis Bacon coined the phrase &ldquo;two books&rdquo; — God&apos;s Word (Scripture) and God&apos;s Works (nature). Both are revelations from God and cannot ultimately contradict each other. Apparent conflicts require either better interpretation of Scripture or better interpretation of natural evidence — never dismissing either book.</p>
            </div>
          </div>
        )}

        {/* CARE */}
        {tab === "care" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Creation Care</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CARE_POINTS.map(c => (
                <div key={c.title} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${c.color}` }}>
                  <div style={{ fontWeight: 700, color: c.color, marginBottom: "0.4rem" }}>{c.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginTop: "1.5rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>Eschatology Shapes Ethics</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>Some Christians argue: &ldquo;It&apos;s all going to burn anyway&rdquo; (2 Peter 3). But this misreads the passage. The biblical hope is not annihilation but renewal — the same creation renewed, like resurrection of the body. If God is redeeming this creation, it matters how we treat it now. Eschatological hope motivates, rather than undermines, creation care.</p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>Personal Reflection</h2>
              <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>How does creation theology shape how you see the world around you? What does it mean that you are a steward, not an owner, of creation?</p>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="Reflect on creation. What does it mean that God made this world and called it good? How does that change how you see your body, your work, or the natural world?"
                style={{ width: "100%", minHeight: 220, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
