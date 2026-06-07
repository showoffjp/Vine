"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "You Cannot Fix What Only God Can Transform", verse: "Ezekiel 36:26", text: "I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh. Parents of adult children with severe mental illness carry the unbearable weight of watching someone they love suffer and being unable to make it stop. This verse does not promise that prayer heals schizophrenia, but it does remind parents where transformation ultimately originates — not in their own efforts, however loving. Releasing the project of fixing is not faithlessness. It may be the most faithful act." },
  { title: "Grief Over a Living Person Is a Real and Holy Loss", verse: "Lamentations 1:16", text: "This is why I weep and my eyes overflow with tears. No one is near to comfort me, no one to restore my spirit. The grief of a parent whose adult child is lost to mental illness is sometimes called 'ambiguous loss' — the person is alive but not fully present, the relationship is real but transformed by illness. This grief does not fit standard categories. Lamentations, written over a city that exists but is destroyed, gives language for mourning someone who is present but unreachable." },
  { title: "Love Does Not Require Enabling Destructive Behavior", verse: "Proverbs 13:24", text: "Whoever spares the rod hates their children, but the one who loves their children is careful to discipline them. Biblical love is not the same as unconditional accommodation. Loving an adult child with mental illness sometimes requires setting limits on behavior that is dangerous or destructive — not to punish, but to protect both the child and the family. Wise limits are a form of love, not its absence." },
  { title: "God's Commitment to Your Child Exceeds Yours", verse: "Isaiah 49:15-16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands. This verse addresses parents whose love is already fierce. God's love for your adult child is more constant, more attentive, and more capable of reaching them in places you cannot reach. Your child is not outside God's knowledge or care even at their worst." },
  { title: "The Church Is Called to Bear These Burdens Together", verse: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ. No family should carry the weight of a child with severe mental illness alone. Yet many parents of adult children with mental illness report profound church isolation — the situation is too long, too uncertain, and too disruptive for typical pastoral care. Churches that fulfill the law of Christ will develop the capacity for sustained, undramatic, long-term accompaniment." },
];

const voices = [
  { id: "v1", name: "E. Fuller Torrey", role: "Psychiatrist, founder of Treatment Advocacy Center, author of Surviving Schizophrenia", quote: "The family members of people with severe mental illness are among the most heroic people I have ever known. They are also among the most exhausted and abandoned.", bio: "E. Fuller Torrey's decades of advocacy and clinical work on schizophrenia and bipolar disorder has informed how both mental health systems and families understand severe mental illness. His practical guides for families have helped thousands of parents navigate treatment systems, legal systems, and the emotional complexity of loving a child with serious mental illness." },
  { id: "v2", name: "Amy Simpson", role: "Author of Troubled Minds: Mental Illness and the Church's Mission, daughter of a parent with schizophrenia", quote: "I grew up watching my mother disappear into schizophrenia and watching the church look away. The silence taught me that mental illness was shameful and God was far from it. Both were lies.", bio: "Amy Simpson writes from her experience as the child of a parent with severe mental illness — and has extended that to work with parents of adults who are suffering. Her book Troubled Minds was a landmark call for the church to engage seriously with mental illness, and her work on family members specifically addresses the isolation and secondary trauma families carry." },
  { id: "v3", name: "Paul David Tripp", role: "Author of Parenting: 14 Gospel Principles, counselor", quote: "Your child's story is not over. And your role in their story is not over, even when your ability to help seems to have run out. You are still called to pray, to love, to set limits, and to trust God with the outcomes.", bio: "Paul David Tripp's biblical counseling framework for parents addresses the long arc of parenting — including parents of adults who are in crisis. His work on releasing outcomes to God while maintaining faithful presence is directly applicable to parents navigating the terrain of a child with severe mental illness." },
  { id: "v4", name: "Pete Earley", role: "Journalist, author of Crazy: A Father's Search Through America's Mental Health Madness", quote: "When my son became psychotic, I thought I could fix it. I had resources, connections, love. None of it was enough. The system was broken, my understanding was inadequate, and my son was suffering. That helplessness was the beginning of real wisdom.", bio: "Pete Earley's book Crazy documents his journey through his son's bipolar disorder and psychosis, including encounters with an inadequate mental health system. His work gives practical vocabulary and emotional validation to parents who have discovered the limits of their power — and who are learning to love faithfully within those limits." },
];

