"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "This Child Reflects God's Image",
    verse: "Genesis 1:27",
    text: "So God created mankind in his own image, in the image of God he created them. The imago Dei is not defined by communication style, social fluency, or neurotypical development. Your child — however they process the world, however they communicate, however their mind is structured — reflects the image of God. That image is not partial, not approximate, not aspirational. It is fully present.",
  },
  {
    title: "God Created This Mind Intentionally",
    verse: "Exodus 4:11",
    text: "The LORD said to him, 'Who gave human beings their mouths? Who makes them deaf or mute? Who gives them sight or makes them blind? Is it not I, the LORD?' This is one of the most confronting texts for parents of children with disabilities. God is not surprised by your child. He is not catching up to a diagnosis. He made this specific mind, in this specific body, for specific purposes.",
  },
  {
    title: "The Parent's Exhaustion Is Holy",
    verse: "2 Corinthians 4:7–9",
    text: "But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us. We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed. Paul describes the exact experience of many autism parents: pressed, perplexed, struck down — and yet held.",
  },
  {
    title: "Every Body Is Welcome at the Table",
    verse: "Luke 14:21",
    text: "The servant came back and reported this to his master. Then the owner of the house became angry and ordered his servant, 'Go out quickly into the streets and alleys of the town and bring in the poor, the crippled, the blind and the lame.' Jesus made explicit that the feast is not for the conventionally welcome. It is for those the invitation systems normally exclude.",
  },
  {
    title: "Grief and Love Coexist Without Contradiction",
    verse: "Lamentations 3:32–33",
    text: "Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone. You can grieve the diagnosis, the lost expectations, the hard moments — and love your child completely and unconditionally. These are not contradictions. They are the full range of love in a fallen world.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Amy Julia Becker",
    role: "Author, parent of a daughter with Down syndrome",
    quote: "My daughter Penny does not experience life the way I expected. But she has taught me things about joy, about presence, about what matters — that I could not have learned otherwise. She has not been a limitation on my life. She has been an expansion of it.",
    bio: "Amy Julia Becker (A Good and Perfect Gift, White Picket Fences) writes about parenting a daughter with Down syndrome from a deeply Christian perspective. Her theology of disability — that differently-made people give the body of Christ access to things it could not otherwise know — is applicable across neurodevelopmental differences.",
  },
  {
    id: "v2",
    name: "Sandra Peoples",
    role: "Author, disability advocate, autism mom",
    quote: "The church often doesn't know what to do with families like mine. They want to include us but don't know how. My job has become helping them learn — and my hope is that we stop waiting to be invited and start showing up as teachers.",
    bio: "Sandra Peoples (Unexpected Blessings, Why Can't I Fix It?) writes from inside life as an autism parent and disability advocate. She has become one of the most important voices helping churches become genuinely inclusive of families who are often invisible.",
  },
  {
    id: "v3",
    name: "Joni Tada",
    role: "Disability advocate, author",
    quote: "The disabled body — the body that does not function by typical standards — is not a lesser body. In a culture that worships ability, the disabled person is a prophet, showing us that our worth is not in our function.",
    bio: "Joni Eareckson Tada (Joni and Friends, A Spectacle of Glory) has lived with quadriplegia since age 17 and has spent decades building the most significant Christian disability ministry in the world. Her theology of disability — as prophetic witness to a world that worships ability — gives parents of autistic and disabled children a framework that honors rather than diminishes their child.",
  },
  {
    id: "v4",
    name: "Kathleen Deyer Bolduc",
    role: "Author, Joel's Journey; parent of an autistic son",
    quote: "Joel has never told me he loves me with words. He tells me with his presence, his laughter, his specific ways of engaging. I had to learn his language. And learning his language taught me things about love that words could not have conveyed.",
    bio: "Kathleen Deyer Bolduc (Joel's Journey, Autism and the God Connection) writes from decades of parenting her autistic son Joel. Her memoir and theological reflection helps parents understand that a child who communicates differently is not a child who does not communicate — and that learning to hear your child is a form of love.",
  },
];

