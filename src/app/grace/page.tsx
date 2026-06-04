"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "kinds" | "debates" | "response" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "charis",
    title: "Charis — The Greek Word for Grace",
    body: `The New Testament word for grace is χάρις (charis) — a gift freely given without obligation or merit. The Latin translators rendered it gratia, giving us the English "grace." At its core, charis is unmerited favor: not simply the withholding of punishment, but the positive bestowal of good upon someone who has no claim on it. Grace is not merely the forgiveness of debts; it is the inheritance of sons and daughters. The recipient contributes nothing to earn it and everything to receive it — namely, open hands and an empty heart.`,
  },
  {
    id: "ot",
    title: "Grace in the Old Testament",
    body: `Grace is not a New Testament invention. The Hebrew Bible uses two key words: chen (חֵן), undeserved favor — "Noah found grace in the eyes of the LORD" (Gen 6:8) — and hesed (חֶסֶד), covenant lovingkindness, the steadfast loyal love that defines God's character. The Exodus itself is an act of grace: God did not deliver Israel because they were righteous (Deut 9:4-6) but because of his covenant promises and sheer mercy. The Psalms are saturated with appeal to hesed. Psalm 103 catalogs God's grace: forgiveness, healing, redemption, satisfaction. The New Testament's doctrine of grace is the fulfillment of what the Old Testament announced.`,
  },
  {
    id: "law",
    title: "Grace and the Law",
    body: `Romans 6:14 declares: "you are not under law but under grace." Galatians 3–4 extends the argument: the Law was a guardian until Christ came; now that faith has come, we are no longer under a guardian. Paul does not mean that righteousness is abolished — he explicitly denies it (Rom 3:31, 6:1-2). He means that the Law as a system of earning standing before God has been superseded. Obedience flows from grace, not toward it. The antinomian error (grace means no moral demands) collapses immediately against Romans 6 and 8: the same Spirit who justifies us also sanctifies us. Grace produces what law demanded but could not produce.`,
  },
  {
    id: "common",
    title: "Common Grace",
    body: `Matthew 5:45 records Jesus: God "causes his sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous." This is common grace — the grace extended to all humanity, not just the elect. It explains the goodness found in non-Christians: moral sensitivity, artistic beauty, scientific discovery, civic order. Common grace restrains sin from being as destructive as it could be; it preserves the fabric of society. Abraham Kuyper built an entire theology of cultural engagement on this: because God's grace pervades creation, Christians have reasons to engage art, science, politics, and commerce — these are not godless zones but arenas where common grace operates. Common grace is why the world is not as bad as it could be.`,
  },
  {
    id: "saving",
    title: "Saving Grace",
    body: `The central debate in Protestant theology: is saving grace irresistible or can it be resisted? Calvinism (the "I" in TULIP — Irresistible Grace) holds that when God efficaciously calls the elect, the Holy Spirit works regeneration that certainly produces faith. John 6:37-44 grounds this: "All that the Father gives me will come to me." Eph 2:8-9 establishes that faith itself is a gift. Arminianism, following Jacob Arminius and John Wesley, holds that God's prevenient grace enables a genuine free response — grace can be resisted (Acts 7:51). Both traditions agree: no one comes to Christ without grace. The debate is whether God's saving grace is always effective for those it is given to, or whether it creates a genuine possibility that can be refused.`,
  },
  {
    id: "power",
    title: "Grace as Power, Not Just Pardon",
    body: `A reductive understanding of grace makes it merely forensic — a divine declaration of not-guilty. But Scripture goes further. When Paul pleads for the removal of his "thorn in the flesh," God answers: "My grace is sufficient for you, for my power is made perfect in weakness" (2 Cor 12:9). Grace here is not pardon but power — sustaining, enabling, upholding power in the midst of suffering. Paul says he worked harder than all the apostles, "yet not I, but the grace of God that was with me" (1 Cor 15:10). Grace is the power behind sanctified effort. It is not merely the ticket to heaven; it is the fuel for the Christian life. Those who treat grace only as a legal status miss its transformative, energizing dimension.`,
  },
];

