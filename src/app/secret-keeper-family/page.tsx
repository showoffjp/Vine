"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Truth Shall Set You Free — But First It May Terrify You", verse: "John 8:32", text: "You will know the truth, and the truth will set you free. Freedom and truth are inseparable in Jesus's teaching. But this is rarely comfortable truth — it is liberating truth, which means it first confronts what is not free. People who carry family secrets — addiction, abuse, affairs, hidden illness, identity, shame — often understand at a deep level that the secret is a cage. The promise of freedom is real. The cost of truth is also real." },
  { title: "What Is Hidden Is Not Beyond God's Knowledge", verse: "Psalm 139:11-12", text: "If I say, 'Surely the darkness will hide me and the light become night around me,' even the darkness will not be dark to you; the night will shine like the day, for darkness is as light to you. The family secret that has been kept for generations — the abuse no one named, the addiction no one confronted, the wound no one acknowledged — is not hidden from God. His knowledge is not contingent on the family's willingness to speak. The light he knows by is not the family's transparency but his own omniscience." },
  { title: "Silence That Protects Harm Is Not Faithfulness", verse: "Ephesians 5:11-13", text: "Have nothing to do with the fruitless deeds of darkness, but rather expose them. It is shameful even to mention what the disobedient do in secret. But everything exposed by the light becomes visible. This is not a call to expose others for its own sake — but it does name the category of silence that participates in ongoing harm. Keeping a family secret that enables abuse, that silences a victim, or that allows a pattern of destruction to continue is not loyalty; it is complicity." },
  { title: "Generational Patterns Are Real and Can End With You", verse: "Exodus 34:7", text: "He punishes the children and their children for the sin of the parents to the third and fourth generation. This is not fatalism — it is a description of how patterns transmit through families. The child who grows up in a home with an alcoholic parent learns patterns, not genetics. But the transmission can stop: through conscious awareness, through counseling, through the grace of God, through a willingness to name what previous generations refused to name." },
  { title: "Confession Is a Vehicle of Healing for the Community, Not Just the Individual", verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The healing of James 5 is communal: confession to each other produces healing. The family secret isolates. The disclosure — to a therapist, a spiritual director, a trusted friend, a pastor — begins the process by which isolation breaks and healing becomes possible. You were not designed to carry this alone." },
];

const voices = [
  { id: "v1", name: "Dan Allender", role: "Author of The Healing Path, To Be Told, trauma counselor", quote: "Families keep secrets because honesty threatens the family's self-image. The cost is paid by the members who know the truth and must carry it silently. That cost is enormous.", bio: "Dan Allender's work on family systems, narrative, and healing addresses the specific dynamics of secrecy in families — the identified patient who carries the family's shadow, the unspoken rules that govern what can and cannot be named, and the liberation that comes when someone finally breaks the silence." },
  { id: "v2", name: "Harriet Lerner", role: "Psychologist, author of The Dance of Anger, The Dance of Secrets", quote: "A secret is not neutral. It has weight. It requires maintenance. And it changes the person who carries it in ways that are not visible from the outside but are deeply formative on the inside.", bio: "Harriet Lerner's work on family systems — particularly The Dance of Secrets — documents the psychological and relational cost of secret-keeping. She shows how secrets reorganize family relationships, create false loyalties, and produce what she calls 'emotional cutoff' — the state of appearing connected while being fundamentally isolated." },
  { id: "v3", name: "Bessel van der Kolk", role: "Author of The Body Keeps the Score, trauma researcher", quote: "The body keeps the secrets the family keeps. When families cannot speak about what happened, their members' bodies do. Anxiety, autoimmune disease, depression, disconnection — these are the symptoms of unspoken truth.", bio: "Van der Kolk's research on trauma and the body illuminates what happens when families cannot name their wounds. His work shows that the suppression of narrative — the inability to put story into words — produces physiological as well as psychological symptoms, and that healing requires narrative as much as it requires medicine." },
  { id: "v4", name: "Peter Scazzero", role: "Author of Emotionally Healthy Spirituality, Emotionally Healthy Discipleship", quote: "The church has often colluded with family secrecy in the name of privacy, loyalty, and not airing dirty laundry. That collusion does not protect families. It extends their suffering.", bio: "Peter Scazzero's work on emotionally healthy church culture directly addresses the way Christian communities can inadvertently enable family secrets through an emphasis on testimony-style narratives that skip over genuine struggle. His model of emotional health requires honesty about family systems, generational patterns, and the specific wounds that have been silenced." },
];

