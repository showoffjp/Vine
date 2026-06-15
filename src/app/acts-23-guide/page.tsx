"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Before the Sanhedrin",
  "Encouragement and the Plot",
  "Transfer to Caesarea",
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
    heading: "Overview of Acts 23",
    reference: "Acts 23:1&ndash;35",
    paragraphs: [
      "Acts chapter 23 is a gripping account of danger, deliverance, and the steady advance of the gospel under the most hostile of circumstances. Paul stands at the center of a gathering storm in Jerusalem, surrounded by enemies who hate him and a Roman garrison that scarcely understands him, and yet through every threat the purposes of God press forward. The chapter moves from a tense hearing before the Jewish council, to a midnight word of encouragement from the Lord himself, to the unmasking of a murderous conspiracy, and finally to a heavily guarded night journey that carries Paul safely toward Caesarea and, beyond it, toward Rome.",
      "The chapter opens with Paul addressing the Sanhedrin, the supreme council of the Jewish people (23:1&ndash;10). His opening words provoke the high priest Ananias to order him struck on the mouth, and the exchange grows sharp. Then, perceiving that the council is divided between Pharisees and Sadducees, Paul shrewdly raises the hope of the resurrection of the dead, the very point on which these two parties bitterly disagreed. At once the assembly erupts into furious dissension, the Pharisees rising to defend Paul, and the Roman tribune is forced to rescue him before he is torn to pieces.",
      "In the quiet of that night the Lord himself stands by Paul (23:11). With the council in uproar and his life hanging by a thread, Paul receives a word of personal encouragement: &ldquo;Take courage, for as you have testified about me at Jerusalem, so you must testify also at Rome.&rdquo; This single verse is the hinge of the whole narrative, for it assures Paul &mdash; and the reader &mdash; that no plot or peril can finally prevail, because God has appointed a destiny for his servant that no human malice can overturn.",
      "The danger then takes its most concrete form (23:12&ndash;22). More than forty men bind themselves under a solemn oath neither to eat nor drink until they have killed Paul, plotting with the chief priests to lure him into an ambush. But the conspiracy is undone by the most ordinary of means: Paul&rsquo;s young nephew, his sister&rsquo;s son, learns of the plot and reports it, first to Paul and then to the Roman tribune, who takes the boy aside privately, hears the whole scheme, and dismisses him with a charge to tell no one.",
      "The chapter closes with Paul&rsquo;s transfer to Caesarea under a massive military escort (23:23&ndash;35). The tribune, Claudius Lysias, orders an extraordinary guard &mdash; two hundred soldiers, seventy horsemen, and two hundred spearmen &mdash; to take Paul by night to Governor Felix. He writes a letter explaining the case, stressing that Paul, a Roman citizen, has done nothing deserving death or imprisonment. Paul arrives safely at Caesarea, and Felix agrees to hear the case once his accusers come, keeping him under guard in Herod&rsquo;s praetorium.",
      "Read as a whole, Acts 23 is a vivid testimony to the providence of God working through the most unlikely instruments &mdash; a divided council, a frightened nephew, a pragmatic Roman officer, and the rigid machinery of imperial law. Human schemes rage against the gospel, but they cannot thwart it; indeed they become the very means by which Paul is carried, step by guarded step, toward the imperial capital where he will bear witness to Christ. The mission of God advances not despite the opposition but through it, exactly as the risen Lord had promised.",
    ],
  },
  {
    id: "Before the Sanhedrin",
    heading: "Paul Before the Sanhedrin",
    reference: "Acts 23:1&ndash;10",
    paragraphs: [
      "Brought before the Sanhedrin by the Roman tribune who wished to learn the charges against him, Paul looks intently at the council and begins, &ldquo;Brothers, I have lived my life before God in all good conscience up to this day&rdquo; (23:1). It is a bold and dignified opening, the testimony of a man whose conscience is clear before God even as his enemies surround him. Far from cowering, Paul addresses the supreme court of his own people as a fellow Israelite who has walked uprightly in the sight of the One he serves.",
      "The reaction is immediate and violent. &ldquo;And the high priest Ananias commanded those who stood by him to strike him on the mouth&rdquo; (23:2). It was an act of gross injustice, a blow struck against a man not yet convicted of any crime, ordered by the very one charged with upholding the law. The high priest&rsquo;s command reveals the corruption at the heart of the council and the hostility that Paul faced from the highest levels of religious authority.",
      "Paul&rsquo;s response is sharp and prophetic: &ldquo;God is going to strike you, you whitewashed wall! Are you sitting to judge me according to the law, and yet contrary to the law you order me to be struck?&rdquo; (23:3). The image of the whitewashed wall &mdash; a crumbling structure made to look sound with a coat of fresh plaster &mdash; exposes the hypocrisy of a judge who breaks the law in the name of upholding it. Paul names the contradiction plainly, and his words proved sadly prophetic, for Ananias would later meet a violent end.",
      "Those standing by are scandalized: &ldquo;Would you revile God&rsquo;s high priest?&rdquo; (23:4). Paul&rsquo;s reply shows both humility and a deep reverence for Scripture: &ldquo;I did not know, brothers, that he was the high priest, for it is written, You shall not speak evil of a ruler of your people&rdquo; (23:5). Whether he genuinely failed to recognize Ananias, or spoke with a touch of irony about a high priest acting so unlawfully, Paul submits himself at once to the word of God, refusing to justify any contempt for lawful authority.",
      "Then comes Paul&rsquo;s shrewd and Spirit-guided strategy. &ldquo;Now when Paul perceived that one part were Sadducees and the other Pharisees, he cried out in the council, Brothers, I am a Pharisee, a son of Pharisees. It is with respect to the hope and the resurrection of the dead that I am on trial&rdquo; (23:6). Paul identifies the deep fault line running through the council and stakes his case upon the doctrine that most sharply divided his judges &mdash; the resurrection of the dead, the very hope fulfilled in the risen Christ he proclaims.",
      "The effect is dramatic. &ldquo;For the Sadducees say that there is no resurrection, nor angel, nor spirit, but the Pharisees acknowledge them all&rdquo; (23:8). The council instantly splits along its ancient theological divide. &ldquo;Then a great clamor arose, and some of the scribes of the Pharisees&rsquo; party stood up and contended sharply, We find nothing wrong in this man. What if a spirit or an angel spoke to him?&rdquo; (23:9). The very men who had assembled to condemn Paul are now turned against one another, and some find themselves unwittingly defending him.",
      "&ldquo;And when the dissension became violent, the tribune, afraid that Paul would be torn to pieces by them, commanded the soldiers to go down and take him away from among them by force and bring him into the barracks&rdquo; (23:10). The proud council descends into chaos, and once again it is the Roman garrison that must rescue Paul from his own people. The scene lays bare the bankruptcy of his accusers and demonstrates how God can use even the bitter divisions of his enemies to preserve his servant for the work that still lies ahead.",
    ],
  },
  {
    id: "Encouragement and the Plot",
    heading: "The Lord's Encouragement and the Plot",
    reference: "Acts 23:11&ndash;22",
    paragraphs: [
      "After a day of violent uproar, when Paul might well have wondered whether his testimony in Jerusalem had come to nothing, the Lord meets him in the darkness. &ldquo;The following night the Lord stood by him and said, Take courage, for as you have testified about me at Jerusalem, so you must testify also at Rome&rdquo; (23:11). It is one of the great moments of comfort in Acts &mdash; the risen Christ himself drawing near to his weary servant, affirming the worth of his witness and unveiling the future. Paul will not die in Jerusalem; he is bound for Rome by divine appointment.",
      "This single promise transforms everything that follows. From this point on, every threat against Paul&rsquo;s life is read in the light of a destiny already secured by the word of the Lord. The reader watches the conspiracies unfold knowing that they cannot succeed, for God has spoken. The encouragement is intensely personal &mdash; &ldquo;take courage&rdquo; &mdash; and yet it is also a sovereign declaration about the unstoppable advance of the gospel to the very heart of the empire.",
      "The plot then takes shape with chilling resolve. &ldquo;When it was day, the Jews made a plot and bound themselves by an oath neither to eat nor drink till they had killed Paul. There were more than forty who made this conspiracy&rdquo; (23:12&ndash;13). These men place themselves under a self-imposed curse, swearing to take no food or water until Paul is dead. They go to the chief priests and elders with a scheme: let the council request that Paul be brought down again, as though for further questioning, and they will ambush and kill him on the way (23:14&ndash;15).",
      "Into this deadly plan God introduces the most unexpected of deliverers. &ldquo;Now the son of Paul&rsquo;s sister heard of their ambush, so he went and entered the barracks and told Paul&rdquo; (23:16). A young man, Paul&rsquo;s own nephew, somehow comes to learn of the conspiracy &mdash; perhaps a household connection, perhaps mere providence &mdash; and acts at once. The great deliverance of the apostle turns upon the courage and the family loyalty of a single boy, a quiet reminder that God often works his largest purposes through the smallest and most ordinary ties.",
      "Paul responds with characteristic presence of mind. He calls one of the centurions and says, &ldquo;Take this young man to the tribune, for he has something to tell him&rdquo; (23:17). The centurion does so, and the tribune, &ldquo;taking him by the hand and going aside privately, asked him, What is it that you have to tell me?&rdquo; (23:19). There is a striking gentleness in the gesture of the powerful Roman officer leading a frightened young man aside by the hand, treating his report with seriousness and care rather than dismissing it.",
      "The nephew lays out the whole scheme: how more than forty men, having bound themselves by oath, lie in wait, and how the council intends to request Paul&rsquo;s appearance as the pretext for the ambush. &ldquo;So do not be persuaded by them, for more than forty of their men are lying in ambush for him, who have bound themselves by an oath neither to eat nor drink till they have killed him&rdquo; (23:21). The detailed warning gives the tribune exactly what he needs to act decisively and to thwart the conspiracy before it can be sprung.",
      "&ldquo;So the tribune dismissed the young man, charging him, Tell no one that you have informed me of these things&rdquo; (23:22). With wise discretion the officer protects both the boy and the operation he is about to set in motion. The whole episode is a vivid display of divine providence working through entirely human means &mdash; a leaked secret, a brave nephew, an attentive centurion, a prudent tribune &mdash; to fulfill the promise the Lord had given in the night. God&rsquo;s purposes for Paul will stand, and they will stand through the faithful actions of ordinary people.",
    ],
  },
  {
    id: "Transfer to Caesarea",
    heading: "Transfer to Caesarea",
    reference: "Acts 23:23&ndash;35",
    paragraphs: [
      "The tribune Claudius Lysias acts swiftly and on a remarkable scale. &ldquo;Then he called two of the centurions and said, Get ready two hundred soldiers, with seventy horsemen and two hundred spearmen to go as far as Caesarea at the third hour of the night&rdquo; (23:23). Nearly five hundred armed men are marshaled to escort a single prisoner through the darkness &mdash; an extraordinary deployment that measures both the seriousness of the threat and the value the Romans placed upon protecting a citizen in their custody.",
      "The plan is to move under cover of night and to provide for Paul&rsquo;s comfort and safety. &ldquo;Also provide mounts for Paul to ride and bring him safely to Felix the governor&rdquo; (23:24). The conspirators who had sworn to kill Paul are left waiting in vain, their ambush rendered useless by a force they could never overcome. The ordinary machinery of Roman order becomes, in the hand of God, the very means of fulfilling the promise that Paul would yet testify at Rome.",
      "Luke then preserves the text of the tribune&rsquo;s letter, the only such verbatim Roman document recorded in Acts. &ldquo;Claudius Lysias, to his Excellency the governor Felix, greetings&rdquo; (23:26). The letter recounts how Paul was seized by the Jews and about to be killed when the tribune rescued him, having learned that he was a Roman citizen, and how he brought Paul before the council to discover the charges against him.",
      "The letter&rsquo;s key admission vindicates Paul entirely on Roman terms. &ldquo;I found that he was being accused about questions of their law, but charged with nothing deserving death or imprisonment&rdquo; (23:29). In the eyes of Roman justice the case against Paul amounts to nothing more than an internal Jewish dispute over points of religious law &mdash; no sedition, no crime against the empire, nothing warranting punishment. The verdict echoes the repeated finding throughout Acts that the gospel poses no threat to civil order.",
      "The tribune explains that, on learning of the plot against Paul, he sent him to the governor at once and ordered his accusers to state their case before Felix (23:30). So Paul is removed from the reach of the conspirators and placed within the orderly process of Roman law, where his case can be heard rather than settled by murder in a back alley. The transfer is both a rescue and an advance, carrying the apostle one stage nearer to the witness he is destined to bear before kings and rulers.",
      "&ldquo;So the soldiers, according to their instructions, took Paul and brought him by night to Antipatris. And on the next day they returned to the barracks, letting the horsemen go on with him&rdquo; (23:31&ndash;32). Having cleared the most dangerous stretch of road, the bulk of the infantry returns to Jerusalem, while the cavalry completes the journey to Caesarea. The careful staging of the escort underscores the thoroughness of the protection thrown around Paul at every step.",
      "At Caesarea the horsemen deliver the letter and present Paul to the governor (23:33). Felix reads the letter, asks from what province Paul comes, and learning that he is from Cilicia, says, &ldquo;I will give you a hearing when your accusers arrive&rdquo; (23:35). He commands that Paul be kept under guard in Herod&rsquo;s praetorium. So the chapter ends with Paul safe, his enemies thwarted, and the legal stage set for the hearings to come &mdash; the mission of God advancing, under Roman protection, steadily toward Rome.",
    ],
  },
];

