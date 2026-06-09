"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Jesus Versus the Institution: A Crucial Distinction",
    body: "Spiritual abuse is perpetrated by leaders and institutions in the name of God. But those leaders and institutions are not God. One of the most critical distinctions in recovery is learning to separate what was done to you by people claiming to represent God from who God actually is. Jesus's most sustained anger was directed at religious leaders who used spiritual authority to burden, exploit, and exclude (Matthew 23). The God who sent Jesus is the enemy of spiritual abuse, not its source. He was not in what was done to you in his name.",
  },
  {
    title: "The Goodness of Anger and the Right Use of Rage",
    body: "Anger in response to spiritual abuse is appropriate, healthy, and — in its proper form — holy. Jesus drove out the Temple money changers (John 2:14-16). He pronounced woes on religious leaders publicly and without softening (Matthew 23). Psalm 11:5 says God hates violence. The righteous anger of the spiritually abused person — the person who was manipulated, controlled, and harmed in God's name — is not something to suppress. It is honest testimony to the injustice done.",
  },
  {
    title: "The Difference Between Healthy Church and Spiritual Abuse",
    body: "Spiritual abuse is characterized by: leadership that cannot be questioned, accountability structures that protect leaders rather than members, control of members' decisions through claimed divine authority, shaming, exclusion as discipline, and systematic silencing of concerns. Healthy churches have transparent accountability, welcome questions, protect the vulnerable over the powerful, and do not claim divine authority over personal decisions. These are not subtle differences. Knowing them clearly helps survivors trust their own perception of what happened to them.",
  },
  {
    title: "God Is Not Undone by Your Doubts and Deconstruction",
    body: "People who leave spiritually abusive churches often find that they have also left much of their theology — not because Christianity is false but because the toxic version they were given cannot be distinguished yet from the real thing. This deconstruction is not apostasy. It is the necessary work of separating what was weaponized from what is true. God is not afraid of your questions, your anger at the church, or the rubble of what you believed before. \"You will seek me and find me, when you seek me with all your heart\" (Jeremiah 29:13) — even from inside the rubble.",
  },
  {
    title: "The Community You Lost and the Community You Can Find",
    body: "One of the most devastating losses in spiritual abuse is the loss of community — not only the specific church but the entire framework of belonging and shared meaning. This loss is real and deserves to be mourned. But it is not the end of community. The body of Christ is larger and more varied than the institution that harmed you. Survivors have found health in contemplative communities, house churches, liturgical traditions, online faith communities, and small groups of fellow survivors. The wound does not define the whole of Christianity.",
  },
];

const voices = [
  {
    name: "Wade Mullen",
    role: "Author of Something's Not Right: Decoding the Hidden Tactics of Abuse in Faith Communities",
    quote: "Spiritual abuse is abuse. Not a misunderstanding, not poor communication, not a difficult leadership style. When someone uses religious authority to manipulate, control, silence, or exploit — that is abuse. Calling it by its name is the beginning of healing.",
  },
  {
    name: "Scot McKnight",
    role: "Professor of New Testament, author of A Church Called Tov",
    quote: "Toxic churches are not random aberrations. They form around leaders who have learned that their vision matters more than the people around them, and churches that have learned to protect the institution at all costs. Naming the pattern accurately is how people stop blaming themselves.",
  },
  {
    name: "Rachael Denhollander",
    role: "Attorney, survivor advocate; spoke publicly about institutional cover-up in the church",
    quote: "The most common response the church makes to abuse is to protect its reputation. The most Christlike response would be to protect the vulnerable. Until the church learns the difference, survivors will continue to be harmed twice — first by the abuser, then by the institution.",
  },
  {
    name: "Diane Langberg",
    role: "Psychologist and author of Redeeming Power: Understanding Authority and Abuse in the Church",
    quote: "Trauma distorts not only the self but the image of God. If God was presented to you as a God who endorsed the abuse, you must relearn who God is from scratch. That relearning is possible. It takes time, safety, and a community that will not repeat the harm.",
  },
];

