"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "God Sees the Unseen Elder",
    verse: "Psalm 139:1-3",
    text: "You have searched me, Lord, and you know me. You know when I sit and when I rise; you perceive my thoughts from afar. The elderly Christian sitting alone in a house where the children rarely visit, where the phone does not ring for days, where the nearest church is a difficult drive — is not invisible to God. The Psalmist's confidence is that God's attention is not rationed by proximity. He knows exactly where you are.",
  },
  {
    title: "Aging Is Not Loss of Value",
    verse: "Proverbs 16:31",
    text: "Gray hair is a crown of splendor; it is attained in the way of righteousness. The culture that surrounds aging Christians tends to treat age as subtraction — of productivity, of mobility, of relevance. Scripture sees it differently. Years lived in faithfulness are not diminishment. They are accumulation. The wisdom and prayer and faithfulness of the elderly are not less valuable than the energy of the young — they are different and irreplaceable.",
  },
  {
    title: "The Ministry of Presence — Given and Received",
    verse: "Ecclesiastes 4:9-10",
    text: "Two are better than one, because they have a good return for their labor: if either of them falls down, one can help the other up. God designed human beings for companionship. The isolation of aging in place — even in a house full of cherished memories — is a real and serious deprivation, not a character flaw. Needing community is not weakness; it is what it means to be human.",
  },
  {
    title: "Prayer as Connection When Mobility Fails",
    verse: "1 Thessalonians 5:17",
    text: "Pray without ceasing. The person who can no longer drive to church, who can no longer stand for long worship services, who has lost the community of a lifetime to death and dispersal — still has immediate, unimpeded access to God. Prayer is not a consolation prize for the immobile. It is a form of participation in the body of Christ and the work of the Kingdom that age cannot diminish.",
  },
  {
    title: "The Church's Obligation to the Elder",
    verse: "Leviticus 19:32",
    text: "Stand up in the presence of the aged, show respect for the elderly and revere your God. The command to honor the elderly is addressed not to the elderly but to the community around them. The obligation to visit, to include, to seek out the isolated older Christian belongs to the church. Aging in place in isolation is partly a church failure, not just an individual circumstance.",
  },
];

const voices = [
  {
    id: 1,
    name: "Joni Eareckson Tada",
    role: "Author, founder of Joni and Friends",
    quote: "Limitations do not limit our participation in the Kingdom. They change its shape. Often into prayer — which is the most powerful shape of all.",
    bio: "Joni Eareckson Tada, paralyzed since 18, has spent decades thinking and writing about disability, aging, and the spiritual life — including the unseen ministry of those whose suffering isolates them from the visible community.",
  },
  {
    id: 2,
    name: "Amy Julia Becker",
    role: "Author, A Good and Perfect Gift",
    quote: "The person who can no longer do is not therefore less. Being — being present, being faithful, being in prayer — is its own form of doing.",
    bio: "Amy Julia Becker writes about disability, aging, and the theology of limitation — including the way Western Christianity's emphasis on productivity shapes how we think about those who can no longer produce.",
  },
  {
    id: 3,
    name: "Henri Nouwen",
    role: "Author, The Wounded Healer",
    quote: "The great gift of the contemplative life is the discovery that the most important thing we can do is nothing — being with God in stillness.",
    bio: "Henri Nouwen's writing on solitude, prayer, and the inner life speaks directly to elderly Christians who have lost the forms of ministry they once practiced and need a new vocabulary for continued faithfulness.",
  },
  {
    id: 4,
    name: "Sheryl Overton",
    role: "Author and aging-in-place advocate",
    quote: "The church has not yet fully learned to see the isolated elder as an essential member of the body. When we do, we will find them already at prayer for the whole congregation.",
    bio: "Sheryl Overton works in ministry to the homebound elderly, helping churches understand the unique spiritual and pastoral needs of aging Christians who have become invisible to congregation life.",
  },
];

