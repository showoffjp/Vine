"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#c9a227";

type Tab = "overview" | "persons" | "heresies" | "scripture" | "application" | "videos";

const PERSONS = [
  {
    id: "father", name: "God the Father", icon: "☁️", color: "#3B82F6",
    role: "Creator, Initiator, Source",
    key_texts: ["Matthew 6:9", "John 17:1-5", "1 Corinthians 8:6", "Ephesians 1:3-6"],
    desc: "The Father is the first person of the Trinity — the source and origin within the Godhead, not in time (the Son is eternally begotten, not created at a moment) but in eternal relation. The Father initiates: he sends the Son (John 3:16), sends the Spirit (John 14:26), and elects his people (Ephesians 1:3-6). He is the one Jesus addressed as 'Abba' and taught his disciples to call Father. Before the foundation of the world, the Father loved the Son (John 17:24) — this eternal love is the wellspring of all creation and salvation.",
    misconception: "The Father is not simply 'God before Jesus' or an OT-only deity. The Father is distinguished from the Son and Spirit but inseparable from them. Every act of God involves all three persons operating from their distinct eternal relations within the one divine being.",
  },
  {
    id: "son", name: "God the Son", icon: "✝️", color: "#EF4444",
    role: "Redeemer, Revealer, Image of the Father",
    key_texts: ["John 1:1-18", "Colossians 1:15-20", "Hebrews 1:1-4", "Philippians 2:6-11"],
    desc: "The Son is the second person of the Trinity — eternally begotten of the Father, not made. The eternal Son became human (incarnation) without ceasing to be divine — fully God, fully human (Council of Chalcedon, 451 AD). He is the Word through whom all things were made (John 1:3), the one who reveals the Father perfectly ('Whoever has seen me has seen the Father,' John 14:9), and the only mediator between God and humanity (1 Timothy 2:5). His resurrection is the firstfruits of the new creation.",
    misconception: "The Son is not a lesser god or a created being. Arianism — which taught the Son was the highest creature, not truly God — was condemned at Nicaea (325 AD). The Son is homoousios (same substance as the Father). His obedience in the incarnation is economic (a matter of redemptive role), not ontological inferiority.",
  },
  {
    id: "spirit", name: "God the Holy Spirit", icon: "🕊️", color: "#10B981",
    role: "Sanctifier, Indweller, Empowerer",
    key_texts: ["John 14:16-17", "Romans 8:9-17", "1 Corinthians 12:4-11", "Acts 2:1-4"],
    desc: "The Spirit is the third person of the Trinity — not a force or an influence but a person who acts, speaks, grieves (Ephesians 4:30), and intercedes (Romans 8:26). He is sent by the Father and Son at Pentecost (Acts 2) to indwell believers, convict of sin, apply the work of Christ, produce the fruit of holiness, distribute spiritual gifts, and unite the body of Christ. He is the guarantee of the coming inheritance (Ephesians 1:14) and the down-payment of the kingdom.",
    misconception: "The Spirit is not a subordinate member of a divine hierarchy — he is equally God, a truth affirmed at Constantinople (381 AD) against the Pneumatomachians. He is also not a spiritual 'energy' or impersonal force — the NT consistently uses personal pronouns and attributes personal actions (teaching, grieving, interceding) to him.",
  },
];

