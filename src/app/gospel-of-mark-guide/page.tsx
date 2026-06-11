"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56",
  PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706",
  TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = ["Overview","Immediately!","Messianic Secret","Miracles","Son of Man","Discipleship Failure","Passion","Journal","Videos"];

const MIRACLES = [
  { icon: "🌊", color: BLUE, title: "Authority over Nature: The Storm (4:35–41)", text: "'He got up, rebuked the wind and said to the waves, Quiet! Be still! Then the wind died down and it was completely calm. He said to his disciples, Why are you so afraid? Do you still have no faith?' The disciples' question: 'Who is this? Even the wind and the waves obey him!' — echoes Psalm 107:29 and Job 38, where only God calms the sea. Mark uses the nature miracles to make a Christological argument: the one who controls nature is the Lord of creation." },
  { icon: "👻", color: PURPLE, title: "Authority over Demons: Legion (5:1–20)", text: "The Gerasene demoniac — naked, cutting himself, uncontrollable by chains — falls before Jesus. The demon's name is Legion (a Roman military unit of 6,000): a politically charged name under Roman occupation. Jesus expels the legion into 2,000 pigs who rush into the sea. The healed man wants to follow; Jesus sends him as a missionary: 'Go home to your own people and tell them how much the Lord has done for you.' The first explicit missionary command in Mark goes to a Gentile." },
  { icon: "🩸", color: RED, title: "Two Healings Interwoven (5:21–43)", text: "Mark uses his distinctive sandwich structure: Jairus's daughter (ch5 part 1) — the hemorrhaging woman — Jairus's daughter (ch5 part 2). The woman who touched Jesus's cloak (12 years of bleeding, ceremonially unclean) is healed by faith and named daughter by Jesus. Simultaneously, Jairus's daughter (12 years old) dies. Jesus raises her: 'Talitha koum — little girl, I say to you, get up.' The two stories interpret each other: faith and resurrection are the answers to ritual uncleanness and death." },
  { icon: "🍞", color: GREEN, title: "The Two Feedings (6:30–44; 8:1–10)", text: "Mark records two mass feeding miracles: 5,000 in Jewish territory (12 baskets of leftovers = 12 tribes) and 4,000 in Gentile territory (7 baskets = symbol of completeness). The disciples misunderstand both. Jesus then rebukes them: 'Do you still not see or understand? Are your hearts hardened? Do you have eyes but fail to see, and ears but fail to hear? And don't you remember?' (8:17–18). The disciples' incomprehension is Markan irony: those closest to Jesus see him least clearly." },
];

const SECRET_ITEMS = [
  { q: "What Is the Messianic Secret?", a: "William Wrede (1901) coined the term for Mark's distinctive pattern: after healing and exorcism miracles, Jesus commands silence about his identity. To healed lepers: 'See that you don't tell this to anyone' (1:44). To the raised girl's family: 'He gave strict orders not to let anyone know about this' (5:43). To the disciples after Peter's confession: 'He warned them not to tell anyone about him' (8:30). The commands are systematically disobeyed — the news spreads anyway." },
  { q: "Why the Silence?", a: "Multiple explanations have been proposed: (1) Historical — Jesus genuinely guarded against premature political messianism. (2) Theological — Mark shows that Jesus cannot be understood correctly until the cross and resurrection; a pre-cross declaration of messiahship would be misunderstood (and the disciples' misunderstanding confirms this). (3) Literary — the secret creates dramatic irony: the reader knows who Jesus is (1:1) while the characters struggle to understand. The secret is the engine of Mark's narrative tension." },
  { q: "Peter's Confession and Its Aftermath (8:27–33)", a: "'Who do people say I am?' Various answers: John the Baptist, Elijah, one of the prophets. 'But what about you? Who do you say I am?' Peter: 'You are the Messiah.' Immediately Jesus commands silence and begins to teach that the Son of Man must suffer, be rejected, and die. Peter takes Jesus aside and rebukes him. Jesus rebukes Peter: 'Get behind me, Satan! You do not have in mind the concerns of God, but merely human concerns.' The pivot of Mark: correct confession (Messiah) + wrong content (no cross) = fundamental misunderstanding." },
  { q: "The Demons Know First (1:24; 3:11; 5:7)", a: "Mark's great irony: the demon-possessed recognize Jesus before the disciples do. 'I know who you are — the Holy One of God!' (1:24). 'You are the Son of God' (3:11). 'Son of the Most High God' (5:7). The demons see clearly because their kingdom is threatened. The disciples see slowly because their categories are being demolished. Mark's gospel is a study in the paradox of recognition: those closest to Jesus are often the last to understand." },
];

