"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEORIES = [
  {
    name: "Penal Substitution",
    color: "#EF4444",
    period: "Reformation onward",
    verse: "Isaiah 53:5-6",
    desc: "The most prominent Protestant theory: Christ bore the penalty for sin that justice required, standing in the place of sinners. God's wrath against sin was satisfied by Christ's death — 'he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed' (Isaiah 53:5). Paul states it directly: 'God made him who had no sin to be sin for us' (2 Corinthians 5:21).",
    strengths: "Takes the justice of God and the reality of guilt seriously. Grounds assurance in an objective act. Directly explains why the cross was necessary.",
    tensions: "Critics ask how the Father punishing the Son is just. Response: the Trinity acts as one — the Father does not punish a third party but enters suffering himself in the Son.",
  },
  {
    name: "Christus Victor",
    color: "#F59E0B",
    period: "Early church, recovered 20th century",
    verse: "Colossians 2:15",
    desc: "Christ's death and resurrection are a cosmic battle in which he defeats the powers of sin, death, and the devil. 'Having disarmed the powers and authorities, he made a public spectacle of them, triumphing over them by the cross' (Colossians 2:15). The cross is not primarily about satisfying divine justice but about the liberation of captives and the defeat of evil. The resurrection is the victory parade.",
    strengths: "Emphasizes the cosmic scope of redemption. Speaks powerfully to those who experience life as bondage. Captures the NT's language of spiritual warfare.",
    tensions: "Does not directly explain how humanity's guilt is addressed. Often used to avoid the satisfaction element entirely, which truncates the full biblical picture.",
  },
  {
    name: "Moral Influence",
    color: "#8B5CF6",
    period: "Abelard (12th century) onward",
    verse: "Romans 5:8",
    desc: "The cross demonstrates God's love so powerfully that it draws humanity back to God through a moral transformation. 'God demonstrates his own love for us in this: While we were still sinners, Christ died for us' (Romans 5:8). The atonement is primarily educational and inspiring — the cross moves us to repentance and love by showing us the extremity of God's love.",
    strengths: "Takes the demonstration of love seriously. Avoids mechanical satisfaction theories. Has appeal to those troubled by forensic frameworks.",
    tensions: "Does not explain why the death of Christ specifically was necessary. Reduces the atonement to an example. Does not adequately address guilt, sin's objective consequences, or divine justice.",
  },
  {
    name: "Ransom / Redemption",
    color: "#3B82F6",
    period: "Early church",
    verse: "Mark 10:45",
    desc: "Christ's death is the ransom price that liberates humanity from bondage. 'The Son of Man came... to give his life as a ransom for many' (Mark 10:45). The metaphor is commercial: humanity is in debt or captivity, and Christ pays the price of liberation. Early fathers debated to whom the ransom was paid (the devil? a legal necessity in the divine economy?) — the metaphor illuminates the freedom, not the transaction.",
    strengths: "Directly biblical. Captures the freedom and liberation motifs of salvation. Emphasizes that the cost was real.",
    tensions: "The metaphor's logic (ransom paid to whom?) generates theological puzzles. Best understood as illuminating one dimension of what Christ accomplished rather than a complete mechanism.",
  },
  {
    name: "Recapitulation",
    color: GREEN,
    period: "Irenaeus (2nd century)",
    verse: "Romans 5:19",
    desc: "Irenaeus's theory: Christ retraces humanity's journey from beginning to end, this time getting it right. Adam sinned at every point of temptation; Christ obeyed at every point. Where Adam failed, Christ succeeded — and in doing so, redeemed human nature from within. 'As through the disobedience of one man the many were made sinners, so through the obedience of the one man the many will be made righteous' (Romans 5:19).",
    strengths: "Emphasizes the incarnation as salvific. Captures the full-life significance of Christ's obedience (not only his death). Grounds solidarity with humanity.",
    tensions: "Less direct about the mechanism of how Christ's recapitulation is applied to individuals. Needs to be supplemented with other theories to give full account of atonement.",
  },
];

