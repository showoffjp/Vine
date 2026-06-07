"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Paul's Thorn Was Kept — Grace Was Sufficient", verse: "2 Corinthians 12:8-9", text: "Three times I pleaded with the Lord to take it away from me. But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' For young adults, chronic pain arrives when you expected to be building a career, relationships, and a life. The sufficiency of grace is not a comfort that makes pain disappear — it is a power that makes life possible inside it." },
  { title: "Job Cried Out in His Full Body — God Heard and Answered", verse: "Job 30:17", text: "Night pierces my bones; my gnawing pains never rest. Job described physical pain with brutal precision: bones pierced, gnawing, no rest. God did not rebuke him for naming the bodily experience. He responded to Job's cry. Your physical pain is not invisible to God and not outside the scope of his attention." },
  { title: "Weakness Is the Location of Displayed Power", verse: "2 Corinthians 4:7", text: "But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us. The jar of clay — fragile, limited, breakable — is exactly where the treasure is displayed. Chronic pain at a young age produces a life that is structurally dependent on grace. That dependence is not a failure of the vessel; it is its design." },
  { title: "The Body Will Be Redeemed — This Body Is Not the Final Word", verse: "Romans 8:23", text: "We ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies. Young adults with chronic pain are waiting for a redemption that has been promised. The groaning is real. The promise is real. Neither cancels the other." },
  { title: "Lament About the Body Is Biblical Faithfulness, Not Complaint", verse: "Psalm 31:9-10", text: "Be merciful to me, Lord, for I am in distress; my eyes grow weak with sorrow, my soul and body with grief. My life is consumed by anguish and my years by groaning; my strength fails because of my affliction, and my bones grow weak. The Psalmist named the body's failure precisely and brought it to God as prayer. This is the model." },
];

const voices = [
  { id: "v1", name: "Joni Eareckson Tada", role: "Founder, Joni and Friends", quote: "I have found more of God in the chair than I ever would have on two legs. I say this not from a distance but from within — it is the costly truth.", bio: "Joni became a quadriplegic at 17 — early in her adult life — and has written and spoken across 50+ years about living with severe physical limitation as a young person and throughout adulthood. Her witness is the most sustained Christian account of embodied suffering." },
  { id: "v2", name: "Kate Bowler", role: "Author, No Cure for Being Human", quote: "I got stage IV cancer at 35. What I needed was not explanations but people who could sit with me in the uncertainty of a body that had stopped cooperating.", bio: "Bowler's account of receiving a terminal diagnosis young addresses the specific grief of chronic and life-threatening illness when you expected decades ahead — including what the church gets right and wrong when responding to young adult suffering." },
  { id: "v3", name: "Mike Higton", role: "Theologian, Cambridge", quote: "The theology of the cross insists that God does not stand apart from suffering bodies. The incarnation means God has chronic pain. He meets you in yours.", bio: "Higton's christological approach to suffering and disability insists that the incarnation — God taking a body that suffered, bled, and died — makes all embodied suffering a site of divine solidarity rather than divine absence." },
  { id: "v4", name: "Diane Langberg", role: "Psychologist", quote: "Young adults with chronic illness carry a grief most of their peers cannot understand — the grief of a body that will not let them be who they imagined they would be.", bio: "Langberg addresses the specific psychological dimensions of chronic illness in younger adults — the identity disruption, the social isolation, and the spiritual dimensions of suffering that arrives before the frameworks of maturity are in place." },
];

