"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Every Person Bears the Image of God — Without Qualification",
    verse: "Genesis 1:27",
    text: "\"So God created mankind in his own image, in the image of God he created them.\" The imago Dei is not contingent on neurological function, verbal ability, independence, or any measure of capability. The child who will never speak, who will need lifelong support, who experiences the world in ways the church has rarely designed for — bears the image of God completely and without condition. The theology that treats disability as a deviation from a normal image-bearer has misread the text. There is no default human.",
  },
  {
    title: "The Body of Christ Must Include Bodies Like These",
    verse: "1 Corinthians 12:22–23",
    text: "\"On the contrary, those parts of the body that seem to be weaker are indispensable, and the parts that we think are less honorable we treat with special honor.\" Paul's ecclesiology is specifically calibrated against the tendency to arrange community around the capable and honor the most impressive. The parts that seem weaker are indispensable — not tolerated, not accommodated, but necessary. A church that is not genuinely accessible to people with autism and other disabilities is not a full expression of the body of Christ.",
  },
  {
    title: "Disability Does Not Indicate Insufficient Faith",
    verse: "John 9:3",
    text: "\"'Neither this man nor his parents sinned,' said Jesus, 'but this happened so that the works of God might be displayed in him.'\" The disciples' question — whose sin caused this disability — is the ancient version of the modern questions still asked in some Christian communities: Is there a demon? Insufficient faith? Generational sin? Jesus refuses every frame that makes disability the consequence of spiritual failure. The works of God are displayed in the disability — not in its absence.",
  },
  {
    title: "Grief and Love Are Not Opposites",
    verse: "John 11:35",
    text: "\"Jesus wept.\" The Christian parent of a child with autism or significant disability often carries a grief that they are not allowed to name — because naming it sounds like rejection of the child they love. But grief and love coexist. You can love your child completely and grieve the expected life that did not come. You can celebrate who your child is and mourn what will always be hard. These are not contradictions. The God who wept at Lazarus's tomb is not troubled by parents who weep for the complexity of their lives.",
  },
  {
    title: "Rest and Sustainment Are Spiritual Practices, Not Failures",
    verse: "Matthew 11:28–29",
    text: "\"Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.\" Parents of children with significant disabilities frequently carry an exhaustion that does not end with a good night's sleep. The invitation to rest is not a metaphor for these parents. It is a direct pastoral word: you are weary and burdened in ways most people cannot understand, and the God who sees this is not demanding more performance before offering rest.",
  },
];

const voices = [
  {
    id: 1,
    name: "Amy Julia Becker",
    role: "Author, A Good and Perfect Gift",
    quote: "Having Penny changed everything I thought I knew about what makes a life valuable. She has Down syndrome. She also has more joy, more love, and more capacity for wonder than anyone I have ever met.",
    bio: "Becker's memoir about raising a daughter with Down syndrome became a landmark account of how disability reshapes a Christian parent's theology — particularly around capability, value, and what it means to receive a child as a gift.",
  },
  {
    id: 2,
    name: "Barbara J. Newman",
    role: "Author, Accessible Gospel, Inclusive Worship",
    quote: "The church that says it values all people but has no plan for including all people is not a welcoming church — it is a hypothetically welcoming church. The difference matters enormously to families like ours.",
    bio: "Newman has developed the most comprehensive practical resource for including people with disabilities in church life, including specific training, liturgy, and programming developed for congregations that want to move beyond theoretical inclusion.",
  },
  {
    id: 3,
    name: "Sandra Peoples",
    role: "Author, Unexpected Blessings; Special Needs Ministry Leader",
    quote: "Special needs parents in the church are often the most isolated people in the building. They need community not despite the exhaustion but especially because of it.",
    bio: "Peoples has combined her own experience as a special needs parent with ministry leadership to develop one of the most practical and theologically grounded approaches to caring for families navigating disability in Christian community.",
  },
  {
    id: 4,
    name: "Dr. Stephen Grcevich",
    role: "Psychiatrist, Author of Mental Health and the Church",
    quote: "Autism is one of the primary reasons families stop attending church. Not because they don't want to come — but because the church hasn't figured out how to make it possible for them to come.",
    bio: "Grcevich's research on autism, mental health, and church participation has been foundational to the movement for disability-inclusive churches, providing both the data on exclusion and the practical pathways toward inclusion.",
  },
];

