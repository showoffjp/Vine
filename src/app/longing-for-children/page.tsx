"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Hannah's Anguish Is Sacred Scripture",
    verse: "1 Samuel 1:10",
    text: "Hannah wept bitterly before the LORD — not quietly, not with composed faith, but with heaving grief that made Eli think she was drunk. God did not rebuke her anguish. He received it. Your longing for a child is not a lack of faith; it is a form of prayer that Scripture treats as holy.",
  },
  {
    title: "The Closed Womb Is Not Abandonment",
    verse: "Isaiah 49:15–16",
    text: "God asks: can a mother forget the baby at her breast? Even if she could, God says he cannot forget you — your name is engraved on his palms. The silence of an empty womb is not evidence that God has forgotten your desire. You are inscribed.",
  },
  {
    title: "Barrenness and Blessing Are Not Opposites",
    verse: "Isaiah 54:1",
    text: "Sing, barren woman! Scripture repeatedly subverts the assumption that fruitfulness equals children. Sarah, Rebekah, Rachel, Elizabeth, Hannah — all endured seasons of barrenness that preceded something extraordinary. God's purposes move through unexpected wombs, including ones that wait, ones that grieve, and ones that adopt.",
  },
  {
    title: "Christ Understands Unfulfilled Longing",
    verse: "Hebrews 4:15",
    text: "Jesus never married, never had biological children, and died without the family structure his culture demanded. He understands what it is to give up what was most desired. His priesthood is sufficient for your grief precisely because he is not remote from it.",
  },
  {
    title: "Lament Is Not the Opposite of Trust",
    verse: "Psalm 22:1–2",
    text: "My God, my God, why have you forsaken me? Jesus quoted this on the cross. Lament is not faithlessness — it is addressing God in the rawness of un-met longing. You can cry out, rage, question, and grieve and still be deeply held in the hands that formed you.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Sheryl Paul",
    role: "Therapist specializing in fertility grief",
    quote: "Grief over infertility is disenfranchised grief — society doesn't know how to hold it. But the longing for a child is one of the deepest human desires, and its disappointment deserves full mourning.",
    bio: "Sheryl Paul (The Wisdom of Anxiety) writes about invisible losses including fertility grief. Her framework normalizes the depth of longing and the right to grieve what has not come to be.",
  },
  {
    id: "v2",
    name: "Beth Forbus",
    role: "Author, infertility grief advocate",
    quote: "People mean well when they say 'just relax' or 'just adopt.' What hurts is that no one says: I see that you wanted to be pregnant. I see the baby you imagined. I'm sorry that's not happening.",
    bio: "Beth Forbus (Waiting for Your Miracle) speaks from lived experience of infertility and writes pastorally for Christians navigating the silence of empty arms — giving voice to grief that the church often rushes past.",
  },
  {
    id: "v3",
    name: "Juli Slattery",
    role: "Christian psychologist, author",
    quote: "Infertility is not just a medical problem. It's a spiritual crisis that touches identity, marriage, faith in God's goodness, and community belonging. The church must learn to grieve alongside, not fix.",
    bio: "Juli Slattery (Java with Juli) addresses sexuality, fertility, and identity from a Christian psychology lens. She helps couples name the theological weight of infertility beyond the medical narrative.",
  },
  {
    id: "v4",
    name: "Lore Ferguson Wilbert",
    role: "Writer, theologian",
    quote: "Childlessness — chosen or unchosen — is not a lesser life in the kingdom. Jesus was childless. Paul was childless. The church's insistence on family as the unit of blessing is cultural, not theological.",
    bio: "Lore Ferguson Wilbert (Handle With Care) explores the full dignity of single and childless life from a theological perspective, offering real solidarity to those who long for children they do not have.",
  },
];

