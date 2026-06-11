"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "God Does Not Require You to Remain in Danger", verse: "Proverbs 22:3", body: "'The prudent see danger and take refuge, but the simple keep going and pay the penalty' (Proverbs 22:3). The Bible presents self-protection as wisdom, not selfishness. The same God who created you with dignity does not require you to remain in circumstances that destroy that dignity and endanger your life. Seeking safety is not a failure of faith or marriage vows — it is wisdom, prudence, and the appropriate protection of the life God gave you." },
  { title: "God Cares About the Vulnerable — With Force", verse: "Psalm 10:17-18", body: "'You, LORD, hear the desire of the afflicted; you encourage them, and you listen to their cry, defending the fatherless and the oppressed, so that mere earthly mortals will never again strike terror' (Psalm 10:17-18). Scripture is not neutral about those who use power to terrorize the vulnerable. God explicitly aligns himself with the victim, not the institution that enables or ignores abuse. The church that protects abusers rather than victims has inverted the posture of the God it claims to represent." },
  { title: "'Submission' Was Never Designed to Require Enduring Violence", verse: "Ephesians 5:25", body: "The instruction for husbands in Ephesians 5:25 — 'Husbands, love your wives, just as Christ loved the church and gave himself up for her' — describes a sacrifice of self for the other's flourishing. This is the context in which biblical submission was designed to operate. When the context is violence, coercion, or control rather than sacrificial love, the theological framework that makes sense of biblical marriage language has already been broken — by the abuser. You are not the one who violated the covenant." },
  { title: "Divorce Is Permitted When the Covenant Has Been Broken", verse: "Malachi 2:16", body: "Malachi 2:16, properly translated in context, declares that God hates both divorce and the violence and treachery that destroy marriages. The same passage that warns against casual divorce also condemns those who cover themselves with violence — the abuser, not the person seeking safety. Biblical scholars including David Instone-Brewer have documented that Jesus and Paul both recognized legitimate grounds for divorce when the covenant was violated. Abuse violates the covenant." },
  { title: "Jesus Specifically Sought Out and Protected Vulnerable Women", verse: "John 8:10-11", body: "Throughout the Gospels, Jesus went out of his way to see, dignify, and protect women who had been made vulnerable by the structures of his day — the bleeding woman, the widow of Nain, the woman caught in adultery whom the crowd wanted to stone. He did not tell the woman brought before him to 'work it out' with those who had weaponized religious authority against her. He stood between her and those who wanted to harm her, and he told her to go and be free. He does not tell you otherwise." },
];

const VOICES = [
  { id: "langberg", name: "Diane Langberg", era: "1950–present", context: "Psychologist; Redeeming Power; abuse specialist", bio: "Langberg has spent decades working with trauma and abuse survivors and has become one of the most important voices calling the church to respond rightly to domestic abuse — neither minimizing it nor mishandling it in ways that leave victims more exposed. Her work addresses both the psychology of abuse and the theological frameworks that churches use to enable or confront it.", quote: "The church was never meant to be a place where victims are protected less than their abusers. But when we prioritize the marriage institution over the safety of the people in it, when we press women back into dangerous homes in the name of forgiveness, we become complicit in the harm done to them.", contribution: "Langberg equipped pastors and churches to respond to domestic abuse in ways that center the safety of victims rather than the preservation of the institution, and gave survivors language for why the church's response had often failed them." },
  { id: "vernick", name: "Leslie Vernick", era: "1958–present", context: "Counselor; The Emotionally Destructive Marriage", bio: "Vernick's The Emotionally Destructive Marriage is one of the most widely used Christian resources for those in abusive marriages. She is careful not to encourage unnecessary divorce while also refusing to minimize emotional and physical abuse or counsel women to remain in dangerous situations in the name of biblical marriage.", quote: "God cares more about the people in a marriage than the institution of marriage itself. He designed marriage to be a place of love, safety, and mutual flourishing. When it becomes a place of harm, his primary concern is for the safety of the person being harmed — not for the preservation of the structure that has already been broken by the abuser.", contribution: "Vernick gave Christian women in abusive marriages a biblically grounded framework for recognizing abuse, assessing danger, and making decisions about safety and departure without losing their faith in the process." },
  { id: "gothard-response", name: "Justin Holcomb", era: "1975–present", context: "Pastor; Is It My Fault?; sexual and domestic abuse theology", bio: "Holcomb's Is It My Fault? (co-authored with Lindsey Holcomb) addresses the specific theological damage done by abuse — particularly the shame and self-blame that are systematically installed by abusers. His work helps survivors understand that the abuser is responsible for the abuse, that God is not indifferent to what happened, and that healing is possible.", quote: "The abuser works to make you believe this is your fault, that you deserved it, that God sees you as damaged. These are lies. Abuse is never the victim's fault. It is always the abuser's choice. And the God who sees your suffering is not the God your abuser described to you.", contribution: "Holcomb provided a theologically careful deconstruction of the shame-and-blame cycle that keeps abuse victims trapped, and a positive account of God's posture toward those who have suffered abuse." },
];