const practices = [
  { icon: "🏥", title: "Build a Medical Team Who Believes You", text: "Chronic pain in young adults is often dismissed or undertreated. Finding physicians who take your pain seriously — including specialists, pain management clinics, and functional medicine practitioners — is a legitimate and necessary investment of time and energy." },
  { icon: "🧠", title: "Get a Pain-Informed Therapist", text: "Chronic pain has psychological dimensions that are not 'all in your head' — the brain's pain processing is real and treatable through psychological intervention. Cognitive behavioral therapy for chronic pain (CBT-P) has strong evidence for reducing suffering even when pain cannot be cured." },
  { icon: "🤝", title: "Find Community With Others Your Age Who Understand", text: "Most chronic pain communities skew older. Seek young adult chronic illness communities — online and in-person — where peers understand the specific grief of pain before middle age. The isolation of being the only young person in the room who cannot do what others your age can do is real and addressable." },
  { icon: "📖", title: "Read Job, Psalm 31, and Psalm 22 as Your Own Prayers", text: "These texts were written for embodied suffering — not metaphorical spiritual suffering. Read them physically, aloud, as your own prayer. They give language for what chronic pain actually feels like and authorize bringing the body's experience into the conversation with God." },
  { icon: "🛏️", title: "Rest Without Guilt", text: "Chronic pain requires rest that healthy peers do not need. The cultural pressure to perform health and productivity creates guilt on top of pain. Rest is not giving up — it is management of a body that has different requirements. The Elijah model applies: food and sleep before anything else." },
  { icon: "🌱", title: "Identify What You Can Do, Not Only What You Cannot", text: "Chronic pain in young adulthood narrows the field. The temptation is to define yourself entirely by the narrowing. Identify — honestly and with appropriate pacing — what remains possible. Build a life around what is real rather than what was expected." },
];

const scriptures = [
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "Romans 8:23", text: "Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies." },
  { verse: "Psalm 22:24", text: "For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help." },
  { verse: "Isaiah 53:3", text: "He was despised and rejected by mankind, a man of suffering, and familiar with pain." },
  { verse: "2 Corinthians 4:16-17", text: "Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all." },
  { verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made." },
];

type ChronicPainEntry = { id: string; date: string; pain: string; grace: string; possible: string };

export default function ChronicPainYoungAdultPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ChronicPainEntry[]>([]);
  const [form, setForm] = useState({ pain: "", grace: "", possible: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_chronicpainyoungj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.pain.trim()) return;
    const e: ChronicPainEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chronicpainyoungj_entries", JSON.stringify(updated));
    setForm({ pain: "", grace: "", possible: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chronicpainyoungj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Chronic Illness</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Chronic Pain as a Young Adult</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Chronic pain arrives in young adulthood when you expected decades of health. It disrupts career plans, relationships, identity, and faith. This page is specifically for younger adults navigating the specific grief of a body that will not cooperate with the life you expected to have.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>American Chronic Pain Association</strong> — theacpa.org, pain management resources</li>
                <li><strong style={{ color: TEXT }}>Joni and Friends</strong> — joniandfriends.org, faith and disability community</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if chronic pain has become a mental health crisis</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.pain} onChange={e => setForm(f => ({ ...f, pain: e.target.value }))} placeholder="What is your body doing today and what is it costing you?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.grace} onChange={e => setForm(f => ({ ...f, grace: e.target.value }))} placeholder="Where have you experienced sufficient grace today, even if small?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.possible} onChange={e => setForm(f => ({ ...f, possible: e.target.value }))} placeholder="What is still possible today, given what your body allows?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.pain && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Body:</strong> {e.pain}</p>}
                {e.grace && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Grace:</strong> {e.grace}</p>}
                {e.possible && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Possible:</strong> {e.possible}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7KMPN9OLoNo", title: "Suffering and God's Grace", channel: "Joni Eareckson Tada — Desiring God", description: "Joni on a lifetime of quadriplegia — what she has learned about God's character and sufficiency through five decades of sustained physical limitation." },
              { videoId: "y-DQH-M1HuM", title: "When God Doesn't Heal", channel: "The Gospel Coalition", description: "A theological examination of why healing is sometimes withheld — what faithfulness looks like when the thorn in the flesh is kept." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "The biblical vocabulary for bringing bodily suffering honestly to God — the psalms of affliction as prayers for those whose bodies will not cooperate." },
              { videoId: "jJPVNIAFmvA", title: "Theology of Disability", channel: "Joni and Friends", description: "A theological foundation for understanding chronic pain and disability — grounded in the image of God and the promise of bodily resurrection." },
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
