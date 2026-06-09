"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Elijah Wanted to Die — God Fed Him and Let Him Rest", verse: "1 Kings 19:4-5", text: "'I have had enough, Lord,' he said. 'Take my life; I am no better than my ancestors.' Then he lay down under the bush and fell asleep. All at once an angel touched him and said, 'Get up and eat.' Elijah's suicidal exhaustion was met not with a theological correction but with food, touch, and sleep. Before God addressed Elijah's calling, God addressed his body. Chronic suicidal ideation is often rooted in a depleted nervous system, unprocessed trauma, and unbearable pain. God's first pastoral act was embodied care." },
  { title: "Suffering Is Named and Held, Not Explained Away", verse: "Psalm 88:18", text: "You have taken from me friend and neighbor — darkness is my closest friend. Psalm 88 is the only psalm that ends without a turn toward hope. It is the psalm of someone whose suffering is total and unresolved. Its presence in Scripture is a pastoral fact: God includes the voice that cannot find hope in the inspired record. If you cannot find hope right now, you are within the range of Scripture's honest witness. You are not outside of God's hearing." },
  { title: "Your Life Is Not Yours to End Alone", verse: "1 Corinthians 6:19-20", text: "Your bodies are temples of the Holy Spirit, who is in you, whom you have received from God. You are not your own; you were bought at a price. This is not a verse of condemnation for those who struggle with suicidal thoughts — it is a verse of belonging. You belong to God. The decision about your life is not yours alone. And the God who bought you at the cost of his Son does not consider you disposable." },
  { title: "Even When Forsaken, the Cry Is Still to God", verse: "Matthew 27:46", text: "About three in the afternoon Jesus cried out in a loud voice, 'My God, my God, why have you forsaken me?' Jesus did not suffer in silence. He cried loudly. He directed his desolation toward God rather than away from God. The theology of the cross includes the permission — the model — of screaming at God when the darkness is absolute. The cry itself is a form of faith: it assumes there is a God who hears." },
  { title: "God Works Through the Long Process of Healing", verse: "Isaiah 61:1", text: "He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners. The binding up of a broken heart is not instantaneous. The freedom of the captive is not always immediate. But the proclamation is present-tense: the work is underway. Treatment for chronic suicidal ideation — psychiatric care, therapy, medication, community — is participation in the liberation that this verse describes." },
];

const voices = [
  { id: "v1", name: "Kay Warren", role: "Author of Choose Joy, co-founder of Saddleback Church, lost son Matthew to suicide", quote: "Suicidal ideation is not a moral failure. It is the experience of pain that has outstripped the capacity to survive it. The church must be a place where people can say this without being made to feel that their faith is deficient.", bio: "Kay Warren lost her son Matthew to suicide in 2013 after his long battle with mental illness. Her subsequent advocacy for mental health and suicide prevention — from within a deeply evangelical context — has reshaped how many churches engage with suicidality. Her willingness to name the spiritual complexity of suicidal ideation without reducing it to a faith failure has been profoundly important." },
  { id: "v2", name: "Matthew Stanford", role: "Clinical psychologist, author of Grace for the Afflicted, founder of Hope and Healing Center", quote: "The church needs to understand that chronic suicidal ideation is a symptom of psychiatric illness, not weakness of faith. And it needs to be treated with the same medical urgency we give to chest pain.", bio: "Matthew Stanford's work at the intersection of psychology and Christian faith has given pastoral leaders clinical vocabulary for suicidal ideation and a theology of mental illness. His book Grace for the Afflicted addresses the specific ways the church can harm or help people with chronic psychiatric conditions, including those with persistent suicidal thoughts." },
  { id: "v3", name: "Kathryn Greene-McCreight", role: "Episcopal priest, author of Darkness Is My Only Companion, survivor of severe bipolar disorder", quote: "I have wanted to die. I have been hospitalized. I have received ECT. I am still a priest. God never abandoned me in the darkest places, even when I believed he had.", bio: "Kathryn Greene-McCreight's memoir Darkness Is My Only Companion is one of the most theologically rich accounts of severe psychiatric illness — including suicidal ideation — written from within the Christian tradition. Her insistence that orthodox faith and severe mental illness are not incompatible, and that God's presence does not depend on one's ability to feel it, has sustained thousands." },
  { id: "v4", name: "Curt Thompson", role: "Clinical psychiatrist, author of The Soul of Shame, The Anatomy of the Soul", quote: "Shame is the neurological and spiritual engine of suicidal ideation. The experience of being fully known — by God, by another person — and not condemned is the most powerful intervention we have.", bio: "Curt Thompson's integration of neuroscience and Christian theology has produced some of the most important recent thinking about shame, suicidality, and the healing power of being known. His work on interpersonal neurobiology and the soul connects the relational dimensions of chronic suicidal ideation to the gospel's claim that we are fully known and fully loved." },
];

