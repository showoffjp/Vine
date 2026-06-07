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
    title: "Grief Is Not a Lack of Faith",
    verse: "John 11:35",
    text: "\"Jesus wept.\" The shortest verse in the Bible stands as a permanent refutation of any theology that treats grief as spiritual failure. Jesus knew Lazarus would be raised. He wept anyway. The tears are not a mistake — they are revelation. The Son of God entering into sorrow alongside those who mourn is not a concession to human weakness; it is the nature of divine love. A faith that forbids grief has confused emotional suppression with spiritual maturity.",
  },
  {
    title: "Lament Is Biblical Language, Not Spiritual Regression",
    verse: "Psalm 88:1–3",
    text: "\"LORD, you are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry. I am overwhelmed with troubles and my life draws near to death.\" Psalm 88 ends without resolution — no turn toward hope, no bright ending. It is a lament that just stops. The fact that this is in the canon of Scripture is itself a pastoral act: it tells every devastated person that their anguish is not too much for God and does not require a theological bow on top of it.",
  },
  {
    title: "Sudden Death Ruptures the Illusion of Control",
    verse: "James 4:13–14",
    text: "\"Now listen, you who say, 'Today or tomorrow we will go to this or that city, spend a year there, carry on business and make money.' Why, you do not even know what will happen tomorrow.\" Sudden loss strips away the assumptions that structure everyday life: that tomorrow will come, that there will be time, that plans will unfold as anticipated. Christian faith does not restore those illusions. It offers something more honest: a God who is present in the rupture and makes meaning in ways that do not require our plans to have worked out.",
  },
  {
    title: "Death Is Real, and So Is Resurrection",
    verse: "1 Corinthians 15:20",
    text: "\"But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep.\" The Christian hope is not that death doesn't matter or that grief is temporary. It is that Christ went through death — not around it — and came out the other side, and that this is the pattern for the rest of humanity. The resurrection does not cancel the reality of the death that preceded it. It redeems it. This is the only basis for genuine Christian hope in the face of loss: not that death is an illusion, but that it has been defeated.",
  },
  {
    title: "Those Who Mourn Are Blessed",
    verse: "Matthew 5:4",
    text: "\"Blessed are those who mourn, for they will be comforted.\" This beatitude does not say mourning will be brief, or that comfort will arrive on schedule. It promises that the mourners are blessed — present tense — and that comfort will come. The blessing is not on the far side of grief, it is present within it. And the comfort is a promise, not a timeline. The person in acute grief who cannot feel the comfort is not failing to claim the promise — they are in the middle of it.",
  },
];

const voices = [
  {
    id: 1,
    name: "Nicholas Wolterstorff",
    role: "Philosopher, Author of Lament for a Son",
    quote: "I'll look up to the stars and remember: for love of my son I look up. For remembrance, I will look up. And for hope — wild, audacious, sometimes desperate hope — I will look up.",
    bio: "Wolterstorff's memoir of grief after his son Eric's death in a mountain climbing accident is considered one of the most theologically honest accounts of loss ever written — raw, questioning, and deeply Christian in its refusal to offer cheap comfort.",
  },
  {
    id: 2,
    name: "C.S. Lewis",
    role: "Author, A Grief Observed",
    quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning. I keep on swallowing.",
    bio: "Lewis wrote A Grief Observed after the death of his wife Joy, recording his raw, sometimes angry encounter with God in loss. His willingness to describe the silence of God in grief has given generations permission to be honest about how devastating bereavement is.",
  },
  {
    id: 3,
    name: "Jerry Sittser",
    role: "Author, A Grace Disguised",
    quote: "The loss I experienced was like a black hole in space that sucked everything into it. But I also discovered something in that darkness. I found grace.",
    bio: "Sittser lost his wife, mother, and daughter in a single car accident. His account of grief and eventual integration has become a standard text for Christians navigating catastrophic sudden loss, offering an honest path through rather than around.",
  },
  {
    id: 4,
    name: "Granger Westberg",
    role: "Chaplain, Author of Good Grief",
    quote: "Good grief is grief that moves. It is grief that eventually allows the person who has suffered loss to begin to reinvest in life. It is not grief that ends — but grief that becomes part of us.",
    bio: "Westberg's Good Grief, written in 1962, has sold over two million copies and remains a foundational pastoral resource on the stages and integration of loss, with explicit attention to the spiritual dimensions of bereavement.",
  },
];

