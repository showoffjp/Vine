"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

interface CountryPrayer {
  id: string;
  flag: string;
  country: string;
  region: string;
  population: string;
  christians: string;
  christianPercent: number;
  unreachedGroups: number;
  status: "Open" | "Restricted" | "Persecuted";
  prayerPoints: string[];
  recentNews: string;
  verse: string;
  verseRef: string;
  missionaryPresence: "Strong" | "Moderate" | "Minimal" | "None";
}

interface PrayerMovement {
  id: string;
  name: string;
  founded: number;
  founder: string;
  description: string;
  impact: string;
  website_hint: string;
}

interface PrayerScripture {
  id: string;
  ref: string;
  text: string;
  theme: string;
  application: string;
}

interface VoiceWPrayer {
  id: string;
  name: string;
  era: string;
  context: string;
  bio: string;
  quote: string;
  contribution: string;
}

type Tab = "countries" | "movements" | "scripture" | "voices" | "videos";

const WP_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "Prayer and the Advance of the Gospel", channel: "Gospel in Life", description: "Keller on how prayer for the nations connects to God's redemptive purpose for all peoples." },
  { videoId: "ACZbpLkY8To", title: "The Global Prayer Movement", channel: "Ligonier Ministries", description: "The story of how 24-7 prayer movements around the world are mobilizing the church for mission and intercession." },
  { videoId: "fJnGJN6laqE", title: "Praying for the Unreached — Operation World", channel: "Desiring God", description: "How to pray systematically for every nation, people group, and region — and why it matters for global missions." },
  { videoId: "Z8lkuuhVkOI", title: "The Persecuted Church — How to Pray for Suffering Christians", channel: "Open Doors", description: "How to intercede meaningfully for Christians facing persecution, imprisonment, and martyrdom around the world." },
];

