"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a0818 0%, #06050f 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(107,79,187,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

const JOURNAL_KEY = "vine_chronic_pain_entries";
interface JournalEntry { id: string; date: string; text: string; }

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function ChronicPainPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(JOURNAL_KEY);
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED, textTransform: "uppercase", letterSpacing: 2 }}>
          Vine Pastoral Care
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
          Chronic Pain & Invisible Illness
        </h1>
        <p style={{ color: MUTED, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
          Living with pain that never fully leaves — or illness no one can see — is an exhausting
          and often isolating experience. Your suffering is real. Your faith does not require you to pretend otherwise.
        </p>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{
              padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`,
              background: tab === i ? ACCENT : "transparent", color: tab === i ? TEXT : MUTED,
              cursor: "pointer", fontSize: 14, fontWeight: tab === i ? 700 : 400, transition: "all 0.2s"
            }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Pain Is Not Punishment", body: "The prosperity gospel has caused profound spiritual harm to people with chronic illness by implying that health is the reward for faith. Jesus explicitly dismantled this equation in John 9:3 — the man was born blind 'neither because he sinned nor because his parents sinned.' Chronic pain is not a sign of spiritual failure. Repeating this to yourself is not weakness; it is fighting heresy." },
              { title: "The Theology of the Thorn", body: "Paul's 'thorn in the flesh' (2 Corinthians 12:7–10) is one of the most important texts for chronic illness in Scripture. Paul asked three times for it to be removed. It was not. God's response was not 'have more faith' — it was 'my grace is sufficient.' The theological move Paul makes is staggering: he learns to boast in weakness because it is where Christ's power rests. This is not optimistic denial. It is a hard-won, theologically grounded peace." },
              { title: "Lament as Spiritual Discipline", body: "The Psalms model crying out to God without immediate relief — Psalm 88 ends without resolution, in darkness. This is canonized grief. The church's tendency to move quickly to comfort has robbed people with chronic illness of permission to lament. Naming the pain to God — including anger that prayer has not removed it — is not a lack of faith. It is honest faith." },
              { title: "Invisible Illness and the Problem of Disbelief", body: "Many chronic illnesses — fibromyalgia, ME/CFS, POTS, Lyme disease, long COVID, lupus, endometriosis — are invisible and often disbelieved, including by the medical community. Being told 'you look fine' or 'tests are normal' while living in constant pain creates a secondary wound of disbelief. The church must be a community that believes the sufferer's report of their own experience without demanding visible proof." },
              { title: "Participation Not Productivity", body: "Western Christianity has absorbed the culture's equation of worth with productivity. Chronic illness often limits what a person can produce, attend, or contribute — and many people with chronic pain report feeling spiritually marginalized in churches that value activity. Theology rooted in the imago dei insists on inherent worth. You do not have to earn your place in the community of faith by being well enough to serve." },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 8, fontSize: 17 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Kate Bowler", role: "Historian, Author of Everything Happens for a Reason — and Other Lies I've Loved", quote: "Blessed and not feeling it. That's what most Christian life actually looks like, and we have very little language for it.", insight: "Bowler was diagnosed with stage IV colon cancer at 35 while studying the prosperity gospel. Her work brilliantly exposes how toxic theology harms the sick and offers an alternative grounded in honest lament and unearned love." },
              { name: "Paul (2 Corinthians 12)", role: "Apostle", quote: "Three times I pleaded with the Lord to take it away from me. But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'", insight: "Paul models the entire arc: honest petition (three times), refusal, theological reframe, and hard-won peace. He did not pretend the thorn was not there. He did not say it was God's best gift. He learned to live with it." },
              { name: "John Swinton", role: "Professor of Practical Theology, Aberdeen", quote: "To be a person in pain is to be a person in need of being heard. The ministry of presence — of bearing witness to pain without fixing it — is among the most important spiritual practices the church can offer.", insight: "Swinton's theology of disability and chronic illness challenges the church's medical model of ministry (fix the sick) and argues for a presence model (be with the suffering)." },
              { name: "Joni Eareckson Tada", role: "Founder, Joni and Friends", quote: "God permits what he hates to accomplish what he loves. I don't understand it. I have simply learned to trust it.", insight: "Tada has lived with quadriplegia since age 17. Her decades of reflection on suffering, disability, and the goodness of God carry the authority of lived experience. Her writing is honest about the cost of her theology — she has paid for it." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: ACCENT, fontSize: 13, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, color: TEXT, fontStyle: "italic", margin: "0 0 12px" }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.insight}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Pain Neuroscience Education (PNE)", body: "Modern pain science has fundamentally changed our understanding of chronic pain. Pain is not always a reliable indicator of tissue damage — the nervous system can become sensitized and amplified. Learning pain neuroscience (through a pain psychologist or occupational therapist trained in PNE) can reduce fear of pain and improve function. This is not dismissing pain; it is understanding it accurately." },
              { title: "Acceptance and Commitment Therapy for Pain", body: "ACT (Acceptance and Commitment Therapy) has strong evidence for chronic pain — not by eliminating pain, but by reducing suffering through changing your relationship to pain. The goal is psychological flexibility: moving toward a meaningful life while carrying pain. Many pain clinics now offer ACT-based programs." },
              { title: "Pacing and Energy Management", body: "For those with energy-limiting conditions (ME/CFS, long COVID, fibromyalgia), pacing is a core skill: matching activity to available energy rather than boom-and-bust cycles. The goal is a sustainable baseline, not maximum output. Occupational therapists specializing in chronic illness can help design a pacing plan." },
              { title: "Build a Medical Team That Believes You", body: "Finding clinicians who believe and understand your condition is itself a therapeutic intervention. A rheumatologist who dismisses fibromyalgia, or a GP unfamiliar with dysautonomia, is not serving your care. Advocate for referrals. Seek out practices familiar with your diagnosis. Bring a trusted person to appointments for support and documentation." },
              { title: "Online Community When In-Person Is Impossible", body: "Many people with chronic illness cannot consistently attend church or support groups. Online communities — chronic illness faith communities, condition-specific support groups — provide connection without the physical demand. The church should develop accessible online participation intentionally, not as an afterthought." },
              { title: "Practice the Presence of God in Pain", body: "Brother Lawrence's practice of the presence of God was developed in a kitchen, not a cathedral. Contemplative practices adapted for low-energy, high-pain days — breath prayer, the Jesus Prayer, simple centering practices — make God accessible when you cannot do anything else. Suffering itself can become a form of prayer." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 8, fontSize: 16 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>Support Resources</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "988 Suicide & Crisis Lifeline", val: "Call or text 988 (chronic illness increases suicide risk)" },
                  { label: "American Chronic Pain Association", val: "theacpa.org — education and peer support" },
                  { label: "Joni and Friends", val: "joniandfriends.org — disability ministry and community" },
                  { label: "Dysautonomia International", val: "dysautonomiainternational.org" },
                  { label: "ME/CFS & Long COVID Resources", val: "solvecfs.org — research and support" },
                ].map(r => (
                  <div key={r.label} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <span style={{ color: TEXT, fontWeight: 600, minWidth: 200 }}>{r.label}:</span>
                    <span style={{ color: MUTED }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.", note: "God's answer to Paul's pain was not healing — it was grace. This text must be read slowly by the sick and not weaponized by the healthy." },
              { ref: "John 9:3", text: "Neither this man nor his parents sinned, said Jesus, but this happened so that the works of God might be displayed in him.", note: "Jesus explicitly disconnects illness from sin or spiritual failure. The theological error of punishment-theology is not new; Jesus corrected it directly." },
              { ref: "Psalm 88:1–2, 18", text: "Lord, you are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry... Darkness is my closest friend.", note: "The only psalm that ends without resolution — in darkness. Its presence in the canon validates lament that finds no relief." },
              { ref: "Romans 8:18", text: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.", note: "Paul does not deny the present sufferings — he acknowledges them fully before making his eschatological comparison. The first word matters: present suffering is real." },
              { ref: "Isaiah 53:3–4", text: "He was despised and rejected by mankind, a man of suffering, and familiar with pain... Surely he took up our pain and bore our suffering.", note: "The suffering servant is acquainted with pain. Your suffering is known to One who carried it himself. This is not distance theology." },
              { ref: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.", note: "The eschatological promise is bodily, concrete, and complete. The new creation does not only heal souls — it heals bodies. The horizon of hope is total restoration." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: 6 }}>{s.ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 8, lineHeight: 1.6 }}>"{s.text}"</div>
                <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{s.note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  "What theological messages — spoken or unspoken — have you received about why you are still sick? How have they affected your faith?",
                  "What do you wish the people in your life understood about living with your condition that they currently do not?",
                  "When has God felt most present in your suffering? When has God felt most absent?",
                  "What does a meaningful day look like when your body cooperates less than usual? What small things carry value even on hard days?",
                ].map(q => (
                  <div key={q} style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, paddingLeft: 12, borderLeft: `2px solid ${BORDER}` }}>{q}</div>
                ))}
              </div>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="Write your thoughts here..."
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 12, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                Save Entry
              </button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 12 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Teaching on chronic illness, suffering, lament, and the theology of the thorn.
            </p>
            <div style={{ display: "grid", gap: 20 }}>
              <VideoEmbed videoId="4Eg_di-O8nM" title="When Healing Doesn't Come: Theology for the Chronically Ill" />
              <VideoEmbed videoId="G-2e9mMf7E8" title="The Thorn in the Flesh: Paul's Theology of Suffering" />
              <VideoEmbed videoId="7_CGP-12AE0" title="Lament as Worship: Praying the Dark Psalms" />
              <VideoEmbed videoId="sIaT8Jl2zpI" title="Invisible Illness and the Body of Christ" />
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
