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

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface ContentBlock {
  heading: string;
  reference: string;
  accent: string;
  paragraphs: string[];
}

interface TabContent {
  id: Tab;
  intro: string;
  blocks: ContentBlock[];
}

const tabContent: TabContent[] = [
  {
    id: "Overview",
    intro:
      "Acts 5 holds together two scenes that seem worlds apart: the sudden deaths of Ananias and Sapphira inside the church, and the unstoppable advance of the apostolic witness outside it. The chapter shows a God so holy that hypocrisy among his people is a deadly matter, and so powerful that no prison, council, or threat can silence the gospel. From a fear that fell upon the whole church to apostles rejoicing that they were counted worthy to suffer, Acts 5 reveals the awesome holiness and irresistible mission of the risen Christ.",
    blocks: [
      {
        heading: "The Shape of Acts 5",
        reference: "Acts 5:1&ndash;42",
        accent: ROSE,
        paragraphs: [
          "Acts 5 stands at a hinge point in Luke&rsquo;s account of the early church. Chapter 4 had ended on a note of radiant generosity: the believers were of one heart and soul, and Barnabas sold a field and laid the money at the apostles&rsquo; feet (Acts 4:32&ndash;37). Chapter 5 opens with a dark counterfeit of that same act, as Ananias and Sapphira sell a property but conspire to keep back part of the price while pretending to give it all. The juxtaposition is deliberate and devastating, setting genuine sacrifice beside its hypocritical imitation.",
          "The chapter unfolds in three movements. First comes the judgment within the church: the lie of Ananias and Sapphira, their sudden deaths, and the great fear that fell upon all who heard (5:1&ndash;11). Second comes the power of the apostolic witness: signs and wonders multiply, the sick are brought into the streets that Peter&rsquo;s shadow might fall on them, and multitudes are healed (5:12&ndash;16). Third comes the collision with the authorities: arrest, angelic deliverance, trial before the council, Gamaliel&rsquo;s counsel, the beating of the apostles, and their joyful, unbroken witness (5:17&ndash;42).",
          "These movements are not three disconnected stories but a single portrait of a church marked by the presence of God. The same holiness that struck down Ananias and Sapphira filled the apostles with power to heal, emboldened them before the Sanhedrin, and sustained them in joy under the lash. Luke wants the reader to see that the God who is fearful in judgment is the same God who is mighty in mission. The fear within and the boldness without flow from one source: the living presence of the Holy Spirit in the community of the resurrected Lord.",
          "Acts 5 also marks the intensification of opposition. In chapter 4 the apostles were merely warned; in chapter 5 they are imprisoned, miraculously freed, re-arrested, tried, and beaten. The pattern that will run through the rest of Acts is now established: persecution rises, but it cannot stop the word; indeed, it scatters and spreads it. The chapter ends not with the church cowering but with the apostles, every single day, in the temple and from house to house, never ceasing to teach and preach that the Christ is Jesus.",
          "Above all, Acts 5 is a chapter about the holiness and power of God meeting a world that is not ready for either. The early church was not a tame religious society but a community ablaze with the presence of God, dangerous to hypocrites and irresistible to the honest, feared by the authorities and yet daily adding to its number. To read Acts 5 is to be confronted with the question of whether we still believe in a God this holy and this powerful, and whether our churches still bear the marks of his nearness.",
        ],
      },
      {
        heading: "Ananias, Sapphira, and the Fear of God",
        reference: "Acts 5:1&ndash;11",
        accent: GOLD,
        paragraphs: [
          "The story of Ananias and Sapphira is one of the most sobering in the New Testament. A married couple sells a piece of property and brings part of the proceeds to the apostles, but they present it as though it were the whole. Peter sees through the deception at once: &ldquo;Ananias, why has Satan filled your heart to lie to the Holy Spirit and to keep back for yourself part of the proceeds of the land?&rdquo; (5:3). The sin was not that they kept back part of the money &mdash; Peter makes clear the property and proceeds were entirely theirs to do with as they pleased (5:4). The sin was the lie, the staged appearance of total devotion that concealed a divided heart.",
          "Peter&rsquo;s words pierce to the heart of the offense: &ldquo;You have not lied to man but to God&rdquo; (5:4). This is one of the great incidental affirmations of the deity and personhood of the Holy Spirit in all of Scripture. To lie to the Holy Spirit is to lie to God. The Spirit is not an impersonal influence or a force but a divine Person who can be lied to, grieved, and tested. When Ananias hears these words, he falls down and breathes his last, and great fear comes upon all who hear of it (5:5).",
          "Three hours later the scene repeats with terrible symmetry. Sapphira enters, not knowing what has happened, and Peter gives her the chance to tell the truth: &ldquo;Tell me whether you sold the land for so much&rdquo; (5:8). She repeats the lie. Peter responds, &ldquo;How is it that you have agreed together to test the Spirit of the Lord? Behold, the feet of those who buried your husband are at the door, and they will carry you out&rdquo; (5:9). Immediately she falls down at his feet and dies, and the young men carry her out and bury her beside her husband.",
          "Luke records the result with a single, weighty phrase: &ldquo;And great fear came upon the whole church and upon all who heard of these things&rdquo; (5:11). This is, notably, the first time Luke uses the word church (ekklesia) in Acts, and he attaches it to the fear of God. The episode teaches that the holiness of God is not suspended within the community of grace but is, if anything, more intensely present there. The God who dwells among his people will not be mocked by hearts that play at devotion while harboring deceit.",
        ],
      },
    ],
  },
  {
    id: "Key Themes",
    intro:
      "Acts 5 weaves together the great themes of the early church: the holiness of God and the seriousness of hypocrisy, the reverent fear that marked the believing community, the irresistible power of the apostolic witness, the rhythm of persecution and divine deliverance, the principle that we must obey God rather than men, and the strange joy of suffering dishonor for the name of Jesus. Each theme reveals a different facet of a church living consciously in the presence of the risen Lord.",
    blocks: [
      {
        heading: "Holiness, Hypocrisy, and the Sin in the Camp",
        reference: "Acts 5:1&ndash;11",
        accent: PURPLE,
        paragraphs: [
          "The judgment upon Ananias and Sapphira can only be understood against the backdrop of the Old Testament, and especially the account of Achan in Joshua 7. Just as Israel had crossed the Jordan and won its first great victory at Jericho, sin entered the camp: Achan secretly kept for himself what had been devoted to God, and his hidden disobedience brought defeat and death until it was exposed. Ananias and Sapphira stand at an equally foundational moment, the birth of the church, and their secret sin is judged with equal severity. At critical thresholds in redemptive history, God acts decisively to establish the holiness of his people.",
          "The contrast with Barnabas is pointed and deliberate. In the verses immediately preceding (Acts 4:36&ndash;37), Barnabas sold a field and laid the entire proceeds at the apostles&rsquo; feet, an act of genuine, open-hearted generosity. Ananias and Sapphira imitate the outward form of his sacrifice while emptying it of its truth. Theirs is the sin of religious pretense, the desire to be seen as wholly devoted while secretly holding back. The church has always been more endangered by its hypocrites than by its open enemies, and Acts 5 makes the danger visible.",
          "What made their sin so grave was not the amount withheld but the deception itself, the attempt to deceive the community and, through it, to lie to the Holy Spirit. They wanted the reputation of total surrender without its reality. In a community whose whole life depended on the truthfulness of shared love, such a lie was not a private matter but a poison at the root. God&rsquo;s swift judgment preserved the integrity of the newborn church and taught it forever that he sees the heart and will not be deceived.",
          "The lesson is not that God strikes down every hypocrite on the spot &mdash; if he did, few would survive any Sunday. The lesson is that hypocrisy is deadly serious in the eyes of a holy God, and that the apparent ordinariness of our deceptions does not lessen their offense. The fear that fell upon the church was a healthy fear, the beginning of wisdom, a recovery of the truth that the God who is love is also a consuming fire. Acts 5 calls the modern church to recover that same reverent awe.",
        ],
      },
      {
        heading: "Power, Persecution, and Divine Deliverance",
        reference: "Acts 5:12&ndash;26",
        accent: TEAL,
        paragraphs: [
          "Following the judgment within, Luke turns to the power displayed without. &ldquo;Now many signs and wonders were regularly done among the people by the hands of the apostles&rdquo; (5:12). The believers gathered together in Solomon&rsquo;s Portico, and though none dared join them lightly, the people held them in high esteem and more than ever believers were added to the Lord, multitudes of both men and women (5:13&ndash;14). So great was the expectation of God&rsquo;s power that the sick were carried into the streets on cots and mats, that at least the shadow of Peter passing by might fall on some of them (5:15).",
          "Crowds gathered even from the towns around Jerusalem, bringing the sick and those afflicted with unclean spirits, &ldquo;and they were all healed&rdquo; (5:16). The same holiness that had brought death to the deceivers brought healing and life to the broken. Luke is showing that the power of God in the early church was not a vague spiritual atmosphere but a concrete, visible reality that drew the desperate and the dying. The presence of God among his people was a magnet to all who knew their need.",
          "Such visible power provoked predictable opposition. &ldquo;But the high priest rose up, and all who were with him (that is, the party of the Sadducees), and filled with jealousy they arrested the apostles and put them in the public prison&rdquo; (5:17&ndash;18). Luke names the true motive plainly: jealousy. The Sadducees, who controlled the temple and denied the resurrection, could not abide a movement that proclaimed the risen Christ and drew the multitudes they coveted. Persecution in Acts is rarely about pure doctrine; it is tangled with the politics of power and the envy of those who feel their authority slipping.",
          "But the prison could not hold what God intended to send forth. &ldquo;During the night an angel of the Lord opened the prison doors and brought them out, and said, Go and stand in the temple and speak to the people all the words of this Life&rdquo; (5:19&ndash;20). The deliverance was not for the sake of comfort but for the sake of mission; God freed them not to flee but to preach. At daybreak they obeyed, entering the temple and teaching, while the bewildered council found the prison securely locked and the guards in place but the prisoners gone (5:21&ndash;23). The rhythm of Acts is set: opposition rises, God delivers, the witness continues.",
        ],
      },
    ],
  },
  {
    id: "Verse by Verse",
    intro:
      "The climax of Acts 5 is the second trial before the Sanhedrin, where the apostles utter the great charter of Christian conscience and Gamaliel speaks his famous warning. Here the gospel meets the full weight of religious and political authority, and here the church learns what it means to obey God rather than men and to rejoice in the dishonor suffered for the name of Jesus.",
    blocks: [
      {
        heading: "We Must Obey God Rather Than Men",
        reference: "Acts 5:27&ndash;33",
        accent: GREEN,
        paragraphs: [
          "Re-arrested and brought again before the council, the apostles face the high priest&rsquo;s accusation: &ldquo;We strictly charged you not to teach in this name, yet here you have filled Jerusalem with your teaching, and you intend to bring this man&rsquo;s blood upon us&rdquo; (5:28). The charge unwittingly testifies to the apostles&rsquo; success: Jerusalem has been filled with the teaching. And the council&rsquo;s reluctance even to name Jesus &mdash; speaking only of &ldquo;this name&rdquo; and &ldquo;this man&rdquo; &mdash; betrays their guilty awareness of whose blood they had demanded.",
          "Peter and the apostles answer with the sentence that has steadied the conscience of the persecuted church ever since: &ldquo;We must obey God rather than men&rdquo; (5:29). This is the foundational principle of Christian civil disobedience. It is not a charter for lawlessness or rebellion against legitimate authority, for the same apostles taught submission to governing powers (Romans 13, 1 Peter 2). It is the recognition that when human authority commands what God forbids, or forbids what God commands, the believer&rsquo;s higher allegiance is clear. Where the lesser authority contradicts the greater, the greater must be obeyed.",
          "Peter does not stop at the principle but presses on to the gospel itself: &ldquo;The God of our fathers raised Jesus, whom you killed by hanging him on a tree. God exalted him at his right hand as Leader and Savior, to give repentance to Israel and forgiveness of sins&rdquo; (5:30&ndash;31). Even on trial for his life, Peter preaches: the crucifixion, the resurrection, the exaltation, the offer of repentance and forgiveness. He names their guilt yet holds out grace, for repentance and forgiveness are offered even to the very men who killed the Lord. The apostles add, &ldquo;And we are witnesses to these things, and so is the Holy Spirit, whom God has given to those who obey him&rdquo; (5:32).",
          "The response of the council is murderous rage: &ldquo;When they heard this, they were enraged and wanted to kill them&rdquo; (5:33). The same hardened hearts that had condemned Jesus now turned their fury on his witnesses. Luke is unflinching about the cost of faithful testimony. To speak the truth of the resurrection in a hostile world is to risk the wrath of those who have built their lives and their power upon its denial. The apostles had counted that cost and would not be silenced.",
        ],
      },
      {
        heading: "Gamaliel's Counsel and Rejoicing in Suffering",
        reference: "Acts 5:34&ndash;42",
        accent: GOLD,
        paragraphs: [
          "Into this murderous moment steps an unexpected voice of restraint: &ldquo;But a Pharisee in the council named Gamaliel, a teacher of the law held in honor by all the people, stood up and gave orders to put the men outside for a little while&rdquo; (5:34). Gamaliel, the respected teacher who had trained the young Saul of Tarsus, counsels caution. He cites two recent examples of failed movements: Theudas, who rose up claiming to be somebody and was killed, his followers scattered to nothing (5:36); and Judas the Galilean, who drew people after him in the days of the census and likewise perished, his followers dispersed (5:37).",
          "From these examples Gamaliel draws his famous principle: &ldquo;So in the present case I tell you, keep away from these men and let them alone, for if this plan or this undertaking is of man, it will fail; but if it is of God, you will not be able to overthrow them. You might even be found opposing God!&rdquo; (5:38&ndash;39). His logic has a certain pragmatic wisdom: time will test the movement, and if it is merely human it will collapse of its own accord, as others had. The principle is not infallible as a general rule &mdash; some false movements endure for a time &mdash; but in this case it was overruled by God to spare the apostles.",
          "There is a deep irony in Gamaliel&rsquo;s warning that the council might &ldquo;even be found opposing God,&rdquo; for that is precisely what they were doing. The man who could see the danger in principle could not see that the danger had already arrived in this very name. Yet his counsel prevailed: &ldquo;they took his advice, and when they had called in the apostles, they beat them and charged them not to speak in the name of Jesus, and let them go&rdquo; (5:40). The deliverance was real but not complete; the apostles were spared death but not the lash.",
          "The chapter ends with one of the most beautiful and counterintuitive responses in all of Scripture: &ldquo;Then they left the presence of the council, rejoicing that they were counted worthy to suffer dishonor for the name&rdquo; (5:41). They did not merely endure the beating; they rejoiced in it, counting it an honor to share in Christ&rsquo;s sufferings. This fulfills Jesus&rsquo; own words in the Beatitudes (Matthew 5:11&ndash;12) and anticipates Peter&rsquo;s later teaching (1 Peter 4:13). And they did not slow down: &ldquo;And every day, in the temple and from house to house, they did not cease teaching and preaching that the Christ is Jesus&rdquo; (5:42). Threatened, imprisoned, beaten &mdash; and still, every day, preaching Christ.",
        ],
      },
    ],
  },
  {
    id: "Application",
    intro:
      "Acts 5 confronts the contemporary church with questions it would often rather avoid. Do we tremble at the holiness of God, or have we domesticated him? Do we expect his power, or have we settled for safe predictability? Are we ready to obey God rather than men when the two conflict, and can we rejoice when faithfulness costs us? The chapter calls us back to the awe, the boldness, and the joy of a church that lives in the conscious presence of the risen Lord.",
    blocks: [
      {
        heading: "Living Out Acts 5",
        reference: "Acts 5 for Today",
        accent: GREEN,
        paragraphs: [
          "The first application of Acts 5 is the recovery of the fear of God. Ananias and Sapphira remind us that God sees the heart and that hypocrisy in his presence is no trifle. The modern temptation is to present a curated image of devotion while privately holding back, to appear surrendered while secretly keeping the title deed to our lives. Acts 5 calls us to integrity, to a faith in which the inner reality matches the outer appearance. The healthy fear that fell upon the early church is not terror that drives us from God but reverence that drives us toward honesty before him.",
          "Second, Acts 5 calls us to expect and welcome the power of God. The early believers carried the sick into the streets in the confident hope that God would act. We are not promised that Peter&rsquo;s shadow will heal, but we are warned against a Christianity so cautious and managed that it leaves no room for God to move. A church that no longer expects anything supernatural has quietly stopped believing in the living God of Acts 5. The call is to prayerful expectancy, to a faith that genuinely asks God to do what only he can do.",
          "Third, the chapter equips us for the moments when human authority and divine command collide. &ldquo;We must obey God rather than men&rdquo; is not a slogan for reflexive defiance but a principle for the rare and weighty hour when obedience to God requires disobedience to men. The believer is to be a model citizen, submissive and peaceable, until the state commands what God forbids or forbids what God commands. Then the higher allegiance must govern, calmly, respectfully, and without flinching, whatever the cost. Acts 5 gives us both the principle and the courage.",
          "Fourth, Acts 5 redefines our relationship to suffering for Christ. The apostles left the council rejoicing that they were counted worthy to suffer dishonor for the name. This is not masochism but a radically reordered set of values, a heart so captured by Christ that to share his rejection is counted gain. In a comfortable church, the very idea of rejoicing in hardship sounds foreign. Yet wherever the gospel costs something, this is the response Christ produces in those who love him. The measure of our discipleship may well be whether we can rejoice when faithfulness brings us pain.",
          "Finally, Acts 5 calls us to relentless, joyful witness. After judgment, after persecution, after the lash, the apostles did not retreat into private faith. Every day, in the temple and from house to house, they did not cease teaching and preaching that the Christ is Jesus. The application is plain: the gospel is not a message to be guarded but a message to be proclaimed, not occasionally and cautiously but daily and joyfully, in public and in homes, in season and out. The church of Acts 5 was unstoppable because it was utterly convinced that Jesus is the Christ. May the same conviction make us the same.",
        ],
      },
      {
        heading: "Questions for Reflection",
        reference: "Searching the Heart",
        accent: PURPLE,
        paragraphs: [
          "Is there any area where I am presenting an image of devotion that does not match the reality of my heart? Like Ananias and Sapphira, am I tempted to want the reputation of full surrender while quietly keeping something back from God? What would it look like to bring my hidden divided heart into the light?",
          "Do I still tremble at the holiness of God, or have I grown casual in his presence? Has the healthy fear that marked the early church been replaced by a comfortable familiarity that no longer takes sin seriously? How might recovering the fear of God change the way I live this week?",
          "Do I genuinely expect God to act in power, or have I settled for a faith that asks little and expects less? Where have I stopped praying boldly because I have stopped believing God can do what only he can do? What would it mean to carry my burdens into the streets, as it were, in confident expectation?",
          "Am I prepared for the moment when obeying God may require disobeying men? Have I thought through where my ultimate allegiance lies, and counted the cost of following Christ when it conflicts with the pressures around me? What helps me hold that resolve calmly and respectfully rather than in anger?",
          "Can I rejoice when faithfulness to Christ brings me dishonor or loss? When I suffer for doing right, is my instinct self-pity or the strange joy of the apostles who counted it an honor to share in Christ&rsquo;s sufferings? What change of heart would allow me to count such suffering as gain?",
        ],
      },
    ],
  },
];

