"use client";
import { useState } from "react";
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
    title: "The Particular Grief of Addiction Loss",
    body: "When a child dies of overdose, the grief is unlike most other forms of loss. It arrives already entangled with years of fear, with the exhaustion of loving someone in active addiction, with a thousand moments of hope and devastation, and with a cultural stigma that can silence grief before it has a chance to breathe. Many parents find that they cannot grieve publicly as they would for other deaths. The theology they need is one that can hold this complex knot of love, fear, relief, shame, and sorrow — all at once.",
  },
  {
    title: "Lament That Holds All the Contradictions",
    body: "The psalms of lament are capacious enough to hold the contradictions of overdose grief. Psalm 31 voices both trust and terror. Psalm 22 asks 'Why have you forsaken me?' and ends in praise — but not quickly, and not without the full weight of anguish in between. There is no Christian requirement to resolve your grief into a clean spiritual narrative. The contradictions — you loved them and were exhausted by them; you wanted them to live and feared each morning's news; you feel relief and then horror at feeling relief — all belong in the presence of God.",
  },
  {
    title: "The Sin That Was Not Yours",
    body: "Addiction is a disease — shaped by genetics, trauma, neurobiology, and choice — and not entirely the parent's failure. Ezekiel 18 establishes the principle of individual moral accountability: children do not bear the guilt of parents, and parents do not bear the guilt of children for their own choices. This does not prevent grief. But it does begin to dismantle the crushing guilt that many parents carry: 'I should have done something different. I could have prevented this.' Many parents could not have. The disease was real and powerful.",
  },
  {
    title: "Where Your Child Is Now: Theological Honesty",
    body: "Parents of children who died in addiction sometimes ask the hardest theological question: Where is my child? Was their life — so compromised by addiction — enough for God? Christian theology of grace holds that God's mercy is not calibrated to human performance, including the performance of sobriety. The thief on the cross, the prodigal's welcome, the father who runs before the son can begin his prepared speech — all testify to a God whose arms are open in the last moment as much as the first. Your child's life belonged to God. So does your grief.",
  },
  {
    title: "The Community That Is Missing",
    body: "Parents who lose children to overdose often find that their community does not know how to respond. Stigma around addiction mutes condolences. Church communities may not know how to sit with the particular grief of a death that was not sudden, not innocent of long suffering, not uncomplicated by years of anguish. The Christian community is called to bear one another's burdens (Galatians 6:2) — and this grief is one of the heaviest any parent can carry. You deserve to be surrounded by people who will not minimize or explain away what you have lost.",
  },
];

const voices = [
  {
    name: "Nic Sheff",
    role: "Author, Tweak; son who survived addiction",
    quote: "My parents never stopped loving me. Even at my worst. Even when I was unrecognizable. That love was the one rope I had when everything else was gone.",
  },
  {
    name: "Joanne Peterson",
    role: "Founder, Learn to Cope; mother of a son who died of overdose",
    quote: "After he died, I realized that the grief I carried was the same grief thousands of other parents were carrying alone, in shame. That was when I knew — we had to find each other. This grief is too heavy to carry without community.",
  },
  {
    name: "Nicholas Wolterstorff",
    role: "Theologian; author of Lament for a Son",
    quote: "I shall look at the world through tears. Perhaps I shall see things that dry-eyed I could not see. The tears of grief are not the opposite of faith. They are faith, in one of its most honest forms.",
  },
  {
    name: "Beth Moore",
    role: "Author and speaker",
    quote: "God is not surprised by the death of your child. He was there. He received them. And He receives you — all of you, including the grief, the guilt, the rage, and the love.",
  },
];

const practices = [
  {
    title: "Find Grief Support Specific to Addiction Loss",
    body: "General grief support groups are helpful but often do not address the specific dimensions of overdose loss: the stigma, the complexity of loving someone in active addiction, the relief-grief tangle. Organizations like Learn to Cope, Grief Recovery After Substance Passing (GRASP), and many hospice-based programs offer groups specifically for families who have lost loved ones to addiction. Attend one.",
  },
  {
    title: "Name the Complicated Feelings",
    body: "With a grief counselor or trusted pastor, name all the feelings — including the ones that feel shameful: relief that the phone won't ring at 3am, anger at your child for dying, guilt about the relief, love and exhaustion together. These are not spiritually aberrant responses. They are the natural result of years of loving someone in active addiction. They deserve to be named, not suppressed.",
  },
  {
    title: "Resist the Pressure to Explain or Justify",
    body: "Well-meaning people will offer explanations for your child's death — theological, moral, psychological — that may or may not fit. You are not required to adopt any of them. You are allowed to simply grieve without a tidy narrative. The explanation can wait. The grief cannot.",
  },
  {
    title: "Address the Stigma Directly",
    body: "Consider telling the truth about how your child died — to your community, to your church, to your family. This is your choice, and there are situations where it is not safe or appropriate. But many parents who have spoken openly find that the stigma shrinks when confronted with a real face, a real name, a real life. Destigmatization happens through stories. Your story, told, saves other families.",
  },
  {
    title: "Grieve as Long as You Need To",
    body: "There is no timeline for grief from a child's death, and the grief of an overdose loss is compounded by years of anticipatory grief, trauma from loving someone in addiction, and social isolation. Be patient with yourself. Some parents find that the first year is numb and the second year is the hardest. Some find the opposite. There is no correct sequencing. Seek ongoing support rather than a fixed endpoint.",
  },
  {
    title: "Consider Advocacy as Part of Healing",
    body: "Many parents who have lost children to overdose find profound meaning in advocacy: speaking publicly, supporting addiction recovery programs, lobbying for harm reduction policy, or simply sitting with another family in their first days of grief. This is not a prescription — some parents cannot, and that is entirely right. But for those who find it possible, turning grief into purpose has been a source of genuine healing for many.",
  },
];

