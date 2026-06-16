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
  { videoId: "3sDVTBGAZKc", title: "2 Corinthians Overview - The Bible Project" },
  { videoId: "kF_-KdWg7uI", title: "The Grace of Giving - 2 Corinthians 8-9" },
  { videoId: "MRPbKBH6OyY", title: "Generosity and the Gospel - 2 Corinthians" },
  { videoId: "8gZvWf9vh2A", title: "Though He Was Rich He Became Poor - 2 Cor 8:9" },
];

export default function SecondCorinthians8GuidePage() {
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
              border: `1px solid ${GREEN}`,
              background: `${GREEN}1A`,
              color: GREEN,
              fontSize: ".78rem",
              fontWeight: 700,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              marginBottom: "1.1rem",
            }}
          >
            Chapter Guide - 2 Corinthians 8
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
            The Grace of Giving
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
                "&ldquo;For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you by his poverty might become rich.&rdquo; &mdash; 2 Corinthians 8:9.",
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
                border: `1px solid ${activeTab === t ? GREEN : BORDER}`,
                background: activeTab === t ? `${GREEN}22` : CARD,
                color: activeTab === t ? GREEN : MUTED,
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
              <h2 style={h2(GREEN)}>A Collection Shaped by the Gospel</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Second Corinthians 8 opens the longest sustained treatment of money and generosity in the New Testament, spanning chapters 8 and 9. Paul is organizing a relief collection for the impoverished believers in Jerusalem, gathering gifts from his Gentile churches to send to the mother church in Judea. Yet the apostle never reduces this to fundraising. He frames the entire appeal in the language of grace, so that giving becomes a spiritual act flowing from the gospel rather than a mere transfer of funds.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter begins by holding up the Macedonian churches as a living example. In a severe test of affliction, their abundance of joy and their extreme poverty overflowed in a wealth of generosity. They gave beyond their means, begging earnestly for the favor of taking part in the relief of the saints, and the secret of their giving was that they first gave themselves to the Lord. Paul then urges the Corinthians, who excel in so many gifts, to excel in this act of grace as well.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "At the theological center of the chapter stands verse 9, one of the great incarnation texts of the New Testament: though he was rich, the Lord Jesus Christ became poor for our sake, so that we through his poverty might become rich. The whole logic of Christian generosity is grounded here. Giving is not a strategy or a law but a participation in the self-giving pattern of Christ, who emptied himself to enrich the undeserving.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(TEAL)}>The Flow of the Argument</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "After the Macedonian example (verses 1 through 5), Paul sends Titus to complete the collection at Corinth (verses 6 through 7) and clarifies that he gives no command but seeks to prove the genuineness of their love (verse 8). Verse 9 anchors the appeal in the grace of Christ. Verses 10 through 12 urge the Corinthians to finish what they had eagerly begun the previous year, on the principle that the gift is measured by readiness and what a person has, not by what they lack.",
                }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "1rem", marginTop: "1.4rem" }}>
                {[
                  ["Author", "Paul the Apostle"],
                  ["Setting", "The Jerusalem relief collection"],
                  ["Key Verse", "2 Corinthians 8:9"],
                  ["Model", "The Macedonian churches"],
                  ["Old Testament Root", "Exodus 16 (the manna)"],
                  ["Theme", "Grace-driven generosity"],
                ].map(([k, v]) => (
                  <div key={k} style={miniCard}>
                    <div style={{ color: MUTED, fontSize: ".74rem", marginBottom: ".3rem", letterSpacing: ".04em" }}>{k}</div>
                    <div style={{ color: TEXT, fontWeight: 700, lineHeight: 1.4 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={panel}>
              <h2 style={h2(PURPLE)}>Generosity and Integrity Together</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The latter half of the chapter turns to two further principles. Verses 13 through 15 set out the principle of equality or fairness: present abundance supplying present need, so that one day the situation might be reversed, illustrated by the manna of Exodus 16 in which the one who gathered much had nothing left over and the one who gathered little had no lack. Verses 16 through 24 then describe the careful, transparent administration of the gift through Titus and trusted brothers.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Paul takes precaution that no one should blame him about this generous gift, aiming at what is honorable not only in the Lord&rsquo;s sight but also in the sight of man. The chapter thus weds open-handed generosity to scrupulous financial integrity. The same gospel that frees the heart to give also demands that the gift be handled with accountability, transparency, and the proven character of those who carry it.",
                }}
              />
            </div>
          </section>
        )}

        {/* KEY THEMES */}
        {activeTab === "Key Themes" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={panel}>
              <h2 style={h2(GREEN)}>Grace as Both Gift and Act</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The word that holds the whole chapter together is grace, the Greek charis. Paul uses it with remarkable flexibility: it names the grace God gave the Macedonian churches, the privilege of sharing in the collection, the act of giving itself, and finally the grace of the Lord Jesus Christ who became poor. Giving is therefore not first a duty but a grace &mdash; something received before it is something performed. The generosity of the believer is the overflow of grace already poured into the heart.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "This reframing transforms the act of giving. It is no longer a reluctant subtraction from one&rsquo;s wealth but a joyful participation in the generosity of God. Because giving is grace, Paul can describe the destitute Macedonians as begging for the favor of taking part. What the world treats as a burden, the gospel treats as a privilege, because the giver is being drawn into the very character of the God who gives.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(TEAL)}>The Macedonian Model</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The Macedonian churches embody a striking paradox. Their giving arose not out of surplus but out of a severe test of affliction and extreme poverty, and yet their abundance of joy overflowed in a wealth of generosity. They gave according to their means and beyond their means, of their own free will. Poverty did not silence their generosity; joy in Christ overruled their circumstances. They are the proof that sacrificial giving is possible for those who have little, not only for the comfortable.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The deepest secret of their example lies in verse 5: they first gave themselves to the Lord, and then by the will of God to Paul and his mission. Their gift of money followed the prior gift of their whole selves. This is the order the whole chapter assumes &mdash; surrender precedes generosity, and the consecration of the person makes possible the consecration of the wallet. Where self is first given to God, money follows freely.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(GOLD)}>Christ Who Became Poor</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Verse 9 is the theological heart of the chapter and one of the New Testament&rsquo;s great incarnation verses. &ldquo;For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you by his poverty might become rich.&rdquo; The riches Christ enjoyed are the glory and fellowship of the eternal Son; the poverty he embraced is the whole descent of the incarnation, culminating in the cross. He impoverished himself to enrich those who had no claim on him.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "This verse functions as the pattern and engine of all Christian generosity. Paul does not motivate giving with guilt, pressure, or the promise of return, but with the gospel itself. The believer gives because the believer has been made rich by the self-impoverishment of Christ. Every act of generosity becomes a small reenactment of the great exchange in which the rich one became poor so that the poor might become rich.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(PURPLE)}>Completing What Was Begun</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Paul presses the Corinthians to finish what they had started a year earlier, so that their readiness in desiring it may be matched by their completing it. Good intentions are not enough; the apostle calls for the follow-through that turns eager desire into accomplished gift. Many begin generous resolutions that quietly evaporate, and Paul will not let that happen here. The willingness that was so quick to start must now prove itself in completion.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Yet the standard is gracious and proportional: if the readiness is there, the gift is acceptable according to what a person has, not according to what he does not have. God does not measure the gift by its size but by the willingness behind it and the means available. This protects the poor from shame and the rich from self-congratulation, locating the worth of the gift in a ready heart rather than in the amount on the page.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(ROSE)}>Equality, Manna, and Financial Integrity</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Paul introduces the principle of fairness or equality: present abundance should supply present need, so that in turn the others&rsquo; abundance may one day supply your need. He grounds this in the manna of Exodus 16 &mdash; whoever gathered much had nothing left over, and whoever gathered little had no lack. The aim is not enforced sameness or the abolition of property, but a Spirit-shaped mutual supply across the body of Christ, where surplus flows to need.",
                }}
              />
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter closes with a model of accountability. Titus and the brothers are sent to administer the gift, and Paul takes deliberate precaution that no one should blame him about this generous collection, aiming at what is honorable not only in the Lord&rsquo;s sight but also in the sight of man. Generosity and integrity belong together: handling money for God&rsquo;s people demands transparency, plural oversight, and proven character so that the ministry is above reproach.",
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
                ref: "2 Corinthians 8:1-2",
                color: GREEN,
                heading: "Grace in Affliction and Poverty",
                body:
                  "Paul makes known the grace of God given among the churches of Macedonia: that in a severe test of affliction, their abundance of joy and their extreme poverty overflowed in a wealth of generosity. Three forces collide in these verses &mdash; affliction, joy, and poverty &mdash; and the result is not scarcity but overflow. Their giving is explicitly called the grace of God, a divine work in them before it is a human gift from them. Joy, not surplus, is the engine of their generosity.",
              },
              {
                ref: "2 Corinthians 8:3-5",
                color: TEAL,
                heading: "Beyond Their Means, Begging to Give",
                body:
                  "They gave according to their means, and beyond their means, of their own accord, begging Paul earnestly for the favor of taking part in the relief of the saints. The Macedonians were not pressured; they pleaded for the privilege. And the foundation of it all is verse 5: this was not as Paul expected, but they first gave themselves to the Lord and then to him by the will of God. The surrender of the self precedes and produces the surrender of resources.",
              },
              {
                ref: "2 Corinthians 8:6-7",
                color: PURPLE,
                heading: "Excel in This Act of Grace",
                body:
                  "Paul urges Titus to complete among the Corinthians this act of grace he had already begun. Then comes the appeal: as you excel in everything &mdash; in faith, in speech, in knowledge, in all earnestness, and in our love for you &mdash; see that you excel in this act of grace also. The Corinthians prided themselves on spiritual gifts and eloquence; Paul insists that generosity belongs on the same list of graces in which they aspire to excel. Giving is not optional for the gifted church.",
              },
              {
                ref: "2 Corinthians 8:8",
                color: GOLD,
                heading: "Not a Command but a Proof of Love",
                body:
                  "&ldquo;I say this not as a command, but to prove by the earnestness of others that your love also is genuine.&rdquo; Paul deliberately refuses to issue an order. He will not coerce a gift, because coerced giving cannot prove love. Instead he sets the earnestness of the Macedonians before the Corinthians as a measuring line for the genuineness of their own love. Authentic love, like the love of Christ, expresses itself in self-giving, and Paul invites it rather than commanding it.",
              },
              {
                ref: "2 Corinthians 8:9",
                color: ROSE,
                heading: "Rich, He Became Poor",
                body:
                  "&ldquo;For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you by his poverty might become rich.&rdquo; This is the theological heart of the chapter. The incarnation itself becomes the model of generosity: the Son who possessed all the riches of glory embraced the poverty of human life and the cross to enrich the spiritually bankrupt. Every Christian gift is a faint echo of this great descent, and the gospel is the only sufficient motive for sacrificial generosity.",
              },
              {
                ref: "2 Corinthians 8:10-12",
                color: GREEN,
                heading: "Finish What You Started",
                body:
                  "Paul advises the Corinthians to finish doing what they had begun and desired a year ago, so that their readiness in desiring it may be matched by their completing it. The principle of acceptable giving follows: if the readiness is there, the gift is acceptable according to what a person has, not according to what he does not have. God measures the gift by the willing heart and available means, not by raw quantity, sparing the poor from shame and the rich from pride.",
              },
              {
                ref: "2 Corinthians 8:13-15",
                color: TEAL,
                heading: "Fairness and the Manna Principle",
                body:
                  "Paul clarifies that he does not intend that others be eased while the Corinthians are burdened, but that there be fairness. At the present time their abundance should supply the others&rsquo; need, so that the others&rsquo; abundance may one day supply theirs. He clinches it with Exodus 16: whoever gathered much had nothing left over, and whoever gathered little had no lack. The manna becomes a picture of a redeemed economy of mutual supply, where surplus and need are balanced within the body of Christ.",
              },
              {
                ref: "2 Corinthians 8:16-24",
                color: PURPLE,
                heading: "The Integrity of the Collection",
                body:
                  "Paul describes the careful administration of the gift. Titus goes eagerly, accompanied by a brother famous among the churches and chosen to travel with the gift, along with another tested brother. Paul takes precaution that no one should blame him about this generous gift, aiming at what is honorable not only in the Lord&rsquo;s sight but also in the sight of man. The closing verses model transparency, plural accountability, and proven character in the handling of money &mdash; generosity guarded by integrity.",
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
              <h2 style={h2(GREEN)}>Give Yourself First</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "The Macedonians teach the right order: they first gave themselves to the Lord, and the gift of money followed. Before asking how much to give, the believer is invited to surrender the whole self &mdash; time, ambitions, future, and possessions &mdash; into the hands of God. When the self is genuinely given, generosity ceases to be a struggle and becomes an overflow. The application is not first a budget but a consecration, from which open-handed living naturally flows.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(GOLD)}>Let the Gospel Move You</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Paul motivates giving not with guilt or pressure but with the grace of the Lord Jesus Christ, who though he was rich became poor for our sake. The deepest fuel for generosity is gratitude for the great exchange in which Christ impoverished himself to make us rich. When giving feels grudging, the remedy is to return to verse 9 and remember how much has been freely given to you. A heart warmed by the gospel gives without being driven.",
                }}
              />
            </div>

            <div style={panel}>
              <h2 style={h2(TEAL)}>Finish, and Handle It Honorably</h2>
              <p
                style={para}
                dangerouslySetInnerHTML={{
                  __html:
                    "Two practical applications close the chapter. First, complete what you have begun: do not let generous intentions evaporate into unfinished resolutions, for readiness must be matched by completion. Second, handle money with integrity. Whether in the church or in personal stewardship, aim at what is honorable in the sight of both God and people, welcoming accountability and transparency. Generosity and integrity are not rivals; together they make Christian giving trustworthy and beautiful.",
                }}
              />
            </div>

            <div style={{ ...panel, background: `${GREEN}10`, border: `1px solid ${GREEN}55` }}>
              <h2 style={h2(GREEN)}>Reflection Questions</h2>
              <ol style={{ color: MUTED, lineHeight: 1.85, paddingLeft: "1.2rem", margin: 0 }}>
                {[
                  "The Macedonians gave out of extreme poverty with abundant joy. What does their example expose about the excuses you make regarding your own giving?",
                  "Have you first given yourself to the Lord, or are you trying to give money while withholding the self?",
                  "How does meditating on 2 Corinthians 8:9 &mdash; that Christ became poor to make you rich &mdash; reshape your motives for generosity?",
                  "Is there a generous intention you began but never completed? What would it look like to match your readiness with completion this year?",
                  "Where could the principle of equality and mutual supply reshape how you view your surplus in relation to others&rsquo; need?",
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
                "These videos open up the grace of giving, the Macedonian example, and the self-impoverishment of Christ in 2 Corinthians 8.",
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
