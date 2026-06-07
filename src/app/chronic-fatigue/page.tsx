"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "ME/CFS Is a Real Disease — Not a Failure of Will", verse: "Psalm 88:15", text: "From my youth I have suffered and been close to death; I have borne your terrors and am in despair. Myalgic Encephalomyelitis/Chronic Fatigue Syndrome is among the most debilitating diseases on the WHO list. Post-exertional malaise — the worsening of symptoms after minimal exertion — is a distinguishing marker that separates ME/CFS from general tiredness or depression. People with ME/CFS are not weak, not uncommitted to wellness, and not failing spiritually. They are carrying a physiological cross that most people cannot see." },
  { title: "God Is Present in the Bedridden Place", verse: "Psalm 139:7-8", text: "Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there. Many with ME/CFS spend hours, days, or weeks in bed — some, years. The gospel is not primarily a call to activity. God's presence is not conditional on mobility, productivity, or the ability to attend services. God is there in the bed. God is there in the darkness of a darkened room. His presence does not diminish when yours is confined." },
  { title: "Lament Is the Honest Response — Not a Sign of Insufficient Faith", verse: "Lamentations 1:12", text: "Is it nothing to you, all you who pass by? Look around and see. Is any suffering like my suffering that was inflicted on me? The invisibility of ME/CFS — the disease that looks normal from the outside while devastating from the inside — produces a particular kind of loneliness. The laments of Scripture validate the experience of suffering that others cannot see. Your honest cry is not a failure of faith — it is faith taking the form it must take." },
  { title: "Pacing Is Wisdom, Not Laziness", verse: "Proverbs 14:29", text: "Whoever is patient has great understanding, but one who is quick-tempered displays folly. The primary management approach for ME/CFS — pacing, staying within the energy envelope, avoiding the push-crash cycle — runs directly against the evangelical ethos of pushing through, dying to self, and serving regardless of cost. But pushing through with ME/CFS causes measurable physiological harm. Pacing is not laziness or self-indulgence. It is stewardship of a body under siege. Wisdom knows the difference." },
  { title: "Suffering Produces Witness — Even Bedridden Witness", verse: "2 Corinthians 12:9-10", text: "My grace is sufficient for you, for my power is made perfect in weakness. Paul's thorn in the flesh — whatever it was — was not removed. But it became the site of grace. People with severe ME/CFS who live with faith, who endure with honesty, who maintain relationship with God through decades of limitation, are living one of the most powerful witnesses available. The watching world sees something different from triumph. They see endurance, and endurance has its own testimony." },
];

const voices = [
  { id: "jt", name: "Joni Eareckson Tada", role: "Founder, Joni and Friends; Disability Theologian", quote: "Suffering is not a detour from the path God has for you. It is often the path itself. The disability experience teaches things about God's presence, God's sufficiency, and the limits of human striving that health simply cannot teach.", bio: "Tada's decades of living as a quadriplegic while maintaining deep faith have made her the most influential voice in Christian disability theology. Her work has shaped how millions of Christians understand suffering, dignity, and God's presence in limitation." },
  { id: "km", name: "Kate Moss (ME/CFS Community Leader)", role: "ME Association UK", quote: "The cruelty of ME/CFS is that it punishes the attempt to recover. The people who push through — who do what they did before they got sick — are the ones who become most severely ill. This is not a character description. It is a physiological reality.", bio: "The ME Association provides research summaries, patient guides, and community for people living with ME/CFS. Their resources are among the most reliable available for patients and those who care for them." },
  { id: "eb", name: "Ellen Painter Dollar", role: "Author, No Easy Choice; Disability and Faith Writer", quote: "The theology that says God will heal if you have enough faith, or that illness indicates unconfessed sin, is not just wrong — it is destructive. People with chronic illness are carrying enough weight without the added burden of a God who blames them for their suffering.", bio: "Dollar writes with unusual clarity about the theology of chronic illness, the limits of prosperity gospel thinking, and what genuine faith looks like when healing does not come. Her work is essential for Christians navigating long-term illness." },
];

const practices = [
  { icon: "📋", title: "Get a Proper Diagnosis from an ME/CFS Specialist", text: "ME/CFS is notoriously underdiagnosed and misdiagnosed. Many patients go years being told their symptoms are psychological, that they just need to exercise more, or that nothing is wrong. The Canadian Consensus Criteria and the 2015 IOM diagnostic criteria are the most current. Seek a physician who accepts ME/CFS as a physiological disease. The Bateman Horne Center (batemanhornecenter.org) provides specialist referrals and patient resources." },
  { icon: "⚡", title: "Learn and Practice Pacing", text: "Pacing — staying within your energy envelope and avoiding the push-crash cycle — is the most evidence-supported self-management strategy for ME/CFS. This means stopping activity before you feel tired, not after. It means rest as a medical necessity, not optional luxury. It means saying no to activities that will cost more than you have. Pacing is not giving up — it is the primary way to prevent further deterioration." },
  { icon: "🤝", title: "Build a Support System That Understands the Disease", text: "ME/CFS is frequently misunderstood even by close family and friends. People who love you may encourage pushing through, more exercise, or positive thinking — all of which can be harmful. Find a few people willing to genuinely learn about ME/CFS from credible sources (MEAction.net, SOLVE ME). Explain post-exertional malaise specifically. Consider sharing materials from the CDC's ME/CFS patient resources." },
  { icon: "✝️", title: "Find a Community That Comes to You", text: "Many with moderate or severe ME/CFS cannot attend church. Some churches stream services; some visit. But if your church community disappears when you can no longer show up physically, that is an ecclesiological failure, not a personal one. Look for online communities of Christians with chronic illness (Chronic Joy Ministry, Rest Ministries). You are still part of the body even when you cannot be present bodily." },
];

const scriptures = [
  { verse: "Psalm 88:1-3", text: "Lord, you are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry. I am overwhelmed with troubles and my life draws near to death." },
  { verse: "Isaiah 40:29-31", text: "He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength." },
  { verse: "2 Corinthians 4:16-17", text: "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
  { verse: "Job 30:17", text: "Night pierces my bones; my gnawing pains never rest." },
];

type CFEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ChroniFatiguePage() {
  const [tab, setTab] = useState("theology");
  const [cfJournal, setCfJournal] = useState<CFEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_cfatigueej_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_cfatigueej_entries", JSON.stringify(cfJournal)); } catch {}
  }, [cfJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setCfJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setCfJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Chronic Illness & Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>ME/CFS and Chronic Fatigue</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          Faith, pacing, and God's presence in the bedridden and housebound places.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Illness Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>Where am I physically and emotionally today?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What truth about God am I holding onto today?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One small thing within my current capacity today</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {cfJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {cfJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Today: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Truth: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Step: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7KMPN9OLoNo", title: "Joni Eareckson Tada on Suffering and God's Grace", channel: "Desiring God", description: "Joni speaks from over five decades of disability about what she has learned of God's grace in chronic weakness — deeply relevant for those whose illness is invisible and misunderstood." },
              { videoId: "y-DQH-M1HuM", title: "When God Doesn't Heal", channel: "The Gospel Coalition", description: "A pastoral treatment of the question every chronically ill Christian wrestles with: what do I do with unanswered prayers for healing and a body that remains ill?" },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the biblical language for sustained suffering — how to pray honestly in the darkness of chronic illness that does not resolve." },
              { videoId: "jJPVNIAFmvA", title: "The Theology of Disability and Weakness", channel: "Joni and Friends", description: "A theological framework for understanding chronic illness and disability as part of God's design, not a deviation from it — and what the church's calling is toward those who suffer." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
