"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "A Life the World Never Saw",
    verse: "Psalm 139:15-16",
    text: "\"My frame was not hidden from you, when I was being made in secret, intricately woven in the depths of the earth. Your eyes saw my unformed substance; in your book were written, every one of them, the days that were formed for me, when as yet there was none of them.\" Your baby was known to God before they were known to the world. The days of their life — however few — were written in God's book. They were not an accident, not a mistake, and not unmourned by the God who made them."
  },
  {
    title: "The Name God Knows",
    verse: "Isaiah 43:1",
    text: "\"But now thus says the Lord, he who created you, O Jacob, he who formed you, O Israel: 'Fear not, for I have redeemed you; I have called you by name, you are mine.'\" The God who calls his people by name knew your baby by name. Whatever name you gave them or withheld — they were named before you named them. They are not nameless in heaven. They were known."
  },
  {
    title: "Rachel Weeping for Her Children",
    verse: "Jeremiah 31:15-16",
    text: "\"Thus says the Lord: 'A voice is heard in Ramah, lamentation and bitter weeping. Rachel is weeping for her children; she refuses to be comforted for her children, because they are no more.' Thus says the Lord: 'Keep your voice from weeping, and your eyes from tears, for there is a reward for your work, declares the Lord, and they shall come back from the land of the enemy.'\" God hears the inconsolable grief of mothers — and speaks specifically to it. There is a promise on the other side of the weeping."
  },
  {
    title: "The Silence of God's People",
    verse: "Job 2:13",
    text: "\"And they sat with him on the ground seven days and seven nights, and no one spoke a word to him, for they saw that his suffering was very great.\" In the first seven days of the most acute grief, Job's friends did the right thing: they sat in silence. Stillbirth is a grief that the wrong words destroy. What parents need is presence without platitude — people who will sit with them without trying to fix what cannot be fixed."
  },
  {
    title: "The Resurrection Body of the Child",
    verse: "1 Corinthians 15:42-44",
    text: "\"So is it with the resurrection of the dead. What is sown is perishable; what is raised is imperishable. It is sown in dishonor; it is raised in glory. It is sown in weakness; it is raised in power. It is sown a natural body; it is raised a spiritual body.\" The Christian tradition holds the hope of resurrection for those who die before birth or shortly after. The baby whose body was sown in grief will be raised imperishable. This is not certainty we can prove. It is the hope we are given."
  }
];

const voices = [
  {
    id: "v1", name: "Joanna Rowland", role: "Author, 'The Memory Box'",
    quote: "Our society does not know how to grieve a baby it never met. But the grief is real — perhaps the most acute grief there is — and it deserves full mourning.",
    bio: "Joanna Rowland's children's book 'The Memory Box' and her pastoral writing on pregnancy loss speak with particular warmth to parents navigating stillbirth grief. Her work validates the full reality of the loss without minimizing or rushing the grieving process."
  },
  {
    id: "v2", name: "Megan Devine", role: "Author, 'It's OK That You're Not OK'",
    quote: "Some losses are not meant to be resolved. They are meant to be carried — integrated into who you become, not moved past. Your baby is not something to be gotten over.",
    bio: "Megan Devine's therapeutic framework for grief specifically rejects the idea that grief must have an arc toward resolution. Her work validates the permanent nature of the loss of a child — including a stillborn child — and provides tools for carrying that grief without being destroyed by it."
  },
  {
    id: "v3", name: "Beth Forbus", role: "Bereavement Counselor, Pregnancy Loss Specialist",
    quote: "Every parent of a stillborn baby needs to hear: you are still a parent. This child was yours. The love you have for them is real and it does not go anywhere.",
    bio: "Beth Forbus specializes in perinatal grief counseling and has worked with hundreds of families navigating stillbirth, miscarriage, and neonatal loss. Her approach — that the parental love is real and the loss is complete — provides a foundation for grief that does not minimize either."
  },
  {
    id: "v4", name: "Lore Ferguson Wilbert", role: "Author, Writes on Loss and Faith",
    quote: "There are no words for what you carry. There are only people willing to stay in the silence with you — and a God who is present in the places words cannot reach.",
    bio: "Lore Ferguson Wilbert writes about grief, loss, and faith with pastoral honesty. Her work on the specific inadequacy of Christian platitudes in the face of pregnancy loss speaks to parents who need companionship, not explanations."
  }
];

