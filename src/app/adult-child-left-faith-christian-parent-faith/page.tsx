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

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "Your Adult Child's Faith Is Theirs to Hold",
    body: "Adult children who leave the Christian faith are not taken from you — they have made a choice that is theirs to make. The God who gave humanity the freedom to reject Him in Eden did not design children to be compelled into faith. Faith that is not freely given is not faith; it is compliance. Your adult child's departure from faith is painful, but it is not a betrayal — it is a person using the freedom that God Himself built into human beings.",
  },
  {
    title: "God Is Not Limited by Your Child's Current Beliefs",
    body: "Augustine of Hippo — one of the greatest theologians in Christian history — spent his early life explicitly rejecting Christianity and living in ways his mother Monica deeply grieved. Monica prayed for him for decades. He converted at 33. God's reach is not limited by your child's current position. The story is not over. The season of unbelief, however long, is not the final chapter. This is not wishful thinking; it is faith in a God who is relentlessly pursuing the people He loves.",
  },
  {
    title: "The Parents' Role After the Departure",
    body: "Once an adult child has left the faith, the parent's role shifts fundamentally. Arguing, debating, pressuring, or expressing ongoing disappointment tends to damage the relationship and make return less likely, not more. The posture that tends to keep doors open is the posture of the prodigal's father — watchful love, continued presence, no ultimatums, a relationship that is not contingent on theological agreement. This is extraordinarily hard. It is also the most effective and faithful response.",
  },
  {
    title: "Your Grief Is Real and Valid",
    body: "Parents who raised their children in faith experience a particular grief when that child leaves it — the loss of a shared spiritual life, the fear for their child's eternal wellbeing, the confusion about what this means for everything you believed about faithful parenting. This grief is real and deserves to be named and mourned. Churches that help parents of prodigal children process this grief provide an essential ministry. You do not have to perform acceptance you don't feel.",
  },
  {
    title: "Faithfulness Is Not Measured in Your Children's Choices",
    body: "God told Ezekiel: 'The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child' (Ezek 18:20). Parents are responsible for their own faithfulness — not for their children's. You may have made mistakes (all parents do), but your adult child's departure from faith is not a verdict on your faithfulness as a parent. It is a reflection of a complex interplay of their experience, their will, their questions, and their freedom.",
  },
];

const voices = [
  {
    name: "Monica, mother of Augustine of Hippo",
    role: "4th-century Christian mother who prayed for her son's conversion for decades",
    quote: "A son of so many tears cannot perish. — words spoken to Monica by a bishop, of which Augustine later wrote in his Confessions",
  },
  {
    name: "Rob Rienow",
    role: "Family pastor and author",
    quote: "When our adult children walk away, the temptation is to fight for their faith. The harder and often more effective path is to fight for the relationship — and trust God for the rest.",
  },
  {
    name: "Tim Keller",
    role: "Author, The Prodigal God",
    quote: "The elder brother in the parable never left — but he was just as lost as his brother, in a different way. Staying in the church is not the same as being found.",
  },
  {
    name: "Sharon Hersh",
    role: "Counselor and author of books on parenting",
    quote: "Parents of children who have left the faith need a theology robust enough to hold the hardest question: what if they never come back? That is a real question that deserves a real answer.",
  },
];

const practices = [
  {
    title: "Grief Work First",
    body: "Before you can engage your adult child well, you need a place to put your grief that isn't on them. This means finding a therapist, a trusted pastor, or a support community where you can be honest about your fear, your sadness, and your disappointment. Processing your grief in private makes it less likely to be deposited on your child in ways that push them further away.",
  },
  {
    title: "Maintain the Relationship at All Cost",
    body: "The research on parents of adult children who've left faith is clear: the relationships that survive with the best chance of reconciliation — spiritually and relationally — are those in which the parent maintained the relationship without making it conditional on faith. This means continuing to be interested in your child's life, celebrating their milestones, having ordinary conversations, and not making every interaction a religious discussion.",
  },
  {
    title: "Stop Debating and Start Listening",
    body: "Many adult children who leave faith have reasons — often significant ones — for their departure. Philosophical objections, wounds from the church, unanswered questions, experiences of harm in religious contexts. If you lead with arguments and defenses, you model a faith that is primarily intellectual combativeness. If you lead with genuine curiosity — 'What happened? What hurt you? What questions don't have answers for you?' — you model a faith that is genuinely interested in the person.",
  },
  {
    title: "Support Communities for Parents",
    body: "You are not alone in this. Many Christian parents are navigating the same grief. PALF (Parents of Adult Leaving Faith) Facebook groups exist. Some churches have small groups specifically for parents in this situation. Books: When Your Child Doesn't Believe by Don Everts, Praying for Your Adult Children by Stormie Omartian. The isolation of this grief can be as damaging as the grief itself — finding community helps.",
  },
  {
    title: "Prayer Without Announcement",
    body: "Most adult children who have left faith do not want to know they are being prayed for — it can feel manipulative or like pressure. But prayer for your child — quiet, persistent, surrendering them to God's care without conditions — is both spiritually formative for you and an act of trust in a God who can reach places you cannot. Monica's decades of silent, faithful prayer for Augustine is the model.",
  },
  {
    title: "Examine What You Model",
    body: "Adult children who have left faith sometimes cite the gap between what their parents said and how they lived. This is not a reason for guilt; it is an invitation to self-examination. The faith you live visibly — how you treat your spouse, how you respond to failure, how you handle money, how you engage with suffering — speaks louder than anything you say. The best apologetic for Christian faith is a Christian life that is genuinely transformed.",
  },
];

const scriptures = [
  {
    ref: "Luke 15:20",
    text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.",
  },
  {
    ref: "Ezekiel 18:20",
    text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child.",
  },
  {
    ref: "Jeremiah 31:16",
    text: "This is what the Lord says: 'Restrain your voice from weeping and your eyes from tears, for your work will be rewarded... they will return from the land of the enemy.'",
  },
  {
    ref: "Proverbs 22:6",
    text: "Start children off on the way they should go, and even when they are old they will not turn from it.",
  },
  {
    ref: "Romans 8:38-39",
    text: "Neither death nor life... nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
  },
  {
    ref: "1 Peter 3:1",
    text: "Wives, in the same way submit yourselves to your own husbands so that, if any of them do not believe the word, they may be won over without words by the behavior of their wives.",
  },
];

const JOURNAL_KEY = "vine_adult_child_left_faith_parent_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "The Prodigal God – Elevation Church" },
  { videoId: "hJkLBPIbZr4", title: "Watchful Hope – Steven Furtick" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
  { videoId: "7_CGP-12AE0", title: "The Story of the Bible – BibleProject" },
];

export default function AdultChildLeftFaithParentPage() {
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
            Family & Faith
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            When Your Adult Child Leaves the Faith
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            Monica prayed for her son Augustine for decades. A son of so many tears cannot perish. The story is not over.
          </p>
        </div>

        {/* Resource Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${GREEN}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: GREEN, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>When Your Child Doesn't Believe:</strong> book by Don Everts<br />
            <strong style={{ color: TEXT }}>Focus on the Family:</strong> focusonthefamily.com — parenting resources<br />
            <strong style={{ color: TEXT }}>Spiritual Directors International:</strong> sdiworld.org — find a prayer companion<br />
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
              Write your prayers for your child. Write your grief. Write your hope. Your entries are saved locally on this device only.
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
