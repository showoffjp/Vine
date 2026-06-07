"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Grief of God Over Suffering Children",
    verse: "Matthew 18:3-5",
    text: "\"Truly, I say to you, unless you turn and become like children, you will never enter the kingdom of heaven... Whoever receives one such child in my name receives me.\" Jesus had a particular tenderness toward children — he rebuked those who would keep them away, he blessed them, he raised them. The suffering of your child is not invisible to God. The grief in you is a reflection of the grief in God — the God who sent his own Son into suffering and did not spare him."
  },
  {
    title: "When You Cannot Protect Your Own Child",
    verse: "Psalm 22:9-10",
    text: "\"Yet you are he who took me from the womb; you made me trust you at my mother's breast. On you was I cast from my birth, and from my mother's womb you have been my God.\" The Psalmist traces God's involvement before birth. The child you cannot protect from cancer was known by God before you knew them, and is held by God even in what you cannot stop. Your helplessness does not mean God's absence."
  },
  {
    title: "The Mystery of Innocent Suffering",
    verse: "Job 40:4",
    text: "\"Behold, I am of small account; what shall I answer you? I lay my hand on my mouth.\" The book of Job refuses to explain innocent suffering. God's answer to Job is not an explanation — it is a revelation of divine presence and incomprehensible majesty. We do not have an answer for childhood cancer. The tradition's most honest response is Job's: to cover our mouths and sit in the presence of a God who is both mysterious and near."
  },
  {
    title: "Christ in the Hospital Room",
    verse: "Matthew 25:36",
    text: "\"I was sick and you visited me.\" The presence of Jesus Christ with the sick is not metaphorical in Christian theology. The God who became flesh in a particular body knows what a body's suffering feels like. Christ is present in your child's hospital room — not as comfort merchandise but as a real presence with those who suffer."
  },
  {
    title: "Hope That Does Not Require a Certain Outcome",
    verse: "Romans 8:18",
    text: "\"For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.\" The Christian hope does not require that your child be healed to be true. It requires that what comes after is something beyond suffering — and that promise is for your child as it is for you. This is not easy to believe. It may not feel true. But it is the claim of the resurrection."
  }
];

const voices = [
  {
    id: "v1", name: "Kate Bowler", role: "Author, 'Everything Happens for a Reason (And Other Lies I've Loved)'",
    quote: "There are no words for this kind of suffering. And the people who offer words too quickly — who need you to be okay — are often the ones least able to sit with you.",
    bio: "Kate Bowler, who was diagnosed with stage IV cancer at age 35, has become one of the most important pastoral voices on suffering, medicine, and faith. Her work is not about childhood cancer specifically but speaks with searing honesty to what it means to love someone through a terrible medical reality."
  },
  {
    id: "v2", name: "Joni Tada", role: "Founder, Joni and Friends",
    quote: "God permits what he hates in order to accomplish what he loves. That is the mystery of Calvary, and it is the mystery of every hospital room.",
    bio: "Joni Tada, who has lived with quadriplegia since a diving accident at 17, has spent decades helping Christians find meaning in suffering that has no clean explanation. Her pastoral theology of suffering — tested by her own decades of limitation and pain — speaks with authority to parents of seriously ill children."
  },
  {
    id: "v3", name: "Jerry Sittser", role: "Author, 'A Grace Disguised'",
    quote: "The soul can expand through suffering — not because suffering is good, but because the love and presence of God are larger than suffering, and we sometimes discover that only when everything else is stripped away.",
    bio: "Jerry Sittser lost his wife, mother, and daughter in a single car accident. His book 'A Grace Disguised' is the most honest and theologically profound book on catastrophic loss written from within the Christian tradition. It speaks to every parent facing the unthinkable."
  },
  {
    id: "v4", name: "Rachel Tearle", role: "Pediatric Oncology Chaplain",
    quote: "In the pediatric oncology ward, I have never met a parent who needed more theology. I have met many who needed someone to sit with them in silence and not leave.",
    bio: "Pediatric oncology chaplains — who work daily with dying children and their parents — represent a form of pastoral wisdom that few others possess. Their primary gift is not answers but presence: the willingness to remain in the room when there is nothing to say."
  }
];

