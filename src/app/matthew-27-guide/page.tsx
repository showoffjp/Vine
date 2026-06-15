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
  "Judas and Pilate",
  "The Crucifixion",
  "The Death and Burial",
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
    heading: "Overview of Matthew 27",
    reference: "Matthew 27:1&ndash;66",
    paragraphs: [
      "Matthew chapter 27 is the great passion narrative of the first Gospel, the dark and holy account of the trial, crucifixion, death, and burial of our Lord Jesus Christ. Here the long shadow of betrayal that fell in the garden deepens into the full midnight of the cross, and every thread of prophecy, every word of warning, every prediction of the suffering Servant is gathered up and fulfilled. It is a chapter to be read on bended knee, for in it the Son of God is handed over, condemned, mocked, and slain for the sins of the world.",
      "The chapter opens with the council&rsquo;s morning decision to deliver Jesus to Pilate, the Roman governor, for they had no power of their own to put him to death (27:1&ndash;2). Bound and led away, the Lord is handed over to the Gentiles, and the wheels of an unjust judgment begin to turn toward Golgotha. The religious leaders who had plotted in the night now move swiftly to accomplish their purpose in the light of day.",
      "Interwoven with the trial is the tragic end of Judas (27:3&ndash;10). Seeing that Jesus is condemned, the betrayer is seized with remorse, returns the thirty pieces of silver, confesses, &ldquo;I have sinned by betraying innocent blood,&rdquo; and goes out and hangs himself. The priests, unwilling to put blood money into the treasury, buy the potter&rsquo;s field as a burial place for strangers, fulfilling the word of the prophet.",
      "Before Pilate, Jesus stands silent under accusation, answering only, &ldquo;You have said so&rdquo; (27:11&ndash;26). The governor, perceiving the envy of the priests and warned by his wife concerning &ldquo;that righteous man,&rdquo; offers the crowd a choice between Jesus and Barabbas. Stirred up by the chief priests, the multitude cries out for Barabbas and demands, &ldquo;Let him be crucified!&rdquo; Pilate washes his hands, the people take the blood upon themselves, and Jesus is delivered to be crucified.",
      "The soldiers then mock and scourge Jesus, clothing him in scarlet, crowning him with thorns, and hailing him in cruel jest as King of the Jews (27:27&ndash;31). Simon of Cyrene is compelled to carry the cross to Golgotha, where Jesus is crucified between two robbers, his garments divided by lot, and the charge set above his head (27:32&ndash;44). Passersby, priests, and even the robbers heap their scorn upon him in his hour of deepest humiliation.",
      "From the sixth hour to the ninth, darkness covers the land, and Jesus cries out, &ldquo;My God, my God, why have you forsaken me?&rdquo; before yielding up his spirit (27:45&ndash;56). The temple veil is torn in two from top to bottom, the earth quakes, rocks split, and tombs are opened. The centurion confesses, &ldquo;Truly this was the Son of God!&rdquo; Finally Joseph of Arimathea buries the body in his own new tomb, and at the request of the priests a guard is set and the stone is sealed (27:57&ndash;66).",
    ],
  },
  {
    id: "Judas and Pilate",
    heading: "Judas and the Trial Before Pilate",
    reference: "Matthew 27:1&ndash;26",
    paragraphs: [
      "&ldquo;When morning came, all the chief priests and the elders of the people took counsel against Jesus to put him to death&rdquo; (27:1). The night of plotting gives way to a morning of resolve. The leaders of Israel, having condemned the Lord in the darkness, now make their determination official and bind him to deliver him to Pilate the governor, for under Roman rule they lack the authority to carry out an execution themselves.",
      "&ldquo;Then when Judas, his betrayer, saw that Jesus was condemned, he changed his mind and brought back the thirty pieces of silver&rdquo; (27:3). Remorse, but not true repentance, overtakes the betrayer. He confesses to the priests, &ldquo;I have sinned by betraying innocent blood,&rdquo; but they answer coldly, &ldquo;What is that to us? See to it yourself&rdquo; (27:4). Throwing down the silver in the temple, Judas departs and hangs himself, a tragic end to a heart that drew near to grace yet turned away into despair.",
      "&ldquo;But the chief priests, taking the pieces of silver, said, It is not lawful to put them into the treasury, since it is blood money&rdquo; (27:6). With grim hypocrisy these men scruple over the law while having just paid for the betrayal of the innocent. They buy the potter&rsquo;s field as a burial place for strangers, and it is called the Field of Blood to this day, fulfilling the word spoken by the prophet concerning the thirty pieces of silver (27:7&ndash;10).",
      "&ldquo;Now Jesus stood before the governor, and the governor asked him, Are you the King of the Jews? Jesus said, You have said so&rdquo; (27:11). To the single charge that touches his true identity the Lord answers, but to the accusations of the chief priests and elders he gives no reply at all. &ldquo;He gave him no answer, not even to a single charge, so that the governor was greatly amazed&rdquo; (27:14). The silent Lamb stands before his judge, fulfilling the prophecy of the Servant who opened not his mouth.",
      "&ldquo;Now at the feast the governor was accustomed to release for the crowd any one prisoner whom they wanted&rdquo; (27:15). Pilate seizes upon this custom as a way of escape, setting before the people a notorious prisoner named Barabbas and Jesus who is called Christ. He perceives that it was out of envy that they had delivered him up, and he seeks a path to release the one he senses to be innocent.",
      "&ldquo;While he was sitting on the judgment seat, his wife sent word to him, Have nothing to do with that righteous man, for I have suffered much because of him today in a dream&rdquo; (27:19). Even a pagan woman&rsquo;s troubled conscience bears witness to the innocence of Christ. Yet the chief priests and elders persuade the crowd to ask for Barabbas and to destroy Jesus, and when the governor asks, &ldquo;Which of the two do you want me to release?&rdquo; they cry, &ldquo;Barabbas.&rdquo;",
      "&ldquo;Pilate said to them, Then what shall I do with Jesus who is called Christ? They all said, Let him be crucified!&rdquo; (27:22). The clamor rises to a frenzy, and the governor, seeing that a riot was beginning, takes water and washes his hands before the crowd, declaring, &ldquo;I am innocent of this man&rsquo;s blood; see to it yourselves&rdquo; (27:24). The people answer, &ldquo;His blood be on us and on our children!&rdquo; Then he releases Barabbas and, having scourged Jesus, delivers him to be crucified.",
    ],
  },
  {
    id: "The Crucifixion",
    heading: "The Mockery and the Crucifixion",
    reference: "Matthew 27:27&ndash;44",
    paragraphs: [
      "&ldquo;Then the soldiers of the governor took Jesus into the governor&rsquo;s headquarters, and they gathered the whole battalion before him&rdquo; (27:27). The Lord of glory is surrounded by a company of mocking soldiers. They strip him and put a scarlet robe upon him, and twisting together a crown of thorns, they set it on his head and place a reed in his right hand, fashioning a cruel parody of royalty.",
      "&ldquo;And kneeling before him, they mocked him, saying, Hail, King of the Jews! And they spit on him and took the reed and struck him on the head&rdquo; (27:29&ndash;30). The mockery is bitter and shameful. They bow in false homage, they spit upon his face, they beat him with the reed of his mock scepter. When they had finished, they strip the robe from him, put his own clothes back on, and lead him away to be crucified.",
      "&ldquo;As they went out, they found a man of Cyrene, Simon by name. They compelled this man to carry his cross&rdquo; (27:32). Weakened by the scourging, the Lord can no longer bear the weight of the cross, and a passerby is pressed into service. They come to a place called Golgotha, which means the Place of a Skull, the dreadful hill outside the city where the sentence is to be carried out.",
      "&ldquo;They offered him wine to drink, mixed with gall, but when he tasted it, he would not drink it&rdquo; (27:34). He refuses the bitter drink that would dull his senses, choosing to drink the cup of suffering to its dregs with a clear mind. &ldquo;And when they had crucified him, they divided his garments among them by casting lots&rdquo; (27:35), fulfilling the ancient psalm that foretold this very act at the foot of the cross.",
      "&ldquo;And over his head they put the charge against him, which read, This is Jesus, the King of the Jews&rdquo; (27:37). The mocking inscription proclaims an unwitting truth, for he is indeed the King. &ldquo;Then two robbers were crucified with him, one on the right and one on the left&rdquo; (27:38), and so he is numbered with the transgressors, hanging in the place of shame between two condemned men, the sinless one among the guilty.",
      "&ldquo;And those who passed by derided him, wagging their heads and saying, You who would destroy the temple and rebuild it in three days, save yourself!&rdquo; (27:39&ndash;40). The taunt strikes at the very heart of his mission. &ldquo;If you are the Son of God, come down from the cross,&rdquo; they jeer, echoing the tempter&rsquo;s ancient challenge in the wilderness, demanding a sign that he refuses to give, for his glory is to remain upon the cross.",
      "&ldquo;So also the chief priests, with the scribes and elders, mocked him, saying, He saved others; he cannot save himself&rdquo; (27:41&ndash;42). The leaders of Israel scorn the truth they cannot perceive, for it is precisely because he will not save himself that he is able to save others. &ldquo;He trusts in God; let God deliver him now&rdquo; (27:43). Even the robbers crucified beside him revile him, and the depth of his humiliation is complete, the Son of God despised and rejected in his darkest hour.",
    ],
  },
  {
    id: "The Death and Burial",
    heading: "The Death of Jesus and His Burial",
    reference: "Matthew 27:45&ndash;66",
    paragraphs: [
      "&ldquo;Now from the sixth hour there was darkness over all the land until the ninth hour&rdquo; (27:45). A supernatural darkness shrouds the scene, as though creation itself veils its face from the suffering of its Maker. For three hours the land lies in gloom, a sign of judgment and of the dreadful weight of sin that the Son of God is bearing upon the tree in the place of his people.",
      "&ldquo;And about the ninth hour Jesus cried out with a loud voice, saying, Eli, Eli, lema sabachthani? that is, My God, my God, why have you forsaken me?&rdquo; (27:46). From the depths of his soul comes the cry of dereliction, the words of Psalm 22 made flesh. Here is the heart of the atonement, the Son enduring the forsakenness due to sinners, drinking the cup of wrath that we might never taste it, bearing in himself the abandonment that our sins deserved.",
      "&ldquo;And Jesus cried out again with a loud voice and yielded up his spirit&rdquo; (27:50). After being offered sour wine on a reed, the Lord gives a final great cry and surrenders his life. No man takes it from him; he lays it down of his own accord. The death of Christ is not a defeat wrung from him by his enemies but a sacrifice freely offered, the willing obedience of the Son unto death, even death on a cross.",
      "&ldquo;And behold, the curtain of the temple was torn in two, from top to bottom&rdquo; (27:51). At the moment of his death the great veil that barred the way into the Holy of Holies is rent, torn from top to bottom by the hand of God, declaring that the way into the presence of God is now opened through the broken body of his Son. The barrier between God and man is removed by the death of the Mediator.",
      "&ldquo;And the earth shook, and the rocks were split. The tombs also were opened, and many bodies of the saints who had fallen asleep were raised&rdquo; (27:51&ndash;52). The very ground convulses, and death itself begins to loosen its grip, a foretaste of the resurrection that the cross secures. When the centurion and those with him see the earthquake and all that takes place, they are filled with awe and confess, &ldquo;Truly this was the Son of God!&rdquo; (27:54).",
      "&ldquo;There were also many women there, looking on from a distance, who had followed Jesus from Galilee, ministering to him&rdquo; (27:55). The faithful women who served him keep their watch even now, witnesses to his death as they will be witnesses to his rising. When evening comes, Joseph of Arimathea, a rich man and a disciple, goes boldly to Pilate and asks for the body of Jesus, and Pilate orders it to be given to him.",
      "&ldquo;And Joseph took the body and wrapped it in a clean linen shroud and laid it in his own new tomb&rdquo; (27:59&ndash;60). He rolls a great stone to the door of the tomb and departs. The next day the chief priests and Pharisees, recalling that Jesus had spoken of rising after three days, ask Pilate to secure the tomb, lest the disciples steal the body. So they make the tomb secure by sealing the stone and setting a guard (27:62&ndash;66), unwittingly providing witnesses for the resurrection to come.",
    ],
  },
];

