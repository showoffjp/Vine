"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "God Hates Divorce — and He Also Hates Oppression", verse: "Malachi 2:16", body: "The often-quoted Malachi 2:16 — 'I hate divorce' — is embedded in a passage specifically addressing the abandonment of faithful wives. The full verse in its context is actually a condemnation of those who are divorcing to pursue others. The passage is not a blanket condemnation of all divorce in all circumstances; it is an expression of God's hatred for covenant-breaking, unfaithfulness, and the cruelty inflicted on the abandoned. God also hates abandonment, abuse, and oppression." },
  { title: "Moses Permitted Divorce Because of Hardness of Heart", verse: "Matthew 19:8", body: "When the Pharisees asked Jesus about divorce, he responded: 'Moses permitted you to divorce your wives because your hearts were hard. But it was not this way from the beginning.' The permission was a recognition of reality in a fallen world — not an endorsement, but a protective provision. God's design is lifelong covenant. The reality of sin means some marriages end. Both realities are true." },
  { title: "Paul's Provision: Desertion", verse: "1 Corinthians 7:15", body: "Paul addresses the situation where an unbelieving spouse leaves: 'But if the unbeliever leaves, let it be so. The brother or the sister is not bound in such circumstances; God has called us to live in peace.' This provision for desertion has been extended by most theologians to include abuse and abandonment — situations where the marriage covenant has already been functionally destroyed by one party." },
  { title: "There Is No Scarlet Letter", verse: "Romans 8:1", body: "The church's history of treating divorced people as uniquely marked is not biblical. 'There is now no condemnation for those who are in Christ Jesus' (Romans 8:1). Divorce is not the unforgivable sin. People who have been divorced — whether through their own failure, the other party's, or both — are not permanently disqualified from God's love, from remarriage, from leadership, or from full participation in the body of Christ. Grace is for everyone." },
  { title: "New Beginnings Are Real", verse: "Isaiah 43:18-19", body: "'Forget the former things; do not dwell on the past. See, I am doing a new thing!' (Isaiah 43:18-19). This passage was spoken to exiles — people for whom the past felt permanently defining. God's word to them was: your past is not your prison. The same word applies to those whose marriages have ended. A chapter closing is not a life ending. Redemption, restoration, and new beginnings are real possibilities in the kingdom of God." },
];

const VOICES = [
  { id: "keller", name: "Timothy Keller", era: "1950–2023", context: "Pastor, Redeemer Presbyterian Church, NYC; The Meaning of Marriage", bio: "Keller's The Meaning of Marriage (2011) is one of the most theologically rigorous and pastorally sensitive treatments of Christian marriage and divorce available. He held a high view of marriage covenant while maintaining pastoral sensitivity toward those for whom marriage had failed. His framework for understanding why marriages fail — the tendency to make your spouse your functional savior — gave both married and divorced people a clearer lens.", quote: "Every single marriage, no matter how good, is a marriage between two people who are broken, selfish, and imperfect — who will fail each other. The question is not whether there will be failure but whether there will be grace. Divorce often happens when one or both parties run out of grace.", contribution: "Keller articulated both the high calling of marriage and the reality of its brokenness with equal clarity. His pastoral approach to divorced people — refusing both minimization and condemnation — modeled how the church might hold these tensions with integrity." },
  { id: "instone-brewer", name: "David Instone-Brewer", era: "1957–present", context: "New Testament scholar; Tyndale House, Cambridge; Divorce and Remarriage in the Bible", bio: "Instone-Brewer's Divorce and Remarriage in the Bible (2002) is the most thorough scholarly treatment of the relevant biblical texts. His argument: the biblical grounds for divorce include not only adultery (Matthew 19) but also the Old Testament provisions for failure to provide food, clothing, and conjugal love (Exodus 21:10-11) — which, he argues, Paul's teaching in 1 Corinthians 7 echoes. This expands the biblical grounds for divorce while maintaining a covenantal framework.", quote: "The biblical grounds for divorce are not a loophole or a concession to human weakness. They are a recognition that the marriage covenant is not merely a legal contract but a covenant of mutual obligation — and that when one party repeatedly and willfully fails those obligations, the covenant has already been broken.", contribution: "Instone-Brewer gave biblical scholars and pastors a more nuanced framework for the exegetical questions around divorce and remarriage — one that takes the ancient Near Eastern context seriously and provides more pastoral flexibility than narrower readings allow." },
  { id: "david-gushee", name: "David Gushee", era: "1962–present", context: "Christian ethicist; Mercer University", bio: "Gushee's pastoral and ethical work on divorce takes seriously both the high calling of marriage and the reality of abuse in marriages. His writing on domestic violence and divorce has been influential in helping churches recognize that divorce may sometimes be a moral necessity for survival — and that a church that will not recognize this reality is complicit in harm.", quote: "A church that makes divorce more painful than the circumstances that led to it — through condemnation, exclusion, and stigma — has failed both the gospel and the people it claims to serve. Grace must be larger than our rules about grace.", contribution: "Gushee brought the concerns of abuse survivors into the theological conversation about divorce, arguing that a commitment to the sanctity of marriage must be equally a commitment to the safety and dignity of the people within marriages." },
];

