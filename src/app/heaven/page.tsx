"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "misunderstandings" | "voices" | "living" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "intermediate",
    title: "The Intermediate State",
    verse: "Philippians 1:23",
    body: "Between physical death and bodily resurrection is an intermediate state. Paul describes it as being 'with Christ, which is better by far' (Philippians 1:23). Jesus told the dying thief: 'today you will be with me in paradise' (Luke 23:43). The intermediate state is not full Christian hope (which requires bodily resurrection) but it is genuine presence with Christ — conscious, relational, restful. The dead in Christ are not annihilated, not in soul sleep, not in purgatorial suffering — they are 'at home with the Lord' (2 Corinthians 5:8).",
  },
  {
    id: "resurrection",
    title: "The Resurrection of the Body",
    verse: "1 Corinthians 15:42-44",
    body: "Christian hope is not escape from the body into a spiritual realm — it is the resurrection of the body. The resurrection body is physical (Jesus ate, was touched, showed his wounds) but transformed and imperishable. Paul uses a seed-plant metaphor: 'What is sown is perishable; what is raised is imperishable. It is sown in dishonor; it is raised in glory. It is sown in weakness; it is raised in power.' The body that will be raised is this body — not a different one, but this one glorified, freed from decay, pain, and death.",
  },
  {
    id: "newearth",
    title: "New Heaven and New Earth",
    verse: "Revelation 21:1-5",
    body: "John's vision is of 'a new heaven and a new earth' — but the word translated 'new' (kainos) means renewed or transformed, not created from nothing. God does not abandon his creation; he redeems it. The final destination is not a spiritual realm floating above the earth — it is the earth renewed and united with heaven. Revelation 21:2-3: 'I saw the Holy City, the new Jerusalem, coming down out of heaven from God... God's dwelling place is now among the people.' Heaven comes to earth; we do not leave earth for heaven.",
  },
  {
    id: "city",
    title: "The New Jerusalem",
    verse: "Revelation 21:9-27",
    body: "John's vision of the New Jerusalem is deliberately maximalist: 12 foundations, 12 gates, gold streets, river of life, tree of life bearing fruit. It is simultaneously a city (human civilization redeemed and perfected), a garden (Eden restored and expanded), and a temple (the whole space is sacred — 'I did not see a temple in the city, because the Lord God Almighty and the Lamb are its temple'). The nations bring their glory in (21:24-26). Human culture — music, art, language, craft — is not destroyed but gathered and glorified. The new creation is not impoverishment but abundance.",
  },
  {
    id: "vision",
    title: "The Beatific Vision",
    verse: "1 John 3:2",
    body: "'We know that when he appears, we shall be like him, for we shall see him as he is' (1 John 3:2). The highest and definitive joy of heaven is the face-to-face knowledge of God. Theology calls this the beatific vision — the blessed sight of God without mediation. Paul says we now see 'in a mirror, dimly' but then 'face to face' (1 Corinthians 13:12). Jonathan Edwards: the saints will grow in knowledge and joy for eternity without ever exhausting the infinite God who is their object. Heaven is not a static destination but an eternal, ever-deepening encounter with the inexhaustible God.",
  },
  {
    id: "rewards",
    title: "Degrees of Reward",
    verse: "1 Corinthians 3:12-15",
    body: "The NT speaks of degrees of reward for believers in the age to come. Paul describes the quality of each person's work being tested by fire: some will receive a reward; others will be saved 'but only as one escaping through the flames' (1 Corinthians 3:15). Jesus speaks of those who will be 'least' and 'greatest' in the kingdom (Matthew 5:19). All believers will be present; not all will have contributed equally. Faithfulness now has eschatological consequence. This is not a threat but an invitation: what you do in Christ now matters permanently.",
  },
];

