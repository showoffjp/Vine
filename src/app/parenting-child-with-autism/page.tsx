"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "This Child Was Made Exactly as God Intended",
    verse: "Psalm 139:13-14",
    text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made. The autistic child's brain is not a deviation from God's design. It is God's design — a variation in the remarkable diversity of how human minds are made. The parent who grieves the diagnosis is grieving something real. And the child in the autism diagnosis is wonderfully made.",
  },
  {
    title: "The Grief of Different Expectations Is Real",
    verse: "Lamentations 3:20",
    text: "I well remember them, and my soul is downcast within me. The grief that often accompanies an autism diagnosis — the loss of imagined futures, the reconfiguration of hopes, the mourning of what typical development would have brought — is real and legitimate. It coexists with genuine love for the child. Naming the grief is not a betrayal of the child; it is honesty that, when processed, frees up love.",
  },
  {
    title: "The Body of Christ Includes Neurodivergent Bodies",
    verse: "1 Corinthians 12:22",
    text: "On the contrary, those parts of the body that seem to be weaker are indispensable. The autistic child who cannot make eye contact, who requires sensory accommodations, who melts down in worship services — is an indispensable part of the body of Christ. The church that cannot include them is missing something it needs. The church that creates space for them is discovering what it should have always known.",
  },
  {
    title: "Love Looks Different for Different Children",
    verse: "1 Corinthians 13:4",
    text: "Love is patient. For the parent of an autistic child, patience is not a personality trait — it is a survival skill practiced under fire, in the grocery store, in the school parking lot, in the emergency room at 2am. The patience Paul describes is not passive. It is the active, costly, daily choice to remain present and engaged with a child whose needs are exhausting and whose growth is non-linear.",
  },
  {
    title: "Your Faithfulness Will Be Remembered",
    verse: "Galatians 6:9",
    text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. The harvest for a parent of an autistic child is not measured in neurotypical milestones. It is measured in years of relationship built on trust, in a child who knows they are loved, in the small moments of connection that required enormous patience to cultivate. These are not lesser harvests. They are harder ones.",
  },
];

const voices = [
  {
    id: 1,
    name: "Amy Julia Becker",
    role: "Author, A Good and Perfect Gift; parent",
    quote: "I thought I was raising her to fit into the world. I slowly learned she was being given to me to help me see what I'd been missing.",
    bio: "Amy Julia Becker's daughter Penny was born with Down syndrome, and her writing about parenting a child with disability has helped many parents navigate the grief, love, and theological reorientation that come with it.",
  },
  {
    id: 2,
    name: "Temple Grandin",
    role: "Author, Thinking in Pictures; autistic advocate",
    quote: "Different, not less. I need you to understand the difference. Not broken. Not less. Different.",
    bio: "Temple Grandin is an autistic professor, author, and advocate who has spent decades helping neurotypical people understand autistic experience from the inside — and challenging the deficit-only framing that dominates public discourse.",
  },
  {
    id: 3,
    name: "Stephanie Hubach",
    role: "Author, Same Lake Different Boat; parent and disability theologian",
    quote: "Special needs families need two things from the church: practical help and the presence of people who are not afraid to stay.",
    bio: "Stephanie Hubach's son Freddy has Down syndrome, and she has spent her career helping churches understand disability theology and develop ministries that genuinely include families like hers.",
  },
  {
    id: 4,
    name: "John Swinton",
    role: "Professor of Practical Theology, author Becoming Friends of Time",
    quote: "The autistic person's relationship with time, with ritual, with detail is not a disorder. It is a different way of being in the world. The church should know what to do with that.",
    bio: "John Swinton has written extensively on dementia, disability, and what genuine inclusion of neurodivergent people requires from communities of faith — arguing that the church has resources the secular world does not.",
  },
];

