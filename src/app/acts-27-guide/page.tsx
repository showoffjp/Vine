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
  "The Voyage Begins",
  "Storm and Encouragement",
  "Shipwreck and Deliverance",
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
    heading: "Overview of Acts 27",
    reference: "Acts 27:1&ndash;44",
    paragraphs: [
      "Acts chapter 27 is one of the most vivid and detailed narratives in all of Scripture, recounting Paul&rsquo;s dramatic sea voyage toward Rome as a prisoner. Luke, who sailed with him, gives an eyewitness account of remarkable precision &mdash; the harbors, the winds, the seamanship, and the slow disaster that overtakes the ship. Yet beneath the gripping tale of storm and shipwreck runs a deeper current: the providence of God carrying his servant safely toward Caesar&rsquo;s court, and through him preserving the lives of all who sail with him.",
      "It begins with the voyage itself (27:1&ndash;12). Under the centurion Julius, Paul and other prisoners set sail from Caesarea. After touching at Sidon and struggling past Cyprus, they transfer at Myra to an Alexandrian grain ship bound for Italy. Battling contrary winds, they barely reach Fair Havens on Crete. Paul warns that to sail on will bring injury and loss, but the centurion heeds the pilot and owner instead, and the majority resolve to press on toward a better harbor for wintering.",
      "Then the storm breaks (27:13&ndash;20). A gentle south wind tempts them out to sea, but soon a violent northeaster, called Euroclydon, seizes the ship and drives it helplessly. The sailors take desperate measures &mdash; undergirding the hull with ropes, lowering the gear, throwing cargo and tackle overboard. When neither sun nor stars appear for many days and the tempest rages without ceasing, all hope of being saved is at last abandoned. The ship and its crew are utterly at the mercy of the sea.",
      "Into this despair Paul speaks a word of hope (27:21&ndash;26). Standing among the exhausted and starving men, he tells them that an angel of the God to whom he belongs has stood before him in the night, assuring him that he must stand before Caesar and that God has granted him the lives of all who sail with him. &ldquo;Take heart,&rdquo; he says, &ldquo;for there will be no loss of life among you, but only of the ship.&rdquo; His faith becomes the anchor of the whole company.",
      "The chapter closes with shipwreck and deliverance (27:27&ndash;44). On the fourteenth night the sailors sense land, and soundings confirm the danger. Paul thwarts a cowardly attempt to abandon ship, urges all to eat for strength, and gives thanks to God before them. At daybreak the ship runs aground and breaks apart in the surf. The soldiers would kill the prisoners, but the centurion, wishing to save Paul, forbids it. And so, by swimming or clinging to planks, all 276 souls reach the shore of Malta safely.",
      "Read as a whole, Acts 27 is a stirring testimony to the faithfulness of God in the midst of overwhelming peril. Human counsel falters, the elements rage, and every natural hope fails &mdash; yet the word of the Lord stands sure. Paul, a prisoner in chains, becomes the true leader aboard the ship, steadying frightened men by his unwavering trust in God. The promise given to him is fulfilled to the letter: not one life is lost, and all are brought safely to land.",
    ],
  },
  {
    id: "The Voyage Begins",
    heading: "The Voyage from Caesarea to Fair Havens",
    reference: "Acts 27:1&ndash;12",
    paragraphs: [
      "&ldquo;And when it was decided that we should sail for Italy, they delivered Paul and some other prisoners to a centurion of the Augustan Cohort named Julius&rdquo; (27:1). With this verse the long journey to Rome at last begins. Luke&rsquo;s use of &ldquo;we&rdquo; reminds us that he is an eyewitness, sailing alongside the apostle. Paul is committed to the care of Julius, a Roman officer of some rank, who will prove throughout the voyage to be a man of fairness and, in the end, the human instrument of Paul&rsquo;s preservation.",
      "Sailing first in a ship of Adramyttium, with Aristarchus the Macedonian also aboard, they put in at Sidon, &ldquo;and Julius treated Paul kindly and gave him leave to go to his friends and be cared for&rdquo; (27:3). This early kindness sets the tone of the centurion&rsquo;s regard for his prisoner. Even in chains and bound for trial, Paul is surrounded by friends and shown unusual courtesy, a quiet token of the favor that the Lord grants his servant even in the hands of his captors.",
      "&ldquo;And putting out to sea from there we sailed under the lee of Cyprus, because the winds were against us&rdquo; (27:4). Already the contrary winds that will dominate the chapter make themselves felt. The ship must take the sheltered route, hugging the coast to make any progress at all. At Myra in Lycia the centurion finds an Alexandrian ship bound for Italy &mdash; one of the great grain ships that fed Rome &mdash; and puts his prisoners aboard her for the longer crossing westward.",
      "&ldquo;We sailed slowly for a number of days and arrived with difficulty off Cnidus, and as the wind did not allow us to go farther, we sailed under the lee of Crete off Salmone&rdquo; (27:7). The voyage is a constant struggle against the elements. Every mile is hard-won, the wind forever opposing them, until they manage with great effort to round the eastern cape of Crete and creep along its sheltered southern shore to a place fittingly called Fair Havens, near the city of Lasea.",
      "By now the season has grown dangerous for sailing, &ldquo;because even the Fast was already over&rdquo; (27:9), and Paul, a seasoned traveler, gives them solemn warning: &ldquo;Sirs, I perceive that the voyage will be with injury and much loss, not only of the cargo and the ship, but also of our lives&rdquo; (27:10). His counsel is not mere caution but the discernment of a man who has known shipwreck before and walks closely with God. He urges them to winter where they are.",
      "&ldquo;But the centurion paid more attention to the pilot and to the owner of the ship than to what Paul said&rdquo; (27:11). Here is the fateful choice that sets the disaster in motion. Faced with the competing voices of the experienced seamen and the imprisoned apostle, Julius trusts the professionals and the financial stake of the owner. It is the natural and reasonable decision by every worldly measure, yet it sets human counsel directly against a divinely prompted warning.",
      "&ldquo;And because the harbor was not suitable to spend the winter in, the majority decided to put out to sea from there, on the chance that somehow they could reach Phoenix, a harbor of Crete&hellip; and spend the winter there&rdquo; (27:12). The decision is made by majority vote, swayed by the inadequacy of Fair Havens and the hope of a more comfortable port just a little farther on. It is a study in the weighing of human counsel against divine warning &mdash; and the storm soon to come will vindicate the word they set aside.",
    ],
  },
  {
    id: "Storm and Encouragement",
    heading: "The Storm and Paul&rsquo;s Encouragement",
    reference: "Acts 27:13&ndash;26",
    paragraphs: [
      "&ldquo;Now when the south wind blew gently, supposing that they had obtained their purpose, they weighed anchor and sailed along Crete, close to the shore&rdquo; (27:13). The voyage resumes under the most favorable of signs. A soft south wind seems to promise an easy passage to Phoenix, and the sailors, confident their plan will succeed, slip out along the coast. The gentle breeze is a deceiver, luring them from the shelter of Fair Havens into the open water where catastrophe awaits.",
      "&ldquo;But soon a tempestuous wind, called the northeaster, struck down from the land&rdquo; (27:14). Without warning the calm is shattered. A violent wind &mdash; the dreaded Euroclydon &mdash; sweeps down from the high ground of Crete and seizes the ship. Unable to turn her bow into the gale, the sailors can only give way and let her be driven before it. In an instant the easy hopes of the morning are swallowed up in a struggle for survival against an unrelenting storm.",
      "The crew resorts to every device of ancient seamanship: &ldquo;They used supports to undergird the ship&rdquo; (27:17), passing ropes beneath the hull to hold the straining timbers together, and they lowered the gear and let the vessel be driven. Fearing the shoals of Syrtis off the African coast, they did all they could to slow her headlong flight. Their frantic labor shows how grave the danger was, and how little their skill could avail against the fury of the sea.",
      "&ldquo;Since we were violently storm-tossed, they began the next day to jettison the cargo. And on the third day they threw the ship&rsquo;s tackle overboard with their own hands&rdquo; (27:18&ndash;19). One by one the precious things are surrendered to the waves &mdash; first the cargo of grain that was the voyage&rsquo;s very purpose, then the ship&rsquo;s own tackle. Each act of casting away measures the rising desperation of men who will give up anything to stay afloat a little longer in the teeth of the storm.",
      "&ldquo;When neither sun nor stars appeared for many days, and no small tempest lay on us, all hope of our being saved was at last abandoned&rdquo; (27:20). This is the lowest point of the narrative. Without sun by day or stars by night, the sailors have no means of reckoning their position and are utterly lost. The relentless storm and the impenetrable darkness crush the last flicker of hope. By every human measure the ship and all aboard are doomed.",
      "Into this blackness Paul rises to speak: &ldquo;Take heart, for there will be no loss of life among you, but only of the ship. For this very night an angel of the God to whom I belong and whom I worship stood before me and said, Do not be afraid, Paul; you must stand before Caesar. And behold, God has granted you all those who sail with you&rdquo; (27:22&ndash;24). The prisoner becomes the comforter, and the heavenly promise turns despair to hope in a single word from God.",
      "&ldquo;So take heart, men, for I have faith in God that it will be exactly as I have been told. But we must run aground on some island&rdquo; (27:25&ndash;26). Paul&rsquo;s confidence rests not on the weather or the seamanship but wholly upon the word of the Lord. He does not promise a smooth deliverance &mdash; the ship will yet be lost on some shore &mdash; but he stakes everything on the faithfulness of God to keep his promise. Here is faith and leadership in crisis, anchoring frightened men to a sure and steadfast hope.",
    ],
  },
  {
    id: "Shipwreck and Deliverance",
    heading: "Shipwreck and the Deliverance of All",
    reference: "Acts 27:27&ndash;44",
    paragraphs: [
      "&ldquo;When the fourteenth night had come, as we were being driven across the Adriatic Sea, about midnight the sailors suspected that they were nearing land&rdquo; (27:27). After two weeks adrift in the tempest, some instinct of the sea &mdash; perhaps the sound of breakers &mdash; tells the sailors that land is near. They take soundings and find the water shallowing rapidly, from twenty fathoms to fifteen. Fearing they will be dashed upon unseen rocks in the dark, they let down four anchors from the stern and long for daybreak.",
      "&ldquo;And as the sailors were seeking to escape from the ship, and had lowered the ship&rsquo;s boat into the sea under pretense of laying out anchors from the bow&rdquo; (27:30), a cowardly plot unfolds. The seamen, knowing best the peril, scheme to save themselves and leave the rest to perish. But Paul perceives it and warns the centurion, &ldquo;Unless these men stay in the ship, you cannot be saved&rdquo; (27:31). The soldiers cut away the boat&rsquo;s ropes and let it fall, and the company is bound together for deliverance.",
      "&ldquo;As day was about to dawn, Paul urged them all to take some food, saying, Today is the fourteenth day that you have continued in suspense and without food&rdquo; (27:33). For a fortnight fear has robbed them of appetite and strength, and Paul, ever the wise leader, calls them to eat that they may be fit for the ordeal ahead. His care for their bodies is of a piece with his care for their souls, and he sets before them a renewed promise of safety.",
      "&ldquo;For not a hair is to perish from the head of any of you. And when he had said these things, he took bread, and giving thanks to God in the presence of all he broke it and began to eat&rdquo; (27:34&ndash;35). Before pagan sailors and Roman soldiers, Paul openly gives thanks to his God and breaks bread, a quiet act of worship that becomes a sermon. Encouraged by his calm faith, all 276 souls aboard take heart and eat, and strength returns to the famished company.",
      "&ldquo;And when they had eaten enough, they lightened the ship, throwing out the wheat into the sea&rdquo; (27:38). The last of the grain cargo, the very reason for the voyage, is cast overboard to raise the ship higher in the water for the run to shore. When day comes they do not recognize the land, but they see a bay with a beach and resolve to drive the ship onto it, casting off the anchors and hoisting the foresail to the wind.",
      "&ldquo;But striking a reef, they ran the vessel aground. The bow stuck and remained immovable, and the stern was being broken up by the surf&rdquo; (27:41). The ship meets its foretold end, fast at the bow and shattering at the stern under the pounding waves. The vessel is lost exactly as Paul had said, yet the lives aboard are not. At this final crisis a new danger arises, for the soldiers propose to kill the prisoners, lest any escape by swimming and cost them their own lives.",
      "&ldquo;But the centurion, wishing to save Paul, kept them from carrying out their plan&rdquo; (27:43). The favor God had shown the apostle now becomes the salvation of all. For Paul&rsquo;s sake Julius forbids the slaughter and orders those who can swim to make for land first, and the rest to follow on planks and broken pieces of the ship. &ldquo;And so it was that all were brought safely to land&rdquo; (27:44). God&rsquo;s promise is fulfilled to the letter: not one of the 276 is lost, and the word spoken in the storm stands true.",
    ],
  },
];

