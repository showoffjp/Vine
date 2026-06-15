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
  "Bear With the Weak",
  "Jew and Gentile",
  "Mission and Travel",
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
    heading: "Overview of Romans 15",
    reference: "Romans 15:1&ndash;33",
    paragraphs: [
      "Romans chapter 15 carries forward the pastoral concern of chapter 14 and then opens out into one of the warmest and most personal passages in all of Paul&rsquo;s letters. Having addressed the tension between the strong and the weak, Paul now presses the obligation of the strong to bear with the failings of the weak, and he grounds that obligation in the supreme example of Christ, who &ldquo;did not please himself.&rdquo; From this flows a vision of a united church &mdash; Jew and Gentile together &mdash; lifting one voice to glorify God.",
      "In the first movement (vv.1&ndash;7), the apostle calls the strong to put the good of their neighbor above their own pleasure, after the pattern of Christ. He weaves in a quotation from Psalm 69 and reflects on the abiding purpose of Scripture: that through endurance and the encouragement of the writings the church might have hope. The section culminates in a tender command: &ldquo;Welcome one another as Christ has welcomed you, for the glory of God.&rdquo;",
      "In the second movement (vv.8&ndash;13), Paul shows that Christ became a servant to the circumcised to confirm the promises made to the patriarchs, and that the Gentiles too were always meant to glorify God for his mercy. He assembles a chain of Old Testament quotations &mdash; from the Psalms, the Law, and the Prophets &mdash; to prove that the inclusion of the nations was never an afterthought but the long-purposed plan of God. The passage rises to a radiant benediction of joy, peace, and abounding hope.",
      "In the third movement (vv.14&ndash;21), Paul turns to speak of his own ministry. He affirms his confidence in the Roman believers even as he writes boldly to remind them, describing himself as &ldquo;a minister of Christ Jesus to the Gentiles&rdquo; whose priestly service is to present the offering of the nations, sanctified by the Holy Spirit. He explains his distinctive ambition: to preach the gospel where Christ has not yet been named, building on no other man&rsquo;s foundation.",
      "In the final movement (vv.22&ndash;33), the apostle lays out his travel plans with disarming candor. He longs to visit Rome at last, but first must carry the collection gathered in Macedonia and Achaia to the poor saints in Jerusalem; then he hopes to press on to Spain by way of Rome. He asks the church to strive together with him in prayer, that he might be delivered from the unbelievers in Judea and come to them in joy. The chapter closes with the peace of God resting upon them all.",
      "Taken as a whole, Romans 15 marries lofty theology to lived practice. The doctrine of justification by faith, expounded in the earlier chapters, here bears fruit in mutual forbearance, in the worship of a reconciled people, and in a missionary passion that reaches to the ends of the earth. The God who is the author of endurance and encouragement, the God of hope and the God of peace, is the One who binds the strong and the weak, the Jew and the Gentile, into a single people for his own glory.",
    ],
  },
  {
    id: "Bear With the Weak",
    heading: "Bear With the Weak; Christ Our Example",
    reference: "Romans 15:1&ndash;7",
    paragraphs: [
      "Paul opens the chapter by drawing a direct conclusion from all he has said about disputable matters: &ldquo;We who are strong have an obligation to bear with the failings of the weak, and not to please ourselves&rdquo; (v.1). The word &lsquo;obligation&rsquo; turns liberty into duty. The strong are not merely permitted to forbear with the scruples of the weak; they are bound to do so. To &lsquo;bear with&rsquo; is to carry a weight, to take up the burden of another&rsquo;s weakness rather than to shrug it off or trample it underfoot.",
      "The principle that governs this bearing is self-forgetful love: &ldquo;Let each of us please his neighbor for his good, to build him up&rdquo; (v.2). Pleasing one&rsquo;s neighbor here is not flattery or weak compliance but the deliberate aim of his welfare. There is a kind of pleasing that corrupts and a kind that edifies, and Paul specifies the latter &mdash; the pleasing whose end is the neighbor&rsquo;s good and whose result is that he is built up in faith. The strong believer measures his conduct not by his own preference but by his brother&rsquo;s upbuilding.",
      "Paul anchors this whole ethic in the example of Christ: &ldquo;For Christ did not please himself, but as it is written, &lsquo;The reproaches of those who reproached you fell on me&rsquo;&rdquo; (v.3, quoting Psalm 69:9). The Lord of glory, who had every right to please himself, chose instead the path of reproach and self-giving. The insults aimed at God fell upon the Son, who bore them willingly for our sake. If Christ would not insist on his own comfort but absorbed the reproach of others, how much more should his servants surrender their lesser rights for the good of the weak.",
      "From this quotation Paul pauses to reflect on the enduring usefulness of the Scriptures: &ldquo;For whatever was written in former days was written for our instruction, that through endurance and through the encouragement of the Scriptures we might have hope&rdquo; (v.4). The ancient writings are not relics but living instruction for the present church. They produce endurance under trial and supply the encouragement that sustains the soul, and their great end is hope &mdash; the settled expectation of God&rsquo;s promised future. The believer who feeds on Scripture is fitted to bear with others because he himself is upheld by hope.",
      "Paul then turns the reflection into a prayer: &ldquo;May the God of endurance and encouragement grant you to live in such harmony with one another, in accord with Christ Jesus, that together you may with one voice glorify the God and Father of our Lord Jesus Christ&rdquo; (vv.5&ndash;6). The harmony Paul seeks is not a bland uniformity but a unity of heart and voice that overrides differences of conscience. Its pattern is Christ, and its goal is worship &mdash; a single congregation of strong and weak lifting one voice in praise to the Father.",
      "The section reaches its summit in the command that gathers up everything Paul has been urging: &ldquo;Therefore welcome one another as Christ has welcomed you, for the glory of God&rdquo; (v.7). The measure of the welcome the church is to extend is nothing less than the welcome Christ has extended to each of them. He received sinners, the weak, the unworthy, the formerly far off; and the believer who has been so received has no warrant to withhold welcome from a fellow servant. The motive crowns the command: such welcome redounds to the glory of God, for it displays on earth the reconciling grace of heaven.",
      "These seven verses thus form a bridge between the practical counsel of chapter 14 and the great vision of a united, worshiping church that follows. Bearing with the weak is not a grudging concession but an imitation of Christ; the Scriptures fortify the soul for it with endurance and hope; and the whole enterprise is crowned by worship, as a reconciled people glorifies God with one voice. The church becomes, in its very forbearance, a living parable of the welcome of Christ.",
    ],
  },
  {
    id: "Jew and Gentile",
    heading: "Christ for Jew and Gentile",
    reference: "Romans 15:8&ndash;13",
    paragraphs: [
      "Paul now reaches back to the heart of the gospel to ground the unity he has commanded, showing that Christ&rsquo;s coming embraces both Jew and Gentile in a single saving purpose: &ldquo;For I tell you that Christ became a servant to the circumcised to show God&rsquo;s truthfulness, in order to confirm the promises given to the patriarchs&rdquo; (v.8). Christ&rsquo;s ministry to Israel was an act of divine faithfulness, the keeping of the ancient covenant pledges sworn to Abraham, Isaac, and Jacob. God&rsquo;s truth is vindicated in the sending of the Messiah to his own people.",
      "Yet the same coming reaches beyond Israel: Christ came also &ldquo;in order that the Gentiles might glorify God for his mercy&rdquo; (v.9). For the Jew, the gospel confirms a promise; for the Gentile, it displays sheer mercy, for the nations had no covenant claim upon God. The grand result is the same in both cases &mdash; the glory of God, sounded forth by Jew and Gentile alike. Paul is intent to show that the welcoming of the Gentiles is not a deviation from the plan of God but its very flowering.",
      "To prove that this was always God&rsquo;s design, Paul assembles a remarkable chain of quotations drawn from every portion of the Hebrew Scriptures. First, from the Psalms: &ldquo;Therefore I will praise you among the Gentiles, and sing to your name&rdquo; (v.9, citing Psalm 18:49). Here the messianic king carries praise to God out among the nations, the worship of Israel&rsquo;s God spilling beyond Israel&rsquo;s borders.",
      "Next Paul quotes the Law: &ldquo;Rejoice, O Gentiles, with his people&rdquo; (v.10, from Deuteronomy 32:43). The Song of Moses itself foresaw a day when the nations would join Israel in rejoicing &mdash; not replacing God&rsquo;s ancient people but rejoicing alongside them. The Gentiles are summoned not to displace Israel but to share in Israel&rsquo;s joy in the Lord.",
      "Then comes a second Psalm, brief and sweeping: &ldquo;Praise the Lord, all you Gentiles, and let all the peoples extol him&rdquo; (v.11, from Psalm 117). The shortest of the Psalms calls every nation and people to praise, a universal summons that anticipates the worldwide worship the gospel would bring. The chain mounts toward its climax in the Prophets.",
      "Finally Paul quotes Isaiah: &ldquo;The root of Jesse will come, even he who arises to rule the Gentiles; in him will the Gentiles hope&rdquo; (v.12, from Isaiah 11:10). The promised Messiah, the shoot from the stump of Jesse, is given as a ruler not for Israel only but for the nations, and in him the Gentiles will set their hope. Across the Psalms, the Law, and the Prophets the testimony is one: the inclusion of the Gentiles was woven into the fabric of revelation from the beginning.",
      "Having marshaled this fourfold witness, Paul crowns the section with one of the most beloved benedictions in Scripture: &ldquo;May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope&rdquo; (v.13). God is named the God of hope; the channel of his blessing is faith; the fruit is joy and peace; the power is the Holy Spirit; and the end is a hope that does not merely flicker but overflows. In this single verse the doctrine of the chapter blossoms into prayer, and the reconciled people of God are sent forward abounding in hope.",
    ],
  },
  {
    id: "Mission and Travel",
    heading: "Paul&rsquo;s Mission and Travel Plans",
    reference: "Romans 15:14&ndash;33",
    paragraphs: [
      "Paul now turns from doctrine to his own apostolic labor, and he begins with a generous word of confidence: &ldquo;I myself am satisfied about you, my brothers, that you yourselves are full of goodness, filled with all knowledge and able to instruct one another&rdquo; (v.14). Before he reminds them boldly, he assures them that he thinks well of them. The pastor who must speak plainly first establishes that he speaks to a people he honors, not to those he despises. This is the courtesy of love that makes correction bearable.",
      "He then explains the boldness of his letter: he has written &ldquo;by way of reminder, because of the grace given me by God to be a minister of Christ Jesus to the Gentiles in the priestly service of the gospel of God&rdquo; (vv.15&ndash;16). Paul casts his ministry in priestly terms. He serves at the altar of the gospel, and his offering is the Gentiles themselves: &ldquo;so that the offering of the Gentiles may be acceptable, sanctified by the Holy Spirit&rdquo; (v.16). The converted nations are the sacrifice he presents to God, made holy not by ritual but by the Spirit.",
      "Paul guards this priestly boast from any taint of self-glory: &ldquo;In Christ Jesus, then, I have reason to be proud of my work for God. For I will not venture to speak of anything except what Christ has accomplished through me to bring the Gentiles to obedience&rdquo; (vv.17&ndash;18). Whatever he glories in, he glories in the Lord; the work is Christ&rsquo;s working through him, accomplished &ldquo;by word and deed, by the power of signs and wonders, by the power of the Spirit of God&rdquo; (v.19). The apostle is a servant through whom Christ acts, not a master who acts for Christ.",
      "He describes the vast sweep of his labor and the distinctive ambition that drives it: &ldquo;from Jerusalem and all the way around to Illyricum I have fulfilled the ministry of the gospel of Christ&rdquo; (v.19). His aim has always been pioneer ground: &ldquo;I make it my ambition to preach the gospel, not where Christ has already been named, lest I build on someone else&rsquo;s foundation&rdquo; (v.20). Paul is a frontier evangelist, drawn to the unreached, and he frames this calling with a word from Isaiah 52: &ldquo;Those who have never been told of him will see, and those who have never heard will understand&rdquo; (v.21).",
      "This pioneering ambition explains why he had not yet reached Rome: &ldquo;This is the reason why I have so often been hindered from coming to you&rdquo; (v.22). But now that his work in those regions is complete, the long-deferred visit comes into view: &ldquo;I hope to see you in passing as I go to Spain, and to be helped on my journey there by you, once I have enjoyed your company for a while&rdquo; (vv.23&ndash;24). Rome is to be both a joy and a way station; Paul looks past it to the unevangelized west, with Spain as the new frontier of the gospel.",
      "First, however, a sacred errand calls him east: &ldquo;At present, I am going to Jerusalem bringing aid to the saints&rdquo; (v.25). He explains the collection gathered among the Gentile churches: &ldquo;Macedonia and Achaia have been pleased to make some contribution for the poor among the saints at Jerusalem&rdquo; (v.26). Paul sees a holy fittingness in this: &ldquo;if the Gentiles have come to share in their spiritual blessings, they ought also to be of service to them in material blessings&rdquo; (v.27). The gift is more than charity; it is the tangible bond of a reconciled church, Gentile believers ministering to the Jewish saints from whom the gospel came.",
      "The chapter ends with a heartfelt appeal for prayer, for Paul knows the danger that awaits him: &ldquo;I appeal to you, brothers, by our Lord Jesus Christ and by the love of the Spirit, to strive together with me in your prayers to God on my behalf, that I may be delivered from the unbelievers in Judea&rdquo; (vv.30&ndash;31). He longs to come to Rome &ldquo;by God&rsquo;s will&rdquo; in joy and to be refreshed in their company (v.32). Then, with characteristic warmth, he pronounces a closing blessing: &ldquo;May the God of peace be with you all. Amen&rdquo; (v.33). The frontier apostle, bound for Jerusalem and dreaming of Spain, commends himself and the church to the God of peace.",
    ],
  },
];

