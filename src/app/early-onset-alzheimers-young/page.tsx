"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Image of God Cannot Be Erased by Dementia",
    verse: "Genesis 1:27",
    text: "You are made in the image of God. Not in your memory. Not in your ability to recognize faces or form sentences. The imago dei is not housed in the prefrontal cortex. It is not contingent on cognitive function. The person who no longer knows your name is still fully a person, fully made in the image of God, fully worthy of dignity, care, and love. Early-onset Alzheimer's attacks what a person can do; it cannot touch what a person is.",
  },
  {
    title: "Present Even in Absence",
    verse: "Psalm 22:1",
    text: "My God, my God, why have you forsaken me? The experience of God's absence is itself biblical. The person living with early-onset Alzheimer's who loses the capacity for explicit faith, for prayer, for recognition of spiritual language — is not abandoned by God. Jesus quoted Psalm 22 from the cross. God enters the experience of forsakenness from within. He does not withdraw when the mind does.",
  },
  {
    title: "The Long Goodbye and the Faithful Presence",
    verse: "Romans 8:38-39",
    text: "Neither death nor life, neither angels nor demons, neither the present nor the future... will be able to separate us from the love of God that is in Christ Jesus our Lord. Nothing in this list — and Paul's list is exhaustive — includes cognitive decline, disease progression, or the loss of self-recognition. The love of God is not mediated through memory. It holds even where memory cannot.",
  },
  {
    title: "The Caregiver's Grief Is Real and Ongoing",
    verse: "Lamentations 3:20",
    text: "I well remember them, and my soul is downcast within me. Caregivers of early-onset Alzheimer's patients grieve continuously — a kind of anticipatory grief that begins at diagnosis and continues with each new loss. This grief is not a failure of faith. It is love encountering loss. The Scriptures make room for it. God does not require you to pretend.",
  },
  {
    title: "The Body Will Be Redeemed",
    verse: "Philippians 3:21",
    text: "He will transform our lowly bodies so that they will be like his glorious body. Early-onset Alzheimer's is a disease of the body — specifically, the brain. Paul's promise of resurrection is bodily. The same God who raised Jesus bodily will raise the person who lost themselves to this disease — restored, whole, recognized, knowing and being known. That promise is not abstract. It is personal.",
  },
];

const voices = [
  {
    id: 1,
    name: "John Swinton",
    role: "Professor of Practical Theology, author Dementia: Living in the Memories of God",
    quote: "People with dementia are not losing their identity. They are losing certain forms of memory. Their identity remains held in the memory of God — and in the memory of those who love them.",
    bio: "John Swinton is a theologian who has written extensively on dementia, disability, and the nature of personhood — arguing that the church must learn to understand and care for people with dementia as full members of the body of Christ.",
  },
  {
    id: 2,
    name: "Joni Eareckson Tada",
    role: "Author, founder Joni and Friends",
    quote: "When the brain can no longer carry the soul's history, God holds it instead. Nothing is lost in him.",
    bio: "Joni Eareckson Tada writes about disability, suffering, and the promise of bodily resurrection in ways that speak directly to families navigating early-onset Alzheimer's.",
  },
  {
    id: 3,
    name: "Amy Plantinga Pauw",
    role: "Theologian, author Praying with Our Feet",
    quote: "The church's task with those who have dementia is not to restore what was lost but to accompany what remains.",
    bio: "Amy Plantinga Pauw's theological work on embodied faith and the spiritual life of those with cognitive impairment offers resources for understanding what faithful presence looks like in dementia care.",
  },
  {
    id: 4,
    name: "Greg O'Brien",
    role: "Author, On Pluto: Inside the Mind of Alzheimer's",
    quote: "I write so that others will know what it feels like from inside. Inside, I'm still here. That's the thing no one tells you.",
    bio: "Greg O'Brien was diagnosed with early-onset Alzheimer's at 59 and wrote about his experience from inside the disease — a crucial perspective for families, caregivers, and the church.",
  },
];

