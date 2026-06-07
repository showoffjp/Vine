"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Your Child Is Made in the Image of God",
    verse: "Genesis 1:27",
    text: "The teenager who is expressing suicidal thoughts is not a problem to be managed. They are a person made in the image of God, in acute pain, whose suffering is real and whose life is irreplaceable. Your primary task as a parent is not to say the right thing. It is to stay present, to let them know you are not going anywhere, and to get them to professional help. The presence of a parent who will not panic and will not abandon is itself therapeutic.",
  },
  {
    title: "God Is Present in the Valley",
    verse: "Psalm 23:4",
    text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me. The language of the valley — dark, deep, narrow, with walls that block the view — is the language of suicidal crisis. The promise is not that God eliminates the valley but that he is present in it. You can name this to your teenager not as a quick fix but as a real assurance: God is here, even here.",
  },
  {
    title: "Seeking Help Is Faithfulness",
    verse: "Proverbs 11:14",
    text: "Where there is no guidance, a people falls, but in an abundance of counselors there is safety. Getting a mental health professional involved, agreeing to hospitalization if needed, building a safety plan, removing access to means — these are not failures of faith. They are the wise, faithful, courageous things that parents do for children in medical crisis. Suicidal crisis is a medical emergency.",
  },
  {
    title: "Parents Are Not Responsible for Saving Children",
    verse: "Ezekiel 18:20",
    text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child. Your teenager's suicidal thoughts are not your fault. Their recovery is not entirely in your hands. You are responsible for getting them to help, for staying present, for removing means — not for controlling an outcome you cannot control. God is the keeper of this child's life.",
  },
  {
    title: "The Church Is for Crises, Not Just Celebrations",
    verse: "Galatians 6:2",
    text: "Carry each other's burdens, and in this way you will fulfill the law of Christ. The family navigating a teenager's suicidal crisis needs the body of Christ in practical ways: childcare for siblings, meals, presence, prayer, accompaniment to appointments. If your church does not know this is happening, consider telling your pastor or one trusted elder and asking for specific support.",
  },
];

const voices = [
  {
    id: 1,
    name: "Kay Warren",
    role: "Author, Choose Joy; mental health advocate",
    quote: "After losing Matthew, I will spend the rest of my life making sure that parents of suicidal teenagers know: you are not alone, you are not to blame, and there is help.",
    bio: "Kay Warren and her husband Rick Warren lost their son Matthew to suicide. Kay has become one of the most prominent Christian voices on mental illness and suicide, working to end stigma in the church.",
  },
  {
    id: 2,
    name: "Matthew Stanford",
    role: "Author, The Biology of Sin and Grace for the Afflicted",
    quote: "The suicidal teenager is not choosing death over faith. They are in medical crisis. The brain's pain management system has failed. We treat it medically and with faith.",
    bio: "Matthew Stanford is a neuroscientist and Christian who has worked extensively on the intersection of mental illness, faith, and suicide — arguing for an integrated approach that takes both the biology and the theology seriously.",
  },
  {
    id: 3,
    name: "Chinwe Williams",
    role: "Author, Seen: Healing Despair and Anxiety in Kids and Teens",
    quote: "The parent who says 'I see you, I'm not scared of what you're feeling, and I'm not going anywhere' is doing something clinically significant — not just spiritually.",
    bio: "Chinwe Williams is a therapist who works specifically with adolescents in emotional crisis and their families, helping parents learn how to be present without either panicking or dismissing.",
  },
  {
    id: 4,
    name: "Curt Thompson",
    role: "Author, Anatomy of the Soul",
    quote: "The suicidal teenager believes a particular story about themselves and their future. The most important thing we can do is interrupt that story — not by arguing with it but by being a presence that tells a different story.",
    bio: "Curt Thompson's neuroscience-informed approach to pastoral care understands suicidality as a story problem as much as a chemical one — and identifies the irreplaceable role of relational presence in interrupting it.",
  },
];

