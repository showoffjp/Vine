"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Body Is Not the Enemy of the Soul", verse: "1 Corinthians 6:19-20", text: "Your bodies are temples of the Holy Spirit, who is in you, whom you have received from God. You are not your own; you were bought at a price. Therefore honor God with your bodies. This verse is often used to shame people with eating disorders. Its proper use is the opposite: it is an affirmation that the body matters, is valued, and is the dwelling place of the Holy Spirit. The person with an eating disorder is often in a war with their body. The gospel's claim is that the body is a temple — precious, inhabited by God, and worth caring for." },
  { title: "Jesus Ate With People — Joyfully and Without Shame', verse: 'Luke 7:34", text: "The Son of Man came eating and drinking, and you say, 'Here is a glutton and a drunkard.' Jesus was accused of eating too much and drinking too much. He had a physical body that ate and enjoyed food in community. The incarnation includes Jesus's relationship with food as ordinary, pleasurable, and communal. The enemy of eating disorders uses food as a weapon of control or shame. Jesus modeled food as gift, communion, and celebration." },
  { title: "The Body Is Made for Resurrection, Not Escape', verse: '1 Corinthians 15:44", text: "It is sown a natural body, it is raised a spiritual body. God's ultimate plan for the physical body is not its abolition but its transformation and resurrection. The body is not a cage the soul inhabits and eventually escapes. It is the form through which the human person is known, loves, and is known. Eating disorders often involve a disordered relationship with embodied existence — a wish to escape or control the body. The theology of resurrection counters this: God intends for the body to be redeemed, not escaped." },
  { title: "Recovery Is a Form of Obedience and Courage', verse: 'Philippians 4:13", text: "I can do all this through him who gives me strength. This verse is often spiritualized. Applied to eating disorder recovery, it names something specific: the courage to eat a meal when every neurological signal is screaming otherwise, the willingness to reach for a body that feels alien, the endurance of the long treatment process — these require a strength that is not only psychological but spiritual. Recovery is a form of faithfulness." },
  { title: "Shame Does Not Motivate Healing — It Compounds It', verse: 'Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus. Eating disorders are frequently fueled by shame — shame about the body, about food, about lack of control, about the disorder itself. Condemnation intensifies shame and therefore intensifies the disorder. The gospel's claim of no condemnation is not only a theological statement — in the context of eating disorder recovery, it is a clinical one. Shame-reducing environments produce better treatment outcomes." },
];

const voices = [
  { id: "v1", name: "Jenni Schaefer", role: "Author of Life Without Ed, eating disorder recovery advocate", quote: "Eating disorders are not about food. They are about pain, control, identity, and worth. Recovery is not about learning to eat normally. It is about learning who you are without the eating disorder telling you.", bio: "Jenni Schaefer's memoir Life Without Ed personified the eating disorder as 'Ed' — a relationship the person must leave — and has become one of the most widely used recovery frameworks. Her approach is not explicitly theological but has been widely integrated into Christian eating disorder recovery programs." },
  { id: "v2", name: "Linda Mintle", role: "Christian therapist, author of Breaking Free from Anorexia and Bulimia", quote: "The church must stop treating eating disorders as diet problems or vanity issues. They are severe psychiatric illnesses that require medical and therapeutic treatment — not more Bible reading and willpower.", bio: "Linda Mintle's work on eating disorders from within a Christian therapeutic framework has been foundational for both churches and families trying to understand and respond to these conditions. Her insistence on medical seriousness while maintaining spiritual integration addresses the specific ways the church both helps and hinders eating disorder recovery." },
  { id: "v3", name: "Sarah Victor", role: "Eating disorder recovery specialist, Christian counselor", quote: "So many of my Christian clients feel double shame: shame about the disorder itself and shame that they, as Christians, cannot just trust God and get better. The disorder is not a faith failure. It is a complex illness.", bio: "Sarah Victor's clinical work with eating disorders in Christian populations has documented the specific way faith communities can compound or reduce shame. Her work on the intersection of spiritual formation and eating disorder recovery provides a framework for churches wanting to offer informed pastoral support." },
  { id: "v4", name: "Curt Thompson", role: "Clinical psychiatrist, author of The Soul of Shame", quote: "Eating disorders are at their core disorders of shame. The body becomes the site where shame is managed — through control, punishment, or disappearance. The healing that we find in Christian community — being fully known and not condemned — is not only spiritually relevant. It is neurologically transformative.", bio: "Curt Thompson's integration of neuroscience and Christian theology provides the most scientifically grounded account of why shame-based approaches to eating disorder recovery fail and why community-based, non-judgmental approaches succeed. His framework connects the neurological dimensions of eating disorders with the healing mechanisms the gospel describes." },
];

