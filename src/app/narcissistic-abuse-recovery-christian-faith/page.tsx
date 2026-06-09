"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "What Happened to You Was Wrong",
    body: "If you were in a relationship with a narcissistic or coercively controlling person — whether a spouse, parent, pastor, or boss — the first thing you need to hear is this: what happened to you was wrong. The gaslighting that made you doubt your own perceptions, the manipulation that used your faith against you, the isolation from support, the cycles of idealize-devalue-discard — these are harmful, real, and not your fault. Naming it accurately is the first step toward healing.",
  },
  {
    title: "Jesus's Harshest Words Were for Religious Narcissists",
    body: "Matthew 23 records Jesus's most sustained and harsh condemnation — directed not at secular sinners but at religious leaders who used their position to control, burden, and exploit the people they were supposed to serve. 'They tie up heavy, cumbersome loads and put them on other people's shoulders, but they themselves are not willing to lift a finger to move them' (Matt 23:4). Jesus saw through religious performance to the self-serving heart beneath. He is not on the side of the abuser who uses Scripture to control.",
  },
  {
    title: "God Is Not Your Abuser",
    body: "One of the most spiritually damaging features of narcissistic abuse — especially when perpetrated by a religious leader or family member who used faith as a weapon — is that it distorts the image of God. The controlling father, the coercive pastor, or the spiritually abusive spouse becomes associated with God's character. Healing requires deliberately reconstructing a more accurate theology: God as one who empowers rather than diminishes, who is for the vulnerable rather than leveraging their vulnerability.",
  },
  {
    title: "Leaving Is Not Betrayal",
    body: "Survivors of narcissistic abuse are often told — sometimes by well-meaning church members — that leaving would be betrayal: of the marriage, of the family, of the church, of God. This is manipulation dressed in theological language. Jesus said He came that we might have life 'to the full' (John 10:10). The enemy is the one who 'comes only to steal and kill and destroy.' A relationship or institution that consistently steals your life, kills your self-perception, and destroys your wellbeing is not sacred ground you are obligated to maintain.",
  },
  {
    title: "Recovery as Reclaiming Imago Dei",
    body: "Narcissistic abuse systematically attacks the victim's sense of their own worth, perceptions, and identity. Recovery is fundamentally a restoration of identity — a reclaiming of the imago Dei, the image of God in which you were made. 'You are fearfully and wonderfully made' (Ps 139:14) is not a platitude; it is a counter-narrative to everything the abuser said about you. Recovery means slowly, with help, coming to believe this again.",
  },
];

const voices = [
  {
    name: "Lundy Bancroft",
    role: "Author, Why Does He Do That? Inside the Minds of Angry and Controlling Men",
    quote: "An abuser isn't a good man who does bad things. He's a man with a particular set of values and beliefs that lead him to do bad things. The problem isn't in his feelings but in how he thinks.",
  },
  {
    name: "Diane Langberg",
    role: "Psychologist and author, Redeeming Power",
    quote: "Power used to serve self rather than others is the root of all abuse. The church must learn to name this, hold people accountable for it, and protect those who are harmed by it.",
  },
  {
    name: "Leslie Vernick",
    role: "Counselor and author, The Emotionally Destructive Marriage",
    quote: "When someone treats you in a consistently destructive way, ignores your attempts to address it, and shows no real change, that is not a relational problem — it is an abuse problem.",
  },
  {
    name: "Wade Mullen",
    role: "Author, Something's Not Right: Decoding the Hidden Tactics of Abuse",
    quote: "Abuse doesn't look like what most people imagine. It looks like someone who works very hard to control how they are perceived, and who uses that perception to harm others.",
  },
];