const SCRIPTURE = [
  {
    ref: "Leviticus 17:11",
    heading: "The Life Is in the Blood",
    text: "For the life of a creature is in the blood, and I have given it to you to make atonement for yourselves on the altar; it is the blood that makes atonement for one's life.",
    exposition: "The entire sacrificial system of the old covenant rested on this principle: blood represents life, and the atoning sacrifice gives its life in place of the offerer's. The animal stood in the sinner's place — its blood shed so that the worshiper might live. The book of Hebrews reads Israel's entire sacrificial system as a divinely designed shadow pointing to a single, ultimate sacrifice. Every lamb at the altar was a sign: atonement requires the giving of life. The cross does not contradict this logic — it fulfills it. Christ is the Lamb of God (John 1:29), offered once for all (Heb 9:28), whose blood accomplishes what millions of animal sacrifices could only anticipate.",
    theme: "Sacrifice & Substitution",
  },
  {
    ref: "Isaiah 53:4-6",
    heading: "He Bore Our Griefs",
    text: "Surely he took up our pain and bore our suffering... he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed. We all, like sheep, have gone astray, each of us has turned to our own way; and the Lord has laid on him the iniquity of us all.",
    exposition: "Written seven centuries before Christ, Isaiah 53 is the most detailed prophetic portrait of the cross in the Hebrew Scriptures. The Servant suffers — but the suffering is not his own: he bears our grief, our sorrows, our transgressions, our iniquities. The punishment is ours; the peace is ours; the healing is ours. The mechanism is substitution: the iniquity of all of us is laid on him. Peter quotes this passage directly in his theology of the atonement: 'He himself bore our sins in his body on the cross, so that we might die to sins and live for righteousness; by his wounds you have been healed' (1 Peter 2:24). No New Testament writer could imagine the cross apart from Isaiah 53.",
    theme: "Prophetic Fulfillment",
  },
  {
    ref: "Mark 10:45",
    heading: "A Ransom for Many",
    text: "For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
    exposition: "This is Jesus's own interpretation of his death — spoken before the fact, in the context of rebuking the disciples' ambition. The Greek word for ransom (lytron) refers to the price paid to liberate a slave or captive. Jesus is not merely dying as an example or a martyr — he is explicitly giving his life as a price of liberation for others. The word 'many' echoes Isaiah 53 ('he bore the sin of many') and is not restrictive but emphatic: a great multitude, not merely a few. The cross is a liberating transaction. This verse has grounded both ransom theory and substitutionary readings of the atonement, and properly so — both dimensions are present: Christ pays the price of liberation (ransom) for others in their place (substitution).",
    theme: "Ransom & Liberation",
  },
  {
    ref: "Romans 3:21-26",
    heading: "God Presented Christ as a Sacrifice of Atonement",
    text: "God presented Christ as a sacrifice of atonement, through the shedding of his blood — to be received by faith. He did this to demonstrate his righteousness... so as to be just and the one who justifies those who have faith in Jesus.",
    exposition: "This passage is the theological center of the New Testament's atonement teaching. Paul's argument: all humanity stands under condemnation (Rom 1-3); God in his righteousness cannot simply overlook sin; yet in his love he does not wish to condemn. The solution is propitiation — the Greek hilasterion (sacrifice of atonement) refers to the mercy seat of the ark of the covenant, where the high priest sprinkled blood on the Day of Atonement. God puts Christ forward as the new mercy seat. The result: God is both just (sin is dealt with, not overlooked) and the justifier (those who trust in Christ are declared righteous). The cross solves the apparent contradiction between divine justice and divine mercy by being the place where both are fully expressed.",
    theme: "Justification & Propitiation",
  },
  {
    ref: "Hebrews 9:11-14",
    heading: "He Entered Once for All",
    text: "But when Christ came as high priest... he entered the Most Holy Place once for all by his own blood, thus obtaining eternal redemption. The blood of goats and bulls and the ashes of a heifer sprinkled on those who are ceremonially unclean sanctify them so that they are outwardly clean. How much more, then, will the blood of Christ, who through the eternal Spirit offered himself unblemished to God, cleanse our consciences from acts that lead to death?",
    exposition: "Hebrews presents the most developed typological reading of Israel's sacrificial system. The Day of Atonement ritual — the high priest entering the Most Holy Place once a year with blood — was a shadow of what Christ accomplished. He is simultaneously the high priest (the one who offers) and the sacrifice (the one offered). He enters not a man-made sanctuary but heaven itself. He does so not annually but once for all — his single sacrifice accomplishing what the repeated animal sacrifices could never permanently secure. The result is not ceremonial cleansing but the cleansing of the conscience — the deepest place of guilt and accusation. Christ's atonement goes all the way to the interior life.",
    theme: "High Priesthood & Finality",
  },
];

