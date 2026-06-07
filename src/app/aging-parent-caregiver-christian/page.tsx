"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The Fifth Commandment Never Expires",
    body: "\"Honor your father and your mother\" (Exodus 20:12) is the only commandment with a promise attached—and no age limit. Jesus rebuked the Pharisees for using religious giving as an excuse to neglect aging parents (Mark 7:9-13). The New Testament is equally direct: \"If anyone does not provide for his relatives, and especially for members of his household, he has denied the faith\" (1 Timothy 5:8). Caregiving is not merely a cultural duty but a covenant obligation woven into the fabric of Christian life.",
  },
  {
    title: "Jesus Cares for His Mother from the Cross",
    body: "In his final moments, Jesus—experiencing the full weight of cosmic suffering—made sure his mother was cared for. \"When Jesus saw his mother and the disciple whom he loved standing nearby, he said to his mother, 'Woman, behold, your son!' Then he said to the disciple, 'Behold, your mother!'\" (John 19:26-27). This act from the cross teaches us that caring for aging parents is not a distraction from our calling—it IS part of our calling, worthy of attention even in our most consuming moments.",
  },
  {
    title: "Lament Is Faithful, Not Faithless",
    body: "The Psalms give us language for the exhaustion of caregiving: \"I am weary with my moaning; every night I flood my bed with tears; I drench my couch with my weeping\" (Psalm 6:6). Ecclesiastes names the tragedy of cognitive decline honestly: \"Remember your Creator in the days of your youth, before the evil days come\" (12:1). The Bible does not pretend these years are easy. Lamenting the grief of watching a parent decline is not a failure of faith—it is honest prayer.",
  },
  {
    title: "The Theology of Accompaniment",
    body: "God's promise to Abraham—\"I will be with you\"—echoes through scripture as the fundamental gift of presence. Caregivers offer their parents the embodied love of accompaniment: sitting in hospital rooms, driving to appointments, repeating the same story for the hundredth time without impatience. This ministry of presence reflects the Incarnation itself—God not solving humanity from a distance, but entering fully into our limitations, our confusion, our physical need. Your presence is theology made flesh.",
  },
  {
    title: "Receiving Care Is Also Dignity",
    body: "Christian caregivers often struggle with the role reversal of parent becoming child. But dependence is not undignified in a Christian framework—it is the posture of all creation before the Creator. When your parent can no longer care for themselves, they are not becoming less—they are living out the vulnerability that unites all humans. Your caregiving proclaims that worth is not earned by productivity but inherent in being made in God's image (Genesis 1:27). Every act of care announces: you still matter.",
  },
];

const voices = [
  {
    name: "Amy Kenny",
    role: "Disability theologian and caregiver advocate",
    quote: "Caregiving is one of the most countercultural acts in a society that measures worth by productivity and independence. Every time you show up for a parent who cannot reciprocate, you are preaching the gospel of unconditional love.",
  },
  {
    name: "Dr. John Swinton",
    role: "Professor of Practical Theology, author of Dementia: Living in the Memories of God",
    quote: "People with dementia are not losing their humanity or their relationship with God—they remain fully known by the One who holds all memory. Our task is to create communities of faithful friendship that love them as Christ loves them.",
  },
  {
    name: "Amy Julia Becker",
    role: "Author and disability advocate",
    quote: "The caregiving years will crack you open in ways you did not expect—and in those cracks, if you let them, grace finds a way in. Your weakness is not an obstacle to God's work. It is often the very means of it.",
  },
  {
    name: "Henri Nouwen",
    role: "Catholic priest, author, spent his last years in community with people with disabilities",
    quote: "The spirituality of caregiving is simple, though not easy: it asks us to be present, to listen, to touch, and to let go. In this ministry, you do not give what you have—you give who you are.",
  },
];

