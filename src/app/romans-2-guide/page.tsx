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
      "Romans 2 turns the searchlight of God&rsquo;s righteous judgment upon the religious and the respectable. Having exposed the open rebellion of the pagan world in chapter 1, Paul now confronts the moralist who applauds that exposure while quietly committing the very same sins. The chapter dismantles every refuge of self-righteousness, whether Gentile or Jewish, and presses every conscience toward the verdict of Romans 3: that all alike stand guilty before a God who shows no partiality.",
    blocks: [
      {
        heading: "The Argument and Its Place in Romans",
        reference: "Romans 2:1&ndash;29",
        accent: GREEN,
        paragraphs: [
          "Romans 2 is the second movement in Paul&rsquo;s long indictment of the human race that runs from 1:18 through 3:20. In chapter 1 he described the downward spiral of idolatry and immorality among those who suppress the truth, the Gentile world that exchanged the glory of the immortal God for images and gave itself over to every kind of wickedness. A reader nodding along in agreement &mdash; perhaps a devout Jew, perhaps a cultured moralist &mdash; is precisely the person Paul ambushes in 2:1. The applause dies in the throat as the apostle turns and says, &ldquo;Therefore you have no excuse, O man, every one of you who judges.&rdquo;",
          "The chapter advances a single relentless thesis: God&rsquo;s judgment is according to truth, according to works, and without partiality. Paul is not yet preaching the gospel of justification; he is establishing the universal need for it. Before the good news of grace can land with any weight, the bad news of guilt must be heard by everyone, including those who imagine themselves exempt because of their morality, their heritage, or their religious credentials. The whole chapter is a courtroom in which the prosecution dismantles every plea of innocence.",
          "Structurally the chapter falls into clear sections. Verses 1 through 5 confront the hypocrite who judges others while practicing the same things. Verses 6 through 11 lay down the principle that God renders to each according to his works, with no partiality between Jew and Greek. Verses 12 through 16 address the relationship between law, conscience, and judgment for those with and without the written law. Verses 17 through 24 turn directly to the Jew who boasts in the law yet dishonors God by breaking it. Finally, verses 25 through 29 redefine circumcision as a matter of the heart, by the Spirit, not the letter.",
          "Paul writes in the style of the ancient diatribe, a rhetorical form in which a teacher debates an imaginary objector, anticipating questions and demolishing false confidences. The repeated direct address &mdash; &ldquo;O man,&rdquo; &ldquo;you who judge,&rdquo; &ldquo;you who call yourself a Jew&rdquo; &mdash; is not a literal accusation against any single reader but a dramatic device that personifies the self-righteous position so it can be answered. Recognizing the diatribe keeps us from misreading the chapter as a contradiction of justification by faith; it is the foundation upon which that doctrine will be built.",
          "The deepest current running beneath the whole chapter is the character of God himself. He is righteous, impartial, patient, and severe in the best sense of the word. His kindness is meant to lead to repentance, not to license sin; his forbearance is not indifference. By the end of chapter 2 the reader who began by judging the Gentiles of chapter 1 has been led, step by step, to see his own face in the mirror of the law. That is exactly where Paul wants every reader to stand when chapter 3 announces that there is no distinction, for all have sinned and fall short of the glory of God.",
        ],
      },
      {
        heading: "The Moralist in the Dock",
        reference: "Romans 2:1&ndash;5",
        accent: GOLD,
        paragraphs: [
          "The opening verses of Romans 2 close every escape hatch for the person who condemns the sins of others. &ldquo;Therefore you have no excuse, O man, every one of you who judges. For in passing judgment on another you condemn yourself, because you, the judge, practice the very same things&rdquo; (2:1). The logic is devastating in its simplicity: to recognize a sin in another is to confess that one knows the standard, and to commit that same sin is therefore to pronounce sentence upon oneself. The moralist becomes his own prosecuting attorney.",
          "Paul does not deny that the things condemned in chapter 1 deserve condemnation. His point is sharper: the judge has no standing because he is guilty of the same offenses, even if in subtler or more respectable forms. The man who rages against greed while quietly hoarding, who denounces sexual sin while indulging lust, who decries pride while nursing his own self-importance, has not escaped the verdict of God by changing the venue of his sin from the street to the study. God&rsquo;s judgment, Paul insists, &ldquo;rightly falls on those who practice such things&rdquo; (2:2), and the hypocrite cannot expect to slip through (2:3).",
          "Then Paul exposes the deeper sin behind self-righteous judging: a contempt for the very kindness of God. &ldquo;Do you presume on the riches of his kindness and forbearance and patience, not knowing that God&rsquo;s kindness is meant to lead you to repentance?&rdquo; (2:4). The moralist has misread God&rsquo;s patience as approval, his delay in judgment as permission. Every breath of grace was an invitation to turn, and the self-righteous man treated it as proof he needed no turning at all. To despise the kindness that should have melted the heart is to harden it instead.",
          "The result is a terrible accumulation. &ldquo;But because of your hard and impenitent heart you are storing up wrath for yourself on the day of wrath when God&rsquo;s righteous judgment will be revealed&rdquo; (2:5). The image is of a treasury being filled, not with gold but with judgment, day by impenitent day. Every refusal to repent adds to the store. The man who thought himself safe is in fact the busiest of all, laboring without rest to amass the very wrath he believes will never reach him. This is the seriousness of presuming upon grace.",
        ],
      },
    ],
  },
  {
    id: "Key Themes",
    intro:
      "Six great themes thread through Romans 2: the impartiality of divine judgment, judgment rendered according to works, the universal moral accountability of Jew and Gentile alike, conscience and the law written on the heart, the inadequacy of merely external religion, and the circumcision of the heart by the Spirit. Together they form the theological skeleton on which the chapter hangs and prepare the way for the gospel of grace.",
    blocks: [
      {
        heading: "The Impartiality of God and Judgment According to Works",
        reference: "Romans 2:6&ndash;11",
        accent: PURPLE,
        paragraphs: [
          "At the heart of Romans 2 stands a principle that governs the whole divine court: God &ldquo;will render to each one according to his works&rdquo; (2:6). Paul is quoting the consistent witness of the Old Testament, echoing Psalm 62:12 and Proverbs 24:12. Judgment is not arbitrary, not capricious, not swayed by status or sentiment. It is exact, proportionate, and just, measured against the actual conduct of a life. This is not a contradiction of justification by faith but its necessary backdrop, for it establishes the standard that no sinner can meet and thus the desperate need for a righteousness from God.",
          "Paul then sets out two destinies with stark symmetry. To those who by patience in well-doing seek for glory and honor and immortality, God will give eternal life (2:7). But for those who are self-seeking and do not obey the truth but obey unrighteousness, there will be wrath and fury (2:8). He repeats the pairing for emphasis: tribulation and distress for every human being who does evil, the Jew first and also the Greek, but glory and honor and peace for everyone who does good, the Jew first and also the Greek (2:9&ndash;10). The order of the universe&rsquo;s moral accounting is fixed and even-handed.",
          "It is vital to read this language rightly. Paul is not teaching that anyone earns heaven by accumulating good deeds; the rest of Romans forbids that reading absolutely. He is describing the evidentiary relationship between a life and its root. Genuine faith produces patient well-doing; an unbelieving heart produces self-seeking and disobedience. Works are the fruit by which the tree is known, the visible verdict that reveals the invisible reality of whether one truly sought God or only sought self. Judgment according to works is judgment according to the true direction of the heart, made manifest.",
          "The section closes with the sentence that gives the whole passage its key: &ldquo;For God shows no partiality&rdquo; (2:11). The Greek word translated partiality literally means receiving the face, the practice of a corrupt judge who decides a case based on who stands before him rather than on the merits. The God of Romans 2 is the perfect Judge who never receives the face. Heritage cannot bribe him, religious pedigree cannot sway him, and the Jew enjoys no exemption that the Greek is denied. The phrase &ldquo;the Jew first and also the Greek&rdquo; cuts both ways: first in privilege, but first in accountability as well.",
        ],
      },
      {
        heading: "Conscience and the Law Written on the Heart",
        reference: "Romans 2:12&ndash;16",
        accent: TEAL,
        paragraphs: [
          "Having established impartial judgment according to works, Paul anticipates an obvious objection: what of those who never received the law of Moses? His answer preserves God&rsquo;s justice for both groups. &ldquo;For all who have sinned without the law will also perish without the law, and all who have sinned under the law will be judged by the law&rdquo; (2:12). Each is held accountable to the light he actually possessed. The Gentile is not condemned for failing to keep a law he never heard, and the Jew gains nothing by merely possessing a law he does not obey, for &ldquo;it is not the hearers of the law who are righteous before God, but the doers of the law who will be justified&rdquo; (2:13).",
          "Paul then unfolds one of the most theologically fertile observations in all his letters. &ldquo;For when Gentiles, who do not have the law, by nature do what the law requires, they are a law to themselves, even though they do not have the law&rdquo; (2:14). The point is not that any Gentile keeps the law perfectly, but that Gentiles sometimes display, by their conduct, an awareness of its moral substance. The fact that pagan societies have laws against murder, theft, and treachery testifies that the moral law is not confined to the tablets of Sinai but is woven into the fabric of human nature itself.",
          "The mechanism is the inner witness of conscience. Such Gentiles &ldquo;show that the work of the law is written on their hearts, while their conscience also bears witness, and their conflicting thoughts accuse or even excuse them&rdquo; (2:15). The Greek term for conscience, suneidesis, means a knowing-together, an inner faculty that stands as a second voice alongside the will, passing verdicts on one&rsquo;s own actions. This is the moral light that no human being is without. The accusing and excusing thoughts that contend within every person are evidence that the Creator has inscribed his moral order upon the heart of his image-bearers.",
          "This natural law and conscience do not save; they condemn. They are sufficient to render every person accountable but insufficient to justify, for conscience, however well-informed, is also fallen and can be seared, distorted, or ignored. Paul gathers it all into the day of reckoning: &ldquo;on that day when, according to my gospel, God judges the secrets of men by Christ Jesus&rdquo; (2:16). Judgment will reach not merely the outward act but the hidden motive, and the Judge will be Christ himself. The light of conscience proves that no one is innocent; it cannot supply the righteousness that the secrets of the heart so plainly lack.",
        ],
      },
    ],
  },
  {
    id: "Verse by Verse",
    intro:
      "Romans 2 reaches its climax by turning from the Gentile to the Jew, the one who most confidently assumed exemption. Paul honors the genuine privileges of Israel even as he shows that privilege without obedience becomes an accusation. The chapter ends by relocating true Jewishness and true circumcision from the flesh to the heart, from the letter to the Spirit, from the praise of men to the praise of God.",
    blocks: [
      {
        heading: "The Jew Who Boasts in the Law",
        reference: "Romans 2:17&ndash;24",
        accent: ROSE,
        paragraphs: [
          "Paul now addresses his imaginary interlocutor by name: &ldquo;But if you call yourself a Jew and rely on the law and boast in God&rdquo; (2:17). He lists the privileges with apparent admiration: such a person knows God&rsquo;s will, approves what is excellent because he is instructed from the law, and is confident that he is a guide to the blind, a light to those in darkness, an instructor of the foolish, a teacher of children (2:18&ndash;20). Every item is a genuine advantage. Israel really did possess the oracles of God; the privileges were real. But Paul is building the list precisely so that he can turn it into an indictment.",
          "The turn comes with a series of piercing questions. &ldquo;You then who teach others, do you not teach yourself? While you preach against stealing, do you steal? You who say that one must not commit adultery, do you commit adultery? You who abhor idols, do you rob temples?&rdquo; (2:21&ndash;22). The teacher of the law has not kept the law he teaches. The very knowledge that should have produced obedience has instead become the measure of his hypocrisy. To know the will of God and disobey it is a graver thing than ignorance, for it sins against greater light.",
          "Paul presses to the heart of the matter: &ldquo;You who boast in the law dishonor God by breaking the law&rdquo; (2:23). The boast itself becomes the sin, because the law was given not to be a trophy but to be obeyed. The one who treasures the possession of the law while trampling its commands has reversed its entire purpose, turning a gift meant to lead to godliness into a badge of false security. The privilege has become a snare, and the higher the privilege the deeper the fall.",
          "Then Paul drives home the public scandal of such hypocrisy by quoting Isaiah: &ldquo;For, as it is written, the name of God is blasphemed among the Gentiles because of you&rdquo; (2:24, citing Isaiah 52:5). The disobedience of those who bear God&rsquo;s name does not stay private; it slanders God before the watching nations. When those who claim to represent the holy God live unholy lives, the Gentiles conclude that such a God must be no better than the idols. The sin of the religious hypocrite is therefore a sin against the reputation of God himself, a missionary disaster in reverse.",
        ],
      },
      {
        heading: "Circumcision of the Heart",
        reference: "Romans 2:25&ndash;29",
        accent: GREEN,
        paragraphs: [
          "Paul closes the chapter by confronting the sign that the Jew most prized as a guarantee of standing before God: circumcision. &ldquo;For circumcision indeed is of value if you obey the law, but if you break the law, your circumcision becomes uncircumcision&rdquo; (2:25). The covenant sign was never meant to operate as a magical exemption from obedience. Severed from the obedience it signified, the sign in the flesh counts for nothing. The disobedient Jew is, in the reckoning that matters, no different from the uncircumcised Gentile.",
          "The argument then turns startlingly. &ldquo;So, if a man who is uncircumcised keeps the precepts of the law, will not his uncircumcision be regarded as circumcision?&rdquo; (2:26). The obedient Gentile, though lacking the outward mark, stands nearer to the covenant&rsquo;s intent than the disobedient Jew who bears it. Indeed, such a Gentile &ldquo;will condemn you who have the written code and circumcision but break the law&rdquo; (2:27). Paul has completely overturned the assumed hierarchy: the heart, not the flesh, determines true membership in the people of God.",
          "Then comes the great definition. &ldquo;For no one is a Jew who is merely one outwardly, nor is circumcision outward and physical. But a Jew is one inwardly, and circumcision is a matter of the heart, by the Spirit, not by the letter&rdquo; (2:28&ndash;29). Paul is drawing on a deep Old Testament root. Moses had commanded, &ldquo;Circumcise therefore the foreskin of your heart&rdquo; (Deuteronomy 10:16), and promised that the Lord himself would do it: &ldquo;The Lord your God will circumcise your heart&rdquo; (Deuteronomy 30:6). Jeremiah echoed the call (Jeremiah 4:4) and foresaw the new covenant in which God would write his law on the heart (Jeremiah 31:33).",
          "The final clause names the only verdict that finally matters: such a person&rsquo;s &ldquo;praise is not from man but from God&rdquo; (2:29). There is likely a wordplay here, for the name Judah, from which the word Jew derives, is connected with praise. The true Jew is the one whose praise comes from God, the one whose heart has been inwardly transformed by the Spirit rather than merely marked in the flesh by the letter. With this, Paul has emptied every external religious confidence and prepared the reader for the conclusion of chapter 3: that the righteousness God requires can be received only as a gift, through faith in Jesus Christ.",
        ],
      },
    ],
  },
  {
    id: "Application",
    intro:
      "Romans 2 is not an ancient curiosity but a mirror held up to every religious heart in every age. Its warnings against hypocritical judging, presumption upon grace, external religion, and merely inherited faith land with full force on the modern believer. The chapter calls us to a Christianity of the heart, transformed by the Spirit, and seeking the praise of God rather than the approval of man.",
    blocks: [
      {
        heading: "Living Out Romans 2",
        reference: "Romans 2 for Today",
        accent: GOLD,
        paragraphs: [
          "The first and most uncomfortable application of Romans 2 is to the sin of self-righteous judging. It is far easier to denounce the sins we do not struggle with than to confront the sins we do. The chapter exposes the spiritual sleight of hand by which we feel righteous merely by condemning unrighteousness in others. The believer must ask, soberly and often: do I practice the very things I criticize, in subtler or more socially acceptable forms? The cure is not to stop discerning good from evil but to bring the same standard home to our own conduct first, judging ourselves before we presume to judge another.",
          "Second, Romans 2 warns against presuming upon the kindness of God. Every delay in judgment, every undeserved mercy, every quiet day of health and provision is an invitation to repentance, not a sign that repentance is unnecessary. The most dangerous response to grace is to take it as license. The believer should learn to read God&rsquo;s patience rightly: as the long, gentle pressure of love meant to turn the heart, never to be mistaken for indifference toward sin. To despise that kindness is to store up wrath; to be melted by it is to be saved.",
          "Third, the chapter dismantles the inadequacy of external, inherited, or merely formal religion. A church pew, a baptismal certificate, a Christian family, a memorized creed &mdash; none of these is the circumcision of the heart. Paul would press the modern reader exactly as he pressed the first-century Jew: it is possible to possess every outward marker of faith and yet have a heart untouched by the Spirit. The question is not whether we have the sign but whether we have the substance, not whether we are Christian outwardly but whether we are Christian inwardly, in the secret place where only God sees.",
          "Fourth, Romans 2 reminds us that our lives are read by a watching world, and that hypocrisy among God&rsquo;s people causes his name to be blasphemed among the nations. The integrity of the believer is never a private matter; it is a public testimony, for good or ill. When those who bear Christ&rsquo;s name live in obvious contradiction to it, the world concludes that the gospel is empty. When the law of God is genuinely written on the heart and lived out, that same world is given reason to glorify the Father. We carry the reputation of God in the way we live.",
          "Finally, the chapter points beyond itself to the only solution it does not yet name. Romans 2 leaves every reader, religious and irreligious alike, standing guilty before an impartial Judge, with conscience accusing and the law condemning. That is precisely its purpose. The good news is that the God who circumcises the heart has provided, in Christ, the righteousness that the law demands and we cannot supply. The despair Romans 2 produces is the very soil in which the grace of Romans 3 through 8 takes root. The chapter drives us not to harder striving but to the Savior.",
        ],
      },
      {
        heading: "Questions for Reflection",
        reference: "Searching the Heart",
        accent: PURPLE,
        paragraphs: [
          "Where am I quickest to condemn others, and do I practice the very same things in a quieter or more respectable form? What does my eagerness to judge reveal about the sins I am least willing to face in myself? Am I using the failings of others as a way to avoid examining my own heart before God?",
          "Have I mistaken God&rsquo;s patience for his approval? In what areas of my life have I treated the absence of immediate consequence as permission to continue in sin? How might I respond differently if I truly believed that his kindness is meant to lead me, today, to repentance?",
          "Is my faith a matter of outward form or inward reality? If every external marker of my religion were stripped away, what would remain of my relationship with God? Can I point to evidence that the Spirit has actually circumcised my heart, or am I trusting in heritage, habit, and reputation?",
          "Whose praise am I living for, the praise of man or the praise of God? In the secret places where no one else can see, is my devotion the same as it is in public? What would change if I genuinely sought a verdict that comes from God alone and not from the approval of those around me?",
          "How does my life affect the reputation of God among those who do not yet believe? Is there any way in which my hypocrisy or inconsistency has caused others to think less of Christ? What single change of conduct would most clearly commend the gospel to the people who are watching my life?",
        ],
      },
    ],
  },
];

