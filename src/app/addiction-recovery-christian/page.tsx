"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", AMBER = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Addiction Is Worship Gone Wrong — the Theological Frame", verse: "Augustine, Confessions", text: "Our heart is restless until it rests in you. Addiction is disordered worship — the soul seeking in a substance or behavior what only God can provide: pleasure, relief, control, identity. This frame does not minimize the neurological reality of addiction (it is also a brain disease) but it locates the spiritual reality underneath the biology. The gospel directly addresses the worship disorder at addiction's core. When a person understands that what they are actually chasing is rest, relief, significance, and belonging — and that the gospel offers all of these in Christ — recovery becomes not merely behavioral modification but a reorientation of the whole person toward their true source." },
  { title: "The Lie Beneath the Compulsion — Identifying the Underlying Belief", verse: "John 8:32", text: "Addiction is sustained by specific lies: I need this to cope; I cannot survive without it; I am beyond help; no one would want me sober. The gospel answers every one of these. Coping power comes from the Spirit. Survival comes through Christ who has already endured the worst and come through it. Redemption is available to all, regardless of how far the descent has gone. Identity is not dependent on performance or purity — it is given, not earned. The healing path requires identifying the specific lie driving each compulsive return to the substance or behavior and replacing it with the specific gospel truth that directly answers it." },
  { title: "Community Is Not Optional — Why You Cannot Get Sober Alone", verse: "Eccl 4:9-10", text: "The addict most needs what addiction produces a counterfeit of: genuine belonging, acceptance without performance, the ability to be known and not rejected. AA discovered what the church has always known — and sometimes forgotten: shared vulnerability in community is essential to recovery. The 12-step model's spiritual insight is profound: admit powerlessness, turn control over to God, make amends, help others. Christian recovery adds the specificity of the gospel, the community of the church, and the power of the Spirit to what the 12-step framework rightly identified. Why isolation is the addict's greatest enemy: the addictive cycle feeds on secrecy, and secrecy feeds on isolation. Community breaks the cycle." },
  { title: "Relapse, Shame, and the Gospel — What to Do When You Fall", verse: "Ps 51:17", text: "The most dangerous moment in recovery is after a relapse — not because the relapse is fatal but because shame tells the person to hide. The gospel creates the opposite dynamic: the moment of failure is the moment to run toward God and community, not away from them. Peter's restoration after his denial of Christ is the model: Jesus did not wait for Peter to approach him — Jesus sought Peter out, restored him by the same shoreline fire where Peter had warmed himself on the night of betrayal, and gave him more responsibility than before. The role of shame in driving continued addiction: shame says you are what you have done. The gospel says you are who God has made you and is remaking you to be." },
  { title: "Freedom Is a Process, Not an Event — the Long View of Recovery", verse: "Phil 4:11", text: "I have learned to be content in all circumstances. Sanctification and recovery share the same shape: gradual, non-linear, sustained by grace, involving community, and oriented toward ultimate freedom that is already secured in Christ. The person who expects recovery to be instantaneous is set up for discouragement after the first relapse. The person who understands recovery as a long obedience in the same direction — with a guaranteed destination, however long the road — can endure the setbacks without losing hope. The key word in Philippians 4:11 is learned. Contentment, freedom, and sobriety are not granted in a moment; they are cultivated through repeated choices, sustained community, and the patient work of the Spirit over time." },
];

const voices = [
  { name: "Edward Welch", role: "Addictions: A Banquet in the Grave", quote: "Addiction is slavery — but not merely the slavery of habit. It is the slavery of the heart to a false master. The addict has come to believe that the substance or behavior is necessary, that it delivers what it promises, and that life without it is unlivable. The gospel speaks to this: Christ has come to set the captives free. Not free from difficulty, but free from the slavery of the false master that has made promises it cannot keep.", bio: "Edward Welch is a counselor and faculty member at the Christian Counseling and Educational Foundation (CCEF) whose work on addiction is among the most theologically rigorous in the biblical counseling tradition. Addictions: A Banquet in the Grave frames addiction as slavery and applies the gospel's liberation narrative with pastoral precision and compassion." },
  { name: "Gerald May", role: "Addiction and Grace", quote: "Addiction is not just a problem for alcoholics and drug users. In its broadest sense, addiction is a deeply rooted human condition — the compulsive clinging to things that cannot ultimately satisfy. Grace does not remove the craving; it redirects it. It loosens the grip of false attachments and turns the longing toward the One for whom it was always intended.", bio: "Gerald May was a psychiatrist and spiritual director at the Shalem Institute whose Addiction and Grace brought together clinical observation and contemplative spirituality. His argument — that addiction reveals a universal human experience of disordered longing — opened the subject to a far wider audience than the recovery community and connected it to the deepest currents of Christian mystical tradition." },
  { name: "Mark Shaw", role: "The Heart of Addiction", quote: "Lasting change in addiction is not primarily behavioral — it is worshipful. The person who stops drinking without addressing what drinking was doing for them — the comfort, the relief, the identity, the belonging — has simply moved the problem underground. The worship disorder must be named, the false gospel exposed, and the true gospel offered in its place. Only then does the change have roots.", bio: "Mark Shaw is a biblical counselor and pastor whose The Heart of Addiction applies the worship-centered understanding of idolatry to the specific patterns of addictive behavior. His work insists that cognitive and behavioral approaches to addiction, while helpful, are insufficient without addressing the theological core: what the heart was seeking, why it went looking in the wrong place, and what the gospel provides that the addiction was counterfeiting." },
];

