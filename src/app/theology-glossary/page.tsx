"use client";

import { useState, useEffect } from "react";

interface Term {
  id: string;
  term: string;
  pronunciation?: string;
  category: string;
  level: "Basic" | "Intermediate" | "Advanced";
  definition: string;
  expanded: string;
  keyVerse?: string;
  keyVerseRef?: string;
  relatedTerms: string[];
  commonMisconception?: string;
  whyItMatters: string;
}

const terms: Term[] = [
  { id: "t1", term: "Justification", pronunciation: "jus-tih-fih-KAY-shun", category: "Salvation", level: "Intermediate", definition: "The legal declaration by God that a sinner is righteous, based on the finished work of Christ.", expanded: "Justification is forensic — it is a legal verdict, not a moral transformation. It answers the question: 'How can a holy God declare an unholy person righteous?' The answer is imputation: Christ's perfect righteousness is credited to the believer's account, and the believer's sin is credited to Christ's account at the cross. This is sometimes called the 'great exchange.' Justification happens at the moment of saving faith and is entirely complete — it cannot be added to or taken away.", keyVerse: "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ.", keyVerseRef: "Romans 5:1", relatedTerms: ["Sanctification", "Imputation", "Righteousness", "Faith", "Salvation"], commonMisconception: "Confusing justification (legal standing) with sanctification (moral transformation). Justification is instantaneous and complete; sanctification is ongoing and progressive.", whyItMatters: "Understanding justification means you're not trying to earn God's acceptance — you already have it, fully, in Christ. This changes everything about how you relate to God, yourself, and others." },
  { id: "t2", term: "Sanctification", pronunciation: "sank-tih-fih-KAY-shun", category: "Salvation", level: "Intermediate", definition: "The ongoing process of being made holy — growing more like Christ in character, thought, and action.", expanded: "Unlike justification (which is instant and complete), sanctification is progressive. It involves the Holy Spirit's work in the believer over time, cultivating the fruit of the Spirit (Galatians 5:22-23) and conforming the believer to the image of Christ (Romans 8:29). Sanctification involves both God's action and human cooperation — 'work out your salvation with fear and trembling, for it is God who works in you.' It is complete only at glorification (death or Christ's return).", keyVerse: "And we all, who with unveiled faces contemplate the Lord's glory, are being transformed into his image with ever-increasing glory.", keyVerseRef: "2 Corinthians 3:18", relatedTerms: ["Justification", "Glorification", "Holiness", "Spirit", "Transformation"], whyItMatters: "Sanctification is the explanation for why the Christian life requires ongoing effort, discipline, and dependence on the Spirit — not to earn favor, but because you've been made new and are being made more new." },
  { id: "t3", term: "Atonement", pronunciation: "ah-TONE-ment", category: "Christ", level: "Basic", definition: "The reconciliation between God and humanity achieved through the death of Jesus Christ.", expanded: "Atonement means 'at-one-ment' — the restoration of relationship between estranged parties. Several biblical models illuminate different aspects: Penal Substitution (Christ bore the penalty we deserved), Ransom (Christ's death as a ransom payment), Moral Influence (Christ's death demonstrating God's love), Christus Victor (Christ's death defeating sin and death). Most evangelical theologians hold Penal Substitution as the central model, while recognizing the others as legitimate biblical themes.", keyVerse: "God presented Christ as a sacrifice of atonement, through the shedding of his blood — to be received by faith.", keyVerseRef: "Romans 3:25", relatedTerms: ["Propitiation", "Reconciliation", "Substitution", "Cross", "Redemption"], commonMisconception: "That atonement was God punishing an innocent third party. In orthodox Trinitarian theology, it is the second person of the Trinity voluntarily taking on human nature and offering Himself — God reconciling the world to Himself.", whyItMatters: "The atonement is the heart of the Gospel. Every other Christian doctrine orbits around it. How you understand the atonement shapes your view of God, sin, salvation, and ethics." },
  { id: "t4", term: "Grace", category: "Salvation", level: "Basic", definition: "The unmerited, undeserved favor of God toward sinners — the foundation of salvation.", expanded: "Grace (Hebrew: חֵן, hen; Greek: χάρις, charis) is not simply kindness or leniency. It is the free, sovereign, and unearned bestowal of God's love, forgiveness, and blessing to those who deserve judgment. The Reformation recovered the radical nature of grace: salvation is entirely a gift, not a wage (Romans 4:4-5). Common Grace refers to blessings God extends to all humanity (sunshine, beauty, common moral intuitions). Special Grace or Saving Grace refers to the redemptive work of God that brings a person to saving faith.", keyVerse: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.", keyVerseRef: "Ephesians 2:8", relatedTerms: ["Faith", "Justification", "Mercy", "Election", "Forgiveness"], commonMisconception: "That grace makes God's moral standards irrelevant. Paul addresses this directly: 'Shall we sin more that grace may abound? By no means!' (Romans 6:1-2). Grace transforms behavior; it doesn't excuse it.", whyItMatters: "Grace defines the whole relationship between God and humanity. Misunderstand grace and you'll either become self-righteous (thinking you've earned favor) or licentious (thinking favor removes responsibility)." },
  { id: "t5", term: "Trinity", category: "God", level: "Advanced", definition: "The Christian doctrine that God exists eternally as one Being in three co-equal, co-eternal Persons: Father, Son, and Holy Spirit.", expanded: "The Trinity is simultaneously the most important and most misunderstood doctrine in Christianity. It is not tri-theism (three gods), modalism (one God wearing three masks), or subordinationism (a hierarchy of divine beings). Rather, there is one divine nature (substance/essence) shared fully and equally by three distinct Persons. The economic Trinity refers to how the three Persons act in creation and salvation (the Father sends, the Son is sent, the Spirit applies). The immanent Trinity refers to the eternal relations within the Godhead. This distinction matters: God's inner life reflects His outward works, but is not defined only by them.", keyVerse: "Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.", keyVerseRef: "Matthew 28:19", relatedTerms: ["Incarnation", "Holy Spirit", "Monotheism", "Person", "Nature"], commonMisconception: "The most common heretical analogies: water as ice/liquid/steam (modalism — one thing in three states), a shamrock (three separate things), or the egg (three separate parts). All fail. The Trinity has no perfect analogy because no created thing shares one nature in multiple persons.", whyItMatters: "The Trinity explains why love is not a secondary characteristic of God but His very nature: love requires a lover, a beloved, and the spirit of love — all eternally present within the Godhead before creation existed." },
  { id: "t6", term: "Propitiation", pronunciation: "pro-pish-ee-AY-shun", category: "Christ", level: "Advanced", definition: "The act of satisfying or appeasing God's righteous wrath against sin through Christ's sacrifice.", expanded: "Propitiation (Greek: hilasmos) is closely related to 'mercy seat' — the place on the Ark of the Covenant where the blood was sprinkled. It means turning away deserved wrath through a satisfying sacrifice. This term makes many modern people uncomfortable because it implies that God has wrath that must be satisfied. But Scripture is clear: God's holy nature requires that sin be fully addressed — not simply overlooked. Jesus, as fully God and fully human, is uniquely positioned to make propitiation: He represents both the offended party (God) and the offending party (humanity).", keyVerse: "He is the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world.", keyVerseRef: "1 John 2:2", relatedTerms: ["Atonement", "Wrath", "Justification", "Mercy", "Substitution"], commonMisconception: "Confusing propitiation (turning away wrath) with expiation (removing guilt/sin). Both are involved in Christ's work, but they are distinct concepts.", whyItMatters: "Propitiation ensures that salvation isn't God simply overlooking sin but God fully addressing it at infinite personal cost. This is why the cross cannot be reduced to a moral example — something real and necessary happened there." },
  { id: "t7", term: "Incarnation", pronunciation: "in-kar-NAY-shun", category: "Christ", level: "Intermediate", definition: "The eternal Son of God taking on full human nature while retaining His full divine nature — Jesus Christ, fully God and fully human.", expanded: "The Incarnation (Latin: in + caro, 'in flesh') is the central mystery of Christianity. The Council of Chalcedon (451 AD) formulated the orthodox position: Jesus Christ is one Person in two complete natures — divine and human — 'without confusion, without change, without division, without separation.' This is called the hypostatic union. The Incarnation was not temporary: Jesus rose bodily and ascended bodily. The glorified Christ at the right hand of the Father is still fully human. This has profound implications for the meaning of embodiment, matter, and the coming resurrection.", keyVerse: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.", keyVerseRef: "John 1:14", relatedTerms: ["Trinity", "Atonement", "Hypostatic Union", "Resurrection", "Person"], whyItMatters: "If Jesus is not fully human, He cannot represent humanity. If He is not fully God, His sacrifice cannot have infinite value. The Incarnation is the foundation of the entire redemptive narrative." },
  { id: "t8", term: "Sovereignty", category: "God", level: "Intermediate", definition: "The absolute, uncontested authority and rule of God over all creation, history, and every event that occurs.", expanded: "Divine sovereignty means that nothing happens outside of God's ultimate control and purposes. This includes joy and tragedy, salvation and judgment, the rise and fall of nations. Theologians distinguish between God's directive will (what He actively brings about) and permissive will (what He allows). The relationship between God's sovereignty and human free will is one of the great theological debates: Calvinism leans heavily into meticulous sovereignty; Arminianism emphasizes genuine human freedom; Molinism attempts a middle position via middle knowledge. What all agree on: God is not surprised, defeated, or outmaneuvered by anything in creation.", keyVerse: "The Lord has established his throne in heaven, and his kingdom rules over all.", keyVerseRef: "Psalm 103:19", relatedTerms: ["Providence", "Election", "Free Will", "Omniscience", "Predestination"], commonMisconception: "That sovereignty makes God the author of evil. Orthodox theology maintains the distinction: God permits evil for greater purposes, but He is not its source or author.", whyItMatters: "Understanding sovereignty transforms how you relate to suffering, uncertainty, and outcomes beyond your control. It's the foundation of real peace — not that circumstances will be easy, but that they are never outside God's redemptive reach." },
  { id: "t9", term: "Regeneration", pronunciation: "ree-jen-er-AY-shun", category: "Salvation", level: "Intermediate", definition: "The supernatural work of the Holy Spirit that gives new spiritual life to a person who was spiritually dead — 'being born again.'", expanded: "Regeneration (Greek: palingenesia) is the divine act that precedes and enables saving faith. Jesus used the metaphor of 'being born again' (John 3) — a person cannot birth themselves. This is entirely a work of God, not human effort. Different theological traditions disagree on the ordering: does regeneration precede faith (Reformed/Calvinist view) or does faith precede regeneration (Arminian view)? What all agree on: regeneration is supernatural, non-repeatable, and results in a fundamentally new nature — new desires, new capacities, new direction.", keyVerse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", keyVerseRef: "2 Corinthians 5:17", relatedTerms: ["Justification", "Conversion", "Holy Spirit", "Faith", "New Birth"], whyItMatters: "Regeneration means Christian transformation is not self-improvement — it is new creation. This prevents both spiritual pride (I changed myself) and despair (I can't change)." },
  { id: "t10", term: "Eschatology", pronunciation: "es-kah-TOL-oh-jee", category: "End Times", level: "Advanced", definition: "The study of 'last things' — including death, resurrection, the second coming of Christ, judgment, and the new creation.", expanded: "Eschatology covers both personal eschatology (what happens at individual death and resurrection) and cosmic eschatology (the consummation of all things). Major views on the millennium (Revelation 20) include: Premillennialism (Christ returns before a literal 1,000-year reign), Amillennialism (the millennium is symbolic of the current church age), and Postmillennialism (the church Christianizes the world before Christ returns). Regarding the timing of the rapture: Pretribulational, Midtribulational, and Posttribulational views all have significant evangelical defenders. The points of near-universal agreement: Christ will return bodily, the dead will be raised, there will be final judgment, and God will make all things new.", keyVerse: "He who testifies to these things says, 'Yes, I am coming soon.' Amen. Come, Lord Jesus.", keyVerseRef: "Revelation 22:20", relatedTerms: ["Millennium", "Rapture", "Resurrection", "New Creation", "Judgment"], commonMisconception: "That eschatology is just about end-times speculation. Properly understood, it shapes present-day ethics: how you live now is shaped by what you believe about where everything is heading.", whyItMatters: "Eschatology answers the deepest human questions: Does history have a direction? Will justice be done? Will death have the last word? Is there hope beyond what we can see? Christian answers to all of these are a resounding yes." },
  { id: "t11", term: "Covenant", category: "Scripture", level: "Intermediate", definition: "A formal, binding agreement between God and His people, defining their relationship, obligations, and promises.", expanded: "The biblical narrative is structured around covenants. Major covenants include: Noahic (with all creation; sign: rainbow), Abrahamic (with Abraham and his descendants; sign: circumcision), Mosaic (with Israel at Sinai; sign: Sabbath), Davidic (with David's house; sign: temple), and the New Covenant (inaugurated by Christ's blood; sign: baptism and the Lord's Supper). The New Covenant fulfills and surpasses all previous covenants. Covenant theology sees the whole Bible through this lens. Dispensationalism offers a different framework. Both recognize the covenant concept as central to understanding Scripture.", keyVerse: "This is my blood of the covenant, which is poured out for many for the forgiveness of sins.", keyVerseRef: "Matthew 26:28", relatedTerms: ["Promise", "Law", "Grace", "Old Testament", "New Testament"], whyItMatters: "Understanding covenants unlocks the unity of the Bible — why the Old Testament matters for Christians, how Jesus fulfills rather than abolishes the law, and what our relationship with God is actually founded on." },
  { id: "t12", term: "Imputation", pronunciation: "im-pyoo-TAY-shun", category: "Salvation", level: "Advanced", definition: "The crediting or reckoning of one party's moral status to another — the mechanism by which Christ's righteousness is credited to believers and their sin was credited to Christ.", expanded: "Imputation is the legal/accounting concept at the heart of justification. Three imputations are central to Reformed theology: (1) Adam's sin imputed to all humanity (Romans 5:12-21); (2) The believer's sin imputed to Christ at the cross; (3) Christ's perfect active obedience (righteousness) imputed to the believer at faith. The New Perspective on Paul (N.T. Wright et al.) challenges the traditional understanding of imputation, arguing that 'righteousness of God' in Paul is primarily about God's covenant faithfulness rather than a righteousness transferred to humans. This is one of the most significant current debates in evangelical theology.", keyVerse: "Abraham believed God, and it was credited to him as righteousness.", keyVerseRef: "Romans 4:3", relatedTerms: ["Justification", "Righteousness", "Atonement", "Federal Headship", "Substitution"], whyItMatters: "Imputation means the ground of our acceptance before God is not our own moral performance — even our best efforts — but the perfect righteousness of Christ credited to us. This is the most secure possible foundation." },
];

const categories = ["All", "Salvation", "God", "Christ", "Scripture", "End Times"];
const levels = ["All", "Basic", "Intermediate", "Advanced"];
const levelColors = { Basic: "#00FF88", Intermediate: "#F59E0B", Advanced: "#EF4444" };

export default function TheologyGlossaryPage() {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [learnedIds, setLearnedIds] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<Term | null>(null);
  const [filterCat, setFilterCat] = useState("All");
  const [filterLevel, setFilterLevel] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const s = localStorage.getItem("vine_theology_saved");
      if (s) setSavedIds(new Set(JSON.parse(s)));
      const l = localStorage.getItem("vine_theology_learned");
      if (l) setLearnedIds(new Set(JSON.parse(l)));
    } catch {}
  }, []);

  const handleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_theology_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleLearn = (id: string) => {
    setLearnedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_theology_learned", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filtered = terms.filter((t) => {
    if (filterCat !== "All" && t.category !== filterCat) return false;
    if (filterLevel !== "All" && t.level !== filterLevel) return false;
    if (search && !t.term.toLowerCase().includes(search.toLowerCase()) && !t.definition.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ background: "linear-gradient(135deg, #070714 0%, #07070F 100%)", padding: "52px 24px 36px", textAlign: "center", borderBottom: "1px solid #1E1E32" }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>🎓</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Theology Glossary</h1>
        <p style={{ fontSize: 16, color: "#9898B3", maxWidth: 520, margin: "0 auto 24px" }}>
          Clear, honest definitions of key Christian theological terms — from the basics to the advanced — with real explanations of why they matter.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { value: terms.length.toString(), label: "Terms" },
            { value: learnedIds.size.toString(), label: "Learned" },
            { value: savedIds.size.toString(), label: "Saved" },
            { value: "3", label: "Difficulty Levels" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#00FF88" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#9898B3" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px" }}>
        {/* Filters */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24, alignItems: "center" }}>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search terms or definitions..."
            style={{ flex: 1, minWidth: 200, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "9px 14px", color: "#F2F2F8", fontSize: 13, outline: "none" }} />
          <div style={{ display: "flex", gap: 6 }}>
            {categories.map((c) => (
              <button key={c} onClick={() => setFilterCat(c)}
                style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                  border: `1px solid ${filterCat === c ? "#6B4FBB" : "#1E1E32"}`,
                  background: filterCat === c ? "#6B4FBB20" : "transparent",
                  color: filterCat === c ? "#6B4FBB" : "#9898B3" }}>
                {c}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {levels.map((l) => (
              <button key={l} onClick={() => setFilterLevel(l)}
                style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                  border: `1px solid ${filterLevel === l ? (l === "All" ? "#9898B3" : levelColors[l as keyof typeof levelColors]) : "#1E1E32"}`,
                  background: filterLevel === l ? `${l === "All" ? "#9898B3" : levelColors[l as keyof typeof levelColors]}20` : "transparent",
                  color: filterLevel === l ? (l === "All" ? "#9898B3" : levelColors[l as keyof typeof levelColors]) : "#9898B3" }}>
                {l}
              </button>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 16 }}>{filtered.length} terms</div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {filtered.map((term) => {
            const saved = savedIds.has(term.id);
            const learned = learnedIds.has(term.id);
            return (
              <div key={term.id}
                style={{ background: "#12121F", border: `1px solid ${learned ? "#00FF8830" : "#1E1E32"}`, borderRadius: 14, padding: 20, cursor: "pointer" }}
                onClick={() => setSelected(term)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                      <span style={{ padding: "1px 8px", borderRadius: 20, fontSize: 10, fontWeight: 600,
                        background: `${levelColors[term.level]}20`, color: levelColors[term.level] }}>{term.level}</span>
                      <span style={{ padding: "1px 8px", borderRadius: 20, fontSize: 10, background: "#6B4FBB20", color: "#6B4FBB" }}>{term.category}</span>
                      {learned && <span style={{ fontSize: 13, color: "#00FF88" }}>✓</span>}
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#F2F2F8", margin: 0 }}>{term.term}</h3>
                    {term.pronunciation && <div style={{ fontSize: 11, color: "#9898B3", fontStyle: "italic" }}>/{term.pronunciation}/</div>}
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); handleSave(term.id); }}
                    style={{ padding: "4px 8px", borderRadius: 6, border: "none", background: saved ? "#6B4FBB20" : "#1E1E32", color: saved ? "#6B4FBB" : "#9898B3", cursor: "pointer", fontSize: 14 }}>
                    {saved ? "★" : "☆"}
                  </button>
                </div>
                <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: "0 0 10px" }}>{term.definition}</p>
                {term.keyVerse && (
                  <div style={{ fontSize: 11, color: "#6B4FBB", fontStyle: "italic" }}>
                    {term.keyVerseRef}
                  </div>
                )}
                <div style={{ fontSize: 11, color: "#9898B3", marginTop: 6 }}>
                  Related: {term.relatedTerms.slice(0, 3).join(", ")}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Term Detail Modal */}
      {selected && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSelected(null)}>
          <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 28, maxWidth: 620, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                <span style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                  background: `${levelColors[selected.level]}20`, color: levelColors[selected.level] }}>{selected.level}</span>
                <span style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, background: "#6B4FBB20", color: "#6B4FBB" }}>{selected.category}</span>
              </div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: "#F2F2F8", marginBottom: 2 }}>{selected.term}</h2>
              {selected.pronunciation && <div style={{ fontSize: 13, color: "#9898B3", fontStyle: "italic", marginBottom: 8 }}>/{selected.pronunciation}/</div>}
              <p style={{ fontSize: 15, color: "#D0D0E8", fontWeight: 500, lineHeight: 1.6 }}>{selected.definition}</p>
            </div>

            {selected.keyVerse && (
              <div style={{ background: "#07070F", borderRadius: 10, padding: 14, marginBottom: 16, borderLeft: "3px solid #6B4FBB" }}>
                <div style={{ fontSize: 13, color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.6, marginBottom: 4 }}>"{selected.keyVerse}"</div>
                <div style={{ fontSize: 12, color: "#6B4FBB", fontWeight: 600 }}>{selected.keyVerseRef}</div>
              </div>
            )}

            <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.8, marginBottom: 16 }}>{selected.expanded}</p>

            {selected.commonMisconception && (
              <div style={{ background: "#EF444410", border: "1px solid #EF444420", borderRadius: 10, padding: 14, marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: "#EF4444", fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>⚠️ Common Misconception</div>
                <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{selected.commonMisconception}</p>
              </div>
            )}

            <div style={{ background: "#00FF8810", border: "1px solid #00FF8820", borderRadius: 10, padding: 14, marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: "#00FF88", fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>Why It Matters</div>
              <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{selected.whyItMatters}</p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 6 }}>Related terms:</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {selected.relatedTerms.map((r) => (
                  <span key={r} style={{ padding: "3px 10px", borderRadius: 20, background: "#1E1E32", color: "#9898B3", fontSize: 11,
                    cursor: terms.find((t) => t.term === r) ? "pointer" : "default" }}
                    onClick={() => { const t = terms.find((x) => x.term === r); if (t) setSelected(t); }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => handleLearn(selected.id)}
                style={{ flex: 1, padding: "11px 16px", borderRadius: 10, border: "none",
                  background: learnedIds.has(selected.id) ? "#00FF8820" : "#6B4FBB",
                  color: learnedIds.has(selected.id) ? "#00FF88" : "#fff",
                  cursor: "pointer", fontWeight: 700, fontSize: 15 }}>
                {learnedIds.has(selected.id) ? "✓ Learned" : "Mark as Learned"}
              </button>
              <button onClick={() => handleSave(selected.id)}
                style={{ padding: "11px 16px", borderRadius: 10, border: "none",
                  background: savedIds.has(selected.id) ? "#6B4FBB20" : "#1E1E32",
                  color: savedIds.has(selected.id) ? "#6B4FBB" : "#9898B3",
                  cursor: "pointer", fontWeight: 600, fontSize: 15 }}>
                {savedIds.has(selected.id) ? "★" : "☆"}
              </button>
              <button onClick={() => setSelected(null)}
                style={{ padding: "11px 16px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
