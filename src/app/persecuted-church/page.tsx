"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const REGIONS = ["All", "Middle East", "North Africa", "Asia", "Sub-Saharan Africa", "South Asia", "Central Asia"];

const COUNTRIES = [
  {
    country: "North Korea",
    region: "Asia",
    color: "#EF4444",
    rank: "#1 on WWL 2024",
    population: "26 million",
    christians: "~400,000 (estimated)",
    risk: "Extreme",
    situation: "Christians in North Korea face the most severe persecution in the world. The state demands total allegiance to the Kim regime as a quasi-religious ideology. Possession of a Bible is grounds for execution or life in a labor camp. Approximately 70,000 Christians are believed to be in labor camps, the equivalent of concentration camps. Christians meet in absolute secrecy, often in groups of 3-5 people. The government presents itself as a religion.",
    prayer: "Pray for the estimated 400,000 believers surviving in extreme secrecy. Pray for Kim Jong-un and the regime's leadership. Pray for the estimated 70,000 in labor camps — that God would sustain their faith and reveal himself to them in the darkness.",
    verse: "Hebrews 13:3",
    orgs: ["Open Doors", "Voice of the Martyrs", "Korean Future"],
    initials: "NK",
  },
  {
    country: "Somalia",
    region: "Sub-Saharan Africa",
    color: "#F59E0B",
    rank: "#2 on WWL 2024",
    population: "17 million",
    christians: "~1,000 (estimated)",
    risk: "Extreme",
    situation: "Somalia has virtually no public Christian community. Converting from Islam to Christianity is culturally considered treason and can result in death by family members or Al-Shabaab militants. Christians must practice in absolute secrecy. Foreign aid workers who convert locals to Christianity risk execution. Al-Shabaab controls significant territory and enforces a brutal version of sharia law across much of the country.",
    prayer: "Pray for the tiny community of secret believers — for courage, for fellowship, for protection. Pray for Al-Shabaab leaders and fighters to encounter the living Christ, as Paul encountered Christ on the road to Damascus.",
    verse: "Matthew 5:10",
    orgs: ["Open Doors", "Voice of the Martyrs"],
    initials: "SO",
  },
  {
    country: "Iran",
    region: "Middle East",
    color: PURPLE,
    rank: "#9 on WWL 2024",
    population: "88 million",
    christians: "~800,000 (and growing rapidly)",
    risk: "Very High",
    situation: "Iran has seen one of the fastest-growing underground church movements in the world — despite (or because of) severe persecution. Conversion from Islam is illegal and punishable by death, though most sentences are commuted to prison and flogging. House church leaders face arrest, lengthy prison sentences, and torture. Yet the church continues to grow dramatically, with some estimates suggesting hundreds of thousands have converted since 2000. Iran may be the largest Muslim-background church in the world.",
    prayer: "Pray for the rapidly growing underground church. Pray for imprisoned pastors and house church leaders. Pray for the government officials who arrest and torture believers — that they would become Paul-like converts.",
    verse: "Acts 16:25",
    orgs: ["Open Doors", "Elam Ministries", "SAT-7"],
    initials: "IR",
  },
  {
    country: "Nigeria",
    region: "Sub-Saharan Africa",
    color: "#10B981",
    rank: "#6 on WWL 2024",
    population: "220 million",
    christians: "~95 million (southern Nigeria)",
    risk: "Very High",
    situation: "Nigeria has the largest number of Christian martyrs in the world. Boko Haram in the north and Fulani militant herdsmen across the Middle Belt have killed thousands of Christians, burned hundreds of churches, and displaced millions. The conflict is partly religious and partly ethnic-economic, with Christians disproportionately targeted. Southern Nigeria has large, vibrant evangelical communities, but the north is the site of intense persecution. Nigeria accounts for roughly 20% of global Christian martyrs annually.",
    prayer: "Pray for communities in the Middle Belt — Kaduna, Plateau, Benue, and surrounding states — facing ongoing attacks. Pray for local Christian leaders who have lost family members and continue to minister. Pray for Boko Haram and Fulani militants to encounter Christ.",
    verse: "Revelation 6:9-10",
    orgs: ["Open Doors", "Voice of the Martyrs", "Barnabas Fund"],
    initials: "NG",
  },
  {
    country: "Afghanistan",
    region: "Central Asia",
    color: "#EF4444",
    rank: "#3 on WWL 2024",
    population: "40 million",
    christians: "~10,000-12,000 (estimated)",
    risk: "Extreme",
    situation: "Since the Taliban takeover in August 2021, Afghanistan's tiny Christian community has faced existential threat. The Taliban consider Christianity incompatible with Afghan identity — conversion is seen as apostasy and is punishable by death. Most Afghan Christians who had existed in a semi-tolerated underground during the NATO period fled in the chaotic days of the US withdrawal. Those who remain practice in extreme secrecy.",
    prayer: "Pray for Afghan believers — those who fled to Pakistan, Europe, and the US, and for the few who remained. Pray for Taliban leaders to experience the grace of God. Pray for the small organizations working covertly to support remaining believers.",
    verse: "Psalm 46:1",
    orgs: ["Open Doors", "Voice of the Martyrs", "SAT-7"],
    initials: "AF",
  },
  {
    country: "China",
    region: "Asia",
    color: "#3B82F6",
    rank: "#16 on WWL 2024",
    population: "1.4 billion",
    christians: "~97 million (estimates vary widely: 70-150 million)",
    risk: "High",
    situation: "China has the world's largest underground Christian community. The government allows state-approved Three-Self Patriotic Movement churches but exercises increasing surveillance and control over them. House churches (unregistered) face periodic crackdowns, especially since Xi Jinping's intensification of religious control after 2018. Church leaders are arrested, crosses demolished, and minors under 18 are prohibited from receiving religious instruction. Despite this, the church continues to grow — China may have more Christians than any other country by 2030.",
    prayer: "Pray for Chinese house church leaders who face imprisonment for their faith. Pray for the Three-Self churches that they would hold fast to biblical truth under government pressure. Pray for Xi Jinping. Pray for the unique missionary potential of the Chinese church.",
    verse: "Acts 5:29",
    orgs: ["China Source", "ChinaSource", "Open Doors", "Voice of the Martyrs"],
    initials: "CN",
  },
  {
    country: "Egypt",
    region: "North Africa",
    color: "#F59E0B",
    rank: "#38 on WWL 2024",
    population: "105 million",
    christians: "~10-15 million Copts",
    risk: "High",
    situation: "Egypt's Coptic Orthodox Church is one of the oldest in the world, tracing its founding to the evangelist Mark. Copts face systematic discrimination in employment, government positions, and social life, as well as periodic violent attacks. ISIS-affiliated militants have bombed Coptic churches and killed hundreds in the past decade. The 2017 Palm Sunday attacks killed 45 in two churches. Despite this, Coptic Christianity is remarkably resilient — maintaining ancient liturgical practice and deep theological heritage under centuries of pressure.",
    prayer: "Pray for the Coptic church — one of the oldest Christian communities in the world — as it endures under persistent pressure. Pray for the families of bombing victims. Pray for Egyptian Muslims to be drawn to the Christian communities in their midst.",
    verse: "Isaiah 19:25",
    orgs: ["Open Doors", "Barnabas Fund", "Release International"],
    initials: "EG",
  },
  {
    country: "India",
    region: "South Asia",
    color: "#EC4899",
    rank: "#11 on WWL 2024",
    population: "1.4 billion",
    christians: "~60-80 million",
    risk: "High",
    situation: "Anti-conversion laws in 12 Indian states have been used to persecute Christian evangelists and communities, particularly in BJP-governed states. Hindu nationalist (Hindutva) groups have attacked churches, harassed Christians, and organized 'ghar wapsi' (homecoming) forced reconversion events. Tribal Christians in states like Odisha, Chhattisgarh, and Manipur face severe violence. The 2008 Kandhamal riots killed over 100 Christians and displaced 50,000. Despite this, India's Christian community continues to grow, particularly in tribal regions.",
    prayer: "Pray for Christians in Manipur, Odisha, and Chhattisgarh facing ongoing persecution. Pray for wisdom for Indian church leaders navigating anti-conversion laws. Pray for BJP government officials — that the church's peaceful witness would move them.",
    verse: "1 Peter 3:14",
    orgs: ["Open Doors", "Barnabas Fund", "Gospel for Asia"],
    initials: "IN",
  },
];

