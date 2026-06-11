"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", TEAL = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Is Christian Counseling Biblical? — The Integration Debate", verse: "2 Tim 3:16-17", text: "The spectrum runs from nouthetic (biblical) counseling — Jay Adams argued that Scripture alone is sufficient for all counseling needs — to integrationist approaches that use insights from psychology within a Christian framework, to secular psychology practiced by Christians. The debate matters because it touches the sufficiency of Scripture. But sufficiency is about spiritual authority, not the exhaustiveness of a medical textbook. Faithful integration does not replace Scripture with psychology; it reads the discoveries of psychology as a form of general revelation — insights about how God made the human mind — and holds them accountable to the truth and purposes revealed in Scripture. Psychology helps describe the problem; the gospel provides the solution; the community is the context for healing." },
  { title: "The Soul Speaks in Symptoms — What Emotions and Mental Health Signal", verse: "Prov 4:23", text: "Above all else, guard your heart, for everything you do flows from it. The body keeps the score — a phrase Bessel van der Kolk made famous, describing what the Psalms already knew: what is unprocessed in the soul surfaces in the body, in relationships, in behavior. Depression, anxiety, and relational patterns are not moral failures — they are often the soul's communication about deeper realities. The Psalms are the original emotional health manual. The full range of human emotional experience appears in them without spiritually sanitizing any of it. Psalms permits lament. That permission is therapeutic. Christians should take mental health seriously not despite their faith but because of it: the inner life is a spiritual matter, and its symptoms are worth listening to rather than suppressing." },
  { title: "When to Seek Professional Help — Overcoming the Stigma", verse: "Matt 9:12", text: "The evangelical church has sometimes communicated — through sermon illustrations, theological framing, or cultural pressure — that seeking counseling is a failure of faith; it means you do not trust God enough. This has produced profound harm: people who needed help did not get it, and some did not survive that absence. The stigma is not biblical — it is cultural. Jesus went to dinner with the sick and said it is the sick who need a doctor, not the healthy. Knowing when a problem requires professional help is wisdom, not weakness. Specific indicators for when pastoral care alone is insufficient: persistent inability to function; intrusive trauma symptoms; addictive cycles that community alone cannot break; severe depression or anxiety that does not lift; relational patterns that repeat despite sincere desire to change." },
  { title: "Trauma and the Christian — What Neuroscience and Scripture Together Reveal", verse: "Ps 34:18", text: "Trauma is not merely an emotional memory — it is encoded in the body and the neural architecture. Bessel van der Kolk's research describes physiologically what the church has always intuited about deep suffering: that some wounds do not heal through willpower, cognitive reframing, or even sincere faith alone. Healing from complex trauma requires more than cognitive belief change because the trauma response is subcortical — it lives below the level of reasoning. Faith and trauma-informed care work together: the gospel provides the ultimate framework for meaning, hope, and identity; trauma-informed care provides the pathway by which the nervous system can arrive at the place where those truths can be received. The church must become trauma-informed — not to replace the gospel, but to make it accessible to those whose wounds have put it out of reach." },
  { title: "The Role of Community in Healing — Why You Cannot Heal Alone", verse: "James 5:16", text: "Confess your sins to one another and pray for one another, so that you may be healed. Healing is rarely purely individual. The therapeutic model in Western culture — one person on a couch, one therapist in a chair — has its place, but the biblical model of healing is communal. The small group, the church, the spiritual director are not supplements to healing; they are essential components of the healing ecosystem. What happens when Christians try to heal in isolation: the lies go unchallenged because no one knows what they are; the shame intensifies because secrecy feeds it; the healing plateaus because the very wounds that need healing are relational wounds that only community can address. The community is not just the context for healing — it is often the instrument through which God heals." },
];

const voices = [
  { name: "Diane Langberg", role: "Suffering and the Heart of God", quote: "The church is the largest system in the world caring for suffering people. If the church is to be the presence of Christ in the world, then it must learn to be with those who suffer — not to fix them, not to explain their suffering, but to enter into it with them. That requires competence and compassion. Competence without compassion becomes clinical. Compassion without competence can cause harm. The church must develop both.", bio: "Diane Langberg is a clinical psychologist and one of the most respected voices at the intersection of trauma, abuse, and Christian faith. Her work on suffering, clergy sexual abuse, and the church's responsibility toward the vulnerable has shaped how evangelical Christians think about trauma care. Suffering and the Heart of God is her most comprehensive theological treatment." },
  { name: "Dan Allender", role: "The Wounded Heart", quote: "Sexual abuse, betrayal, and shame wound the soul in specific ways that require specific healing. The church must not look away from the particularity of this kind of suffering. To say God heals without attending to how God heals through the specific wound — the specific loss of trust, the specific distortion of desire, the specific shape of shame — is to offer comfort that does not reach the place where the person actually hurts.", bio: "Dan Allender is a counselor, professor, and theologian whose work on sexual abuse and trauma transformed how the Christian counseling world approached these issues. The Wounded Heart gave language to what thousands of abuse survivors had experienced but could not name. He founded The Seattle School of Theology and Psychology and continues to write and teach on healing, trauma, and the integration of faith and psychology." },
  { name: "Curt Thompson", role: "Anatomy of the Soul", quote: "Neuroscience is not a threat to Christian anthropology — it is an illumination of it. Attachment theory describes what the Bible has always said about how we are formed in relationship and re-formed in relationship. The brain changes through connection. Healing happens in community. The heart that Scripture tells us to guard is not a metaphor — it is a deeply embodied reality, and God heals it through the very relational pathways he built into our biology.", bio: "Curt Thompson is a psychiatrist and author whose Anatomy of the Soul brought together interpersonal neurobiology, attachment theory, and Christian spirituality in an accessible framework. His central argument is that the biblical understanding of the heart — the seat of will, emotion, and identity — maps onto what neuroscience now understands about how the brain develops, regulates, and heals through secure attachment relationships." },
];