const MISUNDERSTANDINGS = [
  {
    wrong: "Heaven is disembodied souls floating on clouds, playing harps forever",
    right: "Revelation describes a city, a garden, and a feast — embodied, active, relational, cultural existence.",
    verse: "Revelation 21:2-4",
  },
  {
    wrong: "Heaven is our final destination — we escape earth and go up there permanently",
    right: "The final destination is the new earth. Revelation 21 describes heaven coming DOWN to a renewed earth.",
    verse: "Revelation 21:1-3",
  },
  {
    wrong: "Heaven will be boring — eternal worship service without end",
    right: "Dallas Willard: the new creation involves real work, real creativity, real administration, real relationship — freed from frustration and futility.",
    verse: "Isaiah 65:21-22",
  },
  {
    wrong: "The good things of this life (music, food, friendship, nature) all disappear in heaven",
    right: "The nations bring their glory into the city (Rev 21:24-26). Creation is redeemed and perfected, not erased. What is good about this life is the shadow of what is coming.",
    verse: "Revelation 21:24-26",
  },
  {
    wrong: "Christians go straight to the full new creation at death",
    right: "Death brings us to the intermediate state — presence with Christ, 'far better' than now, but not yet full resurrection. The new creation arrives at Christ's return.",
    verse: "Philippians 1:23; 1 Corinthians 15:52",
  },
  {
    wrong: "Heaven is unrelated to what we do on earth — everything gets wiped clean anyway",
    right: "'Your labor in the Lord is not in vain' (1 Cor 15:58). Faithfulness now has eschatological weight. What is done in Christ somehow persists into the new creation.",
    verse: "1 Corinthians 15:58",
  },
];

const VOICE_ITEMS = [
  {
    id: "lewis",
    name: "C.S. Lewis",
    work: "The Last Battle, The Weight of Glory",
    color: "#F59E0B",
    quote: "The door on which we have been knocking all our lives will open at last.",
    contribution: "Lewis saw this life as preparation for a world we have always been homesick for. The longing we feel for beauty, joy, and transcendence — the thing he called 'Joy' or Sehnsucht — is not satisfied by anything in this world because it is memory of, and longing for, the world for which we were made. His image in The Last Battle: 'Farther up and further in!' — heaven as an inexhaustible country where every step inward is richer and more real than the last.",
  },
  {
    id: "wright",
    name: "N.T. Wright",
    work: "Surprised by Hope",
    color: "#3B82F6",
    quote: "The point of the resurrection is that the present bodily life is not valueless just because it will die.",
    contribution: "Wright's contribution is reclaiming the physical and earthly dimensions of Christian hope. Against the Greek dualism that has infected popular Christianity (spirit good, matter dispensable), Wright argues that the NT consistently pictures a renewed physical creation — new earth, resurrection bodies, the materiality of the new Jerusalem. 'Heaven is important, but it's not the end of the world' — meaning that the new earth, not a spiritual realm, is the final home of redeemed humanity.",
  },
  {
    id: "willard",
    name: "Dallas Willard",
    work: "The Divine Conspiracy",
    color: GREEN,
    quote: "Heaven is not a destination but an invitation into eternal life that begins now.",
    contribution: "Willard emphasized that eternal life is not something we wait for after death but something that begins now, in the interactive relationship with God that Jesus called 'the kingdom of heaven.' Heaven in his understanding is the continuation and perfection of this life of cooperative engagement with God — 'the unceasing apprenticeship of eternal exploration of the inexhaustible riches of God,' as he described it.",
  },
  {
    id: "alcorn",
    name: "Randy Alcorn",
    work: "Heaven",
    color: PURPLE,
    quote: "Our present bodies are seeds, our resurrection bodies are what the seed grows into.",
    contribution: "Alcorn's comprehensive study of heaven is the most detailed popular treatment available. His central contribution: the new earth is a real physical place, and the new Jerusalem contains culture, art, work, and relationships elevated and perfected. He takes Revelation's imagery seriously as revealing something genuinely continuous with and transcendent of present experience — not a wispy, dematerialized existence but a richly material one.",
  },
  {
    id: "edwards",
    name: "Jonathan Edwards",
    work: "Heaven, A World of Love",
    color: "#EC4899",
    quote: "The saints will see infinite grace and infinite beauty in God, and will be ravished with joy.",
    contribution: "Edwards's sermon 'Heaven, A World of Love' presents heaven as the culmination and perfection of love — the love of the Trinity overflowing into and among the saints, forever deepening. His insight: the saints will grow in knowledge and joy for eternity because the object of their love and knowledge is infinite. The beatific vision is not a plateau but an eternal ascent into an inexhaustible God. Heaven for Edwards is dynamic, not static.",
  },
];

