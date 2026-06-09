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
    title: "Trauma Is Not Spiritual Weakness",
    body: "Post-traumatic stress is a neurobiological response to overwhelming experience — not a lack of faith, not unconfessed sin, not spiritual inadequacy. Your nervous system responded to something catastrophic by encoding it in a way that protects you from future harm. That is what nervous systems are designed to do. PTSD is not a character flaw; it is a wound. God does not condemn wounded people for being wounded.",
  },
  {
    title: "The Bible Is Full of Traumatized People",
    body: "Joseph was sold into slavery by his brothers, falsely accused, and imprisoned for years. Naomi watched her husband and both sons die in a foreign land. David was relentlessly hunted by a king who wanted him dead. The psalms of lament — 'My God, my God, why have you forsaken me?' (Ps 22:1) — read like trauma narratives. God preserved these stories not to show that the faithful don't suffer, but to show that He is present in the depths of the worst suffering.",
  },
  {
    title: "The Body Keeps the Score",
    body: "Trauma researcher Bessel van der Kolk's landmark work (The Body Keeps the Score) confirmed what pastoral theology has slowly learned: trauma lives in the body. Flashbacks, hypervigilance, physical symptoms, and dissociation are not spiritual problems — they are physiological responses that require somatic healing alongside psychological and spiritual healing. A theology of incarnation — that God took on a body — means the body matters and bodily healing matters.",
  },
  {
    title: "Lament as Sacred Path",
    body: "The biblical tradition of lament — raw, unfiltered expression of pain before God — is profoundly therapeutic as well as spiritual. Psalm 88 ends in darkness. Jeremiah cursed the day he was born. Job argued with God at length. These people were not rebuked for their honesty; they were held in it. Trauma survivors who have been told to 'just praise God' or 'move past it' have often been robbed of the lament that would have helped them heal.",
  },
  {
    title: "Redemption Does Not Erase — It Transforms",
    body: "Christian hope for trauma survivors is not that the trauma will be erased or forgotten. It is that what was meant for destruction can be transformed into something that serves life. Joseph says to his brothers, 'You intended to harm me, but God intended it for good' (Gen 50:20) — not because the harm wasn't harm, but because God was at work in and through it. The resurrection doesn't erase the wounds; Christ still bears the marks. Redemption transforms.",
  },
];

const voices = [
  {
    name: "Diane Langberg",
    role: "Psychologist, trauma specialist, author of Suffering and the Heart of God",
    quote: "Trauma is the great teacher of the church's inadequacy and the great call back to Christ's sufficiency. We must become places of refuge — not wounding.",
  },
  {
    name: "Curt Thompson",
    role: "Psychiatrist & author, The Soul of Shame and Anatomy of the Soul",
    quote: "Shame is the most disintegrating emotion a human can experience. The gospel is the announcement that you are known and not condemned — and that announcement is neurologically and spiritually transforming.",
  },
  {
    name: "Bessel van der Kolk",
    role: "Trauma researcher & author, The Body Keeps the Score",
    quote: "Traumatized people chronically feel unsafe inside their bodies. The past is alive in the form of gnawing interior discomfort. Their bodies are constantly bombarded by visceral warning signs.",
  },
  {
    name: "Chuck DeGroat",
    role: "Therapist & author, When Narcissism Comes to Church",
    quote: "Healing is not a destination but a way of walking. The traumatized person doesn't need to arrive somewhere — they need companions for the road.",
  },
];

const practices = [
  {
    title: "Trauma-Focused Therapy Is Non-Negotiable",
    body: "PTSD responds best to trauma-focused treatments: EMDR (Eye Movement Desensitization and Reprocessing), Prolonged Exposure (PE), Cognitive Processing Therapy (CPT), and Somatic Experiencing. These are not secular alternatives to faith; they are the current best clinical tools for healing neurobiological wounds. Find a therapist trained in one of these modalities. Psychology Today's therapist finder (psychologytoday.com) lets you filter by specialty and insurance.",
  },
  {
    title: "Safety Before Processing",
    body: "Trauma therapy follows a phased model: Safety first, then processing, then integration. You cannot meaningfully process traumatic memories until you feel safe enough, stable enough, and resourced enough. This may mean months of building stabilization skills before directly addressing the traumatic events. A good trauma therapist will pace this carefully. If you are still in a dangerous situation, safety must come before processing.",
  },
  {
    title: "Somatic Practices for Nervous System Regulation",
    body: "The nervous system that holds trauma needs direct intervention — not just talking and thinking. Practices that help: slow diaphragmatic breathing (4 counts in, 6 counts out), progressive muscle relaxation, grounding exercises (5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste), gentle yoga, walking. These are not spiritual bypasses; they are ways of tending the body that holds the trauma.",
  },
  {
    title: "Finding Community That Holds Complexity",
    body: "Trauma survivors need people who can sit with complexity — who will not rush toward silver linings, who will not explain suffering away, who will stay present without fixing. Churches that practice contemplative prayer, that have integrated lament into their liturgy, and that have trauma-informed leadership tend to be safer for survivors. Peer support groups specifically for trauma survivors (NAMI, RAINN, veteran groups) can be invaluable.",
  },
  {
    title: "Medication and Medical Evaluation",
    body: "PTSD often involves dysregulation of the HPA axis, altered cortisol rhythms, and changes in brain structure. Medication can be an important part of treatment — particularly SSRIs and SNRIs, which have FDA approval for PTSD, and in some cases prazosin for nightmares. Consult with a psychiatrist who understands trauma. Medication is not a sign of weak faith; it is neurological support for a neurologically affected system.",
  },
  {
    title: "Spiritual Direction with a Trauma-Informed Director",
    body: "Spiritual direction — meeting regularly with a trained guide to attend to the movements of God in your life — can complement therapy beautifully for trauma survivors. The key is finding a director who understands trauma, will not spiritualize or minimize your experience, and can hold space for the complexity of your relationship with God post-trauma. Spiritual Directors International (sdiworld.org) helps find trained directors.",
  },
];

const scriptures = [
  {
    ref: "Psalm 22:1-2",
    text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer.",
  },
  {
    ref: "Isaiah 43:2",
    text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned.",
  },
  {
    ref: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
  },
  {
    ref: "Genesis 50:20",
    text: "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.",
  },
  {
    ref: "Romans 8:26",
    text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.",
  },
  {
    ref: "2 Corinthians 1:3-4",
    text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.",
  },
];

const JOURNAL_KEY = "vine_ptsd_trauma_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
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

export default function PTSDTraumaPage() {
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
            Trauma & Recovery
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            PTSD & Trauma Recovery
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            Trauma is not spiritual weakness. God is present in the depths of the worst suffering, and healing is possible.
          </p>
        </div>

        {/* Crisis Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${GREEN}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: GREEN, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>RAINN:</strong> 1-800-656-4673 or rainn.org — sexual violence support<br />
            <strong style={{ color: TEXT }}>Veterans Crisis Line:</strong> 988 then press 1, or text 838255<br />
            <strong style={{ color: TEXT }}>NAMI:</strong> 1-800-950-NAMI — mental health support<br />
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
              Write freely. You don't have to be coherent. Your entries are saved locally on this device only.
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
