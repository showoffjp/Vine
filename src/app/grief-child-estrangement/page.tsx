"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Father Watched the Road",
    verse: "Luke 15:20",
    text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him. The prodigal father did not chase his son. But he also did not stop watching for his return. This posture — released but not closed, grieving but not turned away — is the theological shape of parental love in estrangement.",
  },
  {
    title: "Love That Cannot Control Is Still Love",
    verse: "1 Corinthians 13:4–5",
    text: "Love is patient, love is kind... it is not self-seeking. The love that respects a child's agency — even when that agency produces choices that devastate you — is one of the most profound forms of love. You cannot force reconciliation, but you can continue to embody availability, prayer, and an open door.",
  },
  {
    title: "God Knows Estrangement from His Children",
    verse: "Isaiah 1:2",
    text: "I reared children and brought them up, but they have rebelled against me. God himself knows the grief of children who turn away. Your suffering is not foreign to the Father — it is, in a profound sense, shared by him. The one who grieves your child's departure understands parental estrangement from the inside.",
  },
  {
    title: "Lament Is the Honest Language for This Pain",
    verse: "Psalm 6:6–7",
    text: "I am worn out from my groaning. All night long I flood my bed with weeping and drench my couch with tears. My eyes grow weak with sorrow. The grief of estrangement is cumulative and relentless — birthdays, holidays, milestones that arrive without contact. The psalmist's all-night weeping gives you permission to feel the full weight of it.",
  },
  {
    title: "Some Seeds Fall on Ground That Takes Long to Soften",
    verse: "Ecclesiastes 11:6",
    text: "Sow your seed in the morning, and at evening let your hands not be idle, for you do not know which will succeed, whether this or that, or whether both will do equally well. You do not know what your prayers, your letters, your prayers of release are doing in your child's life. Some seeds take decades to germinate. Continue sowing.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Sheri McGregor",
    role: "Author, Done with the Crying",
    quote: "Estrangement by a child is one of the most socially invisible griefs. Society does not know how to hold it, and sometimes implies that you must have caused it. Learning to find your own footing outside of that implication is a form of survival.",
    bio: "Sheri McGregor (Done with the Crying) is the most widely-read author on parental estrangement. Her work — rooted in her own experience and extensive research — normalizes the grief, challenges the cultural assumption that parents are always to blame, and offers a path toward a meaningful life that is not organized entirely around a child who has cut contact.",
  },
  {
    id: "v2",
    name: "Paul David Tripp",
    role: "Christian counselor, author",
    quote: "Sometimes the most important thing a parent can do is pray and open the door. Not control, not strategize, not force — but pray and wait. God is present in your child's life even when your child has shut you out.",
    bio: "Paul David Tripp (Parenting: 14 Gospel Principles, New Morning Mercies) frames Christian parenting within a theological realism that acknowledges parental limitations, child autonomy, and the ongoing work of God in lives we cannot access. His perspective provides spiritual grounding for parents in long-term estrangement.",
  },
  {
    id: "v3",
    name: "Harriet Lerner",
    role: "Psychologist, relationship author",
    quote: "There are two questions worth separating: What do I owe my child? And what do my child owe me? When estrangement happens, both questions need honest examination — not to assign blame, but to understand what is actually happening.",
    bio: "Harriet Lerner (The Dance of Anger, Why Won't You Apologize?) works extensively with family relational systems and estrangement. Her framework for understanding both the parent's and the adult child's perspective helps parents avoid both self-blame and the denial of their real role in relationship patterns.",
  },
  {
    id: "v4",
    name: "Curt Thompson",
    role: "Christian psychiatrist, author",
    quote: "The story you tell yourself about your child's estrangement will either imprison you or free you. It will either be the whole story — shame, failure, deserved — or it will make room for a God who is not finished writing.",
    bio: "Curt Thompson (The Soul of Shame, Anatomy of the Soul) uses interpersonal neurobiology to help people understand why shame narratives take hold and how they can be interrupted. His work helps estranged parents notice the stories they are telling themselves and begin to hold them more lightly.",
  },
];