const practices = [
  {
    title: "Name What Happened Without Minimizing It",
    body: "Survivors of spiritual abuse commonly minimize: \"it wasn't that bad,\" \"I'm overreacting,\" \"they meant well.\" This minimization is often a direct result of the abuse — you were taught to doubt your own perceptions. Give yourself permission to name what happened accurately. If you were manipulated, controlled, shamed, isolated, or silenced by religious leaders claiming divine authority — that is spiritual abuse. Accurate naming is the first act of recovery.",
  },
  {
    title: "Find a Trauma-Informed Therapist Who Understands Religious Trauma",
    body: "Not all therapists understand spiritual abuse and religious trauma. Look specifically for someone familiar with high-control religious environments, spiritual abuse, or religious trauma syndrome. The Religious Trauma Institute (religioustraumainstitute.com) and the Reclamation Collective are both resources for finding culturally competent support. If you are still interested in maintaining faith, find a therapist who will not pressure you either toward or away from it.",
  },
  {
    title: "Take a Break If You Need To — and Do Not Shame Yourself for It",
    body: "Many survivors need to step completely away from organized religion, spiritual practices, and sometimes even prayer for a season of recovery. This is not the same as losing your faith permanently. It is the necessary act of creating distance from the source of trauma so that healing can begin. Give yourself permission to not attend church, not read your Bible, not pray — if these things are currently triggering rather than nourishing. God will not hold the break against you.",
  },
  {
    title: "Rebuild Your Theology from the Ground Up",
    body: "Spiritual abuse often requires completely re-examining what you were taught — because manipulative leaders frequently distort theology to serve their purposes. This reconstruction is hard and disorienting, and it may take years. Beginning with primary sources rather than leaders' interpretations — reading the Gospels slowly, in a different translation than the one used in the abusive context — can help you encounter Jesus outside the framework used to harm you.",
  },
  {
    title: "Find Survivor Community",
    body: "Being with others who have survived similar experiences — who understand without requiring explanation — is one of the most powerful healing experiences available. Online communities (Recovery from Religion, the Roys Report community, Reclamation Collective) and in-person support groups for spiritual abuse survivors exist. Knowing you are not alone, not crazy, and not weak is foundational.",
  },
  {
    title: "Protect Yourself During Any Return to Faith Community",
    body: "If and when you return to a church community, do so carefully. Signs of a healthy community: leadership is accountable and transparent, concerns are welcomed rather than silenced, the institution protects vulnerable people rather than powerful ones, diversity of thought is allowed, leaving is treated as a choice rather than a betrayal. You have earned the right to assess carefully and to leave immediately if something feels wrong.",
  },
];

const scriptures = [
  { ref: "Matthew 23:4", text: "They tie up heavy burdens, hard to bear, and lay them on people's shoulders, but they themselves are not willing to move them with their finger." },
  { ref: "Jeremiah 29:13", text: "You will seek me and find me, when you seek me with all your heart." },
  { ref: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit." },
  { ref: "Isaiah 42:3", text: "A bruised reed he will not break, and a faintly burning wick he will not quench; he will faithfully bring forth justice." },
  { ref: "Micah 6:8", text: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?" },
  { ref: "John 10:10", text: "The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly." },
];

const videos = [
  { videoId: "JQhCXbxEHhc", title: "Wade Mullen — Something Is Not Right: Spiritual Abuse in the Church" },
  { videoId: "ZEpXFjtQMzA", title: "Recovering Faith After Spiritual Abuse" },
  { videoId: "o5_Z_oZNgf8", title: "Diane Langberg — Redeeming Power and Religious Abuse" },
  { videoId: "8hBJrZ8lxP4", title: "Separating Jesus from the Institution That Hurt You" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function SpiritualAbuseRecoveryPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; godToday: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", godToday: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_spiritualabuserecovery_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_spiritualabuserecovery_entries", JSON.stringify(next));
    setForm({ today: "", godToday: "", prayer: "" });
  }

  return (
    <>
      <Navbar />
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Spiritual Abuse Recovery
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            What was done to you in God&apos;s name was not from God. For those recovering from spiritually abusive churches, leaders, and communities — honest resources for rebuilding.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>If you are in crisis:</strong> Crisis Line: <strong style={{ color: TEXT }}>988</strong> &bull; If spiritual abuse involved physical or sexual harm, National DV Hotline: <strong style={{ color: TEXT }}>1-800-799-7233</strong>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Recovery Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A private space to process and rebuild.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where are you in your recovery today?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="Anger, grief, numbness, tentative hope..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What is your honest sense of God today?</label>
                <textarea value={form.godToday} onChange={e => setForm(f => ({ ...f, godToday: e.target.value }))} rows={2} placeholder="Distant, suspicious, possibly still there, I don't know..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer or honest statement to God (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="If you are there, I need to know you are different from what they showed me..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.today && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Recovery: </span>{e.today}</p>}
                    {e.godToday && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>God today: </span>{e.godToday}</p>}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for those recovering from spiritually abusive communities.</p>
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
