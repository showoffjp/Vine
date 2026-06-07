"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Warriors Who Wept",
    verse: "2 Samuel 1:11–12",
    text: "When David heard of the deaths of Saul and Jonathan, 'he and all the men with him took hold of their clothes and tore them. They mourned and wept and fasted.' David, a man of war, was also a man of profound grief. The Bible does not ask warriors to suppress their experience of loss and violence — it gives them permission to mourn.",
  },
  {
    title: "The Body That Carries Combat",
    verse: "Psalm 6:2–3",
    text: "'Have mercy on me, Lord, for I am faint; heal me, Lord, for my bones are in agony. My soul is in deep anguish. How long, Lord, how long?' The Psalmist describes what we recognize as symptoms of trauma: physical agony, anguish, disrupted time. The body holds what the mind cannot process. God receives this prayer.",
  },
  {
    title: "Moral Injury and the God Who Knows the Full Story",
    verse: "Romans 8:26",
    text: "Many veterans carry not only PTSD but moral injury — the wound of having done or witnessed things that violate conscience. The Spirit who 'intercedes for us through wordless groans' meets the veteran who cannot pray because the words have no container for what they carry. God does not require words.",
  },
  {
    title: "Coming Home as a Stranger",
    verse: "Genesis 32:24–28",
    text: "Jacob, returning from years away, wrestled with God at the ford of the Jabbok — and was marked by it. He did not come home unchanged. Many veterans return home carrying something that changed them permanently. Wrestling with God in that experience is not faithlessness — it is the ancient pattern of the person who has been somewhere that leaves a mark.",
  },
  {
    title: "The Warrior God Heals",
    verse: "Isaiah 61:1",
    text: "'The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners.' Jesus quoted this passage as describing his own mission. Veterans with PTSD are among the brokenhearted and those held captive by darkness that this mission targets.",
  },
];

const voices = [
  {
    id: 1,
    name: "Jonathan Shay",
    role: "Psychiatrist & Author, Achilles in Vietnam",
    quote: "Combat PTSD is moral injury as much as psychological injury. It is the wound of having one's sense of right and wrong violated by what was witnessed or done.",
    bio: "Jonathan Shay's work on moral injury in combat veterans — using Homer's Iliad and Odyssey as a lens — has transformed how clinicians and chaplains think about veteran suffering. His concept of moral injury connects ancient warfare narrative with contemporary veteran experience in ways that resonate deeply.",
  },
  {
    id: 2,
    name: "David Livingston",
    role: "Military Chaplain & Author",
    quote: "The chaplain's job is not to explain why. It is to stay — to be the one who remains present when everything else has broken.",
    bio: "Military chaplains occupy a unique pastoral role — present in the worst moments of combat, bearing witness to experiences that civilian pastors rarely encounter. Their ministry of presence to veterans with PTSD is one of the most demanding forms of pastoral care in any context.",
  },
  {
    id: 3,
    name: "Edward Tick",
    role: "Psychotherapist & Author, War and the Soul",
    quote: "Veterans do not need to be treated for their war experience. They need to be initiated into it — to find a community of meaning large enough to hold what they have seen and done.",
    bio: "Edward Tick's work integrates cross-cultural healing practices with PTSD treatment for veterans. His insistence that veterans need community and meaning — not just symptom management — resonates strongly with Christian understandings of healing through belonging.",
  },
  {
    id: 4,
    name: "Karl Marlantes",
    role: "Vietnam Veteran & Author, What It Is Like to Go to War",
    quote: "I killed people in Vietnam. I came home and went to church. No one knew how to hold both those things at once. The church must learn.",
    bio: "Karl Marlantes writes with searing honesty about the spiritual dimensions of combat and the church's inadequacy in receiving veterans who carry those experiences. His challenge — that faith communities must develop the theological and pastoral capacity to hold what warriors bring home — is essential.",
  },
];

