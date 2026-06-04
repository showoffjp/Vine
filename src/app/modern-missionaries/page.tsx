"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const REGION_FILTERS = ["All", "Africa", "Asia", "Middle East", "Latin America", "Multiple Regions"];

const MISSIONARIES = [
  {
    name: "Jim Elliot",
    years: "1927–1956",
    region: "Latin America",
    country: "Ecuador",
    color: "#F59E0B",
    role: "Martyred missionary to the Huaorani (Auca) people",
    story: "Jim Elliot was a passionate young missionary who believed the unreached Huaorani people of Ecuador — one of the most violent tribes in South America — deserved to hear the gospel. In January 1956, Elliot and four other young missionaries made first contact with the Huaorani on a sandbar called 'Palm Beach' on the Curaray River. All five were speared to death on January 8, 1956. Elliot was 28 years old.",
    legacy: "Elliot's death, along with that of his four companions (Nate Saint, Roger Youderian, Peter Fleming, and Ed McCully), was reported globally and sparked one of the greatest missionary mobilizations of the 20th century. His wife Elisabeth Elliot later returned to live among the Huaorani — as did Rachel Saint — and saw remarkable conversions, including among the very men who had killed their husbands. The Huaorani people became vibrant Christians.",
    famous_quote: "He is no fool who gives what he cannot keep to gain what he cannot lose.",
    impact: "Through Gates of Splendor (Elisabeth Elliot) has sold millions and inspired generations of missionaries. The Elliot story directly catalyzed thousands of missionary calls.",
    initials: "JE",
  },
  {
    name: "Elisabeth Elliot",
    years: "1926–2015",
    region: "Latin America",
    country: "Ecuador, USA",
    color: GREEN,
    role: "Missionary, author, and voice of costly discipleship",
    story: "After Jim Elliot's martyrdom, Elisabeth Elliot did not return to America broken. She returned to Ecuador and — remarkably — lived among the Huaorani people who had killed her husband, bringing them the gospel. She later became one of the most significant Christian authors and speakers of the 20th century, writing over 20 books on discipleship, suffering, femininity, and faith.",
    legacy: "Through Gates of Splendor (1957) and Shadow of the Almighty (Jim Elliot's journals, 1958) are among the most important missionary biographies ever written. Her radio program Gateway to Joy reached millions for 26 years. Her books on gender, marriage, and discipleship remain among the most influential in evangelical circles.",
    famous_quote: "God never withholds from his child that which his love and wisdom call good. God's refusals are always merciful — severe mercies at times, but mercies nonetheless.",
    impact: "Possibly the most widely read Christian woman writer of the 20th century. Her life modeled returning evil with mercy and trusting God in the incomprehensible.",
    initials: "EE",
  },
  {
    name: "Gladys Aylward",
    years: "1902–1970",
    region: "Asia",
    country: "China",
    color: "#EC4899",
    role: "Missionary to inland China; saved over 100 children",
    story: "Gladys Aylward was a domestic servant from London who was rejected by the China Inland Mission (deemed too old and too poorly educated). She saved her own money and traveled alone to China by train in 1930, crossing Russia in the middle of winter during a Sino-Soviet border conflict. She eventually worked as an innkeeper, learned Mandarin, and became a foot-unbound inspector for the Chinese government. When Japanese forces invaded, she led over 100 children on a treacherous 12-day mountain journey to safety.",
    legacy: "The Inn of the Sixth Happiness (1958 film starring Ingrid Bergman) made her famous globally, though Aylward disliked many aspects of the film. She returned to Taiwan in 1958 and worked with children there until her death in 1970. Her story of an 'unqualified' woman who was used mightily by God remains one of the most inspiring missionary missionary biographies.",
    famous_quote: "I wasn't God's first choice for what I've done for China — I don't know who it was. It must have been a great man... a well-educated man. I don't know what happened. Perhaps he died. Perhaps he wasn't willing... and God looked down and saw Gladys Aylward.",
    impact: "Pioneer of women in missions, perseverance in the face of institutional rejection, and heroic care for the most vulnerable.",
    initials: "GA",
  },
  {
    name: "William Cameron Townsend",
    years: "1896–1982",
    region: "Latin America",
    country: "Guatemala, Mexico, and globally",
    color: "#3B82F6",
    role: "Founder of Wycliffe Bible Translators; champion of Bible translation",
    story: "Cameron Townsend was a Bible salesman in Guatemala who encountered a Kaqchikel Indian who said: 'If your God is so great, why doesn't he speak my language?' Townsend spent the next 13 years learning Kaqchikel and translating the New Testament into the language. He then founded Camp Wycliffe in 1934 (later Wycliffe Bible Translators) to train others to do the same thing for every language group in the world.",
    legacy: "Wycliffe Bible Translators and its partner SIL International have completed Bible translation work in over 3,500 languages, with translation projects ongoing in hundreds more. Townsend's vision — that every people group deserves the Bible in their heart language — has shaped the entire Bible translation movement. When he died in 1982, entire language groups had their first Scriptures because of his work.",
    famous_quote: "The greatest missionary is the Bible in the mother tongue.",
    impact: "One of the most significant figures in the history of Bible translation. Without him, thousands of language groups would still have no Scripture.",
    initials: "WCT",
  },
  {
    name: "Heidi Baker",
    years: "1959–present",
    region: "Africa",
    country: "Mozambique",
    color: "#A855F7",
    role: "Founder of Iris Global; church-planting movement in Mozambique",
    story: "Heidi and Rolland Baker moved to Mozambique in 1995 during its civil war and devastating poverty. They began caring for orphaned and abandoned children — building an orphanage, a school, and a church. After a dramatic supernatural experience at a conference in Toronto in 1997, Heidi returned to Mozambique changed. What followed was described as a remarkable multiplication: Iris Global has planted over 12,000 churches across Mozambique and neighboring countries, and cares for thousands of children.",
    legacy: "Iris Global now operates in over 35 nations. Heidi Baker has become one of the most recognized voices in the global Pentecostal/charismatic movement. Her book Compelled by Love documents the principles behind their work: stopping for the one person in front of you, radical dependence on the Holy Spirit, and caring for the poor as a theological commitment, not just a humanitarian one.",
    famous_quote: "Always stop for the one. God never gives you more than one person at a time.",
    impact: "One of the most dramatic examples of church multiplication in contemporary missions. Whether from a charismatic or Reformed perspective, the work in Mozambique represents extraordinary gospel advancement.",
    initials: "HB",
  },
  {
    name: "Jackie Pullinger",
    years: "1944–present",
    region: "Asia",
    country: "Hong Kong",
    color: "#10B981",
    role: "Missionary to the Walled City, Hong Kong; drug rehabilitation ministry",
    story: "Jackie Pullinger was a 22-year-old music teacher when she sailed for Hong Kong in 1966 with almost no support and no plan except that God had called her. She eventually found herself in the Kowloon Walled City — a lawless, ungoverned enclave of 50,000 people in 2.7 hectares, controlled by Triads, full of prostitution and heroin addiction. She began working among the addicts and gang members, seeing extraordinary conversions and drug-free withdrawals through prayer.",
    legacy: "Pullinger has seen thousands of drug addicts freed through prayer in the name of Jesus — with withdrawal symptoms reportedly far milder than expected. Her book Chasing the Dragon (1980) has sold millions and inspired generations of urban missionaries. After the Walled City was demolished in 1993, her ministry St. Stephen's Society continues in Hong Kong, caring for addicts, prostitutes, and the homeless.",
    famous_quote: "We should be more afraid of a comfortable life than the call to follow Jesus into the dark places.",
    impact: "One of the most remarkable examples of the gospel's power in urban darkness. Her work preceded and inspired a generation of urban ministry movements.",
    initials: "JP",
  },
  {
    name: "Paul Washer (HeartCry Missionary Society)",
    years: "1961–present",
    region: "Latin America",
    country: "Peru (and training national missionaries globally)",
    color: "#EF4444",
    role: "Missionary in Peru; founder of HeartCry Missionary Society",
    story: "Paul Washer spent ten years as a missionary in Peru before founding HeartCry Missionary Society in 1994. HeartCry's model is distinctive: rather than sending Western missionaries (which is expensive and often creates dependency), HeartCry identifies, trains, and supports national missionaries who work in their own language and culture. It is one of the most cost-effective and theologically careful missions organizations in the world.",
    legacy: "HeartCry currently supports over 500 national missionaries in over 60 countries. Their model has been widely influential in evangelical missions strategy. Washer himself became globally known for his preaching after a 2002 sermon (the 'Shocking Youth Message') went viral, but his primary identity remains that of a missionary and missions trainer.",
    famous_quote: "You can give without loving. You cannot love without giving. Missions is not primarily about going somewhere — it is about the heart.",
    impact: "HeartCry's national missionary model has been copied by dozens of organizations. Their theological rigor combined with strategic effectiveness is rare.",
    initials: "PW",
  },
  {
    name: "K.P. Yohannan",
    years: "1950–present",
    region: "Asia",
    country: "India, and 17+ Asian nations",
    color: "#F59E0B",
    role: "Founder of Gospel for Asia / GFA World; South and Southeast Asia focus",
    story: "K.P. Yohannan grew up in India and became a missionary to the unreached peoples of South Asia. Frustrated with the expense and cultural gap of Western missionaries, he founded Gospel for Asia (now GFA World) in 1979 to train and support thousands of native Asian missionaries — people who share language, culture, and often social class with those they serve.",
    legacy: "GFA World has grown to support over 16,000 indigenous workers in South and Southeast Asia. They have planted tens of thousands of fellowships, dug wells, provided medical care, and worked among some of the most poverty-stricken and spiritually unreached people on earth. His book Revolution in World Missions has been given away millions of times and has inspired countless supporters of Asian missions.",
    famous_quote: "The greatest tragedy in the world is not the immensity of human suffering. The greatest tragedy is that most of it is unknown and unreported.",
    impact: "One of the pioneers of the 'indigenous missionary' model that now dominates evangelical missions strategy. His work has reached people groups previously considered unreachable.",
    initials: "KPY",
  },
  {
    name: "Loren Cunningham",
    years: "1935–2023",
    region: "Multiple Regions",
    country: "Founded in USA; operates in 180+ nations",
    color: PURPLE,
    role: "Founder of Youth With A Mission (YWAM)",
    story: "Loren Cunningham founded Youth With A Mission in 1960 after a vision of waves of young people flooding every nation. YWAM began with a small group of young volunteers; it grew into one of the largest missions organizations in the world, distinguished by its use of untrained volunteers on short-term missions alongside long-term workers. Its Discipleship Training Schools (DTS) have trained over 2 million students.",
    legacy: "YWAM has over 20,000 full-time volunteers in 180+ nations — the largest missionary organization in the world by worker count. The DTS model has been replicated by dozens of organizations. Cunningham's vision of mobilizing all Christians (not just professional missionaries) for missions has been enormously influential.",
    famous_quote: "God is looking for people who will just say yes. Not 'I'll go if it's convenient.' Just: yes.",
    impact: "YWAM's DTS model has arguably done more to mobilize ordinary Christians for global missions than any other training program in the 20th century.",
    initials: "LC",
  },
];

