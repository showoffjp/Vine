"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Wedding at Cana",
  "Cleansing the Temple",
  "Signs and Belief",
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
    heading: "John 2 &mdash; Overview",
    reference: "John 2:1&ndash;25",
    paragraphs: [
      "John 2 is one of the most concentrated chapters in the entire New Testament. In its twenty-five verses, the beloved disciple gives us two scenes that together form a theological arch stretching across the whole Gospel: the wedding at Cana, where Jesus performs his first sign by turning water into wine, and the cleansing of the Temple, where he asserts his authority over Israel&rsquo;s most sacred institution. Both scenes are saturated with symbolism; both generate misunderstanding that John carefully records; and both point beyond themselves to realities that will only become fully clear after the resurrection.",
      "John has organized his Gospel around &ldquo;signs&rdquo; &mdash; the word he uses for the miracles of Jesus is semeion (sign), not dynamis (power) as the Synoptics often use. A sign in John is an act that points beyond itself to a deeper reality about who Jesus is. The Cana miracle is explicitly identified as &ldquo;the first of his signs&rdquo; (v.11), and through it Jesus &ldquo;manifested his glory.&rdquo; The verb &ldquo;manifested&rdquo; (ephanerosen) is the same root John used in 1:31 when John the Baptist said he came baptizing so that Jesus &ldquo;might be revealed to Israel.&rdquo; Cana is the first revelation.",
      "The two episodes of John 2 are also connected by the motif of replacement and escalation. At Cana, six stone water jars used for Jewish purification rites are filled with water and transformed into the finest wine &mdash; the old order of ritual cleansing giving way to the abundance of the new. At the Temple, Jesus drives out the commercial apparatus that had grown up around the sacrificial system and declares that the true temple &mdash; his own body &mdash; will be destroyed and raised in three days. In both cases, the old is not simply abolished but fulfilled and exceeded: better wine, better temple.",
      "The chapter closes with a passage that functions as an authorial warning label for the whole Gospel: many believed in Jesus in Jerusalem because they saw his signs, but &ldquo;Jesus on his part did not entrust himself to them, because he knew all people and needed no one to bear witness about man, for he himself knew what was in man&rdquo; (vv.24&ndash;25). This is a sobering corrective to any triumphalist reading of &ldquo;belief&rdquo; in John. Seeing signs and believing in signs is not the same as genuine, persevering faith. The chapter ends in irony: the one who knows all things about humanity does not trust the humans who are suddenly so enthusiastic about him.",
      "Read together, the Cana miracle and the Temple cleansing establish the two great axes of John&rsquo;s Christology: Jesus as the one who brings eschatological joy and fullness (the best wine kept for last), and Jesus as the one who embodies the true presence of God in a way that makes the Temple&rsquo;s stones redundant. He is simultaneously the Bridegroom who provides the best wine for his wedding and the Lamb whose body is the new sanctuary. By the end of John 2, both claims have been made; the rest of the Gospel will unpack them.",
    ],
  },
  {
    id: "Wedding at Cana",
    heading: "The Wedding at Cana",
    reference: "John 2:1&ndash;11",
    paragraphs: [
      "The miracle at Cana is introduced with a precise temporal marker that John&rsquo;s readers have not always taken seriously enough: &ldquo;On the third day there was a wedding at Cana in Galilee&rdquo; (v.1). The third day is counted from the last of the series of days in John 1 on which John the Baptist and the first disciples encountered Jesus. But for the reader of John&rsquo;s Gospel, &ldquo;the third day&rdquo; can only be heard with the resonance of resurrection. The very first miracle of Jesus in this Gospel is placed on a third day, hinting from the outset that his glory will be fully revealed not on the day of the signs but on the day of the resurrection.",
      "Mary, the mother of Jesus, is present at the wedding (she is never called by name in the Fourth Gospel). When the wine runs out, she goes directly to Jesus with the statement: &ldquo;They have no wine&rdquo; (v.3). It is not a request but an observation &mdash; she presents the need and steps back. Jesus&rsquo; reply has puzzled readers for centuries: &ldquo;Woman, what does this have to do with me? My hour has not yet come&rdquo; (v.4). The address &ldquo;Woman&rdquo; is not a rebuke; Jesus uses the same address to Mary from the cross (19:26) and it is a term of respect in the ancient world. But the question &mdash; &ldquo;what does this have to do with me?&rdquo; &mdash; signals that he will not act at the prompting of social pressure or family expectation. He acts only in obedience to the timing of his Father. The &ldquo;hour&rdquo; in John always refers to the cross and resurrection; Jesus is already living in the shadow of that hour.",
      "Mary&rsquo;s response to his apparent deflection is one of the most remarkable acts of faith in the Gospels. Without argument, without insisting on her maternal authority, without waiting for a yes, she simply says to the servants: &ldquo;Do whatever he tells you&rdquo; (v.5). This is a model of faith that operates beyond comprehension. Mary does not know what Jesus will do; she only knows who he is. Her words echo the words of Israel at Mount Sinai (&ldquo;All that the LORD has spoken we will do,&rdquo; Exodus 19:8) and anticipate the obedient servants who fill the chapter &mdash; the servants who fill the jars, who draw from them, who carry the wine to the master of the feast. Active obedience to whatever Jesus commands is the posture that makes miracles possible.",
      "There were six stone water jars standing there for the Jewish rites of purification, each holding twenty or thirty gallons. Six is one short of seven, the number of completion and perfection. The jars are for purification &mdash; the ceremonial washing that marked the boundary between clean and unclean in Jewish life. Jesus says: &ldquo;Fill the jars with water&rdquo; (v.7). The servants fill them to the brim. Then: &ldquo;Now draw some out and take it to the master of the feast&rdquo; (v.8). The narrative does not describe the moment of transformation. There is no incantation, no dramatic gesture, no prayer recorded. The servants obey and the water becomes wine &mdash; and not merely wine, but wine of such exceptional quality that the master of the feast is astonished. &ldquo;Everyone serves the good wine first,&rdquo; he tells the bridegroom, &ldquo;and when people have drunk freely, then the poor wine. But you have kept the good wine until now&rdquo; (v.10).",
      "The phrase &ldquo;kept the good wine until now&rdquo; is the theological summit of the story. In the Old Testament, an abundance of wine is a recurring image for the eschatological blessing that God will pour out when he finally comes to restore his people. Isaiah 25:6 describes the messianic banquet as &ldquo;a feast of rich food, a feast of well-aged wine.&rdquo; Amos 9:13&ndash;14 promises that &ldquo;the mountains shall drip sweet wine.&rdquo; The Bridegroom who provides an abundance of the best wine at the last is not simply rescuing a wedding party from embarrassment; he is announcing, in the language of symbol, that the messianic age has arrived. The old water of purification cannot wash the soul; the new wine of the kingdom can. And it comes not at the beginning but at the end &mdash; after all the human provision has run out, after the moment of apparent failure and emptiness, the best comes forth.",
      "John&rsquo;s summary is precise: &ldquo;This, the first of his signs, Jesus did at Cana in Galilee, and manifested his glory. And his disciples believed in him&rdquo; (v.11). Two things happen at Cana: glory is revealed, and disciples believe. These two outcomes &mdash; the revelation of Jesus&rsquo; glory and the response of faith &mdash; will govern the whole Gospel. The signs are given so that belief may arise; belief arises so that eternal life may be possessed (20:30&ndash;31). Cana is the paradigm for everything that follows.",
    ],
  },
  {
    id: "Cleansing the Temple",
    heading: "Cleansing the Temple",
    reference: "John 2:12&ndash;22",
    paragraphs: [
      "After a brief stop in Capernaum, Jesus goes up to Jerusalem for the Passover &mdash; the first of three Passovers in John&rsquo;s Gospel, a detail that gives the Fourth Gospel its distinctive three-year framework for the ministry of Jesus. The Passover was the great annual commemoration of Israel&rsquo;s exodus from Egypt, when the blood of lambs painted on the doorposts had caused the angel of death to pass over the Israelite households. It is deeply significant that John places the Temple confrontation at the Passover: the one who will become the true Passover Lamb (1 Corinthians 5:7) enters the Temple system with a whip.",
      "What Jesus finds in the Temple courts is a scene of commercial activity that had developed to serve the pilgrims who came from all over the Jewish world. Those who traveled long distances could not easily bring their own sacrificial animals, and the Roman coinage used in daily commerce bore the image of Caesar and was considered unsuitable for the Temple tax, so money-changers converted it to Tyrian shekels at a premium. The selling of oxen, sheep, and pigeons within the outer courts &mdash; the Court of the Gentiles &mdash; meant that the one space in the Temple complex designated as a place where non-Jews could come to pray had become a marketplace. The commercial system was not simply inconvenient; it was an occupation of the space that the nations were supposed to be welcomed into.",
      "Jesus makes a whip of cords &mdash; a deliberate, unhurried act, not a momentary outburst of anger &mdash; and drives out the sheep and the oxen and pours out the coins of the money-changers and overturns their tables. To the pigeon-sellers he says: &ldquo;Take these things away; do not make my Father&rsquo;s house a house of trade&rdquo; (v.16). His disciples remember Psalm 69:9: &ldquo;Zeal for your house will consume me.&rdquo; The Psalm is one of the great psalms of the righteous sufferer, and John&rsquo;s quotation of it at this moment is quietly anticipatory: the same zeal that drives Jesus to cleanse the Temple is the zeal that will ultimately lead to his death. It is the zeal of the Son of God for the holiness of his Father&rsquo;s house, expressed not in detached indignation but in costly personal engagement.",
      "The Jewish authorities confront Jesus with an urgent question: &ldquo;What sign do you show us for doing these things?&rdquo; (v.18). The question is reasonable by the standards of their tradition. A prophet who performed dramatic symbolic acts &mdash; and the Temple action is clearly a prophetic sign-act in the tradition of Isaiah and Jeremiah &mdash; was expected to authenticate himself with a confirming miracle. Jesus&rsquo; answer baffles them completely: &ldquo;Destroy this temple, and in three days I will raise it up&rdquo; (v.19). They hear it as an absurd boast about the building that had taken forty-six years to construct under Herod the Great and was still under construction. &ldquo;You will raise it up in three days?&rdquo;",
      "John supplies the interpretive key that the disciples would not possess until after the resurrection: &ldquo;But he was speaking about the temple of his body&rdquo; (v.21). This is one of the most important hermeneutical moments in the Fourth Gospel. Jesus has said something true, but it is a truth that can only be understood retrospectively, in the light of a future event. He is the true Temple &mdash; the place where heaven and earth meet, where God&rsquo;s presence dwells among humanity in its fullest form. The Jerusalem Temple was a copy and a foreshadowing; the reality to which it pointed was the incarnate Son of God. When his body is destroyed on the cross and raised on the third day, the disciples will remember this saying and understand it (v.22), and the Scripture (Psalm 16:10; Isaiah 53) will be believed alongside it. The resurrection is the event that unlocks the meaning of all of Jesus&rsquo; words.",
      "The Temple episode in John thus carries a weight that the Synoptic accounts (which place a similar cleansing at the end of Jesus&rsquo; ministry) do not bear in the same way. By placing it here, at the very beginning, John is giving the reader a key to the whole: this Gospel is about the replacement of the old Temple with the new, the old Passover with the new, the old purification water with the new wine of the kingdom. And all of it &mdash; every sign, every discourse, every confrontation &mdash; moves toward the moment when the temple of his body is destroyed and raised, and the true Passover Lamb takes away the sin of the world.",
    ],
  },
  {
    id: "Signs and Belief",
    heading: "Signs, Belief, and the Knowledge of Jesus",
    reference: "John 2:23&ndash;25",
    paragraphs: [
      "John concludes the chapter with three verses that function as a pause and a caution. During the Passover feast in Jerusalem, many people believed in Jesus&rsquo; name when they saw the signs that he was doing (v.23). This sounds like a straightforwardly positive development &mdash; signs producing faith, exactly as intended. But John immediately qualifies it in a way that sharply distinguishes this &lsquo;belief&rsquo; from the genuine faith he is calling his readers toward: &ldquo;But Jesus on his part did not entrust himself to them, because he knew all people and needed no one to bear witness about man, for he himself knew what was in man&rdquo; (vv.24&ndash;25).",
      "The Greek text makes a deliberate wordplay that English translations partially obscure. The word for &ldquo;believed&rdquo; in verse 23 and the word for &ldquo;entrust&rdquo; in verse 24 are the same word: pisteuo. Many &lsquo;believed&rsquo; in Jesus (episteusan eis to onoma autou), but Jesus did not &lsquo;believe in&rsquo; or &lsquo;entrust himself to&rsquo; them (ouk episteuen auton autois). The symmetry is pointed: faith that is merely a response to spectacular signs is not the faith that Jesus himself endorses or reciprocates. It is sign-faith, crowd-faith &mdash; enthusiasm generated by the extraordinary, not the deep trust of those who have truly seen who Jesus is and have committed themselves to him unconditionally.",
      "The statement that Jesus &ldquo;knew all people&rdquo; and &ldquo;knew what was in man&rdquo; is a staggering assertion of divine omniscience applied to the human Jesus. In the Old Testament, it is God alone who &ldquo;searches hearts and minds&rdquo; (Jeremiah 17:10; Psalm 139:1&ndash;4). John is quietly but unmistakably attributing to Jesus the divine prerogative of knowing the interior of the human person in a way that no human being can know another. This same knowledge will be demonstrated repeatedly in the Gospel: Jesus knows that Nathanael sat under the fig tree before Philip called him (1:48); he knows everything about the Samaritan woman&rsquo;s relational history (4:18); he knows that Lazarus is dead even before the messengers reach him (11:14). He is not surprised, fooled, or manipulated by the crowds&rsquo; enthusiasm.",
      "This passage also functions as the introduction to Nicodemus, who will arrive &ldquo;by night&rdquo; in John 3:1&ndash;2, a representative of the &lsquo;believing&rsquo; Jerusalem crowd: &ldquo;Rabbi, we know that you are a teacher come from God, for no one can do these signs that you do unless God is with him.&rdquo; Nicodemus comes as someone whose faith is generated by signs, and Jesus will press him through one of the most searching conversations in the Gospel toward something deeper: &ldquo;Unless one is born again, he cannot see the kingdom of God&rdquo; (3:3). The kind of rebirth Jesus is describing is precisely what sign-faith cannot produce on its own. John 2:24&ndash;25 is, among other things, the narrator&rsquo;s setup for that conversation.",
      "The theme of signs and belief is central to the entire structure of John&rsquo;s Gospel, which scholars often call &ldquo;the Book of Signs&rdquo; (chapters 1&ndash;12) followed by &ldquo;the Book of Glory&rdquo; (chapters 13&ndash;21). The seven great signs &mdash; Cana, the healing of the official&rsquo;s son, the healing at Bethesda, the feeding of the five thousand, walking on water, the healing of the blind man, and the raising of Lazarus &mdash; are not proofs that demand assent but invitations to a deeper seeing. The tragedy of John 12:37 is that even after all these signs, &ldquo;they still did not believe in him.&rdquo; Conversely, the blessedness of John 20:29 is the blessing of those who have not seen and yet believe.",
      "John 2 thus closes with a warning about the inadequacy of sign-faith and a disclosure of Jesus&rsquo; perfect knowledge of the human heart &mdash; a disclosure that is itself a kind of sign. The one who knows what is in every person is the same one who will offer living water to the Samaritan woman, will call Lazarus out of the tomb, and will prepare a place for his disciples in his Father&rsquo;s house. His omniscience is not cold or clinical; it is the knowing of one who, as the Prologue has declared, &ldquo;dwelt among us, full of grace and truth&rdquo; (1:14). To be fully known by Jesus is not a threat to be feared but the foundation of the faith he is calling his readers into &mdash; the faith that, unlike the crowd&rsquo;s enthusiasm for miracles, he will actually entrust himself to.",
    ],
  },
];