const PRACTICES = [
  { title: "Grieve the Real Losses", icon: "💧", color: PURPLE, desc: "Divorce involves real losses: the relationship, the future you imagined, shared identity, sometimes housing, finances, family structure, and community. These losses deserve genuine grief — not rushing past them in performance of resilience.", steps: ["Name specifically what you have lost — be honest and complete", "Allow yourself to feel it without timeline or performance", "Find a grief group or counselor who understands divorce grief", "Resist the pressure to 'be over it' on anyone else's schedule"] },
  { title: "Separate Your Identity from Your Failure", icon: "🔑", color: GREEN, desc: "Divorce often comes with a devastating experience of failure — even when you are not primarily at fault. The gospel insists that your worth, your identity, and your future are not determined by your marital status or your past failures.", steps: ["Counter shame statements with gospel truth: 'I am not defined by this'", "Distinguish between what you did wrong and who you are", "If you failed: confess, receive forgiveness, make amends where possible", "Your identity in Christ is not contingent on your marital history"] },
  { title: "Protect the Children", icon: "🌱", color: "#F59E0B", desc: "Research consistently shows that the greatest damage to children of divorce comes not from the divorce itself but from ongoing conflict between the parents. Whatever your feelings about your former spouse, the children need to be protected from being used as weapons or spies.", steps: ["Never speak negatively about the other parent to the children", "If the other parent speaks negatively: validate the child's feelings without agreement", "Maintain consistent routines and reassure children of both parents' continued love", "Consider family therapy — especially for younger children"] },
  { title: "Find Your Community", icon: "👥", color: "#EF4444", desc: "Divorce often fractures the social network — friends choose sides, couple-friends drift, church community can become complicated. Rebuilding community is essential but takes deliberate effort.", steps: ["Find a divorce care group at a local church (DivorceCare.org)", "Be honest with two or three trusted friends about what you need", "If your current church community is unkind, you have permission to find another", "Give yourself permission to start over — new community is possible"] },
];

