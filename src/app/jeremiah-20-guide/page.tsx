"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";
const ACCENT = ROSE;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

type Jer20Tab = "overview" | "themes" | "verse" | "application";

const OVERVIEW_SECTIONS = [
  {
    color: ROSE,
    title: "Pashhur Arrests Jeremiah (20:1-2)",
    body: "Jeremiah 20 opens with the first recorded instance of physical violence against Jeremiah: Pashhur son of Immer, the priest who was chief officer in the temple of the LORD, had Jeremiah the prophet beaten and put in the stocks at the Upper Benjamin Gate of the temple (20:1-2). This is not merely a social snub or a verbal argument. Pashhur wielded institutional religious authority, and he used it to humiliate and physically abuse the prophet. Jeremiah spent the night in the stocks at a public gate, visible to all who passed through. The suffering here is bodily, social, and deeply isolating.",
  },
  {
    color: GOLD,
    title: "Pashhur Renamed Magor-Missabib (20:3-6)",
    body: "When Jeremiah is released the next morning, he does not apologize or soften his message. Instead he delivers a searing oracle: 'The LORD does not call your name Pashhur, but Terror on Every Side' (20:3). Magor-missabib -- the Hebrew name for 'terror on every side' -- appears frequently in Jeremiah (6:25, 20:10, 46:5, 49:29) as a shorthand for siege warfare and total collapse. Jeremiah announces that Pashhur himself will become a terror to all his friends; that Judah will be given into the hand of the king of Babylon who will carry them captive and kill them with the sword; and that Pashhur, his household, and all his friends will go to Babylon where they will die and be buried (20:4-6). The renaming is itself a prophetic act: Pashhur's identity is being rewritten by God through Jeremiah's word.",
  },
  {
    color: TEAL,
    title: "The Great Confession: O LORD, You Deceived Me (20:7-9)",
    body: "Then comes the most psychologically raw passage in all prophetic literature. Jeremiah accuses God of deception: 'O LORD, you have deceived me, and I was deceived; you are stronger than I, and you have prevailed' (20:7). The Hebrew word for 'deceived' (patah) can mean 'to entice,' 'to seduce,' or 'to persuade someone into something they later regret.' This is not polite theological language. Jeremiah is saying: God, you talked me into this calling, you were stronger than my resistance, and now I am the laughingstock of my own people (20:7-8). He speaks of his intention to stop prophesying -- but he cannot. The word becomes 'like a burning fire shut up in my bones' and he is 'weary of holding it in,' and indeed he cannot (20:9). This is one of the most theologically honest statements about prophetic compulsion in all of Scripture.",
  },
  {
    color: PURPLE,
    title: "Praise Amid Pain (20:10-13)",
    body: "The passage then oscillates between anguish and trust in a way that mirrors the lament psalms. Jeremiah hears 'Terror on Every Side' from those around him -- former friends watching for him to stumble (20:10). He declares confidently that 'the LORD is with me like a mighty warrior' and that his persecutors will stumble and be overcome (20:11). He appeals to God as one who 'tests the righteous and sees the heart and the mind' (20:12). Then, astonishingly, he breaks into a call to praise: 'Sing to the LORD; praise the LORD! For he has delivered the life of the needy from the hand of evildoers' (20:13). Praise in the midst of persecution -- not after the persecution is over, but in the middle of it. This is the paradox of prophetic faith.",
  },
  {
    color: ROSE,
    title: "The Bitter Lament: Cursed Be the Day (20:14-18)",
    body: "Then the floor drops out again. Without any grammatical transition, Jeremiah plunges from praise into the most extreme lament in the book: 'Cursed be the day on which I was born! The day when my mother bore me, let it not be blessed!' (20:14). He curses the man who brought the news to his father that a son was born. He invokes the fate of Sodom and Gomorrah. He asks why he came out of the womb to see toil and sorrow, and to end his days in shame (20:18). The chapter ends not in resolution but in raw desolation. There is no 'but God' at the end of Jeremiah 20. The reader is left sitting in the darkness with the weeping prophet. This is deliberately uncomforting -- and it is Scripture.",
  },
];