const practices = [
  {
    icon: "🔬",
    title: "Pursue Early Evaluation and Intervention",
    text: "Early diagnosis opens access to Applied Behavior Analysis, occupational therapy, speech therapy, and special education services during the years when the brain is most plastic. Earlier is better — not to 'fix' the child but to give them the support that helps them thrive in their specific neurological reality.",
  },
  {
    icon: "🏠",
    title: "Create Sensory Safety at Home",
    text: "Sensory processing differences are central to most autism profiles. An occupational therapist can help identify your child's specific sensory triggers and design a home environment that reduces sensory overload and increases the child's ability to regulate and connect.",
  },
  {
    icon: "⛪",
    title: "Find or Build a Church That Includes Your Child",
    text: "Some churches have sensory rooms, trained volunteers, adapted Sunday school programs, and genuine community for autism families. Organizations like Friendship Ministries, Nathaniel's Hope, and Key Ministry train churches in autism inclusion. If your church doesn't have this, you can advocate for it.",
  },
  {
    icon: "🤝",
    title: "Connect with Other Autism Parents",
    text: "The isolation of autism parenting is compounded by the difficulty of attending events, maintaining friendships, and finding people who understand. Autism Speaks, local CARE groups, and church-based parent networks connect families who are carrying the same extraordinary weight.",
  },
  {
    icon: "📋",
    title: "Build a Support Team Around Yourself",
    text: "Parent burnout in autism families is epidemic. Respite care, family support workers, therapeutic day programs, and grandparent training are not luxuries — they are what make sustained, quality caregiving possible. Asking for and accepting help is part of your job.",
  },
  {
    icon: "📖",
    title: "Learn Your Child's Communication Language",
    text: "Autistic children often communicate through behavior, routine, objects, or idiosyncratic language rather than direct speech. Learning to read your child's specific communication style — with the help of speech therapists and behavioral specialists — opens a relationship that seemed inaccessible.",
  },
];

const scriptures = [
  { verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "1 Corinthians 12:22", text: "On the contrary, those parts of the body that seem to be weaker are indispensable." },
  { verse: "Matthew 18:3-5", text: "And he said: 'Truly I tell you, unless you change and become like little children, you will never enter the kingdom of heaven. Therefore, whoever takes the lowly position of this child is the greatest in the kingdom of heaven. And whoever welcomes one such child in my name welcomes me.'" },
  { verse: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'" },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out." },
];

type PCAEntry = { id: string; date: string; hard: string; win: string; prayer: string };

export default function ParentingChildWithAutismPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PCAEntry[]>([]);
  const [hard, setHard] = useState("");
  const [win, setWin] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_parentingautismchildj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!hard.trim()) return;
    const e: PCAEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), hard, win, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_parentingautismchildj_entries", JSON.stringify(next));
    setHard(""); setWin(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_parentingautismchildj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Parenting a Child with Autism</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For Christian parents navigating the grief, the love, the exhaustion, and the remarkable moments of parenting an autistic child — and for the churches learning what genuine inclusion requires.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · Autism Speaks <strong>1-888-288-4762</strong> · <a href="https://www.autismspeaks.org" style={{ color: "#fca5a5" }}>autismspeaks.org</a> · <a href="https://keyministry.org" style={{ color: "#fca5a5" }}>keyministry.org</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What was hard this week?</label>
                <textarea value={hard} onChange={e => setHard(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="The meltdown, the isolation, the grief, the exhaustion..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What was a win this week?</label>
                <textarea value={win} onChange={e => setWin(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="A connection, a milestone, a moment of joy or peace..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer for your child and yourself</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="For your child to be known, for your endurance, for the community to show up..." />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Your child's story — and yours — is worth recording.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.hard && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Hard this week</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.hard}</p></>}
                {e.win && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Win this week</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.win}</p></>}
                {e.prayer && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>A Good and Perfect Gift — Amy Julia Becker</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Amy Julia Becker on parenting a child with disability and the theological reorientation it demands — and gives.</p>
              <VideoEmbed videoId="y-DQH-M1HuM" title="A Good and Perfect Gift Amy Julia Becker" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>The Church and Autism Families</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>What genuine inclusion of autistic children and their families requires — and why churches that get this right serve their whole community better.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="The Church and Autism Families" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Same Lake Different Boat — Stephanie Hubach</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Stephanie Hubach on disability theology and what it looks like to build communities of faith that are genuinely accessible to all.</p>
              <VideoEmbed videoId="jJPVNIAFmvA" title="Same Lake Different Boat Stephanie Hubach" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Caregiver Burnout — When Love Is Not Enough</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On the exhaustion of sustained caregiving for a child with high support needs — and what genuine rest and support look like.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Caregiver Burnout When Love Is Not Enough" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
