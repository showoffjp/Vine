"use client";
import { useState, useEffect } from "react";
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
    title: "God Sees the Manipulation You Were Not Allowed to Name",
    verse: "Genesis 16:13",
    text: "Hagar, exploited and dismissed by those who used her, received a divine visitation: 'You are the God who sees me.' Narcissistic abuse thrives on the victim's invisibility — the erasure of their perception, their experience, their reality. God sees what the abuser made you doubt you saw.",
  },
  {
    title: "Truth-Telling as Faithfulness",
    verse: "Ephesians 4:25",
    text: "'Therefore each of you must put off falsehood and speak truthfully to your neighbor.' Narcissistic abuse systems depend on silence, false narrative, and the victim's compliance with distorted reality. Speaking the truth — to yourself, to a therapist, to a trusted person — is not disloyalty. It is the faithfulness that recovery requires.",
  },
  {
    title: "Boundaries Are Not Unchristian",
    verse: "Proverbs 4:23",
    text: "'Above all else, guard your heart, for everything you flow from it.' Guarding your heart is not selfishness — it is wisdom. Narcissistic abuse frequently weaponizes Christian teaching about forgiveness, self-denial, and humility to keep victims compliant. Scripture itself authorizes the protection of your inner life from those who harm it.",
  },
  {
    title: "Forgiveness Is Not Reconciliation",
    verse: "Matthew 18:17",
    text: "Jesus gives a process for dealing with someone who refuses to be reconciled and names the endpoint: 'treat them as you would a pagan or a tax collector.' Forgiveness is the internal release of a debt. Reconciliation requires two parties willing to live in truthful relationship. You can forgive someone and never return to them.",
  },
  {
    title: "You Were Made in the Image of God",
    verse: "Genesis 1:27",
    text: "Narcissistic abuse systematically dismantles the victim's sense of dignity, worth, and identity. The theological counter is not self-help language but the most foundational statement of Christian anthropology: you bear the image of God. That image is not diminished by what was done to you.",
  },
];

const voices = [
  {
    id: 1,
    name: "Chuck DeGroat",
    role: "Author, When Narcissism Comes to Church; Therapist",
    quote: "Narcissism is a theological problem, not just a psychological one. It is the refusal of creaturely dependence — the idolatry of the self.",
    bio: "Chuck DeGroat's work specifically addresses narcissism in church and ministry contexts. He helps both survivors and institutions understand the theological roots of narcissistic behavior and the specific harm it does in Christian communities where power and spiritual language are weaponized.",
  },
  {
    id: 2,
    name: "Diane Langberg",
    role: "Clinical Psychologist & Author, Redeeming Power",
    quote: "Narcissistic abuse is abuse of power. It uses your faith, your love, your dependency against you. Recovery requires naming it for what it is.",
    bio: "Diane Langberg has decades of experience treating survivors of abuse, including narcissistic abuse in religious contexts. Her clinical work and theological writing are essential for Christian survivors who need both psychological understanding and theological permission to name what happened to them.",
  },
  {
    id: 3,
    name: "Leslie Vernick",
    role: "Author, The Emotionally Destructive Relationship; Counselor",
    quote: "You are not required to participate in your own destruction in the name of love or faithfulness.",
    bio: "Leslie Vernick works specifically with people in emotionally destructive relationships — including those with narcissistic partners, parents, or leaders. Her work gives Christian survivors permission to set limits, leave, and rebuild — without the guilt that distorted theology has imposed.",
  },
  {
    id: 4,
    name: "Wade Mullen",
    role: "Author, Something's Not Right; Researcher",
    quote: "Abuse systems are maintained by the silence of the victim and the protection of the institution. Recovery begins when the survivor decides to trust their own perception.",
    bio: "Wade Mullen's research on how institutions — including churches — protect abusers is essential for survivors navigating recovery in religious contexts. He names the specific tactics used to silence victims and helps survivors trust what they experienced.",
  },
];

