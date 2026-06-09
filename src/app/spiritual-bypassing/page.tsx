"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Jesus Wept — He Did Not Quote Scripture Instead", verse: "John 11:35", text: "When Jesus arrived at the tomb of Lazarus, he did not begin his response with a theological lecture about resurrection. He wept. This is remarkable — he was about to raise Lazarus from the dead, and he wept anyway. Jesus modeled a way of being with suffering that went all the way down into it before addressing it. Spiritual bypassing — using spiritual language to skip over genuine emotional reality — is not the way of Jesus. It is a counterfeit." },
  { title: "The Psalms Model Emotional Honesty, Not Positive Confession", verse: "Psalm 13:1-2", text: "How long, Lord? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart? If God had wanted us to use religious language to transcend emotional pain without experiencing it, Psalm 13 would not be in the Bible. The Psalms are a school of honest emotional expression — not a pattern of denial dressed in the language of faith." },
  { title: "Healing Requires What Is Avoided", verse: "Matthew 5:4", text: "Blessed are those who mourn, for they will be comforted. The path to comfort runs through mourning — not around it. Spiritual bypassing takes a shortcut that leads nowhere: using prayer, forgiveness language, positive confession, or spiritual disciplines to avoid the emotional work of grief, anger, shame, or fear. But bypassed emotions do not resolve. They go underground, shaping behavior invisibly until they erupt or erode. Jesus blessed the mourners specifically because mourning is the path, not the obstacle." },
  { title: "Embodiment Is Not a Spiritual Problem", verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made. Gnostic instincts run deep in Christian culture: the idea that the spiritual self is more real than the physical, emotional self, and that truly mature Christians live primarily from the spirit above the messy realities of body, sensation, and emotion. But the Christian doctrine of incarnation and bodily resurrection insists that bodies matter. Emotions housed in bodies matter. The emotional life is not something to spiritually transcend — it is something to integrate." },
  { title: "Confrontation Is Love — Avoidance Can Be Sin", verse: "Ephesians 4:15", text: "Speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ. Sometimes spiritual bypassing takes the form of premature forgiveness — forgiving before the wound has been acknowledged, before the offense has been named, before genuine accountability has occurred. This can feel spiritual while actually avoiding the relational work that genuine healing requires. Truth-telling is part of love, not its enemy." },
];

const voices = [
  { id: "jw", name: "John Welwood", role: "Psychologist, coined the term 'Spiritual Bypassing'", quote: "Spiritual bypassing is using spiritual ideas and practices to sidestep personal, emotional, and psychological work. It involves using spiritual experience to reinforce rather than release the ego's defenses.", bio: "Welwood coined the term in the 1980s to describe a pattern he observed in spiritual communities: people using meditation, prayer, and spiritual ideals to avoid confronting emotional wounds. Though he wrote primarily in a Buddhist context, the pattern is equally prevalent in Christian settings." },
  { id: "rr", name: "Robert Augustus Masters", role: "Author, Spiritual Bypassing: When Spirituality Disconnects Us from What Really Matters", quote: "Excessively positive thinking can be a form of spiritual bypass, wherein we consciously avoid or suppress whatever does not fit our image of how a spiritual person should think, feel, or act.", bio: "Masters' book is the most thorough treatment of spiritual bypassing and its manifestations: premature forgiveness, compassion fatigue, emotional disengagement, and the use of spiritual practices to reinforce avoidance rather than foster genuine transformation." },
  { id: "da", name: "Dan Allender", role: "Psychologist, Author of The Wounded Heart", quote: "The church has often said: feel better faster, forgive sooner, speak of your suffering in the past tense. But the Psalms invite us to stay in the present tense of suffering until something real has happened — until God has met us there.", bio: "Allender's work integrates clinical psychology with a deep reading of Scripture, particularly the Psalms. He is one of the most important voices calling the church toward emotional honesty rather than the premature closure of spiritual bypassing." },
];

