"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "prologue", label: "The Prologue" },
  { id: "signs", label: "Seven Signs" },
  { id: "iam", label: "I AM Sayings" },
  { id: "farewell", label: "Farewell Discourse" },
  { id: "passion", label: "Passion & Resurrection" },
  { id: "themes", label: "Major Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SIGNS = [
  { num: "1", ref: "2:1-12", title: "Water to Wine (Cana)", color: BLUE, body: "Jesus's first sign — turning water to wine at a wedding. The six stone jars for Jewish purification rites hold 120-180 gallons of water; the sign announces a new era of abundance that supersedes the old ceremonial order. Mary's 'they have no wine' and her instruction to the servants ('Do whatever he tells you') model faith. The master of the banquet's amazement — the best wine saved for last — announces the messianic banquet of the kingdom." },
  { num: "2", ref: "4:46-54", title: "Healing the Royal Official's Son", color: GREEN, body: "Jesus heals a son at a distance — his word alone is sufficient. The official believes before he sees the evidence (v. 50 — 'the man believed the word') and then goes home to confirm it. This models the faith John calls for throughout: believing on the basis of Jesus's word, not visual proof. John explicitly notes this is 'the second sign that Jesus did after coming from Judea to Galilee' (4:54)." },
  { num: "3", ref: "5:1-15", title: "Healing at the Pool of Bethesda", color: TEAL, body: "Jesus heals a man who has been ill for 38 years — on the Sabbath. The healing provokes the first Sabbath controversy in John, leading to Jesus's extended discourse about his authority as Son doing the Father's work (5:16-47). The sign demonstrates Jesus's authority over disease and death, and his identity as the one who gives life (5:21). The healed man later reports Jesus to the authorities — a subtle foreshadowing of the increasing opposition." },
  { num: "4", ref: "6:1-15", title: "Feeding the Five Thousand", color: PURPLE, body: "The only sign recorded in all four Gospels. Five barley loaves and two fish feed five thousand men plus women and children, with twelve baskets of fragments remaining. The sign triggers the Bread of Life discourse (6:22-59) — Jesus identifies himself as the true bread from heaven that sustains eternal life. The crowd wants to make him king (6:15); Jesus withdraws — his kingdom is not of this world. The Passover timing (6:4) links the sign to the exodus manna narrative." },
  { num: "5", ref: "6:16-21", title: "Walking on Water", color: GOLD, body: "Jesus walks on water to the disciples' boat in the middle of the Sea of Galilee. His self-identification — 'It is I' (Greek: ego eimi — literally 'I AM') — echoes the divine name of Exodus 3:14 and is the first of the Johannine 'I AM' declarations. The disciples' fear becomes worship. The sign demonstrates Jesus's sovereignty over creation and subtly reveals his divine identity to those with ears to hear." },
  { num: "6", ref: "9:1-41", title: "Healing the Man Born Blind", color: TEAL, body: "The healing of a man born blind — making mud with saliva and sending him to wash in Siloam — generates the most extended controversy narrative in John. The healed man gradually moves from 'the man called Jesus' (v. 11) to 'a prophet' (v. 17) to 'if this man were not from God, he could do nothing' (v. 33) to worship (v. 38) — a model of faith progression. The Pharisees move the other direction: from investigation to interrogation to expulsion. The sign embodies the Light of the World discourse (8:12; 9:5)." },
  { num: "7", ref: "11:1-44", title: "Raising Lazarus", color: GREEN, body: "The climactic and final sign — the raising of Lazarus from the dead after four days. Jesus weeps (11:35) before demonstrating his power over death. The sign prompts the council's decision to kill Jesus (11:45-53) — the raising of the dead triggers his own death. Martha's confession (11:27: 'I believe that you are the Messiah, the Son of God') is the Gospel's theological climax before the passion. The sign is the fullest demonstration of Jesus as Resurrection and Life (11:25)." },
];