const countries: CountryPrayer[] = [
  {
    id: "c1", flag: "🇮🇳", country: "India", region: "South Asia",
    population: "1.43B", christians: "28M", christianPercent: 2.3,
    unreachedGroups: 2200, status: "Restricted",
    prayerPoints: [
      "For protection of believers in Hindu-majority states where conversion is criminalized",
      "For the Dalit community — the most responsive to the Gospel — to receive deep discipleship",
      "For house church networks in north India to multiply without government interference",
      "For Indian missionaries being sent into the 10/40 Window",
    ],
    recentNews: "Christian pastors in Uttar Pradesh faced increased harassment in 2025. Underground churches growing rapidly in rural Bihar.",
    verse: "The harvest is plentiful but the workers are few.",
    verseRef: "Matthew 9:37",
    missionaryPresence: "Moderate",
  },
  {
    id: "c2", flag: "🇨🇳", country: "China", region: "East Asia",
    population: "1.41B", christians: "100M", christianPercent: 7.1,
    unreachedGroups: 490, status: "Persecuted",
    prayerPoints: [
      "For the underground church to remain strong under increasing surveillance and pressure",
      "For Chinese Christians to continue their extraordinary missionary sending movement",
      "For the Uyghur, Tibetan, and other minority peoples who have almost no access to the Gospel",
      "For registered Three-Self churches to speak prophetically despite government restriction",
    ],
    recentNews: "China's house church movement continues to be among the fastest-growing in the world despite crackdowns. Estimates suggest 2M+ come to faith annually.",
    verse: "Do not be afraid of those who kill the body but cannot kill the soul.",
    verseRef: "Matthew 10:28",
    missionaryPresence: "Minimal",
  },
  {
    id: "c3", flag: "🇮🇷", country: "Iran", region: "Middle East",
    population: "89M", christians: "800K", christianPercent: 0.9,
    unreachedGroups: 50, status: "Persecuted",
    prayerPoints: [
      "For the fastest-growing church in the world (per capita) to continue expanding",
      "For Persian believers imprisoned for their faith — many in Evin Prison",
      "For satellite broadcasts and digital evangelism reaching millions inside Iran",
      "For protection of converts from Muslim backgrounds who face death threats from family",
    ],
    recentNews: "Iranians continue to come to faith in record numbers via satellite TV and internet evangelism. The Iranian church outside Iran reports unprecedented baptisms.",
    verse: "For I am not ashamed of the gospel, because it is the power of God that brings salvation.",
    verseRef: "Romans 1:16",
    missionaryPresence: "Minimal",
  },
  {
    id: "c4", flag: "🇳🇬", country: "Nigeria", region: "West Africa",
    population: "223M", christians: "95M", christianPercent: 43,
    unreachedGroups: 180, status: "Restricted",
    prayerPoints: [
      "For an end to the Boko Haram and ISWAP violence targeting Christians in the north",
      "For unity between the historically divided Christian south and Muslim north",
      "For Nigerian missionaries — one of the world's largest missionary-sending nations",
      "For deep discipleship to counter prosperity gospel influence in Nigerian churches",
    ],
    recentNews: "Over 5,000 Christians killed in Nigeria in 2024, making it among the deadliest countries for believers. The Nigerian church continues to send missionaries globally.",
    verse: "The Lord will fight for you; you need only to be still.",
    verseRef: "Exodus 14:14",
    missionaryPresence: "Strong",
  },
  {
    id: "c5", flag: "🇸🇦", country: "Saudi Arabia", region: "Middle East",
    population: "37M", christians: "1.2M", christianPercent: 3.3,
    unreachedGroups: 15, status: "Persecuted",
    prayerPoints: [
      "For the 1.2M+ Christian migrant workers who have no freedom to worship openly",
      "For Saudi Arabians who secretly come to faith online and through personal witness",
      "For gradual cultural openings to be used for Gospel witness",
      "For protection of those distributing Scriptures digitally inside the kingdom",
    ],
    recentNews: "Saudi citizens who convert from Islam still face severe social and legal consequences. A growing number of secret believers are connected through encrypted apps.",
    verse: "Ask me and I will give you the nations as your inheritance.",
    verseRef: "Psalm 2:8",
    missionaryPresence: "None",
  },
  {
    id: "c6", flag: "🇰🇵", country: "North Korea", region: "East Asia",
    population: "26M", christians: "400K", christianPercent: 1.5,
    unreachedGroups: 4, status: "Persecuted",
    prayerPoints: [
      "For believers worshipping in absolute secrecy — discovered believers face labor camps",
      "For North Korean defectors to hear the Gospel in China and South Korea",
      "For the estimated 50,000–70,000 Christians in labor camps",
      "For a miracle opening of this most closed nation on earth",
    ],
    recentNews: "North Korea remains ranked #1 on the World Watch List for Christian persecution. Bibles are contraband. Entire families are imprisoned when one member is discovered.",
    verse: "He heals the brokenhearted and binds up their wounds.",
    verseRef: "Psalm 147:3",
    missionaryPresence: "None",
  },
  {
    id: "c7", flag: "🇧🇷", country: "Brazil", region: "Latin America",
    population: "215M", christians: "183M", christianPercent: 85,
    unreachedGroups: 42, status: "Open",
    prayerPoints: [
      "For the Brazilian evangelical church to lead with integrity amid scandals that harm witness",
      "For unreached indigenous peoples in the Amazon — over 100 groups remain uncontacted",
      "For Brazil's extraordinary missionary movement to be sustained and multiplied",
      "For revival that reaches the favelas with the full Gospel of justice and transformation",
    ],
    recentNews: "Brazil is now the 2nd largest missionary-sending nation in the world. Over 34,000 Brazilian missionaries serve in 170+ countries.",
    verse: "How beautiful are the feet of those who bring good news!",
    verseRef: "Romans 10:15",
    missionaryPresence: "Strong",
  },
  {
    id: "c8", flag: "🇪🇹", country: "Ethiopia", region: "East Africa",
    population: "126M", christians: "70M", christianPercent: 56,
    unreachedGroups: 45, status: "Restricted",
    prayerPoints: [
      "For an end to the Tigray conflict and reconciliation between ethnic groups",
      "For the Oromo, Somali, and Afar peoples — many unreached and Muslim majority",
      "For the ancient Ethiopian Orthodox Church to experience evangelical renewal",
      "For Ethiopian churches growing explosively to develop deep discipleship",
    ],
    recentNews: "Ethiopian evangelical churches are among the fastest-growing globally. Despite civil conflict, over 1M new believers baptized in 2024.",
    verse: "Ethiopia will stretch out her hands to God.",
    verseRef: "Psalm 68:31",
    missionaryPresence: "Moderate",
  },
  {
    id: "c9", flag: "🇮🇩", country: "Indonesia", region: "Southeast Asia",
    population: "277M", christians: "28M", christianPercent: 10,
    unreachedGroups: 310, status: "Restricted",
    prayerPoints: [
      "For Indonesian Christians facing local church closure orders and mob intimidation",
      "For the Sundanese and Javanese — the two largest unreached people groups in the world",
      "For Papuan believers to be discipled and equipped to reach their own people",
      "For Indonesian churches pioneering mission to neighboring Muslim nations",
    ],
    recentNews: "Indonesia saw a significant increase in church closure orders in 2025. Underground church networks in Java continue to grow despite pressure.",
    verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    verseRef: "Proverbs 18:10",
    missionaryPresence: "Moderate",
  },
  {
    id: "c10", flag: "🇺🇦", country: "Ukraine", region: "Eastern Europe",
    population: "44M", christians: "35M", christianPercent: 80,
    unreachedGroups: 6, status: "Open",
    prayerPoints: [
      "For an end to the war and justice and restoration for those who have suffered",
      "For Ukrainian churches who are the primary providers of humanitarian aid in the country",
      "For Gospel witness among Russian soldiers and in Russian-occupied territories",
      "For believers displaced by war to find community and continue following Jesus",
    ],
    recentNews: "Ukrainian churches have maintained extraordinary ministry during the war. Over 3,000 churches actively provide aid, counsel, and Gospel witness to displaced people.",
    verse: "God is our refuge and strength, an ever-present help in trouble.",
    verseRef: "Psalm 46:1",
    missionaryPresence: "Strong",
  },
  {
    id: "c11", flag: "🇦🇫", country: "Afghanistan", region: "Central Asia",
    population: "41M", christians: "12K", christianPercent: 0.03,
    unreachedGroups: 60, status: "Persecuted",
    prayerPoints: [
      "For the tiny, hidden church — some of the world's most courageous believers",
      "For Afghans encountering Jesus through dreams, which are widely reported",
      "For Afghan refugees in Pakistan, Iran, and Europe to hear the Gospel",
      "For the Pashtun people — 45M across Afghanistan and Pakistan — still largely unreached",
    ],
    recentNews: "Since Taliban return to power in 2021, the known church has gone entirely underground. Multiple believers executed. Yet reports of new faith continue to emerge.",
    verse: "Do not be afraid of those who kill the body but cannot kill the soul.",
    verseRef: "Matthew 10:28",
    missionaryPresence: "None",
  },
  {
    id: "c12", flag: "🇯🇵", country: "Japan", region: "East Asia",
    population: "125M", christians: "1.9M", christianPercent: 1.5,
    unreachedGroups: 30, status: "Open",
    prayerPoints: [
      "For breakthrough in one of the world's least-reached developed nations",
      "For Japanese Christians to boldly share faith in a culture that values privacy and conformity",
      "For healing from the shame and trauma driving Japan's suicide crisis",
      "For diaspora Japanese around the world to encounter Christ and bring faith home",
    ],
    recentNews: "Japan remains one of the least evangelized nations in Asia. Church attendance has been slowly declining. Youth ministry is showing the most promising growth points.",
    verse: "The Lord is not slow in keeping his promise... not wanting anyone to perish.",
    verseRef: "2 Peter 3:9",
    missionaryPresence: "Moderate",
  },
  {
    id: "c13", flag: "🇵🇰", country: "Pakistan", region: "South Asia",
    population: "231M", christians: "4M", christianPercent: 1.8,
    unreachedGroups: 400, status: "Persecuted",
    prayerPoints: [
      "For Christians facing blasphemy laws that are frequently weaponized against minorities",
      "For the Punjabi, Sindhi, and Pashtun peoples — the majority largely unreached",
      "For Pakistani Christian refugees in other countries to find churches and community",
      "For bold Pakistani Christians witnessing to Muslim neighbors at great personal risk",
    ],
    recentNews: "Pakistan's blasphemy laws continue to be used against Christians. In 2024, multiple churches were burned in Jaranwala — thousands displaced.",
    verse: "For our struggle is not against flesh and blood, but against... spiritual forces of evil.",
    verseRef: "Ephesians 6:12",
    missionaryPresence: "Minimal",
  },
  {
    id: "c14", flag: "🇲🇦", country: "Morocco", region: "North Africa",
    population: "37M", christians: "8K", christianPercent: 0.02,
    unreachedGroups: 12, status: "Persecuted",
    prayerPoints: [
      "For Moroccan believers — almost all converts from Islam — who face severe family and legal pressure",
      "For the Amazigh (Berber) people, many of whom are showing unusual openness to the Gospel",
      "For satellite broadcasts and online evangelism reaching Moroccans in their own dialect",
      "For the diaspora Moroccan church in Europe to send workers back to Morocco",
    ],
    recentNews: "Morocco has one of North Africa's fastest-growing Christian populations despite all converts being Muslim-background believers with no freedom to gather publicly.",
    verse: "And this gospel of the kingdom will be preached in the whole world as a testimony to all nations.",
    verseRef: "Matthew 24:14",
    missionaryPresence: "Minimal",
  },
  {
    id: "c15", flag: "🇸🇸", country: "South Sudan", region: "Sub-Saharan Africa",
    population: "11M", christians: "7M", christianPercent: 63,
    unreachedGroups: 25, status: "Restricted",
    prayerPoints: [
      "For an end to ongoing civil conflict and ethnic violence devastating local communities",
      "For the South Sudanese church to become a force for reconciliation across tribal lines",
      "For protection and resilience of pastors leading churches in active conflict zones",
      "For the unreached Muslim communities in the north and west of the country",
    ],
    recentNews: "South Sudan remains in humanitarian crisis. Despite suffering, local church leaders report remarkable growth and transformation among displaced communities.",
    verse: "Blessed are the peacemakers, for they will be called children of God.",
    verseRef: "Matthew 5:9",
    missionaryPresence: "Moderate",
  },
  {
    id: "c16", flag: "🇻🇳", country: "Vietnam", region: "Southeast Asia",
    population: "98M", christians: "8M", christianPercent: 8,
    unreachedGroups: 48, status: "Restricted",
    prayerPoints: [
      "For house churches operating under government surveillance and periodic crackdowns",
      "For the H'mong, Khmer, and other ethnic minorities — the most responsive people groups",
      "For Vietnamese church leaders imprisoned for their faith",
      "For official registered churches to have freedom to disciple and evangelize",
    ],
    recentNews: "Vietnam's house church movement among ethnic minorities is one of Southeast Asia's most remarkable growth stories, despite government pressure. Tens of thousands baptized annually.",
    verse: "The light shines in the darkness, and the darkness has not overcome it.",
    verseRef: "John 1:5",
    missionaryPresence: "Minimal",
  },
  {
    id: "c17", flag: "🇹🇷", country: "Turkey", region: "Middle East",
    population: "85M", christians: "170K", christianPercent: 0.2,
    unreachedGroups: 30, status: "Restricted",
    prayerPoints: [
      "For the tiny Turkish church — one of Christianity's birthplaces now with less than 0.2% Christians",
      "For Syrian refugees in Turkey — millions displaced and many meeting Christ through aid workers",
      "For protection of Turkish believers who face social ostracism and occasional violence",
      "For the Kurds — millions in Turkey with growing openness to the Gospel",
    ],
    recentNews: "Turkey continues to see gradual church growth despite intense pressure. Kurdish communities inside Turkey are showing increased openness to the Gospel.",
    verse: "Where two or three gather in my name, there am I with them.",
    verseRef: "Matthew 18:20",
    missionaryPresence: "Minimal",
  },
  {
    id: "c18", flag: "🇰🇪", country: "Kenya", region: "East Africa",
    population: "55M", christians: "38M", christianPercent: 69,
    unreachedGroups: 40, status: "Open",
    prayerPoints: [
      "For Kenya to fulfill its calling as a missionary-sending hub for East Africa",
      "For the Somali and Borana peoples in the north — Muslim majority and largely unreached",
      "For Kenyan churches to reach across ethnic lines after the 2007 post-election violence",
      "For Christian leaders to model integrity in a country with deep corruption challenges",
    ],
    recentNews: "Kenya sends missionaries to 40+ nations. Nairobi is home to some of Africa's largest churches. Al-Shabaab attacks continue to threaten Christians in the northeast.",
    verse: "For we are God's handiwork, created in Christ Jesus to do good works.",
    verseRef: "Ephesians 2:10",
    missionaryPresence: "Strong",
  },
];