const videoItems = [
  { videoId: "ej_6dVdJSIU", title: "Romans 2 - God's Righteous Judgment (Bible Study)" },
  { videoId: "0SVTl4Xa5fY", title: "The Law Written on the Heart - Romans 2:14-16 Explained" },
  { videoId: "iX4N1Xj2bXo", title: "Circumcision of the Heart - Romans 2:25-29" },
  { videoId: "Eq9d_Okk5dk", title: "BibleProject - The Book of Romans Overview" },
];

export default function Romans2GuidePage() {
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
          <div style={{ display: "inline-block", background: `${GREEN}22`, color: GREEN, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Romans 2 &mdash; The Righteous Judgment of God
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Therefore you have no excuse, O man, every one of you who judges. For in passing judgment on another you condemn yourself, because you, the judge, practice the very same things&rdquo; (Romans 2:1). God&rsquo;s impartial judgment, the law written on the heart, and the circumcision that is a matter of the heart, by the Spirit, not by the letter." }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", position: "sticky", top: "var(--header-height, 80px)", background: BG, zIndex: 10 }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? GREEN : BORDER}`,
                background: activeTab === t ? GREEN : CARD,
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
            <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.85, margin: "0 0 2.5rem", paddingLeft: 16, borderLeft: `3px solid ${GREEN}` }} dangerouslySetInnerHTML={{ __html: current.intro }} />
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 1.5rem", color: TEXT }}>Video Teaching on Romans 2</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Matter of the Heart</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Romans 2 strips away every refuge of self-righteousness and leaves both Jew and Gentile standing guilty before a God who shows no partiality. It exposes the hypocrite who judges, the presumption that mistakes kindness for approval, and the emptiness of a religion that is merely outward. Yet its severity is mercy in disguise, for it drives us out of ourselves and toward the only righteousness that can stand in the day of judgment. The true Jew is one inwardly, and circumcision is a matter of the heart, by the Spirit, not by the letter &mdash; and his praise is not from man but from God." }} />
        </div>
      </main>
    </div>
  );
}