const SON_OF_MAN = [
  { q: "The Title Son of Man", a: "Jesus's self-designation in Mark is consistently Son of Man — not Messiah (a term he accepts but immediately redefines), not Son of God (though others use it). Son of Man carries two registers: (1) in Ezekiel it is simply the mortal/human; (2) in Daniel 7:13 it is the heavenly figure who comes on the clouds to receive 'an everlasting dominion.' Jesus merges both: the fully human one who goes through suffering and death and is vindicated by God." },
  { q: "Must Suffer (8:31; 9:31; 10:33–34)", a: "Three passion predictions form the structural spine of Mark 8–10. Each one is more specific than the last. Each one is followed by a failure of discipleship understanding (Peter's rebuke; the disciples' argument about who is greatest; James and John's request for seats of power). The pattern is deliberate: Jesus teaches suffering servanthood three times; the disciples respond three times with self-seeking. The gap between Jesus's self-understanding and their ambition is the drama." },
  { q: "Not to Be Served but to Serve (10:45)", a: "'For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.' Mark 10:45 is often considered the theological heart of the Gospel — the first explicit statement of vicarious atonement. The word lutron (ransom) is a commercial and military term: the price paid to release a captive or slave. Jesus's death is the price of humanity's liberation from sin's slavery. The servant-king motif inverts all human power logic." },
  { q: "The Centurion's Confession (15:39)", a: "'And when the centurion, who stood there in front of Jesus, saw how he died, he said, Surely this man was the Son of God!' The only human to confess Jesus as Son of God in Mark's Gospel is a Roman soldier at the foot of the cross. The Messianic Secret is revealed at the moment of death — when there is no longer any danger of a military messiah misunderstanding. God is recognized not in triumph but in crucifixion. This is the key to Mark: the kingdom comes through the cross." },
];

const PASSION_ITEMS = [
  { q: "The Triumphal Entry (11:1–11)", a: "Jesus enters Jerusalem on a donkey, fulfilling Zechariah 9:9. The crowd shouts: 'Hosanna! Blessed is he who comes in the name of the Lord! Blessed is the coming kingdom of our father David!' (11:9–10). Mark notes that Jesus entered the temple, looked around at everything, and since it was late, went to Bethany. The anti-climax is deliberate: Jesus surveys the temple and leaves. The temple's judgment is coming. The triumphal entry is simultaneously fulfillment and announcement." },
  { q: "The Temple Cleansing (11:15–19)", a: "Mark sandwiches the temple cleansing between the cursing of the fig tree (11:12–14 and 11:20–25). The fig tree without fruit is a living parable of the temple that produces ritual but no genuine fruit of faith. Jesus drives out the merchants: 'Is it not written: My house will be called a house of prayer for all nations? But you have made it a den of robbers.' (Mark alone adds 'for all nations.') The temple had become an obstacle to Gentile prayer; Jesus is clearing space for the universal worship his kingdom brings." },
  { q: "Gethsemane (14:32–42)", a: "'He began to be deeply distressed and troubled. My soul is overwhelmed with sorrow to the point of death.' Mark presents Jesus's anguish more starkly than any other Gospel: he uses ademoneo (anguished, in distress) and ekthambeisthai (shocked, overwhelmed). Jesus falls on the ground: 'Abba, Father, everything is possible for you. Take this cup from me. Yet not what I will, but what you will.' The disciples fall asleep three times. Jesus faces the cup alone. The incarnation means he bore genuine human terror before death." },
  { q: "The Cry of Dereliction (15:34)", a: "'And at three in the afternoon Jesus cried out in a loud voice, Eloi, Eloi, lema sabachthani? (which means My God, my God, why have you forsaken me?)' This is Psalm 22:1 — the opening of a psalm that moves from abandonment to vindication. Jesus prays the psalm from the cross, entering the deepest human experience of godforsakenness. Theological interpretations range: (1) real experience of the Father's wrath for sin; (2) identification with all human experiences of abandonment; (3) the beginning of a psalm that ends in triumph. All three may be simultaneously true." },
];