const PRACTICES = [
  { title: "Your Safety Comes First — Always", icon: "🚨", color: "#EF4444", desc: "Before theology, before counseling, before healing — safety. If you are in immediate danger, your first action is getting yourself and your children to safety. Everything else can be addressed after that.", steps: ["National Domestic Violence Hotline: 1-800-799-7233 (SAFE) — call or text, 24/7, confidential", "If in immediate danger: call 911", "thehotline.org has a live chat option if calling is not safe", "Plan: have an emergency bag (ID, medications, important documents, some cash) accessible", "Identify a safe person outside the home who knows your situation"] },
  { title: "Find a Counselor Who Understands Abuse", icon: "🤝", color: PURPLE, desc: "Not every counselor understands domestic abuse dynamics — including the cycle of abuse, coercive control, and the particular dangers of couples counseling when abuse is present. Couples counseling with an abuser is not safe and often makes the situation more dangerous.", steps: ["Look specifically for counselors trained in domestic abuse and trauma", "Do NOT do couples counseling with an abuser — it gives them access to information they will use against you", "Domestic violence advocates at local shelters often provide free counseling referrals", "The National DV Hotline can help you find local resources: 1-800-799-7233"] },
  { title: "Document What Is Happening", icon: "📋", color: GREEN, desc: "If you are in a situation where you may need legal protection or are considering leaving, documentation can be critically important — for your protection and for any legal proceedings.", steps: ["Keep a private journal (not accessible to your abuser) of incidents with dates", "Photograph injuries — store photos in a cloud account your abuser cannot access", "Keep records of any police reports, medical visits, or communications", "Store documents somewhere safe: a trusted friend's home, a safe deposit box, or cloud storage with a private account"] },
  { title: "Plan Your Exit Carefully", icon: "🚪", color: "#F59E0B", desc: "Leaving an abusive relationship is the most dangerous time for many victims. The risk of violence increases when a victim attempts to leave. Safe exit planning with an advocate is essential.", steps: ["Contact the National DV Hotline before leaving for safety planning: 1-800-799-7233", "Identify a local shelter or safe house in advance", "Leave when your abuser is not present if possible", "Do not announce your departure in advance — this is not deception, this is survival"] },
];