const HERESIES = [
  { name: "Arianism", era: "4th century", error: "The Son is the highest created being — divine but not fully God. 'There was a time when he was not.' He is homoiousios (similar substance) but not homoousios (same substance). Still taught by Jehovah's Witnesses today.", orthodox: "The Son is homoousios — same substance as the Father. Affirmed at Nicaea 325 AD. Eternally begotten, not created. A creature cannot save creatures; only God can truly save." },
  { name: "Modalism / Sabellianism", era: "3rd century", error: "God is one person who reveals himself in three successive modes — as Father in creation, Son in incarnation, Spirit at Pentecost. One divine actor wearing three masks. A version is held by Oneness Pentecostalism today.", orthodox: "The three persons are simultaneously distinct and co-present. The Father and Son speak to each other (John 17). At Jesus' baptism all three are present at once. The persons are real and eternal, not sequential costumes." },
  { name: "Tritheism", era: "Various", error: "Father, Son, and Spirit are three separate divine beings who cooperate — a committee of gods rather than one God in three persons. Some Social Trinity theologies edge toward this error.", orthodox: "There is one God (Deuteronomy 6:4). The three persons share one divine essence, not three essences. The unity is not social agreement but ontological identity of nature." },
  { name: "Subordinationism", era: "Various", error: "The Son and Spirit are eternally lesser in being than the Father — not just functionally subordinate in the incarnation, but ontologically inferior in nature and rank.", orthodox: "The Son and Spirit are equal in being with the Father. Economic subordination (the Son obeys the Father in his redemptive mission) is a matter of role in redemptive history, not of their eternal divine nature." },
  { name: "Docetism", era: "1st–2nd centuries", error: "Jesus only appeared to be human — he was purely divine. His suffering and death were illusions or merely symbolic. Associated with Gnosticism, which viewed matter as evil.", orthodox: "The Son fully became human (John 1:14). He truly suffered, truly died, and truly rose bodily. 1 John was written partly to counter Docetism: 'Every spirit that acknowledges that Jesus Christ has come in the flesh is from God' (1 John 4:2)." },
  { name: "Adoptionism", era: "2nd–8th centuries", error: "Jesus was a uniquely virtuous human adopted as God's Son at his baptism or resurrection — divine by moral achievement, not by eternal nature. God chose him; he was not God from eternity.", orthodox: "The Son is eternally God. The incarnation is the eternal Son entering humanity, not a human being elevated to divinity. John 1:1 — 'In the beginning was the Word, and the Word was with God, and the Word was God.'" },
];