const THEME_ITEMS = [
  {
    color: ROSE,
    title: "The Cost of Prophetic Calling",
    body: "Jeremiah 20 is the most vivid illustration in the Bible of what it costs to speak for God. The prophet receives beatings, public humiliation in the stocks, social ostracism, and the psychological torment of a message he cannot stop delivering. The calling is not glamorous. Jeremiah was not celebrated in his lifetime; he was mocked, isolated, and imprisoned. The NT will later describe Jesus as a prophet in this same tradition -- rejected by his own, betrayed by associates, killed by the religious establishment. The path of faithful witness often leads through suffering before it leads anywhere else.",
  },
  {
    color: GOLD,
    title: "Persecution by Religious Institutions",
    body: "Pashhur is not a pagan king or a foreign oppressor. He is the chief officer of the temple -- the highest-ranking religious administrator in Judah. He is the guardian of official religion. And it is he who beats and stocks Jeremiah. This pattern recurs throughout prophetic history: the most violent opposition to the word of God often comes not from outside the covenant community but from within it, from those who have the most institutional investment in a comfortable, unthreatening version of religion. The prophets are most dangerous to people who need God to be manageable.",
  },
  {
    color: TEAL,
    title: "The Burning Compulsion to Speak",
    body: "Jeremiah 20:9 is one of the most psychologically fascinating verses in Scripture: 'If I say, I will not mention him, or speak any more in his name, there is in my heart as it were a burning fire shut up in my bones, and I am weary of holding it in, and I cannot.' Jeremiah tries to quit. He decides to stop prophesying. He cannot do it. The word of God is described with physical, physiological urgency -- a fire he cannot contain no matter how much the social cost of speaking it. This is not fanaticism. It is the experience of a person who has genuinely received a divine call and cannot un-receive it.",
  },
  {
    color: PURPLE,
    title: "The Honesty of Lament Before God",
    body: "Jeremiah 20 demonstrates that prayer can include accusation. Jeremiah does not filter his complaint to make it more theologically respectable. He accuses God of deception. He curses the day of his birth. He asks why he was born at all. This is not a failure of faith; it is faith pressed to its limits and refusing to pretend otherwise. The lament tradition in the Old Testament -- running through Job, the Psalms, Lamentations, and the confessions of Jeremiah -- insists that God is large enough to receive our most honest and desperate speech. Sanitized prayer is not necessarily more faithful prayer.",
  },
  {
    color: ROSE,
    title: "The Paradox of Trust Amid Doubt",
    body: "Jeremiah 20 holds extremes in tension that we usually want to resolve. Within a few verses we find accusation of God (v. 7), burning compulsion to obey (v. 9), confident declaration of divine protection (v. 11), an eruption of praise (v. 13), and then one of the darkest laments in all Scripture (v. 14-18). The chapter does not flatten these into a tidy arc. The praise does not cancel the lament. The trust does not erase the doubt. Jeremiah's faith is not the faith of a person who has achieved spiritual equilibrium; it is the faith of a person clinging to God while simultaneously raging at him.",
  },
  {
    color: GOLD,
    title: "God as 'Deceiver': The Language of Shocked Intimacy",
    body: "The accusation in 20:7 -- that God has deceived Jeremiah -- must be understood within the framework of covenant intimacy, not as a theological claim that God lies. Jeremiah had expected that faithfulness to the prophetic call would eventually be vindicated. Instead he has found only suffering and rejection. His accusation is the language of a person in a relationship who feels betrayed: 'You told me this would matter, and it has only brought me pain.' This kind of raw speech to God -- present throughout the Psalms, Job, and the Prophets -- reflects a relationship secure enough to hold enormous honesty. You don't accuse strangers. You accuse those with whom you have a covenant.",
  },
  {
    color: TEAL,
    title: "Magor-Missabib as Prophetic Renaming",
    body: "The renaming of Pashhur as Magor-missabib ('Terror on Every Side') is itself a kind of prophetic enacted parable. In the ancient Near East, names were not merely labels; they described identity and destiny. To rename someone prophetically was to pronounce what they would become. Pashhur thought he was doing God's work by silencing Jeremiah. Jeremiah's oracle declares that Pashhur will become the very thing he inflicts on others: a source of terror, a cause of suffering, a man who will die in exile in Babylon. The prophetic word has ironic reversal built into it: those who silence the prophets end up embodying the judgment they tried to prevent.",
  },
  {
    color: PURPLE,
    title: "The Intercessor Forbidden to Intercede",
    body: "One of the painful ironies of Jeremiah's position, visible across the book, is that he is forbidden by God to intercede for the people he loves (Jer 7:16, 11:14, 14:11). The prophet who weeps more than any other in Scripture is the one told: 'Do not pray for this people.' The calling to speak judgment is in tension with the calling to advocate for mercy. Jeremiah inhabits this tension without resolution. He mourns for the people he must condemn. He announces the word he cannot silence. He is caught between the fire in his bones and the tears on his face -- and he refuses to pretend that this tension is easy.",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "Jeremiah 20:1-3",
    color: ROSE,
    title: "Arrest, Stocks, and Renaming",
    body: "The passage opens abruptly: Pashhur the priest 'heard Jeremiah prophesying these things' -- a reference to the oracle in chapter 19 against Tophet and Jerusalem -- and his response is immediate and violent. Jeremiah is beaten and put in the stocks at the Upper Benjamin Gate. Stocks in the ancient world involved uncomfortable contortion of the body and total public exposure. The Benjamin Gate was a major thoroughfare; Jeremiah was displayed for mockery. When released the next morning, his first words are not a prayer for healing or a plea for vindication. They are a devastating prophecy of judgment against his captor. Magor-missabib: Pashhur becomes the embodiment of the terror he tried to silence.",
  },
  {
    ref: "Jeremiah 20:4-6",
    color: GOLD,
    title: "The Oracle Against Pashhur",
    body: "The specificity of Jeremiah's oracle is striking. Pashhur will see all his friends fall by the sword. Judah will be given into the hand of the king of Babylon -- Jeremiah names Babylon directly, something his political opponents refused to do. The treasures of the city and its kings will be carried off. And Pashhur himself, 'you and all who live in your house, will go into captivity; to Babylon you will go, and there you will die, and there you will be buried, you and all your friends to whom you have prophesied falsely' (20:6). The charge of false prophecy is here directed against Pashhur. He had been prophesying peace and security; Jeremiah's word declares that those prophecies will be exposed when the exile arrives.",
  },
  {
    ref: "Jeremiah 20:7-9",
    color: TEAL,
    title: "The Confession: O LORD You Deceived Me",
    body: "Verse 7 begins one of the most astonishing prayers in the Bible. The Hebrew word patah ('deceived') is the same word used of Samson being seduced by Delilah and of inexperienced youth being led astray by a seductress. Jeremiah is using deliberately strong language to describe his experience of the prophetic call. 'I did not apply for this calling; you overcame my resistance, and now all day long I am an object of ridicule because of it' (cf. 20:7-8). He speaks of violence and destruction as the only content of his message -- words that bring him no joy but that he cannot stop speaking. The fire in his bones is not enthusiasm; it is compulsion. This is the prophetic vocation stripped of romance.",
  },
  {
    ref: "Jeremiah 20:10-13",
    color: PURPLE,
    title: "Terror on Every Side -- Yet the LORD Is a Mighty Warrior",
    body: "Verse 10 is bitterly ironic: Jeremiah himself hears 'Terror on Every Side' -- Magor-missabib, the very name he has just given Pashhur -- whispered against him by those watching for his fall. Even his close friends (literally 'men of my peace') are waiting for him to stumble. But the passage turns in verse 11: 'But the LORD is with me like a mighty warrior; so my persecutors will stumble and not prevail.' This declaration does not deny the reality of the threat; it declares that Jeremiah's enemies have a more powerful opponent than they realize. Verse 12 invokes God as the one who tests righteous hearts and minds -- a plea for divine vindication. Then, remarkably, verse 13 breaks into praise before anything has changed: 'Sing to the LORD!' Faith anticipates what it cannot yet see.",
  },
  {
    ref: "Jeremiah 20:14-18",
    color: ROSE,
    title: "Cursed Be the Day I Was Born",
    body: "The final verses (14-18) are among the darkest in the Old Testament. Jeremiah curses the day of his birth -- not a theological position, but an expression of overwhelming anguish. He echoes Job 3, which contains a similar birth-curse. He invokes the cities of Sodom and Gomorrah as the fate he wished upon the man who brought birth news to his father. He ends with a question that has no answer given in the text: 'Why did I come out of the womb to see toil and sorrow, and spend my days in shame?' (20:18). The chapter ends there. No resolution. No divine response. No comfort. This is not an editorial accident. The Bible deliberately lets Jeremiah's lament stand without being immediately resolved -- a gift to every reader who has sat in a similar darkness and needed to know that God's word can hold it.",
  },
];

