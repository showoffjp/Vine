"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "One Blood, One Humanity", verse: "Acts 17:26", body: "'From one man he made all the nations, that they should inhabit the whole earth' (Acts 17:26). The biblical starting point for race is not diversity — it is unity. All humans share one origin, one Creator, one dignity. Race as a category of fundamental difference is a recent and largely social construct. The gospel begins by dismantling the assumption that any race is fundamentally other." },
  { title: "The Dividing Wall Destroyed", verse: "Ephesians 2:14", body: "'For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility' (Ephesians 2:14). Paul wrote this about Jewish-Gentile division — the most profound ethnic and religious division in the ancient world. The cross, he says, does not transcend that division — it destroys it. A church that reflects ethnic divisions has not yet fully believed the gospel." },
  { title: "The Vision of Heaven", verse: "Revelation 7:9", body: "'After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne' (Revelation 7:9). The end of the story is not a homogenized humanity — it is a reconciled diversity. Every people, language, and culture worshipping together. The church is to be a foretaste of this reality, not a postponement of it." },
  { title: "Lament as Prerequisite", verse: "Amos 5:21-24", body: "Amos rebukes Israel for liturgical activity disconnected from justice: 'Let justice roll on like a river.' Reconciliation that skips lament — honest grief over what has been done and suffered — produces a false peace. White Christians lamenting racial injustice is not political; it is prophetic. Lament is not guilt; it is the acknowledgment that something has gone wrong that must not be minimized." },
  { title: "The Cost of Reconciliation", verse: "2 Corinthians 5:18-20", body: "'God... gave us the ministry of reconciliation' (2 Corinthians 5:18). Reconciliation is a ministry — it requires labor, risk, and loss. Racial reconciliation costs white Christians comfort, narrative, and power. It costs Black and minority Christians the vulnerability of trust after betrayal. Both are real costs. The gospel does not promise painless reconciliation — it provides the resources to bear the cost." },
];

const BARRIERS = [
  { barrier: "Racial Homogeneity in Churches", desc: "The Sunday morning 'most segregated hour' is still largely true. Churches self-segregate by preference, culture, and geography. Homogenous churches are not necessarily racist, but they are unfinished — they do not yet reflect the vision of Revelation 7.", response: "Integrate relationships before integrating services. Cross-cultural friendships are the foundation of cross-cultural churches. Start with genuine relationship, not demographic strategy." },
  { barrier: "Colorblindness Theology", desc: "'I don't see color' is often heard as a compliment but received as an erasure. Claiming not to see race does not end racism — it prevents honest conversation about it. The goal is not blindness to difference but the transformation of how difference is valued.", response: "See and celebrate cultural difference while rejecting racial hierarchy. Learn the history of race in America. Ignorance is not neutral — it perpetuates." },
  { barrier: "Centering Comfort Over Truth", desc: "Reconciliation conversations fail when one group's comfort (usually the majority group's) takes priority over truth-telling. When minority Christians share experiences of racism in the church, being told 'that didn't happen' or 'you're being divisive' is a second wound.", response: "Listen to understand, not to defend. The experience of your brother or sister in Christ is data about reality. Start by believing it, even if you don't fully understand it." },
  { barrier: "Individualism vs. Systemic Reality", desc: "Many white Christians resist the concept of systemic racism because they personally hold no racial animus. But systems can perpetuate inequity without individual malice. Acknowledging systemic sin does not require personal guilt — it requires personal responsibility.", response: "Study history. Read both W.E.B. Du Bois and Thomas Sowell. Understand the history of redlining, mass incarceration, and educational inequity. Form your own informed view." },
  { barrier: "The Politicization Trap", desc: "Race and reconciliation have become politically coded — which causes Christians to take political rather than biblical positions. When a biblical topic (justice, unity, imago dei) gets reduced to a partisan talking point, many Christians disengage precisely when engagement is most needed.", response: "Distinguish political tribes from biblical truth. Let Scripture, not party affiliation, shape your view of human dignity, justice, and what the church is called to be." },
];