const PRAYER_MOVEMENTS: PrayerMovement[] = [
  {
    id: "m1",
    name: "24/7 Prayer",
    founded: 1999,
    founder: "Pete Greig",
    description: "A non-stop, night-and-day prayer movement that began in a small town in England and spread to over 100 nations. Known for its raw, honest, creative approach to intercession and its work among the poor.",
    impact: "Prayer rooms in 100+ nations, thousands of young people mobilized, Red Moon Rising movement launched globally.",
    website_hint: "24-7prayer.com",
  },
  {
    id: "m2",
    name: "International House of Prayer",
    founded: 1999,
    founder: "Mike Bickle",
    description: "A 24/7 prayer and worship ministry based in Kansas City, Missouri. Combines intercession with prophetic worship and training programs. Has become one of the most influential prayer centers in the modern charismatic world.",
    impact: "Continuous worship and prayer since 1999, thousands trained annually, IHOPU school of ministry established.",
    website_hint: "ihopkc.org",
  },
  {
    id: "m3",
    name: "World Prayer Center",
    founded: 1998,
    founder: "Ted Haggard & C. Peter Wagner",
    description: "Founded in Colorado Springs as a hub for global prayer networks and spiritual mapping. Sought to connect prayer movements worldwide and coordinate intercession for unreached peoples and nations.",
    impact: "Connected global prayer networks, produced prayer resources for unreached peoples, hosted major prayer summits.",
    website_hint: "worldprayercenter.org",
  },
  {
    id: "m4",
    name: "Concerts of Prayer International",
    founded: 1988,
    founder: "David Bryant",
    description: "A movement calling the church to united, extraordinary prayer for spiritual awakening and world evangelization. Known for its Concert of Prayer format that brings congregations together across denominational lines.",
    impact: "Unified thousands of congregations in prayer, developed the Seek God for the City prayer guide, mobilized prayer for unreached peoples.",
    website_hint: "prayeroncall.org",
  },
  {
    id: "m5",
    name: "Prayercast",
    founded: 2009,
    founder: "Team-led (no single founder)",
    description: "An online video prayer ministry producing high-quality documentary-style videos for every nation on earth. Uses stunning visuals, facts, and Scripture to guide believers through focused intercession for specific countries and peoples.",
    impact: "Videos for 200+ nations, millions of views globally, widely used in churches and prayer meetings for world intercession.",
    website_hint: "prayercast.com",
  },
  {
    id: "m6",
    name: "Global Day of Prayer",
    founded: 2001,
    founder: "Graham Power",
    description: "An annual worldwide prayer event originating in Cape Town, South Africa, culminating on Pentecost Sunday. Unites believers from every nation in a single day of repentance and intercession for the world.",
    impact: "Hundreds of millions of believers participating in 220 nations annually, among the largest coordinated prayer events in history.",
    website_hint: "globaldayofprayer.com",
  },
];