const APPLICATION_ITEMS = [
  {
    color: ROSE,
    title: "Bringing Our Angriest Prayers to God",
    body: "Jeremiah 20:7 gives believers permission they rarely feel they have: to bring their most raw, most honest, most accusatory prayers to God. Many Christians have been formed to believe that prayer must always be polite, must always end in thanks, must never include complaints. Jeremiah's prayer blows that up. He accuses God of deception. He curses the day he was born. And the fact that this is Scripture -- that the inspired word of God includes this prayer -- means that God authorized its preservation. God is not fragile. He does not need us to manage his feelings in prayer. He invites us to bring the thing that is actually in our hearts, not the thing we think we should feel.",
  },
  {
    color: GOLD,
    title: "The Legitimacy of Lament and Complaint in Prayer",
    body: "The lament tradition -- Psalms of lament, Job, Lamentations, Jeremiah's confessions -- constitutes a significant portion of the Old Testament. These texts exist because human life includes seasons of darkness that cannot and should not be resolved by a quick theological platitude. When suffering is genuine, when injustice is real, when the gap between what God has promised and what we experience feels unbearable -- that is the moment for lament, not the moment to pretend it is fine. Lament is not the opposite of faith. Lament is faith that refuses to give up on God even while crying out against the present experience.",
  },
  {
    color: TEAL,
    title: "Staying with the Call When It Costs",
    body: "Jeremiah 20 depicts a prophet who wanted to quit and could not. The 'burning fire' in verse 9 is not a metaphor for enthusiasm; it is a description of compulsion under enormous social pressure. Many believers have experienced a version of this: a sense of call that persists despite the cost of following it. The person who keeps speaking the truth in a meeting that wants silence. The person who keeps serving in a ministry that goes largely unseen. The person who stays in a relationship or a community when leaving would be easier. Jeremiah's experience does not promise that this faithfulness will feel rewarding in the moment. But it witnesses that it is possible -- that the fire does not go out even when you want it to.",
  },
  {
    color: PURPLE,
    title: "Finding the Burning Fire That Will Not Let You Stop",
    body: "For the reader who is trying to discern calling, Jeremiah 20:9 offers a peculiar diagnostic: the fire you cannot put out. Not every vocational inclination is a divine call. But the call that persists despite your efforts to dismiss it, that burns despite the cost of following it, that reasserts itself when you try to set it aside -- this is worth paying attention to. The burning fire in Jeremiah's bones was not comfortable. It was not convenient. It cost him enormously. But it was genuine, and it sustained him through decades of prophetic ministry in the face of opposition that would have silenced almost anyone else.",
  },
  {
    color: ROSE,
    title: "The Paradox of Cursing Your Birth While Still Speaking for God",
    body: "The strangest thing about Jeremiah 20 is that after verses 14-18 -- the birth curse, the desolate ending -- Jeremiah keeps going. The book continues for thirty-two more chapters. He does not stop prophesying. He does not abandon his call. He sits in the darkness of lament and then gets up and speaks the word of God again. This is the shape of mature faith: it does not require resolution before it acts. It does not require emotional satisfaction before it obeys. Jeremiah can curse the day of his birth and still be the prophet. The lament and the calling coexist without canceling each other. This is extraordinarily good news for anyone who has thought that their darkness disqualified them from serving God.",
  },
];

