"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Birth Has Always Been a Place of Danger",
    body: "The Bible does not sentimentalize birth. Rachel died in childbirth (Genesis 35:16-19). Tamar's labor was complicated and dangerous (Genesis 38:27-30). The woman in Revelation 12 cries out in birth pangs. The midwives in Exodus 1 worked at the intersection of life and death. The incarnation itself — God entering the world through a human birth, in a stable, far from home — involved risk and difficulty. Birth trauma is not a modern aberration or a spiritual failure. It is as old as humanity.",
  },
  {
    title: "Trauma Changes the Brain — And That Is Not Unfaithfulness",
    body: "Traumatic childbirth experiences can cause PTSD: intrusive memories, avoidance of reminders, hypervigilance, numbness. The brain's trauma response is physiological — not a sign of inadequate faith, insufficient trust in God, or failure to be grateful for a healthy baby. \"I have a healthy baby, I should be grateful\" is one of the most common sentences birth trauma survivors say — and one of the most silencing. Gratitude and grief coexist. \"The Lord has given and the Lord has taken away\" (Job 1:21) holds both in a single breath.",
  },
  {
    title: "Lament as the Language of the Body's Memory",
    body: "Birth trauma often lives in the body as much as in the mind — intrusive physical memories, sensory triggers, physical fear responses that resist rational reassurance. The Psalms give language for the body's distress: \"My bones are in agony\" (Psalm 6:2 NIV); \"My heart pounds, my strength fails me; even the light has gone from my eyes\" (Psalm 38:10). Lament prayer that acknowledges the body's memory — not only cognitive distress but physical re-experiencing — is one of the most honest forms of prayer available to the birth trauma survivor.",
  },
  {
    title: "The Presence of God in the Place of Fear",
    body: "Isaiah 43:2 promises: \"When you pass through the waters, I will be with you.\" The Hebrew image is of deep, threatening waters — the chaos that precedes creation, the Red Sea before parting, the Jordan before entering. For many women, the delivery room was a place of genuine danger, confusion, helplessness, or terror. God was present in that room even when she could not feel him. The trauma survivor's task is not to retrospectively feel God's presence in the trauma, but to bring the trauma to the God who was already there.",
  },
  {
    title: "Justice and the Right to Be Angry",
    body: "Birth trauma often involves medical failures: poor communication, loss of autonomy, interventions without consent, dismissal of pain or fear. These are real injustices — instances where the care fell short of what was owed. Christian women are sometimes told to forgive quickly and move on. But naming injustice accurately — what went wrong, what should have been different — is not unforgiveness. It is the prerequisite for honest healing. God hates injustice, including medical injustice to laboring women.",
  },
];

const voices = [
  {
    name: "Dr. Rebecca Moore",
    role: "Perinatal mental health specialist; birth trauma researcher",
    quote: "Birth trauma is real, common, and undertreated. Approximately one in three women describes their birth as traumatic. Of these, many develop PTSD. The medical community and the church have been equally poor at naming this and providing support. Survivors deserve better.",
  },
  {
    name: "Ann Voskamp",
    role: "Author of One Thousand Gifts; has written about suffering in the body and the practice of gratitude",
    quote: "You can be grateful your baby is alive and traumatized by how they arrived. These are not contradictions. The body keeps the record of what happened, and it needs care — not hushing. Grieve what happened in that room. Bring it all to God.",
  },
  {
    name: "Simone Ravicz",
    role: "Author of Thriving After Trauma; recovery therapist",
    quote: "Women who survived traumatic births are often told to focus on the healthy outcome. But the healthy baby does not erase the mother's experience. Her fear, her pain, her loss of control — these are real and they deserve real care. The mother also survived something. That matters.",
  },
  {
    name: "The Birth Trauma Association",
    role: "UK-based charitable organization for birth trauma survivors",
    quote: "Birth trauma affects mothers, partners, and in some cases, babies. It can affect any birth — whether medically complicated or not. What makes a birth traumatic is not the clinical picture but the person's experience of fear, helplessness, and loss of control. Every survivor's experience is valid.",
  },
];

