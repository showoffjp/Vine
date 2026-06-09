"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "Death Is the Last Enemy — and It Has Been Defeated",
    body: "'The last enemy to be destroyed is death' (1 Cor 15:26). Christianity does not pretend that death is not real, not painful, not terrible. It insists that death is an enemy — and that this enemy has been defeated. The resurrection of Jesus is the announcement that death does not have the final word. This does not make the dying process easy or painless, and it does not mean there is nothing to grieve. It means the ending is not the end.",
  },
  {
    title: "Good Death as Christian Witness",
    body: "The early church spoke of ars moriendi — the art of dying well. In an age when death was more visible, Christians developed practices and prayers for the dying that helped individuals and communities navigate the transition. This tradition was largely lost in the modern West, where death is medicalized and hidden. A terminal diagnosis can be an invitation to recover this tradition — to die in a way that reflects what you believe about resurrection, about love, about what ultimately matters.",
  },
  {
    title: "Lament and the Psalms for the Dying",
    body: "Psalm 22, which Jesus quoted from the cross — 'My God, my God, why have you forsaken me?' — is the honest prayer of the dying person who feels abandoned. This is in the canon. The dying are allowed to feel forsaken, afraid, angry, and heartbroken. God does not require a cheerful death. What He offers is presence in the valley: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me' (Ps 23:4). The promise is companionship, not exemption.",
  },
  {
    title: "Unfinished Business and the Work of Reconciliation",
    body: "Terminal illness often brings into relief the relationships that need attention — the estrangements that have gone on too long, the words that were never said, the forgiveness that was never offered or received. The dying person may have time that healthy people don't have: time to reach out, to ask forgiveness, to offer it, to say what matters. This is holy work. The dying can offer gifts to the living that no one else can give.",
  },
  {
    title: "Hope as Anchor, Not Denial",
    body: "Christian hope for the dying is not the same as optimism about outcomes. It is hope rooted in who God is — 'an anchor for the soul, firm and secure' (Heb 6:19) — that holds even when the prognosis is certain. Hope can coexist with honest acceptance of what is happening. 'For I am already being poured out like a drink offering, and the time for my departure is near... I have fought the good fight, I have finished the race' (2 Tim 4:6-7). Paul faces death with peace because his hope is not in survival.",
  },
];

const voices = [
  {
    name: "Henri Nouwen",
    role: "Author, Our Greatest Gift: A Meditation on Dying and Caring",
    quote: "Dying is the most important act of living. How we die is intimately bound to how we live. Both are acts of trust, surrender, and love.",
  },
  {
    name: "Kate Bowler",
    role: "Author, Everything Happens for a Reason (diagnosed with stage IV cancer at 35)",
    quote: "There is no 'everything happens for a reason.' But there is love, there is presence, there is beauty in the ordinary, and there is the wild hope of resurrection.",
  },
  {
    name: "Atul Gawande",
    role: "Author, Being Mortal: Medicine and What Matters in the End",
    quote: "Our job in medicine is not to ensure health and survival, but to enable well-being. Well-being is about the reasons one wishes to be alive.",
  },
  {
    name: "C.S. Lewis",
    role: "Author, A Grief Observed",
    quote: "I thought I could describe a state; make a map of sorrow. Sorrow, however, turns out to be not a state but a process.",
  },
];

