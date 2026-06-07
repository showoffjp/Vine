"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Psalms Are a Manual for Depression",
    verse: "Psalm 88:13-14",
    text: "\"But I, O Lord, cry to you; in the morning my prayer comes before you. O Lord, why do you cast my soul away? Why do you hide your face from me?\" Psalm 88 is the only Psalm that ends without resolution — no turn to hope, no final praise, just darkness. The fact that this Psalm is in the canon is a statement: God holds space for the person whose darkness does not lift by the end of the poem. You are not outside scripture in your depression. You are in the middle of it."
  },
  {
    title: "Depression Is Not Faithlessness",
    verse: "1 Kings 19:4-5",
    text: "\"He himself went a day's journey into the wilderness and came and sat down under a broom tree. And he asked that he might die, saying, 'It is enough; now, O Lord, take away my life.'\" Elijah, immediately after his greatest triumph, collapsed into suicidal depression. God's response was not rebuke, not theological correction, not the command to pray more. It was sleep and food. The most basic physical care. God is not scandalized by your depression."
  },
  {
    title: "The Brain God Made Can Break",
    verse: "Psalm 103:14",
    text: "\"For he knows our frame; he remembers that we are dust.\" God knows what we are made of. Depression is, in significant part, a neurobiological condition — involving serotonin, dopamine, glutamate, cortisol, and the architecture of the brain itself. Knowing this does not remove the spiritual dimension; it adds the physical. God remembers we are dust. He does not expect the person with depression to simply decide to feel differently."
  },
  {
    title: "The Ministry of Friends Who Show Up",
    verse: "Job 2:13",
    text: "\"And they sat with him on the ground seven days and seven nights, and no one spoke a word to him, for they saw that his suffering was very great.\" Job's friends, before they began to speak (and ruin everything), did the most important thing: they came, they sat, they stayed silent. The ministry of presence — without explanation, without platitude, without premature encouragement — is the most healing thing a community can offer someone in depression."
  },
  {
    title: "Morning Will Come",
    verse: "Psalm 30:5",
    text: "\"Weeping may tarry for the night, but joy comes with the morning.\" This Psalm does not promise that the night will be short. It promises that it will end. For those in severe depression — for whom morning does not feel real, for whom the future feels foreclosed — this promise requires holding like a lifeline rather than receiving as obvious. Morning will come. You do not have to be able to feel it for it to be true."
  }
];

const voices = [
  {
    id: "v1", name: "Matthew Stanford", role: "Neuroscientist; Hope and Healing Center",
    quote: "Clinical depression is not a lack of faith. It is a medical condition affecting the brain that God created. Treatment — including medication — is an appropriate and faithful response.",
    bio: "Dr. Matthew Stanford's work at the intersection of neuroscience, psychiatry, and Christian faith has helped thousands of Christians understand depression as a medical condition without reducing it to a purely biological problem. His book 'Hope and Healing for Your Nerves' is essential."
  },
  {
    id: "v2", name: "Curt Thompson", role: "Psychiatrist, Author",
    quote: "Depression is not primarily a thought problem. It is a relational problem — the nervous system disconnected from itself and from others. Treatment that includes community is more effective than medication alone.",
    bio: "Dr. Curt Thompson integrates neuroscience and Christian theology in his understanding of depression. His insight that depression is in part a relational disconnection — and that community is itself therapeutic — speaks directly to how the church can be part of treatment."
  },
  {
    id: "v3", name: "William Styron", role: "Author, 'Darkness Visible'",
    quote: "Depression is not sadness. It is a brainstorm, a howling tempest in the brain. It bears the same relationship to sadness that a tornado bears to an afternoon thundershower.",
    bio: "William Styron's memoir 'Darkness Visible' is the most articulate first-person account of severe depression in English literature. Though not written from a Christian perspective, it has been instrumental in helping both sufferers and non-sufferers understand the physiological reality of severe depression."
  },
  {
    id: "v4", name: "Paul Tripp", role: "Counselor, Author",
    quote: "Depression is not a sign that God has abandoned you. It is often a sign that you are experiencing the brokenness of a fallen world in your own body and mind — which is precisely where the gospel meets you.",
    bio: "Paul David Tripp's pastoral and counseling work addresses depression from a Reformed theological perspective with genuine pastoral compassion. His work helps depressed Christians understand their experience without spiritualizing it away or reducing it to a purely medical problem."
  }
];