const practices = [
  { icon: "🏥", title: "Learn to Distinguish Crisis From Baseline Dysfunction", text: "Parents of adult children with severe mental illness need to develop fluency in the specific rhythms of their child's illness. What does 'stable' look like for this person? What are the early warning signs of deterioration? What constitutes a psychiatric emergency requiring immediate intervention? This knowledge makes parental responses more calibrated and less reactive." },
  { icon: "⚖️", title: "Understand HIPAA and Its Limits Before You Need Them", text: "Once a child turns 18, parents lose automatic legal access to medical information. During a crisis, this can be devastating. Before a crisis, explore whether your adult child will sign a HIPAA release giving you access. Understand the criteria for involuntary psychiatric holds in your state. Organizations like NAMI have guides specifically for family members navigating legal and medical systems." },
  { icon: "🤲", title: "Join a NAMI Family Support Group", text: "NAMI (National Alliance on Mental Illness) offers Family Support Groups — peer-led, free, and specific to families of people with mental illness. The combination of practical information and peer understanding that comes from sitting with other parents in the same situation is irreplaceable. Find your local NAMI affiliate at nami.org." },
  { icon: "🛡️", title: "Develop Clarity About What You Will and Will Not Support", text: "Loving your adult child does not mean you must fund behavior that destroys them, allow dangerous behavior in your home, or absorb unlimited emotional abuse. Working with a therapist to develop clear, compassionate limits — and to understand that limits are an act of love — is one of the most important things a parent can do. Boundaries are not rejection." },
  { icon: "📖", title: "Pray the Psalms of Waiting and Trusting", text: "Psalm 27, 46, and 131 are psalms for people who have reached the end of their own power and must trust a God who acts in his own time. Psalm 131 is three verses long and images an adult child calmed in its mother's arms. That calming is described as God's work, not the parent's. These short psalms are prayers for parents who have tried everything." },
  { icon: "🧘", title: "Receive Care Yourself Before You Are Depleted", text: "Secondary trauma is real. Parents of adult children with severe mental illness are at elevated risk for depression, anxiety, PTSD, and physical illness. Seeking counseling, spiritual direction, or a support group for yourself is not selfish. It is the prerequisite for sustained, healthy engagement with your child. You cannot pour from an empty vessel." },
];

const scriptures = [
  { verse: "Isaiah 49:15-16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands." },
  { verse: "Psalm 131:2-3", text: "But I have calmed and quieted myself, I am like a weaned child with its mother; like a weaned child I am content. Israel, put your hope in the Lord both now and forevermore." },
  { verse: "Lamentations 3:31-32", text: "For no one is cast off by the Lord forever. Though he brings grief, he will show compassion, so great is his unfailing love." },
  { verse: "Romans 8:26", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Psalm 27:14", text: "Wait for the Lord; be strong and take heart and wait for the Lord." },
];

type ACEntry = { id: string; date: string; grief: string; limit: string; prayer: string };

export default function AdultChildMentalIllnessPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ACEntry[]>([]);
  const [grief, setGrief] = useState(""), [limit, setLimit] = useState(""), [prayer, setPrayer] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_adultchildmentalj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const e: ACEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief: grief.trim(), limit: limit.trim(), prayer: prayer.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_adultchildmentalj_entries", JSON.stringify(updated));
    setGrief(""); setLimit(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_adultchildmentalj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Parenting an Adult Child With Mental Illness</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For parents who love their adult child fiercely and have discovered the limits of what love can do — and who need help trusting the God who sees where they cannot reach.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Support:</strong> 988 Crisis Lifeline (call/text 988) &nbsp;|&nbsp; NAMI Helpline: 1-800-950-6264 &nbsp;|&nbsp; NAMI Family Support Groups: nami.org</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
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
                <div style={{ color: PURPLE, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
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
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What grief are you carrying about your child today?</label>
              <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Name the loss or fear specifically..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What limit do you need to clarify or hold with your child right now?</label>
              <textarea value={limit} onChange={e => setLimit(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="What does love require you to hold firm on..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What are you asking God to do that you cannot?</label>
              <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Give what is impossible to him..." />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: PURPLE }}>Grief:</strong> {e.grief}</p>
                {e.limit && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Limit:</strong> {e.limit}</p>}
                {e.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "NnGBhG03g4M", title: "Praying for Your Prodigal Child", channel: "Brennan Manning", description: "Manning on the long faithfulness of prayer for a child who is lost — relevant for any parent whose adult child is in crisis and feels unreachable." },
              { videoId: "j2h-q3ZPKFI", title: "When Your Child Walks Away", channel: "Focus on the Family", description: "Focus on the Family addresses the grief of a child who has moved beyond the parent's reach — including the specific grief of watching a child suffer." },
              { videoId: "ZGk1hl1nNrw", title: "Trauma, Compassion Fatigue, and the Church", channel: "Diane Langberg", description: "Langberg on secondary trauma in caregiving relationships — essential for parents who are absorbing the impact of their adult child's illness." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the practice for those who have no resolution in sight — the biblical resource for parents in the long, uncertain middle of a child's illness." },
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
