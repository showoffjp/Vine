"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "God's Presence Behind Bars",
    body: "Psalm 139 announces that there is nowhere in the universe where God is absent: 'If I make my bed in the depths, you are there.' The prison cell is not an exception. The theological claim is not merely comforting — it is structural. God's presence is not contingent on liberty, reputation, or social acceptability. The incarnation of Jesus — born in borrowed space, executed as a criminal, buried in a borrowed tomb — stands as the supreme declaration that God occupies the lowest and most restricted conditions of human existence.",
  },
  {
    title: "Paul and Silas: Worship in Chains",
    body: "Acts 16 records Paul and Silas, beaten and imprisoned in Philippi, singing hymns at midnight. Their worship was not a performance of spiritual endurance; it was the expression of a faith that had learned to find God in constraint. The earthquake that followed is often the focus of the story, but the worship preceded it. The prison was the place of worship, not just the place from which they escaped. For the incarcerated Christian, this narrative reframes the prison cell: it is a place where God meets people, not a place where God is absent.",
  },
  {
    title: "Identity Beyond Conviction",
    body: "The criminal justice system defines people by their offenses — by their worst moments, their crimes, their sentences. The gospel defines people differently: as beloved children of God, as new creations (2 Corinthians 5:17), as people for whom Christ died while they were yet sinners (Romans 5:8). This is not a denial of responsibility or harm. It is a declaration that no sentence, no record, no label assigned by courts exhausts the truth about a person. Your identity is held by God, and it is not the same as what your file says.",
  },
  {
    title: "The Prison Epistles: Written from a Cell",
    body: "Philippians, Colossians, Ephesians, and Philemon — four of the New Testament's most theologically rich letters — were written from prison. Paul's letter to the Philippians opens with joy ('I always pray with joy,' 1:4) and reaches its famous passage ('I have learned, in whatsoever state I am, therewith to be content,' 4:11) after years of imprisonment. The spiritual formation that produced these letters happened in confinement. Some of the most profound theological reflection in Christian history was written in the same conditions you inhabit.",
  },
  {
    title: "Restitution, Restoration, and the Future",
    body: "Christian faith does not ask you to minimize or ignore the harm you have caused. Genuine repentance includes owning consequences, seeking where possible to make right what was made wrong, and holding the grief of impact honestly. At the same time, the gospel is not silent about the future: the same grace that meets you in the cell has always been future-facing. Zacchaeus's encounter with Jesus led to immediate, practical restitution — and to the declaration 'Today salvation has come to this house.' The future belongs to God, and it includes you.",
  },
];

const voices = [
  {
    name: "Chuck Colson",
    role: "Founder, Prison Fellowship; served federal prison time after Watergate",
    quote: "I found God in prison. Not the God I had been vaguely aware of before — a distant, respectable, middle-class deity — but the living God who meets broken people in the worst places they have ever been.",
  },
  {
    name: "Dietrich Bonhoeffer",
    role: "Theologian executed by the Nazis; author of Letters and Papers from Prison",
    quote: "Nothing can fill the gap when we are away from those we love, and it would be wrong to try to find anything. We must simply hold out and win through. That sounds very hard at first, but at the same time it is a great consolation.",
  },
  {
    name: "Brenda Salter McNeil",
    role: "Author and reconciliation scholar",
    quote: "Mass incarceration in America is not a race-neutral phenomenon. The church that takes Jesus seriously cannot be indifferent to a system that disproportionately removes people of color from families, communities, and futures.",
  },
  {
    name: "Bryan Stevenson",
    role: "Author, Just Mercy; founder, Equal Justice Initiative",
    quote: "Each of us is more than the worst thing we have ever done. If someone tells a lie, they are not just a liar. If you take something that does not belong to you, you are not just a thief. Even if you kill someone, you are not just a killer.",
  },
];