const ORGS = [
  { name: "Open Doors", desc: "The world's largest Christian advocacy organization for persecuted believers. Publishes the annual World Watch List ranking the 50 worst countries for Christian persecution. Provides Bibles, training, and emergency relief in 70+ countries.", url: "https://www.opendoorsusa.org/", focus: "Global advocacy + relief" },
  { name: "Voice of the Martyrs", desc: "Founded by Richard Wurmbrand after 14 years in Romanian Communist prisons. Publishes PERSECUTION magazine and provides Bibles, support, and legal defense for persecuted Christians worldwide.", url: "https://www.persecution.com/", focus: "Stories + resources" },
  { name: "Barnabas Fund", desc: "UK-based organization focused specifically on serving the persecuted church through emergency relief, education, and advocacy. Strong focus on Middle East and South Asian contexts.", url: "https://www.barnabasfund.org/", focus: "Emergency relief" },
  { name: "Release International", desc: "UK-based ministry serving persecuted Christians through prayer, advocacy, and practical support. Particularly active in Central Asia and parts of Africa.", url: "https://www.releaseinternational.org/", focus: "Prayer mobilization" },
  { name: "Elam Ministries", desc: "Focused specifically on the Middle East, particularly Iran. Supports the rapidly growing underground Iranian church through discipleship resources, training, and broadcasting.", url: "https://www.elam.com/", focus: "Iran / Middle East" },
];