const videoItems = [
  { videoId: "Zq7mWx2Ln8R", title: "BibleProject - The Passion of Christ in Matthew" },
  { videoId: "Hb4cTy9Ks3M", title: "Judas and Pilate - The Trial of Jesus Before the Governor" },
  { videoId: "Pk6gJz1Vn5D", title: "The Crucifixion at Golgotha - The King of the Jews" },
  { videoId: "Wt9hBx2Cm7L", title: "It Is Finished - The Death and Burial of Jesus" },
];

export default function Matthew27GuidePage() {
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
            The Gospel of Matthew, Chapter 27
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The passion narrative carries our Lord from the council&rsquo;s morning verdict to the sealed tomb. Jesus is handed over to Pilate, Judas perishes in remorse, the crowd cries &ldquo;Crucify him!&rdquo; and Barabbas is released. The soldiers mock and scourge the King of the Jews, who is crucified at Golgotha between two robbers; darkness falls, the veil is torn, and with a loud cry he yields up his spirit. Joseph of Arimathea lays him in a new tomb, and a guard is set to keep it secure.
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
              Deepen your study of Matthew 27 through visual teaching on the trial of Jesus before Pilate and the tragic end of Judas, the mockery and scourging of the King of the Jews, the crucifixion at Golgotha between two robbers, and the death of the Son of God with the tearing of the temple veil, the quaking of the earth, and his burial in the tomb of Joseph of Arimathea.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Truly This Was the Son of God</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Matthew 27 leads us to the foot of the cross, where the Son of God is condemned by men yet offered up according to the determined purpose of God. In his silence before Pilate, his agony beneath the mockery, his cry of dereliction, and his final loud voice, we behold the suffering Servant bearing the sins of the world. The torn veil, the shaken earth, and the centurion&rsquo;s confession all proclaim that this death is no defeat but the very door of salvation, opened for all who will draw near.
          </p>
        </div>
      </main>
    </div>
  );
}
