"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", accent = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

type FPEntry = { id: string; date: string; person: string; step: string; freedom: string };

const theology = [
  { title: "What Forgiveness Is and Is NOT — Clarifying the Most Misunderstood Christian Practice", verse: "Colossians 3:13", text: "Forgiveness is not saying it was okay. It is not forgetting. It is not automatically trusting again. It is not reconciling regardless of safety. These misunderstandings cause many people to refuse to forgive because they think forgiving means minimizing or excusing the wrong done to them. What forgiveness actually is: releasing the debt, giving up the right to punish, entrusting justice to God. You can forgive someone fully while still maintaining appropriate boundaries. You can forgive someone who has not repented. You can forgive someone who will never acknowledge what they did. The confusion between forgiveness and these other things is one of the primary reasons Christians remain imprisoned in bitterness for years." },
  { title: "The Parable of the Unforgiving Servant — Why We Must Forgive", verse: "Matthew 18:21-35", text: "The parable's logic is relentless: a servant forgiven an astronomical debt refuses to forgive a comparatively trivial one and is handed over to the torturers. The disproportion is the point. Whatever anyone has done to us, the debt we have been forgiven by God dwarfs it beyond calculation. This is not a comfort but a demand: we who have received incalculable forgiveness are without excuse when we withhold it. The spiritual reality Jesus describes is visceral — unforgiveness returns us to the prison our own debt created. The person who will not forgive lives under a weight they were never meant to carry, and the weight is self-imposed." },
  { title: "Forgiveness as a Decision, Not a Feeling", verse: "Ephesians 4:31-32", text: "The emotion of feeling wronged will persist long after the decision to forgive. Bitterness does not dissolve the moment forgiveness is declared. This is not failure — it is the normal pattern. Forgiveness is the repeated decision to not hold the offense against the person: not acting on feelings of bitterness, not rehearsing the grievance, not wanting them to suffer. The decision must be made before the feeling follows, often long before. Many people wait to forgive until they feel forgiving and never begin. The practice of forgiveness is making the decision to not hold the offense, renewing that decision when the feelings resurface, and trusting that the feeling eventually follows the will." },
  { title: "Seventy Times Seven — the Ongoing Nature of Forgiveness", verse: "Matthew 18:21-22", text: "How many times shall I forgive? Peter suggests seven — a generous number. Jesus says seventy times seven, meaning without limit. For significant wounds, forgiveness is not a one-time event but a practice that must be renewed repeatedly. Each time the memory resurfaces with fresh bitterness is an invitation to renew the decision to forgive. This is not a sign that the original forgiveness did not count. It is the normal experience of healing from a deep wound. The person who has forgiven a serious betrayal and finds the anger returning months later has not failed. They have an opportunity to forgive again, which is exactly what Jesus prescribes." },
  { title: "Forgiving God — the Unspoken Theology of Anger at God", verse: "Psalm 22:1-2", text: "Many Christians are stuck in unforgiveness toward God — angry at what he allowed, feeling abandoned or betrayed by the deaths, losses, and injustices that have marked their lives. This is not blasphemy; it is honesty. Psalm 22 opens with My God, my God, why have you forsaken me? — Jesus himself prayed these words from the cross. The path through anger at God is not suppressing it or nursing it at a distance but bringing it directly to God in the lament tradition the Psalms model. God is large enough to receive our anger. He is not threatened by our honest grief. The alternative — polite distance from a God we secretly resent — is far more spiritually damaging than honest confrontation." },
];

const practices = [
  { icon: "✍️", title: "Forgiveness Letter (Never Sent)", text: "Write a letter to the person you need to forgive — a letter you will never send. Write everything: what they did, how it affected you, what it cost you. Then write the forgiveness itself: I am releasing this debt. I am giving up my right to punish you. I am entrusting justice to God. The point is not communication with them but processing in yourself. Some people find it helpful to burn or shred the letter afterward as a physical enactment of the release." },
  { icon: "🪑", title: "The Empty Chair Technique", text: "Place an empty chair across from you and speak forgiveness aloud to the absent person as if they were present. Say their name. Say what they did. Say I forgive you. Speaking forgiveness aloud — even to an empty chair — engages the will and the body in a way that purely internal processing does not. This technique is used in both Christian counseling and secular therapy because it works: the act of speaking forgiveness aloud, even without the other person present, is a real and effective act of release." },
  { icon: "🙏", title: "Bringing Anger to God Directly", text: "Rather than suppressing anger at God or at the person who wronged you, bring it to God directly in prayer using the language of lament. Read Psalm 22, 88, or Lamentations 3 as a model. Lament is honest prayer that names the wound, expresses the grief and anger, and ultimately trusts God with the outcome. The lament tradition in Scripture is vast and legitimizes the full range of human emotion before God. Polite, sanitized prayer that avoids the real pain is less honest and less effective than angry, messy prayer that says exactly what is true." },
  { icon: "🗣️", title: "Renouncing the Right to Punish", text: "Make a specific spoken declaration: I renounce my right to punish [name] for what they did. I release them from the debt they owe me. I entrust their judgment to God, who is a just judge. The specificity matters. General vague feelings of willingness to forgive are less powerful than a specific declaration naming the person, the offense, and the release. Some people find it helpful to make this declaration with a pastor or counselor as a witness. The spoken word has weight that the unspoken thought does not." },
  { icon: "🔍", title: "Recognizing Triggers", text: "Identify the specific people, places, sounds, smells, or situations that reactivate old wounds. When you are triggered and the old bitterness resurfaces, recognize it as an invitation to forgive again rather than evidence that your previous forgiveness failed. Keep a brief journal of triggers and your response to them. Over time, the gap between trigger and response will grow as the practice of choosing forgiveness again becomes habitual. The goal is not to eliminate the memory but to no longer be controlled by it." },
];