const IAM_SAYINGS = [
  { ref: "6:35", saying: "I am the bread of life", body: "'Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.' Against the backdrop of the manna in the wilderness and the feeding of the five thousand, Jesus is the true bread from heaven that sustains eternal life. The Eucharistic overtones (6:53-56) divide the crowd: the difficult saying drives many away. The Twelve remain — 'Lord, to whom shall we go? You have the words of eternal life' (6:68)." },
  { ref: "8:12", saying: "I am the light of the world", body: "'Whoever follows me will never walk in darkness, but will have the light of life.' In the context of the Feast of Tabernacles (when giant menorahs illuminated the temple courts), Jesus claims to be the light that Israel's temple celebrated. The blind man's healing (John 9) is the enacted sign of this claim: Jesus literally gives light to one who was born in darkness." },
  { ref: "10:9", saying: "I am the gate", body: "'I am the gate; whoever enters through me will be saved. They will come in and go out, and find pasture.' In contrast to thieves and robbers who climb in another way, Jesus is the only legitimate access point to God, salvation, and flourishing. The sheep that enter through him find pasture — provision, safety, and abundant life." },
  { ref: "10:11", saying: "I am the good shepherd", body: "'The good shepherd lays down his life for the sheep.' Contrast with hired hands who flee when danger comes. The good shepherd knows his sheep and is known by them — the knowledge-intimacy language echoes the covenant relationship between God and Israel. The voluntary death (10:18 — 'No one takes it from me, but I lay it down of my own accord') establishes the cross as an act of sovereign love, not victimhood." },
  { ref: "11:25", saying: "I am the resurrection and the life", body: "'The one who believes in me will live, even though they die; and whoever lives by believing in me will never die.' To Martha, who expects resurrection at the last day, Jesus announces that the last day's resurrection power is present in him now. This saying transforms the Lazarus narrative: the raising of Lazarus is not just a miracle but a sign that Jesus himself is the source of all life." },
  { ref: "14:6", saying: "I am the way, the truth, and the life", body: "'No one comes to the Father except through me.' In the Farewell Discourse, consoling disciples about his departure. The exclusivity of this claim is the most controversial in John: Jesus is not one path among many but the unique, sufficient, and necessary way to the Father. 'The truth' (not merely a truth) and 'the life' reinforce the absolute claim." },
  { ref: "15:1", saying: "I am the true vine", body: "'I am the true vine, and my Father is the gardener.' Israel was the vine (Isaiah 5; Psalm 80) that produced no fruit; Jesus is the true, faithful vine. The disciples are the branches — fruitfulness depends entirely on abiding in the vine. 'Apart from me you can do nothing' (15:5). The pruning image: the Father removes fruitless branches and prunes fruitful ones for greater yield. Abiding in Christ, his word abiding in us, produces the fruit that glorifies the Father (15:8)." },
];

const FAREWELL_ITEMS = [
  { color: PURPLE, title: "John 13 — Foot Washing", body: "Before the Passover feast, Jesus washes his disciples' feet — the task of the lowest servant. 'Now that I, your Lord and Teacher, have washed your feet, you also should wash one another's feet. I have set you an example that you should do as I have done for you' (13:14-15). The servant leadership model defines the community ethic of the new covenant. Judas's departure (13:21-30) is the shadow against which the light of the commandments shines. The new commandment: 'Love one another as I have loved you' (13:34) — the love of self-giving service." },
  { color: BLUE, title: "John 14 — Do Not Let Your Hearts Be Troubled", body: "'Let not your hearts be troubled. You believe in God; believe also in me. In my Father's house are many rooms... I am going there to prepare a place for you' (14:1-3). The preparation language echoes ancient Jewish wedding customs — the groom prepares a place for his bride. The Paraclete (Helper/Advocate/Comforter) is introduced (14:16-17, 26): the Spirit will teach and remind the disciples of everything Jesus said, enabling the writing of the NT and the ongoing life of the community." },
  { color: GREEN, title: "John 15 — The Vine and the Branches", body: "The allegory of the vine and branches (15:1-17) is the Farewell Discourse's theological center: abiding in Christ produces fruit; branches that don't abide are cut off and burned. The fruit is identified as answered prayer (15:7), love for one another (15:12, 17), and the disciples going and bearing lasting fruit (15:16). The world's hatred (15:18-25) is expected and explained: the world hates the disciples because it hated Jesus first." },
  { color: GOLD, title: "John 16-17 — The Spirit and Jesus's Prayer", body: "The Spirit's convicting work (16:8-11 — convicting the world of sin, righteousness, and judgment) and guiding work (16:13 — guiding into all truth) are elaborated. Jesus's High Priestly Prayer (John 17) is the most extended prayer of Jesus in any Gospel: for himself (17:1-5), for the disciples (17:6-19), and for all future believers (17:20-26). The unity theme is central: 'that they may be one as we are one' (17:11). The glory that the Father gave the Son is given to the disciples (17:22) — the ultimate expression of the divine love overflowing into the community." },
];

