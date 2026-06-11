"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", RED = "#EF4444", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Is Angry — Divine Wrath Is Not a Divine Character Flaw", verse: "Rom 1:18; Ps 7:11", text: "The wrath of God is revealed from heaven against all ungodliness and unrighteousness of men (Rom 1:18). The anger of God in Scripture is holy, purposeful, and always directed at evil. It is not a temperamental outburst or a defect in the divine character — it is the necessary response of perfect love to everything that destroys what God loves. God is angry at injustice because God loves justice. He is angry at cruelty because he loves people. Understanding divine anger helps us understand our own: not all anger is sin. Anger is a morally appropriate response to genuine wrong, and the fact that God himself experiences something analogous to it tells us that the emotion is not inherently sinful. The question is never simply 'Am I angry?' but 'Is this anger rightly ordered — proportionate, purposeful, and directed at actual evil?'" },
  { title: "Righteous Anger — When Being Angry Is the Right Response", verse: "Mark 3:5; Eph 4:26", text: "He looked around at them with anger, grieved at the hardness of their hearts (Mark 3:5). Jesus was angry — not occasionally or reluctantly, but as a morally coherent response to spiritual blindness and injustice. In John 2:13-17 he drove out the money-changers, overturning tables, because the house of prayer had become a marketplace. Ephesians 4:26 does not merely permit anger; it commands it: 'Be angry.' The text assumes there are situations in which anger is the appropriate response. Righteous anger is anger at the right thing, in the right measure, at the right time — anger at oppression, cruelty, and the abuse of the vulnerable. It is not self-serving; it does not linger or metastasize into bitterness. It is proportionate to the offense and seeks a constructive response, not mere retaliation." },
  { title: "Sinful Anger — When Anger Becomes Destructive", verse: "Matt 5:21-22; James 1:19-20", text: "Jesus said: 'You have heard that it was said to the people long ago, \"You shall not murder.\" But I tell you that anyone who is angry with a brother or sister will be subject to judgment' (Matt 5:21-22). The anger Jesus condemns here is contemptuous, dismissive anger — the anger that writes off another human being as worthless. James warns that human anger does not produce the righteousness of God (James 1:20). Proverbs 14:29 contrasts the person with great understanding who is slow to anger with the fool who gives full vent to rage. Sinful anger is typically self-serving: it is anger about threats to our pride, our comfort, or our control. It crosses into sin when it becomes contempt (treating another person as less than human), bitterness (anger that has been nursed and stored rather than processed), or rage (explosive, uncontrolled venting that damages relationships and people)." },
  { title: "Anger as Information — What Our Anger Tells Us About What We Value", verse: "Ps 4:4", text: "Tremble and do not sin; when you are on your beds, search your hearts and be silent (Ps 4:4). Anger is not merely a problem to suppress — it is a signal to interpret. What we are angry about reveals what we love, what we fear, and where we believe something wrong has occurred. When we are angry because someone is being treated unjustly, that anger reflects a value: we love justice. When we are angry because our plans were disrupted, that anger may reflect a disordered attachment: we love control. The spiritual practice of asking 'Why am I angry?' before acting on anger is one of the most productive forms of self-examination available to a Christian. It slows the reactive cycle and transforms anger from a force that drives us into information that guides us. Over time, examining our anger patterns reveals our actual loves — what we truly treasure, not just what we say we value." },
  { title: "Transforming Anger — The Path from Rage to Righteousness", verse: "Eph 4:26-27", text: "Do not let the sun go down while you are still angry, and do not give the devil a foothold (Eph 4:26-27). Unprocessed anger is an open door. Paul does not say 'never be angry'; he says deal with your anger before the day ends — don't let it harden into something that gives darkness a place in your life. The transformation of anger involves five movements: (1) Acknowledgment — naming the anger honestly before God rather than suppressing or spiritualizing it; (2) Slowing — creating space between the stimulus and the response; (3) Discernment — asking whether this anger is righteous or self-serving; (4) Expression — addressing the wrong through appropriate words or action rather than passive aggression or explosion; (5) Release — choosing to surrender vengeance to God (Rom 12:19) and, where needed, extending forgiveness not as a feeling but as a decision of the will. Chronic anger that refuses the path of forgiveness eventually becomes bitterness — a prison the bitter person builds for themselves." },
];

