"use client";
import { useState } from "react";

const ARMOR = [
  { piece: "Belt of Truth", icon: "🏅", description: "Truth is not a defensive posture — it is the foundation everything else fastens to. When you are anchored in what is true (who God is, who you are in Christ, what is actually happening), the enemy's primary weapon — deception — loses its power.", howToWear: "Commit to radical honesty with yourself, God, and others. Identify the lies you've believed about yourself, God, and your circumstances. Replace each lie with specific Scripture.", verses: ["John 8:32", "John 14:6", "Romans 12:2"] },
  { piece: "Breastplate of Righteousness", icon: "🛡️", description: "The breastplate covers the heart — the seat of emotion and will. This righteousness is not your own moral performance (which would be a terrible breastplate); it is the imputed righteousness of Christ covering you.", howToWear: "When condemned by the enemy about past sin: recall that Christ's righteousness covers you. Fight guilt-driven vulnerability by standing in what Christ has done, not what you've done.", verses: ["2 Corinthians 5:21", "Romans 3:22", "Isaiah 61:10"] },
  { piece: "Gospel of Peace (Shoes)", icon: "👟", description: "Roman soldiers wore hobnailed sandals for grip and stability. The gospel gives you footing that cannot be knocked loose. You go anywhere and stand anywhere when your feet are planted in the peace of God.", howToWear: "The peace that guards your heart (Philippians 4:7) is maintained through prayer and thanksgiving, not through circumstances being resolved. Practice peace in uncertainty.", verses: ["Philippians 4:6–7", "Isaiah 52:7", "Romans 5:1"] },
  { piece: "Shield of Faith", icon: "🔰", description: "The Roman scutum (large rectangular shield) could be interlocked with others in formation to create a wall that extinguished flaming arrows. Faith is not feelings — it is trust in God's character, especially under fire.", howToWear: "When fear, doubt, or accusation comes: don't fight it with willpower. Lift the shield by speaking aloud what you believe about God. Recite Scripture. Pray with your community (interlocked shields).", verses: ["Hebrews 11:1", "Romans 10:17", "James 1:6"] },
  { piece: "Helmet of Salvation", icon: "⛑️", description: "The helmet protects the mind. The assurance of your salvation — that you are sealed, that nothing separates you from God's love — protects your thinking from the enemy's assaults on your identity and security.", howToWear: "Counter 'I'm not really saved' or 'God doesn't love me' by anchoring in your adoption (Romans 8:15) and the seal of the Spirit (Ephesians 1:13). This is settled. Return to it daily.", verses: ["Romans 8:38–39", "Ephesians 1:13–14", "1 John 5:13"] },
  { piece: "Sword of the Spirit", icon: "⚔️", description: "The sword is the only offensive weapon in the armor. It is the Word of God — specifically, rhema (spoken Word). Jesus used this against Satan in the wilderness: 'It is written...' Three times. Specific Scripture applied to specific temptation.", howToWear: "Memorize Scripture by category: for temptation, for fear, for identity attacks, for relational conflict. When the temptation comes, speak the relevant verse aloud. This is not magic — it is engaging your faith through your mouth.", verses: ["Matthew 4:4–10", "Hebrews 4:12", "Deuteronomy 8:3"] },
  { piece: "Prayer (All Seasons)", icon: "🙏", description: "After listing the armor, Paul immediately says 'pray in the Spirit on all occasions.' Prayer is the atmosphere in which the armor works. It is not the seventh piece — it is the posture of the soldier who wears all six.", howToWear: "Develop a practice of immediate, conversational prayer: not just formal times but a running dialogue with God throughout the day. Alert, persistent, for all the saints.", verses: ["Ephesians 6:18", "1 Thessalonians 5:17", "Luke 18:1"] },
];

