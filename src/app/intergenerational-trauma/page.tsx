"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Sins of the Fathers Are Visited on Children — But Are Not the Children's Guilt", verse: "Exodus 20:5-6", text: "I, the Lord your God, am a jealous God, punishing the children for the sin of the parents to the third and fourth generation... but showing love to a thousand generations. The text has two parts that must be held together: the consequences of sin extend generationally, and the love of God extends far longer. The 'visiting' of parental sin is not the imputation of guilt but the real transmission of consequences — broken attachment patterns, trauma responses, learned behaviors, relational wounds. The child is not guilty for the parent's sin. But the child may be shaped by it." },
  { title: "Individual Responsibility Is Real — and Does Not Eliminate Generational Shaping", verse: "Ezekiel 18:20", text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child. Ezekiel's corrective to fatalism is essential: you are not determined by your family of origin. Your own choices and their consequences belong to you, not to your ancestors. But acknowledging individual responsibility does not require denying that generational patterns are real. Both are true: you are responsible, and you were shaped." },
  { title: "The Gospel Interrupts the Transmission of Harm Down Generations", verse: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! The new creation language is specifically relevant to generational patterns: the person in Christ has a new origin, a new family, a new set of defining loyalties. The pattern of harm that has been transmitted through the family line is not more powerful than the Spirit's re-creating work. Many believers have experienced the gospel's power to break specific generational patterns — addiction, rage, abuse, emotional unavailability — that had defined every previous generation." },
  { title: "Healing the Wounds We Inherited Is Holy Work", verse: "Psalm 78:4-7", text: "We will tell the next generation the praiseworthy deeds of the Lord... so the next generation would know them, even the children yet to be born, and they in turn would tell their children. Then they would put their trust in God. The generational purpose runs both directions: harm is transmitted down, and so is healing. The person who does the hard work of understanding and healing the wounds they received from their family of origin is not just doing therapeutic self-improvement. They are, potentially, stopping a transmission of harm and beginning a transmission of healing for the generations that follow." },
  { title: "Lament Is the Starting Point for Generational Healing", verse: "Nehemiah 1:6-7", text: "Let your ear be attentive and your eyes open to hear the prayer your servant is praying before you day and night for your servants, the people of Israel. I confess the sins we Israelites, including myself and my father's family, have committed against you. We have acted very wickedly toward you. Nehemiah's prayer is corporate and confessional: naming the sins of his fathers and his own generation together. This model of generational prayer — acknowledging what was done and what was received, grieving it honestly before God — is the starting point for the healing work." },
];

const voices = [
  { id: "dl", name: "Diane Langberg", role: "Psychologist, Author of Suffering and the Heart of God", quote: "We are all shaped by the people who raised us — their wounds, their words, their patterns. We are also all shaped by the people who raised them. The intergenerational transmission of trauma is one of the most well-documented phenomena in developmental psychology. But it is not deterministic. With God, with help, with honesty, and with time, the transmission can be interrupted and the patterns changed.", bio: "Langberg's clinical work specifically addresses complex and generational trauma. Her theological depth and clinical precision make her uniquely equipped to address how family patterns of harm are transmitted and how the gospel's healing work intersects with the psychological work of pattern interruption." },
  { id: "bv", name: "Bessel van der Kolk", role: "Author, The Body Keeps the Score; Trauma Researcher", quote: "Research on attachment and neuroscience has shown that trauma is transmitted between generations not just through storytelling or learned behavior, but through physiological and neurological patterns — the nervous system of the child is shaped by the nervous system of the parent. This is why generational healing requires more than cognitive insight. It requires embodied change.", bio: "Van der Kolk's research provides the neurological and physiological foundation for understanding intergenerational trauma transmission. His work on how trauma is held in the body — and passed down through attachment relationships — explains why generational healing is slower and harder than simply deciding to be different from your parents." },
  { id: "mt", name: "Mark DeYmaz & Oneya Okuwobi", role: "Authors and Pastors on Multiethnic Church and Racial Reconciliation", quote: "Much of the intergenerational trauma in the American church is racially shaped — the wounds of slavery, segregation, redlining, and ongoing discrimination are transmitted down through Black families and communities in ways that white Christians must learn to understand rather than dismissing as ancient history. Generational healing in the American church context requires this racial dimension to be named and entered.", bio: "DeYmaz and Okuwobi's work on multiethnic community and racial healing addresses the specific dimension of intergenerational trauma that runs through racially marginalized communities — including the ways that American Christianity has been complicit in the transmission of that harm and what genuine reconciliation requires." },
];

const practices = [
  { icon: "🔍", title: "Map the Patterns You Have Inherited", text: "A family genogram — a visual map of patterns across two or three generations — is one of the most effective tools for making intergenerational patterns visible. With a therapist, map: addiction patterns, mental health patterns, divorce patterns, attachment styles, communication styles, vocational patterns, faith patterns. The goal is not to assign blame but to identify what you received — including gifts and not only wounds — and to see the patterns that have operated below your conscious awareness." },
  { icon: "💬", title: "Name the Harm Honestly Before God and a Trusted Person", text: "Nehemiah's prayer named specifically what his ancestors had done and what his generation had perpetuated. The generational healing work requires the same specificity: naming what was done to you, what patterns you have inherited, and what you have done with them. Vague acknowledgment produces vague healing. Specific, honest naming — in prayer, in therapy, in community — opens the specific wounds to God's specific healing. A trauma-informed therapist can guide this process safely." },
  { icon: "🧠", title: "Understand the Neuroscience — It Explains Why This Is Hard", text: "Intergenerational patterns are not primarily stored in the mind as beliefs; they are stored in the body as patterns — emotional reactivity profiles, attachment responses, nervous system baselines. This is why telling yourself 'I won't be like my father' often fails: the commitment is cognitive, but the pattern is neurological. Healing requires body-informed approaches: EMDR, somatic experiencing, DBT, attachment-focused therapy. The intention must become embodied change." },
  { icon: "🙏", title: "Pray Specifically for Generational Healing", text: "There is a form of prayer that specifically addresses generational patterns: confessing the sins of ancestors honestly (Nehemiah 1, Daniel 9), asking God to break the transmission of specific patterns, asking for the Spirit's work in your own nervous system and attachment patterns. This prayer is not magic, but it orients the healing work theologically and invites the Spirit's specific involvement. Many people find that naming generational patterns before God begins a process of supernatural and therapeutic healing that neither alone produces." },
  { icon: "👨‍👩‍👧", title: "Be Intentional About What You Transmit to the Next Generation", text: "The healing work is not just for you — it is for the people downstream. Every pattern you interrupt in your own life and relationships is a pattern that your children, grandchildren, and the communities you influence do not have to navigate. The parent who does their own therapy, the person who builds healthy attachment patterns in their own relationships, the one who breaks the addiction cycle — they are not just improving their own life. They are redirecting the river of what flows to the next generation." },
];

const scriptures = [
  { verse: "Exodus 20:5-6", text: "I, the Lord your God, am a jealous God, punishing the children for the sin of the parents to the third and fourth generation of those who hate me, but showing love to a thousand generations of those who love me and keep my commandments." },
  { verse: "Ezekiel 18:20", text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child. The righteousness of the righteous will be credited to them, and the wickedness of the wicked will be charged against them." },
  { verse: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
  { verse: "Psalm 103:17-18", text: "But from everlasting to everlasting the Lord's love is with those who fear him, and his righteousness with their children's children — with those who keep his covenant and remember to obey his precepts." },
  { verse: "Nehemiah 1:6-7", text: "Let your ear be attentive and your eyes open to hear the prayer your servant is praying before you day and night for your servants, the people of Israel. I confess the sins we Israelites, including myself and my father's family, have committed against you." },
  { verse: "Psalm 78:4", text: "We will not hide them from their descendants; we will tell the next generation the praiseworthy deeds of the Lord, his power, and the wonders he has done." },
];

type IGEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function IntergenerationalTraumaPage() {
  const [tab, setTab] = useState("theology");
  const [igJournal, setIgJournal] = useState<IGEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_intergenerationaltraumaj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_intergenerationaltraumaj_entries", JSON.stringify(igJournal)); } catch {}
  }, [igJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setIgJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setIgJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Family &amp; Healing</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Intergenerational Trauma</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          The wounds passed down through generations — theology of generational patterns, the gospel's interrupting power, and the healing work that stops the transmission.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? PURPLE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <textarea placeholder="What specific patterns have I inherited? Where do I see them operating in me?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What does the new creation promise mean for the patterns I have received?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="One pattern I am actively working to interrupt for the next generation" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {igJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : igJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Patterns:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Promise:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Interrupting:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score — Generational Trauma", channel: "The Commonwealth Club / Bessel van der Kolk", description: "Van der Kolk explains how trauma is transmitted between generations through physiological and neurological patterns — the scientific foundation for understanding why generational healing requires more than deciding to be different." },
              { videoId: "ZGk1hl1nNrw", title: "Healing Generational Wounds", channel: "Diane Langberg", description: "Langberg on the clinical and spiritual dimensions of intergenerational trauma — what is transmitted, why it is transmitted, and what the healing work requires for those who have received harm through their family of origin." },
              { videoId: "vvRGdpBEn6c", title: "Lament and Generational Justice", channel: "Fuller Theological Seminary", description: "On the role of honest lament in generational healing — why the church must grieve before it can heal, and what generational lamentation looks like theologically and practically." },
              { videoId: "6p_yaNFSYao", title: "Trauma and the Gospel", channel: "The Gospel Coalition", description: "How the gospel speaks specifically to generational trauma — including the theological questions it raises about God's justice, the transmission of consequences, and the new creation's interrupting power." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