const practices = [
  {
    title: "Build a Care Team, Not a Solo Ministry",
    body: "Caregiver isolation is the number one predictor of burnout. Contact your church and explicitly ask for help: rides to appointments, meal trains, someone to sit with your parent so you can sleep. Jesus sent the disciples in pairs—solo caregiving was never the design. Allow others to share your cross.",
  },
  {
    title: "Grieve What Is Already Lost",
    body: "When a parent has dementia, Parkinson's, or simply significant cognitive decline, you are grieving a living person. This \"ambiguous loss\" is one of the hardest forms of grief—there is no funeral, no clear endpoint, no permission to mourn. Give yourself that permission. Journal about who your parent was. Talk to a grief counselor. The grief is real even before the death.",
  },
  {
    title: "Protect One Non-Negotiable for Yourself Each Week",
    body: "One hour of exercise. A weekly call with a friend. A Saturday morning at church. Protect one thing that is yours, non-negotiably, each week. This is not selfishness—it is sustainability. You cannot pour from an empty vessel, and your parent needs a caregiver who is still alive inside.",
  },
  {
    title: "Have the Hard Conversations Before the Crisis",
    body: "End-of-life wishes, advance directives, finances, living arrangements—these are best discussed before cognitive decline or emergency makes them impossible. If your parent is still able, have those conversations now, even if they feel premature. \"What do you want your final years to look like?\" is one of the most loving questions you can ask.",
  },
  {
    title: "Use the Sacrament of Touch",
    body: "When words are no longer accessible—when your parent no longer knows your name—touch remains. Hold their hand. Brush their hair. Sing familiar hymns. Pray aloud. Research consistently shows that persons with advanced dementia still respond to gentle touch and familiar music, especially songs from their faith tradition. This is not futile; it is ministry.",
  },
  {
    title: "Find a Caregiver Support Group",
    body: "The Alzheimer's Association and many hospice organizations offer free caregiver support groups—some specifically for people of faith. Being with others who understand the specific exhaustion of watching a parent disappear slowly is irreplaceable. You are not alone in this, even when you feel most isolated.",
  },
];

const scriptures = [
  { ref: "Exodus 20:12", text: "Honor your father and your mother, that your days may be long in the land that the Lord your God is giving you." },
  { ref: "Mark 7:10-13", text: "Moses said, 'Honor your father and your mother.' But you say, 'If a man tells his father or his mother, whatever you would have gained from me is Corban'… thus making void the word of God by your tradition." },
  { ref: "1 Timothy 5:8", text: "But if anyone does not provide for his relatives, and especially for members of his household, he has denied the faith and is worse than an unbeliever." },
  { ref: "Isaiah 46:4", text: "Even to your old age I am he, and to gray hairs I will carry you. I have made, and I will bear; I will carry and will save." },
  { ref: "Psalm 71:9", text: "Do not cast me off in the time of old age; forsake me not when my strength is spent." },
  { ref: "John 19:26-27", text: "When Jesus saw his mother and the disciple whom he loved standing nearby, he said to his mother, 'Woman, behold, your son!' Then he said to the disciple, 'Behold, your mother!' And from that hour the disciple took her to his own home." },
];

const videos = [
  { videoId: "Qb6N_C7wgzo", title: "Caring for Aging Parents — A Christian Perspective" },
  { videoId: "3R8RhWMpBck", title: "When a Parent Has Dementia — Faith and Memory Loss" },
  { videoId: "Y8Fy4pnp01A", title: "Caregiver Burnout and the Grace of Limits" },
  { videoId: "mVHKU0ZBWTY", title: "Honoring Aging Parents Biblically" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function AgingParentCaregiverPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; todayFeeling: string; hardestPart: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ todayFeeling: "", hardestPart: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_agingparentcaregiver_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.todayFeeling.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_agingparentcaregiver_entries", JSON.stringify(next));
    setForm({ todayFeeling: "", hardestPart: "", prayer: "" });
  }

  return (
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Caring for Aging Parents
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            The exhaustion is real. So is the love. For Christians who are watching their parents decline and wondering how to honor them faithfully when the cost is everything you have.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>If you need support now:</strong> Caregiver Action Network: <strong style={{ color: TEXT }}>1-855-227-3640</strong> &bull; Alzheimer's Helpline: <strong style={{ color: TEXT }}>1-800-272-3900</strong> &bull; Crisis Line: <strong style={{ color: TEXT }}>988</strong>
          </div>
        </div>
      </div>

      {/* Tabs */}
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
        {/* Theology */}
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

        {/* Voices */}
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

        {/* Practices */}
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

        {/* Scripture */}
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

        {/* Journal */}
        {tab === 4 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Caregiver Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A space to process what you cannot say out loud.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>How are you feeling today as a caregiver?</label>
                <textarea value={form.todayFeeling} onChange={e => setForm(f => ({ ...f, todayFeeling: e.target.value }))} rows={3} placeholder="Be honest. This is just for you." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What is the hardest part right now?</label>
                <textarea value={form.hardestPart} onChange={e => setForm(f => ({ ...f, hardestPart: e.target.value }))} rows={2} placeholder="The grief, the resentment, the loneliness, the fear..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer for today (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, today I need..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.todayFeeling && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Feeling: </span>{e.todayFeeling}</p>}
                    {e.hardestPart && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Hardest part: </span>{e.hardestPart}</p>}
                    {e.prayer && <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}><span style={{ color: MUTED, fontStyle: "normal", fontSize: "0.8rem" }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Videos */}
        {tab === 5 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Video Resources</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Sermons, teachings, and testimonies for caregivers walking this road.</p>
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
  );
}
