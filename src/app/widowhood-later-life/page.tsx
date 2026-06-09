"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The God Who Sees the Widow",
    verse: "Psalm 68:5",
    text: "A father to the fatherless, a defender of widows, is God in his holy dwelling. God's character has a special orientation toward the widowed — not as a category to pity but as people whose vulnerability he takes personally. The Bible's repeated command to care for widows is rooted in who God is, not just what he commands. He sees you specifically.",
  },
  {
    title: "The Long Grief of Losing a Life Partner",
    verse: "Ruth 1:20-21",
    text: "Naomi said, 'Call me Mara, because the Almighty has made my life very bitter.' She did not dress up her loss in spiritual language. She gave it a name that meant bitter. The book of Ruth begins with grief allowed to be what it is — before it moves to redemption. Widowhood in later life involves losing not just a person but a shared language, a shared history, a shared way of understanding the world.",
  },
  {
    title: "New Life Is Not Disloyalty",
    verse: "Isaiah 43:18-19",
    text: "Forget the former things; do not dwell on the past. See, I am doing a new thing. This does not mean the former things did not matter or were not beautiful. It means God's work does not end with loss. New friendships, new rhythms, new purposes, new mornings — none of these erase a marriage of fifty years. They are the continuation of a life that was not meant to stop at bereavement.",
  },
  {
    title: "The Body Grieves Too",
    verse: "John 11:35",
    text: "Jesus wept. When Jesus stood at Lazarus's tomb — knowing he was about to raise him — he wept anyway. Grief is not irrational. It is not a failure of faith. The body's physical response to loss is real: the reaching for someone who is no longer there, the quietness of the house that used to have sound in it, the cooking for two and stopping. These are not inconveniences. They are love expressed as loss.",
  },
  {
    title: "The Community of the Resurrected",
    verse: "Revelation 21:4",
    text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain. The promise of resurrection is not a generic religious comfort. It is a concrete promise about specific people — your husband, your wife, by name. Christian hope does not deny death; it names what is on the other side of it. That name is reunion.",
  },
];

const voices = [
  {
    id: 1,
    name: "C.S. Lewis",
    role: "Author, A Grief Observed",
    quote: "Her absence is like the sky, spread over everything. I find I can't be a widow part-time.",
    bio: "C.S. Lewis wrote A Grief Observed after the death of his wife Joy Davidman — a raw, honest account of grief that resists all the easy consolations and finds its way through to a harder and more honest faith.",
  },
  {
    id: 2,
    name: "Jerry Sittser",
    role: "Author, A Grace Disguised",
    quote: "The accident broke every category I had. It left me with the most frightening question: Who am I now that they are gone?",
    bio: "Jerry Sittser lost his mother, wife, and daughter in a single car accident and writes with unusual depth about long grief, identity after catastrophic loss, and the slow work of living forward.",
  },
  {
    id: 3,
    name: "Megan Devine",
    role: "Author, It's OK That You're Not OK",
    quote: "Some losses are not problems to be solved. They are realities to be carried. The question is whether you carry them alone or with help.",
    bio: "Megan Devine's grief work challenges the cultural pressure to 'move on' and instead creates space for grief that takes as long as it takes, with support that does not try to fix what cannot be fixed.",
  },
  {
    id: 4,
    name: "Amy Florian",
    role: "Grief educator and author, No Longer Strangers",
    quote: "The goal of grief is not to stop missing them. The goal is to integrate their absence into a life that still has meaning.",
    bio: "Amy Florian specializes in grief support for older adults and widows, training caregivers, counselors, and church leaders to accompany the grieving with genuine presence rather than premature reassurance.",
  },
];