const practices = [
  {
    icon: "🕯️",
    title: "Name and Grieve the Specific Child",
    text: "Your grief is not abstract. Give it specificity: name the baby you imagined, the due dates that passed, the pregnancy tests. Grief that is named becomes grief that can move. Write or speak what you were hoping for.",
  },
  {
    icon: "📖",
    title: "Read the Barrenness Narratives Slowly",
    text: "Spend a week in 1 Samuel 1–2, Genesis 21:1–7, and Luke 1. These women waited years. Notice the grief, the prayers, the silence, and the time. Let their stories be the frame — not pressure, but companionship.",
  },
  {
    icon: "🏥",
    title: "Pursue Full Medical Understanding",
    text: "Get thorough workup from a reproductive endocrinologist. Understand unexplained infertility, male factor, egg quality, structural issues. Knowledge is not lack of faith — it is stewardship. Decide prayerfully which interventions align with your theology and values.",
  },
  {
    icon: "💬",
    title: "Find Community Who Has Walked This",
    text: "Resolve (resolve.org) offers peer-led support groups. Hannah's Prayer is a Christian infertility ministry. Being with others who understand the grief of a baby shower invitation or a pregnancy announcement changes the isolation profoundly.",
  },
  {
    icon: "✝️",
    title: "Ask Your Church to Learn to Grieve",
    text: "Ask your pastor if Mother's Day and Father's Day services acknowledge those without children — by choice, circumstance, or loss. The church has often been the most painful place for infertility grief. Advocating for liturgical space for lament is holy work.",
  },
  {
    icon: "🌱",
    title: "Hold Adoption as Genuine Calling, Not Consolation",
    text: "If adoption is considered, enter it as its own calling — not as a consolation prize. Children who need families are not a solution to your grief. Grieve the biological child while remaining open to God doing something different and equally sacred.",
  },
];

const scriptures = [
  { verse: "1 Samuel 1:10", text: "In her deep anguish Hannah prayed to the LORD, weeping bitterly." },
  { verse: "Isaiah 49:15–16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands." },
  { verse: "Psalm 113:9", text: "He settles the childless woman in her home as a happy mother of children. Praise the LORD." },
  { verse: "Isaiah 54:1", text: "Sing, barren woman, you who never bore a child; burst into song, shout for joy, you who were never in labor." },
  { verse: "Psalm 22:1–2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
];

type LongingEntry = { id: string; date: string; longing: string; anchor: string; prayer: string };

export default function LongingForChildrenPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LongingEntry[]>([]);
  const [longing, setLonging] = useState("");
  const [anchor, setAnchor] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_longingforchildrenj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!longing.trim()) return;
    const entry: LongingEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      longing,
      anchor,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_longingforchildrenj_entries", JSON.stringify(updated));
    setLonging(""); setAnchor(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_longingforchildrenj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Infertility & Childlessness</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Longing for Children
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For those who ache for a child — through infertility, pregnancy loss, miscarriage, failed adoption, or unanswered waiting. Your longing is not a lack of faith. Hannah wept bitterly and God heard her.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are in crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; Hannah&apos;s Prayer: <span style={{ color: PURPLE }}>hannah.org</span> &nbsp;·&nbsp; Resolve (infertility support): <span style={{ color: PURPLE }}>resolve.org</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Journal Entry</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What longing is most present today?</label>
                <textarea value={longing} onChange={(e) => setLonging(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What truth from Scripture anchors you today?</label>
                <textarea value={anchor} onChange={(e) => setAnchor(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Write a one-sentence prayer — raw and honest.</label>
                <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.longing && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Longing:</strong> {e.longing}</p>}
                {e.anchor && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Anchor:</strong> {e.anchor}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Prayer:</strong> {e.prayer}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "oNpTha80yyE", title: "Grieving the Loss You Cannot See", channel: "GriefShare", description: "Addresses disenfranchised grief — losses others cannot see or validate — including infertility and childlessness. Practical and compassionate." },
              { videoId: "4Eg_di-O8nM", title: "When God Feels Silent in Suffering", channel: "Ravi Zacharias International", description: "Theological exploration of divine silence in the face of deep longing — how to maintain faith when God does not answer as we hoped." },
              { videoId: "mC-zw0zCCtg", title: "Trusting God When Life Doesn't Make Sense", channel: "Priscilla Shirer", description: "Addresses trust in God's goodness amid circumstances that seem to contradict his care — directly applicable to infertility and unanswered longing." },
              { videoId: "7TBHqMqBmBo", title: "Lament as Spiritual Practice", channel: "Soong-Chan Rah", description: "Biblical foundation for lament — why the church must recover the language of grief — especially relevant for those whose pain is unseen by their congregation." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
