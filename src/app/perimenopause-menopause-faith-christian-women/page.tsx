"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#3a7d56";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The Body in Transition: A Theology of Season",
    body: "Ecclesiastes 3 gives language for the rhythms of embodied life: \"For everything there is a season, and a time for every matter under heaven\" (v.1). The body moves through seasons — childhood, fertility, perimenopause, menopause, age — and each season carries its own kind of life and loss. Western Christianity has been largely silent about menopause as a theological moment. But the transition from the reproductive years is as theologically significant as any other life passage: a dying of one form of embodied life, and the emergence of another. This deserves theological attention, not medical management alone.",
  },
  {
    title: "The Body Is Not the Enemy: Incarnational Theology",
    body: "Gnostic Christianity has always tempted the church toward body-suspicion — the idea that the body is the lesser part of the human person, to be transcended rather than honored. But the Incarnation says otherwise. God took a human body — its heat, hunger, hormones, and limitations — and called it good. The menopausal body is not a body in decline but a body in transition. Its changes are not spiritual failures or signs of divine disfavor. They are the work of a creation that moves through time — which God made and called very good (Genesis 1:31).",
  },
  {
    title: "Sarah's Laugh and the God Who Works Against Biology",
    body: "Sarah laughed when she was told she would bear a child at ninety (Genesis 18:12). The laugh is complex — partly disbelief, partly the honest response of a woman whose body had long since passed the reproductive threshold. God did not rebuke the laugh; he named it. And then he worked against the biological narrative. The story does not prescribe that all menopausal women will have children — but it does establish that God is not bound by biological timelines, and that God receives even the laughter of a woman whose body has surprised her.",
  },
  {
    title: "The Older Woman and the Wisdom Tradition",
    body: "The biblical wisdom tradition honors the older woman. Titus 2:3-5 describes older women as teachers of the younger — carrying authority specifically because of their years of embodied experience. The Song of Solomon celebrates the mature woman's beauty. Ruth and Naomi model the irreplaceable wisdom of an older woman as guide and companion. The menopausal and post-menopausal years are not a spiritual diminishment but the stage at which a woman's accumulated wisdom becomes the community's resource. Christian tradition has rarely named this, but it is there.",
  },
  {
    title: "Lament and the Permission to Grieve What Is Passing",
    body: "Many women experience grief in the menopause transition: grief for the fertility years, for the young body, for the children they did not have, for the end of a chapter that felt defining. This grief is real and deserves honest acknowledgment. The Psalms give language for grief that does not resolve quickly: Psalm 31's \"my life is spent with sorrow\" alongside its \"my times are in your hand\" (v.10,15). Grief and trust coexist in the Psalms. The Christian woman moving through menopause has permission to grieve and to trust simultaneously.",
  },
];

const voices = [
  {
    name: "Lisa Harper",
    role: "Author and teacher; has spoken on women's embodied experience and Christian faith",
    quote: "The church has talked about every other stage of a woman's life but this one. We talk about puberty and marriage and pregnancy and empty nest. We have nothing to say about menopause — as if this major transition in every woman's life is outside the purview of Christian faith. It is not. God is present in the hot flash and the sleepless night and the grief of the passing years.",
  },
  {
    name: "Paula Rinehart",
    role: "Author of Strong Women, Soft Hearts and What's He Thinking?; counselor to women",
    quote: "The menopause years are one of the most spiritually significant seasons of a woman's life — precisely because the body is forcing her to confront questions about identity, time, beauty, worth, and legacy that she may have been able to defer. These are the questions the church should be helping women engage, not avoiding.",
  },
  {
    name: "Lynda Elliott",
    role: "Spiritual director and author; specializes in women's faith formation across the life cycle",
    quote: "Menopause is not a medical problem to be solved. It is a passage to be navigated. Many women on the other side of it describe a freedom — from certain anxieties, from the performance of youth, from the pressure of reproduction — that is one of the surprising gifts of the second half of life.",
  },
  {
    name: "Jan Richardson",
    role: "Artist, author, and ordained minister; writes on women's embodied spirituality",
    quote: "The wisdom that comes with years is not a consolation prize for the body's changes. It is a real thing, earned through real living. The post-menopausal woman who has done the interior work of her years carries something the culture does not know how to value but the church, at its best, has always honored.",
  },
];