const STRATEGIES = [
  { title: "Identify the Battleground", icon: "🗺️", content: "Most spiritual warfare is fought in the mind (2 Corinthians 10:3-5). Before confronting the enemy, identify which thoughts are under assault. Fear? Worthlessness? Hopelessness? Lust? Bitterness? Naming the battleground is half the battle." },
  { title: "Take Every Thought Captive", icon: "🎯", content: "2 Corinthians 10:5 — 'take captive every thought and make it obedient to Christ.' This is not suppression; it is interrogation. When a thought arrives, ask: Is this true? Is this from God? Is this leading me toward him or away from him? Thoughts that fail the test are submitted to Christ's authority." },
  { title: "Resist the Devil", icon: "🚫", content: "James 4:7 — 'Resist the devil, and he will flee from you.' Note the order: submit to God first, then resist. Resistance without submission is willpower, not spiritual authority. But resistance WITH submission — standing on who God is and who you are in him — causes the enemy to flee." },
  { title: "Stand in Community", icon: "👥", content: "The full armor of God in Ephesians 6 is addressed in the plural — 'you all' stand together. Spiritual warfare was never meant to be fought alone. Isolation is itself a tactic of the enemy. Community, accountability, and corporate prayer are strategic weapons." },
  { title: "Name the Lie, Speak the Truth", icon: "💬", content: "When the enemy attacks, he uses lies tailored to your history and wounds. The antidote is not positive thinking — it is specific truth. For every identified lie, find the specific Scripture that contradicts it and speak it aloud. You are renewing your mind (Romans 12:2)." },
  { title: "Worship as Warfare", icon: "🎵", content: "When Jehoshaphat faced a massive army, God told him to send the worshippers first (2 Chronicles 20:21-22). As they began to sing praise, the Lord set ambushes against the enemy. Worship declares truth about God's nature when circumstances say otherwise. That declaration is warfare." },
];

const LIES_TRUTHS = [
  { lie: "You're too far gone to be forgiven.", truth: "No one is too far gone. 'Though your sins are like scarlet, they shall be as white as snow.' (Isaiah 1:18)", category: "Guilt" },
  { lie: "God doesn't actually love you.", truth: "God demonstrated his love for you while you were still a sinner (Romans 5:8). His love is unconditional.", category: "Identity" },
  { lie: "You'll never change.", truth: "God began a good work in you and will carry it to completion (Philippians 1:6). Change is his job.", category: "Despair" },
  { lie: "You have to earn God's favor today.", truth: "You are already fully accepted in the Beloved (Ephesians 1:6). Performance doesn't change your standing.", category: "Legalism" },
  { lie: "This temptation is too strong to resist.", truth: "God will not allow you to be tempted beyond what you can bear, but provides a way out (1 Cor 10:13).", category: "Temptation" },
  { lie: "You're alone in this.", truth: "'Never will I leave you; never will I forsake you.' (Hebrews 13:5) You are never alone.", category: "Loneliness" },
  { lie: "Your prayers don't make a difference.", truth: "The prayer of a righteous person is powerful and effective (James 5:16). God hears you.", category: "Prayer" },
  { lie: "Your past defines your future.", truth: "Anyone in Christ is a new creation; the old has gone, the new has come (2 Corinthians 5:17).", category: "Past" },
  { lie: "God is punishing you through this suffering.", truth: "Suffering can produce perseverance and character (Romans 5:3-4). God is not punishing you.", category: "Suffering" },
  { lie: "You're not good enough to be used by God.", truth: "God chooses the weak and foolish things of the world to shame the strong (1 Corinthians 1:27).", category: "Calling" },
];

const LIE_CATEGORIES = ["All", "Guilt", "Identity", "Despair", "Legalism", "Temptation", "Loneliness", "Prayer", "Past", "Suffering", "Calling"];

