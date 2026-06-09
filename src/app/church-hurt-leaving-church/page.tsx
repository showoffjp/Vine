"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The Church Is Not God",
    verse: "Acts 5:29",
    text: "'We must obey God rather than human beings.' Peter said this to religious leaders who were abusing their authority. The church is a human institution made of sinners, and it fails — sometimes catastrophically. Being hurt by the church does not mean being abandoned by God. God and the church are not the same thing.",
  },
  {
    title: "Leaving Can Be Faithfulness",
    verse: "Matthew 18:15–17",
    text: "Jesus's process for addressing sin in the community ends with the possibility of departure: 'treat them as you would a pagan or a tax collector.' Leaving a church that has refused accountability for harm done is not apostasy — it can be the same response Jesus authorized. Not every church departure is failure.",
  },
  {
    title: "The Wound Is Real",
    verse: "Psalm 55:12–14",
    text: "'If an enemy were insulting me, I could endure it... But it is you, a man like myself, my companion, my close friend, with whom I once enjoyed sweet fellowship.' Betrayal by people who were supposed to be safe — pastors, elders, communities — is a specific and profound wound. The Psalmist names it. So should we.",
  },
  {
    title: "Judgment Belongs to God",
    verse: "Romans 12:19",
    text: "'Do not take revenge, my dear friends, but leave room for God's wrath, for it is written: It is mine to avenge; I will repay, says the Lord.' For those who have been harmed by a church and seen no accountability, the conviction that God sees and will act is not naive — it is essential. You do not need to secure justice to pursue your own healing.",
  },
  {
    title: "The Smaller Table as Sacred Space",
    verse: "Matthew 18:20",
    text: "'For where two or three gather in my name, there am I with them.' The church as institutional organization is not the only form in which Christ is present. Small, informal, honest communities of faith have always been sites of genuine encounter with God. The person who cannot return to an institution may still find the body of Christ.",
  },
];

const voices = [
  {
    id: 1,
    name: "Scot McKnight & Laura Barringer",
    role: "Authors, A Church Called Tov",
    quote: "Churches that harm people do so by normalizing toxic culture. Recovery requires naming what happened accurately — not softening it for the institution's sake.",
    bio: "Scot McKnight and Laura Barringer's work on toxic church cultures names specific patterns — favoritism, silencing, image protection — that cause harm and enable abuse. Their theological analysis helps survivors understand that what happened to them was not normal Christianity; it was a distortion of it.",
  },
  {
    id: 2,
    name: "Chuck DeGroat",
    role: "Author, When Narcissism Comes to Church",
    quote: "Leaving a harmful church is not giving up on Jesus. It may be the most faithful thing you can do.",
    bio: "Chuck DeGroat has worked with hundreds of survivors of church hurt. His pastoral and psychological work helps people distinguish between their relationship with God and their relationship with a particular institution — and gives theological permission for the separation when necessary.",
  },
  {
    id: 3,
    name: "Wade Mullen",
    role: "Author, Something's Not Right",
    quote: "Institutions protect themselves by making victims feel responsible for the harm they experienced. Survivors must learn to trust their own experience.",
    bio: "Wade Mullen's research on institutional betrayal in religious organizations is essential for anyone trying to understand what happened to them in a harmful church. He names the specific tactics — blame-shifting, minimization, public image management — used to silence survivors.",
  },
  {
    id: 4,
    name: "Tish Harrison Warren",
    role: "Author, Liturgy of the Ordinary; Anglican Priest",
    quote: "The church is full of people who have been wounded by the church. The question is whether we can hold both the wound and the hope.",
    bio: "Tish Harrison Warren writes about the ordinary practices of Christian life with deep honesty. Her work gives language to people who are disillusioned with the church but still feel something pulling them toward faith — even if they cannot yet return to an institutional form of it.",
  },
];

