"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SERIF = "var(--font-cormorant, Georgia, serif)";

type Tab = "overview" | "lines" | "why" | "videos";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "lines", label: "Line by Line" },
  { id: "why", label: "Why Creeds Matter" },
  { id: "videos", label: "Videos" },
];

const CREED_TEXT = [
  "I believe in God the Father Almighty,",
  "Maker of heaven and earth;",
  "And in Jesus Christ his only Son our Lord;",
  "who was conceived by the Holy Spirit,",
  "born of the Virgin Mary;",
  "suffered under Pontius Pilate,",
  "was crucified, dead, and buried;",
  "he descended into hell;",
  "the third day he rose again from the dead;",
  "he ascended into heaven,",
  "and sitteth on the right hand of God the Father Almighty;",
  "from thence he shall come to judge the living and the dead.",
  "I believe in the Holy Spirit;",
  "the holy catholic church;",
  "the communion of saints;",
  "the forgiveness of sins;",
  "the resurrection of the body;",
  "and the life everlasting. Amen.",
];

type Article = {
  line: string;
  title: string;
  color: string;
  scripture: string;
  explanation: string;
};

const ARTICLES: Article[] = [
  {
    line: "I believe in God the Father Almighty, Maker of heaven and earth.",
    title: "God the Father, the Creator",
    color: PURPLE,
    scripture: "Genesis 1:1; Matthew 6:9",
    explanation:
      "The creed opens with the first person of the Trinity. To call God 'Father' is to confess both his fatherly relationship to the Son from all eternity and his fatherly care over those who are his children by grace. 'Almighty' affirms that nothing lies outside his power and sovereignty. 'Maker of heaven and earth' declares that all things — visible and invisible — owe their existence to him. Against ancient ideas that matter was evil or that the world was a cosmic accident, the creed insists that the one God made everything, and made it good. This single line grounds our security: the Father who rules all things is good and powerful, and we are his.",
  },
  {
    line: "And in Jesus Christ his only Son our Lord.",
    title: "Jesus Christ, the Son and Lord",
    color: GREEN,
    scripture: "John 3:16; Romans 10:9",
    explanation:
      "The longest section of the creed is devoted to Jesus, the heart of the Christian faith. 'Jesus' (Yahweh saves) names his saving mission; 'Christ' (Anointed One) names him as the promised Messiah. He is God's 'only Son' — unique, eternal, of the same divine nature as the Father, not one son among many. And he is 'our Lord' — the rightful ruler to whom every believer owes allegiance. To confess Jesus as Lord was the earliest and most costly Christian confession, made in a world that demanded loyalty to Caesar. This line establishes both who Jesus is (the divine Son) and what he is to us (our Lord).",
  },
  {
    line: "Who was conceived by the Holy Spirit, born of the Virgin Mary.",
    title: "The Incarnation and Virgin Birth",
    color: "#3B82F6",
    scripture: "Luke 1:35; Matthew 1:18-23",
    explanation:
      "Here the creed confesses the incarnation — that the eternal Son took on human nature. His conception 'by the Holy Spirit' affirms that his coming was a divine act, not the result of ordinary human generation. 'Born of the Virgin Mary' affirms that he was truly human, entering the world through a real mother, sharing our flesh and blood. Together these phrases guard two truths essential to salvation: Jesus is fully God and fully man. As fully God, he is able to save; as fully man, he is able to stand in our place. The virgin birth signals that salvation comes by God's initiative, breaking into history from above.",
  },
  {
    line: "Suffered under Pontius Pilate, was crucified, dead, and buried; he descended into hell.",
    title: "The Suffering, Death, and Descent",
    color: "#EF4444",
    scripture: "Mark 15; 1 Peter 3:18-19",
    explanation:
      "The mention of Pontius Pilate roots the gospel firmly in history — these are real events, datable to a known Roman governor, not myth. Jesus genuinely 'suffered,' was 'crucified, dead, and buried.' He did not merely appear to die; he truly died and was laid in a tomb. The phrase 'he descended into hell' is the most debated line of the creed. The Latin 'descendit ad inferna' can mean 'descended to the dead' (the realm of the departed). Interpretations vary: some understand it as affirming that Jesus truly died and entered the state of death; others, drawing on 1 Peter 3:18-19, see Christ proclaiming his victory to the spirits; the Reformer John Calvin took it as a figurative expression of the spiritual anguish Christ bore in our place. What all agree on is the depth of Christ's identification with us — he went all the way down into death itself.",
  },
  {
    line: "The third day he rose again from the dead.",
    title: "The Resurrection",
    color: PURPLE,
    scripture: "1 Corinthians 15:3-4; Luke 24",
    explanation:
      "On the third day, Jesus rose bodily from the grave — the cornerstone of the Christian faith. The resurrection is God's vindication of Jesus, the proof that his sacrifice was accepted and that death has been defeated. 'If Christ has not been raised,' Paul writes, 'your faith is futile and you are still in your sins' (1 Corinthians 15:17). But he has been raised, the firstfruits of a great harvest. The resurrection is not a metaphor for renewed hope or the survival of his teachings; it is a historical, bodily event attested by many witnesses. Because Jesus rose, those united to him by faith share in his risen life now and will share in his bodily resurrection at the last day.",
  },
  {
    line: "He ascended into heaven, and sitteth on the right hand of God the Father Almighty.",
    title: "The Ascension and Session",
    color: "#F59E0B",
    scripture: "Acts 1:9-11; Hebrews 1:3",
    explanation:
      "Forty days after rising, Jesus ascended into heaven. The ascension is not Jesus' disappearance but his enthronement. To sit at 'the right hand' of the Father is the place of highest honor and authority — the King taking his throne. From there he reigns over all things, intercedes for his people as our Great High Priest, and pours out the Holy Spirit. The ascension means that a human being — our brother in the flesh — now rules the universe, and that our salvation is secure in the hands of one who lives forever to pray for us. He is not absent; he is enthroned.",
  },
  {
    line: "From thence he shall come to judge the living and the dead.",
    title: "The Return and Final Judgment",
    color: "#6366F1",
    scripture: "Acts 17:31; 2 Timothy 4:1",
    explanation:
      "The creed looks forward to the second coming of Christ. The same Jesus who ascended will return visibly to judge 'the living and the dead' — all humanity, those alive at his coming and those who have died. This is both sobering and comforting. It is sobering because every person is accountable to God and will give an account. It is comforting because the Judge is the one who loved us and gave himself for us; the final word over history belongs to the crucified and risen Lord. His return will bring justice to a broken world, vindication for the wronged, and the consummation of God's kingdom.",
  },
  {
    line: "I believe in the Holy Spirit.",
    title: "God the Holy Spirit",
    color: GREEN,
    scripture: "John 14:26; Acts 2",
    explanation:
      "The creed now turns to the third person of the Trinity. The Holy Spirit is not an impersonal force but fully God, equal with the Father and the Son. He was active in creation, spoke through the prophets, and was poured out on the church at Pentecost. The Spirit applies the work of Christ to believers: he convicts of sin, gives new birth, indwells God's people, produces spiritual fruit, distributes gifts, and assures us that we belong to God. This brief but weighty line confesses that the God who is over us (the Father) and with us (the Son) is also within us (the Spirit).",
  },
  {
    line: "The holy catholic church, the communion of saints.",
    title: "The Church and the Communion of Saints",
    color: "#3B82F6",
    scripture: "Ephesians 4:4-6; Hebrews 12:1",
    explanation:
      "'The holy catholic church' is a frequently misunderstood phrase. Here 'catholic' (from the Greek 'katholikos') does not mean the Roman Catholic Church; it means 'universal' or 'whole.' The line confesses the one universal church — all true believers of every time, place, and tradition, made holy in Christ. 'The communion of saints' expresses the deep fellowship shared by all of God's people: we are united to one another in Christ across denominations, nations, and even across death itself, joined with the great cloud of witnesses who have gone before. To believe in the church is to confess that the Christian life is not lived alone but within the family of God.",
  },
  {
    line: "The forgiveness of sins.",
    title: "The Forgiveness of Sins",
    color: GREEN,
    scripture: "1 John 1:9; Ephesians 1:7",
    explanation:
      "At the center of the gospel stands the forgiveness of sins. Through the death and resurrection of Christ, God forgives all who turn to him in faith, no longer counting their sins against them. This forgiveness is full, free, and final — not earned by good works but received as a gift of grace. It addresses the deepest human problem: our guilt before a holy God. To confess 'the forgiveness of sins' is to renounce all self-justification and to rest entirely on the mercy of God in Christ. It is the doorway into every other blessing of salvation.",
  },
  {
    line: "The resurrection of the body, and the life everlasting. Amen.",
    title: "The Resurrection of the Body and Life Everlasting",
    color: PURPLE,
    scripture: "1 Corinthians 15:42-44; Revelation 21:1-4",
    explanation:
      "The creed ends with the Christian hope. 'The resurrection of the body' affirms that salvation is not an escape from the body into a disembodied heaven, but the redemption of our whole selves. As Christ rose bodily, so believers will be raised with glorified, imperishable bodies at his return. 'The life everlasting' is not endless existence but the fullness of life with God in the new heavens and new earth, where there will be no more death, mourning, crying, or pain. The final 'Amen' — meaning 'so be it, it is true' — seals the whole confession. The Christian story ends not in death but in resurrection and unending joy in the presence of God.",
  },
];

