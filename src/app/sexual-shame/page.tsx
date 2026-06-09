"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Body Is Good, Not Shameful", verse: "Genesis 1:31", text: "God saw all that he had made, and it was very good. The body was created good. Sexuality was created good. Before the fall, the text says the man and woman were naked and unashamed (Gen 2:25). Shame about the body and its sexuality is a result of the fall, not a feature of creation. The goal of redemption is not the abolition of the body but its full healing and glorification — which means sexuality itself is not the problem. The church has often taught otherwise, and that teaching has caused profound damage." },
  { title: "Shame About the Past Is Not Repentance", verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus. Many Christians carry decades of sexual shame — over past experiences, assaults received, sexual struggles, prior choices — and call it godliness. But shame is not repentance. Repentance is a turning toward God; shame is a turning inward in self-contempt. Romans 8:1 is one of the most radical statements in Scripture: no condemnation. Not 'less condemnation.' Not 'condemnation once you feel bad enough.' No condemnation." },
  { title: "Sexual Trauma Is Not Moral Failure", verse: "Lamentations 3:51", text: "What I see brings grief to my soul. The experience of sexual assault, abuse, or exploitation is not a source of shame for the person who was victimized. The conflation of sexual trauma with sexual sin — the treatment of assault survivors as if they carry moral responsibility — is a pastoral and theological failure. Christ's body was violated. He did not bear shame for what was done to him. He bore the shame of sin — ours, not the abuser's." },
  { title: "God Speaks About Sexuality Without Embarrassment", verse: "Song of Songs 4:1", text: "How beautiful you are, my darling! Oh, how beautiful! The Song of Solomon — in the middle of the biblical canon — speaks about erotic love with frankness and delight. God is not embarrassed by sexuality. The church's inability to speak about sexuality without shame or titillation is not fidelity to Scripture — it is a departure from it. God created sexuality, described it in Scripture, and called it very good." },
  { title: "The Gospel Restores What Shame Has Stripped", verse: "Isaiah 61:7", text: "Instead of your shame you will receive a double portion, and instead of disgrace you will rejoice in your inheritance. Isaiah's vision of restoration specifically names shame as one of the wounds God intends to reverse. The double portion — twice what was taken — is the gospel's promise to those who have carried sexual shame, whether from choices made, things done to them, or messages received in religious contexts." },
];

const voices = [
  { id: "v1", name: "Jay Stringer", role: "Licensed Mental Health Counselor, Author", quote: "Sexual brokenness is almost never primarily about sex. It is about the unprocessed stories of our lives — the wounds that have not yet been brought into the light.", bio: "Jay Stringer is a licensed counselor and the author of Unwanted: How Sexual Brokenness Reveals Our Way to Healing. His work addresses sexual compulsivity, shame, and struggle from a deeply personal, narrative, and theologically serious framework — moving away from behavioral modification toward genuine story-level healing that addresses the desires beneath the behavior." },
  { id: "v2", name: "Diane Langberg", role: "Psychologist, Trauma Specialist", quote: "The sexually traumatized person did not lose their purity. They were sinned against. The church must stop treating victims as if they carry the sin of those who violated them.", bio: "Diane Langberg has spent decades working with trauma survivors, including survivors of sexual abuse in religious contexts. Her work is essential for churches learning to respond faithfully to sexual trauma — distinguishing clearly between sexual sin and sexual victimization, and naming the ways the church has re-traumatized survivors through shame-based pastoral responses." },
  { id: "v3", name: "Rachael Denhollander", role: "Attorney, Advocate, Author", quote: "The church has a particular responsibility to survivors because it claims to represent a God who specializes in making the broken whole. When we silence them instead, we betray that claim.", bio: "Rachael Denhollander is a survivor of sexual abuse and an attorney who was central to the Larry Nassar prosecution. Her book What Is a Girl Worth? and her advocacy work have transformed how the church converses about sexual abuse. Her combination of legal precision, survivor experience, and theological depth makes her one of the most important voices on the intersection of faith and sexual trauma." },
  { id: "v4", name: "Curt Thompson, MD", role: "Psychiatrist, Author", quote: "Shame tells us we are bad. Guilt says we did something bad. The gospel says: you have done something bad, and you are fully and unconditionally loved. Holding both is the work of healing.", bio: "Curt Thompson is the author of The Soul of Shame, which provides one of the most sophisticated theological and neurological frameworks for understanding how shame operates and how it is healed. His work is directly applicable to sexual shame — the specific ways it is internalized, how it shapes identity, and what shame-healing in community requires." },
];

