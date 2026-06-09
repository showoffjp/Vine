"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#3a7d56";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Paul's Thorn and the Theology of Unanswered Prayer",
    body: "\"Three times I pleaded with the Lord about this, that it should leave me. But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness'\" (2 Corinthians 12:8-9). Paul's thorn—widely thought to be a physical condition—was not removed despite earnest prayer. God did not explain why. He simply promised that grace would be enough. For the Christian in chronic pain, this passage is foundational: healing is not always the miracle. Endurance held by grace is also a miracle.",
  },
  {
    title: "Job and the Lies We Are Told About Suffering",
    body: "Job's friends represent the theology that suffering equals sin—that pain is punishment from God for moral failure. God rebukes this view directly: \"You have not spoken of me what is right, as my servant Job has\" (Job 42:7). The book of Job exists specifically to dismantle prosperity theology and shame-based frameworks around illness and disability. Your pain is not God's punishment. Your disability is not the consequence of insufficient faith. God himself says so.",
  },
  {
    title: "The Man Born Blind: Rejecting the Blame Framework",
    body: "When disciples asked Jesus about a man born blind, \"who sinned, this man or his parents?\" Jesus answered: \"It was not that this man sinned, or his parents, but that the works of God might be displayed in him\" (John 9:3). Jesus flatly refused the sin-equals-suffering equation. He then healed the man—but the theological point stands independent of the miracle: disability is not a sign of God's disfavor, and the person living with it is not spiritually deficient.",
  },
  {
    title: "Resurrection Bodies and the Future of Pain",
    body: "The Christian hope is not escape from embodiment but the redemption of bodies. \"He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore\" (Revelation 21:4). The New Creation is a bodily resurrection—Jesus himself rose in a physical (though transformed) body that still bore wounds (John 20:27). Your pain is not permanent. It is temporary. And God is not indifferent to it—he will personally wipe every tear.",
  },
  {
    title: "Lament as Faithful Protest",
    body: "\"My God, my God, why have you forsaken me?\" (Psalm 22:1)—words Jesus quoted from the cross. The Psalms contain more lament than praise, giving explicit biblical permission to cry out in pain, to demand an answer, to accuse God of abandonment while still calling him God. This is not lack of faith. This is the most honest faith—prayer that tells the truth about how this feels while still clinging to the One who promised to come through. Bring your pain to God raw. He can handle it.",
  },
];

const voices = [
  {
    name: "Joni Eareckson Tada",
    role: "Founder of Joni and Friends, quadriplegic since age 17",
    quote: "I would rather be in this wheelchair knowing God than on my feet without him. That is not bravado — it is the fruit of decades learning that his grace truly is sufficient. But I had to learn it, and the learning was hard.",
  },
  {
    name: "Kate Bowler",
    role: "Professor of American Christianity at Duke, stage IV colon cancer survivor",
    quote: "The prosperity gospel lied to us. It promised that faith would protect us from suffering. But suffering is not a spiritual failure — it is the most human thing there is. And God is not absent from it. He is present in it, in ways we could not see from the outside.",
  },
  {
    name: "Dr. John Swinton",
    role: "Practical theologian, author of Raging with Compassion",
    quote: "The book of Job teaches us that the most faithful response to suffering is not explanation but presence, lament, and resistance. God does not explain Job's suffering — he shows up. That is what we are called to offer one another.",
  },
  {
    name: "Amy Kenny",
    role: "Author of My Body Is Not a Prayer Request",
    quote: "Disabled people are not inspirational objects for the non-disabled to feel good about their own lives. We are image-bearers, full stop. The church needs to stop trying to fix us and start learning from us about embodiment, dependence, and grace.",
  },
];

