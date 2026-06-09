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
    title: "Divorce Is Not the Unforgivable Sin",
    body: "The church has sometimes treated divorce as uniquely shameful — a moral failure that marks a person permanently. But Scripture is full of people who experienced catastrophic relational breakdown and were still used by God. Divorce is a tragedy, not an identity. The God who said He hates divorce (Mal 2:16) is the same God who pursued a faithless, covenant-breaking people and called them Beloved. Pain in God's heart over divorce does not translate to rejection of the divorced.",
  },
  {
    title: "The Pastoral Complexity of Matthew 19 and 1 Corinthians 7",
    body: "Jesus's teaching on divorce (Matt 19:3-9) was given in response to a test question in a specific legal-religious debate, not as an exhaustive legal code. He affirmed marriage's high purpose and identified adultery as grounds. Paul added abandonment by an unbelieving spouse (1 Cor 7:15). Many thoughtful theologians also include abuse — since a covenant of love and protection has already been violated long before papers are filed. These texts call for careful interpretation, not blunt condemnation.",
  },
  {
    title: "Covenant Broken Before Papers Filed",
    body: "Divorce papers make formal what abuse, abandonment, or serial unfaithfulness already did. When a spouse has been subjected to sustained harm — physical, sexual, emotional, financial — the covenant has already been shattered by the one doing harm. Filing for divorce in those circumstances is not breaking a covenant; it is acknowledging that a covenant has already been broken. Safety and the protection of children matter. God does not require anyone to remain in harm's way to protect a legal document.",
  },
  {
    title: "Redemption and the Reality of Second Marriages",
    body: "Remarriage is one of the most contested areas of Christian ethics. Christians hold a spectrum of views — from no remarriage ever, to remarriage after divorce for any reason, with many nuanced positions in between. What should be clear to all: God is present in second marriages. He redeems. He sustains. He is at work in blended families, in couples who built something from the rubble of previous loss. No marriage exists outside God's potential grace, and no person is permanently locked out of covenant love.",
  },
  {
    title: "God as the Husband of the Divorced",
    body: "Isaiah 54 was written to Israel, who had experienced covenantal breakdown with God due to her own unfaithfulness — yet God says: 'Do not be afraid; you will not be put to shame... For your Maker is your husband — the Lord Almighty is his name' (Isa 54:4-5). This is the same voice that speaks to the divorced, the abandoned, the shamed: your worth is not determined by your marital status. You are not disqualified from belonging, purpose, or love.",
  },
];

const voices = [
  {
    name: "Gary Thomas",
    role: "Author, Sacred Marriage & When to Walk Away",
    quote: "God doesn't call us to stay in marriages that are destroying us — He calls us to flourish in His image. Sometimes leaving is the holiest act available.",
  },
  {
    name: "David Instone-Brewer",
    role: "NT scholar, Divorce and Remarriage in the Bible",
    quote: "Jesus and Paul both recognized legitimate grounds for divorce based on neglect, abuse, and abandonment — not only adultery. The church's absolutist readings have sometimes gone beyond the text.",
  },
  {
    name: "Leslie Vernick",
    role: "Counselor & author, The Emotionally Destructive Marriage",
    quote: "Too often the church has prioritized preserving the institution of marriage over protecting the souls inside it. That is backwards.",
  },
  {
    name: "Diane Langberg",
    role: "Psychologist & trauma specialist",
    quote: "Trauma is trauma whether it happens in a home or in a war zone. The church must learn to recognize it, name it, and respond redemptively — not minimize it in the name of keeping marriages intact.",
  },
];