const practices = [
  { icon: "🏥", title: "Seek Specialized Treatment — This Is a Medical Emergency", text: "Anorexia nervosa has the highest mortality rate of any psychiatric disorder. Bulimia, binge eating disorder, and ARFID all require specialized treatment beyond what general counseling provides. Treatment should include a medical physician (to monitor physical health), a registered dietitian (specializing in eating disorders), and a therapist trained specifically in evidence-based eating disorder treatment (CBT, DBT, or FBT for adolescents). The National Eating Disorders Association (NEDA) helpline (1-800-931-2237) provides treatment referrals." },
  { icon: "🚫", title: "Be Aware of What the Church Should NOT Say", text: "Comments about body size, food choices, weight, and fasting in religious contexts can all be triggering or harmful for someone in eating disorder recovery. Churches that regularly comment on bodies, that treat fasting as a spiritual discipline without nuance, or that equate thinness with self-control have inadvertently created environments that are dangerous for people with eating disorders. If you are in leadership, review your language." },
  { icon: "📖", title: "Reclaim the Theology of Embodiment", text: "The biblical theology of the body — incarnation, resurrection, temple — is a counter-narrative to the body shame and self-destructive relationship with physicality that eating disorders produce. Slowly, carefully reading and sitting with passages about Jesus's embodied life (eating, touching, being touched) can begin to reframe the body as a site of encounter rather than shame." },
  { icon: "🤝", title: "Tell Your Treatment Team About Your Faith", text: "Many eating disorder treatment programs are clinically excellent but spiritually secular. Telling your treatment team that your faith is important to you — and asking whether it can be integrated — often produces better outcomes. Some programs have explicitly Christian frameworks (Mercy Ministries, Meier Clinics). Others will accommodate faith integration if you ask for it." },
  { icon: "⏳", title: "Expect Recovery to Take Years, Not Months", text: "Full recovery from an eating disorder typically takes three to seven years. The path involves setbacks, relapses, and long plateaus. Many people in recovery experience significant improvement in functioning well before they experience full psychological recovery. The long timeline is not a sign of failure — it is the natural history of the illness. Sustained, patient support from family and church community is essential throughout." },
  { icon: "💬", title: "Build a Recovery Support Network in Your Faith Community", text: "Eating disorder recovery is relational. The shame that drives the disorder reduces in the presence of consistent, non-judgmental community. Identifying two or three people in your church who know your story, who will check in without monitoring your eating, and who can provide practical support (driving to appointments, sitting with you through hard meals) creates the relational container that recovery requires." },
];

const scriptures = [
  { verse: "1 Corinthians 6:19", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God?" },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "1 Kings 19:5-6", text: "All at once an angel touched him and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water." },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out." },
];

type EDEntry = { id: string; date: string; struggle: string; body: string; step: string };

export default function EatingDisorderFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<EDEntry[]>([]);
  const [struggle, setStruggle] = useState(""), [body, setBody] = useState(""), [step, setStep] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_eatingdisorderj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!struggle.trim()) return;
    const e: EDEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), struggle: struggle.trim(), body: body.trim(), step: step.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_eatingdisorderj_entries", JSON.stringify(updated));
    setStruggle(""); setBody(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_eatingdisorderj_entries", JSON.stringify(updated));
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
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Eating Disorders and Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For Christians struggling with eating disorders — and for the church learning that the body is a temple worth caring for, not a battleground for shame.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Crisis Support:</strong> NEDA Helpline: 1-800-931-2237 &nbsp;|&nbsp; 988 Lifeline (call/text 988) &nbsp;|&nbsp; Crisis Text Line: text NEDA to 741741</p>
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
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is the most difficult part of your relationship with food or your body today?</label>
              <textarea value={struggle} onChange={e => setStruggle(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Name it honestly, without editing..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What would it mean to receive your body as a temple — as something God dwells in?</label>
              <textarea value={body} onChange={e => setBody(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Even if it is very hard to imagine..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is one recovery step you can take today?</label>
              <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Treatment, a meal, a disclosure, a call..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Struggle:</strong> {e.struggle}</p>
                {e.body && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Body as temple:</strong> {e.body}</p>}
                {e.step && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Thompson on shame as the driver of eating disorders and the neurological transformation that happens when shame is replaced by genuine belonging and acceptance." },
              { videoId: "psN1DORYYV0", title: "The Gifts of Imperfection", channel: "Brene Brown — TED", description: "Brown on shame and vulnerability — the foundational research on why shame-reduction, not shame-increase, produces behavioral change." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on integrating emotional and spiritual health — relevant for anyone whose relationship with their body has been shaped by performance-based religion." },
              { videoId: "ZGk1hl1nNrw", title: "Trauma, Compassion Fatigue, and the Church", channel: "Diane Langberg", description: "Langberg on trauma and the body — including the way unresolved trauma often manifests in disordered relationships with food and the physical self." },
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
