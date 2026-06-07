"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Names Abusers — Including in the Church", verse: "Ezekiel 34:2-4", text: "God speaks directly to shepherds who exploit the flock: 'Woe to you shepherds of Israel who only take care of yourselves... You have ruled them harshly and brutally.' The Bible names abusive leadership explicitly and does not excuse it with appeals to authority or submission. Naming what is happening to you as abuse is not unfaithfulness — it is biblical discernment." },
  { title: "Submission Does Not Mean Toleration of Abuse", verse: "Proverbs 22:3", text: "The prudent see danger and take refuge. Submission to authority is a biblical value — but it was never meant to mean remaining passive while being manipulated, controlled, or harmed. The abuser who uses biblical language to demand compliance is weaponizing Scripture. The command to submit does not override the command not to harm." },
  { title: "You Were Made in the Image of God — and That Cannot Be Destroyed", verse: "Genesis 1:27", text: "Narcissistic abuse attempts to systematically dismantle the victim's sense of self, their perceptions, and their sense of worth. This is an assault on the image of God in them. But the Imago Dei is not destroyable. It can be buried, distorted, or temporarily lost from sight — but God does not retract it. Your worth is not dependent on the abuser's verdict." },
  { title: "God Sees What Was Hidden", verse: "Psalm 10:14", text: "The psalmist writes about the wicked who attack the innocent in secret, who believe no one sees. But God says: 'You, God, see the trouble of the afflicted; you consider their grief and take it in hand.' Narcissistic abuse often happens in private, behind a perfect public image. God sees what your abuser hid from everyone else." },
  { title: "The Healing of the Mind Is a Spiritual Work", verse: "Romans 12:2", text: "Be transformed by the renewing of your mind. Narcissistic abuse works by corrupting your perception of reality (gaslighting) and your sense of self. Healing requires the literal renewal of thought patterns, identity, and perception that was systematically distorted. Therapy, community, and truth-saturated Scripture study are the instruments God uses to rebuild what abuse tried to destroy." },
];

const voices = [
  { id: "dl", name: "Diane Langberg", role: "Psychologist, Author of Redeeming Power", quote: "Abuse is never about the victim. It is about the abuser's use of power for their own purposes. The church must stop asking 'What did you do to provoke this?' and start asking 'How can we stop this?'", bio: "Langberg is one of the foremost Christian psychologists on the topics of trauma, abuse of power, and narcissism in religious contexts. Her book Redeeming Power is essential for Christians trying to understand how power is misused in families, churches, and organizations." },
  { id: "lv", name: "Leslie Vernick", role: "Author, The Emotionally Destructive Marriage and Relationship", quote: "Being a good Christian spouse does not mean accepting treatment that destroys your emotional, spiritual, and physical health. Staying in a destructive relationship to 'keep your vows' when abuse is present is not honoring God — it is harming yourself.", bio: "Vernick's work on emotionally destructive relationships has been transformative for countless Christian women (and men) who were told their suffering was their fault or their cross to bear. She carefully distinguishes between normal relational conflict and patterns of abuse." },
  { id: "rj", name: "Rebecca Zung", role: "Narcissistic Abuse Negotiation Strategist", quote: "Narcissists use relationship as a transaction. They give only when it serves them, and they punish when they feel threatened. Understanding this mechanism is not uncharitable — it is survival.", bio: "Zung's strategic framework for dealing with narcissists has helped many abuse survivors understand the patterns they are living inside. While not written from a specifically Christian perspective, her work provides essential practical insight into the mechanics of narcissistic abuse that helps survivors make informed decisions." },
];

const practices = [
  { icon: "🧠", title: "Name What Is Happening: Gaslighting Is Real", text: "Gaslighting is when an abuser systematically denies your perception of reality to make you doubt yourself. Common phrases: 'That never happened,' 'You are too sensitive,' 'You are imagining it,' 'Everyone else thinks you are the problem.' Naming this pattern is not uncharitable — it is accurate. Start keeping a private record of specific incidents." },
  { icon: "🏥", title: "Find a Trauma-Informed Therapist", text: "Narcissistic abuse causes complex trauma that requires specialized treatment. Look for therapists trained in EMDR (Eye Movement Desensitization and Reprocessing), somatic therapy, or Cognitive Processing Therapy (CPT). Avoid therapists who suggest couples counseling with an abuser — this typically worsens the abuse." },
  { icon: "🚪", title: "Build a Safety Plan", text: "If you are in an abusive relationship, safety planning before acting is essential. Consult with a domestic violence advocate (1-800-799-7233) even if your abuse is primarily emotional. They can help you assess risk, plan safely, and access resources. Leaving is the most dangerous time — plan carefully." },
  { icon: "👥", title: "Rebuild Your Support Network", text: "Narcissistic abusers typically isolate their victims from friends, family, and community. Rebuilding these connections is both healing and protective. Consider a support group for narcissistic abuse survivors. Flying Solo by SPAN (Strategic Psychopathic Abuse and Narcissism) and online communities provide survivor-to-survivor support." },
];

const scriptures = [
  { verse: "Psalm 10:14", text: "But you, God, see the trouble of the afflicted; you consider their grief and take it in hand. The victims commit themselves to you; you are the helper of the fatherless." },
  { verse: "Ezekiel 34:4", text: "You have not strengthened the weak or healed the sick or bound up the injured. You have not brought back the strays or searched for the lost. You have ruled them harshly and brutally." },
  { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind." },
  { verse: "Isaiah 61:3", text: "To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
];

const videos = [
  { id: "na_1", title: "Redeeming Power — Diane Langberg on Abuse in the Church", channel: "Diane Langberg" },
  { id: "na_2", title: "Recognizing Narcissistic Abuse — What Christians Need to Know", channel: "Leslie Vernick" },
  { id: "na_3", title: "Gaslighting — What It Is and How to Recognize It", channel: "The Gospel Coalition" },
  { id: "na_4", title: "Rebuilding Your Identity After Narcissistic Abuse", channel: "Christian Counseling" },
];

type NAEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function NarcissisticAbusePage() {
  const [tab, setTab] = useState("theology");
  const [naJournal, setNaJournal] = useState<NAEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_narcabusej_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_narcabusej_entries", JSON.stringify(naJournal)); } catch {}
  }, [naJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setNaJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setNaJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Abuse and Recovery</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Narcissistic Abuse</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Theology, recovery, and rebuilding identity after narcissistic abuse</p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: "#ff9999" }}>Safety Resources</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>National DV Hotline:</strong> 1-800-799-7233 (call) or text START to 88788 — emotional and psychological abuse qualifies<br />
            <strong>988 Crisis Lifeline:</strong> Call or text 988 — 24/7 support<br />
            <strong>If you are in danger:</strong> 911 — your safety comes first
          </p>
          <p style={{ margin: "0.5rem 0 0", fontSize: "0.8rem", color: MUTED }}>If someone is monitoring your device, use an incognito window or a different device to access this page.</p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>What God Says About Abuse and the Abuser</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices That Name the Truth</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Steps Toward Safety and Healing</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for the Healing Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Healing Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries saved privately in your browser only. Use an incognito window if privacy is a concern.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What truth about your situation are you beginning to see?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="I am beginning to see that..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What does God say about your worth that the abuser has tried to take away?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="God says about me..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What one step toward safety or healing can you take?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="One step I can take is..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {naJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your perceptions are real. Your experience matters. Begin when you are ready.</p>}
            {naJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT I AM SEEING</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT GOD SAYS ABOUT ME</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>STEP TAKEN</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