const practices = [
  {
    title: "Grief as the Required First Work",
    body: "Divorce involves real loss — even when it was the right choice. Loss of a shared future, of a family structure, of the person you thought you married, of the life you planned. Before rebuilding comes mourning. Give yourself permission to grieve without rushing toward okay. The psalms of lament exist precisely because God knows grief is not something to skip.",
  },
  {
    title: "Individual Therapy with a Trauma-Informed Counselor",
    body: "Many divorced people carry wounds from the marriage itself — not just the ending. Abuse, infidelity, abandonment, and prolonged conflict all leave marks. A trauma-informed counselor can help you process what happened, recognize patterns, and understand what you need before moving forward. Therapy is not optional luxury; for many, it is survival.",
  },
  {
    title: "Finding a Congregation That Won't Re-wound You",
    body: "Some churches respond to divorce with judgment, exclusion from ministry, or pressure to reconcile regardless of safety. If your church re-wounds you, you do not have to stay. God's family is larger than any congregation. DivorceCare (divorcecare.org) offers support groups in thousands of churches and helps people find communities that understand.",
  },
  {
    title: "Practical Legal and Financial Steps",
    body: "Legal aid organizations serve people who cannot afford attorneys. Many states have self-help legal centers. WomensLaw.org has state-by-state legal information for those leaving abusive situations. 211 connects to local financial and housing resources. Getting practical information is not unspiritual — it is wise stewardship of what you have been given.",
  },
  {
    title: "Co-Parenting as a New Covenant",
    body: "When children are involved, divorce ends a marriage but not a family. Co-parenting requires creating a new agreement: that the children's wellbeing comes before the parents' pain and conflict. This is extraordinarily hard work. Co-parenting counselors, mediators, and programs like OurFamilyWizard help create structures that protect children from being caught in the middle.",
  },
  {
    title: "Identity Recovery: Who Am I Now?",
    body: "Marriage often shapes identity deeply — especially if you married young or were married for decades. Divorce can create a profound identity vacuum. Ask: What do I love? What am I curious about? What did I set aside during the marriage that I might reclaim? Your identity in Christ — beloved, known, held — does not change with your marital status. Start there.",
  },
];

const scriptures = [
  {
    ref: "Isaiah 54:4-5",
    text: "Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated... For your Maker is your husband — the Lord Almighty is his name.",
  },
  {
    ref: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
  },
  {
    ref: "Romans 8:38-39",
    text: "Neither death nor life, neither angels nor demons, neither the present nor the future... will be able to separate us from the love of God that is in Christ Jesus our Lord.",
  },
  {
    ref: "Joel 2:25",
    text: "I will repay you for the years the locusts have eaten — the great locust and the young locust, the other locusts and the locust swarm.",
  },
  {
    ref: "2 Corinthians 5:17",
    text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
  },
  {
    ref: "Lamentations 3:22-23",
    text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
  },
];

const JOURNAL_KEY = "vine_divorce_remarriage_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "R3vBPOjPzSw", title: "Finding Hope After Divorce – Elevation Church" },
  { videoId: "hJkLBPIbZr4", title: "God's Grace for the Broken – Steven Furtick" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle (Identity in Christ)" },
  { videoId: "4Eg_di-O8nM", title: "Elevation Church – God Is Working" },
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

export default function DivorceRemarriagePage() {
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
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: GREEN + "22", border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, marginBottom: 16 }}>
            Marriage & Relationships
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Divorce & Remarriage
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            Your worth is not determined by your marital status. God meets you in the rubble — not with shame, but with compassion.
          </p>
        </div>

        {/* Crisis Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${GREEN}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: GREEN, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>DivorceCare:</strong> divorcecare.org — support groups nationwide<br />
            <strong style={{ color: TEXT }}>WomensLaw.org:</strong> legal info for those leaving abuse<br />
            <strong style={{ color: TEXT }}>Dial 211</strong> — local housing, financial, family resources<br />
            <strong style={{ color: TEXT }}>988 Lifeline:</strong> call or text 988 — 24/7 emotional crisis support
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

        {/* Theology Tab */}
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

        {/* Voices Tab */}
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

        {/* Practices Tab */}
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

        {/* Scripture Tab */}
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

        {/* Journal Tab */}
        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              Write freely. What do you need to grieve? What do you hope for? What are you afraid of?
              Your entries are saved locally on this device only.
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

        {/* Videos Tab */}
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
