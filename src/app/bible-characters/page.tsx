"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CHARACTERS = [
  {
    name: "Abraham",
    era: "Patriarch",
    color: "#F59E0B",
    testament: "OT",
    verse: "Genesis 12:1-4",
    summary: "The father of faith — called by God to leave everything for a land he had not seen, trusting a promise whose fulfillment he would not live to see fully. Abraham believed God, and it was credited to him as righteousness (Romans 4:3). The pattern of his life is paradigmatic: God calls, faith responds, and God is faithful across generations despite human failure.",
    character: "Brave and sometimes cowardly, faithful and sometimes duplicitous. His trust in God was real but not perfect — he twice lied about Sarah and tried to produce the promised heir through Hagar. His growth was not linear. Yet God called him friend (Isaiah 41:8).",
    lesson: "Faith is not the absence of doubt or failure — it is the orientation of a life toward God across time. Abraham failed repeatedly and God remained faithful. The covenant was never contingent on Abraham's performance.",
    nt_connection: "Paul's primary exhibit of justification by faith (Romans 4, Galatians 3). Hebrews 11 anchor. 'Friend of God' (James 2:23).",
  },
  {
    name: "Moses",
    era: "Exodus",
    color: "#EF4444",
    testament: "OT",
    verse: "Exodus 3:1-14",
    summary: "The liberator and lawgiver — raised in Pharaoh's court, fled to the desert, encountered God at the burning bush, and returned to Egypt to lead Israel out of slavery. Moses is the mediator of the Mosaic covenant and the primary lawgiver of the OT. He is also the most influential person in Judaism and shapes the entire OT narrative.",
    character: "Described as 'very humble, more than anyone else on the face of the earth' (Numbers 12:3) — yet capable of rage (breaking the tablets). His intercession for Israel repeatedly stayed divine judgment. He bore the weight of leadership for 40 years in the wilderness.",
    lesson: "Humility is not passivity or weakness — it is Moses commanding, confronting Pharaoh, and interceding for Israel. Humility is the absence of self-seeking, not the absence of action. The man most willing to be used was also the most willing to be overlooked.",
    nt_connection: "Transfiguration (Matthew 17). Jesus as the new and greater Moses (Deuteronomy 18:15, Acts 3:22). Hebrews contrasts Moses and Jesus as mediators.",
  },
  {
    name: "Ruth",
    era: "Judges",
    color: "#EC4899",
    testament: "OT",
    verse: "Ruth 1:16-17",
    summary: "A Moabite widow whose loyalty to her mother-in-law Naomi, and whose faith in the God of Israel, brought her into the covenant community and into the lineage of David and ultimately of Jesus. Her story is one of the most humanly beautiful in Scripture — and one of the most theologically significant, showing God's inclusion of Gentiles in his redemptive purposes.",
    character: "Ruth is characterized by hesed — the same word used for God's covenant love. Her loyalty to Naomi exceeds what obligation required. She worked with dignity and humility, acted with wisdom and courage (approaching Boaz at the threshing floor), and trusted in a God she had newly adopted as her own.",
    lesson: "Covenant loyalty is the defining virtue of God's people — and can be displayed as powerfully by an outsider as by the born-in member. Ruth's fidelity is held up as a model not just of family loyalty but of what love for God looks like in practice.",
    nt_connection: "Ancestor of Jesus (Matthew 1:5). Her story anticipates the inclusion of Gentiles in the new covenant community. James may allude to her story in his discussion of faith and works.",
  },
  {
    name: "Elijah",
    era: "Divided Kingdom",
    color: "#8B5CF6",
    testament: "OT",
    verse: "1 Kings 18:36-39",
    summary: "The prophet who confronted King Ahab, called fire from heaven on Mount Carmel, and fled in suicidal despair to the desert within days of his greatest triumph. Elijah's story is the most emotionally raw of the prophetic narratives — a man of enormous spiritual power who collapsed in exhaustion and asked to die.",
    character: "Bold in confrontation, prone to despair. His cave experience (1 Kings 19) reveals a man convinced he is the last faithful person in Israel. God's response is tender: food, rest, and a still small voice rather than spectacular display. He is raptured without dying — one of only two people in the OT.",
    lesson: "Spiritual highs and emotional lows can coexist. Elijah's post-Carmel despair is not faithlessness — it is human depletion. God's response is physical care before theological instruction. The body and spirit are not separate; exhaustion requires rest before it can receive revival.",
    nt_connection: "Appears at the Transfiguration. John the Baptist comes 'in the spirit and power of Elijah' (Luke 1:17). James uses his prayers as the model for intercessory faith (James 5:17-18).",
  },
  {
    name: "Mary (Mother of Jesus)",
    era: "New Testament",
    color: "#06B6D4",
    testament: "NT",
    verse: "Luke 1:38",
    summary: "The young woman chosen to bear the Son of God — her consent ('Let it be to me according to your word') is one of the most consequential acts in redemptive history. Mary's song (the Magnificat, Luke 1:46-55) is the most theologically sophisticated poetry in the NT and reveals a woman who understood the gospel before Christ's public ministry.",
    character: "Humble, theologically formed (the Magnificat reflects deep familiarity with the Psalms and Prophets), and willing to bear social shame for obedience. She 'treasured all these things and pondered them in her heart' (Luke 2:19) — a woman who received revelation slowly and deeply, not impulsively. Present at the cross; present at Pentecost.",
    lesson: "Obedience is consent, not compulsion. Mary's 'yes' was not passive — it was informed, costly, and freely given. The woman most honored in Christian tradition is honored precisely for her availability to God's purposes regardless of personal cost.",
    nt_connection: "Central to the Incarnation narratives (Luke 1-2, Matthew 1-2). Present at the cross (John 19:25-27). Present at Pentecost (Acts 1:14). Model of discipleship and of prophetic proclamation.",
  },
  {
    name: "Peter",
    era: "New Testament",
    color: "#3B82F6",
    testament: "NT",
    verse: "Matthew 16:16-18",
    summary: "The fisherman who became the rock — impulsive, warm-hearted, frequently wrong at critical moments, and ultimately transformed into the leader of the Jerusalem church and a martyr for the faith. Peter's story is the NT's most vivid portrait of how God uses deeply flawed people — and of what repentance and restoration look like after catastrophic failure.",
    character: "Impulsive (cutting off ears, walking on water then sinking, denying Christ three times), deeply loyal (the first resurrection appearance to an apostle was to Peter, 1 Corinthians 15:5), and capable of profound insight (the confession in Matthew 16) and profound cowardice (Galatians 2:11-14). His growth across the Gospels and Acts is visible and dramatic.",
    lesson: "Failure is not final. Peter's three denials are matched by three restorations (John 21). The person most visible for public failure became the founding preacher of the church. Shame over past failure is silenced by the specific, repeated love of a Savior who reinstates rather than discards.",
    nt_connection: "Pentecost sermon (Acts 2). Jerusalem Council (Acts 15). Author of 1 and 2 Peter. Paul's confrontation at Antioch (Galatians 2). Martyred in Rome under Nero.",
  },
  {
    name: "Mary Magdalene",
    era: "New Testament",
    color: "#10B981",
    testament: "NT",
    verse: "John 20:16-18",
    summary: "A woman delivered from seven demons who became one of Jesus's most devoted followers and the first witness to the resurrection. Mary Magdalene was present at the crucifixion, at the burial, and arrived first at the empty tomb. Jesus's first post-resurrection words were to her: 'Mary.' She is the Apostle to the Apostles.",
    character: "Loyal across the moments that tested loyalty most — she was at the cross and at the tomb when the male disciples had scattered. Her love was not conditional on understanding; she arrived at the tomb not knowing what she would find. The transformation from demonized woman to resurrection witness is one of the most dramatic in the Gospels.",
    lesson: "Those who have received much grace are those most capable of extravagant devotion. Mary's loyalty to Jesus through crucifixion and death is the fruit of liberation — her love was proportional to her deliverance. The people who love much are those who understand how much they have been forgiven.",
    nt_connection: "First resurrection witness (John 20:11-18, Mark 16:9). Present at crucifixion (Matthew 27:56). Present at burial (Mark 15:47). Long wrongly identified with other women in the Gospels.",
  },
  {
    name: "Paul",
    era: "New Testament",
    color: "#DC2626",
    testament: "NT",
    verse: "Philippians 3:7-8",
    summary: "The persecutor turned apostle — a trained Pharisee who considered Jesus a failed messiah, was confronted by the risen Christ on the Damascus road, and became the greatest missionary and theologian in Christian history. Paul wrote 13 letters that form much of the NT and established churches across the Roman Empire.",
    character: "Intellectually brilliant, emotionally intense, willing to suffer enormously for his convictions. He describes being 'crushed beyond measure' and yet finding contentment in all circumstances. He wept over his churches. He confronted Peter publicly. He wrote hymns of love (1 Corinthians 13) from prison. He was simultaneously the most confident and the most self-deprecating person in the NT.",
    lesson: "The person most opposed to Christ can become his most effective servant. Paul's conversion is not primarily about dramatic experience but about radical reorientation — everything he had counted as gain he now counted as loss for the sake of knowing Christ (Philippians 3:7-8). Conversion is a revaluation of everything.",
    nt_connection: "Author of Romans through Philemon. Missionary journeys in Acts 13-28. Martyr in Rome under Nero. Founder of churches in Galatia, Corinth, Ephesus, Philippi, Thessalonica.",
  },
];