const videoItems = [
  { videoId: "Hd_zsUz1seg", title: "Acts 5 - Ananias and Sapphira (Bible Study)" },
  { videoId: "yK00cXg9KAk", title: "We Must Obey God Rather Than Men - Acts 5:29" },
  { videoId: "rk2C5tZ8Vbw", title: "Gamaliel's Counsel and the Apostles' Joy - Acts 5:34-42" },
  { videoId: "0GokGMbFpS8", title: "BibleProject - The Book of Acts Overview" },
];

export default function Acts5GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const current = tabContent.find((t) => t.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${ROSE}22`, color: ROSE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Acts 5 &mdash; Holiness, Boldness, and Joy
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;We must obey God rather than men&rdquo; (Acts 5:29). The deadly hypocrisy of Ananias and Sapphira, the great fear that fell upon the church, the unstoppable power of the apostolic witness, and the apostles rejoicing that they were counted worthy to suffer dishonor for the name of Jesus." }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", position: "sticky", top: "var(--header-height, 80px)", background: BG, zIndex: 10 }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ROSE : BORDER}`,
                background: activeTab === t ? ROSE : CARD,
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

        {current && (
          <section>
            <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.85, margin: "0 0 2.5rem", paddingLeft: 16, borderLeft: `3px solid ${ROSE}` }} dangerouslySetInnerHTML={{ __html: current.intro }} />
            {current.blocks.map((block, bi) => (
              <div key={bi} style={{ marginBottom: "2.75rem" }}>
                <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 6px", color: TEXT }} dangerouslySetInnerHTML={{ __html: block.heading }} />
                <div style={{ color: block.accent, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: block.reference }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {block.paragraphs.map((para, pi) => (
                    <p
                      key={pi}
                      style={{ color: pi === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        <div style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 1.5rem", color: TEXT }}>Video Teaching on Acts 5</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Church Ablaze with God</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Acts 5 shows a church so full of the presence of God that hypocrisy within it was deadly and persecution against it was futile. The same holiness that judged Ananias and Sapphira filled the apostles with power, freed them from prison, and steadied them before the council with the unshakable conviction that we must obey God rather than men. Beaten and forbidden to speak, they left rejoicing that they were counted worthy to suffer dishonor for the name &mdash; and every day, in the temple and from house to house, they did not cease teaching and preaching that the Christ is Jesus." }} />
        </div>
      </main>
    </div>
  );
}