const practices = [
  {
    icon: "🧠",
    title: "Learn Your Child's Specific Profile",
    text: "Autism is a spectrum — your child's specific profile of strengths, challenges, sensory sensitivities, and communication style is unique. Get a comprehensive developmental evaluation. Understand your child's specific sensory processing, social cognition, executive function, and communication profiles. No two autism profiles are the same.",
  },
  {
    icon: "⛪",
    title: "Ask Your Church to Become Genuinely Inclusive",
    text: "Genuine inclusion requires: a sensory-friendly worship option, trained respite volunteers who can support your family, a buddy system for children with social communication differences, flexible attendance expectations, and a culture where your family does not feel like a problem. Joni and Friends and Key Ministry provide church training resources.",
  },
  {
    icon: "💬",
    title: "Connect with Other Autism Families",
    text: "The isolation of autism parenting is profound — especially in faith communities that cannot hold it. The Autism Society of America, local autism parent groups, and the Exceptional Families podcast community connect you with people who understand without explanation. Find your people.",
  },
  {
    icon: "🛑",
    title: "Recognize and Name Caregiver Burnout",
    text: "Autism parenting involves sustained high-demand caregiving that produces real burnout. Recognize the signs: declining empathy, resentment toward your child, physical symptoms, withdrawal, hopelessness. Take them seriously. Access respite, therapy, and support before the crisis, not after it.",
  },
  {
    icon: "🙏",
    title: "Grieve the Expectations You Had to Release",
    text: "Grief at a diagnosis is not rejection of your child. It is mourning the expectations you had — for how childhood would go, for the future you imagined. This grief is real and deserves space. It does not compete with your love. Let yourself feel both.",
  },
  {
    icon: "🌟",
    title: "Celebrate What Your Child Can Do",
    text: "Autism parenting is often measured against neurotypical milestones. Build a different measurement system: what has your child learned this month? What joy have they expressed? What unique way have they engaged with the world? A different developmental trajectory is not a failed one.",
  },
];

const scriptures = [
  { verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
  { verse: "Exodus 4:11", text: "The LORD said to him, 'Who gave human beings their mouths? Who makes them deaf or mute? Who gives them sight or makes them blind? Is it not I, the LORD?'" },
  { verse: "Luke 14:21", text: "The servant came back and reported this to his master. Then the owner of the house became angry and ordered his servant, 'Go out quickly into the streets and alleys of the town and bring in the poor, the crippled, the blind and the lame.'" },
  { verse: "2 Corinthians 4:7–9", text: "But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us. We are hard pressed on every side, but not crushed; perplexed, but not in despair." },
  { verse: "Matthew 25:40", text: "The King will reply, 'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.'" },
  { verse: "1 Corinthians 12:22–23", text: "On the contrary, those parts of the body that seem to be weaker are indispensable, and the parts that we think are less honorable we treat with special honor." },
];

type AutismEntry = { id: string; date: string; celebrated: string; grief: string; need: string };

export default function AutismParentFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AutismEntry[]>([]);
  const [celebrated, setCelebrated] = useState("");
  const [grief, setGrief] = useState("");
  const [need, setNeed] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_autismparentj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!celebrated.trim()) return;
    const entry: AutismEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      celebrated,
      grief,
      need,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_autismparentj_entries", JSON.stringify(updated));
    setCelebrated(""); setGrief(""); setNeed("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_autismparentj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Disability & Faith</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Parenting an Autistic Child: Faith and the Long Road
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For parents of autistic children navigating diagnosis, IEP meetings, meltdowns, sensory challenges, church exclusion, exhaustion, grief, and the daily work of learning to love a child whose mind is beautifully, specifically, irreducibly different.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>Crisis and support resources</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline &nbsp;·&nbsp; Joni and Friends: <span style={{ color: PURPLE }}>joniandfriends.org</span> &nbsp;·&nbsp; Key Ministry: <span style={{ color: PURPLE }}>keyministry.org</span> &nbsp;·&nbsp; Autism Society: <span style={{ color: PURPLE }}>autismsociety.org</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Journal Entry</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What did your child do this week that you want to celebrate?</label>
                <textarea value={celebrated} onChange={(e) => setCelebrated(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What grief needs space right now — name it specifically.</label>
                <textarea value={grief} onChange={(e) => setGrief(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What do you need from your church or community that you haven&apos;t asked for?</label>
                <textarea value={need} onChange={(e) => setNeed(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.celebrated && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Celebrated:</strong> {e.celebrated}</p>}
                {e.grief && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Grief:</strong> {e.grief}</p>}
                {e.need && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Need:</strong> {e.need}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "jJPVNIAFmvA", title: "Faith and Disability: A Theological Conversation", channel: "Joni and Friends", description: "Joni Tada and guests on the theological significance of disability — the imago Dei in differently-made minds, the prophetic witness of disabled persons, and what the church loses by not including them." },
              { videoId: "m2uDNE9kcSE", title: "Autism and the Church: Becoming Genuinely Inclusive", channel: "Key Ministry", description: "Practical guidance for churches wanting to become genuinely inclusive of autistic children and their families — what inclusion actually requires beyond good intentions." },
              { videoId: "sJSFmO6gGlo", title: "Caregiver Burnout in Disability Families", channel: "Joni and Friends", description: "Compassion fatigue in autism and disability parenting — naming the signs, finding sustainable rhythms, and what genuine support looks like." },
              { videoId: "7TBHqMqBmBo", title: "Lament and Disability Parenting", channel: "Soong-Chan Rah", description: "Biblical lament as the essential language for disability parents navigating grief, exhaustion, and the gap between the world as it is and the world as it should be." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
