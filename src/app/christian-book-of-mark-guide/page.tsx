"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Gospel of Action",
  "Who Is This Man",
  "The Messianic Secret",
  "The Way of the Cross",
  "Death and Resurrection",
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
    id: "The Gospel of Action",
    heading: "The Gospel of Action",
    reference: "Mark 1",
    paragraphs: [
      "Mark is widely regarded as the earliest of the four gospels, and it is certainly the shortest and the fastest. Where Matthew and Luke open with genealogies and birth narratives, Mark dispenses with all preamble and bursts onto the scene at full speed: &ldquo;The beginning of the gospel of Jesus Christ, the Son of God&rdquo; (1:1). In a single breath the reader is told who Jesus is and what the whole book is about &mdash; good news embodied in a person.",
      "The hallmark of Mark&rsquo;s style is the word &ldquo;immediately.&rdquo; The Greek euthys appears more than forty times in these sixteen chapters, far more than in the rest of the New Testament combined. Jesus is immediately baptized, immediately driven into the wilderness, immediately calling disciples, immediately healing and casting out demons. The effect is breathless momentum &mdash; a gospel that reads less like a leisurely biography and more like an urgent dispatch from the front lines of God&rsquo;s in-breaking kingdom.",
      "Mark almost certainly wrote for Roman, largely Gentile Christians, perhaps in the imperial capital itself. He pauses to explain Jewish customs that his readers would not know, translates Aramaic phrases into Greek, and uses a number of Latin loanwords. This was a community that knew suffering and likely faced persecution, and Mark&rsquo;s portrait of a Lord who walks the path of rejection and the cross would have spoken powerfully to people under pressure for their faith.",
      "Early Christian tradition, preserved in the testimony of Papias, holds that Mark was the companion and &ldquo;interpreter&rdquo; of the apostle Peter, and that his gospel preserves Peter&rsquo;s own preaching about Jesus. This would account for the gospel&rsquo;s vivid, eyewitness quality &mdash; the small concrete details, the candid portrayal of the disciples&rsquo; failures, and especially the unflattering honesty about Peter himself, which reads like the confession of a man who remembered his own falls.",
      "From the opening verses Mark stacks up witnesses to Jesus&rsquo;s identity. John the Baptist points ahead to one mightier than himself. At the baptism the heavens are torn open and the Father&rsquo;s voice declares, &ldquo;You are my beloved Son&rdquo; (1:11). In the wilderness Jesus is tested by Satan. Then he begins to preach the heart of his message: &ldquo;The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel&rdquo; (1:15). The decisive hour has arrived.",
      "What follows in the first chapter is a single relentless day in Capernaum &mdash; calling fishermen, teaching with authority in the synagogue, casting out an unclean spirit, healing Peter&rsquo;s mother-in-law, and at evening a whole town gathered at the door. Mark wants us to feel the sheer impact of Jesus before we have time to analyze it. The action itself is the argument: here is one in whom the power and reign of God have drawn near.",
      "This sense of urgency is not mere literary flourish; it carries Mark&rsquo;s theology. The kingdom of God has invaded a world held captive, and the response it demands is immediate. There is no room for delay or detached observation. From its first line to its last, Mark presses the reader toward a decision about Jesus &mdash; to repent, to believe, and to follow without hesitation the one whose coming sets everything in motion.",
    ],
  },
  {
    id: "Who Is This Man",
    heading: "Who Is This Man",
    reference: "Mark 1-8",
    paragraphs: [
      "The first half of Mark is governed by a single insistent question: &ldquo;Who then is this?&rdquo; After Jesus stills a storm with a word, the terrified disciples ask, &ldquo;Who then is this, that even the wind and the sea obey him?&rdquo; (4:41). The whole opening movement of the gospel is constructed to provoke that question in the reader and to drive it toward an answer.",
      "Mark answers by piling up demonstrations of Jesus&rsquo;s authority across every domain. He has authority over disease, healing fevers, leprosy, paralysis, and a woman who had bled for twelve years. He has authority over demons, who recognize him and tremble. He has authority over nature, calming the wind and walking on the sea. And, most scandalously to his critics, he claims authority over sin itself, telling a paralyzed man, &ldquo;Son, your sins are forgiven&rdquo; (2:5) &mdash; an authority the scribes rightly knew belonged to God alone.",
      "Around Jesus the response divides sharply. The crowds are amazed and press in upon him so that he can scarcely move. The demons cry out his identity. But the religious leaders grow hostile, already by chapter three plotting how to destroy him, even attributing his power to the prince of demons. The very works that reveal who he is also expose the hardness of those determined not to see.",
      "The disciples occupy a middle ground, and Mark traces their growing amazement shading into confusion. They follow Jesus, witness his miracles, and yet repeatedly fail to grasp what they are seeing. After he feeds thousands in the wilderness, twice, they still worry about having no bread, and Jesus asks them pointedly, &ldquo;Do you not yet understand?&rdquo; (8:21). Their eyes are opening only slowly, like a man healed of blindness in stages.",
      "It is no accident that immediately before the gospel&rsquo;s turning point Mark places the two-stage healing of a blind man at Bethsaida (8:22&ndash;26), who first sees men &ldquo;like trees, walking&rdquo; and only then sees clearly. The miracle is a parable of the disciples&rsquo; condition: they have begun to see who Jesus is, but their vision is still blurred and partial, in need of a second touch.",
      "All of this builds to the hinge of the entire gospel at Caesarea Philippi. Jesus asks, &ldquo;Who do people say that I am?&rdquo; and then, more sharply, &ldquo;But who do you say that I am?&rdquo; Peter answers for them all: &ldquo;You are the Christ&rdquo; (8:29). At last the question of the first half has been answered correctly. The Messiah has been confessed, and from this point the gospel pivots toward a second, harder question &mdash; not who Jesus is, but what kind of Messiah he has come to be.",
      "This structural turn is deliberate and masterful. Mark spends eight chapters establishing Jesus&rsquo;s identity through demonstrations of divine authority, only to reveal that even a true confession is not yet enough. Peter has named him rightly but, as the next scene shows, has badly misunderstood what that name means. To know who Jesus is, in Mark, one must follow him all the way to the cross.",
    ],
  },
  {
    id: "The Messianic Secret",
    heading: "The Messianic Secret",
    reference: "Mark 1-8",
    paragraphs: [
      "One of the most distinctive and puzzling features of Mark is what scholars have called the &ldquo;messianic secret.&rdquo; Again and again Jesus commands people to keep quiet about who he is and what he has done. He silences the demons who shout his identity, sternly charges healed lepers to tell no one, and even after Peter&rsquo;s great confession he &ldquo;strictly charged them to tell no one about him&rdquo; (8:30). The Messiah seems strangely determined not to be advertised.",
      "The pattern is remarkably consistent. When Jesus raises Jairus&rsquo;s daughter, he orders that no one should know of it. When he heals a deaf man, he charges the crowd to be silent, though &ldquo;the more he charged them, the more zealously they proclaimed it&rdquo; (7:36). Demons, who perceive his identity supernaturally, are repeatedly muzzled before they can announce that he is the Son of God. Concealment runs like a thread through the whole first half of the gospel.",
      "Why this insistence on secrecy? The most compelling answer lies in the nature of first-century messianic expectation. Many in Israel longed for a Messiah who would be a conquering political and military deliverer, a son of David to overthrow Rome and restore the kingdom in glory. To proclaim Jesus as &ldquo;Messiah&rdquo; in that charged atmosphere would inevitably summon up the wrong picture and risk igniting a popular movement built on a fundamental misunderstanding.",
      "The secret, then, guards against a premature and distorted faith. A title shouted by demons or seized upon by crowds hungry for bread and political liberation would attach the right word to the wrong concept. Jesus refuses to be the Messiah of popular fantasy. He will define his messiahship himself, on his own terms, and those terms are so contrary to expectation that they cannot simply be announced &mdash; they must be learned by following him to the place where they are revealed.",
      "That place is the cross, and this is the deepest key to the secret. Jesus&rsquo;s true identity cannot be rightly understood apart from his suffering and death. To grasp what kind of Messiah he is, one must see him crucified. Until that revelation is complete, the title &ldquo;Christ&rdquo; remains dangerously open to misreading, and so Jesus restrains its premature use. The secret is finally a matter of timing: the full truth waits for the cross.",
      "Strikingly, the secret begins to lift at exactly the moment of his death. Throughout the gospel no human being has confessed Jesus as the Son of God, but when he breathes his last, the Roman centurion at the foot of the cross declares, &ldquo;Truly this man was the Son of God&rdquo; (15:39). It is in seeing how Jesus dies that a man at last sees who he truly is &mdash; precisely the connection the messianic secret was protecting all along.",
      "The messianic secret thus serves Mark&rsquo;s central purpose. It holds the reader&rsquo;s easy assumptions in check, refusing to let us settle for a triumphant Messiah of power without the crucified Messiah of love. It teaches that Jesus&rsquo;s glory is revealed precisely in his humiliation, and that any confession of him that bypasses the cross is not yet true confession. The secret is not concealment for its own sake but a summons to a deeper and costlier understanding.",
    ],
  },
  {
    id: "The Way of the Cross",
    heading: "The Way of the Cross",
    reference: "Mark 8-10",
    paragraphs: [
      "Caesarea Philippi marks the great turn in Mark, and what follows is unflinching. The moment Peter confesses him as the Christ, Jesus &ldquo;began to teach them that the Son of Man must suffer many things and be rejected&hellip; and be killed, and after three days rise again&rdquo; (8:31). This is the first of three explicit predictions of his death, and from here the road runs straight and steep toward Jerusalem.",
      "The pattern in chapters eight through ten is precise and repeated three times: Jesus predicts his suffering and death, the disciples respond with stunning incomprehension, and Jesus answers with teaching on the true shape of discipleship. After the first prediction, Peter actually rebukes him, earning the sharpest rebuke in the gospels: &ldquo;Get behind me, Satan! For you are not setting your mind on the things of God, but on the things of man&rdquo; (8:33).",
      "After the second prediction, the disciples are caught arguing about which of them is the greatest. After the third, James and John ask for the seats of honor at his right and left in glory. Three times Jesus speaks of a cross; three times his closest followers reveal that their minds are still fixed on power, status, and triumph. They have confessed the Messiah but cannot yet bear the kind of Messiah he insists on being.",
      "Into this incomprehension Jesus speaks the heart of his teaching on discipleship. &ldquo;If anyone would come after me, let him deny himself and take up his cross and follow me. For whoever would save his life will lose it, but whoever loses his life for my sake and the gospel&rsquo;s will save it&rdquo; (8:34&ndash;35). To follow this Messiah is to walk his road &mdash; the way of self-denial, suffering, and surrendered life.",
      "He overturns every worldly notion of greatness. &ldquo;If anyone would be first, he must be last of all and servant of all&rdquo; (9:35). And again, &ldquo;Whoever would be great among you must be your servant, and whoever would be first among you must be slave of all&rdquo; (10:43&ndash;44). In the kingdom of God the ladder of status is inverted: ambition is redirected from being served to serving, from grasping power to giving oneself away.",
      "All of this culminates in the verse that crowns Mark&rsquo;s theology of the cross: &ldquo;For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many&rdquo; (10:45). Here Jesus interprets his own death. It is not a tragic accident but a purposeful, self-giving act &mdash; a ransom, a price paid to liberate the captive many. The pattern he calls his followers to is the pattern of his own saving love.",
      "The way of the cross, then, is both the path Jesus walks and the path he summons his disciples to walk. The geography of these chapters &mdash; the long descent toward Jerusalem &mdash; mirrors a spiritual journey from misunderstanding toward the foot of the cross. Mark will not let us separate believing in Jesus from following him, nor following him from taking up a cross. To know this Messiah is to be remade in the shape of his servanthood.",
    ],
  },
  {
    id: "Death and Resurrection",
    heading: "Death and Resurrection",
    reference: "Mark 11-16",
    paragraphs: [
      "The proportions of Mark&rsquo;s gospel reveal its center of gravity. So much space is devoted to the final week in Jerusalem that one scholar famously described the gospel as &ldquo;a passion narrative with an extended introduction.&rdquo; Everything that has come before has been hastening toward these last chapters, where the unhurried pace finally slows to dwell, hour by hour, on the suffering and death of the Son of Man.",
      "After the triumphal entry, the cleansing of the temple, and a series of confrontations with the authorities, the shadow of betrayal falls across the story. At the Last Supper Jesus reinterprets the Passover around himself, giving the bread and the cup as his body and his blood &ldquo;poured out for many&rdquo; (14:24). The ransom he spoke of is about to be paid, and he gives his followers a meal by which to remember it.",
      "In Gethsemane Mark shows us a Jesus of agonized humanity, &ldquo;greatly distressed and troubled,&rdquo; falling to the ground and praying, &ldquo;Abba, Father, all things are possible for you. Remove this cup from me. Yet not what I will, but what you will&rdquo; (14:36). He does not march to death as an unfeeling hero; he submits in genuine anguish, embracing the Father&rsquo;s will at terrible cost. Meanwhile the disciples sleep, and soon they will scatter, with Peter denying him three times before the cock crows.",
      "The trials follow in swift succession &mdash; before the Sanhedrin, where Jesus at last openly affirms that he is the Christ, the Son of the Blessed, and before Pilate, who yields to the crowd&rsquo;s demand. Jesus is mocked, scourged, and led out to be crucified. Mark records the darkness over the land and the desolate cry from the cross, &ldquo;My God, my God, why have you forsaken me?&rdquo; (15:34) &mdash; the depths of his identification with the lost and the forsaken.",
      "At the moment of his death two things happen that Mark sets side by side. The curtain of the temple is torn in two from top to bottom, signifying that the way to God now stands open. And the Roman centurion, the executioner standing over a dead man, becomes the first human in the gospel to confess the full truth: &ldquo;Truly this man was the Son of God&rdquo; (15:39). The messianic secret is broken open at the cross, exactly where Mark has been pointing all along.",
      "Then comes one of the most discussed endings in all of literature. The earliest and most reliable manuscripts of Mark conclude at 16:8. The women come to the tomb, find the stone rolled away and a young man announcing that Jesus has risen and goes before them to Galilee &mdash; and then &ldquo;they went out and fled from the tomb, for trembling and astonishment had seized them, and they said nothing to anyone, for they were afraid.&rdquo; The gospel ends on a note of fear, awe, and the empty tomb.",
      "Many readers have found this abrupt ending jarring, and the longer endings (16:9&ndash;20) found in some manuscripts appear to be later additions supplying resurrection appearances. Yet the original ending may be a stroke of genius. By breaking off at the empty tomb with the women&rsquo;s terrified silence, Mark hands the story to the reader. The risen Lord goes ahead into Galilee; the question left hanging is whether we, unlike the fearful women, will follow him there and finish the proclamation they were too afraid to begin.",
    ],
  },
];

const videoItems = [
  { videoId: "HGHqu9-DtXk", title: "BibleProject - Gospel of Mark Overview" },
  { videoId: "g8Mg8dwvfbo", title: "The Gospel of Mark Explained" },
  { videoId: "P4r4OQNGby8", title: "Who Is Jesus in Mark - The Messianic Secret" },
];

export default function ChristianBookOfMarkGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Gospel of Mark
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The fast-paced gospel of action &mdash; Jesus the suffering servant, the question of his identity, the messianic secret, the way of the cross, and the passion narrative that ends at the empty tomb.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
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

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Mark through visual teaching on the structure of the gospel, the identity of Jesus, the messianic secret, and the way of the cross.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Take Up Your Cross and Follow</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Mark presses every reader toward a decision about Jesus. The Son of Man came not to be served but to serve, and to give his life as a ransom for many &mdash; and he still goes ahead of us. The unfinished ending is an invitation: will we follow the crucified and risen Lord, and carry on the proclamation the women were too afraid to begin?
          </p>
        </div>
      </main>
    </div>
  );
}
