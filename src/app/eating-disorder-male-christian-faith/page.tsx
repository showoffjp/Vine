"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_eating_disorder_male_entries";
interface JournalEntry { id: string; date: string; text: string; }

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(58,125,86,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function EatingDisorderMale() {
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
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Men&apos;s Health</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Eating Disorders in Men and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>Men get eating disorders too. The silence, the shame, and the path toward healing in a body God made and called good.</p>
        <div style={{ background: "#071a0e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#a0d4b3" }}>
          <strong style={{ color: ACCENT }}>Help Now:</strong> NEDA Helpline: <strong>1-800-931-2237</strong> &nbsp;|&nbsp; Crisis Text: text NEDA to <strong>741741</strong> &nbsp;|&nbsp; NEDA Chat: nationaleatingdisorders.org &nbsp;|&nbsp; 988 Lifeline
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Men Get Eating Disorders — And No One Tells Them</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>One in three people with an eating disorder is male, yet men are dramatically underdiagnosed and underserved because eating disorders are culturally coded as female. Male eating disorders often look different: rather than restriction aimed at thinness, they frequently involve muscle dysmorphia (obsessive focus on body mass and muscularity), compulsive over-exercise, or disordered eating framed as performance optimization or discipline. These presentations fly under the radar in Christian communities where the ascetic language of self-denial and discipline can inadvertently provide a theological cover story for pathological behavior. If your relationship with food and your body is causing you suffering, controlling your schedule, affecting your health, or becoming a source of secret shame — that is worth taking seriously, regardless of gender.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Body as Temple — Misread Both Directions</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>First Corinthians 6:19–20 (your body is a temple of the Holy Spirit) has been used both to condemn eating disorders as irreverence and to drive them — as if pursuit of a perfect body is a form of stewardship. Both misread the text. Paul&apos;s concern in that passage was sexual immorality, not body composition. His broader theology of the body is deeply positive: the body will be raised, the body is good, the Incarnation honors embodiment. A theology of embodiment that is actually grounded in Scripture does not demand a particular appearance or performance level. It values the body as the site of encounter with God and service to others — not as an object to be perfected or mortified into conformity with a cultural ideal.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Fasting, Discipline, and When Practice Becomes Disorder</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Christian tradition has a long relationship with fasting and bodily discipline. The Desert Fathers practiced severe asceticism. John Wesley regulated his eating. Contemporary Christians practice intermittent fasting. None of this is inherently problematic — but Christian tradition also recognized that these practices could become spiritually disordered, what the medieval teachers called vainglory or spiritual pride. When the practice becomes compulsive, secretive, anxiety-driven, physically harmful, or socially isolating — when it is no longer freely chosen but compelled — it has become something different. The question is not whether you fast but whether you are free to stop.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Control, Anxiety, and the God Who Provides</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Eating disorders are often fundamentally about control — the body becomes the one thing that feels manageable when other areas of life feel chaotic, uncertain, or threatening. For men especially, control of the body can feel like the last domain of agency when career, relationships, or identity feel unstable. Jesus&apos;s teaching on anxiety in Matthew 6 addresses exactly this: the disciples are invited to release the anxious control-project and trust the Father who feeds even the birds of the air. This is not a dismissal of the anxiety — it is an invitation to reorient from a control strategy that harms toward a trust that is possible. Recovery from an eating disorder is often also a recovery of trust.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Asking for Help Is Not Weakness — It Is the Only Way Through</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Male socialization discourages help-seeking, and Christian culture can compound this with theologies of stoicism and self-sufficiency. But asking for help with an eating disorder is not weakness — it is the only way the condition actually changes. Eating disorders have the highest mortality rate of any mental health condition. They do not resolve on their own. The people who recover do so with professional support. Moses needed Aaron and Hur. Paul had a network of co-workers. The lone-wolf Christian hero is a Western cultural construct, not a biblical model. You are allowed to need help. You are allowed to receive it.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Brian Cuban", title: "Shattered Image: My Triumph over Body Dysmorphic Disorder", quote: "I spent years convinced my body was defective and that fixing it would fix everything else. Recovery began when I understood that the problem was never my body." },
              { name: "Jenni Schaefer", title: "Life Without Ed", quote: "The eating disorder is a voice, a relationship, a coping mechanism. Recovery is not about eating more — it is about building a life where you don't need it anymore." },
              { name: "Nadia Bolz-Weber", title: "Shameless", quote: "God did not make a mistake when God made your body. Whatever the culture says, whatever the mirror says, whatever the voice says — it is wrong. The body you have is the body God made." },
              { name: "Thomas Merton", title: "New Seeds of Contemplation", quote: "The biggest human temptation is to settle for too little — to accept the false self that is built on approval, performance, and the exhausting project of looking right. The true self is already loved." },
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
              { title: "NEDA Helpline (nationaleatingdisorders.org)", body: "1-800-931-2237 or text NEDA to 741741. NEDA is the leading organization for eating disorder information and referrals. Their website has a treatment finder, information specifically for men, and chat support. Their helpline staff are trained to understand male-specific presentations and can help identify appropriate local treatment." },
              { title: "Eating Disorder Treatment — Level of Care Matters", body: "Eating disorders require specialized treatment, not just willpower or accountability. Treatment ranges from outpatient therapy (therapist and dietitian) to intensive outpatient programs (IOP), partial hospitalization programs (PHP), and residential care. The level of care needed depends on medical stability and severity. Your primary care physician can assess whether there is medical urgency and refer appropriately." },
              { title: "EMDR and Trauma-Informed Therapy", body: "Many eating disorders, especially in men, are rooted in trauma, anxiety, or OCD-spectrum processes. EMDR (Eye Movement Desensitization and Reprocessing) and CBT-E (Enhanced Cognitive Behavioral Therapy for Eating Disorders) have the best evidence for recovery. A therapist specializing in eating disorders is different from a general therapist — look specifically for this specialization." },
              { title: "Registered Dietitian — Not a Diet", body: "Recovery from an eating disorder requires working with a registered dietitian who specializes in eating disorders (not weight loss or sports performance). This person helps rebuild a normal relationship with food — not restrict it further. The dietitian works in coordination with your therapist and physician." },
              { title: "Male-Specific Support Groups", body: "Men&apos;s eating disorder support groups specifically address the shame and isolation that comes from having a condition culturally coded as female. The Alliance for Eating Disorders Awareness (allianceforeatingdisorders.com) has support groups and clinician directories. NEDA also maintains a list of specialized programs." },
              { title: "Exercise and the Role of Your Body in Recovery", body: "For men with exercise-driven eating disorders, addressing the compulsive exercise is as important as addressing food. This often requires temporarily reducing exercise as part of medical stabilization and recovery — which can feel catastrophic. A sports medicine physician familiar with eating disorders, in coordination with your treatment team, can help navigate this in a way that honors your relationship with physical activity while supporting genuine recovery." },
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
              { ref: "Genesis 1:31", text: "God saw all that he had made, and it was very good. And there was evening, and there was morning — the sixth day." },
              { ref: "Matthew 6:25–26", text: "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes? Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them." },
              { ref: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
              { ref: "1 Corinthians 6:19–20", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price." },
              { ref: "Romans 12:1", text: "Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God — this is your true and proper worship." },
              { ref: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
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
                placeholder="What does your body mean to you? What role does food or exercise play in how you feel about yourself?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="The Body God Made — Theology of Embodiment for Men" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Eating Disorders in Men — Breaking the Silence" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Control, Anxiety, and Trusting God with Your Body" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Recovery Is Possible — A Faith Perspective on Healing" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
