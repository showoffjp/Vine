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
  "The Accusation of Tertullus",
  "Paul's Defense",
  "Felix Procrastinates",
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
    heading: "Overview of Acts 24",
    reference: "Acts 24:1&ndash;27",
    paragraphs: [
      "Acts chapter 24 brings the apostle Paul before the Roman governor Felix at Caesarea, where the long legal struggle over his life enters a formal courtroom. The chapter unfolds in three movements: the accusation brought by a hired orator, Paul&rsquo;s clear and courteous defense, and the governor&rsquo;s telling response &mdash; conviction stirred yet resisted, justice acknowledged yet endlessly delayed.",
      "The proceedings open with the arrival of the high priest Ananias, accompanied by elders and a professional orator named Tertullus (24:1). Tertullus flatters Felix with a polished introduction and then levels his charges: Paul is a plague and a troublemaker, &ldquo;a ringleader of the sect of the Nazarenes,&rdquo; and a man who even tried to profane the temple (24:2&ndash;6). The Jews present join in affirming the accusations (24:9), a picture of practiced rhetoric marshaled against the truth.",
      "When his turn comes, Paul answers without flattery and with calm confidence (24:10). He observes that only twelve days have passed since he went up to Jerusalem and that his accusers can prove none of their charges. He freely confesses his faith: he worships the God of his fathers, believes everything written in the Law and the Prophets, and holds &ldquo;a hope in God&hellip; that there will be a resurrection of both the just and the unjust&rdquo; (24:14&ndash;15).",
      "Paul explains that he had come to Jerusalem to bring alms to his nation and was found ceremonially purified in the temple, with no crowd and no tumult (24:17&ndash;18). The Jews from Asia who first raised the outcry are not even present to testify against him. The only real charge they can pin on him, Paul says, is the cry he made about the resurrection of the dead (24:21). The resurrection stands again at the very center of his defense.",
      "Felix, who had &ldquo;a rather accurate knowledge of the Way,&rdquo; adjourns the hearing, promising to decide when the tribune Lysias comes down (24:22). He keeps Paul in custody but grants him liberty, allowing his friends to attend to his needs (24:23). The decision is deferred, the case left hanging &mdash; a pattern that will define the rest of the chapter.",
      "Later Felix sends for Paul, together with his Jewish wife Drusilla, to hear him speak about faith in Christ Jesus (24:24). But as Paul reasons about righteousness, self-control, and the coming judgment, Felix is alarmed and dismisses him (24:25). Hoping for a bribe, Felix sends for Paul often, yet never acts on the truth he has heard. After two years he is succeeded by Porcius Festus, and to do the Jews a favor he leaves Paul in prison (24:27) &mdash; a study in conviction resisted and justice delayed.",
    ],
  },
  {
    id: "The Accusation of Tertullus",
    heading: "The Accusation of Tertullus",
    reference: "Acts 24:1&ndash;9",
    paragraphs: [
      "&ldquo;And after five days the high priest Ananias came down with some elders and a spokesman, one Tertullus. They laid before the governor their case against Paul&rdquo; (24:1). The Jewish leadership spares no effort. They travel down from Jerusalem to Caesarea and engage a professional orator, Tertullus, skilled in the conventions of Roman legal speech, to press their charges with all the persuasive art at their command.",
      "Tertullus opens not with evidence but with fulsome flattery: &ldquo;Since through you we enjoy much peace, and since by your foresight, most excellent Felix, reforms are being made for this nation, in every way and everywhere we accept this with all gratitude&rdquo; (24:2&ndash;3). The praise is calculated to win the governor&rsquo;s favor. Yet history remembered Felix as a harsh and self-serving ruler, and the lavish compliments ring hollow &mdash; rhetoric designed to flatter rather than to tell the truth.",
      "Having buttered his audience, Tertullus turns to his charges and casts Paul in the darkest terms: &ldquo;For we have found this man a plague, one who stirs up riots among all the Jews throughout the world, and is a ringleader of the sect of the Nazarenes&rdquo; (24:5). The accusation is sweeping and political. To call Paul a fomenter of riots &ldquo;throughout the world&rdquo; is to paint him as a threat to the public order that Rome prized above all else.",
      "The label &ldquo;ringleader of the sect of the Nazarenes&rdquo; is meant as a slander, branding the followers of Jesus of Nazareth as a dangerous faction. Yet, ironically, the title carries an unintended truth &mdash; Paul is indeed a leader among those who follow the Nazarene. What his accusers intend as an insult names the very allegiance Paul will gladly own in his defense.",
      "Tertullus adds the gravest religious charge: &ldquo;He even tried to profane the temple, but we seized him&rdquo; (24:6). This was the accusation that had ignited the riot in Jerusalem, born of the false assumption that Paul had brought Gentiles into the temple&rsquo;s inner courts. It was a charge that, if proven, could carry the weight of death; yet it rested entirely on rumor and supposition, never on demonstrated fact.",
      "The accusation lacks any firm foundation. Tertullus offers no witnesses to the alleged profanation and no proof of riot. His case is built of confident assertion and well-turned phrases, a tissue of generalities dressed in the language of law. Polished rhetoric stands in the place where evidence ought to be, and the absence is telling.",
      "Finally, &ldquo;The Jews also joined in the charge, affirming that all these things were so&rdquo; (24:9). The leaders present add their united voice, lending the weight of numbers to the orator&rsquo;s words. It is a striking picture of practiced eloquence and collective pressure aligned against a single man &mdash; the machinery of accusation arrayed against the truth, awaiting Paul&rsquo;s reply.",
    ],
  },
  {
    id: "Paul's Defense",
    heading: "Paul's Defense Before Felix",
    reference: "Acts 24:10&ndash;21",
    paragraphs: [
      "&ldquo;And when the governor had nodded to him to speak, Paul replied&rdquo; (24:10). Paul begins not with flattery but with quiet confidence: &ldquo;Knowing that for many years you have been a judge over this nation, I cheerfully make my defense.&rdquo; His brief acknowledgment of Felix&rsquo;s experience is honest and measured, free of the gushing praise that opened Tertullus&rsquo;s speech. From the first word, truth governs his tone.",
      "Paul answers the charge of fomenting unrest with a simple appeal to the timeline and the facts: &ldquo;You can verify that it is not more than twelve days since I went up to worship in Jerusalem, and they did not find me disputing with anyone or stirring up a crowd, either in the temple or in the synagogues or in the city&rdquo; (24:11&ndash;12). The accusation of being a worldwide agitator collapses against the plain record. His accusers, he notes, &ldquo;cannot prove to you what they now bring up against me&rdquo; (24:13).",
      "Then Paul makes his great confession of faith: &ldquo;But this I confess to you, that according to the Way, which they call a sect, I worship the God of our fathers, believing everything laid down by the Law and written in the Prophets&rdquo; (24:14). Far from being an innovator or a heretic, Paul stands in continuity with the faith of Israel. The Way is no betrayal of the Scriptures but their fulfillment, rooted in the same God his accusers claim to serve.",
      "At the heart of his confession stands the resurrection: &ldquo;Having a hope in God, which these men themselves accept, that there will be a resurrection of both the just and the unjust&rdquo; (24:15). This hope is not a novelty but a shared conviction of the faithful in Israel. Paul grounds his entire life and ministry in the expectation that God will raise the dead, both the righteous and the wicked, to face him.",
      "From this hope flows the shape of his conduct: &ldquo;So I always take pains to have a clear conscience toward both God and man&rdquo; (24:16). The resurrection is no abstract doctrine but the wellspring of a holy life. Because Paul lives in view of a final reckoning, he strives to keep his conscience clear before God and people alike &mdash; an integrity his accusers cannot match.",
      "Paul then sets out what actually happened: &ldquo;Now after several years I came to bring alms to my nation and to present offerings&rdquo; (24:17). He had come on an errand of generosity and worship. &ldquo;While I was doing this, they found me purified in the temple, without any crowd or tumult. But some Jews from Asia &mdash; they ought to be here before you and to make an accusation, should they have anything against me&rdquo; (24:18&ndash;19). The original accusers are conspicuously absent, unable or unwilling to testify.",
      "Paul concludes by exposing the true heart of the matter: let those present state what wrongdoing they found, &ldquo;other than this one thing that I cried out while standing among them: It is with respect to the resurrection of the dead that I am on trial before you this day&rdquo; (24:21). The whole case, stripped of its rhetoric, comes down to a theological conviction. Paul stands accused not of crime but of believing that God raises the dead &mdash; the very hope that stands again at the center of his defense.",
    ],
  },
  {
    id: "Felix Procrastinates",
    heading: "Felix Procrastinates",
    reference: "Acts 24:22&ndash;27",
    paragraphs: [
      "&ldquo;But Felix, having a rather accurate knowledge of the Way, put them off, saying, When Lysias the tribune comes down, I will decide your case&rdquo; (24:22). The governor was not ignorant of the Christian movement; he knew enough to recognize that Paul had committed no crime. Yet rather than render a just verdict and release him, Felix seizes on a procedural excuse, postponing the decision under the pretext of awaiting the tribune&rsquo;s testimony.",
      "Even so, Felix treats Paul with a measure of leniency: &ldquo;He gave orders to the centurion that he should be kept in custody but have some liberty, and that none of his friends should be prevented from attending to his needs&rdquo; (24:23). Paul remains a prisoner, but not a harshly treated one. His friends may come and go, caring for him &mdash; a small mercy that nonetheless leaves him bound and his case unresolved.",
      "Some days later the scene becomes more personal: &ldquo;After some days Felix came with his wife Drusilla, who was Jewish, and he sent for Paul and heard him speak about faith in Christ Jesus&rdquo; (24:24). Drusilla was herself of Jewish descent, and the couple&rsquo;s curiosity brings them to hear the gospel from Paul&rsquo;s own lips. The prisoner becomes, for a moment, the preacher before the powerful.",
      "Paul does not soften his message to suit his audience: &ldquo;And as he reasoned about righteousness and self-control and the coming judgment, Felix was alarmed&rdquo; (24:25). These were pointed themes for a ruler known for injustice and a marriage of questionable origin. Paul speaks of righteousness to an unrighteous judge, of self-control to a man of unchecked appetites, and of judgment to one who imagined himself above account. The word strikes home, and Felix trembles.",
      "Yet conviction is not the same as conversion. Felix responds: &ldquo;Go away for the present. When I get an opportunity I will summon you&rdquo; (24:25). The trembling governor pushes the moment aside, promising himself a more convenient season that, so far as the record shows, never comes. It is one of Scripture&rsquo;s most sobering pictures of a soul moved by truth yet refusing to yield to it.",
      "His motives, moreover, were tainted by greed: &ldquo;At the same time he hoped that money would be given him by Paul. So he sent for him often and conversed with him&rdquo; (24:26). The repeated summons were not the searching of a hungry heart but the angling of a corrupt official for a bribe. Felix kept the door open to Paul not for the gospel&rsquo;s sake but for his own gain, and so the truth he heard so often left him untouched.",
      "The chapter ends with justice quietly abandoned: &ldquo;When two years had elapsed, Felix was succeeded by Porcius Festus. And desiring to do the Jews a favor, Felix left Paul in prison&rdquo; (24:27). For two long years Paul languished in custody, innocent and undecided, while the governor weighed political favor against righteousness and chose the favor. Felix passes from the stage as a study in conviction resisted and justice delayed &mdash; a warning to all who hear the truth and put off the day of decision.",
    ],
  },
];

