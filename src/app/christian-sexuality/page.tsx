"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ROSE = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Body Is Good — Against the Gnostic Heresy", verse: "Gen 1:31", text: "God saw all that he had made, and it was very good. The Gnostic heresy that the physical is evil and only the spiritual is good influenced the church profoundly — and still does. A Christian theology of sexuality must begin with the goodness of embodiment. The incarnation (John 1:14) confirms the goodness of the body: when God took on flesh, he affirmed not merely the soul but the whole human person. The resurrection goes further — the body is not a temporary container for the soul but essential to who we are. We will be raised in bodies. What this means for sexuality is foundational: the body, and its desires, are not the enemy. They are part of what God called very good." },
  { title: "Sexual Desire Is Not the Problem — Disordering Is", verse: "Gen 3", text: "The Fall does not create sexual desire — it disorders it. The problem with human sexuality is not that it exists but that it has been warped in every human being since Genesis 3. Concupiscence (disordered desire) affects all sexuality, including heterosexual desire within marriage. The goal of Christian sexual ethics is not the elimination of desire but its proper ordering — toward the person of one's covenant spouse in marriage, or toward chastity outside of it. To treat sexual desire itself as the problem is to repeat the Gnostic error. To treat its disordering as insignificant is to ignore the Fall. The Christian path runs between these two errors." },
  { title: "Marriage as the Context for Sexual Intimacy — the Biblical Case", verse: "Heb 13:4", text: "Marriage should be honored by all, and the marriage bed kept pure (Heb 13:4). The consistent biblical framework places sexual intimacy within the covenant of marriage between a man and a woman (1 Cor 7:2-3). This framework exists for a reason: sexual union creates a profound one-flesh bond (1 Cor 6:16) that is appropriate only in the context of covenant commitment. Premarital sex is not wrong merely because of a rule — it is wrong because of what it does: it creates the deepest possible bond between two people in the absence of the commitment that bond requires. The result is predictable damage to trust, attachment, and the capacity for genuine covenant." },
  { title: "Same-Sex Attraction and the Gospel — a Compassionate Framework", verse: "1 Cor 6:11", text: "The church has often swung between two errors on same-sex attraction: treating it as uniquely disqualifying (which is not biblical) or treating it as entirely neutral and to be celebrated (which is also not biblical). A faithful framework holds both clarity and compassion. Same-sex attraction is a form of disordered desire common to fallen humanity — it is not sin but temptation. The call to all Christians is holiness and chastity, and the standard does not change based on the shape of temptation. Christians who experience same-sex attraction and live faithfully celibate lives are not second-class disciples. They deserve the church's full honor, genuine belonging, and deep pastoral care." },
  { title: "Sexual Sin and the Gospel — Healing, Not Just Forgiveness", verse: "1 Cor 6:11", text: "And that is what some of you were — past tense (1 Cor 6:11). The gospel offers genuine transformation, not merely forensic forgiveness. Healing from sexual sin involves confession and accountability, professional support when needed, genuine community, and the slow work of identity reconstruction — learning not to be defined by a sexual history. The gospel is particularly powerful for the person who has made sexual decisions they deeply regret. It offers not just pardon but genuine freedom: a new identity, a clean record, and the real possibility of a changed life. That is not wishful thinking — it is the claim of the apostle writing in the past tense." },
];

const voices = [
  { name: "Christopher Yuan", role: "Holy Sexuality and the Gospel", quote: "The goal of the Christian life is not heterosexuality — it is holiness. This matters because if we tell gay people that the gospel will make them straight, we have promised something the gospel does not promise. But if we tell all Christians that the goal is holiness and chastity — that the same standard applies to everyone — we have told the truth. Holy sexuality is chastity outside marriage and faithfulness within it. That is the call for every follower of Jesus, whatever the shape of their desire.", bio: "Christopher Yuan is a professor at Moody Bible Institute and the author of Holy Sexuality and the Gospel. His own story — conversion from a lifestyle of gay sexual activity while in prison, and subsequent commitment to celibacy as a gay Christian — gives him unusual pastoral authority on this subject. His framework of holy sexuality has been widely influential in helping churches think more carefully and compassionately about this topic." },
  { name: "Sam Allberry", role: "Is God Anti-Gay?", quote: "The church owes a profound debt to Christians who experience same-sex attraction and have chosen biblical faithfulness at great personal cost. They have not been given a lesser gospel — they have been given the full gospel, which includes a cross. What the church must offer in return is not just theological accuracy but genuine community: the kind of belonging where the single person is not an afterthought, where celibacy is honored and not pitied, and where no one has to be alone.", bio: "Sam Allberry is a pastor, author, and speaker who is himself same-sex attracted and committed to biblical celibacy. Is God Anti-Gay? is a brief, accessible, and pastorally sensitive treatment of what the Bible says about homosexuality and what the church owes to same-sex attracted Christians. Allberry is a founding editor of Living Out, a ministry resource for same-sex attracted Christians." },
  { name: "Rosaria Butterfield", role: "The Secret Thoughts of an Unlikely Convert", quote: "I lost everything when I came to Christ — my partner, my community, my professional identity, my worldview. I am not pretending that was easy or that you should expect it not to hurt. But the church that received me had to be willing to be that home — to be what I had given up. Too many churches preach the cost without offering the community. If you ask people to leave everything, you must be everything they are leaving for.", bio: "Rosaria Butterfield was a tenured professor of English and Women's Studies at Syracuse University, in a committed same-sex relationship, when she began studying the Bible to write a critique of Christian conservatives. Her conversion is told in The Secret Thoughts of an Unlikely Convert. She now writes and speaks about sexuality, hospitality, and what genuine Christian community must look like for the church's call to be credible." },
];