const FILTERS = ["All", "OT", "NT", "Patriarch", "Exodus", "Judges", "Divided Kingdom", "New Testament"];

type Tab = "characters" | "women" | "typology" | "study" | "videos";

const WOMEN_CHARS = [
  {
    name: "Deborah",
    era: "Judges",
    color: "#EC4899",
    verse: "Judges 4:4-5",
    summary: "Judge, prophet, and military commander — the only female judge in Israel's history. Deborah governed Israel at a time when no male leader would take the field, and she summoned Barak to lead an army against the Canaanites, going with him to battle when he refused to go alone. Her song of victory (Judges 5) is one of the oldest and most exuberant pieces of poetry in the OT.",
    character: "Decisive, authoritative, and spiritually perceptive. She held her own against every male authority structure without apparent conflict about it. Her wisdom was sought by all Israel. Her confidence before battle was total — not because she was fearless but because she knew whose battle it was.",
    lesson: "Leadership is given by God to those who are faithful regardless of gender or social expectation. Deborah did not seek her role; she exercised it fully when it was given. The fact that her story is in the canon without editorial embarrassment says something about the canon's view of women in leadership.",
    nt_connection: "Named in Hebrews 11 by inference (the 'women' who 'conquered kingdoms' through faith). Her prophetic office anticipates the Spirit poured out on daughters as well as sons (Joel 2:28-29, Acts 2:17-18).",
  },
  {
    name: "Hannah",
    era: "1 Samuel",
    color: "#F59E0B",
    verse: "1 Samuel 1:10-11",
    summary: "A barren woman whose fervent, anguished prayer for a son was answered with Samuel — who became the last judge and first kingmaker of Israel. Hannah's song (1 Samuel 2:1-10) is the theological foundation on which Mary's Magnificat is built. She prayed honestly, made a vow at great personal cost, and kept it. Her story is the paradigmatic answer to the question: what does God do with people who bring their deepest pain to him?",
    character: "Desperately sorrowful but not faithless. Her prayer at the tabernacle was so intense that Eli thought she was drunk. She bargained with God from genuine distress, not presumption. When God gave her what she asked, she gave him back what she had received — and went on to have five more children. Her generosity was proportional to her gratitude.",
    lesson: "Honest, persistent prayer — not polished religious performance — is what God honors. Hannah's prayer was messy and desperate. God was not put off by it; he was moved by it. The willingness to surrender what we most want is the deepest test of whether we wanted God or wanted the gift.",
    nt_connection: "Mary's Magnificat (Luke 1:46-55) is nearly a commentary on Hannah's song (1 Samuel 2:1-10). Both women receive miraculous sons who will transform Israel. Both songs celebrate God's reversal of human status systems.",
  },
  {
    name: "Esther",
    era: "Exile",
    color: "#8B5CF6",
    verse: "Esther 4:14",
    summary: "A Jewish woman who became queen of Persia and risked her life to save her people from genocide. The book of Esther never mentions God — yet the entire narrative is saturated with providential ordering. Esther is placed in the palace, married to the king, and positioned to intercede at the one moment when intercession could prevent destruction. Mordecai's question echoes through history: 'Who knows whether you have come to the kingdom for such a time as this?'",
    character: "Initially hesitant — she reminds Mordecai that approaching the king uninvited is a capital offense. Her courage grew from prayer and fasting, not from natural boldness. She moved from passivity to courage through the spiritual formation of three days' fasting. When she moved, she moved decisively: 'If I perish, I perish.'",
    lesson: "Providence works through ordinary human decisions made courageously. Esther's position was not luck — it was preparation. The resources needed to change history were already in place before the crisis arrived. God prepares people for moments they cannot anticipate by placing them where they need to be.",
    nt_connection: "Prefigures Christ's intercession: one who has the king's ear, risking all to plead for the condemned. The reversal of Haman's gallows (the would-be executioner executed on his own instrument) anticipates the cross: the one who sought death for the innocent is himself destroyed.",
  },
  {
    name: "Martha",
    era: "New Testament",
    color: "#3B82F6",
    verse: "John 11:27",
    summary: "Sister of Mary and Lazarus, and one of Jesus's closest friends. Usually remembered for the distracted-homemaker episode in Luke 10, Martha's fuller portrait in John 11 reveals a woman of profound theological insight: when Jesus arrives after Lazarus's death, it is Martha — not Mary — who goes out to meet him, engages him in theological conversation, and makes the fullest confession of faith before the resurrection appearances: 'I believe that you are the Christ, the Son of God.'",
    character: "Practical, bold, and theologically engaged. Her directness (John 11:21-27) is often mistaken for complaint. She told Jesus that Lazarus would not have died had he come sooner — and then immediately engaged his 'I am the resurrection' claim at a theological level. She was not passive; she was urgent. She wanted to understand, not just to receive comfort.",
    lesson: "Active, practical service and deep theological faith are not opposites. Martha represents the integration of service and belief that Christian discipleship requires. Her confession in John 11 is the most complete pre-resurrection statement of faith about Jesus in any Gospel.",
    nt_connection: "Her confession in John 11:27 is structurally parallel to Peter's in Matthew 16:16. Both name Jesus as 'the Christ, the Son of God.' She is one of the primary witnesses to the resurrection of Lazarus — the sign that most directly prepares for Jesus's own resurrection.",
  },
  {
    name: "Lydia",
    era: "New Testament",
    color: "#10B981",
    verse: "Acts 16:14-15",
    summary: "A businesswoman from Thyatira living in Philippi, dealing in purple cloth — a luxury trade that served the wealthy. She was already a 'worshipper of God' (a Gentile God-fearer attached to the Jewish synagogue) when she heard Paul speak by the river. 'The Lord opened her heart to respond to Paul's message.' She was baptized with her household and immediately offered Paul's team her home as a base for the Philippian mission.",
    character: "Commercially competent (running a business in a foreign city), spiritually seeking (attending Sabbath prayer outside the city), and immediately generous (offering her home as a mission headquarters). She was a leader in the household sense: her decision took her whole household with her. She was later a leader in the Philippian church, which Paul addresses as 'my partners in the gospel.'",
    lesson: "Conversion immediately produces community and generosity. Lydia did not receive the gospel passively — she acted on it. The first congregation in Europe met in her house. The economic and social capital she brought to the gospel was immediately deployed for the mission rather than held back as private property.",
    nt_connection: "The Philippian church — to which Paul writes 'I thank my God every time I remember you... because of your partnership in the gospel' (Philippians 1:3-5) — was founded in Lydia's home. She is thus the mother of one of the most beloved New Testament congregations.",
  },
];