const THEMES_ITEMS = [
  { title: "Life (Zōē)", color: GREEN, body: "John uses the word 'life' (zōē — eternal life) 36 times (the Synoptics use it rarely). Eternal life is not primarily future duration but present quality — knowing God and Jesus Christ (17:3). 'I have come that they may have life, and have it to the full' (10:10). The purpose statement of the Gospel: 'these are written that you may believe that Jesus is the Messiah, the Son of God, and that by believing you may have life in his name' (20:31). Life in John is not a benefit of the gospel — it is the gospel itself." },
  { title: "Light and Darkness", color: GOLD, body: "The prologue introduces the dualism: the Word is the light (1:4-5), and 'the darkness has not overcome it.' Throughout John, characters move toward the light (the blind man) or deeper into darkness (Judas at night — 13:30: 'as soon as Judas had taken the bread, he went out. And it was night'). The dualism is not ontological (creation is not inherently dark) but moral and relational: responding to or rejecting the light." },
  { title: "Belief/Faith (Pisteuō)", color: BLUE, body: "John never uses the noun 'faith' — always the verb 'believe' (98 times). Belief in John is an active, ongoing commitment to Jesus, not a one-time decision. The objects of belief vary: believing that Jesus is the Christ (20:31), believing in Jesus, believing his words. The purpose of the signs is to produce belief (20:30-31); the tragedy of the Gospel is that those most exposed to the signs reject them (12:37-40). Believing without seeing (20:29 — Thomas) is specifically blessed." },
  { title: "The Father-Son Relationship", color: TEAL, body: "John's highest Christology is built on the Father-Son relationship. The Son does only what he sees the Father doing (5:19); the Father loves the Son and shows him everything (5:20); the Son gives life to whom the Father has given him (6:37-40). This relationship is the basis for all of Jesus's activity and authority. The 'I AM' statements are the most explicit: before Abraham was, 'I AM' (8:58) — claiming the divine name of Exodus 3:14. Thomas's confession ('My Lord and my God' — 20:28) is the Gospel's Christological climax." },
];

const VIDEOS = [
  { videoId: "G-2e9mMf7E8", title: "Gospel of John Overview — BibleProject" },
  { videoId: "NpzMiXY6Qz4", title: "The Prologue of John — D.A. Carson" },
  { videoId: "pOiAHKJMKKU", title: "The I AM Sayings of Jesus — John Piper" },
  { videoId: "6YC30xECRZE", title: "John 17 — The High Priestly Prayer — Tim Keller" },
  { videoId: "fgLyGXonjqI", title: "Resurrection Appearances in John — Michael Licona" },
];

