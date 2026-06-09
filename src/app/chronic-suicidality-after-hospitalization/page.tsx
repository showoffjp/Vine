"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "You Are Still Here — That Is Not Nothing",
    verse: "Psalm 118:17",
    text: "\"I shall not die, but I shall live, and recount the deeds of the Lord.\" Every day you survive chronic suicidality is an act of profound courage. The fact that you are reading this — that you are still here — is not a small thing. It is a testimony, even if it does not feel like one. God does not require you to feel grateful to be held by him."
  },
  {
    title: "The Wounds That Remain",
    verse: "John 20:27",
    text: "\"Put your finger here, and see my hands; and put out your hand, and place it in my side.\" The risen Christ still carried his wounds. Resurrection did not erase the marks of suffering — it transformed them. The psychiatric hospitalization, the scars, the diagnosis, the history — these are part of your story. They do not disqualify you from anything. They are not the last word."
  },
  {
    title: "God Does Not Abandon the Suicidal",
    verse: "1 Kings 19:4-5",
    text: "\"He asked that he might die, saying, 'It is enough; now, O Lord, take away my life, for I am no better than my fathers.' And he lay down and slept under a broom tree. And behold, an angel touched him and said to him, 'Arise and eat.'\" Elijah wanted to die. God did not lecture him. God fed him and let him sleep. God's response to suicidal despair in scripture is practical, gentle care — not condemnation."
  },
  {
    title: "The Illness Is Not the Identity",
    verse: "2 Corinthians 4:8-9",
    text: "\"We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed.\" Chronic suicidality is a symptom of profound illness — depression, bipolar disorder, PTSD, borderline personality disorder. It is not your identity. It is not God's verdict on your worth. You are not your illness. The illness is something that is happening to you."
  },
  {
    title: "Hope After the Hospital",
    verse: "Lamentations 3:21-23",
    text: "\"But this I call to mind, and therefore I have hope: The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.\" The writer of Lamentations composed this in the middle of catastrophe, not after it. Hope in chronic suicidality is not certainty that tomorrow will be fine — it is finding one merciful thing, even small, in today."
  }
];

const voices = [
  {
    id: "v1", name: "Kay Warren", role: "Author, 'Choose Joy'; Mental Health Advocate",
    quote: "My son Matthew took his life after years of chronic suicidality and mental illness. His illness was as real as any physical illness. The church failed him by treating it as something else.",
    bio: "Kay Warren, wife of pastor Rick Warren, became a powerful advocate for mental health in the church after her son Matthew died by suicide in 2013. Her advocacy has challenged the stigma surrounding chronic mental illness and suicide within Christian communities with unflinching honesty."
  },
  {
    id: "v2", name: "Marsha Linehan", role: "Psychologist, Creator of DBT",
    quote: "People with borderline personality disorder and chronic suicidality are not trying to manipulate anyone. They are in unbearable pain that they don't know how to survive.",
    bio: "Dr. Marsha Linehan developed Dialectical Behavior Therapy (DBT) — the most effective evidence-based treatment for chronic suicidality. She later disclosed her own history of psychiatric hospitalization. DBT has been transformative for thousands of people living with chronic suicidal thoughts and urges."
  },
  {
    id: "v3", name: "Matthew Stanford", role: "Neuroscientist, CEO of Hope and Healing Center",
    quote: "We must stop treating mental illness as a spiritual failure and start treating it as what it is — a medical condition that affects the brain God gave us.",
    bio: "Dr. Matthew Stanford is a neuroscientist and Christian who leads the Hope and Healing Center in Houston. His book 'Grace for the Afflicted' addresses mental illness from a theologically informed and scientifically responsible perspective, including chronic suicidality."
  },
  {
    id: "v4", name: "Curt Thompson", role: "Psychiatrist, Author",
    quote: "Shame is at the heart of suicidality. 'I am the problem that needs to go away.' The antidote to shame is not discipline or more willpower — it is being known and loved.",
    bio: "Dr. Curt Thompson's integration of neuroscience and Christian theology illuminates how shame drives suicidal ideation and how relational repair — with God and others — is itself a form of treatment. His work offers theological depth to what can feel like a purely clinical problem."
  }
];