const VIDEO_ITEMS = [
  { id: "X7vLdMRTqiY", title: "Jeremiah 20: The Prophet's Darkest Hour" },
  { id: "4U2qRKGJN7I", title: "A Fire in My Bones - Jeremiah 20 Study" },
  { id: "nxLzEJkRqpA", title: "Jeremiah's Lament - Cursed Be the Day I Was Born" },
  { id: "RhM2CkJuVpE", title: "O LORD You Have Deceived Me - Jeremiah 20:7 Explained" },
];

export default function Jeremiah20GuidePage() {
  const [tab, setTab] = usePersistedState<Jer20Tab>("vine_jer20_tab", "overview");
  const [openOverview, setOpenOverview] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const toggleOverview = (id: string) => setOpenOverview(openOverview === id ? null : id);
  const toggleTheme = (id: string) => setOpenTheme(openTheme === id ? null : id);
  const toggleVerse = (id: string) => setOpenVerse(openVerse === id ? null : id);
  const toggleApp = (id: string) => setOpenApp(openApp === id ? null : id);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>

          {/* Hero */}
          <div style={{ background: `linear-gradient(135deg, #1a0008 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, fontFamily: "system-ui, sans-serif" }}>JEREMIAH 20</span>
                <span style={{ color: MUTED, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>Chapter Study &middot; The Weeping Prophet</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                Cursed Be the Day I Was Born
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 700, lineHeight: 1.7, margin: "0 0 20px" }}
                dangerouslySetInnerHTML={{ __html: "After being arrested and publicly humiliated by Pashhur the priest, Jeremiah delivers a bitter confessional lament &mdash; the most raw and anguished cry in all his writings &mdash; including his famous declaration about the burning compulsion that would not let him stop prophesying." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  { label: "Author", value: "Jeremiah son of Hilkiah" },
                  { label: "Setting", value: "Jerusalem, late 7th century BC" },
                  { label: "Key Verse", value: "Jeremiah 20:9" },
                  { label: "Genre", value: "Prophetic Confession / Lament" },
                ].map(item => (
                  <div key={item.label} style={{ background: `${CARD}cc`, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 16px", fontFamily: "system-ui, sans-serif" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Verse Banner */}
          <div style={{ background: `${ROSE}12`, borderBottom: `1px solid ${ROSE}33`, padding: "24px 24px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <blockquote style={{ borderLeft: `4px solid ${ROSE}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;If I say, I will not mention him, or speak any more in his name, there is in my heart as it were a burning fire shut up in my bones, and I am weary of holding it in, and I cannot.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>&mdash; Jeremiah 20:9 (ESV)</cite>
              </blockquote>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as Jer20Tab)}
                  style={{ padding: "16px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", fontFamily: "system-ui, sans-serif", color: tab === t.id ? ACCENT : MUTED, borderBottom: tab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent", transition: "color 0.15s" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

            {/* OVERVIEW */}
            {tab === "overview" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Jeremiah 20 is a hinge chapter in the book &mdash; the moment the personal cost of prophetic ministry becomes most visceral. It moves from a violent encounter with a powerful priest to the most anguished personal confession in the entire prophetic corpus." }}
                />

                <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Shape of the Chapter</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "20:1-2", desc: "Pashhur the priest has Jeremiah beaten and put in the stocks at the Benjamin Gate" },
                      { ref: "20:3-6", desc: "Jeremiah is released; pronounces oracle renaming Pashhur 'Terror on Every Side'" },
                      { ref: "20:7-9", desc: "The great confession: 'O LORD, you have deceived me' -- the fire in his bones" },
                      { ref: "20:10-12", desc: "Terror on every side from former friends; trust: 'the LORD is with me as a mighty warrior'" },
                      { ref: "20:13", desc: "Unexpected eruption of praise: 'Sing to the LORD!'" },
                      { ref: "20:14-18", desc: "The bitter lament: cursed be the day I was born -- the chapter ends in darkness" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "system-ui, sans-serif" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 72, paddingTop: 2 }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {OVERVIEW_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleOverview(s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openOverview === s.title ? "-" : "+"}</span>
                      </button>
                      {openOverview === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Jeremiah in Context</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Jeremiah ministered from approximately 627 BC (the 13th year of Josiah) through and beyond the fall of Jerusalem in 587 BC &mdash; a span of roughly forty years. He preached the word of judgment while watching his nation march toward the very catastrophe he announced. By chapter 20 he has already been ministering for years without visible fruit. The arrest by Pashhur is not his first opposition; it is the first physical assault. The confessions of Jeremiah (sometimes called the 'laments of Jeremiah' and found in 11:18-12:6, 15:10-21, 17:14-18, 18:18-23, and 20:7-18) provide a window into the psychological and spiritual cost of this calling that is without parallel in the prophetic literature." }}
                  />
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The city of Jerusalem was still standing when Jeremiah wrote this. The temple was still operational. The king was still on the throne. From the outside, all was normal. But Jeremiah could see what was coming, and his isolation inside that knowledge &mdash; combined with the social and physical persecution it brought &mdash; is what makes chapter 20 so devastating." }}
                  />
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Jeremiah 20 is one of the richest single chapters in the Old Testament for theological and pastoral reflection. Its themes are timeless because its situation is timeless: a person trying to be faithful to God in a community that does not want to hear what faithfulness requires." }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {THEME_ITEMS.map(t => (
                    <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleTheme(t.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{t.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openTheme === t.title ? "-" : "+"}</span>
                      </button>
                      {openTheme === t.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{t.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginTop: 32 }}>
                  {[
                    { color: ROSE, label: "Core Tension", value: "Compulsion to speak vs. social cost of speaking" },
                    { color: GOLD, label: "Theological Shock", value: "Accusing God of deception as a form of covenant prayer" },
                    { color: TEAL, label: "Structural Pattern", value: "Lament - trust - praise - deeper lament (unresolved)" },
                    { color: PURPLE, label: "Historical Parallel", value: "Pashhur = institutional religion suppressing prophetic truth" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: item.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6, fontFamily: "system-ui, sans-serif" }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Connection to the Psalms of Lament</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Scholars have long noticed the deep connections between Jeremiah 20 and the lament psalms &mdash; particularly Psalms 22, 35, 71, and 109. The confessions of Jeremiah appear to be prayed in conscious awareness of the psalmic tradition of lament. This matters for Christian spirituality because it means that Jeremiah is not doing something unusual or spiritually immature when he laments this way. He is doing what Israel's prayer tradition expected of people under acute suffering: bringing the raw truth to God without flinching." }}
                  />
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The NT does not abandon this tradition. Jesus cries from the cross with the words of Psalm 22: 'My God, my God, why have you forsaken me?' (Matt 27:46). The Spirit intercedes 'with groanings too deep for words' (Rom 8:26). Revelation's martyrs cry out 'How long, O Lord?' (Rev 6:10). The lament tradition is not a relic of pre-Christian spirituality; it runs through the entire canon and reaches its apex in the God-man who dies in the dark." }}
                  />
                </div>
              </div>
            )}

            {/* VERSE BY VERSE */}
            {tab === "verse" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Verse by Verse</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "A close reading of Jeremiah 20, section by section. The chapter rewards careful attention because its emotional and theological movements are rapid and surprising &mdash; what looks like chaos on first reading reveals a deeply intentional structure on closer examination." }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {VERSE_SECTIONS.map(s => (
                    <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleVerse(s.ref)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ background: s.color, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700, fontFamily: "system-ui, sans-serif", flexShrink: 0 }}>{s.ref}</span>
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openVerse === s.ref ? "-" : "+"}</span>
                      </button>
                      {openVerse === s.ref && (
                        <div style={{ padding: "0 20px 20px 20px" }}>
                          <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}>{s.body}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>The Five Confessions of Jeremiah</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Jeremiah 20:7-18 is the fifth and final confession in a series scattered across the book. Each confession intensifies in anguish, suggesting that Jeremiah's spiritual and emotional condition deteriorated as his ministry continued without visible result." }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { ref: "Jer 11:18-12:6", note: "First confession: Why do the wicked prosper?" },
                      { ref: "Jer 15:10-21", note: "Second confession: Woe is me, my mother, that you bore me" },
                      { ref: "Jer 17:14-18", note: "Third confession: Heal me, O LORD -- do not be a terror to me" },
                      { ref: "Jer 18:18-23", note: "Fourth confession: They dug a pit for my life" },
                      { ref: "Jer 20:7-18", note: "Fifth confession: O LORD, you have deceived me -- cursed be the day I was born" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 120, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 24, marginTop: 24 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Why Does the Chapter End in Darkness?</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Biblical scholars have puzzled over the fact that Jeremiah 20 ends not in resolution but in the darkest lament in the book. No divine response follows. No comfort is given. The text simply ends with Jeremiah's question: 'Why did I come out of the womb?' Some have argued this is intentional &mdash; that the chapter is designed to leave the reader sitting in the darkness alongside the prophet, without premature comfort." }}
                  />
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "What makes this theologically significant is what follows: the book of Jeremiah continues for thirty-two more chapters. Jeremiah did not stop. He preached. He wept. He wrote the letter to the exiles (ch. 29). He bought a field as an act of prophetic hope during the siege (ch. 32). He lamented but he did not quit. The darkness of chapter 20 is not the end of his story &mdash; but it is a real part of it, and the Bible does not airbrush it away." }}
                  />
                </div>
              </div>
            )}

            {/* APPLICATION */}
            {tab === "application" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Jeremiah 20 is not merely a historical document about a seventh-century prophet. It speaks to anyone who has experienced the cost of faithfulness, the desire to give up a calling, the legitimacy of crying out to God in anger and despair, and the strange way that darkness and faith can coexist." }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {APPLICATION_ITEMS.map(a => (
                    <div key={a.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleApp(a.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: a.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{a.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openApp === a.title ? "-" : "+"}</span>
                      </button>
                      {openApp === a.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{a.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>Reflection Questions</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      "Have you ever felt that following God cost more than you signed up for? How did you respond?",
                      "Is there a 'burning fire' in your life -- a calling or conviction you cannot silence no matter how inconvenient it is?",
                      "What would it look like to bring your most honest, most angry prayer to God this week?",
                      "Where have you experienced persecution or opposition from within a religious community rather than outside it?",
                      "Can you identify a season in your life where darkness and trust coexisted, as they do in Jeremiah 20:7-13?",
                      "Jeremiah cursed his birth and kept prophesying. How does his example challenge the idea that negative emotions disqualify us from serving God?",
                    ].map((q, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: ROSE, fontWeight: 800, flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Connections in Scripture</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Jeremiah 20 does not stand alone. It belongs to a biblical tradition of holy complaint and costly calling. Reading it alongside these passages deepens its meaning:" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { ref: "Job 3:1-26", note: "Job's birth-curse -- the same genre as Jeremiah 20:14-18" },
                      { ref: "Psalm 22:1-2", note: "My God, my God, why have you forsaken me? -- the lament that Jesus prayed from the cross" },
                      { ref: "1 Kings 19:4", note: "Elijah under the broom tree: 'It is enough; now, O LORD, take away my life'" },
                      { ref: "Numbers 11:10-15", note: "Moses: 'I am not able to carry all this people alone; the burden is too heavy for me'" },
                      { ref: "Romans 8:26", note: "The Spirit intercedes with groanings too deep for words" },
                      { ref: "Matthew 27:46", note: "Jesus on the cross: 'My God, my God, why have you forsaken me?'" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13, minWidth: 120, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 28, marginBottom: 40 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>A Practice: Writing a Lament Prayer</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "One of the most powerful ways to engage Jeremiah 20 is to write your own lament prayer, modeled on its structure. The lament psalms follow a pattern that you can use:" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { step: "1. Address", desc: "Begin by addressing God directly and personally. Don't start with formalities." },
                      { step: "2. Complaint", desc: "Name what is wrong. Be honest, even brutally so. God can handle it." },
                      { step: "3. Request", desc: "Ask for what you need. Be specific." },
                      { step: "4. Trust", desc: "Name what you still believe about God even in the darkness." },
                      { step: "5. Praise", desc: "If you can, offer praise -- not because everything is resolved, but because God is still God." },
                    ].map(item => (
                      <div key={item.step} style={{ display: "flex", gap: 12, padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: TEAL, fontWeight: 700, fontSize: 13, minWidth: 80, fontFamily: "system-ui, sans-serif" }}>{item.step}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>Video Teaching</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
                  {VIDEO_ITEMS.map(v => (
                    <div key={v.id}>
                      <VideoEmbed videoId={v.id} title={v.title} />
                      <p style={{ color: MUTED, fontSize: 13, marginTop: 8, fontFamily: "system-ui, sans-serif" }}>{v.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