const practices = [
  "Honest examination of your own sexuality and how it has been affected by the Fall — not only overt sin but disordered attachment, use, and avoidance",
  "Building accountability for specific struggles with a same-gender, mature Christian who will ask hard questions and not look away",
  "Renewing your mind about your own body and sexuality through Scripture and good theology — replacing cultural narratives with biblical ones",
  "Pursuing professional Christian counseling for areas of deep sexual wound or addiction, where the work is more than a small group can carry",
  "Building genuine community with Christians who experience same-sex attraction so that they are not isolated within the church",
];

const scriptures = [
  { verse: "Gen 1:31", text: "God saw all that he had made, and it was very good." },
  { verse: "1 Cor 6:18-20", text: "Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body. Do you not know that your bodies are temples of the Holy Spirit?" },
  { verse: "Heb 13:4", text: "Marriage should be honored by all, and the marriage bed kept pure, for God will judge the adulterer and all the sexually immoral." },
  { verse: "1 Thess 4:3-5", text: "It is God's will that you should be sanctified: that you should avoid sexual immorality; that each of you should learn to control your own body in a way that is holy and honorable, not in passionate lust like the pagans, who do not know God." },
  { verse: "1 Cor 6:11", text: "And that is what some of you were. But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God." },
  { verse: "Song 8:6", text: "Place me like a seal over your heart, like a seal on your arm; for love is as strong as death, its jealousy unyielding as the grave." },
];

const videos = [
  { id: "Jt7BQdGmB4A", title: "Christopher Yuan: Holy Sexuality and the Gospel" },
  { id: "8KT6rCbOtfo", title: "Sam Allberry: What Does the Bible Say About Homosexuality?" },
  { id: "AFlHn2w_K3A", title: "Rosaria Butterfield: The Gospel Comes with a House Key" },
  { id: "hf2Z6Nfz-uc", title: "A Theology of the Body and Sexual Faithfulness" },
];

type SXEntry = { id: string; date: string; struggle: string; truth: string; step: string };

export default function ChristianSexualityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SXEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_sexuality_entries") ?? "[]"); } catch { return []; }
  });
  const [jStruggle, setJStruggle] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => { localStorage.setItem("vine_sexuality_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jStruggle.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), struggle: jStruggle, truth: jTruth, step: jStep }, ...prev]);
    setJStruggle(""); setJTruth(""); setJStep("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Identity &amp; Relationships</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Sexuality</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>A theology of the body, desire, and sexual faithfulness — grounded in creation, honest about the Fall, and shaped by the gospel.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? ROSE : BORDER}`, background: tab === t.id ? ROSE + "22" : "transparent", color: tab === t.id ? ROSE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: ROSE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.65 }}>{p}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: ROSE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ROSE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: ROSE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Bring Your Sexuality to God</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to reflect honestly and prayerfully on your own sexuality before God.</p>
            {[
              { label: "Struggle — a struggle in the area of sexuality you are bringing to God", val: jStruggle, set: setJStruggle },
              { label: "Truth — a biblical truth that speaks to that struggle", val: jTruth, set: setJTruth },
              { label: "Step — a step you are taking toward holiness", val: jStep, set: setJStep },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: ROSE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: ROSE }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ROSE, fontWeight: 600 }}>Struggle:</span> {e.struggle}</p>
                      {e.truth && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ROSE, fontWeight: 600 }}>Truth:</span> {e.truth}</p>}
                      {e.step && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: ROSE, fontWeight: 600 }}>Step:</span> {e.step}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: ROSE }}>{v.title}</h3>
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
