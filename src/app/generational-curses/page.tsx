"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Are Generational Curses Real? — What Scripture Actually Says", verse: "Exod 20:5-6", text: "The second commandment warns that God visits the iniquity of the fathers upon the children to the third and fourth generation of those who hate him — a statement that has generated centuries of debate. In context, this describes inherited consequences: when a parent walks in idolatry, children grow up shaped by that environment, those patterns, and those spiritual dynamics. Theologians distinguish between inherited consequences — real and undeniable — and legally binding spiritual curses that transfer guilt across generations. Both require attention. Christ's redemption on the cross addresses the root of every curse: the law's condemnation is removed (Gal 3:13), and even the inertial weight of generational patterns is subject to the transforming power of the Spirit. Nothing in your family line is beyond the reach of what was accomplished at Calvary." },
  { title: "Galatians 3:13 — Christ Has Redeemed Us From the Curse", verse: "Gal 3:13-14", text: "Christ redeemed us from the curse of the law by becoming a curse for us — for it is written, 'Cursed is everyone who is hung on a pole.' This single verse is the theological center of any Christian approach to generational curses. The curse Paul describes is the law's verdict on human sin — the comprehensive condemnation that extends to every area of human life, including inherited patterns and spiritual bondage. Redemption (exagorazo) means to buy out of the slave market. Christ did not merely reduce our curse — he purchased us entirely out of it. The authority the believer therefore has is not earned through ritual or formula but received through union with Christ. Because you are in Christ, every legal ground for generational curses has been addressed. The question becomes: are you living in the freedom he purchased, or are you still behaving as though the old sentence stands?" },
  { title: "Generational Patterns vs. Curses — Distinguishing the Psychological from the Spiritual", verse: "2 Cor 5:17", text: "Not every generational struggle is a spiritual curse — and confusing the two leads to either under-treatment or over-spiritualization. Epigenetic research has demonstrated that trauma can alter gene expression across generations. Family systems theory shows that emotional triangles, cutoffs, and reactive patterns repeat across generations with remarkable predictability. Learned behaviors — addictions, anger, avoidance, performance-based love — are passed down through modeling and environment. These are real, they are powerful, and they require therapeutic as well as spiritual responses. Genuine spiritual bondage — ground given to the enemy through ancestral occult involvement, blood oaths, sexual immorality, or cursing — is also real and requires spiritual resolution. Wise ministry addresses both dimensions. The person who seeks only prayer and ignores family systems counseling will struggle; the person who seeks only therapy and ignores the spiritual will also struggle. Both are addressed by the finished work of Christ and the indwelling Spirit." },
  { title: "Breaking Cycles Through Repentance and the Cross", verse: "Neh 9:2", text: "In Nehemiah 9, the people of Israel stand before God and confess not only their own sins but those of their ancestors — a practice also found in Leviticus 26:40 and Daniel 9. This is not an attempt to earn release from inherited guilt, nor is it suggesting that children bear legal responsibility for parents' sin (see Ezek 18:20). Rather, generational confession is an honest acknowledgment of reality: this is the shape of my family's story, this is where we have walked in sin, and I am naming it before God so that the redemption Christ provides can be specifically and consciously applied. It is appropriation of what is already available, not acquisition of something new. Repentance creates the conditions for transformation — it aligns us with truth about our history, opens us to the Spirit's work, and closes the door to patterns that have run in our family for generations." },
  { title: "Identity in Christ Supersedes Ancestral History", verse: "2 Cor 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: the old has gone, the new is here. The deepest answer to generational patterns is not ritual but identity. In Christ, you have been adopted into God's family (Rom 8:15), transferred into his kingdom (Col 1:13), and given a new bloodline — not through the DNA of your biological ancestors but through the blood of Jesus. Your inheritance is now defined not by your family of origin but by your heavenly Father. This does not mean that old patterns evaporate instantly; transformation is a process. But it does mean that who you are is no longer determined by where you came from. The new creation is the defining reality. You are not primarily the child of your broken family — you are primarily the child of God, and God's family patterns are available to you now through the Spirit, the Word, and the community of the church." },
];

