"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "types" | "stories" | "practices" | "videos";

const THEOLOGY = [
  { title: "God Declares Aloneness Not Good", verse: "Genesis 2:18", body: "'It is not good for the man to be alone' (Genesis 2:18). God said this before sin entered the world. Loneliness is not a character flaw or a spiritual failure — it is the God-given signal that community is missing. The ache of loneliness is a correct diagnosis: you were made for more than this." },
  { title: "Even Jesus Was Lonely", verse: "Mark 14:32-40", body: "In Gethsemane, Jesus took his closest disciples and asked them to stay and watch with him. He returned three times to find them sleeping. 'My soul is overwhelmed with sorrow to the point of death... Could you not keep watch for one hour?' (Mark 14:34, 37). The Son of God experienced profound loneliness — misunderstood, abandoned at his moment of deepest need. He knows what you feel." },
  { title: "The Psalms of Isolation", verse: "Psalm 25:16, 88:18", body: "'Turn to me and be gracious to me, for I am lonely and afflicted' (Psalm 25:16). 'Darkness is my closest friend' (Psalm 88:18). God preserved the anguish of isolation within his inspired Word. The psalms of loneliness are not cautionary tales — they are invitations. Your loneliness can be brought to God as prayer." },
  { title: "Loneliness vs. Solitude", verse: "Mark 1:35", body: "Jesus regularly withdrew to lonely places to pray (Mark 1:35). There is a difference between loneliness — the unwanted, unchosen experience of isolation — and solitude, the chosen withdrawal for encounter with God. Solitude is the discipline that transforms loneliness: learning to be with God in the alone so that aloneness becomes the place of encounter rather than the place of absence." },
  { title: "The Church as Antidote to Loneliness", verse: "Acts 2:42-47", body: "The early church in Acts 2 was characterized by daily contact — 'they broke bread in their homes and ate together with glad and sincere hearts' (Acts 2:46). The solution to epidemic loneliness is not programs but genuine, daily, shared life. The church is supposed to be the community that interrupts isolation — and when it functions as it was designed, it is." },
];

const TYPES = [
  { type: "New-Place Loneliness", color: "#3B82F6", desc: "After a move, transition, or life change. You know no one; the connections you had don't transfer to a new city.", response: "Join one church and stick to it. Say yes to every social invitation for the first 6 months. It takes 2-3 years to build a real network in a new place — be patient." },
  { type: "In-a-Crowd Loneliness", color: "#F59E0B", desc: "Surrounded by people but not truly known. The conversations stay surface-level; no one knows what's actually happening inside.", response: "The transition from surface to depth requires someone to go first. Be the one who shares something vulnerable. Most people are waiting for permission." },
  { type: "Grief Loneliness", color: "#EF4444", desc: "The death or departure of someone essential — a spouse, close friend, parent. The loneliness is not just absence but the unique presence of that person, now missing.", response: "This loneliness is appropriate grief. Don't rush past it. Find others who have grieved similarly. The goal is not replacing the relationship but learning to carry the grief with community." },
  { type: "Chronically Single Loneliness", color: PURPLE, desc: "The ache of wanting a partner who hasn't arrived. Watching peers marry, have children, and build lives while yours remains solitary.", response: "God's goodness does not depend on marital status. Invest deeply in friendships; many married couples are lonelier than their single friends. Community can hold what marriage might not." },
  { type: "Spiritual Loneliness", color: "#10B981", desc: "Feeling that no one around you shares your depth of faith, or that God himself feels distant and silent.", response: "Find one or two people who pray earnestly and pursue them. Spiritual loneliness often drives us into the very presence of God that is the deepest remedy for it." },
];

