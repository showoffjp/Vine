"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Disease and the Sin",
    verse: "Romans 7:15",
    text: "\"For I do not understand my own actions. For I do not do what I want, but I do the very thing I hate.\" Paul's description of the will in conflict with itself is the most accurate phenomenological account of addiction in ancient literature. Alcohol use disorder is both a physiological condition of altered brain chemistry and a moral condition involving the will. Both realities are true and neither excuses the other — but a theology of addiction that ignores the physiological reality will produce inadequate pastoral care."
  },
  {
    title: "Sobriety as Restoration of Shalom",
    verse: "John 10:10",
    text: "\"I came that they may have life and have it abundantly.\" The abundant life Christ promises is not just eternal life — it is the restoration of a full human existence: relationships, work, worship, dignity, clarity of mind. Alcoholism strips these away systematically. Sobriety is not just the absence of drinking; it is the slow restoration of what was taken. Every day of recovery is an entry into the abundant life Jesus came to give."
  },
  {
    title: "Confession and Accountability as Healing",
    verse: "James 5:16",
    text: "\"Therefore, confess your sins to one another and pray for one another, that you may be healed.\" The 12-step model — with its emphasis on confession, community, and accountability — is deeply congruent with James's prescription for healing. The person in recovery who has a sponsor, attends meetings, and practices rigorous honesty with their community is practicing something very close to what James calls for."
  },
  {
    title: "Shame Does Not Produce Sobriety",
    verse: "Romans 8:1",
    text: "\"There is therefore now no condemnation for those who are in Christ Jesus.\" Shame is one of the primary relapse triggers for those in recovery. The church that responds to alcoholism with moral condemnation is not protecting the person from drinking — it is driving them back to the bottle. No condemnation does not mean no consequence; it means the person is not written off, not dismissed, not beyond the reach of grace."
  },
  {
    title: "Community Is the Environment for Recovery",
    verse: "Ecclesiastes 4:10",
    text: "\"For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up.\" Isolation is one of the most dangerous conditions for addiction. The social environment of recovery — AA meetings, sponsors, a sober community — is not optional for most people in early recovery. The church can be this community if it is willing to be honestly present rather than managing from a distance."
  }
];

const voices = [
  {
    id: "v1", name: "Brennan Manning", role: "Author, 'The Ragamuffin Gospel'; Alcoholic in Recovery",
    quote: "The Gospel says that God loves you as you are, not as you should be. Since none of us is as we should be, that is very good news — especially for those of us who have made a wreck of our lives.",
    bio: "Brennan Manning was a Catholic priest and author who struggled openly with alcoholism his entire adult life. His books — especially 'The Ragamuffin Gospel' and 'All Is Grace' — are the most honest account of grace in addiction and recovery written from inside the Christian tradition."
  },
  {
    id: "v2", name: "John Baker", role: "Founder, Celebrate Recovery",
    quote: "Celebrate Recovery was born from my own struggles with alcoholism. I needed more than a 12-step program — I needed Christ at the center of recovery. That is what CR provides.",
    bio: "John Baker founded Celebrate Recovery at Saddleback Church as a Christ-centered 12-step program for all forms of addiction and 'hurts, habits, and hangups.' CR is now in thousands of churches and has helped millions find recovery grounded in the grace and power of Jesus Christ."
  },
  {
    id: "v3", name: "Edward T. Welch", role: "Counselor, CCEF; Author of 'Crossroads: A Step-by-Step Guide Away from Addiction'",
    quote: "Addiction is essentially the problem of finding life in created things rather than the Creator. Recovery is learning, slowly and painfully, to find life in the right place.",
    bio: "Ed Welch's biblical counseling approach to addiction is theologically serious and practically grounded. His book 'Crossroads' provides a step-by-step guide for those in recovery that integrates honest engagement with the physiology of addiction with the spiritual resources of Christian faith."
  },
  {
    id: "v4", name: "William Cope Moyers", role: "Journalist, Son of Bill Moyers; Alcoholic in Recovery",
    quote: "Recovery is not a destination. It is a daily practice of honesty, accountability, and the willingness to receive help. It never ends. Neither does the grace.",
    bio: "William Cope Moyers, son of journalist Bill Moyers, has written and spoken candidly about his recovery from alcohol and drug addiction. His memoir 'Broken: My Story of Addiction and Redemption' is one of the most honest first-person accounts of addiction and recovery available."
  }
];