const voices = [
  { id: "nta", name: "Neil T. Anderson", role: "Author, Victory Over the Darkness / Steps to Freedom in Christ", quote: "Your heavenly Father is not going to make you pay for the sins of your ancestors. But the enemy of your soul will certainly try to convince you that you are permanently bound by them. The truth is that your identity is not rooted in your family of origin — it is rooted in who you are in Christ. And who you are in Christ is not subject to ancestral history.", bio: "Anderson's Steps to Freedom in Christ process has helped millions of Christians identify and renounce the footholds that give the enemy ongoing access — including those rooted in generational patterns and ancestral sin. His work distinguishes carefully between inherited consequences, spiritual bondage, and psychological patterns, providing a structured approach to walking people into genuine freedom. His theology is grounded in Galatians 3:13 and the comprehensive victory of the cross." },
  { id: "jmc", name: "John Mark Comer", role: "Author, Live No Lies; Practicing the Way", quote: "The patterns of sin that run in families are real and they are powerful. But they are not destiny. The spiritual formation tradition names something the psychologists also see: we are shaped by the stories we inhabit. The good news is that in Christ, we have been placed into a new story — and new stories, inhabited with the whole community of practice we call the church, are capable of rewriting the old ones.", bio: "Comer's Live No Lies addresses the three enemies of the soul — the world, the flesh, and the devil — with particular attention to how lies become embedded in families and cultures. His framework of spiritual formation as the response to generational patterns is practical and accessible: it's not enough to be delivered from a pattern; we must be formed into something different. The practices of the ancient church — prayer, Scripture, community, simplicity — are what build the new family patterns in Christ." },
  { id: "da", name: "Dr. Dan Allender", role: "Author, The Healing Path; The Wounded Heart", quote: "The wounds we received in our families of origin do not define our destiny — but they do define the terrain on which our redemption must be worked out. You cannot simply skip the story of your childhood. The gospel is strong enough to go there. And it is only as we take the gospel into the actual places of our wounding that we find freedom rather than mere coping.", bio: "Allender's work at The Seattle School of Theology and Psychology integrates depth psychology with robust Christian theology, providing one of the most serious treatments of how childhood wounds — often rooted in family generational patterns — shape adult life and faith. His The Healing Path argues that the route to wholeness always runs through our story, not around it, and that the cross is specifically powerful in the places of deepest shame and wounding. His work is essential for understanding the psychological dimension of what can appear to be purely spiritual problems." },
];

const practices = [
  { icon: "🙏", title: "Ancestral Confession Prayer", text: "Set aside dedicated time to prayerfully confess the known sins of your family line — idolatry, occult involvement, sexual immorality, violence, addiction, bitterness. You are not bearing their guilt (Ezek 18:20) but naming reality before God so that the redemption of Christ may be consciously applied to these specific areas. This is the pattern of Nehemiah 9 and Daniel 9: honest, specific acknowledgment that opens the door to transformation." },
  { icon: "🌳", title: "Family Systems Genogram Work", text: "A genogram is a multi-generational family map that identifies patterns — addiction, divorce, mental illness, abuse, success and failure patterns — across at least three generations. Working through a genogram with a trained counselor or spiritual director reveals the structural patterns of your family system and helps identify where psychological and spiritual work is most needed. Many people find that naming the pattern on paper is itself profoundly clarifying." },
  { icon: "✂️", title: "Renouncing Sins of Ancestors", text: "In prayer, specifically renounce the known or suspected occult involvement, blood covenants, curses, and serious sins of your family line — not with dramatic ritual but with simple, clear verbal declaration. You are not adding to the work of the cross; you are consciously applying its finished work to the specific contours of your history. This is a one-time act of appropriation, not a repeating ritual." },
  { icon: "🤝", title: "Counseling and Spiritual Direction Combined", text: "The most effective approach to deep generational patterns combines professional counseling — particularly from therapists trained in family systems or trauma — with regular spiritual direction. Counseling addresses the psychological dimensions; spiritual direction keeps the work anchored in prayer, Scripture, and the work of the Spirit. Neither alone is sufficient for patterns that have both psychological and spiritual roots." },
  { icon: "🏡", title: "Building New Family Patterns in Christ", text: "Freedom from old patterns must be paired with deliberate construction of new ones. Identify the specific patterns you want to change — how conflict is handled, how love is expressed, how spiritual life is practiced in the home — and build intentional new rhythms. The new creation is not just liberation from the old; it is formation into something genuinely different, shaped by the patterns of God's kingdom rather than your family of origin." },
];