const practices = [
  {
    title: "Establish a Daily Prayer Anchor",
    body: "The structure of incarceration — which removes so many choices — can become the container for a consistent prayer life. Morning and evening prayer, the Daily Office in whatever form you can access, and written prayer journals are practices that have shaped Christians through every form of confinement throughout history. Choose a time, choose a practice, and let the structure of your day hold it.",
  },
  {
    title: "Engage Prison Ministry Programs",
    body: "Prison Fellowship, Kairos Prison Ministry, and Innerchange Freedom Initiative are among the best-resourced Christian ministry programs available inside correctional facilities. If your facility has them, engage. These programs offer community, Scripture study, mentorship, and connection to networks that extend beyond the walls. If they are not available, request them through your chaplain.",
  },
  {
    title: "Use Education and Skill Programs",
    body: "Many correctional facilities offer GED programs, vocational training, college courses, and reentry preparation. These are not just practical investments; they are the stewarding of your God-given mind and capacity. Use every resource available to you. The time of incarceration, however unwanted, can be a time of genuine formation.",
  },
  {
    title: "Maintain Family Connections",
    body: "If you have children, a spouse, or parents who are willing to maintain contact, prioritize those relationships. Consistent letters, calls, and visits — even in limited form — are among the most powerful predictors of successful reintegration. Your family relationships are not forfeited by incarceration. They require investment and honesty, but they are worth protecting.",
  },
  {
    title: "Prepare for Reentry Before Release",
    body: "Reentry planning — housing, employment, support community, church connection — should begin as early as possible, not in the final weeks before release. Reentry organizations, halfway house networks, and church-based reintegration programs are most effective when engaged early. The shock of release is real; preparation reduces it.",
  },
  {
    title: "Find a Spiritual Director or Mentor",
    body: "Whether through your chaplain, a Prison Fellowship mentor, or a pastor who visits, find someone to walk this road with you spiritually. The isolation of incarceration can impede spiritual growth without relationship. You were not designed to grow in Christ alone.",
  },
];

const scriptures = [
  { ref: "Psalm 139:7-8", text: "Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
  { ref: "Acts 16:25", text: "About midnight Paul and Silas were praying and singing hymns to God, and the other prisoners were listening to them." },
  { ref: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
  { ref: "Philippians 4:11-12", text: "I have learned to be content whatever the circumstances. I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation." },
  { ref: "Isaiah 61:1", text: "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners." },
  { ref: "Matthew 25:36", text: "I needed clothes and you clothed me, I was sick and you looked after me, I was in prison and you came to visit me." },
];

const videos = [
  { videoId: "CqYIqMNkpPA", title: "Chuck Colson: Finding God in Prison" },
  { videoId: "IKo9G7VCuAo", title: "Kairos Prison Ministry: Transformed by Love" },
  { videoId: "2RxbJkwg3qE", title: "Prison Fellowship: Restoring Lives Behind Bars" },
  { videoId: "C3q5MNPFMZY", title: "Bryan Stevenson: Just Mercy and the Gospel" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_incarceratedchristian_entries";
interface JournalEntry { id: string; date: string; today: string; identity: string; future: string; }

export default function IncarceratedChristianPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [form, setForm] = useState({ today: "", identity: "", future: "" });
  const [saved, setSaved] = useState(false);

  function saveEntry() {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: form.today,
      identity: form.identity,
      future: form.future,
    };
    const updated = [entry, ...entries].slice(0, 30);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setForm({ today: "", identity: "", future: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Pastoral Care</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          Faith Behind Bars: Pastoral Care for Incarcerated Christians
        </h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          For Christians in prison or jail — finding God in confinement, holding identity beyond conviction, and preparing for the future with the resources of faith.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: TEXT, cursor: "pointer", fontSize: "0.9rem",
            }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: GREEN, marginBottom: "0.75rem" }}>{item.title}</h2>
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
                <div style={{ fontWeight: 700, color: GREEN }}>{v.name}</div>
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
                  <div style={{ background: GREEN, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
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
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, color: GREEN, marginBottom: "1.25rem" }}>Private Reflection</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>Where have you sensed God&apos;s presence today?</label>
                <textarea value={form.today} onChange={(e) => setForm({ ...form, today: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What does God say about who you are, apart from your record?</label>
                <textarea value={form.identity} onChange={(e) => setForm({ ...form, identity: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What future are you hoping for? What is one step toward it?</label>
                <textarea value={form.future} onChange={(e) => setForm({ ...form, future: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: 700 }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.875rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.875rem" }}>Delete</button>
                </div>
                {e.today && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>God&apos;s presence today</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.today}</p></>}
                {e.identity && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>My identity in God</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.identity}</p></>}
                {e.future && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>Hope for the future</div><p style={{ color: TEXT, lineHeight: 1.6 }}>{e.future}</p></>}
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
          <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: "1rem" }}>Crisis & Support Resources</h3>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>988 Suicide & Crisis Lifeline</strong> — Call or text 988. Incarcerated individuals face significantly elevated mental health crisis risk.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Prison Fellowship</strong> — prisonfellowship.org — Largest Christian prison ministry in the US; in-prison programs and reentry support.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Kairos Prison Ministry</strong> — kairosprisonministry.org — Volunteer-based Christian community within prisons worldwide.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Your Prison Chaplain</strong> — The chaplain at your facility is a direct access point to spiritual care, programming referrals, and crisis support.
          </p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
