"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Prophecy Builds Up",
  "Mind and Spirit",
  "Orderly Worship",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Spiritual Gifts in Orderly Worship",
    reference: "1 Corinthians 14",
    paragraphs: [
      "First Corinthians 14 brings Paul&rsquo;s great discussion of spiritual gifts to its practical climax. Having celebrated love as the more excellent way in the previous chapter, Paul now turns to the question of how the gifts of the Spirit should function when believers gather for corporate worship. His controlling concern throughout is the upbuilding of the church &mdash; the gifts are given not for private display but for the strengthening of the whole body.",
      "The chapter opens with a clear exhortation: &ldquo;Pursue love, and earnestly desire the spiritual gifts, especially that you may prophesy&rdquo; (v.1). Paul does not despise tongues, but he ranks prophecy higher in the assembly because it speaks intelligibly to the gathered people. The one who speaks in a tongue, uninterpreted, edifies only himself; the one who prophesies builds up the church (vv.1&ndash;25).",
      "Paul reaches for everyday illustrations &mdash; the flute, the harp, the bugle &mdash; to make his point. If a musical instrument gives indistinct sounds, no one can recognize the tune; if the bugle gives an uncertain call, no one prepares for battle. So too with unintelligible speech in worship: &ldquo;you will be speaking into the air&rdquo; (v.9). The goal of every gift in the gathering is clear communication that serves others.",
      "He then weaves together mind and spirit, insisting that worship engage the whole person. &ldquo;I will pray with my spirit, but I will pray with my mind also&rdquo; (v.15). He would rather speak five intelligible words than ten thousand in a tongue. Tongues, he notes, function as a sign for unbelievers, while prophecy can pierce the heart of an outsider so that he falls down and worships, declaring that God is really present (vv.13&ndash;25).",
      "The final movement of the chapter offers concrete guidelines for orderly worship (vv.26&ndash;40). Each gift is to be used in turn; tongues are to be interpreted; prophecies are to be weighed; and everything is to be done for building up. The governing principle is unforgettable: &ldquo;God is not a God of confusion but of peace&rdquo; (v.33), and so &ldquo;all things should be done decently and in order&rdquo; (v.40).",
      "Taken as a whole, 1 Corinthians 14 is a charter for worship that is both Spirit-filled and ordered, both free and edifying. Paul refuses to choose between fervent spiritual life and careful order, holding the two together under the banner of love. The chapter calls every congregation to desire the gifts earnestly, to use them for the good of all, and to let peace rather than chaos mark the people of God when they assemble.",
    ],
  },
  {
    id: "Prophecy Builds Up",
    heading: "Prophecy Builds Up the Church",
    reference: "1 Corinthians 14:1&ndash;12",
    paragraphs: [
      "Paul sets the tone for the whole chapter with his opening charge: &ldquo;Pursue love, and earnestly desire the spiritual gifts, especially that you may prophesy&rdquo; (v.1). Love is the soil in which the gifts must grow, and within that pursuit Paul gives a clear priority. Prophecy is to be especially desired, not because tongues are worthless, but because in the gathered assembly prophecy serves the many rather than the one.",
      "He explains the difference plainly: &ldquo;For one who speaks in a tongue speaks not to men but to God; for no one understands him, but he utters mysteries in the Spirit&rdquo; (v.2). The one who speaks in a tongue, without interpretation, edifies himself. But &ldquo;the one who prophesies speaks to people for their upbuilding and encouragement and consolation&rdquo; (v.3). Prophecy is directed outward, toward the strengthening of others.",
      "The contrast is summed up in a memorable line: &ldquo;The one who speaks in a tongue builds up himself, but the one who prophesies builds up the church&rdquo; (v.4). Paul is not forbidding tongues &mdash; he even wishes all spoke in them &mdash; but he longs for the church to be built up. His pastoral heart prizes whatever serves the whole body over whatever serves only the individual.",
      "To drive the point home, Paul turns to the world of music. &ldquo;If even lifeless instruments, such as the flute or the harp, do not give distinct notes, how will anyone know what is played?&rdquo; (v.7). A melody that cannot be recognized communicates nothing. The illustration exposes the futility of speech in worship that no one can understand &mdash; it produces sound without meaning, noise without nourishment.",
      "Then comes the sharper image of the bugle: &ldquo;And if the bugle gives an indistinct sound, who will get ready for battle?&rdquo; (v.8). The trumpet call must be clear, or the soldiers will not arm themselves. So with the tongue: &ldquo;If you in a tongue utter speech that is not intelligible, how will anyone know what is said? For you will be speaking into the air&rdquo; (v.9). Unintelligible words simply dissolve, accomplishing nothing.",
      "Paul concludes this section with a fresh exhortation aimed straight at Corinthian zeal: &ldquo;So with yourselves, since you are eager for manifestations of the Spirit, strive to excel in building up the church&rdquo; (v.12). He does not dampen their eagerness but redirects it. Let their hunger for the Spirit be channeled toward the one aim that matters most &mdash; the upbuilding of the gathered people of God in love.",
    ],
  },
  {
    id: "Mind and Spirit",
    heading: "Mind and Spirit; A Sign to Unbelievers",
    reference: "1 Corinthians 14:13&ndash;25",
    paragraphs: [
      "Paul now offers a remedy for the limitation of uninterpreted tongues: &ldquo;Therefore, one who speaks in a tongue should pray that he may interpret&rdquo; (v.13). The gift is not to be discarded but made useful through interpretation. He explains the problem from his own experience: &ldquo;If I pray in a tongue, my spirit prays but my mind is unfruitful&rdquo; (v.14). Worship that bypasses the understanding leaves part of the person idle.",
      "The solution holds the two together: &ldquo;I will pray with my spirit, but I will pray with my mind also; I will sing praise with my spirit, but I will sing with my mind also&rdquo; (v.15). Paul refuses a false choice between heartfelt fervor and engaged understanding. True worship enlists both. Otherwise, he asks, how can an outsider say the &ldquo;Amen&rdquo; to a thanksgiving he cannot comprehend (vv.16&ndash;17)?",
      "Paul is no stranger to tongues &mdash; indeed he thanks God that he speaks in them more than all of them. Yet his estimate of their place in public worship is striking: &ldquo;In church I would rather speak five words with my mind, in order to instruct others, than ten thousand words in a tongue&rdquo; (v.19). The arithmetic is deliberately lopsided to underscore the surpassing value of intelligible instruction.",
      "He then issues a gentle rebuke wrapped in an appeal to maturity: &ldquo;Brothers, do not be children in your thinking. Be infants in evil, but in your thinking be mature&rdquo; (v.20). To prize spectacle over substance is childish; to desire what truly builds others up is the mark of grown-up faith. Paul calls them to think clearly about the purpose of the gifts in the life of the church.",
      "Citing Isaiah, Paul observes that &ldquo;tongues are a sign not for believers but for unbelievers, while prophecy is a sign not for unbelievers but for believers&rdquo; (v.22). Yet he presses a sobering scenario: if outsiders enter and find everyone speaking in tongues, &ldquo;will they not say that you are out of your minds?&rdquo; (v.23). Unintelligible ecstasy can repel the very people the church hopes to reach.",
      "By contrast, prophecy has power to convict and convert: &ldquo;If all prophesy, and an unbeliever or outsider enters, he is convicted by all, he is called to account by all, the secrets of his heart are disclosed, and so, falling on his face, he will worship God and declare that God is really among you&rdquo; (vv.24&ndash;25). Intelligible, Spirit-empowered speech lays the heart bare and draws the outsider to bow before the living God.",
    ],
  },
  {
    id: "Orderly Worship",
    heading: "Orderly Worship",
    reference: "1 Corinthians 14:26&ndash;40",
    paragraphs: [
      "Paul now turns from principle to practice with a vivid picture of the gathered church: &ldquo;What then, brothers? When you come together, each one has a hymn, a lesson, a revelation, a tongue, or an interpretation&rdquo; (v.26). The assembly is richly varied, with many members contributing. But Paul gives the test that governs every contribution: &ldquo;Let all things be done for building up.&rdquo;",
      "He lays down clear guidelines for tongues: &ldquo;If any speak in a tongue, let there be only two or at most three, and each in turn, and let someone interpret. But if there is no one to interpret, let each of them keep silent in church and speak to himself and to God&rdquo; (vv.27&ndash;28). Order and intelligibility are not optional extras but the conditions under which the gift may be exercised publicly.",
      "The same care applies to prophecy: &ldquo;Let two or three prophets speak, and let the others weigh what is said&rdquo; (v.29). The gift is to be exercised with discernment, the congregation actively testing the message. And there is to be mutual yielding: &ldquo;If a revelation is made to another sitting there, let the first be silent&rdquo; (v.30). No one monopolizes; each gives way to the other in love.",
      "The aim of this ordered freedom is the good of all: &ldquo;For you can all prophesy one by one, so that all may learn and all be encouraged&rdquo; (v.31). And lest anyone claim he cannot help his outbursts, Paul insists, &ldquo;The spirits of prophets are subject to prophets&rdquo; (v.32). Genuine inspiration does not overwhelm self-control; the Spirit who gives the gift also enables its orderly use.",
      "At the heart of these instructions stands the great theological reason: &ldquo;For God is not a God of confusion but of peace&rdquo; (v.33). The character of worship should mirror the character of God. Where chaos reigns, something is amiss; where peace and order prevail, the assembly reflects the God it gathers to honor. Paul addresses several matters of order regarding speaking in the assembly so that all may be edified.",
      "Paul brings the chapter to its conclusion by holding freedom and order together: &ldquo;So, my brothers, earnestly desire to prophesy, and do not forbid speaking in tongues. But all things should be done decently and in order&rdquo; (vv.39&ndash;40). He neither quenches the Spirit nor unleashes confusion. This balanced charge remains the enduring guide for worship that is at once alive with the Spirit and marked by peace.",
    ],
  },
];