const videoItems = [
  { videoId: "Pn5kSm8Lr2Q", title: "BibleProject - Acts 27 and Paul's Voyage to Rome" },
  { videoId: "Rt7cVp4Hs9N", title: "Sailing to Fair Havens - Human Counsel and Divine Warning" },
  { videoId: "St6gWx2Bn5M", title: "The Northeaster - Paul's Faith in the Storm" },
  { videoId: "Tp9fXw3Cn7R", title: "Shipwreck at Malta - All Brought Safely to Land" },
];

export default function Acts27GuidePage() {
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
            The Acts of the Apostles, Chapter 27
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s dramatic sea voyage toward Rome carries him from Caesarea past Crete into the grip of a violent northeaster called Euroclydon. When all hope is abandoned, an angel assures him that no life will be lost, only the ship, and the prisoner becomes the true leader aboard. The vessel runs aground and breaks apart, yet all 276 souls reach the shore of Malta safely &mdash; God&rsquo;s promise fulfilled to the letter.
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
              Deepen your study of Acts 27 through visual teaching on Paul&rsquo;s voyage from Caesarea and the warning he gave at Fair Havens, the violent northeaster that drove the ship and the angel&rsquo;s promise in the night, the apostle&rsquo;s steadying faith and leadership amid the storm, and the shipwreck at Malta that brought all 276 souls safely to land.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Providence of God in the Storm</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 27 is a stirring testimony to the faithfulness of God in the midst of overwhelming peril. Human counsel falters, the elements rage, and every natural hope fails &mdash; yet the word of the Lord stands sure. Paul, a prisoner in chains, becomes the true leader aboard the ship, steadying frightened men by his unwavering trust in God. The promise given to him is fulfilled to the letter: not one life is lost, and all 276 are brought safely to land.
          </p>
        </div>
      </main>
    </div>
  );
}
