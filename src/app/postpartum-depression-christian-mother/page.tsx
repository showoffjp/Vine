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
    title: "Hannah's Cry and the God Who Hears Mothers in Pain",
    body: "Hannah wept bitterly in the temple, unable to eat, described by an onlooker as drunk — and God heard her (1 Samuel 1:10-20). The scripture does not pathologize her distress or demand she perform happiness. It records her grief with dignity and depicts God responding to her prayer. For the Christian mother in postpartum depression, Hannah models that God is not put off by a weeping, struggling woman. He draws near to her. He answers.",
  },
  {
    title: "The Lies Postpartum Depression Tells About Motherhood",
    body: "Postpartum depression often lies: you are a bad mother; you don't love your baby; you are not grateful enough; you are failing God. These are the voice of illness, not truth. The Bible never defines faithful motherhood as the absence of struggle. Mary had to flee to Egypt within days of giving birth. Jochebed placed her infant son in a river to save his life. Elizabeth was at advanced age and high-risk. Faithful motherhood has always existed inside hardship — not apart from it.",
  },
  {
    title: "The Holy Spirit as Paraclete: Present in the Dark",
    body: "Jesus promised a Paraclete — a coming-alongside helper — who would not leave his disciples (John 14:16-18). The Holy Spirit is specifically present in the moments when we cannot pray, when we cannot feel God, when postpartum depression has flattened our capacity for spiritual practice. Romans 8:26 promises: \"The Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.\" You do not need to pray well to be held.",
  },
  {
    title: "Medication and Motherhood: A Theology of Means",
    body: "God heals through medicine. Treating postpartum depression with antidepressants or other medications is not a lack of faith — it is the responsible use of the healing gifts God has given to medicine and science. When Paul told Timothy to \"use a little wine for your stomach's sake\" (1 Timothy 5:23), he assumed the use of physical means for physical problems. Refusing treatment for postpartum depression in the name of faith is not more spiritual — it may endanger both you and your child.",
  },
  {
    title: "The Body After Birth: Incarnational Theology",
    body: "The Incarnation means God took human flesh seriously — birth, hunger, sleep, pain, tears. Your postpartum body is not failing you spiritually; it is a human body doing the most physically demanding thing a human body can do. Hormonal shifts after birth are among the most dramatic in biology. Postpartum depression, anxiety, and psychosis are medical conditions with biological causes. Christian theology demands we honor the body's reality, not shame it. Your suffering is real. God honors bodies.",
  },
];

const voices = [
  {
    name: "Dr. Christina Hibbert",
    role: "Clinical psychologist, author of This Is How We Grow; postpartum depression and grief specialist",
    quote: "Postpartum depression is not a sign that you are a bad mother. It is a sign that your body and mind are overwhelmed and need support. The bravest thing a mother can do is ask for help — and the most loving thing the church can do is provide it without judgment.",
  },
  {
    name: "Sarah Bessey",
    role: "Author and speaker; has written openly about postpartum struggles",
    quote: "The gap between what we expected motherhood to feel like and what it actually feels like can be devastating. If you are in that gap right now — please hear this: you are not broken. You are not alone. And there is a way through.",
  },
  {
    name: "Natasha Sistrunk Robinson",
    role: "Author of A Sojourner's Truth; writes on faith, women, and wholeness",
    quote: "Vulnerability is not weakness in the kingdom of God. Telling the truth about what is happening in your body and mind after birth — asking for help, accepting help — is an act of courage and trust in the God who made you and loves you.",
  },
  {
    name: "Tina Schermer Sellers",
    role: "Christian sex and intimacy therapist, author of Sex, God, and the Conservative Church",
    quote: "Christian women are often taught to sacrifice their own needs without limit. But even Jesus withdrew to rest and pray. Caring for your mental health in the postpartum season is not selfishness — it is stewardship of the self God gave you, and it is the foundation of being able to care for your child.",
  },
];

