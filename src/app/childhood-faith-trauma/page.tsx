"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "What Was Done to You as a Child Was Not God", verse: "Matthew 18:6", text: "If anyone causes one of these little ones who believe in me to stumble, it would be better for them to have a large millstone hung around their neck. Jesus reserves some of his most severe words for those who harm children through religion. The faith weaponized against you in childhood was not God's design — it was human distortion of it. The severity of Jesus's warning is God's own statement about what was done." },
  { title: "Your Nervous System Is Not Your Faith Failure", verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made. Trauma responses — hypervigilance, fear reactions, avoidance — are the body's intelligent attempt to survive. They are not spiritual weakness. They are the marks of wounds in a fearfully and wonderfully made body that needs healing." },
  { title: "God Can Be Trusted Even When His Representatives Were Not", verse: "Ezekiel 34:4-5", text: "You have not strengthened the weak or healed the sick or bound up the injured. They were scattered because there was no shepherd. God rebukes those who misrepresented him. The shepherd who failed you was not the shepherd who actually exists. These are different beings, and the distinction matters for the possibility of faith." },
  { title: "Adult Faith May Need to Be Built on Different Ground", verse: "1 Corinthians 3:11", text: "For no one can lay any foundation other than the one already laid, which is Jesus Christ. Childhood faith trauma often means the faith you received was built on fear, shame, performance, or human authority. That foundation collapses because it is not what was promised. Building on Christ himself — reading him in the Gospels, encountering his character directly — may be starting over on the right ground." },
  { title: "Grief for Childhood Spiritual Wounds Is Legitimate", verse: "Lamentations 5:7", text: "Our ancestors sinned and are no more, and we bear their punishment. We can grieve what was handed to us by those who came before — the distorted faith, the toxic theology, the harmful practices — as real wounds. Naming them as wounds, not as our own failures, is the beginning of healing." },
];

const voices = [
  { id: "v1", name: "Dan Allender", role: "Psychologist, Author, The Wounded Heart", quote: "The childhood wound that uses God as its instrument is particularly hard to heal because it confuses the abuser and the healer. The work begins with separating them.", bio: "Allender's foundational work on childhood sexual abuse has been extended to all forms of childhood religious trauma. His approach insists on full grief of what was done, honest naming of the distortion, and a slow encounter with the actual God." },
  { id: "v2", name: "Diane Langberg", role: "Psychologist, Author, Redeeming Power", quote: "The child who learned that God is dangerous, capricious, or conditional has not learned about God — they have learned about the people who used God's name.", bio: "Langberg distinguishes the God of Scripture from the god constructed by harmful religious environments, and shows how the healing journey requires exposing and grieving the false construct before the actual God can be encountered." },
  { id: "v3", name: "Rachel Held Evans", role: "Author, Searching for Sunday", quote: "I didn't leave the faith of my childhood. The faith of my childhood was not the faith of the Gospels, and the Gospels were what I found when I looked.", bio: "Evans's account of faith reconstruction after encountering toxic religious environments has given language to millions of Christians who need to distinguish the distorted faith they received from the gospel they actually want." },
  { id: "v4", name: "Jay Stringer", role: "Therapist, Author", quote: "Trauma shapes belief, and religious trauma shapes it most deeply because it inscribes its wounds in the language of ultimate reality. Healing requires rewriting that language.", bio: "Stringer's work on the intersection of trauma and faith shows how childhood religious trauma creates deep cognitive and emotional grooves that require specific kinds of therapeutic and spiritual work to heal." },
];