const practices = [
  {
    title: "Name What Happened as Traumatic",
    body: "Many birth trauma survivors are told — by medical staff, family, or themselves — that their experience \"wasn't that bad\" because the baby is healthy, because other women have it worse, because the medical interventions were necessary. Allow yourself to name your experience accurately: if you experienced fear, helplessness, loss of control, or believed you or your baby might die — that is a traumatic experience, regardless of the outcome. Accurate naming is the beginning of healing.",
  },
  {
    title: "Seek Perinatal Mental Health Support",
    body: "PTSD from birth trauma responds to treatment — specifically trauma therapies like EMDR, trauma-focused CBT, and narrative therapies. Find a therapist who specialize in perinatal mental health and trauma. Postpartum Support International (postpartum.net) has a provider directory. The Birth Trauma Association and Solace for Mothers are both peer support organizations specifically for birth trauma survivors.",
  },
  {
    title: "Request a Birth Debrief",
    body: "Many hospitals offer birth debrief sessions with a midwife, nurse, or doctor who will go through your notes with you and answer your questions about what happened and why. If you have unanswered questions about your care — why a decision was made, what happened in a specific moment — requesting a debrief can be part of processing the trauma. You have the right to understand your own medical record.",
  },
  {
    title: "Protect Your Relationship with Your Baby",
    body: "Birth trauma can interfere with bonding. You may feel disconnected from your baby, hypervigilant about their safety, or unable to experience the joy you expected. This is the trauma, not a permanent relational reality. With treatment, bonding typically develops. If you are concerned about your relationship with your baby or your own mental state, please tell your healthcare provider. You and your baby both deserve support.",
  },
  {
    title: "Consider Your Next Pregnancy Carefully",
    body: "For women who experienced birth trauma and are considering future pregnancies, specific support is available. Many hospitals now have specialist midwives for women with previous traumatic births who can work with you on a birth plan that addresses your fears and needs. The anxiety of a subsequent pregnancy after birth trauma is common and treatable. Seeking support before pregnancy begins is wiser than waiting until the anxiety peaks.",
  },
  {
    title: "Tell Your Church What You Need",
    body: "The church often celebrates new babies without asking how the mother is doing. If you are in a church community and you experienced birth trauma, you may need to name your need directly: \"I am not okay. My birth was traumatic and I am struggling.\" Most communities want to help but will not know how without being told. You are allowed to need care as well as your baby.",
  },
];

const scriptures = [
  { ref: "Psalm 22:9-10", text: "Yet you are he who took me from the womb; you made me trust you at my mother's breasts. On you was I cast from my birth, and from my mother's womb you have been my God." },
  { ref: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you." },
  { ref: "Psalm 56:8", text: "You have kept count of my tossings; put my tears in your bottle. Are they not in your book?" },
  { ref: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit." },
  { ref: "Lamentations 3:22-23", text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
  { ref: "2 Corinthians 1:3-4", text: "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God." },
];

const videos = [
  { videoId: "wTq3IK5L_VQ", title: "Birth Trauma — What It Is and How to Heal" },
  { videoId: "mYVWc1h_J4Q", title: "PTSD After Childbirth — A Survivor's Story" },
  { videoId: "aqf9E4eSQnU", title: "Postpartum Support International — Birth Trauma Resources" },
  { videoId: "GCrSUZT1LPA", title: "Healing from Traumatic Birth — Faith and Recovery" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function BirthTraumaPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; body: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", body: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_birthtraumarecovery_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_birthtraumarecovery_entries", JSON.stringify(next));
    setForm({ today: "", body: "", prayer: "" });
  }

  return (
    <>
      <Navbar />
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Birth Trauma & Recovery
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            You survived something. For Christian women healing from traumatic childbirth — honest theology, real resources, and the truth that a healthy baby does not erase what happened to you.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>If you are struggling:</strong> PSI Helpline: <strong style={{ color: TEXT }}>1-800-944-4773</strong> &bull; Solace for Mothers: <strong style={{ color: TEXT }}>solaceformothers.org</strong> &bull; Crisis: <strong style={{ color: TEXT }}>988</strong>
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A private space to process what happened to you.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where are you in your recovery today?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="What is present today — memory, fear, grief, tentative peace..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>How is your body today?</label>
                <textarea value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))} rows={2} placeholder="Triggered, calmer, still reactive to certain things..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer or lament (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="God, my body remembers what happened and I need..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.today && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Today: </span>{e.today}</p>}
                    {e.body && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Body: </span>{e.body}</p>}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for women healing from traumatic birth.</p>
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
      <Footer />
    </>
  );
}
