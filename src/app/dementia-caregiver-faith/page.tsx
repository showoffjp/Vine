"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Person Is Still There — Even When the Memory Is Gone", verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them. The imago Dei is not located in cognitive function, memory, or self-awareness. It is inscribed in the person by the Creator, and it does not diminish with dementia. The person you care for who can no longer recognize you, who no longer recalls their own name, who has lost the narrative thread of their life — still bears the image of God. That image does not require a functioning hippocampus to remain real and precious." },
  { title: "God Remembers When the Person Cannot", verse: "Isaiah 49:15-16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands. The person with dementia may have forgotten their caregiver, their children, their own story, and their own faith. God's memory does not have these limitations. He holds the full story — including the decades of faith, love, and service — even when the person no longer can. The caregiver's grief is real; but the person's story is not lost." },
  { title: "Embodied Care Is a Form of Worship", verse: "Matthew 25:40", text: "'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.' Jesus identifies himself with the vulnerable, the forgotten, the diminished. The feeding, bathing, dressing, and sitting with a person with advanced dementia is not merely biological maintenance — it is an encounter with Christ in the person's need. The theology of incarnation includes this: God is met in the body of the one who cannot meet us anywhere else." },
  { title: "The Caregiver Is Also Allowed to Grieve", verse: "John 11:35", text: "Jesus wept. He wept at the tomb of his friend Lazarus — a man he was about to raise. His grief was not contingent on the permanence of the loss. The caregiver whose spouse or parent with dementia is still physically present but no longer relationally present grieves a real loss. This is called ambiguous loss — the person is alive, but the relationship they had is gone. Jesus's tears at Lazarus's tomb give permission to grieve what is lost even before the person dies." },
  { title: "Sabbath Rest Is Not Optional for Caregivers", verse: "Mark 6:31", text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, 'Come with me by yourselves to a quiet place and get some rest.' Jesus withdraws his disciples from serving crowds because sustainable ministry requires rest. The caregiver who cannot stop serving — who has no respite, no community support, no relief — is not honoring the image of God in themselves. Rest is not a reward for completed caregiving; it is a prerequisite for continued caregiving." },
];

const voices = [
  { id: "v1", name: "Joni Eareckson Tada", role: "Quadriplegic since 17, author of A Theology of Suffering, Joni and Friends founder", quote: "Dementia does not erase a person's value. It strips away what we thought was necessary to personhood and leaves what actually is — the beloved image-bearer, known by God, held in his hands.", bio: "Joni Tada has spent decades thinking and writing about disability, suffering, and the theology of the body. Her work specifically addresses care for people with significant cognitive impairment — including dementia — and insists that the church's obligation to those who cannot advocate for themselves is a direct reflection of its theology of the imago Dei." },
  { id: "v2", name: "John Swinton", role: "Professor of practical theology, author of Dementia: Living in the Memories of God", quote: "When we remember someone with dementia, we participate in God's own act of memory. Our remembering is a theological act — a way of insisting that this person's story matters, even when they cannot tell it themselves.", bio: "John Swinton's Dementia: Living in the Memories of God is the most important theological resource on dementia caregiving. He develops the concept of 'faithful presence' — being with the person in a way that honors their full personhood, including their history of faith, their relationships, and their dignity — regardless of cognitive status." },
  { id: "v3", name: "Mary Beth Chapman", role: "Author of Choosing to SEE, dementia caregiver for her father", quote: "The hardest part was not the physical caregiving. It was watching my father — a man of deep faith — lose access to the faith that had defined him. And then learning to trust that God had not lost access to him.", bio: "Mary Beth Chapman has written and spoken about caring for her father as his dementia progressed, including the specific grief of watching someone lose access to the faith practices that had sustained them. Her public processing of that experience has helped thousands of family caregivers navigate the same terrain." },
  { id: "v4", name: "Diane Langberg", role: "Clinical psychologist, author of Suffering and the Heart of God, caregiver trauma specialist", quote: "Dementia caregiving is one of the most sustained forms of grief and stress that human beings experience. Caregivers are among the most at-risk populations for depression, physical illness, and spiritual exhaustion. The church must take that seriously.", bio: "Diane Langberg has addressed the specific psychological and spiritual needs of dementia caregivers in her writing and training. She emphasizes that the cumulative weight of caregiving — including the ambiguous grief of losing someone gradually — produces secondary trauma that requires specific pastoral and clinical attention." },
];