const WITNESSES = [
  { id: "polycarp-p", name: "Polycarp of Smyrna", era: "c. 69-155", context: "Bishop of Smyrna; disciple of the Apostle John; one of the earliest detailed martyrdom accounts", bio: "Polycarp was bishop of Smyrna and a disciple of the Apostle John — which makes him one of the last direct links between the apostolic generation and the early church. When he was arrested at age 86, the Roman proconsul urged him to renounce Christ and be released. His response is one of the most famous sentences in early Christian history: 'Eighty-six years I have served him, and he has done me no wrong. How then can I blaspheme my King who saved me?' He was burned at the stake, and when the flames reportedly did not consume him, he was stabbed. The Martyrdom of Polycarp is the earliest detailed Christian martyrdom account outside the New Testament.", quote: "Eighty-six years I have served him, and he has done me no wrong. How then can I blaspheme my King who saved me?", contribution: "Demonstrated in death what he had demonstrated in life: that Christian loyalty to Christ cannot be revoked by political power. His martyrdom account became the template for how the early church told the stories of its witnesses." },
  { id: "perpetua", name: "Perpetua and Felicitas", era: "d. 203", context: "Carthage; executed in the arena under Emperor Septimius Severus", bio: "Vibia Perpetua was a 22-year-old noblewoman, nursing mother, and new Christian convert who was arrested in Carthage in 203 AD along with her slave Felicitas (who gave birth days before their execution) and several other catechumens. The Passion of Perpetua and Felicitas — part of which appears to have been written by Perpetua herself in prison — is one of the earliest documents we have written by a Christian woman. She refused repeated appeals from her father to recant, was imprisoned with her newborn, had visions, and was ultimately executed in the arena during games celebrating the emperor's birthday.", quote: "We were condemned to the beasts, and we returned to prison in high spirits. Then came the day of their victory, and they marched from the prison to the amphitheater joyfully as though they were going to heaven.", contribution: "The Passion of Perpetua is one of the most extraordinary early Christian documents — a first-person account of arrest, imprisonment, visions, and impending martyrdom by a young mother who chose death over apostasy. It demonstrates that persecution touched women, slaves, and young mothers, not only male church leaders." },
  { id: "wurmbrand", name: "Richard Wurmbrand", era: "1909-2001", context: "Tortured for Christ (1967); Voice of the Martyrs founder; Romanian Lutheran pastor", bio: "Wurmbrand was a Romanian Jewish convert to Christianity who spent 14 years in Communist prisons — including three years in solitary confinement — for his faith. After his release and emigration to the West, he appeared before the US Senate subcommittee on Communist exploitation of religion, stripped off his shirt to show 18 deep scars from torture, and founded Voice of the Martyrs to advocate for persecuted Christians worldwide. His Tortured for Christ remains the most widely read firsthand account of Communist persecution of Christians.", quote: "The cruelest thing the Communists did to us was not the physical torture — it was trying to make us betray our brothers and sisters. But love is stronger than fear.", contribution: "Founded the modern Western awareness of the persecuted church. Voice of the Martyrs — which he established in 1967 — remains the largest organization in the world dedicated to serving persecuted Christians, operating in 70+ countries." },
  { id: "ten-boom", name: "Corrie ten Boom", era: "1892-1983", context: "The Hiding Place (1971); Dutch Reformed watchmaker who hid Jews during WWII", bio: "Ten Boom hid Jewish refugees in a secret room in her family's watch shop in Haarlem, Netherlands during the Nazi occupation. Betrayed in 1944, she and her family were arrested; her father died in prison days later, her sister Betsie died in Ravensbrück concentration camp. Corrie survived and spent the rest of her long life speaking worldwide about forgiveness and the love of God in the darkest suffering. Her account of meeting a former Nazi guard after the war — and choosing to extend the forgiveness she had just spoken about — is one of the most powerful testimonies to the reality of Christian grace.", quote: "No pit is so deep that He is not deeper still; with Jesus, even in our darkest moments, the best remains and the very best is yet to be.", contribution: "Made the theology of forgiveness in the face of genuine evil credible through personal testimony. The Hiding Place has been translated into dozens of languages and has introduced more people to Christian forgiveness as a response to persecution than any other 20th-century memoir." },
  { id: "elliot-j", name: "Jim Elliot", era: "1927-1956", context: "Martyred by the Auca (Huaorani) people in Ecuador; five missionaries killed January 8, 1956", bio: "Jim Elliot, along with four other missionaries, was killed by the Huaorani people of Ecuador in January 1956 while attempting first contact. His wife Elisabeth Elliot later returned to live among the people who killed her husband — a witness to forgiveness that resulted in the conversion of many, including some who had participated in the killings. Jim's journals, published by Elisabeth as Shadow of the Almighty, contain some of the most searching meditations on martyrdom, mission, and the cost of discipleship in modern evangelical literature.", quote: "He is no fool who gives what he cannot keep to gain what he cannot lose.", contribution: "Became the defining image of evangelical missionary sacrifice in the second half of the 20th century. The Ecuador martyrdoms — and Elisabeth Elliot's subsequent return and forgiveness — inspired a generation of missionaries and gave the American church a contemporary martyrdom narrative." },
];