const TYPOLOGY_ITEMS = [
  { figure: "Adam", type: "Second Adam / Last Adam", ref: "Romans 5:12-21; 1 Cor 15:45", color: GREEN, content: "Paul explicitly names Jesus as 'the last Adam' (1 Corinthians 15:45) and 'the second man' (15:47). Adam was the representative head of humanity in sin and death; Jesus is the representative head of humanity in righteousness and life. What Adam lost (the image of God, life, communion with God, dominion over creation), the last Adam restores and more. Every consequence of Adam's fall is addressed in Christ's work — not just reversed but surpassed." },
  { figure: "Joseph", type: "Beloved Son / Rejected and Exalted", ref: "Genesis 37-50", color: PURPLE, content: "Joseph is the most detailed type of Christ in the OT: beloved son of the father; rejected by his own brothers (sold for silver); suffered innocently; falsely accused; imprisoned; exalted to the right hand of power; used his exaltation to save the very brothers who betrayed him; forgave completely. The structural parallels between Joseph's story and Jesus's passion are too numerous for coincidence. Joseph's own explanation — 'You meant it for evil, but God meant it for good' — anticipates the theology of the cross." },
  { figure: "Moses", type: "Prophet / Mediator / Lawgiver", ref: "Deuteronomy 18:15; John 1:17; Hebrews 3:1-6", color: "#EF4444", content: "Moses himself predicted a prophet like himself: 'The Lord your God will raise up for you a prophet like me from among you' (Deuteronomy 18:15). Peter and Stephen both apply this text to Jesus. The parallel is pervasive: both were delivered from a baby-killing tyrant (Pharaoh/Herod), both spent 40 years in a desert period, both gave the Law (on Sinai/on the mountain in Matthew 5), both mediatedcovenants, both interceded for their people. Jesus is the greater Moses who gives a greater law and mediates a better covenant." },
  { figure: "David", type: "King / Suffering Servant", ref: "2 Samuel 7; Psalm 22; Matthew 1:1", color: "#3B82F6", content: "The Davidic covenant promises an eternal Son of David who will build God's house and rule forever. The Psalms developed the typological portrait: Psalm 22 (My God, my God, why have you forsaken me) is lived out by David and fulfilled by Jesus — Jesus quotes it from the cross. Psalm 110 (Sit at my right hand) is the most quoted OT text in the NT, applied to Jesus's exaltation. David's kingship was always a pointer; Jesus is the referent." },
  { figure: "Jonah", type: "Sign of Resurrection", ref: "Matthew 12:39-41; Jonah 1-2", color: "#F59E0B", content: "Jesus himself identified Jonah as the primary OT sign of his death and resurrection: 'As Jonah was three days and three nights in the belly of the great fish, so will the Son of Man be three days and three nights in the heart of the earth' (Matthew 12:40). Jonah descended into death (the belly of the fish; the depths of the sea) and was raised to preach repentance. Nineveh's repentance anticipated the Gentile response to the risen Christ. Jesus noted pointedly: 'something greater than Jonah is here.'" },
];

