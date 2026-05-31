"use client";
import { useState, useEffect } from "react";

const PASSAGES_FOR_MEDITATION = [
  { id: "ps23", title: "The Lord is My Shepherd", reference: "Psalm 23", text: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.", theme: "Peace & Trust", duration: 8 },
  { id: "john14", title: "Do Not Let Your Hearts Be Troubled", reference: "John 14:1–6", text: "Do not let your hearts be troubled. You believe in God; believe also in me. My Father's house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you? And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am.", theme: "Comfort", duration: 7 },
  { id: "isa4031", title: "Those Who Wait on the Lord", reference: "Isaiah 40:28–31", text: "Do you not know? Have you not heard? The Lord is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom. He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", theme: "Strength & Renewal", duration: 9 },
  { id: "phil4", title: "The Peace That Transcends Understanding", reference: "Philippians 4:4–9", text: "Rejoice in the Lord always. I will say it again: Rejoice! Let your gentleness be evident to all. The Lord is near. Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", theme: "Anxiety & Peace", duration: 8 },
  { id: "rom8", title: "Nothing Can Separate Us", reference: "Romans 8:35–39", text: "Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword? No, in all these things we are more than conquerors through him who loved us. For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", theme: "God's Love", duration: 8 },
  { id: "matt6", title: "The Sermon on the Mount — Anxiety", reference: "Matthew 6:25–34", text: "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes? Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they? Can any one of you by worrying add a single hour to your life?", theme: "Worry & Trust", duration: 9 },
];

const TECHNIQUES = [
  { id: "lectio", name: "Lectio Divina", icon: "📖", steps: ["Read the passage slowly, twice. Let a word or phrase stand out.", "Reflect: sit with that word or phrase. Repeat it gently. What is God saying?", "Respond: pray naturally from what arose. Converse with God.", "Rest: sit in silence. No agenda. Let God speak."], duration: "15–20 min" },
  { id: "verse", name: "Verse Chewing", icon: "🔄", steps: ["Select a single verse. Read it word by word.", "Emphasize a different word each time: 'GOD so loved...' 'God SO loved...' 'God so LOVED...'", "Ask: What does this word reveal about God, about me, about the situation?", "Pray the verse back to God as a personal declaration."], duration: "5–10 min" },
  { id: "breathe", name: "Breathing Meditation", icon: "🌬️", steps: ["Choose a short phrase from Scripture (e.g., 'You are with me').", "Breathe in slowly on the first half: 'You are...'", "Breathe out on the second half: '...with me.'", "Repeat for 5-10 minutes. Let the truth settle into your body."], duration: "5–10 min" },
  { id: "imagination", name: "Gospel Imagination", icon: "🎨", steps: ["Select a Gospel narrative (e.g., the calming of the storm, the feeding of 5,000).", "Place yourself in the scene. What do you see, hear, smell? Who are you in the story?", "Watch Jesus. What does he do? What does he say to you?", "Write or pray what arose. What did this reveal about Christ? About yourself?"], duration: "15–20 min" },
  { id: "psalm", name: "Psalm Praying", icon: "🎵", steps: ["Choose a psalm (Ps 23, 27, 46, 91, 139 are great starting points).", "Read it once for comprehension.", "Read it again, slowly — pause at each image. Let it evoke feeling.", "Pray the psalm back to God in your own words, as your prayer."], duration: "10–15 min" },
];

const VOICES_MEDITATION = [
  { id: "merton-m", name: "Thomas Merton", era: "1915-1968", context: "New Seeds of Contemplation (1961); The Seven Storey Mountain (1948); Trappist monk at Gethsemani", bio: "Merton is the most widely read Catholic contemplative of the 20th century — and his influence extends deep into evangelical Christianity as well. New Seeds of Contemplation is the most careful account of what Christian meditation is and is not: it is not a technique for achieving spiritual states but an opening of the self to God who is already present. Merton distinguished between the 'false self' — the identity constructed from social performance and achievement — and the 'true self' hidden in God. Meditation, for Merton, is the slow process of dying to the false self and discovering the true self in God.", quote: "The things that we love tell us what we are. And if we love God above all things, then what we are, in our deepest being, is love.", contribution: "Recovered contemplative meditation for Western Christians — both Catholic and Protestant — who had reduced prayer to petition and Bible study to information gathering. New Seeds of Contemplation remains the best introduction to meditative prayer in the Catholic tradition." },
  { id: "guigo", name: "Guigo II", era: "d. c. 1188", context: "The Ladder of Monks (c. 1150); Carthusian Prior", bio: "Guigo II was the Carthusian prior who formalized the four movements of Lectio Divina in his Scala Claustralium (The Ladder of Monks). His four rungs — lectio (reading), meditatio (meditation), oratio (prayer), contemplatio (contemplation) — gave the monastic tradition a vocabulary and structure for what monks had been doing intuitively for centuries. The ladder image is significant: Guigo did not see these as four separate activities but as four interconnected movements in a single ascent, each growing naturally from the one below. His short letter to a friend contains more practical wisdom about meditation than most full-length books on prayer.", quote: "Reading seeks the sweetness of a blessed life, meditation perceives it, prayer asks for it, contemplation tastes it.", contribution: "Created the foundational framework for Christian meditative prayer that has shaped monastic and contemplative practice for 900 years. Lectio Divina as practiced today is essentially Guigo's four-rung ladder, recovered and adapted for contemporary use." },
  { id: "brother-lawrence", name: "Brother Lawrence", era: "c. 1614-1691", context: "The Practice of the Presence of God (posthumously, 1692); lay brother in a Carmelite monastery in Paris", bio: "Brother Lawrence was a former soldier who became a lay brother in a Paris monastery — assigned to work in the kitchen, which he initially hated. His entire spiritual contribution is captured in the thin volume compiled after his death: The Practice of the Presence of God. His insight was simple and revolutionary: one can maintain continuous awareness of God's presence throughout the entire day, not just in formal times of prayer. Washing pots in the monastery kitchen was as sacred as kneeling at the altar — if the heart was oriented toward God. He described his approach not as technique but as habituation: constantly returning the mind to God until it became natural.", quote: "The time of business does not with me differ from the time of prayer. In the noise and clutter of my kitchen, I possess God in as great tranquility as if I were upon my knees.", contribution: "Made contemplative presence accessible to laypeople who would never enter a monastery. The Practice of the Presence of God is probably the most widely read Christian book on prayer after the New Testament itself — readable in an afternoon, comprehensible in a lifetime." },
  { id: "kempis-m", name: "Thomas à Kempis", era: "c. 1380-1471", context: "The Imitation of Christ (c. 1418-1427); Augustinian canon; most copied book in Christian history after the Bible", bio: "The Imitation of Christ — traditionally attributed to Thomas à Kempis — is the most widely read devotional book in Christian history. Its opening line sets its entire orientation: 'What doth it profit a man to enter into deep discussion concerning the Holy Trinity, if he lack humility?' Thomas consistently subordinates intellectual knowledge to inward experience of God. His method of meditation is not technical but moral: the person who meditates on Christ's character and suffering will be gradually conformed to it. Book Two's chapter on 'interior communion' is the most concentrated account of personal meditation on Christ's passion in devotional literature.", quote: "Many words satisfy not the soul, but a good life refresheth the mind, and a pure conscience giveth great confidence towards God.", contribution: "Demonstrated that profound meditation on Christ is accessible to any literate Christian regardless of theological training. The Imitation of Christ has formed the devotional life of every major figure in Western Christian history, from Luther to Ignatius to Wesley." },
  { id: "peterson-m", name: "Eugene Peterson", era: "1932-2018", context: "Eat This Book (2006); The Message translation; pastor for 29 years", bio: "Peterson's Eat This Book makes the case that Scripture was designed for a particular kind of slow, embodied, communal reading — what he calls spiritual reading (as opposed to informational reading). He draws on the metaphor of eating — 'eat this scroll' (Ezekiel 3:1) — to insist that Scripture is meant to be consumed, not merely studied: tasted, chewed, digested, incorporated into the body. His translation of the Bible as The Message was an attempt to make Scripture read the way it would have originally sounded — before it became sacred text — so that it could be received with fresh ears and ruminated upon as if for the first time.", quote: "We don't read the Bible to get information about God; we read it to hear God, to meet God. The Bible is the Spirit's text for spiritual formation.", contribution: "Recovered the category of spiritual reading for Protestant Christians who had reduced Bible engagement to study. His insistence that Scripture is food rather than information reshaped how a generation of evangelicals think about their relationship to the text." },
];

function TimerDisplay({ seconds }: { seconds: number }) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return <span>{m}:{s}</span>;
}