const practices = [
  {
    title: "Therapy with a Narcissistic Abuse-Informed Counselor",
    body: "Not all therapists understand narcissistic abuse or coercive control. Look specifically for counselors who have training in these areas — they understand why leaving is so difficult, why you may still feel love for the abuser, and why trauma bonding keeps people connected to harmful relationships. The term 'abuse-informed' or 'trauma-informed' in a therapist's profile is a start. Psychology Today's therapist finder allows filtering by specialty.",
  },
  {
    title: "No Contact or Low Contact",
    body: "Where possible, reducing or eliminating contact with a narcissistic abuser is the most powerful thing you can do for your recovery. Every contact reactivates the trauma bond, provides opportunities for manipulation, and re-traumatizes. When complete no-contact is impossible (shared children, family systems), 'gray rock' strategies — responding minimally, providing no emotional reaction, being as boring as possible — reduce the abuser's ability to engage and control.",
  },
  {
    title: "Validating Your Own Perceptions",
    body: "One of the primary effects of narcissistic abuse is epistemic damage — the abuser's gaslighting has made you doubt your own perceptions, memories, and judgments. Recovery involves slowly reclaiming trust in what you see, hear, and experience. Journaling what actually happens (events, words, your responses) creates an objective record that helps counter gaslighting. A therapist can validate your perceptions and help you distinguish between accurate self-criticism and internalized abuse.",
  },
  {
    title: "Support Communities for Survivors",
    body: "The National Domestic Violence Hotline (thehotline.org, 1-800-799-7233) serves survivors of narcissistic and coercive control abuse. The Flying Free Network (flyingfreenow.com) is a Christian community specifically for women in emotionally destructive relationships. Online communities on Reddit (r/NarcissisticAbuse, r/raisedbynarcissists) provide peer support. These communities help with the profound isolation that narcissistic abuse creates.",
  },
  {
    title: "Safety Planning If Still in the Relationship",
    body: "If you are still in a relationship with a narcissistic or coercively controlling person, safety planning is essential. Connect with the National DV Hotline for guidance. Identify trusted people outside the relationship. Identify local resources (shelters, legal aid). Protect financial documents and identification. Understand that narcissistic abuse can escalate when the victim attempts to leave — leave planning is important for safety.",
  },
  {
    title: "Rebuilding Spiritual Life After Religious Abuse",
    body: "If the narcissistic abuse involved a religious leader or if religion was weaponized against you, rebuilding a spiritual life can be complex and slow. You may need distance from the specific tradition before you can return to it in a healthy form — or you may find that your faith is more resilient than you thought, once it is disentangled from the abuser. Spiritual direction with a trauma-informed director, or a therapist who specializes in religious trauma, can help navigate this.",
  },
];

const scriptures = [
  {
    ref: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
  },
  {
    ref: "John 10:10",
    text: "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.",
  },
  {
    ref: "Matthew 23:4",
    text: "They tie up heavy, cumbersome loads and put them on other people's shoulders, but they themselves are not willing to lift a finger to move them.",
  },
  {
    ref: "Romans 8:1",
    text: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
  },
  {
    ref: "Micah 6:8",
    text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
  },
  {
    ref: "Isaiah 42:3",
    text: "A bruised reed he will not break, and a smoldering wick he will not snuff out.",
  },
];

const JOURNAL_KEY = "vine_narcissistic_abuse_recovery_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle (You Are More)" },
  { videoId: "hJkLBPIbZr4", title: "Breaking the Cycle – Steven Furtick" },
  { videoId: "7_CGP-12AE0", title: "The Story of the Bible – BibleProject" },
];

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid white`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function NarcissisticAbuseRecoveryPage() {
  const [activeTab, setActiveTab] = useState("Theology");
  const [journalText, setJournalText] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });

  function saveEntry() {
    if (!journalText.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: journalText.trim() };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setJournalText("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: GREEN + "22", border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, marginBottom: 16 }}>
            Abuse & Recovery
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Narcissistic Abuse Recovery
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            What happened to you was wrong. God is not your abuser. You are fearfully and wonderfully made — and recovery is possible.
          </p>
        </div>

        {/* Crisis Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${GREEN}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: GREEN, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>National DV Hotline:</strong> 1-800-799-7233 or thehotline.org — 24/7<br />
            <strong style={{ color: TEXT }}>Flying Free Network:</strong> flyingfreenow.com — Christian women in destructive relationships<br />
            <strong style={{ color: TEXT }}>GRACE:</strong> netgrace.org — church abuse survivor advocacy<br />
            <strong style={{ color: TEXT }}>988 Lifeline:</strong> call or text 988 — 24/7 crisis support
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${activeTab === tab ? GREEN : BORDER}`, background: activeTab === tab ? GREEN + "22" : "transparent", color: activeTab === tab ? GREEN : MUTED, cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab ? 600 : 400 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: GREEN, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: 13, marginBottom: 14 }}>{v.role}</div>
                <blockquote style={{ margin: 0, padding: "14px 18px", borderLeft: `3px solid ${GREEN}`, background: GREEN + "11", borderRadius: "0 8px 8px 0", color: MUTED, lineHeight: 1.8, fontStyle: "italic" }}>
                  "{v.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: GREEN, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: 16 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              What do you need to name? What did they say about you that you need to stop believing? Your entries are saved locally on this device only.
            </p>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write here..."
              style={{ width: "100%", minHeight: 140, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, resize: "vertical", boxSizing: "border-box", outline: "none" }}
            />
            <button
              onClick={saveEntry}
              style={{ marginTop: 12, padding: "10px 28px", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 15 }}
            >
              Save Entry
            </button>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              {entries.map((entry) => (
                <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{entry.date}</div>
                  <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap" }}>{entry.text}</p>
                  <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: 12, fontSize: 12, color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {videos.map((v) => (
              <VideoEmbed key={v.videoId} {...v} />
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
