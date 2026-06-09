"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The Child's Body Is Not a Spiritual Battleground",
    verse: "Genesis 1:31",
    text: "\"God saw all that he had made, and it was very good.\" The body God made is good — including the body your child inhabits, in whatever form it takes at this moment. Eating disorders often develop in environments where the body is treated as a problem to be managed, a morality project, or a source of shame. The theological foundation for recovery is the goodness of the body as made — not the ideal body, but the actual body.",
  },
  {
    title: "Parents Are Not the Cause, Even Though They Feel Responsible",
    verse: "Ezekiel 18:20",
    text: "\"The one who sins is the one who will die. The child will not share the guilt of the parent, and the parent will not share the guilt of the child.\" Eating disorders are complex, multi-factorial illnesses with biological, psychological, social, and developmental components. Parents are not the cause, even though the shame of having a child with an eating disorder frequently makes them feel otherwise. Medical guidance consistently advises against self-blame as it impairs the parent's ability to help.",
  },
  {
    title: "Mealtimes Are Not Moral Battlegrounds",
    verse: "1 Timothy 4:4–5",
    text: "\"For everything God created is good, and nothing is to be rejected if it is received with thanksgiving, because it is consecrated by the word of God and prayer.\" Food is a creation good — something to be received with thanksgiving. The eating disorder distorts this relationship to food until eating feels dangerous and mealtimes become sites of terror and control. Recovery restores the right relationship to food as a created good.",
  },
  {
    title: "Sustained Presence Is the Primary Parental Gift",
    verse: "Deuteronomy 31:8",
    text: "\"The LORD himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.\" For the parent of a child in eating disorder recovery, going before and staying present is the primary vocation. The child needs a parent who stays in the room — literally and figuratively — through the hardest meals, the regressions, the hospitalizations, and the long plateaus.",
  },
  {
    title: "Recovery Is Non-Linear and That Is Normal",
    verse: "Psalm 30:5",
    text: "\"Weeping may stay for the night, but rejoicing comes in the morning.\" The eating disorder recovery literature is consistent: recovery is non-linear. Setbacks are not failure — they are part of the path. The parent who interprets every regression as evidence that recovery is impossible has lost the long-arc perspective. Morning comes after nights of weeping — but not according to the timetable the parent needs.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. James Lock",
    role: "Stanford Eating Disorders Program, Developer of Family-Based Treatment",
    quote: "In Family-Based Treatment, parents are not the problem. They are the solution. Externalizing the illness from the child and harnessing parental care is the most effective approach for adolescent anorexia.",
    bio: "Lock developed and validated Family-Based Treatment (Maudsley Method) for adolescent eating disorders — the most evidence-supported intervention available, which positions parents as active agents in recovery.",
  },
  {
    id: 2,
    name: "Oona Hanson",
    role: "Parent Coach, Eating Disorder Family Advocate",
    quote: "Parents need permission to be both terrified and capable at the same time — because that is actually what the situation calls for.",
    bio: "Hanson provides parent coaching for families navigating eating disorder recovery and has been vocal about the specific support parents need that clinical systems often fail to provide.",
  },
  {
    id: 3,
    name: "Dr. Cynthia Bulik",
    role: "Author, Midlife Eating Disorders; Genetics Researcher",
    quote: "Eating disorders are serious mental illnesses with the highest mortality rate of any psychiatric disorder. The sooner we treat them with that level of seriousness, the better the outcomes.",
    bio: "Bulik's genetics research has been pivotal in shifting the field away from blame-focused models toward neurobiological and genetic frameworks that reduce shame for both patients and families.",
  },
  {
    id: 4,
    name: "Laura Collins Lyster-Mensh",
    role: "Author, Eating with Your Anorexic; Founder, FEAST",
    quote: "No parent has ever failed their child into anorexia. The illness is not caused by parenting. But parents can absolutely be part of the healing.",
    bio: "Collins Lyster-Mensh founded FEAST (Families Empowered and Supporting Treatment of Eating Disorders) after her daughter's recovery, creating the premier family support organization for eating disorder recovery.",
  },
];

