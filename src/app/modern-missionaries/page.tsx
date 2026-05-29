"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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
    legacy: "The Inn of the Sixth Happiness (1958 film starring Ingrid Bergman) made her famous globally, though Aylward disliked many aspects of the film. She returned to Taiwan in 1958 and worked with children there until her death in 1970. Her story of an 'unqualified' woman who was used mightily by God remains one of the most inspiring missionary biographies.",
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

export default function ModernMissionariesPage() {
  const [region, setRegion] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = MISSIONARIES.filter(m => region === "All" || m.region === region);
  const missionary = MISSIONARIES.find(m => m.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Modern Missionaries & Their Stories</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The men and women of the last 100 years who left comfort behind to bring the gospel to the ends of the earth. Their lives are evidence that the mission of God is still moving.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>📣</span>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            "Go therefore and make disciples of all nations" (Matthew 28:19) has been taken seriously by thousands of ordinary people in the last century. These are among the most significant — not the only ones, but the ones whose stories have inspired the most others to go.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {REGION_FILTERS.map(r => (
            <button key={r} onClick={() => setRegion(r)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${region === r ? GREEN : BORDER}`, background: region === r ? `${GREEN}15` : "transparent", color: region === r ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {r}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: missionary ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((m, i) => (
              <button key={i} onClick={() => setSelected(selected === m.name ? null : m.name)}
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
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>LEGACY & IMPACT</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{missionary.legacy}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>FAMOUS QUOTE</div>
                <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>"{missionary.famous_quote}"</p>
              </div>

              <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 3 }}>WHY IT MATTERS</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{missionary.impact}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