const practices = [
  { icon: "🔓", title: "Name Shame as Shame, Not Holiness", text: "The first step is distinguishing between the voice of the Spirit (conviction that moves toward God and produces repentance) and the voice of shame (condemnation that circles inward and produces self-contempt). The Spirit does not berate. Shame does." },
  { icon: "📖", title: "Read Romans 8:1 Until You Believe It", text: "No condemnation. Read it slowly. Then read Romans 8:31-39. God is for you. Nothing separates you from his love. The theological claim must be allowed to challenge the felt experience. This is not denial — it is faith confronting shame with truth." },
  { icon: "💬", title: "Tell One Safe Person Your Shame Story", text: "Shame lives in secrecy. Brené Brown's research confirms that shame thrives in silence and loses power in empathic witness. Telling a trusted, empathic person — not to be fixed but to be heard — is one of the most powerful shame-healing interventions available." },
  { icon: "🏥", title: "Work with a Trauma-Informed Counselor for Sexual Trauma", text: "If sexual shame has roots in abuse or assault, working with a trauma-informed therapist (not just a pastor or accountability partner) is often essential. Trauma therapy addresses the specific ways traumatic experience has been encoded and how the body holds it." },
  { icon: "⛪", title: "Find a Church That Speaks About Sexuality Without Shame", text: "Not every church has the theological or pastoral capacity to hold sexual brokenness, shame, and trauma with grace. If your church community consistently re-shames, find one that speaks of the body and sexuality with the frankness and reverence the Song of Solomon models." },
  { icon: "🙏", title: "Pray Isaiah 61:7 as a Personal Promise", text: "Instead of your shame you will receive a double portion. God specifically promised restoration from shame. Pray it as addressed to you. Let the specificity of the promise encounter the specificity of your shame." },
];

const scriptures = [
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Isaiah 61:7", text: "Instead of your shame you will receive a double portion, and instead of disgrace you will rejoice in your inheritance." },
  { verse: "Genesis 2:25", text: "Adam and his wife were both naked, and they felt no shame." },
  { verse: "Psalm 34:5", text: "Those who look to him are radiant; their faces are never covered with shame." },
  { verse: "Romans 8:38-39", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
];

type SSEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function SexualShamePage() {
  const [tab, setTab] = useState("theology");
  const [ssJournal, setSsJournal] = useState<SSEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setSsJournal(JSON.parse(localStorage.getItem("vine_sexualshamej_entries") ?? "[]")); } catch { setSsJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: SSEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...ssJournal];
    setSsJournal(updated);
    localStorage.setItem("vine_sexualshamej_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = ssJournal.filter(e => e.id !== id);
    setSsJournal(updated);
    localStorage.setItem("vine_sexualshamej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕊️</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Sexual Shame</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>The body is good. Shame is not holiness. No condemnation means no condemnation.</p>
        <div style={{ background: "#0a1f14", border: `1px solid ${GREEN}`, borderRadius: 8, padding: "0.75rem 1.25rem", maxWidth: 480, margin: "0 auto", fontSize: "0.85rem", color: MUTED }}>
          <strong style={{ color: GREEN }}>If you have experienced sexual abuse:</strong> RAINN 1-800-656-4673 &nbsp;|&nbsp; 988 Lifeline
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${GREEN}` }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="Where does sexual shame show up in my life? What stories carry it?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What does Romans 8:1 mean for this specific shame I carry?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One step toward letting shame lose its grip:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {ssJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}>Step: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Curt Thompson on how shame operates in the soul and body — its neurological roots, how it is transmitted, and what shame healing requires in the context of community and story." },
              { videoId: "1nzj7Sf395o", title: "Healing the Shame That Binds", channel: "CCEF", description: "CCEF on the difference between godly sorrow that leads to repentance and toxic shame that leads to self-contempt — and how to distinguish between them in pastoral care." },
              { videoId: "psN1DORYYV0", title: "The Gift of Imperfection", channel: "Brené Brown TED", description: "Brené Brown on how vulnerability and shame resilience work — and why the only way through shame is empathy rather than isolation or self-condemnation." },
              { videoId: "ZGk1hl1nNrw", title: "Trauma, Abuse, and the Body", channel: "Diane Langberg", description: "Diane Langberg on how sexual trauma is held in the body, how it shapes shame and identity, and what faithful ministry to trauma survivors requires from the church." },
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