const LIVING_ITEMS = [
  {
    title: "Set Your Mind on Things Above",
    icon: "☁️",
    color: "#3B82F6",
    body: "Colossians 3:1-2: 'Since, then, you have been raised with Christ, set your hearts on things above... Set your minds on things above, not on earthly things.' This is not escapism — it is perspective. People who are most heavenly minded are often the most earthly good (Lewis's famous inversion of the cliche). Meditating on heaven recalibrates what matters, reduces the power of temporal anxieties, and creates generosity with material possessions.",
  },
  {
    title: "Treat Bodies as Significant",
    icon: "💪",
    color: GREEN,
    body: "If the future is bodily resurrection, bodies matter now. Care for your body, care for others' bodies, resist anything that treats human bodies as disposable. Healthcare, food, shelter, and physical dignity are eschatologically loaded. The resurrection means your body is not a temporary vessel but the very thing that will be glorified.",
  },
  {
    title: "Invest in What Will Last",
    icon: "💎",
    color: PURPLE,
    body: "'Your labor in the Lord is not in vain' (1 Corinthians 15:58). This changes how we allocate our time, money, and energy. Work done in Christ — justice pursued, people loved, truth spoken, beauty created — has an eschatological dimension. Use your 'earthly wealth' to 'make friends' for eternity (Luke 16:9). What is done in Christ somehow persists.",
  },
  {
    title: "Grieve Differently",
    icon: "🌿",
    color: "#F59E0B",
    body: "1 Thessalonians 4:13: 'We do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope.' Not: do not grieve. But: grieve differently — with hope, not as those for whom death is the final word. The resurrection gives grief a shape: it is real loss but temporary separation, not permanent annihilation.",
  },
  {
    title: "Hold Earthly Things Lightly",
    icon: "🕊️",
    color: "#EC4899",
    body: "The person who sees heaven clearly does not clutch at things that rust or moth destroy. Paul's paradox: 'sorrowful, yet always rejoicing; poor, yet making many rich; having nothing, and yet possessing everything' (2 Corinthians 6:10). The lightness is not indifference but freedom — freed from grasping by the certainty of the inheritance.",
  },
  {
    title: "Cultivate Anticipatory Joy",
    icon: "🎉",
    color: "#10B981",
    body: "The early church's greeting was 'Maranatha!' — 'Come, Lord Jesus!' (1 Corinthians 16:22, Revelation 22:20). This is not resignation but eagerness — the posture of those who genuinely believe the best is still ahead. Joy is appropriate now not because circumstances are ideal but because the end of the story is certain. Practice anticipation: 'Even so, come, Lord Jesus.'",
  },
];

const TABS = [
    { id: "theology" as Tab, label: "What Scripture Says", icon: "📖" },
    { id: "misunderstandings" as Tab, label: "Correcting Myths", icon: "⚖️" },
    { id: "voices" as Tab, label: "Great Christian Voices", icon: "🎓" },
    { id: "living" as Tab, label: "Living with Eternal Hope", icon: "✨" },
    { id: "videos" as Tab, label: "Videos", icon: "🎬" },
  ];