const PRAYER_SCRIPTURE: PrayerScripture[] = [
  {
    id: "s1",
    ref: "Matthew 9:37-38",
    text: "The harvest is plentiful but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.",
    theme: "The Harvest and Laborers",
    application: "Pray specifically for God to call and send missionaries to the least-reached nations. Intercede for those sensing a call to go.",
  },
  {
    id: "s2",
    ref: "Isaiah 56:7",
    text: "These I will bring to my holy mountain and give them joy in my house of prayer. Their burnt offerings and sacrifices will be accepted on my altar; for my house will be called a house of prayer for all nations.",
    theme: "House of Prayer for All Nations",
    application: "Pray that your church becomes a genuine house of prayer for the nations. Ask God to stir global intercession in every local congregation.",
  },
  {
    id: "s3",
    ref: "Psalm 67:3-5",
    text: "May the peoples praise you, God; may all the peoples praise you. May the nations be glad and sing for joy, for you rule the peoples with equity and guide the nations of the earth.",
    theme: "Let All Peoples Praise",
    application: "Intercede for worship to break out among unreached people groups. Pray for indigenous worship expressions to rise in every tongue and tribe.",
  },
  {
    id: "s4",
    ref: "Revelation 7:9-10",
    text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb. They cried out in a loud voice: 'Salvation belongs to our God, who sits on the throne, and to the Lamb!'",
    theme: "Every Nation Before the Throne",
    application: "Let this vision fuel your prayers. Every people group represented in that multitude must first be reached. Pray with the end in view.",
  },
  {
    id: "s5",
    ref: "Romans 10:14-15",
    text: "How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them? And how can anyone preach unless they are sent?",
    theme: "How Shall They Hear?",
    application: "Pray for the chain of mission to remain unbroken — senders, goers, proclaimers. Ask God to raise up every link needed to reach the unreached.",
  },
  {
    id: "s6",
    ref: "1 Timothy 2:1-4",
    text: "I urge, then, first of all, that petitions, prayers, intercession and thanksgiving be made for all people — for kings and all those in authority... This is good, and pleases God our Savior, who wants all people to be saved and to come to a knowledge of the truth.",
    theme: "Pray for All People",
    application: "Pray for governments, leaders, and authorities in restricted nations. Ask God to open doors through political change and for His will to be done in every capital city.",
  },
];

