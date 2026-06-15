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
  "Festus and the Plot",
  "I Appeal to Caesar",
  "Festus Consults Agrippa",
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
    heading: "The Road to Rome Through Caesar's Tribunal",
    reference: "Acts 25",
    paragraphs: [
      "Acts 25 marks a decisive turn in Paul&rsquo;s long journey toward Rome. After two years of imprisonment under Felix, a new governor arrives, and the unresolved case against Paul is reopened. The chapter moves through three scenes &mdash; a plot in Jerusalem, a trial at Caesarea that ends with Paul&rsquo;s appeal to Caesar, and a consultation between Festus and King Agrippa &mdash; and through all of them God&rsquo;s purpose, declared back in Acts 9:15 that Paul would carry his name before kings, steadily advances.",
      "Festus, the new governor, succeeds Felix and inherits a prisoner whose case the Jewish leaders are determined to settle on their own terms. Three days after arriving in the province he goes up to Jerusalem, where the chief priests and principal men lay out their case against Paul and request, as a favor, that Paul be summoned there. Their request masks a deadly intent: they are planning an ambush to kill him on the road. Festus, however, insists that the trial be held at Caesarea, where Paul is being kept (vv.1&ndash;5).",
      "At Caesarea the tribunal convenes. The Jews from Jerusalem stand around Paul bringing many and serious charges that they cannot prove, while Paul calmly answers that he has committed no offense against the law, the temple, or Caesar. When Festus, wishing to do the Jews a favor, proposes that Paul be tried in Jerusalem, Paul makes the momentous decision that will set the course of the rest of Acts: as a Roman citizen he appeals to Caesar (vv.6&ndash;12).",
      "The final scene introduces two new figures of rank. King Agrippa II and his sister Bernice arrive at Caesarea to welcome the new governor, and Festus takes the opportunity to lay Paul&rsquo;s puzzling case before the king. He admits the dispute is not about the crimes he expected but about points of their own religion and about a certain Jesus, who had died but whom Paul asserted to be alive. Agrippa expresses a wish to hear the man himself, and a grand hearing is arranged (vv.13&ndash;27).",
      "Throughout the chapter Luke contrasts the machinery of Roman justice with the lethal conspiracy of Paul&rsquo;s accusers. Roman due process, for all its compromises, repeatedly preserves Paul&rsquo;s life and unwittingly serves God&rsquo;s plan to bring him to Rome. Festus is shown as a politician eager to please the Jews yet unable to find any real crime, while Paul stands as a man secure in his innocence and his rights, calmly steering toward the destiny God has promised him.",
      "Acts 25 teaches that the Lord governs the courts and corridors of empire as surely as he governs the church. Paul does not escape his trials, but neither is he destroyed by them; the very legal maneuvers meant to entrap him become the means by which he is carried, at imperial expense and under Roman guard, toward the heart of the Roman world to bear witness to Christ. The stage is being set for Paul&rsquo;s great defense before kings.",
    ],
  },
  {
    id: "Festus and the Plot",
    heading: "Festus and the Plot Against Paul",
    reference: "Acts 25:1&ndash;5",
    paragraphs: [
      "The chapter opens with a change of administration. &ldquo;Now three days after Festus had arrived in the province, he went up to Jerusalem from Caesarea&rdquo; (v.1). Porcius Festus has replaced Felix, who had left Paul in prison as a favor to the Jews. The new governor wastes no time; almost immediately he travels to Jerusalem to acquaint himself with the religious leadership of the province, and there the unfinished business of Paul is waiting for him.",
      "The leaders seize the moment. &ldquo;And the chief priests and the principal men of the Jews laid out their case against Paul, and they urged him, asking as a favor against Paul that he summon him to Jerusalem&rdquo; (vv.2&ndash;3). Two years have passed since Paul was last in their hands, yet their hostility has not cooled. They press the inexperienced governor for a seemingly reasonable concession: simply move the prisoner to Jerusalem for trial.",
      "Luke exposes the deadly intent beneath the polite request. They asked for the transfer &ldquo;because they were planning an ambush to kill him on the way&rdquo; (v.3). This is the same murderous strategy that had surfaced earlier in Acts, when more than forty men bound themselves by oath to kill Paul. The favor they request of Festus is in fact a cover for assassination; the legal process is being used as bait to lure Paul onto the open road where he can be struck down.",
      "Festus, perhaps by instinct or by Roman protocol, declines to hand over his prisoner. &ldquo;Festus replied that Paul was being kept at Caesarea and that he himself intended to go there shortly&rdquo; (v.4). Whether or not he suspects the plot, his answer preserves Paul&rsquo;s life. The seat of Roman government in the province is Caesarea, and the governor keeps the case there, on his own ground, rather than yielding to the convenience of the accusers.",
      "Instead he offers a fair and orderly alternative. &ldquo;So, said he, let the men of authority among you go down with me, and if there is anything wrong about the man, let them bring charges against him&rdquo; (v.5). Festus insists on due process: let the accusers come to the proper venue and state their case in open court. The burden is placed where Roman law placed it &mdash; on those who would accuse, to prove their charges before the tribunal.",
      "The scene sets Roman due process against murderous conspiracy and quietly demonstrates how God can use even imperfect human institutions to shield his servant. The accusers want a verdict by ambush; Festus wants a trial by evidence. In the providence of God, the procedural insistence of a pagan governor &mdash; concerned mainly with order and his own jurisdiction &mdash; becomes the instrument that keeps Paul alive for the witness still to come. The plot is foiled not by Paul&rsquo;s cleverness but by the ordinary workings of a court he never controlled.",
    ],
  },
  {
    id: "I Appeal to Caesar",
    heading: "Paul Appeals to Caesar",
    reference: "Acts 25:6&ndash;12",
    paragraphs: [
      "Festus keeps his word and returns to Caesarea to hold court. &ldquo;After he stayed among them not more than eight or ten days, he went down to Caesarea. And the next day he took his seat on the tribunal and ordered Paul to be brought&rdquo; (v.6). The proper venue is honored, the bench is taken, and the prisoner is summoned. The full apparatus of Roman justice is now arrayed around the apostle.",
      "The accusers press their case but cannot make it stick. &ldquo;When he had arrived, the Jews who had come down from Jerusalem stood around him, bringing many and serious charges against him that they could not prove&rdquo; (v.7). The charges are loud and grave, but they are also empty &mdash; no evidence supports them. Luke&rsquo;s careful wording underlines Paul&rsquo;s innocence: the accusations are serious in tone but groundless in substance.",
      "Paul&rsquo;s defense is brief and comprehensive. &ldquo;Neither against the law of the Jews, nor against the temple, nor against Caesar have I committed any offense&rdquo; (v.8). With a single sentence he answers every category of charge that could be raised &mdash; religious, sacred, and political. He has broken neither the law of Moses, nor the sanctity of the temple, nor the authority of Rome. There is no crime to which his accusers can point.",
      "Then the governor&rsquo;s political instincts surface. &ldquo;But Festus, wishing to do the Jews a favor, said to Paul, Do you wish to go up to Jerusalem and there be tried on these charges before me?&rdquo; (v.9). Like Felix before him, Festus is more interested in placating the powerful than in protecting the innocent. His proposal would deliver Paul precisely into the danger he had so far escaped, returning the trial to the city where an ambush awaits.",
      "Paul, knowing the danger and asserting his rights as a Roman citizen, refuses to be moved. &ldquo;I am standing before Caesar&rsquo;s tribunal, where I ought to be tried. To the Jews I have done no wrong, as you yourself know very well&rdquo; (v.10). He grants Roman justice its proper place: &ldquo;If then I am a wrongdoer and have committed anything for which I deserve to die, I do not seek to escape death. But if there is nothing to their charges that these men bring against me, no one can give me up to them.&rdquo; Then comes the decisive word: &ldquo;I appeal to Caesar&rdquo; (v.11).",
      "The appeal settles everything. As a Roman citizen Paul invokes his right to be tried before the emperor himself, lifting his case out of the provincial court and the reach of his enemies. &ldquo;Then Festus, when he had conferred with his council, answered, To Caesar you have appealed; to Caesar you shall go&rdquo; (v.12). With that exchange the trajectory of the rest of Acts is fixed. The man who longed to see Rome will go there not as a tourist but as a prisoner of the gospel, carried by the very legal system that could not condemn him &mdash; the decisive turn toward Rome.",
    ],
  },
  {
    id: "Festus Consults Agrippa",
    heading: "Festus Consults King Agrippa",
    reference: "Acts 25:13&ndash;27",
    paragraphs: [
      "A new pair of dignitaries arrives on the scene. &ldquo;Now when some days had passed, Agrippa the king and Bernice arrived at Caesarea and greeted Festus&rdquo; (v.13). Herod Agrippa II, last of the Herodian line, comes with his sister Bernice to pay a courtesy visit to the new governor. Their arrival gives Festus a welcome opportunity to seek counsel on a case he plainly does not understand.",
      "Festus lays the matter before the king. He explains that Felix had left a prisoner behind, that the chief priests and elders of the Jews had asked for a sentence of condemnation against him in Jerusalem, and that he had answered them with the Roman principle that no man is given up before he has faced his accusers and had opportunity to make his defense (vv.14&ndash;16). Festus presents himself as a fair administrator, careful to observe due process even under pressure.",
      "What puzzles him most is the nature of the dispute. When the accusers stood up, &ldquo;they brought no charge in his case of such evils as I supposed. Rather they had certain points of dispute with him about their own religion and about a certain Jesus, who was dead, but whom Paul asserted to be alive&rdquo; (vv.18&ndash;19). To the Roman governor the heart of the matter is bewildering &mdash; a quarrel over religion and over a dead man whom Paul insists is living. Without knowing it, Festus has stated the very heart of the gospel: the resurrection of Jesus.",
      "Festus describes how the case reached its present impasse. Being at a loss how to investigate such questions, he had asked Paul whether he was willing to be tried in Jerusalem, &ldquo;but when Paul had appealed to be kept in custody for the decision of the emperor, I ordered him to be held until I could send him to Caesar&rdquo; (v.21). The appeal has tied the governor&rsquo;s hands; Paul must now go to Rome, and Festus is left with the problem of what to write about him. Agrippa responds, &ldquo;I should like to hear the man myself,&rdquo; and Festus promises, &ldquo;Tomorrow you will hear him&rdquo; (v.22).",
      "The next day unfolds with imperial splendor. &ldquo;So on the next day Agrippa and Bernice came with great pomp, and they entered the audience hall with the military tribunes and the prominent men of the city. Then, at the command of Festus, Paul was brought in&rdquo; (v.23). The full pageantry of Roman and Herodian power is gathered to hear a single prisoner of Christ. Festus presents Paul and explains that the whole Jewish people had petitioned for his death, yet he had found that Paul had done nothing deserving death (vv.24&ndash;25).",
      "Festus confesses his predicament with surprising candor. &ldquo;But I have nothing definite to write to my lord about him. Therefore I have brought him before you all, and especially before you, King Agrippa, so that, after we have examined him, I may have something to write&rdquo; (v.26). The governor hopes the hearing will supply the charges he lacks: &ldquo;For it seems to me unreasonable, in sending a prisoner, not to indicate the charges against him&rdquo; (v.27). So the stage is set, exactly as the Lord foretold in Acts 9:15, for Paul to bear the name of Christ before kings &mdash; an innocent man, surrounded by the powerful, about to make his great defense.",
    ],
  },
];

