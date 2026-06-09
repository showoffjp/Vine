"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Depression Is Not Unbelief",
    verse: "Psalm 22:1",
    text: "\"My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?\" These are not the words of an atheist. They are the prayer of someone in acute psychological suffering who still addresses God — and whose prayer was preserved in the canon of Scripture and placed on the lips of Jesus in his dying moments. The person who prays through tears, who prays from the bottom of an illness that will not lift, who can only groan — they are not failing to believe. They are in the long company of the faithful who have prayed exactly this way.",
  },
  {
    title: "Treatment-Resistant Depression Is a Medical Reality",
    verse: "Luke 8:43",
    text: "\"And a woman was there who had been subject to bleeding for twelve years, but no one could heal her.\" The woman had spent everything she had on treatment that did not work. Her condition was not the result of insufficient faith — faith was what drove her through the crowd to touch Jesus. Treatment-resistant depression is real: approximately one-third of people with major depression do not achieve remission with initial treatment, and many require extended trials, combinations, and newer interventions. This does not mean God is absent; it means the illness is serious.",
  },
  {
    title: "God Does Not Demand Performance When You Are Ill",
    verse: "Matthew 11:28",
    text: "\"Come to me, all you who are weary and burdened, and I will give you rest.\" The invitation is not: become well, then come. It is: come as you are — weary, burdened, unable to perform the spiritual disciplines that feel like the price of access. Depression frequently destroys the capacity for normal spiritual practice: prayer feels hollow, Scripture feels flat, worship feels impossible. God's invitation to rest does not require the restoration of capacity as a precondition. You can bring your emptiness as it is.",
  },
  {
    title: "The Dark Night of the Soul Is Not the Absence of God",
    verse: "Psalm 139:11–12",
    text: "\"If I say, 'Surely the darkness will hide me and the light become night around me,' even the darkness will not be dark to you; the night will shine like the day, for darkness is as light to you.\" The mystical tradition — John of the Cross, Julian of Norwich, Thomas Merton — has long described periods of spiritual desolation in which God seems completely absent. These were not understood as failure but as a particular kind of formation. The person with treatment-resistant depression who cannot feel God is not outside God's reach. Darkness is not dark to God.",
  },
  {
    title: "Persistent Suffering Produces Documented Spiritual Depth",
    verse: "Romans 5:3–5",
    text: "\"We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.\" This is not a call to enjoy suffering or pretend it is not real. It is an honest account of what suffering — endured — sometimes produces over time. Many people with treatment-resistant depression who have lived through decades of it describe a particular quality of compassion, depth, and unsentimental faith that they could not have arrived at otherwise. Paul does not minimize the suffering; he names what, in God's economy, it is capable of producing.",
  },
];

const voices = [
  {
    id: 1,
    name: "William Styron",
    role: "Author, Darkness Visible",
    quote: "Depression is a disorder of mood, so mysteriously painful and elusive in the way it becomes known to the self — to the mediating intellect — as to verge close to being beyond description.",
    bio: "Styron's Darkness Visible is one of the most precise literary accounts of severe depression ever written — its phenomenology, its resistance to treatment, its assault on every dimension of selfhood. It has helped millions name what they are experiencing.",
  },
  {
    id: 2,
    name: "Fr. Thomas Keating",
    role: "Cistercian monk, Contemplative Prayer Teacher",
    quote: "The dark night of the soul is not a punishment. It is a gift — the gift of being emptied so that God can fill you with something that was not possible while you were still full of yourself.",
    bio: "Keating's teaching on contemplative prayer and the dark night of the soul has provided a theological framework for Christians navigating extended spiritual desolation alongside or within depression.",
  },
  {
    id: 3,
    name: "Andrew Solomon",
    role: "Author, The Noonday Demon; Mental Health Advocate",
    quote: "Depression is the flaw in love. To be creatures who love, we must be creatures who can despair at what we lose, and depression is the mechanism of that despair.",
    bio: "Solomon's The Noonday Demon is the most comprehensive account of depression — its science, its treatments, its cultural dimensions, its relationship to meaning — and has become the standard reference for understanding the illness in its full complexity.",
  },
  {
    id: 4,
    name: "Kathryn Greene-McCreight",
    role: "Author, Darkness Is My Only Companion",
    quote: "I was a theologian who knew all the right answers — and depression stripped every answer away. What was left was only God, and God's holding of me when I could not hold on.",
    bio: "Greene-McCreight, an Anglican priest and theologian, wrote about her own severe depression and psychiatric hospitalizations from within the faith, providing one of the most theologically sophisticated accounts of depression written by a Christian for Christians.",
  },
];