const practices = [
  {
    icon: "📖",
    title: "Reread Luke 15 Slowly and Often",
    text: "The prodigal parable is not primarily about the returning son. It is about the father who waits. Read it as your story — not his. Notice the father's posture: he does not chase, he does not send money, but he does not close the door and he does not stop watching the road. Let this become the shape of your prayer.",
  },
  {
    icon: "💬",
    title: "Find Other Estranged Parents",
    text: "The social isolation of parental estrangement is compounded by shame and by the lack of visible community. Find others: online communities like estrangedparents.com, Sheri McGregor's forums, or grief groups that explicitly include estrangement. Being seen by people who understand changes the interior experience profoundly.",
  },
  {
    icon: "🧠",
    title: "Get Honest Feedback on Your Part",
    text: "Most estrangements involve real relational wounds — often from both directions. Getting honest feedback from a therapist or trusted friend about what your child might have experienced from you is not self-flagellation — it is the possibility of genuine growth, and sometimes the thing that makes a future reconciliation more possible.",
  },
  {
    icon: "📬",
    title: "Write Without Sending — Or Write Briefly and Send",
    text: "Some therapists recommend regular brief notes to an estranged child: brief, without defensiveness, without pressure — simply maintaining a thread of contact. Others recommend unsent letters as a grief practice. Both serve real purposes. Choose what fits your situation and stage.",
  },
  {
    icon: "🌱",
    title: "Rebuild a Life That Is Not Organized Around Waiting",
    text: "A life organized entirely around an estranged child is a life on hold — and it does not help your child, who may feel the weight of your waiting. Rebuild relationships, invest in work or ministry, find meaning and joy. This is not giving up — it is living the life God gave you while remaining available for reconciliation.",
  },
  {
    icon: "🕯️",
    title: "Pray the Specific Prayers",
    text: "Pray for your child's flourishing — not for their return to you. Pray for their healing, their safety, their encounter with God, their capacity for relationships. The prayer that is for them, not for you, is the most honest love you can offer across distance.",
  },
];

const scriptures = [
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "Isaiah 1:2", text: "I reared children and brought them up, but they have rebelled against me." },
  { verse: "Psalm 6:6–7", text: "I am worn out from my groaning. All night long I flood my bed with weeping and drench my couch with tears. My eyes grow weak with sorrow, they fail because of all my foes." },
  { verse: "Lamentations 3:31–33", text: "For no one is cast off by the Lord forever. Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone." },
  { verse: "Jeremiah 31:16–17", text: "Restrain your voice from weeping and your eyes from tears, for your work will be rewarded, declares the LORD. They will return from the land of the enemy. So there is hope for your descendants." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
];

type EstrangeEntry = { id: string; date: string; grief: string; prayer: string; step: string };

export default function GriefChildEstrangementPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<EstrangeEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [prayer, setPrayer] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_griefchildestrangej_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: EstrangeEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      grief,
      prayer,
      step,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_griefchildestrangej_entries", JSON.stringify(updated));
    setGrief(""); setPrayer(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_griefchildestrangej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Parental Grief</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Grieving an Estranged Child
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For parents whose adult child has cut off contact — voluntarily, suddenly, or gradually over years. The grief is real, often invisible, and socially unsupported. You are not alone, and you are not required to have a simple answer for what happened.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are in crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; GriefShare: <span style={{ color: PURPLE }}>griefshare.org</span> &nbsp;·&nbsp; Crisis Text Line: text HOME to 741741
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
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What grief about your child is heaviest today?</label>
                <textarea value={grief} onChange={(e) => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Pray for your child&apos;s flourishing — write it out.</label>
                <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>One step toward rebuilding your own life this week.</label>
                <textarea value={step} onChange={(e) => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.grief && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Grief:</strong> {e.grief}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Prayer:</strong> {e.prayer}</p>}
                {e.step && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Step:</strong> {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "oNpTha80yyE", title: "Grief That Others Cannot See", channel: "GriefShare", description: "Addresses disenfranchised grief — losses others cannot see or validate — including adult child estrangement. Normalizes the invisibility of this grief and offers community." },
              { videoId: "4Eg_di-O8nM", title: "When God Feels Silent", channel: "Ravi Zacharias International", description: "Theological reflection on divine silence in protracted suffering — applicable to parents who pray for reconciliation that does not come, year after year." },
              { videoId: "mC-zw0zCCtg", title: "Trusting God in What You Cannot Control", channel: "Priscilla Shirer", description: "Shirer addresses the spiritual discipline of releasing what is not ours to control — directly applicable to parental estrangement, where the outcome is genuinely in another person's hands." },
              { videoId: "7TBHqMqBmBo", title: "Lament as Spiritual Practice", channel: "Soong-Chan Rah", description: "Biblical foundation for lament — giving language to grief that the church has not learned to hold. Estranged parents deserve liturgical space for a grief that is real and ongoing." },
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