const practices = [
  {
    icon: "🕯️",
    title: "Create Space for Unedited Grief",
    text: "Find at least one person or context where you can grieve without managing how others receive it. Many bereaved people spend enormous energy on the grief of others rather than their own. You need a space — a therapist, a trusted friend, a journal — where your grief does not need to be calibrated for the comfort of others.",
  },
  {
    icon: "📖",
    title: "Pray the Psalms of Lament Aloud",
    text: "Psalms 22, 38, 42, 88, and others are lament psalms — raw, honest, sometimes angry prayers. Read them aloud as your own prayer. The liturgical practice of voicing someone else's lament is documented to help people access grief that has been frozen or suppressed. You are not alone in your language.",
  },
  {
    icon: "🤝",
    title: "Identify a Grief Support Community",
    text: "GriefShare groups meet in thousands of churches and offer structured, faith-based peer support for bereavement. Seek out survivors of similar losses — sudden death of a spouse, child, parent, or sibling — who can understand in ways others cannot. Isolation in grief significantly worsens outcomes.",
  },
  {
    icon: "🧠",
    title: "Consider Grief Therapy",
    text: "Complicated grief (now called Prolonged Grief Disorder) affects approximately 10% of bereaved people and does not resolve without treatment. If grief is intensifying rather than integrating after six months, if you are unable to function, if suicidal thoughts are present — seek a therapist trained in grief or trauma. This is not a lack of faith; it is appropriate care for a real condition.",
  },
  {
    icon: "📅",
    title: "Mark the Dates",
    text: "Anniversaries, birthdays, holidays, the date of the death — these are flash points for grief. Plan for them rather than being ambushed. Consider what rituals might honor the person rather than simply endure the day. Many families develop specific annual practices: visiting the grave, gathering together, cooking a favorite meal, lighting a candle. Named rituals give shape to grief.",
  },
  {
    icon: "✍️",
    title: "Write to the Person You Lost",
    text: "Writing letters to the deceased is a documented grief intervention used in therapy. It is not theologically problematic and does not imply communication with the dead — it is an exercise in continued relationship, expressing what was not said, processing what needs processing. Many bereaved people find it profoundly helpful.",
  },
];

const scriptures = [
  { verse: "Psalm 34:18", text: "\"The LORD is close to the brokenhearted and saves those who are crushed in spirit.\"" },
  { verse: "Isaiah 43:2", text: "\"When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.\"" },
  { verse: "Revelation 21:4", text: "\"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.\"" },
  { verse: "Romans 8:38–39", text: "\"For I am convinced that neither death nor life... neither the present nor the future... will be able to separate us from the love of God that is in Christ Jesus our Lord.\"" },
  { verse: "2 Corinthians 1:3–4", text: "\"Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles.\"" },
  { verse: "Psalm 23:4", text: "\"Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.\"" },
];

type GriefEntry = {
  id: string;
  date: string;
  memory: string;
  honest: string;
  prayer: string;
};

export default function GriefLossSuddenDeathChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<GriefEntry[]>([]);
  const [memory, setMemory] = useState("");
  const [honest, setHonest] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_grieflosssuddendeath_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!memory.trim()) return;
    const entry: GriefEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      memory,
      honest,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_grieflosssuddendeath_entries", JSON.stringify(updated));
    setMemory(""); setHonest(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_grieflosssuddendeath_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕊️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Grief, Loss & Sudden Death: Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For those who have lost someone suddenly — pastoral theology that validates grief as holy, not faithless; lament as biblical, not rebellious; and honest companionship through the long, non-linear process of integrating devastating loss.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>GriefShare:</strong> griefshare.org | <strong>The Compassionate Friends:</strong> 1-877-969-0010
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
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A memory of who you lost — something specific you want to name and hold:</label>
                <textarea value={memory} onChange={e => setMemory(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Where are you honestly today — with your grief, with God, with the people around you?</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — even if it is only anger, confusion, or silence:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.memory && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Memory:</strong> {e.memory}</p>}
                {e.honest && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Honest:</strong> {e.honest}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="qR8SBlwq1gA" title="Nicholas Wolterstorff — Lament for a Son: Grief, Faith, and Loss" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Nicholas Wolterstorff: Lament for a Son — On Grief and Faith</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Philosopher and theologian Nicholas Wolterstorff reflects on his son&apos;s sudden death and what honest grief looks like for a Christian who still believes</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="ZQElByNaFEk" title="Jerry Sittser — A Grace Disguised: Catastrophic Loss and What Comes After" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Jerry Sittser: A Grace Disguised — On Catastrophic Sudden Loss</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Sittser, who lost his wife, mother, and daughter in a single accident, speaks about how darkness becomes a path to grace</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Y4wLxd4KgCM" title="The Psalms of Lament — Permission to Grieve as a Christian" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Psalms of Lament: Biblical Permission to Grieve</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>A theological exploration of lament psalms and why the Bible includes unresolved grief in its canon — giving Christians permission to mourn honestly</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="sz0sEDFBrxw" title="GriefShare — What to Expect When You Are Grieving" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>GriefShare: What the Grief Journey Actually Looks Like</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Introduction to the GriefShare program and what the non-linear, often surprising path of grief integration looks like over time</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
