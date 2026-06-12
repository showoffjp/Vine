"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

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

const TABS = ["Missio Dei", "To All Nations", "Paul’s Strategy", "Contextualization", "Short vs Long", "Business as Mission", "Videos"] as const;
type Tab = typeof TABS[number];

interface SectionData {
  heading: string;
  color: string;
  verse: string;
  verseRef: string;
  paragraphs: string[];
}

const SECTIONS: Record<Tab, SectionData> = {
  "Missio Dei": {
    heading: "Missio Dei: God’s Own Mission",
    color: PURPLE,
    verse: "As the Father has sent me, I am sending you.",
    verseRef: "John 20:21",
    paragraphs: [
      "The most important shift in 20th-century missiology was the recovery of the missio Dei — God’s own mission. Before this recovery, Christian missions were often framed as the church’s mission to the world: the church reaches out, the church sends, the church expands. The missio Dei framework reverses this: God is the primary missionary. The Father sends the Son. The Father and Son send the Spirit. And the Spirit sends the church into the world.",
      "This is more than a semantic distinction. It means the church does not own missions — God does. Mission is not a program the church runs; it is a movement the church joins. The church is not the sender but the sent. We participate in something already underway, already immeasurably larger than our programs, our budgets, and our denominational strategies. Before any missionary crossed any ocean, God was already at work among the peoples of the earth.",
      "The theological roots run deep. The eternal life of the Trinity is a life of self-giving love — the Father pouring himself out in the generation of the Son, the Father and Son breathing out the Spirit. Creation is itself a missionary act: God’s loving abundance overflowing into the existence of a world. Redemption continues that movement: God reaches into a broken world in the incarnation, not to retrieve a few souls from matter but to restore all things.",
      "For the local church, the missio Dei framework is deeply freeing. We are not responsible to save the world — that is God’s task and God’s achievement in Christ. We are responsible to discern where God is already at work and join him there. Mission becomes listening before speaking, prayer before program, attentiveness to what the Spirit is already doing in a community before arriving with answers to questions no one asked.",
      "David Bosch’s Transforming Mission (1991) remains the defining academic account of this shift. Bosch traced the history of missions from the early church through colonialism to the 20th-century ecumenical movement, showing how each era’s missiology reflected its cultural moment and theological assumptions. His call was for a ‘postmodern’ missiology — humble, contextual, Trinitarian, and centered on the reign of God rather than on ecclesiastical expansion.",
    ],
  },
  "To All Nations": {
    heading: "The Call to All Nations: From Genesis 12 to Revelation 7",
    color: GOLD,
    verse: "I will make you into a great nation, and I will bless you... and all peoples on earth will be blessed through you.",
    verseRef: "Genesis 12:2-3",
    paragraphs: [
      "The mission of God to reach all peoples is not a New Testament innovation — it is the spine of the entire Bible. When God calls Abram in Genesis 12, the promise has a global scope from the first sentence: through Abram’s descendants, ‘all peoples on earth will be blessed.’ The word is mishpachot — families, clans, people-groups. This is not a vague universal aspiration; it is a specific promise that every ethnic and cultural group on earth is the intended beneficiary of God’s covenant with Abraham.",
      "The Old Testament traces this promise as Israel slowly learns its missionary vocation. The Psalms are saturated with calls for the nations to praise God (Ps. 67, 96, 117). The servant songs of Isaiah portray Israel’s servant — ultimately fulfilled in Jesus — as a light to the nations, bringing God’s salvation to the ends of the earth (Is. 49:6). The book of Jonah is a comic-ironic tale of a prophet who would rather see the nations judged than saved, and a God who pursues the pagan Ninevites with relentless mercy.",
      "Jesus’ Great Commission in Matthew 28:18-20 gives the Abraham promise its clearest mandate: make disciples of panta ta ethne — all the nations, all the people-groups. The word ethne (from which we get ‘ethnic’) does not mean nation-states but ethnolinguistic groups — the peoples distinguished by language, culture, and shared identity. The early church grasped this at Pentecost, when the Spirit came on men and women from every nation under heaven and each heard the gospel in their own language (Acts 2:5-11).",
      "The final vision of Revelation 7:9 is the fulfillment of Genesis 12’s promise: ‘a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.’ John uses four terms — nation, tribe, people, language — to signify that no group is missing. The diversity of humanity, which sin so often weaponizes in division and war, is gathered and redeemed in worship. Heaven is not mono-cultural. The mission of God is not the erasure of culture but the sanctification and glorification of every culture in Christ.",
      "The implication for missions today is the concept of unreached peoples. Of the approximately 17,000 distinct ethnolinguistic groups in the world, missiologists estimate that around 7,000 remain ‘unreached’ — having no indigenous church capable of evangelizing the rest of the group without outside help. The Front Runner nations of the 10/40 Window (stretching from West Africa to East Asia between the 10th and 40th parallels north) contain the largest concentration of these groups. Strategic missions today is heavily focused on crossing the remaining barriers to plant the first indigenous churches among each of these peoples.",
    ],
  },
  "Paul’s Strategy": {
    heading: "Paul’s Strategic Mission: Unreached Peoples and the Pioneer Calling",
    color: TEAL,
    verse: "It has always been my ambition to preach the gospel where Christ was not known, so that I would not be building on someone else’s foundation.",
    verseRef: "Romans 15:20",
    paragraphs: [
      "The Apostle Paul was the first explicitly strategic missionary in church history. His goal was not simply to preach the gospel anywhere — it was to preach where Christ was not yet known, to pioneer where no church had gone before. Romans 15:20 reveals his methodology: he refused to build on another person’s foundation. He was a pioneer, not a consolidator. And he moved with remarkable intentionality — from Antioch to Cyprus to Asia Minor to Macedonia to Corinth to Rome, planting in strategic urban centers from which the gospel could radiate outward.",
      "Paul did not linger. He typically planted a church, appointed elders (often within a year or two), and moved on. His letters are largely addressed to churches he had already left, trouble-shooting from a distance while pressing toward new territory. This pioneer strategy has shaped evangelical missions ever since: the goal is not to build large institutional churches in reached areas but to plant reproducing churches in unreached areas and hand them off to indigenous leadership.",
      "The unfinished task that preoccupied Paul in Romans 15 was Spain — the western edge of the known world. For him, ‘from Jerusalem all the way around to Illyricum’ (15:19), the job was sufficiently done for him to hand it off. He needed to push further west. Paul’s restlessness for the unreached places is both a model and a challenge: in an era when much Christian mission energy concentrates on already-reached areas, what does faithfulness to the Pauline strategy look like?",
      "The modern missionary movement has identified what missiologists call the ‘Pioneer 10%’ — the roughly 10% of the world’s population belonging to unreached people groups who have no access to the gospel without a cross-cultural missionary. Organizations like Frontier Ventures, Joshua Project, and the Lausanne Movement track these groups and advocate for intentional pioneer church planting. The theological conviction underlying this advocacy is Pauline: the church is not finished until everyone has had a genuine opportunity to hear and respond.",
      "Pioneer missions is costly. It requires learning languages that have no Bible translation, living in places with no infrastructure, building trust in cultures where Christianity is associated with colonialism or is actively persecuted. The casualty rate — in burnout, illness, and sometimes martyrdom — is high. But the missionary movement has also learned painful lessons from its history and is increasingly pursuing pioneer work through partnership with indigenous believers, local leadership development, and sustainable models rather than dependency-creating patterns.",
    ],
  },
  "Contextualization": {
    heading: "Contextualization: The Gospel in Every Culture",
    color: BLUE,
    verse: "I have become all things to all people so that by all possible means I might save some.",
    verseRef: "1 Corinthians 9:22",
    paragraphs: [
      "Contextualization is the process of expressing the unchanging gospel in forms that are understandable and appropriate to a particular culture. It is not accommodation to culture — not watering down the gospel to avoid offense. It is translation in the deepest sense: carrying the meaning of the gospel across cultural barriers so that people can receive it not as a foreign import but as a word addressed to them in their own language, world-view, and experience.",
      "Paul modeled contextualization brilliantly. At the Areopagus (Acts 17:16-34), he did not quote the Hebrew Scriptures to a Greek audience who did not know them. He quoted Greek poets. He began with a cultural observation (the altar to an unknown god) and worked toward the resurrection. He did not pretend the cultural distance didn’t exist; he worked through it. He was a Jew to Jews and a Greek to Greeks — not a chameleon without convictions but a communicator who understood that meaning requires context.",
      "The history of the modern missionary movement includes some tragic failures of contextualization. European missionaries often brought not just the gospel but Western culture — Western music, Western church architecture, Western dress, Western social organization — as if these were inseparable from Christianity. The result was churches that were spiritually vibrant but culturally alienating, associated with colonial power rather than indigenous identity. African and Asian theologians have spent the last century doing the difficult work of de-colonizing Christianity: recovering the gospel from its Western cultural wrapping and expressing it in African, Asian, and Pacific idioms.",
      "Contextualization has limits that missiologists debate vigorously. Insider Movements — which allow converts from Islam or Hinduism to remain within their cultural community, attending mosque or temple while following Jesus — push contextualization to its furthest point and have attracted both enthusiastic advocates and sharp critics. The question is always: what belongs to the essence of the gospel and what belongs to the cultural form? The Trinity and the resurrection cannot be contextualized away. But the musical style of worship, the architecture of meeting places, the forms of community life, and the cultural practices that carry no essential theological freight are fair game for local expression.",
      "Missiologists distinguish between under-contextualization (presenting the gospel in a foreign cultural form that creates unnecessary barriers to hearing) and syncretism (mixing the gospel with incompatible elements of another religion or worldview). Both are errors, but they are opposite errors. In practice, most Western missionaries have erred toward under-contextualization — carrying cultural baggage that obscures the gospel. The corrective is not syncretism but humble, patient, community-based discernment of what the gospel looks like as it takes root in a new cultural soil.",
    ],
  },
  "Short vs Long": {
    heading: "Short-Term vs Long-Term Missions: Honest Reckoning",
    color: GREEN,
    verse: "Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.",
    verseRef: "1 Peter 4:10",
    paragraphs: [
      "Short-term missions (STM) have become the dominant mode of missionary engagement for North American churches. An estimated 1.5 million Americans participate in short-term mission trips each year, spending somewhere between 1.6 and 2.4 billion dollars annually. These trips range from week-long building projects to semester-long internships. They are a significant part of how many Christians form their understanding of the world and of the church’s global calling.",
      "The critique of short-term missions, leveled increasingly by both missiologists and host communities, is substantial. Building projects done by unskilled volunteers from wealthy countries often produce substandard work and displace local laborers who need the income. Medical missions led by unqualified volunteers can provide substandard care. ‘Voluntourism’ — the dynamic where the primary beneficiary of the trip is the volunteer rather than the community — is common. The financial cost of flying twelve people from the United States for a week of construction could pay a skilled local crew for months.",
      "Robert Lupton’s Toxic Charity (2011) and Steve Corbett and Brian Fikkert’s When Helping Hurts (2009) named these problems from within the evangelical tradition. Their analysis was that well-intentioned short-term missions often undermine local dignity, create dependency, and communicate a hierarchy of helper and helpee that contradicts the gospel. The alternative they advocate is development-based partnership: long-term relationships, local leadership, community-discerned priorities, and a posture of learning rather than rescuing.",
      "The defense of short-term missions focuses on formation rather than impact. Even if a two-week trip accomplishes little concrete work in the host community, it may profoundly reshape the participant’s understanding of global Christianity, move them toward long-term engagement, and connect them to a global family they would otherwise never know. The question is whether this benefit to the participant justifies the financial cost and the potential harm to the host community — a genuinely difficult moral calculation.",
      "The most honest answer is that short-term missions are neither intrinsically good nor intrinsically bad. They can be transformative partnerships or exploitative photo opportunities. The difference lies in the quality of the relationship with the host community, the degree to which local leadership directs the work, the commitment to follow-up, and the honesty of participants about their purpose. Long-term missions — cross-cultural workers who invest five, ten, twenty, or thirty years in a community — remain the irreplaceable backbone of pioneer church planting. But they need the prayer, financial, and relational support of sending communities, which well-designed short-term engagement can build.",
    ],
  },
  "Business as Mission": {
    heading: "Tentmaking and Business as Mission: Work as Witness",
    color: GOLD,
    verse: "Paul worked with them, because he was a tentmaker as they were.",
    verseRef: "Acts 18:3",
    paragraphs: [
      "The Apostle Paul made tents. This is a mundane biographical detail that has become the name of an entire missiology: ‘tentmaking’ — the practice of cross-cultural workers who enter a country through legitimate employment rather than as vocational missionaries. Paul used his trade to support himself (1 Thess. 2:9; 2 Thess. 3:8) and to avoid being a financial burden on new churches. He also used his work as an entry into the social world of the artisan class — the daily contact of the workshop was a primary venue for his evangelism.",
      "Tentmaking has become essential in what missiologists call ‘Creative Access Nations’ — countries where traditional missionary visas are not available because the government restricts or prohibits foreign religious workers. Much of the 10/40 Window falls into this category: Saudi Arabia, Iran, China, Afghanistan, Uzbekistan, and dozens of other nations where a missionary visa simply does not exist. The only way to gain long-term presence in these communities is through legitimate professional employment: English teaching, medical work, development consulting, agricultural expertise, business.",
      "Business as Mission (BAM) extends tentmaking in a theologically rich direction. BAM argues that business itself — not merely as a cover for evangelism but as a genuine expression of the cultural mandate — is a form of mission. A business that employs people with dignity, pays fair wages, operates honestly, and serves community needs is already participating in the kingdom of God. The gospel is proclaimed not only through words but through the ethos of the business itself. Corruption, exploitation, and dignity-denial are forms of anti-gospel; honesty, generosity, and human flourishing are the gospel lived out in economic form.",
      "The dangers of tentmaking and BAM are real. ‘Platform ministries’ — where the business is essentially a false front for what is really a missionary operation — can be deceptive to host governments and host communities, creating legal and ethical problems. The integrity of BAM requires that the business be a genuine business, not a facade. Workers must do the actual job they were hired to do with excellence. The question ‘What do you do in this country?’ requires an honest answer.",
      "For Christians in professional careers who feel called to global mission but cannot leave their work, BAM opens a compelling possibility: your expertise in engineering, agriculture, healthcare, education, finance, or technology may be exactly what a pioneer community needs. Vocation and mission are not in tension; they can be united. The professional who spends fifteen years building a business in an unreached country, treating employees with dignity, operating with integrity, and making disciples among colleagues and neighbors is as much a missionary as anyone who raised support and applied for a religious visa.",
    ],
  },
  "Videos": {
    heading: "Learn More: Video Resources on Christian Missions",
    color: PURPLE,
    verse: "How beautiful are the feet of those who bring good news!",
    verseRef: "Romans 10:15",
    paragraphs: [],
  },
};

