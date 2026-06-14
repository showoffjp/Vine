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
  "Lazarus Is Ill",
  "I Am the Resurrection and the Life",
  "Jesus Wept",
  "Lazarus Come Out",
  "The Plot to Kill Jesus",
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
    id: "Lazarus Is Ill",
    heading: "Lazarus Is Ill",
    reference: "John 11:1&ndash;16",
    paragraphs: [
      "John 11 opens with a name and a household: &ldquo;Now a certain man was ill, Lazarus of Bethany, the village of Mary and her sister Martha&rdquo; (11:1). This is no stranger. John reminds us that Mary is the one &ldquo;who anointed the Lord with ointment and wiped his feet with her hair&rdquo; (11:2), pointing forward to an act of devotion that the next chapter will record. Lazarus and his sisters were among the small circle of people whom Jesus loved with a settled, personal affection &mdash; a family in whose home he was welcome and at rest.",
      "So the sisters send a message of beautiful simplicity and trust: &ldquo;Lord, he whom you love is ill&rdquo; (11:3). They do not tell Jesus what to do. They do not even ask outright that he come. They simply lay the need before him, naming Lazarus not by his own merits but by the love of Christ that rests upon him. It is a model of prayer at its purest &mdash; bringing the trouble to the One who loves, and trusting his heart.",
      "Then comes one of the most arresting statements in the Gospel. &ldquo;This illness does not lead to death. It is for the glory of God, so that the Son of God may be glorified through it&rdquo; (11:4). Jesus speaks not as one ignorant of what will happen but as one who governs it. Lazarus will indeed die in the natural sense, but death will not be the end of the story; it will be the stage on which the glory of God is displayed. The sickness has a purpose that reaches beyond healing.",
      "John then records a sentence that has comforted and perplexed believers ever since: &ldquo;Now Jesus loved Martha and her sister and Lazarus. So, when he heard that Lazarus was ill, he stayed two days longer in the place where he was&rdquo; (11:5&ndash;6). Notice the word &ldquo;so.&rdquo; It was not in spite of his love but because of it that he delayed. Divine love does not always move on our timetable, and the delay that feels like neglect is sometimes the very means of a deeper mercy.",
      "When Jesus finally says, &ldquo;Let us go to Judea again&rdquo; (11:7), the disciples are alarmed, for the Jews there had just tried to stone him. But Jesus answers with a parable of the day&rsquo;s twelve hours: he will not stumble while he walks in the light of the Father&rsquo;s appointed work. Then he speaks of Lazarus with tender indirection: &ldquo;Our friend Lazarus has fallen asleep, but I go to awaken him&rdquo; (11:11). To Jesus, the death of a believer is sleep &mdash; real, but not final, and from which he himself will rouse them.",
      "The disciples misunderstand, thinking he means ordinary rest, so Jesus tells them plainly, &ldquo;Lazarus has died, and for your sake I am glad that I was not there, so that you may believe&rdquo; (11:14&ndash;15). Even the delay was an act of love toward their faith. The section closes on a note of devoted, if uncomprehending, loyalty as Thomas says to the others, &ldquo;Let us also go, that we may die with him&rdquo; (11:16) &mdash; willing to follow Jesus into danger even when he cannot see the purpose in it.",
    ],
  },
  {
    id: "I Am the Resurrection and the Life",
    heading: "I Am the Resurrection and the Life",
    reference: "John 11:17&ndash;27",
    paragraphs: [
      "By the time Jesus arrives, Lazarus has already been in the tomb four days (11:17). The detail matters: in Jewish thought the soul was believed to hover near the body for three days, so the fourth day signaled that death was beyond all doubt and all hope. There would be no claim that Lazarus had merely fainted or fallen into a trance. The grave had done its full work, and only then does Jesus come.",
      "Martha, ever the active one, goes out to meet him while Mary stays in the house. Her words carry both faith and the ache of grief: &ldquo;Lord, if you had been here, my brother would not have died&rdquo; (11:21). It is half complaint, half confession. And then her trust reaches further: &ldquo;But even now I know that whatever you ask from God, God will give you&rdquo; (11:22). She does not yet know what she is asking, but she clings to the conviction that Jesus is not powerless even before the tomb.",
      "Jesus answers, &ldquo;Your brother will rise again&rdquo; (11:23). Martha hears this as orthodox comfort &mdash; the doctrine every faithful Jew held: &ldquo;I know that he will rise again in the resurrection on the last day&rdquo; (11:24). She believes in a resurrection, a future event, a distant hope. What she does not yet grasp is that resurrection is not merely something Jesus will do; it is something Jesus is.",
      "Then comes the fifth of the great &ldquo;I am&rdquo; sayings of John&rsquo;s Gospel, and the very heart of the chapter: &ldquo;I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die&rdquo; (11:25&ndash;26). Jesus draws the future hope into the present moment and centers it on himself. Eternal life is not a thing he dispenses from a distance; it is found in union with his person.",
      "This is the staggering claim. For the believer, physical death becomes a passage rather than a wall &mdash; &ldquo;though he die, yet shall he live.&rdquo; And the deeper death, the death that separates the soul from God, has no power at all over the one who lives in Christ &mdash; &ldquo;shall never die.&rdquo; The grave can take the body for a season, but it cannot touch the life that is hidden in the Son of God.",
      "Jesus presses the question home: &ldquo;Do you believe this?&rdquo; (11:26). It is the question the whole chapter, and the whole Gospel, puts to every reader. Martha answers with one of the great confessions of Scripture, rising to the occasion of her grief: &ldquo;Yes, Lord; I believe that you are the Christ, the Son of God, who is coming into the world&rdquo; (11:27). She does not yet see her brother alive, but she has seen something greater &mdash; she has seen who Jesus is.",
    ],
  },
  {
    id: "Jesus Wept",
    heading: "Jesus Wept",
    reference: "John 11:28&ndash;37",
    paragraphs: [
      "Martha returns and quietly calls Mary, who rises at once and hurries to Jesus, the mourners following her. When Mary reaches him she falls at his feet &mdash; the posture of worship and of overwhelming sorrow &mdash; and speaks the same words her sister had spoken: &ldquo;Lord, if you had been here, my brother would not have died&rdquo; (11:32). Where Martha had moved on to confession, Mary can only weep at his feet, and Jesus does not rebuke her for it.",
      "What follows reveals the heart of God incarnate. &ldquo;When Jesus saw her weeping, and the Jews who had come with her also weeping, he was deeply moved in his spirit and greatly troubled&rdquo; (11:33). The language is strong; the Greek suggests a stirring of indignation, an inward shudder. Jesus is not coolly detached from human grief. He enters into it, and he is angry &mdash; angry at death itself, the great intruder, the last enemy that has brought such ruin to those he loves.",
      "&ldquo;Where have you laid him?&rdquo; he asks, and they say, &ldquo;Lord, come and see&rdquo; (11:34). And then, in the shortest verse in the whole Bible, John records two words that hold an ocean of meaning: &ldquo;Jesus wept&rdquo; (11:35). The Lord of life, who knows in this very moment that he is about to call Lazarus from the tomb, still stands at the grave and sheds real tears. He weeps not from hopelessness but from love.",
      "These are the tears of God. The eternal Word, through whom all things were made, stands at a human grave and cries. This is no distant deity untouched by our sorrows; this is &ldquo;God with us,&rdquo; sharing fully in the grief of a fallen world. The tears of Jesus tell us that when we weep over the death of those we love, we do not weep alone, and we do not weep in a way that offends heaven. Christ has wept those same tears.",
      "The watching crowd reads his tears in two ways. Some say, &ldquo;See how he loved him!&rdquo; (11:36), and they are right; his love is genuine and deep. But others ask, with a hint of doubt, &ldquo;Could not he who opened the eyes of the blind man also have kept this man from dying?&rdquo; (11:37). The question lingers over every grave: if God is love and God is able, why this death, this delay, this silence? John does not answer it with argument. He answers it with a miracle.",
      "The mystery of this passage is that Jesus weeps while fully intending to act. His tears do not mean he is overwhelmed or uncertain; they mean that his power and his compassion are never at odds. He could raise Lazarus without a flicker of feeling, but he chooses instead to enter the sorrow before he conquers its cause. In the same heart we find perfect strength and perfect tenderness &mdash; and that is the heart to which the grieving may always come.",
    ],
  },
  {
    id: "Lazarus Come Out",
    heading: "Lazarus Come Out",
    reference: "John 11:38&ndash;44",
    paragraphs: [
      "Still deeply moved, Jesus comes to the tomb &mdash; a cave with a stone laid against it &mdash; and gives a startling command: &ldquo;Take away the stone&rdquo; (11:39). Martha, so recently steady in her confession, recoils from the practical horror of it: &ldquo;Lord, by this time there will be an odor, for he has been dead four days.&rdquo; Faith and the smell of decay collide. Jesus gently calls her back to the promise: &ldquo;Did I not tell you that if you believed you would see the glory of God?&rdquo; (11:40).",
      "When the stone is removed, Jesus does not reach first for power but for prayer. Lifting his eyes, he says, &ldquo;Father, I thank you that you have heard me. I knew that you always hear me, but I said this on account of the people standing around, that they may believe that you sent me&rdquo; (11:41&ndash;42). The miracle is woven into the perfect communion of the Son with the Father. Even at the tomb, Jesus acts in the unbroken fellowship of love that he has always known, and he speaks aloud so that the crowd will see whose work this is.",
      "Then, with a loud voice, he cries the three great words: &ldquo;Lazarus, come out!&rdquo; (11:43). It is a word of sovereign authority, spoken to a corpse, and the dead man obeys. The voice that spoke creation into being now speaks life back into a body four days in the grave. Augustine observed that Jesus called Lazarus by name, for had he simply said &ldquo;Come out,&rdquo; all the dead might have risen at his word.",
      "&ldquo;The man who had died came out, his hands and feet bound with linen strips, and his face wrapped with a cloth&rdquo; (11:44). The scene is almost startling in its homeliness: Lazarus emerges still wearing the wrappings of the grave, shuffling into the light, alive but not yet free. The resurrection is real, but the marks of death still cling to him until they are removed.",
      "So Jesus gives a final command, this time to the bystanders: &ldquo;Unbind him, and let him go&rdquo; (11:44). The one who alone could raise the dead invites the community to do what they can do &mdash; to loose the grave clothes and welcome Lazarus back into the land of the living. There is a pattern here: Christ does the work that only God can do, the raising; and his people do the work he gives them, the unbinding and the welcoming.",
      "This sign is the climax of Jesus&rsquo; public ministry in John and a deliberate foreshadowing of his own resurrection &mdash; yet with a telling difference. Lazarus comes out still bound, and he will die again one day; Jesus will leave his grave clothes folded in the empty tomb and rise to die no more. Lazarus is a preview; Christ is the substance. The raising of Lazarus declares in the open what the empty tomb will soon prove forever: that in Jesus, death has met its master.",
    ],
  },
  {
    id: "The Plot to Kill Jesus",
    heading: "The Plot to Kill Jesus",
    reference: "John 11:45&ndash;57",
    paragraphs: [
      "The miracle divides the crowd, as the works of Jesus always do. Many of the Jews who had come to console Mary, and who saw what Jesus did, believed in him (11:45). But some go to the Pharisees and report it &mdash; not in wonder but as a threat to be managed. The clearest sign of life provokes, in hardened hearts, the deadliest opposition.",
      "The chief priests and Pharisees gather the council in alarm: &ldquo;What are we to do? For this man performs many signs. If we let him go on like this, everyone will believe in him, and the Romans will come and take away both our place and our nation&rdquo; (11:47&ndash;48). It is a striking confession; they do not deny the miracles. Their fear is not that Jesus is a fraud but that he is too persuasive, and that his growing following will endanger their position and provoke Rome.",
      "Then Caiaphas, the high priest that year, speaks with cold political calculation: &ldquo;You know nothing at all. Nor do you understand that it is better for you that one man should die for the people, not that the whole nation should perish&rdquo; (11:49&ndash;50). He means it as ruthless statecraft &mdash; sacrifice one troublesome man to save the establishment. He has no idea what he is really saying.",
      "John seizes on the deeper meaning: &ldquo;He did not say this of his own accord, but being high priest that year he prophesied that Jesus would die for the nation, and not for the nation only, but also to gather into one the children of God who are scattered abroad&rdquo; (11:51&ndash;52). The enemy&rsquo;s scheme becomes, unwittingly, a true prophecy of the gospel. One man would indeed die for the people &mdash; not as a political expedient, but as the Lamb of God, gathering a scattered people into one through his substitutionary death.",
      "There is a profound irony at the heart of this chapter. The very act of giving life to Lazarus is what sets in motion the plot to put Jesus to death. &ldquo;So from that day on they made plans to put him to death&rdquo; (11:53). The Resurrection and the Life will walk knowingly toward his own cross. He raises one man from the grave, and for that he will be led to a grave of his own &mdash; that through his death and rising, life might come to all who believe.",
      "The chapter ends with Jesus withdrawing to a town called Ephraim, while Passover draws near and the crowds wonder whether he will dare to appear at the feast (11:54&ndash;57). The orders are given for his arrest. The stage is set for the cross. John has shown us that the One who weeps at our graves is the One who will conquer the grave, and that he goes to Jerusalem with open eyes &mdash; to die for the people, and to gather the children of God into one.",
    ],
  },
];

