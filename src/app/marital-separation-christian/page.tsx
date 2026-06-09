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
    title: "Separation Is Not Automatically Divorce",
    verse: "1 Corinthians 7:10–11",
    text: "Paul writes: 'A wife must not separate from her husband. But if she does, she must remain unmarried or else be reconciled to her husband.' Marital separation as a distinct category — not divorce, but not normal marriage — exists in Scripture. It is not sin; in cases of danger or unrepentant hardness of heart, it may be wisdom.",
  },
  {
    title: "The God Who Holds What Is Breaking",
    verse: "Psalm 147:3",
    text: "'He heals the brokenhearted and binds up their wounds.' The God of the Bible is not a marriage administrator — he is a healer. Whether separation leads to reconciliation or divorce, God is present in the wound of a breaking marriage, binding up, not turning away.",
  },
  {
    title: "When Safety Matters More Than Marriage Optics",
    verse: "Proverbs 22:3",
    text: "'The prudent see danger and take refuge, but the simple keep going and pay the penalty.' Separation in situations of abuse, addiction, or persistent danger is not a failure of faith — it is the exercise of prudence that Scripture commends. Safety is not a lesser concern than marital unity.",
  },
  {
    title: "Holding the Possibility of Reconciliation",
    verse: "Romans 12:18",
    text: "'If it is possible, as far as it depends on you, live at peace with everyone.' Paul's language about reconciliation is qualified: as far as it depends on you, if it is possible. This does not require the impossible. It requires the genuine willingness — which only you, with your pastor and counselor, can assess.",
  },
  {
    title: "God in the Ambiguity of Not Knowing",
    verse: "Proverbs 3:5–6",
    text: "'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.' The in-between season of separation — when the future is genuinely unknown — is itself a context for trust. God is not absent from the threshold.",
  },
];

const voices = [
  {
    id: 1,
    name: "Leslie Vernick",
    role: "Author, The Emotionally Destructive Marriage; Counselor",
    quote: "Separation can be an act of love — love for yourself, love for your children, and sometimes even love for your spouse who needs to wake up.",
    bio: "Leslie Vernick works specifically with marriages where one partner has been emotionally or physically abusive. She challenges the church's sometimes harmful insistence that separation is always faithlessness, and makes a careful case for when separation is the most loving and appropriate response.",
  },
  {
    id: 2,
    name: "Gary Thomas",
    role: "Author, Sacred Marriage & When to Walk Away",
    quote: "Sometimes the most sacred thing you can do is protect yourself and your children. God's design for marriage does not require you to be destroyed by it.",
    bio: "Gary Thomas, who wrote the classic book arguing that marriage is primarily about holiness not happiness, surprised many readers with his later work on when leaving is appropriate. He argues that Christian faithfulness can sometimes require the courage to separate.",
  },
  {
    id: 3,
    name: "Paul David Tripp",
    role: "Author, Marriage: 6 Gospel Commitments",
    quote: "Crisis in marriage is never wasted if it leads both people to face the truth about themselves. Separation can be the crisis that makes that possible.",
    bio: "Paul David Tripp approaches marital crisis through the lens of gospel honesty. He sees separation, handled well, as potentially creating the confrontation with reality that years of managed dysfunction could not — provided both parties are genuinely willing to face what is true.",
  },
  {
    id: 4,
    name: "Diane Langberg",
    role: "Clinical Psychologist; Author, Redeeming Power",
    quote: "No theology of marriage requires a person to remain in physical danger. No Scripture supports the idea that enduring abuse is a form of faithfulness.",
    bio: "Diane Langberg is among the clearest voices in the Christian world on the intersection of abuse, power, and marriage. Her clinical and theological work directly addresses situations where separation is not just permitted but necessary — and helps churches respond appropriately.",
  },
];