const practices = [
  {
    icon: "🏥",
    title: "Accept Every Offered Form of Help",
    text: "Parents of children with cancer are often reluctant to accept help out of pride or the feeling that they should be managing. Accept meals, rides, errands, financial support, childcare for siblings. The people who want to help need to help as much as you need them to. Let them in."
  },
  {
    icon: "👫",
    title: "Protect the Marriage or Partnership",
    text: "Childhood cancer destroys marriages at alarming rates. Grief isolates. Fear creates distance. Exhaustion eliminates intimacy. Deliberately invest in your relationship with your spouse or partner — even small acts of connection, even ten minutes of honest conversation per day. Seek couples counseling proactively, not when the marriage is in crisis."
  },
  {
    icon: "🧒",
    title: "Attend to Your Other Children",
    text: "Siblings of sick children suffer in silence — overlooked, frightened, and often resentful. Protect them with regular attention, honest age-appropriate communication about what is happening, and if possible a mentor or counselor who is specifically theirs and not swallowed by the crisis."
  },
  {
    icon: "📿",
    title: "Honest Prayer — Including Lament",
    text: "You are allowed to be angry at God. The Psalms model rage, accusation, and grief directed at God as acts of faith. Genuine prayer in this season may look nothing like devotional prayer — it may be screaming, weeping, or silence. All of it is received."
  },
  {
    icon: "🫂",
    title: "Connect With Other Parents",
    text: "Parents who have been through pediatric cancer — regardless of outcome — provide a form of companionship that no one else can. Organizations like Alex's Lemonade Stand Foundation (alexslemonade.org) and the National Children's Cancer Society connect families with others who understand."
  },
  {
    icon: "🧠",
    title: "Your Own Mental Health",
    text: "Parental PTSD, depression, and anxiety are nearly universal in families dealing with pediatric cancer. Get your own therapist — separate from the family counselor. You cannot sustain your child through this if you are depleted. Your mental health is not a luxury; it is a necessity for your child's care."
  }
];

const scriptures = [
  { verse: "Psalm 22:9-10", text: "Yet you are he who took me from the womb; you made me trust you at my mother's breast. On you was I cast from my birth, and from my mother's womb you have been my God." },
  { verse: "Matthew 18:5", text: "Whoever receives one such child in my name receives me." },
  { verse: "Isaiah 40:11", text: "He will tend his flock like a shepherd; he will gather the lambs in his arms; he will carry them in his bosom, and gently lead those that are with young." },
  { verse: "Romans 8:18", text: "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us." },
  { verse: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away." },
  { verse: "Psalm 46:1", text: "God is our refuge and strength, a very present help in trouble." }
];

type CcEntry = { id: string; date: string; feeling: string; need: string; hold: string };

export default function ChildhoodCancerParentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CcEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [need, setNeed] = useState("");
  const [hold, setHold] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_childhoodcancerparent_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: CcEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling, need, hold };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_childhoodcancerparent_entries", JSON.stringify(updated));
    setFeeling(""); setNeed(""); setHold("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_childhoodcancerparent_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🎗️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>Parenting a Child With Cancer</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For the parent sitting in a hospital room, making impossible decisions, holding a child in pain, and trying to find God somewhere in the hardest thing a parent can face.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; Alex&apos;s Lemonade Stand: alexslemonade.org &bull; National Children&apos;s Cancer Society: thenccs.org &bull; CancerCare: cancercare.org &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Parent&apos;s Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I feeling today that I haven&apos;t said out loud?</label>
                  <textarea value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What do I need that I haven&apos;t asked for?</label>
                  <textarea value={need} onChange={e => setNeed(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I still holding onto about God?</label>
                  <textarea value={hold} onChange={e => setHold(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Feeling:</strong> {e.feeling}</p>}
                {e.need && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Need:</strong> {e.need}</p>}
                {e.hold && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}><strong>Holding:</strong> {e.hold}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Kate Bowler: Everything Happens</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Kate Bowler on being diagnosed with cancer and the platitudes people offer when suffering is real</p>
              <VideoEmbed videoId="y-DQH-M1HuM" title="Kate Bowler: Everything Happens" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>A Grace Disguised: Jerry Sittser</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Jerry Sittser on catastrophic loss and the God who meets us in the middle of it</p>
              <VideoEmbed videoId="SqGRnlXplx0" title="A Grace Disguised: Jerry Sittser" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>The Problem of Suffering</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Joni Tada on innocent suffering and what God permits for reasons we cannot see</p>
              <VideoEmbed videoId="jJPVNIAFmvA" title="The Problem of Suffering" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Lament and Hope</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>How honest grief and the hope of resurrection can coexist — especially when a child is suffering</p>
              <VideoEmbed videoId="oNpTha80yyE" title="Lament and Hope" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