const scriptures = [
  { ref: "2 Samuel 12:23", text: "But now that he is dead, why should I go on fasting? Can I bring him back again? I will go to him, but he will not return to me." },
  { ref: "Psalm 31:9-10", text: "Be merciful to me, Lord, for I am in distress; my eyes grow weak with sorrow, my soul and body with grief. My life is consumed by anguish and my years by groaning." },
  { ref: "John 11:35", text: "Jesus wept." },
  { ref: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { ref: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { ref: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

const videos = [
  { videoId: "t-S2KQVJ5ZY", title: "Grieving a Child Lost to Overdose — Parent Stories" },
  { videoId: "fLH6iQjEVUo", title: "GRASP: Grief Recovery After Substance Passing" },
  { videoId: "y1gHDtF78qE", title: "Faith After Your Child Dies of Addiction" },
  { videoId: "3DVIlS7UMSM", title: "Lament for a Son — Nicholas Wolterstorff on Grief" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_overdoselosschild_entries";
interface JournalEntry { id: string; date: string; memory: string; contradiction: string; receive: string; }

export default function OverdoseDeathLossPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [form, setForm] = useState({ memory: "", contradiction: "", receive: "" });
  const [saved, setSaved] = useState(false);

  function saveEntry() {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      memory: form.memory,
      contradiction: form.contradiction,
      receive: form.receive,
    };
    const updated = [entry, ...entries].slice(0, 30);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setForm({ memory: "", contradiction: "", receive: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Pastoral Care</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          When Your Child Dies of Overdose: Faith for Grieving Parents
        </h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          For Christian parents who have lost a child to drug or alcohol overdose — holding the complicated grief, breaking through stigma, and finding a faith large enough for loss this heavy.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: TEXT, cursor: "pointer", fontSize: "0.9rem",
            }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: PURPLE, marginBottom: "0.75rem" }}>{item.title}</h2>
                <p style={{ color: TEXT, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ fontWeight: 700, color: PURPLE }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: "0.875rem" }}>{v.role}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.75 }}>{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700, color: PURPLE, marginBottom: "0.5rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, color: PURPLE, marginBottom: "1.25rem" }}>Private Reflection</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What is a memory of your child you want to hold today?</label>
                <textarea value={form.memory} onChange={(e) => setForm({ ...form, memory: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What contradictory feelings are you carrying that need to be named?</label>
                <textarea value={form.contradiction} onChange={(e) => setForm({ ...form, contradiction: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What would you receive from God today if you could?</label>
                <textarea value={form.receive} onChange={(e) => setForm({ ...form, receive: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: 700 }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.875rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.875rem" }}>Delete</button>
                </div>
                {e.memory && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>Memory</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.memory}</p></>}
                {e.contradiction && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>Contradictions named</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.contradiction}</p></>}
                {e.receive && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>What I&apos;d receive from God</div><p style={{ color: TEXT, lineHeight: 1.6 }}>{e.receive}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {videos.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} style={{ width: "100%", aspectRatio: "16/9" }} />
                <div style={{ padding: "1rem" }}>
                  <p style={{ color: TEXT, fontWeight: 600 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
          <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: "1rem" }}>Crisis & Support Resources</h3>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>988 Suicide & Crisis Lifeline</strong> — Call or text 988. Grief after a child&apos;s death significantly elevates suicidal risk. Please reach out.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>GRASP</strong> — grasphelp.org — Grief Recovery After Substance Passing: support specifically for overdose loss.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>The Compassionate Friends</strong> — compassionatefriends.org — National organization for parents grieving a child&apos;s death from any cause.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>SAMHSA National Helpline</strong> — 1-800-662-4357 — For families seeking support after a loved one&apos;s overdose death.
          </p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