const practices = [
  {
    icon: "📝",
    title: "Create Advance Directives While You Can",
    text: "For the person diagnosed early: use the window of clarity to write advance directives, healthcare proxies, values statements, and letters to loved ones. These become invaluable later. The person you are now can speak for the person you will be.",
  },
  {
    icon: "🎵",
    title: "Use Music and Sensory Prayer",
    text: "Music is processed in different brain regions than verbal memory and often remains accessible long after speech and recognition decline. Familiar hymns, worship songs, and Scripture set to music can reach a person with Alzheimer's in ways that conversation cannot. This is a form of pastoral care.",
  },
  {
    icon: "👥",
    title: "Build a Caregiving Team Early",
    text: "Early-onset Alzheimer's is a family and community crisis, not just an individual one. Build a support network now — before the crisis stage. Assign specific roles to specific people. Create a regular respite rotation. The caregiver who burns out cannot continue to care.",
  },
  {
    icon: "🏥",
    title: "Seek a Geriatric Specialist and Dementia Care Team",
    text: "Early-onset Alzheimer's requires specialized medical management that most general practitioners are not equipped to provide. A geriatric psychiatrist, a neurologist with dementia specialty, an occupational therapist, and a social worker together constitute a minimum care team.",
  },
  {
    icon: "⛪",
    title: "Find a Church That Includes People with Dementia",
    text: "Some congregations have adapted their worship and fellowship to remain genuinely welcoming to people with cognitive decline. If your church has not, that is worth advocating for — both for your family member and for the many others who are quietly disappearing from congregational life.",
  },
  {
    icon: "🕯️",
    title: "Practice the Sacrament of Presence",
    text: "When words no longer work, presence remains. Holding a hand. Singing together. Sitting in silence. Anointing with oil. These embodied acts of care speak when language cannot. The church has sacramental practices — touch, oil, bread, water — that transcend cognitive access.",
  },
];

const scriptures = [
  { verse: "Psalm 139:1-2", text: "You have searched me, Lord, and you know me. You know when I sit and when I rise; you perceive my thoughts from afar." },
  { verse: "Romans 8:38-39", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Isaiah 43:1", text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine." },
  { verse: "Philippians 3:21", text: "Who, by the power that enables him to bring everything under his control, will transform our lowly bodies so that they will be like his glorious body." },
  { verse: "2 Corinthians 4:16", text: "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

type EOAEntry = { id: string; date: string; observe: string; grief: string; prayer: string };

export default function EarlyOnsetAlzheimersYoungPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<EOAEntry[]>([]);
  const [observe, setObserve] = useState("");
  const [grief, setGrief] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_earlyonsetalzj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!observe.trim()) return;
    const e: EOAEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), observe, grief, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_earlyonsetalzj_entries", JSON.stringify(next));
    setObserve(""); setGrief(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_earlyonsetalzj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Early-Onset Alzheimer's & Young Dementia</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For those diagnosed in their forties, fifties, or early sixties — and for the families and caregivers who walk this long, grieving road with them — where dignity, theology, and practical care meet.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · Alzheimer's Association <strong>1-800-272-3900</strong> · <a href="https://www.alz.org" style={{ color: "#fca5a5" }}>alz.org</a> · <a href="https://www.joniandfriends.org" style={{ color: "#fca5a5" }}>joniandfriends.org</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
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
                <div style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
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
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
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
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What did you observe today?</label>
                <textarea value={observe} onChange={e => setObserve(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What you noticed — a moment of presence, a new loss, something beautiful..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What grief are you carrying?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Name what you are losing — the conversation, the recognition, the future you imagined..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="For endurance, for grace, for the one you are caring for..." />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. This record matters.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.observe && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Observed today</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.observe}</p></>}
                {e.grief && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Grief carried</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.grief}</p></>}
                {e.prayer && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Dementia and the Image of God — John Swinton</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>John Swinton on why the imago dei is not located in memory or cognition — and what this means for how we care for people with dementia.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Dementia and the Image of God John Swinton" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>On Pluto — Greg O'Brien's View from Inside Alzheimer's</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Greg O'Brien describing his experience of early-onset Alzheimer's from the inside — a crucial perspective for those who love someone with the disease.</p>
              <VideoEmbed videoId="jJPVNIAFmvA" title="On Pluto Greg O'Brien's View from Inside Alzheimer's" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Caregiver Grief and the Long Goodbye</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On the anticipatory grief of caregivers and what the church can offer to those accompanying a loved one through cognitive decline.</p>
              <VideoEmbed videoId="oNpTha80yyE" title="Caregiver Grief and the Long Goodbye" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Resurrection and the Body</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A theological exploration of bodily resurrection and its specific implications for those whose bodies have been affected by neurological disease.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Resurrection and the Body" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