const practices = [
  {
    icon: "🏥",
    title: "Medical Detox First",
    text: "Alcohol withdrawal can be life-threatening. Anyone who has been drinking heavily should not stop suddenly without medical supervision. Detox must happen in a medical setting. Contact your doctor, an addiction medicine specialist, or a hospital emergency room. This is not optional."
  },
  {
    icon: "👥",
    title: "AA or Celebrate Recovery",
    text: "Alcoholics Anonymous (aa.org) and Celebrate Recovery (celebraterecovery.com) offer peer support groups that have sustained millions in recovery. AA's 12 steps are the most empirically supported intervention for alcohol use disorder. Celebrate Recovery provides the same framework with Christ explicitly at the center. Attend both if possible."
  },
  {
    icon: "🧠",
    title: "A Therapist Trained in Addiction",
    text: "Individual therapy with a licensed counselor who has training in addiction (LCADC, LADC, or CSAT) is the standard of care for alcohol use disorder. Therapy addresses the underlying pain, trauma, and patterns that drove the drinking. A sponsor is not a substitute for therapy and therapy is not a substitute for a sponsor — you need both."
  },
  {
    icon: "💊",
    title: "Medication-Assisted Treatment",
    text: "Medications like naltrexone, acamprosate, and disulfiram reduce cravings and relapse rates significantly. There is no spiritual virtue in refusing medication for a medical condition. Work with your doctor or addiction medicine specialist about whether medication is appropriate for your recovery."
  },
  {
    icon: "✝️",
    title: "Tell Your Pastor or Small Group",
    text: "Coming out of secrecy about alcoholism is one of the most healing steps in recovery. Find a pastor or small group that can hold your recovery with prayer, accountability, and practical support — rides to meetings, check-in texts, someone to call on hard nights. Be specific about what you need."
  },
  {
    icon: "📿",
    title: "One Day at a Time — In Prayer",
    text: "The AA practice of 'one day at a time' is a profound spiritual discipline. Commit each day specifically to God in the morning and report to God each evening. The Serenity Prayer — attributed to Reinhold Niebuhr and adopted by AA — is itself a daily prayer of surrender that grounds recovery in theology."
  }
];

const scriptures = [
  { verse: "Romans 7:15", text: "For I do not understand my own actions. For I do not do what I want, but I do the very thing I hate." },
  { verse: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." },
  { verse: "James 5:16", text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working." },
  { verse: "1 Corinthians 6:12", text: "'All things are lawful for me,' but not all things are helpful. 'All things are lawful for me,' but I will not be dominated by anything." },
  { verse: "Ecclesiastes 4:10", text: "For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up!" },
  { verse: "John 10:10", text: "The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly." }
];

type AaEntry = { id: string; date: string; day: string; gratitude: string; prayer: string };

export default function AlcoholAddictionRecoveryChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AaEntry[]>([]);
  const [day, setDay] = useState("");
  const [gratitude, setGratitude] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_alcoholrecoverychristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!day.trim()) return;
    const entry: AaEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), day, gratitude, prayer };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_alcoholrecoverychristj_entries", JSON.stringify(updated));
    setDay(""); setGratitude(""); setPrayer("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_alcoholrecoverychristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕊️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>Alcohol Recovery &amp; Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For Christians in recovery from alcoholism — finding the abundant life Jesus promised, one day at a time, with grace sufficient for every single one.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Crisis &amp; Support:</strong> 988 Lifeline (call/text 988) &bull; SAMHSA: 1-800-662-4357 &bull; AA: aa.org &bull; Celebrate Recovery: celebraterecovery.com &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Daily Recovery Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>How was today — honestly?</label>
                  <textarea value={day} onChange={e => setDay(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I grateful for in sobriety today?</label>
                  <textarea value={gratitude} onChange={e => setGratitude(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>My prayer for tomorrow:</label>
                  <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.day && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Today:</strong> {e.day}</p>}
                {e.gratitude && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Grateful for:</strong> {e.gratitude}</p>}
                {e.prayer && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>The Ragamuffin Gospel: Brennan Manning</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Brennan Manning on grace, addiction, and the God who loves us as we are — not as we should be</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="The Ragamuffin Gospel: Brennan Manning" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Celebrate Recovery</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>John Baker on why CR exists and what Christ-centered recovery offers that secular programs cannot</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Celebrate Recovery" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>No Condemnation in Recovery</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>How the gospel removes shame and makes recovery possible — and why shame drives relapse</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="No Condemnation in Recovery" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>One Day at a Time</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>The spirituality of present-moment recovery and the grace that is new every morning</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="One Day at a Time" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