const STUDY_APPROACHES = [
  { step: "1. Observe context", desc: "Every character exists in a historical, cultural, and redemptive-historical context. Before applying a character's story, ask: Where does this person fall in redemptive history? What do they know that people before them didn't? What do they not yet know that is now revealed in Christ? Context prevents the misuse of characters as mere moral examples detached from the larger story." },
  { step: "2. Trace the character's relationship with God", desc: "The Bible's primary interest is not character psychology but the character's relationship with God. Ask: How does this person respond to God's call, command, promise, and presence? What do their failures reveal about the gap between human capacity and divine requirement? What do their successes reveal about grace?" },
  { step: "3. Note failure without explanation", desc: "The Bible is remarkably honest about its heroes' failures — but it rarely explains why they failed or what lesson they learned. This is deliberate: the failures point forward to the one hero who doesn't fail. Treat failure in biblical characters as pointing to the need for something greater than human virtue." },
  { step: "4. Find the Christ connection", desc: "Every significant biblical character either prefigures Christ (as a type), anticipates Christ (through prophetic promise), or demonstrates the inadequacy of human faithfulness that only Christ can satisfy. Ask: How does this person's story create longing for what only Jesus provides? How is this story fulfilled, not just illustrated, by the gospel?" },
  { step: "5. Apply carefully and specifically", desc: "Beware of moralistic applications ('be like Daniel'). The goal is not to extract a character lesson but to understand what God's work in this person reveals about God. When you do apply, be specific: not 'have faith like Abraham' but 'like Abraham, identify the specific place where I am holding back trust from God.'" },
  { step: "6. Read across the canon", desc: "No character is confined to one book. David is in Samuel, Psalms, Chronicles, and Matthew. Ruth appears in Matthew. Elijah appears at the Transfiguration. Reading characters across the whole canon reveals dimensions that a single-book reading misses. The NT's reuse of OT characters is itself a form of interpretation worth following." },
];

