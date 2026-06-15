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
  "Warnings on the Way",
  "Paul, James, and the Vow",
  "Riot and Arrest",
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
    heading: "Paul's Resolute Journey to Jerusalem and His Arrest",
    reference: "Acts 21",
    paragraphs: [
      "Acts 21 chronicles the final stage of Paul&rsquo;s journey to Jerusalem, a journey shadowed at every turn by warnings of suffering and yet pressed forward by an unshakable resolve. The disciples at Tyre, &ldquo;through the Spirit,&rdquo; urge Paul not to set foot in Jerusalem (vv.1&ndash;6). At Caesarea the prophet Agabus takes Paul&rsquo;s belt, binds his own hands and feet, and foretells that Paul will be bound by the Jews and handed over to the Gentiles (vv.7&ndash;14). The road to Jerusalem is paved with prophecy and tears.",
      "Yet Paul will not turn back. When his friends plead with him, weeping and breaking his heart, he answers, &ldquo;What are you doing, weeping and breaking my heart? For I am ready not only to be imprisoned but even to die in Jerusalem for the name of the Lord Jesus&rdquo; (v.13). His companions fall silent with the words, &ldquo;Let the will of the Lord be done&rdquo; (v.14). Here is a portrait of Christian courage: not the absence of warning or grief, but a settled willingness to follow Christ into suffering for the sake of his name.",
      "Reaching Jerusalem, Paul reports to James and the elders all that God has done among the Gentiles, and they glorify God (vv.15&ndash;20). But the church faces a delicate problem: thousands of Jewish believers are &ldquo;zealous for the law,&rdquo; and rumors have spread that Paul teaches Jews to forsake Moses. To show these rumors false, the elders advise Paul to join four men in a purification vow at the temple, demonstrating that he himself lives in observance of the law (vv.21&ndash;26). It is a study in cultural sensitivity and the tension between law and gospel freedom.",
      "The plan, however, sparks the very crisis Paul had been warned about. Jews from Asia see him in the temple, wrongly assume he has brought a Gentile inside, and raise a riot, dragging Paul out to kill him (vv.27&ndash;31). The Roman tribune and his soldiers rush down, rescue Paul from the mob, and bind him with two chains. The crowd screams, &ldquo;Away with him!&rdquo; so violently that Paul must be carried by the soldiers (vv.32&ndash;36).",
      "In the midst of the chaos, Paul asks to speak. Surprising the tribune with his fluent Greek, he identifies himself as a Jew of Tarsus and gains permission to address the crowd from the steps of the barracks (vv.37&ndash;40). The chapter ends poised on the threshold of his great defense, the apostle standing in chains yet given a platform to testify. The arrest that looks like the end of Paul&rsquo;s mission becomes the beginning of his witness before crowds, councils, governors, and kings.",
      "Acts 21 thus brings together prophecy, providence, and the cost of discipleship. The warnings were true; Paul was indeed bound and handed over. Yet his suffering was not defeat but the path along which the gospel would advance &mdash; carrying Paul, in chains, all the way to Rome. The chapter invites the reader to consider what it means to count the cost, to submit to the will of the Lord even when it leads through danger, and to trust that God&rsquo;s purposes are not thwarted but fulfilled through the suffering of his servants.",
    ],
  },
  {
    id: "Warnings on the Way",
    heading: "Warnings on the Way to Jerusalem",
    reference: "Acts 21:1&ndash;14",
    paragraphs: [
      "The chapter opens with the tender pain of parting. Having torn himself away from the Ephesian elders at Miletus, Paul sails by way of Cos, Rhodes, and Patara, finds a ship crossing to Phoenicia, and comes at last to Tyre (vv.1&ndash;3). There the travelers seek out the disciples and stay seven days. The narrative, told in the &ldquo;we&rdquo; voice of an eyewitness, carries the texture of a real and weary voyage, each port bringing Paul nearer to the city where his suffering awaits.",
      "At Tyre the warnings begin in earnest: the disciples &ldquo;through the Spirit&rdquo; tell Paul not to go on to Jerusalem (v.4). The Spirit reveals what lies ahead, and the believers, moved by love, urge Paul to turn aside. Yet Paul understands the Spirit&rsquo;s witness not as a command to avoid Jerusalem but as a preparation for what he must face there. The tension is profound: the same Spirit who testifies of coming danger also constrains Paul to press on toward it.",
      "The farewell at Tyre is unforgettable: &ldquo;When our days there were ended, we departed and went on our journey, and they all, with wives and children, accompanied us until we were outside the city. And kneeling down on the beach, we prayed&rdquo; (v.5). The whole congregation &mdash; men, women, and children &mdash; walks Paul to the shore and kneels in the sand to commit him to God. It is one of the most moving scenes in Acts, a picture of a church bound together in love and prayer as they send their apostle into danger.",
      "Sailing on to Caesarea, Paul and his companions lodge in the house of Philip the evangelist, &ldquo;one of the seven,&rdquo; who has four unmarried daughters who prophesy (vv.8&ndash;9). The household is itself a sign of the Spirit&rsquo;s work, a home where the gift of prophecy flourishes. Into this setting comes a prophet from Judea named Agabus, the same who had once foretold a great famine, now arriving with a dramatic word for Paul.",
      "Agabus acts out his prophecy in the manner of the ancient prophets: &ldquo;He took Paul&rsquo;s belt and bound his own feet and hands and said, &lsquo;Thus says the Holy Spirit, This is how the Jews at Jerusalem will bind the man who owns this belt and deliver him into the hands of the Gentiles&rsquo;&rdquo; (v.11). The vivid sign leaves no doubt about what awaits Paul. At this, both Paul&rsquo;s companions and the local believers beg him, with tears, not to go up to Jerusalem.",
      "Paul&rsquo;s reply rises to the height of Christian devotion: &ldquo;What are you doing, weeping and breaking my heart? For I am ready not only to be imprisoned but even to die in Jerusalem for the name of the Lord Jesus&rdquo; (v.13). His resolve is not stubbornness but love for Christ that outweighs the fear of chains and death. When he will not be persuaded, his friends fall silent and yield in trust: &ldquo;Let the will of the Lord be done&rdquo; (v.14). The scene models how believers surrender their own desires to God&rsquo;s sovereign purpose.",
    ],
  },
  {
    id: "Paul, James, and the Vow",
    heading: "Paul, James, and the Vow",
    reference: "Acts 21:15&ndash;26",
    paragraphs: [
      "Paul arrives in Jerusalem and is gladly welcomed by the brothers (vv.15&ndash;17). The next day he goes in to see James and all the elders, and he relates, &ldquo;one by one the things that God had done among the Gentiles through his ministry&rdquo; (v.19). The leaders of the Jerusalem church listen and respond with worship: &ldquo;And when they heard it, they glorified God&rdquo; (v.20). The report of the gospel&rsquo;s advance among the nations becomes an occasion of shared praise, a unity of joy across the Jewish and Gentile mission.",
      "Yet praise gives way to a pressing pastoral concern. The elders tell Paul, &ldquo;You see, brother, how many thousands there are among the Jews of those who have believed. They are all zealous for the law&rdquo; (v.20). The Jerusalem church is full of Jewish believers who continue to honor the law of Moses with devotion. And rumors have reached them about Paul: &ldquo;They have been told about you that you teach all the Jews who are among the Gentiles to forsake Moses&rdquo; (v.21). The accusation, though distorted, threatens to divide the church.",
      "The elders propose a way to lay the rumor to rest. Four men among them are under a vow &mdash; a Nazirite vow, marked by abstinence and concluded with offerings and the shaving of the head. The leaders advise Paul, &ldquo;Take these men and purify yourself along with them and pay their expenses, so that they may shave their heads. Thus all will know that there is nothing in what they have been told about you, but that you yourself also live in observance of the law&rdquo; (vv.23&ndash;24).",
      "The proposal is a study in wisdom and cultural sensitivity. Paul had fiercely defended the freedom of the Gentiles from circumcision and the law&rsquo;s yoke; here he is asked to demonstrate that this freedom does not mean contempt for Jewish customs among Jewish believers. The principle is the one Paul himself articulated: &ldquo;To the Jews I became as a Jew, in order to win Jews&rdquo; (1 Corinthians 9:20). Where conscience and the gospel are not compromised, love yields and accommodates for the sake of unity.",
      "Paul agrees without hesitation: &ldquo;Then Paul took the men, and the next day he purified himself along with them and went into the temple, giving notice when the days of purification would be fulfilled and the offering presented for each one of them&rdquo; (v.26). The great apostle of grace willingly submits to a ceremonial act of devotion, not as a means of justification but as an expression of solidarity with his Jewish brothers. His freedom in the gospel makes him free to serve and to accommodate.",
      "The episode opens a window onto the delicate tension at the heart of the early church: the relationship between law and gospel freedom. Paul held firmly that no one is justified by the works of the law, and yet he honored the cultural and ceremonial life of Jewish believers wherever it did not contradict the gospel. His willingness to take the vow shows that liberty in Christ is not license for insensitivity, but freedom to lay down one&rsquo;s rights in love for the sake of others and the peace of the church.",
    ],
  },
  {
    id: "Riot and Arrest",
    heading: "Riot in the Temple and Paul's Arrest",
    reference: "Acts 21:27&ndash;40",
    paragraphs: [
      "The very act meant to bring peace ignites a storm. As the seven days of purification near their end, &ldquo;the Jews from Asia, when they saw him in the temple, stirred up the whole crowd and laid hands on him&rdquo; (v.27). These were opponents Paul had encountered in his Asian ministry, and the sight of him in the temple inflamed their hostility. They seized on the moment to rouse the whole city against the apostle they so bitterly opposed.",
      "Their charge is a mixture of distortion and false assumption: &ldquo;Men of Israel, help! This is the man who is teaching everyone everywhere against the people and the law and this place. Moreover, he even brought Greeks into the temple and has defiled this holy place&rdquo; (v.28). The accusation about the temple was simply untrue &mdash; they had earlier seen Trophimus the Ephesian with Paul in the city and wrongly supposed Paul had brought him into the temple&rsquo;s inner courts (v.29). A false assumption became a deadly accusation.",
      "The city erupts: &ldquo;Then all the city was stirred up, and the people ran together. They seized Paul and dragged him out of the temple, and at once the gates were shut&rdquo; (v.30). The mob hauls Paul from the temple and sets about to kill him. The scene is one of raw violence, a crowd inflamed past reason, the apostle&rsquo;s life hanging in the balance as the temple gates clang shut behind him and the beating begins.",
      "Rescue comes from an unexpected quarter. Word reaches the Roman tribune &mdash; Claudius Lysias &mdash; that all Jerusalem is in confusion, and he immediately takes soldiers and centurions and runs down upon the crowd (vv.31&ndash;32). When the rioters see the soldiers, they stop beating Paul. The tribune arrests him, orders him bound with two chains, and tries to learn who he is and what he has done, but the shouting crowd gives no clear answer (vv.33&ndash;34). The pattern of Agabus&rsquo;s prophecy unfolds before our eyes: Paul is bound and in the hands of the Gentiles.",
      "The violence is so intense that the soldiers must carry Paul: &ldquo;And when he came to the steps, he was actually carried by the soldiers because of the violence of the crowd, for the mob of the people followed, crying out, &lsquo;Away with him!&rsquo;&rdquo; (vv.35&ndash;36). The cry chillingly echoes the shout once raised against Jesus himself. Paul is following in the footsteps of his Lord, hated by the crowd, rescued by Rome, carried away in chains for the sake of the name he has resolved to die for.",
      "Then comes a quiet turn. As Paul is about to be brought into the barracks, he asks the tribune, in Greek, for permission to speak. The tribune is surprised &mdash; he had taken Paul for an Egyptian revolutionary &mdash; but Paul answers, &ldquo;I am a Jew, from Tarsus in Cilicia, a citizen of no obscure city&rdquo; (v.39). Granted permission, Paul stands on the steps, motions to the crowd with his hand, and a great hush falls. The chapter ends with the apostle, bound but unbowed, poised to deliver his defense &mdash; the first of the great speeches that will carry his testimony all the way to Rome.",
    ],
  },
];