const VIDEOS = [
  { videoId: "HGHqu9-DtXk", title: "Gospel of Mark Overview – The Bible Project" },
  { videoId: "AHuFXAEVNFc", title: "The Messianic Secret in Mark's Gospel" },
  { videoId: "J6JvFZS0eKw", title: "Mark 10:45 – Ransom for Many" },
];

export default function GospelOfMarkGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<string>("vine_mark_tab", "Overview");
  const [openSec, setOpenSec] = useState<number>(-1);
  const [openSom, setOpenSom] = useState<number>(-1);
  const [openPas, setOpenPas] = useState<number>(-1);
  const [journal, setJournal] = usePersistedState<string>("vine_mark_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>⚡</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>The Gospel of Mark</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Study Guide — the urgent, action-packed Gospel of the Servant King: immediately!, the Messianic Secret, miracles, the suffering Son of Man, and the kingdom that comes through the cross.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${activeTab === t ? RED : BORDER}`, background: activeTab === t ? `${RED}22` : CARD, color: activeTab === t ? RED : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>{t}</button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {activeTab === "Overview" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview of Mark's Gospel</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Mark is the shortest and almost certainly the earliest Gospel, written around AD 65–70, possibly during Nero's persecution of Christians in Rome. It opens without a birth narrative or genealogy: "The beginning of the good news about Jesus the Messiah, the Son of God" — and immediately Jesus appears as an adult at the Jordan, already moving toward the cross.</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Mark's style is urgent and visceral: the word "immediately" (euthys) appears over 40 times. Jesus heals, casts out demons, calls disciples, and confronts religious leaders at breakneck pace. The Gospel's central question — asked first by demons, then disciples, then a Roman soldier — is: Who is this man? The answer is given only at the cross.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Author","Mark (John Mark, Petrine tradition)"],["Date","c. AD 65–70"],["Audience","Gentile Christians (Rome?)"],["Style","Urgent, visceral, action-packed"],["Key Word","Immediately (euthys, 40+ times)"],["Central Theme","The Suffering Servant King"]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Immediately! */}
        {activeTab === "Immediately!" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Mark's Urgency: Immediately!</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>Mark's favorite word is euthys — immediately, at once, straightway. It appears more than 40 times in 16 chapters, giving the narrative its breathless, urgent quality. The kingdom of God arrives not gradually but suddenly, decisively, irruptively. Mark's portrait of Jesus is of someone in constant, purposeful motion toward the cross.</p>
            {[
              ["The Opening Rush","In chapter 1 alone: Jesus is baptized (immediately the Spirit descends), tempted for 40 days, calls four disciples (immediately they left their nets), teaches in the synagogue, casts out a demon (immediately), heals Peter's mother-in-law, and that evening the whole town gathers. The kingdom has arrived and it is moving fast."],
              ["The Sandwich Structure","Mark's literary signature is the intercalation ('sandwich') — beginning story A, inserting story B, completing story A. The inserted story interprets the outer one. Jairus/hemorrhaging woman; temple cleansing/fig tree; Peter's denial/Jesus's trial; the widow's offering/destruction of temple. Each layer illuminates the other."],
              ["The Abrupt Ending (16:8)","The oldest manuscripts of Mark end at 16:8: 'Trembling and bewildered, the women went out and fled from the tomb. They said nothing to anyone, because they were afraid.' No resurrection appearance, no commission. The reader is left with empty tomb, fear, and silence — and the implicit question: what will you do with this? The abrupt ending may be intentional: Mark's Gospel does not end; it continues in the reader's response."],
              ["Discipleship as Following","From the very first call — 'Follow me, and I will send you out to fish for people' (1:17) — discipleship in Mark is radical and immediate. The disciples left their nets 'at once.' Levi left his tax collector's booth 'immediately.' The invitation comes in the middle of ordinary life and requires unconditional response. The cost is the cross: 'Whoever wants to be my disciple must deny themselves and take up their cross and follow me' (8:34)."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: GOLD, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Messianic Secret */}
        {activeTab === "Messianic Secret" && (
          <div>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Messianic Secret</h2>
            {SECRET_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openSec === i ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenSec(openSec === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{openSec === i ? "−" : "+"}</span>
                </button>
                {openSec === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Miracles */}
        {activeTab === "Miracles" && (
          <div>
            <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Miracles and Authority</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {MIRACLES.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, marginBottom: ".5rem" }}>{c.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Son of Man */}
        {activeTab === "Son of Man" && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Son of Man</h2>
            {SON_OF_MAN.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openSom === i ? TEAL : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenSom(openSom === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{openSom === i ? "−" : "+"}</span>
                </button>
                {openSom === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Discipleship Failure */}
        {activeTab === "Discipleship Failure" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Disciples' Failure to Understand</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>Mark is ruthlessly honest about the disciples. They are dull, fearful, ambitious, and ultimately abandon Jesus. This is not incidental — it is theological. Mark shows that the cross cannot be understood before it happens; the disciples' failure illustrates the human inability to grasp a cruciform Messiah.</p>
            {[
              ["After the Storm: No Faith (4:40)","'He said to his disciples, Why are you so afraid? Do you still have no faith?' After walking with Jesus, witnessing exorcisms and healings, the disciples dissolve in panic at a storm. Mark does not soften this. Their fear is described as extreme: they were 'terrified' (phobon megan). Faith is not automatic familiarity with Jesus but trust in who he is — and that is exactly what the disciples lack."],
              ["The Three Passion Predictions (8:31–33; 9:30–32; 10:32–45)","Each prediction is more detailed. Each response is more obtuse: Peter rebukes Jesus; the disciples argue about greatness; James and John ask for thrones. The disciples hear 'I will be killed and rise' and respond with conversations about status. Mark's biting irony: the cross is coming, and the would-be inner circle is jockeying for position. The narrative gap between Jesus and the disciples is the gap between cruciform and triumphalist understandings of the kingdom."],
              ["Gethsemane: Sleep, Not Prayer (14:37–42)","Three times Jesus returns to find Peter, James, and John asleep. His rebuke to Peter names the problem: 'Couldn't you keep watch for one hour? Watch and pray so that you will not fall into temptation. The spirit is willing, but the flesh is weak.' The disciples who insisted they would never forsake Jesus (14:31) cannot stay awake with him in his deepest hour. The spirit-flesh gap is the human condition — and Mark does not pretend it away."],
              ["Peter's Denial (14:66–72)","The triple denial — sandwiched around the trial of Jesus — forms Mark's most devastating scene. Jesus is confessing his identity before the Sanhedrin (14:62); Peter is denying it in the courtyard. The two trials are juxtaposed: one faithful, one faithless. When the rooster crows the second time, Peter 'broke down and wept.' Mark alone preserves the detail of the second rooster crow, possibly from Peter's own firsthand account of his worst moment."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${RED}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: RED, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 6: Passion */}
        {activeTab === "Passion" && (
          <div>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Passion Narrative (Chapters 11–16)</h2>
            {PASSION_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openPas === i ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenPas(openPas === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{openPas === i ? "−" : "+"}</span>
                </button>
                {openPas === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 7: Journal */}
        {activeTab === "Journal" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on your study of Mark. Your notes are saved locally.</p>
            {[
              "Where do you most identify with the disciples' failures — the fear in the storm, the argument about greatness, the sleepiness in Gethsemane?",
              "What does Mark's centurion confession — Son of God spoken at the cross, not the resurrection — say about where we see God most clearly?",
              "How does the abrupt ending (16:8) speak to you? What does it mean that Mark hands the story to the reader?",
            ].map((q, i) => <p key={i} style={{ color: GOLD, fontSize: ".85rem", fontStyle: "italic", marginBottom: ".4rem" }}>{i + 1}. {q}</p>)}
            <textarea
              value={journal}
              onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "1rem", fontSize: ".95rem", lineHeight: 1.7, resize: "vertical", marginTop: ".75rem", boxSizing: "border-box" }}
            />
            {journal && <p style={{ color: MUTED, fontSize: ".8rem", marginTop: ".5rem" }}>Saved automatically.</p>}
          </div>
        )}

        {/* Tab 8: Videos */}
        {activeTab === "Videos" && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "1rem" }}>
                    <div style={{ color: TEXT, fontWeight: 700 }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
