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
  "Paul's Background",
  "The Damascus Road",
  "Gentiles and Rome",
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
    heading: "Paul's Defense Before the Jerusalem Crowd",
    reference: "Acts 22",
    paragraphs: [
      "Acts 22 records the first of Paul&rsquo;s great defense speeches, delivered from the steps of the Roman barracks to the very crowd that moments before had tried to kill him. Standing in chains, the apostle motions for silence and begins to speak &mdash; not in Greek, but in the Hebrew dialect of his hearers (v.2). The sound of their own tongue stills the mob, and Paul seizes the hush to tell the story of his life and his Lord. What follows is testimony rather than argument: the unfolding of how a zealous persecutor became a servant of the risen Christ.",
      "Paul recounts his upbringing in three movements. First, his background as a Jew born in Tarsus but raised in Jerusalem, educated under the renowned Gamaliel, and zealous for God to the point of hunting down followers of the Way (vv.1&ndash;5). Second, the turning point on the Damascus road, where a blinding light and a heavenly voice arrested him in his fury and Jesus of Nazareth claimed him for himself (vv.6&ndash;16). Third, his later vision in the temple, where the Lord commissioned him and sent him &ldquo;far away to the Gentiles&rdquo; (vv.17&ndash;21).",
      "At that single word &mdash; Gentiles &mdash; the fragile calm shatters. The crowd that had listened in silence now erupts: &ldquo;Away with such a fellow from the earth! For he should not be allowed to live&rdquo; (v.22). They shout, fling off their cloaks, and throw dust into the air in a frenzy of rage. The tribune, unable to understand the Aramaic speech and baffled by the violence it provoked, orders Paul brought inside and examined by flogging to wring out the cause of the uproar (vv.23&ndash;24).",
      "It is at this moment that Paul plays a decisive card. As the soldiers stretch him out for the lash, he asks the centurion, &ldquo;Is it lawful for you to flog a man who is a Roman citizen and uncondemned?&rdquo; (v.25). The question stops everything. Roman citizenship carried legal protections that made such treatment a serious crime. The alarmed tribune comes to verify the claim and discovers that Paul holds a citizenship he himself had purchased at great cost, while Paul was born to it (vv.26&ndash;28).",
      "Those about to examine Paul withdraw at once, and the tribune himself is afraid, realizing he has bound a Roman citizen (v.29). Unable to learn the charges through violence, he takes a different course: the next day he releases Paul from his bonds and convenes the chief priests and the whole Sanhedrin, bringing Paul down to stand before them so that the real accusation might at last be made plain (v.30). The chapter ends poised on the threshold of yet another hearing.",
      "Acts 22 is a study in testimony and providence. Paul&rsquo;s defense is essentially the retelling of his conversion &mdash; the second of three accounts in Acts &mdash; demonstrating that the gospel itself is the best apology. Yet woven through the chapter is also the theme of God&rsquo;s providential use of ordinary means: a citizenship, a legal right, a Roman officer&rsquo;s fear. The Lord who appeared on the Damascus road also works through Roman law to preserve his servant and to carry his witness onward, just as he had promised, all the way to Rome.",
    ],
  },
  {
    id: "Paul's Background",
    heading: "Paul's Defense: His Background",
    reference: "Acts 22:1&ndash;5",
    paragraphs: [
      "Paul opens with words of respect and kinship: &ldquo;Brothers and fathers, hear the defense that I now make before you&rdquo; (v.1). He does not address the mob as enemies but as family, members of the same covenant people. When the crowd hears him speaking in the Hebrew dialect &mdash; the Aramaic of everyday Jerusalem &mdash; &ldquo;they became even more quiet&rdquo; (v.2). The very language of his speech is a gesture of solidarity, an immediate signal that the man they sought to kill is one of their own.",
      "He establishes common ground with care. &ldquo;I am a Jew, born in Tarsus in Cilicia, but brought up in this city, educated at the feet of Gamaliel according to the strict manner of the law of our fathers&rdquo; (v.3). Each phrase builds his credentials. He was no outsider or ignorant provincial, but a man raised in Jerusalem itself and trained under Gamaliel, the most honored rabbi of the age. His pedigree in the law was second to none, equal or superior to any in the crowd.",
      "Then comes the heart of his self-portrait: he was &ldquo;zealous for God as all of you are this day&rdquo; (v.3). Paul does not condemn the crowd&rsquo;s zeal; he identifies with it, for it had once been his own. He understands their fury from the inside because he had felt the very same fire. This is the bridge of his testimony: he was not always the man they now hate. He had stood exactly where they stand, burning with devotion to God and to the law.",
      "That zeal, he confesses, had turned murderous. &ldquo;I persecuted this Way to the death, binding and delivering to prison both men and women&rdquo; (v.4). The followers of Jesus &mdash; called &ldquo;the Way&rdquo; &mdash; had been his targets. He hunted them without mercy, imprisoning men and women alike, pursuing them even to death. By naming his own former violence, Paul lays bare the depth of the change that has come over him and the power of the One who changed him.",
      "He calls his accusers as witnesses to his past: &ldquo;The high priest and the whole council of elders can bear me witness. From them I received letters to the brothers, and I journeyed toward Damascus to take those also who were there and bring them in bonds to Jerusalem to be punished&rdquo; (v.5). His credentials as a persecutor were on official record. The leaders of the nation had once authorized his campaign against the church, the very people now standing in judgment over him.",
      "Paul&rsquo;s autobiography functions as a carefully built bridge to his testimony. By beginning with his Jewish heritage, his rabbinic training, and his persecuting zeal, he wins a hearing and disarms the assumption that he is an enemy of his people or their law. He shows that whatever has changed him must have been something undeniable, for nothing else could have turned so fierce a persecutor into so bold a witness. The stage is now set for the story of the risen Christ who met him on the road.",
    ],
  },
  {
    id: "The Damascus Road",
    heading: "The Damascus Road Testimony",
    reference: "Acts 22:6&ndash;16",
    paragraphs: [
      "Paul recounts the moment that shattered and remade his life. &ldquo;As I was on my way and drew near to Damascus, about noon a great light from heaven suddenly shone around me&rdquo; (v.6). It was midday, when the sun is at its strongest, yet this light outshone even the noon sky. The brightness was not natural but heavenly, a glory that flung Paul to the ground and announced the presence of God breaking into his journey of persecution.",
      "Then came the voice: &ldquo;I fell to the ground and heard a voice saying to me, &lsquo;Saul, Saul, why are you persecuting me?&rsquo;&rdquo; (v.7). The question is piercing. Paul had believed he was persecuting a deviant sect, but the voice claims those sufferings as its own. When Paul asks, &ldquo;Who are you, Lord?&rdquo; the answer redefines everything: &ldquo;I am Jesus of Nazareth, whom you are persecuting&rdquo; (v.8). The crucified one is alive, exalted, and so united to his people that to strike them is to strike him.",
      "Paul&rsquo;s companions &ldquo;saw the light but did not understand the voice of the one who was speaking&rdquo; (v.9). The encounter was real and external, witnessed by others, yet its message was addressed to Paul alone. He asks, &ldquo;What shall I do, Lord?&rdquo; and is told to rise and go into Damascus, where he will be told all that is appointed for him to do (v.10). The light had left him blind, and his companions led him by the hand into the city he had come to ravage.",
      "Into this darkness comes Ananias, described with deliberate care as &ldquo;a devout man according to the law, well spoken of by all the Jews who lived there&rdquo; (v.12). Paul highlights Ananias&rsquo;s reputation among the Jewish community, for his testimony is no betrayal of Israel&rsquo;s faith but its fulfillment. Ananias stands beside the blinded Paul and says, &ldquo;Brother Saul, receive your sight,&rdquo; and in that very hour Paul looks up and sees him (v.13).",
      "Ananias then delivers Paul&rsquo;s commission in solemn words: &ldquo;The God of our fathers appointed you to know his will, to see the Righteous One and to hear a voice from his mouth, for you will be a witness for him to everyone of what you have seen and heard&rdquo; (vv.14&ndash;15). The call is rooted in the God of the patriarchs; Jesus is named &ldquo;the Righteous One,&rdquo; and Paul is appointed a witness to all people. His mission flows directly from his encounter with the risen Lord.",
      "The testimony closes with a summons to act: &ldquo;And now why do you wait? Rise and be baptized and wash away your sins, calling on his name&rdquo; (v.16). This is the second of three accounts of Paul&rsquo;s conversion in Acts &mdash; following the narrative of chapter 9 and preceding his speech before Agrippa in chapter 26. Each retelling emphasizes different details for its audience; here, before a Jewish crowd, Paul stresses the law-keeping Ananias and the God of the fathers, showing that his conversion was the act of Israel&rsquo;s own God.",
    ],
  },
  {
    id: "Gentiles and Rome",
    heading: "The Gentile Commission and Roman Citizenship",
    reference: "Acts 22:17&ndash;30",
    paragraphs: [
      "Paul presses on to a vision that few would have known: &ldquo;When I had returned to Jerusalem and was praying in the temple, I fell into a trance and saw him saying to me, &lsquo;Make haste and get out of Jerusalem quickly, because they will not accept your testimony about me&rsquo;&rdquo; (vv.17&ndash;18). The risen Lord himself warned Paul that the city would reject his witness. Paul even argued with the Lord, citing his own record of persecuting believers, supposing it would lend weight to his testimony (vv.19&ndash;20).",
      "But the Lord&rsquo;s answer was a commission that would prove explosive: &ldquo;Go, for I will send you far away to the Gentiles&rdquo; (v.21). This is the climax and the breaking point of Paul&rsquo;s speech. He has traced his life from zealous Jew to converted witness, and now reveals that the same Lord who saved him sent him to the nations. The mission to the Gentiles was not Paul&rsquo;s invention but the explicit command of the exalted Christ, spoken in the temple itself.",
      "At that word the crowd detonates. &ldquo;Up to this word they listened to him. Then they raised their voices and said, &lsquo;Away with such a fellow from the earth! For he should not be allowed to live&rsquo;&rdquo; (v.22). It was not the claim about Jesus that ignited them but the sending to the Gentiles &mdash; the suggestion that God&rsquo;s salvation would go to the nations apart from the marks of Israel. &ldquo;As they were shouting and throwing off their cloaks and flinging dust into the air&rdquo; (v.23), the scene dissolves into chaos once more.",
      "The Roman tribune, who could not follow the Aramaic, decides to extract the truth by force: he orders Paul &ldquo;to be brought into the barracks, saying that he should be examined by flogging, to find out why they were shouting against him like this&rdquo; (v.24). Interrogation under the lash was a common Roman method for slaves and non-citizens. As the soldiers stretch Paul out with the leather thongs, the apostle speaks the words that change his situation entirely.",
      "&ldquo;Is it lawful for you to flog a man who is a Roman citizen and uncondemned?&rdquo; (v.25). The centurion hurries to the tribune: &ldquo;What are you about to do? For this man is a Roman citizen&rdquo; (v.26). The tribune comes and questions Paul, then admits, &ldquo;I bought this citizenship for a large sum,&rdquo; to which Paul replies, &ldquo;But I am a citizen by birth&rdquo; (v.28). The contrast is pointed: the officer purchased his status at great price, while Paul possessed it from birth, a higher standing still.",
      "The effect is immediate. &ldquo;So those who were about to examine him withdrew from him instantly, and the tribune also was afraid, for he realized that Paul was a Roman citizen and that he had bound him&rdquo; (v.29). Denied the truth through violence, the tribune turns to lawful means: &ldquo;On the next day, desiring to know the real reason why he was being accused by the Jews, he unbound him and commanded the chief priests and all the council to meet, and he brought Paul down and set him before them&rdquo; (v.30). Here is the strategic use of legal rights in the service of the gospel &mdash; Paul claims his citizenship not to escape suffering but to keep open the door of witness, trusting the Lord to carry that witness onward.",
    ],
  },
];