const KINDS_ITEMS = [
  {
    id: "prevenient",
    title: "Prevenient Grace",
    scripture: ["1 Timothy 2:4", "John 12:32", "Romans 2:4", "Titus 2:11"],
    definition: "In Arminian and Wesleyan theology, prevenient grace is the grace that goes before conversion. It precedes and enables the human response to the gospel by partially restoring the freedom of the will damaged by the Fall, making genuine response possible without making it inevitable.",
    implications: [
      "Every person has sufficient grace to respond to God — no one is without opportunity.",
      "Human freedom is real but grace-enabled, not autonomous.",
      "Evangelism makes sense: the Spirit is already working before the preacher arrives.",
      "God's desire that all be saved (1 Tim 2:4) is not frustrated by human depravity.",
    ],
    thinker: "John Wesley developed prevenient grace as the centerpiece of Methodist soteriology — it allowed him to affirm both total depravity and genuine human responsibility without Calvinist determinism.",
  },
  {
    id: "irresistible",
    title: "Saving / Irresistible Grace",
    scripture: ["John 6:37-44", "Ephesians 2:8-9", "Romans 8:30", "Acts 13:48"],
    definition: "In Calvinist theology, efficacious (irresistible) grace is the inward call of the Holy Spirit that unfailingly produces faith and repentance in the elect. It is not coercive but transformative — the Spirit changes the heart so that the person willingly comes to Christ.",
    implications: [
      "Salvation is entirely God's work — even faith is a gift, not a contribution.",
      "The elect cannot ultimately resist or lose their salvation (perseverance).",
      "Assurance is grounded in God's purpose, not human faithfulness.",
      "Prayer for the lost makes sense: God can change any heart.",
    ],
    thinker: "R.C. Sproul and John Piper represent modern Calvinist articulations — Sproul in Chosen by God, Piper in Finally Alive emphasize that regeneration precedes and produces faith.",
  },
  {
    id: "common",
    title: "Common Grace",
    scripture: ["Matthew 5:45", "Acts 14:17", "Romans 2:14-15", "Psalm 145:9"],
    definition: "Common grace is the grace God extends to all humanity — believer and unbeliever alike — through the preservation of the created order, the restraint of evil, the endowment of reason and conscience, and the bestowal of natural blessings on all people regardless of their standing before God.",
    implications: [
      "Christians can learn from, appreciate, and collaborate with non-Christians.",
      "Pagan art, music, philosophy, and science can contain genuine truth and beauty.",
      "Social institutions (government, family, markets) reflect God's grace to all.",
      "The world is not as evil as it could be — common grace restrains sin.",
    ],
    thinker: "Abraham Kuyper, Dutch Reformed theologian and Prime Minister, made common grace the theological foundation for Christian engagement with every sphere of culture — politics, art, science, commerce.",
  },
  {
    id: "sanctifying",
    title: "Sanctifying Grace",
    scripture: ["Philippians 2:12-13", "2 Peter 3:18", "1 Thessalonians 5:23-24", "2 Corinthians 3:18"],
    definition: "Sanctifying grace is the ongoing divine work by which God conforms believers to the image of Christ. It is distinct from justifying grace (the declaration of righteousness) — it is the actual transformation of character, affection, and action over time through the Holy Spirit.",
    implications: [
      "Holiness is God's work in us, not self-improvement by willpower.",
      "Spiritual disciplines are 'means of grace' — positions where God works, not merit systems.",
      "Growth is expected: 'grow in the grace and knowledge of our Lord' (2 Pet 3:18).",
      "Phil 2:12-13 holds both: work out your salvation AND God works in you — not contradiction.",
    ],
    thinker: "John Owen's The Holy Spirit is the classic treatment — Owen shows how the Spirit applies the work of Christ to believers progressively, making sanctification as grace-dependent as justification.",
  },
  {
    id: "sacramental",
    title: "Sacramental Grace",
    scripture: ["Romans 6:3-4", "1 Corinthians 11:26", "John 6:53-56", "Acts 2:38"],
    definition: "In Catholic, Orthodox, and some Lutheran theology, grace is mediated through the sacraments as real channels — not merely symbols of grace but instruments through which grace is genuinely conveyed. Baptism regenerates; the Eucharist nourishes the soul with Christ's body and blood.",
    implications: [
      "The physical and material are not opposed to grace but can carry it.",
      "Corporate worship and sacramental practice are not optional extras but means of salvation.",
      "Protestant critique: grace cannot be mechanically conveyed — it requires faith.",
      "The debate touches ecclesiology: is the church a dispenser of grace or a herald of it?",
    ],
    thinker: "Martin Luther retained a high sacramental theology — baptismal regeneration and real presence in the Eucharist — against both Rome (ex opere operato) and Zwingli (mere memorial). The Lutheran 'sacramental union' remains distinct.",
  },
  {
    id: "sufficient",
    title: "Sufficient Grace",
    scripture: ["2 Corinthians 12:9", "Hebrews 4:16", "James 4:6", "Lamentations 3:22-23"],
    definition: "Sufficient grace is grace that does not remove the difficulty but provides what is needed to endure it faithfully. It is the grace of God experienced not as rescue from suffering but as sustaining power within it — the grace Paul received when his thorn was not removed.",
    implications: [
      "God's 'no' to a request can itself be an act of grace.",
      "The prosperity gospel fails here: it promises removal of suffering, not grace in it.",
      "Christian endurance is not stoic willpower — it is grace-enabled perseverance.",
      "Weakness can be a site of divine power rather than a sign of divine absence.",
    ],
    thinker: "The desert fathers and mothers, particularly John of the Cross (Dark Night of the Soul), explored how sufficient grace operates precisely when consolation is withdrawn — the stripping away of spiritual comfort as a deeper grace.",
  },
];

