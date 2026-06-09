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
    title: "The Male Body in Scripture: More Than a Tool",
    body: "Western Christianity has often treated the male body as an instrument — for work, for war, for providing. The body itself is a site of discipline and function, rarely beauty or tenderness. This framework makes it difficult for men to name their relationship with their body as a site of spiritual significance. But Paul writes: \"your body is a temple of the Holy Spirit\" (1 Corinthians 6:19-20) — not your soul, your productivity, your spiritual discipline. Your body. Male bodies matter to God not as tools but as dwelling places.",
  },
  {
    title: "Shame, Secrecy, and the Confession of Real Struggle",
    body: "Eating disorders in men carry compounded shame: the illness itself, and the shame of having \"a woman's disease.\" This shame drives extreme secrecy and delays treatment by years. James 5:16 — \"confess your sins to one another and pray for one another, that you may be healed\" — is a prescription specifically for bringing hidden things into the light. The secrecy that eating disorders require is the opposite of the community that healing requires. The first act of recovery is often the first honest conversation.",
  },
  {
    title: "Control, Perfectionism, and the Illusion of Sufficient Righteousness",
    body: "Many men develop eating disorders connected to control — the disordered belief that if they can manage their body completely, they can manage their fear, their inadequacy, their anxiety about worthiness. This is the same lie that drives religious perfectionism: the belief that sufficient performance earns safety. The gospel interrupts this: \"By grace you have been saved through faith. And this is not your own doing; it is the gift of God\" (Ephesians 2:8). Grace names perfectionism as a misunderstanding of how relationship with God works.",
  },
  {
    title: "Masculinity and the Permission to Be Fragile",
    body: "Cultural Christian masculinity often codes vulnerability as weakness and struggle as spiritual failure. But the biblical vision of manhood includes Elijah weeping under a broom tree (1 Kings 19:4), David weeping openly at Absalom's death (2 Samuel 18:33), Peter weeping bitterly after his betrayal (Matthew 26:75), and Jesus weeping at Lazarus's tomb (John 11:35). Biblical men weep. They break. They need care. Eating disorders in men are not a failure of masculinity — they are a human condition reaching for help in the language of the body.",
  },
  {
    title: "The Resurrection Body and the End of Body Shame",
    body: "The Christian hope is not escape from the body but resurrection of the body. Jesus rose in a physical body — the disciples touched him, he ate with them, he bore the marks of crucifixion. The resurrection dignifies embodiment; it does not end it. This matters for men with eating disorders because recovery is not about escaping the body but about learning to inhabit it differently — with care rather than war, with nourishment rather than control, with the assurance that this body is made for glory.",
  },
];

const voices = [
  {
    name: "Brian Cuban",
    role: "Author of The Addicted Lawyer; recovered from eating disorders and addiction",
    quote: "Men don't seek help for eating disorders because we are told it is not a man's problem. By the time I admitted I had one, I had been sick for fifteen years. The shame of the secret was worse than the shame of the illness. Breaking the silence saved my life.",
  },
  {
    name: "Dr. Tom Hildebrandt",
    role: "Clinical psychologist, eating disorders in men researcher at Mount Sinai",
    quote: "Eating disorders in men are underdiagnosed, undertreated, and underresearched — partly because the diagnostic criteria were developed entirely from female populations. Men with eating disorders look different. Their focus may be more on muscularity than thinness. The illness is no less serious.",
  },
  {
    name: "Preston Sprinkle",
    role: "Author and theologian; has written on embodiment and Christian identity",
    quote: "The body is not incidental to the spiritual life — it is part of it. When men wage war on their bodies, they are fighting a battle against part of what God made and called good. Recovery is an act of theological reconciliation with creation.",
  },
  {
    name: "Jonathan Merritt",
    role: "Author and journalist; has written about male vulnerability and Christian faith",
    quote: "The church has done men a disservice by teaching them that emotional need is spiritual weakness. The result is men who carry enormous pain — addiction, eating disorders, depression — in total silence. The gospel says something different: the weak are blessed, the hungry will be filled.",
  },
];