const practices = [
  {
    title: "Get Comprehensive Medical Care",
    body: "Perimenopause and menopause are medical realities with real symptoms — hot flashes, sleep disruption, mood changes, cognitive changes, bone density changes, cardiovascular changes — that benefit from medical attention. Hormone replacement therapy, lifestyle modification, and symptom management have all advanced significantly. Find a gynecologist or menopause specialist who takes symptoms seriously and offers evidence-based options. NAMS (North American Menopause Society) maintains a provider directory. You do not have to simply endure.",
  },
  {
    title: "Name the Spiritual Transition, Not Just the Medical One",
    body: "In addition to medical care, many women find value in explicitly naming the perimenopause/menopause transition as a spiritual passage — in prayer, in journaling, in conversation with a spiritual director or trusted community. What is ending? What is beginning? What do you want the second half of your life to be? These questions are spiritual as much as medical, and they deserve the same intentional attention.",
  },
  {
    title: "Find Community with Other Women in the Same Season",
    body: "The silence around menopause means that many women move through this transition in isolation, without knowing that other women in their community are experiencing the same things. Find or create a community — a small group, a retreat, a support circle — with other women in this season. The combination of honest naming and shared experience significantly reduces the sense of isolation and shame that the cultural silence creates.",
  },
  {
    title: "Tend the Grief Without Rushing to Resolution",
    body: "Whatever is grievable in your particular experience of this transition — the fertility you are leaving behind, the body you had, the children you did not have, the years that passed quickly — allow the grief to be genuine without forcing premature resolution. The journey through grief, not around it, opens to the new life that comes on the other side. The Christian tradition's theology of death-and-resurrection applies to every form of passing, including this one.",
  },
  {
    title: "Invest in Spiritual Formation for the Second Half",
    body: "Many of the practices that sustained faith in the first half of life — structured programs, community activities, performance-oriented service — may need to be supplemented or replaced in the second half. Contemplative prayer, spiritual direction, lectio divina, Ignatian practices, and the Daily Office often become more accessible and more sustaining in the second half of life. Explore what spiritual practices call to you in this season rather than simply continuing what you have always done.",
  },
  {
    title: "Explore What Your Accumulated Wisdom Can Offer",
    body: "The Titus 2 model of older women teaching younger is not primarily a formal program — it is a relational practice of offering what you have learned to people who are earlier in the journey. What do you know now about marriage, parenting, work, loss, and faith that you did not know at 30? Who in your community might benefit from a relationship with you in which that wisdom flows? This is not about being an expert; it is about being a companion who has walked farther on the road.",
  },
];

const scriptures = [
  { ref: "Ecclesiastes 3:1", text: "For everything there is a season, and a time for every matter under heaven." },
  { ref: "Genesis 18:12-14", text: "So Sarah laughed to herself, saying, 'After I am worn out, and my lord is old, shall I have pleasure?' The Lord said to Abraham, 'Why did Sarah laugh... Is anything too hard for the Lord?'" },
  { ref: "Titus 2:3-5", text: "Older women likewise are to be reverent in behavior... They are to teach what is good, and so train the young women." },
  { ref: "Psalm 31:15", text: "My times are in your hand; rescue me from the hand of my enemies and from my persecutors!" },
  { ref: "Isaiah 46:4", text: "Even to your old age I am he, and to gray hairs I will carry you. I have made, and I will bear; I will carry and will save." },
  { ref: "Proverbs 31:25", text: "Strength and dignity are her clothing, and she laughs at the time to come." },
];

const videos = [
  { videoId: "fNqj3pJkqps", title: "Faith and Menopause — A Conversation the Church Isn't Having" },
  { videoId: "RCY7IQGOaTk", title: "Paula Rinehart — Women at Midlife and the Second Half of Life" },
  { videoId: "8SLKgJ2YbpQ", title: "The Spiritual Passage of Menopause" },
  { videoId: "Mgt73hbkYLo", title: "Perimenopause, Hormones, and the Christian Woman's Body" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function PerimenopauseMenopauseFaithPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; grief: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", grief: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_perimenopausefaith_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_perimenopausefaith_entries", JSON.stringify(next));
    setForm({ today: "", grief: "", prayer: "" });
  }

  return (
    <>
      <Navbar />
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Perimenopause, Menopause & Faith
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            The body is in transition. So is the soul. For Christian women navigating perimenopause and menopause — the theology, wisdom, grief, and unexpected gifts of the passage.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Medical support:</strong> NAMS Provider Directory: <strong style={{ color: TEXT }}>menopause.org</strong> &bull; Menopause Support: <strong style={{ color: TEXT }}>1-800-994-9662</strong> &bull; Crisis: <strong style={{ color: TEXT }}>988</strong>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", color: tab === i ? ACCENT : MUTED, borderBottom: tab === i ? `2px solid ${ACCENT}` : "2px solid transparent", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem", whiteSpace: "nowrap" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Biblical & Theological Foundations</h2>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.25rem", background: "none", border: "none", color: TEXT, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 600 }}>
                  {item.title}
                  <span style={{ color: ACCENT, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div style={{ padding: "0 1.25rem 1.25rem", color: MUTED, lineHeight: 1.8 }}>{item.body}</div>}
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Voices of Experience</h2>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "0.75rem" }}>
                  <div style={{ fontWeight: 700, color: ACCENT }}>{v.name}</div>
                  <div style={{ fontSize: "0.85rem", color: MUTED }}>{v.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Practical Guidance</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <h3 style={{ color: ACCENT, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Scripture for the Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 10px 10px 0", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontWeight: 700, color: ACCENT, marginBottom: "0.5rem", fontSize: "0.9rem", letterSpacing: "0.05em" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A space to navigate this passage honestly.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where are you in this transition today?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="Symptoms, emotional experience, spiritual questions..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What are you grieving, and what might you be discovering?</label>
                <textarea value={form.grief} onChange={e => setForm(f => ({ ...f, grief: e.target.value }))} rows={2} placeholder="What is passing, and what unexpected thing might be emerging..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer for this season (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, this is not what I expected. Be with me in it..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.today && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Today: </span>{e.today}</p>}
                    {e.grief && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Grief/Discovery: </span>{e.grief}</p>}
                    {e.prayer && <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}><span style={{ color: MUTED, fontStyle: "normal", fontSize: "0.8rem" }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 5 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Video Resources</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and conversation about faith, embodiment, and the menopause passage.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {videos.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.75rem 1rem", fontSize: "0.9rem", color: MUTED }}>{v.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