const VOICES_WPRAYER: VoiceWPrayer[] = [
  {
    id: "v1",
    name: "E.M. Bounds",
    era: "1835-1913",
    context: "American Methodist pastor and author, Civil War chaplain",
    bio: "Edward McKendree Bounds spent the last 17 years of his life rising at 4am to pray for three hours every morning. He wrote eight books on prayer, most published after his death. His life was a living argument for everything he wrote.",
    quote: "Prayer is not preparation for the work. Prayer is the work.",
    contribution: "His book Power Through Prayer remains one of the most widely read works on intercession ever written, challenging the church to treat prayer as the central activity of ministry rather than its supplement.",
  },
  {
    id: "v2",
    name: "Reginald Heber",
    era: "1783-1826",
    context: "Anglican bishop, hymn writer, missionary to India",
    bio: "Reginald Heber served as Bishop of Calcutta from 1823 until his death at 43. He was one of the first voices in the English church to stir missionary awareness through hymnody, writing poetry that shaped how the church prayed for and imagined the unreached world.",
    quote: "From Greenland's icy mountains, from India's coral strand — where Afric's sunny fountains roll down their golden sand — from many an ancient river, from many a palmy plain, they call us to deliver their land from error's chain.",
    contribution: "His hymn 'From Greenland's Icy Mountains' became one of the great missionary mobilization hymns of the 19th century, planting the global vision of the Great Commission in the hearts of ordinary congregations.",
  },
  {
    id: "v3",
    name: "Cameron Townsend",
    era: "1896-1982",
    context: "Founder of Wycliffe Bible Translators and SIL International",
    bio: "William Cameron Townsend went to Guatemala as a Bible salesman and discovered that millions of indigenous people had no Scripture in their language. He learned Cakchiquel, translated the New Testament, and then founded the largest Bible translation organization in history.",
    quote: "The greatest missionary is the Bible in the mother tongue. It never needs a furlough, is never considered a foreigner.",
    contribution: "Townsend's vision — that every people group deserves Scripture in their own language — gave birth to Wycliffe Bible Translators and SIL, which have now produced translations for over 700 languages with work ongoing in 2,000 more.",
  },
  {
    id: "v4",
    name: "Patrick Johnstone",
    era: "1934-present",
    context: "Missiologist, WEC International, author of Operation World",
    bio: "Patrick Johnstone served as a missionary in Africa and spent decades compiling and updating Operation World, the definitive prayer guide to every nation on earth. His statistical and spiritual analysis of global mission has informed the prayer strategies of churches worldwide.",
    quote: "Every Christian should be a world Christian. Not everyone can go, but everyone can pray — and prayer is the most powerful thing any believer can do for the unreached.",
    contribution: "Operation World, first published in 1974, has shaped how the global church prays for nations for over 50 years. Johnstone's meticulous research transformed vague concern into informed, strategic intercession.",
  },
  {
    id: "v5",
    name: "Pete Greig",
    era: "1966-present",
    context: "Co-founder of 24/7 Prayer, pastor, author",
    bio: "Pete Greig started a prayer room in Chichester, England in 1999 that was never meant to last more than a weekend. It ran continuously for months, then spread to dozens of nations. He went on to author some of the most important books on prayer of the 21st century.",
    quote: "The church that prays together does extraordinary things. Not because of the power of prayer, but because of the power of God who answers prayer.",
    contribution: "Greig's 24/7 Prayer movement and books like Red Moon Rising and God on Mute have revived grassroots prayer culture across generations, particularly among young people who had never experienced sustained intercession.",
  },
];

