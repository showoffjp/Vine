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
    title: "Identity Beyond Vocation: The Theology of Being Before Doing",
    body: "Western culture — including Christian culture — has deeply conflated identity with work. We introduce ourselves by what we do. We measure worth by productivity. We experience job loss as a loss of self. But Christian theology insists on a different order: you are before you do. God named Jacob before he did anything for God. Jesus was declared \"beloved\" at his baptism before his public ministry began (Matthew 3:17). Being precedes doing. Who you are is not what you produce. Job loss reveals how completely we have allowed work to define us — and invites reconstruction on a more durable foundation.",
  },
  {
    title: "Joseph's Pit and the Hidden Providence",
    body: "Joseph was thrown in a pit by his brothers, sold as a slave, imprisoned on false charges — and eventually became second only to Pharaoh (Genesis 37-45). What looked from the outside like repeated catastrophic failure was, from God's perspective, the preparation for exactly the role Joseph was meant to fill. Joseph says to his brothers: \"You intended to harm me, but God intended it for good\" (50:20). This is not a promise that every job loss leads to promotion — but it is a promise that God's work does not end when your employment does.",
  },
  {
    title: "Elijah After the Victory: Depression Following Achievement",
    body: "Elijah had just called down fire from heaven, killed 450 prophets, and ended a three-year drought — and then sat under a broom tree wanting to die (1 Kings 19:4). The text does not explain the psychology, but many interpreters recognize a pattern: the crash after extended peak performance. Many midlife job losses happen to people at or near the height of their careers — suddenly stripped of their role at the moment they felt most defined by it. The same God who sent angels to feed Elijah — not rebuking, not demanding Elijah pull himself together — is present in the crash after a long career.",
  },
  {
    title: "The Vineyard Workers and the Scandal of Unmerited Grace",
    body: "In Matthew 20:1-16, workers hired at different times all receive the same wage. Jesus makes the last the same as the first — and the first consider this unjust. The parable challenges the logic of earned reward and career trajectory. For the Christian who has worked faithfully for decades and lost their job — who feels the injustice of being passed over, downsized, or replaced — this parable offers both solidarity with the injustice and a counter-vision: God's economy does not operate on career trajectory. Your worth to God is not measured by your career arc.",
  },
  {
    title: "\"I Know the Plans I Have for You\" — Context Matters",
    body: "Jeremiah 29:11 — \"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope\" — is spoken to people in exile. The Babylonian captivity had stripped away the Temple, the land, the institutions, and the national identity that defined Israel. God's word of hope is spoken into maximum stripping, not prosperous stability. The promise of a future and a hope does not come in spite of the exile — it comes within it. Midlife job loss is its own form of exile, and this promise was made for exile.",
  },
];

const voices = [
  {
    name: "Mark Batterson",
    role: "Lead pastor of National Community Church; author of In a Pit with a Lion on a Snowy Day",
    quote: "Some of the greatest chapters of your story have not been written yet. The job loss, the closed door, the unexpected ending — these are not the conclusion. They are the pivot point. The question is not what you have lost. It is what you are willing to become.",
  },
  {
    name: "Paul Tripp",
    role: "Biblical counselor, author of Dangerous Calling and New Morning Mercies",
    quote: "Your identity was never safe in your job title, your salary, or your professional reputation. It was borrowed security, and God in his grace sometimes strips it away so that you discover the security that was always meant to hold you. This loss is painful. It is also an invitation.",
  },
  {
    name: "Jerry Sittser",
    role: "Author of A Grace Disguised; writes on loss and spiritual transformation",
    quote: "Catastrophic loss — including career loss — can either diminish or enlarge the soul. The difference is not the circumstance but the response. People who allow loss to transform them rather than merely consuming them often emerge with a depth of character that was impossible before. It is not a trade anyone would choose. But it is real.",
  },
  {
    name: "Os Guinness",
    role: "Author of The Call: Finding and Fulfilling the Central Purpose of Your Life",
    quote: "The primary call of every human being is not to a job or a career but to God himself — to know him and make him known. Secondary callings, including vocation, express that primary call in specific ways. When a secondary calling is stripped away, the primary call remains. This is not consolation. It is reality.",
  },
];