export default function BibleCharactersPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_bible-characters_tab", "characters");
  const [filter, setFilter] = usePersistedState("vine_bible-characters_filter", "All");
  const [selected, setSelected] = usePersistedState("vine_bible-characters_selected", "Abraham");
  const [selectedWoman, setSelectedWoman] = usePersistedState("vine_bible-characters_selected_woman", "Deborah");

  const filtered = CHARACTERS.filter(c =>
    filter === "All" || filter === c.testament || filter === c.era
  );

  const character = CHARACTERS.find(c => c.name === selected)!;
  const displayCharacter = filtered.find(c => c.name === selected) ? character : filtered[0];
  const womanItem = WOMEN_CHARS.find(w => w.name === selectedWoman)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👤</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Bible Characters</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Bible tells God's story through real people — complex, failing, faithful human beings whose lives illuminate both the character of God and the possibilities of grace-shaped humanity.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "characters" as const, label: "Characters", icon: "👤" },
            { id: "women" as const, label: "Women", icon: "👩" },
            { id: "typology" as const, label: "Typology", icon: "✝️" },
            { id: "study" as const, label: "How to Study", icon: "📖" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "characters" && (<>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            {FILTERS.map(f => (
              <button type="button" key={f} onClick={() => setFilter(f)}
                style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${filter === f ? GREEN : BORDER}`, background: filter === f ? `${GREEN}15` : "transparent", color: filter === f ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                {f}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 160, flexShrink: 0 }}>
              {filtered.map(c => (
                <button type="button" key={c.name} onClick={() => setSelected(c.name)}
                  style={{ width: "100%", background: selected === c.name && filtered.find(f => f.name === selected) ? `${c.color}15` : "transparent", border: `1px solid ${selected === c.name && filtered.find(f => f.name === selected) ? c.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 12px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selected === c.name && filtered.find(f => f.name === selected) ? c.color : TEXT, fontWeight: 700, fontSize: 13 }}>{c.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{c.era}</div>
                </button>
              ))}
            </div>

            {displayCharacter && (
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${displayCharacter.color}30`, borderRadius: 14, padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                      <h2 style={{ color: displayCharacter.color, fontWeight: 900, fontSize: 24, margin: 0, marginBottom: 4 }}>{displayCharacter.name}</h2>
                      <div style={{ color: MUTED, fontSize: 13 }}>{displayCharacter.era}</div>
                    </div>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={displayCharacter.verse} /></span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{displayCharacter.summary}</p>
                  <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 14 }}>
                    <div style={{ color: displayCharacter.color, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CHARACTER</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{displayCharacter.character}</p>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16, marginBottom: 14 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LESSON</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{displayCharacter.lesson}</p>
                  </div>
                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>NT CONNECTION</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{displayCharacter.nt_connection}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>)}

        {activeTab === "women" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 160, flexShrink: 0 }}>
              {WOMEN_CHARS.map(w => (
                <button type="button" key={w.name} onClick={() => setSelectedWoman(w.name)}
                  style={{ width: "100%", background: selectedWoman === w.name ? `${w.color}15` : "transparent", border: `1px solid ${selectedWoman === w.name ? w.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 12px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedWoman === w.name ? w.color : TEXT, fontWeight: 700, fontSize: 13 }}>{w.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{w.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${womanItem.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <h2 style={{ color: womanItem.color, fontWeight: 900, fontSize: 24, margin: 0, marginBottom: 4 }}>{womanItem.name}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>{womanItem.era}</div>
                  </div>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={womanItem.verse} /></span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{womanItem.summary}</p>
                <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 14 }}>
                  <div style={{ color: womanItem.color, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CHARACTER</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{womanItem.character}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16, marginBottom: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LESSON</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{womanItem.lesson}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>NT CONNECTION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{womanItem.nt_connection}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "typology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Biblical typology is the study of how OT persons, events, and institutions prefigure and are fulfilled in Jesus Christ. The OT figures below are not just moral examples — they are theological previews of the one who fulfills what they pointed toward.
              </p>
            </div>
            {TYPOLOGY_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}25`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "8px 14px", flexShrink: 0 }}>
                    <div style={{ color: item.color, fontWeight: 900, fontSize: 16 }}>{item.figure}</div>
                  </div>
                  <div>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>Type: {item.type}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{item.ref}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "study" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Studying Bible characters well requires more than admiring their virtues or avoiding their mistakes. The goal is to see how their stories participate in the one story that ends in Jesus Christ.
              </p>
            </div>
            {STUDY_APPROACHES.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>{s.step}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on Bible characters — how to read their stories and see how they point to Jesus Christ.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "Dj16ick5VSA", title: "What Is Typology? How to Use It in Bible Study", channel: "Ligonier Ministries", description: "Sinclair Ferguson explains what biblical typology is and how to use it responsibly — essential for reading Old Testament characters as they point to Christ." },
                  { videoId: "KH4RaAbqlXw", title: "How David Is a Type of Christ", channel: "Bible Study Channel", description: "An examination of the specific ways King David prefigures Jesus — shepherd, king, sufferer, and conqueror — across the Psalms and the Gospels." },
                  { videoId: "mDmOI05npxU", title: "Ways That Moses Is a Type of Christ", channel: "Bible Study Channel", description: "Moses as deliverer, lawgiver, mediator, and prophet — each role pointing forward to the greater Moses who fulfills what Moses only foreshadowed." },
                  { videoId: "Me9BErWlPlU", title: "Biblical Typology: A Deep Bible Study", channel: "Bible Study", description: "A comprehensive guide to reading the Old Testament typologically — understanding how characters, events, and institutions foreshadow Christ." },
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
      <Footer />
    </div>
  );
}