const practices = [
  { icon: "📓", title: "Anger Inventory — Mapping Your Anger Patterns", text: "When an episode of anger passes, write down three things: (1) what triggered the anger, (2) what need or value you believe was violated, and (3) how you responded. Done over time, this inventory reveals patterns — recurring triggers, underlying fears, and the gap between how you want to respond and how you actually do. This is not self-condemnation; it is honest self-knowledge in service of growth." },
  { icon: "⏸️", title: "The Pause Practice — 30 Seconds Before Any Response", text: "Before speaking or acting while angry, commit to a 30-second pause. This is not weakness — it is the practice Proverbs calls wisdom: 'Whoever is slow to anger has great understanding' (Prov 14:29). In that pause, breathe, pray a single-sentence prayer ('Lord, help me respond rather than react'), and choose your next move rather than being driven by your body's adrenaline response. This pause is one of the highest-leverage practices in emotional formation." },
  { icon: "✍️", title: "Journaling Anger Toward God — The Lament Tradition", text: "The psalms model what most Christians have never been taught: it is permissible — even faithful — to bring your anger directly to God in prayer. Psalms 13, 22, 44, 88, and many others are expressions of raw, uncensored distress directed at God. Writing out your anger in the form of a lament psalm — naming what is wrong, expressing how it feels, ending with some statement of trust — is a spiritually healthy alternative to venting at people or suppressing emotion until it erupts." },
  { icon: "🔍", title: "Root Cause Work — Asking What the Anger Is Really About", text: "Surface anger is often not the real story. Anger at a coworker may be rooted in fear of being disrespected; anger at a spouse may be rooted in unmet longing for connection; anger at God may be rooted in grief. Root cause work means asking a second and third question: not just 'What am I angry about?' but 'What does this anger feel like it threatens?' and 'What would it mean about me if this were true?' Getting to the root level changes what response is actually needed." },
  { icon: "🕊️", title: "Forgiveness as Ongoing Practice — Not Once But as Needed", text: "Forgiveness is not a feeling; it is a decision. And it is often not made once but repeatedly — the same offense may need to be forgiven again each time the memory resurfaces and the anger renews. This is what Jesus meant by forgiving seventy-seven times (Matt 18:22): forgiveness as a practiced orientation, not a single transaction. The goal of forgiveness is not to minimize what was done; it is to release yourself from carrying the weight of it and to return the right of vengeance to God (Rom 12:19)." },
];

