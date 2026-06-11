"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";


const TABS = [
  { id: "overview", label: "Overview" },
  { id: "person", label: "Person of Spirit" },
  { id: "work-salvation", label: "Work in Salvation" },
  { id: "gifts", label: "Spiritual Gifts" },
  { id: "fruit", label: "Fruit of the Spirit" },
  { id: "cessation", label: "Cessationism" },
  { id: "filled", label: "Being Filled" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SPIRIT_TEXTS = [
  { ref: "John 14:16–17", text: "I will ask the Father, and he will give you another advocate to help you and be with you forever — the Spirit of truth... he lives with you and will be in you.", color: TEAL },
  { ref: "Romans 8:9–11", text: "You, however, are not in the realm of the flesh but are in the realm of the Spirit, if indeed the Spirit of God lives in you. And if anyone does not have the Spirit of Christ, they do not belong to Christ.", color: GREEN },
  { ref: "1 Corinthians 12:4–7", text: "There are different kinds of gifts, but the same Spirit distributes them... to each one the manifestation of the Spirit is given for the common good.", color: BLUE },
  { ref: "Galatians 5:22–23", text: "The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.", color: GOLD },
  { ref: "Acts 1:8", text: "You will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.", color: PURPLE },
];

const SPIRIT_PERSON_POINTS = [
  {
    title: "The Spirit Is Personal, Not a Force",
    desc: "The Holy Spirit has personal attributes: he speaks (Acts 13:2), teaches (John 14:26), intercedes (Rom 8:26–27), grieves (Eph 4:30), leads (Rom 8:14), witnesses (Rom 8:16), and can be lied to (Acts 5:3). Personal pronouns in John 14–16 (Greek masculine 'he') underscore personality despite the neuter Greek word pneuma.",
    color: TEAL,
  },
  {
    title: "The Deity of the Spirit",
    desc: "The Spirit is identified as God: lying to the Spirit is lying to God (Acts 5:3–4); he is omniscient (1 Cor 2:10–11), omnipresent (Ps 139:7), and eternal (Heb 9:14). The Nicene Creed confesses him as 'the Lord and Giver of life, who proceeds from the Father and the Son, who together with the Father and the Son is worshiped and glorified.'",
    color: GOLD,
  },
  {
    title: "The Spirit in the Trinity",
    desc: "The Spirit is the third person of the Trinity — distinct from the Father and Son (Matt 3:16–17; John 14:16), co-equal and co-eternal. The Western church adds 'and from the Son' (filioque) — the Spirit proceeds from both Father and Son. Eastern Orthodoxy rejects this addition, holding the Spirit proceeds from the Father alone.",
    color: PURPLE,
  },
  {
    title: "Symbols and Images",
    desc: "Scripture uses rich imagery: wind (John 3:8; Acts 2:2), fire (Matt 3:11; Acts 2:3), water (John 7:37–39; Isa 44:3), oil (Acts 10:38; 1 John 2:20), dove (Matt 3:16), seal (Eph 1:13–14), and deposit/earnest (2 Cor 1:22; 5:5). Each image illuminates a different dimension of his work.",
    color: BLUE,
  },
];

const WORK_SALVATION = [
  {
    title: "The Spirit in Regeneration",
    desc: "'No one can enter the kingdom of God unless they are born of water and the Spirit' (John 3:5). Regeneration is exclusively the Spirit's work — giving spiritual life to those who are spiritually dead (Ezek 36:26–27; Titus 3:5). Without the Spirit's sovereign new birth, no one would come to faith.",
    color: GREEN,
  },
  {
    title: "The Spirit and Conviction",
    desc: "'When he comes, he will prove the world to be in the wrong about sin and righteousness and judgment' (John 16:8). The Spirit convicts unbelievers of sin, of the righteousness of Christ, and of the coming judgment — creating the conviction that makes repentance possible.",
    color: BLUE,
  },
  {
    title: "The Spirit as Indwelling Presence",
    desc: "Every believer is indwelt by the Spirit — not just specially gifted individuals (1 Cor 6:19; Rom 8:9). The Spirit's indwelling marks the transition from the old covenant (Spirit upon some, for a time) to the new covenant (Spirit within all, permanently — Jer 31:33; Ezek 36:27).",
    color: TEAL,
  },
  {
    title: "The Spirit and Sanctification",
    desc: "'The fruit of the Spirit' (Gal 5:22–23) is the product of his transforming work. The Spirit leads believers away from the flesh's desires and toward righteousness (Rom 8:4–14; Gal 5:16–18). He mortifies sin (Rom 8:13) and renews the mind (Rom 12:2; Titus 3:5).",
    color: GOLD,
  },
  {
    title: "The Spirit as Seal and Guarantee",
    desc: "Having believed, believers 'were marked with a seal, the promised Holy Spirit, who is a deposit guaranteeing our inheritance' (Eph 1:13–14). The Spirit seals believers for the day of redemption (Eph 4:30) — his presence is the guarantee of final glorification.",
    color: PURPLE,
  },
  {
    title: "The Spirit and Prayer",
    desc: "'The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans' (Rom 8:26). The Spirit enables, empowers, and intercedes in prayer — praying through us according to the will of God.",
    color: RED,
  },
];

type Gift = { name: string; category: string; desc: string };
const SPIRITUAL_GIFTS: Gift[] = [
  { name: "Prophecy", category: "Speaking", desc: "Spirit-prompted speech that builds up, encourages, and comforts the church (1 Cor 14:3). Distinct from canonical prophecy (Scripture) — a charismatic gift of occasional Spirit-prompted words, subject to evaluation." },
  { name: "Teaching", category: "Speaking", desc: "Explaining and applying Scripture to the congregation with clarity and conviction. Paul lists it as a key leadership gift (Eph 4:11; Rom 12:7)." },
  { name: "Tongues & Interpretation", category: "Speaking", desc: "Unlearned languages (Acts 2) or ecstatic utterances (1 Cor 14) — in corporate worship, require interpretation. Private devotional use distinguished by Paul from public use (1 Cor 14:18–19)." },
  { name: "Evangelism", category: "Service", desc: "Spirit-gifted proclamation of the gospel with unusual effectiveness in bringing unbelievers to faith (Eph 4:11; Acts 21:8)." },
  { name: "Healing", category: "Signs", desc: "Spirit-empowered restoration of physical and spiritual health. Present in apostolic ministry and prayed for by elders (James 5:14–15)." },
  { name: "Miracles", category: "Signs", desc: "Works of power that authenticate the gospel (2 Cor 12:12; Heb 2:4). Whether ongoing or limited to the apostolic age is the cessationist debate." },
  { name: "Administration/Leadership", category: "Service", desc: "Gift of organizing and directing the community wisely toward God's purposes (1 Cor 12:28; Rom 12:8)." },
  { name: "Mercy", category: "Service", desc: "Extraordinary compassion toward those in distress — going beyond duty to the lonely, sick, marginalized (Rom 12:8)." },
  { name: "Helps/Service", category: "Service", desc: "Supporting others' ministry — freeing them to focus on their primary calling (1 Cor 12:28; Rom 12:7)." },
  { name: "Faith", category: "Character", desc: "Spirit-given trust that God will act in extraordinary ways — the faith that 'moves mountains' (1 Cor 12:9; 13:2)." },
  { name: "Wisdom", category: "Character", desc: "Practical, Spirit-given insight into applying God's truth to complex real-life situations (1 Cor 12:8; James 1:5)." },
  { name: "Knowledge", category: "Character", desc: "Spirit-given understanding of theological truth and its implications (1 Cor 12:8; Col 2:3)." },
];

const FRUIT_OF_SPIRIT = [
  { name: "Love", greek: "agape", desc: "Unconditional, self-giving love modeled on God's love in Christ. The foundational virtue from which all others flow.", color: RED },
  { name: "Joy", greek: "chara", desc: "Deep gladness independent of circumstances — not mere happiness but settled delight in God and his goodness.", color: GOLD },
  { name: "Peace", greek: "eirene", desc: "Wholeness and right relationship — with God, within oneself, and with others. The shalom the Spirit creates.", color: TEAL },
  { name: "Forbearance (Patience)", greek: "makrothymia", desc: "Long-suffering toward people — not retaliating or giving up under provocation. Patience with difficult persons.", color: BLUE },
  { name: "Kindness", greek: "chrestotes", desc: "Active goodness toward others expressed in tangible care — the disposition to do good, especially to the undeserving.", color: GREEN },
  { name: "Goodness", greek: "agathosyne", desc: "Moral excellence and integrity — being good through and through, not just appearing good. Righteous character.", color: PURPLE },
  { name: "Faithfulness", greek: "pistis", desc: "Reliability, trustworthiness, keeping commitments. The Spirit produces people who can be counted on.", color: GOLD },
  { name: "Gentleness (Meekness)", greek: "prautes", desc: "Power under control — not weakness but strength surrendered to God's purposes. The opposite of arrogance.", color: BLUE },
  { name: "Self-Control", greek: "enkrateia", desc: "Mastery of one's appetites and impulses — the Spirit-enabled ability to say no to what the flesh desires.", color: TEAL },
];

const CESSATION_VIEWS = [
  {
    title: "Cessationism",
    desc: "The miraculous or 'sign' gifts (tongues, prophecy, healing, miracles) ceased with the apostolic age or the completion of the NT canon. These gifts were foundational — authenticating the apostles' message. With the foundation laid (Eph 2:20) and the canon closed, they are no longer needed. B.B. Warfield, John MacArthur.",
    color: BLUE,
  },
  {
    title: "Continuationism",
    desc: "All spiritual gifts remain available and active throughout church history until Christ returns. 1 Corinthians 13:10 ('when completeness comes') refers to Christ's return, not the canon. The gifts are for the 'common good' (1 Cor 12:7) without any stated expiration. Wayne Grudem, Gordon Fee.",
    color: GREEN,
  },
  {
    title: "Open But Cautious",
    desc: "The gifts are in principle still available but are rare, may look different than in the NT, and require careful discernment. Openness to the Spirit's extraordinary working without uncritical embrace of charismatic practice. D.A. Carson, John Piper.",
    color: TEAL,
  },
  {
    title: "Pentecostal / Charismatic",
    desc: "All gifts are fully operational and normative for the church. A 'baptism in the Spirit' subsequent to conversion empowers believers for witness and ministry. Tongues is often the initial evidence of this second experience. Pentecostalism (Azusa Street, 1906).",
    color: GOLD,
  },
];

const FILLED_POINTS = [
  {
    title: "Indwelling vs. Filling",
    desc: "Every believer is indwelt by the Spirit permanently (Rom 8:9; 1 Cor 6:19). 'Filling' (Eph 5:18) is different — an ongoing, repeatable experience of the Spirit's influence and control. Indwelling is positional; filling is experiential and fluctuating.",
    color: TEAL,
  },
  {
    title: "Be Filled — Present Imperative",
    desc: "Ephesians 5:18 uses a present imperative plural: 'keep on being filled with the Spirit.' The grammar implies a continuous, repeated experience — not a one-time event. The filling is not something we manufacture but something we submit to.",
    color: BLUE,
  },
  {
    title: "Conditions for Filling",
    desc: "Scripture suggests conditions: confession of sin and repentance (1 John 1:9; Acts 3:19), surrender of will to God (Rom 12:1–2; Acts 5:32), and earnest asking (Luke 11:13). Eph 5:18 contrasts being filled with drunkenness — the Spirit's control replaces fleshly control.",
    color: GREEN,
  },
  {
    title: "Evidence of Being Filled",
    desc: "Ephesians 5:19–21 gives immediate outcomes: singing and worship, giving thanks in all things, and mutual submission. The Spirit-filled life is marked by joy, gratitude, and humble regard for others — not necessarily dramatic experiences.",
    color: GOLD,
  },
  {
    title: "Grieving and Quenching the Spirit",
    desc: "We can grieve the Spirit (Eph 4:30) through sin, bitterness, and unwholesome speech. We can quench the Spirit (1 Thess 5:19) by resisting his promptings. Spiritual vitality requires neither grieving nor quenching — but active cooperation with his work.",
    color: PURPLE,
  },
];

const VIDEOS = [
  { videoId: "7KMrpxWCPqg", title: "Who Is the Holy Spirit? — R.C. Sproul" },
  { videoId: "mKNPKuEi4b4", title: "The Work of the Holy Spirit — Tim Keller" },
  { videoId: "GKRI3w5aQ8s", title: "Spiritual Gifts — Sam Storms" },
  { videoId: "sF74gXklZlY", title: "Cessationism vs. Continuationism — Panel Discussion" },
  { videoId: "0g93zMlMpfo", title: "The Fruit of the Spirit — John Piper" },
];

export default function PneumatologyGuidePage() {
  const [tab, setTab] = usePersistedState<string>("vine_pneum_tab", "overview");
  const [openGift, setOpenGift] = usePersistedState<string>("vine_pneum_gift", "");
  const [openCess, setOpenCess] = usePersistedState<string>("vine_pneum_cess", "");
  const [openFruit, setOpenFruit] = usePersistedState<string>("vine_pneum_fruit", "");
  const [journal, setJournal] = usePersistedState<string>("vine_pneum_journal", "");

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
            <span style={{ fontSize: "2rem" }}>🔥</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: TEAL, textTransform: "uppercase" }}>Systematic Theology</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Pneumatology: The Holy Spirit
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            Who is the Holy Spirit? Pneumatology is the study of the third person of the Trinity — his personhood, deity, work in creation and salvation, spiritual gifts, the fruit he produces, and how to live a Spirit-filled life.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? TEAL : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? TEAL : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Key Texts</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {SPIRIT_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: BLUE }}>Overview: The Spirit&apos;s Work</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                {[
                  { label: "In Creation", desc: "Hovering over the waters (Gen 1:2); giving life to all creatures (Job 33:4; Ps 104:30).", color: GREEN },
                  { label: "In Redemption", desc: "Regenerating, indwelling, sealing, sanctifying, and glorifying the people of God.", color: TEAL },
                  { label: "In the Church", desc: "Distributing gifts for the common good, uniting the body, guiding into truth.", color: BLUE },
                  { label: "In the Believer", desc: "Producing fruit, interceding in prayer, assuring sonship, empowering witness.", color: GOLD },
                  { label: "In Scripture", desc: "Inspiring the biblical authors (2 Pet 1:21); illuminating readers to understand (1 Cor 2:12–14).", color: PURPLE },
                  { label: "In Mission", desc: "Empowering witnesses (Acts 1:8); calling workers (Acts 13:2); opening hearts (Acts 16:14).", color: RED },
                ].map((item) => (
                  <div key={item.label} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1rem" }}>
                    <div style={{ fontWeight: 800, color: item.color, marginBottom: "0.4rem" }}>{item.label}</div>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "person" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>The Person of the Holy Spirit</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              The Spirit is not an impersonal force or divine energy, but a fully personal, fully divine member of the Trinity — distinct from the Father and Son yet one with them in being.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {SPIRIT_PERSON_POINTS.map((item) => (
                <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "work-salvation" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: GREEN, margin: 0 }}>The Spirit&apos;s Work in Salvation</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Salvation is a Trinitarian act. The Father elects, the Son accomplishes redemption, and the Spirit applies it. Every aspect of salvation — from initial conviction to final glorification — involves the Spirit&apos;s direct work.
            </p>
            {WORK_SALVATION.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "gifts" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: BLUE }}>Spiritual Gifts</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              The Spirit distributes gifts to every member of the body — not for personal enrichment but for the common good (1 Cor 12:7). Major gift lists appear in Romans 12, 1 Corinthians 12, and Ephesians 4.
            </p>
            {SPIRITUAL_GIFTS.map((g, i) => {
              const key = String(i);
              const open = openGift === key;
              const categoryColor = g.category === "Speaking" ? BLUE : g.category === "Signs" ? RED : g.category === "Character" ? GOLD : GREEN;
              return (
                <div key={g.name}>
                  <button type="button" style={accordionBtn(open, categoryColor)} onClick={() => setOpenGift(open ? "" : key)}>
                    <span>{g.name} <span style={{ fontWeight: 400, fontSize: "0.8rem", color: MUTED }}>— {g.category}</span></span>
                    <span style={{ color: categoryColor }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${categoryColor}0A`, border: `1px solid ${categoryColor}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{g.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "fruit" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GOLD }}>The Fruit of the Spirit</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Galatians 5:22–23 lists nine qualities produced by the Spirit&apos;s transforming work. Note: it is fruit (singular) — a unified cluster of Christlike character, not a checklist of separate achievements.
            </p>
            {FRUIT_OF_SPIRIT.map((f, i) => {
              const key = String(i);
              const open = openFruit === key;
              return (
                <div key={f.name}>
                  <button type="button" style={accordionBtn(open, f.color)} onClick={() => setOpenFruit(open ? "" : key)}>
                    <span style={{ fontWeight: 800 }}>{f.name} <span style={{ fontStyle: "italic", fontWeight: 400, color: MUTED, fontSize: "0.85rem" }}>({f.greek})</span></span>
                    <span style={{ color: f.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${f.color}0A`, border: `1px solid ${f.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{f.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "cessation" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Cessationism vs. Continuationism</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              One of the most practically significant debates in evangelical theology: do miraculous gifts — tongues, prophecy, healing, miracles — continue today, or did they cease after the apostolic age?
            </p>
            {CESSATION_VIEWS.map((v, i) => {
              const key = String(i);
              const open = openCess === key;
              return (
                <div key={v.title}>
                  <button type="button" style={accordionBtn(open, v.color)} onClick={() => setOpenCess(open ? "" : key)}>
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

        {tab === "filled" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: GREEN, margin: 0 }}>Being Filled with the Spirit</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              &quot;Be filled with the Spirit&quot; (Eph 5:18) — a command, not a suggestion. What does it mean and how do we pursue it?
            </p>
            {FILLED_POINTS.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Personal Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "1rem" }}>How aware are you of the Holy Spirit&apos;s work in your daily life? Which aspect of his ministry — conviction, comfort, guidance, gifting, fruit-bearing — do you most want to know better?</p>
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
            {journal && <div style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: MUTED }}>Auto-saved · {journal.length} characters</div>}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on the Holy Spirit</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Spiritual Gifts", href: "/spiritual-gifts" },
            { label: "Cessationism & Continuationism", href: "/cessationism-continuationism" },
            { label: "Soteriology Guide", href: "/soteriology-guide" },
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
