"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Eutychus Raised",
  "Paul's Farewell to Elders",
  "Keep Watch Over the Flock",
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
    heading: "Acts 20 &mdash; Overview",
    reference: "Acts 20:1&ndash;38",
    paragraphs: [
      "Acts 20 is a chapter of journeys, farewells, and extraordinary pastoral intensity. It opens with Paul moving through Macedonia and Greece, strengthening the churches, and it closes with an entire community of church elders weeping on a beach, unable to stop embracing the apostle they believe they will never see again. Between those two moments lies a resurrection from the dead, a long night of teaching, a journey pressed toward Jerusalem despite prophetic warnings of chains and suffering, and a speech that is one of the most transparent and moving self-portraits in the entire New Testament.",
      "The chapter belongs to the final phase of Paul&rsquo;s third missionary journey. He has already spent three years in Ephesus &mdash; the longest he ever stayed in any single city &mdash; planting a church that became the center of Christian mission for all of Asia Minor. He is now heading back to Jerusalem, carrying a collection for the poor saints there from the Gentile churches of Macedonia and Achaia. This collection is not a sidelight to his ministry; Paul regards it as a tangible sign of the unity of Jews and Gentiles in the one body of Christ, and he is willing to face danger to deliver it.",
      "Two major incidents anchor the chapter. The first is at Troas, where a young man named Eutychus falls from a third-story window during Paul&rsquo;s late-night sermon, is taken up dead, and is raised to life by the apostle in a scene strongly reminiscent of Elijah and Elisha in the Old Testament. The second, and far longer, is at Miletus, where Paul summons the elders of the Ephesian church for a farewell address that covers his ministry among them, his coming suffering, and his charge to them to shepherd the flock of God with vigilance.",
      "The Miletus speech (vv. 18&ndash;35) is unique in Acts. All of the other speeches in Acts are addressed either to unbelievers or to mixed audiences; this is the only speech Paul gives to Christian leaders. It is the closest thing in Luke&rsquo;s narrative to the Pastoral Epistles &mdash; a window into Paul&rsquo;s theology of ministry, his model of pastoral faithfulness, and his deepest fears and hopes for the church he is leaving behind. Every elder and pastor who has ever wrestled with questions of calling, faithfulness, and the danger of false teaching should read Acts 20 carefully.",
      "Running through the entire chapter is a theological current that Paul names explicitly: &ldquo;I do not account my life of any value nor as precious to myself, if only I may finish my course and the ministry that I received from the Lord Jesus, to testify to the gospel of the grace of God&rdquo; (20:24). The Christian life, and supremely the Christian ministry, is not a self-preservation project. It is a stewardship &mdash; something received from the Lord, to be finished faithfully, whatever the cost. Acts 20 is Luke&rsquo;s portrait of a man who actually believed that and lived it.",
    ],
  },
  {
    id: "Eutychus Raised",
    heading: "Eutychus Raised at Troas",
    reference: "Acts 20:7&ndash;12",
    paragraphs: [
      "On the first day of the week &mdash; Sunday, the day of resurrection &mdash; the believers at Troas gathered together to break bread, and Paul, knowing he would depart the next day, talked with them and prolonged his speech until midnight. There were many lamps in the upper room, and a young man named Eutychus was sitting in the window. Luke&rsquo;s narrative has the easy specificity of an eyewitness: he tells us it was the third floor, he tells us the young man sank into a deep sleep as Paul talked on and on, and he tells us what happened next with calm, almost journalistic, directness.",
      "Eutychus fell from the third story down and was taken up dead. There is no softening of the verdict here. Luke is a physician (Col 4:14), and he knows the difference between unconsciousness and death. The word he uses is the same word used elsewhere in Acts for those who have died. Whatever pastoral compassion might lead a commentator to hedge the claim, Luke does not hedge it: Eutychus was dead.",
      "Paul went down and fell upon him, and taking him in his arms said, &ldquo;Do not be alarmed, for his life is in him&rdquo; (20:10). The gesture &mdash; falling upon the body and embracing it &mdash; deliberately echoes Elijah&rsquo;s raising of the widow&rsquo;s son at Zarephath (1 Kings 17:21) and Elisha&rsquo;s raising of the Shunammite&rsquo;s son (2 Kings 4:34). Paul is presented as standing in the line of the great prophets, and the power at work through him is the same power that has always been at work in God&rsquo;s saving purposes. The dead are raised; life is restored; the young man is taken home alive, and the believers &ldquo;were not a little comforted&rdquo; (20:12).",
      "What does the church do after this? Paul goes back upstairs, breaks bread, and eats. Then he talks with them until daybreak and then departs. The raising of Eutychus does not derail the meeting &mdash; it becomes part of it. There is something wonderfully matter-of-fact about the early church&rsquo;s response to the miraculous. The resurrection of the dead is real, God is sovereign over life and death, and the appropriate response is to go back upstairs and keep eating bread together until the sun rises.",
      "The episode also invites reflection on the length of Paul&rsquo;s sermon. He talked until midnight, and then &mdash; after raising the dead &mdash; until daybreak. There is a gentle irony here that Luke seems to enjoy: the man who preached so long that someone fell out of a window is the same man who, undeterred, preached on until dawn. The community&rsquo;s hunger for the Word clearly matched the preacher&rsquo;s readiness to give it. The breaking of bread (the Lord&rsquo;s Supper), the long exposition of Scripture, the fellowship of the night, and the miracle in the midst of it &mdash; all of this is a compressed picture of what the gathered church is meant to be: a community formed by the Word and the table, gathered around a resurrection.",
      "It is worth pausing on the name Eutychus, which means &ldquo;fortunate&rdquo; in Greek. There is a quiet play on that name embedded in the story: the young man named &ldquo;Fortunate&rdquo; has the extraordinary good fortune of dying while the apostle Paul is in the room. Not every generation gets that. But every generation has the same Word, the same Spirit, and the same risen Lord who gives life to the dead &mdash; and the story of Eutychus is preserved precisely so that every generation may know it.",
    ],
  },
  {
    id: "Paul's Farewell to Elders",
    heading: "Paul&rsquo;s Farewell to the Ephesian Elders",
    reference: "Acts 20:17&ndash;27",
    paragraphs: [
      "From Miletus, Paul sends to Ephesus and calls the elders of the church to come to him. When they arrive, he delivers a speech that functions as a pastoral testament &mdash; a summation of his ministry, a disclosure of his inner life, and a charge to those who will carry on the work he is leaving behind. It opens in the most disarming way possible: not with a claim to authority or an assertion of theological credentials, but with a personal review of how he had conducted himself among them.",
      "&ldquo;You yourselves know how I lived among you the whole time from the first day that I set foot in Asia, serving the Lord with all humility and with tears and with trials that happened to me through the plots of the Jews&rdquo; (20:18&ndash;19). Three things characterize Paul&rsquo;s self-description: humility, tears, and trials. This is not the self-portrait of a triumphalist. It is the self-portrait of a suffering servant, and the suffering has been both external (plots against his life) and internal (the tears that accompanied his care for each individual in the congregation).",
      "He goes on to describe the shape of his teaching ministry: &ldquo;I did not shrink from declaring to you anything that was profitable, and teaching you in public and from house to house, testifying both to Jews and to Greeks of repentance toward God and of faith in our Lord Jesus Christ&rdquo; (20:20&ndash;21). Two things stand out here. First, the comprehensiveness: he did not shrink from declaring anything that was profitable. He preached the full range of Christian truth, not a selected sample chosen to be culturally palatable or to avoid causing offense. Second, the reach: public and house to house, Jews and Greeks, both pillars of apostolic proclamation, repentance and faith.",
      "Then Paul turns to his immediate situation. He is &ldquo;bound in the Spirit&rdquo; going to Jerusalem, not knowing what will happen except that the Holy Spirit testifies to him in every city that imprisonment and afflictions await (20:22&ndash;23). The phrase &ldquo;bound in the Spirit&rdquo; is remarkable. The Spirit who sent him out (Acts 13:4) is now the Spirit who is binding him toward suffering. The call of God does not lead away from hardship; it can lead directly into it. Paul is not going to Jerusalem in spite of the prophetic warnings but, in a sense, because of them &mdash; because completing the ministry matters more than preserving the life.",
      "The great declaration follows: &ldquo;But I do not account my life of any value nor as precious to myself, if only I may finish my course and the ministry that I received from the Lord Jesus, to testify to the gospel of the grace of God&rdquo; (20:24). This verse is not bravado; it is theology. Paul does not say his life has no value &mdash; he says he does not account it as precious to himself. The life belongs to the Lord who gave it; completing the ministry is the purpose for which it was given; and the content of that ministry is &ldquo;the gospel of the grace of God,&rdquo; the good news that God freely justifies the ungodly through faith in Christ.",
      "Paul then delivers the most sobering claim in the passage: &ldquo;I am innocent of the blood of all, for I did not shrink from declaring to you the whole counsel of God&rdquo; (20:26&ndash;27). The allusion is to Ezekiel 33, where the watchman who fails to warn the wicked of coming judgment bears guilt for the blood of those who perish. Paul is claiming that he has fulfilled the watchman&rsquo;s responsibility: he declared the whole counsel of God, holding nothing back. This is both his defense before God and his model for ministry &mdash; the comprehensive, unrelenting declaration of all that Scripture reveals about God, humanity, sin, salvation, and the coming judgment.",
    ],
  },
  {
    id: "Keep Watch Over the Flock",
    heading: "Keep Watch Over the Flock",
    reference: "Acts 20:28&ndash;38",
    paragraphs: [
      "With the autobiographical section complete, Paul turns to direct charge and warning. The pivot is verse 28: &ldquo;Pay careful attention to yourselves and to all the flock, in which the Holy Spirit has made you overseers, to care for the church of God, which he obtained with his own blood.&rdquo; There is a stunning compression of theology in this one verse. The elders are appointed by the Holy Spirit &mdash; their authority is not merely institutional but charismatic, a work of the Third Person of the Trinity. They are overseers &mdash; the Greek word is &ldquo;episkopos,&rdquo; from which the word &ldquo;bishop&rdquo; derives. And they are shepherding a people purchased at an unimaginable price: the blood of God himself.",
      "That phrase &mdash; &ldquo;the church of God, which he obtained with his own blood&rdquo; &mdash; is one of the most debated in the New Testament, but whatever the precise theological formulation, its pastoral force is clear. The people these elders are tending are not their own people. They belong to Christ, and Christ paid for them with his life. The weight of pastoral responsibility flows directly from the weight of the price paid. When a shepherd is careless with the flock, he is being careless with what was bought at Calvary.",
      "Paul then introduces the warning about wolves, and he does something remarkable: he distinguishes two kinds of false teaching threat. First: &ldquo;I know that after my departure fierce wolves will come in among you, not sparing the flock&rdquo; (20:29). These are external threats &mdash; people from outside the community who will enter and devour. Second &mdash; and more chilling &mdash; &ldquo;and from among your own selves will arise men speaking twisted things, to draw away the disciples after them&rdquo; (20:30). The most dangerous false teachers are not strangers who arrive from outside; they are people who were once members of the community, known and trusted, who then begin to distort the truth.",
      "The appropriate response to this threat is not paranoia or a defensive crouch but sustained theological alertness. &ldquo;Therefore be alert, remembering that for three years I did not cease night or day to admonish every one with tears&rdquo; (20:31). Three years of tears &mdash; that is the cost of genuine pastoral vigilance. Paul is not describing an occasional crisis intervention; he is describing a sustained posture of caring attention to each person in the congregation, day and night, over the full span of his ministry among them.",
      "Then Paul commits them to the one resource that can actually keep them faithful: &ldquo;And now I commend you to God and to the word of his grace, which is able to build you up and to give you the inheritance among all those who are sanctified&rdquo; (20:32). He does not commend them to a strategy, a structure, or a denominational network. He commends them to God and to the word of his grace. The word of grace is not merely comforting speech; it is the proclamation of the gospel, and it is &ldquo;able&rdquo; &mdash; Paul uses the same word used elsewhere of God&rsquo;s own omnipotence &mdash; to build up and to give the inheritance of the saints.",
      "Paul closes with two further notes, one personal and one doctrinal. The personal note: &ldquo;I coveted no one&rsquo;s silver or gold or apparel. You yourselves know that these hands ministered to my necessities and to those who were with me&rdquo; (20:33&ndash;34). He worked with his own hands as a tentmaker so that he could not be accused of preaching for profit. Ministry free of financial conflict of interest is, in Paul&rsquo;s mind, part of the integrity of the gospel witness. The doctrinal note is the one that has become perhaps the most famous single line in the chapter: &ldquo;In all things I have shown you that by working hard in this way we must help the weak and remember the words of the Lord Jesus, how he himself said, &lsquo;It is more blessed to give than to receive&rsquo;&rdquo; (20:35).",
      "That saying of Jesus &mdash; &ldquo;It is more blessed to give than to receive&rdquo; &mdash; does not appear in any of the four Gospels. It is the only saying of Jesus preserved in the New Testament outside the Gospels, and Paul cites it as something the elders already know, presumably from the ongoing oral tradition of the dominical sayings that circulated in the early church before the Gospels were written. Its presence here, in the context of Paul&rsquo;s defense of his own generosity and his call to help the weak, anchors the whole ethic of Christian giving in the words of the Lord himself. Generosity is not merely a good policy or a nice quality; it is a participation in the character of Christ, who is himself the supreme Giver.",
      "The scene closes in tears. When Paul finished speaking, he knelt down and prayed with all of them. There was much weeping. They fell upon Paul&rsquo;s neck and kissed him, sorrowful above all because of the word he had spoken &mdash; that they would not see his face again. And they accompanied him to the ship. It is one of the most tender endings in all of Acts, and it demonstrates something that the rest of the chapter has been arguing throughout: the ministry of the gospel is not a professional transaction. It is a bond of love forged through years of shared suffering, shared teaching, and shared life in the name of Jesus. The tears on the beach at Miletus are the proof of what Paul said with words: he had served them with all humility and tears. Now they wept together, and the weeping was holy.",
    ],
  },
];