const videoItems = [
  { videoId: "Lp4kT9dW2vH", title: "1 Corinthians 14 - Spiritual Gifts in Orderly Worship" },
  { videoId: "Bn6rZ3xK8Jm", title: "Prophecy Builds Up the Church - Speaking Into the Air" },
  { videoId: "Wq2cH7nP5Mr", title: "Pray With the Spirit and the Mind Also" },
  { videoId: "Gz8dV1bQ4Nk", title: "Decently and in Order - A God of Peace" },
];

export default function FirstCorinthians14GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Corinthians Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 Corinthians 14
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul gives practical instruction on the use of spiritual gifts in corporate worship, ranking prophecy above uninterpreted tongues because it builds up the church. He calls believers to engage both spirit and mind, and to let everything be done decently and in order &mdash; for God is not a God of confusion but of peace.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of 1 Corinthians 14 through visual teaching on the priority of prophecy in building up the church, the call to worship with both spirit and mind, and Paul&rsquo;s vision of worship that is Spirit-filled yet decent and orderly.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Spirit-Filled and Orderly Worship</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Corinthians 14 stands as a charter for worship that is both alive with the Spirit and marked by peace. Paul refuses to choose between fervent spiritual life and careful order, holding the two together under the banner of love &mdash; calling every congregation to desire the gifts earnestly, to use them for the good of all, and to let everything be done decently and in order.
          </p>
        </div>
      </main>
    </div>
  );
}