const practices = [
  {
    icon: "📸",
    title: "Create a Memory Practice",
    text: "Not to dwell in the past but to honor it: write down memories before they fade, assemble a photo album, tell grandchildren stories about your spouse. Memory is not the same as being stuck. It is honoring a life well-lived.",
  },
  {
    icon: "🏠",
    title: "Don't Make Major Decisions in the First Year",
    text: "The impulse to move, to sell the house, to give away belongings, to fill the quiet — these are often driven by grief's disorientation rather than genuine desire. Many widows and widowers regret decisions made in the first year. Give the dust time to settle.",
  },
  {
    icon: "👥",
    title: "Find Other Widowed Companions",
    text: "GriefShare, church widow groups, and community bereavement programs connect you with people who genuinely understand what you are carrying — not because they have read about it but because they are living it. This kind of peer companionship is irreplaceable.",
  },
  {
    icon: "📅",
    title: "Prepare for the Ambushes",
    text: "Anniversaries, his birthday, a song on the radio, the smell of her perfume in a thrift store — grief ambushes without warning. This is normal, not a sign that you are not healing. Have a plan: call someone, go for a walk, let it come without trying to stop it.",
  },
  {
    icon: "🙏",
    title: "Bring the Full Grief to Prayer",
    text: "Anger at God, confusion about prayer without a spouse to pray with you, the silence of the house — all of this can be brought to God. He is not looking for composed prayers. He is looking for honest ones. The Psalms give permission for total emotional honesty.",
  },
  {
    icon: "🌱",
    title: "Let Purpose Re-Emerge Slowly",
    text: "Meaning does not need to be manufactured. It re-emerges naturally when grief is given its season. Volunteering, mentoring, church service, grandparenting — the activities that give life purpose after widowhood often look different from before. Let that be true.",
  },
];

const scriptures = [
  { verse: "Psalm 68:5", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling." },
  { verse: "Ruth 1:16-17", text: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God. Where you die I will die, and there I will be buried." },
  { verse: "Isaiah 43:18-19", text: "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it?" },
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
  { verse: "John 11:35", text: "Jesus wept." },
];

type WLEntry = { id: string; date: string; memory: string; today: string; prayer: string };

export default function WidowhoodLaterLifePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<WLEntry[]>([]);
  const [memory, setMemory] = useState("");
  const [today, setToday] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_widowhoodlaterlifej_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!today.trim()) return;
    const e: WLEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), memory, today, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_widowhoodlaterlifej_entries", JSON.stringify(next));
    setMemory(""); setToday(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_widowhoodlaterlifej_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: GREEN, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Widowhood in Later Life</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For those who have lost a spouse after many years together — navigating the grief, the silence, the identity questions, and the hope of resurrection.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://www.griefshare.org" style={{ color: "#fca5a5" }}>griefshare.org</a> · <a href="https://www.aarp.org/home-family/friends-family/grief-and-loss" style={{ color: "#fca5a5" }}>aarp.org/grief</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
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
                <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
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
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
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
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A memory I want to preserve today</label>
                <textarea value={memory} onChange={e => setMemory(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="A story, an image, something they said or did..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What is today like?</label>
                <textarea value={today} onChange={e => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="A hard day, a peaceful moment, an unexpected grief..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Speak to God about what this day held..." />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Your story is worth writing.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.memory && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Memory</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.memory}</p></>}
                {e.today && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Today</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.today}</p></>}
                {e.prayer && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>A Grief Observed — C.S. Lewis</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Reflections on Lewis's raw journal of grief after his wife's death — and what it teaches us about honest faith in the face of loss.</p>
              <VideoEmbed videoId="oNpTha80yyE" title="A Grief Observed C.S. Lewis" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Living After Loss — Jerry Sittser</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Jerry Sittser on learning to live forward after catastrophic loss and what grace looks like on the other side of grief.</p>
              <VideoEmbed videoId="jJPVNIAFmvA" title="Living After Loss Jerry Sittser" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>GriefShare — Finding Healing in Community</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>How GriefShare small groups help widows and widowers find community and genuine support during grief.</p>
              <VideoEmbed videoId="4Eg_di-O8nM" title="GriefShare Finding Healing in Community" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Resurrection Hope and Grief</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A theological exploration of what Christian hope actually promises — and how it does and does not speak to the grief of losing a spouse.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Resurrection Hope and Grief" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