const SCRIPTURE_REFS = [
  { ref: "Matthew 28:19", text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.", note: "The singular 'name' (not 'names') for three persons implies one divine being with three personal distinctions. The baptismal formula encodes the Trinity in the founding commission of the church." },
  { ref: "2 Corinthians 13:14", text: "The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.", note: "The Apostolic Benediction is explicitly trinitarian — each person contributes distinctly. Grace from the Son, love from the Father, fellowship from the Spirit. Paul assumes triune distinctions naturally in his pastoral writing." },
  { ref: "John 1:1-3", text: "In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through him.", note: "John's prologue identifies the eternal Word (Logos) as both distinct from God ('with God') and identical with God ('was God'). This is the deepest NT statement of the Son's pre-incarnate divine existence." },
  { ref: "John 17:5", text: "And now, Father, glorify me in your own presence with the glory that I had with you before the world existed.", note: "Jesus references his pre-incarnate glory shared with the Father — proof of the Son's eternal divine existence before creation. The Father-Son relationship precedes time itself." },
  { ref: "Isaiah 48:16", text: "Come near to me, hear this: from the beginning I have not spoken in secret, from the time it came to be I have been there. And now the Lord God has sent me, and his Spirit.", note: "An astonishing OT triadic statement: the speaker (the messianic servant), the Lord God, and his Spirit are all distinct. The Trinity is not absent from the OT — it is present implicitly, becoming explicit in the NT." },
  { ref: "Ephesians 1:3-14", text: "Blessed be the God and Father… he chose us in him before the foundation of the world… In him we have redemption through his blood… sealed with the promised Holy Spirit, who is a guarantee of our inheritance.", note: "Paul's great doxology is structured by the three persons: the Father chooses (vv.3-6), the Son redeems (vv.7-12), the Spirit seals (vv.13-14). Salvation is irreducibly trinitarian at every stage." },
  { ref: "Romans 8:11", text: "If the Spirit of him who raised Jesus from the dead dwells in you, he who raised Christ Jesus from the dead will also give life to your mortal bodies through his Spirit who dwells in you.", note: "The resurrection is a trinitarian act — the Father raised the Son through the Spirit. The same triune power that raised Christ will raise believers. The Spirit who indwells is the guarantee of future resurrection." },
];

const APPLICATIONS = [
  { title: "Prayer Is Trinitarian", icon: "🙏", body: "Christian prayer is addressed to the Father, through the Son, in the power of the Spirit (Ephesians 2:18). When you pray 'Our Father,' you come through the mediation of Christ and in the enabling of the Spirit. The Trinity structures prayer: the Spirit intercedes within you (Romans 8:26), the Son intercedes for you above (Hebrews 7:25), and the Father hears with delight. Cultivate awareness of all three persons in your prayer life." },
  { title: "Community Reflects the Trinity", icon: "👥", body: "God in himself is community — three persons in eternal, perfect communion. We are made in the image of this triune God, which means we are made for communion, not isolation. The church is meant to be an icon of the Trinity: genuine diversity (different members, different gifts) in genuine unity (one body, one Spirit, one Lord). John 17:21 — 'that they may be one, as you, Father, are in me, and I am in you.'" },
  { title: "Love Is Grounded in the Trinity", icon: "❤️", body: "'God is love' (1 John 4:8) is not merely a description of how God treats us — it describes the eternal inner life of God. The Father has loved the Son before the foundation of the world (John 17:24). Love existed before creation because God in himself is a community of mutual self-giving. This is why love is the highest commandment: it imitates and participates in what God eternally is." },
  { title: "Mission Flows from the Trinity", icon: "🌍", body: "The Father sent the Son; the Son sent the Spirit; the Spirit sends the church (John 20:21). Christian mission is not a program we devise but participation in the outward movement of trinitarian love. The missio Dei (mission of God) is the sending structure of the Trinity — and we are caught up in it. Mission is not optional for the church; it is the overflow of who God is." },
  { title: "Worship Is Offered to the Trinity", icon: "🎵", body: "Christian worship is irreducibly trinitarian: we worship the Father, through Christ, in the Spirit. The great hymns — 'Holy, Holy, Holy,' 'Come Thou Almighty King,' the Gloria Patri — are doxologies to the Trinity. Worship that ignores any person of the Trinity is impoverished; worship that confuses the persons is heretical. True worship celebrates the three-in-one God revealed in Scripture." },
  { title: "Sanctification Is a Trinitarian Work", icon: "✨", body: "The Father predestines our sanctification (Romans 8:29), the Son provides the model and basis (2 Corinthians 3:18 — 'beholding the glory of the Lord, we are transformed'), and the Spirit applies that transformation from the inside (Romans 8:13). Growth in holiness is not self-improvement — it is cooperation with the triune God who is at work within us to make us like Jesus." },
];

const VIDEOS = [
  { videoId: "Sh72wgZEcKk", title: "R.C. Sproul: For the Doctrine of the Trinity", channel: "Ligonier Ministries", description: "Sproul explains why Christians must stand firm in proclaiming the one living and true God revealed in Scripture — Father, Son, and Holy Spirit." },
  { videoId: "LUCDrhB19cE", title: "Is the Trinity a Contradiction?", channel: "Ligonier Ministries", description: "Sproul addresses the charge that the doctrine of the Trinity is logically contradictory — why one God in three persons is a mystery but not an irrationality." },
  { videoId: "UqQyle8vq-0", title: "The Biblical Witness to the Trinity", channel: "Ligonier Ministries", description: "A careful examination of the biblical texts that reveal the triune nature of God — how NT authors came to understand the Father, Son, and Spirit as one God." },
  { videoId: "cJlenDjSsVA", title: "Early Church Heresies & the Trinity", channel: "Ligonier Ministries", description: "An examination of Arianism, Modalism, and Tritheism and how the early councils refined orthodox Trinitarian doctrine in response to these errors." },
  { videoId: "e9T2K8f6W3o", title: "One in Essence, Three in Person", channel: "Ligonier Ministries", description: "The precise formulation of Trinitarian doctrine — what it means to say God is one in essence yet three in person, and why that distinction matters for salvation." },
];

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "📖" },
  { id: "persons", label: "Three Persons", icon: "👥" },
  { id: "heresies", label: "Classic Errors", icon: "🚫" },
  { id: "scripture", label: "Scripture", icon: "📜" },
  { id: "application", label: "Application", icon: "💡" },
  { id: "videos", label: "Videos", icon: "🎬" },
];

