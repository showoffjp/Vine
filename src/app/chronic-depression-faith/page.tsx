"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "God Is Present in the Darkness",
    verse: "Psalm 139:8",
    text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there. The word translated depths is Sheol — the place of the dead, the place of deepest darkness. God's presence does not stop at the edge of depression's territory. He is in the depths, with you, whether you can feel it or not.",
  },
  {
    title: "Chronic Depression Is Not Lack of Faith",
    verse: "Psalm 88:13–18",
    text: "But I cry to you for help, LORD... Why, LORD, do you reject me and hide your face from me? From my youth I have suffered and been close to death... Darkness is my closest friend. This psalm was written by someone of deep faith who was living with what we would today call treatment-resistant depression. Heman the Ezrahite's experience — a lifetime of suffering, divine silence, no resolution — is Scripture. Your depression is not failure.",
  },
  {
    title: "The Brain Is a Created Organ That Can Be Ill",
    verse: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made. The brain that does not produce adequate serotonin, that dysregulates mood, that produces anhedonia and despair — is still a fearfully and wonderfully made brain. Depression is not moral failure. It is an illness of a created organ. Treating it is stewardship, not lack of faith.",
  },
  {
    title: "God Met Elijah's Body Before His Spirit",
    verse: "1 Kings 19:5–7",
    text: "All at once an angel touched him and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water. He ate and drank and then lay down again. The angel of the LORD came back a second time and touched him and said, 'Get up and eat, for the journey is too much for you.' God's response to Elijah's clinical-level depression was embodied care: food, sleep, gentle presence. Not exhortation. Not prayer. Soup.",
  },
  {
    title: "Lament That Never Resolves Is Still Holy",
    verse: "Psalm 88:1",
    text: "LORD, you are the God who saves me; day and night I cry out to you. Psalm 88 is the Bible's only psalm that ends in unresolved darkness — no pivot to praise, no resolution. For those with chronic depression, forced praise can feel like spiritual performance. Psalm 88 gives you permission to address God honestly in the darkness, without requiring resolution as the price of your prayer.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Kathryn Greene-McCreight",
    role: "Episcopal priest, theologian, author",
    quote: "I have lived with depression long enough to know that it tells lies. It says: God is absent, no one cares, nothing will ever change, you are beyond reach. Every single one of these is a lie. The task in depression is not to feel the truth — it is to hold to the truth while you cannot feel it.",
    bio: "Kathryn Greene-McCreight (Darkness Is My Only Companion) is an Episcopal priest and theologian who writes about chronic depression from the inside. Her work is theologically sophisticated and pastorally irreplaceable — she holds together the honest weight of the experience and the Christian conviction that sustains her through it.",
  },
  {
    id: "v2",
    name: "Andrew Solomon",
    role: "Author, The Noonday Demon",
    quote: "The opposite of depression is not happiness. It is vitality — the capacity to feel, to want, to reach. Recovery from depression is the return of vitality, not the constant presence of happiness.",
    bio: "Andrew Solomon (The Noonday Demon) wrote the most comprehensive and compassionate account of depression available. Though secular, his work has been widely used by Christian counselors for its clinical rigor and profound humanization of the depressive experience. His distinction between happiness and vitality is liberating for those who fear they will never be happy.",
  },
  {
    id: "v3",
    name: "Matthew Stanford",
    role: "Neuroscientist, author, Grace for the Afflicted",
    quote: "Depression is a brain disease. Like diabetes or heart disease, it involves real biological dysfunction — neurotransmitter imbalance, altered brain structure, disrupted sleep regulation. The church must stop treating it as primarily a spiritual problem and start joining the medical team as a community of support.",
    bio: "Matthew Stanford (Grace for the Afflicted) is a neuroscientist and Christian who has written the most comprehensive Christian framework for mental illness as a biological reality. His work helps Christians understand depression without shame and helps churches provide genuine — not counterproductive — support.",
  },
  {
    id: "v4",
    name: "Curt Thompson",
    role: "Christian psychiatrist, author",
    quote: "Depression tells you the story is over. What neuroscience knows — and what Christian faith proclaims — is that the story is not over. New neural pathways can be built. New experiences of safety and connection change the brain. Hope is not wishful thinking. It is neurologically grounded.",
    bio: "Curt Thompson (Anatomy of the Soul, The Soul of Shame) integrates interpersonal neurobiology with Christian theology. His work on depression explains both its neurological mechanisms and its spiritual dimensions, and offers a framework for healing that takes both seriously.",
  },
];

