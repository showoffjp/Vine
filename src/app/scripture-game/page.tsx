"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect, useCallback } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

interface Verse {
  id: string;
  ref: string;
  text: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

interface GameStats {
  totalPlayed: number;
  totalCorrect: number;
  bestStreak: number;
  currentStreak: number;
  categoryScores: Record<string, { correct: number; total: number }>;
}

const verses: Verse[] = [
  { id: "v1", ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", category: "Gospel", difficulty: "Easy" },
  { id: "v2", ref: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", category: "Faith", difficulty: "Easy" },
  { id: "v3", ref: "Philippians 4:13", text: "I can do all this through him who gives me strength.", category: "Strength", difficulty: "Easy" },
  { id: "v4", ref: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", category: "Hope", difficulty: "Easy" },
  { id: "v5", ref: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", category: "Wisdom", difficulty: "Medium" },
  { id: "v6", ref: "Isaiah 40:31", text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", category: "Strength", difficulty: "Medium" },
  { id: "v7", ref: "Psalm 23:1", text: "The Lord is my shepherd; I shall not want.", category: "Trust", difficulty: "Easy" },
  { id: "v8", ref: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest.", category: "Rest", difficulty: "Easy" },
  { id: "v9", ref: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will.", category: "Transformation", difficulty: "Medium" },
  { id: "v10", ref: "Ephesians 2:8-9", text: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.", category: "Gospel", difficulty: "Medium" },
  { id: "v11", ref: "James 1:2-3", text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.", category: "Perseverance", difficulty: "Medium" },
  { id: "v12", ref: "Galatians 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.", category: "Spirit", difficulty: "Medium" },
  { id: "v13", ref: "1 Corinthians 13:4-5", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.", category: "Love", difficulty: "Medium" },
  { id: "v14", ref: "Romans 3:23", text: "For all have sinned and fall short of the glory of God.", category: "Gospel", difficulty: "Easy" },
  { id: "v15", ref: "John 14:6", text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'", category: "Gospel", difficulty: "Easy" },
  { id: "v16", ref: "Hebrews 11:1", text: "Now faith is confidence in what we hope for and assurance about what we do not see.", category: "Faith", difficulty: "Medium" },
  { id: "v17", ref: "Romans 6:23", text: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.", category: "Gospel", difficulty: "Easy" },
  { id: "v18", ref: "Psalm 46:10", text: "He says, 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.'", category: "Peace", difficulty: "Easy" },
  { id: "v19", ref: "2 Timothy 3:16-17", text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.", category: "Scripture", difficulty: "Hard" },
  { id: "v20", ref: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", category: "Peace", difficulty: "Hard" },
  { id: "v21", ref: "Joshua 1:9", text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", category: "Courage", difficulty: "Easy" },
  { id: "v22", ref: "Matthew 6:33", text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.", category: "Faith", difficulty: "Easy" },
  { id: "v23", ref: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.", category: "Forgiveness", difficulty: "Easy" },
  { id: "v24", ref: "Psalm 119:105", text: "Your word is a lamp for my feet, a light on my path.", category: "Scripture", difficulty: "Easy" },
  { id: "v25", ref: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus.", category: "Gospel", difficulty: "Easy" },
];

type GameMode = "ref-to-text" | "text-to-ref" | "fill-blank" | "multiple-choice";

const MODES: { id: GameMode; label: string; description: string; icon: string }[] = [
  { id: "ref-to-text", label: "Reference → Text", description: "See the reference, recall the verse", icon: "📖" },
  { id: "text-to-ref", label: "Text → Reference", description: "See the verse, recall the reference", icon: "🔍" },
  { id: "multiple-choice", label: "Multiple Choice", description: "4 options — pick the right answer", icon: "🎯" },
  { id: "fill-blank", label: "Fill in the Blank", description: "Complete the missing words", icon: "✏️" },
];

const DIFFICULTY_COLORS = { Easy: "#3a7d56", Medium: "#F59E0B", Hard: "#EF4444" };

const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const generateWrongRefs = (correct: Verse, all: Verse[]): string[] =>
  shuffle(all.filter((v) => v.id !== correct.id)).slice(0, 3).map((v) => v.ref);

const truncateText = (t: string): string => t.slice(0, 60) + "...";

const generateWrongTexts = (correct: Verse, all: Verse[]): string[] =>
  shuffle(all.filter((v) => v.id !== correct.id)).slice(0, 3).map((v) => truncateText(v.text));

const blankify = (text: string): { blanked: string; answer: string } => {
  const words = text.split(" ");
  const importantWords = words.filter((w) => w.length > 5);
  if (importantWords.length === 0) return { blanked: text, answer: "" };
  const target = importantWords[Math.floor(Math.random() * Math.min(3, importantWords.length))];
  const blanked = text.replace(new RegExp(`\\b${target}\\b`, "g"), "______");
  return { blanked, answer: target.replace(/[^a-zA-Z]/g, "") };
};

export default function ScriptureGamePage() {
  const [stats, setStats] = useState<GameStats>(() => {
    try {
      const s = localStorage.getItem("vine_scripture_game_stats");
      return s ? (JSON.parse(s) as GameStats) : { totalPlayed: 0, totalCorrect: 0, bestStreak: 0, currentStreak: 0, categoryScores: {} };
    } catch { return { totalPlayed: 0, totalCorrect: 0, bestStreak: 0, currentStreak: 0, categoryScores: {} }; }
  });

  const [mode, setMode] = useState<GameMode | null>(null);
  const [filterDifficulty, setFilterDifficulty] = usePersistedState<"All" | "Easy" | "Medium" | "Hard">("vine_scripture-game_filter_difficulty", "All");
  const [filterCategory, setFilterCategory] = usePersistedState("vine_scripture-game_filter_category", "All");
  const [gameState, setGameState] = useState<"idle" | "playing" | "result" | "done">("idle");
  const [queue, setQueue] = useState<Verse[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [choices, setChoices] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [blank, setBlank] = useState<{ blanked: string; answer: string } | null>(null);

  const saveStats = (s: GameStats) => {
    try { localStorage.setItem("vine_scripture_game_stats", JSON.stringify(s)); } catch {}
  };

  const categories = ["All", ...Array.from(new Set(verses.map((v) => v.category)))];

  const startGame = (selectedMode: GameMode) => {
    const filtered = verses.filter((v) => {
      if (filterDifficulty !== "All" && v.difficulty !== filterDifficulty) return false;
      if (filterCategory !== "All" && v.category !== filterCategory) return false;
      return true;
    });
    if (filtered.length < 4) return;
    const q = shuffle(filtered).slice(0, 10);
    setQueue(q);
    setCurrentIdx(0);
    setMode(selectedMode);
    setGameState("playing");
    setupQuestion(q[0], selectedMode, q);
  };

  const setupQuestion = useCallback((verse: Verse, m: GameMode, pool: Verse[]) => {
    setSelected(null);
    setIsCorrect(null);
    setAnswer("");

    if (m === "multiple-choice") {
      if (pool.length < 4) return;
      const wrongTexts = generateWrongTexts(verse, pool);
      setChoices(shuffle([truncateText(verse.text), ...wrongTexts]));
    } else if (m === "text-to-ref") {
      const wrongRefs = generateWrongRefs(verse, pool);
      setChoices(shuffle([verse.ref, ...wrongRefs]));
    } else if (m === "fill-blank") {
      const b = blankify(verse.text);
      setBlank(b);
    }
  }, []);

  const handleAnswer = (userAnswer: string) => {
    if (!mode || currentIdx >= queue.length) return;
    const verse = queue[currentIdx];
    let correct = false;

    if (mode === "multiple-choice") {
      correct = userAnswer === truncateText(verse.text);
      setSelected(userAnswer);
    } else if (mode === "text-to-ref") {
      correct = userAnswer === verse.ref;
      setSelected(userAnswer);
    } else if (mode === "ref-to-text") {
      correct = userAnswer.toLowerCase().trim() === verse.text.toLowerCase().trim();
      setSelected(userAnswer);
    } else if (mode === "fill-blank") {
      correct = userAnswer.toLowerCase().replace(/[^a-z]/g, "") === (blank?.answer.toLowerCase() ?? "");
      setSelected(userAnswer);
    }

    setIsCorrect(correct);

    setStats((prev) => {
      const streak = correct ? prev.currentStreak + 1 : 0;
      const cat = prev.categoryScores[verse.category] ?? { correct: 0, total: 0 };
      const next: GameStats = {
        totalPlayed: prev.totalPlayed + 1,
        totalCorrect: prev.totalCorrect + (correct ? 1 : 0),
        bestStreak: Math.max(prev.bestStreak, streak),
        currentStreak: streak,
        categoryScores: {
          ...prev.categoryScores,
          [verse.category]: { correct: cat.correct + (correct ? 1 : 0), total: cat.total + 1 },
        },
      };
      saveStats(next);
      return next;
    });

    setTimeout(() => {
      const next = currentIdx + 1;
      if (next >= queue.length) {
        setGameState("done");
      } else {
        setCurrentIdx(next);
        setupQuestion(queue[next], mode, queue);
      }
    }, 1500);
  };

  const verse = queue[currentIdx];
  const correctChoice = verse ? (mode === "multiple-choice" ? truncateText(verse.text) : verse.ref) : "";
  const accuracy = stats.totalPlayed > 0 ? Math.round((stats.totalCorrect / stats.totalPlayed) * 100) : 0;

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main id="main-content">
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0a1a10 0%, #07070F 100%)", padding: "48px 24px 36px", textAlign: "center", borderBottom: "1px solid #1E1E32" }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>⚡</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Scripture Memory Game</h1>
        <p style={{ fontSize: 15, color: "#9898B3", maxWidth: 480, margin: "0 auto 24px" }}>
          4 game modes. 25 verses. Build your Bible memory one verse at a time.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { value: `${accuracy}%`, label: "Accuracy" },
            { value: stats.totalPlayed.toString(), label: "Questions Answered" },
            { value: stats.bestStreak.toString(), label: "Best Streak" },
            { value: stats.currentStreak.toString(), label: "Current Streak" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#3a7d56" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#9898B3" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 24px" }}>
        {gameState === "idle" && (
          <>
            {/* Mode selection */}
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#F2F2F8", marginBottom: 16 }}>Choose a Game Mode</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 14, marginBottom: 28 }}>
              {MODES.map((m) => (
                <div key={m.id}
                  style={{
                    background: "#12121F", border: `2px solid ${mode === m.id ? "#6B4FBB" : "#1E1E32"}`,
                    borderRadius: 14, padding: 18, cursor: "pointer", textAlign: "center",
                    transition: "border-color 0.2s",
                  }}
                  onClick={() => setMode(m.id)}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{m.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#F2F2F8", marginBottom: 4 }}>{m.label}</div>
                  <div style={{ fontSize: 11, color: "#9898B3", lineHeight: 1.4 }}>{m.description}</div>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 28 }}>
              <div>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 6 }}>Difficulty</div>
                <div style={{ display: "flex", gap: 6 }}>
                  {(["All", "Easy", "Medium", "Hard"] as const).map((d) => (
                    <button type="button" key={d} onClick={() => setFilterDifficulty(d)}
                      style={{
                        padding: "5px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                        border: `1px solid ${filterDifficulty === d ? (d === "All" ? "#6B4FBB" : DIFFICULTY_COLORS[d] ?? "#6B4FBB") : "#1E1E32"}`,
                        background: filterDifficulty === d ? `${d === "All" ? "#6B4FBB" : DIFFICULTY_COLORS[d] ?? "#6B4FBB"}20` : "transparent",
                        color: filterDifficulty === d ? (d === "All" ? "#6B4FBB" : DIFFICULTY_COLORS[d] ?? "#6B4FBB") : "#9898B3",
                      }}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 6 }}>Category</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {categories.map((c) => (
                    <button type="button" key={c} onClick={() => setFilterCategory(c)}
                      style={{
                        padding: "5px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                        border: `1px solid ${filterCategory === c ? "#3a7d56" : "#1E1E32"}`,
                        background: filterCategory === c ? "#3a7d5615" : "transparent",
                        color: filterCategory === c ? "#3a7d56" : "#9898B3",
                      }}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button type="button"
              onClick={() => mode && startGame(mode)}
              disabled={!mode}
              style={{
                width: "100%", padding: "14px 20px", borderRadius: 12, border: "none",
                background: mode ? "#3a7d56" : "#1E1E32",
                color: mode ? "#07070F" : "#9898B3",
                cursor: mode ? "pointer" : "default",
                fontWeight: 700, fontSize: 17,
              }}>
              {mode ? `Start — ${MODES.find((m) => m.id === mode)?.label}` : "Select a mode to start"}
            </button>

            {/* Category scores */}
            {Object.keys(stats.categoryScores).length > 0 && (
              <div style={{ marginTop: 32 }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#F2F2F8", marginBottom: 14 }}>Category Progress</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10 }}>
                  {Object.entries(stats.categoryScores).map(([cat, score]) => {
                    const pct = Math.round((score.correct / score.total) * 100);
                    return (
                      <div key={cat} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "12px 14px" }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#F2F2F8", marginBottom: 6 }}>{cat}</div>
                        <div style={{ height: 4, background: "#1E1E32", borderRadius: 2, marginBottom: 4 }}>
                          <div style={{ height: "100%", borderRadius: 2, background: pct >= 80 ? "#3a7d56" : pct >= 50 ? "#F59E0B" : "#EF4444", width: `${pct}%`, transition: "width 0.5s" }} />
                        </div>
                        <div style={{ fontSize: 11, color: "#9898B3" }}>{score.correct}/{score.total} ({pct}%)</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}

        {/* PLAYING */}
        {gameState === "playing" && verse && mode && (
          <div>
            {/* Progress */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 13, color: "#9898B3" }}>
              <span>{currentIdx + 1} / {queue.length}</span>
              <span style={{ color: DIFFICULTY_COLORS[verse.difficulty] }}>{verse.difficulty}</span>
              <span>{verse.category}</span>
            </div>
            <div style={{ height: 4, background: "#1E1E32", borderRadius: 2, marginBottom: 28 }}>
              <div style={{ height: "100%", borderRadius: 2, background: "#6B4FBB", width: `${((currentIdx) / queue.length) * 100}%`, transition: "width 0.3s" }} />
            </div>

            {/* Question */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 24, marginBottom: 20 }}>
              {mode === "ref-to-text" && (
                <>
                  <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 8 }}>What does this verse say?</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#6B4FBB" }}>{verse.ref}</div>
                </>
              )}
              {mode === "text-to-ref" && (
                <>
                  <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 10 }}>Which reference is this verse from?</div>
                  <div style={{ fontSize: 15, color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7 }}>"{verse.text}"</div>
                </>
              )}
              {mode === "multiple-choice" && (
                <>
                  <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 8 }}>Which verse matches this reference?</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#6B4FBB" }}>{verse.ref}</div>
                </>
              )}
              {mode === "fill-blank" && blank && (
                <>
                  <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 10 }}>Fill in the blank — {verse.ref}</div>
                  <div style={{ fontSize: 15, color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7 }}>"{blank.blanked}"</div>
                </>
              )}
            </div>

            {/* Answer area */}
            {(mode === "multiple-choice" || mode === "text-to-ref") && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {choices.map((choice) => (
                  <button type="button" key={choice} onClick={() => !selected && handleAnswer(choice)}
                    style={{
                      padding: "12px 16px", borderRadius: 10, border: "2px solid",
                      borderColor: selected === choice
                        ? (isCorrect ? "#3a7d56" : "#EF4444")
                        : choice === correctChoice && selected !== null
                        ? "#3a7d56"
                        : "#1E1E32",
                      background: selected === choice
                        ? (isCorrect ? "#3a7d5615" : "#EF444415")
                        : choice === correctChoice && selected !== null
                        ? "#3a7d5615"
                        : "#12121F",
                      color: "#F2F2F8", cursor: selected ? "default" : "pointer",
                      fontSize: 13, fontWeight: 500, textAlign: "left", lineHeight: 1.4,
                    }}>
                    {choice.length > 50 ? choice.slice(0, 50) + "..." : choice}
                  </button>
                ))}
              </div>
            )}

            {mode === "ref-to-text" && (
              <div>
                <textarea value={answer} onChange={(e) => setAnswer(e.target.value)}
                  disabled={selected !== null}
                  aria-label="Type the verse from memory..." placeholder="Type the verse from memory..."
                  rows={4}
                  style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "12px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", resize: "none", boxSizing: "border-box", marginBottom: 12 }} />
                <button type="button" onClick={() => answer && !selected && handleAnswer(answer)}
                  disabled={!answer || selected !== null}
                  style={{ padding: "11px 28px", borderRadius: 10, border: "none",
                    background: answer && !selected ? "#6B4FBB" : "#1E1E32",
                    color: answer && !selected ? "#fff" : "#9898B3",
                    cursor: answer && !selected ? "pointer" : "default", fontWeight: 700, fontSize: 15 }}>
                  Check
                </button>
              </div>
            )}

            {mode === "fill-blank" && (
              <div style={{ display: "flex", gap: 10 }}>
                <input value={answer} onChange={(e) => setAnswer(e.target.value)}
                  disabled={selected !== null}
                  aria-label="Type the missing word..." placeholder="Type the missing word..."
                  onKeyDown={(e) => e.key === "Enter" && answer && !selected && handleAnswer(answer)}
                  style={{ flex: 1, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "12px 14px", color: "#F2F2F8", fontSize: 14, outline: "none" }} />
                <button type="button" onClick={() => answer && !selected && handleAnswer(answer)}
                  disabled={!answer || selected !== null}
                  style={{ padding: "11px 24px", borderRadius: 10, border: "none",
                    background: answer && !selected ? "#6B4FBB" : "#1E1E32",
                    color: answer && !selected ? "#fff" : "#9898B3",
                    cursor: answer && !selected ? "pointer" : "default", fontWeight: 700 }}>
                  Check
                </button>
              </div>
            )}

            {/* Feedback */}
            {selected !== null && isCorrect !== null && (
              <div style={{
                marginTop: 16, padding: "12px 16px", borderRadius: 10,
                background: isCorrect ? "#3a7d5615" : "#EF444415",
                border: `1px solid ${isCorrect ? "#3a7d5640" : "#EF444440"}`,
                color: isCorrect ? "#3a7d56" : "#EF4444",
                fontSize: 14, fontWeight: 600,
              }}>
                {isCorrect ? "✓ Correct!" : `✗ The answer was: ${mode === "text-to-ref" ? verse.ref : mode === "multiple-choice" ? correctChoice : mode === "fill-blank" ? (blank?.answer ?? "") : verse.text}`}
                <div style={{ fontSize: 12, fontWeight: 400, marginTop: 4, color: "#9898B3" }}>
                  {isCorrect
                    ? `Streak: ${stats.currentStreak} 🔥`
                    : "Keep practicing — you're building your memory!"}
                </div>
              </div>
            )}
          </div>
        )}

        {/* DONE */}
        {gameState === "done" && (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#F2F2F8", marginBottom: 8 }}>Round Complete!</h2>
            <p style={{ fontSize: 15, color: "#9898B3", marginBottom: 28 }}>
              Accuracy: {accuracy}% · Best streak: {stats.bestStreak} · Total answered: {stats.totalPlayed}
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button type="button" onClick={() => { setGameState("idle"); setMode(null); }}
                style={{ padding: "12px 28px", borderRadius: 10, background: "#3a7d56", border: "none", color: "#07070F", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                Play Again
              </button>
              <button type="button" onClick={() => mode && startGame(mode)}
                style={{ padding: "12px 28px", borderRadius: 10, background: "#6B4FBB", border: "none", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                Retry Same Mode
              </button>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