const practices = [
  {
    title: "Find a Treatment Provider Experienced with Men",
    body: "Not all eating disorder treatment programs are experienced with male presentations. Men with eating disorders are more likely to present with muscle dysmorphia, orthorexia, or binge eating disorder than with classic anorexia or bulimia. Find a provider who understands male-specific presentations. The National Eating Disorders Association (NEDA) helpline (1-800-931-2237) can help identify treatment options. The Alliance for Eating Disorders Awareness also maintains a treatment directory.",
  },
  {
    title: "Tell One Person",
    body: "You do not have to come out as someone with an eating disorder to your entire community. Start with one person — a close friend, a pastor, a family member you trust — and tell them what is actually happening. This one conversation, as terrifying as it is, breaks the secrecy that maintains the illness. Research consistently shows that social support is one of the strongest predictors of eating disorder recovery. The illness needs secrecy to survive. Give it one honest conversation.",
  },
  {
    title: "Examine Your Relationship With Control",
    body: "Many men with eating disorders are using food and body control to manage anxiety, perfectionism, or a sense of being out of control in other areas. Working with a therapist to identify what the restriction, purging, or binge cycle is managing is essential. The question to ask is not just \"why do I do this to my body\" but \"what would I have to feel if I stopped?\" The eating disorder is often a solution to another problem — and healing requires addressing the original problem.",
  },
  {
    title: "Find Community With Other Men in Recovery",
    body: "Men in eating disorder recovery rarely know other men in eating disorder recovery — the stigma and secrecy make peer support almost nonexistent. Seek it out deliberately. NEDA has male-specific resources. Some treatment programs offer men-only groups. Online communities exist. Being with men who can say \"I understand what you are going through\" without judgment is worth the effort to find.",
  },
  {
    title: "Reclaim Eating as a Practice of Care, Not Control",
    body: "Recovery from an eating disorder involves changing your relationship with food — from a site of war and control to a site of nourishment and even pleasure. This often happens slowly, with the guidance of a registered dietitian experienced in eating disorder recovery. For Christians, there is a rich tradition of meals as sacred practice: communion, hospitality, breaking bread together. Reconnecting eating with community and blessing rather than isolation and control is part of spiritual recovery.",
  },
  {
    title: "Monitor for Co-occurring Conditions",
    body: "Eating disorders in men frequently co-occur with depression, anxiety, substance use disorders, and OCD. If you are in recovery from an eating disorder, ensure that these co-occurring conditions are also being treated. Untreated depression or anxiety will make eating disorder recovery significantly harder. An integrated treatment approach addressing the full picture is the most effective.",
  },
];

const scriptures = [
  { ref: "1 Corinthians 6:19-20", text: "Do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body." },
  { ref: "Psalm 139:14", text: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well." },
  { ref: "Ephesians 2:8-9", text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast." },
  { ref: "Matthew 11:28-30", text: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls." },
  { ref: "James 5:16", text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working." },
  { ref: "Isaiah 58:11", text: "And the Lord will guide you continually and satisfy your desire in scorched places and make your bones strong; and you shall be like a watered garden, like a spring of water, whose waters do not fail." },
];

const videos = [
  { videoId: "P8NMBvHdKl8", title: "Eating Disorders in Men — Breaking the Silence" },
  { videoId: "w0NQu6N0m2w", title: "Male Eating Disorders and Christian Faith" },
  { videoId: "8YDClvVLDSc", title: "Body Image, Masculinity, and the Gospel" },
  { videoId: "Bw8TSXBHVT4", title: "Recovery From Muscle Dysmorphia and Orthorexia" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function EatingDisorderMaleChristianPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; honest: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", honest: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_eatingdisordermale_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_eatingdisordermale_entries", JSON.stringify(next));
    setForm({ today: "", honest: "", prayer: "" });
  }

  return (
    <>
      <Navbar />
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Eating Disorders in Men
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            It is not a woman&apos;s disease. For Christian men struggling with anorexia, bulimia, binge eating, muscle dysmorphia, or orthorexia — honest theology and real recovery resources.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Need help now?</strong> NEDA Helpline: <strong style={{ color: TEXT }}>1-800-931-2237</strong> &bull; Crisis Text Line: Text <strong style={{ color: TEXT }}>NEDA to 741741</strong> &bull; Crisis Line: <strong style={{ color: TEXT }}>988</strong>
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. No one will see this. You can be honest here.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where are you today with your body and eating?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="No judgment here." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What honest thing do you need to say that you haven&apos;t been able to say?</label>
                <textarea value={form.honest} onChange={e => setForm(f => ({ ...f, honest: e.target.value }))} rows={2} placeholder="Say it here first." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="God, I need..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
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
                    {e.honest && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Honest: </span>{e.honest}</p>}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony about eating disorders in men and Christian faith.</p>
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