const practices = [
  {
    icon: "🛡️",
    title: "Safety Planning Before Anything Else",
    text: "If separation is precipitated by danger, abuse, or threat, your first task is a safety plan: where will you go, who knows, what do you need to take with you, who will care for children. Contact the National Domestic Violence Hotline (1-800-799-7233) before you need it, even as preparation.",
  },
  {
    icon: "⚖️",
    title: "Legal Clarity About Your Situation",
    text: "Even in a separation you hope will lead to reconciliation, understanding your legal rights — regarding housing, finances, children, and protection orders — is wisdom. Consult a family law attorney for one session. Legal knowledge protects you and your children without prejudging reconciliation.",
  },
  {
    icon: "🧑‍⚕️",
    title: "Your Own Counselor — Not Couples Therapy First",
    text: "In a separation, especially one involving abuse or power imbalance, begin with individual therapy — not couples counseling. Couples therapy requires approximate safety and equality. Individual therapy gives you a space to understand your own experience, make decisions, and grow regardless of what your spouse does.",
  },
  {
    icon: "🙏",
    title: "Prayer for Clarity, Not Just Resolution",
    text: "In the ambiguity of separation, resist praying only for reconciliation or only for finality. Pray for clarity — to see your marriage, yourself, and your spouse as they actually are. Ask for wisdom (James 1:5) before asking for a particular outcome. God gives wisdom generously.",
  },
  {
    icon: "🤝",
    title: "Build Your Support Network Carefully",
    text: "Choose one or two people who can be confidential supports — not cheerleaders for a particular outcome, but honest, prayerful friends. Beware well-meaning advice that rushes toward either reconciliation or divorce without understanding your actual situation. Your story is specific.",
  },
  {
    icon: "📖",
    title: "Maintain Your Own Spiritual Practices",
    text: "In the upheaval of separation, your own formation can collapse. Protect your prayer time, your Bible reading, your attendance at worship — not as performance, but because you need the anchor. If your usual church community feels too complicated, find another congregation where you can simply worship.",
  },
];

const scriptures = [
  { verse: "Psalm 147:3", text: "He heals the brokenhearted and binds up their wounds." },
  { verse: "Proverbs 3:5–6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." },
  { verse: "James 1:5", text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you." },
  { verse: "Isaiah 43:18–19", text: "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
];

type MSEntry = { id: string; date: string; today: string; need: string; prayer: string };

export default function MaritalSeparationChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MSEntry[]>([]);
  const [today, setToday] = useState("");
  const [need, setNeed] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_maritalseparationchristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!today.trim() && !need.trim() && !prayer.trim()) return;
    const entry: MSEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: today.trim(),
      need: need.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_maritalseparationchristj_entries", JSON.stringify(updated));
    setToday(""); setNeed(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_maritalseparationchristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌫️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Marital Separation & Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For Christians in the painful in-between of marital separation — seeking wisdom, safety,
            clarity, and the God who is present in what is not yet resolved.
          </p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a2020", borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", margin: "0 0 0.5rem" }}>If you are in danger:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            DV Hotline: <strong style={{ color: TEXT }}>1-800-799-7233</strong> |{" "}
            <a href="https://www.thehotline.org" style={{ color: PURPLE }}>thehotline.org</a> |{" "}
            <a href="https://www.focusonthefamily.com/marriage" style={{ color: PURPLE }}>focusonthefamily.com/marriage</a> |{" "}
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
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Where are you today — in your heart, your situation, your clarity?</label>
              <textarea value={today} onChange={(e) => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What do you most need right now?</label>
              <textarea value={need} onChange={(e) => setNeed(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for wisdom and your next step:</label>
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
                    {e.today && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Today: </span>{e.today}</p>}
                    {e.need && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Need: </span>{e.need}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="kfcVPh2VDhQ" title="When Marriages Are in Crisis — Finding the Way Through" />
            <VideoEmbed videoId="G5gLrHClpKQ" title="Separation, Safety, and the Gospel" />
            <VideoEmbed videoId="NnGBhG03g4M" title="Christian Wisdom for Hard Marriage Seasons" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for the Uncertain Season" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
