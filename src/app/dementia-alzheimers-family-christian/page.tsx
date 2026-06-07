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
    title: "The Person Remains, Even When the Mind Changes",
    verse: "Genesis 1:27",
    text: "\"So God created mankind in his own image, in the image of God he created them.\" The imago Dei — the image of God in a person — does not depend on cognitive function, memory, or the ability to recognize others. A person with advanced dementia who can no longer speak their own name is still a being of full and irreducible dignity. Pastoral care for dementia families must rest on this theological foundation before anything else.",
  },
  {
    title: "The Resurrection Will Restore What Is Lost",
    verse: "1 Corinthians 15:42–43",
    text: "\"The body that is sown is perishable, it is raised imperishable; it is sown in dishonor, it is raised in glory; it is sown in weakness, it is raised in power.\" The resurrection hope speaks directly to dementia: the self that is lost — the memories, the personality, the recognition of loved ones — will be restored at the resurrection in fullness. This is not a sentimental hope; it is the Christian claim about the body and person in eternity.",
  },
  {
    title: "God Knows the Person Even When They Cannot Know Themselves",
    verse: "Psalm 139:1–4",
    text: "\"You have searched me, LORD, and you know me. You know when I sit and when I rise; you perceive my thoughts from afar. You discern my going out and my lying down; you are familiar with all my ways. Before a word is on my tongue you know it completely.\" When a person with dementia can no longer remember their own name, God still knows them completely — searches them, perceives their thoughts, is familiar with their ways. The divine memory never fails.",
  },
  {
    title: "Grief at Ambiguous Loss Is Legitimate",
    verse: "John 11:33–35",
    text: "\"When Jesus therefore saw her weeping, and the Jews also weeping which came with her, he groaned in the spirit, and was troubled... Jesus wept.\" Even knowing that Lazarus would be raised, Jesus wept. The grief of watching someone you love be taken away by dementia — while they are still physically present — is real grief. The church must make space for this grief without rushing to eschatological comfort.",
  },
  {
    title: "The Muscle Memory of Faith Often Outlasts Cognitive Memory",
    verse: "Psalm 22:9–10",
    text: "\"Yet you brought me out of the womb; you made me trust in you, even at my mother's breast. From birth I was cast on you; from my mother's womb you have been my God.\" Faith formed in childhood and practiced over a lifetime becomes embodied — it lives in the body, not only in the mind. Many families discover that their loved one with dementia still responds to hymns, to prayer, to communion, to the name of Jesus, long after other memory has gone.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. John Swinton",
    role: "Professor of Practical Theology, University of Aberdeen",
    quote: "People with dementia teach us what it means to be human — that we are loved before we are capable, that relationship precedes cognition.",
    bio: "Swinton's theological and practical work on dementia — especially his book Dementia: Living in the Memories of God — has profoundly shaped how Christian communities think about personhood, memory, and care.",
  },
  {
    id: 2,
    name: "Dr. Pauline Boss",
    role: "Psychologist, Author of Ambiguous Loss",
    quote: "Ambiguous loss — the loss of someone who is still physically present but psychologically absent — is the most difficult loss a person can endure, precisely because it has no clear resolution.",
    bio: "Boss's clinical concept of ambiguous loss is indispensable for dementia families, naming what they experience as a real form of grief even when the person is still alive.",
  },
  {
    id: 3,
    name: "Stephen Post",
    role: "Bioethicist, Author of The Moral Challenge of Alzheimer Disease",
    quote: "Our culture values people for what they can do and remember. Christian ethics insists on the worth of people for what they are — beings made in God's image.",
    bio: "Post's ethical and theological work has been foundational in challenging the cultural devaluation of people with dementia and grounding their dignity in theological categories rather than cognitive capacity.",
  },
  {
    id: 4,
    name: "Al Jessel",
    role: "Chaplain, Christian Care Ministry to People with Dementia",
    quote: "Meeting a person with dementia where they are — in their world, however altered — is not capitulation. It is love.",
    bio: "Jessel's pastoral ministry has modeled dementia-specific chaplaincy that honors the person as they are, meets them in their current experience, and recognizes the profound spiritual responsiveness that often remains.",
  },
];

