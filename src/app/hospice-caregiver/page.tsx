"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Accompanying the Dying Is Sacred Work", verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me. The Psalm David wrote about dying — the valley of the shadow — names God as present companion in the passage. Hospice caregivers walk into that valley with another person and remain there. This is one of the most profoundly Christlike acts of service available to human beings. It is not heroism; it is love made concrete in the hardest possible form." },
  { title: "Presence Is Enough — It Is Everything', verse: 'Romans 12:15", text: "Mourn with those who mourn. Paul's instruction is not 'fix those who mourn' or 'explain to those who mourn.' It is to mourn with them. Hospice caregivers often carry the anguish of not being able to do more. But co-presence — simply being there, without answers, without fixing, without filling the silence with words — is the most profound gift available. The ministry of presence is not a lesser form of care; it is the form of care that the dying most need." },
  { title: "Grief Accumulates Across Patients', verse: 'Lamentations 3:49-50", text: "My eyes will flow unceasingly, without relief, until the Lord looks down from heaven and sees. Healthcare workers, chaplains, and family hospice caregivers carry accumulating grief from repeated losses. Lamentations describes exactly this — eyes flowing unceasingly. The grief of hospice work does not reset between patients. It accumulates. Acknowledging this accumulation, rather than treating each loss as isolated, is part of sustainable caregiving." },
  { title: "Your Own Mortality Is Not the Enemy', verse: 'Psalm 90:12", text: "Teach us to number our days, that we may gain a heart of wisdom. Hospice caregivers are uniquely positioned to receive the wisdom that comes from sustained proximity to death. Moses's prayer — for the wisdom that comes from confronting mortality honestly — is exactly the wisdom that caregivers are being offered through their work. Those who care for the dying are often the people most awake to what actually matters." },
  { title: "God Is Already There at the Deathbed", verse: "Psalm 139:8", text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there. The caregiver at the bedside is not bringing God into the room. God is already there. The caregiver's presence is a representation of the God who is present in the depths — who does not leave when machines are removed and family must make the hardest decisions. You are not alone in that room, even when it feels that way." },
];

const voices = [
  { id: "v1", name: "BJ Miller, MD", role: "Palliative Care Physician", quote: "Death is not the enemy. Suffering is the enemy. And much of the suffering in dying is unnecessary — it is produced by our cultural inability to accept that dying is part of living.", bio: "Dr. BJ Miller is a palliative care physician and hospice advocate whose TED talk on what really matters at the end of life has reached millions. Having experienced significant physical loss himself (he lost three limbs in an accident), his perspective on dying, presence, and what counts as good care is both clinically expert and personally informed." },
  { id: "v2", name: "Atul Gawande, MD", role: "Surgeon, Author", quote: "The medical system treats dying as a problem to be solved rather than an experience to be accompanied. The hospice movement is the correction to that failure.", bio: "Atul Gawande is the author of Being Mortal, one of the most important books written on end-of-life care and the failures of modern medicine to accompany dying well. His clinical stories and institutional analysis have transformed how many Christians approach conversations about death, prognosis, advance directives, and what actually matters in the final season." },
  { id: "v3", name: "Joni Eareckson Tada", role: "Founder, Joni and Friends", quote: "The deathbed is not the edge of the abyss. It is the threshold. The dying are not going into the dark — they are going into the Light.", bio: "Joni Eareckson Tada has accompanied many people toward death — in disability ministry, in her own ongoing health crises, and in the community she has built through Joni and Friends. Her theology of death, suffering, and the resurrection hope is one of the most personally grounded available — speaking from someone who has spent decades close to physical limitation and mortality." },
  { id: "v4", name: "Kate Bowler", role: "Professor, Author", quote: "We need people who are willing to be present to the dying — not to fix them, not to have answers, just to be there. It turns out that is the hardest and most holy thing you can offer.", bio: "Kate Bowler was diagnosed with Stage IV cancer in her 30s and wrote Everything Happens for a Reason (And Other Lies I've Loved) about the experience of facing mortality young. Her work speaks with sharp clarity about what dying people actually need from the living — and what well-meaning caregivers and friends often get wrong." },
];

