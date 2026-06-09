"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "There Is No Condemnation for Those Who Are in Christ", verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus. This verse is addressed to people who have already sinned — Paul's argument in Romans 1-7 establishes that all have sinned. Romans 8:1 is the turning point: the verdict is rendered, and it is not condemnation. The shame that many Christians carry about sexual history — premarital sex, pornography, affairs, abuse they experienced or perpetuated — is often louder than this verse. But this verse is what God says. Shame says otherwise. The question is which voice is the word of God." },
  { title: "Jesus Spoke First and Most Directly to the Sexually Shamed", verse: "John 8:10-11", text: "'Woman, where are they? Has no one condemned you?' 'No one, sir,' she said. 'Then neither do I condemn you,' Jesus declared. 'Go now and leave your life of sin.' Jesus's first word to the woman caught in adultery was not reprimand but presence and protection. He addressed her shame before her sin. His order matters: she was protected from condemnation before she was called to change. This is the pastoral sequence the church has often reversed." },
  { title: "Shame Is Not the Same as Conviction, and One Is From God", verse: "2 Corinthians 7:10", text: "Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death. Conviction from the Spirit moves toward God, toward repentance, toward change. Shame moves inward and stops — it produces paralysis, hiding, and self-destruction. Christians who live under chronic shame about their sexual history are not experiencing the Holy Spirit's work; they are experiencing the counterfeit that keeps them from the repentance and healing that are actually available." },
  { title: "The Body Is a Temple, Not a Garbage Heap", verse: "1 Corinthians 6:19-20", text: "Your bodies are temples of the Holy Spirit... therefore honor God with your bodies. This verse is often used to add shame to sexual sin. Its proper use is as an affirmation: your body is a temple, and temples are holy and valuable. The person who has sinned sexually has not destroyed the temple — they have used it for something it was not designed for. The temple can be cleansed and rededicated. The dwelling place of the Holy Spirit is not permanently defiled by past sexual sin." },
  { title: "The Purity Culture Lie: Your Worth Is Not Determined by Your Sexual History', verse: 'Song of Solomon 1:15", text: "How beautiful you are, my darling! Oh, how beautiful! Your eyes are like doves. The Song of Solomon celebrates embodied love and erotic beauty without shame. The biblical text that is most specifically about human sexuality frames bodies and desire as beautiful, not inherently corrupted. The purity culture framework that told young people their worth was determined by their sexual history — 'used tape,' 'chewed gum' — is not a biblical framework. It is an aberration with devastating consequences." },
];

const voices = [
  { id: "v1", name: "Sheila Wray Gregoire", role: "Author of The Great Sex Rescue, blogger at Bare Marriage", quote: "Purity culture taught a generation that their sexual past determined their worth, their marriage prospects, and their relationship with God. None of those things are true. And the damage from those teachings is real and documented.", bio: "Sheila Wray Gregoire's research into purity culture teachings and their psychological outcomes documented systematic harm in Christian communities. Her findings — published in The Great Sex Rescue — showed that many purity culture messages increased shame, damaged marriages, and produced worse sexual outcomes than the approaches they displaced. Her work has given language to thousands of people who were harmed by teachings framed as protection." },
  { id: "v2", name: "Jay Stringer", role: "Therapist, author of Unwanted: How Sexual Brokenness Reveals Our Way to Healing", quote: "Shame keeps sexual sin secret, and secrecy keeps sexual sin active. The path toward healing is not more shame — it is honest disclosure and the experience of being loved through the disclosure.", bio: "Jay Stringer's clinical work on unwanted sexual behavior — including pornography addiction, compulsive sexuality, and patterns related to trauma — shows that shame is the primary mechanism by which sexual struggles persist. His book Unwanted offers a framework for understanding the specific childhood wounds and unmet needs that often drive sexual brokenness." },
  { id: "v3", name: "Rachael Denhollander", role: "Attorney, advocate, abuse survivor, author of What Is a Girl Worth", quote: "The church often confuses the victim's wound with the perpetrator's sin. Women who were sexually abused carry shame about what was done to them. That shame is not theirs to carry. It belongs to the one who acted.", bio: "Rachael Denhollander's advocacy work has specifically addressed the way the church mislocates shame in sexual harm — placing it on survivors rather than perpetrators, or creating cultures where survivors feel more shame about speaking than perpetrators feel about acting. Her theological insistence that shame belongs to wrongdoing, not to being wronged, is foundational for anyone processing sexual shame." },
  { id: "v4", name: "Curt Thompson", role: "Clinical psychiatrist, author of The Soul of Shame", quote: "Shame and the body are inseparable. The person who carries sexual shame carries it physically — in the way they hold themselves, in their capacity for intimacy, in their sexual response. Healing sexual shame requires embodied healing, not only cognitive reframing.", bio: "Curt Thompson's integration of neuroscience and Christian theology in The Soul of Shame provides the most scientifically grounded account of why sexual shame is so persistent and why traditional church responses — more conviction, more rules, more accountability groups — often intensify rather than heal it. His approach centers on the experience of being fully known and fully loved as the healing mechanism." },
];