const DEBATES = [
  {
    id: "cal-arm",
    title: "Calvinism vs. Arminianism",
    color: "#3B82F6",
    body: `The central Protestant debate about grace. Calvinism, systematized in the Synod of Dort (1618-19) as TULIP, holds that salvation is entirely God's sovereign work: Total Depravity means humans cannot respond to God unaided; Unconditional Election means God chose specific individuals before creation regardless of foreseen faith; Limited Atonement means Christ died efficaciously for the elect; Irresistible Grace means the Spirit's inward call cannot ultimately be refused; Perseverance of the Saints means the elect cannot lose their salvation.\n\nArminianism (sometimes formalized as FACTS) counters: Freed Will (prevenient grace restores capacity to respond), Atonement for All (Christ died for everyone), Conditional Election (God elected those he foreknew would believe), Total Depravity (agreed, but addressed by prevenient grace), Security in Christ (conditional on continuing faith).\n\nBoth positions have been held by serious, orthodox Christians. The "cage-stage Calvinist" problem — new Calvinists who treat the doctrines of grace as weapons rather than pastoral gifts — represents a failure to receive grace graciously. The goal is not winning debates but understanding how God saves, which should produce humility in either tradition.`,
  },
  {
    id: "faith-law",
    title: "Grace and Works: Faith vs. Law",
    color: GREEN,
    body: `The Reformation was ignited by this debate: are humans justified before God by faith alone (sola fide) or by faith plus works? Luther and Calvin recovered the Pauline gospel: "by grace you have been saved through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast" (Eph 2:8-9).\n\nThe apparent tension with James — "faith without works is dead" (Jas 2:26) — is not a real contradiction. Paul is addressing those who think religious performance earns justification; James is addressing those who think verbal profession replaces transformed life. Both agree: genuine faith produces works; works do not produce justification.\n\nN.T. Wright's New Perspective on Paul reframes the question: "works of the law" in Paul refers specifically to Jewish boundary markers (circumcision, food laws, Sabbath) that excluded Gentiles, not moral performance generally. This doesn't undermine sola fide but sharpens Paul's concern for the unity of Jew and Gentile in Christ. Whether or not Wright is entirely right, the Reformation's recovery of grace as the sole ground of justification remains non-negotiable.`,
  },
  {
    id: "cheap-costly",
    title: "Cheap Grace vs. Costly Grace",
    color: PURPLE,
    body: `Dietrich Bonhoeffer's The Cost of Discipleship (1937) opens with one of the most penetrating passages in modern theology: "Cheap grace is the deadly enemy of our church... grace without price; grace without cost... the preaching of forgiveness without requiring repentance, baptism without church discipline, Communion without confession... grace without discipleship, grace without the cross, grace without Jesus Christ."\n\nCostly grace, by contrast, is "the treasure hidden in the field; for the sake of it a man will gladly go and sell all that he has. It is the pearl of great price to buy which the merchant will sell all his goods. It is the kingly rule of Christ, for whose sake a man will pluck out the eye which causes him to stumble... Such grace is costly because it calls us to follow, and it is grace because it calls us to follow Jesus Christ. It is costly because it costs a man his life, and it is grace because it gives a man the only true life."\n\nBonhoeffer was writing against a church that had accommodated to Nazism, preaching grace without demanding discipleship. The application is permanent: grace that costs nothing and changes nothing is not the grace of the New Testament. The gospel is free but not cheap. The one who says 'Lord, Lord' and does not do the will of the Father has mistaken cheap grace for the real thing (Matt 7:21-23).`,
  },
  {
    id: "freewill",
    title: "Grace and Free Will",
    color: "#F59E0B",
    body: `The deepest philosophical underpinning of the grace debates: what does human freedom mean, and how does divine sovereignty relate to it?\n\nCompatibilism (held by most Calvinists) argues that freedom and determinism are compatible: a person acts freely when they act according to their desires, even if those desires are determined by prior causes including God's sovereign decree. God determines the will from the inside, through the desires themselves — not external compulsion.\n\nLibertarian free will (held by Arminians and most Catholics) holds that genuine freedom requires the ability to have done otherwise — that at the moment of choice, multiple outcomes were genuinely possible. If God determines the choice, it is not truly free in any meaningful sense.\n\nMolinism (Luis de Molina, 16th century) offers a third way: middle knowledge. God knows counterfactuals — what every free creature would freely choose in every possible circumstance. God actualizes the world in which his purposes are achieved without overriding libertarian freedom. Molinism is popular among contemporary philosophers (Alvin Plantinga, William Lane Craig) but disputed by both strict Calvinists (who reject libertarian freedom) and strict Arminians (who worry it still compromises freedom).\n\nWhat is at stake pastorally: if grace is irresistible, how do we preach evangelistically as if the outcome matters? If grace is resistible, how do we maintain assurance? Both questions have answers, but the pastoral implications are real.`,
  },
];

