"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SECTIONS = [
  {
    title: "The Beatitudes",
    ref: "Matthew 5:3-12",
    color: GREEN,
    summary: "The Beatitudes open the Sermon not with commands but with declarations — 'Blessed are...' They describe the character of kingdom people: poor in spirit, mourning, meek, hungry for righteousness, merciful, pure in heart, peacemakers, persecuted. These are not instructions for earning blessing but portraits of those who already belong to the kingdom — the posture of those who have nothing to offer and everything to receive.",
    key_teaching: "The Beatitudes subvert every worldly definition of success and blessing. The kingdom belongs to the poor in spirit, not the spiritually confident.",
    verses: [
      { ref: "5:3", text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven." },
      { ref: "5:6", text: "Blessed are those who hunger and thirst for righteousness, for they will be filled." },
      { ref: "5:9", text: "Blessed are the peacemakers, for they will be called children of God." },
    ],
  },
  {
    title: "Salt and Light",
    ref: "Matthew 5:13-16",
    color: "#F59E0B",
    summary: "Kingdom people are salt (preserving, flavoring, purifying) and light (illuminating, guiding, exposing) in the world. The calling is not withdrawal from society but transformative presence within it. 'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven' (5:16). The purpose of visible righteousness is not self-congratulation but the glorification of the Father.",
    key_teaching: "Christians are not called to make the world more Christian but to be salt and light within it — changing it from the inside by the quality of their presence.",
    verses: [
      { ref: "5:13", text: "You are the salt of the earth. But if the salt loses its saltiness, how can it be made salty again?" },
      { ref: "5:14", text: "You are the light of the world. A town built on a hill cannot be hidden." },
      { ref: "5:16", text: "Let your light shine before others, that they may see your good deeds and glorify your Father." },
    ],
  },
  {
    title: "The Six Antitheses",
    ref: "Matthew 5:21-48",
    color: PURPLE,
    summary: "Six times Jesus says 'You have heard... but I say to you' — not abolishing the Law but deepening it beyond external compliance to interior transformation. Murder begins in anger; adultery in the heart; oaths reflect a character that needs them; retaliation is replaced by creative non-resistance; love extends to enemies. Jesus is not making the Law harder to keep but revealing its true depth: conformity to God's own character.",
    key_teaching: "The standard of the kingdom is not 'don't murder' but 'don't harbor murderous anger.' Not 'don't commit adultery' but 'don't cultivate lust.' Jesus drives the Law inward.",
    verses: [
      { ref: "5:22", text: "Anyone who is angry with a brother or sister will be subject to judgment." },
      { ref: "5:28", text: "Anyone who looks at a woman lustfully has already committed adultery in his heart." },
      { ref: "5:44", text: "Love your enemies and pray for those who persecute you." },
    ],
  },
  {
    title: "Religious Practices",
    ref: "Matthew 6:1-18",
    color: "#EF4444",
    summary: "Three practices — giving, prayer, and fasting — are addressed together with the same structural warning: don't do them to be seen by others. 'Be careful not to practice your righteousness in front of others to be seen by them' (6:1). The Pharisees' error was not the practice but the audience. Kingdom righteousness is practiced before God, not for human approval. This section contains the Lord's Prayer as the model of genuine prayer.",
    key_teaching: "The question in religious practice is always: who is the audience? God or people? The reward comes from the one you're playing to.",
    verses: [
      { ref: "6:1", text: "Be careful not to practice your righteousness in front of others to be seen by them." },
      { ref: "6:9-13", text: "This, then, is how you should pray: Our Father in heaven, hallowed be your name..." },
      { ref: "6:17-18", text: "When you fast, put oil on your head and wash your face, so that it will not be obvious to others." },
    ],
  },
  {
    title: "Treasure and Anxiety",
    ref: "Matthew 6:19-34",
    color: "#3B82F6",
    summary: "The kingdom's economics: store treasure in heaven, not on earth. The eye is the lamp of the body — what you focus on determines what fills you. You cannot serve both God and money. Anxiety about material provision reveals a vision of God too small: the Father who feeds birds and clothes flowers cares more for you. 'Seek first his kingdom and his righteousness' and everything else falls into its proper place.",
    key_teaching: "'Do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own' (6:34). The antidote to anxiety is not willpower but a different vision of who God is.",
    verses: [
      { ref: "6:21", text: "Where your treasure is, there your heart will be also." },
      { ref: "6:24", text: "No one can serve two masters. You cannot serve both God and money." },
      { ref: "6:33", text: "Seek first his kingdom and his righteousness, and all these things will be given to you." },
    ],
  },
  {
    title: "Judging, Asking, the Two Ways",
    ref: "Matthew 7:1-29",
    color: "#10B981",
    summary: "The Sermon closes with a series of warnings and promises: do not judge hypocritically (address the log in your own eye first), ask-seek-knock persistently, enter through the narrow gate, beware false prophets (known by their fruit), and build on rock not sand. The final image — the house on rock vs. sand — grounds the entire Sermon: hearing and doing these words is building on the only foundation that survives the storm.",
    key_teaching: "The conclusion of the Sermon is not 'try harder' but 'hear and do.' The stability of one's life is directly proportional to how much of Jesus's teaching has become actual behavior, not merely agreement.",
    verses: [
      { ref: "7:1", text: "Do not judge, or you too will be judged." },
      { ref: "7:7", text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened." },
      { ref: "7:24", text: "Everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock." },
    ],
  },
];

const INTERPRETATIONS = [
  { view: "Interim Ethic (Schweitzer)", color: "#EF4444", desc: "Jesus expected the end of the world imminently. The Sermon is a radical ethic for a short, crisis period — not for normal life. Once the end did not come, this framework collapsed. Most scholars reject it as historically inadequate." },
  { view: "Impossible Ideal (Luther)", color: "#F59E0B", desc: "The Sermon presents a standard impossible to meet — its purpose is to drive us to recognize our sinfulness and trust in Christ's righteousness. The Sermon is not a program for behavior but a mirror for self-knowledge. Criticized for separating salvation from ethics too sharply." },
  { view: "Dispensational (Scofield)", color: PURPLE, desc: "The Sermon applies to the future millennial kingdom, not the present church age. Jesus was offering the kingdom to Israel; when rejected, the kingdom was postponed. The church now lives under different principles. Most evangelicals no longer hold this view." },
  { view: "Kingdom Ethic for Now (Stott, Wright)", color: GREEN, desc: "The Sermon describes how life in the kingdom of God actually looks — not as an impossible ideal or future program but as the real character of those indwelt by the Spirit. It is demanding but not impossible, especially as the community embodies it together. The majority evangelical view." },
];

const SCHOLARS_SOTM = [
  { id: "stott-jrw", name: "John R.W. Stott", era: "1921-2011", context: "The Message of the Sermon on the Mount (1978) — the defining evangelical exposition", bio: "John Stott's The Message of the Sermon on the Mount remains the most widely read evangelical commentary on the Sermon — precise, pastoral, and theologically grounded. Stott argued that the Sermon describes the character of subjects of the kingdom of God: not a program for earning salvation but a portrait of those who have received it. He wrote against both antinomian dismissals of the Sermon's demands and perfectionist over-readings. His treatment of the Beatitudes as a description of kingdom character (rather than entry requirements) has become the standard evangelical framework.", quote: "The Beatitudes describe the ideal citizen of the kingdom of God. They portray what every Christian is and should be, not what only some Christians are.", contribution: "The Message of the Sermon on the Mount set the terms for evangelical interpretation for two generations. Its structure — carefully exegetical, contextually sensitive, and directly applicational — influenced how evangelical preachers worldwide approach Matthew 5-7." },
  { id: "willard-dc", name: "Dallas Willard", era: "1935-2013", context: "The Divine Conspiracy (1998) — reframes the Sermon as a description of kingdom life available now", bio: "Dallas Willard's The Divine Conspiracy is the most important late-20th-century treatment of the Sermon on the Mount in evangelical circles. Willard argued that the Sermon has been domesticated — either dismissed as unreachable idealism or reduced to interior attitudes without behavioral consequence. His central claim: Jesus is offering an actual description of what human life looks like when the 'Kingdom of the Heavens' has truly taken hold of a person. The Beatitudes are not commands to achieve but declarations about those who belong to the kingdom. The antitheses are not harder laws but descriptions of life lived from the inside out.", quote: "The Sermon on the Mount is not a list of requirements for the righteous life but a description of what the righteous life actually looks like when God has moved into a person's life.", contribution: "The Divine Conspiracy catalyzed the spiritual formation movement within evangelicalism. Willard's reading gave the Sermon back to ordinary Christians as a practical guide to kingdom living — not a moral ceiling to despair under but a picture of transformation available through discipleship." },
  { id: "lloyd-jones", name: "D. Martyn Lloyd-Jones", era: "1899-1981", context: "Studies in the Sermon on the Mount (1959-60) — 2-volume Reformed exposition from Westminster Chapel sermons", bio: "Lloyd-Jones preached through the Sermon on the Mount over two years at Westminster Chapel, London. The resulting two volumes are among the most thorough Reformed expositions of Matthew 5-7 ever produced. Against Luther's 'impossible ideal' reading, Lloyd-Jones argued that the Sermon is addressed to Christians and describes genuine Christian character — made possible not by human effort but by the regenerating work of the Holy Spirit. His treatment of the Beatitudes is especially celebrated: eight marks of the Christian who has truly seen himself and his need before God.", quote: "The Sermon on the Mount is addressed to Christians. It is not primarily an appeal to the unconverted. It is describing what every Christian is and is meant to be.", contribution: "Studies in the Sermon on the Mount remains the standard Reformed pastoral commentary on the text. Its influence on British and American Reformed preaching was enormous, establishing the reading that the Sermon describes actual attainable Christian character under the Spirit." },
  { id: "wright-nt", name: "N.T. Wright", era: "b. 1948", context: "Matthew for Everyone (2002); After You Believe (2010) — virtue ethics reading of the Sermon", bio: "N.T. Wright approaches the Sermon through the lens of virtue ethics and the Kingdom of God. In After You Believe, Wright argues that the Beatitudes describe the habits and character of those who are being fitted for eventual resurrection life — not arbitrary moral demands but the shape of genuine human flourishing. His reading emphasizes the eschatological context: these are not just descriptions of present Christian life but the formation of the character required for the coming kingdom. Wright also stresses the deeply Jewish roots of the Sermon, seeing Jesus as renewing Israel's vocation for the sake of the whole world.", quote: "The Beatitudes describe people who are going to inherit the earth; that is, they describe the character of those who are being shaped for eventual resurrection life and new creation.", contribution: "Wright's reading gave the Sermon an eschatological and virtue-ethical dimension that earlier evangelical readings often missed. His emphasis on the Sermon as character formation rather than law-code has significantly influenced younger evangelical scholars and preachers." },
  { id: "augustine-sm", name: "Augustine of Hippo", era: "354-430", context: "De Sermone Domini in Monte (c. 394) — the earliest systematic Christian commentary on the Sermon", bio: "Augustine's On the Lord's Sermon on the Mount (c. 394) is the earliest comprehensive Christian commentary on Matthew 5-7, written when he was a newly ordained priest. Augustine read the Sermon Christologically — the Beatitudes correspond to the seven gifts of the Holy Spirit in Isaiah 11, and each stage of the Sermon deepens the soul's movement toward God. He was especially influential on the church's interpretation of 'Blessed are the pure in heart, for they will see God' — connecting the Sermon's ethics to the beatific vision, the soul's ultimate end. His reading dominated Western interpretation for over a millennium.", quote: "The whole pattern of Christian life is presented in this Sermon. It is the perfect standard of the Christian life, compared to which nothing more perfect can be found.", contribution: "Augustine's commentary established the interpretive framework for the Sermon in Western Christianity for a thousand years. His connection of the eight Beatitudes to the seven gifts of the Spirit, and his reading of the Sermon as a path toward the beatific vision, shaped Catholic moral theology and influenced Protestant readings even after the Reformation." },
];

const PRACTICES = [
  { title: "Read It Weekly for a Month", desc: "Matthew 5-7 takes about 15-20 minutes to read aloud. Do this weekly for a month. Each reading surfaces something new. The familiarity of individual verses often prevents engagement with the whole — reading it in one sitting restores its cumulative force.", icon: "📖" },
  { title: "Choose One Section at a Time", desc: "Take a single paragraph — the Beatitudes, the antitheses on anger, the section on anxiety — and live with it for a week. Ask: what specifically would change in my life if I took this seriously? Don't try to implement the entire Sermon simultaneously.", icon: "🎯" },
  { title: "Pray the Lord's Prayer as Jesus Intended", desc: "Jesus gave the Lord's Prayer as a pattern, not a formula. Pray it slowly, phrase by phrase, letting each petition open into its full meaning. 'Your kingdom come' — what would that look like today? 'Forgive us' — what do I need to confess? 'Deliver us from evil' — from what do I need rescue?", icon: "🙏" },
  { title: "Identify Your Treasure", desc: "'Where your treasure is, there your heart will be also' (6:21). Look at your calendar and bank account — they tell you where your treasure actually is. Is it what you say it is? This is not guilt-loading but diagnosis. The Sermon is designed to surface misalignment between claimed values and actual behavior.", icon: "💰" },
  { title: "Practice One Antithesis", desc: "Choose one of the six antitheses most relevant to your current struggle — anger, lust, retaliation, truthfulness — and practice its positive alternative intentionally for a month. Jesus is not just prohibiting the negative; he is prescribing the positive (e.g., active love for enemies, not just non-retaliation).", icon: "⚖️" },
  { title: "Memorize the Beatitudes", desc: "The eight Beatitudes are a portrait of kingdom character. Memorizing them provides an internal reference for character assessment: Am I poor in spirit? Am I mourning over sin? Am I meek? Hungry for righteousness? Merciful? The Beatitudes become a lens for self-examination when memorized.", icon: "🧠" },
];

export default function SermonOnTheMountPage() {
  const [activeTab, setActiveTab] = usePersistedState<"sections" | "interpretations" | "practices" | "scholars" | "videos">("vine_sermon-on-the-mount_tab", "sections");
  const [selectedScholar, setSelectedScholar] = usePersistedState("vine_sermon-on-the-mount_selected_scholar", "stott-jrw");
  const scholarItem = SCHOLARS_SOTM.find(s => s.id === selectedScholar)!;
  const [selectedSection, setSelectedSection] = usePersistedState("vine_sermon-on-the-mount_selected_section", "The Beatitudes");

  const section = SECTIONS.find(s => s.title === selectedSection)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⛰️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Sermon on the Mount</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Matthew 5–7 is the longest recorded teaching of Jesus and the most concentrated description of what life in his kingdom looks like. It begins with blessing and ends with a choice: rock or sand.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "sections" as const, label: "The Sections", icon: "📜" },
            { id: "interpretations" as const, label: "Interpretations", icon: "🔍" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "scholars" as const, label: "Scholars", icon: "🎓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "sections" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {SECTIONS.map(s => (
                <button type="button" key={s.title} onClick={() => setSelectedSection(s.title)}
                  style={{ padding: "8px 12px", borderRadius: 20, border: `1px solid ${selectedSection === s.title ? s.color : BORDER}`, background: selectedSection === s.title ? `${s.color}20` : "transparent", color: selectedSection === s.title ? s.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {s.title}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${section.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <h2 style={{ color: section.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{section.title}</h2>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{section.ref}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{section.summary}</p>
              <div style={{ background: `${section.color}08`, border: `1px solid ${section.color}20`, borderRadius: 8, padding: 14, marginBottom: 18 }}>
                <div style={{ color: section.color, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>KEY TEACHING</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{section.key_teaching}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {section.verses.map((v, i) => (
                  <div key={i} style={{ background: `${GREEN}06`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, display: "flex", gap: 12 }}>
                    <span style={{ color: GREEN, fontWeight: 800, fontSize: 12, flexShrink: 0, paddingTop: 2 }}>{v.ref}</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "interpretations" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                How you interpret the Sermon on the Mount determines whether it functions as law, mirror, program, or portrait. Each view produces a different posture toward the text.
              </p>
            </div>
            {INTERPRETATIONS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}25`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ color: item.color, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{item.view}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The Sermon ends with a man who built on rock — one who heard and did. Engagement with the Sermon that stops at admiration falls on the same sand as no engagement at all.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "scholars" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {SCHOLARS_SOTM.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedScholar(v.id)}
                  style={{ background: selectedScholar === v.id ? PURPLE : CARD, border: `1px solid ${selectedScholar === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{scholarItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{scholarItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{scholarItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{scholarItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{scholarItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Legacy and Contribution</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{scholarItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on the Sermon on the Mount.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "1OkWF6UU8lU", title: "The Inside Out Kingdom", channel: "Timothy Keller", description: "Tim Keller opens his Sermon on the Mount series, examining how Jesus contrasts two groups who appear the same on the outside but have radically different motivations." },
                  { videoId: "FTZ3GfL9yQM", title: "The Upside Down Kingdom", channel: "Timothy Keller", description: "Keller unpacks how Jesus introduces a revolutionary kingdom in the Sermon on the Mount — one that subverts every human expectation of power and greatness." },
                  { videoId: "--mRYu2B4jU", title: "Authentic Christianity", channel: "Timothy Keller", description: "The concluding sermon in Keller's Sermon on the Mount series, drawing together the radical demands of Jesus and the grace that makes obedience possible." },
                  { videoId: "ho1VMQ_Ac-U", title: "The Sermon on the Mount: True Happiness (Matt. 5:1-12)", channel: "Gospel Teaching", description: "A verse-by-verse exposition of the Beatitudes — the counter-intuitive blessings of the kingdom that redefine what it means to flourish." },
                  { videoId: "TQRH8o6MCts", title: "Blessed Are the Meek", channel: "Desiring God / John Piper", description: "John Piper's classic exposition of the third Beatitude, exploring what meekness means in the kingdom of God and why it inherits the earth." },
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