const practices = [
  {
    icon: "🏥",
    title: "Pursue Aggressive, Comprehensive Medical Treatment",
    text: "Treatment-resistant depression requires specialist care. Ask your psychiatrist about augmentation strategies (adding lithium, thyroid hormone, atypical antipsychotics), medication switches, and newer treatments. TMS (Transcranial Magnetic Stimulation) is now widely available and FDA-approved for TRD. Ketamine and esketamine (Spravato) have shown remarkable results for some treatment-resistant cases. ECT (Electroconvulsive Therapy) remains the most effective treatment for severe treatment-resistant depression and is far safer and less frightening than its reputation suggests.",
  },
  {
    icon: "🧠",
    title: "Find a Psychiatrist Who Specializes in Treatment-Resistant Depression",
    text: "General practitioners and even general psychiatrists may not be familiar with all options for TRD. Major academic medical centers (Mayo Clinic, Cleveland Clinic, Johns Hopkins, Mass General) have specialized TRD programs. A second or third opinion from a specialist can change the treatment trajectory dramatically. The illness has not responded to treatment — not because treatment is impossible, but because the right treatment has not yet been found.",
  },
  {
    icon: "🛌",
    title: "Honor the Limits the Illness Imposes",
    text: "Trying to perform normal life on top of treatment-resistant depression frequently makes things worse by adding a failure experience to the illness. Identify the minimum viable functioning — what must be maintained and what can be set aside. Disability accommodation at work, reduced responsibilities at home, suspended social obligations — these are not failures. They are appropriate responses to a serious illness. Recovery does not happen through force of will.",
  },
  {
    icon: "🕯️",
    title: "Find Minimal Spiritual Practices That Are Actually Accessible",
    text: "Reading Psalms of lament when nothing else is possible. A single sentence of prayer. A candle. A short period of silence without demand for experience. People with severe depression need spiritual practices calibrated to their actual capacity — not the aspirational capacity of a healthy person. The mystics document that in states of desolation, receptive practices (sitting in God's presence without performing) are more appropriate than active devotion.",
  },
  {
    icon: "👥",
    title: "Let a Small Group of People Know the Truth",
    text: "Isolation feeds depression. The stigma around mental illness is powerful and causes many sufferers to hide their condition — which then deepens both the illness and the loneliness. Identify two or three people who can know the actual situation and check in. You do not need a support network of thirty; you need two or three people who will not be frightened off by the darkness and who will sustain contact even when you cannot initiate it.",
  },
  {
    icon: "📝",
    title: "Create a Safety Plan for Hard Moments",
    text: "Depression increases suicide risk, and treatment-resistant depression requires a proactive plan. Work with your therapist or psychiatrist to create a written safety plan: the warning signs, the people to contact, the crisis lines (988), the places to go. Having the plan already written means you do not have to generate it in the moment when cognitive resources are most depleted. Tell someone you trust where the plan is.",
  },
];

const scriptures = [
  { verse: "Psalm 88:13–14", text: "\"But I cry to you for help, LORD; in the morning my prayer comes before you. Why, LORD, do you reject me and hide your face from me?\"" },
  { verse: "Isaiah 40:28–29", text: "\"Do you not know? Have you not heard? The LORD is the everlasting God... He will not grow tired or weary... He gives strength to the weary and increases the power of the weak.\"" },
  { verse: "2 Corinthians 4:8–9", text: "\"We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed.\"" },
  { verse: "Romans 8:26", text: "\"In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.\"" },
  { verse: "1 Kings 19:5", text: "\"All at once an angel touched him and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water. He ate and drank and then lay down again.\"" },
  { verse: "Revelation 21:4", text: "\"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.\"" },
];

type DepressionEntry = {
  id: string;
  date: string;
  today: string;
  honest: string;
  prayer: string;
};

export default function ChronicDepressionTreatmentResistantFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DepressionEntry[]>([]);
  const [today, setToday] = useState("");
  const [honest, setHonest] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_chronicdepressiontreatmentresistant_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!today.trim()) return;
    const entry: DepressionEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today,
      honest,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chronicdepressiontreatmentresistant_entries", JSON.stringify(updated));
    setToday(""); setHonest(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chronicdepressiontreatmentresistant_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌑</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Chronic & Treatment-Resistant Depression: Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For those who have tried everything and still live in the darkness — pastoral care that does not demand recovery as the price of welcome, honest theology for the person in the long night, and medical information about treatments you may not yet have tried.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Crisis: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>Crisis Text Line:</strong> Text HOME to 741741 | <strong>NAMI Helpline:</strong> 1-800-950-6264
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${PURPLE}` }}>
                <div style={{ color: PURPLE, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Where are you today — in the darkness, in the waiting, in the numbness?</label>
                <textarea value={today} onChange={e => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What do you need to be honest about — with yourself, with your treatment team, with God?</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Any words — even a fragment of prayer:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.today && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Today:</strong> {e.today}</p>}
                {e.honest && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Honest:</strong> {e.honest}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="XiCrniLQGYc" title="Kathryn Greene-McCreight — Darkness Is My Only Companion: Depression and Christian Faith" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Kathryn Greene-McCreight: Darkness Is My Only Companion — Depression and Christian Faith</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Anglican priest and theologian on navigating severe depression and psychiatric hospitalization from within the faith tradition</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="IifXMd26gWE" title="Treatment-Resistant Depression — Options Beyond Antidepressants" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Treatment-Resistant Depression: Options Beyond Standard Antidepressants</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical overview of TMS, ketamine, ECT, and newer interventions for people whose depression has not responded to standard treatments</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="sXDuAMWHERU" title="The Dark Night of the Soul — John of the Cross and Spiritual Desolation" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Dark Night of the Soul: John of the Cross on Spiritual Desolation</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>The mystical tradition&apos;s understanding of extended spiritual darkness — what it means, what it is not, and how the saints have navigated it</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="rNJgBxlMTCU" title="Andrew Solomon — The Noonday Demon: A Personal Account of Depression" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Andrew Solomon: The Noonday Demon — What Depression Actually Feels Like</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Author Andrew Solomon on his own experience of severe depression and what the illness does to the interior life of a person</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