export default function PerisecutedChurchPage() {
  const [region, setRegion] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"countries" | "witnesses" | "orgs" | "prayer" | "videos">("countries");
  const [selectedWitness, setSelectedWitness] = useState("polycarp-p");
  const witnessItem = WITNESSES.find(w => w.id === selectedWitness)!;

  const filtered = COUNTRIES.filter(c => region === "All" || c.region === region);
  const country = COUNTRIES.find(c => c.country === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Persecuted Church</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            More Christians were martyred for their faith in the 20th century than in all previous centuries combined. The global church is suffering — and praying with them is one of the most important things we can do.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "countries" as const, label: "Countries", icon: "🌍" },
            { id: "witnesses" as const, label: "Witnesses", icon: "✝️" },
            { id: "orgs" as const, label: "Organizations", icon: "🤝" },
            { id: "prayer" as const, label: "How to Pray", icon: "🙏" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "countries" && (
          <div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {REGIONS.map(r => (
                <button key={r} onClick={() => setRegion(r)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${region === r ? GREEN : BORDER}`, background: region === r ? `${GREEN}15` : "transparent", color: region === r ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {r}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: country ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((c, i) => (
                  <button key={i} onClick={() => setSelected(selected === c.country ? null : c.country)}
                    style={{ background: selected === c.country ? `${c.color}12` : CARD, border: `1px solid ${selected === c.country ? c.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${c.color}20`, border: `1px solid ${c.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>
                        {c.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{c.country}</span>
                          <span style={{ background: `${c.color}15`, color: c.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{c.risk}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{c.region} · {c.rank}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 11, flexShrink: 0 }}>{c.christians}</span>
                    </div>
                  </button>
                ))}
              </div>

              {country && (
                <div style={{ background: CARD, border: `1px solid ${country.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${country.color}20`, border: `1px solid ${country.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: country.color, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>
                      {country.initials}
                    </div>
                    <div>
                      <h2 style={{ color: country.color, fontWeight: 900, fontSize: 20, margin: "0 0 2px" }}>{country.country}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>{country.rank} · {country.region}</div>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                    <div style={{ background: `${country.color}08`, border: `1px solid ${country.color}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: country.color, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>POPULATION</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{country.population}</p>
                    </div>
                    <div style={{ background: `${country.color}08`, border: `1px solid ${country.color}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: country.color, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>CHRISTIANS</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{country.christians}</p>
                    </div>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{country.situation}</p>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>🙏 HOW TO PRAY</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{country.prayer}</p>
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>SCRIPTURE</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0 }}><VerseRef reference={country.verse} /></p>
                  </div>

                  <div>
                    <div style={{ color: MUTED, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>SUPPORT ORGANIZATIONS</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {country.orgs.map(org => (
                        <span key={org} style={{ background: `${BORDER}`, color: MUTED, padding: "2px 10px", borderRadius: 8, fontSize: 11 }}>{org}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "witnesses" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {WITNESSES.map(v => (
                <button key={v.id} onClick={() => setSelectedWitness(v.id)}
                  style={{ background: selectedWitness === v.id ? PURPLE : CARD, border: `1px solid ${selectedWitness === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{witnessItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{witnessItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{witnessItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{witnessItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{witnessItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Legacy and Contribution</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{witnessItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "orgs" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These organizations are doing the most effective work serving the persecuted church globally — through prayer mobilization, emergency relief, Bible distribution, and advocacy.
              </p>
            </div>
            {ORGS.map((org, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{org.name}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{org.focus}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{org.desc}</p>
                <a href={org.url} target="_blank" rel="noopener noreferrer"
                  style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}25`, color: GREEN, padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}>
                  🌐 Visit {org.name}
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === "prayer" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 10 }}>Remember them as if you were with them</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Hebrews 13:3 commands: Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body. This is not optional sentiment — it is a command of Christ. The suffering of your brothers and sisters in North Korea, Nigeria, and Iran is not distant news. It is family.
              </p>
            </div>
            {[
              { title: "Pray for Specific Countries", body: "Don't pray in vague abstractions. Pray for Christians in North Korea's labor camps by name if you can find them. Pray for the house churches of Iran. Pray for the churches bombed in Egypt. Specificity honors the particularity of real suffering. Open Doors publishes specific prayer requests weekly at opendoorsusa.org/pray." },
              { title: "Pray With, Not Just For", body: "Hebrews 13:3 says 'as though in prison with them.' This requires imagination — entering mentally and emotionally into their situation. What would it feel like to not be able to own a Bible? To know that your children cannot attend church? To be arrested for sharing the gospel? Let that imaginative act form your prayer." },
              { title: "Pray for Persecutors", body: "Jesus commands prayer for those who persecute (Matthew 5:44). Kim Jong-un, the Taliban's leadership, ISIS commanders — these are people who need the gospel. Paul was a persecutor of the church before Damascus. The most dramatic conversions in the global South today are often former persecutors. Pray for them." },
              { title: "Pray for Endurance, Not Just Rescue", body: "The most common request from the persecuted church is not for the persecution to stop but for endurance to endure it faithfully. Don't project your desire for comfort onto their prayers. Many persecuted Christians report that persecution deepened their faith in ways that comfortable Christianity never could." },
              { title: "Join a Prayer Community", body: "Open Doors publishes a 'World Watch List Prayer Guide' each January. Voice of the Martyrs sends monthly prayer updates. Sign up, print it, and pray through it. Or set aside the first Friday of each month as a day of prayer for the persecuted church — and fast if you're able." },
              { title: "Give to Organizations Supporting the Persecuted", body: "Prayer and giving are not either/or. Open Doors, Voice of the Martyrs, Barnabas Fund, and Elam Ministries all do verifiable, effective work. Giving is itself an act of solidarity — it says: your suffering matters to us. Consider a regular monthly gift designated for persecuted church support." },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Documentaries, testimonies, and teachings on the persecuted church — stories that call us to stand with our suffering brothers and sisters.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "_xo_umOy2Ik", title: "When Faith Is Tested — Stories from the Persecuted Church", channel: "Voice of the Martyrs", description: "Todd Nettleton of Voice of the Martyrs shares first-hand stories of believers whose faith has been tested by violence, imprisonment, and loss — and who have not abandoned Christ." },
                  { videoId: "mFtsQES8txw", title: "Faith Under Fire: Stories of Persecuted Christians", channel: "Voice of the Martyrs (Todd Nettleton)", description: "A series of powerful testimonies from persecuted believers around the world, drawn from decades of field reporting by Voice of the Martyrs." },
                  { videoId: "JZe3oVZUifw", title: "Life as a Persecuted Christian in North Korea: Bae's Story", channel: "Open Doors UK & Ireland", description: "Bae faces a lifetime sentence of hard labor for her faith in North Korea — ranked the world's most dangerous country for Christians. Her story calls the global church to pray." },
                  { videoId: "-F8ITaF-Yxg", title: "Persecuted Pastor Brutally Beaten, Imprisoned Before 'Mind-Blowing' Miracle", channel: "CBN / Christian News", description: "A pastor's harrowing account of imprisonment and violence for his faith — and the miraculous story of what God did in and through it. A testimony of the power of faithfulness under fire." },
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