const practices = [
  { icon: "🔎", title: "Finding a Trained Christian Counselor", text: "Seek a counselor certified through the American Association of Christian Counselors (AACC) or the Professional Christian Coaching and Counseling Association (PCCA). Decide whether you need an integrationist approach (psychology within a Christian framework) or a more strictly biblical counseling approach — the answer depends on the nature of your need. Ask prospective counselors about their theological commitments and how they integrate faith with clinical practice." },
  { icon: "📝", title: "Journaling as Therapeutic and Spiritual Practice", text: "Write to God about what you cannot yet say aloud. Therapeutic journaling is not diary-keeping — it is the deliberate externalizing of inner experience in order to see it more clearly and bring it into conversation with God. Start by writing what you actually feel, without editing it. Then write what you believe. Notice the gap between the two: that gap is the terrain of healing. Consistency matters more than length." },
  { icon: "🔗", title: "Identifying Your Attachment Style", text: "Attachment style — secure, anxious, avoidant, or disorganized — shapes how you relate to God and to other people in predictable ways. An anxious attacher often relates to God as unpredictable or withholding; an avoidant attacher may feel that needing God is weakness. Identifying your attachment style (through a counselor, a resource like Anatomy of the Soul, or a validated online assessment) opens the door to understanding patterns that feel automatic and provides a map for change." },
  { icon: "📖", title: "Reading the Psalms Emotionally", text: "Read the Psalms as your own words, not as devotional texts about someone else. When Psalm 22 says my God, my God, why have you forsaken me — sit there. Do not rush to the resolution. The Psalms permit the full emotional range: desolation, rage, confusion, desperate longing, and finally — often but not always quickly — trust. Allow a psalm to be your prayer: the thing you say to God from where you actually are, not from where you think you should be." },
  { icon: "🏥", title: "Building a Healing Team", text: "The components of a healing team: a trained counselor who provides clinical and spiritual support; a spiritual director who attends to the movement of God in your inner life; a trusted community (small group, close friends) who know your story and walk with you over time. No single relationship carries all of these functions. Healing is not solo work. The question is not whether you need others in your healing — you do — but who specifically is on your team." },
];

const scriptures = [
  { verse: "Prov 4:23", text: "Above all else, guard your heart, for everything you do flows from it." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective." },
  { verse: "Ps 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "2 Cor 1:3-4", text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God." },
  { verse: "Matt 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
  { verse: "Ps 147:3", text: "He heals the brokenhearted and binds up their wounds." },
];

const videos = [
  { id: "L8nYGCLjQzw", title: "Christian Counseling and the Integration Debate" },
  { id: "T7IZg0SdYiw", title: "Trauma, the Church, and Healing — Diane Langberg" },
  { id: "xKAzW5z7-DU", title: "Neuroscience, Attachment, and the Christian Soul" },
  { id: "pBxuaVL4FLU", title: "Mental Health Stigma in the Church" },
];

type CREntry = { id: string; date: string; issue: string; approach: string; progress: string };

export default function ChristianCounselingGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CREntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chrcounseling_entries") ?? "[]"); } catch { return []; }
  });
  const [jIssue, setJIssue] = useState("");
  const [jApproach, setJApproach] = useState("");
  const [jProgress, setJProgress] = useState("");

  useEffect(() => { localStorage.setItem("vine_chrcounseling_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jIssue.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), issue: jIssue, approach: jApproach, progress: jProgress }, ...prev]);
    setJIssue(""); setJApproach(""); setJProgress("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Healing &amp; Freedom</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Counseling Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Integrating faith and psychology for healing and growth — the theology of Christian counseling, voices who have charted the way, and practices that move healing forward.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? TEAL : BORDER}`, background: tab === t.id ? TEAL + "22" : "transparent", color: tab === t.id ? TEAL : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: TEAL, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: TEAL, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: TEAL, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Healing Journey</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to bring your inner life honestly before God and into the counseling process.</p>
            {[
              { label: "Issue — what you are working through", val: jIssue, set: setJIssue },
              { label: "Approach — what you are doing about it (counseling, prayer, community)", val: jApproach, set: setJApproach },
              { label: "Progress — what you are noticing or trusting God for", val: jProgress, set: setJProgress },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: TEAL }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Issue:</span> {e.issue}</p>
                      {e.approach && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Approach:</span> {e.approach}</p>}
                      {e.progress && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: TEAL, fontWeight: 600 }}>Progress:</span> {e.progress}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: TEAL }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
