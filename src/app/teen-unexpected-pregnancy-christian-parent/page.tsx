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
    title: "Grace Before Pronouncement",
    body: "The parable of the prodigal son (Luke 15:11-32) shows a father who sees his son coming from a distance and runs — before the son has made his speech, before the apology, before any discussion of consequences or accountability. The first movement is toward, not away. For the Christian parent who has just learned that their teenager is pregnant, the first theological imperative is also toward: run first. The conversation about what comes next can happen. But the first movement of a grace-formed parent is toward their child, not away.",
  },
  {
    title: "This Did Not Take God by Surprise",
    body: "\"Before I formed you in the womb I knew you\" (Jeremiah 1:5) applies to the baby that was not planned. The family's surprise is not God's surprise. This pregnancy is not outside the reach of God's providence. This baby — if carried to term — is a person made in God's image, known and loved before conception. This is not to minimize the complexity or pain of the situation. It is to establish a theological ground on which the family can stand while navigating that complexity: God is already here, already at work.",
  },
  {
    title: "Shame, Secrecy, and the Light of the Gospel",
    body: "Christian families often respond to teen pregnancy with secrecy — the theological instinct that public knowledge will damage the family, the church, or the teenager. But the gospel operates in the opposite direction: toward confession, light, and community rather than shame and concealment. \"Everything exposed by the light becomes visible\" (Ephesians 5:13). Shame thrives in secrecy. Many families who allowed their community to know found grace — practical help, consistent support, and the freedom that comes with not managing a secret.",
  },
  {
    title: "The Elder Brother's Temptation",
    body: "In the parable of the prodigal son, the elder brother refuses to come in to the party (Luke 15:28). He is angry, keeping score, focused on the unfairness of grace extended to someone who has made the mistake he did not. Christian parents — and Christian siblings, peers, and church communities — face the elder brother's temptation when a teenager becomes pregnant: to stay outside, to withhold celebration, to make the grace conditional. The father's response to the elder brother is tender but clear: \"Son, you are always with me... but we had to celebrate\" (v.31-32).",
  },
  {
    title: "The Full Range of Options and Christian Ethics",
    body: "Christian parents navigating a teen pregnancy face decisions about the full range of outcomes: carrying to term and parenting, carrying to term and placing for adoption, or abortion. Christian ethics has historically and most recently affirmed the value of unborn life in ways that call abortion into serious question, while also acknowledging that families in crisis deserve pastoral care rather than immediate condemnation. Whatever decision is made, the parent's task is to provide informed support — helping their teen navigate the ethical and practical dimensions with love, honesty, and access to all available resources.",
  },
];

const voices = [
  {
    name: "Kay Warren",
    role: "Author and speaker; co-founder of Saddleback Church; has spoken on grace in parenting failures",
    quote: "Your child's failure is not a reflection of your failure as a parent. The gospel is large enough to hold a teen pregnancy. The question is whether your family's version of Christianity is large enough to hold it too — or whether grace has only been a concept until now.",
  },
  {
    name: "Jen Hatmaker",
    role: "Author of For the Love; has spoken about unexpected parenting challenges and grace",
    quote: "The most important thing a parent can do when something goes wrong is to make sure their child knows: you are not alone in this. Whatever happens next, we are in it together. The shame that secrets create does more damage than the pregnancy itself.",
  },
  {
    name: "Lisa Harper",
    role: "Author and speaker; adopted a child as a single woman; speaks on unconditional love",
    quote: "Every baby is wanted by God, even when the timing is not wanted by the people involved. The theology of the incarnation — God coming as a vulnerable, dependent infant — gives every pregnancy a dignity that no human situation can fully remove.",
  },
  {
    name: "National Council for Adoption",
    role: "Representing adoptive families, birth parents, and agencies",
    quote: "Adoption is one of the most selfless and loving choices a young parent can make. For Christian families, it also reflects the deepest truth of the gospel: a child placed by love into a family that wants them, belonging completely to their new family.",
  },
];