const videoItems = [
  { videoId: "Rm15bWx9KpQ", title: "BibleProject - Book of Romans Overview" },
  { videoId: "Wk5LmNc2zRt", title: "Romans 15 - Bear With the Weak and Welcome One Another" },
  { videoId: "Hp8YqVd4fJn", title: "Christ for Jew and Gentile - The God of Hope" },
  { videoId: "Aq3XbZ7gM2T", title: "Paul the Pioneer Missionary - Romans 15 Study" },
];

export default function Romans15GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Letter to the Romans, Chapter 15
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The strong bear with the weak after the example of Christ, who &ldquo;did not please himself&rdquo; &mdash; and Jew and Gentile together lift one voice to glorify God. Paul then opens his heart about his own mission as a minister to the nations and his plans to visit Rome on the way to Spain: &ldquo;May the God of hope fill you with all joy and peace in believing.&rdquo;
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
              Deepen your study of Romans 15 through visual teaching on bearing with the weak after the example of Christ, the inclusion of the Gentiles as the long-purposed plan of God, and Paul&rsquo;s pioneering passion to preach the gospel where Christ has not yet been named, that the God of hope might fill the church with all joy and peace in believing.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Welcome One Another</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Romans 15 calls the strong to bear with the failings of the weak after the pattern of Christ, who did not please himself, and it gathers Jew and Gentile into one worshiping people who glorify God with a single voice. May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope &mdash; and the God of peace be with you all.
          </p>
        </div>
      </main>
    </div>
  );
}