const practices = [
  {
    title: "Tell Your Doctor, Today",
    body: "Postpartum depression, anxiety, and psychosis are medical conditions. Tell your OB, midwife, or primary care provider what you are experiencing. Be specific and honest — not okay, not just tired. There are evidence-based medical treatments that work. Postpartum psychosis is a psychiatric emergency: if you are having thoughts of harming yourself or your baby, go to the emergency room now.",
  },
  {
    title: "Let the Church Be the Church",
    body: "Ask someone at your church for specific, concrete help: meals, childcare, someone to sit with you, overnight help. Most churches want to help and do not know how to without being asked. \"I am struggling with postpartum depression and I need meals on Tuesday and Thursday\" is a request your church can fulfill. You do not need to explain everything. You just need to ask.",
  },
  {
    title: "Release the Guilt About Feeling Disconnected from Your Baby",
    body: "Postpartum depression often disrupts bonding — the rush of love that cultural narratives promise does not always come. This is the illness, not a permanent relational reality. Most mothers who receive treatment for PPD find that bonding develops as they heal. The disconnection you feel now does not define who you will be as a mother. It is a symptom. Treat the symptom.",
  },
  {
    title: "Create a Minimum Viable Spiritual Life",
    body: "In the acute postpartum period, your spiritual life may need to be reduced to its minimum: one sentence to God in the morning, one psalm read aloud at night, one moment of holding your baby while saying a name of God. This is not spiritual failure — it is wisdom. Jesus was asleep in the boat during a storm (Mark 4:38). Rest is not faithlessness. Do what you can sustain, not what you think you should perform.",
  },
  {
    title: "Join a Postpartum Support Group",
    body: "Postpartum Support International (postpartum.net) offers peer support groups, a helpline (1-800-944-4773), and a directory of providers who specialize in perinatal mental health. Being with other mothers who understand exactly what you are experiencing — without having to explain or justify — is profoundly healing. Some areas have specifically Christian PPD support groups through churches or Christian counseling centers.",
  },
  {
    title: "Protect Sleep at All Costs",
    body: "Sleep deprivation is both a cause and an amplifier of postpartum depression. If you have a partner, family member, or friend who can take a night shift so you get four to five consecutive hours, this is not a luxury — it is medical necessity. Ask directly. \"I need you to take the 2 a.m. feed so I can sleep\" is a sentence worth saying. Arrange childcare naps. Sleep when the baby sleeps is not just cliche — it is the most important thing you can do.",
  },
];

const scriptures = [
  { ref: "1 Samuel 1:10", text: "She was deeply distressed and prayed to the Lord and wept bitterly." },
  { ref: "Romans 8:26", text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words." },
  { ref: "Psalm 22:9-10", text: "Yet you are he who took me from the womb; you made me trust you at my mother's breasts. On you was I cast from my birth, and from my mother's womb you have been my God." },
  { ref: "Isaiah 66:13", text: "As one whom his mother comforts, so I will comfort you; you shall be comforted in Jerusalem." },
  { ref: "Matthew 11:28", text: "Come to me, all who labor and are heavy laden, and I will give you rest." },
  { ref: "Psalm 139:13-14", text: "For you formed my inward parts; you knitted me together in my mother's womb. I praise you, for I am fearfully and wonderfully made." },
];

const videos = [
  { videoId: "hh9_PBgmuXI", title: "Postpartum Depression — What Every Christian Mother Needs to Know" },
  { videoId: "nQNFYp2PKGM", title: "Finding God in the Fog of Postpartum Struggle" },
  { videoId: "cHOdCmJCy4I", title: "Postpartum Support International — Getting Help" },
  { videoId: "Vz4RH_YFHGE", title: "Hannah's Prayer — God Hears Mothers in Pain" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function PostpartumDepressionChristianMotherPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; howToday: string; lieToday: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ howToday: "", lieToday: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_postpartumdepressionchristian_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.howToday.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_postpartumdepressionchristian_entries", JSON.stringify(next));
    setForm({ howToday: "", lieToday: "", prayer: "" });
  }

  return (
    <>
      <Navbar />
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Postpartum Depression & Faith
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            You are not a bad mother. You are not failing God. For Christian women navigating postpartum depression, anxiety, and the gap between what they expected and what they are experiencing.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>If you are in crisis or having thoughts of harming yourself or your baby:</strong> Go to the ER or call <strong style={{ color: TEXT }}>988</strong> &bull; Postpartum Support International: <strong style={{ color: TEXT }}>1-800-944-4773</strong>
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. This is a private space — no one else will see it.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>How are you today, honestly?</label>
                <textarea value={form.howToday} onChange={e => setForm(f => ({ ...f, howToday: e.target.value }))} rows={3} placeholder="No performance required here." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What lie is the hardest to fight today?</label>
                <textarea value={form.lieToday} onChange={e => setForm(f => ({ ...f, lieToday: e.target.value }))} rows={2} placeholder="I am a bad mother. I don't love my baby. God is disappointed in me..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer, even a short one (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Help. I need you. Thank you for not leaving..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.howToday && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Today: </span>{e.howToday}</p>}
                    {e.lieToday && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>The lie: </span>{e.lieToday}</p>}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for Christian mothers in the postpartum season.</p>
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