const practices = [
  { icon: "🏥", title: "Name the Secret to a Therapist Before Anyone Else", text: "A therapist is the safest initial context for naming a family secret — bound by confidentiality, trained to hear difficult material without being destabilized, and able to help you discern what to do with the information. Naming it to a therapist is not the same as broadcasting it; it is the first, protected step toward determining what further disclosure, if any, is needed." },
  { icon: "📖", title: "Distinguish Keeping Privacy From Keeping Secrets", text: "Not all undisclosed information is a secret in the damaging sense. Privacy protects individuals within families. Secrets protect the family system at the expense of individuals — particularly when the secret enables harm or silences someone who was hurt. The question is not 'does anyone know this?' but 'is this undisclosed information hurting someone by remaining undisclosed?'" },
  { icon: "✉️", title: "Write the Full Story in a Private Journal", text: "The act of writing the secret — fully, in your own words, without editing for an audience — is itself therapeutic. It externalizes the narrative, separates you from the story, and creates a version of the disclosure that you can review and consider before deciding what to do with it. Many people find that writing the secret is the first time they have allowed themselves to fully believe what they know." },
  { icon: "🤝", title: "Understand That You Did Not Choose the Secret", text: "Children who grow up carrying family secrets did not choose them. The loyalty that silences adult children was formed by systems they had no power to refuse. Recognizing that you were recruited into secret-keeping — not that you freely chose it — is an important step in releasing the shame that has attached itself to your knowledge." },
  { icon: "⚖️", title: "Consider What Disclosure Would Protect", text: "Some family secrets need to be disclosed because they are enabling ongoing harm — abuse that is continuing, addiction that is actively destroying someone, a child who is at risk. Others are wounds that need healing without requiring broad disclosure. Working with a therapist helps you discern which category your secret falls into and what, if anything, you are morally required to say and to whom." },
  { icon: "🙏", title: "Pray the Lament Psalms as Your Own", text: "Psalm 55 is a psalm written by someone who was betrayed by a close companion — and who had to carry the knowledge of that betrayal. It names the specific pain of knowing what others do not know, of living in the gap between apparent normality and internal reality. This psalm gives language for the experience of the secret-keeper." },
];

const scriptures = [
  { verse: "John 8:32", text: "Then you will know the truth, and the truth will set you free." },
  { verse: "Psalm 139:11-12", text: "If I say, 'Surely the darkness will hide me and the light become night around me,' even the darkness will not be dark to you; the night will shine like the day, for darkness is as light to you." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed." },
  { verse: "Ephesians 5:13", text: "But everything exposed by the light becomes visible — and everything that is illuminated becomes a light." },
  { verse: "Psalm 55:12-13", text: "If an enemy were insulting me, I could endure it... But it is you, a man like myself, my companion, my close friend." },
];

type SecretEntry = { id: string; date: string; weight: string; cost: string; next: string };

export default function SecretKeeperFamilyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SecretEntry[]>([]);
  const [weight, setWeight] = useState(""), [cost, setCost] = useState(""), [next, setNext] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_secretkeeperj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!weight.trim()) return;
    const e: SecretEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), weight: weight.trim(), cost: cost.trim(), next: next.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_secretkeeperj_entries", JSON.stringify(updated));
    setWeight(""); setCost(""); setNext("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_secretkeeperj_entries", JSON.stringify(updated));
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
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Carrying Family Secrets</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For adults who carry knowledge that their family cannot speak — and who are discovering the cost of silence on their faith, their body, and their relationships.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; The Allender Center: theallendercenter.org &nbsp;|&nbsp; RAINN (for abuse disclosures): 1-800-656-4673</p>
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
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What does the weight of carrying this secret feel like in your body?</label>
              <textarea value={weight} onChange={e => setWeight(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Physical, emotional, relational..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What has keeping this secret cost you?</label>
              <textarea value={cost} onChange={e => setCost(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="In relationships, in faith, in yourself..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>Is there a person or context where you could begin to name this safely?</label>
              <textarea value={next} onChange={e => setNext(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="A therapist, a spiritual director, a trusted friend..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Weight:</strong> {e.weight}</p>
                {e.cost && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Cost:</strong> {e.cost}</p>}
                {e.next && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Next:</strong> {e.next}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "ZwDlGPCEUoE", title: "Healing Relational Trauma", channel: "Dan Allender", description: "Allender on the wounds created within close relationships — particularly families — and the path toward healing that requires naming what happened." },
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score", channel: "Bessel van der Kolk", description: "Van der Kolk on how family trauma and suppressed narrative manifest in the body — foundational for understanding what secret-keeping does to the people who carry it." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on the way family systems shape spiritual life, and the integration of emotional honesty that true spiritual health requires." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Thompson on shame and its connection to secrecy — and how being truly known, rather than performing a managed version of yourself, produces freedom." },
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
