"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_caregiver_burnout_entries";
interface JournalEntry { id: string; date: string; text: string; }

export default function CaregiverBurnout() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");

  function saveEntry() {
    if (!draft.trim()) return;
    const next = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Caregiving</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Caregiver Burnout, Compassion Fatigue, and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>When caring for others has emptied you — the theology of the depleted caregiver and the God who replenishes.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline &nbsp;|&nbsp; Caregiver Action Network: caregiveraction.org &nbsp;|&nbsp; Eldercare Locator: <strong>1-800-677-1116</strong> &nbsp;|&nbsp; AARP Caregiving: aarp.org/caregiving
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Burnout Is Not Faithlessness</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Caregiver burnout is a state of physical, emotional, and spiritual exhaustion that results from the sustained demands of caring for someone else. It is characterized by depletion that sleep does not fully restore, detachment from the person being cared for, resentment and guilt about that detachment, loss of empathy, and progressive inability to function in other areas of life. Christian caregivers often interpret these signs as evidence that they are failing spiritually — not praying enough, not trusting enough, not loving sacrificially enough. But burnout is what happens to human beings who are finite trying to meet needs that are not. It is a physiological and psychological reality, not a spiritual diagnosis. Elijah collapsed under a juniper tree after his greatest ministry victory. God&apos;s response was not rebuke but bread, water, and sleep (1 Kings 19).</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Theology of Limits — You Were Made Finite</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Human beings are creatures — not God. The theological significance of creatureliness is that limits are not failures. God built rest into the structure of creation before there was any sin — the Sabbath exists because even the image of God in human form needs rest (Exodus 20:11). The caregiver who crashes is not demonstrating insufficient devotion. They are demonstrating the very finitude that God built into creation. A theology that requires you to transcend your creaturely limits to be a good caregiver has confused you with God. That confusion is dangerous for everyone — the caregiver and the person being cared for.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Compassion Fatigue — When Empathy Is Depleted</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Compassion fatigue is a specific form of secondary traumatic stress that results from sustained empathic engagement with suffering. It produces numbing, detachment, reduced empathy, cynicism, and intrusive thoughts. It is not a character flaw — it is what the human nervous system does when it has absorbed more suffering than it can process. Many Christian caregivers experience profound shame about compassion fatigue because they have lost the emotional warmth that motivated their caregiving. But numbness in the face of overwhelming suffering is protective, not sinful. Recovery requires processing, rest, community, and often professional support.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Receiving Care Is Part of the Body of Christ</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Many caregivers are deeply uncomfortable receiving care — they have organized their identity around giving, and being on the receiving end threatens their sense of purpose or worth. But the body of Christ is designed to flow both ways. Galatians 6:2 says to carry each other&apos;s burdens — not that some people carry and others provide. You are allowed to be carried. You are allowed to need. Moses could not hold up his arms alone; Aaron and Hur held them. The victory at Amalek required all three of them. Your caregiving requires the same structure — others holding you up so you can hold up the people in your care.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Sustainability Is Faithfulness</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The caregiver who burns out and collapses is not serving the person they care for. The caregiver who takes regular respite, seeks support, maintains their own health, and sets realistic limits is caring for the person in the most faithful long-term way possible. This is not selfishness — it is stewardship of the resources that make caregiving possible. A candle that burns at both ends lights the room brilliantly for a moment and then goes dark entirely. Sustainable care is the more faithful choice, even when it feels less sacrificial in the moment.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Henri Nouwen", title: "The Wounded Healer", quote: "The great challenge of the service professions and caregiving is to offer care without giving your whole self away. You cannot pour from an empty vessel. Replenishment is not selfishness — it is the discipline that makes love sustainable." },
              { name: "Charles Figley", title: "Compassion Fatigue: Coping with Secondary Traumatic Stress Disorder", quote: "Those who are highly empathic and highly committed to helping others are at highest risk. Compassion fatigue is the cost of caring for those in trauma. It is not a sign that you loved wrong — it is a sign that you loved fully." },
              { name: "Ann Voskamp", title: "One Thousand Gifts", quote: "The only way to give grace is to be full of grace yourself. You cannot transmit what you do not possess. The acts of receiving and resting are not detours from service — they are the preparation for it." },
              { name: "Eugene Peterson", title: "The Contemplative Pastor", quote: "The pastor who is always available to everyone is available to no one. The same is true of every caregiver. You must protect your interior life or you will have nothing left to give." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 12 }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ color: ACCENT, fontWeight: 600 }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{v.title}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Respite Care — Find It and Use It", body: "Respite is the most evidence-based intervention for caregiver burnout, and it is the most underused. Contact the Eldercare Locator (eldercare.acl.gov or 1-800-677-1116), your state&apos;s Medicaid waiver program, or the ARCH National Respite Network (archrespite.org) to find respite services in your area. Adult day programs, in-home respite care, and short-term residential respite are all options. You are not abandoning your loved one by using respite. You are investing in your long-term capacity to care for them." },
              { title: "Caregiver-Specific Support Groups", body: "Support groups for caregivers — not for the person with the illness, but specifically for the caregiver — provide peer connection from people who understand the specific demands of the role. NAMI Family Support Groups (nami.org), Caregiver Action Network (caregiveraction.org), and AARP Caregiving (aarp.org/caregiving) all maintain directories. Online support groups are available 24/7." },
              { title: "Therapy for Caregiver Grief and Secondary Trauma", body: "Compassion fatigue and caregiver secondary traumatic stress respond well to EMDR, somatic therapy, and trauma-focused CBT. A therapist who understands caregiver dynamics — not just general mental health — is most helpful. Open Path Collective (openpathcollective.org) for reduced-cost therapy." },
              { title: "Daily Replenishment Practices", body: "Small, consistent practices that replenish the nervous system have cumulative effect: a 10-minute walk outside daily, a weekly connection with a friend, a practice of prayer or contemplation even in brief form, regular meals and sleep. These are not luxuries — they are the infrastructure of sustainable caregiving. Identify one practice you can maintain consistently this week." },
              { title: "Sabbath — Weekly, Non-Negotiable", body: "Sabbath for caregivers may look different from a traditional day of rest when full withdrawal is not possible. But the principle of one day per week where you do something that replenishes rather than depletes — even for a few hours, even imperfectly — is protective. Work with your support network to make this possible." },
              { title: "Delegating and Accepting Help", body: "Caregivers often refuse help because delegating feels like giving up control, or because explaining what needs to be done is more effort than doing it. But accepting help is both practically necessary and spiritually appropriate. Make a concrete list of tasks that others could do — grocery shopping, driving, sitting with the care recipient for two hours — and ask specifically for those things." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "1 Kings 19:5–6", text: "Then he lay down under the bush and fell asleep. All at once an angel touched him and said, Get up and eat. He looked around, and there by his head was some bread baked over hot coals, and a jar of water. He ate and drank and then lay down again." },
              { ref: "Matthew 11:28–30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls." },
              { ref: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ." },
              { ref: "Exodus 18:17–18", text: "Moses' father-in-law replied, What you are doing is not good. You and these people who come to you will only wear yourselves out. The work is too heavy for you; you cannot handle it alone." },
              { ref: "Isaiah 40:29–31", text: "He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength." },
              { ref: "Mark 6:31", text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, Come with me by yourselves to a quiet place and get some rest." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8 }}>{s.ref}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, marginBottom: 12 }}>Private Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Stored only on this device. Not shared with anyone.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What do you need right now that you have not been able to ask for? What would it mean to be cared for today?"
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 15, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15 }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{e.text}</p>
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: 10, padding: "6px 14px", background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 6, cursor: "pointer", fontSize: 13 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="4Eg_di-O8nM" title="Elijah Under the Juniper Tree — God&apos;s Response to Burnout" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Caregiver Burnout — Why Sustainability Is Faithfulness" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="The Theology of Limits — You Were Made Finite" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Compassion Fatigue and the God Who Replenishes" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