const VIDEOS = [
  {
    videoId: "sPFMaxuRCnw",
    title: "The Bible Project: The Mission of God",
  },
  {
    videoId: "H-vPDMVMzMM",
    title: "Lausanne Movement: The State of World Missions",
  },
  {
    videoId: "Ia13c_7LwbQ",
    title: "Contextualization: How the Gospel Crosses Cultures",
  },
];

const STAT_CARDS = [
  { label: "Unreached People Groups", value: "~7,000", desc: "Ethnolinguistic groups with no indigenous church", color: PURPLE },
  { label: "Unreached Population", value: "3.1B", desc: "People in unreached groups worldwide", color: GOLD },
  { label: "10/40 Window", value: "68 nations", desc: "Highest concentration of unreached peoples", color: TEAL },
  { label: "Bible Translations", value: "3,600+", desc: "Languages with at least some Scripture", color: GREEN },
];

export default function ChristianMissionsGuide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Missio Dei");

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const section = SECTIONS[activeTab];

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      {/* ── Hero ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d0720 0%, #07070F 60%, #071a0e 100%)",
          borderBottom: `1px solid ${BORDER}`,
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🌍</div>
        <h1
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 900,
            color: TEXT,
            marginBottom: "1rem",
            lineHeight: 1.15,
          }}
        >
          Christian Missions
        </h1>
        <p
          style={{
            color: MUTED,
            maxWidth: 660,
            margin: "0 auto 1.5rem",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          God’s own mission to restore all things began in Genesis 12 and will not end until every people, tribe,
          tongue, and nation is gathered before the throne. We have been sent into that mission.
        </p>
        <div
          style={{
            display: "inline-block",
            background: `${PURPLE}22`,
            border: `1px solid ${PURPLE}`,
            borderRadius: 8,
            padding: "0.6rem 1.2rem",
            color: "#c4b0ef",
            fontSize: "0.9rem",
            fontStyle: "italic",
          }}
        >
          &ldquo;All peoples on earth will be blessed through you.&rdquo; &mdash; Genesis 12:3
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "2rem 1.25rem 4rem" }}>

        {/* ── Stats ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          {STAT_CARDS.map((s) => (
            <div
              key={s.label}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${s.color}`,
                borderRadius: 10,
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.6rem", fontWeight: 900, color: s.color, marginBottom: "0.25rem" }}>{s.value}</div>
              <div style={{ fontWeight: 700, color: TEXT, fontSize: "0.85rem", marginBottom: "0.25rem" }}>{s.label}</div>
              <div style={{ color: MUTED, fontSize: "0.78rem" }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1.75rem",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "0.5rem 1.05rem",
                borderRadius: 20,
                border: `1px solid ${activeTab === tab ? section.color : BORDER}`,
                background: activeTab === tab ? `${section.color}22` : CARD,
                color: activeTab === tab ? section.color : MUTED,
                fontWeight: activeTab === tab ? 700 : 400,
                cursor: "pointer",
                fontSize: "0.82rem",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Section Content ── */}
        {activeTab !== "Videos" ? (
          <div>
            {/* Section Header */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${section.color}`,
                borderRadius: "0 12px 12px 0",
                padding: "1.5rem",
                marginBottom: "1.75rem",
              }}
            >
              <h2 style={{ fontSize: "clamp(1.15rem, 3vw, 1.55rem)", fontWeight: 800, color: TEXT, marginBottom: "0.75rem" }}>
                {section.heading}
              </h2>
              <blockquote
                style={{
                  borderLeft: `3px solid ${section.color}`,
                  paddingLeft: "1rem",
                  margin: 0,
                  color: MUTED,
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                }}
              >
                &ldquo;{section.verse}&rdquo;
                <footer style={{ marginTop: "0.4rem", color: section.color, fontStyle: "normal", fontWeight: 600, fontSize: "0.85rem" }}>
                  &mdash; {section.verseRef}
                </footer>
              </blockquote>
            </div>

            {/* Paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {section.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: "1.25rem 1.5rem",
                    color: TEXT,
                    lineHeight: 1.8,
                    fontSize: "0.97rem",
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Inline video for relevant tabs */}
            {activeTab === "Missio Dei" && (
              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
                  Featured Video
                </h3>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId="sPFMaxuRCnw" title="The Bible Project: The Mission of God" />
                  <div style={{ padding: "0.85rem 1rem" }}>
                    <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}>
                      The Bible Project on the missio Dei &mdash; God’s own mission running through all of Scripture.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Contextualization" && (
              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
                  Featured Video
                </h3>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId="Ia13c_7LwbQ" title="Contextualization: How the Gospel Crosses Cultures" />
                  <div style={{ padding: "0.85rem 1rem" }}>
                    <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}>
                      How the gospel is translated — not diluted — as it crosses into new cultural contexts.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "To All Nations" && (
              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
                  Featured Video
                </h3>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId="H-vPDMVMzMM" title="Lausanne Movement: The State of World Missions" />
                  <div style={{ padding: "0.85rem 1rem" }}>
                    <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}>
                      The Lausanne Movement on the global state of missions and the remaining task.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ── Videos Tab ── */
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${PURPLE}`,
                borderRadius: "0 12px 12px 0",
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>
                {section.heading}
              </h2>
              <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>
                These videos offer biblical, historical, and strategic perspectives on Christian world missions.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {VIDEOS.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.85rem 1rem" }}>
                    <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.95rem", margin: 0 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Colonialism Warning Box ── */}
        {(activeTab === "Contextualization" || activeTab === "Short vs Long") && (
          <div
            style={{
              marginTop: "2rem",
              background: "#1a0d00",
              border: `1px solid ${GOLD}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <h4 style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", marginBottom: "0.6rem" }}>
              A Word on Colonialism and Missions History
            </h4>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
              The history of Christian missions is inseparable from the history of Western colonialism. In many
              contexts, missionaries arrived alongside or immediately after colonial administrators, and the gospel
              was presented in ways that aligned Christianity with Western cultural domination. This history has
              left deep wounds. Honest engagement with missions today requires acknowledging this history, listening
              to the voices of those whose communities were harmed, and actively working to de-colonize missionary
              methods. The gospel’s integrity demands it.
            </p>
          </div>
        )}

        {/* ── Closing Encouragement ── */}
        <div
          style={{
            marginTop: "3rem",
            background: "linear-gradient(135deg, #0d0720, #071a0e)",
            border: `1px solid ${PURPLE}`,
            borderRadius: 14,
            padding: "2rem 1.75rem",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>✦</div>
          <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.25rem", marginBottom: "0.75rem" }}>
            Sent into the World
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.75, maxWidth: 600, margin: "0 auto 1rem", fontSize: "0.95rem" }}>
            The mission of God did not begin with you, and it will not end with you. You are invited to participate
            in something that spans all of history and every corner of the earth. The question is not whether you
            will go or stay, but whether you will live with missional intentionality in the place and vocation where
            God has placed you.
          </p>
          <p style={{ color: TEXT, lineHeight: 1.75, maxWidth: 560, margin: "0 auto", fontStyle: "italic", fontSize: "0.9rem" }}>
            &ldquo;From one man he made all the nations, that they should inhabit the whole earth... God did this so
            that they would seek him and perhaps reach out for him and find him, though he is not far from any one
            of us.&rdquo; &mdash; Acts 17:26-27
          </p>
        </div>
      </div>
    </div>
  );
}
