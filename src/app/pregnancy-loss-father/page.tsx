"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "You Lost a Child Too",
    verse: "Job 1:18–20",
    text: "While he was still speaking, another messenger came and said, 'Your sons and daughters were eating and drinking wine at their oldest brother's house, when suddenly a mighty wind swept in from the desert...' At this, Job got up and tore his robe and shaved his head. Then he fell to the ground in worship. Job's grief at the loss of his children was embodied, dramatic, and immediate. Your grief as a father who lost a child through miscarriage, stillbirth, or infant death is not less real for being less visible.",
  },
  {
    title: "The Father Weeps",
    verse: "John 11:35",
    text: "Jesus wept. At the tomb of Lazarus, in the presence of grief, the Son of God wept. He did not explain the death, offer theological comfort, or call people to worship. He wept. Your tears as a father are not weakness. They are Christlike.",
  },
  {
    title: "Men Are Named in the Genealogy of Loss",
    verse: "Matthew 1:5–6",
    text: "The genealogy of Jesus includes Rahab, Ruth, Tamar — women whose stories involved grief and loss — and the men who were present in those stories. The biblical record does not erase fathers from the story of loss. You are in the story. Your grief is in the story.",
  },
  {
    title: "The Grief Is Proportional to the Love",
    verse: "Psalm 127:3",
    text: "Children are a heritage from the LORD, offspring a reward from him. The psalmist treats children as treasures — gifts of genuine worth. The loss of a child who was not yet born does not reduce the weight of what was lost. The baby you waited for, imagined, and loved was real. The grief is proportional to the love.",
  },
  {
    title: "God Sees What Others Did Not",
    verse: "Genesis 16:13",
    text: "She gave this name to the LORD who spoke to her: 'You are the God who sees me.' Hagar named God El Roi — the One who sees — when she was alone in the wilderness. God sees the grief of fathers that others often miss: the quiet suffering, the caretaking of a grieving spouse, the private mourning of a child the world barely knew existed.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Joanna Rowland",
    role: "Author, The Memory Box",
    quote: "Fathers grieve too. But the system of grief support for pregnancy loss is built almost entirely around mothers. Fathers are expected to be strong, to support the wife, to return to work. This expectation costs them the grief they deserve.",
    bio: "Joanna Rowland (The Memory Box) writes about pregnancy loss and the grief of both parents. Her advocacy for father-inclusive grief support has helped name the invisibility of paternal grief in the pregnancy loss community.",
  },
  {
    id: "v2",
    name: "Jerry Sittser",
    role: "Author, A Grace Disguised",
    quote: "Loss is loss. The world does not issue certificates of legitimacy for grief. It does not measure how many weeks the pregnancy was, how attached the father was, how visible the relationship. Loss that is real is real.",
    bio: "Jerry Sittser (A Grace Disguised, A Grace Revealed) lost his wife, daughter, and mother in a single car accident. His writing on loss and grief has helped thousands understand that grief does not require justification — it simply requires honest encounter.",
  },
  {
    id: "v3",
    name: "Henri Nouwen",
    role: "Catholic priest, spiritual director, author",
    quote: "The gift of grief is that it exposes the depth of love. We only grieve what we love. In grief, we discover that we loved more than we knew.",
    bio: "Henri Nouwen (The Inner Voice of Love, Reaching Out) wrote extensively on grief, loss, and the spiritual life. His framework that grief reveals love — not diminishes us — is essential for fathers who feel they should not grieve as much as they are grieving.",
  },
  {
    id: "v4",
    name: "Megan Devine",
    role: "Therapist, author",
    quote: "Telling a grieving person to 'stay strong' is one of the most costly things we do. It teaches them that their grief is a problem to be managed rather than a love to be honored. Fathers especially receive this message. They need permission to stop being strong for a moment.",
    bio: "Megan Devine (It's OK That You're Not OK) is a grief therapist who experienced the sudden loss of her partner. Her work dismantles toxic positivity around grief and insists on the right to grieve fully — directly applicable to fathers whose grief is socially minimized.",
  },
];