const practices = [
  { icon: "🧠", title: "Learn About Dementia as a Disease, Not a Character Failure", text: "Dementia is a neurological disease. The behavioral changes it produces — agitation, repetition, personality shifts, loss of inhibition — are symptoms of brain disease, not moral failure. Understanding this protects caregivers from personalizing behaviors that are not personal, and helps them respond with medical rather than moral frameworks." },
  { icon: "🏘️", title: "Accept Respite Without Guilt", text: "Most dementia caregivers are chronically sleep-deprived, socially isolated, and physically depleted — and most feel guilty for needing relief. Respite is not abandonment; it is maintenance of the caregiver's capacity to continue. Organizations like Joni and Friends, your local Area Agency on Aging, and the Alzheimer's Association can connect you with respite resources." },
  { icon: "🙏", title: "Develop Rituals of Spiritual Care That Do Not Require Cognition", text: "Many caregivers grieve the loss of shared faith practices with a loved one who has dementia. Music — particularly hymns — often remains accessible in the brain long after other memory has deteriorated. Holding hands in prayer, anointing with oil, reading familiar psalms aloud — these practices can continue and may reach the person in ways that cognitive engagement cannot." },
  { icon: "📞", title: "Connect With the Alzheimer's Association 24/7 Helpline", text: "The Alzheimer's Association (1-800-272-3900) offers a 24/7 helpline staffed by specialists who can help caregivers navigate difficult behavioral symptoms, access resources, plan for the future, and find emotional support. This resource is free and should be used freely — including at 3 AM when a symptom or crisis arises." },
  { icon: "📖", title: "Read Lamentations When Your Own Grief Has No Language", text: "The book of Lamentations is a five-chapter extended cry over a city that has been lost — a beloved place that no longer recognizes itself. It gives language for the specific grief of losing someone to dementia while they are still alive. Reading it slowly, one chapter at a time, is a practice of lament that can hold what words often cannot." },
  { icon: "🏥", title: "Seek Clinical Help for Yourself Before You Reach Crisis", text: "Dementia caregiving is one of the highest risk factors for depression and anxiety in the caregiver population. Early counseling — not crisis counseling, but preventive, supportive therapy — significantly improves caregiver wellbeing and extends the sustainability of home care. You do not need to be in crisis to deserve therapeutic support." },
];

const scriptures = [
  { verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
  { verse: "Isaiah 49:15-16", text: "Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands." },
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "2 Corinthians 4:16", text: "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day." },
  { verse: "Romans 8:38-39", text: "Neither death nor life... will be able to separate us from the love of God that is in Christ Jesus our Lord." },
];

type DementiaEntry = { id: string; date: string; hard: string; gift: string; need: string };

export default function DementiaCaregiverFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DementiaEntry[]>([]);
  const [hard, setHard] = useState(""), [gift, setGift] = useState(""), [need, setNeed] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_dementiacaregiverj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!hard.trim()) return;
    const e: DementiaEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), hard: hard.trim(), gift: gift.trim(), need: need.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_dementiacaregiverj_entries", JSON.stringify(updated));
    setHard(""); setGift(""); setNeed("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_dementiacaregiverj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Dementia Caregiving and Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For those who are caring for a loved one with dementia — watching someone they love disappear gradually while caring for the person who remains, with the full weight of ambiguous grief.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Support:</strong> Alzheimer's Assoc: 1-800-272-3900 &nbsp;|&nbsp; 988 Lifeline &nbsp;|&nbsp; Joni and Friends: joniandfriends.org</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: TEXT, fontSize: "1rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is the hardest part of today's caregiving?</label>
              <textarea value={hard} onChange={e => setHard(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Be specific — the behavior, the grief, the exhaustion..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What gift did you notice in the person today, despite the disease?</label>
              <textarea value={gift} onChange={e => setGift(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="A moment of recognition, warmth, or connection..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What do you need from your church or community this week?</label>
              <textarea value={need} onChange={e => setNeed(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Be specific — presence, practical help, prayer..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Hard:</strong> {e.hard}</p>
                {e.gift && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Gift:</strong> {e.gift}</p>}
                {e.need && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Need:</strong> {e.need}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "jJPVNIAFmvA", title: "Theology of Disability", channel: "Joni and Friends", description: "Joni and Friends on the theology that underlies care for people with significant cognitive and physical disability — including the imago Dei in the person with dementia." },
              { videoId: "sJSFmO6gGlo", title: "Caregiver Burnout and Renewal", channel: "Joni and Friends", description: "Joni and Friends specifically on caregiver burnout — the emotional, physical, and spiritual depletion that accumulates over years of sustained care." },
              { videoId: "m2uDNE9kcSE", title: "Caring for the Caregiver", channel: "Focus on the Family", description: "Focus on the Family on the overlooked needs of family caregivers — and the community and clinical resources that make sustained care possible." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the biblical practice for those in the middle of long, unresolved suffering — essential for caregivers in the ambiguous loss of dementia." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