const practices = [
  {
    icon: "🚨",
    title: "Take Every Expression Seriously",
    text: "Any expression of suicidal ideation — direct or indirect, in person or by text — must be taken seriously. Ask directly: 'Are you thinking about killing yourself?' Asking does not plant the idea. It opens the conversation and often brings relief to the teenager who has been carrying the thought alone.",
  },
  {
    icon: "🏥",
    title: "Seek Immediate Professional Help",
    text: "If your teenager expresses suicidal intent with a plan or access to means, this is a psychiatric emergency. Call 988 (Suicide & Crisis Lifeline), go to the nearest emergency room, or call 911. Do not wait to see if it passes. Do not handle this alone.",
  },
  {
    icon: "🔒",
    title: "Remove Access to Means",
    text: "Means restriction is one of the most evidence-based suicide prevention strategies. Remove or lock firearms, secure medications, remove sharp objects from easy access. The time between impulse and attempt is often very short. Removing access to means saves lives.",
  },
  {
    icon: "👂",
    title: "Listen Without Rushing to Fix",
    text: "The impulse to immediately reassure ('But you have so much to live for!') is understandable and usually unhelpful. Before any reassurance, listen. Ask what it feels like. Ask how long they have been feeling this way. The teenager who is heard is more likely to accept help than the teenager who is immediately corrected.",
  },
  {
    icon: "🤝",
    title: "Build a Safety Plan Together",
    text: "A safety plan identifies warning signs, coping strategies, reasons for living, people to call, and professional contacts. Building it collaboratively with your teenager — with the help of a therapist — creates a road map for crisis that was prepared in a calmer moment.",
  },
  {
    icon: "🛡️",
    title: "Get Support for Yourself",
    text: "Parenting a suicidal teenager is one of the most terrifying experiences a parent can face. You need your own support system — a therapist, a trusted friend, a parent support group. Your wellbeing is not separate from your teenager's wellbeing. You cannot pour from an empty vessel.",
  },
];

const scriptures = [
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." },
  { verse: "Romans 8:38-39", text: "For I am convinced that neither death nor life, neither angels nor demons... will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Psalm 139:16", text: "Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be." },
  { verse: "Proverbs 11:14", text: "Where there is no guidance, a people falls, but in an abundance of counselors there is safety." },
];

type STPEntry = { id: string; date: string; fear: string; presence: string; prayer: string };

export default function SuicidalTeenParentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<STPEntry[]>([]);
  const [fear, setFear] = useState("");
  const [presence, setPresence] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_suicidalteenparentj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!fear.trim()) return;
    const e: STPEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), fear, presence, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_suicidalteenparentj_entries", JSON.stringify(next));
    setFear(""); setPresence(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_suicidalteenparentj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: GREEN, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Parenting a Suicidal Teenager</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For parents navigating one of the most frightening things a family can face — where to go for help, how to stay present, and how to hold both the terror and the faith.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>CRISIS: If your teenager is in immediate danger</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            Call <strong>988</strong> (Suicide & Crisis Lifeline) · Call <strong>911</strong> · Go to nearest Emergency Room · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What fear am I carrying today?</label>
                <textarea value={fear} onChange={e => setFear(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Be specific and honest about what terrifies you..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>How have I been present with my teenager today?</label>
                <textarea value={presence} onChange={e => setPresence(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What you said, what you listened to, how you stayed..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer for your child and yourself</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="God, my child is in darkness. Stay with them. Stay with me..." />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. You are not alone in this.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.fear && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Fear today</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.fear}</p></>}
                {e.presence && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Presence today</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.presence}</p></>}
                {e.prayer && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Seen — Chinwe Williams on Adolescent Despair</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Therapist Chinwe Williams on what teenagers in crisis need most from their parents — and how presence, without panic, is the most therapeutic thing a parent can offer.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Seen Chinwe Williams on Adolescent Despair" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Kay Warren — After Matthew</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Kay Warren speaking about losing her son Matthew to suicide and what she wants parents of suicidal teenagers to know.</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Kay Warren After Matthew" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Suicide Prevention — Means Restriction and Safety Planning</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Evidence-based suicide prevention for families — including how means restriction, safety planning, and therapeutic engagement save lives.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Suicide Prevention Means Restriction and Safety Planning" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Hope in the Darkness — Psalm 23 and Crisis</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A theological reflection on Psalm 23 as a text for families in the darkest valley — where God's presence is promised even when his goodness is not visible.</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Hope in the Darkness Psalm 23 and Crisis" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