const RESPONSE_ITEMS = [
  {
    id: "gratitude",
    title: "Gratitude as the Proper Response",
    body: `Grace received produces gratitude — this is not accidental but definitional. The Greek word eucharistia (thanksgiving) is where the Eucharist gets its name: the Lord's Supper is not primarily a somber memorial but a thank-offering. Ephesians 5:20 commands "always giving thanks to God the Father for everything." 1 Thessalonians 5:18 echoes: "give thanks in all circumstances." The proper response to grace is not earning it (which you cannot do), not ignoring it (which is ingratitude), but thanksgiving — the free overflow of a heart that has understood what it has received. Gratitude is not a duty you perform to repay grace; it is the natural fruit of actually experiencing it.`,
  },
  {
    id: "effort",
    title: "Grace and Effort",
    body: `Paul writes one of the most paradoxical sentences in Scripture: "I worked harder than any of them, yet not I, but the grace of God that was with me" (1 Cor 15:10). He claims maximum effort and attributes it entirely to grace — simultaneously. This is not contradiction; it is the mystery of divine-human cooperation that runs throughout the New Testament. Philippians 2:12-13 has the same structure: "work out your salvation with fear and trembling, for it is God who works in you to will and to act." The human effort is real. The divine empowerment is total. The two do not compete; they operate at different levels. Grace does not produce passivity ("God will do it") or self-reliance ("I must do it") but energized dependence: "I can do all things through Christ who strengthens me" (Phil 4:13).`,
  },
  {
    id: "resting",
    title: "Resting in Grace: Justification",
    body: `Romans 5:1 declares: "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ." The justified person has peace — not as an achievement but as a status. The striving that law-based religion produces (Am I good enough? Have I done enough? Will God accept me today?) is silenced by justification. You are not striving for acceptance; you are striving from acceptance. The reformers used the term "alien righteousness" — a righteousness that is not your own but is credited to you. Luther's tower experience was the discovery that "the righteousness of God" in Romans 1:17 is not God's demanding standard but his gift. To truly rest in justification is not laziness; it is freedom from the exhausting performance treadmill, and freedom for genuine, love-motivated obedience.`,
  },
  {
    id: "growing",
    title: "Growing in Grace",
    body: `2 Peter 3:18 closes the letter with an imperative: "grow in the grace and knowledge of our Lord and Savior Jesus Christ." Justification is instantaneous; sanctification is progressive. The grace that saves is the same grace that transforms, and it operates over a lifetime. Grace is both the means of growth (the Holy Spirit works through Word, prayer, community, suffering) and the motive (gratitude for what God has already done energizes obedience). There is a danger of treating justification as the finish line — as if grace got us in and now performance sustains us. Against this, the New Testament insists that the Christian life is as grace-dependent at the end as at the beginning. The imperative to grow does not contradict grace; it assumes it.`,
  },
  {
    id: "extending",
    title: "Extending Grace to Others",
    body: `"Freely you have received; freely give" (Matt 10:8). Grace received creates grace extended — this is not optional but definitional to what grace is. The parable of the unmerciful servant (Matt 18:21-35) is devastating: the man who was forgiven an impossible debt and then choked a fellow servant over a trivial one had not truly understood or received what he was given. Forgiveness extended to others is grace extended. The community of grace is one where failure does not mean exile, where weakness is met with support rather than contempt, where the measure of a person is not their performance but their belovedness. Hard-heartedness, judgmentalism, and gossip are symptoms of not having truly appropriated grace for oneself. You cannot give what you have not received.`,
  },
  {
    id: "hardened",
    title: "Grace and the Hardened Heart",
    body: `What happens when grace is persistently refused? Romans 1:24-28 describes a terrifying progression: because people "exchanged the truth about God for a lie," God "gave them over" — three times — to the consequences of their rebellion. The hardening of the heart is both human choice and divine judgment. Hebrews 6:4-6 is even more sober: those who "have once been enlightened, who have tasted the heavenly gift, who have shared in the Holy Spirit" and then fallen away face an impossibility of restoration, "since they are crucifying the Son of God all over again." The pastoral weight of this is immense: grace is not infinitely deferrrable without consequence. The heart that says "later" to grace becomes progressively less capable of saying "yes." This is not to induce despair but urgency — "today, if you hear his voice, do not harden your hearts" (Heb 3:15). The open door of grace is real, but doors can close.`,
  },
];