const practices = [
  {
    title: "Your First Response Sets the Trajectory",
    body: "Your teenager's first telling of this news is a moment of extreme vulnerability. How you respond in the first five minutes will shape whether they come to you or hide from you for the rest of this pregnancy. Take a breath. Do not lead with anger, accusation, or immediate problem-solving. Lead with your love for your child. There will be time for every difficult conversation — the first conversation needs to communicate above all: you are not alone in this.",
  },
  {
    title: "Get Accurate Medical Information Immediately",
    body: "Your teenager needs to see an OB or midwife as soon as possible for prenatal care, regardless of what decision will be made about the pregnancy. Early prenatal care is important even if adoption is being considered. Pregnancy resource centers (often Christian-affiliated) provide free pregnancy tests, ultrasounds, and initial consultation. NARAL and Planned Parenthood serve women who are considering abortion. Getting accurate medical information as early as possible opens rather than closes options.",
  },
  {
    title: "Involve a Counselor Early",
    body: "A trained counselor — whether a Christian pregnancy resource counselor, a social worker, or a therapist experienced in adolescent and pregnancy counseling — can help your teenager and your family navigate the complex emotional, relational, and practical dimensions of this situation. This is not a substitute for parental involvement; it is a resource that helps families have the conversations they need to have with support.",
  },
  {
    title: "If Adoption Is Considered: Explore the Full Picture",
    body: "Adoption is a meaningful and honorable choice. It is also a decision with lifelong implications for the birth parent, the adoptive family, and above all, the child. If your teenager is considering adoption, take time to understand the full spectrum of adoption types: domestic infant adoption, open adoption (with ongoing contact), closed adoption, and the role of licensed adoption agencies. Consult with a licensed adoption agency, and consider what ongoing relationship the birth mother might want with her child.",
  },
  {
    title: "Communicate Grace to Your Church Family",
    body: "How you tell your church community — and when — is a pastoral decision. Some families find that bringing their community in early prevents the damage of discovered secrets and opens the flow of practical support. Others need private space to stabilize first. Either way, how you talk about it will model for the community how to respond. If you model shame, the community will respond with shame. If you model grace, you invite grace. Your family's story can become one of the most powerful testimonies of the gospel your community has seen.",
  },
  {
    title: "Care for Yourself as Well as Your Teenager",
    body: "Parents of pregnant teenagers carry their own grief, shock, and adjustment — often suppressed in order to manage their child's crisis. Find a trusted friend, a pastoral counselor, or a therapist for yourself, separately from your teenager's support. Your emotional processing matters not only for your own wellbeing but because a parent who is not processing their own feelings will eventually express them in ways that damage the relationship with their child.",
  },
];

const scriptures = [
  { ref: "Luke 15:20", text: "But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him." },
  { ref: "Jeremiah 1:5", text: "Before I formed you in the womb I knew you, and before you were born I consecrated you." },
  { ref: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." },
  { ref: "Psalm 139:13-14", text: "For you formed my inward parts; you knitted me together in my mother's womb. I praise you, for I am fearfully and wonderfully made." },
  { ref: "Isaiah 43:1", text: "Fear not, for I have redeemed you; I have called you by name, you are mine." },
  { ref: "1 John 4:18", text: "There is no fear in love, but perfect love casts out fear. For fear has to do with punishment, and whoever fears has not been perfected in love." },
];

const videos = [
  { videoId: "jXlJZ-w_4FY", title: "When Your Teenager Is Pregnant — A Christian Parent's Response" },
  { videoId: "Z4gIL5-M9w8", title: "Teen Pregnancy and the Church — Grace in Crisis" },
  { videoId: "9IfgBV0eWfk", title: "Christian Adoption — Understanding Your Teen's Options" },
  { videoId: "oL9YtVOtAhA", title: "Parenting Through Crisis — Running Toward Your Child" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function TeenUnexpectedPregnancyChristianParentPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; fear: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", fear: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_teenpregnancychristianparent_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_teenpregnancychristianparent_entries", JSON.stringify(next));
    setForm({ today: "", fear: "", prayer: "" });
  }

  return (
    <>
      <Navbar />
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Your Teen Is Pregnant
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            The first movement is toward them, not away. For Christian parents navigating their teenager&apos;s unexpected pregnancy — how to lead with grace, make wise decisions, and hold your family together.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Immediate resources:</strong> Pregnancy Resource Center finder: <strong style={{ color: TEXT }}>optionline.org</strong> or call <strong style={{ color: TEXT }}>1-800-712-4357</strong> &bull; Crisis: <strong style={{ color: TEXT }}>988</strong>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Parent Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A private space to process what you are feeling as a parent.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where are you today in this situation?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="Shock, grief, starting to figure things out, worried about your child..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What is your biggest fear right now?</label>
                <textarea value={form.fear} onChange={e => setForm(f => ({ ...f, fear: e.target.value }))} rows={2} placeholder="For your child, for the baby, for your family, for yourself..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, I am scared. Help me run toward my child and not away..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
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
                    {e.fear && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Fear: </span>{e.fear}</p>}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for Christian parents navigating teen pregnancy.</p>
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