const THINKERS = [
  {
    id: "anselm",
    name: "Anselm of Canterbury",
    era: "1033 – 1109",
    context: "Archbishop of Canterbury, philosophical theologian",
    bio: "Anselm's Cur Deus Homo (Why God Became Man, 1098) is the founding document of satisfaction theory. Working within a feudal culture where honor and dishonor were structuring social realities, Anselm argued: human sin dishonors the infinite majesty of God; the dishonor must be satisfied; the satisfaction required is infinite (because God is infinite); only God can offer infinite satisfaction; but only man is obligated to offer it. Therefore God must become man so that the God-man can offer what is required. Christ's death — freely chosen, not owed — provides infinite satisfaction and can be credited to humanity's account. Anselm's argument was a major advance: it gave a rational account of the necessity of the atonement and ended cruder ransom-to-the-devil theories.",
    quote: "God was not compelled to die, since he was not obliged to die at all; but he suffered death of his own free will, not merely as an act of obedience, but as a result of his own free power.",
    contribution: "Anselm shifted atonement theology from mythological categories (the devil as the party owed ransom) to juridical categories (divine honor and justice). His satisfaction theory became the dominant framework in Western Christianity and shaped both Catholic and Protestant atonement theology ever since. His method — faith seeking understanding — modeled how to give rational form to what is first received by faith, and Cur Deus Homo remains the most rigorous pre-Reformation treatment of why the incarnation and cross were necessary.",
  },
  {
    id: "calvin",
    name: "John Calvin",
    era: "1509 – 1564",
    context: "French Reformer, systematician, Institutes of the Christian Religion",
    bio: "Calvin gave penal substitution its classic Protestant formulation, sharpening Anselm's satisfaction theory in an explicitly legal direction. In Institutes Book II, Calvin argued that Christ did not merely satisfy divine honor — he absorbed the legal penalty that divine justice required against sin. The problem is not only dishonor but guilt; the remedy is not only satisfaction but punishment absorbed in our place. God is not merely a feudal lord whose honor must be restored but a just judge whose verdict against sin must be executed. Christ stands in the dock, receives the verdict of guilty, and endures the sentence — so that those united to him are declared not guilty.",
    quote: "Christ by his obedience truly purchased and merited grace for us with his Father... He paid what we owed and freed us from the tyranny of sin.",
    contribution: "Calvin's formulation — penal substitution — became the central atonement theory in Reformed and much of evangelical theology. By grounding atonement in God's role as just judge (rather than feudal lord), Calvin made the theory more biblically precise and less culture-dependent than Anselm's. His insistence that Christ bore not only our sin but the divine wrath against it gave believers a grounds for assurance: the judgment has already been executed, and it fell on Christ. This legal clarity, combined with his theology of union with Christ, remains among the most powerful accounts of how individual sinners benefit from the cross.",
  },
  {
    id: "stott",
    name: "John R.W. Stott",
    era: "1921 – 2011",
    context: "British evangelical Anglican, pastor and theologian",
    bio: "Stott's The Cross of Christ (1986) is the most influential modern defense of penal substitution and the broadest single-volume treatment of atonement theology in evangelical literature. Writing when liberal theology had largely abandoned satisfaction theories and some evangelicals were questioning them, Stott provided rigorous biblical, theological, and pastoral grounding. His central insight: the essence of sin is humanity substituting itself for God (putting ourselves at the center of our universe); the essence of the atonement is God substituting himself for humanity (absorbing the consequences of our self-enthronement). The cross is not the Father punishing a third party — it is God in his love taking our place in our judgment.",
    quote: "The essence of sin is man substituting himself for God, while the essence of salvation is God substituting himself for man. Man asserts himself against God and puts himself where only God deserves to be; God sacrifices himself for man and puts himself where only man deserves to be.",
    contribution: "Stott's concept of 'the self-substitution of God' rescued penal substitution from two distortions: the caricature that makes the Father an angry deity appeased by the Son (which fractures the Trinity), and the sentimental view that the cross is merely a display of love (which ignores justice). By rooting substitution in God's own triune love — God himself bearing the consequences of human sin — Stott showed that the cross is simultaneously the most severe expression of divine justice and the most extravagant expression of divine love.",
  },
  {
    id: "barth",
    name: "Karl Barth",
    era: "1886 – 1968",
    context: "Swiss Reformed theologian, Church Dogmatics",
    bio: "Barth's treatment of the atonement in Church Dogmatics IV is the longest, most demanding, and arguably most creative treatment in modern theology. Barth interweaves the atonement with his doctrine of election: God, in electing humanity in Christ, elected to bear in himself the rejection that sin deserved. The cross is 'the judge judged in our place.' But Barth goes further: the cross does not reveal an angry God who must be appeased — it reveals the character of God as the one who, precisely in his love, cannot tolerate sin and therefore takes its judgment upon himself. Atonement and election are one: God's eternal purpose was always to be 'God for us' in Christ.",
    quote: "God Himself in the person of His Son undertook for us this work of making good what we have made bad. God does not leave this to man. He does it Himself.",
    contribution: "Barth transformed how the twentieth century thought about both election and atonement. By placing Christ at the center of election (Jesus is the elect one who bears rejection so that the rejected might be elect), Barth made the atonement not an afterthought to a plan that went wrong but the very heart of God's eternal purpose. His 'judge judged in our place' formulation is as compact and powerful an expression of penal substitution as any in the tradition, even as Barth insisted it cannot be separated from the resurrection: the judgment executed on Good Friday is reversed in the verdict of Easter morning.",
  },
  {
    id: "rutledge",
    name: "Fleming Rutledge",
    era: "Born 1937",
    context: "Episcopal priest, preacher, author of The Crucifixion (2015)",
    bio: "Fleming Rutledge's The Crucifixion: Understanding the Death of Jesus Christ (2015) is the most comprehensive biblical theology of the cross written for a general theological audience in a generation. Rutledge insists that the church's tendency to domesticate the cross — turning it into a symbol of general spirituality — betrays the scandal and offense that Paul said was inseparable from it (1 Corinthians 1:18-25). She works through every major biblical metaphor for the atonement (sacrifice, ransom, victory, justification, substitution, apocalyptic deliverance) and argues that no single theory exhausts the event. The cross is simultaneously the most terrible thing that ever happened and the definitive revelation of God's character.",
    quote: "The cross of Christ is not a symbol for human suffering in general; it is the apocalyptic invasion of God into the domain of Sin and Death for the rescue of those who have no power to rescue themselves.",
    contribution: "Rutledge recovered the apocalyptic dimension of the atonement that had been largely marginalized in both liberal and conservative treatments: the cross is not primarily about improving human morality (liberal) or satisfying a legal condition (a reductive conservatism) but about God's invasion of enemy-occupied territory to liberate captives. Her work also insisted that the atonement must be tied to ethics: the cross does not merely secure our personal forgiveness but creates a new community committed to justice, the poor, and the enemy — because that is what the crucified God looks like.",
  },
];

