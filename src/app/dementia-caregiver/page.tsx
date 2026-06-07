"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Person Is Still There — and Still Made in God's Image", verse: "Genesis 1:27", text: "Dementia attacks cognition, memory, and personality — but it cannot destroy the Imago Dei. The person who no longer remembers your name is still made in the image of God. They are still known fully by God, still held in Christ, still precious. Your presence with them is not wasted even when they cannot respond in ways that feel meaningful to you." },
  { title: "The Psalms Teach Us to Grieve Living Loss", verse: "Psalm 88:9", text: "Caring for someone with dementia involves a unique kind of grief: grieving someone who is still alive. This is called ambiguous loss. There is no culturally recognized moment of grief; the person does not die while you are losing them piece by piece. The psalms of lament — which name loss without resolution — are the most fitting theological form for this experience." },
  { title: "Presence Is Ministry Even Without Words", verse: "John 11:35", text: "Jesus wept at Lazarus's tomb — not because He did not know what He was about to do, but because presence in grief is itself a form of love. When your loved one can no longer hold a coherent conversation, your presence is still an act of love. You are incarnating something of God's faithfulness — a love that stays even when the other cannot recognize it." },
  { title: "God Sustains Those Who Carry the Unseen", verse: "Isaiah 40:31", text: "Those who wait on the Lord will renew their strength. The caregiver of a dementia patient often lives with invisible exhaustion that others cannot see and do not understand. God sees the weight you carry. He does not call you to carry it in your own strength, and He does not require that you carry it without help." },
  { title: "You Cannot Give What You Have Not Received", verse: "Matthew 22:39", text: "Love your neighbor as yourself — not instead of yourself. The command implies a baseline of self-regard that makes neighbor-love possible. Dementia caregiving that neglects the caregiver's own mental, physical, and spiritual health eventually collapses. Receiving help, resting, and setting limits is not failure — it is how love is sustained over years." },
];

const voices = [
  { id: "je", name: "Joni Eareckson Tada", role: "Joni and Friends, Disability Ministry", quote: "The person your loved one was still exists in God's sight. Their identity in Christ is not diminished by what the disease has taken. You are caring for someone fully known and fully loved by God.", bio: "Tada and the Joni and Friends ministry have engaged deeply with disability, dementia, and the question of personhood and dignity. Their theological framework of persistent Imago Dei dignity has been transformative for caregivers wrestling with who their person still is." },
  { id: "kl", name: "Kenneth Kovacs", role: "Author, A Ministry Shaped by Dementia", quote: "Dementia is not just a disease of the mind. It is also a spiritual journey — for the person with dementia and for those who love them. And God is present in every stage of it.", bio: "Kovacs has written on pastoral care for those with dementia, arguing that spiritual presence does not depend on cognitive function. Many people with advanced dementia respond to music, prayer, touch, and familiar liturgy even when other communication is gone — suggesting deep neural pathways for embodied spiritual experience." },
  { id: "dl", name: "David Kessler", role: "Author, Finding Meaning", quote: "Grief in caregiving does not wait for death. You can — and should — grieve the losses as they happen. Do not let anyone tell you not to grieve because your person is still alive.", bio: "Kessler, who worked with Elisabeth Kubler-Ross and has expanded grief theory beyond the five stages, addresses the specific phenomenon of anticipatory grief and ambiguous loss. His work validates what dementia caregivers often feel but cannot name." },
];

const practices = [
  { icon: "🎵", title: "Use Music as Ministry", text: "Music memory is often preserved in dementia far longer than other memory systems. Familiar hymns, worship songs, and music from earlier in life can reach people at stages when verbal communication is impossible. Create playlists of meaningful music. Sing with them. Music often opens windows of presence that nothing else can." },
  { icon: "🤝", title: "Accept — and Ask For — Respite Care", text: "Caregiver burnout is the single greatest risk to the wellbeing of both caregiver and care recipient. Accept offers of help. Ask for respite. Use adult daycare programs, in-home aides, or short-term residential respite. The Alzheimer's Association (alz.org) provides free caregiver support and respite guidance. You cannot sustain a marathon pace indefinitely." },
  { icon: "📖", title: "Maintain Your Own Spiritual Life Separately", text: "Your spiritual health cannot be entirely dependent on shared prayer time or church attendance with your loved one. Build practices that sustain you individually: a brief morning examen, a prayer while driving, a podcast sermon during caregiving tasks. God is meeting you in the exhaustion — but you must create small openings to receive." },
  { icon: "💬", title: "Find a Caregiver Support Group", text: "The isolation of dementia caregiving is immense. Others who are in it understand in ways that friends and family cannot. The Alzheimer's Association (alz.org) has both in-person and online support groups. Many communities also have faith-specific caregiver support. Being understood without explanation is profoundly healing." },
];

const scriptures = [
  { verse: "Isaiah 40:31", text: "But those who wait on the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
  { verse: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help in trouble." },
  { verse: "2 Corinthians 4:16-17", text: "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day." },
  { verse: "Psalm 71:17-18", text: "Even when I am old and gray, do not forsake me, my God, till I declare your power to the next generation." },
  { verse: "Matthew 25:40", text: "The King will reply, Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me." },
  { verse: "Romans 8:38-39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God." },
];

const videos = [
  { id: "dc_1", title: "Caring for Someone With Dementia — Faith and Presence", channel: "Joni and Friends" },
  { id: "dc_2", title: "Music and Memory — Using Worship to Reach Those With Dementia", channel: "Alzheimer's Association" },
  { id: "dc_3", title: "The Caregiver's Grief — Mourning Someone Still Alive", channel: "David Kessler" },
  { id: "dc_4", title: "When to Accept Help — Dementia Caregiving and Self-Care", channel: "Focus on the Family" },
];

type DCEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function DementiaCaregiverPage() {
  const [tab, setTab] = useState("theology");
  const [dcJournal, setDcJournal] = useState<DCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_dementiacgj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_dementiacgj_entries", JSON.stringify(dcJournal)); } catch {}
  }, [dcJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setDcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setDcJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Caregiving and Loss</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Dementia Caregiving</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Theology, grief, and sustaining grace for those caring for loved ones with dementia</p>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: PURPLE }}>Caregiver Support Resources</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>Alzheimer's Association Helpline:</strong> 1-800-272-3900 — 24/7, free, multilingual<br />
            <strong>Alzheimer's Caregiver Support Groups:</strong> alz.org/help-support/community/support-groups<br />
            <strong>988 Crisis Lifeline:</strong> Call or text 988 — for caregiver crisis or emotional overwhelm
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Theology for the Long Road</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices for This Walk</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Sustaining Yourself for the Long Haul</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for the Caregiver</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Caregiver Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is the hardest part of today's caregiving?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Today the hardest thing was..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What have you seen of God's grace today, even in the difficulty?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="A small grace I noticed today..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What do you need today — from God or from another person?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="What I need is..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {dcJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. What you are doing is one of the hardest callings there is. Your words matter here.</p>}
            {dcJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>HARDEST TODAY</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>GRACE NOTICED</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT I NEED</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
