"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "Loneliness in Marriage Is Real — and Common",
    body: "One of the most disorienting experiences is feeling profoundly lonely while legally and socially 'not alone.' Loneliness within marriage — when two people share a home, a bed, children, finances, and yet experience a deep emotional disconnection — is more common than the church usually acknowledges. Because the church celebrates marriage and family so heavily, people in lonely marriages often feel doubly ashamed: they are failing at the institution that is supposed to provide belonging. This shame compounds the isolation.",
  },
  {
    title: "God Sees What Others Cannot",
    body: "Hagar, alone in the wilderness with her son and convinced they were about to die, received a divine visit. She named God El-Roi — the One who sees me (Gen 16:13). This God who sees is present in the invisible suffering of the person who is lonely in a room full of people, who is lonely in a house with a spouse, who cannot explain their loneliness without being misunderstood.",
  },
  {
    title: "Marriage Does Not Complete a Person",
    body: "Christian culture has sometimes elevated marriage to a status that Scripture does not give it — suggesting that marriage is the primary source of belonging, intimacy, and completion. Paul wrote that it is good for people to remain unmarried (1 Cor 7:8), and Jesus noted that in the resurrection 'they will neither marry nor be given in marriage' (Matt 22:30). The deepest human need for belonging and love is ultimately met not in marriage but in God. This is not a diminishment of marriage; it is freedom from expecting it to carry more than it can.",
  },
  {
    title: "Loneliness as Diagnosis, Not Verdict",
    body: "Loneliness in marriage is a symptom — of disconnection, of unaddressed conflict, of two people growing in different directions, sometimes of one partner's depression or avoidance, sometimes of long-standing patterns from family of origin. It is a diagnosis that points toward work that needs to be done, not a verdict on the marriage or either person. Many couples who have done the work describe coming through a period of profound loneliness to a deeper, more genuine intimacy than they had in the beginning.",
  },
  {
    title: "Christ's Solidarity with the Lonely",
    body: "Jesus, at the moment of His greatest suffering, experienced abandonment — by His disciples who fled, by the crowd that turned, and in His cry of dereliction from the cross. He knows what it is to be alone when surrounded by people. 'For we do not have a high priest who is unable to empathize with our weaknesses' (Heb 4:15). The Christ who was forsaken is present with the person who feels unseen, unheard, and unknown in the marriage they believed would be their home.",
  },
];

const voices = [
  {
    name: "Gary Thomas",
    role: "Author, Sacred Marriage",
    quote: "Marriage is not primarily about making you happy — it is primarily about making you holy. The hardest seasons, including loneliness, are often the most formative if you stay present to what God might be doing.",
  },
  {
    name: "Sue Johnson",
    role: "Psychologist, developer of Emotionally Focused Therapy (EFT) for couples",
    quote: "The most powerful question in couples therapy is: 'Are you there for me?' When the answer is uncertain, loneliness fills the space. When the answer becomes yes, transformation becomes possible.",
  },
  {
    name: "Brené Brown",
    role: "Researcher and author, Daring Greatly",
    quote: "Connection is why we're here. It gives purpose and meaning to our lives. The longing to be truly known — and to truly know another — is one of the deepest human experiences.",
  },
  {
    name: "John Gottman",
    role: "Relationship researcher and author, The Seven Principles for Making Marriage Work",
    quote: "The biggest predictor of divorce is not conflict — it is emotional disengagement. Loneliness in marriage is not a sign of a bad marriage; it is a sign that connection needs to be rebuilt.",
  },
];