const scriptures = [
  { verse: "Eph 4:26-27", text: "In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold." },
  { verse: "James 1:19-20", text: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires." },
  { verse: "Matt 5:21-22", text: "You have heard that it was said to the people long ago, 'You shall not murder, and anyone who murders will be subject to judgment.' But I tell you that anyone who is angry with a brother or sister will be subject to judgment." },
  { verse: "Ps 4:4", text: "Tremble and do not sin; when you are on your beds, search your hearts and be silent." },
  { verse: "Prov 14:29", text: "Whoever is slow to anger has great understanding, but one who has a hasty temper exalts folly." },
  { verse: "Rom 12:19", text: "Do not take revenge, my dear friends, but leave room for God's wrath, for it is written: 'It is mine to avenge; I will repay,' says the Lord." },
];

const voices = [
  { name: "Dr. Chip Dodd", role: "The Voice of the Heart; Therapist and Author", quote: "Anger is a sacred emotion. It is a gift. It is a signal that something wrong has occurred — that a boundary has been violated, that something you love is being threatened. When anger is honored as a signal and channeled into truth-telling, it protects relationships and people. When it is suppressed or exploded, it destroys them. The problem is never that you feel anger; the problem is what you do with it.", bio: "Dodd's work on the eight core feelings — including anger — has become foundational in Christian counseling and recovery circles. His framework insists that emotions are not the problem; disconnection from emotions is. His teaching at Onsite and through The Voice of the Heart has helped thousands of people learn to process anger honestly rather than suppress or weaponize it." },
  { name: "Dallas Willard", role: "The Divine Conspiracy; Philosopher and Spiritual Formation Theologian", quote: "Jesus's teaching in the Sermon on the Mount goes to the root of anger, not merely its expression. He is not making a new, stricter law against murder — he is addressing the inner life from which murder comes. The kingdom person is one whose anger has been brought under the reign of God: not suppressed, but transformed. The apprentice of Jesus does not white-knuckle their anger; they allow the presence of God to reorder what they love, and their anger follows.", bio: "Willard's The Divine Conspiracy and Renovation of the Heart give serious philosophical and theological attention to the emotional dimensions of Christian formation. His treatment of anger in the Sermon on the Mount — particularly the distinction between suppression and transformation — is among the most careful and practically useful in evangelical theology." },
  { name: "Dr. Gary Chapman", role: "Anger: Taming a Powerful Emotion; Author and Counselor", quote: "Anger is not the enemy. It is one of our most important emotions. The question is whether our anger is definitive — we have decided we are right and the other person is wrong and we are going to make them pay — or whether it is a signal that invites reflection and a constructive response. The Christian does not eliminate anger; the Christian learns to hear what anger is saying before acting on it.", bio: "Chapman, best known for The Five Love Languages, has written extensively on anger from a practical counseling perspective. His book Anger: Taming a Powerful Emotion distinguishes between definitive anger (which has already concluded) and reflective anger (which is still open to information) — a distinction with significant pastoral and practical value. His framework is accessible, biblically grounded, and applicable across a wide range of relationship contexts." },
];

const videos = [
  { id: "0g80CqNOe1Q", title: "The Christian and Anger — Understanding Righteous vs. Sinful Anger" },
  { id: "pWJ55oFa6J0", title: "Dallas Willard on Anger and the Sermon on the Mount" },
  { id: "YDiHbFJEFNw", title: "Chip Dodd: Anger as a Sacred Emotion" },
  { id: "bA4SUMt9o80", title: "How to Deal with Anger as a Christian" },
];

type CAEntry = { id: string; date: string; trigger: string; response: string; reflection: string };

export default function ChristianAngerPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CAEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christiananger_entries") ?? "[]"); } catch { return []; }
  });
  const [jTrigger, setJTrigger] = useState("");
  const [jResponse, setJResponse] = useState("");
  const [jReflection, setJReflection] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiananger_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jTrigger.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), trigger: jTrigger, response: jResponse, reflection: jReflection }, ...prev]);
    setJTrigger(""); setJResponse(""); setJReflection("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Emotions &amp; Formation</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Anger &amp; the Christian Life</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Righteous anger, sinful anger, and transformation — a biblical and practical guide to one of the most powerful emotions in the human soul.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? RED : BORDER}`, background: tab === t.id ? RED + "22" : "transparent", color: tab === t.id ? RED : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: RED, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: RED, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${RED}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: RED, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Anger Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Record anger episodes to identify patterns, learn from your responses, and grow in self-awareness over time.</p>
            {[
              { label: "Trigger (what triggered your anger?)", val: jTrigger, set: setJTrigger },
              { label: "Response (how did you respond?)", val: jResponse, set: setJResponse },
              { label: "Reflection (what did you learn or wish you had done differently?)", val: jReflection, set: setJReflection },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={i === 0 ? 2 : 3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: RED, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                <h4 style={{ fontWeight: 600, color: RED, marginBottom: 4 }}>Past Entries ({entries.length})</h4>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{e.trigger.slice(0, 60)}{e.trigger.length > 60 ? "…" : ""}</span>
                      <span style={{ fontSize: "0.78rem", color: MUTED }}>{e.date}</span>
                    </div>
                    {e.response && <p style={{ fontSize: "0.88rem", color: MUTED, marginBottom: 4 }}>Response: {e.response}</p>}
                    {e.reflection && <p style={{ fontSize: "0.88rem", color: MUTED }}>Reflection: {e.reflection}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: RED }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