const practices = [
  { icon: "🔍", title: "Name the Pattern Without Shame", text: "Spiritual bypassing is often unconscious — people genuinely believe they are processing their pain through prayer and Scripture when they are actually avoiding it. Some signs: you feel better after prayer but the same problem keeps returning; you forgive someone but the relationship never actually improves; you quote Bible verses in response to emotional pain rather than sitting with it; you feel vaguely superior to people who struggle openly. Naming the pattern is not self-condemnation. It is the beginning of honesty." },
  { icon: "🪑", title: "Practice Sitting With Emotion", text: "Spiritual bypassing avoids emotional experience. The antidote is learning to sit with emotion long enough for it to tell you something true. Before reaching for a Bible verse or a prayer, ask: what am I actually feeling? Name it as specifically as possible. Anxiety is not the same as dread is not the same as shame. Sit with the feeling for a few minutes without doing anything about it. This is not wallowing — it is the first step toward honest prayer." },
  { icon: "🗣️", title: "Find a Therapist Who Supports Emotional Integration", text: "If you have been using spiritual disciplines to avoid emotional work, therapy can be disorienting at first — it invites you to pay attention to exactly what you have been trained to transcend. A therapist who understands faith integration (AACC therapist finder: aacc.net) can help you honor both your spiritual life and your emotional reality, rather than choosing between them." },
  { icon: "📖", title: "Pray the Psalms of Lament", text: "Of the 150 Psalms, approximately 70 are laments. They model a spirituality of complete emotional honesty — anger, fear, doubt, despair, accusation directed at God — integrated with genuine faith. Psalms 13, 22, 42, 43, 44, 73, 77, 88 are starting points. Read them aloud. Pray them as your own words. Let the text give language to what you have been training yourself not to feel." },
];

const scriptures = [
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn." },
  { verse: "Ecclesiastes 3:4", text: "A time to weep and a time to laugh, a time to mourn and a time to dance." },
  { verse: "Lamentations 2:19", text: "Arise, cry out in the night, as the watches of the night begin; pour out your heart like water in the presence of the Lord." },
  { verse: "James 4:9", text: "Grieve, mourn and wail. Change your laughter to mourning and your joy to gloom." },
  { verse: "John 11:35", text: "Jesus wept." },
];

type SBEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function SpiritualBypassingPage() {
  const [tab, setTab] = useState("theology");
  const [sbJournal, setSbJournal] = useState<SBEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_spiritbypassj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_spiritbypassj_entries", JSON.stringify(sbJournal)); } catch {}
  }, [sbJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setSbJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setSbJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Emotional Health & Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Spiritual Bypassing</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          Using spirituality to avoid emotional work — recognizing the pattern and finding the way through.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Emotional Honesty Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What am I actually feeling right now, as specifically as I can name it?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What truth meets this feeling — not to dismiss it, but to accompany it?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One step toward deeper honesty — with God, myself, or another person</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {sbJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {sbJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Feeling: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Truth: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Step: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "The Psalms of Lament: Permission to Grieve", channel: "The Bible Project", description: "An exploration of the lament psalms — how they model honest, raw prayer that bypasses bypassing — and why the church needs to recover the practice of bringing real grief to God." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the biblical alternative to spiritual bypassing — how to pray honestly in the darkness without performing peace you do not possess." },
              { videoId: "4Eg_di-O8nM", title: "When Grief Feels Unbearable — The Biblical Response", channel: "Desiring God", description: "Pastoral teaching on grief — what the Bible says about mourning and why God invites honest lament rather than the spiritual performance that bypassing demands." },
              { videoId: "t6L-F2emwUc", title: "Spiritual Depression in the Psalms", channel: "John Piper", description: "Piper explores how the psalmist models honest speech in the direction of God when the soul is cast down — the antithesis of spiritual bypassing — showing that lament is faith, not its failure." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