const PRINCIPLES_MM: { id: string; principle: string; icon: string; missionary: string; explanation: string; application: string }[] = [
  {
    id: "unreached",
    principle: "Go to the Unreached",
    icon: "🌍",
    missionary: "Jim Elliot",
    explanation: "There are still people groups with no access to the gospel. An &ldquo;unreached people group&rdquo; is defined as an ethnic group with less than 2% evangelical Christian presence &mdash; meaning there is no indigenous church capable of evangelizing the rest. Today approximately 3 billion people live in such groups, with no Bible, no church, and no missionary in their language.",
    application: "Pray for one unreached people group by name this week. Look up the Joshua Project or Frontier Ventures to find one.",
  },
  {
    id: "language",
    principle: "Learn the Language, Live the Life",
    icon: "🗣️",
    missionary: "Hudson Taylor & W.C. Townsend",
    explanation: "Real contextualization means becoming genuinely embedded in a culture &mdash; not just visiting it. Cameron Townsend founded Wycliffe Bible Translators on the conviction that every person deserves Scripture in their heart language. Hudson Taylor shocked 19th-century missionaries by adopting Chinese dress and customs. Both saw breakthroughs others missed because they stopped being tourists.",
    application: "Learn one thing about a culture different from your own this week. Not to judge it &mdash; to understand it.",
  },
  {
    id: "suffering",
    principle: "Suffering Is Part of the Call",
    icon: "✝️",
    missionary: "Jim & Elisabeth Elliot",
    explanation: "The cross is not incidental to missions &mdash; it is the shape of missions. Five men were killed on a riverbank in Ecuador in 1956. Their wives and families returned to that same tribe. The story did not end with death; it continued with resurrection. The Huaorani who murdered Jim Elliot later became an elder in the church and baptized Jim&rsquo;s own son.",
    application: "What would you be willing to lose for the gospel? Name it honestly before God.",
  },
  {
    id: "women",
    principle: "Women Are Missionaries Too",
    icon: "💪",
    missionary: "Elisabeth Elliot & Gladys Aylward",
    explanation: "Two of the most impactful missionaries in modern history were women who were underestimated or rejected by institutions. Gladys Aylward was turned away by the China Inland Mission. Elisabeth Elliot was widowed at 29 with a young daughter. Both went anyway. Both saw more fruit than the institutions that dismissed them. Institutional rejection is not God&rsquo;s rejection.",
    application: "Who around you has been dismissed by institutions but shows clear evidence of God&rsquo;s call? How could you encourage them?",
  },
  {
    id: "ordinary",
    principle: "Ordinary People, Extraordinary God",
    icon: "🙏",
    missionary: "Gladys Aylward",
    explanation: "The &ldquo;unqualified&rdquo; domestic servant became one of the most famous missionaries in the history of China. She had no degree, no institutional backing, no money. She had only a call. God&rsquo;s consistent pattern throughout Scripture and history is using the weak to shame the strong &mdash; so that no human being may boast in his presence.",
    application: "What &ldquo;disqualifies&rdquo; you that God might actually use? Bring it to him as an offering rather than an obstacle.",
  },
];