const practices = [
  { icon: "🤐", title: "Learn to Be Silent", text: "The hospice setting often calls for silence — not absence, but present, patient, non-anxious silence. Practice not filling the silence. Sit with the person without needing to speak. Ask how they are and wait for a real answer. Silence that is full of presence is a profound gift." },
  { icon: "🌊", title: "Process Your Own Grief Regularly", text: "Hospice caregivers — professional and family alike — must process grief rather than defer it indefinitely. A regular practice of acknowledgment — journaling, talking with a trusted person, meeting with a counselor or chaplain — prevents the accumulation that leads to burnout and traumatic grief." },
  { icon: "📋", title: "Help Families Have Advance Care Conversations", text: "One of the most practical gifts you can offer families is helping them have the hard conversations about goals of care, resuscitation preferences, and what the person themselves wants — before the crisis moment. The Conversation Project (theconversationproject.org) provides helpful guides." },
  { icon: "🤝", title: "Accept Help and Delegate", text: "Family caregivers in hospice settings often become isolated, taking everything on themselves out of love and guilt. Accepting help — from friends, from hospice volunteers, from professional respite services — is not abandonment. It is sustainability." },
  { icon: "⛪", title: "Connect the Dying Person with Chaplaincy or Pastoral Care", text: "If the person you are caring for has spiritual concerns — reconciliation, fear of death, questions about God — a hospice chaplain or pastor can provide specialized care that complements medical and family caregiving. You do not have to be the spiritual resource as well as everything else." },
  { icon: "🙏", title: "Pray Psalm 23 at the Bedside", text: "Even when you do not know if the person can hear, praying aloud Psalm 23 — the Psalm written for the valley of the shadow of death — is a theologically rich act of accompaniment. Many hospice workers report that hearing was the last sense to go; your prayer may be received even when you cannot know it." },
];

const scriptures = [
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn." },
  { verse: "Psalm 139:8", text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
  { verse: "2 Corinthians 1:3-4", text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God." },
  { verse: "Psalm 90:12", text: "Teach us to number our days, that we may gain a heart of wisdom." },
];

type HCEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function HospiceCaregiverPage() {
  const [tab, setTab] = useState("theology");
  const [hcJournal, setHcJournal] = useState<HCEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setHcJournal(JSON.parse(localStorage.getItem("vine_hospicecaregiverj_entries") ?? "[]")); } catch { setHcJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: HCEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...hcJournal];
    setHcJournal(updated);
    localStorage.setItem("vine_hospicecaregiverj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = hcJournal.filter(e => e.id !== id);
    setHcJournal(updated);
    localStorage.setItem("vine_hospicecaregiverj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕯️</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Hospice Caregiver</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>Walking through the valley with someone — sacred presence, accumulated grief, and the God who is already there.</p>
        <div style={{ background: "#0a1f14", border: `1px solid ${GREEN}`, borderRadius: 8, padding: "0.75rem 1.25rem", maxWidth: 480, margin: "0 auto", fontSize: "0.85rem", color: MUTED }}>
          <strong style={{ color: GREEN }}>Caregiver Support:</strong> Caregiver Action Network 1-855-227-3640 &nbsp;|&nbsp; NHPCO caringinfo.org &nbsp;|&nbsp; 988
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${GREEN}` }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What am I carrying from this caregiving season? What has accumulated?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What is God's presence in this valley — what have I sensed?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One way I will care for myself this week:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {hcJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}>Self-care: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "sJSFmO6gGlo", title: "Caregiver Burnout and Renewal", channel: "Joni and Friends", description: "Joni Tada on caregiver burnout — the specific depletion that comes from sustained care for the suffering — and what renewal and sustenance require." },
              { videoId: "ZGk1hl1nNrw", title: "Compassion Fatigue and the Body", channel: "Diane Langberg", description: "Diane Langberg on compassion fatigue — how sustained exposure to others' suffering accumulates in the caregiver's own body and soul, and what care for caregivers requires." },
              { videoId: "m2uDNE9kcSE", title: "Caring for the Caregiver", channel: "Focus on the Family", description: "A practical and spiritual resource for caregivers who need support — addressing the depletion, grief, and isolation that long-term caregiving often produces." },
              { videoId: "7KMPN9OLoNo", title: "Suffering and God's Grace", channel: "Joni Eareckson Tada", description: "Joni on the presence of God in the valley of suffering — and what those who accompany the suffering can know about God's proximity in the hardest places." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
