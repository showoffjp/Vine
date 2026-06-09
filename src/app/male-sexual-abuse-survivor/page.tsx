"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Sees and Names What Was Done to You", verse: "Genesis 16:13", text: "She gave this name to the Lord who spoke to her: 'You are the God who sees me.' Hagar was a woman without power who was abused by those with authority over her. The angel's visit is the first recorded instance of a person naming God as 'El Roi' — the God who sees. Men who have been sexually abused often carry the experience in profound isolation, believing no one knows or would understand. God has seen. He names it." },
  { title: "Jesus Was Also Stripped, Exposed, and Violated Against His Will", verse: "Matthew 27:28-31", text: "They stripped him and put a scarlet robe on him... they spit on him and struck him on the head... Then they led him away to crucify him. The incarnation includes Christ's experience of bodily violation, public humiliation, and powerlessness. This is not to flatten the specifics of sexual abuse — but it does mean that the experience of having your body used against your will is not foreign to the God who saves. He entered it." },
  { title: "The Abuser Bears the Weight, Not the Survivor", verse: "Matthew 18:6", text: "If anyone causes one of these little ones — those who believe in me — to stumble, it would be better for them to have a large millstone hung around their neck and to be drowned in the depths of the sea. Jesus's severity about harm to the vulnerable is not accidental. The moral weight falls entirely on the one who acts against the powerless. The survivor of abuse carries wounds, not guilt." },
  { title: "Men Are Allowed to Lament What Was Taken", verse: "Lamentations 2:11", text: "My eyes fail from weeping, I am in torment within; my heart is poured out on the ground because my people are destroyed, because children and infants faint in the streets of the city. Male survivors of sexual abuse are often culturally denied the language of victimhood and vulnerability. The biblical tradition of lament — including Lamentations — is a masculine tradition written largely by men who wept publicly over devastation. Grief and lamentation are not signs of weakness." },
  { title: "Healing Is a Legitimate and Holy Pursuit", verse: "Isaiah 61:1-3", text: "He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners... to comfort all who mourn, to provide for those who grieve — to bestow on them a crown of beauty instead of ashes. Jesus quotes this passage in his inaugural sermon (Luke 4). The proclamation of the Kingdom includes healing for those whose inner world has been shattered. Pursuing that healing — through therapy, support groups, spiritual direction — is participation in the mission of Christ." },
];

const voices = [
  { id: "v1", name: "Dan Allender", role: "Professor of counseling, author of The Wounded Heart, abuse survivor", quote: "The sexual abuse of a man attacks the very thing our culture tells him he is supposed to be — strong, invulnerable, in control. The abuse does not just wound the body. It assaults the entire structure of masculine identity.", bio: "Dan Allender's Wounded Heart is the landmark Christian resource on sexual abuse recovery, and he has written and spoken specifically about the ways male survivors face unique barriers — cultural shame, the fear of being seen as weak or as having been complicit, and the church's general silence on the topic. He is himself a survivor of childhood sexual abuse." },
  { id: "v2", name: "Mike Lew", role: "Therapist, author of Victims No Longer: Men Recovering from Incest and Other Sexual Child Abuse", quote: "The first thing most male survivors need to hear is that what happened to them was real, it was not their fault, and they are not alone. Then we can begin.", bio: "Mike Lew was a pioneer in clinical attention to male sexual abuse survivors. His work documented that the silence around male victimization was not evidence that it was rare but that it was taboo. His findings about male survivor demographics and shame dynamics have shaped therapeutic and pastoral approaches for decades." },
  { id: "v3", name: "Rachael Denhollander", role: "Attorney, advocate, author of What Is a Girl Worth, survivor", quote: "Survivors are not defined by their abuse. They are defined by their personhood, their belovedness, their value — all of which existed before the harm was done and remain intact after it.", bio: "Though Rachael Denhollander is a female survivor, her public advocacy and theological work on abuse, personhood, and the church's response has been formative for the entire survivor community — male and female. Her insistence that God's image in a person cannot be destroyed by what another person does to them is essential for male survivors whose identity has been fractured." },
  { id: "v4", name: "Diane Langberg", role: "Clinical psychologist, author of Suffering and the Heart of God", quote: "The church has created a culture where men are supposed to be strong and not need help. That culture kills male abuse survivors quietly, in rooms where no one knows to look.", bio: "Diane Langberg has worked with abuse survivors for decades and has specifically addressed the way masculine ideals in the church silence male survivors. Her clinical work insists that silence about male victimization is not neutral — it is an active barrier to healing, and churches bear some responsibility for creating cultures where men cannot speak." },
];