const regions = ["All Regions", "South Asia", "East Asia", "Middle East", "West Africa", "East Africa", "Latin America", "Southeast Asia", "Eastern Europe", "Central Asia"];
const statusColors = { Open: "#3a7d56", Restricted: "#F59E0B", Persecuted: "#EF4444" };
const missionaryColors = { Strong: "#3a7d56", Moderate: "#3B82F6", Minimal: "#F59E0B", None: "#EF4444" };

export default function WorldPrayerPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_world-prayer_tab", "countries");
  const [prayedFor, setPrayedFor] = useState<Set<string>>(() => {
    try { const p = localStorage.getItem("vine_world_prayer_prayed"); return p ? new Set(JSON.parse(p)) : new Set(); } catch { return new Set(); }
  });
  const [savedCountries, setSavedCountries] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_world_prayer_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [selected, setSelected] = useState<CountryPrayer | null>(null);
  const [filterRegion, setFilterRegion] = usePersistedState("vine_world-prayer_filter_region", "All Regions");
  const [filterStatus, setFilterStatus] = usePersistedState("vine_world-prayer_filter_status", "All");
  const [search, setSearch] = useState("");
  const [prayerLog, setPrayerLog] = useState<{ countryId: string; date: string }[]>(() => {
    try { const l = localStorage.getItem("vine_world_prayer_log"); return l ? JSON.parse(l) : []; } catch { return []; }
  });
  const [selectedVoice, setSelectedVoice] = useState<VoiceWPrayer>(VOICES_WPRAYER[0]);


  const handlePray = (id: string) => {
    setPrayedFor((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_world_prayer_prayed", JSON.stringify([...next])); } catch {}
      return next;
    });
    const log = [{ countryId: id, date: new Date().toISOString() }, ...prayerLog].slice(0, 200);
    setPrayerLog(log);
    try { localStorage.setItem("vine_world_prayer_log", JSON.stringify(log)); } catch {}
  };

  const handleSave = (id: string) => {
    setSavedCountries((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_world_prayer_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filtered = countries.filter((c) => {
    if (filterRegion !== "All Regions" && c.region !== filterRegion) return false;
    if (filterStatus !== "All" && c.status !== filterStatus) return false;
    if (search && !c.country.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const totalPrayers = prayerLog.length;
  const countriesPrayed = new Set(prayerLog.map((l) => l.countryId)).size;

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #071428 0%, #07070F 100%)", padding: "52px 24px 36px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>🌍</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>World Prayer</h1>
        <p style={{ fontSize: 16, color: MUTED, maxWidth: 520, margin: "0 auto 24px" }}>
          Pray for nations. Every country. Every people group. Join thousands interceding for the globe.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { value: countries.length.toString(), label: "Countries" },
            { value: totalPrayers.toString(), label: "Times You've Prayed" },
            { value: countriesPrayed.toString(), label: "Nations Interceded" },
            { value: prayedFor.size.toString(), label: "Currently Praying For" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 24, fontWeight: 700, color: GREEN }}>{s.value}</div>
              <div style={{ fontSize: 12, color: MUTED }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: 4 }}>
          {(["countries", "movements", "scripture", "voices", "videos"] as Tab[]).map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", margin: "8px 0" }}>
              {t === "countries" ? "Countries" : t === "movements" ? "Movements" : t === "scripture" ? "Scripture" : t === "voices" ? "Voices" : "Videos"}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px" }}>

        {/* Countries Tab */}
        {activeTab === "countries" && (
          <div>
            {/* Filters */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24, alignItems: "center" }}>
              <input value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country..."
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "9px 14px", color: TEXT, fontSize: 13, outline: "none", minWidth: 200 }} />

              <div style={{ display: "flex", gap: 6 }}>
                {["All", "Open", "Restricted", "Persecuted"].map((s) => (
                  <button key={s} onClick={() => setFilterStatus(s)}
                    style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                      border: `1px solid ${filterStatus === s ? (s === "All" ? PURPLE : statusColors[s as keyof typeof statusColors]) : BORDER}`,
                      background: filterStatus === s ? `${s === "All" ? PURPLE : statusColors[s as keyof typeof statusColors]}20` : "transparent",
                      color: filterStatus === s ? (s === "All" ? PURPLE : statusColors[s as keyof typeof statusColors]) : MUTED }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
              {regions.map((r) => (
                <button key={r} onClick={() => setFilterRegion(r)}
                  style={{ padding: "5px 12px", borderRadius: 20, fontSize: 11, cursor: "pointer",
                    border: `1px solid ${filterRegion === r ? GREEN : BORDER}`,
                    background: filterRegion === r ? "#3a7d5615" : "transparent",
                    color: filterRegion === r ? GREEN : MUTED }}>
                  {r}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
              {filtered.map((c) => {
                const prayed = prayedFor.has(c.id);
                const saved = savedCountries.has(c.id);
                return (
                  <div key={c.id}
                    style={{
                      background: CARD,
                      border: `1px solid ${prayed ? "#3a7d5630" : BORDER}`,
                      borderRadius: 16, padding: 20, cursor: "pointer",
                    }}
                    onClick={() => setSelected(c)}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <div style={{ fontSize: 32 }}>{c.flag}</div>
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 700, color: TEXT }}>{c.country}</div>
                          <div style={{ fontSize: 12, color: MUTED }}>{c.region}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 6, flexDirection: "column", alignItems: "flex-end" }}>
                        <div style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                          background: `${statusColors[c.status]}20`, color: statusColors[c.status], border: `1px solid ${statusColors[c.status]}40` }}>
                          {c.status}
                        </div>
                        <div style={{ fontSize: 10, color: missionaryColors[c.missionaryPresence] }}>
                          ✦ {c.missionaryPresence} presence
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
                      {[
                        { label: "Population", value: c.population },
                        { label: "Christians", value: `${c.christianPercent}%` },
                        { label: "Unreached Groups", value: c.unreachedGroups.toString() },
                      ].map((stat) => (
                        <div key={stat.label} style={{ background: BG, borderRadius: 8, padding: "8px 10px", textAlign: "center" }}>
                          <div style={{ fontSize: 14, fontWeight: 700, color: TEXT }}>{stat.value}</div>
                          <div style={{ fontSize: 9, color: MUTED }}>{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ borderLeft: `2px solid ${PURPLE}40`, paddingLeft: 10, marginBottom: 14 }}>
                      <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic" }}>&ldquo;{c.verse}&rdquo;</div>
                      <div style={{ fontSize: 10, color: PURPLE, marginTop: 2 }}>{c.verseRef}</div>
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={(e) => { e.stopPropagation(); handlePray(c.id); }}
                        style={{
                          flex: 1, padding: "8px 12px", borderRadius: 8, border: "none",
                          background: prayed ? "#3a7d5620" : PURPLE,
                          color: prayed ? GREEN : "#fff",
                          cursor: "pointer", fontWeight: 600, fontSize: 13,
                        }}>
                        {prayed ? "🙏 Praying" : "Pray for this Nation"}
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); handleSave(c.id); }}
                        style={{ padding: "8px 12px", borderRadius: 8, border: "none", background: saved ? `${PURPLE}20` : BORDER, color: saved ? PURPLE : MUTED, cursor: "pointer", fontSize: 15 }}>
                        {saved ? "★" : "☆"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Movements Tab */}
        {activeTab === "movements" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Prayer Movements</h2>
              <p style={{ fontSize: 14, color: MUTED, maxWidth: 600 }}>
                God has raised up organized prayer movements in every generation. These are some of the most significant in the modern era.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 20 }}>
              {PRAYER_MOVEMENTS.map((m) => (
                <div key={m.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: TEXT, margin: 0, flex: 1, paddingRight: 12 }}>{m.name}</h3>
                    <div style={{ background: `${PURPLE}20`, color: PURPLE, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "2px 12px", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>
                      Est. {m.founded}
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: GREEN, fontWeight: 600, marginBottom: 12 }}>
                    Founded by {m.founder}
                  </div>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, marginBottom: 16 }}>{m.description}</p>
                  <div style={{ background: BG, borderRadius: 10, padding: "12px 14px", borderLeft: `3px solid ${GREEN}` }}>
                    <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>Impact</div>
                    <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>{m.impact}</p>
                  </div>
                  <div style={{ marginTop: 12, fontSize: 11, color: `${MUTED}80` }}>{m.website_hint}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scripture Tab */}
        {activeTab === "scripture" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Scripture on Global Prayer</h2>
              <p style={{ fontSize: 14, color: MUTED, maxWidth: 600 }}>
                The Bible is full of God&rsquo;s heart for the nations. These passages anchor global intercession in the Word.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {PRAYER_SCRIPTURE.map((s) => (
                <div key={s.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start", flexWrap: "wrap", marginBottom: 16 }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: PURPLE }}>{s.ref}</div>
                    <div style={{ background: `${PURPLE}15`, color: PURPLE, border: `1px solid ${PURPLE}30`, borderRadius: 20, padding: "2px 12px", fontSize: 11, fontWeight: 700 }}>
                      {s.theme}
                    </div>
                  </div>
                  <blockquote style={{ margin: "0 0 16px", padding: "14px 18px", borderLeft: `3px solid ${PURPLE}`, background: BG, borderRadius: "0 10px 10px 0" }}>
                    <p style={{ fontSize: 15, color: TEXT, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
                      &ldquo;{s.text}&rdquo;
                    </p>
                  </blockquote>
                  <div>
                    <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>How to Pray This</div>
                    <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.application}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Voices Tab */}
        {activeTab === "voices" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Voices on Prayer & Missions</h2>
              <p style={{ fontSize: 14, color: MUTED, maxWidth: 600 }}>
                Men and women throughout history whose lives and words have shaped how the church prays for the world.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              {/* Left panel — voice list */}
              <div style={{ width: 240, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 24 }}>
                {VOICES_WPRAYER.map((v) => (
                  <button key={v.id} onClick={() => setSelectedVoice(v)}
                    style={{
                      background: selectedVoice.id === v.id ? `${PURPLE}20` : CARD,
                      border: `1px solid ${selectedVoice.id === v.id ? PURPLE : BORDER}`,
                      borderRadius: 12, padding: "12px 14px", cursor: "pointer", textAlign: "left",
                    }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice.id === v.id ? TEXT : MUTED, marginBottom: 2 }}>{v.name}</div>
                    <div style={{ fontSize: 11, color: selectedVoice.id === v.id ? PURPLE : `${MUTED}80` }}>{v.era}</div>
                  </button>
                ))}
              </div>
              {/* Right panel — detail */}
              <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: TEXT, margin: "0 0 4px" }}>{selectedVoice.name}</h3>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "2px 12px", fontSize: 11, fontWeight: 700 }}>{selectedVoice.era}</span>
                    <span style={{ fontSize: 12, color: MUTED }}>{selectedVoice.context}</span>
                  </div>
                </div>

                <blockquote style={{ margin: "0 0 20px", padding: "16px 20px", borderLeft: `3px solid ${GREEN}`, background: BG, borderRadius: "0 10px 10px 0" }}>
                  <p style={{ fontSize: 15, color: TEXT, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
                    &ldquo;{selectedVoice.quote}&rdquo;
                  </p>
                </blockquote>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Biography</div>
                  <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.75, margin: 0 }}>{selectedVoice.bio}</p>
                </div>

                <div style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${PURPLE}` }}>
                  <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Legacy & Contribution</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.7 }}>{selectedVoice.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {WP_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Country Detail Modal — outside tab conditionals */}
      {selected && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSelected(null)}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 28, maxWidth: 580, width: "100%", maxHeight: "88vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
              <div style={{ fontSize: 48 }}>{selected.flag}</div>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: TEXT, margin: "0 0 4px" }}>{selected.country}</h2>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, background: `${statusColors[selected.status]}20`, color: statusColors[selected.status], border: `1px solid ${statusColors[selected.status]}40` }}>{selected.status}</span>
                  <span style={{ fontSize: 11, color: MUTED, padding: "2px 10px" }}>{selected.region}</span>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
              {[
                { label: "Population", value: selected.population },
                { label: "Christians", value: `${selected.christianPercent}%` },
                { label: "Unreached Groups", value: selected.unreachedGroups },
                { label: "Missionaries", value: selected.missionaryPresence },
              ].map((s) => (
                <div key={s.label} style={{ background: BG, borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: TEXT }}>{s.value}</div>
                  <div style={{ fontSize: 9, color: MUTED }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ background: BG, borderRadius: 10, padding: 14, marginBottom: 16, borderLeft: "3px solid #F59E0B" }}>
              <div style={{ fontSize: 12, color: "#F59E0B", fontWeight: 600, marginBottom: 6 }}>Recent News</div>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0 }}>{selected.recentNews}</p>
            </div>

            <h3 style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 12 }}>🙏 Prayer Points</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {selected.prayerPoints.map((pt, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}`, color: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{pt}</div>
                </div>
              ))}
            </div>

            <div style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: 14, marginBottom: 24 }}>
              <div style={{ fontSize: 14, color: TEXT, fontStyle: "italic" }}>&ldquo;{selected.verse}&rdquo;</div>
              <div style={{ fontSize: 12, color: PURPLE, marginTop: 4 }}>{selected.verseRef}</div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => handlePray(selected.id)}
                style={{ flex: 1, padding: "12px 16px", borderRadius: 10, border: "none",
                  background: prayedFor.has(selected.id) ? "#3a7d5620" : PURPLE,
                  color: prayedFor.has(selected.id) ? GREEN : "#fff",
                  cursor: "pointer", fontWeight: 700, fontSize: 15 }}>
                {prayedFor.has(selected.id) ? "🙏 Praying for " + selected.country : "Pray for " + selected.country}
              </button>
              <button onClick={() => setSelected(null)}
                style={{ padding: "12px 16px", borderRadius: 10, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer", fontSize: 15 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
