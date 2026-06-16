"use client";

import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const videoItems = [
  { videoId: "1tnv8Ag6_2I", title: "Hebrews Overview - The Book of Hebrews Explained" },
  { videoId: "ZQV0pToOzdc", title: "Jesus Our Great High Priest - Hebrews 4-5" },
  { videoId: "qvkCPb4_xVU", title: "Who Was Melchizedek? The Mysterious Priest-King" },
  { videoId: "9p3Tx0gP3vY", title: "Learning Obedience Through Suffering - Hebrews 5" },
];

export default function Hebrews5GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <main style={{ maxWidth: 920, margin: "0 auto", padding: "2.5rem 1.1rem 5rem" }}>
        {/* Hero */}
        <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: ".35rem 1rem",
              borderRadius: 999,
              border: `1px solid ${GOLD}`,
              background: `${GOLD}1A`,
              color: GOLD,
              fontSize: ".78rem",
              fontWeight: 700,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              marginBottom: "1.1rem",
            }}
          >
            Chapter Guide - Hebrews 5
          </span>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.7rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              margin: "0 0 .9rem",
              color: TEXT,
            }}
          >
            The High Priesthood of Christ
          </h1>
          <p
            style={{
              color: MUTED,
              maxWidth: 660,
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "1.02rem",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;You are a priest forever, after the order of Melchizedek.&rdquo; &mdash; Psalm 110:4, quoted in Hebrews 5:6. A study of appointment, sympathy, reverent submission, and the maturity to which every believer is called.",
            }}
          />
        </header>

        {/* Sticky tab nav */}
        <nav
          style={{
            position: "sticky",
            top: "var(--header-height, 80px)",
            zIndex: 10,
            display: "flex",
            flexWrap: "wrap",
            gap: ".5rem",
            justifyContent: "center",
            padding: ".75rem 0",
            background: `${BG}E6`,
            backdropFilter: "blur(8px)",
            marginBottom: "2rem",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: ".5rem 1.15rem",
                borderRadius: 999,
                border: `1px solid ${activeTab === t ? GOLD : BORDER}`,
                background: activeTab === t ? `${GOLD}22` : CARD,
                color: activeTab === t ? GOLD : MUTED,
                fontWeight: activeTab === t ? 700 : 500,
                cursor: "pointer",
                fontSize: ".86rem",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {/* OVERVIEW */}
        {activeTab === "Overview" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={panel}>
              <h2 style={h2(GOLD)}>A High Priest for a People Who Cannot Reach God</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Hebrews 5 stands at the heart of the letter&rsquo;s central argument: that the Lord Jesus Christ is the great High Priest who answers the deepest need of humanity. The whole sermon-letter is written to a community tempted to drift back from Christ into the familiar structures of the old covenant. The writer&rsquo;s answer is not to belittle the Levitical priesthood but to show that Jesus fulfills and surpasses it. In this chapter the author lays the foundation for the long meditation on Melchizedek that will reach its climax in chapters 7 through 10.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The argument moves in two movements. First, verses 1 through 10 set out what a high priest is and demonstrate that Christ meets every qualification &mdash; not by self-promotion but by divine appointment, and not from a distance but through genuine human experience of weakness, prayer, and suffering. Second, verses 11 through 14 turn sharply to rebuke the readers for their spiritual immaturity, warning that they are still drinking milk when they ought by now to be teaching others. The chapter therefore joins lofty Christology to urgent pastoral exhortation.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The pivot is the figure of Melchizedek, the mysterious priest-king of Genesis 14 who blesses Abraham and then vanishes from the narrative without genealogy, beginning, or end. Psalm 110, the most quoted Old Testament passage in the New Testament, declares that the coming Messiah will be a priest of that ancient and superior order. Hebrews seizes on this to prove that Jesus holds a priesthood greater than Aaron&rsquo;s, established by an oath, and lasting forever.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(TEAL)}>The Shape of the Chapter</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Verses 1 through 4 describe the office of high priest in general terms: he is chosen from among men, appointed to act on behalf of men toward God, able to deal gently with the ignorant and wayward, and required to offer sacrifice for his own sins as well as the people&rsquo;s. Verses 5 and 6 show that Christ did not seize this honor but was appointed by the One who spoke the words of Psalm 2 and Psalm 110 over him. Verses 7 through 10 portray the agony of Gethsemane, the obedience learned through suffering, and the perfection that qualifies Jesus as the source of eternal salvation.",
                }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "1rem", marginTop: "1.4rem" }}>
                {[
                  ["Book", "Hebrews (a sermon-letter)"],
                  ["Chapter Focus", "The High Priesthood of Christ"],
                  ["Key Verse", "Hebrews 5:9-10"],
                  ["Old Testament Roots", "Psalm 2:7; Psalm 110:4; Genesis 14"],
                  ["Central Figure", "Melchizedek, priest-king of Salem"],
                  ["Pastoral Aim", "Move from milk to solid food"],
                ].map(([k, v]) => (
                  <div key={k} style={miniCard}>
                    <div style={{ color: MUTED, fontSize: ".74rem", marginBottom: ".3rem", letterSpacing: ".04em" }}>{k}</div>
                    <div style={{ color: TEXT, fontWeight: 700, lineHeight: 1.4 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={panel}>
              <h2 style={h2(PURPLE)}>Why This Chapter Matters</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "For the believer weighed down by guilt or distance from God, Hebrews 5 offers a mediator who genuinely understands. Because Jesus was beset by weakness in the days of his flesh, prayed with loud cries and tears, and learned obedience through suffering, he is not a remote official but a sympathetic priest. He can deal gently with the ignorant and the wayward because he walked the road of human frailty without ever sinning. This is the pastoral gold of the chapter.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "At the same time, the closing verses refuse to let the reader rest in comfortable ignorance. The same Christ who serves as our priest calls us to grow. The rebuke about being dull of hearing and needing milk rather than solid food is a summons to maturity &mdash; to train our powers of discernment by constant practice until we can distinguish good from evil. Comfort and challenge belong together in this single chapter.",
                }}
              />
            </div>
          </section>
        )}

        {/* KEY THEMES */}
        {activeTab === "Key Themes" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={panel}>
              <h2 style={h2(GOLD)}>The Qualifications of a High Priest</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The first theme is the very definition of priesthood. A high priest is chosen from among men, taken from the human family precisely so that he can represent humanity before God. He is appointed to act on behalf of men in relation to God, to offer gifts and sacrifices for sins. Two qualifications stand out in verses 1 through 3: he must share the weakness of those he represents, and he must be appointed rather than self-chosen. These two requirements govern the whole argument that follows.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Because the earthly high priest is himself beset with weakness, he is able to deal gently with the ignorant and wayward. The word translated &ldquo;deal gently&rdquo; describes a measured middle path between harsh anger and indulgent leniency &mdash; a moderated compassion born of self-knowledge. Yet that same weakness obligated the Aaronic priest to offer sacrifice for his own sins, as the Day of Atonement ritual required. Here the parallel with Christ both holds and breaks: he shares our weakness and sympathizes fully, yet he had no sin of his own to atone for.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(TEAL)}>Appointed by God, Not Self-Exalted</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "&ldquo;No one takes this honor for himself, but only when called by God, just as Aaron was&rdquo; (verse 4). The dignity of the priesthood is conferred, never grasped. Aaron did not appoint himself; he was called. So too the Lord Jesus Christ did not exalt himself to be made a high priest, but was appointed by the Father. This theme of divine appointment guards against every form of religious self-assertion and roots Christ&rsquo;s authority in the will of God rather than in human ambition.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The author proves the appointment with two quotations. The first is Psalm 2:7, &ldquo;You are my Son, today I have begotten you,&rdquo; which establishes Christ&rsquo;s sonship and royal dignity. The second is Psalm 110:4, &ldquo;You are a priest forever, after the order of Melchizedek,&rdquo; which establishes his priestly office. By joining a royal psalm and a priestly oracle, Hebrews shows that in Jesus the offices of king and priest are united in a single person, just as they were in the ancient figure of Melchizedek.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(PURPLE)}>The Order of Melchizedek</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Melchizedek appears in only two verses of the Hebrew Scriptures &mdash; Genesis 14, where he meets Abraham, and Psalm 110, where his priesthood is promised to the Messiah &mdash; yet he becomes a load-bearing pillar of the letter&rsquo;s argument. He is king of Salem and priest of God Most High, a man who combines kingship and priesthood centuries before the Levitical system existed. Because Scripture records neither his genealogy nor his death, Hebrews later presents him as a type of the eternal, undying priesthood of Christ.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The significance is that Christ&rsquo;s priesthood does not depend on descent from Aaron or membership in the tribe of Levi. It belongs to a more ancient and superior order, confirmed by a divine oath and not bound by the cycle of dying priests succeeding one another. Hebrews 5 plants this seed and then admits, in verse 11, that there is much more to say about Melchizedek &mdash; a promise the author keeps in chapter 7. The Melchizedek theme is the structural hinge of the entire epistle.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(ROSE)}>Reverent Submission and Learned Obedience</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Verses 7 through 9 introduce a theme that runs to the very depth of the gospel: the obedience of the Son. In the days of his flesh, Jesus offered up prayers and supplications with loud cries and tears, and was heard because of his reverence &mdash; the Greek word eulabeia, meaning a godly fear or reverent submission. Though he was a Son, he learned obedience through what he suffered. This learning is not a movement from disobedience to obedience but an experiential entering into the full cost of saying yes to the Father.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Being made perfect, he became the source of eternal salvation to all who obey him. The word for &ldquo;made perfect,&rdquo; teleioo, means completed or brought to the appointed goal rather than morally improved. Through suffering and obedience Jesus was qualified and equipped to be the perfect Savior. The theme weds Christology to discipleship: the obedient Son becomes the source of salvation for the obedient, calling his people to the same reverent submission he himself embodied.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(GREEN)}>Milk, Solid Food, and the Call to Maturity</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The final theme breaks the soaring tone with a pastoral warning. The readers have become dull of hearing, sluggish and slow to grasp truth they should already know. By this time they ought to be teachers, yet they need someone to teach them again the basic principles. The metaphor is nutritional: they need milk, not solid food, behaving like infants when they should be adults. Spiritual immaturity is portrayed not as a neutral stage but as a dangerous backward drift.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Solid food is for the mature, for those who have their powers of discernment trained by constant practice to distinguish good from evil. Maturity is therefore not merely a matter of accumulating information but of formed discernment exercised over time, like an athlete training a body or a craftsman training a hand. The theme closes the chapter by insisting that knowing Christ as High Priest must produce growth, discernment, and the capacity to teach others.",
                }}
              />
            </div>
          </section>
        )}

        {/* VERSE BY VERSE */}
        {activeTab === "Verse by Verse" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {[
              {
                ref: "Hebrews 5:1-3",
                color: GOLD,
                heading: "The General Office of High Priest",
                body:
                  "Every high priest chosen from among men is appointed to act on behalf of men in relation to God, to offer both gifts and sacrifices for sins. The opening verses define the office before applying it to Christ. The priest stands between God and people, representing the people Godward through offerings. Because he can deal gently with the ignorant and wayward, sharing their weakness, he is obligated to offer sacrifice for his own sins as well as for those of the people &mdash; a limitation that exposes the inadequacy of the merely human priesthood.",
              },
              {
                ref: "Hebrews 5:4",
                color: TEAL,
                heading: "Called, Not Self-Appointed",
                body:
                  "&ldquo;No one takes this honor for himself, but only when called by God, just as Aaron was.&rdquo; The priesthood is a vocation, not a seizure. Aaron stands as the great example of legitimate, divinely conferred priestly office. This single verse establishes the principle of appointment that the writer will immediately apply to Jesus. It also rebukes the human tendency to grasp at sacred status, reminding the reader that true mediation is always granted from above and never claimed from below.",
              },
              {
                ref: "Hebrews 5:5-6",
                color: PURPLE,
                heading: "Christ Appointed by the Father",
                body:
                  "So also Christ did not exalt himself to be made a high priest, but was appointed by the One who said to him, &ldquo;You are my Son, today I have begotten you&rdquo; (Psalm 2:7), and in another place, &ldquo;You are a priest forever, after the order of Melchizedek&rdquo; (Psalm 110:4). The two quotations bind together sonship and priesthood. The royal psalm names him Son; the priestly oracle names him priest. Together they certify that the same divine voice that declared his sonship also installed him in an eternal priestly order superior to Aaron&rsquo;s.",
              },
              {
                ref: "Hebrews 5:7",
                color: ROSE,
                heading: "Prayers, Loud Cries, and Tears",
                body:
                  "In the days of his flesh, Jesus offered up prayers and supplications, with loud cries and tears, to him who was able to save him from death, and he was heard because of his reverence. The verse points unmistakably to Gethsemane, where the Son wrestled in agony before the cross. He was not heard by being spared death but by being brought through death in resurrection, his reverent submission &mdash; eulabeia &mdash; honored by the Father. This is the high priest at prayer, fully entering human anguish without flinching from the Father&rsquo;s will.",
              },
              {
                ref: "Hebrews 5:8",
                color: GOLD,
                heading: "Learning Obedience Through Suffering",
                body:
                  "Although he was a son, he learned obedience through what he suffered. The statement is startling: the eternal Son learned. Yet this learning is experiential, not corrective &mdash; he moved from never having disobeyed to having obeyed at the uttermost cost. He came to know obedience from the inside, in the lived experience of trusting the Father through pain. His sonship did not exempt him from suffering; rather, it was through suffering that his obedience reached its fullness and its proving.",
              },
              {
                ref: "Hebrews 5:9-10",
                color: TEAL,
                heading: "Made Perfect, the Source of Eternal Salvation",
                body:
                  "And being made perfect, he became the source of eternal salvation to all who obey him, being designated by God a high priest after the order of Melchizedek. The word for perfected, teleioo, means brought to the goal or fully qualified, not morally upgraded. Through obedience and suffering Jesus was completed as Savior and fitted for his office. He is the source &mdash; the very wellspring &mdash; of an eternal salvation that reaches all who obey him, and his title as Melchizedekian priest is reaffirmed as the chapter&rsquo;s high point.",
              },
              {
                ref: "Hebrews 5:11-12",
                color: PURPLE,
                heading: "Dull of Hearing",
                body:
                  "About this we have much to say, and it is hard to explain, since you have become dull of hearing. For though by this time you ought to be teachers, you need someone to teach you again the basic principles of the oracles of God. The author breaks off the Melchizedek theme to confront the readers&rsquo; sluggishness. Their difficulty is not the obscurity of the subject but the deadness of their hearing. People who should have matured into teachers have slid back to needing elementary instruction all over again.",
              },
              {
                ref: "Hebrews 5:12-14",
                color: GREEN,
                heading: "Milk versus Solid Food",
                body:
                  "You need milk, not solid food. Everyone who lives on milk is unskilled in the word of righteousness, since he is a child. But solid food is for the mature, for those who have their powers of discernment trained by constant practice to distinguish good from evil. Spiritual maturity is depicted as trained discernment &mdash; faculties exercised by habitual practice until they can tell good from evil instinctively. The chapter ends by demanding growth, setting up the urgent exhortation to press on toward maturity that opens chapter 6.",
              },
            ].map((v) => (
              <div key={v.ref} style={{ ...panel, borderLeft: `4px solid ${v.color}` }}>
                <div style={{ color: v.color, fontWeight: 800, fontSize: ".82rem", letterSpacing: ".05em", marginBottom: ".35rem" }}>
                  {v.ref}
                </div>
                <h3 style={{ color: TEXT, fontSize: "1.12rem", fontWeight: 700, margin: "0 0 .6rem" }}>{v.heading}</h3>
                <p style={para} dangerouslySetInnerHTML={{ __html: v.body }} />
              </div>
            ))}
          </section>
        )}

        {/* APPLICATION */}
        {activeTab === "Application" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={panel}>
              <h2 style={h2(GOLD)}>A Priest Who Sympathizes</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The first application of Hebrews 5 is comfort for the struggling. Because the Lord Jesus offered up prayers with loud cries and tears and learned obedience through suffering, you have a high priest who genuinely understands weakness, fear, and pain. When you come to God burdened by ignorance or waywardness, you meet a mediator who deals gently rather than harshly. Bring your loud cries and tears to him honestly, as he brought his to the Father, trusting that reverent submission is heard.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(TEAL)}>The End of Self-Appointment</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Because no one takes the honor of priesthood for himself, this chapter quietly dismantles religious self-promotion. Christ did not exalt himself, and neither should we grasp at status, recognition, or spiritual authority that God has not granted. The application is humility: receive what God appoints, serve where you are placed, and resist the ambition that seeks honor for itself. The model of the obedient Son who waited on the Father&rsquo;s call reorders every motive of pride.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(PURPLE)}>Press On to Maturity</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The rebuke about milk and solid food lands directly on the contemporary church. It is possible to attend, listen, and remain a perpetual infant, dull of hearing and unable to teach others. The call is to train your powers of discernment by constant practice &mdash; through Scripture, prayer, obedience, and the slow repeated exercise of faith &mdash; until you can distinguish good from evil with formed instinct. Maturity is not automatic with age; it is the fruit of disciplined practice over time.",
                }}
              />
            </div>

            <div style={{ ...panel, background: `${GOLD}10`, border: `1px solid ${GOLD}55` }}>
              <h2 style={h2(GOLD)}>Reflection Questions</h2>
              <ol style={{ color: MUTED, lineHeight: 1.85, paddingLeft: "1.2rem", margin: 0 }}>
                {[
                  "Where do you most need a high priest who can deal gently with you rather than condemn you, and how does Christ&rsquo;s sympathy meet that need?",
                  "Jesus prayed with loud cries and tears yet in reverent submission. What would it look like to be both honest and surrendered in your own prayer life?",
                  "The Son learned obedience through what he suffered. How has suffering shaped your own obedience and trust in God?",
                  "Are you still living on milk in some area of your faith? What basic principles might you need to relearn or finally move beyond?",
                  "Maturity is described as trained discernment to distinguish good from evil. What deliberate practices could begin to train your discernment this year?",
                ].map((q, i) => (
                  <li key={i} style={{ marginBottom: ".7rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Always-visible video section */}
        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ ...h2(ROSE), textAlign: "center" }}>Watch and Go Deeper</h2>
          <p
            style={{ ...para, textAlign: "center", maxWidth: 600, margin: "0 auto 1.8rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "These videos open up the priesthood of Christ, the figure of Melchizedek, and the call to maturity in Hebrews 5.",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.2rem" }}>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const panel: React.CSSProperties = {
  background: CARD,
  borderRadius: 16,
  border: `1px solid ${BORDER}`,
  padding: "1.8rem",
};

const miniCard: React.CSSProperties = {
  background: BG,
  borderRadius: 10,
  border: `1px solid ${BORDER}`,
  padding: "1rem",
};

const para: React.CSSProperties = {
  color: MUTED,
  lineHeight: 1.8,
  marginBottom: "1rem",
  fontSize: "1rem",
};

function h2(color: string): React.CSSProperties {
  return {
    color,
    fontWeight: 800,
    fontSize: "1.35rem",
    margin: "0 0 1rem",
  };
}