const practices = [
  {
    icon: "📷",
    title: "Memory-Making Before and After",
    text: "Take photographs if possible, make hand and footprints, name the baby, create a memory box. These acts of witness — recording that this person existed — are profoundly important for grief processing. Many hospitals have Now I Lay Me Down to Sleep (nilmdts.org) photographers available at no cost."
  },
  {
    icon: "🕯️",
    title: "Hold a Naming and Farewell Service",
    text: "A naming ceremony, a funeral, or a simple gathering of loved ones to acknowledge the baby's existence and the parents' loss is deeply meaningful. Consult your pastor about what is liturgically appropriate for your tradition. The service does not need to be large to be significant."
  },
  {
    icon: "🧠",
    title: "Perinatal Grief Counseling",
    text: "Seek a therapist who specializes in perinatal grief — miscarriage, stillbirth, and infant loss. General counselors may be sympathetic but may not understand the specific features of this grief, including the invisibility of the loss, the medical trauma, and the relationship between grief and subsequent pregnancies."
  },
  {
    icon: "🫂",
    title: "Support Communities",
    text: "SHARE (nationalshare.org), Return to Zero: HOPE (rtzhope.org), and Faces of Loss (facesofloss.com) connect stillbirth parents with others who understand. Online and in-person support groups for perinatal loss are often the only place parents feel their grief is fully seen."
  },
  {
    icon: "📿",
    title: "Annual Remembrance",
    text: "Mark the baby's due date, birth date, or both annually — with a candle, a visit to the grave or memorial site, a donation in their name, or a gathering of those who knew them or know about them. Annual remembrance validates that the loss does not end, and gives it a place in the year."
  },
  {
    icon: "✝️",
    title: "Let Your Church Know What You Need",
    text: "Tell your pastor specifically what you need: acknowledgment from the pulpit on Mother's Day and Father's Day for those who have lost children, support for attendance at baby dedications that is not assumed, and explicit pastoral care in the months after the loss when others assume you are 'moving on.'"
  }
];

const scriptures = [
  { verse: "Psalm 139:15-16", text: "My frame was not hidden from you, when I was being made in secret, intricately woven in the depths of the earth. Your eyes saw my unformed substance; in your book were written, every one of them, the days that were formed for me." },
  { verse: "Jeremiah 31:15-17", text: "A voice is heard in Ramah, lamentation and bitter weeping. Rachel is weeping for her children; she refuses to be comforted for her children, because they are no more. Thus says the Lord: Keep your voice from weeping, and your eyes from tears, for there is a reward for your work." },
  { verse: "Isaiah 43:1", text: "Fear not, for I have redeemed you; I have called you by name, you are mine." },
  { verse: "2 Samuel 12:23", text: "But now he is dead. Why should I fast? Can I bring him back again? I shall go to him, but he will not return to me." },
  { verse: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away." },
  { verse: "Romans 8:38-39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." }
];

type SbEntry = { id: string; date: string; name: string; memory: string; hold: string };

export default function StillbirthGriefFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SbEntry[]>([]);
  const [name, setName] = useState("");
  const [memory, setMemory] = useState("");
  const [hold, setHold] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_stillbirthgriefj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!memory.trim()) return;
    const entry: SbEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), name, memory, hold };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_stillbirthgriefj_entries", JSON.stringify(updated));
    setName(""); setMemory(""); setHold("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_stillbirthgriefj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🤍</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>Stillbirth &amp; Infant Loss</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For parents who carried a child they never brought home — your grief is real, your baby was real, and there is a God who knew them before you did.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; SHARE: nationalshare.org &bull; Return to Zero HOPE: rtzhope.org &bull; NILMDTS: nilmdts.org &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
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
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
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
                <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Memory &amp; Grief Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>Your baby&apos;s name (if you have given one):</label>
                  <input value={name} onChange={e => setName(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", boxSizing: "border-box" }} placeholder="Name..." />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What memory or feeling am I carrying today?</label>
                  <textarea value={memory} onChange={e => setMemory(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I holding onto about God, or asking him today?</label>
                  <textarea value={hold} onChange={e => setHold(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
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
                {e.name && <p style={{ color: PURPLE, fontSize: "0.9rem", fontWeight: "bold", marginBottom: "0.25rem" }}>{e.name}</p>}
                {e.memory && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Memory:</strong> {e.memory}</p>}
                {e.hold && <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}><strong>Holding:</strong> {e.hold}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Return to Zero: Stillbirth Stories</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Parents speak about the experience of stillbirth and what has helped in grief</p>
              <VideoEmbed videoId="oNpTha80yyE" title="Return to Zero: Stillbirth Stories" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Rachel Weeping: God and Infant Loss</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Jeremiah 31 and what God says to inconsolable mothers</p>
              <VideoEmbed videoId="4Eg_di-O8nM" title="Rachel Weeping: God and Infant Loss" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>It&apos;s OK That You&apos;re Not OK</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Megan Devine on grief that doesn&apos;t resolve — including the grief of stillbirth and infant loss</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="It's OK That You're Not OK" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Psalm 139 and the Unborn Child</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>The theology of being known by God before birth — and what that means for babies who died before birth</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Psalm 139 and the Unborn Child" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
