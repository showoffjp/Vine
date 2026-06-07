"use client";
import { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The Universality of Assurance Struggles",
    body: "Doubt about salvation — 'Am I really saved? Did I truly believe? What if I fall away?' — has been one of the most common pastoral concerns throughout church history. Augustine doubted. Luther struggled with it so severely that his confessor sent him to teach the Bible to get his mind off himself. John Bunyan devoted a third of Grace Abounding to the Worst of Sinners to his assurance crisis. Martyn Lloyd-Jones, Billy Graham, and countless others have wrestled. The struggle is not a sign of unsaved status; it is often a sign of spiritual seriousness.",
  },
  {
    title: "Assurance Is Not Certainty of Perfect Performance",
    body: "A major source of assurance struggles is a performance-based understanding of salvation: 'I am saved if I have believed correctly, repented sufficiently, and continued without serious sin.' This framework makes assurance logically impossible, since none of us performs consistently. The Reformers insisted that assurance rests not on the quality of our faith but on the object of our faith: Christ, whose work is complete, whose righteousness is imputed, whose intercession is perpetual. 1 John 5:13 says 'I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.' The knowledge is accessible.",
  },
  {
    title: "Three Grounds of Assurance",
    body: "The Westminster Confession identifies three grounds of assurance: the divine truth of God's promises, the inward evidence of graces (love for God, hatred of sin, hunger for holiness), and the testimony of the Holy Spirit (Romans 8:16 — 'The Spirit himself testifies with our spirit that we are God's children'). None of these is infallible in isolation; together, they provide stable grounding. If you love God even imperfectly, if you grieve sin even inconsistently, if you desire Christ even when you doubt — these are signs of spiritual life, not absence of it.",
  },
  {
    title: "Distinguishing Saving Faith from Feeling Faith",
    body: "Assurance crises are frequently crises of feeling: 'I do not feel saved. I do not feel God's presence. I do not feel my prayer is reaching Him.' But saving faith is not a feeling; it is a posture of the will toward Christ. Jonathan Edwards, who wrote extensively on religious affections, was careful to distinguish genuine spiritual experience from mere emotion. You can believe without feeling belief. You can trust without feeling trust. The question is not 'Do I feel saved?' but 'Am I turning toward Christ in whatever way I am capable of today?'",
  },
  {
    title: "Near Death, Deathbed, and the Thief on the Cross",
    body: "For those facing death — through terminal illness, extreme age, or crisis — assurance takes particular urgency. The thief crucified beside Jesus had no time for theological refinement, no opportunity for baptism or sanctification, no track record of Christian living. His was the most minimal possible expression of faith: 'Remember me when you come into your kingdom.' And Jesus's response was immediate and absolute: 'Today you will be with me in paradise.' The bar for entering God's presence has always been the same: turning toward Christ with whatever you have.",
  },
];

const voices = [
  {
    name: "Martyn Lloyd-Jones",
    role: "Author, Spiritual Depression: Its Causes and Cures",
    quote: "The main trouble with a depressed Christian is that he is listening to himself instead of talking to himself. Ask yourself: what do you know? What is true? The gospel is not what you feel about yourself — it is what God has said about Christ.",
  },
  {
    name: "John Newton",
    role: "Author, Amazing Grace; pastor and correspondent to doubters",
    quote: "I am not what I ought to be. I am not what I wish to be. I am not what I hope to be. But by the grace of God I am not what I once was, and I can truly say that I know whom I have believed and am persuaded that He is able to keep what I have committed to him.",
  },
  {
    name: "Thomas Watson",
    role: "Puritan pastor and author",
    quote: "A doubting soul is still a living soul. The very doubt that torments you is evidence of spiritual life — for the unregenerate do not doubt, they simply do not care.",
  },
  {
    name: "J.I. Packer",
    role: "Author, Knowing God",
    quote: "The certainty of salvation does not rest on the strength of the believer's faith but on the faithfulness of God. He who began a good work in you will carry it on to completion. This is not about you — it is about Him.",
  },
];

