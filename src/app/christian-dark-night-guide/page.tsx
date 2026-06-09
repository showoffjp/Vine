"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const PURPLE = "#6B4FBB", BLUE = "#3B82F6";

type DarkNightTab =
  | "overview" | "johnofcross" | "psalm88" | "motherteresa" | "stages" | "howtowall" | "testimonies" | "journal" | "videos";

const TABS: { id: DarkNightTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "johnofcross", label: "John of the Cross" },
  { id: "psalm88", label: "Psalm 88" },
  { id: "motherteresa", label: "Mother Teresa" },
  { id: "stages", label: "Stages" },
  { id: "howtowall", label: "How to Walk It" },
  { id: "testimonies", label: "The Mystics" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const JOHN_SECTIONS = [
  {
    title: "Who Was John of the Cross?",
    body: "Juan de Yepes Álvarez (1542–1591) was a Spanish Carmelite friar, poet, mystic, and collaborator with Teresa of Ávila in the Discalced Carmelite reform. He was imprisoned by his own order for nine months, held in a six-foot-wide cell, and beaten regularly. Out of that imprisonment came some of the most profound spiritual poetry ever written. He was canonized in 1726 and named a Doctor of the Church in 1926.",
  },
  {
    title: "The Dark Night of the Soul — The Poem",
    body: "The Dark Night is first a poem — eight short stanzas about a soul slipping out of a house in darkness to meet the Beloved. It reads as a love poem. Only in his prose commentaries (The Ascent of Mount Carmel and The Dark Night) does John explain that the darkness is not simply night — it is the necessary purification God works in the soul by withdrawing felt consolation. The darkness is not God's absence; it is his most intimate work.",
  },
  {
    title: "Two Dark Nights",
    body: "John distinguishes between the Night of the Senses and the Night of the Spirit. The Night of the Senses strips away consolations — prayer becomes dry, meditation yields nothing, the emotional rewards of faith vanish. This is relatively common. The Night of the Spirit is rarer and more severe: the person experiences a deep sense of separation from God, a conviction of unworthiness, even the apparent absence of faith itself. This is what John primarily writes about, and what Teresa of Ávila called the 'seventh mansion.'",
  },
  {
    title: "Purpose: Not Punishment but Purification",
    body: "John is insistent: the darkness is not punishment. It is God actively purging the soul of self-love, spiritual greed, pride, and attachment to consolation itself. We love God partly because of how he makes us feel. The dark night strips away that motivation and asks: will you love him for himself alone? The goal is union — the darkness is the method. John's most famous line: 'In order to arrive at having pleasure in everything, desire to have pleasure in nothing.'",
  },
];

const PSALM88_SECTIONS = [
  {
    title: "The One Psalm That Ends in Darkness",
    body: "Every other lament psalm in the Psalter ends with some turn toward trust, praise, or resolution. Psalm 88 does not. It ends: 'You have taken away my companions and loved ones — darkness is my closest friend.' No resolution. No 'but God.' Just darkness. This is not a failure of faith — it is Scripture's permission to bring unresolved suffering to God, to sit with him in the dark without being required to perform hope you don't feel.",
  },
  {
    title: "The Psalmist's Three Accusations",
    body: "Psalm 88 is remarkable for the directness of its address to God. 'You have put me in the lowest pit, in the darkest depths' (v. 6). 'Your wrath lies heavily on me; you have overwhelmed me with all your waves' (v. 7). 'You have taken away my friends and made me repulsive to them' (v. 8). The psalmist does not say 'I feel far from God.' He says 'You did this.' This is not blasphemy — it is covenantal intimacy. Only someone in a relationship speaks this way.",
  },
  {
    title: "Why Heman Keeps Praying",
    body: "Despite the unrelenting darkness, the psalmist prays. He calls out in the morning (v. 13). He keeps presenting his case. He does not leave. The dark night is not the end of faith — it is faith stripped of all its comfort, still clinging to the one who seems absent. The act of crying out to God in the darkness is itself a form of trust. 'I cry to you for help, LORD; in the morning my prayer comes before you.'",
  },
  {
    title: "Jesus and Psalm 88",
    body: "On the cross, Jesus quotes Psalm 22 ('My God, my God, why have you forsaken me?'). But the whole of Psalm 22 ends in triumphant praise. Psalm 88 does not. Some theologians argue that in his dereliction, Jesus lived Psalm 88 — the unresolved dark night, abandoned without resolution, entering the place where darkness is the only companion. If Jesus has been in that place, then anyone in the dark night is not alone.",
  },
];

const TERESA_SECTIONS = [
  {
    title: "Forty-Five Years of Darkness",
    body: "Mother Teresa of Calcutta (1910–1997), now Saint Teresa of Calcutta, experienced a profound mystical intimacy with Christ in the early years of her calling to serve the poor. Then, around 1948, the consolation vanished and did not return for decades. Letters she asked to be burned after her death — published posthumously as Come Be My Light — reveal a darkness of stunning depth. 'I feel that God does not want me, that God is not God, that he does not really exist,' she wrote to her spiritual director. 'The loneliness of the crowd is unbearable.'",
  },
  {
    title: "What She Chose to Do With It",
    body: "Mother Teresa did not broadcast her darkness, did not leave the church, and did not stop working. She continued building homes for the dying, caring for lepers, smiling at the television cameras. Her spiritual director and later her archbishop helped her understand that her darkness was a participation in the spiritual poverty of the people she served — and in the darkness of those who had never known God. She eventually came to see it as a gift, however terrible.",
  },
  {
    title: "The Theological Meaning",
    body: "What theologians have observed in Mother Teresa's darkness is what John of the Cross called mystical union by way of spiritual poverty. She was not experiencing atheism — she was experiencing what the tradition calls the purgative way at its most extreme: the stripping away of every consolation so that pure naked faith remains. Her service became her prayer. Her smile became her liturgy. Her darkness became her offering.",
  },
  {
    title: "What Her Story Means for You",
    body: "Mother Teresa's dark night reassures those who feel abandoned by God in the middle of faithful service: you are not uniquely broken. The most publicly celebrated Christian of the twentieth century felt exactly what you feel. It also reframes spiritual dryness: what feels like God&apos;s departure may be his most intimate work. And it challenges the prosperity-gospel assumption that spiritual health is measured by emotional warmth. Faithfulness, not feeling, is the measure.",
  },
];

const STAGES = [
  {
    label: "1. Consolation",
    icon: "☀️",
    color: PURPLE,
    body: "The beginning of the spiritual life is typically characterized by warmth, enthusiasm, sensible devotion. Prayer is easy. Scripture comes alive. God feels close. This is God's mercy — giving the spiritual infant milk. John calls this spiritual childhood. It is good, but it is not the final destination.",
  },
  {
    label: "2. Night of the Senses",
    icon: "🌤️",
    color: PURPLE,
    body: "Consolations begin to dry up. Prayer feels empty. The spiritual exercises that used to produce feeling now produce nothing. The person fears they have done something wrong, or that God has withdrawn. John says this is normal and necessary: God is weaning the soul from dependence on feeling and teaching it to live by naked faith.",
  },
  {
    label: "3. Second Consolation",
    icon: "⛅",
    color: PURPLE,
    body: "Many experience a second period of consolation after the Night of the Senses, deeper and more quiet than the first. Prayer becomes more contemplative. There is less analysis and more simple presence. This is not the end — it is a resting place before the deeper work.",
  },
  {
    label: "4. Night of the Spirit",
    icon: "🌑",
    color: "#4B5563",
    body: "The deeper and rarer darkness. The soul experiences profound spiritual poverty: the sense that it is distant from God, unworthy, perhaps condemned. Faith itself feels absent. This is the most terrible stage and the most purifying. John compares it to purgatory experienced in this life.",
  },
  {
    label: "5. Union",
    icon: "⭐",
    color: BLUE,
    body: "The destination of the dark night is not darkness but union — what Teresa of Ávila calls the seventh mansion, the spiritual marriage. The soul that has been stripped of self-love and attachment is free to love God purely. This is not a permanent emotional state; it is a deep, stable orientation of the whole person toward God.",
  },
];

const HOW_TO_SECTIONS = [
  {
    title: "Don't Manufacture Feeling",
    body: "The temptation in spiritual dryness is to produce feeling by technique — more emotional worship, more intense prayer, seeking fresh experiences. John of the Cross warns this is counterproductive. It is like a weaned child crying for the breast. The dark night is meant to teach you to live without the emotional accompaniment. Resist the urge to generate warmth through method.",
  },
  {
    title: "Stay in the Practices",
    body: "Do not abandon prayer, Scripture, the sacraments, the gathered community. Not because these will produce feeling — they may not — but because faithfulness in the dark is itself the gift. Show up. Read the words even when they feel flat. Take the bread and cup even when you feel nothing. God is present in the faithfulness, not only in the feeling.",
  },
  {
    title: "Find a Spiritual Director",
    body: "The dark night is almost impossible to navigate alone. John of the Cross emphasizes this strongly: without a guide, the person in the dark night will likely misinterpret what is happening — fearing they have sinned, seeking the wrong kind of help, or abandoning the journey entirely. A wise spiritual director who knows the tradition of Christian mysticism can say: 'I recognize where you are. This is not the end.'",
  },
  {
    title: "Bring the Darkness to God",
    body: "Psalm 88 models this: bring the darkness itself into your prayer. Don't pretend. Don't perform. Say to God: I feel nothing. I don't know where you are. I am bringing you my emptiness. This is not faithlessness — it is the most honest form of prayer. The dark night is not the time for polished liturgy; it is the time for raw, wordless presence.",
  },
  {
    title: "Wait — It Has a Purpose",
    body: "The dark night does not last forever, though it can last years. John's frame is hopeful even in its severity: God is doing something. The goal is union, purity, freedom from self-love. You cannot see the purpose from inside the darkness, but the tradition is full of witnesses who came through and reported: what was taken was worth losing. 'Though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.'",
  },
];

const MYSTICS = [
  { name: "Thomas Merton", period: "20th century Trappist monk", quote: "The contemplative life is not to be understood as merely a life of inner stillness, but a life of active love for God and neighbor, rooted in a silence that does not flee from the world but sees it more clearly." },
  { name: "Julian of Norwich", period: "14th century English anchoress", quote: "All shall be well, and all shall be well, and all manner of thing shall be well." },
  { name: "Therese of Lisieux", period: "19th century Carmelite mystic", quote: "I am going through a period of darkness in which I can feel neither faith nor love. But I know that Jesus is there with me, that he is the light itself, even though he does not make himself felt." },
  { name: "C.S. Lewis", period: "20th century Anglican lay theologian", quote: "Meanwhile, where is God? When you are happy, so happy that you have no sense of needing Him — go to Him with that thankfulness. But go when you need Him. You will find — I, at least, found — that there is nothing there. A locked door. Not silence. Absence. A shuttered sky." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

export default function ChristianDarkNightGuide() {
  const [tab, setTab] = usePersistedState<DarkNightTab>("vine_darknight_tab", "overview");
  const [openJ, setOpenJ] = useState<string | null>(null);
  const [openP, setOpenP] = useState<string | null>(null);
  const [openT, setOpenT] = useState<string | null>(null);
  const [openH, setOpenH] = useState<string | null>(null);

  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vine_darknight_journal");
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
    localStorage.setItem("vine_darknight_journal", JSON.stringify(next));
    setVerse(""); setReflection(""); setPrayer("");
  };

  const deleteEntry = (id: string) => {
    const next = entries.filter((e) => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_darknight_journal", JSON.stringify(next));
  };

  const inputStyle = { background: "#0D0D1A", border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "10px 14px", width: "100%", fontSize: 15, outline: "none" };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌑</div>
          <h1 style={{ fontSize: 36, fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
            The Dark Night of the Soul
          </h1>
          <p style={{ color: MUTED, marginTop: 10, fontSize: 17, maxWidth: 640, marginInline: "auto" }}>
            When God feels absent. John of the Cross, Psalm 88, Mother Teresa&apos;s decades of silence, and how to walk faithfully when the light is gone.
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
                background: tab === t.id ? PURPLE : CARD,
                color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? PURPLE : BORDER}`,
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
              <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 0, color: PURPLE }}>When the Light Goes Out</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                You prayed and nothing happened. You opened your Bible and the words felt like paper. You went to church and felt nothing but distance. You wonder if you ever really believed, or if God was real, or if something is fundamentally wrong with you.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                The Christian tradition has a name for this experience: <strong style={{ color: TEXT }}>the dark night of the soul.</strong> And it has a surprising message: this is not the end of faith. In the hands of the God who is always working, it may be its deepest form.
              </p>
            </div>
            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: PURPLE, fontWeight: 700, marginBottom: 8 }}>John of the Cross, The Dark Night</div>
              <div style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, fontSize: 16 }}>
                &quot;O guiding night! O night more lovely than the dawn! O night that has united the Lover with his beloved, transforming the beloved in her Lover.&quot;
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: "What It Is", val: "A period of spiritual dryness and felt absence of God — part of the soul&apos;s purification toward union" },
                { label: "What It Is NOT", val: "Proof that God has abandoned you, evidence of sin, or the end of your faith journey" },
                { label: "Who Experiences It", val: "Saints and mystics throughout history — Augustine, Therese, Teresa of Ávila, Mother Teresa, C.S. Lewis after Joy&apos;s death" },
                { label: "The Purpose", val: "The stripping away of self-love and dependence on consolation, leaving only naked faith oriented toward God alone" },
              ].map((s) => (
                <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{s.label}</div>
                  <div style={{ color: MUTED, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: s.val }} />
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginTop: 0 }}>A Word to the Person Who Is Here Now</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                If you are reading this because you are in the dark, this page is for you. The mystics in this tradition were not naive about the pain. They described it in the most honest terms. But they also mapped the territory from the other side — they came through. Their testimony is not &quot;it wasn&apos;t that bad.&quot; It is &quot;God was there, even there, doing something even in the silence.&quot;
              </p>
            </div>
          </div>
        )}

        {/* JOHN OF THE CROSS */}
        {tab === "johnofcross" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: PURPLE, fontWeight: 700, marginTop: 0 }}>Doctor of the Dark Night</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                No Christian writer has mapped the dark night with more precision, honesty, or ultimate hope than John of the Cross. His experience — prison, violence, abandonment by his own community — gave him authority to speak about what God can do in the worst darkness.
              </p>
            </div>
            {JOHN_SECTIONS.map((s) => (
              <div key={s.title} style={{ background: CARD, border: `1px solid ${openJ === s.title ? PURPLE : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenJ(openJ === s.title ? null : s.title)}
                  style={{ width: "100%", background: "none", border: "none", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}
                >
                  <div style={{ fontWeight: 700, fontSize: 16, textAlign: "left" }}>{s.title}</div>
                  <span style={{ color: MUTED, fontSize: 20 }}>{openJ === s.title ? "−" : "+"}</span>
                </button>
                {openJ === s.title && (
                  <div style={{ padding: "0 22px 20px", color: MUTED, lineHeight: 1.8 }}>{s.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* PSALM 88 */}
        {tab === "psalm88" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: PURPLE, fontWeight: 700, marginTop: 0 }}>The Psalm That Stays Dark</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                The Psalter gives the church words for every human experience. Psalm 88 gives words for the darkest: faith with no felt light, prayer with no apparent answer, relationship with God that consists entirely of crying into the dark.
              </p>
            </div>
            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: PURPLE, fontWeight: 700, marginBottom: 8 }}>Psalm 88:13–18 (NIV)</div>
              <div style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.9, fontSize: 15 }}>
                But I cry to you for help, LORD; in the morning my prayer comes before you. Why, LORD, do you reject me and hide your face from me? From my youth I have suffered and been close to death; I have borne your terrors and am in despair. Your wrath has swept over me; your terrors have destroyed me. All day long they surround me like a flood; they have completely engulfed me. You have taken from me friend and neighbor — darkness is my closest friend.
              </div>
            </div>
            {PSALM88_SECTIONS.map((s) => (
              <div key={s.title} style={{ background: CARD, border: `1px solid ${openP === s.title ? PURPLE : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenP(openP === s.title ? null : s.title)}
                  style={{ width: "100%", background: "none", border: "none", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}
                >
                  <div style={{ fontWeight: 700, fontSize: 16, textAlign: "left" }}>{s.title}</div>
                  <span style={{ color: MUTED, fontSize: 20 }}>{openP === s.title ? "−" : "+"}</span>
                </button>
                {openP === s.title && (
                  <div style={{ padding: "0 22px 20px", color: MUTED, lineHeight: 1.8 }}>{s.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* MOTHER TERESA */}
        {tab === "motherteresa" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: PURPLE, fontWeight: 700, marginTop: 0 }}>The Saint in the Dark</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                Mother Teresa spent the last forty-five years of her life serving the poorest of the poor — and experiencing a darkness of soul so profound that she doubted the existence of God. Her story is one of the most startling in modern Christian history.
              </p>
            </div>
            {TERESA_SECTIONS.map((s) => (
              <div key={s.title} style={{ background: CARD, border: `1px solid ${openT === s.title ? PURPLE : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenT(openT === s.title ? null : s.title)}
                  style={{ width: "100%", background: "none", border: "none", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}
                >
                  <div style={{ fontWeight: 700, fontSize: 16, textAlign: "left" }}>{s.title}</div>
                  <span style={{ color: MUTED, fontSize: 20 }}>{openT === s.title ? "−" : "+"}</span>
                </button>
                {openT === s.title && (
                  <div style={{ padding: "0 22px 20px", color: MUTED, lineHeight: 1.8 }}>{s.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* STAGES */}
        {tab === "stages" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: PURPLE, fontWeight: 700, marginTop: 0 }}>The Journey of Purification</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                John of the Cross and Teresa of Ávila describe the spiritual life not as a single movement from doubt to faith, but as a series of descents and ascents — each night deeper than the last, each dawn more fully oriented toward God.
              </p>
            </div>
            {STAGES.map((s) => (
              <div key={s.label} style={{ background: CARD, border: `1px solid ${s.color}`, borderRadius: 14, padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{s.icon}</span>
                  <div style={{ fontWeight: 700, fontSize: 17, color: s.color }}>{s.label}</div>
                </div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{s.body}</div>
              </div>
            ))}
          </div>
        )}

        {/* HOW TO WALK IT */}
        {tab === "howtowall" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: PURPLE, fontWeight: 700, marginTop: 0 }}>Practical Guidance for the Dark Night</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                The tradition is not merely descriptive — the great spiritual directors gave practical counsel to those in their care. These principles have guided people through the darkness for centuries.
              </p>
            </div>
            {HOW_TO_SECTIONS.map((s) => (
              <div key={s.title} style={{ background: CARD, border: `1px solid ${openH === s.title ? PURPLE : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenH(openH === s.title ? null : s.title)}
                  style={{ width: "100%", background: "none", border: "none", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}
                >
                  <div style={{ fontWeight: 700, fontSize: 16, textAlign: "left" }}>{s.title}</div>
                  <span style={{ color: MUTED, fontSize: 20 }}>{openH === s.title ? "−" : "+"}</span>
                </button>
                {openH === s.title && (
                  <div style={{ padding: "0 22px 20px", color: MUTED, lineHeight: 1.8 }}>{s.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* MYSTICS */}
        {tab === "testimonies" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, marginBottom: 8 }}>
              <h2 style={{ color: PURPLE, fontWeight: 700, marginTop: 0 }}>Voices From the Other Side</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                The history of Christian mysticism is full of people who walked through the dark night and came out to describe it. Their testimony is not that the darkness was easy — it is that God was in it.
              </p>
            </div>
            {MYSTICS.map((m) => (
              <div key={m.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 17, marginBottom: 4 }}>{m.name}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{m.period}</div>
                <div style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, fontSize: 16 }}>&quot;{m.quote}&quot;</div>
              </div>
            ))}
            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: PURPLE, fontWeight: 700, marginBottom: 8 }}>A Note on Mental Health</div>
              <div style={{ color: MUTED, lineHeight: 1.8 }}>
                The dark night of the soul is a spiritual experience, not a psychiatric diagnosis. Depression, anxiety, and other mental health conditions can overlap with spiritual dryness — and they are real and require real care. If you are experiencing hopelessness, inability to function, or thoughts of self-harm, please seek professional help. A wise spiritual director will also refer you to a therapist when needed. Faith and mental health care are not in conflict.
              </div>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "grid", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <h2 style={{ color: PURPLE, fontWeight: 700, marginTop: 0 }}>Journal of the Dark Night</h2>
              <p style={{ color: MUTED, marginBottom: 20 }}>
                Writing in the darkness has been a practice of the mystics. Bring whatever is true — the emptiness, the doubt, the prayer that feels like nothing.
              </p>
              <div style={{ display: "grid", gap: 12 }}>
                <input value={verse} onChange={(e) => setVerse(e.target.value)} placeholder="Verse, passage, or theme..." style={inputStyle} />
                <textarea value={reflection} onChange={(e) => setReflection(e.target.value)} placeholder="What is true for you right now..." rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} placeholder="Any prayer, however small..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                <button onClick={saveEntry} style={{ background: PURPLE, border: "none", borderRadius: 10, padding: "12px 24px", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ color: PURPLE, fontWeight: 700 }}>{e.verse || "Entry"}</span>
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
              <h2 style={{ color: PURPLE, fontWeight: 700, marginTop: 0 }}>Video Teaching</h2>
              <p style={{ color: MUTED }}>Guided teaching on the dark night, spiritual dryness, and walking through desolation.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 20 }}>
              <div>
                <VideoEmbed videoId="o4yq2VHlFRM" title="The Dark Night of the Soul — What Is It?" />
                <p style={{ color: MUTED, fontSize: 14, marginTop: 8 }}>Understanding John of the Cross and spiritual desolation</p>
              </div>
              <div>
                <VideoEmbed videoId="HQ-0BKvdLbs" title="When God Feels Absent — Psalm 88" />
                <p style={{ color: MUTED, fontSize: 14, marginTop: 8 }}>Walking through the one psalm that ends in darkness</p>
              </div>
              <div>
                <VideoEmbed videoId="HvCq6k7CRDM" title="Mother Teresa&apos;s Dark Night — Come Be My Light" />
                <p style={{ color: MUTED, fontSize: 14, marginTop: 8 }}>The hidden decades of spiritual darkness in a celebrated saint</p>
              </div>
              <div>
                <VideoEmbed videoId="wFCUPMCiAzE" title="A Grief Observed — C.S. Lewis in the Dark" />
                <p style={{ color: MUTED, fontSize: 14, marginTop: 8 }}>How Lewis&apos;s journal after Joy&apos;s death maps the experience</p>
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