export default function TrinityPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_trinity_tab", "overview");
  const [selectedPerson, setSelectedPerson] = usePersistedState("vine_trinity_selected_person", "father");
  const [expandedHeresy, setExpandedHeresy] = useState<number | null>(null);
  const [expandedApp, setExpandedApp] = useState<number | null>(null);

  const person = PERSONS.find(p => p.id === selectedPerson)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: `var(--font-jost, system-ui, sans-serif)` }}>
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0d0d1f 0%, #1a103a 40%, #0a1a0e 100%)`, paddingTop: 100, paddingBottom: 60, textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 16, letterSpacing: 8 }}>☁️ ✝️ 🕊️</div>
        <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, color: GOLD, marginBottom: 16, letterSpacing: 1 }}>
          SYSTEMATIC THEOLOGY
        </div>
        <h1 style={{ fontFamily: `var(--font-cormorant, Georgia, serif)`, fontSize: "clamp(34px, 6vw, 58px)", fontWeight: 700, margin: "0 auto 16px", maxWidth: 700, lineHeight: 1.1 }}>
          The Holy Trinity
        </h1>
        <p style={{ color: MUTED, fontSize: 17, maxWidth: 560, margin: "0 auto 24px", lineHeight: 1.75 }}>
          One God in three persons — Father, Son, and Holy Spirit. Not a mathematical puzzle to be solved, but the living reality at the center of all Christian worship, prayer, and mission.
        </p>
        <div style={{ display: "inline-block", background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "6px 20px", fontSize: 13, color: PURPLE }}>
          &ldquo;Go… baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo; — Matthew 28:19
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Tab nav */}
        <div style={{ display: "flex", gap: 4, margin: "32px 0", background: CARD, borderRadius: 14, padding: 5, border: `1px solid ${BORDER}`, overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, minWidth: 80, padding: "10px 6px", borderRadius: 10, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: `linear-gradient(135deg, ${CARD}, #1a1030)`, border: `1px solid ${PURPLE}40`, borderRadius: 16, padding: 32, marginBottom: 24 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 11, letterSpacing: 2, marginBottom: 12 }}>THE NICENE CREED — 325 / 381 AD</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: 0, fontStyle: "italic" }}>
                &ldquo;We believe in one God, the Father Almighty, Maker of heaven and earth… And in one Lord Jesus Christ, the only-begotten Son of God, begotten of the Father before all worlds; God of God, Light of Light, very God of very God; begotten, not made, being of one substance with the Father… And we believe in the Holy Spirit, the Lord and Giver of Life, who proceeds from the Father, who with the Father and the Son together is worshipped and glorified.&rdquo;
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16, marginBottom: 24 }}>
              {[
                { title: "One God", color: GOLD, icon: "🕯️", body: "The Trinity does not teach three gods. Scripture is unambiguous: 'Hear, O Israel: the LORD our God, the LORD is one' (Deuteronomy 6:4). Christian theology inherits Jewish monotheism and never abandons it. There is one divine essence, one divine nature, one divine being." },
                { title: "Three Persons", color: PURPLE, icon: "👥", body: "Yet this one God exists as three distinct persons — Father, Son, and Holy Spirit. The persons are not modes or masks but genuine distinctions within the one divine being. They speak to each other, send each other, love each other. The distinctions are real, eternal, and irreducible." },
                { title: "Co-Equal & Co-Eternal", color: GREEN, icon: "♾️", body: "No person of the Trinity is greater or lesser in being than another. The Son is not a lesser god; the Spirit is not a divine deputy. All three share fully and equally in the one divine nature. The Athanasian Creed: 'The Father incomprehensible, the Son incomprehensible, and the Holy Spirit incomprehensible.'" },
                { title: "Perichoresis", color: "#3B82F6", icon: "🔄", body: "The Greek perichoresis (Latin: circumincessio) describes the mutual indwelling of the three persons — each in the others, without confusion or separation. John 17:21: 'as you, Father, are in me, and I am in you.' The persons coinhere in an eternal dance of love and self-giving." },
              ].map((c, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${c.color}30`, borderRadius: 14, padding: 22 }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{c.icon}</div>
                  <h3 style={{ color: c.color, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 16 }}>Immanent vs. Economic Trinity</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
                <div style={{ background: BG, borderRadius: 10, padding: 18, border: `1px solid ${BORDER}` }}>
                  <div style={{ color: PURPLE, fontWeight: 800, fontSize: 14, marginBottom: 8 }}>Immanent Trinity</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>God as he is in himself — the eternal inner life and relations of the three persons apart from creation. The Father eternally begets the Son; the Spirit eternally proceeds. These relations are necessary, not contingent. They are what God is, not merely what God does.</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, border: `1px solid ${BORDER}` }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 8 }}>Economic Trinity</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>God as he acts in the history of creation and salvation — the Father creates and elects, the Son incarnates and redeems, the Spirit indwells and sanctifies. Karl Rahner's rule: 'The economic Trinity is the immanent Trinity and vice versa.' God's acts reveal his eternal being.</p>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
              {[
                { quote: "The Christian God is not a lonely God. Before creation, in the perfect fullness of the triune life, there was already love, joy, and speech — and none of it required us.", by: "Augustine of Hippo" },
                { quote: "If the Son is not truly God, he cannot save. A mere creature placed between us and God does not bridge the gap — it only moves it. The whole point of the incarnation is lost if he is not God.", by: "Athanasius of Alexandria" },
                { quote: "People ask, 'How can one be three?' I ask in return: How can love exist without a lover and a beloved? The Trinity is not a mystery we solve but a reality we inhabit.", by: "C.S. Lewis" },
              ].map((q, i) => (
                <div key={i} style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 12, padding: 20 }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, fontStyle: "italic", marginBottom: 10 }}>&ldquo;{q.quote}&rdquo;</p>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 12 }}>— {q.by}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PERSONS */}
        {activeTab === "persons" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The doctrine of the Trinity: one God who exists eternally as three distinct persons — Father, Son, and Holy Spirit — each fully God, sharing one divine essence, equal in power and glory. One what (essence), three whos (persons). Not three beings; not three masks.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
                {PERSONS.map(p => (
                  <button type="button" key={p.id} onClick={() => setSelectedPerson(p.id)}
                    style={{ padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedPerson === p.id ? p.color : BORDER}`, background: selectedPerson === p.id ? `${p.color}18` : CARD, color: selectedPerson === p.id ? p.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left", transition: "all 0.2s ease" }}>
                    {p.icon} {p.name}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${person.color}40`, borderRadius: 14, padding: 26 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: 36 }}>{person.icon}</span>
                    <div>
                      <h2 style={{ color: person.color, fontFamily: `var(--font-cormorant, Georgia, serif)`, fontWeight: 700, fontSize: 26, margin: 0 }}>{person.name}</h2>
                      <div style={{ color: MUTED, fontSize: 13 }}>{person.role}</div>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "16px 0" }}>{person.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                    {person.key_texts.map(t => (
                      <span key={t} style={{ background: `${person.color}15`, color: person.color, padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 14 }}>
                    <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>Common Misconception</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{person.misconception}</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 24, marginTop: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>The Council of Nicaea (325 AD)</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
                Emperor Constantine called 318 bishops to Nicaea (modern Turkey) to settle the Arian controversy — whether the Son was truly God or a semi-divine creature. Arius of Alexandria taught that the Son was the highest creature, the first thing God made, but not eternal and not of the same divine substance as the Father.
              </p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                The council rejected Arianism and affirmed that the Son is homoousios — the same substance as the Father. The Nicene Creed (expanded at Constantinople in 381) became the ecumenical statement of Christian faith held by Catholic, Orthodox, and Protestant Christians alike. Athanasius spent the next five decades defending its conclusions, being exiled five times by four emperors — earning the title <em>Athanasius contra mundum</em> (Athanasius against the world).
              </p>
            </div>
          </div>
        )}

        {/* HERESIES */}
        {activeTab === "heresies" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The church refined trinitarian doctrine through centuries of controversy — not because theologians loved arguing, but because getting God wrong has real consequences. Every major trinitarian error is still present in some form today. Click any heresy to expand it.
              </p>
            </div>
            {HERESIES.map((h, i) => (
              <div key={i} onClick={() => setExpandedHeresy(expandedHeresy === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedHeresy === i ? "#EF444460" : BORDER}`, borderRadius: 12, padding: 20, marginBottom: 10, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 17 }}>{h.name}</div>
                    <span style={{ background: "#EF444420", color: "#EF4444", padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{h.era}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 16 }}>{expandedHeresy === i ? "▲" : "▼"}</span>
                </div>
                {expandedHeresy === i && (
                  <div style={{ marginTop: 16 }}>
                    <div style={{ marginBottom: 12 }}>
                      <div style={{ color: "#EF4444", fontSize: 12, fontWeight: 700, marginBottom: 6 }}>THE ERROR</div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{h.error}</p>
                    </div>
                    <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 10, padding: 14 }}>
                      <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>THE ORTHODOX RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{h.orthodox}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 14, padding: 22, marginTop: 16 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>The Athanasian Creed (c. 5th century)</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
                &ldquo;We worship one God in Trinity, and Trinity in Unity; Neither confounding the Persons, nor dividing the Substance. For there is one Person of the Father, another of the Son, and another of the Holy Spirit. But the Godhead of the Father, Son, and Holy Spirit is all one; the Glory equal, the Majesty coeternal… Such as the Father is, such is the Son, and such is the Holy Spirit.&rdquo;
              </p>
            </div>
          </div>
        )}

        {/* SCRIPTURE */}
        {activeTab === "scripture" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The word &ldquo;Trinity&rdquo; does not appear in the Bible — but the reality it describes pervades every layer of Scripture, from Genesis to Revelation. The doctrine is not imposed on the Bible but drawn out of careful reading of its testimony to Father, Son, and Spirit.
              </p>
            </div>
            {SCRIPTURE_REFS.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 14 }}>
                <div style={{ marginBottom: 12 }}>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 700 }}>{s.ref}</span>
                </div>
                <blockquote style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 10, padding: 18, margin: "0 0 14px", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;{s.text}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.note}</p>
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The Trinity is not an abstract theological puzzle — it is the grammar of Christian life. Prayer, community, mission, love, worship, and growth all look different because God is triune.
              </p>
            </div>
            {APPLICATIONS.map((a, i) => (
              <div key={i} onClick={() => setExpandedApp(expandedApp === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedApp === i ? `${GREEN}50` : BORDER}`, borderRadius: 14, padding: 22, marginBottom: 12, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 24 }}>{a.icon}</span>
                    <h3 style={{ color: expandedApp === i ? GREEN : TEXT, fontWeight: 800, fontSize: 17, margin: 0, transition: "all 0.2s ease" }}>{a.title}</h3>
                  </div>
                  <span style={{ color: MUTED }}>{expandedApp === i ? "▲" : "▼"}</span>
                </div>
                {expandedApp === i && (
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginTop: 14, marginBottom: 0 }}>{a.body}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Sermons, lectures, and teachings from trusted scholars and pastors on the doctrine of the Trinity.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                  <div style={{ padding: "16px 20px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