const practices = [
  {
    title: "Preach the Gospel to Yourself Daily",
    body: "Assurance crises are sustained by rehearsing doubt rather than truth. Begin each day with a deliberate, spoken, or written rehearsal of what you actually know: Christ died for sinners. I am a sinner. He rose from the dead. His righteousness is counted as mine. This is not positive self-talk; it is the daily application of objective truth to a subjective emotional state.",
  },
  {
    title: "Talk to a Pastor, Not Just Yourself",
    body: "Assurance struggles, left to internal rumination, tend to spiral. The same concern revisited alone produces the same anxiety. Bring it to a pastor, spiritual director, or trusted mature believer who can respond from outside your mental loop. Luther's confessor Staupitz understood this — he sent Luther to Scripture and to community, not to his own introspection.",
  },
  {
    title: "Look to Christ, Not to Your Experience of Christ",
    body: "There is an important difference between looking to Christ and examining your experience of Christ. The first fixes your gaze on the one whose work is objective, complete, and external to you. The second turns inward and inevitably finds inconsistency. For the person in an assurance crisis, the counsel is almost always: stop looking at yourself and look at Him. His invitation, His promises, His record are the ground — not yours.",
  },
  {
    title: "Use the Means of Grace Without Spiritual Bypass",
    body: "Consistent participation in worship, communion, Scripture, and community are the means God uses to sustain and renew assurance. Do not wait to feel assured before engaging them; engage them in order to receive assurance. Communion, in particular, is given as a visible word of assurance — the broken bread and poured cup are dramatized promises of exactly the grace you need.",
  },
  {
    title: "For Those Facing Death: Simple Words Are Enough",
    body: "If you are at a bedside, or if you are yourself near death, the simplest possible prayer is sufficient: 'Lord Jesus, I trust you.' Not a theological statement, not a confession of complete understanding, not a review of lifetime faithfulness. The thief on the cross had nothing but a turning toward Jesus. That turning — toward Him rather than away — is faith, and faith in Christ has always been enough.",
  },
  {
    title: "Read the Puritan Guides to Assurance",
    body: "The Puritans — who suffered from assurance struggles more than almost any other Christian tradition — produced some of the most practical, pastorally wise guides to this particular form of suffering. Thomas Goodwin's The Child of Light Walking in Darkness, Jeremiah Burroughs on assurance, and John Bunyan's Grace Abounding to the Worst of Sinners are classics of pastoral care for exactly this condition.",
  },
];

const scriptures = [
  { ref: "1 John 5:13", text: "I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life." },
  { ref: "Romans 8:16", text: "The Spirit himself testifies with our spirit that we are God's children." },
  { ref: "John 10:28-29", text: "I give them eternal life, and they shall never perish; no one will snatch them out of my hand. My Father, who has given them to me, is greater than all; no one can snatch them out of my Father's hand." },
  { ref: "Luke 23:42-43", text: "Then he said, 'Jesus, remember me when you come into your kingdom.' Jesus answered him, 'Truly I tell you, today you will be with me in paradise.'" },
  { ref: "Philippians 1:6", text: "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus." },
  { ref: "Romans 8:38-39", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
];

const videos = [
  { videoId: "cNO_5pBt4k4", title: "Assurance of Salvation — Martyn Lloyd-Jones" },
  { videoId: "V-9AcMPCFmo", title: "How to Know You Are Saved — J.I. Packer" },
  { videoId: "zfF5cVkxKCA", title: "The Thief on the Cross: What It Means for Salvation" },
  { videoId: "5TjHNtJLBVE", title: "Struggling With Assurance of Faith — Gospel Counsel" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_salvationassurance_entries";
interface JournalEntry { id: string; date: string; doubt: string; truth: string; turning: string; }

export default function SalvationAssurancePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [form, setForm] = useState({ doubt: "", truth: "", turning: "" });
  const [saved, setSaved] = useState(false);

  function saveEntry() {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      doubt: form.doubt,
      truth: form.truth,
      turning: form.turning,
    };
    const updated = [entry, ...entries].slice(0, 30);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setForm({ doubt: "", truth: "", turning: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Pastoral Care</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          Doubt About Salvation: Assurance of Faith for the Struggling Christian
        </h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          For Christians wrestling with assurance of salvation — including those near death — pastoral theology on the grounds of assurance, the difference between faith and feeling, and the sufficiency of Christ&apos;s work.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: TEXT, cursor: "pointer", fontSize: "0.9rem",
            }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: PURPLE, marginBottom: "0.75rem" }}>{item.title}</h2>
                <p style={{ color: TEXT, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ fontWeight: 700, color: PURPLE }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: "0.875rem" }}>{v.role}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.75 }}>{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700, color: PURPLE, marginBottom: "0.5rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, color: PURPLE, marginBottom: "1.25rem" }}>Private Reflection</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What specific doubt about your salvation are you wrestling with today?</label>
                <textarea value={form.doubt} onChange={(e) => setForm({ ...form, doubt: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What is objectively true about Christ&apos;s work, regardless of your feelings?</label>
                <textarea value={form.truth} onChange={(e) => setForm({ ...form, truth: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>In what small way are you turning toward Christ today, even in doubt?</label>
                <textarea value={form.turning} onChange={(e) => setForm({ ...form, turning: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: 700 }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.875rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.875rem" }}>Delete</button>
                </div>
                {e.doubt && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>Doubt named</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.doubt}</p></>}
                {e.truth && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>Objective truth</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.turning && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>Turning toward Christ</div><p style={{ color: TEXT, lineHeight: 1.6 }}>{e.turning}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {videos.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} style={{ width: "100%", aspectRatio: "16/9" }} />
                <div style={{ padding: "1rem" }}>
                  <p style={{ color: TEXT, fontWeight: 600 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
          <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: "1rem" }}>Crisis & Support Resources</h3>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>988 Suicide & Crisis Lifeline</strong> — Call or text 988. Severe religious doubt and assurance crises can overlap with depression and suicidal ideation.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Your Pastor or Spiritual Director</strong> — Assurance struggles belong in the pastoral relationship. Bring them to a trusted pastor who knows the theological landscape of this particular suffering.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>CCEF</strong> — ccef.org — Christian counseling resources and referrals for those whose assurance crises have escalated into clinical anxiety or depression.
          </p>
        </div>
      </div>
    </div>
  );
}