const SCRIPTURE = [
  { verse: "Psalm 10:17-18", text: "You, LORD, hear the desire of the afflicted; you encourage them, and you listen to their cry, defending the fatherless and the oppressed." },
  { verse: "Proverbs 22:3", text: "The prudent see danger and take refuge, but the simple keep going and pay the penalty." },
  { verse: "Psalm 72:14", text: "He will rescue them from oppression and violence, for precious is their blood in his sight." },
  { verse: "Isaiah 1:17", text: "Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow." },
  { verse: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Romans 8:35-39", text: "Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword?... No, in all these things we are more than conquerors." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function DomesticAbusePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_domestic_abuse_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_domestic_abuse_voice", "langberg");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type DomesticAbuseJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [daJournal, setDaJournal] = useState<DomesticAbuseJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_domabusej_entries") ?? "[]"); } catch { return []; } });
  const [jdaFeeling, setJdaFeeling] = useState("");
  const [jdaTruth, setJdaTruth] = useState("");
  const [jdaStep, setJdaStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_domabusej_entries", JSON.stringify(daJournal)); } catch {} }, [daJournal]);
  function saveDaEntry() {
    if (!jdaFeeling.trim() && !jdaTruth.trim()) return;
    setDaJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jdaFeeling, truth: jdaTruth, step: jdaStep }, ...prev]);
    setJdaFeeling(""); setJdaTruth(""); setJdaStep("");
  }
  function deleteDaEntry(id: string) { setDaJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(180deg, rgba(239,68,68,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🛡️</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Domestic Abuse &amp; Safety</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto 24px", lineHeight: 1.75 }}>
          God does not require you to remain in danger. Your safety matters.
          Theology, voices, and practical help for those experiencing abuse.
        </p>
        <div style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.35)", borderRadius: 10, padding: "16px 20px", maxWidth: 520, margin: "0 auto", fontSize: 14, color: "#F8B0B0", lineHeight: 1.8 }}>
          <strong style={{ fontSize: 16 }}>🚨 If you are in immediate danger: Call 911</strong><br />
          <strong>National DV Hotline:</strong> <strong>1-800-799-7233</strong> (call or text, 24/7)<br />
          <strong>thehotline.org</strong> has live chat if calling is not safe<br />
          <strong>988</strong> Suicide &amp; Crisis Lifeline
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0", overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {THEOLOGY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0, flex: 1, paddingRight: 16 }}>{item.title}</h3>
                  <span style={{ fontSize: 12, color: PURPLE, fontWeight: 700, whiteSpace: "nowrap", background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 6, padding: "3px 10px" }}>{item.verse}</span>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${selectedVoice === v.id ? GREEN : BORDER}`, background: selectedVoice === v.id ? `${GREEN}18` : "transparent", color: selectedVoice === v.id ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {v.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ marginBottom: 6 }}><span style={{ fontSize: 22, fontWeight: 900 }}>{voice.name}</span><span style={{ color: MUTED, fontSize: 13, marginLeft: 12 }}>{voice.era}</span></div>
              <div style={{ color: GREEN, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
              <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 18, margin: "0 0 20px", color: "#e0e0f0", fontSize: 15, fontStyle: "italic", lineHeight: 1.75 }}>&ldquo;{voice.quote}&rdquo;</blockquote>
              <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Contribution</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PRACTICES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.steps.map((s, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: p.color, fontWeight: 900, fontSize: 13, minWidth: 20 }}>{j + 1}.</span>
                      <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {SCRIPTURE.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: PURPLE, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Private Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 8, lineHeight: 1.7 }}>
                This journal is stored only on your device. Clear your browser history after use if you are concerned about privacy.
                Write honestly. Your experience is real. Your feelings are valid.
              </p>
              <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "#F8B0B0" }}>
                ⚠️ Safety note: If your device is monitored, consider using a private/incognito browser window.
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jdaFeeling} onChange={e => setJdaFeeling(e.target.value)}
                  placeholder="What am I experiencing? What has happened? What am I feeling?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jdaTruth} onChange={e => setJdaTruth(e.target.value)}
                  placeholder="One thing I know is true — about my worth, about God's care, about what I deserve..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jdaStep} onChange={e => setJdaStep(e.target.value)}
                  placeholder="One step toward safety or support I can take..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveDaEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {daJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Writing can help clarify what you are experiencing.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {daJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteDaEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.feeling && <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.feeling}</p>}
                    {e.truth && <p style={{ color: GREEN, fontSize: 13, lineHeight: 1.65, marginBottom: 6 }}>✝ {e.truth}</p>}
                    {e.step && <p style={{ color: PURPLE, fontSize: 13, fontStyle: "italic" }}>→ {e.step}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { videoId: "QEF3bqCb_Jw", title: "Domestic Violence in the Church — Diane Langberg", channel: "Diane Langberg", description: "Langberg addresses how the church has historically handled domestic abuse badly — prioritizing the institution over the victim — and what a faithful, safe response to abuse looks like." },
              { videoId: "NMqfmW0RVdI", title: "The Emotionally Destructive Marriage — Leslie Vernick", channel: "Focus on the Family", description: "Vernick on how to recognize emotionally and physically destructive marriages, what the Bible actually says about divorce in these contexts, and how to make wise, faithful decisions about your own safety." },
              { videoId: "g7A1T4pFGqg", title: "Is It My Fault? — Justin Holcomb", channel: "The Gospel Coalition", description: "Holcomb on the theology of abuse — God's response to those who are abused, the lie of victim-blame, and what genuine healing and dignity look like for survivors." },
              { videoId: "sQBFTZNx4d0", title: "Safety Planning for Domestic Violence Survivors", channel: "National DV Hotline", description: "A practical guide to safety planning — the steps to prepare for leaving, what to bring, how to communicate safely, and how to access help when you are ready." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