const practices = [
  {
    icon: "🎵",
    title: "Use Music as a Pathway",
    text: "Musical memory often outlasts verbal memory in dementia by many years. Familiar hymns, worship songs, and cherished music can reach a person who no longer recognizes faces. Build playlists of music from the person's formative faith years and use them consistently.",
  },
  {
    icon: "✝️",
    title: "Maintain Spiritual Rituals",
    text: "Familiar spiritual rituals — the Lord's Prayer, the 23rd Psalm, communion, the sign of the cross — can continue to be deeply meaningful even in advanced dementia. These embodied practices bypass cognitive memory and touch a deeper level of being.",
  },
  {
    icon: "🤝",
    title: "Enter Their World",
    text: "Do not correct, orient, or contradict someone with dementia when they misremember. Enter their reality with compassion. If they speak of a deceased spouse as if living, respond to the emotion rather than the fact. Presence matters more than accuracy.",
  },
  {
    icon: "👤",
    title: "Sustain Yourself as the Caregiver",
    text: "Caregiver burnout is the primary risk factor for poor quality dementia care. Join a caregiver support group (Alzheimer's Association has local chapters), use respite services, and get your own mental health support. You cannot pour from an empty vessel.",
  },
  {
    icon: "📞",
    title: "Contact the Alzheimer's Association",
    text: "The Alzheimer's Association Helpline (1-800-272-3900) is available 24/7. They offer local chapter support, care consultations, caregiver support groups, and legal/financial planning guidance. You do not need to navigate this alone.",
  },
  {
    icon: "📋",
    title: "Prepare Legal and Care Documents Early",
    text: "Power of attorney, advance directives, and healthcare proxies must be established while the person still has legal capacity. Do not wait for crisis. These documents protect both the person with dementia and their family.",
  },
];

const scriptures = [
  { verse: "Isaiah 46:4", text: "\"Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you.\"" },
  { verse: "Romans 8:38–39", text: "\"Neither death nor life, neither angels nor demons, neither the present nor the future... will be able to separate us from the love of God that is in Christ Jesus our Lord.\"" },
  { verse: "Psalm 71:9", text: "\"Do not cast me away when I am old; do not forsake me when my strength is gone.\"" },
  { verse: "2 Timothy 1:12", text: "\"I know whom I have believed, and am convinced that he is able to guard what I have entrusted to him until that day.\"" },
  { verse: "1 Corinthians 13:12", text: "\"For now we see only a reflection as in a mirror; but then we shall see face to face. Now I know in part; then I shall know fully, even as I am fully known.\"" },
  { verse: "Revelation 21:4", text: "\"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.\"" },
];

type DementiaEntry = {
  id: string;
  date: string;
  moment: string;
  grief: string;
  prayer: string;
};

export default function DementiaAlzheimersFamilyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DementiaEntry[]>([]);
  const [moment, setMoment] = useState("");
  const [grief, setGrief] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_dementiafamilychristian_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!moment.trim()) return;
    const entry: DementiaEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      moment,
      grief,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_dementiafamilychristian_entries", JSON.stringify(updated));
    setMoment(""); setGrief(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_dementiafamilychristian_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌿</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Dementia, Alzheimer&apos;s & Family Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For families caring for a loved one with dementia — theological grounding in the irreducible dignity of the person, pastoral care for the unique grief of ambiguous loss, and practical guidance for the long journey.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>Alzheimer&apos;s Association:</strong> 1-800-272-3900 (24/7) | <strong>988</strong> Suicide & Crisis Lifeline | <strong>alz.org</strong>
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
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A moment this week — with your loved one, or in the caregiving — you want to remember:</label>
                <textarea value={moment} onChange={e => setMoment(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What grief am I carrying right now about what has been lost?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — for your loved one, for yourself, for the journey:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.moment && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Moment:</strong> {e.moment}</p>}
                {e.grief && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Grief:</strong> {e.grief}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="hW5bMsMJUBY" title="John Swinton — Dementia: Living in the Memories of God" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>John Swinton: Dementia and the Memories of God</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Theological reflection on personhood, memory, and the Christian hope for those with dementia</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="3TYn7HqJ_J8" title="Music and Memory in Dementia — Alive Inside Documentary" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Music and Memory: How Music Reaches People with Dementia</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>The power of personalized music to unlock connection and aliveness in people with advanced dementia</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="J9siqZQ_C8o" title="Caregiver Grief and Ambiguous Loss in Dementia" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Ambiguous Loss: Grieving a Loved One with Dementia</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical and pastoral guidance on the grief caregivers experience when a loved one is present but changed</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="kGrpfq5Rmlw" title="Spiritual Care for People with Dementia" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Spiritual Care for People with Dementia</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical guidance on maintaining spiritual practices, presence, and meaning for people with dementia</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