const scriptures = [
  { verse: "Matthew 18:21-22", text: "Then Peter came to Jesus and asked, 'Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?' Jesus answered, 'I tell you, not seven times, but seventy-seven times.'" },
  { verse: "Colossians 3:13", text: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you." },
  { verse: "Ephesians 4:31-32", text: "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice. Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you." },
  { verse: "Matthew 6:14-15", text: "For if you forgive other people when they sin against you, your heavenly Father will also forgive you. But if you do not forgive others their sins, your Father will not forgive your sins." },
  { verse: "Luke 17:3-4", text: "So watch yourselves. If your brother or sister sins against you, rebuke them; and if they repent, forgive them. Even if they sin against you seven times in a day and seven times come back to you saying I repent, you must forgive them." },
  { verse: "Romans 12:19", text: "Do not take revenge, my dear friends, but leave room for God's wrath, for it is written: It is mine to avenge; I will repay, says the Lord." },
];

const voices = [
  { name: "Dr. Everett Worthington", role: "Forgiveness Researcher; Author, Forgiving and Reconciling", quote: "Forgiveness is a gift you give yourself as much as the person who wronged you. When you forgive, you release the poison of bitterness that has been harming you far more than it has been harming them. The REACH model gives you a path to forgiveness that works even when the other person will never acknowledge what they did.", bio: "Worthington is one of the foremost forgiveness researchers in the world, and his personal journey — forgiving the man who murdered his mother — gives his academic work profound experiential grounding. His REACH model (Recall the hurt, Empathize with the offender, offer the Altruistic gift of forgiveness, Commit to forgive publicly, Hold on to forgiveness when doubt arises) has been validated in dozens of studies as an effective framework for achieving genuine forgiveness. His work bridges rigorous research and deep Christian conviction." },
  { name: "Philip Yancey", role: "Author, What's So Amazing About Grace?", quote: "Grace is the force that breaks cycles of vengeance. It is the only power strong enough to stop the chain reaction of hurt, retaliation, and counter-retaliation that destroys families, communities, and nations. Forgiveness is not weakness — it is the most courageous act available to a human being.", bio: "Yancey's What's So Amazing About Grace? remains one of the most widely read explorations of forgiveness in evangelical Christianity. Writing from his own experience of wounds inflicted by the church, Yancey makes a compelling case that grace — and the forgiveness it produces — is the most distinctively Christian contribution to human flourishing. He illustrates the power of forgiveness through stories ranging from the Holocaust to racial reconciliation in South Africa, demonstrating that forgiveness is not a private spiritual exercise but a world-transforming force." },
  { name: "Lewis B. Smedes", role: "Author, Forgive and Forget", quote: "When you forgive someone you sever the stranglehold that person has over your life. You set a prisoner free and then you discover that the prisoner was you.", bio: "Smedes' Forgive and Forget is one of the most enduring books on forgiveness in print, beloved because it is both theologically sound and practically accessible. His central insight — that forgiveness heals the forgiver even when the forgiven person is unaware or unrepentant — has helped millions of Christians begin the process of forgiveness without waiting for an apology that may never come. Smedes writes with pastoral warmth and hard-won wisdom, never minimizing the difficulty of forgiveness while insisting on its necessity and its freedom." },
];

const videos = [
  { id: "WgKLBH73tls", title: "Forgiveness Is Not What You Think — Everett Worthington" },
  { id: "4AOPeWLyaP4", title: "Philip Yancey on Grace and the Power to Forgive" },
  { id: "JqCp0tpf6mM", title: "The REACH Model — A Practical Path to Forgiveness" },
  { id: "3g7_OkMiSdU", title: "How to Forgive When It Feels Impossible" },
];

export default function ForgivenessPracticePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_forgivenessp_entries") ?? "[]"); } catch { return []; }
  });
  const [jPerson, setJPerson] = useState("");
  const [jStep, setJStep] = useState("");
  const [jFreedom, setJFreedom] = useState("");

  useEffect(() => { localStorage.setItem("vine_forgivenessp_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jPerson.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), person: jPerson, step: jStep, freedom: jFreedom }, ...prev]);
    setJPerson(""); setJStep(""); setJFreedom("");
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
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Forgiveness: A Practical Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>How to forgive when it feels impossible &mdash; the theology, the practices, and the path through bitterness to freedom.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? accent : BORDER}`, background: tab === t.id ? accent + "22" : "transparent", color: tab === t.id ? accent : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: accent, fontWeight: 600, marginBottom: 6 }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: accent, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: accent, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Forgiveness Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Track your journey toward forgiveness. Saved privately in your browser.</p>
            {[
              { label: "Who do you need to forgive? (first name or initials is enough)", val: jPerson, set: setJPerson },
              { label: "Where are you in the process right now?", val: jStep, set: setJStep },
              { label: "What freedom are you seeking, or what freedom have you found?", val: jFreedom, set: setJFreedom },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                    <p style={{ fontSize: "0.88rem", marginBottom: 4 }}><strong>Person:</strong> {e.person}</p>
                    {e.step && <p style={{ fontSize: "0.88rem", marginBottom: 4 }}><strong>Step:</strong> {e.step}</p>}
                    {e.freedom && <p style={{ fontSize: "0.88rem" }}><strong>Freedom:</strong> {e.freedom}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: accent }}>{v.title}</h3>
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