const STORIES = [
  {
    id: "elijah",
    name: "Elijah Under the Juniper Tree",
    verse: "1 Kings 19:4",
    color: "#F59E0B",
    situation: "After the greatest spiritual victory of his life — fire from heaven on Mount Carmel — Elijah collapsed under a juniper tree and asked to die. 'It is enough; now, O Lord, take away my life, for I am no better than my ancestors' (1 Kings 19:4). He had just routed 450 prophets of Baal. And he was alone, exhausted, terrified, and suicidal.",
    insight: "The pattern is significant: the crash came after the victory. Post-triumph loneliness is real and dangerous. God's response was not rebuke but provision — twice the angel woke him with food and water before asking anything of him. Then God came not in the dramatic wind or earthquake or fire but in a still small voice. The sovereign God had 7,000 remaining who had not bowed to Baal — Elijah's sense of being the last one standing was mistaken. But God ministered to the body and the soul before correcting the theology.",
    lesson: "God meets physical exhaustion before theological confusion. Rest and nourishment are not signs of weakness — they are part of God's care for the lonely.",
  },
  {
    id: "moses",
    name: "Moses: The Weight of Leadership Alone",
    verse: "Numbers 11:14-15",
    color: "#3B82F6",
    situation: "'I cannot carry all these people by myself; the burden is too heavy for me. If this is how you are going to treat me, please go ahead and kill me — if I have found favor in your eyes — and do not let me face my own ruin' (Numbers 11:14-15). The loneliness of leadership: Moses was responsible for two million people, hearing God face to face, bearing the weight of a nation — and had no one who shared the burden.",
    insight: "God's immediate response was institutional: appoint seventy elders to share the load. The loneliness of Moses was not meant to be endured alone — it was a structural problem requiring a structural solution. God gave Moses the gift of shared leadership. Loneliness in leadership is often a sign that leadership itself needs to be distributed. No one was meant to carry a congregation, an organization, or a family entirely alone.",
    lesson: "Some loneliness calls for honest diagnosis of overburden. Shared leadership, delegation, and community of fellow-leaders are God's prescribed remedy.",
  },
  {
    id: "david",
    name: "David in the Wilderness",
    verse: "Psalm 142:4",
    color: "#EF4444",
    situation: "'Look and see, there is no one at my right hand; no one is concerned for me. I have no refuge; no one cares for my life' (Psalm 142:4). David wrote this in a cave while Saul was hunting him. His closest friend Jonathan was back at the palace. He was surrounded by a ragtag group of the distressed, the indebted, and the discontented (1 Samuel 22:2). Not exactly a comfort team.",
    insight: "Yet out of that cave David wrote one of the most intimate psalms of trust. 'I cry to you, Lord; I say, You are my refuge, my portion in the land of the living' (Psalm 142:5). The loneliness itself drove David deeper into God. The friends who had abandoned him left a space that God filled. The cave became the place of encounter. Many of the most honest prayers in history were written in conditions that looked like abandonment.",
    lesson: "The loneliness that strips us of human support has a long history of being the very circumstance that produces the deepest intimacy with God.",
  },
  {
    id: "paul",
    name: "Paul at the End of His Life",
    verse: "2 Timothy 4:16",
    color: PURPLE,
    situation: "'At my first defense, no one came to my support, but everyone deserted me. May it not be held against them' (2 Timothy 4:16). Paul wrote 2 Timothy from a Roman prison, awaiting execution. The church he had planted across the empire, the men he had mentored, the communities he had nurtured — they were not there. 'Only Luke is with me' (4:11). After decades of ministry, Paul faced his death with one companion.",
    insight: "The letter overflows with warmth and faith. Paul was lonely but not defeated: 'The Lord stood at my side and gave me strength, so that through me the message might be fully proclaimed' (4:17). The divine presence compensated for human absence. And his final instructions — 'do your best to come to me soon' (4:9) — show that he still wanted human companionship. The spiritual was not a substitute for the relational; both mattered. He asked for his cloak, his books, and his friends.",
    lesson: "Even the most spiritually mature need human presence. Asking for it is not weakness; it is honest. Paul asked. So can you.",
  },
  {
    id: "hagar",
    name: "Hagar: Seen in the Wilderness",
    verse: "Genesis 16:13",
    color: "#10B981",
    situation: "Hagar was a slave woman, used by Abraham and Sarah and then cast out with her son into the desert to die. She placed the boy under a bush and sat a bowshot away so she would not have to watch him die. She was the least powerful person in the story — foreign, enslaved, female, now abandoned. She was completely alone (Genesis 21:14-16).",
    insight: "God heard the boy crying and appeared to Hagar. Earlier, when she had run away the first time, God had found her and she named him 'the God who sees me' — El Roi (Genesis 16:13). The God of the Bible has a particular attention to the most alone, the most forgotten, the most abandoned. 'She gave this name to the Lord who spoke to her: You are the God who sees me' — one of the most personal names for God in Scripture, given by a slave woman in the desert.",
    lesson: "God sees those the world has forgotten. The most isolated person in the room is not invisible to God. Loneliness does not mean unseen.",
  },
];