const practices = [
  {
    icon: "🧑‍⚕️",
    title: "Trauma-Informed Therapy — Not Couples Counseling",
    text: "Narcissistic abuse recovery requires a therapist trained in trauma and narcissistic abuse — ideally familiar with coercive control. Couples counseling with an abuser is typically harmful; it gives them a new arena to manipulate. Pursue individual therapy first and follow your therapist's guidance on any joint work.",
  },
  {
    icon: "📝",
    title: "Keep a Private, Honest Record",
    text: "Narcissistic abuse includes gaslighting — making you doubt your perception of events. Keep a private journal (digital or physical, secured) of specific incidents: dates, words said, what happened after. This record protects your grip on reality and may be necessary for legal or pastoral accountability processes.",
  },
  {
    icon: "🛡️",
    title: "Name Your Experiences Without Minimizing",
    text: "Survivors of narcissistic abuse often minimize their experience: 'It wasn't that bad,' 'They didn't mean it,' 'I must have provoked it.' Practice naming your experience with a therapist without qualifying it. 'This happened. It was wrong. It hurt me.' Naming is the beginning of healing.",
  },
  {
    icon: "🤝",
    title: "Rebuild Your Sense of Self With Safe People",
    text: "Narcissistic abuse erodes identity. Healing happens in safe relationships where you are seen, believed, and valued. Find people — a therapist, a support group, a careful friend — who will reflect your worth back to you without agenda. Being seen accurately by a safe person is restorative.",
  },
  {
    icon: "📖",
    title: "Read Survivor Literature and Theology",
    text: "Read Leslie Vernick, Chuck DeGroat, Diane Langberg, Wade Mullen. Let experts name what happened to you in language that validates your experience. Many survivors have not yet found the words; books like these provide them — and reduce the isolation of a private wound.",
  },
  {
    icon: "🙏",
    title: "Reclaim Prayer as Private and Yours",
    text: "If spiritual language was used against you, prayer may feel contaminated. Begin with the simplest forms: a Psalm read silently, a one-sentence honest prayer, silence held before God. Reclaiming your own spiritual life — not mediated by an abuser — is part of recovery. This prayer belongs to you.",
  },
];

const scriptures = [
  { verse: "Genesis 16:13", text: "She gave this name to the Lord who spoke to her: 'You are the God who sees me,' for she said, 'I have now seen the One who sees me.'" },
  { verse: "Proverbs 4:23", text: "Above all else, guard your heart, for everything you do flows from it." },
  { verse: "Isaiah 54:4", text: "Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Galatians 5:1", text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery." },
];

type NAREntry = { id: string; date: string; name: string; true1: string; prayer: string };

export default function NarcissisticAbuseRecoveryChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<NAREntry[]>([]);
  const [name, setName] = useState("");
  const [true1, setTrue1] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_narcissisticabuserecoverychristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!name.trim() && !true1.trim() && !prayer.trim()) return;
    const entry: NAREntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      name: name.trim(),
      true1: true1.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_narcissisticabuserecoverychristj_entries", JSON.stringify(updated));
    setName(""); setTrue1(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_narcissisticabuserecoverychristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌱</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Narcissistic Abuse Recovery & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For Christians recovering from narcissistic abuse — in marriage, family, or church —
            reclaiming your perception, your worth, and the God who always saw you.
          </p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a2020", borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", margin: "0 0 0.5rem" }}>If you are in danger:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            DV Hotline: <strong style={{ color: TEXT }}>1-800-799-7233</strong> |{" "}
            <a href="https://www.thehotline.org" style={{ color: GREEN }}>thehotline.org</a> |{" "}
            <a href="https://www.netgrace.org" style={{ color: GREEN }}>netgrace.org (Religious abuse)</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: TEXT, cursor: "pointer", fontSize: "0.875rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
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
                <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
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
                <div style={{ color: GREEN, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>This journal is private, stored only on your device. Write only what feels safe to name today.</p>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Name one thing that happened to you that you have been minimizing:</label>
              <textarea value={name} onChange={(e) => setName(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What is one true thing about yourself that you want to reclaim?</label>
              <textarea value={true1} onChange={(e) => setTrue1(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for your healing and your freedom:</label>
              <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>
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
                    {e.true1 && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Reclaiming: </span>{e.true1}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="j2h-q3ZPKFI" title="Narcissism in the Church — Chuck DeGroat" />
            <VideoEmbed videoId="NnGBhG03g4M" title="Recovering from Narcissistic Abuse — A Christian Perspective" />
            <VideoEmbed videoId="oNpTha80yyE" title="Redeeming Power — Diane Langberg on Abuse" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Survivors of Narcissistic Abuse" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