const videoItems = [
  { videoId: "jgRrZE0IpeQ", title: "John 2 - Wedding at Cana and the First Sign of Jesus" },
  { videoId: "GpGtEd9Ybq0", title: "The Cleansing of the Temple - John 2 Bible Study" },
  { videoId: "mV9yd5TRiHI", title: "Water Into Wine - The Meaning of the Cana Miracle" },
  { videoId: "FWnXEBXuVX0", title: "Signs, Glory, and Belief in John's Gospel" },
];

export default function John2GuidePage() {
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
            John 2 &mdash; The First Sign and the True Temple
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jesus transforms water into wine at a wedding in Cana &mdash; the first of his signs, revealing his glory &mdash; then drives the merchants from the Temple courts and declares that the temple of his body will be raised in three days, a word his disciples understood only after the resurrection.
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
              Deepen your study of John 2 through visual teaching on the wedding at Cana, the cleansing of the Temple, and the meaning of signs and belief in the Fourth Gospel.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>You Have Kept the Good Wine Until Now</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            John 2 opens with a wedding and closes with a warning, and both scenes are governed by the same conviction: Jesus knows what is in humanity, and he has come not merely to fix what is broken but to replace what is insufficient &mdash; the purification water with the best wine, the stone temple with the living temple of his body. The glory that was revealed at Cana in a moment of joyful abundance is the same glory that will be fully revealed on the third day, when the destroyed temple rises and the disciples finally understand what they had seen.
          </p>
        </div>
      </main>
    </div>
  );
}
