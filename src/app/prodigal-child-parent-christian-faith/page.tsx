"use client";

import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "You Are Not the Reason Your Child Is Lost",
    body: "One of the heaviest burdens parents of prodigal children carry is the question: 'What did I do wrong?' While all parents make mistakes, the trajectory of a child's life is not a simple function of parenting quality. Children are image-bearers with their own will, their own wounds, their own choices, and their own freedom. God is the perfect parent — He raised Israel in the wilderness, gave them every good thing — and they strayed repeatedly. Your child's choices are not entirely yours to own.",
  },
  {
    title: "The Father in the Parable Was Not Passive",
    body: "Luke 15 shows a father who releases the son to go — he does not chase him, force him back, or cut him off completely. But the father also watches for the son's return: 'while he was still a long way off, his father saw him.' This takes daily watchfulness, sustained hope, and a refusal to stop expecting return. The father's active love shows in how quickly he runs to his returning son. The parable does not call parents to passive indifference; it calls them to watchful hope.",
  },
  {
    title: "God Weeps Over the Prodigal",
    body: "Ezekiel 33:11 records God saying 'I take no pleasure in the death of the wicked.' Jesus wept over Jerusalem's refusal to receive Him (Luke 19:41). The image of God in Scripture is not a detached deity watching from a distance as people destroy themselves — it is a God who grieves, who pursues, who refuses to abandon even those who have walked far away. Parents who grieve their prodigal children are sharing something of God's own grief over the wandering.",
  },
  {
    title: "Your Spiritual Life Cannot Be Held Hostage",
    body: "When a child is in crisis — addiction, mental illness, homelessness, danger — it can be nearly impossible to pray, to worship, to maintain any semblance of spiritual practice. This is understandable. But your faith cannot be permanently held hostage to your child's choices. God meets you in your grief and terror as a parent. Maintaining your own spiritual practices and community, however imperfectly, is not abandoning your child — it is building the sustenance you need for the long road of watchful love.",
  },
  {
    title: "Love Does Not Require Enabling",
    body: "Loving a prodigal child does not mean subsidizing the path of destruction. In the parable, the father let the son leave, let him run out of money, let him end up feeding pigs. The moment of clarity — 'when he came to himself' — came from the natural consequences of his choices, not from the father bailing him out. Setting limits, refusing to enable, saying 'I love you and I will not fund your addiction' — these are acts of love, not abandonment. Codependency disguised as compassion prolongs rather than ends suffering.",
  },
];

const voices = [
  {
    name: "Mark Gregston",
    role: "Founder, Heartlight Ministries; counselor to troubled teens and their families",
    quote: "Parents of prodigal children need two things: someone to tell them the truth, and someone to love them in the meantime. The church can be both.",
  },
  {
    name: "Stormie Omartian",
    role: "Author, The Power of a Praying Parent",
    quote: "We can't control our children's choices, but we can bring them to the God who can reach places we cannot. Prayer is not passivity — it is the most powerful thing we can do.",
  },
  {
    name: "Tim Keller",
    role: "Author, The Prodigal God",
    quote: "The father in the parable doesn't run because the son is worthy. He runs because the son is his. That is the nature of grace — it comes before worthiness, not after.",
  },
  {
    name: "Sharon Hersh",
    role: "Counselor and author, The Last Addiction",
    quote: "The parent of a prodigal often needs as much recovery as the prodigal. Learning to love without controlling, to hope without pretending, and to grieve without losing faith is its own kind of hard work.",
  },
];