const VOICES = [
  {
    id: "king",
    name: "Martin Luther King Jr.",
    era: "1929 – 1968",
    context: "Baptist pastor and civil rights leader, Letter from Birmingham Jail",
    bio: "Martin Luther King Jr. is the most theologically significant figure in the American racial justice movement. His Letter from Birmingham Jail (1963), written to white moderate clergy who called his protests 'untimely,' is a masterwork of biblical argumentation: he grounds the civil rights movement in natural law, Augustine, Aquinas, and a deep reading of the prophets. His sermon 'I Have a Dream' is usually excerpted from its full theological context — a vision of the Beloved Community, rooted in Isaiah 40, where valleys are exalted and mountains made low. King was not a secular activist who used religious language; he was a theologian who understood that the justice of God demanded what American democracy had not yet delivered.",
    quote: "Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny. Whatever affects one directly, affects all indirectly.",
    contribution: "King showed that the American church's complicity in racial injustice was not a peripheral issue but a theological betrayal — a failure to believe the gospel it preached. His deployment of Scripture against his Christian critics was devastating and unanswerable. The Letter from Birmingham Jail remains required reading for any Christian who wants to understand what faithful engagement with racial injustice looks like — and how comfortable Christianity colludes with evil by counseling patience over justice.",
  },
  {
    id: "perkins",
    name: "John Perkins",
    era: "Born 1930",
    context: "Evangelical pioneer of racial reconciliation, Voice of Calvary Fellowship",
    bio: "John Perkins grew up in Mississippi sharecropper poverty, left for California after his brother was shot by a police officer, became a Christian, and then — remarkably — returned to Mississippi in 1960 to do evangelism and community development in the most racially hostile state in America. He was arrested and severely beaten by highway patrol officers in 1970. Instead of leaving, he stayed and articulated a theology of racial reconciliation built on three R's: Relocation (living among the poor), Redistribution (using resources for justice), and Reconciliation (the gospel as the power of genuine racial reconciliation). He founded the Christian Community Development Association, which has trained thousands of community developers.",
    quote: "Love is the final fight. I believe in a God who can take no-count people and make them count for his Kingdom.",
    contribution: "Perkins demonstrated that racial reconciliation was not primarily an academic or political project but a costly, embodied, long-term Christian practice. His willingness to return to Mississippi after being beaten, to minister across racial lines, and to build institutions that served both Black and white communities showed that the gospel had power to break the deepest American divisions. The CCDA movement he founded has shaped evangelical community development for 50 years.",
  },
  {
    id: "tisby",
    name: "Jemar Tisby",
    era: "Born 1982",
    context: "African-American historian and theologian, The Color of Compromise (2019)",
    bio: "Jemar Tisby's The Color of Compromise: The Truth About the American Church's Complicity in Racism is the most rigorous recent historical treatment of how white American Christianity has accommodated, enabled, and sometimes championed racial injustice from the colonial era to the present. Tisby is a historian, and his argument is historical: he documents case after case in which American churches chose comfort and cultural accommodation over prophetic witness. The Compromise of his title is not a single event but a pattern — the path of least resistance that allowed slaveholders to receive communion, lynchers to be deacons, and segregationists to be respected church leaders.",
    quote: "Complicity with racism has always been the path of least resistance for white Christians. It has been easier to accommodate to the racial mores of the surrounding culture than to challenge them.",
    contribution: "Tisby's historical work made it harder for American Christians to claim ignorance about the church's racial history. By documenting specific instances of ecclesiastical complicity — not in fringe movements but in the mainstream of American Christianity — he showed that racial injustice in the church was not incidental but structural. His subsequent book How to Fight Racism (2021) moved from history to practice: what does repentance and change actually look like in a local church context.",
  },
  {
    id: "morrison",
    name: "Latasha Morrison",
    era: "Born 1978",
    context: "Founder of Be the Bridge, author of Be the Bridge (2019)",
    bio: "Latasha Morrison founded the Be the Bridge ministry in 2016 with a single Facebook group and a conviction that the American church needed both honest conversation about racial injustice and a practical framework for reconciliation. The group grew to hundreds of thousands of members and spawned a curriculum, a book, and a network of bridge-building groups in churches across the country. Morrison's approach is distinctively Christian: it begins with lament, moves through honest historical reckoning, and aims at genuine reconciliation built on relationships and shared commitment. She is equally willing to challenge Black Christians toward forgiveness and white Christians toward repentance.",
    quote: "I believe that bridge-building is our divine calling. Not just because it's the kind thing to do, but because it reflects the reconciling heart of God.",
    contribution: "Morrison created one of the most practically effective racial reconciliation frameworks in the contemporary evangelical church. Be the Bridge curriculum is being used in churches of every denomination across the country to facilitate honest, structured, relationally grounded conversations about race. Her emphasis on lament as the necessary starting point — not political argument, not quick solutions, but honest grief — has been particularly important for moving white evangelicals toward genuine engagement.",
  },
  {
    id: "stevenson",
    name: "Bryan Stevenson",
    era: "Born 1959",
    context: "Founder of Equal Justice Initiative, author of Just Mercy (2014)",
    bio: "Bryan Stevenson is not primarily a theologian, but Just Mercy is saturated in Black church theology and the prophetic tradition. Stevenson founded the Equal Justice Initiative in Montgomery, Alabama, to provide legal representation to those wrongly condemned or unfairly sentenced, with particular focus on the incarceration of children and the legacy of racial terror. He has argued before the Supreme Court, exonerated over 140 wrongly convicted prisoners, and established the National Memorial for Peace and Justice — the first memorial in America to document the racial terror of lynching. His book Just Mercy is both a legal memoir and a theological meditation on mercy, justice, and the worth of every human life.",
    quote: "Each of us is more than the worst thing we have ever done. We are all broken by something. We all share in the condition of brokenness even if our brokenness is not equivalent.",
    contribution: "Stevenson's work has challenged the American church to see mass incarceration and criminal justice as a central justice issue, not a political one. His argument — that proximity to suffering is transformative, that 'you can't understand most of the important things from a distance' — is deeply consonant with the Incarnation: God did not stay at a distance but moved into the neighborhood. Just Mercy has been assigned in seminaries and churches and has shaped a generation's understanding of criminal justice as a gospel issue.",
  },
];