const videoItems = [
  { videoId: "mFdv9t7BPow", title: "Acts 20 - Paul's Farewell Address at Miletus" },
  { videoId: "R8KCy_P2J94", title: "Eutychus and the Night Paul Preached Till Dawn" },
  { videoId: "Dku2jOuQ9Y0", title: "The Whole Counsel of God - Acts 20 Study" },
  { videoId: "9dkLVJ5aNKE", title: "Keep Watch Over the Flock - Acts 20 Exposition" },
];

export default function Acts20GuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);
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
            Acts 20 &mdash; Paul&rsquo;s Farewell at Miletus
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A young man raised from the dead at Troas, a night of unbroken preaching, a journey toward Jerusalem in the shadow of chains, and one of the most transparent pastoral farewells in all of Scripture &mdash; Acts 20 is a portrait of ministry that costs everything.
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
            >
              {t}
            </button>
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div
              style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}
              dangerouslySetInnerHTML={{ __html: currentSection.reference }}
            />
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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: 1 }}>
            Key Themes in Acts 20
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { label: "The Whole Counsel of God", body: "Paul declared everything that was profitable, holding nothing back. Faithful preaching is comprehensive preaching &mdash; not a curated selection but the full witness of Scripture." },
              { label: "Ministry Costs Everything", body: "&ldquo;I do not account my life of any value.&rdquo; Paul&rsquo;s ministry theology was simple: the ministry received from Christ is worth more than the life expended in it." },
              { label: "The Danger of Wolves", body: "False teachers come from outside and from inside. The antidote is not suspicion but sustained theological alertness &mdash; the kind that costs three years of tears." },
              { label: "More Blessed to Give", body: "The only non-Gospel saying of Jesus in the New Testament appears here: &lsquo;It is more blessed to give than to receive.&rsquo; Generosity is participation in the character of Christ." },
            ].map((item) => (
              <div key={item.label} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{item.label}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
            Deepen your study of Acts 20 through video teaching on Paul&rsquo;s farewell at Miletus, the raising of Eutychus, and the charge to keep watch over the flock.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            &ldquo;And They All Wept and Embraced Paul and Kissed Him&rdquo;
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem" }}>
            The beach at Miletus is one of the most moving scenes in all of Acts. These were not people who had been stirred by a single sermon. They were people who had been shaped by three years of Paul&rsquo;s life &mdash; his tears in their homes, his preaching in the synagogue, his work at the tentmaker&rsquo;s bench, his prayers on his knees for each of them by name. Ministry like that produces the kind of love that kneels together on the beach and cannot let go.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 20 holds up this kind of ministry as the standard. Not the ministry that seeks a platform, but the ministry that serves with all humility and tears. Not the ministry that declares a comfortable selection of truths, but the ministry that holds nothing back. Not the ministry that lives for its own preservation, but the ministry that can say, with Paul: &ldquo;I do not account my life of any value &mdash; if only I may finish my course and the ministry I received from the Lord Jesus.&rdquo;
          </p>
        </div>

      </main>
    </div>
  );
}