const practices = [
  {
    icon: "🤝",
    title: "Find or Build a Special Needs Ministry at Your Church",
    text: "Key Ministry (keyministry.org) is the largest Christian disability ministry network and has resources for building special needs ministry in local congregations. The first step is often naming the need: how many families in your congregation are affected by disability and have never said so? Creating a known, safe place for these conversations is where inclusion begins.",
  },
  {
    icon: "😴",
    title: "Accept and Ask for Respite Care",
    text: "Respite care — someone coming in to provide care so a primary caregiver can rest — is both a practical need and a theological right. Many churches have established respite care programs as a form of ministry to families with disabilities. If yours does not, ask someone to help you access one through local disability organizations. Accepting help is not weakness; it is the community functioning as designed.",
  },
  {
    icon: "🧠",
    title: "Get an Accurate Diagnosis and Build the Right Team",
    text: "Many families spend years without an accurate diagnosis, which delays access to appropriate services. If your child is newly diagnosed or you suspect autism, seek evaluation through a developmental pediatrician or neuropsychologist. An Individualized Education Program (IEP) through your school district is a legal right in the United States. Build a team: pediatrician, speech therapist, occupational therapist, behavioral therapist as appropriate to your child's needs.",
  },
  {
    icon: "👥",
    title: "Connect with Other Special Needs Parents",
    text: "The isolation of special needs parenting is one of its most damaging features. No one understands like someone who is living the same life. Autism Society of America, local support groups, and faith-based networks like Autism and Faith (autismandfaith.com) provide peer community. Online communities through Facebook and local groups can provide connection when in-person is not feasible.",
  },
  {
    icon: "🎓",
    title: "Become an Expert on Your Child's Rights",
    text: "The Individuals with Disabilities Education Act (IDEA) guarantees a free, appropriate public education in the least restrictive environment. Know what your child's IEP says, attend every meeting, and learn to advocate within the system. Disability rights organizations and parent advocacy groups can provide training and support. Many parents discover that knowing the law changes what they are able to secure for their children.",
  },
  {
    icon: "📆",
    title: "Plan for the Future — Across the Lifespan",
    text: "For families with children who will need lifelong support, future planning is essential: ABLE accounts (tax-advantaged savings for people with disabilities), special needs trusts, guardianship or supported decision-making, housing, and supported employment. An attorney who specializes in special needs planning can help create a legal framework that protects your child across your lifetime and beyond.",
  },
];

const scriptures = [
  { verse: "Psalm 139:14", text: "\"I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.\"" },
  { verse: "1 Corinthians 12:22", text: "\"Those parts of the body that seem to be weaker are indispensable.\"" },
  { verse: "Isaiah 40:11", text: "\"He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart; he gently leads those that have young.\"" },
  { verse: "Matthew 18:3", text: "\"Truly I tell you, unless you change and become like little children, you will never enter the kingdom of heaven.\"" },
  { verse: "Romans 8:28", text: "\"And we know that in all things God works for the good of those who love him, who have been called according to his purpose.\"" },
  { verse: "2 Corinthians 12:9", text: "\"My grace is sufficient for you, for my power is made perfect in weakness.\"" },
];

type SpecialNeedsEntry = {
  id: string;
  date: string;
  proud: string;
  hard: string;
  prayer: string;
};

export default function AutismSpecialNeedsChristianParentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SpecialNeedsEntry[]>([]);
  const [proud, setProud] = useState("");
  const [hard, setHard] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_autismspecialneedsparent_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!proud.trim()) return;
    const entry: SpecialNeedsEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      proud,
      hard,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_autismspecialneedsparent_entries", JSON.stringify(updated));
    setProud(""); setHard(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_autismspecialneedsparent_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>💙</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Autism, Special Needs & Christian Parenting
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For Christian parents raising children with autism, developmental disabilities, or other significant needs — theology that sees your child completely, community that sees you, and practical support for the marathon of special needs parenting.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>Autism Society:</strong> 1-800-328-8476 | <strong>Key Ministry:</strong> keyministry.org
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
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
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
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
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${GREEN}` }}>
                <div style={{ color: GREEN, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Something about your child that made you proud or filled you with wonder this week:</label>
                <textarea value={proud} onChange={e => setProud(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What has been hardest — what do you most need right now?</label>
                <textarea value={hard} onChange={e => setHard(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — for your child, for yourself, for the community you need:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.proud && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Proud:</strong> {e.proud}</p>}
                {e.hard && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Hard:</strong> {e.hard}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Gb9L7cxHgck" title="Amy Julia Becker — A Good and Perfect Gift: Raising a Child with Down Syndrome" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Amy Julia Becker: A Good and Perfect Gift — Raising a Child with Down Syndrome</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Becker on how her daughter with Down syndrome reshaped her theology of value, capability, and what it means to receive a life as a gift</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="5Lqm-EFV4O4" title="Building an Inclusive Church for People with Autism and Disabilities" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Building an Inclusive Church for People with Autism and Disabilities</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical guidance for congregations wanting to become genuinely inclusive for families affected by autism and developmental disabilities</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="nBTatXlJVNQ" title="Special Needs Parenting — The Exhaustion No One Talks About" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Special Needs Parenting: The Exhaustion No One Talks About</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Honest conversation about the unique exhaustion, grief, and love of raising a child with significant disabilities — and what community care for these families can look like</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="VnHa4JrQJqk" title="Disability Theology — What the Church Has Missed About the Image of God" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Disability Theology: What the Church Has Missed About the Image of God</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Theological exploration of how disability challenges and deepens Christian understanding of the imago Dei and the body of Christ</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
