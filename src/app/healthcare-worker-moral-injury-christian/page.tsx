"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Bearing Witness to Suffering as Sacred Work",
    body: "Healthcare workers — nurses, physicians, social workers, paramedics, hospice workers, counselors — spend their professional lives at the threshold of human suffering. This is not incidental to their calling; it is the heart of it. The biblical tradition of healing is inseparable from presence with the suffering: Jesus touched the leper (Mark 1:41), approached the bleeding woman (Luke 8:43-48), wept with Mary before raising Lazarus (John 11:35). The healthcare worker's work participates in something deeply theological — accompanying people through pain, loss, and mortality.",
  },
  {
    title: "Moral Injury: When the System Prevents What Healing Requires",
    body: "Moral injury in healthcare is the damage done when a worker is prevented by systemic constraints — staffing ratios, insurance denials, administrative requirements, institutional policies — from providing the care they know their patient needs. The nurse who cannot stay with a dying patient because of the load. The physician who is required to discharge a patient too soon. The social worker who cannot provide resources that don't exist. These situations wound the soul differently than ordinary stress — they leave the worker carrying guilt, shame, and helplessness that is not their fault.",
  },
  {
    title: "The Good Samaritan and Systemic Injustice",
    body: "The Good Samaritan (Luke 10:30-37) provided comprehensive care for a stranger — binding wounds, transporting him, providing for his recovery. Jesus holds this up as the model of neighbor love. But the healthcare worker confronting systemic injustice notices that the Samaritan acted as a private individual with full freedom to care. When systems prevent healthcare workers from being the Samaritan they are called to be — when the constraints of the hospital, the insurer, the staffing agency override their clinical judgment — that is institutional violence against both patient and provider.",
  },
  {
    title: "The Limits of Finite Care and the Infinite God",
    body: "Healthcare workers face a theological challenge unique to their profession: they work constantly at the limits of what medicine can do. Patients die despite their best efforts. Systems fail despite their advocacy. Resources are unavailable despite the need. The Christian healthcare worker must hold a theology of finitude — that they are not God, that their limitations are real, that outcomes are not fully in their control — alongside the call to love with all their capacity. \"I planted, Apollos watered, but God gave the growth\" (1 Corinthians 3:6) gives language for faithful effort with outcomes held in God's hands.",
  },
  {
    title: "The Cross and the Weight of Witnessed Suffering",
    body: "\"Surely he has borne our griefs and carried our sorrows\" (Isaiah 53:4). The cross is not only about propitiation — it is God's own entry into the full weight of human suffering: pain, humiliation, abandonment, death. Healthcare workers who carry the weight of what they have witnessed — the deaths, the suffering, the injustices they could not prevent — are not carrying something God cannot receive. The One who bore the world's suffering can receive the secondary trauma, the compassion fatigue, and the moral injury of the healer. Bring it to the cross.",
  },
];

const voices = [
  {
    name: "Dr. Wendy Dean",
    role: "Co-author of If I Betray These Words: Moral Injury in Medicine and Why It's So Hard to Get Better",
    quote: "Moral injury is not burnout. Burnout is exhaustion from chronic stress. Moral injury is the damage to conscience that occurs when we are prevented from doing what we know is right. Healthcare workers carrying moral injury need more than self-care — they need systemic change and a community that can witness what they have carried.",
  },
  {
    name: "Dr. Jonathan Shay",
    role: "Military psychiatrist who first defined moral injury; the concept applies equally to civilian healthcare",
    quote: "Moral injury happens when someone in authority betrays what is right in a high-stakes situation. In healthcare, that authority is often the institution, the insurer, or the system itself. The individual caregiver is left holding the wound that the system created.",
  },
  {
    name: "Dr. Christina Puchalski",
    role: "Founder of the George Washington Institute for Spirituality and Health; pioneer of spiritual care in medicine",
    quote: "Healthcare workers have a spiritual life that is directly affected by their work. The suffering they witness, the injustices they absorb, the deaths they carry home — these are spiritual wounds as much as psychological ones. They need spiritual care as well as psychological support.",
  },
  {
    name: "Vivek Murthy",
    role: "US Surgeon General; authored the 2022 report on healthcare worker burnout and moral injury",
    quote: "Healthcare workers across the country are experiencing a crisis of moral injury — the damage done when the system prevents them from providing the care they entered medicine to give. Addressing this requires both individual support and systemic change. We cannot care for patients with a broken workforce.",
  },
];