const practices = [
  { icon: "🏥", title: "Distinguish Whether You Carry Shame for What Was Done to You or What You Did", text: "Sexual shame has two very different sources: what was done to you, and what you have done. Both require healing, but through different paths. Shame for what was done to you — abuse, assault, coercion — belongs entirely to the perpetrator and should be brought to a trauma-informed therapist. Shame for your own choices can be brought to God in repentance and to a therapist or spiritual director for healing." },
  { icon: "📖", title: "Sit With Psalm 51 and John 8 Until They Become Real", text: "Psalm 51 is David's prayer after sexual failure of catastrophic moral proportions — adultery and murder. It is not a prayer that minimizes sin. It is a prayer that brings sin to a God who responds with mercy, lovingkindness, and the offer of a clean heart (v.10). John 8 shows the same God, incarnate, refusing to condemn the woman brought for shaming. Slow, repeated reading of these texts can break through shame that rational argument cannot reach." },
  { icon: "💬", title: "Speak the Shame to One Safe Person", text: "Sexual shame thrives in silence. Speaking it — to a therapist, a spiritual director, a trusted mentor — does not spread it; it begins to dissolve it. The experience of being heard without condemnation is one of the primary mechanisms by which shame loses its power. Find one safe person and say it out loud." },
  { icon: "🤝", title: "If Purity Culture Teaching Wounded You, Name That as a Separate Harm", text: "Many Christians carry shame that was inflicted by bad teaching — not their own sin. If you were told your worth depended on your sexual history, or that damaged goods have less value, or that you were responsible for others' lust — those are harmful teachings, not biblical truth. Naming that harm separately from your own sins allows healing of both without conflating them." },
  { icon: "⛪", title: "Find a Community Where Sexual Shame Is Addressed With Both Truth and Grace", text: "Some churches address sexuality with shame-based teaching that compounds the problem. Others avoid it entirely. What is needed is a community that holds both biblical conviction about sexual design and genuine grace for sexual failure — one that practices what John 8 models. If your current community is shame-intensifying, seeking a different community is not compromise; it is self-protection." },
  { icon: "🛡️", title: "Consider Whether Your Sexual Shame Masks Trauma", text: "Many people whose sexual behavior has felt compulsive, destructive, or contrary to their own values discover in therapy that the behavior was rooted in unresolved trauma. Jay Stringer's work shows that unwanted sexual behavior often makes complete sense as a response to specific childhood wounds. If this resonates, working with a trauma-informed therapist rather than an accountability group alone may be the more effective path." },
];

const scriptures = [
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Psalm 51:10", text: "Create in me a pure heart, O God, and renew a steadfast spirit within me." },
  { verse: "John 8:11", text: "'Then neither do I condemn you,' Jesus declared. 'Go now and leave your life of sin.'" },
  { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
  { verse: "Isaiah 43:25", text: "I, even I, am he who blots out your transgressions, for my own sake, and remembers your sins no more." },
];

type PurityEntry = { id: string; date: string; shame: string; truth: string; step: string };

export default function SexualPurityShame() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PurityEntry[]>([]);
  const [shame, setShame] = useState(""), [truth, setTruth] = useState(""), [step, setStep] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_sexualpurityshamej_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!shame.trim()) return;
    const e: PurityEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), shame: shame.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_sexualpurityshamej_entries", JSON.stringify(updated));
    setShame(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_sexualpurityshamej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Sexual Shame and the Gospel</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For Christians carrying shame about their sexual history — whether from their own choices, purity culture teaching, or what was done to them. The verdict God speaks is not condemnation.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; RAINN (for abuse): 1-800-656-4673 &nbsp;|&nbsp; Faithful and True: faithfulandtrue.com</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: TEXT, fontSize: "1rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What sexual shame are you most aware of carrying today?</label>
              <textarea value={shame} onChange={e => setShame(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Name it — what it is, where it came from..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What truth from Scripture or from God do you need to receive right now?</label>
              <textarea value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Even if it is hard to believe..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is your next step toward healing?</label>
              <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="A conversation, a counselor, a confession..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Shame:</strong> {e.shame}</p>
                {e.truth && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Truth:</strong> {e.truth}</p>}
                {e.step && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Thompson on shame's neurological and spiritual dimensions — and how genuine, non-judgmental relationship heals what shame has silenced and hidden." },
              { videoId: "1nzj7Sf395o", title: "Healing the Shame That Binds You", channel: "CCEF", description: "CCEF's counseling-based approach to shame — addressing both the experience of sexual shame and the gospel's specific claim over it." },
              { videoId: "psN1DORYYV0", title: "The Gifts of Imperfection", channel: "Brene Brown — TED", description: "Brown's foundational research on shame, vulnerability, and the conditions under which shame loses its power — the most important non-Christian framework on shame." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Hard", channel: "Timothy Keller", description: "Keller on forgiveness and the gospel's specific promise to those whose history includes sexual sin — the theological framework that makes self-forgiveness possible." },
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