const DOCTRINES = [
  { title: "The Cross Was Necessary", verse: "Hebrews 9:22", body: "'Without the shedding of blood there is no forgiveness' (Hebrews 9:22). The atonement was not an unfortunate accident or a political martyrdom — it was divinely necessary. Jesus in Gethsemane asked if the cup could pass; it could not. The question of why it was necessary has generated the theories of atonement — but that it was necessary is consistently affirmed." },
  { title: "One Act, Multiple Dimensions", verse: "Colossians 1:19-20", body: "The various atonement theories are not mutually exclusive alternatives but different facets of the same event. The cross accomplishes: satisfaction of divine justice (penal substitution), defeat of death and the powers (Christus Victor), payment of the debt (ransom), and restoration of humanity's relationship with God (reconciliation). No single theory exhausts what happened on the cross. The fullest account requires all of them." },
  { title: "Definite and Universal Scope", verse: "1 John 2:2", body: "Two affirmations must be held in tension: Christ's death is sufficient for all ('the atoning sacrifice for our sins, and not only for ours but also for the whole world' — 1 John 2:2) and effective specifically for those who believe. How these are reconciled is the subject of centuries of debate. The safest pastoral position: the cross makes forgiveness genuinely available to every human being, and it effectively accomplishes the salvation of all who trust in it." },
  { title: "Resurrection as Integral", verse: "Romans 4:25", body: "The atonement is not completed at the cross — it requires the resurrection. Christ 'was delivered over to death for our sins and was raised to life for our justification' (Romans 4:25). The resurrection is God's declaration that the sacrifice was accepted, the debt was paid, and the verdict is not guilty. A dead savior is no savior. The atonement without resurrection is incomplete." },
];

