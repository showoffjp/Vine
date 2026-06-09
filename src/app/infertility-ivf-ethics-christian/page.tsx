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
    title: "Children Are a Gift, Not an Entitlement — and That Changes Everything",
    body: "\"Behold, children are a heritage from the Lord, the fruit of the womb a reward\" (Psalm 127:3). The Bible celebrates children as God's gift — not as a right or a guarantee. This framing does not mean infertility is a punishment (Job corrects that framework), but it does mean that the desire for children, however deep and legitimate, does not automatically entitle any specific means of fulfilling it. Christian ethics begins by holding the desire itself before God: what are we really longing for, and what means of fulfilling it honors both the longing and the dignity of every life created in the process?",
  },
  {
    title: "The Ethical Core: What Is the Status of the Embryo?",
    body: "The central ethical question in IVF is not procedural but theological: when does personhood begin? If the embryo is a person — made in God's image from the moment of fertilization (a view held by many evangelicals and Catholics based on Psalm 139:13-16 and Jeremiah 1:5) — then the creation of multiple embryos with the expectation that many will be destroyed or unused raises serious ethical concerns. If the embryo is a potential person with developing moral status, the calculus is different. Christians disagree honestly and substantively on this question, and that disagreement deserves honest engagement rather than avoidance.",
  },
  {
    title: "Hannah and the Rawness of Infertility Prayer",
    body: "Hannah's prayer in 1 Samuel 1 is one of the most honest prayers in scripture — \"I have been pouring out my soul before the Lord\" (v.15), \"praying out of my great anxiety and vexation\" (v.16). God heard her prayer and gave her Samuel. This is not a promise that every prayer for a child will be answered the same way — the Bible includes people who died without receiving what was promised (Hebrews 11:13). But it does demonstrate that the grief and desire of infertility are not shameful, not failures of faith, and are brought directly to God in the most honest terms.",
  },
  {
    title: "The Pastoral Reality: Couples Need Space, Not Pressure",
    body: "Christians facing infertility are often pressured from two directions: secular medical culture that treats IVF as the obvious next step without ethical reflection, and religious communities that make them feel guilty for considering it. Neither serves them. What Christian couples navigating infertility need is space to grieve, information for informed ethical discernment, freedom from shame, and community that will walk with them regardless of what path they choose. The church's role is not to pronounce but to accompany.",
  },
  {
    title: "Adoption, Fostering, and the Gospel Lens",
    body: "The New Testament's central metaphor for salvation is adoption: \"God sent his Son... so that we might receive adoption as sons\" (Galatians 4:4-5). This gives adoption a theological dignity that is not second-best to biological parenthood but is, in Paul's framing, the model for the highest spiritual reality. Christians have strong theological reasons to consider adoption and foster care not as consolation prizes but as distinctively kingdom-aligned paths to parenthood — paths that image the very character of God's relationship with humanity.",
  },
];

const voices = [
  {
    name: "Dr. John Kilner",
    role: "Christian bioethicist, author; professor at Trinity Evangelical Divinity School",
    quote: "The question of IVF is not primarily about whether the procedure works medically. It is about whether every embryo created in the process is treated with the dignity appropriate to a being created in God's image. That question deserves careful, honest theological engagement.",
  },
  {
    name: "Sheryl Roehl",
    role: "Author of Longing for Motherhood: Holding On to Hope in the Midst of Childlessness",
    quote: "Infertility is one of the loneliest experiences a Christian woman can have — partly because the church has not learned how to hold grief that does not resolve quickly. You are not alone in this longing. And God is not distant from it.",
  },
  {
    name: "Russell Moore",
    role: "Author of Adopted for Life; former president of the ERLC",
    quote: "Adoption is not plan B. It is the gospel in miniature — the welcoming of a child who was not yours into a family they belong to by covenant love, not by accident of biology. Christian couples considering adoption are not settling for less. They are living out one of Christianity's most beautiful realities.",
  },
  {
    name: "Megan Hill",
    role: "Author of Contentment: Seeing God's Goodness; has written about infertility and Christian faith",
    quote: "When the pregnancy tests keep coming back negative, it is easy to feel that God has forgotten you or withheld something you deserve. But contentment — which is not the same as pretending not to want what you want — is learned. Paul said so. And it is possible to be deeply sad and still trust God. These are not opposites.",
  },
];