const practices = [
  {
    title: "Name What You're Actually Experiencing",
    body: "The first step is honest naming: 'I am lonely in my marriage.' Not 'my marriage is failing' or 'my spouse is terrible' — but honest description of your own experience. This requires courage, because naming it makes it real and demands response. Journaling about your loneliness — when it is worst, what triggers it, what you are longing for — begins to make it visible and workable.",
  },
  {
    title: "Couples Therapy: Emotionally Focused Therapy",
    body: "Emotionally Focused Therapy (EFT), developed by Sue Johnson, is one of the most evidence-based approaches for couples experiencing emotional disconnection. EFT helps couples identify negative interaction cycles, understand the attachment needs underneath them, and build new patterns of emotional engagement. A couples therapist certified in EFT (iceeft.com) can help even couples who feel they have run out of road.",
  },
  {
    title: "Initiating Vulnerable Conversation",
    body: "Many lonely spouses wait for the other person to initiate the reconnection they long for. But the most powerful move is often to go first: to share your loneliness vulnerably, without accusation. 'I miss you. I feel far from you. I want to be closer.' This is terrifying because it risks rejection. But it is the kind of vulnerability that has the best chance of creating the genuine response you are looking for. John Gottman's 'bids for connection' framework helps understand this.",
  },
  {
    title: "Individual Therapy for Your Own Contribution",
    body: "Loneliness in marriage usually has two contributors. Each person brings patterns from their family of origin, attachment styles, and ways of protecting themselves that can inadvertently create distance. Individual therapy can help you understand your own patterns, your own ways of distancing or pursuing, and your own unmet needs — so you can address them with more self-awareness and less reactivity.",
  },
  {
    title: "Building Connection Outside Marriage",
    body: "Marriage cannot be the only source of belonging and connection — that is more than any one relationship can carry. Deep friendships, community, shared interests, church relationships, and mentoring can all provide belonging that reduces the pressure on the marriage to be everything. This is not giving up on the marriage; it is building the full social infrastructure that healthy humans need.",
  },
  {
    title: "When Loneliness Is Chronic and Unaddressed",
    body: "If loneliness in marriage has persisted for years despite your efforts to address it, if your spouse refuses couples therapy, or if the loneliness is compounded by contempt, hostility, or abandonment, honest assessment of the relationship may be necessary. Leslie Vernick's Emotionally Destructive Marriage framework can help you assess whether what you are experiencing is disconnection (workable) or something more serious that requires different decisions.",
  },
];

const scriptures = [
  {
    ref: "Genesis 16:13",
    text: "She gave this name to the Lord who spoke to her: 'You are the God who sees me,' for she said, 'I have now seen the One who sees me.'",
  },
  {
    ref: "Hebrews 4:15",
    text: "For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin.",
  },
  {
    ref: "Psalm 139:7-8",
    text: "Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there.",
  },
  {
    ref: "1 Corinthians 13:4-7",
    text: "Love is patient, love is kind... It always protects, always trusts, always hopes, always perseveres.",
  },
  {
    ref: "Ecclesiastes 4:9-10",
    text: "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up.",
  },
  {
    ref: "Romans 8:26",
    text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.",
  },
];

const JOURNAL_KEY = "vine_loneliness_in_marriage_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
  { videoId: "G-2e9mMf7E8", title: "Gospel of John – BibleProject" },
  { videoId: "hJkLBPIbZr4", title: "Connection and Grace – Steven Furtick" },
];

export default function LonelinessInMarriagePage() {
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
          <div style={{ display: "inline-block", background: PURPLE + "22", border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, marginBottom: 16 }}>
            Marriage & Relationships
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Loneliness in Marriage
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            El-Roi — the God who sees — is present with the person who is invisible to the one who sleeps beside them.
          </p>
        </div>

        {/* Resource Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${PURPLE}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>ICEEFT:</strong> iceeft.com — find an EFT-trained couples therapist<br />
            <strong style={{ color: TEXT }}>Gottman Institute:</strong> gottman.com — couples resources and therapist finder<br />
            <strong style={{ color: TEXT }}>Focus on the Family:</strong> 1-855-771-HELP — marriage counseling referral<br />
            <strong style={{ color: TEXT }}>988 Lifeline:</strong> call or text 988 — 24/7 crisis support
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${activeTab === tab ? PURPLE : BORDER}`, background: activeTab === tab ? PURPLE + "22" : "transparent", color: activeTab === tab ? PURPLE : MUTED, cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab ? 600 : 400 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{item.title}</h3>
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
                <div style={{ color: PURPLE, fontSize: 13, marginBottom: 14 }}>{v.role}</div>
                <blockquote style={{ margin: 0, padding: "14px 18px", borderLeft: `3px solid ${PURPLE}`, background: PURPLE + "11", borderRadius: "0 8px 8px 0", color: MUTED, lineHeight: 1.8, fontStyle: "italic" }}>
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
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: 16 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              Write what you're longing for. What you miss. What you hope might change. Your entries are saved locally on this device only.
            </p>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write here..."
              style={{ width: "100%", minHeight: 140, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, resize: "vertical", boxSizing: "border-box", outline: "none" }}
            />
            <button
              onClick={saveEntry}
              style={{ marginTop: 12, padding: "10px 28px", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 15 }}
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