const videoItems = [
  { videoId: "Ac4mZp2Qx7T", title: "BibleProject - Acts 24 Overview - Paul Before Felix" },
  { videoId: "Tb8nXt3Vb5L", title: "The Accusation of Tertullus - Rhetoric Against the Truth" },
  { videoId: "Pd2dYx7Ws9M", title: "Paul's Defense - the Hope of the Resurrection" },
  { videoId: "Fx6bRm4Tk1N", title: "Felix Procrastinates - Conviction Resisted, Justice Delayed" },
];

export default function Acts24GuidePage() {
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
            The Acts of the Apostles, Chapter 24
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul is tried before Governor Felix at Caesarea. The orator Tertullus flatters the governor and accuses Paul of being a troublemaker and a ringleader of the sect of the Nazarenes; Paul answers without flattery, affirming his worship of the God of his fathers and his hope in the resurrection; and Felix, though he trembles at Paul&rsquo;s words on righteousness and judgment, defers the case and leaves him in prison for two years.
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
              Deepen your study of Acts 24 through visual teaching on Paul&rsquo;s trial before Felix at Caesarea, the polished accusation of the orator Tertullus, Paul&rsquo;s courageous defense centered on the hope of the resurrection, and the sobering portrait of Felix &mdash; a ruler who trembled at the truth yet put off the day of decision.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Truth on Trial</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 24 sets the truth on trial before the powerful. Tertullus marshals flattery and rhetoric, but the case has no evidence; Paul answers with a clear conscience and grounds everything in the resurrection of the dead. Felix knows the Way and trembles at the message of righteousness, self-control, and coming judgment &mdash; yet he turns it aside for a more convenient season that never arrives, hoping instead for a bribe. Two years pass, and an innocent man remains in chains. It is a portrait of conviction resisted, of justice delayed, and of the perilous habit of putting off the day of decision.
          </p>
        </div>
      </main>
    </div>
  );
}