const practices = [
  {
    title: "Separate Your Worth from Your Capacity",
    body: "Chronic pain and disability steal capacity — ability to work, move, care for others, participate in community. If your sense of worth is tied to what you can do, you will be crushed. Scripture grounds worth not in productivity but in being: you are made in God's image (Genesis 1:27), known before birth (Psalm 139), named (Isaiah 43:1). Practicing this truth daily — on low-symptom and high-symptom days alike — is one of the most important spiritual disciplines available to you.",
  },
  {
    title: "Find or Form a Community That Does Not Pity or Fix",
    body: "Many churches handle disability poorly — either with pity, with aggressive healing theology, or by simply not including disabled people in real community. Seek out spaces where you are a person, not a problem to solve. The Joni and Friends network, online communities of Christians with chronic illness, and disability-affirming churches exist. If you must educate your current community, do it from a position of dignity rather than shame.",
  },
  {
    title: "Practice the Psalms of Lament",
    body: "Read Psalms 6, 13, 22, 38, 88 aloud on hard days. Pray them as your own words. This is not wallowing — it is the ancient practice of bringing pain directly to God rather than suppressing it behind spiritual performance. Many Christians in chronic pain find that lament prayer is more spiritually nourishing than praise on hard days, because it is honest. God prefers honest prayer to performance.",
  },
  {
    title: "Pace Yourself Spiritually, Not Just Physically",
    body: "Energy-limiting conditions (fibromyalgia, ME/CFS, lupus, MS, and others) require pacing physically. The same principle applies spiritually. On crash days, a single verse and a 30-second prayer may be all you can offer. That is enough. God does not require high-energy spiritual performance. The widow's mite (Luke 21:1-4) was more than the Temple's annual budget, measured by what it cost her. Your faithful fragment offered from a depleted place may be your most costly gift.",
  },
  {
    title: "Reclaim the Communion Table",
    body: "The Eucharist is not for the well. Jesus said, \"It is not the healthy who need a doctor, but the sick\" (Matthew 9:12). The communion table was instituted at the Last Supper — in the shadow of betrayal, arrest, and death. If your church's communion practice is inaccessible to you physically, advocate for change. Receive it in whatever form you can. The table was made for suffering people. Do not let your condition keep you from it.",
  },
  {
    title: "Assemble a Medical-Spiritual Support Team",
    body: "Effective chronic illness management typically requires a team: primary care provider, relevant specialist, pain management, mental health support, and spiritual care. The spiritual piece (pastor, spiritual director, or Christian counselor) is not optional — it is essential. The grief, anger, and identity questions that come with chronic illness are not purely medical. You need someone who can hold both dimensions together. Ask your church if they have a pastoral care program or can refer you to one.",
  },
];

const scriptures = [
  { ref: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me." },
  { ref: "Psalm 22:24", text: "For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help." },
  { ref: "Romans 8:18", text: "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us." },
  { ref: "John 9:3", text: "Jesus answered, 'It was not that this man sinned, or his parents, but that the works of God might be displayed in him.'" },
  { ref: "Isaiah 53:3-4", text: "He was despised and rejected by men, a man of sorrows and acquainted with grief... Surely he has borne our griefs and carried our sorrows." },
  { ref: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away." },
];

const videos = [
  { videoId: "YRDHyb5MHLA", title: "Joni Eareckson Tada — Suffering and the Sovereignty of God" },
  { videoId: "a8N1Mx1f5yQ", title: "Kate Bowler — Everything Happens for a Reason (And Other Lies)" },
  { videoId: "R4xZ6nt9HnE", title: "Theology of the Body in Chronic Illness" },
  { videoId: "bV1VWKnPRoU", title: "When Healing Doesn't Come — Faith and Chronic Pain" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function ChronicPainDisabilityPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; painLevel: string; faithToday: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ painLevel: "", faithToday: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_chronicpaindisability_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.faithToday.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_chronicpaindisability_entries", JSON.stringify(next));
    setForm({ painLevel: "", faithToday: "", prayer: "" });
  }

  return (
    <>
      <Navbar />
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Chronic Pain & Disability
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            Your body is not a spiritual problem. For Christians living with chronic pain, illness, and disability — honest theology, grounded faith, and real community for the long road.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Need support now?</strong> Joni and Friends: <strong style={{ color: TEXT }}>1-818-707-5664</strong> &bull; National Chronic Pain Hotline: <strong style={{ color: TEXT }}>1-800-533-3231</strong> &bull; Crisis Line: <strong style={{ color: TEXT }}>988</strong>
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. Track your pain, faith, and prayer on the hard days.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Pain level today (describe, or use 1-10)</label>
                <input value={form.painLevel} onChange={e => setForm(f => ({ ...f, painLevel: e.target.value }))} placeholder="How is your body today?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.65rem 0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where is your faith today?</label>
                <textarea value={form.faithToday} onChange={e => setForm(f => ({ ...f, faithToday: e.target.value }))} rows={3} placeholder="Angry, trusting, numb, searching..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer or lament (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, today I feel..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.painLevel && <p style={{ color: TEXT, marginBottom: "0.5rem" }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Pain: </span>{e.painLevel}</p>}
                    {e.faithToday && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Faith: </span>{e.faithToday}</p>}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teachings and testimonies from Christians who understand suffering from the inside.</p>
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