const practices = [
  {
    icon: "🛑",
    title: "Name What Happened — Specifically",
    text: "Church hurt often arrives wrapped in spiritual language that makes it hard to name: 'Submit to your leaders,' 'Don't touch God's anointed,' 'You're being divisive.' Name what actually happened, in concrete terms, to a therapist or trusted friend. Naming breaks the power of the spiritual framing.",
  },
  {
    icon: "🧑‍⚕️",
    title: "Find a Therapist Familiar with Religious Trauma",
    text: "Religious trauma has specific features — authority, shame, community loss, spiritual confusion — that require a therapist familiar with faith contexts. Organizations like the Religious Trauma Institute or CCEF (for Christian counseling) can help you find appropriate support.",
  },
  {
    icon: "🕯️",
    title: "Maintain a Minimal Spiritual Practice",
    text: "After leaving a harmful church, spiritual practice often feels impossible or contaminated. Start very small: reading one Psalm slowly, holding ten minutes of silence. Don't force institutional forms. The goal is staying connected to the thread of your own relationship with God while the wound heals.",
  },
  {
    icon: "🤝",
    title: "Find Your Small Honest Community",
    text: "The institutional church is not the only option. Find two or three people who are honest about their faith, who will not perform wellness or demand your recovery before your welcome. A dinner table, a walk, a text chain — small honest community has always been a legitimate form of the body of Christ.",
  },
  {
    icon: "📖",
    title: "Distinguish God from the Institution",
    text: "One of the most important cognitive and spiritual tasks after church hurt is separating God from the church that hurt you. This may require sustained work with a spiritual director. Read theologians and mystics who found God outside and sometimes against the institutional church: Julian of Norwich, Thomas Merton, Simone Weil.",
  },
  {
    icon: "⏰",
    title: "Give Yourself Permission to Take Time",
    text: "Recovery from church hurt does not have a timeline. Do not let anyone — including well-meaning Christians — rush you back into institutional church participation before you are ready. There is no spiritual failure in taking years to find a safe community. Your pace is appropriate to your wound.",
  },
];

const scriptures = [
  { verse: "Psalm 55:12–14", text: "If an enemy were insulting me, I could endure it... But it is you, a man like myself, my companion, my close friend, with whom I once enjoyed sweet fellowship at God's house." },
  { verse: "Matthew 18:20", text: "For where two or three gather in my name, there am I with them." },
  { verse: "Isaiah 43:18–19", text: "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness." },
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." },
  { verse: "Romans 8:38–39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers... will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Hebrews 10:25", text: "And let us not give up meeting together, as some are in the habit of doing, but let us encourage one another — and all the more as you see the Day approaching." },
];

type CHEntry = { id: string; date: string; name: string; God: string; prayer: string };

export default function ChurchHurtLeavingChurchPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CHEntry[]>([]);
  const [name, setName] = useState("");
  const [God, setGod] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_churchhurtleavingchurchj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!name.trim() && !God.trim() && !prayer.trim()) return;
    const entry: CHEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      name: name.trim(),
      God: God.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_churchhurtleavingchurchj_entries", JSON.stringify(updated));
    setName(""); setGod(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_churchhurtleavingchurchj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🚪</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Church Hurt & Leaving Church
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those wounded by the church — by leaders, communities, or institutions — navigating
            the loss, the anger, and the question of what faith looks like from here.
          </p>
        </div>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Support resources:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.netgrace.org" style={{ color: PURPLE }}>netgrace.org (Religious abuse)</a> |{" "}
            <a href="https://www.religioustrauma.com" style={{ color: PURPLE }}>religioustrauma.com</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: TEXT, cursor: "pointer", fontSize: "0.875rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.25rem" }}>{v.name}</h3>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ color: TEXT, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Name one specific thing that happened to you in the church that was wrong:</label>
              <textarea value={name} onChange={(e) => setName(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What do you still believe about God — despite everything?</label>
              <textarea value={God} onChange={(e) => setGod(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer — even an angry or uncertain one:</label>
              <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((e) => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                    </div>
                    {e.name && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Named: </span>{e.name}</p>}
                    {e.God && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Still believe: </span>{e.God}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="j2h-q3ZPKFI" title="Church Hurt — How to Heal and What Comes Next" />
            <VideoEmbed videoId="NnGBhG03g4M" title="Toxic Church Culture — Naming and Leaving It" />
            <VideoEmbed videoId="ZGk1hl1nNrw" title="Finding God After Church Hurt" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Those Who Have Been Wounded by the Church" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