const videoItems = [
  { videoId: "Pa7vK3nB2Lx", title: "Acts 25 - Paul's Appeal and the Road to Rome" },
  { videoId: "Ct5wM8Rd1Hq", title: "Festus and the Plot - Roman Justice Versus Conspiracy" },
  { videoId: "Qz4kT2Vx9Jr", title: "I Appeal to Caesar - Paul Asserts His Roman Rights" },
  { videoId: "Wb6xN5Bp3Hy", title: "Before Kings - Festus Consults Agrippa and Bernice" },
];

export default function Acts25GuidePage() {
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
            Acts 25
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Festus inherits Paul&rsquo;s case and resists a plot to ambush him, the trial at Caesarea ends with Paul&rsquo;s momentous appeal to Caesar, and Festus lays the puzzling case before King Agrippa and Bernice as the stage is set for Paul to testify before kings.
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
              Deepen your study of Acts 25 through visual teaching on the foiled plot against Paul, his decisive appeal to Caesar as a Roman citizen, and the grand hearing before King Agrippa and Bernice that sets the stage for Paul&rsquo;s defense before kings.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Before Kings</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 25 shows the Lord governing the courts of empire as surely as he governs the church. The plots and political maneuvers meant to destroy Paul instead carry him, under Roman guard and at imperial expense, toward Rome &mdash; fulfilling the word of Acts 9:15 that he would bear Christ&rsquo;s name before kings. The innocent prisoner is never in control of the court, yet never beyond the care of his Lord.
          </p>
        </div>
      </main>
    </div>
  );
}
