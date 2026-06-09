"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Child Is Fully Known and Fully Loved", verse: "Psalm 139:13-16", text: "For you created my inmost being; you knit me together in my mother's womb... All the days ordained for me were written in your book before one of them came to be. Whatever the circumstances of conception, the child forming in the womb is known by God, being formed by God, and has days God has already ordained. The circumstances of conception do not alter God's authorship of the life. This child, conceived in unexpected circumstances, is not an accident to God — God was present at the conception and is present in the womb." },
  { title: "Jesus Came to the Unexpected and Marginalized", verse: "Luke 1:48", text: "He has been mindful of the humble state of his servant. From now on all generations will call me blessed. Mary herself was in an unexpected, potentially scandalous pregnancy — unmarried, overshadowed by the Holy Spirit, in a culture that could have stoned her. Jesus entered the world through an unexpected pregnancy into an insecure social situation. He knows this territory from the inside. He did not choose a politically safe, socially secure entry point." },
  { title: "Shame Is Not From God", verse: "Romans 8:1", text: "There is now no condemnation for those who are in Christ Jesus. The church has too often made pregnant women feel shame that the gospel does not require them to carry. Conviction — the Spirit's work that leads to repentance and restoration — is different from ongoing condemnation that brands and excludes. God's offer to those who come to him is not continued shame management — it is the end of condemnation." },
  { title: "Every Path Forward Is Weighty and Belongs to God", verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. The decisions facing a woman in an unexpected pregnancy — parenting alone, with a partner, adoption, the weight of the abortion question — are among the most consequential decisions a person can make. None of them are made in a vacuum of God's absence. He is present to every one of these paths. Submitting each one to him is not a formula; it is the posture of someone who knows they need wisdom beyond their own." },
  { title: "The Church Is Meant to Provide Support, Not Judgment", verse: "James 1:27", text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world. James defines true religion as care for the vulnerable. An unexpectedly pregnant woman — regardless of the circumstances of her pregnancy — is precisely the vulnerable person whom the church is called to surround with support, not additional condemnation. Churches that make pregnant women feel unwelcome are failing this basic definition of true religion." },
];

const voices = [
  { id: "v1", name: "Sandra Glahn", role: "Professor, Author", quote: "The church should be the safest place in the world for a pregnant woman who is scared. The fact that it often is not is one of the great failures of contemporary Christianity.", bio: "Sandra Glahn is a professor at Dallas Theological Seminary and has written extensively on women, family, and the church's pastoral failures. Her work addresses the specific experience of women who face unexpected pregnancy and find the church more condemning than supporting — and what genuine, gospel-shaped pastoral care requires in response." },
  { id: "v2", name: "Russell Moore", role: "Author, Director of Christianity Today", quote: "Life begins at conception. And life at conception is precious, whatever the circumstances in which conception occurred. The church must hold both truths simultaneously and stop treating them as if one cancels the other.", bio: "Russell Moore is a theologian, ethicist, and author who has addressed both the sanctity of life and the pastoral care of women in unexpected pregnancies. His work challenges churches to move beyond a purely political framework for life issues toward a genuinely pastoral one — caring for both the child and the mother with equal seriousness." },
  { id: "v3", name: "Rebekah Lyons", role: "Author, Speak Up Conference", quote: "To the woman facing an unexpected pregnancy: you are not alone, you are not disqualified, and the God who knit together the life inside you has not abandoned either of you.", bio: "Rebekah Lyons is a Christian author and speaker whose work addresses women facing fear, uncertainty, and vulnerable circumstances. She has spoken extensively about the church's calling to wrap unexpected pregnancies in community rather than condemnation — and what that looks like in practice." },
  { id: "v4", name: "Bethany Christian Services", role: "Adoption and Pregnancy Support Ministry", quote: "Every woman facing an unexpected pregnancy deserves to know all her options — parenting, adoption, support — presented in love without pressure or shame, with the support of the community of faith.", bio: "Bethany Christian Services is one of the largest Christian adoption and pregnancy support agencies in the United States. Their model of care provides full-spectrum support — practical, emotional, financial, and spiritual — for women facing unexpected pregnancies, including those considering adoption as an expression of love rather than abandonment." },
];

const practices = [
  { icon: "🤝", title: "Tell One Safe Person Immediately", text: "Isolation in unexpected pregnancy is dangerous — practically, emotionally, and spiritually. Tell one trusted person as soon as possible: a counselor, a pastor, a trusted friend, or a family member who will respond with support rather than condemnation. You do not have to navigate this alone." },
  { icon: "📋", title: "Access Practical Support Resources", text: "Many communities have pregnancy resource centers, church-based assistance programs, and social services that provide material support — housing, baby supplies, financial assistance, parenting classes — regardless of your decisions. The National Helpline for Women (optionline.org) and Bethany Christian Services are starting points." },
  { icon: "🏥", title: "Establish Prenatal Care Early", text: "Regardless of what decision you are working through, your health and the health of the developing baby are immediate priorities. Medicaid, community health centers, and Title X programs provide prenatal care regardless of income or insurance status." },
  { icon: "⚖️", title: "Give Yourself Time to Consider All Paths", text: "Parenting alone, parenting with a co-parent, open or closed adoption, and the specific weight of the abortion question each deserve serious consideration — with honest information, pastoral support, and enough time to make a genuine decision rather than a panicked one." },
  { icon: "⛪", title: "Find a Church That Offers Genuine Wrap-Around Support", text: "If your current church community makes you feel condemned rather than supported, you may need to find a different community temporarily or permanently. A community that can hold your vulnerability with grace rather than judgment is not a theological luxury; it is what the church is called to be." },
  { icon: "🙏", title: "Pray Psalm 139 as the Theology of This Moment", text: "Verse by verse: God created this child's inmost being. God is knitting together in the womb. God has written all the days in his book. These are not comforting platitudes — they are theological claims about the specific situation you are in right now." },
];

const scriptures = [
  { verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
  { verse: "James 1:27", text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress." },
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." },
];

type UPEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function UnmarriedPregnancyPage() {
  const [tab, setTab] = useState("theology");
  const [upJournal, setUpJournal] = useState<UPEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setUpJournal(JSON.parse(localStorage.getItem("vine_unmarriedpregnancyj_entries") ?? "[]")); } catch { setUpJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: UPEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...upJournal];
    setUpJournal(updated);
    localStorage.setItem("vine_unmarriedpregnancyj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = upJournal.filter(e => e.id !== id);
    setUpJournal(updated);
    localStorage.setItem("vine_unmarriedpregnancyj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌱</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Unexpected Pregnancy</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>Facing an unexpected pregnancy — finding grace, practical support, and a church that wraps around rather than pushes away.</p>
        <div style={{ background: "#0a1f14", border: `1px solid ${GREEN}`, borderRadius: 8, padding: "0.75rem 1.25rem", maxWidth: 480, margin: "0 auto", fontSize: "0.85rem", color: MUTED }}>
          <strong style={{ color: GREEN }}>Support:</strong> Option Line 1-800-712-4357 (optionline.org) &nbsp;|&nbsp; Bethany Christian Services &nbsp;|&nbsp; 988
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
              <textarea placeholder="What am I feeling right now? What am I most afraid of?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What do I believe God sees when he looks at me and this child right now?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One person I can tell, or one step I can take today:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {upJournal.map(e => (
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
              { videoId: "kP_ZSz2UGEU", title: "When You Face an Unexpected Pregnancy", channel: "Desiring God", description: "A pastoral resource on navigating an unexpected pregnancy with faith — addressing the fear, the weight of decisions, and the God who is present in the unexpected." },
              { videoId: "eCYalLxHSDs", title: "Finding God in Hard Pregnancies", channel: "She Reads Truth", description: "A resource for women navigating difficult pregnancy circumstances — finding God's presence when the situation is frightening and the path is uncertain." },
              { videoId: "NnGBhG03g4M", title: "Hope and Grace for Difficult Family Situations", channel: "Brennan Manning", description: "Manning on the grace of God extended to all — including those in family situations that do not fit the expected template — and what unconditional love looks like in practice." },
              { videoId: "GGCF3OPWN14", title: "The Upside-Down Kingdom", channel: "Tim Keller", description: "Keller on how the kingdom of God consistently chooses the unexpected, the marginalized, and the socially vulnerable as its primary recipients — directly applicable to unexpected pregnancy." },
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