const videoItems = [
  { videoId: "G2sjmoEUubA", title: "BibleProject - Gospel of John Overview Part 1" },
  { videoId: "RUfMFircV-s", title: "BibleProject - Gospel of John Overview Part 2" },
  { videoId: "byp9p5Bq3sA", title: "I Am the Resurrection and the Life - John 11 Explained" },
  { videoId: "0eGzZURUFRk", title: "The Raising of Lazarus - Jesus Wept at the Tomb" },
];

export default function John11GuidePage() {
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
            John 11: The Raising of Lazarus
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The deepest of Jesus&rsquo; signs &mdash; the illness and death of Lazarus, the delay that tested faith, the great confession of Martha, the tears of God at a grave, the cry that emptied a tomb, and the plot that turned the gift of life into the road to the cross. &ldquo;I am the resurrection and the life.&rdquo;
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
              Deepen your study of John 11 through visual teaching on the raising of Lazarus, the great &ldquo;I am the resurrection and the life&rdquo; saying, the tears of Jesus, and the hope of resurrection in the face of grief.
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
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>I Am the Resurrection and the Life</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            John 11 meets us where grief is rawest &mdash; at the graveside, in the silence of a delay we do not understand. There Jesus does not offer a doctrine only but himself, weeping with us and yet calling the dead by name. For everyone who has stood at a tomb and whispered &ldquo;if only you had been here,&rdquo; his question still waits for an answer: &ldquo;I am the resurrection and the life&hellip; Do you believe this?&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