export default function HeavenPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_heaven_tab", "theology");
  const [selectedTheology, setSelectedTheology] = usePersistedState("vine_heaven_selected_theology", "intermediate");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_heaven_voice", "lewis");

  const theologyItem = THEOLOGY_ITEMS.find(t => t.id === selectedTheology)!;
  const voiceItem = VOICE_ITEMS.find(v => v.id === selectedVoice)!;


  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌟</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Heaven and Eternal Life</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.65 }}>
            The Christian hope is not escape from earth into a spiritual realm but the resurrection of the body and the renewal of all things — a physical, relational, embodied existence with God that makes present existence look like a shadow.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                What does Scripture actually say about what happens after death? The answer is richer, more physical, and more social than most popular Christianity imagines — and it grounds present hope.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 180 }}>
                {THEOLOGY_ITEMS.map(t => (
                  <button type="button" key={t.id} onClick={() => setSelectedTheology(t.id)}
                    style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedTheology === t.id ? GREEN : BORDER}`, background: selectedTheology === t.id ? `${GREEN}18` : CARD, color: selectedTheology === t.id ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                    {t.title}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, margin: 0 }}>{theologyItem.title}</h2>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={theologyItem.verse} /></span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{theologyItem.body}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "misunderstandings" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Much popular Christian thinking about heaven is shaped more by Greek dualism (spirit good, matter dispensable) than by biblical eschatology. These contrasts clarify the actual biblical picture.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {MISUNDERSTANDINGS.map((m, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                    <div style={{ background: "#EF444410", border: "1px solid #EF444425", borderRadius: 8, padding: 14 }}>
                      <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Popular But Wrong</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{m.wrong}</p>
                    </div>
                    <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Biblical Picture</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{m.right}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={m.verse} /></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "voices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Five of Christianity's greatest thinkers on what awaits us — each bringing a distinct lens that enriches the biblical picture.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
                {VOICE_ITEMS.map(v => (
                  <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedVoice === v.id ? v.color : BORDER}`, background: selectedVoice === v.id ? `${v.color}18` : CARD, color: selectedVoice === v.id ? v.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                    {v.name}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${voiceItem.color}30`, borderRadius: 14, padding: 28 }}>
                  <div style={{ marginBottom: 16 }}>
                    <h2 style={{ color: voiceItem.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{voiceItem.name}</h2>
                    <span style={{ color: MUTED, fontSize: 13 }}>{voiceItem.work}</span>
                  </div>
                  <div style={{ background: `${voiceItem.color}10`, border: `1px solid ${voiceItem.color}25`, borderRadius: 8, padding: 14, marginBottom: 18 }}>
                    <p style={{ color: voiceItem.color, fontSize: 15, fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>"{voiceItem.quote}"</p>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "living" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Eschatology shapes ethics: what we believe about the end shapes how we live now. The hope of heaven is not escapism — it is the most grounding and liberating reality available to human beings.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {LIVING_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: 22 }}>{item.icon}</span>
                    <h3 style={{ color: item.color, fontWeight: 800, fontSize: 16, margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 22, marginTop: 24 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>THE RIVER AND THE TREE</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Revelation 22 ends with a river of life flowing through the city, the tree of life bearing fruit for the healing of the nations, and the face of God seen at last without mediation. This is the telos — the goal toward which all of history moves. The Christian life is not treading water until this arrives; it is participating in its arrival. Every prayer, every act of love, every moment of justice is a stitch in the tapestry of the new creation that God is weaving.
              </p>
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "in9PgXqYbeA", title: "The Hope of Heaven", channel: "John Piper, Scott Swain & Randy Alcorn", description: "A Gospel Coalition conversation on the Christian hope of heaven — the resurrection body, the new earth, and what it means to be with Christ forever." },
                  { videoId: "EkGNQKICp-I", title: "Blessed Hope: Resurrection and Eternal Life", channel: "John Piper / Desiring God", description: "John Piper preaches on the resurrection as the anchor of Christian hope — not escape from the body but bodily resurrection into a renewed creation." },
                  { videoId: "fTyW7Vit_9M", title: "Heaven", channel: "Randy Alcorn", description: "Randy Alcorn teaches on what Scripture actually says about heaven — correcting popular myths and showing the physical, relational, joyful reality of the new creation." },
                  { videoId: "XdhlYZLqom8", title: "How Heaven Energizes the Unwasted Life", channel: "Randy Alcorn / Desiring God", description: "Randy Alcorn shows how the genuine hope of heaven motivates faithful, fruitful living now — the future pulls us forward into present obedience and love." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