const practices = [
  {
    title: "Al-Anon and Nar-Anon Family Groups",
    body: "If your child's prodigal path involves addiction (alcohol, drugs), Al-Anon (al-anon.org) and Nar-Anon (nar-anon.org) are free peer-support groups specifically for family members of people with addiction. These programs help families understand addiction, identify enabling patterns, set healthy boundaries, and care for themselves. The transformation that comes from Al-Anon family work is profound — many parents say it was the most important thing they did, for themselves and ultimately for their relationship with their child.",
  },
  {
    title: "Therapy for Parental Grief and Trauma",
    body: "Parents of prodigal children carry a specific kind of grief — grief that cannot be publicly mourned the way death is mourned, because the person is alive. This 'ambiguous loss' is disorienting and exhausting. A therapist who understands this experience can help parents process the grief, establish healthy limits, and prevent the despair and enabling cycles that damage the entire family. This is not a luxury — it is maintenance for a person under extraordinary stress.",
  },
  {
    title: "Setting Limits: The Difference Between Love and Enabling",
    body: "Setting limits with a prodigal child is not rejection — it is a different form of love. 'I will not give you money that I know will go to drugs.' 'I will not lie to your employer for you.' 'You cannot live here while you are using.' These limits protect both the child (from perpetual rescue) and the parent (from being consumed). Resources: The Boundary-Setting book by Henry Cloud and John Townsend, and specific CRAFT (Community Reinforcement and Family Training) therapy, which has strong evidence for helping families of addicted people.",
  },
  {
    title: "Maintaining Your Own Life",
    body: "The parent who has poured every resource — financial, emotional, physical — into rescuing a prodigal often ends up depleted, while the prodigal continues unchanged. Maintaining your own life — your health, your relationships, your work, your faith practices, your enjoyment of the things you love — is not selfishness. It is sustainability. It also models for your child that life is worth living, which matters when they eventually begin to consider returning.",
  },
  {
    title: "Prodigal-Specific Support Communities",
    body: "Beyond Al-Anon and Nar-Anon, Christian resources specifically for parents of prodigals include Heartlight Ministries (heartlightministries.org), Focus on the Family resources, and the book Praying for Your Prodigal by various authors. Online communities of parents in similar situations provide the profound comfort of knowing you are not alone in this.",
  },
  {
    title: "The Long Watch: Sustaining Hope",
    body: "Parents of prodigals are often in it for the very long haul. Some children don't come home for years. Some don't come home at all. Sustaining hope across years of uncertainty requires a practice of hope — not pretending everything is fine, but refusing to write the final chapter before the story is over. Liturgical prayer, the psalms, spiritual direction, and trusted community that can hold both your grief and your hope are the sustaining practices for the long watch.",
  },
];

const scriptures = [
  {
    ref: "Luke 15:20",
    text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.",
  },
  {
    ref: "Jeremiah 31:16",
    text: "This is what the Lord says: 'Restrain your voice from weeping and your eyes from tears, for your work will be rewarded... They will return from the land of the enemy.'",
  },
  {
    ref: "Ezekiel 33:11",
    text: "As surely as I live, declares the Sovereign Lord, I take no pleasure in the death of the wicked, but rather that they turn from their ways and live.",
  },
  {
    ref: "Isaiah 49:15-16",
    text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands.",
  },
  {
    ref: "Romans 8:38-39",
    text: "Neither death nor life... nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
  },
  {
    ref: "Proverbs 22:6",
    text: "Start children off on the way they should go, and even when they are old they will not turn from it.",
  },
];

const JOURNAL_KEY = "vine_prodigal_child_parent_entries";

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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #1a0a2e 0%, #0d0618 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid white`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function ProdigalChildParentPage() {
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
          <div style={{ display: "inline-block", background: PURPLE + "22", border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, marginBottom: 16 }}>
            Family & Parenting
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Parenting a Prodigal Child
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            The father watched from a long way off. Watchful love — not controlling love, not indifferent love — is the posture that makes reunion possible.
          </p>
        </div>

        {/* Resource Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${PURPLE}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>Al-Anon:</strong> al-anon.org — free support for families of those with addiction<br />
            <strong style={{ color: TEXT }}>Nar-Anon:</strong> nar-anon.org — families of drug users<br />
            <strong style={{ color: TEXT }}>Heartlight Ministries:</strong> heartlightministries.org — troubled teens resources<br />
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
  );
}