const videoItems = [
  { videoId: "Ac9vKp2Rb7T", title: "BibleProject - Acts 23 Overview and Paul in Jerusalem" },
  { videoId: "Sn5dGz8Hq3L", title: "Paul Before the Sanhedrin - Divided by the Resurrection" },
  { videoId: "Pl7bYw4Vs1K", title: "Take Courage - The Lord's Promise and the Plot Uncovered" },
  { videoId: "Cs2dRn6Tx9M", title: "Under Roman Guard - The Night Journey to Caesarea" },
];

export default function Acts23GuidePage() {
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
            The Acts of the Apostles, Chapter 23
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul stands before the Sanhedrin and divides the council by raising the resurrection; the Lord stands by him at night, promising he will testify in Rome; more than forty men vow to kill him, but his nephew uncovers the plot; and the tribune sends Paul under heavy guard to Governor Felix at Caesarea &mdash; the mission of God advancing through every threat.
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
              Deepen your study of Acts 23 through visual teaching on Paul&rsquo;s hearing before the Sanhedrin and the resurrection that divided the council, the Lord&rsquo;s nighttime encouragement and the conspiracy uncovered by Paul&rsquo;s nephew, and the heavily guarded night journey that carried Paul safely toward Caesarea and Rome.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Providence Over Peril</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 23 shows the providence of God working through a divided council, a brave young nephew, and the rigid machinery of Roman law to preserve his servant and advance his mission. Human schemes rage against the gospel, yet they cannot thwart it; the very plots meant to destroy Paul become the means by which he is carried, under heavy guard, ever nearer to Rome. The risen Lord had said, &ldquo;Take courage,&rdquo; and the chapter proves that no oath, no ambush, and no court can overturn the word of the One who rules over all.
          </p>
        </div>
      </main>
    </div>
  );
}
