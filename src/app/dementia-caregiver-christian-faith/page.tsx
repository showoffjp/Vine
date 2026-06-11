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

const JOURNAL_KEY = "vine_dementia_caregiver_entries";
interface JournalEntry { id: string; date: string; text: string; }

export default function DementiaCaregiver() {
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
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Dementia Caregiving and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>Caring for someone whose mind is slipping away — the grief no one names, the love that keeps showing up.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> Alzheimer&apos;s Association Helpline: <strong>1-800-272-3900</strong> (24/7) &nbsp;|&nbsp; 988 Lifeline (caregiver crisis) &nbsp;|&nbsp; AARP Caregiver Hotline: <strong>877-333-5885</strong>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Grief That Has No Funeral</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Dementia caregivers grieve in slow motion. You lose your loved one — their recognition of your face, their voice's old warmth, the person they were — while they are still physically present. Clinicians call it ambiguous loss. There is no ceremony, no permission to mourn, and little social acknowledgment that anything has died. Christian communities often struggle here because the person is still alive, so the grief feels illegitimate. But Scripture does not require a death certificate to validate sorrow. Jesus wept at Lazarus&apos;s tomb even though he knew resurrection was coming. The tears were real, not premature. You can grieve what has been lost while continuing to love the person still present.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Imago Dei Beyond Cognition</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The image of God in a person is not housed in their memory, their productivity, or their ability to recognize you. Christian theology has always insisted that personhood is not earned or maintained by cognitive function. Your person, in the late stages of dementia, is still fully a bearer of the divine image. They still have a soul. The tenderness they may show to music, to touch, to prayer — even when they cannot name you — is a form of presence that transcends cognition. John Swinton&apos;s theological work on dementia argues that God remembers the person even when the person cannot remember themselves. You are not caring for a shell. You are loving an image-bearer.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>You Are Doing Exactly What Jesus Described</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>In Matthew 25, Jesus named the works of mercy: feeding the hungry, clothing the naked, caring for the sick. He said those who do these things do them to him. Every time you prepare a meal, change clothes, sit with someone who is frightened and confused, or simply hold their hand — you are ministering to Christ. Caregiving is not a detour from spiritual life. It is a form of encounter with the divine that most people never access. The exhaustion is real. The cost is real. And what you are doing is sacred.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Permission to Receive Help</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Many Christian caregivers feel that accepting respite care or professional assistance is a failure of love or a betrayal of vows. This is a theology of self-destruction, not faithfulness. The body of Christ is designed to bear one another&apos;s burdens (Galatians 6:2). Letting others help IS participation in the community of faith. Moses led Israel to victory at Amalek not by fighting alone but because Aaron and Hur held up his arms when he was too weak to lift them. You were not meant to carry this alone. Receiving help is an act of faith, not a surrender of love.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>When God Feels Absent in the Caregiving</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Many caregivers report that their prayer life collapses under the weight of caregiving. There is no silence for contemplation, no energy for church, no emotional reserves for spiritual practice. This is not spiritual failure — it is spiritual exhaustion, and it is different. The Psalms give language for seasons when God feels hidden (Psalm 13, Psalm 88). The mystics called it the dark night of the soul. Your faithfulness is demonstrated not in feeling close to God but in continuing to show up for another human being in their most vulnerable state. That ongoing act of love is itself a prayer.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "John Swinton", title: "Aberdeen University / Becoming Friends of Time", quote: "When we care for people with dementia, we enter into the mystery of their being. We discover that who they are is held in God's memory even when they can no longer hold it themselves." },
              { name: "Nancy Mairs", title: "Essayist and disability theologian", quote: "The spiritual task of those who care for people who can no longer care for themselves is the discovery that service without return is the purest form of love." },
              { name: "Henri Nouwen", title: "The Wounded Healer", quote: "The friend who can be silent with us in a moment of despair or confusion, who can stay with us in an hour of grief and bereavement, who can tolerate not knowing, not healing, not curing — that is a friend who cares." },
              { name: "Pauline Boss", title: "Ambiguous Loss: Learning to Live with Unresolved Grief", quote: "With ambiguous loss, there is no closure. You learn to hold two contradictory truths: the person is here and the person is gone. Both are real. Grief and love exist simultaneously." },
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
              { title: "Alzheimer's Association (alz.org)", body: "The largest resource hub for dementia caregivers. 24/7 helpline (1-800-272-3900), local support groups in virtually every region, care consultations, and education programs. Their website includes stage-by-stage guidance, legal planning resources, and respite care locators." },
              { title: "Respite Care — Take It", body: "Caregiver burnout is one of the most dangerous outcomes in dementia caregiving. Contact your local Area Agency on Aging (eldercare.acl.gov or call 1-800-677-1116) to find adult day programs, in-home respite services, and short-term residential care. Accepting respite is not abandonment — it is sustainability." },
              { title: "Memory Care Worship Practices", body: "People with dementia often retain emotional and spiritual memory after cognitive memory fails. Familiar hymns, the Lord's Prayer, the 23rd Psalm — these can reach through the fog. Sitting together quietly, holding hands in prayer, attending a worship service even briefly — these forms of spiritual presence remain meaningful." },
              { title: "Caregiver Support Groups", body: "Isolation is a primary danger for caregivers. Many hospitals, hospices, faith communities, and Alzheimer's Association chapters offer in-person and online support groups specifically for dementia caregivers. Sharing with others who understand the particular grief of this journey is irreplaceable." },
              { title: "Legal and Financial Planning", body: "If your loved one still has legal capacity, now is the time to ensure power of attorney documents, healthcare proxies, and advance directives are in place. Your local Area Agency on Aging can connect you to legal aid, and alz.org has extensive guidance on planning ahead." },
              { title: "Care for the Caregiver's Body", body: "Caregivers have higher rates of depression, heart disease, and compromised immune function. Your health is not a luxury — it is the infrastructure that makes caregiving possible. Regular sleep, meals, and medical care for yourself are acts of stewardship, not selfishness." },
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
              { ref: "Matthew 25:40", text: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me." },
              { ref: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ." },
              { ref: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
              { ref: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
              { ref: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness." },
              { ref: "Romans 8:38–39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
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
                placeholder="Write honestly here. Your exhaustion, your grief, your love, your questions..."
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="God's Presence in the Hardest Caregiving Seasons" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="When Someone You Love Has Dementia — Faith Perspective" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Caring for Aging Parents — The Spiritual Cost and Reward" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Grief, Loss, and the God Who Carries Us" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