const practices = [
  {
    title: "Name the Moral Injury Accurately",
    body: "Many healthcare workers describe what they are experiencing as burnout, exhaustion, or depression — all of which may be present. But if what you are carrying includes specific events where you were prevented from providing necessary care, where patients were harmed by systemic failures you could not prevent, or where institutional betrayal occurred — that is moral injury. Naming it accurately opens the door to appropriate support.",
  },
  {
    title: "Find Peer Community With Other Healthcare Workers",
    body: "The experience of healthcare moral injury is often best held with peers who share the professional context — other nurses, physicians, social workers — who understand the specific constraints and the specific grief without requiring explanation. Many hospitals now have peer support programs. Physician Support Line (physiciansupportline.com) offers free peer support for physicians. The American Nurses Association and NASW (social workers) both maintain mental health resources for their members.",
  },
  {
    title: "Seek Supervision or Consultation That Goes Beyond Case Management",
    body: "In many healthcare fields, supervision focuses on case management and clinical decisions rather than the emotional and moral impact of the work. Seek supervision or consultation that explicitly attends to the impact of the work on you — not just what you should do next but how the work is affecting your soul. Chaplains within your institution, if present, often offer exactly this kind of care.",
  },
  {
    title: "Engage in Moral Action — Not Just Personal Recovery",
    body: "Research on moral injury suggests that recovery is not complete without moral action — some form of advocacy, witness, or change that addresses the injustice that caused the injury. For healthcare workers, this might mean advocating for better staffing, speaking up in institutional ethics conversations, joining professional advocacy organizations, or telling their story in ways that create accountability. Personal recovery and systemic advocacy are not in competition — they are mutually reinforcing.",
  },
  {
    title: "Practice Rituals of Transition",
    body: "Many healthcare workers carry their work home because they have no ritual of transition between the world of the hospital and the world of home. Build one: a specific route home, a prayer or intention set in the car, a change of clothes, a period of silence before engaging family. This is not about leaving the work behind — it is about creating a threshold that allows you to be present where you are. For the Christian, this transition can include a brief prayer: Lord, I bring what I have carried today to you. I am going home.",
  },
  {
    title: "Reconnect with Why You Entered This Work",
    body: "Moral injury can sever the connection between a healthcare worker and their original calling — the reason they entered medicine, nursing, social work, or counseling in the first place. Deliberately reconnecting with that original call — writing about it, talking about it with a trusted colleague, or finding ways to express it even within a broken system — can restore a thread of meaning that sustains continued work.",
  },
];

const scriptures = [
  { ref: "Isaiah 53:4", text: "Surely he has borne our griefs and carried our sorrows; yet we esteemed him stricken, smitten by God, and afflicted." },
  { ref: "1 Corinthians 3:6-7", text: "I planted, Apollos watered, but God gave the growth. So neither he who plants nor he who waters is anything, but only God who gives the growth." },
  { ref: "Micah 6:8", text: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?" },
  { ref: "Psalm 82:3-4", text: "Give justice to the weak and the fatherless; maintain the right of the afflicted and the destitute. Rescue the weak and the needy; deliver them from the hand of the wicked." },
  { ref: "Matthew 25:36", text: "I was sick and you visited me, I was in prison and you came to me." },
  { ref: "2 Corinthians 4:8-9", text: "We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed." },
];

const videos = [
  { videoId: "bk-n7LrIJAU", title: "Wendy Dean — Moral Injury in Healthcare" },
  { videoId: "lRbSbRJpDG8", title: "The Hidden Wound of Healthcare Workers — Faith and Moral Injury" },
  { videoId: "JTx1CfHh0dc", title: "Compassion Fatigue vs Moral Injury — What's the Difference?" },
  { videoId: "E3FbIWrU-sQ", title: "Spiritual Care for Healthcare Workers — A Chaplain's Perspective" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function HealthcareWorkerMoralInjuryPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; carry: string; faith: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ carry: "", faith: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_healthcareworkermoralinjury_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.carry.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_healthcareworkermoralinjury_entries", JSON.stringify(next));
    setForm({ carry: "", faith: "", prayer: "" });
  }

  return (
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Healthcare Worker Moral Injury
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            The system prevented you from providing the care you knew was needed. For Christian healthcare workers carrying the wounds of moral injury — honest theology and real support for the healer who needs healing.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Support for healthcare workers:</strong> Physician Support Line: <strong style={{ color: TEXT }}>1-888-409-0141</strong> &bull; National Provider Support Line: <strong style={{ color: TEXT }}>1-800-628-0917</strong> &bull; Crisis: <strong style={{ color: TEXT }}>988</strong>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", color: tab === i ? ACCENT : MUTED, borderBottom: tab === i ? `2px solid ${ACCENT}` : "2px solid transparent", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem", whiteSpace: "nowrap" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Biblical & Theological Foundations</h2>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.25rem", background: "none", border: "none", color: TEXT, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 600 }}>
                  {item.title}
                  <span style={{ color: ACCENT, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div style={{ padding: "0 1.25rem 1.25rem", color: MUTED, lineHeight: 1.8 }}>{item.body}</div>}
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Voices of Experience</h2>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "0.75rem" }}>
                  <div style={{ fontWeight: 700, color: ACCENT }}>{v.name}</div>
                  <div style={{ fontSize: "0.85rem", color: MUTED }}>{v.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Practical Guidance</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <h3 style={{ color: ACCENT, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Scripture for the Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 10px 10px 0", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontWeight: 700, color: ACCENT, marginBottom: "0.5rem", fontSize: "0.9rem", letterSpacing: "0.05em" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A private space for the healer who also needs care.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What are you carrying from work today?</label>
                <textarea value={form.carry} onChange={e => setForm(f => ({ ...f, carry: e.target.value }))} rows={3} placeholder="A patient, a situation, a systemic failure, a death..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where is your faith in your work today?</label>
                <textarea value={form.faith} onChange={e => setForm(f => ({ ...f, faith: e.target.value }))} rows={2} placeholder="Why I entered this work, whether I can still do it, what I still believe..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, I could not give what I know they needed today. I need..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.carry && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Carrying: </span>{e.carry}</p>}
                    {e.faith && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Faith: </span>{e.faith}</p>}
                    {e.prayer && <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}><span style={{ color: MUTED, fontStyle: "normal", fontSize: "0.8rem" }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 5 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Video Resources</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for Christian healthcare workers carrying moral injury.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {videos.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.75rem 1rem", fontSize: "0.9rem", color: MUTED }}>{v.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