const practices = [
  {
    title: "Palliative Care and Hospice: Get Them Early",
    body: "Palliative care — specialized medical care focused on symptom relief and quality of life — can be initiated at any stage of serious illness and dramatically improves outcomes, including sometimes extending life. Hospice care is appropriate when curative treatment is no longer the goal and prognosis is six months or less. Both are significantly underutilized. Research shows that early hospice referral often extends life while improving its quality. Ask your medical team: 'Can we bring in palliative care?'",
  },
  {
    title: "Advance Directives and End-of-Life Planning",
    body: "Advance directives — including a Living Will and Durable Power of Attorney for Healthcare — ensure your wishes are honored when you cannot speak for yourself. The POLST (Physician Orders for Life-Sustaining Treatment) is for those with serious illness and translates wishes into medical orders. Five Wishes (agingwithdignity.org) is a widely used, easy-to-complete advance directive. Having these conversations and completing these documents is a profound act of love for the family members who would otherwise have to make decisions without guidance.",
  },
  {
    title: "The Work of Saying What Matters",
    body: "Many people carry unsaid things into their dying. Dr. Ira Byock's book The Four Things That Matter Most identifies four things the dying and their loved ones most need to say: 'I forgive you. Forgive me. Thank you. I love you. Goodbye.' These are not always easy conversations, but they are often transformative — for the dying and for those who remain. A chaplain, therapist, or trusted pastor can facilitate these conversations when they feel impossible.",
  },
  {
    title: "Spiritual Care: Chaplains and Spiritual Direction",
    body: "Chaplains — trained spiritual care professionals — are available in hospitals, hospices, and many healthcare settings, and serve people of all faith backgrounds. A good chaplain will meet you where you are spiritually without judgment. Spiritual directors who specialize in end-of-life accompaniment can provide ongoing companionship through the dying process. These resources are often free or low-cost. Ask your hospice or hospital: 'Can I speak with a chaplain?'",
  },
  {
    title: "Creating a Legacy",
    body: "Many dying people find profound meaning in leaving something behind — not necessarily through wealth, but through story. A recorded interview with loved ones, a letter to each child or grandchild, a memoir however short, an organized photo album, a recipe collection, or simply time spent in honest conversation about your life and what it meant. Legacy projects serve both the dying (integrating their life story) and the living (who will grieve). Hospices sometimes provide legacy project support.",
  },
  {
    title: "For Those Who Love a Dying Person",
    body: "Caregivers and family members of the dying carry their own grief — anticipatory grief for what is coming, caregiver fatigue, and the profound weight of loving someone who is leaving. Hospice organizations provide support not just for the dying but for their families, including bereavement services that continue after death. NAMI and GriefShare both offer resources for those in anticipatory grief. You cannot pour from an empty cup — your needs matter too.",
  },
];

const scriptures = [
  {
    ref: "Psalm 23:4",
    text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
  },
  {
    ref: "1 Corinthians 15:55-57",
    text: "Where, O death, is your victory? Where, O death, is your sting?... But thanks be to God! He gives us the victory through our Lord Jesus Christ.",
  },
  {
    ref: "Romans 8:38-39",
    text: "Neither death nor life... nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
  },
  {
    ref: "2 Timothy 4:6-7",
    text: "For I am already being poured out like a drink offering, and the time for my departure is near. I have fought the good fight, I have finished the race, I have kept the faith.",
  },
  {
    ref: "Revelation 21:4",
    text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
  },
  {
    ref: "Hebrews 6:19",
    text: "We have this hope as an anchor for the soul, firm and secure.",
  },
];

const JOURNAL_KEY = "vine_terminal_illness_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "Hope that Holds – Elevation Church" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
  { videoId: "G-2e9mMf7E8", title: "Gospel of John – BibleProject" },
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

export default function TerminalIllnessPage() {
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
            End of Life & Dying Well
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Terminal Illness & Dying Well
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            Death is the last enemy — and it has been defeated. The valley is dark, but you do not walk it alone.
          </p>
        </div>

        {/* Resource Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${PURPLE}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>National Hospice and Palliative Care Organization:</strong> nhpco.org<br />
            <strong style={{ color: TEXT }}>Five Wishes Advance Directive:</strong> agingwithdignity.org<br />
            <strong style={{ color: TEXT }}>GriefShare:</strong> griefshare.org — for families walking alongside<br />
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
              Write what you want to say. To God. To your loved ones. For yourself. Your entries are saved locally on this device only.
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