const practices = [
  { icon: "🏥", title: "Find a Trauma-Specialized Therapist Who Has Worked With Male Survivors", text: "Not every therapist has training in male sexual abuse. Ask explicitly: 'Have you worked with male survivors of sexual abuse?' Look for therapists trained in EMDR, somatic therapies, or trauma-focused CBT. The Allender Center and CCEF both train therapists who are theologically grounded and clinically competent in abuse recovery." },
  { icon: "📢", title: "Name It To Someone Before You Decide You Cannot", text: "Many male survivors carry the abuse for decades in total silence. The first disclosure — to a therapist, a pastor, a trusted friend — is terrifying and is also the beginning of freedom. The shame that tells you no one will believe you, or that people will judge you, or that it defines you — that shame has kept you silent long enough." },
  { icon: "📖", title: "Read the Psalms as Permission to Tell the Truth", text: "Psalm 22, 55, 88, and 109 are psalms of men who were betrayed, violated, and abandoned by those who should have protected them. They name their perpetrators, name their wounds, and name their God in the same breath. The Psalms give male survivors permission to be simultaneously wounded and faithful." },
  { icon: "🤝", title: "Connect With Survivor Communities Specifically for Men", text: "1in6.org is an organization specifically for male survivors of sexual abuse and assault. It offers support groups (including online), resource lists, and a confidential helpline. Community with other survivors — hearing 'me too' from another man — often breaks the isolation more powerfully than any other intervention." },
  { icon: "⚖️", title: "Know That Reporting Is an Option, Not an Obligation", text: "Decisions about reporting are complex and entirely yours. Many male survivors feel pressure to report immediately or not at all. In reality, the decision about whether, when, and how to report is yours to make, on your timeline, with the support of a trusted advocate. An organization like RAINN (1-800-656-4673) can help you understand your options without pressure." },
  { icon: "🛡️", title: "Give Yourself Permission to Take Years", text: "Recovery from sexual abuse is not a 12-week program. It is a multi-year process of integration that moves in cycles — long stretches of stability, followed by re-encounters with the material triggered by life events. This is not dysfunction. This is the normal trajectory of healing from deep wounds, and it does not mean you are not healing." },
];

const scriptures = [
  { verse: "Genesis 16:13", text: "She gave this name to the Lord who spoke to her: 'You are the God who sees me,' for she said, 'I have now seen the One who sees me.'" },
  { verse: "Psalm 55:12-14", text: "If an enemy were insulting me, I could endure it... But it is you, a man like myself, my companion, my close friend, with whom I once enjoyed sweet fellowship at the house of God." },
  { verse: "Isaiah 61:1", text: "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted." },
  { verse: "Psalm 22:24", text: "For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help." },
  { verse: "Romans 8:38-39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
];

type MaleEntry = { id: string; date: string; truth: string; step: string; question: string };

export default function MaleSexualAbuseSurvivorPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MaleEntry[]>([]);
  const [truth, setTruth] = useState(""), [step, setStep] = useState(""), [question, setQuestion] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_malesexualabusej_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!truth.trim()) return;
    const e: MaleEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), truth: truth.trim(), step: step.trim(), question: question.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_malesexualabusej_entries", JSON.stringify(updated));
    setTruth(""); setStep(""); setQuestion("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_malesexualabusej_entries", JSON.stringify(updated));
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
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Male Sexual Abuse Survivors</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For men who have survived sexual abuse — and carry it in silence. What happened to you was real, it was not your fault, and the God who sees has not looked away.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Crisis Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; 1in6 Helpline: 1in6.org &nbsp;|&nbsp; RAINN: 1-800-656-4673 &nbsp;|&nbsp; Crisis Text: text HOME to 741741</p>
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
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What truth about yourself do you need to receive today?</label>
              <textarea value={truth} onChange={e => setTruth(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="What is true about you that your shame denies..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is one step toward healing you could take this week?</label>
              <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Even something small..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What question are you carrying to God about what happened?</label>
              <textarea value={question} onChange={e => setQuestion(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="He can hold the question..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Truth:</strong> {e.truth}</p>
                {e.step && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Step:</strong> {e.step}</p>}
                {e.question && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Question:</strong> {e.question}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "ZwDlGPCEUoE", title: "Healing Relational Trauma", channel: "Dan Allender", description: "Allender on the specific wounds that relational betrayal creates and the path toward healing for those whose trust was violated by someone who should have protected them." },
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score", channel: "Bessel van der Kolk", description: "Van der Kolk on how trauma lodges in the body and what embodied healing actually looks like — essential for anyone whose experience included physical violation." },
              { videoId: "PKyLYSfmTwI", title: "Healing After Spiritual Abuse", channel: "Allender Center", description: "The Allender Center on recovery from abuse that occurred in religious contexts — addressing both the spiritual and psychological dimensions of the wound." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Thompson on shame's neurological and spiritual dimensions — and how the experience of being truly known and not condemned is the mechanism by which shame is undone." },
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