const FIELDS_MM: { id: string; region: string; icon: string; unreached: string; context: string; opportunity: string; organizations: string }[] = [
  {
    id: "muslim",
    region: "The Muslim World",
    icon: "🌙",
    unreached: "Largest bloc of unreached people &mdash; approximately 1.9 billion",
    context: "Spanning North Africa, the Middle East, and Central Asia, the Muslim world represents the single largest concentration of people without access to the gospel. Many nations in this bloc restrict or criminalize Christian witness.",
    opportunity: "Insider movements, diaspora missions among Muslim immigrants in the West, and digital evangelism through Arabic-language media are creating new openings previously unimaginable.",
    organizations: "Frontiers, SAT-7, Arab World Ministries",
  },
  {
    id: "hindu",
    region: "The Hindu World",
    icon: "🪷",
    unreached: "1.1 billion Hindus; less than 1% Christian",
    context: "India and Nepal are home to more unreached people than any other region. Hinduism&rsquo;s caste system has historically made cross-caste evangelism difficult, and much of the church growth has stayed within social boundaries.",
    opportunity: "The caste system is breaking down under economic modernization. Digital evangelism and church-planting movements among lower castes are seeing rapid growth in parts of India.",
    organizations: "Gospel for Asia, India Gospel League",
  },
  {
    id: "buddhist",
    region: "The Buddhist World",
    icon: "🏔️",
    unreached: "520 million Buddhists; very few Christians",
    context: "China, Japan, and much of Southeast Asia are formally or culturally Buddhist. The gospel has advanced rapidly in China despite persecution, but Japan &mdash; one of the most sophisticated nations on earth &mdash; remains one of the least evangelized.",
    opportunity: "Rapid urbanization is breaking down traditional community ties. Youth disillusionment with materialism is creating spiritual openness in major cities across East Asia.",
    organizations: "OMF International, East Asia Outreach",
  },
  {
    id: "tribal",
    region: "Unreached Tribal Peoples",
    icon: "🌿",
    unreached: "Thousands of small people groups with no Scripture in their language",
    context: "In the Amazon basin, the highlands of Papua New Guinea, and remote regions of Africa, thousands of small tribal groups still have no Bible in their mother tongue and no church that speaks their language.",
    opportunity: "The Bible translation movement is closer than ever to its goal of beginning translation in every remaining language. Modern linguistic technology and national translators are accelerating the pace dramatically.",
    organizations: "Wycliffe Bible Translators, SIL International",
  },
  {
    id: "west",
    region: "The Post-Christian West",
    icon: "⛪",
    unreached: "Europe and North America increasingly secular; millions leaving the church",
    context: "Churches are closing across Western Europe at an alarming rate. North America&rsquo;s fastest-growing religious category is &ldquo;none.&rdquo; The West, which sent missionaries to the world, now needs missionaries itself.",
    opportunity: "New monasticism, apologetics ministries, and intentional community formation are reaching people the traditional church no longer can. The Global South church is beginning to send missionaries back to Europe.",
    organizations: "European Mission Fellowship, Alpha",
  },
];

