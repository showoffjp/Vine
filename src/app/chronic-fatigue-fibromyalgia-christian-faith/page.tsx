"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_chronic_fatigue_fibro_entries";
interface JournalEntry { id: string; date: string; text: string; }

export default function ChronicFatigueFibromyalgia() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");

  function saveEntry() {
    if (!draft.trim()) return;
    const next = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Chronic Illness</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Chronic Fatigue, Fibromyalgia, and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>When the body will not cooperate, when no one believes you, and when faith must be reimagined for a smaller life.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> ME/CFS Association: solvecfs.org &nbsp;|&nbsp; Fibromyalgia Network: fmnetnews.com &nbsp;|&nbsp; American Chronic Pain Assoc.: theacpa.org &nbsp;|&nbsp; 988 Lifeline
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Your Illness Is Real — And You Are Not Imagining It</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Myalgic encephalomyelitis/chronic fatigue syndrome (ME/CFS), fibromyalgia, and related conditions are among the most dismissed illnesses in medicine. Patients are routinely told their symptoms are psychosomatic, that they are depressed, that they should exercise more. The emerging science of post-viral illness, neuroinflammation, and central sensitization demonstrates that these are real, measurable, physiological conditions — not failures of attitude or spirituality. If your faith community has told you that your illness reflects a lack of faith or that God wants to heal you and you just need to believe more — that teaching is both theologically and medically irresponsible. Your illness is real. You are not weak. You are not lacking faith.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Paul&apos;s Thorn and the Theology of Unanswered Healing Prayer</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>In 2 Corinthians 12:7–9, Paul describes a thorn in the flesh — a persistent affliction that he prayed three times for God to remove. God&apos;s answer was not healing but grace: My grace is sufficient for you, for my power is made perfect in weakness. The thorn remained. Paul&apos;s faith did not fail. His theology of weakness was not a consolation prize — it became one of the most foundational statements in Christian spirituality. If you have prayed for healing and it has not come, you are in Paul&apos;s company. The unanswered prayer is not evidence of insufficient faith. It may be an invitation into a form of life that the healed never access.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>A Smaller Life Is Still a Whole Life</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Chronic fatigue and fibromyalgia often force a profound reduction of life&apos;s scope. Careers change or end. Social commitments are dramatically reduced. Church attendance becomes impossible on bad days. The dreams and plans that once seemed possible are revised or abandoned. Western Christian culture, with its emphasis on productivity, contribution, and active service, can make this contraction feel like spiritual failure. But contemplative Christianity has always known that a limited life, fully inhabited, is more spiritually rich than an expansive life lived on the surface. The Desert Fathers lived in cells. Julian of Norwich spent decades bedridden. Thomas a Kempis argued that it is better to know how to humble yourself than to know all the sciences. A smaller life is not a lesser life.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Grief of the Body That Fails</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Chronic illness involves layers of grief: the person you were before you got sick, the future you had imagined, the activities and roles that are no longer possible, the relationships that have not survived your illness, the credibility you lost from those who did not believe you. This is legitimate grief and it deserves to be processed fully, not explained away with Romans 8:28. Job&apos;s friends tried to explain his suffering away. God rebuked them, not Job. The one who raged and questioned and refused to pretend was the one God vindicated. Your grief about what your illness has taken from you is not a lack of faith. It is an appropriate response to real loss.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Presence Without Performance</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Many people with ME/CFS and fibromyalgia describe a spiritual transformation that their illness forced: the discovery that worth is not earned by productivity, that prayer is possible from bed, that God is present in the smallness as much as in the achievement. Contemplative prayer, breath prayer, the Daily Office in minimal form — these practices become accessible and meaningful precisely because performance is impossible. The illness that stripped away the doing may be uncovering a deeper form of being. This does not make the illness good. But it does mean that the spiritual life you are living now, from within limitation, is not a second-rate version of a real spiritual life.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Kate Bowler", title: "Everything Happens for a Reason (And Other Lies I Have Loved)", quote: "In North American Christianity, when something terrible happens, we believe there must be a reason. And if there is a reason, maybe the afflicted person caused it. That is not theology. That is cruelty wearing theology's clothes." },
              { name: "Barbara Brown Taylor", title: "Learning to Walk in the Dark", quote: "Some of the most important things I have learned about God, I learned in the dark — in the places where the body gave out and the ego had nothing left to prove. Those dark places were not detours. They were destinations." },
              { name: "Esther Fleece Allen", title: "No More Faking Fine", quote: "There is a difference between acceptance and resignation. Acceptance says: this is real, it is here, I will not pretend otherwise. Resignation says: I give up. The first is faith. The second is despair. We can have the first without the second." },
              { name: "Henri Nouwen", title: "The Wounded Healer", quote: "It is not the lack of suffering that makes a person spiritually mature, but what they do with it. The wounded healer carries pain without being destroyed by it, and offers presence to others from within it." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 12 }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ color: ACCENT, fontWeight: 600 }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{v.title}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Pacing — The Core ME/CFS Management Tool", body: "Post-exertional malaise (PEM) — crashing after exertion — is the hallmark of ME/CFS. Pacing means staying within your energy envelope to avoid crashes, not pushing through. The Health Rising website (health-rising.com) and ME Association (meassociation.org.uk) have detailed pacing guides. Heart rate monitoring is one tool for objective pacing. This is a medical management strategy, not a spiritual defeat." },
              { title: "Specialist Care for Fibromyalgia and ME/CFS", body: "Both conditions require physicians who take them seriously and understand their specific management. The Solve ME/CFS Initiative (solvecfs.org) and the American Fibromyalgia Syndrome Association (afsafund.org) have provider directories. Treatment may include low-dose naltrexone, sleep management, graded approaches tailored to your specific condition, and pain management specialists." },
              { title: "Online Patient Communities", body: "Because leaving the house is difficult or impossible on many days, online communities are often the most accessible support. ME/CFS and fibromyalgia communities on Reddit (r/cfs, r/Fibromyalgia), Inspire, and Facebook provide peer support from people who understand the specific experience. These communities can also be valuable sources of information about what has helped others." },
              { title: "Contemplative Prayer Practices", body: "Centering prayer, breath prayer, and the Daily Office in minimal form are accessible from bed or from severe limitation. Contemplative Outreach (contemplativeoutreach.org) has resources. A single verse prayed slowly and repeatedly throughout the day — the Jesus Prayer, for example — is a practice with centuries of attestation in Christian tradition that requires almost no energy." },
              { title: "Accommodation and Disability Resources", body: "If ME/CFS or fibromyalgia is preventing you from working, Social Security disability benefits (SSA.gov), state vocational rehabilitation programs, and the Job Accommodation Network (askjan.org) can help. Many patients have had to appeal multiple times for SSA disability — getting a disability attorney (usually paid only if you win) from the start improves outcomes." },
              { title: "Grief Processing for Illness Loss", body: "The losses imposed by chronic illness deserve the same grief processing as any other major loss. A therapist familiar with chronic illness (psychology today allows filtering by this specialization) can provide space to grieve the before-illness self without pathologizing appropriate sadness. Acceptance and Commitment Therapy (ACT) has particularly good evidence for supporting quality of life with chronic illness." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "2 Corinthians 12:9", text: "But he said to me, My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
              { ref: "Psalm 22:1–2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer, by night, but I find no rest." },
              { ref: "Isaiah 40:29–31", text: "He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength." },
              { ref: "Matthew 11:28–30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls." },
              { ref: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
              { ref: "Job 30:27", text: "The churning inside me never stops; days of suffering confront me." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8 }}>{s.ref}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, marginBottom: 12 }}>Private Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Stored only on this device. Not shared with anyone.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What has this illness taken from you? What has it, unexpectedly, given you access to?"
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 15, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15 }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{e.text}</p>
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: 10, padding: "6px 14px", background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 6, cursor: "pointer", fontSize: 13 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="4Eg_di-O8nM" title="Paul's Thorn — When God Says No to Healing Prayer" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="A Smaller Life Is Still a Whole Life — Faith and Chronic Illness" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Praying from Bed — Contemplative Faith in the Body's Limits" />
            <VideoEmbed videoId="7_CGP-12AE0" title="When the Body Fails — Theology of Chronic Suffering" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