const practices = [
  {
    icon: "📞",
    title: "Schedule Regular Human Contact",
    text: "At minimum one phone or video call per day with someone who knows your name. At minimum one in-person visit per week. These are not luxuries for isolated elderly Christians — they are physiological necessities. Loneliness has measurable health effects equivalent to smoking fifteen cigarettes a day.",
  },
  {
    icon: "⛪",
    title: "Ask Your Church for a Specific Ministry",
    text: "Many churches have members who will do drive-to-church, in-home communion, regular phone prayer, or weekly visitor ministries — but only if asked. Call your pastor or elder and name the specific need. Do not assume the church knows you are isolated.",
  },
  {
    icon: "📻",
    title: "Let Technology Serve Connection",
    text: "Church streaming services, Zoom Bible studies, phone prayer chains, and audiobook ministries are genuine means of community participation for those who cannot attend in person. These are not inferior substitutes — they are access accommodations that the body of Christ should offer intentionally.",
  },
  {
    icon: "📖",
    title: "Develop a Rhythm of Prayer",
    text: "The Daily Office — praying set prayers at set hours — is a form of Christian practice that structures solitary days around connection to God. The Book of Common Prayer, the Liturgy of the Hours, and simpler forms provide a skeleton of prayer that keeps the day from emptying.",
  },
  {
    icon: "✍️",
    title: "Write Letters or Leave a Record",
    text: "Many elderly Christians carry wisdom, stories, and theological insight that will die with them if not recorded. Write letters to grandchildren. Record memoirs. Answer questions about your life and faith. The act of passing on what you know is itself a form of ministry that isolation does not prevent.",
  },
  {
    icon: "🌳",
    title: "Find an Intergenerational Relationship",
    text: "Mentoring younger adults, pen-pal relationships with children, or any sustained intergenerational connection combats the age-segregation that isolates elderly Christians. If your church has no pathway for this, ask them to create one.",
  },
];

const scriptures = [
  { verse: "Psalm 71:9", text: "Do not cast me away when I am old; do not forsake me when my strength is gone." },
  { verse: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
  { verse: "Proverbs 16:31", text: "Gray hair is a crown of splendor; it is attained in the way of righteousness." },
  { verse: "Psalm 92:14", text: "They will still bear fruit in old age, they will stay fresh and green." },
  { verse: "Ecclesiastes 4:9-10", text: "Two are better than one, because they have a good return for their labor: if either of them falls down, one can help the other up." },
  { verse: "Leviticus 19:32", text: "Stand up in the presence of the aged, show respect for the elderly and revere your God. I am the Lord." },
];

type AIEntry = { id: string; date: string; today: string; prayer: string; memory: string };

export default function AgingInPlaceIsolationPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AIEntry[]>([]);
  const [today, setToday] = useState("");
  const [prayer, setPrayer] = useState("");
  const [memory, setMemory] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_aginginplaceisolj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!today.trim()) return;
    const e: AIEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), today, prayer, memory };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_aginginplaceisolj_entries", JSON.stringify(next));
    setToday(""); setPrayer(""); setMemory("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_aginginplaceisolj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Aging in Place & Isolation</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For elderly Christians living alone — and for churches learning to see, visit, and honor them as essential members of the body.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · Eldercare Locator <strong>1-800-677-1116</strong> · <a href="https://www.aarp.org" style={{ color: "#fca5a5" }}>aarp.org</a> · Text <strong>741741</strong>
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
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What was today like?</label>
                <textarea value={today} onChange={e => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Who you spoke with, what you noticed, how you felt..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A memory from your life</label>
                <textarea value={memory} onChange={e => setMemory(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Something worth recording for those who come after you..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer for today</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="For yourself, for those you love, for the church..." />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Your days are worth recording.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.today && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Today</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.today}</p></>}
                {e.memory && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Memory</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.memory}</p></>}
                {e.prayer && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>The Ministry of the Homebound</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On the unique and often invisible spiritual ministry of elderly Christians who can no longer attend church — and why the church needs them.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="The Ministry of the Homebound" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Prayer in the Night — Tish Harrison Warren</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On the Daily Office and structured prayer as a way of remaining connected to God and the church when isolation threatens to sever those ties.</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Prayer in the Night Tish Harrison Warren" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Joni Tada on Disability, Aging, and the Body of Christ</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Joni Eareckson Tada on how the church can serve and receive service from those whose participation looks different from the majority.</p>
              <VideoEmbed videoId="jJPVNIAFmvA" title="Joni Tada on Disability Aging and the Body of Christ" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Loneliness and the Christian Community</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On the epidemic of loneliness in older adulthood and what the body of Christ is uniquely positioned to offer in response.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Loneliness and the Christian Community" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
