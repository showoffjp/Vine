"use client";
import { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "definition", label: "Definition" },
  { id: "imputation", label: "Imputation" },
  { id: "faith", label: "Faith & Works" },
  { id: "views", label: "Views" },
  { id: "reformation", label: "Reformation" },
  { id: "new-perspective", label: "New Perspective" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const KEY_TEXTS = [
  {
    ref: "Romans 3:21-22",
    text: "But now the righteousness of God has been manifested apart from the law... the righteousness of God through faith in Jesus Christ for all who believe.",
    note: "The heart of Paul's argument: God's righteousness is received through faith, not law-keeping.",
  },
  {
    ref: "Romans 4:5",
    text: "And to the one who does not work but believes in him who justifies the ungodly, his faith is counted as righteousness.",
    note: "Justification is for the ungodly — not for those who have earned it, but for those who believe.",
  },
  {
    ref: "Galatians 2:16",
    text: "A person is not justified by works of the law but through faith in Jesus Christ... because by works of the law no one will be justified.",
    note: "The Magna Carta of Protestant soteriology — justification is not by law-keeping.",
  },
  {
    ref: "Romans 5:1",
    text: "Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.",
    note: "Justification brings a new relational status — peace with God, not merely forgiveness.",
  },
  {
    ref: "Philippians 3:9",
    text: "And be found in him, not having a righteousness of my own that comes from the law, but that which comes through faith in Christ, the righteousness from God that depends on faith.",
    note: "Paul's personal testimony: the alien righteousness of Christ received through faith.",
  },
];

const DEFINITION_POINTS = [
  {
    term: "Forensic Declaration",
    def: "Justification is a legal verdict, not a moral process. It is God the Judge declaring the sinner righteous — not making them righteous. It changes legal status, not moral character (that is sanctification).",
    color: GREEN,
  },
  {
    term: "Present and Permanent",
    def: "The verdict is given now (Romans 5:1 — 'have been justified') and is not reversed. It does not await the final judgment. The believer stands before God already acquitted.",
    color: TEAL,
  },
  {
    term: "By Grace Alone",
    def: "Justification is a gift — it is not earned, merited, or deserved. God justifies the ungodly (Romans 4:5). Any contribution of human merit would make it a wage, not a gift.",
    color: PURPLE,
  },
  {
    term: "Through Faith Alone",
    def: "The instrument by which justification is received is faith. Faith is not itself the basis (Christ's righteousness is the basis), but it is the hand that receives the gift.",
    color: BLUE,
  },
  {
    term: "On Account of Christ Alone",
    def: "The ground of justification is the atoning work and perfect obedience of Jesus Christ — his active obedience (living righteously) and passive obedience (dying in our place).",
    color: GOLD,
  },
];

const IMPUTATION_EXPLANATION = [
  {
    direction: "Our Sin → Christ",
    title: "Sin Imputed to Christ",
    desc: "Our sin was charged to Christ's account at the cross. He died not merely as a martyr but as our substitute — bearing the penalty our sin deserved. This is passive imputation.",
    verse: "2 Corinthians 5:21 — 'For our sake he made him to be sin who knew no sin'",
    color: RED,
  },
  {
    direction: "Christ's Righteousness → Us",
    title: "Righteousness Imputed to Us",
    desc: "Christ's perfect obedience — his entire life of law-keeping — is credited to our account. We are treated as if we had lived his life. This is the Great Exchange: our sin for his righteousness.",
    verse: "Romans 4:24 — 'It will be counted to us who believe in him who raised from the dead Jesus our Lord'",
    color: GREEN,
  },
];

const FAITH_WORKS = [
  {
    q: "Does James 2 contradict Paul on faith and works?",
    a: "No — they address different questions. Paul answers: how is a person declared righteous before God? (By faith alone.) James answers: how is living faith distinguished from dead, nominal faith? (By works.) Paul's opponent says works justify before God; James's opponent says faith without works saves. Both are right: saving faith always produces works, but works are not the basis of justification.",
  },
  {
    q: "What about Ephesians 2:10 — 'created in Christ Jesus for good works'?",
    a: "Verse 8-9 declares salvation by grace through faith, not works. Verse 10 shows the purpose of the saved: to do good works. Works are the fruit of justification, never its root. They follow from it; they don't contribute to it.",
  },
  {
    q: "Is lordship salvation required?",
    a: "The Reformed/Calvinist tradition insists that saving faith always involves submission to Jesus as Lord — not as a second step, but as part of what genuine repentance and faith mean. This doesn't make works meritorious; it simply recognizes that faith that never transforms is not biblical saving faith.",
  },
  {
    q: "Can someone lose their justification?",
    a: "The Protestant tradition (Reformed especially) holds that those who are genuinely justified are preserved by God — they cannot ultimately fall away. Justification is permanent because it rests on Christ's merits, not ours. Those who 'fall away' give evidence they were never genuinely justified (1 John 2:19).",
  },
];

const VIEWS = [
  {
    tradition: "Reformed / Lutheran",
    label: "Forensic Justification",
    core: "Justification is a legal declaration — an imputation of Christ's righteousness to the believer's account by faith alone. It is distinct from sanctification (the transformation of character).",
    distinctive: "Luther: the article on which the church stands or falls. Calvin: the main hinge of all religion.",
    color: GREEN,
  },
  {
    tradition: "Roman Catholic",
    label: "Infused Righteousness",
    core: "Justification involves the infusion of God's grace, making the believer actually righteous (not merely declared righteous). It is cooperated with, can be lost through mortal sin, and involves faith, hope, and charity.",
    distinctive: "Trent (1547): condemned the Protestant view as 'empty confidence.' Justification is not by faith alone.",
    color: BLUE,
  },
  {
    tradition: "New Perspective on Paul",
    label: "Covenant Membership",
    core: "N.T. Wright and others argue 'justification' is primarily about covenant membership (Gentiles included), not about how individuals are saved. The 'works of the law' opposed are boundary markers (circumcision, food laws), not meritorious deeds.",
    distinctive: "Wright: the Reformers read Paul through a medieval (Pelagian) lens, not a first-century Jewish one. Critics: the New Perspective minimizes the individual's need for righteousness before a holy God.",
    color: PURPLE,
  },
  {
    tradition: "Federal Vision",
    label: "Covenantal Justification",
    core: "A minority Reformed view emphasizing that justification is through baptismal incorporation into the covenant, which can be 'lost' by apostasy. Critics accuse it of conflating justification and sanctification.",
    distinctive: "Condemned by most Reformed denominations. Defenders (Peter Leithart, Norman Shepherd) say it better accounts for James 2 and the warnings of Hebrews.",
    color: GOLD,
  },
  {
    tradition: "Eastern Orthodoxy",
    label: "Theosis / Deification",
    core: "Orthodoxy prefers the framework of theosis (union with God) over legal/forensic categories. Salvation is participation in the divine nature, not acquittal from guilt.",
    distinctive: "Not incompatible with forgiveness, but the dominant metaphor is healing and deification rather than courtroom acquittal.",
    color: TEAL,
  },
];

const REFORMATION_TIMELINE = [
  { year: "1505–17", event: "Luther's Monastery Years", desc: "Luther tormented by inability to achieve righteousness before God. Confessed for hours, scrupulous observance — yet no peace." },
  { year: "1515–17", event: "The Tower Experience", desc: "Luther discovers Romans 1:17 — 'the righteousness of God' is not what God demands but what he gives. Gospel breaks through: 'I felt myself to be born again.'" },
  { year: "1517", event: "95 Theses", desc: "Luther attacks indulgences — the cash-for-grace system — as a corruption of the gospel. Justification cannot be purchased." },
  { year: "1520", event: "On the Freedom of a Christian", desc: "Luther articulates the Great Exchange: Christ takes our sin, gives us his righteousness. Faith alone unites us to Christ." },
  { year: "1521", event: "Diet of Worms", desc: "Luther refuses to recant: 'Unless I am convinced by Scripture and plain reason... Here I stand, I can do no other.'" },
  { year: "1547", event: "Council of Trent", desc: "Catholic Church formally condemns Protestant justification: 'If anyone says that the sinner is justified by faith alone, let him be anathema.'" },
  { year: "1999", event: "Joint Declaration", desc: "Lutheran World Federation and Catholic Church sign Joint Declaration on the Doctrine of Justification — significant ecumenical convergence, though differences remain." },
];

const VIDEOS = [
  { videoId: "2XsqZ3eFtIU", title: "Justification by Faith Alone — R.C. Sproul" },
  { videoId: "vnjlRE0h1BQ", title: "What is Justification? — Tim Keller" },
  { videoId: "hC_KE6IDxLk", title: "Luther's Reformation — The Heart of the Gospel" },
  { videoId: "a6K_gKllkpQ", title: "Faith and Works: James and Paul Explained" },
];

export default function JustificationPage() {
  const [tab, setTab] = useLocalStorage("vine_justif_tab", "overview");
  const [openFW, setOpenFW] = useLocalStorage("vine_justif_fw", "");
  const [openView, setOpenView] = useLocalStorage("vine_justif_view", "");
  const [journal, setJournal] = useLocalStorage("vine_justif_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>⚖️</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Justification by Faith</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            The doctrine Luther called the article on which the church stands or falls. How does an ungodly person stand righteous before a holy God? The answer is the gospel.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>The Central Question</h2>
              <p style={{ color: TEXT, lineHeight: 1.8, fontSize: "1.1rem", fontStyle: "italic" }}>&ldquo;How can a person be right with God?&rdquo;</p>
              <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.5rem" }}>This is the question the Reformation was fought over, the question Paul spends most of Romans and Galatians answering, and the question every human being must ultimately face. The answer of the gospel is: God declares sinners righteous as a free gift, received through faith, on the basis of Christ&apos;s atoning work alone.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                { label: "The Ground", text: "Christ's righteousness — his perfect obedience and atoning death", color: GREEN },
                { label: "The Instrument", text: "Faith alone — not works, merit, or moral achievement", color: TEAL },
                { label: "The Source", text: "Grace alone — God's undeserved gift, not earned favor", color: PURPLE },
              ].map(c => (
                <div key={c.label} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 10, padding: "1rem", borderTop: `3px solid ${c.color}`, textAlign: "center" }}>
                  <div style={{ fontWeight: 700, color: c.color, marginBottom: "0.5rem" }}>{c.label}</div>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>{c.text}</p>
                </div>
              ))}
            </div>

            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Scriptures</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {KEY_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DEFINITION */}
        {tab === "definition" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>What Justification Is</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The Protestant tradition defines justification as a forensic (legal) act of God by which he declares the ungodly sinner righteous on account of Christ&apos;s righteousness imputed and received through faith. It is not a process (that is sanctification) but a verdict — given once, permanently.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {DEFINITION_POINTS.map(p => (
                <div key={p.term} style={{ background: CARD, border: `1px solid ${p.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <div style={{ fontWeight: 700, color: p.color, marginBottom: "0.4rem" }}>{p.term}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.def}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.75rem" }}>Justification vs. Sanctification</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ background: BG, borderRadius: 8, padding: "1rem", border: `1px solid ${BORDER}` }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>Justification</div>
                  <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                    <li>Legal declaration</li>
                    <li>External status</li>
                    <li>Once and for all</li>
                    <li>Complete and perfect</li>
                    <li>Not gradual</li>
                  </ul>
                </div>
                <div style={{ background: BG, borderRadius: 8, padding: "1rem", border: `1px solid ${BORDER}` }}>
                  <div style={{ fontWeight: 700, color: PURPLE, marginBottom: "0.5rem" }}>Sanctification</div>
                  <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                    <li>Moral transformation</li>
                    <li>Internal character</li>
                    <li>Ongoing process</li>
                    <li>Progressive (not complete)</li>
                    <li>Cooperative with Spirit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* IMPUTATION */}
        {tab === "imputation" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: PURPLE }}>The Great Exchange</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The mechanism of justification is double imputation — a two-directional crediting. Our sin is charged to Christ; Christ&apos;s righteousness is credited to us. This is the Great Exchange at the heart of the gospel. Luther called it the &ldquo;wonderful exchange&rdquo; (fröhlicher Wechsel).</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.5rem" }}>
              {IMPUTATION_EXPLANATION.map(i => (
                <div key={i.direction} style={{ background: CARD, border: `1px solid ${i.color}40`, borderRadius: 12, padding: "1.5rem", borderLeft: `4px solid ${i.color}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <div style={{ background: i.color, color: "#fff", borderRadius: 20, padding: "0.2rem 0.75rem", fontSize: "0.8rem", fontWeight: 700 }}>{i.direction}</div>
                    <div style={{ fontWeight: 700, color: i.color }}>{i.title}</div>
                  </div>
                  <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: "0.75rem" }}>{i.desc}</p>
                  <p style={{ color: MUTED, fontStyle: "italic", fontSize: "0.9rem", margin: 0 }}>{i.verse}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>Active and Passive Obedience</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ background: BG, borderRadius: 8, padding: "1rem", border: `1px solid ${BORDER}` }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>Active Obedience</div>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.7 }}>Christ&apos;s entire life of perfect law-keeping, which earns the positive righteousness credited to us. He lived the life we should have lived.</p>
                </div>
                <div style={{ background: BG, borderRadius: 8, padding: "1rem", border: `1px solid ${BORDER}` }}>
                  <div style={{ fontWeight: 700, color: RED, marginBottom: "0.5rem" }}>Passive Obedience</div>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.7 }}>Christ&apos;s substitutionary death, bearing the penalty our sin deserves. He died the death we should have died.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAITH & WORKS */}
        {tab === "faith" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>Faith, Works, and the Gospel</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>One of the most misunderstood dimensions of justification is its relationship to works. Many assume Protestants say works don&apos;t matter — but the Reformation distinction is more precise: works are not the basis of justification (that is Christ alone), but genuine saving faith inevitably produces works. The slogan is: faith alone justifies, but the faith that justifies is never alone.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {FAITH_WORKS.map((fw, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenFW(openFW === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: TEAL, textAlign: "left" }}>{fw.q}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openFW === String(i) ? "−" : "+"}</span>
                  </button>
                  {openFW === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{fw.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEWS */}
        {tab === "views" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Major Views on Justification</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {VIEWS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenView(openView === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: 700, color: v.color }}>{v.label}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.tradition}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openView === String(i) ? "−" : "+"}</span>
                  </button>
                  {openView === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem" }}>
                      <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: "0.75rem" }}>{v.core}</p>
                      <p style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.9rem", fontStyle: "italic", margin: 0 }}>{v.distinctive}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REFORMATION */}
        {tab === "reformation" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>Luther&apos;s Breakthrough</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The Reformation was not primarily an institutional controversy about papal authority — it was a theological controversy about how sinners stand before God. Luther&apos;s rediscovery of justification by faith alone was the theological bomb that split Western Christianity.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {REFORMATION_TIMELINE.map(e => (
                <div key={e.year} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: PURPLE, color: "#fff", borderRadius: 8, padding: "0.25rem 0.75rem", fontWeight: 700, fontSize: "0.8rem", whiteSpace: "nowrap", flexShrink: 0 }}>{e.year}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.25rem" }}>{e.event}</div>
                    <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NEW PERSPECTIVE */}
        {tab === "new-perspective" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: PURPLE }}>The New Perspective on Paul</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Beginning in the 1970s–80s, scholars like E.P. Sanders, James Dunn, and N.T. Wright challenged the Reformation reading of Paul. They argued that Second Temple Judaism was not a works-righteousness religion (so Luther was fighting the wrong battle), and that &ldquo;works of the law&rdquo; primarily referred to Jewish boundary markers (circumcision, food laws), not moral achievement.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  position: "New Perspective Claim",
                  text: "Paul&apos;s primary concern was not individual salvation from guilt but the inclusion of Gentiles in the covenant people. Justification is about who belongs to God&apos;s community, not a courtroom acquittal.",
                  color: PURPLE,
                },
                {
                  position: "Reformed Response",
                  text: "The NPP correctly recovers Jewish background but overcorrects. Romans 4:5 (&ldquo;justifies the ungodly&rdquo;) and Philippians 3:9 (&ldquo;not having a righteousness of my own&rdquo;) clearly address the individual&apos;s standing before God, not just ethnic membership.",
                  color: GREEN,
                },
                {
                  position: "N.T. Wright&apos;s Position",
                  text: "Wright argues both readings are compatible. Justification is about covenant membership (NPP), but since the covenant is the story of sin&apos;s remedy (through Abraham and ultimately Christ), it necessarily involves personal righteousness before God.",
                  color: BLUE,
                },
                {
                  position: "What It Gets Right",
                  text: "The NPP helpfully corrects caricatures of first-century Judaism as crude legalism and recovers the corporate/covenantal dimensions of justification. Galatians must be read in light of the Jew/Gentile controversy.",
                  color: GOLD,
                },
                {
                  position: "Ongoing Debate",
                  text: "The NPP has generated some of the most important NT scholarship of the past 50 years. Understanding it deepens Pauline theology even if one ultimately sides with the Reformation consensus on the central question.",
                  color: TEAL,
                },
              ].map(item => (
                <div key={item.position} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${item.color}` }}>
                  <div style={{ fontWeight: 700, color: item.color, marginBottom: "0.4rem" }}>{item.position}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>Personal Reflection</h2>
              <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>How does the doctrine of justification change how you relate to God? What does it feel like to know your standing before God rests entirely on Christ?</p>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="Reflect on what it means to be declared righteous — not on the basis of your performance but on the basis of Christ's. How does this truth give you peace? Where do you still struggle to receive it?"
                style={{ width: "100%", minHeight: 220, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