const videoItems = [
  { videoId: "Hq4vT8nR2pK", title: "Acts 22 - Paul's Defense from the Barracks Steps" },
  { videoId: "Zm7kB3Wx9Lt", title: "From Persecutor to Witness - Paul's Background" },
  { videoId: "Dc5pN6Vt1Hr", title: "The Damascus Road - Saul, Why Do You Persecute Me?" },
  { videoId: "Rb8wK2Mq7Jx", title: "Gentiles and Roman Citizenship - Rights and the Gospel" },
];

export default function Acts22GuidePage() {
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
            Acts 22
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            From the barracks steps Paul addresses the Jerusalem crowd in their own tongue, recounting his upbringing, his Damascus road encounter, and his commission to the Gentiles &mdash; until the word &ldquo;Gentiles&rdquo; sparks a riot and Paul reveals his Roman citizenship to halt the flogging.
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
              Deepen your study of Acts 22 through visual teaching on Paul&rsquo;s defense before the crowd, his transformation from persecutor to witness, the Damascus road encounter, and the strategic use of Roman citizenship in the service of the gospel.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Testimony and Providence</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 22 shows that the gospel itself is the best defense. Paul answers the mob not with argument but with the story of the risen Christ who met him on the road &mdash; and when violence threatens, the Lord who saved him also works through Roman law and a born citizenship to preserve his servant and carry his witness onward, all the way toward Rome.
          </p>
        </div>
      </main>
    </div>
  );
}