const SCRIPTURE = [
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Isaiah 43:18-19", text: "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it?" },
  { verse: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Lamentations 3:22-23", text: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Joel 2:25", text: "I will repay you for the years the locusts have eaten — the great locust and the young locust, the other locusts and the locust swarm — my great army that I sent among you." },
  { verse: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function DivorcePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_divorce_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_divorce_voice", "keller");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type DivorceJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [divorceJournal, setDivorceJournal] = useState<DivorceJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_divorcej_entries") ?? "[]"); } catch { return []; } });
  const [jdvFeeling, setJdvFeeling] = useState("");
  const [jdvTruth, setJdvTruth] = useState("");
  const [jdvStep, setJdvStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_divorcej_entries", JSON.stringify(divorceJournal)); } catch {} }, [divorceJournal]);
  function saveDivorceEntry() {
    if (!jdvFeeling.trim() && !jdvTruth.trim()) return;
    setDivorceJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jdvFeeling, truth: jdvTruth, step: jdvStep }, ...prev]);
    setJdvFeeling(""); setJdvTruth(""); setJdvStep("");
  }
  function deleteDivorceEntry(id: string) { setDivorceJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.07) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>💔</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Divorce & Recovery</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>
          You are not defined by your divorce. Honest theology, pastoral wisdom, and practical guidance
          for those walking through or recovering from the end of a marriage.
        </p>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0", overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {THEOLOGY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0, flex: 1, paddingRight: 16 }}>{item.title}</h3>
                  <span style={{ fontSize: 12, color: PURPLE, fontWeight: 700, whiteSpace: "nowrap", background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 6, padding: "3px 10px" }}>{item.verse}</span>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${selectedVoice === v.id ? GREEN : BORDER}`, background: selectedVoice === v.id ? `${GREEN}18` : "transparent", color: selectedVoice === v.id ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {v.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ marginBottom: 6 }}><span style={{ fontSize: 22, fontWeight: 900 }}>{voice.name}</span><span style={{ color: MUTED, fontSize: 13, marginLeft: 12 }}>{voice.era}</span></div>
              <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
              <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 18, margin: "0 0 20px", color: "#e0e0f0", fontSize: 15, fontStyle: "italic", lineHeight: 1.75 }}>&ldquo;{voice.quote}&rdquo;</blockquote>
              <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Contribution</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PRACTICES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.steps.map((s, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: p.color, fontWeight: 900, fontSize: 13, minWidth: 20 }}>{j + 1}.</span>
                      <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {SCRIPTURE.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: PURPLE, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Recovery Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write honestly about where you are. Grief, anger, confusion, and hope can all coexist here.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jdvFeeling} onChange={e => setJdvFeeling(e.target.value)}
                  placeholder="What am I feeling or processing right now?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jdvTruth} onChange={e => setJdvTruth(e.target.value)}
                  placeholder="One true thing I'm holding onto about God or my future..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jdvStep} onChange={e => setJdvStep(e.target.value)}
                  placeholder="One step toward healing or rebuilding..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveDivorceEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {divorceJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your story is worth writing.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {divorceJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteDivorceEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.feeling && <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.feeling}</p>}
                    {e.truth && <p style={{ color: GREEN, fontSize: 13, lineHeight: 1.65, marginBottom: 6 }}>✝ {e.truth}</p>}
                    {e.step && <p style={{ color: PURPLE, fontSize: 13, fontStyle: "italic" }}>→ {e.step}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { videoId: "KFdGnqQKeSY", title: "The Meaning of Marriage — Tim Keller", channel: "Desiring God / Tim Keller", description: "Keller on the theology of marriage — what it was designed to be, why it fails, and how grace operates both within struggling marriages and after their end." },
              { videoId: "9lMWCN4WJWY", title: "Surviving Divorce as a Christian", channel: "Focus on the Family", description: "A pastoral conversation about navigating divorce as a believer — dealing with shame, theological questions, children, and the possibility of restoration and new beginnings." },
              { videoId: "MnZBRG9A_eA", title: "DivorceCare: Finding Hope After Divorce", channel: "DivorceCare", description: "An introduction to the DivorceCare ministry — a biblically-based support group program for people navigating the grief, logistics, and spiritual questions of divorce recovery." },
              { videoId: "2VjXXBZA5E0", title: "What the Bible Says About Divorce", channel: "The Gospel Coalition", description: "A careful exegetical treatment of the biblical texts on divorce (Matthew 5, 19; 1 Corinthians 7; Malachi 2) — what they actually say, what contexts they address, and what pastoral implications follow." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