export default function GospelOfJohnGuide() {
  const [tab, setTab] = useLocalStorage("vine_john_tab", "overview");
  const [signOpen, setSignOpen] = useLocalStorage("vine_john_sign", "");
  const [iamOpen, setIamOpen] = useLocalStorage("vine_john_iam", "");
  const [journal, setJournal] = useLocalStorage("vine_john_journal", "");

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: BLUE + "22", color: BLUE, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1 }}>GOSPEL OF JOHN</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>The Gospel of John</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680 }}>
          The spiritual Gospel — the prologue, the seven signs, the great I AM sayings, the Farewell Discourse, and the resurrection.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? BLUE : BORDER, background: tab === t.id ? BLUE + "22" : "transparent", color: tab === t.id ? BLUE : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Introduction to John's Gospel</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              The Fourth Gospel stands apart from the Synoptics (Matthew, Mark, Luke) in structure, language, and focus. Where the Synoptics record 35 miracles, John selects seven and calls them 'signs.' Where the Synoptics emphasize the kingdom of God, John emphasizes eternal life. Where the Synoptics' Jesus teaches in parables, John's Jesus teaches in extended discourses and allegories. The author states his purpose explicitly: 'these are written that you may believe that Jesus is the Messiah, the Son of God, and that by believing you may have life in his name' (20:31).
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Author", value: "John (Beloved Disciple)", color: BLUE },
                { label: "Date", value: "~AD 90-100", color: GREEN },
                { label: "Structure", value: "Signs + Farewell + Passion", color: PURPLE },
                { label: "Purpose", value: "Believe → Life (20:31)", color: GOLD },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: "0.94rem" }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.8rem", color: BLUE }}>Structure of John</h3>
              <ul style={{ color: MUTED, lineHeight: 2, paddingLeft: "1.2rem" }}>
                <li><strong style={{ color: TEXT }}>1:1-18</strong> — The Prologue: the Word, incarnation, and the light</li>
                <li><strong style={{ color: TEXT }}>1:19–12:50</strong> — The Book of Signs: seven signs + discourses, increasing opposition</li>
                <li><strong style={{ color: TEXT }}>13:1–17:26</strong> — The Farewell Discourse: foot washing, Paraclete, vine and branches, High Priestly Prayer</li>
                <li><strong style={{ color: TEXT }}>18:1–20:31</strong> — The Passion and Resurrection narrative</li>
                <li><strong style={{ color: TEXT }}>21:1-25</strong> — Epilogue: resurrection appearances by the Sea of Galilee</li>
              </ul>
            </div>
          </div>
        )}

        {/* PROLOGUE */}
        {tab === "prologue" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Prologue (John 1:1-18)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The most theologically dense eighteen verses in the NT — the hymnic introduction that sets the interpretive framework for the whole Gospel.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "In the Beginning Was the Word (1:1-5)", color: BLUE, body: "'In the beginning was the Word, and the Word was with God, and the Word was God' (1:1). The echo of Genesis 1:1 is intentional: John announces a new creation. The Word (Logos) — drawing on both Jewish Wisdom theology and Greek philosophical usage — is identified as both distinct from God ('with God') and fully divine ('was God'). Verse 3: 'Through him all things were made; without him nothing was made that has been made.' The pre-existent, creative, divine Word becomes the interpretive lens through which Jesus is understood. Verse 5: 'The light shines in the darkness, and the darkness has not overcome it' — the cosmic conflict frame." },
                { title: "The Word Became Flesh (1:14-18)", color: GREEN, body: "'The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth' (1:14). 'Became flesh' is the bluntest possible statement of incarnation — not appeared to be flesh, not inhabited a body temporarily, but became flesh. 'Dwelling' (eskēnōsen — tabernacled) evokes the tabernacle of the exodus: the place where God's glory dwelt. Jesus is the ultimate tabernacle. 'Full of grace and truth' (1:14, 17): these are covenant terms — hesed (steadfast love/grace) and emet (faithfulness/truth) — Jesus embodies the covenant character of God." },
                { title: "John the Baptist as Witness (1:6-8)", color: GOLD, body: "'There was a man sent from God whose name was John. He came as a witness to testify concerning that light, so that through him all might believe' (1:6-7). John's role in the Fourth Gospel is entirely witness — he is not the light but points to it. The Baptist's witness framework runs through the whole Gospel: the disciples are also witnesses (15:27), and the Spirit is the Paraclete-witness (15:26). The Gospel's purpose — that readers would believe — is achieved through the chain of testimony that the Gospel itself records." },
              ].map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SEVEN SIGNS */}
        {tab === "signs" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Seven Signs</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              John uses the word 'sign' (sēmeion) rather than 'miracle' — the signs point beyond themselves to who Jesus is. Each is followed by a discourse that interprets its theological meaning.
            </p>
            {SIGNS.map(s => (
              <div key={s.num} style={{ background: CARD, border: `1px solid ${signOpen === s.num ? s.color : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setSignOpen(signOpen === s.num ? "" : s.num)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "0.97rem", cursor: "pointer", textAlign: "left" }}>
                  <span><span style={{ color: s.color, fontSize: "0.8rem", marginRight: "0.6rem" }}>Sign {s.num} · {s.ref}</span>{s.title}</span>
                  <span style={{ color: s.color, fontSize: "1.2rem", flexShrink: 0 }}>{signOpen === s.num ? "−" : "+"}</span>
                </button>
                {signOpen === s.num && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{s.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* I AM SAYINGS */}
        {tab === "iam" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Seven I AM Sayings</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Seven predicated 'I AM' (ego eimi) sayings — echoing the divine name of Exodus 3:14 — each revealing a different facet of who Jesus is.
            </p>
            {IAM_SAYINGS.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${iamOpen === s.ref ? GOLD : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setIamOpen(iamOpen === s.ref ? "" : s.ref)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "0.97rem", cursor: "pointer", textAlign: "left" }}>
                  <span><span style={{ color: GOLD, fontSize: "0.8rem", marginRight: "0.6rem" }}>{s.ref}</span>{s.saying}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem", flexShrink: 0 }}>{iamOpen === s.ref ? "−" : "+"}</span>
                </button>
                {iamOpen === s.ref && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{s.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* FAREWELL DISCOURSE */}
        {tab === "farewell" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Farewell Discourse (John 13–17)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Five chapters of Jesus preparing his disciples for his departure — foot washing, the Paraclete, the vine and branches, and the High Priestly Prayer.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {FAREWELL_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PASSION AND RESURRECTION */}
        {tab === "passion" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Passion and Resurrection (John 18–21)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              John's passion narrative emphasizes Jesus's sovereign control and the royal dimension of his death. The resurrection appearances are among the most vivid in the NT.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Jesus's Arrest and Trials (18:1–19:16)", color: PURPLE, body: "In Gethsemane, when soldiers identify Jesus of Nazareth, he says 'I AM' (ego eimi — 18:5, 6, 8) and they fall back to the ground — the divine name again, with physical effect. John's trial narrative before Pilate is the most extended (18:28–19:16): the irony is relentless — Pilate interrogates Jesus but Jesus controls the conversation (18:36-37: 'My kingdom is not of this world'). 'What is truth?' (18:38) — Pilate asks his question to the one who is truth itself. The inscription 'King of the Jews' in three languages (19:19-20) is the paradoxical coronation." },
                { title: "The Crucifixion (19:17-42)", color: BLUE, body: "John's crucifixion account emphasizes completion and fulfillment: each element fulfills Scripture (the garments, the hyssop, the unbroken bones). 'It is finished' (tetelestai — 19:30) is the one word that summarizes Jesus's accomplished work — the same root as 'accomplish' and 'fulfill' throughout John. The piercing of Jesus's side producing blood and water (19:34) is emphasized by the author (19:35 — an eyewitness account) and carries sacramental significance (blood = Eucharist, water = baptism, or alternatively, the physical proof of real death against docetism)." },
                { title: "The Resurrection (20:1-31)", color: GREEN, body: "Three resurrection appearances: Mary Magdalene (recognizes Jesus when he calls her name — 20:16: the Good Shepherd calling his sheep by name); the disciples (receives the Spirit, given authority to forgive sins — 20:22-23); Thomas ('My Lord and my God' — 20:28, the Gospel's Christological climax). The purpose statement follows: 'these are written that you may believe' (20:30-31). Believing without seeing is specifically blessed (20:29) — the condition of all subsequent readers." },
                { title: "Epilogue: Restoration (John 21)", color: TEAL, body: "The risen Jesus appears by the Sea of Galilee, echoing the original call of the disciples (Luke 5). The charcoal fire (21:9 — same word as 18:18, the courtyard fire where Peter denied Jesus) frames Peter's threefold restoration: 'Do you love me?' three times for three denials (21:15-17). The commission — 'Feed my sheep' — restores Peter to his calling. The Beloved Disciple's testimony closes the Gospel (21:24): the chain of witness connecting the eyewitness to the reader." },
              ].map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MAJOR THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Major Themes in John</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Four theological themes that run through the whole Gospel and shape how John tells the story of Jesus.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {THEMES_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Reflection Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Questions for meditating on the Gospel of John.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                "Which of the seven I AM sayings most resonates with where you are right now? Why?",
                "In the seven signs, which sign most powerfully demonstrates something about Jesus you need to believe more deeply?",
                "John 15:5 — 'apart from me you can do nothing.' Where in your life are you trying to be fruitful without abiding in Christ?",
                "Thomas's response was 'My Lord and my God' (20:28). When was the last time your heart made that confession genuinely?",
              ].map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem" }}>
                  <div style={{ color: BLUE, fontWeight: 600, fontSize: "0.9rem" }}>{q}</div>
                </div>
              ))}
            </div>
            <textarea value={journal} onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here — saved locally in your browser..."
              style={{ width: "100%", minHeight: 220, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, color: TEXT, padding: "1rem", fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Video Teaching</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Teaching through the Gospel of John from trusted biblical scholars.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "0.9rem 1rem" }}>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