const scriptures = [
  { verse: "Exod 20:5-6", text: "I, the Lord your God, am a jealous God, punishing the children for the sin of the parents to the third and fourth generation of those who hate me, but showing love to a thousand generations of those who love me and keep my commandments." },
  { verse: "Gal 3:13-14", text: "Christ redeemed us from the curse of the law by becoming a curse for us, for it is written: 'Cursed is everyone who is hung on a pole.' He redeemed us in order that the blessing given to Abraham might come to the Gentiles through Christ Jesus." },
  { verse: "2 Cor 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: the old has gone, the new is here!" },
  { verse: "Neh 9:2", text: "Those of Israelite descent had separated themselves from all foreigners. They stood in their places and confessed their sins and the sins of their ancestors." },
  { verse: "Ezek 18:20", text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child. The righteousness of the righteous will be credited to them, and the wickedness of the wicked will be charged against them." },
  { verse: "Col 2:13-15", text: "He forgave us all our sins, having canceled the charge of our legal indebtedness, which stood against us and condemned us; he has taken it away, nailing it to the cross. And having disarmed the powers and authorities, he made a public spectacle of them, triumphing over them by the cross." },
];

type GCEntry = { id: string; date: string; pattern: string; rootCause: string; breakthrough: string };

export default function GenerationalCursesPage() {
  const [tab, setTab] = useState("theology");
  const [gcJournal, setGcJournal] = useState<GCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_gencurses_entries") ?? "[]"); } catch { return []; }
  });
  const [jPattern, setJPattern] = useState("");
  const [jRootCause, setJRootCause] = useState("");
  const [jBreakthrough, setJBreakthrough] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_gencurses_entries", JSON.stringify(gcJournal)); } catch {}
  }, [gcJournal]);

  function saveEntry() {
    if (!jPattern.trim() && !jRootCause.trim()) return;
    setGcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), pattern: jPattern, rootCause: jRootCause, breakthrough: jBreakthrough }, ...prev]);
    setJPattern(""); setJRootCause(""); setJBreakthrough("");
  }
  function deleteEntry(id: string) { setGcJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Spiritual Warfare</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Generational Curses &amp; Patterns</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            A biblical examination of generational cycles, inherited patterns, and the comprehensive freedom available in Christ for every family history.
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
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Generational Patterns Journal</h3>
                <textarea placeholder="What generational pattern concerns you most in your family line?" value={jPattern} onChange={e => setJPattern(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What root issue do you suspect lies behind this pattern — spiritually, psychologically, or relationally?" value={jRootCause} onChange={e => setJRootCause(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What breakthrough do you believe is available to you in Christ for this pattern?" value={jBreakthrough} onChange={e => setJBreakthrough(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {gcJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : gcJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.pattern && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Pattern:</strong> {e.pattern}</p>}
                  {e.rootCause && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Root cause:</strong> {e.rootCause}</p>}
                  {e.breakthrough && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Breakthrough:</strong> {e.breakthrough}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "oW3YMb4AGZA", title: "Are Generational Curses Real?", channel: "Spiritual Warfare & Scripture", description: "A careful biblical examination of whether generational curses are real, what Exodus 20:5-6 actually teaches, and how the finished work of Christ addresses every inherited spiritual burden." },
                { videoId: "K7_-9SleqFI", title: "Breaking Generational Cycles Through the Cross", channel: "Neil T. Anderson / Freedom in Christ", description: "Anderson walks through the Steps to Freedom approach to identifying and renouncing generational bondage — grounding the entire process in the believer's identity and authority in Christ." },
                { videoId: "UhvxqfPTl3w", title: "Generational Patterns and Family Systems", channel: "Christian Counseling & Psychology", description: "A look at how family systems theory and Christian theology work together to understand generational patterns — what is psychological, what is spiritual, and how to respond wisely to both." },
                { videoId: "wQ4jYQ1bCFU", title: "Your Identity in Christ Overrides Your Family History", channel: "Gospel & New Creation", description: "On 2 Corinthians 5:17 and what it means that in Christ the old has gone — including the inherited patterns, wounds, and spiritual dynamics of your family of origin." },
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