export default function ModernMissionariesPage() {
  type Tab = "missionaries" | "principles" | "fields" | "callyou" | "videos";
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_modern-missionaries_tab", "missionaries");
  const [region, setRegion] = usePersistedState("vine_modern-missionaries_region", "All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = MISSIONARIES.filter(m => region === "All" || m.region === region);
  const missionary = MISSIONARIES.find(m => m.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Modern Missionaries &amp; Their Stories</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The men and women of the last 100 years who left comfort behind to bring the gospel to the ends of the earth. Their lives are evidence that the mission of God is still moving.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>📣</span>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            &ldquo;Go therefore and make disciples of all nations&rdquo; (Matthew 28:19) has been taken seriously by thousands of ordinary people in the last century. These are among the most significant &mdash; not the only ones, but the ones whose stories have inspired the most others to go.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 24, background: CARD, padding: 6, borderRadius: 10, border: `1px solid ${BORDER}` }}>
          {([
            { id: "missionaries" as const, label: "Missionaries", icon: "✝️" },
            { id: "principles" as const, label: "Principles", icon: "🎯" },
            { id: "fields" as const, label: "Fields", icon: "🌍" },
            { id: "callyou" as const, label: "Called?", icon: "🙏" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ]).map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "missionaries" && (
          <div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {REGION_FILTERS.map(r => (
                <button type="button" key={r} onClick={() => setRegion(r)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${region === r ? GREEN : BORDER}`, background: region === r ? `${GREEN}15` : "transparent", color: region === r ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {r}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: missionary ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((m, i) => (
                  <button type="button" key={i} onClick={() => setSelected(selected === m.name ? null : m.name)}
                    style={{ background: selected === m.name ? `${m.color}12` : CARD, border: `1px solid ${selected === m.name ? m.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${m.color}20`, border: `1px solid ${m.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: m.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                        {m.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{m.name}</span>
                          <span style={{ background: `${m.color}15`, color: m.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{m.region}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{m.years} · {m.country}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {missionary && (
                <div style={{ background: CARD, border: `1px solid ${missionary.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${missionary.color}20`, border: `1px solid ${missionary.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: missionary.color, fontWeight: 900, fontSize: 11, flexShrink: 0 }}>
                      {missionary.initials}
                    </div>
                    <div>
                      <h2 style={{ color: missionary.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{missionary.name}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>{missionary.years} · {missionary.country}</div>
                    </div>
                  </div>

                  <div style={{ background: `${missionary.color}08`, border: `1px solid ${missionary.color}15`, borderRadius: 8, padding: 10, marginBottom: 12 }}>
                    <div style={{ color: missionary.color, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>ROLE</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{missionary.role}</p>
                  </div>

                  <div style={{ marginBottom: 12 }}>
                    <div style={{ color: missionary.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>THE STORY</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{missionary.story}</p>
                  </div>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>LEGACY &amp; IMPACT</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{missionary.legacy}</p>
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>FAMOUS QUOTE</div>
                    <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>&ldquo;{missionary.famous_quote}&rdquo;</p>
                  </div>

                  <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                    <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 3 }}>WHY IT MATTERS</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{missionary.impact}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "principles" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7 }}>Five principles distilled from the lives of modern missionaries.</p>
            {PRINCIPLES_MM.map(p => (
              <div key={p.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ margin: 0 }}>{p.icon} {p.principle}</h3>
                  <span style={{ background: `${GREEN}15`, color: GREEN, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>From {p.missionary}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: p.explanation }} />
                <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 14, marginTop: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>APPLY</div>
                  <p style={{ color: TEXT, margin: 0, fontSize: 14 }}>{p.application}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "fields" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7 }}>The five major mission fields of the 21st century and how Christians are engaging them.</p>
            {FIELDS_MM.map(f => (
              <div key={f.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{f.icon}</span>
                  <div>
                    <h3 style={{ margin: 0 }}>{f.region}</h3>
                    <span style={{ color: MUTED, fontSize: 12 }} dangerouslySetInnerHTML={{ __html: f.unreached }} />
                  </div>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: f.context }} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
                  <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>OPPORTUNITY</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{f.opportunity}</p>
                  </div>
                  <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>KEY ORGS</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{f.organizations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "callyou" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7 }}>Personal discernment questions for anyone asking whether God is calling them to missions.</p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ margin: "0 0 12px" }}>Are You Called?</h3>
              <p style={{ color: TEXT, lineHeight: 1.8, margin: "0 0 14px" }}>
                The Great Commission (Matthew 28:18&ndash;20) was not given to a special class of &ldquo;professional missionaries.&rdquo; It was given to the whole church. Every Christian is either a <strong style={{ color: GREEN }}>goer</strong>, a <strong style={{ color: PURPLE }}>sender</strong>, or a <strong style={{ color: TEXT }}>welcomer</strong> &mdash; someone who makes disciples of the nations who have come to them. The question is not whether you are called to the mission. The question is: <em>what is your role?</em>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>GOER</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>Leave your culture and live among another people group to bring the gospel.</p>
                </div>
                <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>SENDER</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>Support goers through prayer, finances, and encouragement. You share in the work.</p>
                </div>
                <div style={{ background: `${BORDER}80`, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>WELCOMER</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>The nations are already coming to your city. Make disciples of the ones God brings to you.</p>
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ margin: "0 0 12px" }}>Signs of a Missionary Call</h3>
              <p style={{ color: TEXT, lineHeight: 1.8, margin: "0 0 14px" }}>
                There is no single formula for recognizing a missionary call, but history and Scripture suggest four consistent indicators. These are not guarantees &mdash; they are questions worth sitting with honestly.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "A burden for a specific people or place", desc: "Not just general compassion, but a specific weight for a people, region, or need that won't leave you alone." },
                  { label: "Willingness to sacrifice comfort", desc: "Not masochism, but a genuine freedom from the idol of ease. The missionary call costs something real." },
                  { label: "Gifting for cross-cultural communication", desc: "An ability to learn, adapt, and communicate across cultural and linguistic distance. This can be developed, but it usually shows early." },
                  { label: "Confirmation from community", desc: "The local church has always been the sending unit. If your community sees no gifts or call in you that you claim to have, pause and listen." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: `${GREEN}15`, border: `1px solid ${GREEN}30`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{item.label}</div>
                      <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ margin: "0 0 12px" }}>Not Everyone Goes Overseas</h3>
              <p style={{ color: TEXT, lineHeight: 1.8, margin: "0 0 14px" }}>
                Missions does not begin on the other side of an ocean. It begins at your doorstep. The unreached world has come to the West in the form of refugees, international students, immigrants, and diaspora communities. Your neighbor, your coworker, the international student eating alone in the dining hall &mdash; these are mission fields that require no passport.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                {[
                  { label: "Your Neighbor", color: GREEN, desc: "Do you know their name? Their country of origin? Their spiritual background?" },
                  { label: "Your Coworker", color: PURPLE, desc: "Eight hours a day, five days a week. That is more time than most missionaries spend with the people they serve." },
                  { label: "International Students", color: "#3B82F6", desc: "400,000+ international students are in the US alone, often lonely and spiritually open in ways they never were at home." },
                ].map((item, i) => (
                  <div key={i} style={{ background: `${item.color}10`, border: `1px solid ${item.color}20`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>{item.label}</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ margin: "0 0 12px" }}>First Steps</h3>
              <p style={{ color: TEXT, lineHeight: 1.8, margin: "0 0 14px" }}>
                Discernment without action is delay. If you sense any movement toward missions &mdash; as a goer, sender, or welcomer &mdash; here are four concrete actions you can take this month.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { step: "Pray for one unreached people group by name", detail: "Use the Joshua Project app or website. Pick a group. Learn their name. Pray for them every day for 30 days.", color: GREEN },
                  { step: "Give to one missions organization", detail: "Even a small monthly gift to Wycliffe, Frontiers, HeartCry, or OMF makes you a sender &mdash; a partner in the work.", color: PURPLE },
                  { step: "Take a short-term trip", detail: "Not as a tourist, but as a learner. Go to serve, to listen, and to discern whether God is calling you to go long-term.", color: "#F59E0B" },
                  { step: "Contact a sending organization", detail: "YWAM, Pioneers, SIM, and dozens of others have assessment processes to help you discern and prepare. The conversation costs nothing.", color: "#3B82F6" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: `${item.color}08`, border: `1px solid ${item.color}15`, borderRadius: 8, padding: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${item.color}20`, border: `1px solid ${item.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ color: item.color, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.step}</div>
                      <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "WU7BC_TS-So", title: "Elisabeth Elliot — Jim Elliot Story", channel: "Christian Missions History", description: "The story of Jim and Elisabeth Elliot — their calling, their sacrifice, and the extraordinary aftermath in which Elisabeth returned to live among the people who killed her husband." },
                  { videoId: "931r5rHafZE", title: "Jim Elliot: Missionary Martyr and a Life of Faith", channel: "Hall of Faith Stories", description: "A documentary-style account of Jim Elliot's life, convictions, and martyrdom — and why his story continues to call a new generation to mission." },
                  { videoId: "gWrH5-HXL-I", title: "He Is No Fool: The Story of Jim Elliot", channel: "Christian Biography", description: "The full story of Jim Elliot — the young man who gave what he could not keep to gain what he could not lose, and the movement his death unleashed." },
                  { videoId: "Mhpiioj7cPI", title: "EVERY Missionary Story #4: Jim Elliot", channel: "EVERY Sermon Series", description: "Jim Elliot's story placed within the broader sweep of missionary history — what made him remarkable and what his example demands of believers today." },
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
