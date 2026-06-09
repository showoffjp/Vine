"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Fearfully and Wonderfully Made — Including This Brain",
    verse: "Psalm 139:14",
    text: "\"I praise you, for I am fearfully and wonderfully made.\" Schizophrenia is a severe brain disorder — one of the most disabling conditions known to medicine. It is not demonic possession, not a lack of faith, not a punishment, not the result of sin. It is a condition in which the brain's dopamine and glutamate systems are profoundly disrupted. The person with schizophrenia is made in the image of God and is fully God's beloved."
  },
  {
    title: "When the Mind Cannot Perceive Clearly",
    verse: "1 Corinthians 13:12",
    text: "\"For now we see in a mirror dimly, but then face to face. Now I know in part; then I shall know fully, even as I have been fully known.\" In this age, all human knowing is partial and distorted. The distortions of schizophrenia — hallucinations, delusions, disordered thought — are extreme forms of the epistemic limitation we all share. God's full knowing of the person with schizophrenia is not impaired by the illness. They are fully known."
  },
  {
    title: "God's Presence in Severe Illness",
    verse: "Psalm 139:8",
    text: "\"If I make my bed in Sheol, you are there!\" The Psalmist's most extreme metaphor for absence is Sheol — the realm of the dead, the place of deep darkness. And even there, God is present. The disorganized world of severe psychosis, where reality itself is fractured, is not a place beyond God's presence. Wherever the person with schizophrenia is — even in the hospital, even in the worst episode — God is there."
  },
  {
    title: "The Church's Call to the Vulnerable",
    verse: "James 1:27",
    text: "\"Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction.\" The most vulnerable, the most stigmatized, the most excluded — these are the specific object of biblical social care. Those with severe mental illness are among the most excluded from both church and society. The church that ignores them has misread James. The church that includes them is practicing authentic religion."
  },
  {
    title: "The Resurrection of the Body",
    verse: "1 Corinthians 15:42-43",
    text: "\"So is it with the resurrection of the dead. What is sown is perishable; what is raised is imperishable. It is sown in dishonor; it is raised in glory. It is sown in weakness; it is raised in power.\" The Christian hope for those with schizophrenia — and their families — is not spiritual escape from the body but the resurrection of the body: whole, imperishable, glorified. The fractured mind will be restored. The illness does not have the last word."
  }
];

const voices = [
  {
    id: "v1", name: "Elyn Saks", role: "Legal Scholar, Author of 'The Center Cannot Hold'; Lives With Schizophrenia",
    quote: "I have schizophrenia. I am not a schizophrenic. That distinction — between a disease I have and the totality of who I am — is everything.",
    bio: "Elyn Saks is a USC professor of law who has lived with severe schizophrenia and written about it with remarkable clarity. Her memoir 'The Center Cannot Hold' is the most important first-person account of schizophrenia from within a high-functioning life — demonstrating that recovery and meaningful living are possible."
  },
  {
    id: "v2", name: "Matthew Stanford", role: "Neuroscientist, CEO of Hope and Healing Center",
    quote: "The church is often the first place a family turns when psychosis begins, and the church is often the least equipped to help. We must change that.",
    bio: "Dr. Matthew Stanford's research on how religious communities respond to severe mental illness is sobering. His book 'Grace for the Afflicted' and his work at the Hope and Healing Center are direct efforts to equip the church to respond to schizophrenia and other severe conditions with both compassion and appropriate referral."
  },
  {
    id: "v3", name: "Amy Simpson", role: "Author, 'Troubled Minds'",
    quote: "My mother had schizophrenia. The church told us to pray more. Eventually, we stopped going to church. The church lost a whole family because it could not hold a single person with mental illness.",
    bio: "Amy Simpson's book 'Troubled Minds' is a first-hand account of what it is like to grow up in a family with a severely mentally ill parent — and how the church's failure to respond drove her family away. It is essential reading for pastors and church leaders."
  },
  {
    id: "v4", name: "Nanci Huyser", role: "NAMI Family Advocate",
    quote: "Families of those with schizophrenia carry an invisible weight. They are caregivers, case managers, advocates, and grievers — often all at once. They need the church's support as much as the person with the illness.",
    bio: "NAMI (National Alliance on Mental Illness) Family-to-Family programs provide peer education for family members of people with serious mental illness. NAMI's family advocates are often the most practically helpful resource for families navigating schizophrenia diagnosis and care."
  }
];