export default function MeditationPage() {
  const [tab, setTab] = useState<"practice" | "passages" | "techniques" | "voices">("practice");
  const [selectedVoice, setSelectedVoice] = useState("merton-m");
  const voiceItem = VOICES_MEDITATION.find(v => v.id === selectedVoice)!;
  const [selectedPassage, setSelectedPassage] = useState(PASSAGES_FOR_MEDITATION[0]);
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(selectedPassage.duration * 60);
  const [timerDone, setTimerDone] = useState(false);
  const [practiceLog, setPracticeLog] = useState<string[]>(() => {
    try { const s = localStorage.getItem("vine_meditation_log"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [savedPassages, setSavedPassages] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_meditation_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [reflection, setReflection] = useState("");
  const [savedReflection, setSavedReflection] = useState(false);

  useEffect(() => {
    if (!timerActive) return;
    if (timeLeft <= 0) { setTimerActive(false); setTimerDone(true); return; }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timerActive, timeLeft]);

  const startSession = (passage: typeof PASSAGES_FOR_MEDITATION[0]) => {
    setSelectedPassage(passage);
    setTimeLeft(passage.duration * 60);
    setTimerActive(false);
    setTimerDone(false);
    setTab("practice");
  };

  const completeSession = () => {
    const entry = `${new Date().toLocaleDateString()} — ${selectedPassage.reference}`;
    const next = [entry, ...practiceLog].slice(0, 50);
    setPracticeLog(next);
    try { localStorage.setItem("vine_meditation_log", JSON.stringify(next)); } catch {}
    if (reflection.trim()) setSavedReflection(true);
  };

  const toggleSave = (id: string) => {
    setSavedPassages(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_meditation_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const progress = timerDone ? 100 : 100 - (timeLeft / (selectedPassage.duration * 60)) * 100;

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🧘</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Biblical Meditation</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>Not emptying the mind — filling it with God's Word</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)", borderRadius: 20, padding: "4px 14px", fontSize: 13 }}>
              {practiceLog.length} Sessions Completed
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: "1px solid #1E1E32" }}>
          {([["practice", "Meditate Now"], ["passages", "Passages"], ["techniques", "Techniques"], ["voices", "Voices"]] as const).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? "#00FF88" : "#6A6A88", borderBottom: `2px solid ${tab === t ? "#00FF88" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Practice Tab */}
        {tab === "practice" && (
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{ background: "#12121F", borderRadius: 20, padding: 28, border: "1px solid #1E1E32", marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{selectedPassage.title}</h2>
                  <p style={{ fontSize: 14, color: "#9898B3" }}>{selectedPassage.reference} · {selectedPassage.duration} min · {selectedPassage.theme}</p>
                </div>
              </div>

              {/* Timer */}
              <div style={{ background: "#0D0D1A", borderRadius: 14, padding: "24px", marginBottom: 20, textAlign: "center", border: "1px solid #1E1E32" }}>
                <div style={{ height: 6, background: "#1E1E32", borderRadius: 3, overflow: "hidden", marginBottom: 16 }}>
                  <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #6B4FBB, #00FF88)", borderRadius: 3, transition: "width 1s linear" }} />
                </div>
                <div style={{ fontSize: 48, fontWeight: 900, color: timerDone ? "#00FF88" : "#F2F2F8", marginBottom: 12, fontVariantNumeric: "tabular-nums" }}>
                  {timerDone ? "✓ Done" : <TimerDisplay seconds={timeLeft} />}
                </div>
                <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                  {!timerDone && (
                    <button onClick={() => setTimerActive(!timerActive)}
                      style={{ padding: "10px 28px", borderRadius: 12, border: timerActive ? "1px solid rgba(239,68,68,0.3)" : "none", background: timerActive ? "rgba(239,68,68,0.15)" : "linear-gradient(135deg, #6B4FBB, #00FF88)", color: timerActive ? "#EF4444" : "#07070F", cursor: "pointer", fontWeight: 800, fontSize: 14 }}>
                      {timerActive ? "Pause" : timeLeft < selectedPassage.duration * 60 ? "Resume" : "Begin"}
                    </button>
                  )}
                  <button onClick={() => { setTimeLeft(selectedPassage.duration * 60); setTimerActive(false); setTimerDone(false); }}
                    style={{ padding: "10px 18px", borderRadius: 12, border: "1px solid #2A2A40", background: "#1E1E32", color: "#9898B3", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                    Reset
                  </button>
                </div>
              </div>

              {/* Passage text */}
              <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 20, marginBottom: 20, borderLeft: "3px solid #6B4FBB" }}>
                <p style={{ fontSize: 16, color: "#C0C0D8", lineHeight: 2, fontStyle: "italic" }}>{selectedPassage.text}</p>
                <p style={{ fontSize: 13, color: "#6B4FBB", marginTop: 10, fontWeight: 700 }}>— {selectedPassage.reference}</p>
              </div>

              {/* Reflection */}
              {(timerDone || progress > 0) && (
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>What arose during meditation?</label>
                  <textarea value={reflection} onChange={e => setReflection(e.target.value)} rows={4} placeholder="A word that stood out, a feeling, a question, a prayer..."
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }} />
                </div>
              )}

              {timerDone && !savedReflection && (
                <button onClick={completeSession}
                  style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #00FF88, #00CC6A)", color: "#07070F", cursor: "pointer", fontWeight: 800, fontSize: 15 }}>
                  Complete Session
                </button>
              )}
              {savedReflection && (
                <div style={{ textAlign: "center", color: "#00FF88", fontWeight: 700, fontSize: 15 }}>✓ Session logged! Well done.</div>
              )}
            </div>

            {/* Change passage */}
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: "#9898B3" }}>Choose a different passage:</h3>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {PASSAGES_FOR_MEDITATION.map(p => (
                  <button key={p.id} onClick={() => startSession(p)}
                    style={{ padding: "6px 14px", borderRadius: 10, border: `1px solid ${selectedPassage.id === p.id ? "#6B4FBB" : "#1E1E32"}`, background: selectedPassage.id === p.id ? "rgba(107,79,187,0.15)" : "transparent", color: selectedPassage.id === p.id ? "#A080FF" : "#9898B3", cursor: "pointer", fontSize: 13, fontWeight: selectedPassage.id === p.id ? 700 : 400 }}>
                    {p.reference}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Passages Tab */}
        {tab === "passages" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {PASSAGES_FOR_MEDITATION.map(p => (
              <div key={p.id} style={{ background: "#12121F", border: `1px solid ${savedPassages.has(p.id) ? "rgba(107,79,187,0.3)" : "#1E1E32"}`, borderRadius: 16, padding: 20, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: "#9898B3" }}>{p.reference}</p>
                  </div>
                  <button onClick={() => toggleSave(p.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: savedPassages.has(p.id) ? "#A080FF" : "#4A4A68" }}>
                    {savedPassages.has(p.id) ? "♥" : "♡"}
                  </button>
                </div>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)", marginBottom: 12, alignSelf: "flex-start" }}>{p.theme}</span>
                <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.6, flex: 1, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {p.text}
                </p>
                <button onClick={() => startSession(p)}
                  style={{ padding: "10px", borderRadius: 10, border: "1px solid rgba(107,79,187,0.3)", background: "rgba(107,79,187,0.08)", color: "#A080FF", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
                  Meditate on This → ({p.duration} min)
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Techniques Tab */}
        {tab === "techniques" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760, margin: "0 auto" }}>
            {TECHNIQUES.map(t => (
              <div key={t.id} style={{ background: "#12121F", borderRadius: 16, padding: 24, border: "1px solid #1E1E32" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 26 }}>{t.icon}</span>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700 }}>{t.name}</h3>
                    <p style={{ fontSize: 13, color: "#9898B3" }}>{t.duration}</p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {t.steps.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(107,79,187,0.2)", border: "1px solid rgba(107,79,187,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#A080FF", flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                      <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.6 }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_MEDITATION.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? "#6B4FBB" : "#12121F", border: `1px solid ${selectedVoice === v.id ? "#6B4FBB" : "#1E1E32"}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: "#F2F2F8", fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: "#9898B3", fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: "#00FF88", fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: "#9898B3", fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: "#F2F2F8", lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: "#07070F", borderLeft: "3px solid #00FF88", borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: "#00FF88", fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: "rgba(107,79,187,0.1)", borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#6B4FBB", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Meditation Practice</div>
                  <p style={{ color: "#F2F2F8", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