const practices = [
  {
    icon: "🏥",
    title: "A Safety Plan Is Not Optional",
    text: "If you live with chronic suicidality, you need a written safety plan — with your therapist or crisis team — that includes warning signs, coping strategies, reasons to live, people to call, and emergency numbers. This plan should be reviewed regularly and accessible when you can't think clearly. The 988 Lifeline can help you build one."
  },
  {
    icon: "🧠",
    title: "Pursue Evidence-Based Treatment",
    text: "DBT (Dialectical Behavior Therapy) has the strongest evidence base for chronic suicidality, particularly when associated with borderline personality disorder or severe depression. Ask specifically for a DBT-trained therapist. Other effective treatments include CBT, EMDR for trauma, and medication management. Treatment works."
  },
  {
    icon: "📵",
    title: "Means Restriction",
    text: "Reducing access to lethal means during high-risk periods significantly reduces suicide mortality. Lock up medications, firearms, or other means in advance. Tell a trusted person where they are. This is not giving up — it is creating the conditions for survival until the crisis passes."
  },
  {
    icon: "✝️",
    title: "Faith Community Disclosure",
    text: "Telling your pastor, small group, or trusted church member about your struggle is a profoundly vulnerable act. It also breaks the isolation that makes suicidality worse. Ask for what you need specifically: check-in texts, a ride to appointments, someone to sit with you on hard nights. Specific requests are easier for communities to honor."
  },
  {
    icon: "📿",
    title: "Reasons to Live",
    text: "During cognitive distortions that accompany suicidal crises, access to your 'reasons to live' list is essential. Write it in a calm moment: people, experiences, unfinished work, faith commitments, hopes — anything. Keep it somewhere you will find it. Review it with your therapist. It is not a silver bullet; it is one anchor."
  },
  {
    icon: "🫂",
    title: "Peer Support",
    text: "People who have survived psychiatric hospitalization and chronic suicidality can provide a kind of companionship that clinicians and pastors cannot. NAMI (nami.org) offers peer support groups. The Samaritans and Crisis Text Line offer trained volunteer listeners available around the clock."
  }
];

const scriptures = [
  { verse: "Psalm 118:17", text: "I shall not die, but I shall live, and recount the deeds of the Lord." },
  { verse: "1 Kings 19:4-5", text: "He asked that he might die, saying, 'It is enough; now, O Lord, take away my life.' And he lay down and slept under a broom tree. And behold, an angel touched him and said to him, 'Arise and eat.'" },
  { verse: "2 Corinthians 4:8-9", text: "We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed." },
  { verse: "Lamentations 3:21-23", text: "But this I call to mind, and therefore I have hope: The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
  { verse: "John 20:27", text: "Then he said to Thomas, 'Put your finger here, and see my hands; and put out your hand, and place it in my side. Do not disbelieve, but believe.'" },
  { verse: "Romans 8:38-39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." }
];

type SaEntry = { id: string; date: string; warning: string; anchor: string; called: string };

export default function ChronicSuicidalityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SaEntry[]>([]);
  const [warning, setWarning] = useState("");
  const [anchor, setAnchor] = useState("");
  const [called, setCalled] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_chronicsuicidalityj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!warning.trim()) return;
    const entry: SaEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), warning, anchor, called };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chronicsuicidalityj_entries", JSON.stringify(updated));
    setWarning(""); setAnchor(""); setCalled("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chronicsuicidalityj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕊️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>Chronic Suicidality &amp; Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those who live with recurring suicidal thoughts after hospitalization — trying to find reasons to stay, hold onto faith, and build a life worth living in the aftermath of severe mental illness.
          </p>
        </div>

        <div style={{ background: "#1a0a0a", border: `1px solid #5a1a1a`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: "#ff9999", fontSize: "0.9rem", fontWeight: "bold", marginBottom: "0.25rem" }}>If you are in crisis right now:</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            Call or text <strong style={{ color: TEXT }}>988</strong> (Suicide &amp; Crisis Lifeline) &bull; Text HOME to <strong style={{ color: TEXT }}>741741</strong> (Crisis Text Line) &bull; Call <strong style={{ color: TEXT }}>911</strong> or go to your nearest emergency room
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Additional Support:</strong> NAMI: nami.org or 1-800-950-6264 &bull; AFSP: afsp.org &bull; Hope and Healing Center: hopeandhealing.us &bull; Samaritans: samaritansusa.org
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
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>This journal is for stable moments — not crisis moments. If you are in crisis, please reach out to your safety plan contacts or call 988.</p>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Recovery Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What warning signs did I notice this week?</label>
                  <textarea value={warning} onChange={e => setWarning(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What anchored me? (Reason to live, practice, person)</label>
                  <textarea value={anchor} onChange={e => setAnchor(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>Who did I reach out to, or who could I reach out to next time?</label>
                  <textarea value={called} onChange={e => setCalled(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
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
                {e.warning && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Warning signs:</strong> {e.warning}</p>}
                {e.anchor && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Anchor:</strong> {e.anchor}</p>}
                {e.called && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}><strong>Connection:</strong> {e.called}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Kay Warren: Mental Illness in the Church</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Kay Warren on her son Matthew&apos;s death and the church&apos;s response to mental illness and suicide</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Kay Warren: Mental Illness in the Church" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>DBT and the Life Worth Living</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Dialectical Behavior Therapy and skills for surviving chronic suicidality</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="DBT and the Life Worth Living" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Grace for the Afflicted</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Matthew Stanford on mental illness, theology, and the church&apos;s response</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Grace for the Afflicted" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Shame and Suicidality</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Curt Thompson on how shame drives suicidal thinking and how connection heals</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Shame and Suicidality" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