const practices = [
  {
    icon: "🕯️",
    title: "Name the Child",
    text: "Give your baby a name if you have not — or speak the name you gave them. Name is identity. To name is to declare that this person existed, mattered, and is known by you. Many parents find that naming the baby they lost moves the grief from abstract to specific — and specific grief can be held, prayed, and honored.",
  },
  {
    icon: "📖",
    title: "Find the Language for Your Grief",
    text: "Fathers often lack language for pregnancy loss grief because the cultural scripts are almost all written for mothers. Read books that address paternal grief: Walking Through Loss by Jeffrey Kennedy, or Grieving Dads by Kelly Farley. Having language changes the interior experience of carrying something unnamed.",
  },
  {
    icon: "💬",
    title: "Don't Disappear into Support-Mode",
    text: "Many fathers go silent in pregnancy loss because they believe their job is to support their wife — and they are right that she needs support. But disappearing your own grief in order to be strong creates a wound that surfaces later. You are allowed to grieve simultaneously. You are allowed to need support too.",
  },
  {
    icon: "🏥",
    title: "Ask for Father-Specific Support",
    text: "SHARE Pregnancy and Infant Loss Support and the Pregnancy Loss Support Program of the National Council of Jewish Women both include resources for fathers. Griefshare groups exist in most communities. Tell the facilitator you are a father who experienced pregnancy loss — you may find others.",
  },
  {
    icon: "📝",
    title: "Write to Your Child",
    text: "Write a letter to the baby you lost. Tell them who you were, what you hoped, what you imagined, what you feel now. This is a grief ritual that many parents find enormously healing — it allows them to parent the child they never got to parent. Keep the letter.",
  },
  {
    icon: "✝️",
    title: "Mark the Dates",
    text: "The due date. The date of the loss. The date of a procedure. These dates arrive and the world does not mark them. Mark them yourself: a candle, a prayer, a visit to where you scattered ashes, a donation to a pregnancy loss organization. Ritual makes grief visible and tells your child's memory: I remember you.",
  },
];

const scriptures = [
  { verse: "John 11:35", text: "Jesus wept." },
  { verse: "Psalm 127:3", text: "Children are a heritage from the LORD, offspring a reward from him." },
  { verse: "Job 1:20–21", text: "At this, Job got up and tore his robe and shaved his head. Then he fell to the ground in worship and said: 'Naked I came from my mother's womb, and naked I will depart. The LORD gave and the LORD has taken away; may the name of the LORD be praised.'" },
  { verse: "Genesis 16:13", text: "She gave this name to the LORD who spoke to her: 'You are the God who sees me,' for she said, 'I have now seen the One who sees me.'" },
  { verse: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "2 Samuel 12:22–23", text: "He answered, 'While the child was still alive, I fasted and wept. I thought, Who knows? The LORD may be gracious to me and let the child live. But now that he is dead, why should I go on fasting? Can I bring him back again? I will go to him, but he will not return to me.'" },
];

type FatherLossEntry = { id: string; date: string; name: string; memory: string; prayer: string };

export default function PregnancyLossFatherPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FatherLossEntry[]>([]);
  const [name, setName] = useState("");
  const [memory, setMemory] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_preglossfatherj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!name.trim()) return;
    const entry: FatherLossEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      name,
      memory,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_preglossfatherj_entries", JSON.stringify(updated));
    setName(""); setMemory(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_preglossfatherj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Pregnancy Loss</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Grieving as a Father: Pregnancy Loss
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For fathers who lost a baby through miscarriage, stillbirth, or infant death. Your grief is real, often invisible, and too frequently swallowed in order to support your spouse. You lost a child too. Jesus wept.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are in crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; SHARE Loss Support: <span style={{ color: PURPLE }}>nationalshare.org</span> &nbsp;·&nbsp; GriefShare: <span style={{ color: PURPLE }}>griefshare.org</span>
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
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Write your baby&apos;s name — or the name you would have given them.</label>
                <textarea value={name} onChange={(e) => setName(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What do you remember — what you felt, what you hoped, what you imagined?</label>
                <textarea value={memory} onChange={(e) => setMemory(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Write a prayer for your child — honest and direct.</label>
                <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.name && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Name:</strong> {e.name}</p>}
                {e.memory && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Memory:</strong> {e.memory}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Prayer:</strong> {e.prayer}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "oNpTha80yyE", title: "Grief That No One Sees", channel: "GriefShare", description: "Addresses invisible grief — including the grief of fathers in pregnancy loss that often goes unacknowledged by their community, church, and sometimes even their spouse." },
              { videoId: "4Eg_di-O8nM", title: "When God Feels Silent", channel: "Ravi Zacharias International", description: "Theological reflection on divine silence in loss — for fathers who prayed for a baby and received grief instead." },
              { videoId: "7TBHqMqBmBo", title: "Lament as Spiritual Practice", channel: "Soong-Chan Rah", description: "Biblical foundation for lament — essential for fathers who need permission to grieve fully and language for what they are carrying." },
              { videoId: "SqGRnlXplx0", title: "A Father's Grief", channel: "Focus on the Family", description: "Pastoral conversation specifically about men and pregnancy loss — the particular challenges fathers face in grieving a child the world may not have fully acknowledged." },
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
  );
}