const practices = [
  {
    icon: "🚨",
    title: "Get a Medical Evaluation Immediately",
    text: "Eating disorders — especially anorexia — can be medically dangerous even before they appear visually severe. A complete medical evaluation including vital signs, electrolytes, bone density (in anorexia), and cardiac monitoring is essential before treatment begins. Do not wait.",
  },
  {
    icon: "🏥",
    title: "Seek Specialized Eating Disorder Treatment",
    text: "General therapists frequently lack eating disorder specialization. Seek a team that includes a therapist, dietitian, and physician who specialize in eating disorders. For adolescents, Family-Based Treatment (FBT/Maudsley) has the strongest evidence base. For adults, CBT-E is well-established.",
  },
  {
    icon: "🤝",
    title: "Join FEAST for Family Support",
    text: "FEAST (feast-ed.org) provides parent support forums, research, a parent coach program, and a worldwide community of families who have navigated eating disorder recovery. The isolation of eating disorder parenting is one of its most damaging features — FEAST breaks it.",
  },
  {
    icon: "🍽️",
    title: "Take Charge of Meals in Early Recovery",
    text: "Family-Based Treatment asks parents to temporarily take charge of all food decisions and meal supervision during early recovery. This is hard, counterintuitive, and emotionally exhausting — and it is the intervention with the best outcomes for adolescents. Get support for yourself during this period.",
  },
  {
    icon: "🙋",
    title: "Get Your Own Therapeutic Support",
    text: "FEAST data confirms that parents' emotional health is the primary variable in their ability to support recovery effectively. Secondary traumatic stress in parents of children with eating disorders is real. Your own therapy is not optional — it is part of the treatment.",
  },
  {
    icon: "📚",
    title: "Educate Yourself with the Right Resources",
    text: "Read Eating with Your Anorexic by Collins, or Help Your Teenager Beat an Eating Disorder by Lock and Le Grange. Follow the NEDA and FEAST parent resources. Misinformation about eating disorders — especially the idea that parental behavior caused them — is pervasive and harmful.",
  },
];

const scriptures = [
  { verse: "Isaiah 41:10", text: "\"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.\"" },
  { verse: "Psalm 34:18", text: "\"The LORD is close to the brokenhearted and saves those who are crushed in spirit.\"" },
  { verse: "Matthew 11:28–29", text: "\"Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.\"" },
  { verse: "Galatians 6:9", text: "\"Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.\"" },
  { verse: "2 Corinthians 4:16–17", text: "\"Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day.\"" },
  { verse: "Romans 8:38–39", text: "\"Neither death nor life... will be able to separate us from the love of God that is in Christ Jesus our Lord.\"" },
];

type EDParentEntry = {
  id: string;
  date: string;
  status: string;
  hard: string;
  prayer: string;
};

export default function EatingDisorderParentChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<EDParentEntry[]>([]);
  const [status, setStatus] = useState("");
  const [hard, setHard] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_eatingdisorderparentchristian_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!status.trim()) return;
    const entry: EDParentEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      status,
      hard,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_eatingdisorderparentchristian_entries", JSON.stringify(updated));
    setStatus(""); setHard(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_eatingdisorderparentchristian_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌸</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Eating Disorder: A Parent&apos;s Christian Guide
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For parents whose child has an eating disorder — theological care that removes parental blame, clinical clarity on what eating disorders are and what actually helps, and community for the exhausting, non-linear journey of recovery.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Emergency: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>NEDA Helpline:</strong> 1-800-931-2237 | <strong>FEAST:</strong> feast-ed.org | <strong>Crisis Text:</strong> Text NEDA to 741741
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: i === 0 ? "#1a0505" : CARD, border: `1px solid ${i === 0 ? "#8b1a1a" : BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: i === 0 ? "#ff8888" : PURPLE, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${PURPLE}` }}>
                <div style={{ color: PURPLE, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, marginBottom: "1rem", fontWeight: "bold" }}>Parent Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Where is my child in recovery today? Where am I?</label>
                <textarea value={status} onChange={e => setStatus(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What has been hardest this week?</label>
                <textarea value={hard} onChange={e => setHard(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer for my child and for my own strength to stay:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.status && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Status:</strong> {e.status}</p>}
                {e.hard && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Hard:</strong> {e.hard}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="FXFiFrJjHdM" title="Family-Based Treatment for Eating Disorders Explained" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Family-Based Treatment (Maudsley): What It Is and Why It Works</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Overview of FBT for adolescent eating disorders — the evidence-based approach that positions parents as the primary recovery resource</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="6Pb4OA_FjRo" title="What Eating Disorders Actually Are — For Parents" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>What Eating Disorders Actually Are: A Parent&apos;s Guide</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical overview for parents on the biological, psychological, and neurological reality of eating disorders — and what does not cause them</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="nGpKLtxBDcg" title="FEAST — Family Support for Eating Disorder Recovery" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>FEAST: The Global Parent Support Network for Eating Disorder Families</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Overview of FEAST resources, parent forums, and the support community that has helped thousands of families navigate eating disorder recovery</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Vp4BdnhBfzY" title="Christian Faith and Eating Disorder Recovery" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Christian Faith and Eating Disorder Recovery: Pastoral Guidance</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>How faith communities can support rather than inadvertently harm eating disorder recovery — and what good pastoral care looks like</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