export default function SpiritualWarfarePage() {
  const [tab, setTab] = useState<"armor" | "strategies" | "lies">("armor");
  const [openArmor, setOpenArmor] = useState<string | null>(null);
  const [lieCategory, setLieCategory] = useState("All");
  const [savedLies, setSavedLies] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_warfare_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [memorizedLies, setMemorizedLies] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_warfare_memorized"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  const toggleSaveLie = (i: number) => {
    setSavedLies(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      try { localStorage.setItem("vine_warfare_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const toggleMemorize = (i: number) => {
    setMemorizedLies(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      try { localStorage.setItem("vine_warfare_memorized", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filteredLies = LIES_TRUTHS.map((lt, idx) => ({ ...lt, idx })).filter(lt => lieCategory === "All" || lt.category === lieCategory);

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>⚔️</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Spiritual Warfare</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>Stand firm. Put on the full armor of God.</p>
          <div style={{ background: "rgba(0,255,136,0.06)", borderRadius: 14, padding: "12px 20px", marginTop: 20, border: "1px solid rgba(0,255,136,0.15)", maxWidth: 600, margin: "20px auto 0" }}>
            <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>
              "For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world."
            </p>
            <p style={{ fontSize: 13, color: "#00FF88", fontWeight: 700, marginTop: 6 }}>— Ephesians 6:12</p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: "1px solid #1E1E32" }}>
          {([["armor", "The Armor"], ["strategies", "Battle Strategies"], ["lies", "Lies & Truths"]] as const).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? "#00FF88" : "#6A6A88", borderBottom: `2px solid ${tab === t ? "#00FF88" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Armor Tab */}
        {tab === "armor" && (
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ background: "#12121F", borderRadius: 16, padding: 20, marginBottom: 24, border: "1px solid #1E1E32" }}>
              <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.7 }}>
                Ephesians 6:10–18 describes seven elements of God's armor for the believer. Paul wrote this from prison — chained to a Roman soldier — and drew on what he observed. This is not metaphor for passive spiritual life; it is the equipment for active standing, resisting, and advancing in spiritual warfare.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {ARMOR.map(a => (
                <div key={a.piece} style={{ background: "#12121F", borderRadius: 16, overflow: "hidden", border: `1px solid ${openArmor === a.piece ? "rgba(0,255,136,0.3)" : "#1E1E32"}` }}>
                  <div onClick={() => setOpenArmor(openArmor === a.piece ? null : a.piece)}
                    style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                      <span style={{ fontSize: 26 }}>{a.icon}</span>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: openArmor === a.piece ? "#00FF88" : "#F2F2F8" }}>{a.piece}</h3>
                    </div>
                    <span style={{ color: "#6A6A88", fontSize: 20 }}>{openArmor === a.piece ? "−" : "+"}</span>
                  </div>
                  {openArmor === a.piece && (
                    <div style={{ padding: "0 22px 22px", borderTop: "1px solid #1E1E32" }}>
                      <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginTop: 16, marginBottom: 16 }}>{a.description}</p>
                      <div style={{ background: "#0D0D1A", borderRadius: 10, padding: 14, marginBottom: 16, borderLeft: "3px solid #00FF88" }}>
                        <h4 style={{ fontSize: 12, fontWeight: 700, color: "#00FF88", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>How to Wear It</h4>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{a.howToWear}</p>
                      </div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {a.verses.map(v => <span key={v} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 8, background: "rgba(0,255,136,0.08)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}>{v}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Strategies Tab */}
        {tab === "strategies" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
            {STRATEGIES.map(s => (
              <div key={s.title} style={{ background: "#12121F", borderRadius: 16, padding: 24, border: "1px solid #1E1E32" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 28 }}>{s.icon}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#F2F2F8" }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{s.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Lies & Truths Tab */}
        {tab === "lies" && (
          <>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {LIE_CATEGORIES.map(c => (
                <button key={c} onClick={() => setLieCategory(c)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${lieCategory === c ? "#EF4444" : "#1E1E32"}`, background: lieCategory === c ? "rgba(239,68,68,0.1)" : "transparent", color: lieCategory === c ? "#EF4444" : "#9898B3", fontSize: 13, cursor: "pointer", fontWeight: lieCategory === c ? 700 : 400 }}>
                  {c}
                </button>
              ))}
            </div>
            <div style={{ marginBottom: 12, color: "#6A6A88", fontSize: 13 }}>
              {memorizedLies.size}/{LIES_TRUTHS.length} truths memorized
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {filteredLies.map(lt => (
                <div key={lt.idx} style={{ background: "#12121F", borderRadius: 16, overflow: "hidden", border: `1px solid ${memorizedLies.has(lt.idx) ? "rgba(0,255,136,0.2)" : "#1E1E32"}` }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 100 }}>
                    <div style={{ padding: 20, background: "rgba(239,68,68,0.04)", borderRight: "1px solid #1E1E32" }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>❌ The Lie</p>
                      <p style={{ fontSize: 14, color: "#D0D0E8", lineHeight: 1.6 }}>{lt.lie}</p>
                    </div>
                    <div style={{ padding: 20, background: "rgba(0,255,136,0.03)" }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: "#00FF88", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>✓ The Truth</p>
                      <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.6 }}>{lt.truth}</p>
                    </div>
                  </div>
                  <div style={{ padding: "10px 20px", borderTop: "1px solid #1E1E32", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{lt.category}</span>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => toggleSaveLie(lt.idx)}
                        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 15, color: savedLies.has(lt.idx) ? "#FFD700" : "#4A4A68" }}>
                        {savedLies.has(lt.idx) ? "★" : "☆"}
                      </button>
                      <button onClick={() => toggleMemorize(lt.idx)}
                        style={{ padding: "4px 12px", borderRadius: 8, border: `1px solid ${memorizedLies.has(lt.idx) ? "rgba(0,255,136,0.35)" : "#2A2A40"}`, background: memorizedLies.has(lt.idx) ? "rgba(0,255,136,0.1)" : "transparent", color: memorizedLies.has(lt.idx) ? "#00FF88" : "#6A6A88", cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
                        {memorizedLies.has(lt.idx) ? "✓ Memorized" : "Memorize Truth"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