const practices = [
  {
    icon: "🏥",
    title: "Seek Professional Evaluation",
    text: "Clinical depression requires professional diagnosis and treatment. See your primary care physician or a psychiatrist. Treatment options include antidepressant medications, psychotherapy (especially CBT and interpersonal therapy), or both. The combination of medication and therapy has the strongest evidence base. Treatment works for most people."
  },
  {
    icon: "💊",
    title: "Medication Without Shame",
    text: "Antidepressants are not happiness pills — they are medications that address the neurobiological disruptions that produce depression. There is no more spiritual virtue in refusing antidepressants than in refusing insulin for diabetes. Many faithful Christians manage depression with medication as an act of responsible self-care."
  },
  {
    icon: "🫂",
    title: "Tell Someone You Trust",
    text: "Depression isolates — and isolation makes depression worse. Telling a trusted friend, family member, or pastor that you are struggling is both practically important and clinically beneficial. Being known by another person is itself therapeutic. You do not have to manage this alone."
  },
  {
    icon: "🌞",
    title: "Basic Physical Care",
    text: "What God did for Elijah under the broom tree: sleep and food. Regular sleep, regular meals, sunlight, and gentle movement (even a short walk) all have evidence-based impact on depressive symptoms. These are not a cure, but they are important. Depression makes basic self-care feel impossible — start with the smallest possible step."
  },
  {
    icon: "📖",
    title: "Minimal Spiritual Practice",
    text: "During depression, traditional devotional life may feel impossible. Reduce to a minimum: one verse, one psalm read aloud, one sentence of prayer. Not because God requires performance but because the smallest connection to the tradition can serve as a thread. Do not add guilt about not doing more."
  },
  {
    icon: "📿",
    title: "Know Your Warning Signs and Safety Plan",
    text: "If your depression involves suicidal thoughts, work with your therapist or doctor to create a safety plan now, when you are able to think clearly. Know your warning signs. Know who to call. Know that 988 is available any time. This plan is your gift to yourself for the hard nights."
  }
];

const scriptures = [
  { verse: "Psalm 88:13-14", text: "But I, O Lord, cry to you; in the morning my prayer comes before you. O Lord, why do you cast my soul away? Why do you hide your face from me?" },
  { verse: "1 Kings 19:4", text: "He asked that he might die, saying, 'It is enough; now, O Lord, take away my life, for I am no better than my fathers.'" },
  { verse: "Psalm 103:14", text: "For he knows our frame; he remembers that we are dust." },
  { verse: "Psalm 30:5", text: "For his anger is but for a moment, and his favor is for a lifetime. Weeping may tarry for the night, but joy comes with the morning." },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a faintly burning wick he will not quench; he will faithfully bring forth justice." },
  { verse: "Lamentations 3:22-23", text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." }
];

type DcEntry = { id: string; date: string; today: string; smallest: string; hold: string };

export default function DepressionChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DcEntry[]>([]);
  const [today, setToday] = useState("");
  const [smallest, setSmallest] = useState("");
  const [hold, setHold] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_depressionchristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!today.trim()) return;
    const entry: DcEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), today, smallest, hold };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_depressionchristj_entries", JSON.stringify(updated));
    setToday(""); setSmallest(""); setHold("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_depressionchristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌑</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>Depression &amp; Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For Christians in the darkness of clinical depression — you are not faithless, you are not abandoned, and the morning is real even when you cannot feel it coming.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Crisis &amp; Support:</strong> 988 Lifeline (call/text 988) &bull; NAMI: nami.org or 1-800-950-6264 &bull; ADAA: adaa.org &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Daily Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Write only what you can. There is no minimum. One word is enough.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>How is today — honestly?</label>
                  <textarea value={today} onChange={e => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What is the smallest possible step I took or can take today?</label>
                  <textarea value={smallest} onChange={e => setSmallest(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I still holding onto — even barely?</label>
                  <textarea value={hold} onChange={e => setHold(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.today && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Today:</strong> {e.today}</p>}
                {e.smallest && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Smallest step:</strong> {e.smallest}</p>}
                {e.hold && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}><strong>Holding:</strong> {e.hold}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Depression Is Not a Sin</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Matthew Stanford on depression as a neurobiological condition and the church&apos;s failure to understand it</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Depression Is Not a Sin" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>The Neuroscience of Depression</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Curt Thompson on the brain, depression, and why relational healing is part of recovery</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="The Neuroscience of Depression" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Psalm 88: The Darkest Psalm</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>The only Psalm with no turn to hope — and what it tells us about God holding the depressed person</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Psalm 88: The Darkest Psalm" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Elijah Under the Broom Tree</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>God&apos;s response to suicidal depression in the prophet — and what it means for Christians today</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Elijah Under the Broom Tree" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