const practices = [
  { icon: "📞", title: "Call 988 or Go to an Emergency Room When Ideation Is Active", text: "Chronic suicidal ideation — persistent thoughts of death that are not immediately acted upon — requires ongoing treatment. Acute suicidal ideation — specific plans, intent, or impulse to act — requires immediate intervention. If you have moved from chronic to acute, call 988 (Suicide and Crisis Lifeline), text 741741, or go to your nearest emergency room. This is a medical emergency." },
  { icon: "🏥", title: "Pursue Psychiatric and Therapeutic Treatment Together", text: "Chronic suicidal ideation is a psychiatric symptom that benefits from medication, therapy, or both. Specifically, Dialectical Behavior Therapy (DBT) has the strongest evidence base for chronic suicidal ideation, and psychiatric medication management can address the underlying neurological dimensions. Seeking this treatment is not a failure of faith — it is responsible stewardship of the body God gave you." },
  { icon: "🤝", title: "Tell One Trusted Person the Truth", text: "Isolation accelerates suicidal ideation. Telling one person — a therapist, a pastor, a trusted friend, a family member — what you are experiencing is not weakness; it is the act that most directly counters the shame and isolation the ideation feeds on. You do not have to manage this alone, and you should not. The church's call to 'carry each other's burdens' is specifically designed for moments like this." },
  { icon: "🛡️", title: "Develop a Safety Plan With a Clinician", text: "A safety plan is a written document developed with a therapist or psychiatrist that outlines warning signs, coping strategies, people to call, and steps to take when ideation intensifies. It is not a contract to stay alive — it is a roadmap for the moments when thinking becomes clouded. Research shows safety plans reduce suicide attempts. If you do not have one, ask your therapist or your 988 counselor to help you develop one." },
  { icon: "📖", title: "Use the Psalms as Language When You Have None", text: "Psalms 22, 88, and 102 are prayers from the edge of survival. They give permission to name the depth of pain — 'my bones are in agony' (Ps 22:14), 'darkness is my closest friend' (Ps 88:18) — and to direct that pain toward God rather than into isolation. Reading these psalms aloud in prayer is not giving up — it is keeping the channel to God open even when the channel is full of anguish." },
  { icon: "🙏", title: "Let the Church Carry the Theology When You Cannot", text: "Chronic suicidal ideation often attacks the capacity to believe — to hold onto hope, to experience God's presence, to remember truth. In those seasons, the liturgy, the creeds, the community carry the faith on your behalf. You do not have to believe strongly to participate in a community that believes. Showing up is itself a form of faith, and the community's faith surrounds you when yours is depleted." },
];

const scriptures = [
  { verse: "1 Kings 19:5", text: "All at once an angel touched him and said, 'Get up and eat. The journey is too much for you.'" },
  { verse: "Psalm 88:18", text: "You have taken from me friend and neighbor — darkness is my closest friend." },
  { verse: "Romans 8:38-39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers... will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Matthew 27:46", text: "About three in the afternoon Jesus cried out in a loud voice, 'My God, my God, why have you forsaken me?'" },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out." },
];

type CSIEntry = { id: string; date: string; pain: string; anchor: string; step: string };

export default function ChronicSuicidalIdeationPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CSIEntry[]>([]);
  const [pain, setPain] = useState(""), [anchor, setAnchor] = useState(""), [step, setStep] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_chronicsuicidalj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!pain.trim()) return;
    const e: CSIEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), pain: pain.trim(), anchor: anchor.trim(), step: step.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chronicsuicidalj_entries", JSON.stringify(updated));
    setPain(""); setAnchor(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chronicsuicidalj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Chronic Suicidal Ideation and Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For Christians who live with persistent thoughts of death — and for the church that must learn to be present without minimizing, fixing, or abandoning.</p>
          <div style={{ background: "#1a0a0a", border: `1px solid #5a1a1a`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: "#ff9999", fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: "#ff5555" }}>If you are in crisis RIGHT NOW:</strong> Call or text 988 &nbsp;|&nbsp; Text HOME to 741741 &nbsp;|&nbsp; Go to your nearest emergency room &nbsp;|&nbsp; Call 911</p>
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
            <div style={{ background: "#1a0a0a", border: `1px solid #5a1a1a`, borderRadius: 10, padding: "1rem 1.5rem", marginBottom: "1.5rem" }}>
              <p style={{ color: "#ff9999", fontSize: "0.85rem", margin: 0 }}>If your thoughts have become urgent or you have a plan — please call 988 or go to an emergency room before continuing.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is the pain underneath the thoughts right now?</label>
              <textarea value={pain} onChange={e => setPain(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="What has become unbearable..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is one thing anchoring you to the present today?</label>
              <textarea value={anchor} onChange={e => setAnchor(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Even something small — a person, a promise, a reason..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is your next step toward safety and care?</label>
              <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Call someone, see your therapist, call 988..." />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: PURPLE }}>Pain:</strong> {e.pain}</p>
                {e.anchor && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Anchor:</strong> {e.anchor}</p>}
                {e.step && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Next step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Praying Our Fears", channel: "Timothy Keller", description: "Keller on bringing our most overwhelming fears and despair into prayer — the practice that keeps the channel to God open even when emotion is overwhelming." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Thompson on shame as the root of suicidal ideation and the neurological and spiritual healing that comes through genuine, non-judgmental connection." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the practice for those in the deepest darkness — the biblical tradition that holds pain without rushing it to resolution." },
              { videoId: "ZGk1hl1nNrw", title: "Trauma and the Compassionate Church", channel: "Diane Langberg", description: "Langberg on trauma, pain, and how communities of faith can be present to those who are suffering without minimizing or abandoning them." },
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
      <Footer />
    </>
  );
}