const practices = [
  { icon: "🏥", title: "Find a Trauma-Informed Therapist with Religious Competence", text: "Childhood faith trauma requires a therapist who understands both trauma and religion — one who can help you process what happened without either dismissing your faith or defending the religious system that harmed you. Psychology Today's therapist finder includes religious trauma and spiritual abuse specializations." },
  { icon: "📖", title: "Read the Gospels Slowly and Without Commentary", text: "Many people with childhood faith trauma have received so many layers of interpretation that they have never encountered Jesus directly. Read Matthew, Mark, Luke, and John slowly, as if for the first time, noting what Jesus actually says and does rather than what you were told he means." },
  { icon: "🛑", title: "Name What Was Done Accurately", text: "Minimizing — 'it wasn't that bad,' 'they meant well' — delays healing. Name what actually happened: the fear, the shame, the coercion, the distorted theology, the harm. Naming it accurately is not bitterness — it is the honesty that precedes forgiveness and healing." },
  { icon: "🤝", title: "Distinguish Between Institutions and Christ", text: "The church that harmed you is not the same as Christ. This distinction can feel impossible when the harm was done in his name. The work — slow, sometimes years-long — is to encounter who Jesus actually is in the Gospels and through trusted witnesses, separate from the institution that wounded you." },
  { icon: "🕊️", title: "Give Yourself Permission to Reconstruct Slowly", text: "Childhood faith trauma requires what some call faith deconstruction — dismantling the distorted structures to find what is actually true. This process is legitimate, even when it is disorienting. It is not apostasy; it is archaeology — removing debris to find the foundation." },
  { icon: "🌱", title: "Find a Community That Can Hold Honest Questions", text: "Many faith-trauma survivors find that the community they grew up in cannot hold honest questions. Finding a community — a church with intellectual and emotional safety, an online group, a spiritual direction relationship — that can sit with uncertainty and honest pain is essential for reconstruction." },
];

const scriptures = [
  { verse: "Matthew 18:6", text: "If anyone causes one of these little ones who believe in me to stumble, it would be better for them to have a large millstone hung around their neck and to be drowned in the depths of the sea." },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out." },
  { verse: "Ezekiel 34:16", text: "I will search for the lost and bring back the strays. I will bind up the injured and strengthen the weak." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." },
  { verse: "Genesis 16:13", text: "She gave this name to the Lord who spoke to her: 'You are the God who sees me,' for she said, 'I have now seen the One who sees me.'" },
];

type ChildhoodTraumaEntry = { id: string; date: string; wound: string; distinction: string; ground: string };

export default function ChildhoodFaithTraumaPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ChildhoodTraumaEntry[]>([]);
  const [form, setForm] = useState({ wound: "", distinction: "", ground: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_childhoodfaithtraumaj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.wound.trim()) return;
    const e: ChildhoodTraumaEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_childhoodfaithtraumaj_entries", JSON.stringify(updated));
    setForm({ wound: "", distinction: "", ground: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_childhoodfaithtraumaj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Religious Trauma</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When Faith Wounded You as a Child</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Childhood religious trauma — fear-based theology, spiritual abuse, coercive environments — leaves marks that carry into adult faith. This page is for adults rebuilding their relationship with God after the faith of their childhood caused real harm.</p>

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
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if trauma has become a mental health crisis</li>
                <li><strong style={{ color: TEXT }}>GRACE</strong> — netgrace.org, religious abuse survivor support</li>
                <li><strong style={{ color: TEXT }}>Crisis Text Line</strong> — text HOME to 741741</li>
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
              <textarea value={form.wound} onChange={e => setForm(f => ({ ...f, wound: e.target.value }))} placeholder="What happened in your childhood faith environment, and how did it wound you?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.distinction} onChange={e => setForm(f => ({ ...f, distinction: e.target.value }))} placeholder="What do you currently believe about the difference between what hurt you and who God actually is?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.ground} onChange={e => setForm(f => ({ ...f, ground: e.target.value }))} placeholder="What, if anything, feels like true ground to stand on?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.wound && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Wound:</strong> {e.wound}</p>}
                {e.distinction && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Distinction:</strong> {e.distinction}</p>}
                {e.ground && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Ground:</strong> {e.ground}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "PKyLYSfmTwI", title: "Healing After Spiritual Abuse", channel: "Dan Allender Center", description: "Allender on the specific damage of religious abuse — including in childhood — and what the long work of healing requires." },
              { videoId: "ZGk1hl1nNrw", title: "Resilience and Compassion in Hard Times", channel: "Diane Langberg", description: "Langberg on how abuse in religious contexts creates specific spiritual wounds, and how healing involves both psychological and theological reconstruction." },
              { videoId: "1nzj7Sf395o", title: "Healing the Shame That Binds", channel: "CCEF", description: "CCEF on shame-based religious environments and the gospel's actual word about worth, acceptance, and the character of God." },
              { videoId: "3_-OEdC2uaY", title: "When Church Hurts", channel: "The Gospel Coalition", description: "An honest examination of institutional religious failure and what the gospel offers to those who were harmed in communities that claimed to represent it." },
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