const practices = [
  {
    icon: "🧑‍⚕️",
    title: "Trauma-Specific Professional Treatment",
    text: "PTSD responds to evidence-based treatments: EMDR, Prolonged Exposure, CPT (Cognitive Processing Therapy). VA resources and veteran-specific mental health programs are available. Seeking professional help is not weakness — it is the same courage that deployed you in the first place.",
  },
  {
    icon: "🤝",
    title: "Brotherhood and Sisterhood in Recovery",
    text: "Veterans often heal best in community with other veterans. Seek out veteran-specific support groups — through the VA, Team Red White & Blue, or veteran church ministries. The bond of shared experience that formed in combat can also form in recovery when people who truly understand gather together.",
  },
  {
    icon: "🙏",
    title: "Find a Chaplain or Pastor Who Will Stay",
    text: "Find a spiritual director or pastor who will not flinch from your story — who will ask the hard questions about what you saw and did, and not rush you toward comfortable conclusions. This person may need training in moral injury and trauma. Ask for what you need.",
  },
  {
    icon: "📖",
    title: "Read the Warriors of Scripture Honestly",
    text: "Read Psalms 22, 40, 77, and 88 as a warrior. Read David's life in 1 and 2 Samuel not sanitized but whole. Read Joshua and Judges not only as historical narrative but as the record of people who did violence in God's name and still had to come home and live with it. Scripture holds more than the church often preaches.",
  },
  {
    icon: "🗣️",
    title: "Name Your Moral Injury",
    text: "If you carry something you did or failed to do that violated your conscience — name it. Not to a crowd, but to one safe person: a chaplain, a therapist, a pastor. Moral injury compounds in silence. The act of naming it — even if imperfect — is the beginning of its integration.",
  },
  {
    icon: "🌿",
    title: "Physical Discipline as Anchor",
    text: "Many veterans find that physical discipline — ruck marches, weight training, team sports, martial arts — provides grounding that talk therapy alone cannot. The body that was trained for combat can be redirected toward disciplines that build rather than destroy. Pair physical practice with reflection.",
  },
];

const scriptures = [
  { verse: "Psalm 22:1", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?" },
  { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Romans 8:38–39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God." },
  { verse: "Isaiah 61:1", text: "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners." },
  { verse: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help in trouble." },
];

type PVEntry = { id: string; date: string; carry: string; anchor: string; prayer: string };

export default function PtsdVeteranMilitaryChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PVEntry[]>([]);
  const [carry, setCarry] = useState("");
  const [anchor, setAnchor] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_ptsdveteranmilitarychristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!carry.trim() && !anchor.trim() && !prayer.trim()) return;
    const entry: PVEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      carry: carry.trim(),
      anchor: anchor.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_ptsdveteranmilitarychristj_entries", JSON.stringify(updated));
    setCarry(""); setAnchor(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_ptsdveteranmilitarychristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🎖️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            PTSD, Veterans & Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For veterans and service members navigating PTSD and moral injury — finding a faith
            community large enough to hold what war leaves behind.
          </p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a2020", borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", margin: "0 0 0.5rem" }}>If you are in crisis:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            Veterans Crisis Line: call <strong style={{ color: TEXT }}>988</strong> then press <strong style={{ color: TEXT }}>1</strong> |{" "}
            Text <strong style={{ color: TEXT }}>838255</strong> |{" "}
            <a href="https://www.veteranscrisisline.net" style={{ color: PURPLE }}>veteranscrisisline.net</a> |{" "}
            <a href="https://www.militaryonesource.mil" style={{ color: PURPLE }}>militaryonesource.mil</a>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: TEXT, cursor: "pointer", fontSize: "0.875rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.25rem" }}>{v.name}</h3>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ color: TEXT, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What are you carrying from your service that you want God to know about?</label>
              <textarea value={carry} onChange={(e) => setCarry(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What anchors you today?</label>
              <textarea value={anchor} onChange={(e) => setAnchor(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer — however rough — for today:</label>
              <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((e) => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                    </div>
                    {e.carry && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Carrying: </span>{e.carry}</p>}
                    {e.anchor && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Anchor: </span>{e.anchor}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="NnGBhG03g4M" title="Faith, PTSD, and the Path Home for Veterans" />
            <VideoEmbed videoId="j2h-q3ZPKFI" title="Moral Injury and the Gospel — A Veteran&apos;s Perspective" />
            <VideoEmbed videoId="ZGk1hl1nNrw" title="Warriors Who Wept — The Psalms for Veterans" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Veterans Carrying the Weight of War" />
          </div>
        )}
      </div>
    </div>
  );
}