const practices = [
  {
    title: "Grieve the Loss Before Strategizing the Next Step",
    body: "The pressure to immediately pivot to job search and professional networking is often a way of avoiding the grief that job loss requires. Before the strategy comes the grief: the identity loss, the routine loss, the relational loss of colleagues, the financial fear, the wound to dignity. Allow yourself to grieve — with God, with a trusted person, with a counselor — before trying to rebuild. The rebuilding will be stronger for having been built on honest ground.",
  },
  {
    title: "Distinguish Your Worth From Your Employment Status",
    body: "The hardest work of midlife job loss is often internal: separating who you are from what you do. This is not accomplished in a single insight but through sustained practice — deliberately noticing when your identity is narrating from the job, and redirecting to the more durable truth: you are a beloved child of God, made in his image, known and valued before your career began and after it ends. Therapy, journaling, and spiritual direction can all support this work.",
  },
  {
    title: "Reframe the Midlife Dimension",
    body: "Midlife job loss is particularly destabilizing because it arrives when career trajectory is expected to be ascending, not disrupting. But midlife also offers something younger job loss does not: decades of developed competency, wisdom, and relational capital. The rebuilding that is possible in the 40s, 50s, and 60s is different from the 20s — more informed, more intentional, more aligned with who you have actually become. Consider working with a vocational counselor or coach who specializes in midlife career transition.",
  },
  {
    title: "Use the Time for What Would Not Otherwise Be Available",
    body: "Job loss creates forced margin. For the person who has spent decades on the treadmill of career and productivity, this margin — however unwanted — can be a gift. What would you do with three months that work has never allowed? Deeper spiritual practice, time with family, creative work that was always deferred, service that was always crowded out. This is not minimizing the crisis. It is finding what the crisis makes possible.",
  },
  {
    title: "Engage Your Community Honestly",
    body: "The shame around job loss — especially at midlife, when the expectation is stability — often drives silence. But the silence compounds the isolation. Tell your community what has happened. Ask specifically for job leads, references, connections. Allow people to help. The network that comes from honest need is often more fruitful than the network of hidden struggle.",
  },
  {
    title: "Consider Whether This Is a Redirection, Not Just a Loss",
    body: "Many people who experience midlife job loss eventually describe it as the best thing that happened to their career — the forced transition that led them to work that was more aligned with their actual gifts and values. This perspective is not available in the acute pain of the loss. But it can be held tentatively as a question: is this a door closing on work that was never quite right, or work that was exactly right but now finished? Both are possible. The answer often becomes clear over time, not immediately.",
  },
];

const scriptures = [
  { ref: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope." },
  { ref: "Matthew 3:17", text: "And behold, a voice from heaven said, 'This is my beloved Son, with whom I am well pleased.'" },
  { ref: "Genesis 50:20", text: "As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive, as they are today." },
  { ref: "Philippians 4:11-12", text: "Not that I am speaking of being in need, for I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need." },
  { ref: "Psalm 37:5", text: "Commit your way to the Lord; trust in him, and he will act." },
  { ref: "Romans 8:28", text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose." },
];

const videos = [
  { videoId: "3_QnK7F_gxE", title: "Job Loss at Midlife — A Christian Perspective" },
  { videoId: "7bx0VsrEJRw", title: "Paul Tripp — Identity Beyond Vocation" },
  { videoId: "VrT6iI72nMo", title: "Os Guinness — The Call: Vocation and Identity in Christ" },
  { videoId: "yCzF8EzpLxY", title: "Joseph in the Pit — Providence in Job Loss" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function JobLossMidlifeIdentityCrisisPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; identity: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", identity: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_joblossmidlifeidentity_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_joblossmidlifeidentity_entries", JSON.stringify(next));
    setForm({ today: "", identity: "", prayer: "" });
  }

  return (
    <>
      <Navbar />
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Job Loss & Midlife Identity
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            Your job was not who you are. For Christians navigating job loss in mid-career — honest theology about identity, grief, and rebuilding on ground that cannot be taken.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Need support?</strong> Crisis Line: <strong style={{ color: TEXT }}>988</strong> &bull; Financial assistance: <strong style={{ color: TEXT }}>211.org</strong> &bull; Career transition help: speak with your pastor or HR counselor
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A space to grieve, process, and rebuild.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where are you today in this loss?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="Shock, grief, humiliated, starting to see options..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Who are you, apart from your job?</label>
                <textarea value={form.identity} onChange={e => setForm(f => ({ ...f, identity: e.target.value }))} rows={2} placeholder="This might be hard to answer. Start somewhere." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, I don't know who I am without this. Help me..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
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
                    {e.identity && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Identity: </span>{e.identity}</p>}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching on vocation, identity, and the Christian's response to job loss.</p>
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