const practices = [
  {
    title: "Grieve the Loss of Each Failed Cycle",
    body: "Each failed fertility treatment — whether natural cycles tracked, IUI attempts, or IVF cycles — is a loss. The grief is real and deserves to be named, not minimized. Many couples feel pressure to stay positive for the next attempt. But grief that is suppressed resurfaces. Allow yourselves to mourn each failure, together, before moving on to the next step. The grief is not a sign that your faith is weak; it is a sign that you were paying attention.",
  },
  {
    title: "Engage the Ethical Questions Before Proceeding with IVF",
    body: "Before beginning IVF, honestly engage the ethical questions specific to your situation: How many embryos will be created? What will happen to unused embryos (frozen, adopted, destroyed)? Are you willing to transfer all embryos created? Would you consider a natural cycle or mini-IVF protocol that creates fewer embryos? Talk with a pastor, a Christian bioethics resource (The Center for Bioethics and Human Dignity), and the REI together before proceeding.",
  },
  {
    title: "Find Community That Will Stay With You Through Multiple Losses",
    body: "Infertility treatment is a series of potential losses — each failed cycle, each miscarriage, each setback. Many couples face this sequence largely alone because they told few people they were trying. Consider allowing a small circle of trusted people into the journey — so that they can celebrate with you if it succeeds, and grieve with you if it does not. You were not meant to carry this alone.",
  },
  {
    title: "Explore Embryo Adoption (Snowflake Adoption)",
    body: "Embryo adoption allows couples to receive frozen embryos that other families have decided not to transfer — giving a potential life an opportunity it might not otherwise have, and giving the adopting couple a pregnancy experience. This option threads some of the ethical concerns around IVF for Christians who believe embryos are persons: rather than creating new embryos, you receive existing ones whose alternative may be indefinite freezing or destruction. The National Embryo Donation Center (embryodonation.org) is a leading resource.",
  },
  {
    title: "Tend Your Marriage Throughout Treatment",
    body: "Infertility treatment is one of the greatest stressors a marriage can face. The medicalization of intimacy, the grief of repeated failures, the financial strain, and the divergent emotional pacing between partners all create relationship risk. Protect your marriage during treatment: maintain non-treatment-related connection, attend couples counseling if needed, and resist reducing your relationship to the goal of pregnancy. You are each other's primary commitment — the child you are hoping for deserves parents who are still connected when they arrive.",
  },
  {
    title: "Consider the Full Range of Paths",
    body: "The path to parenthood for infertile Christian couples is not simply IVF or nothing. Consider the full range honestly: fertility medications and IUI, natural cycle IVF, embryo adoption, domestic adoption, international adoption, foster care, fostering with the intent to adopt, or choosing a childfree life by covenant. Each of these paths has theological dignity. None of them is spiritually second-rate. Prayerfully discerning which path fits your convictions, your capacity, and your calling is the work — not simply defaulting to the most medically aggressive option.",
  },
];

const scriptures = [
  { ref: "Psalm 127:3", text: "Behold, children are a heritage from the Lord, the fruit of the womb a reward." },
  { ref: "1 Samuel 1:15-16", text: "Hannah replied, 'No, my lord, I am a woman troubled in spirit. I have drunk neither wine nor strong drink, but I have been pouring out my soul before the Lord.'" },
  { ref: "Galatians 4:4-5", text: "But when the fullness of time had come, God sent forth his Son, born of woman, born under the law, to redeem those who were under the law, so that we might receive adoption as sons." },
  { ref: "Psalm 139:13", text: "For you formed my inward parts; you knitted me together in my mother's womb." },
  { ref: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope." },
  { ref: "Isaiah 54:1", text: "Sing, O barren one, who did not bear; break forth into singing and cry aloud, you who have not been in labor! For the children of the desolate one will be more than the children of her who is married, says the Lord." },
];

const videos = [
  { videoId: "dBzmTvXSCDA", title: "IVF and Christian Ethics — What Should We Think?" },
  { videoId: "vCl2OmG1h0k", title: "Infertility and Faith — Holding Hope and Grief Together" },
  { videoId: "Td78EHbP4bE", title: "Russell Moore — Adopted for Life" },
  { videoId: "LkJdqEpBjGA", title: "Embryo Adoption — A Christian Couple's Story" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function InfertilityIvfEthicsChristianPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; question: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", question: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_infertilityivfethics_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_infertilityivfethics_entries", JSON.stringify(next));
    setForm({ today: "", question: "", prayer: "" });
  }

  return (
    <>
      <Navbar />
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Infertility, IVF & Christian Ethics
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            The grief of infertility is real. So are the ethical questions. For Christian couples navigating infertility treatment — honest theology, ethical discernment, and the full range of paths forward.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Support resources:</strong> RESOLVE (National Infertility Association): <strong style={{ color: TEXT }}>1-866-NOT-ALONE</strong> &bull; National Embryo Donation Center: <strong style={{ color: TEXT }}>embryodonation.org</strong> &bull; Crisis: <strong style={{ color: TEXT }}>988</strong>
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A space for grief, hope, and honest discernment.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where are you today in the process?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="Treatment cycle, waiting, grieving, deciding next steps..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What ethical or spiritual question are you wrestling with?</label>
                <textarea value={form.question} onChange={e => setForm(f => ({ ...f, question: e.target.value }))} rows={2} placeholder="What should we do with extra embryos? Is this the right path? What does faithfulness look like here?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, we bring this longing before you..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
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
                    {e.question && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Wrestling with: </span>{e.question}</p>}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony on infertility, IVF ethics, adoption, and Christian faith.</p>
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
