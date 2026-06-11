"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "election", label: "Election" },
  { id: "calling", label: "Calling & Regen" },
  { id: "justification", label: "Justification" },
  { id: "adoption", label: "Adoption" },
  { id: "sanctification", label: "Sanctification" },
  { id: "perseverance", label: "Perseverance" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SALVATION_TEXTS = [
  { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", color: GREEN },
  { ref: "Ephesians 2:8–9", text: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.", color: BLUE },
  { ref: "Romans 8:29–30", text: "For those God foreknew he also predestined to be conformed to the image of his Son... those he predestined, he also called; those he called, he also justified; those he justified, he also glorified.", color: GOLD },
  { ref: "Titus 3:4–5", text: "But when the kindness and love of God our Savior appeared, he saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewing by the Holy Spirit.", color: TEAL },
  { ref: "1 Peter 1:3–5", text: "Praise be to the God and Father of our Lord Jesus Christ! In his great mercy he has given us new birth into a living hope through the resurrection of Jesus Christ from the dead.", color: PURPLE },
];

const ORDO_SALUTIS = [
  { step: "1", title: "Election", latin: "electio", desc: "God's eternal, unconditional choice of certain persons for salvation — grounded in his free grace, not foreseen faith or merit (Eph 1:4–5; 2 Tim 1:9).", color: PURPLE },
  { step: "2", title: "Effectual Calling", latin: "vocatio", desc: "The Holy Spirit's internal call that actually brings the elect to faith — distinguished from the general outward call of the gospel (Rom 8:30; 1 Cor 1:23–24).", color: BLUE },
  { step: "3", title: "Regeneration", latin: "regeneratio", desc: "The new birth — God imparts new spiritual life, giving the spiritually dead the capacity to respond to the gospel (John 3:3–8; Ezek 36:26; 1 John 5:1).", color: TEAL },
  { step: "4", title: "Conversion", latin: "conversio", desc: "The human response to regeneration — comprising repentance (turning from sin) and faith (trusting in Christ). Both are gifts enabled by regeneration (Acts 11:18; Eph 2:8).", color: GREEN },
  { step: "5", title: "Justification", latin: "iustificatio", desc: "God's forensic declaration that the sinner is righteous — based on Christ's imputed righteousness and received through faith alone (Rom 3:21–26; 5:1).", color: GOLD },
  { step: "6", title: "Adoption", latin: "adoptio", desc: "God's act of bringing justified sinners into his family as his children — conferring new status, new name, and the indwelling Spirit of sonship (Rom 8:15–17; Gal 4:4–7).", color: RED },
  { step: "7", title: "Sanctification", latin: "sanctificatio", desc: "The ongoing process of growth in holiness — both definitive (positional: set apart in Christ) and progressive (experiential: becoming what we are), culminating in glorification (1 Thess 4:3; 2 Cor 3:18).", color: BLUE },
  { step: "8", title: "Glorification", latin: "glorificatio", desc: "The final stage — resurrection of the body, complete freedom from sin, and full conformity to Christ's image (Rom 8:30; Phil 3:21; 1 John 3:2).", color: PURPLE },
];

const ELECTION_VIEWS = [
  {
    title: "Unconditional Election (Reformed/Calvinist)",
    desc: "God chose the elect before creation based solely on his own will and grace, not on any foreseen faith or merit in the individual (Eph 1:4–5; Rom 9:11–16). Salvation from first to last is God's sovereign work.",
    color: GREEN,
  },
  {
    title: "Conditional Election (Arminian)",
    desc: "God elected those he foreknew would freely believe — election is based on God's foreknowledge of each person's faith response. Human free will is preserved and God's choice is conditioned on foreseen faith.",
    color: BLUE,
  },
  {
    title: "Corporate Election",
    desc: "God elected the body of Christ (the church) as a whole, and individuals are 'elect' insofar as they are in Christ through faith. Emphasis on election as a community concept rather than individual predestination.",
    color: TEAL,
  },
  {
    title: "Molinism (Middle Knowledge)",
    desc: "God possesses middle knowledge — knowledge of what every possible free creature would do in every possible situation. God arranged circumstances knowing who would freely believe, maintaining both sovereignty and genuine freedom.",
    color: GOLD,
  },
  {
    title: "Open Theism",
    desc: "A minority evangelical view: God does not exhaustively foreknow future free decisions. Election is relational and dynamic — God chooses to work with those who respond to his grace, without comprehensive foreordination.",
    color: MUTED,
  },
];

const CALLING_REGEN = [
  {
    title: "General vs. Effectual Call",
    desc: "The general call goes out to all who hear the gospel — 'Come to me, all who are weary' (Matt 11:28). The effectual (or efficacious) call goes specifically to the elect and always results in conversion (Rom 8:30; 1 Cor 1:23–24). Reformed theology distinguishes these; Arminian theology holds that the general call can be effectively resisted.",
    color: BLUE,
  },
  {
    title: "Regeneration: The New Birth",
    desc: "Regeneration is the sovereign act by which the Holy Spirit imparts new spiritual life to the dead sinner (John 3:3–8). Reformed theology typically holds regeneration precedes and produces faith. Arminian theology holds God enables faith through prevenient grace without fully regenerating until a person believes.",
    color: GREEN,
  },
  {
    title: "Prevenient Grace (Arminian)",
    desc: "Arminius and Wesley taught that God gives 'prevenient grace' — grace that goes before and restores humanity's freedom to respond to the gospel. This grace is resistible and does not guarantee conversion but makes it genuinely possible for all.",
    color: TEAL,
  },
  {
    title: "Monergism vs. Synergism",
    desc: "Reformed theology is monergistic — God alone works salvation, including the faith to receive it. Arminian theology is synergistic — God and the human will cooperate in salvation, with God's grace preceding and enabling but human response being decisive.",
    color: PURPLE,
  },
];

const ADOPTION_CONTENT = [
  {
    title: "What Adoption Means",
    desc: "Adoption (Gk: huiothesia — 'placing as a son') is a distinct benefit of salvation, not just a metaphor for justification. Through adoption, the justified sinner receives a new legal status as God's child with all the rights and privileges of sonship (Rom 8:15–17; Gal 4:4–7; 1 John 3:1–2).",
    color: BLUE,
  },
  {
    title: "Spirit of Adoption",
    desc: "Paul writes that believers receive 'the Spirit of adoption by whom we cry, Abba, Father' (Rom 8:15). This is the Spirit's internal witness to our spirits that we are children of God — the experiential assurance of being loved as God's own (Gal 4:6).",
    color: GREEN,
  },
  {
    title: "Present and Future Dimensions",
    desc: "We are already God's children (1 John 3:1–2) — this is settled at conversion. Yet we also 'wait for adoption as sons, the redemption of our bodies' (Rom 8:23) — the full expression of sonship awaits glorification. Already/not yet applies to adoption as to all salvation benefits.",
    color: GOLD,
  },
  {
    title: "Adoption and Ethics",
    desc: "Because we are children of our Father in heaven, our lives should reflect the family resemblance. 'Be imitators of God, as beloved children' (Eph 5:1). Adoption provides the deepest motivation for holiness: we do not earn sonship by good deeds — we live as sons because we are sons.",
    color: TEAL,
  },
];

const SANCTIFICATION_CONTENT = [
  {
    title: "Definitive Sanctification",
    desc: "At conversion, believers are definitively set apart from the dominion of sin and consecrated to God. Paul can call the Corinthians 'sanctified' and 'saints' even while addressing serious sins (1 Cor 1:2; 6:11). This is positional — a once-for-all act of God.",
    color: GREEN,
  },
  {
    title: "Progressive Sanctification",
    desc: "The ongoing transformation of the believer's character, desires, and habits toward Christlikeness — a cooperative work of God and the believer (Phil 2:12–13; 2 Cor 3:18). Growth is real but uneven; struggle with sin persists (Rom 7).",
    color: BLUE,
  },
  {
    title: "The Means of Sanctification",
    desc: "God works sanctification through means: the Word of God (John 17:17), prayer, the Lord's Supper, fellowship, suffering (Heb 12:10–11), and the community of the church. Mortification (putting sin to death) and vivification (putting on the new self) are the twin movements.",
    color: TEAL,
  },
  {
    title: "Entire Sanctification (Wesleyan)",
    desc: "John Wesley taught that believers could, by grace, reach a state of 'entire sanctification' or 'Christian perfection' — complete love of God and neighbor displacing the orientation toward sin, though not excluding all mistakes. This is achieved by a second work of grace after conversion.",
    color: GOLD,
  },
];

const PERSEVERANCE_CONTENT = [
  {
    title: "Perseverance of the Saints (Reformed)",
    desc: "Those whom God effectually calls and justifies will persevere in faith to the end — not through their own strength, but because God preserves them (John 10:28–29; Phil 1:6; 1 Pet 1:5). This is often called 'once saved, always saved,' though that phrase obscures the emphasis on perseverance through faith.",
    color: GREEN,
  },
  {
    title: "Conditional Security (Arminian)",
    desc: "Arminian theology holds that genuine believers can apostatize — finally and fatally fall away from faith. The warning passages of Hebrews (6:4–6; 10:26–31) and Jesus's warnings about the branches being cut off (John 15:6) are read as real warnings to genuine believers.",
    color: BLUE,
  },
  {
    title: "Warning Passages",
    desc: "Both sides agree the warning passages are serious. Reformed interpreters read them as means God uses to ensure perseverance — the warnings motivate continued faith — or as addressed to those who profess but do not truly possess faith. Arminians read them as genuine warnings to genuine believers who may finally fall.",
    color: TEAL,
  },
  {
    title: "Practical Assurance",
    desc: "Regardless of theological position, the pastoral reality is that assurance is built on the objective promises of God, the internal witness of the Spirit (Rom 8:16), and the fruit of genuine faith (1 John 5:13). Counterfeit assurance based on a past decision without present fruit is dangerous.",
    color: GOLD,
  },
];

const VIDEOS = [
  { videoId: "jv5lMM_eMtw", title: "What Is Salvation? — R.C. Sproul" },
  { videoId: "vMpPr6neXxY", title: "Ordo Salutis Explained — Ligonier" },
  { videoId: "kEFSh9OV8YA", title: "Election and Predestination — John Piper" },
  { videoId: "Ld3LPuHLAGU", title: "Justification by Faith — Tim Keller" },
  { videoId: "1wVRrcg9SUM", title: "Sanctification: The Work of Grace — Paul Tripp" },
];

export default function SoteriologyGuidePage() {
  const [tab, setTab] = useLocalStorage("vine_soter_tab", "overview");
  const [openElection, setOpenElection] = useLocalStorage("vine_soter_elect", "");
  const [openCalling, setOpenCalling] = useLocalStorage("vine_soter_call", "");
  const [openSanctif, setOpenSanctif] = useLocalStorage("vine_soter_sanct", "");
  const [openPersev, setOpenPersev] = useLocalStorage("vine_soter_persev", "");
  const [journal, setJournal] = useLocalStorage("vine_soter_journal", "");

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>🕊️</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>Systematic Theology</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Soteriology: The Doctrine of Salvation
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            How does God save sinners? Soteriology is the branch of theology devoted to understanding salvation — its source (God&apos;s grace), its basis (Christ&apos;s work), its application (the Spirit&apos;s work), and its benefits (justification, adoption, sanctification, glorification).
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? GREEN : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? GREEN : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>Key Salvation Texts</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {SALVATION_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>The Ordo Salutis (Order of Salvation)</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem" }}>
                The <em>ordo salutis</em> is the logical (not always chronological) order of salvation&apos;s benefits as applied to the believer. The sequence reflects the logical relationship between each element, not necessarily their temporal order — many happen simultaneously.
              </p>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {ORDO_SALUTIS.map((item) => (
                  <div key={item.step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1rem" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.9rem", color: "#fff", flexShrink: 0 }}>{item.step}</div>
                    <div>
                      <div style={{ fontWeight: 800, color: item.color }}>{item.title} <span style={{ fontStyle: "italic", fontWeight: 400, color: MUTED, fontSize: "0.9rem" }}>({item.latin})</span></div>
                      <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.3rem", fontSize: "0.95rem" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "election" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Election and Predestination</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Few doctrines are more debated. Does God choose who will be saved? On what basis? These questions divide Calvinist and Arminian theology and have profound pastoral implications.
            </p>
            {ELECTION_VIEWS.map((v, i) => {
              const key = String(i);
              const open = openElection === key;
              return (
                <div key={v.title}>
                  <button type="button" style={accordionBtn(open, v.color)} onClick={() => setOpenElection(open ? "" : key)}>
                    <span>{v.title}</span>
                    <span style={{ color: v.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${v.color}0A`, border: `1px solid ${v.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{v.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ background: `${GOLD}0A`, border: `1px solid ${GOLD}25`, borderRadius: 12, padding: "1.25rem", marginTop: "1rem" }}>
              <h3 style={{ fontWeight: 800, color: GOLD, marginBottom: "0.5rem" }}>Pastoral Reflection</h3>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                Election, rightly understood, is a doctrine of comfort — assurance that salvation depends not on the fluctuations of our faith but on the immutable will of God. Paul introduces election in Ephesians 1 not as a philosophical puzzle but as a doxology: &quot;In love he predestined us... to the praise of his glorious grace.&quot; (Eph 1:4–6)
              </p>
            </div>
          </div>
        )}

        {tab === "calling" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: BLUE }}>Effectual Calling and Regeneration</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem" }}>
              How does the Spirit bring the elect to faith? The doctrines of calling and regeneration address the Spirit&apos;s role in initiating salvation.
            </p>
            {CALLING_REGEN.map((v, i) => {
              const key = String(i);
              const open = openCalling === key;
              return (
                <div key={v.title}>
                  <button type="button" style={accordionBtn(open, v.color)} onClick={() => setOpenCalling(open ? "" : key)}>
                    <span>{v.title}</span>
                    <span style={{ color: v.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${v.color}0A`, border: `1px solid ${v.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{v.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "justification" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>Justification</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1rem" }}>
                Justification is God&apos;s forensic (legal) declaration that the sinner is righteous in his sight — not because of anything in the sinner, but because of the righteousness of Christ imputed to the believer through faith.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                {[
                  { label: "By Grace Alone", desc: "Justification flows from God's unmerited favor — not earned or deserved (Rom 3:24; Eph 2:8–9). It is the free gift of a God who justifies the ungodly (Rom 4:5).", color: GREEN },
                  { label: "Through Faith Alone", desc: "Faith is the instrument — not the ground — of justification. We are justified by faith, not on account of faith as a work. Faith receives what Christ accomplished (Rom 3:28; Gal 2:16).", color: BLUE },
                  { label: "In Christ Alone", desc: "The ground of justification is Christ's righteousness — his active obedience (fulfilling the law perfectly) and passive obedience (bearing the penalty). His righteousness is imputed to us (2 Cor 5:21).", color: GOLD },
                  { label: "To God's Glory Alone", desc: "Justification ultimately serves the display of God's righteousness — showing him just and the justifier of the one who has faith in Jesus (Rom 3:26). It is not primarily about us but about God's name.", color: TEAL },
                ].map((item) => (
                  <div key={item.label} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1rem" }}>
                    <div style={{ fontWeight: 800, color: item.color, marginBottom: "0.4rem" }}>{item.label}</div>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h3 style={{ fontWeight: 800, color: PURPLE, marginBottom: "1rem" }}>Justification vs. Sanctification</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { title: "Justification", points: ["Forensic (legal) declaration", "One-time act at conversion", "Complete and perfect", "Changes legal standing", "Imputed righteousness"], color: GOLD },
                  { title: "Sanctification", points: ["Moral transformation", "Ongoing process in life", "Partial and progressive", "Changes actual character", "Imparted righteousness"], color: GREEN },
                ].map((col) => (
                  <div key={col.title} style={{ background: `${col.color}0A`, border: `1px solid ${col.color}25`, borderRadius: 12, padding: "1rem" }}>
                    <div style={{ fontWeight: 800, color: col.color, marginBottom: "0.75rem", fontSize: "1rem" }}>{col.title}</div>
                    {col.points.map((p) => (
                      <div key={p} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.4rem" }}>
                        <span style={{ color: col.color, marginTop: 2 }}>•</span>
                        <span style={{ color: MUTED, fontSize: "0.9rem" }}>{p}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "adoption" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>Adoption as God&apos;s Children</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Adoption is a distinct and often underemphasized aspect of salvation. While justification deals with guilt, adoption deals with relationship — the change of status from enemy to beloved child.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {ADOPTION_CONTENT.map((item) => (
                <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1.5rem", background: `${PURPLE}0A`, border: `1px solid ${PURPLE}25`, borderRadius: 12, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 800, color: PURPLE, marginBottom: "0.5rem" }}>J.I. Packer on Adoption</h3>
              <p style={{ color: MUTED, lineHeight: 1.7, fontStyle: "italic" }}>
                &quot;If you want to judge how well a person understands Christianity, find out how much he makes of the thought of being God&apos;s child and having God as his Father. If this is not the thought that prompts and controls his worship and prayers and his whole outlook on life, it means that he does not yet understand Christianity very well.&quot;
              </p>
            </div>
          </div>
        )}

        {tab === "sanctification" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GREEN }}>Sanctification: Growth in Holiness</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Sanctification is the continuing work of God in the believer — transforming desires, habits, and character toward Christlikeness. It is both God&apos;s work (Phil 2:13) and the believer&apos;s responsibility (Phil 2:12).
            </p>
            {SANCTIFICATION_CONTENT.map((v, i) => {
              const key = String(i);
              const open = openSanctif === key;
              return (
                <div key={v.title}>
                  <button type="button" style={accordionBtn(open, v.color)} onClick={() => setOpenSanctif(open ? "" : key)}>
                    <span>{v.title}</span>
                    <span style={{ color: v.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${v.color}0A`, border: `1px solid ${v.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{v.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "perseverance" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: RED }}>Perseverance and Assurance</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Will true believers always persevere in faith? Can a Christian lose their salvation? This debate cuts to the heart of assurance — and pastoral care.
            </p>
            {PERSEVERANCE_CONTENT.map((v, i) => {
              const key = String(i);
              const open = openPersev === key;
              return (
                <div key={v.title}>
                  <button type="button" style={accordionBtn(open, v.color)} onClick={() => setOpenPersev(open ? "" : key)}>
                    <span>{v.title}</span>
                    <span style={{ color: v.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${v.color}0A`, border: `1px solid ${v.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{v.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ background: `${GREEN}0A`, border: `1px solid ${GREEN}25`, borderRadius: 12, padding: "1.25rem", marginTop: "1rem" }}>
              <h3 style={{ fontWeight: 800, color: GREEN, marginBottom: "0.5rem" }}>Three Grounds of Assurance</h3>
              {["The objective promise of God: 'My sheep hear my voice... and no one will snatch them out of my hand' (John 10:27–28).", "The internal witness of the Spirit: 'The Spirit himself bears witness with our spirit that we are children of God' (Rom 8:16).", "The fruit of genuine faith: Love for the brethren, obedience to Christ, ongoing confession of sin (1 John 3:14; 5:13)."].map((p, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                  <span style={{ color: GREEN, fontWeight: 900, flexShrink: 0 }}>{i + 1}.</span>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Personal Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "1rem" }}>Consider: What aspect of salvation — election, justification, adoption, sanctification — has the most personal significance to you right now, and why?</p>
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
            {journal && (
              <div style={{ marginTop: "1rem", fontSize: "0.82rem", color: MUTED }}>
                Auto-saved · {journal.length} characters
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on Salvation</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{v.title}</div>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Justification by Faith", href: "/justification-by-faith" },
            { label: "Christology", href: "/christology-guide" },
            { label: "Atonement Guide", href: "/atonement-guide" },
            { label: "Systematic Theology 101", href: "/systematic-theology-101" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