const PRACTICES = [
  { title: "Cross-Cultural Friendship", desc: "Seek genuine friendship across racial lines — not for diversity points but for shared life. Attend events, visit neighborhoods, build relationships that expose you to different experiences of America and of the church.", icon: "🤝" },
  { title: "Read and Listen", desc: "Read books by Black, Latino, and Asian Christian leaders. Listen to podcasts and sermons from diverse traditions. Expand your theological and experiential frame beyond your own cultural context.", icon: "📚" },
  { title: "Attend a Different Church", desc: "Visit a church whose ethnic composition differs from your own. Come as a learner and a guest, not as an evaluator. Notice what worship looks like in a different cultural register.", icon: "⛪" },
  { title: "Lament Together", desc: "Don't rush to solutions. Sit with the grief of racial injustice in American history and present reality. Lament together — this is a biblical practice that opens the way for genuine reconciliation.", icon: "😢" },
  { title: "Support Minority-Led Organizations", desc: "Put your time and money toward organizations led by minority Christians working on justice and reconciliation. Following is as important as leading in this work.", icon: "💰" },
  { title: "Speak in Your Church", desc: "Raise the topic in your church context — in small groups, in conversation with pastors. You don't need to be an expert. You need to be someone who refuses comfortable silence on a matter the Bible addresses directly.", icon: "🎙️" },
];

type Tab = "theology" | "barriers" | "voices" | "practices" | "videos";

export default function RaceReconciliationPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState("king");

  const voice = VOICES.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Race & Reconciliation</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto" }}>
            The vision of Revelation 7 — every nation, tribe, and tongue worshipping together — is not just an end-times hope. It is a present calling. The church is meant to be a foretaste of that reconciled community.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "barriers" as const, label: "Barriers", icon: "🚧" },
            { id: "voices" as const, label: "Voices", icon: "🎙️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "barriers" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Racial reconciliation is difficult not primarily because of bad will, but because of patterns of thought, church culture, and history that resist honest engagement. Name the barriers to address them.
              </p>
            </div>
            {BARRIERS.map((b, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === b.barrier ? null : b.barrier)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === b.barrier ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{b.barrier}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === b.barrier ? "-" : "+"}</span>
                </button>
                {expanded === b.barrier && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{b.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{b.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {VOICES.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: selectedVoice === v.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{voice.name}</h2>
              <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{voice.context}</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ margin: "0 0 20px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{voice.quote}"</p>
              </blockquote>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Reconciliation is not a conversation — it is a practice. These are concrete, repeated, embodied steps that move toward the vision of the church as a foretaste of heaven.
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

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on race and reconciliation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "zohRZjxwsss", title: "Race and the Christian: Q&A with Tim Keller, John Piper & Anthony Bradley", channel: "Redeemer Presbyterian Church", description: "Tim Keller and John Piper discuss what the Bible teaches about race, the church's responsibility, and the path toward genuine reconciliation." },
                  { videoId: "EhJJcTKTVGo", title: "Racism and Corporate Evil: A White Guy's Perspective", channel: "Timothy Keller", description: "Tim Keller addresses how corporate evil and systemic sin relate to racial injustice, and what the gospel demands of white Christians." },
                  { videoId: "pYV9FCS34eM", title: "Hope, Race and Power", channel: "Timothy Keller", description: "A sermon exploring how Christian hope shapes our approach to race-related issues and the power dynamics that fuel division." },
                  { videoId: "E9bF2gjVPu8", title: "Race, Repentance, and Rejoicing: Ethnicity in the Kingdom", channel: "Desiring God / John Piper", description: "John Piper preaches on the biblical vision of ethnic diversity in God's kingdom and what genuine repentance and joy look like across racial lines." },
                  { videoId: "lcNIyJZ2bbU", title: "Reconciliation", channel: "Timothy Keller", description: "A Keller sermon on reconciliation rooted in Joseph's story — the costly, Spirit-powered work of breaking down walls the gospel has already torn down." },
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