const practices = [
  {
    icon: "💊",
    title: "Medication Is a Valid and Sometimes Essential Tool",
    text: "Antidepressants, mood stabilizers, and other psychiatric medications are medical treatments for a medical condition. They are not a shortcut, not a sign of weak faith, and not a permanent crutch — they are tools that allow the brain to function more as it was made to function. Work with a psychiatrist, not just a primary care physician, for complex or treatment-resistant depression.",
  },
  {
    icon: "🧠",
    title: "Pursue Evidence-Based Therapy",
    text: "CBT (Cognitive Behavioral Therapy), ACT (Acceptance and Commitment Therapy), and Behavioral Activation all have strong evidence for depression. Find a therapist trained in at least one of these approaches. Tell them you are a Christian and that your faith is part of your framework — a good therapist will integrate this, not dismiss it.",
  },
  {
    icon: "🏃",
    title: "Treat Exercise as Medication",
    text: "Regular aerobic exercise has antidepressant effects equivalent to medication in some studies — not because it requires effort or discipline, but because it produces neurochemical changes (BDNF, endorphins, serotonin) that medication also targets. The key is regularity and gentleness: walking counts, it needs to be sustainable.",
  },
  {
    icon: "🌙",
    title: "Protect Sleep Aggressively",
    text: "Depression disrupts sleep, and disrupted sleep worsens depression. This bidirectional relationship makes sleep one of the most important targets in depression management. Consistent wake time (even on weekends), light therapy in the morning, limiting caffeine after noon, and a wind-down routine are practical starting points.",
  },
  {
    icon: "📖",
    title: "Read Psalm 88 and Psalm 23 Together",
    text: "Psalm 88 ends in darkness — no resolution. Psalm 23 says: even through the valley of the shadow of death, you are with me. Both are addressed to God. Both are Scripture. You are permitted to live in Psalm 88 while knowing Psalm 23 is also true. The valley has a presence in it.",
  },
  {
    icon: "👥",
    title: "Tell One Person Your Real Number",
    text: "Depression isolates. The isolation worsens depression. Breaking the cycle requires telling at least one person your real number — not fine, not hanging in there, but the actual experience. This does not require a crisis disclosure. It requires one trusted person who can handle honesty without trying to fix it.",
  },
];

const scriptures = [
  { verse: "Psalm 139:8", text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
  { verse: "Psalm 88:1", text: "LORD, you are the God who saves me; day and night I cry out to you." },
  { verse: "Psalm 88:18", text: "You have taken from me friend and neighbor — darkness is my closest friend." },
  { verse: "1 Kings 19:5–6", text: "Then he lay down under the bush and fell asleep. All at once an angel touched him and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water." },
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "Romans 8:38–39", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
];

type DepEntry = { id: string; date: string; honest: string; body: string; truth: string };

export default function ChronicDepressionFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DepEntry[]>([]);
  const [honest, setHonest] = useState("");
  const [body, setBody] = useState("");
  const [truth, setTruth] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_chronicdepressionj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!honest.trim()) return;
    const entry: DepEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      honest,
      body,
      truth,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chronicdepressionj_entries", JSON.stringify(updated));
    setHonest(""); setBody(""); setTruth("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chronicdepressionj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Mental Health & Faith</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Chronic Depression and Faith
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For Christians living with depression that does not lift quickly — chronic, recurrent, or treatment-resistant. Your depression is not lack of faith. Psalm 88 is in your Bible. God is in the depths.
        </p>

        <div style={{ background: "#1a0a2a", border: "1px solid #3a1a5a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are having thoughts of suicide</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: "#e07070" }}>Call or text 988</strong> now — Suicide & Crisis Lifeline &nbsp;·&nbsp; Crisis Text Line: text HOME to 741741 &nbsp;·&nbsp; NAMI: 1-800-950-6264 &nbsp;·&nbsp; Depression and Bipolar Support Alliance: <span style={{ color: PURPLE }}>dbsalliance.org</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Journal Entry</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What is your honest state right now? Give it a number and a few words.</label>
                <textarea value={honest} onChange={(e) => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What did your body need today — did you give it anything?</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What truth about God&apos;s presence do you want to hold onto today?</label>
                <textarea value={truth} onChange={(e) => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.honest && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>State:</strong> {e.honest}</p>}
                {e.body && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Body:</strong> {e.body}</p>}
                {e.truth && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Truth:</strong> {e.truth}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Depression and the Christian Life", channel: "Kay Warren", description: "Kay Warren on what the church must learn about depression — grounded in her son's decades-long struggle with mental illness. One of the most important pastoral voices for those whose depression is chronic." },
              { videoId: "ZGk1hl1nNrw", title: "Grace for the Afflicted: Depression", channel: "Matthew Stanford", description: "Neuroscientist Matthew Stanford on depression as a brain condition — why medication is consistent with Christian faith and what genuine support looks like in Christian communities." },
              { videoId: "j2h-q3ZPKFI", title: "Darkness Is My Only Companion", channel: "Kathryn Greene-McCreight", description: "Kathryn Greene-McCreight on living with bipolar disorder and depression as an Episcopal priest — how to hold faith and darkness together without dishonesty." },
              { videoId: "7TBHqMqBmBo", title: "Lament as Spiritual Practice", channel: "Soong-Chan Rah", description: "Soong-Chan Rah on the biblical language of lament — why the church needs to recover the vocabulary of Psalm 88, which ends in darkness without resolution, for those whose depression does not lift." },
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
    </main>
  );
}