function Accordion({ items }: { items: typeof THEOLOGY_ITEMS }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map(item => {
        const open = !!expanded[item.id];
        return (
          <div key={item.id} style={{ background: CARD, border: `1px solid ${open ? PURPLE : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
            <button type="button"
              onClick={() => setExpanded(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
              style={{ width: "100%", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left", gap: 12 }}
            >
              <span style={{ color: TEXT, fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>{item.title}</span>
              <span style={{ color: open ? GREEN : MUTED, fontSize: 20, flexShrink: 0, transition: "transform 0.2s", display: "inline-block", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
            </button>
            {open && (
              <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: "16px 0 0" }}>{item.body}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function GracePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_grace_tab", "theology");
  const [selectedKind, setSelectedKind] = usePersistedState("vine_grace_selected_kind", "prevenient");

  const currentKind = KINDS_ITEMS.find(k => k.id === selectedKind)!;

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Grace" },
    { id: "kinds", label: "Kinds of Grace" },
    { id: "debates", label: "The Great Debates" },
    { id: "response", label: "Responding to Grace" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, -apple-system, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <h1 style={{ fontSize: 38, fontWeight: 900, margin: "0 0 12px", letterSpacing: -1 }}>
            <span style={{ color: GREEN }}>Grace</span>
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Unmerited divine favor — not simply forgiveness of debts, but the positive bestowal of life, righteousness, and power upon those who have no claim on any of it.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 36, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {tabs.map(t => (
            <button type="button"
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1,
                padding: "11px 6px",
                borderRadius: 8,
                border: "none",
                background: tab === t.id ? PURPLE : "transparent",
                color: tab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology of Grace */}
        {tab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                {THEOLOGY_ITEMS.length} foundational dimensions of the doctrine of grace — from the word itself to its transforming power. Each accordion explores a different facet of what Scripture and theology mean when they speak of grace.
              </p>
            </div>
            <Accordion items={THEOLOGY_ITEMS} />
          </div>
        )}

        {/* Tab 2: Kinds of Grace */}
        {tab === "kinds" && (
          <div style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
            {/* Left list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 190, flexShrink: 0 }}>
              <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 4, paddingLeft: 4 }}>SELECT TYPE</div>
              {KINDS_ITEMS.map(k => (
                <button type="button"
                  key={k.id}
                  onClick={() => setSelectedKind(k.id)}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 10,
                    border: `1px solid ${selectedKind === k.id ? GREEN : BORDER}`,
                    background: selectedKind === k.id ? `${GREEN}12` : CARD,
                    color: selectedKind === k.id ? GREEN : MUTED,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s",
                  }}
                >
                  {k.title}
                </button>
              ))}
            </div>

            {/* Right detail panel — sticky */}
            <div style={{ flex: 1, position: "sticky", top: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 14px" }}>{currentKind.title}</h2>

                {/* Definition */}
                <div style={{ background: `${GREEN}0D`, border: `1px solid ${GREEN}25`, borderRadius: 10, padding: 16, marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>DEFINITION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{currentKind.definition}</p>
                </div>

                {/* Scripture */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>KEY SCRIPTURE</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {currentKind.scripture.map(v => (
                      <span key={v} style={{ background: `${PURPLE}20`, color: PURPLE, padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{v}</span>
                    ))}
                  </div>
                </div>

                {/* Practical implications */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>PRACTICAL IMPLICATIONS</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {currentKind.implications.map((impl, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN, flexShrink: 0, marginTop: 7 }} />
                        <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.65 }}>{impl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key thinker */}
                <div style={{ background: BG, borderRadius: 10, padding: 16, borderLeft: `3px solid ${PURPLE}` }}>
                  <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>KEY THINKER</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{currentKind.thinker}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: The Great Grace Debates */}
        {tab === "debates" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 4 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                These debates are not academic curiosities — they determine how we preach, counsel, pray, and understand our own salvation. Engaging them charitably and seriously is itself an act of theological stewardship.
              </p>
            </div>
            {DEBATES.map(debate => (
              <div
                key={debate.id}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, borderTop: `3px solid ${debate.color}` }}
              >
                <h2 style={{ color: debate.color, fontWeight: 900, fontSize: 20, margin: "0 0 18px" }}>{debate.title}</h2>
                {debate.body.split("\n\n").map((para, i) => (
                  <p key={i} style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: i < debate.body.split("\n\n").length - 1 ? "0 0 16px" : 0 }}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Responding to Grace */}
        {tab === "response" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Grace is not merely a doctrine to affirm but a reality to inhabit. These {RESPONSE_ITEMS.length} dimensions describe how the person who has genuinely received grace lives differently — in gratitude, effort, rest, growth, generosity, and sober awareness.
              </p>
            </div>
            <Accordion items={RESPONSE_ITEMS} />
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "wQ5cclvdWjo", title: "If God Is Sovereign, How Can Man Be Free?", channel: "Ligonier Ministries / R.C. Sproul", description: "R.C. Sproul explores God's sovereign grace — the foundation for understanding why saving grace works, and why it is entirely God's gift and not a human achievement." },
                  { videoId: "FTZ3GfL9yQM", title: "The Upside Down Kingdom", channel: "Tim Keller / Gospel Coalition", description: "Tim Keller on the radical nature of the Kingdom of God and how grace overturns all human systems of earning and merit — the good news that levels every hierarchy." },
                  { videoId: "_ChnTOiYXcA", title: "God's Sovereignty: Chosen by God", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul's landmark teaching on election and irresistible grace — one of the most careful and clear expositions of Reformed soteriology available." },
                  { videoId: "KA4pSZxrwRs", title: "The Joy That Produces Radical Obedience", channel: "Desiring God", description: "John Piper on how grace-rooted joy — not duty or fear — is what produces true obedience. Addresses the relationship between grace received and transformed living." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