const practices = [
  { icon: "🤝", title: "Accountability Partnership", text: "An accountability partner — same-gender, mature in faith, and knowing your specific struggle — is not optional for most people in recovery. Regular check-ins (daily in early recovery, weekly ongoing) with someone who knows the details of your struggle and is not afraid to ask hard questions create the relational density required for honesty. The relationship works because the partner knows your specific patterns, your specific triggers, and your specific lies — and loves you enough to name them." },
  { icon: "🏠", title: "Celebrate Recovery or Structured Christian Recovery Program", text: "Celebrate Recovery (CR) is the largest Christ-centered recovery program in the world, based in John 8:32 and the Beatitudes. It addresses all hurts, habits, and hang-ups — not only substance addiction. Structured recovery programs provide what willpower and private prayer alone cannot: a community of people who understand from the inside what you are fighting, a structured process for working through the roots of addiction, and accountability that persists through setbacks." },
  { icon: "🚫", title: "Identifying and Eliminating Triggers", text: "Triggers — people, places, emotions, times of day, and specific situations that reliably precede the addictive behavior — must be identified and, where possible, eliminated or restructured. This requires honest self-examination and is best done with a counselor or sponsor who can help identify patterns the person cannot see from the inside. Trigger elimination is not weakness; it is stewardship of the recovery environment." },
  { icon: "🌅", title: "Daily Surrender Prayer", text: "The Step 3 prayer — or its equivalent — is a daily act of releasing control to God: I offer myself to you, to build with me and do with me as you will. This practice addresses the control dimension of addiction at its root. Addiction is partly an attempt to manage internal states through a reliable external agent. Surrender prayer replaces that grasping for control with a daily practiced posture of openness and dependence on God, repeated even when — especially when — the feeling of surrender is not present." },
  { icon: "🫂", title: "Service as Part of Recovery", text: "Step 12 of the 12-step model: having had a spiritual awakening as the result of these steps, we tried to carry this message to others. Service — helping people who are earlier in the same struggle you have been fighting — is not just a recovery add-on; it is integral to sustained sobriety. Helping others creates accountability (you cannot walk someone else through what you are still refusing to work), builds community, and gives the suffering you have endured a redemptive purpose." },
];

const scriptures = [
  { verse: "Rom 6:6-7", text: "For we know that our old self was crucified with him so that the body ruled by sin might be done away with, that we should no longer be slaves to sin — because anyone who has died has been set free from sin." },
  { verse: "1 Cor 10:13", text: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it." },
  { verse: "Gal 5:1", text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery." },
  { verse: "John 8:36", text: "So if the Son sets you free, you will be free indeed." },
  { verse: "2 Cor 3:17", text: "Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom." },
  { verse: "Phil 4:13", text: "I can do all this through him who gives me strength." },
];

const videos = [
  { id: "H-bFxAHNxH8", title: "Addiction as Worship — the Theological Frame" },
  { id: "n0rdx-VcHcw", title: "Breaking Free: The Gospel and Addiction Recovery" },
  { id: "kKjyYX9Qcsc", title: "Shame, Relapse, and the Grace of God" },
  { id: "GbFKU0KRCOY", title: "Community and Recovery — Why You Cannot Do This Alone" },
];

type AREntry = { id: string; date: string; struggle: string; step: string; community: string };

export default function AddictionRecoveryChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AREntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_addictionrecovery_entries") ?? "[]"); } catch { return []; }
  });
  const [jStruggle, setJStruggle] = useState("");
  const [jStep, setJStep] = useState("");
  const [jCommunity, setJCommunity] = useState("");

  useEffect(() => { localStorage.setItem("vine_addictionrecovery_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jStruggle.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), struggle: jStruggle, step: jStep, community: jCommunity }, ...prev]);
    setJStruggle(""); setJStep(""); setJCommunity("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Healing &amp; Freedom</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Addiction Recovery</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Breaking free through the gospel and community — the theology of addiction, voices who have walked this road, and practices that sustain lasting freedom.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? AMBER : BORDER}`, background: tab === t.id ? AMBER + "22" : "transparent", color: tab === t.id ? AMBER : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: AMBER, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: AMBER, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${AMBER}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: AMBER, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Recovery</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to bring your struggle honestly before God and your community.</p>
            {[
              { label: "Struggle — the addiction or compulsive behavior you are working through", val: jStruggle, set: setJStruggle },
              { label: "Step — where you are in the recovery process", val: jStep, set: setJStep },
              { label: "Community — who is walking with you in this", val: jCommunity, set: setJCommunity },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: AMBER, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: AMBER }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Struggle:</span> {e.struggle}</p>
                      {e.step && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Step:</span> {e.step}</p>}
                      {e.community && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: AMBER, fontWeight: 600 }}>Community:</span> {e.community}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: AMBER }}>{v.title}</h3>
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