const videoItems = [
  { videoId: "Pk2tR7nQ9vJ", title: "Acts 21 - Paul's Resolute Journey to Jerusalem" },
  { videoId: "Wm5pZ3Rx8Kt", title: "Agabus and the Belt - Prophecy on the Road" },
  { videoId: "Cv8nT4Vt1Hr", title: "Paul, James, and the Vow - Law and Gospel Freedom" },
  { videoId: "Nc6dK2Mp7Wq", title: "Riot in the Temple - The Arrest of Paul" },
];

export default function Acts21GuidePage() {
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
            Acts Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Acts 21
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul sails toward Jerusalem despite repeated warnings, reports to James, and takes a temple vow to conciliate Jewish believers &mdash; only to be seized in a riot, beaten, and arrested by the Roman tribune. &ldquo;Let the will of the Lord be done.&rdquo;
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
              Deepen your study of Acts 21 through visual teaching on Paul&rsquo;s resolute journey, the prophecy of Agabus, the temple vow and the tension between law and gospel freedom, and the riot that led to Paul&rsquo;s arrest.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Ready Even to Die for the Name</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 21 brings together prophecy, providence, and the cost of discipleship. The warnings were true; Paul was bound and handed over. Yet his suffering was not defeat but the very path along which the gospel advanced &mdash; carrying the apostle, in chains, all the way toward Rome, with the prayer of his friends still echoing: &ldquo;Let the will of the Lord be done.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