const practices = [
  {
    icon: "🏥",
    title: "Psychiatric Care Is Non-Negotiable",
    text: "Schizophrenia requires antipsychotic medication managed by a psychiatrist. This is not optional. Untreated schizophrenia is a medical emergency. If you or a family member is experiencing psychosis — hearing voices, seeing things others don't see, severely disorganized thinking — seek emergency psychiatric care immediately."
  },
  {
    icon: "🏠",
    title: "Stable Housing as a Foundation",
    text: "People with schizophrenia require stable, supportive housing. Many state and county programs offer supported housing for those with severe mental illness. NAMI (nami.org) and your local community mental health center can connect families with housing resources and case management."
  },
  {
    icon: "👨‍👩‍👦",
    title: "Family Education — NAMI Family-to-Family",
    text: "NAMI offers a free, 8-week educational program for family members of those with serious mental illness. It teaches you what schizophrenia is, how to communicate with your loved one during episodes, how to crisis-plan, and how to care for yourself. This program is one of the most practically helpful resources available."
  },
  {
    icon: "✝️",
    title: "Find a Theologically Informed Psychiatrist",
    text: "Some psychiatrists are Christians who can integrate faith sensitivity into treatment. Organizations like the Christian Medical and Dental Associations (cmda.org) can help you find Christian mental health professionals. Spiritual delusions are a feature of some schizophrenia presentations and require careful clinical management."
  },
  {
    icon: "🫂",
    title: "Church Accommodation and Inclusion",
    text: "People with schizophrenia in stable periods can participate in church life with appropriate support. Talk to your pastor honestly about your loved one's diagnosis. Request specific accommodations — a familiar pew, a support person, grace for unusual behavior. Most churches want to help and simply do not know how."
  },
  {
    icon: "📿",
    title: "Caregiver Prayer and Rest",
    text: "Caregivers of those with schizophrenia are at very high risk for depression, burnout, and isolation. Your spiritual life requires protection. Your pastor should be praying for you by name. Your own therapy, your own sabbath, and your own community are not selfishness — they are survival."
  }
];

const scriptures = [
  { verse: "Psalm 139:8", text: "If I ascend to heaven, you are there! If I make my bed in Sheol, you are there!" },
  { verse: "Psalm 139:14", text: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well." },
  { verse: "James 1:27", text: "Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world." },
  { verse: "1 Corinthians 15:42-43", text: "So is it with the resurrection of the dead. What is sown is perishable; what is raised is imperishable. It is sown in dishonor; it is raised in glory. It is sown in weakness; it is raised in power." },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a faintly burning wick he will not quench; he will faithfully bring forth justice." },
  { verse: "Matthew 25:40", text: "And the King will answer them, 'Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.'" }
];

type SzEntry = { id: string; date: string; today: string; need: string; hold: string };

export default function SchizophreniaChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SzEntry[]>([]);
  const [today, setToday] = useState("");
  const [need, setNeed] = useState("");
  const [hold, setHold] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_schizophreniachristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!today.trim()) return;
    const entry: SzEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), today, need, hold };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_schizophreniachristj_entries", JSON.stringify(updated));
    setToday(""); setNeed(""); setHold("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_schizophreniachristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🧩</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>Schizophrenia &amp; Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those living with schizophrenia and for the families and churches that love them — holding the person&apos;s full humanity in view when the illness makes that hardest.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Crisis &amp; Support:</strong> 988 Lifeline (call/text 988) &bull; NAMI: nami.org or 1-800-950-6264 &bull; Community Mental Health: samhsa.gov/find-help &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
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
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
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
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Caregiver &amp; Family Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>Where is my loved one — or I — today?</label>
                  <textarea value={today} onChange={e => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What practical need is most pressing?</label>
                  <textarea value={need} onChange={e => setNeed(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I holding onto about God today?</label>
                  <textarea value={hold} onChange={e => setHold(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
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
                {e.need && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Need:</strong> {e.need}</p>}
                {e.hold && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}><strong>Holding:</strong> {e.hold}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Troubled Minds: The Church and Mental Illness</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Amy Simpson on what happens when the church can&apos;t hold its most vulnerable members</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Troubled Minds: The Church and Mental Illness" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Living With Schizophrenia</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>First-person accounts of life with schizophrenia — recovery, meaning, and possibility</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Living With Schizophrenia" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Grace for the Afflicted</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Matthew Stanford on the neuroscience of severe mental illness and the church&apos;s calling</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Grace for the Afflicted" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>NAMI Family-to-Family</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>What family members of people with schizophrenia need to know — and where to find help</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="NAMI Family-to-Family" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