export default function ApostlesCreedPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_apostles-creed_tab", "overview");
  const [selected, setSelected] = useState<string | null>(null);

  const videos = [
    {
      videoId: "rUNCs5MLxqU",
      title: "What Is the Apostles' Creed?",
      channel: "Ligonier Ministries",
      description:
        "An introduction to the Apostles' Creed, its origins, and how it summarizes the essential beliefs of the Christian faith.",
    },
    {
      videoId: "OBpb5HnYbpE",
      title: "The Apostles' Creed Explained",
      channel: "Bible Teaching",
      description:
        "A walkthrough of the creed article by article, unpacking what each line confesses about God, Christ, the Spirit, and the church.",
    },
    {
      videoId: "9d-aLT4nQ9w",
      title: "Why Do We Need Creeds?",
      channel: "Theology Explained",
      description:
        "An examination of the role of creeds and confessions in the Christian life and why the ancient creeds still matter today.",
    },
    {
      videoId: "x6t9N6Gd6dY",
      title: "He Descended Into Hell — What Does It Mean?",
      channel: "Doctrine & Devotion",
      description:
        "A study of the most debated line of the Apostles' Creed and the range of historic Christian interpretations.",
    },
  ];

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>
        {/* Hero */}
        <header style={{ textAlign: "center", padding: "56px 0 32px" }}>
          <span
            style={{
              display: "inline-block",
              border: `1px solid ${BORDER}`,
              borderRadius: 999,
              padding: "6px 16px",
              fontSize: 13,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: GREEN,
              background: CARD,
            }}
          >
            The Ancient Faith
          </span>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 600,
              margin: "20px 0 12px",
              lineHeight: 1.1,
            }}
          >
            The Apostles&rsquo; Creed
          </h1>
          <p style={{ color: MUTED, fontSize: 18, maxWidth: 700, margin: "0 auto", lineHeight: 1.6 }}>
            For nearly two thousand years, Christians around the world have confessed their faith in
            the words of the Apostles&rsquo; Creed. In a few short lines it gathers the essential story
            of the gospel — Father, Son, and Holy Spirit; creation, redemption, and the life to come.
          </p>
        </header>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? BG : TEXT,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <section style={{ display: "grid", gap: 24 }}>
            {/* Full creed text */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "32px 28px",
                textAlign: "center",
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: 26, margin: "0 0 20px", color: GREEN }}>
                The Apostles&rsquo; Creed
              </h2>
              <div style={{ fontFamily: SERIF, fontSize: 21, lineHeight: 1.7, color: TEXT, maxWidth: 640, margin: "0 auto" }}>
                {CREED_TEXT.map((line) => (
                  <p key={line} style={{ margin: "0 0 4px" }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 30, margin: "0 0 14px" }}>A Brief History</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 14px" }}>
                Despite its name, the Apostles&rsquo; Creed was not written by the twelve apostles. The
                legend that each apostle contributed one clause arose in the medieval period and is not
                historical. Rather, the creed is so called because it faithfully summarizes the
                <em> apostolic</em> teaching handed down in the early church. Its roots reach back to the
                second century in the &ldquo;Old Roman Symbol,&rdquo; a baptismal confession used in Rome.
                Converts preparing for baptism would learn and recite such confessions of faith.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 14px" }}>
                Over the following centuries the wording was gradually expanded and standardized, reaching
                its familiar form by roughly the eighth century. Unlike the Nicene Creed (325/381), which
                was forged in the heat of theological controversy by church councils, the Apostles&rsquo;
                Creed grew organically out of the church&rsquo;s baptismal and catechetical practice. It
                remains one of the most widely used confessions in the world, embraced across Catholic,
                Orthodox-influenced, and Protestant traditions alike.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>
                The creed has a clear Trinitarian structure: it confesses faith in God the Father (and
                creation), in God the Son (and redemption), and in God the Holy Spirit (and the church,
                salvation, and the life to come). This three-fold shape mirrors the baptismal formula of
                Matthew 28:19 — baptizing &ldquo;in the name of the Father and of the Son and of the Holy
                Spirit.&rdquo;
              </p>
            </div>

            <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {[
                { t: "The Father", d: "Creator of heaven and earth, almighty and sovereign over all things.", c: PURPLE },
                { t: "The Son", d: "Conceived, born, suffered, crucified, risen, ascended, and returning to judge.", c: GREEN },
                { t: "The Spirit & the Church", d: "The Holy Spirit, the universal church, forgiveness, resurrection, and life everlasting.", c: "#3B82F6" },
              ].map((b) => (
                <div key={b.t} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                  <h3 style={{ fontFamily: SERIF, fontSize: 21, margin: "0 0 8px", color: b.c }}>{b.t}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: 15 }}>{b.d}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Line by Line */}
        {activeTab === "lines" && (
          <section style={{ display: "grid", gap: 18 }}>
            <p style={{ color: MUTED, textAlign: "center", margin: "0 0 8px", lineHeight: 1.6 }}>
              Click any article of the creed to explore its meaning.
            </p>
            {ARTICLES.map((a) => {
              const open = selected === a.title;
              return (
                <div
                  key={a.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${open ? a.color : BORDER}`,
                    borderRadius: 14,
                    padding: 24,
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                  onClick={() => setSelected(open ? null : a.title)}
                >
                  <p
                    style={{
                      fontFamily: SERIF,
                      fontSize: 21,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.5,
                      margin: 0,
                      borderLeft: `3px solid ${a.color}`,
                      paddingLeft: 16,
                    }}
                  >
                    &ldquo;{a.line}&rdquo;
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, flexWrap: "wrap", gap: 8 }}>
                    <h3 style={{ fontSize: 16, margin: 0, color: a.color, fontWeight: 700 }}>{a.title}</h3>
                    <span style={{ color: MUTED, fontSize: 13 }}>{a.scripture}</span>
                  </div>

                  {open && (
                    <div style={{ marginTop: 16, borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
                      <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{a.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* Why Creeds Matter */}
        {activeTab === "why" && (
          <section style={{ display: "grid", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 30, margin: "0 0 14px" }}>Why Creeds Matter</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 14px" }}>
                Some Christians are wary of creeds, preferring &ldquo;no creed but the Bible.&rdquo; Yet
                creeds have always served the church not as rivals to Scripture but as faithful summaries
                of it. A creed is simply a clear, shared statement of what the Bible teaches on the most
                essential matters. The word &ldquo;creed&rdquo; comes from the Latin <em>credo</em> —
                &ldquo;I believe.&rdquo; To recite a creed is to say, with the whole church across the ages,
                &ldquo;this is what I believe.&rdquo;
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>
                The earliest creeds appear within the New Testament itself — short confessions such as
                &ldquo;Jesus is Lord&rdquo; (Romans 10:9) and the summary Paul &ldquo;received&rdquo; and
                &ldquo;delivered&rdquo; in 1 Corinthians 15:3-5. From the beginning, the church needed
                concise ways to confess its faith, teach new believers, and guard the gospel.
              </p>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              {[
                {
                  t: "They Define the Faith",
                  d: "Creeds draw the boundaries of essential Christian belief, distinguishing the apostolic faith from distortions. Many early creeds arose precisely to refute heresies that denied the deity of Christ, the reality of his humanity, or the goodness of creation.",
                },
                {
                  t: "They Unite the Church",
                  d: "When believers across denominations, languages, and centuries confess the same creed, they declare a shared faith. The creed is a bond of unity, reminding us that we belong to one universal ('catholic') church far larger than our own congregation.",
                },
                {
                  t: "They Teach and Catechize",
                  d: "For most of church history, the Apostles' Creed has been a primary tool for instructing new believers and children in the faith. Its memorable form makes the core of the gospel learnable and repeatable from generation to generation.",
                },
                {
                  t: "They Anchor Worship",
                  d: "Reciting the creed in worship is an act of praise and allegiance. It lifts our eyes from our private concerns to the great objective truths of who God is and what he has done, grounding our feelings in unshakable realities.",
                },
                {
                  t: "They Guard Across Generations",
                  d: "Creeds hand the faith down intact. By confessing what the church has always believed, we resist the pull to remake Christianity in the image of our own age, and we keep faith with those who went before and those who will come after.",
                },
              ].map((b) => (
                <div key={b.t} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, borderLeft: `4px solid ${GREEN}` }}>
                  <h3 style={{ fontFamily: SERIF, fontSize: 21, margin: "0 0 8px", color: GREEN }}>{b.t}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{b.d}</p>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 26, margin: "0 0 14px" }}>Two Debated Phrases</h2>
              <h3 style={{ fontSize: 17, margin: "0 0 6px", color: "#3B82F6" }}>&ldquo;The holy catholic church&rdquo;</h3>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 18px" }}>
                Many are surprised to confess belief in the &ldquo;catholic&rdquo; church. But here the
                word does not refer to the Roman Catholic Church as a denomination. &ldquo;Catholic&rdquo;
                comes from the Greek <em>katholikos</em>, meaning &ldquo;universal&rdquo; or
                &ldquo;according to the whole.&rdquo; The creed confesses the one universal church — the
                whole body of true believers of every age, place, and tradition. Protestants, Catholics,
                and Orthodox alike confess this line, each affirming the worldwide fellowship of all who
                belong to Christ.
              </p>
              <h3 style={{ fontSize: 17, margin: "0 0 6px", color: "#EF4444" }}>&ldquo;He descended into hell&rdquo;</h3>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>
                This is the creed&rsquo;s most debated line, and it did not appear in the earliest versions.
                The Latin <em>descendit ad inferna</em> can be translated &ldquo;descended to the dead&rdquo;
                rather than &ldquo;hell&rdquo; in the modern sense of a place of torment. Historic
                interpretations vary: (1) it simply affirms that Jesus truly died and entered the realm of
                the dead; (2) drawing on 1 Peter 3:18-19, that Christ proclaimed his triumph to the spirits;
                (3) Calvin&rsquo;s view, that it describes the spiritual anguish and God-forsakenness Christ
                endured on the cross in our place. Across these readings, the shared truth is that Christ
                fully entered the depths of death and conquered it for us.
              </p>
            </div>

            <blockquote
              style={{
                fontFamily: SERIF,
                fontSize: 23,
                fontStyle: "italic",
                textAlign: "center",
                color: TEXT,
                borderLeft: `3px solid ${GREEN}`,
                padding: "8px 24px",
                margin: "8px auto",
                maxWidth: 760,
                lineHeight: 1.5,
              }}
            >
              &ldquo;Now I would remind you, brothers, of the gospel I preached to you... that Christ died
              for our sins in accordance with the Scriptures, that he was buried, that he was raised on the
              third day.&rdquo;
              <footer style={{ fontSize: 16, color: MUTED, marginTop: 10, fontStyle: "normal" }}>
                — 1 Corinthians 15:1, 3-4 (an early creed within Scripture)
              </footer>
            </blockquote>
          </section>
        )}

        {/* Videos */}
        {activeTab === "videos" && (
          <section style={{ display: "grid", gap: 22, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {videos.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <iframe
                  width="100%"
                  style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`}
                  title={v.title}
                  allowFullScreen
                />
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontFamily: SERIF, fontSize: 20, margin: "0 0 6px" }}>{v.title}</h3>
                  <p style={{ color: GREEN, fontSize: 13, margin: "0 0 10px", fontWeight: 600 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