export default function AtonementPage() {
  const [activeTab, setActiveTab] = usePersistedState<"theories" | "scripture" | "thinkers" | "doctrines" | "journal" | "videos">("vine_atonement_tab", "theories");
  const [selected, setSelected] = usePersistedState("vine_atonement_selected", "Penal Substitution");
  const [selectedThinker, setSelectedThinker] = usePersistedState("vine_atonement_selected_thinker", "anselm");
  const [selectedScripture, setSelectedScripture] = useState(0);

  const theory = THEORIES.find(t => t.name === selected)!;
  const thinker = THINKERS.find(t => t.id === selectedThinker)!;
  const passage = SCRIPTURE[selectedScripture];

  const [atnEntries, setAtnEntries] = useState<{ id: string; date: string; cross: string; received: string; live: string }[]>(() => {
    try { const s = localStorage.getItem("vine_atn_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [atnForm, setAtnForm] = useState({ cross: "", received: "", live: "" });
  const [atnSaved, setAtnSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_atn_entries", JSON.stringify(atnEntries)); }, [atnEntries]);
  function saveAtnEntry() {
    if (!atnForm.cross.trim()) return;
    setAtnEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...atnForm }, ...prev]);
    setAtnForm({ cross: "", received: "", live: "" });
    setAtnSaved(true); setTimeout(() => setAtnSaved(false), 2000);
  }
  function deleteAtnEntry(id: string) { setAtnEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🩸</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theories of the Atonement</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Why did Jesus have to die? The church has answered this question in multiple ways — each illuminating a different facet of what the cross accomplished. No single theory exhausts the mystery.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theories" as const, label: "Theories", icon: "🔬" },
            { id: "scripture" as const, label: "Scripture", icon: "📜" },
            { id: "thinkers" as const, label: "Thinkers", icon: "🧠" },
            { id: "doctrines" as const, label: "Doctrines", icon: "📖" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theories" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {THEORIES.map(t => (
                <button type="button" key={t.name} onClick={() => setSelected(t.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selected === t.name ? t.color : BORDER}`, background: selected === t.name ? `${t.color}15` : "transparent", color: selected === t.name ? t.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {t.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${theory.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <h2 style={{ color: theory.color, fontWeight: 900, fontSize: 22, margin: 0, marginBottom: 4 }}>{theory.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{theory.period}</div>
                </div>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={theory.verse} /></span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{theory.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>STRENGTHS</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{theory.strengths}</p>
                </div>
                <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>TENSIONS</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{theory.tensions}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "scripture" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {SCRIPTURE.map((s, i) => (
                <button type="button" key={i} onClick={() => setSelectedScripture(i)}
                  style={{ width: "100%", background: selectedScripture === i ? `${PURPLE}20` : CARD, border: `1px solid ${selectedScripture === i ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: selectedScripture === i ? GREEN : TEXT, fontWeight: 700, fontSize: 12, marginBottom: 2 }}>{s.ref}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{s.theme}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, margin: 0 }}>{passage.heading}</h2>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{passage.ref}</span>
              </div>
              <blockquote style={{ margin: "0 0 20px", padding: "14px 18px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>"{passage.text}"</p>
              </blockquote>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{passage.exposition}</p>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 12 }}>
                <span style={{ color: PURPLE, fontWeight: 700, fontSize: 12 }}>THEME: </span>
                <span style={{ color: TEXT, fontSize: 13 }}>{passage.theme}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "thinkers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {THINKERS.map(t => (
                <button type="button" key={t.id} onClick={() => setSelectedThinker(t.id)}
                  style={{ width: "100%", background: selectedThinker === t.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedThinker === t.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: selectedThinker === t.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{t.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{thinker.name}</h2>
              <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{thinker.context}</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{thinker.bio}</p>
              <blockquote style={{ margin: "0 0 20px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{thinker.quote}"</p>
              </blockquote>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{thinker.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "doctrines" && (
          <div>
            {DOCTRINES.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 22, marginTop: 8 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>THE MYSTERY THAT REMAINS</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Every theory of the atonement illuminates something real and leaves something unexplained. The cross is a mystery — not in the sense of being irrational, but in the sense that the love of God expressed in it exceeds our full comprehension. Paul ends his atonement section in Romans 11 not with a formula but with a doxology: "Oh, the depth of the riches of the wisdom and knowledge of God!" The appropriate response to the cross is ultimately not explanation but worship.
              </p>
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>Atonement Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Reflect on what the cross means to you — what you have received, and how you are living in response.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>What the cross means to me today</label>
                <textarea value={atnForm.cross} onChange={e => setAtnForm(f => ({ ...f, cross: e.target.value }))} rows={3} placeholder="Not theology — your personal response to Christ's sacrifice..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>What I have received through the atonement</label>
                <textarea value={atnForm.received} onChange={e => setAtnForm(f => ({ ...f, received: e.target.value }))} rows={2} placeholder="Forgiveness, adoption, peace, reconciliation..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>How I am living in light of it</label>
                <textarea value={atnForm.live} onChange={e => setAtnForm(f => ({ ...f, live: e.target.value }))} rows={2} placeholder="How is the cross changing how you live, relate, and love?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveAtnEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {atnSaved ? "Saved!" : "Save Entry"}
              </button>
            </div>
            {atnEntries.length > 0 && (
              <div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 16, marginBottom: 14 }}>My Entries ({atnEntries.length})</h3>
                {atnEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteAtnEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.cross && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 6 }}><strong style={{ color: GREEN }}>Cross:</strong> {e.cross}</p>}
                    {e.received && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 6 }}><strong style={{ color: PURPLE }}>Received:</strong> {e.received}</p>}
                    {e.live && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}><strong style={{ color: MUTED }}>Living:</strong> {e.live}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on the atonement — why Jesus had to die, what the cross accomplished, and what it means for us.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "oNpTha80yyE", title: "The Necessity of the Atonement", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul explains why atonement is not optional — God's justice, holiness, and righteousness made it necessary that sin be dealt with in the death of Christ." },
                  { videoId: "IJ-FekWUZzE", title: "The Atonement — A Sermon (Mark 15:33–41)", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul preaches on the crucifixion account in Mark — the darkness, the cry of dereliction, and what happened on the cross between the Father and the Son." },
                  { videoId: "tp5MIrMZFqo", title: "What Is the Doctrine of Limited Atonement?", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul examines one of the most debated atonement doctrines — for whom did Christ die, and what does the Scripture actually teach?" },
                  { videoId: "q5QEH9bH8AU", title: "Limited Atonement: What Is Reformed Theology?", channel: "R.C. Sproul / Ligonier Ministries", description: "Part of Sproul's series on Reformed theology, this session grounds the particularity of the atonement in the nature of God's saving purpose." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
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
