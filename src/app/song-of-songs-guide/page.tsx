"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "poetrytype", label: "The Poetry" },
  { id: "voices", label: "Three Voices" },
  { id: "passages", label: "Key Passages" },
  { id: "theology", label: "Theology of Love" },
  { id: "themes", label: "Key Themes" },
  { id: "howtoread", label: "How to Read" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const VOICES = [
  {
    title: "The Beloved (Woman)",
    color: RED,
    ref: "Shulamite",
    desc: "The female voice speaks first and most frequently in the Song — an uncommon honor in ancient literature. She describes herself as 'dark and lovely' (1:5), a shepherd girl whose brothers made her work in the vineyards. Her voice is bold, initiating, desirous, and spiritually perceptive. She is not passive. She seeks her beloved actively (3:1-4), praises him lavishly (5:10-16), and articulates the Song's greatest theological statement: 'I am my beloved's and my beloved is mine' (6:3). She embodies faithful, whole-hearted love.",
    passages: ["1:2–4", "2:1–3", "3:1–4", "5:10–16", "8:6–7"],
  },
  {
    title: "The Lover (Man)",
    color: BLUE,
    ref: "Her Beloved",
    desc: "The male voice responds to his beloved with some of the most gorgeous love poetry in world literature. His extended descriptions of her beauty — the 'wasf' poems at 4:1–7 and 7:1–9 — compare her to landscapes, towers, and celestial objects. These comparisons are not bizarre to ancient ears; they speak of grandeur, completeness, and unique beauty. He invites her: 'Arise, my love, my beautiful one, and come away' (2:10). He is utterly captivated and makes no attempt to hide it.",
    passages: ["2:10–13", "4:1–7", "4:9–11", "7:1–9"],
  },
  {
    title: "The Daughters of Jerusalem",
    color: PURPLE,
    ref: "Chorus",
    desc: "A chorus of women who serve as audience, commentators, and foils to the Beloved. They ask her questions ('What is your beloved more than another beloved?' — 5:9), witness her searching and her joy, and receive her praise of her lover. They represent the broader community who bears witness to love's drama. In allegorical readings, they represent the congregation listening to the soul's conversation with God. Their presence reminds us that love is never purely private — it is witnessed, celebrated, and affirmed by the community.",
    passages: ["1:4", "3:5", "5:8–9", "6:1"],
  },
];

const PASSAGES = [
  {
    ref: "Song 1:2–4",
    title: "The Opening Longing",
    color: RED,
    text: "\"Let him kiss me with the kisses of his mouth! For your love is better than wine...\" — The Song opens with unashamed desire. The Beloved does not introduce herself, explain her circumstances, or justify her longing. She simply speaks it. This is characteristic of Hebrew lyric poetry: immediacy of feeling, no apology. The comparison of love to wine — a symbol of abundance, joy, and celebration throughout the OT — establishes love as one of creation's great goods.",
  },
  {
    ref: "Song 2:10–13",
    title: "Arise, Come Away",
    color: GREEN,
    text: "\"My beloved speaks and says to me: 'Arise, my love, my beautiful one, and come away, for behold, the winter is past; the rain is over and gone. The flowers appear on the earth, the time of singing has come...'\" — This passage is among the most beloved in all Scripture. The lover's invitation is set against the backdrop of spring's arrival — a cosmic renewal that mirrors the renewal of love. Christian readers have heard here the voice of Christ calling the soul out of winter into resurrection life. The language of creation awakening mirrors the awakening of love.",
  },
  {
    ref: "Song 4:1–7",
    title: "The Wasf of Beauty",
    color: GOLD,
    text: "\"Behold, you are beautiful, my love... Your eyes are doves behind your veil. Your hair is like a flock of goats leaping down the slopes of Gilead...\" — A 'wasf' (Arabic: description) is a head-to-toe praise poem. The comparisons seem strange to modern ears but in their ancient context evoke specific qualities: the goats leaping = abundant, flowing, graceful hair; teeth like shorn ewes = white, even, unblemished; neck like the tower of David = noble, strong, adorned. The lover sees her through the eyes of wonder, finding her exquisite in every detail.",
  },
  {
    ref: "Song 8:6–7",
    title: "Love Strong as Death",
    color: TEAL,
    text: "\"Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death, jealousy fierce as the grave. Its flashes are flashes of fire, the very flame of the LORD. Many waters cannot quench love, neither can floods drown it...\" — This is the theological climax of the Song. Love (ahavah) is here compared to the two most absolute forces in the human experience: death and the grave (sheol). Love does not yield to death's power; it rivals it. The phrase 'flame of the LORD' (shalhevetyah) contains the divine name — a hint that this human love participates in something divine.",
  },
];

const THEOLOGY = [
  { color: GOLD, title: "The Goodness of Human Sexuality", text: "The Song of Songs is the Bible's most direct affirmation that erotic love between a man and a woman is good, beautiful, and worth celebrating. The absence of shame is striking. In the Garden, before the Fall, the man and woman were 'naked and not ashamed' (Gen 2:25). The Song recaptures that Edenic reality — it is set in gardens, springtime, and natural abundance. Song does not treat sexuality as a problem to be managed but as a gift to be enjoyed within the covenant of committed love." },
  { color: BLUE, title: "The Allegorical Tradition: God and Israel / Christ and the Church", text: "Jewish tradition (Rabbi Akiva called it 'the holiest of all writings') read the Song as an allegory of YHWH's love for Israel. The early church, following Origen's massive commentary, read it as Christ's love for the Church — or for the individual soul. In this reading, 'Arise, come away' (2:10) is Christ calling his bride; the seeking and finding in chapter 3 is the soul's mystical search for God. Both the literal and allegorical readings have been held simultaneously throughout church history — not as competing interpretations but as layered meaning." },
  { color: TEAL, title: "Mutuality and Equality", text: "The Song portrays a remarkably egalitarian vision of love. The woman speaks first, speaks most, and speaks boldly. The refrain 'I am my beloved's and he is mine' (6:3) is perfectly mutual. Neither partner dominates. The woman is not passive; she seeks, desires, invites, and praises. This stands in contrast to the post-Fall dynamic of Genesis 3:16 ('your desire will be for your husband, and he will rule over you'). The Song envisions a redeemed, pre-Fall mutuality — the restoration of what sin distorted." },
  { color: PURPLE, title: "Love as Covenant Commitment", text: "The word translated 'love' in 8:6 is 'ahavah' — the same word used for God's covenantal love in Deuteronomy. The 'seal' imagery (8:6) was a mark of ownership and identity — being sealed upon the heart means being the exclusive possession of the beloved. The Song does not celebrate a casual liaison but a committed, exclusive, intense love that mirrors the covenant. This is why the Song belongs in the canon: it narrates, in the most intimate human register, what covenant faithfulness looks like as lived experience." },
];

const HOW_TO_READ = [
  { title: "Honor the Poetry as Poetry", color: GOLD, desc: "The first principle of reading Song of Songs is to respect the genre. This is lyric love poetry — arguably the finest example in the ancient world. It operates by images, not arguments. It communicates through the senses, not propositions. You cannot paraphrase a poem without losing it. Read it aloud. Let the images sit. Don't immediately ask 'what does this mean?' — ask 'what does this feel like, and what is that feeling pointing toward?'" },
  { title: "Literal and Allegorical Are Not Enemies", color: PURPLE, desc: "The great debate over Song of Songs — is it literal or allegorical? — is a false dilemma. The literal reading (a celebration of human, erotic, covenant love) is real and primary. The allegorical reading (God and Israel, Christ and the Church) is a valid second layer that flows from the first. Human love genuinely mirrors and participates in divine love. To read it only literally is to miss its theological depth. To read it only allegorically is to evacuate its earthy, embodied, sensory power. Both are needed." },
  { title: "The Song in Its Biblical Context", color: BLUE, desc: "The Song belongs to the wisdom literature tradition alongside Proverbs, Ecclesiastes, and Job. Like Proverbs' instruction on friendship and Ecclesiastes' reflections on life's meaning, the Song addresses a universal human experience — love and desire — through the lens of Israel's wisdom tradition. Its placement in the canon is a theological statement: love, desire, and sexuality are not outside the scope of God's wisdom. They are part of what it means to be human, made in the image of the God who is love." },
  { title: "Reading the Seeking Passages", color: GREEN, desc: "Several passages in the Song feature the Beloved searching for her lover and not finding him (3:1–4, 5:6–8). These 'absence' passages have generated profound mystical commentary. John of the Cross's 'Dark Night of the Soul' draws heavily on them. The experience of seeking the Beloved and not immediately finding him is the experience of desire itself — incomplete, painful, beautifully restless. In the spiritual tradition, this mirrors the soul's experience of longing for God, the 'holy dissatisfaction' that only God himself can satisfy." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type SongTab = "overview" | "poetrytype" | "voices" | "passages" | "theology" | "themes" | "howtoread" | "journal" | "videos";

export default function SongOfSongsGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<SongTab>("vine_song_tab", "overview");
  const [openVoice, setOpenVoice] = useState<string | null>(null);
  const [openPassage, setOpenPassage] = useState<string | null>(null);
  const [openHow, setOpenHow] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_song_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_song_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveJEntry = useCallback(() => {
    if (!jForm.verse.trim() && !jForm.reflection.trim()) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jForm.verse, reflection: jForm.reflection, prayer: jForm.prayer };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2500);
  }, [jForm]);

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12 };
  const accent = GOLD;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>

        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, rgba(217,119,6,0.15) 0%, rgba(107,79,187,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🌹</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>
              The Song of Songs
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 600, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              The most intimate book in Scripture — a celebration of covenant love, desire, and the beauty of being fully known and fully chosen.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "8 Chapters", color: GOLD }, { label: "Wisdom Literature", color: PURPLE }, { label: "Love Poetry", color: RED }, { label: "Allegorical Depth", color: BLUE }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }}>{b.label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as SongTab)}
                style={{ padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? accent : MUTED, borderBottom: `2px solid ${activeTab === t.id ? accent : "transparent"}`, background: "none", border: "none", borderBottomWidth: 2, borderBottomStyle: "solid", cursor: "pointer", whiteSpace: "nowrap", transition: "color 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "1rem" }}>The Most Surprising Book in the Bible</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
                  The Song of Songs (also called the Song of Solomon or Canticles) is the most unusual book in the Hebrew Bible. There is no mention of God, no law, no historical narrative, no prophecy. What there is — breathtaking, unashamed love poetry celebrating the beauty of human desire.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
                  Its very presence in the canon is a theological statement: human love is holy ground. The body is not an embarrassment. Desire is not inherently corrupt. The longing of two people for one another is, in some mysterious way, a reflection of the divine love that calls all things into being.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>
                  Rabbi Akiva famously declared: "All the writings are holy, but the Song of Songs is the Holy of Holies." The earliest Christian interpreters — Origen, Gregory of Nyssa, Bernard of Clairvaux — wrote the most extensive commentaries on this single book, finding in it the deepest expression of the soul's union with Christ.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                {[
                  { icon: "📜", title: "Author & Date", text: "Traditionally attributed to Solomon (given the title 'Song of Songs, which is Solomon's' — 1:1), though many scholars view him as a character within the poem rather than its author. Likely compiled in its final form between 950–450 BC." },
                  { icon: "🌿", title: "Setting & Nature", text: "The poem is saturated with natural imagery: gardens, vineyards, lilies, pomegranates, foxes, goats, spices, mountains, springs. The Beloved and Lover are consistently placed in outdoor, pastoral settings. Creation itself becomes the stage for covenant love." },
                  { icon: "📖", title: "Structure", text: "The Song has no clear narrative plot — it is a cycle of poems, dialogues, and monologues. Scholars debate whether it is one unified poem or a collection of distinct love poems bound by recurring imagery and characters. The three main voices provide structure: Beloved, Lover, and Chorus (Daughters of Jerusalem)." },
                  { icon: "✝️", title: "Canonical Significance", text: "The Song was one of the last books accepted into the Jewish canon. Debates continued until Rabbi Akiva's defense settled the matter. In Christian tradition it became a foundational text for mystical theology — the language of the soul's longing for union with God." },
                ].map(item => (
                  <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                    <h3 style={{ color: accent, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* POETRY TYPE */}
          {activeTab === "poetrytype" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "1rem" }}>Understanding Hebrew Love Poetry</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
                  The Song of Songs belongs to a well-attested genre of ancient Near Eastern love poetry. Egyptian love poems from the 13th–12th centuries BC use remarkably similar imagery and conventions — the beloved compared to a garden, desire expressed as physical longing, nature imagery woven throughout. Understanding these conventions transforms the Song from bewildering to beautiful.
                </p>
              </div>
              {[
                { title: "The Wasf — Description Poems", color: GOLD, ref: "4:1–7 and 7:1–9", desc: "The Arabic term 'wasf' (description) names a specific type of love poem: a head-to-toe (or toe-to-head) inventory of the beloved's physical beauty. The Song contains two wasfs — the Lover's praise of the Beloved (4:1–7) and the Daughters of Jerusalem's praise of the Beloved (7:1–9). The comparisons sound strange to modern ears: hair like goats, teeth like ewes, neck like a tower. In their original context, each comparison evokes a quality — abundant grace, whiteness, nobility and adornment — through vivid sensory images from the natural world familiar to ancient Israelites." },
                { title: "The Seek-and-Find Poems", color: PURPLE, desc: "Two passages (3:1–4 and 5:2–6:3) follow a 'search and find' pattern. The Beloved seeks her lover at night, searches the city, and either finds him (3:4) or finds his absence (5:6). These poems draw on the emotional reality of longing — the ache of absence, the desperate search, the joy of reunion. Christian mystics read these passages as the soul's experience of seeking God through the 'dark night' — and the joy of finding the divine presence after seasons of apparent withdrawal.", ref: "3:1–4 and 5:2–8" },
                { title: "The Praise Songs and Boasts", color: TEAL, desc: "The Song contains several passages where the Beloved or Lover boasts about the other to an audience. 'My beloved is radiant and ruddy, distinguished among ten thousand' (5:10). These boast-poems are not mere flattery — they are public declarations of exclusive devotion. In a culture where love was enacted through public honor, to boast of your beloved before witnesses was to commit yourself fully and irreversibly to them. The boast is a form of covenant pledge.", ref: "5:10–16 and 6:4–10" },
                { title: "The Refrain of Mutual Belonging", color: RED, desc: "Three times the Song articulates a formula of mutual possession: 'My beloved is mine, and I am his' (2:16); 'I am my beloved's and my beloved is mine' (6:3); 'I am my beloved's, and his desire is for me' (7:10). Each use is slightly different, with the order of ownership shifting between them — subtly suggesting the dynamics of love deepening over time. These refrains are the theological heartbeat of the Song: love as mutual, exclusive, covenant-shaped belonging.", ref: "2:16; 6:3; 7:10" },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <h3 style={{ color: item.color, fontWeight: 700 }}>{item.title}</h3>
                    <span style={{ color: MUTED, fontSize: "0.78rem" }}>{item.ref}</span>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* VOICES */}
          {activeTab === "voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Three Voices in the Song</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>The Song is a dramatic dialogue between three voices. Ancient Hebrew manuscripts use gender markers to identify them, though English translations often obscure this. Understanding who is speaking transforms the experience of reading.</p>
              </div>
              {VOICES.map(v => (
                <div key={v.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenVoice(openVoice === v.title ? null : v.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: v.color, fontWeight: 700, fontSize: "1rem" }}>{v.title}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.ref}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openVoice === v.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openVoice === v.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>{v.desc}</p>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        <span style={{ color: MUTED, fontSize: "0.78rem", marginRight: "0.5rem" }}>Key passages:</span>
                        {v.passages.map(p => (
                          <span key={p} style={{ background: `${v.color}22`, color: v.color, border: `1px solid ${v.color}44`, borderRadius: 20, padding: "0.2rem 0.7rem", fontSize: "0.78rem" }}>{p}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* PASSAGES */}
          {activeTab === "passages" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Four Passages That Define the Song</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>From the opening longing to the climactic declaration that love is stronger than death — these four passages carry the theological and poetic weight of the whole book.</p>
              </div>
              {PASSAGES.map(p => (
                <div key={p.ref} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenPassage(openPassage === p.ref ? null : p.ref)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: p.color, fontWeight: 700, fontSize: "1rem" }}>{p.title}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{p.ref}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openPassage === p.ref ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openPassage === p.ref && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{p.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* THEOLOGY */}
          {activeTab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>The Theology of Human Love</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Song of Songs is not primarily a manual for marriage or a code for mystical prayer. It is a theological statement about who human beings are, what love is, and what the created world is for.</p>
              </div>
              {THEOLOGY.map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* THEMES */}
          {activeTab === "themes" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {[
                { color: RED, icon: "🌹", title: "Desire Without Shame", text: "The Song celebrates desire as God-given and good. The Beloved's longing for her lover and his for her are described without apology or qualification. This stands in deliberate contrast to the shame introduced by the Fall. The Song portrays a Garden-of-Eden quality of erotic love — open, unashamed, holy." },
                { color: GOLD, icon: "🌿", title: "Creation as Love Language", text: "The natural world saturates the Song — gardens, seasons, animals, mountains, spices. Nature is not backdrop; it is the vocabulary of love. The springtime arrival (2:11–12) mirrors the arrival of love. The garden in chapter 4–5 becomes a metaphor for the Beloved herself. Creation speaks the language of desire." },
                { color: BLUE, icon: "🔒", title: "Exclusive Devotion", text: "The 'I am my beloved's and he is mine' refrain establishes love as radically exclusive. The Song is not about attraction in general — it is about one specific person, irreplaceable and uniquely beloved. 'There are sixty queens and eighty concubines... but my dove, my perfect one, is only one' (6:8–9). Exclusivity is not possessiveness — it is the logic of covenant love." },
                { color: TEAL, icon: "🔥", title: "Love Stronger Than Death", text: "The Song's climax (8:6–7) reaches beyond romance into ontology: love is stronger than death, fiercer than the grave, unquenchable by flood. This is not hyperbole — it is theology. For the Christian reader, this is ultimately realized in the resurrection: the love that called creation into being has the last word over death itself." },
                { color: PURPLE, icon: "🌸", title: "The Vulnerable Seeking", text: "The Beloved's nighttime searches (3:1–4; 5:6–8) introduce the theme of love's vulnerability. True love involves the risk of not finding, of being absent from the one you need. These passages have generated profound spiritual commentary on the soul's dark night — the experience of longing for God without feeling his presence." },
                { color: GREEN, icon: "🍷", title: "Love and Abundance", text: "The Song is drenched in abundance: wine, honey, spices, fruit, gardens in full bloom. Love is consistently compared to the finest goods — wine better than other wine (1:2), spices that awaken desire (4:10–11). This abundance imagery connects love to the covenant blessings of Deuteronomy and the New Creation of Revelation — a world made right, overflowing with goodness." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* HOW TO READ */}
          {activeTab === "howtoread" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>How to Read the Song of Songs</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Four principles for approaching this extraordinary book — honoring its genre, its theology, and its place in the canon.</p>
              </div>
              {HOW_TO_READ.map(item => (
                <div key={item.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenHow(openHow === item.title ? null : item.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: item.color, fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openHow === item.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openHow === item.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8 }}>{item.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* JOURNAL */}
          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "1.5rem" }}>Song of Songs Journal</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>VERSE OR PASSAGE</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Song 8:6–7" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>REFLECTION</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What did this passage stir in you — about love, desire, God's love for you?" rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>PRAYER RESPONSE</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="A prayer of gratitude for love — human or divine..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <button onClick={saveJEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem", alignSelf: "flex-start" }}>
                    {jSaved ? "✓ Saved" : "Save Entry"}
                  </button>
                </div>
              </div>
              {jEntries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {jEntries.map(entry => (
                    <div key={entry.id} style={{ ...card, padding: "1.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ color: accent, fontWeight: 600, fontSize: "0.9rem" }}>{entry.verse || "Reflection"}</span>
                        <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                      </div>
                      {entry.reflection && <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>{entry.reflection}</p>}
                      {entry.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, fontStyle: "italic" }}>🙏 {entry.prayer}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* VIDEOS */}
          {activeTab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Song of Songs — Video Library</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Curated teachings on the Song of Songs — its poetry, theology, and devotional depth.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "8pStdMFJdKo", title: "Song of Songs Overview", channel: "BibleProject" },
                  { id: "7UiDhMlSpeE", title: "Song of Solomon — Full Overview", channel: "The Bible Explained" },
                  { id: "3wQMVqrJfEI", title: "The Theology of Human Sexuality", channel: "Tim Mackie" },
                ].map(v => (
                  <div key={v.id} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem" }}>{v.title}</p>
                      <p style={{ color: MUTED, fontSize: "0.8rem" }}>{v.channel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
}
