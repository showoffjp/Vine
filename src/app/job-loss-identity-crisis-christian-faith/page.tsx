"use client";

import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "You Are Not What You Do",
    body: "American culture — including significant segments of Christian culture — has tied identity to productivity, title, and career achievement in ways that are more American than biblical. When a job is lost, the question that often surfaces is: 'Who am I now?' This is a profound theological question, and the Christian answer does not begin with what you do. You were known and beloved before you were born (Jer 1:5), created in the image of God (Gen 1:26), and your worth was established at creation — not at your first job, not contingent on your last performance review.",
  },
  {
    title: "Work Has Meaning, But Identity Has a Deeper Source",
    body: "Scripture affirms the dignity of work. 'Whatever you do, work at it with all your heart, as working for the Lord' (Col 3:23). The call to stewardship, creativity, and fruitful labor is real. But work's meaning flows from identity — we work because we are made in the image of a Creator — not the other way around. When a job ends, the meaning it carried does not have to go with it. You are still the imago Dei.",
  },
  {
    title: "Job's Suffering Was Not His Fault",
    body: "The book of Job is partly a sustained critique of the theology that suffering — including material loss — is caused by sin. Job was 'blameless and upright' (Job 1:1) and lost everything. His friends confidently attributed his suffering to hidden sin. God called their theology wrong and rebuked them. When Christians offer the prosperity gospel equivalent — 'if you were faithful, you'd have a job' — they are repeating Job's friends' mistake. Job loss is not spiritual failure.",
  },
  {
    title: "Paul Knew Plenty and Need",
    body: "'I have learned the secret of being content in any and every situation, whether well fed or hungry, whether living in plenty or in want' (Phil 4:12). Paul is describing something he had to learn — not a character trait he was born with. The word translated 'content' (autarkeia) means self-sufficiency born of trust in God, not circumstances. This is the direction toward which faith points — not wealth as the sign of God's favor, but stability of soul in all conditions.",
  },
  {
    title: "Midlife as Invitation, Not Failure",
    body: "Job loss in midlife often brings a confrontation with questions that were submerged during the climb: Who am I apart from my title? What do I actually value? What did I sacrifice for this career that I want to reclaim? These are good questions, even if they arrive with painful packaging. Midlife transition — whether forced or chosen — can be the beginning of a more integrated and authentic second half of life. The disruption may be the invitation.",
  },
];

const voices = [
  {
    name: "Richard Rohr",
    role: "Author, Falling Upward",
    quote: "The first half of life is about building a container. The second half is about filling it. Job loss often forces the transition before we're ready — and that may be exactly the point.",
  },
  {
    name: "David Brooks",
    role: "Author, The Second Mountain",
    quote: "The culture of résumé virtues is empty at the core. The suffering that comes from losing them can, if we let it, turn us toward eulogy virtues — what you want people to say about who you were.",
  },
  {
    name: "Andy Crouch",
    role: "Author, Playing God and Work as Worship",
    quote: "Work is not salvation and it is not identity. It is one of the ways we participate in God's ongoing creative project. When one particular form of work ends, that project does not.",
  },
  {
    name: "Tim Keller",
    role: "Author, Every Good Endeavor",
    quote: "The gospel frees us from making work into an idol or a savior. We can work hard without our identity depending on the outcome — because our identity is already secure in Someone else.",
  },
];

const practices = [
  {
    title: "Allow the Grief Before the Strategy",
    body: "Job loss is a real loss — of income, of purpose, of routine, of identity, of community (work is where many people find their social world). Before launching into a job search strategy, give yourself space to grieve. What did this work mean to you? What are you afraid of losing beyond the paycheck? Grief that is bypassed tends to emerge sideways later — in anxiety, in depression, in desperation that distorts the search.",
  },
  {
    title: "Financial Triage",
    body: "The practical must be addressed. Review your cash position honestly. Apply for unemployment insurance immediately if you are eligible. Identify fixed vs. variable expenses. Contact creditors proactively before you miss payments — most will work with you. The NFCC (nfcc.org) offers free credit and financial counseling. Dial 211 connects to local community resources. Know what your runway is so you can make decisions from information rather than panic.",
  },
  {
    title: "Therapy for Identity Work",
    body: "Job loss — especially in midlife — often surfaces deeper identity questions that therapy is well-suited to address. A therapist can help you distinguish between grief about this specific job and deeper questions about meaning, vocation, and identity. Career counseling overlaps here — therapists who specialize in career transition and midlife can be particularly helpful. Psychology Today's therapist finder allows filtering by specialty.",
  },
  {
    title: "Vocational Discernment vs. Just a Job Search",
    body: "There is a difference between getting a job to survive and discerning your vocation — the particular shape your gifts and calling take in the world. Job loss can be an opportunity to do the latter even while doing the former. Ask: What problems do I love solving? What kind of work makes me lose track of time? What do people consistently thank me for? Vocational discernment resources include Richard Bolles' What Color Is Your Parachute? and various Christian frameworks for calling.",
  },
  {
    title: "Community and Accountability",
    body: "Job searching in isolation is slower and more demoralizing than job searching with community. Tell trusted people you are looking — most jobs are found through relationships, not applications. A job search accountability group, offered through some churches and career centers, provides structure and support. Career One-Stop (careeronestop.org) offers free job search resources. LinkedIn and professional associations are force multipliers.",
  },
  {
    title: "Physical Health as Priority",
    body: "Depression, anxiety, and poor sleep commonly accompany job loss, and they make the search harder. Maintaining physical health — sleep hygiene, regular meals, daily exercise — is not peripheral to the job search; it is the foundation. Many people find that exercise provides the routine and mood regulation that work previously provided. Your physical health is an investment in your professional effectiveness.",
  },
];

const scriptures = [
  {
    ref: "Jeremiah 1:5",
    text: "Before I formed you in the womb I knew you, before you were born I set you apart.",
  },
  {
    ref: "Philippians 4:11-12",
    text: "I have learned to be content whatever the circumstances. I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation.",
  },
  {
    ref: "Colossians 3:23",
    text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
  },
  {
    ref: "Psalm 46:1",
    text: "God is our refuge and strength, an ever-present help in trouble.",
  },
  {
    ref: "Isaiah 43:19",
    text: "See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.",
  },
  {
    ref: "Romans 8:28",
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
  },
];

const JOURNAL_KEY = "vine_job_loss_identity_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
  { videoId: "hJkLBPIbZr4", title: "Identity in Christ – Steven Furtick" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
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

export default function JobLossIdentityPage() {
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
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: GREEN + "22", border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, marginBottom: 16 }}>
            Work & Identity
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Job Loss & Identity Crisis
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            You are not what you do. Your worth was established at creation — not at your first job, not contingent on your last performance review.
          </p>
        </div>

        {/* Resource Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${GREEN}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: GREEN, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>NFCC:</strong> nfcc.org — free financial counseling<br />
            <strong style={{ color: TEXT }}>Dial 211</strong> — local community resources<br />
            <strong style={{ color: TEXT }}>Career One-Stop:</strong> careeronestop.org — free job search resources<br />
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
              Write what you're feeling. What were you afraid this job meant about your worth? What do you hope for? Your entries are saved locally on this device only.
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
  );
}