const PRACTICES = [
  { title: "Initiate First, Always", desc: "Waiting to be invited is the loneliness trap. Take the risk of being the one who invites, calls, texts, shows up. You cannot control how people respond, but you can control whether you try.", icon: "📞" },
  { title: "Choose Depth over Breadth", desc: "Invest in 2-3 relationships with genuine vulnerability rather than maintaining 20 pleasant acquaintances. Depth is built through shared time, honest conversation, and showing up in hard moments.", icon: "🎯" },
  { title: "Join and Stay", desc: "The loneliest people are often those who try many communities briefly and find none perfect. Pick one church, one small group, one recurring context and stay long enough for people to know you.", icon: "⚓" },
  { title: "Practice Being Present", desc: "Paradoxically, the most connected people often feel alone because they are not truly present with anyone. Put the phone away. Listen without thinking about what you'll say next.", icon: "👁️" },
  { title: "Let God Into the Loneliness", desc: "Psalm 25:16: 'Turn to me and be gracious, for I am lonely.' Bring the loneliness directly to God in prayer. He is the one companion who never leaves, never gets tired of you, and knows you completely.", icon: "🙏" },
  { title: "Serve the Lonely", desc: "The quickest way out of loneliness is to move toward someone lonelier than you. Visit the elderly, befriend the new person, invite the person who always sits alone. Service consistently creates community.", icon: "❤️" },
];

export default function LonelinessPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_loneliness_tab", "theology");
  const [selectedStory, setSelectedStory] = usePersistedState("vine_loneliness_selected_story", "elijah");

  const story = STORIES.find(s => s.id === selectedStory)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌑</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Loneliness & Community</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            God declared aloneness 'not good' before sin ever entered the picture. Loneliness is not a failure — it is a signal. And the gospel is the beginning of the answer.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as Tab, label: "Theology", icon: "📖" },
            { id: "types" as Tab, label: "Types", icon: "🔍" },
            { id: "stories" as Tab, label: "Bible Stories", icon: "📜" },
            { id: "practices" as Tab, label: "Practices", icon: "🛠️" },
            { id: "videos" as Tab, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "types" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Loneliness is not one experience — it has different shapes, causes, and remedies. Naming the type you're experiencing helps you respond appropriately rather than applying a generic solution to a specific problem.
              </p>
            </div>
            {TYPES.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color}30`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{t.type}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{t.desc}</p>
                <div style={{ background: `${t.color}10`, border: `1px solid ${t.color}25`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: t.color, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>RESPONSE</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{t.response}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "stories" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 200, flexShrink: 0 }}>
              {STORIES.map(s => (
                <button type="button" key={s.id} onClick={() => setSelectedStory(s.id)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedStory === s.id ? s.color : BORDER}`, background: selectedStory === s.id ? `${s.color}12` : "transparent", color: selectedStory === s.id ? s.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  {s.name.split(":")[0].split(" — ")[0]}
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${story.color}30`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h2 style={{ color: story.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{story.name}</h2>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={story.verse} /></span>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>THE SITUATION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{story.situation}</p>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>THE INSIGHT</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{story.insight}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>THE LESSON</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{story.lesson}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
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
                  { videoId: "FTZ3GfL9yQM", title: "The Upside Down Kingdom", channel: "Tim Keller / Gospel Coalition", description: "Keller explores how the Kingdom of God inverts worldly expectations — including the loneliness of following Jesus and finding true community in unexpected places." },
                  { videoId: "KA4pSZxrwRs", title: "The Joy That Produces Radical Obedience", channel: "Desiring God", description: "John Piper on how joy in God — not isolation or despair — is the foundation for resilience. Speaks to how knowing God personally addresses the deepest loneliness." },
                  { videoId: "wQ5cclvdWjo", title: "If God Is Sovereign, How Can Man Be Free?", channel: "Ligonier Ministries / R.C. Sproul", description: "R.C. Sproul addresses the sovereignty of God — and what it means to trust a God who sees us even in our most isolated moments." },
                  { videoId: "y3Bn7ihYyvw", title: "The Simple Gospel", channel: "Francis Chan", description: "Francis Chan on the radical community of the early church — what genuine belonging looks like and why modern Christianity often fails to provide it." },
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
