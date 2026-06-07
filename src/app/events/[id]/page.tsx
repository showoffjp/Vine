import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventDetailActions from "@/components/EventDetailActions";
import {
  Calendar,
  MapPin,
  Users,
  Globe,
  Radio,
  ArrowLeft,
  CheckCircle,
  Clock,
  Mic,
  BookOpen,
} from "lucide-react";

type Speaker = {
  name: string;
  title: string;
  avatarColor: string;
  initials: string;
};

type Schedule = {
  time: string;
  title: string;
  speaker?: string;
  type: "worship" | "teaching" | "break" | "prayer" | "panel" | "workshop";
};

type EventDetail = {
  id: string;
  title: string;
  subtitle: string;
  dates: string;
  location: string;
  online: boolean;
  livestreamed: boolean;
  organizer: string;
  registered: string;
  capacity: string;
  type: string;
  price: string;
  accentColor: string;
  secondaryColor: string;
  gradient: string;
  description: string;
  longDescription: string;
  tags: string[];
  speakers: Speaker[];
  schedule: Schedule[];
  highlights: string[];
  faqs: { q: string; a: string }[];
};

const events: Record<string, EventDetail> = {
  "global-prayer-summit-2026": {
    id: "global-prayer-summit-2026",
    title: "Global Prayer & Worship Summit 2026",
    subtitle: "Three days of unified prayer, worship, and biblical teaching",
    dates: "July 18–20, 2026",
    location: "Houston, TX",
    online: false,
    livestreamed: true,
    organizer: "Vine Community Events",
    registered: "2,847",
    capacity: "5,000",
    type: "Prayer Summit",
    price: "Free",
    accentColor: "#3a7d56",
    secondaryColor: "#6B4FBB",
    gradient: "linear-gradient(135deg, #0D0A28 0%, #1A1050 40%, #0A1F14 100%)",
    description: "Join believers from 120+ nations for three days of unified prayer, prophetic worship, and biblical teaching.",
    longDescription: `The Global Prayer & Worship Summit 2026 is the most significant gathering of its kind — believers from every corner of the earth coming together in one voice, one prayer, one hope. For three days, we will fast, pray, worship, and listen as the Spirit moves across cultural and denominational lines.\n\nWhether you join us in Houston or via free global livestream, you are part of something historic. The summit will feature 40+ hours of programming — morning intercession, daytime Bible teaching, evening worship concerts, and late-night prayer watches.\n\nLast year's summit saw participants from 118 countries. This year, we believe for 130. Hundreds of documented healings, salvations, and life-transforming encounters have emerged from this gathering. Come expecting God to move.`,
    tags: ["Prayer", "Worship", "International", "Revival", "Missions"],
    speakers: [
      { name: "Dr. Emmanuel Asante", title: "Senior Pastor, All Nations Church Lagos", avatarColor: "#F59E0B", initials: "EA" },
      { name: "Pastor Ji-Young Kim", title: "Founder, Seoul Prayer House", avatarColor: "#6B4FBB", initials: "JK" },
      { name: "Sarah Mitchell", title: "Worship Leader & Author", avatarColor: "#3a7d56", initials: "SM" },
      { name: "Bishop Carlos Rivera", title: "Latin America Church Alliance", avatarColor: "#EF4444", initials: "CR" },
      { name: "Dr. Priya Singh", title: "Theologian, Oxford Centre for Christian Apologetics", avatarColor: "#3B82F6", initials: "PS" },
      { name: "Amina Haidari", title: "Missionary, Central Asia", avatarColor: "#EC4899", initials: "AH" },
    ],
    schedule: [
      { time: "7:00 AM", title: "Morning Intercession — Praying for the Nations", type: "prayer" },
      { time: "9:00 AM", title: "Keynote: The God Who Hears", speaker: "Dr. Emmanuel Asante", type: "teaching" },
      { time: "11:00 AM", title: "Breakout: Intercession for Global Missions", type: "workshop" },
      { time: "1:00 PM", title: "Lunch Break", type: "break" },
      { time: "2:30 PM", title: "Panel: What Happens When the Church Prays?", type: "panel" },
      { time: "4:00 PM", title: "Workshop: Prayer Models Across Traditions", type: "workshop" },
      { time: "7:00 PM", title: "Evening Worship Concert", speaker: "Sarah Mitchell", type: "worship" },
      { time: "10:00 PM", title: "Night Watch: 2-Hour Prayer Vigil", type: "prayer" },
    ],
    highlights: [
      "40+ hours of programming across 3 days",
      "Free global livestream available",
      "Simultaneous translation in 14 languages",
      "Corporate fasting with community support",
      "In-person prayer rooms open 24/7",
      "Child-friendly programming available",
    ],
    faqs: [
      { q: "Is the livestream really free?", a: "Yes — the global livestream is completely free. Sign up to receive your unique viewing link and access 100% of sessions from anywhere in the world." },
      { q: "What does in-person registration include?", a: "In-person attendance includes access to all main sessions, breakouts, workshops, printed devotional materials, and two catered meals per day." },
      { q: "Will sessions be recorded?", a: "Yes. All sessions will be available on-demand through the Vine platform for 60 days following the event." },
      { q: "Is there childcare available?", a: "Yes. Child programming (ages 4–12) runs parallel to adult sessions on Day 1 and Day 2. Pre-registration required." },
    ],
  },

  "apologetics-symposium-faith-reason": {
    id: "apologetics-symposium-faith-reason",
    title: "Apologetics Symposium: Faith & Reason",
    subtitle: "A full day of equipping Christians to defend the faith intelligently",
    dates: "June 21, 2026",
    location: "Dallas, TX",
    online: false,
    livestreamed: false,
    organizer: "Reasonable Faith Dallas",
    registered: "412",
    capacity: "600",
    type: "Apologetics Symposium",
    price: "From $79",
    accentColor: "#6B4FBB",
    secondaryColor: "#3B82F6",
    gradient: "linear-gradient(135deg, #0A0A1E 0%, #1A0A30 50%, #0A1028 100%)",
    description: "A full-day symposium on defending the Christian faith in a secular age, with live Q&A sessions.",
    longDescription: `In an era of rapid cultural change, confident and compassionate Christian apologetics has never been more needed. This one-day intensive brings together leading scholars, practitioners, and thinkers to train believers to give a reason for the hope within them (1 Peter 3:15).\n\nTopics include the historical evidence for the resurrection, the problem of evil and suffering, the reliability of Scripture, science and faith integration, and engaging skeptics online and in real life.\n\nThis event is ideal for pastors, college students, lay leaders, parents, and anyone who has wrestled with hard questions or wants to be better equipped to engage with their skeptical friends and family.`,
    tags: ["Apologetics", "Theology", "Evidence", "Faith & Reason", "Evangelism"],
    speakers: [
      { name: "Dr. Priya Singh", title: "Theologian & Apologist, Oxford", avatarColor: "#3B82F6", initials: "PS" },
      { name: "Prof. James Nakamura", title: "Philosophy of Religion, UT Dallas", avatarColor: "#6B4FBB", initials: "JN" },
      { name: "Rachel Kim", title: "Author, \"Honest Faith\"", avatarColor: "#3a7d56", initials: "RK" },
      { name: "Pastor Thomas Weber", title: "Lead Pastor, Grace Fellowship Dallas", avatarColor: "#F59E0B", initials: "TW" },
    ],
    schedule: [
      { time: "8:30 AM", title: "Registration & Coffee", type: "break" },
      { time: "9:00 AM", title: "Opening: Why Apologetics Matters Now", speaker: "Dr. Priya Singh", type: "teaching" },
      { time: "10:00 AM", title: "The Historical Case for the Resurrection", speaker: "Prof. James Nakamura", type: "teaching" },
      { time: "11:15 AM", title: "Workshop: Talking to Skeptics at Thanksgiving", type: "workshop" },
      { time: "12:30 PM", title: "Lunch Break (included)", type: "break" },
      { time: "1:30 PM", title: "The Problem of Evil: Engaging the Hardest Question", speaker: "Rachel Kim", type: "teaching" },
      { time: "2:30 PM", title: "Science & Faith: Not Enemies", speaker: "Prof. James Nakamura", type: "teaching" },
      { time: "3:30 PM", title: "Open Q&A Panel — All Speakers", type: "panel" },
      { time: "4:30 PM", title: "Closing Prayer & Commissioning", speaker: "Pastor Thomas Weber", type: "prayer" },
    ],
    highlights: [
      "Nationally recognized apologetics scholars",
      "Interactive Q&A with all speakers",
      "Resource library included (printed + digital)",
      "Small-group breakout workshops",
      "Networking lunch with speakers",
      "CE credits available for pastors",
    ],
    faqs: [
      { q: "Is this event appropriate for skeptics or seekers?", a: "Absolutely. Many attendees bring non-believing friends. The tone is intellectually honest and genuinely welcoming of hard questions." },
      { q: "What's included in the ticket price?", a: "All sessions, workshop materials, a printed resource booklet, and a catered lunch are included." },
      { q: "Will there be an opportunity to ask questions?", a: "Yes — there's a dedicated 1-hour open Q&A panel at the end of the day. All speaker sessions also include 10-minute Q&A blocks." },
      { q: "Will this be available online or recorded?", a: "The event is in-person only. Key sessions will be recorded and released on Vine's platform 30 days later." },
    ],
  },

  "worship-night-heavens-frequency": {
    id: "worship-night-heavens-frequency",
    title: "Worship Night: Heaven's Frequency",
    subtitle: "An evening of uninterrupted worship and intercession for the nations",
    dates: "July 4, 2026",
    location: "London, UK",
    online: false,
    livestreamed: true,
    organizer: "All Nations Church London",
    registered: "1,820",
    capacity: "3,000",
    type: "Worship Night",
    price: "Free",
    accentColor: "#3a7d56",
    secondaryColor: "#EC4899",
    gradient: "linear-gradient(135deg, #080818 0%, #101A0A 50%, #180810 100%)",
    description: "An evening of uninterrupted worship and intercession for the nations of the earth.",
    longDescription: `Heaven's Frequency is an annual evening of worship that draws thousands to the O2 Academy Brixton in London for an experience of the presence of God that transcends culture, language, and denominational tradition.\n\nFor four hours, the sanctuary becomes a portal of prayer — voices lifted in 12 languages, instruments from every tradition, and a sense of heaven touching earth. This year's theme is 'One New Humanity' from Ephesians 2, celebrating the unity that Christ creates across every dividing wall.\n\nWhether you're in London or joining via free global livestream, prepare to encounter God in worship unlike anything you've experienced before.`,
    tags: ["Worship", "Prayer", "Intercession", "Unity", "Global Church"],
    speakers: [
      { name: "Grace Okonkwo", title: "Worship Leader & Recording Artist", avatarColor: "#3a7d56", initials: "GO" },
      { name: "Benjamin Levi", title: "Messianic Worship Leader", avatarColor: "#F59E0B", initials: "BL" },
      { name: "Yemi Adeyinka", title: "Vocalist & Songwriter", avatarColor: "#EC4899", initials: "YA" },
      { name: "Pastor David Chen", title: "All Nations Church London", avatarColor: "#3B82F6", initials: "DC" },
    ],
    schedule: [
      { time: "6:30 PM", title: "Doors Open — Pre-Worship Acoustic Set", type: "worship" },
      { time: "7:00 PM", title: "Welcome & Opening Prayer", speaker: "Pastor David Chen", type: "prayer" },
      { time: "7:15 PM", title: "Worship Set 1: 'Come Lord Jesus'", speaker: "Grace Okonkwo", type: "worship" },
      { time: "8:15 PM", title: "Intercession for the Nations", type: "prayer" },
      { time: "8:45 PM", title: "Worship Set 2: Hebrew Worship & Praise", speaker: "Benjamin Levi", type: "worship" },
      { time: "9:30 PM", title: "Worship Set 3: African Praise Explosion", speaker: "Yemi Adeyinka", type: "worship" },
      { time: "10:15 PM", title: "Corporate Prayer & Commissioning", speaker: "Pastor David Chen", type: "prayer" },
      { time: "10:30 PM", title: "Finale: All Worship Leaders Together", type: "worship" },
    ],
    highlights: [
      "4+ hours of live multi-cultural worship",
      "Free admission — all welcome",
      "Free global livestream",
      "Child-friendly family section available",
      "Live sign language interpretation",
      "Worship sets in English, Yoruba, Hebrew, and Mandarin",
    ],
    faqs: [
      { q: "Do I need to register for the free event?", a: "In-person attendance is free but registration is required for capacity management. The livestream has no registration requirement." },
      { q: "Is this affiliated with a specific denomination?", a: "Heaven's Frequency is explicitly multi-denominational. Attendees come from Anglican, Pentecostal, Catholic, Baptist, and non-denominational backgrounds." },
      { q: "Can I bring children?", a: "Yes — a designated family section with beanbags, space for buggies, and a lower volume environment is available. Children under 14 must be accompanied by an adult." },
      { q: "Where is the venue?", a: "O2 Academy Brixton, 211 Stockwell Rd, London SW9 9SL. The nearest tube station is Brixton (Victoria Line)." },
    ],
  },

  "online-prayer-summit-24hr": {
    id: "online-prayer-summit-24hr",
    title: "Online Prayer Summit: 24-Hour Watch",
    subtitle: "A continuous 24-hour prayer event spanning every inhabited continent",
    dates: "September 19–20, 2026",
    location: "Online — Global",
    online: true,
    livestreamed: true,
    organizer: "Vine Global Prayer",
    registered: "12,000",
    capacity: "Unlimited",
    type: "Prayer Summit",
    price: "Free",
    accentColor: "#3a7d56",
    secondaryColor: "#6B4FBB",
    gradient: "linear-gradient(135deg, #050514 0%, #0A1020 50%, #050514 100%)",
    description: "A continuous 24-hour prayer event with live segments hosted from every inhabited continent.",
    longDescription: `The 24-Hour Watch is Vine's flagship global prayer event — a continuous, unbroken stream of intercession that circles the earth, passing the baton of prayer from continent to continent as the sun moves.\n\nBeginning at midnight UTC on September 19th, believers from Fiji to Fiji (all the way around) will pray in 1-hour segments. Asia Pacific opens the watch, passing to South Asia, then the Middle East & Africa, Europe, Latin America, and North America — then beginning again.\n\nEach segment features live worship, Scripture reading, and focused intercession led by local believers in their own language and cultural expression. This is not a polished conference — it's raw, honest, global prayer.\n\nLast year, 12,000 people joined at least one hour. We believe God for 25,000 this year.`,
    tags: ["Prayer", "Intercession", "Global", "Online", "24 Hours", "Revival"],
    speakers: [
      { name: "Vine Global Prayer Team", title: "Event Coordinators", avatarColor: "#3a7d56", initials: "VG" },
      { name: "150+ Local Prayer Leaders", title: "From 60+ Nations", avatarColor: "#6B4FBB", initials: "LP" },
      { name: "Dr. Emmanuel Asante", title: "Opening Keynote", avatarColor: "#F59E0B", initials: "EA" },
      { name: "Pastor Ji-Young Kim", title: "Asia Pacific Opening", avatarColor: "#EC4899", initials: "JK" },
    ],
    schedule: [
      { time: "12:00 AM UTC", title: "Opening: Asia Pacific Prayer Watch Begins", type: "prayer" },
      { time: "4:00 AM UTC", title: "South Asia & Middle East Intercession", type: "prayer" },
      { time: "8:00 AM UTC", title: "Africa & Europe Watch — Opening Worship", type: "worship" },
      { time: "12:00 PM UTC", title: "Keynote Midpoint: Dr. Emmanuel Asante", speaker: "Dr. Emmanuel Asante", type: "teaching" },
      { time: "2:00 PM UTC", title: "Latin America Intercession", type: "prayer" },
      { time: "6:00 PM UTC", title: "North America Evening Watch", type: "prayer" },
      { time: "10:00 PM UTC", title: "Final Hour: Global Corporate Prayer", type: "prayer" },
      { time: "11:59 PM UTC", title: "Watch Closes — Doxology Together", type: "worship" },
    ],
    highlights: [
      "24 continuous hours of global prayer",
      "Segments in 40+ languages",
      "Join for any amount of time — 1 hour or all 24",
      "Watch the prayer map update in real-time",
      "Receive personalized prayer topics based on your region",
      "Post-event recording of all 24 hours available",
    ],
    faqs: [
      { q: "Do I need to commit to all 24 hours?", a: "Not at all. Join for one hour, one segment, or dip in and out throughout the day. Every hour of prayer counts." },
      { q: "How do I know when to tune in for my timezone?", a: "After registering, you'll receive a personalized schedule showing what's happening at key times in your timezone." },
      { q: "Will there be a prayer guide provided?", a: "Yes — all registered participants receive a printed-ready PDF prayer guide covering global missions, national concerns, and Scripture-based intercession themes for each segment." },
      { q: "Is this open to all Christian traditions?", a: "Absolutely. The 24-Hour Watch is intentionally multi-denominational and multi-cultural. The only unifying confession is Jesus as Lord." },
    ],
  },

  "womens-gathering-rooted-rising": {
    id: "womens-gathering-rooted-rising",
    title: "Women's Gathering: Rooted & Rising",
    subtitle: "A one-day gathering for Christian women to find renewal, community, and purpose",
    dates: "June 7, 2026",
    location: "Atlanta, GA",
    online: false,
    livestreamed: true,
    organizer: "Proverbs 31 Network",
    registered: "640",
    capacity: "800",
    type: "Women's Gathering",
    price: "From $49",
    accentColor: "#BB4F7A",
    secondaryColor: "#6B4FBB",
    gradient: "linear-gradient(135deg, #1A0510 0%, #2D0A2D 50%, #07070F 100%)",
    description: "A one-day gathering for Christian women — rooted in identity, rising in purpose.",
    longDescription: `Rooted & Rising is a gathering for women at every stage of life — those who are thriving in their faith, and those who are barely holding on. You are welcome exactly as you are.\n\nFrom the opening worship to the final prayer, this day is designed to remind you of who you are in Christ, and what God has called you to. Hear from women who have walked through fire and come out with deeper faith, not despite their trials, but through them.\n\nThe day includes three main sessions, small group discussions, a marketplace of Christian creators and resources, and a closing communion service you won't forget. Come alone, bring a friend, bring your daughter.`,
    tags: ["Women", "Identity", "Purpose", "Community", "Faith"],
    speakers: [
      { name: "Dr. Amara Osei", title: "Author & Bible Teacher, Ghana", avatarColor: "#F59E0B", initials: "AO" },
      { name: "Pastor Miriam Clarke", title: "Lead Pastor, Covenant Church Atlanta", avatarColor: "#BB4F7A", initials: "MC" },
      { name: "Isabella Ferreira", title: "Missionary & Author, Brazil/Mozambique", avatarColor: "#EF4444", initials: "IF" },
    ],
    schedule: [
      { time: "8:30 AM", title: "Doors Open & Worship Atmosphere", type: "worship" },
      { time: "9:30 AM", title: "Session 1: You Are Not an Afterthought", speaker: "Dr. Amara Osei", type: "teaching" },
      { time: "11:00 AM", title: "Small Group Discussions", type: "workshop" },
      { time: "12:00 PM", title: "Lunch Break & Marketplace", type: "break" },
      { time: "1:30 PM", title: "Session 2: When the Fire Doesn't Kill You", speaker: "Isabella Ferreira", type: "teaching" },
      { time: "3:00 PM", title: "Panel: Navigating Faith & Calling in Every Season", type: "panel" },
      { time: "4:30 PM", title: "Closing Worship & Communion", speaker: "Pastor Miriam Clarke", type: "worship" },
    ],
    highlights: ["Full-day programming", "Small group connection time", "Live worship", "Christian marketplace", "Free livestream"],
    faqs: [
      { q: "Is this for a specific age group?", a: "Not at all! Women from 16 to 80+ attend. We specifically welcome mothers and daughters to come together." },
      { q: "What does the ticket include?", a: "Ticket includes full-day access, small group facilitation materials, lunch, and printed devotional journal." },
    ],
  },

  "online-bible-study-gospel-john": {
    id: "online-bible-study-gospel-john",
    title: "Online Bible Study: The Gospel of John",
    subtitle: "An 8-week live online deep dive into John's Gospel",
    dates: "June 14 – August 2, 2026",
    location: "Online",
    online: true,
    livestreamed: true,
    organizer: "Vine Daily Bread",
    registered: "3,100",
    capacity: "Unlimited",
    type: "Online Bible Study",
    price: "Free",
    accentColor: "#4FBBAA",
    secondaryColor: "#3B82F6",
    gradient: "linear-gradient(135deg, #041A1A 0%, #071830 100%)",
    description: "8-week live online study through the Gospel of John — theology, history, and transformation.",
    longDescription: `The Gospel of John is unlike any other. Written decades after the other Gospels, John gives us the most theologically rich portrait of Jesus in Scripture — the eternal Word made flesh, the I AM statements, the farewell discourse in chapters 13–17. This study will change how you read John forever.\n\nEach week consists of a 60-minute live session with Dr. Emmanuel Asante, followed by a 20-minute Q&A. All sessions are recorded and available for replay within 24 hours. A full study guide is provided at registration.`,
    tags: ["Bible Study", "Gospel of John", "Online", "Theology", "Discipleship"],
    speakers: [
      { name: "Dr. Emmanuel Asante", title: "Professor of New Testament, Cape Town Seminary", avatarColor: "#4FBBAA", initials: "EA" },
    ],
    schedule: [
      { time: "Week 1", title: "In the Beginning: John 1 and the Prologue", speaker: "Dr. Emmanuel Asante", type: "teaching" },
      { time: "Week 2", title: "Signs and Wonders: Chapters 2–4", speaker: "Dr. Emmanuel Asante", type: "teaching" },
      { time: "Week 3", title: "Bread of Life: Chapters 5–6", speaker: "Dr. Emmanuel Asante", type: "teaching" },
      { time: "Week 4", title: "Light of the World: Chapters 7–9", speaker: "Dr. Emmanuel Asante", type: "teaching" },
      { time: "Week 5", title: "The Good Shepherd: Chapters 10–12", speaker: "Dr. Emmanuel Asante", type: "teaching" },
      { time: "Week 6", title: "The Farewell Discourse: Chapters 13–16", speaker: "Dr. Emmanuel Asante", type: "teaching" },
      { time: "Week 7", title: "The High Priestly Prayer: Chapter 17", speaker: "Dr. Emmanuel Asante", type: "teaching" },
      { time: "Week 8", title: "Crucifixion, Resurrection, and Restoration: Chapters 18–21", speaker: "Dr. Emmanuel Asante", type: "teaching" },
    ],
    highlights: ["8 live 90-minute sessions", "Full study guide PDF included", "Session recordings available", "Live Q&A each week", "Private community forum"],
    faqs: [
      { q: "What if I miss a session?", a: "All sessions are recorded. Registered participants get access to the full library for 90 days." },
      { q: "Do I need a specific Bible translation?", a: "Any translation works. Dr. Asante primarily uses the ESV and NIV." },
    ],
  },

  "young-adults-retreat-wild-faith": {
    id: "young-adults-retreat-wild-faith",
    title: "Young Adults Retreat: Wild Faith",
    subtitle: "A weekend retreat for 18–30s to deepen faith, forge friendships, and answer the big questions",
    dates: "July 11–13, 2026",
    location: "Muskoka, Ontario, Canada",
    online: false,
    livestreamed: false,
    organizer: "Alpha Canada",
    registered: "280",
    capacity: "320",
    type: "Retreat",
    price: "From $199",
    accentColor: "#E07030",
    secondaryColor: "#6B4FBB",
    gradient: "linear-gradient(135deg, #1A0D05 0%, #2D1A0A 50%, #07070F 100%)",
    description: "A weekend in the wilderness for 18-30s who are serious about faith and real about doubt.",
    longDescription: `Wild Faith is not your typical retreat. No polished speakers. No fog machines. Just 320 young adults in the Canadian wilderness asking the hardest questions about God, faith, life, and calling — and finding that Jesus is big enough for all of it.\n\nThe weekend includes outdoor worship sessions, late-night discussions, nature hikes paired with theological reflection, and honest small group conversations about doubt, identity, and purpose. We go deep here. You'll leave with friends you'll have for life.`,
    tags: ["Young Adults", "Retreat", "Discipleship", "Community", "Canada"],
    speakers: [
      { name: "Caleb Morrison", title: "Campus Director, Alpha Canada", avatarColor: "#E07030", initials: "CM" },
      { name: "Sophia Chen", title: "Young Adults Pastor, Toronto", avatarColor: "#4FBBAA", initials: "SC" },
    ],
    schedule: [
      { time: "Friday 6 PM", title: "Arrival & Welcome Bonfire", type: "worship" },
      { time: "Saturday 8 AM", title: "Morning Devotional: The Questions Jesus Asked", type: "teaching" },
      { time: "Saturday 10 AM", title: "Hike & Theological Reflection: Creation & Creator", type: "workshop" },
      { time: "Saturday 2 PM", title: "Session: Faith in the Age of Anxiety", speaker: "Sophia Chen", type: "teaching" },
      { time: "Saturday 7 PM", title: "Outdoor Worship Night", type: "worship" },
      { time: "Saturday 10 PM", title: "Late Night: Big Questions Q&A", type: "panel" },
      { time: "Sunday 9 AM", title: "Closing Session: Sent", speaker: "Caleb Morrison", type: "teaching" },
    ],
    highlights: ["Wilderness setting in Muskoka", "Max 320 participants", "Full meals included", "Transportation from Toronto available", "Scholarship spots available"],
    faqs: [
      { q: "What if I'm an inquirer, not a committed Christian?", a: "You are completely welcome. Wild Faith is designed to hold space for people at every point on the spiritual journey." },
      { q: "What should I bring?", a: "Comfortable outdoor clothing, a Bible or Bible app, a journal. Full packing list sent at registration." },
    ],
  },

  "online-leadership-conference-jul": {
    id: "online-leadership-conference-jul",
    title: "Online Leadership Conference",
    subtitle: "Equipping pastors, elders, and ministry leaders for faithful, Spirit-led leadership",
    dates: "July 25, 2026",
    location: "Online",
    online: true,
    livestreamed: true,
    organizer: "Vine Leadership Network",
    registered: "5,400",
    capacity: "Unlimited",
    type: "Online Conference",
    price: "Free",
    accentColor: "#4F8FBB",
    secondaryColor: "#6B4FBB",
    gradient: "linear-gradient(135deg, #04101A 0%, #081428 100%)",
    description: "A full-day online conference for church leaders — practical, biblical, and globally-minded.",
    longDescription: `Leadership in the church is unlike any other form of leadership. You are accountable to God, entrusted with souls, and called to serve without burning out. This free online conference brings together some of the most seasoned ministry leaders in the world to share what they've learned — often through failure.\n\nSessions span pastoral theology, team dynamics, mental health for leaders, preaching, and global church trends. All content is practical, theologically grounded, and free to access.`,
    tags: ["Leadership", "Pastoral", "Church", "Online", "Free"],
    speakers: [
      { name: "Rev. Charles Mwangi", title: "Senior Pastor, Nairobi Chapel", avatarColor: "#4F8FBB", initials: "CM" },
      { name: "Dr. Sarah Whitfield", title: "Director, Leadership Institute", avatarColor: "#BB4F7A", initials: "SW" },
      { name: "Pastor Kwame Asante", title: "Lead Pastor, Kumasi, Ghana", avatarColor: "#F59E0B", initials: "KA" },
    ],
    schedule: [
      { time: "9:00 AM", title: "Keynote: The Leader Who Doesn't Burn Out", speaker: "Rev. Charles Mwangi", type: "teaching" },
      { time: "10:30 AM", title: "Workshop: Building a Culture of Discipleship", type: "workshop" },
      { time: "12:00 PM", title: "Break", type: "break" },
      { time: "1:00 PM", title: "Panel: Mental Health and Ministry", type: "panel" },
      { time: "2:30 PM", title: "Session: Preaching in a Distracted Age", speaker: "Pastor Kwame Asante", type: "teaching" },
      { time: "4:00 PM", title: "Closing: The Call to Keep Leading", speaker: "Dr. Sarah Whitfield", type: "teaching" },
    ],
    highlights: ["Full-day free online access", "6+ hours of content", "Sessions available on-demand for 30 days", "Certificate of completion", "Private leader networking forum"],
    faqs: [
      { q: "Is this only for senior pastors?", a: "No — it's designed for anyone in ministry leadership: pastors, deacons, worship leaders, small group leaders, ministry directors." },
      { q: "Will content be available afterward?", a: "Yes, all sessions are available on-demand for 30 days post-event for registered participants." },
    ],
  },

  "marriage-enrichment-weekend-nairobi": {
    id: "marriage-enrichment-weekend-nairobi",
    title: "Marriage Enrichment Weekend",
    subtitle: "A restorative weekend for married couples to reconnect and covenant anew",
    dates: "August 8–10, 2026",
    location: "Nairobi, Kenya",
    online: false,
    livestreamed: false,
    organizer: "Family Life Africa",
    registered: "190",
    capacity: "200",
    type: "Workshop",
    price: "From $129/couple",
    accentColor: "#4FBBAA",
    secondaryColor: "#6B4FBB",
    gradient: "linear-gradient(135deg, #041414 0%, #0A1A1A 100%)",
    description: "A couples retreat designed for reconnection, healing, and covenant renewal.",
    longDescription: `Every marriage goes through seasons. Some seasons are filled with joy and connection; others feel like strangers sharing a home. The Marriage Enrichment Weekend creates a safe, grace-filled environment for couples to slow down, remember why they chose each other, and rebuild on the foundation of covenant love.\n\nBased on over 20 years of the Family Life African Marriage Program, this weekend combines biblical teaching, guided discussion, private exercises, and corporate worship to serve couples at every stage — newly married, mid-season, or those who have survived a crisis.`,
    tags: ["Marriage", "Couples", "Restoration", "Africa", "Retreat"],
    speakers: [
      { name: "Dr. David & Ruth Kamau", title: "Family Life Africa Founders", avatarColor: "#4FBBAA", initials: "DK" },
      { name: "Rev. Joseph & Grace Osei", title: "Marriage Ministry, Nairobi Chapel", avatarColor: "#10B981", initials: "JO" },
    ],
    schedule: [
      { time: "Friday 5 PM", title: "Arrival & Welcome Dinner", type: "break" },
      { time: "Saturday 8 AM", title: "Session 1: Back to the Beginning — Your Covenant", speaker: "Dr. David & Ruth Kamau", type: "teaching" },
      { time: "Saturday 10 AM", title: "Couples Exercise: Unfinished Conversations", type: "workshop" },
      { time: "Saturday 2 PM", title: "Session 2: Conflict as Connection — Repairing the Breach", type: "teaching" },
      { time: "Saturday 7 PM", title: "Couples Dinner & Worship", type: "worship" },
      { time: "Sunday 9 AM", title: "Session 3: The Vision Renewal Ceremony", speaker: "Rev. Joseph & Grace Osei", type: "teaching" },
    ],
    highlights: ["Couples-only environment", "Full accommodation options available", "Professional facilitators", "Private couple reflection times", "Renewal ceremony Sunday morning"],
    faqs: [
      { q: "Is this a crisis counseling weekend?", a: "It is restorative but not clinical crisis counseling. Couples in active crisis are encouraged to seek professional pastoral care first." },
      { q: "What if my spouse is hesitant?", a: "Many couples arrive with one partner unsure. The weekend is intentionally non-threatening and practically focused." },
    ],
  },

  "youth-camp-be-bold-brazil": {
    id: "youth-camp-be-bold-brazil",
    title: "Youth Camp: Be Bold",
    subtitle: "Five-day immersive camp for teens aged 13–18",
    dates: "August 22–26, 2026",
    location: "Campinas, São Paulo, Brazil",
    online: false,
    livestreamed: false,
    organizer: "JOCUM Brasil",
    registered: "450",
    capacity: "500",
    type: "Youth Camp",
    price: "From $89",
    accentColor: "#BB4F7A",
    secondaryColor: "#6B4FBB",
    gradient: "linear-gradient(135deg, #1A0410 0%, #2D0A20 100%)",
    description: "Five days of worship, missions training, games, and discipleship for bold young Christians.",
    longDescription: `Be Bold is not church camp. It's missions training disguised as the best week of your teenager's life. For five days, teens aged 13–18 from across Latin America gather in Campinas for high-energy worship, challenging discipleship sessions, outdoor adventures, and introductory missions training.\n\nThe theme this year is Be Bold — drawn from Joshua 1:9. We believe the next generation of Brazilian Christianity needs to be marked by courage: courage to live differently, to speak the Gospel, to serve the poor, and to believe that God can use a teenager to change the world.`,
    tags: ["Youth", "Teens", "Brazil", "Discipleship", "Missions"],
    speakers: [
      { name: "Pastora Ana Lima", title: "JOCUM Brasil Director", avatarColor: "#BB4F7A", initials: "AL" },
      { name: "Carlos Mendez", title: "Church Planter, Bogotá, Colombia", avatarColor: "#10B981", initials: "CM" },
    ],
    schedule: [
      { time: "Day 1", title: "Arrival, Games, and 'Why Are We Here?'", type: "workshop" },
      { time: "Day 2", title: "Bold in Identity — Who Does God Say You Are?", type: "teaching" },
      { time: "Day 3", title: "Bold in Witness — Missions Training Day", type: "workshop" },
      { time: "Day 4", title: "Bold in Service — Community Outreach Project", type: "workshop" },
      { time: "Day 5", title: "Commissioning Ceremony & Closing Worship", type: "worship" },
    ],
    highlights: ["Full accommodation and meals included", "Bilingual sessions (Portuguese/Spanish)", "Outdoor activities and games", "Missions training day", "Parent closing ceremony"],
    faqs: [
      { q: "What language are sessions in?", a: "Primary language is Portuguese. Spanish translation available. English materials available for international attendees." },
      { q: "Can non-Brazilian teens attend?", a: "Yes! We welcome international participants. English support available throughout the camp." },
    ],
  },

  "seoul-christian-leadership-forum": {
    id: "seoul-christian-leadership-forum",
    title: "Seoul Christian Leadership Forum",
    subtitle: "East Asia's premier Christian leadership forum with speakers from the global church",
    dates: "September 5–6, 2026",
    location: "Seoul, South Korea",
    online: false,
    livestreamed: true,
    organizer: "Korean Church Alliance",
    registered: "1,200",
    capacity: "1,500",
    type: "Conference",
    price: "From $149",
    accentColor: "#6B4FBB",
    secondaryColor: "#3B82F6",
    gradient: "linear-gradient(135deg, #0A0418 0%, #120630 100%)",
    description: "The leading gathering of Christian leaders across East Asia — two days of learning, vision, and prayer.",
    longDescription: `The Seoul Christian Leadership Forum has become the most influential gathering of Christian leaders in East Asia. Drawing pastors, theologians, nonprofit leaders, and church planters from South Korea, Japan, the Philippines, Indonesia, Taiwan, and beyond, the Forum is a unique space where the global church learns from the East Asian church — and vice versa.\n\nThis year's theme is 'Faithful in Every Nation' — exploring how Christian leaders can remain doctrinally rooted while culturally engaged in increasingly secular East Asian societies.`,
    tags: ["Leadership", "East Asia", "South Korea", "Global Church", "Conference"],
    speakers: [
      { name: "Ji-Woo Park", title: "Pastor, Seoul New Life Church", avatarColor: "#EC4899", initials: "JP" },
      { name: "Dr. Min-Jun Cho", title: "Theologian & Missionary, Mongolia", avatarColor: "#10B981", initials: "MC" },
      { name: "Rev. Yuki Tanaka", title: "Church Planter, Tokyo", avatarColor: "#4FBBAA", initials: "YT" },
    ],
    schedule: [
      { time: "Day 1 · 9 AM", title: "Keynote: Faithful to the End in Post-Christian Asia", speaker: "Ji-Woo Park", type: "teaching" },
      { time: "Day 1 · 11 AM", title: "Panel: Church Planting in Urban Asia", type: "panel" },
      { time: "Day 1 · 2 PM", title: "Workshop: Digital Ministry in Korea & Japan", type: "workshop" },
      { time: "Day 1 · 7 PM", title: "Worship Night with Vine Worship Leaders", type: "worship" },
      { time: "Day 2 · 9 AM", title: "Session: Missions from Asia to the Unreached World", speaker: "Dr. Min-Jun Cho", type: "teaching" },
      { time: "Day 2 · 2 PM", title: "Closing: The Sending", speaker: "Rev. Yuki Tanaka", type: "teaching" },
    ],
    highlights: ["English/Korean/Japanese simultaneous translation", "Global livestream available", "Speaker networking dinners", "Pre-forum workshop day", "Young leaders track (under 35)"],
    faqs: [
      { q: "What language are sessions in?", a: "Simultaneous translation is provided in Korean, English, and Japanese. Some sessions also available in Mandarin." },
      { q: "Is there a young leaders track?", a: "Yes — a dedicated 'Next Generation Leaders' track runs parallel to main sessions for attendees under 35." },
    ],
  },

  "sydney-evangelism-conference": {
    id: "sydney-evangelism-conference",
    title: "Sydney Evangelism Conference",
    subtitle: "Practical training and inspiration for Christians who want to share their faith naturally",
    dates: "October 3–4, 2026",
    location: "Sydney, Australia",
    online: false,
    livestreamed: true,
    organizer: "Evangelism Australia",
    registered: "730",
    capacity: "1,000",
    type: "Conference",
    price: "From $99",
    accentColor: "#E07030",
    secondaryColor: "#4FBBAA",
    gradient: "linear-gradient(135deg, #1A0B04 0%, #0A1A14 100%)",
    description: "Two days of practical, real-world evangelism training for everyday believers.",
    longDescription: `Most Christians believe in sharing the Gospel. Very few feel equipped to do it. The Sydney Evangelism Conference exists to close that gap — not by making you feel guilty, but by genuinely equipping you with practical tools, fresh confidence, and a vision for relational evangelism in your everyday life.\n\nThis conference is for laypeople, not just professionals. From a mechanic who wants to talk to his coworkers, to a student who wants to answer her friends' hard questions, to a grandmother who wants to tell her grandchildren about Jesus — this is for you.`,
    tags: ["Evangelism", "Australia", "Training", "Mission", "Practical"],
    speakers: [
      { name: "Dr. Rebecca Stone", title: "Director, Evangelism Australia", avatarColor: "#E07030", initials: "RS" },
      { name: "Pastor David Nguyen", title: "Church Planter, Western Sydney", avatarColor: "#4FBBAA", initials: "DN" },
    ],
    schedule: [
      { time: "Day 1 · 9 AM", title: "Keynote: You Don't Have to Be a Preacher", speaker: "Dr. Rebecca Stone", type: "teaching" },
      { time: "Day 1 · 11 AM", title: "Workshop: The 5 Conversations That Open Doors", type: "workshop" },
      { time: "Day 1 · 2 PM", title: "Panel: What Worked (and Failed) in Our Evangelism", type: "panel" },
      { time: "Day 2 · 9 AM", title: "Session: Reaching Post-Christian Australia", speaker: "Pastor David Nguyen", type: "teaching" },
      { time: "Day 2 · 11 AM", title: "Workshop: Answering Objections with Grace", type: "workshop" },
      { time: "Day 2 · 3 PM", title: "Closing Commission", speaker: "Dr. Rebecca Stone", type: "worship" },
    ],
    highlights: ["Practical, hands-on training", "Livestream available for remote attendees", "Resource pack included", "Follow-up cohort available", "International content with local application"],
    faqs: [
      { q: "Is this conference for experienced evangelists?", a: "Not at all — it's specifically designed for everyday Christians who feel unequipped. No prior experience required." },
      { q: "Is this only for Australians?", a: "No — we welcome international attendees and the livestream is available globally." },
    ],
  },

  "lagos-gospel-arts-festival": {
    id: "lagos-gospel-arts-festival",
    title: "Lagos Gospel Arts Festival",
    subtitle: "Two days of Christian music, film, visual arts, and spoken word",
    dates: "November 14–15, 2026",
    location: "Victoria Island, Lagos, Nigeria",
    online: false,
    livestreamed: true,
    organizer: "Gospel Arts Nigeria",
    registered: "8,500",
    capacity: "12,000",
    type: "Festival",
    price: "Free",
    accentColor: "#BB4F7A",
    secondaryColor: "#F59E0B",
    gradient: "linear-gradient(135deg, #1A0410 0%, #1A0D04 50%, #07070F 100%)",
    description: "West Africa's largest celebration of Christian creativity — music, art, film, and spoken word.",
    longDescription: `The Lagos Gospel Arts Festival is a declaration: the Gospel is beautiful. For two days, the waterfront of Victoria Island becomes a canvas for some of the most talented Christian artists, musicians, filmmakers, and poets in Africa — and increasingly, the world.\n\nThe Festival features 6 stages of live music (from traditional hymns to contemporary Afrobeats gospel), film screenings, an outdoor art gallery, poetry slams, and panel discussions on faith and creativity. All events are free and open to the public.\n\nThis is evangelism through beauty. Thousands of people who would never walk into a church find themselves encountering the Gospel through a song, a film, or a painting that stops them in their tracks.`,
    tags: ["Arts", "Nigeria", "Music", "Film", "Gospel", "Free"],
    speakers: [
      { name: "Ama Christabel", title: "Gospel Recording Artist, Accra, Ghana", avatarColor: "#BB4F7A", initials: "AC" },
      { name: "Emmanuel Okafor", title: "Festival Director, Gospel Arts Nigeria", avatarColor: "#F59E0B", initials: "EO" },
    ],
    schedule: [
      { time: "Day 1 · 10 AM", title: "Festival Opening & Worship Procession", type: "worship" },
      { time: "Day 1 · 12 PM", title: "Main Stage: Contemporary Gospel Concerts", type: "worship" },
      { time: "Day 1 · 3 PM", title: "Film Screening: 'The Bridge' (Nigerian Christian Documentary)", type: "workshop" },
      { time: "Day 1 · 7 PM", title: "Night of Worship: Pan-African Gospel Celebration", type: "worship" },
      { time: "Day 2 · 11 AM", title: "Panel: Art as Evangelism in Modern Nigeria", type: "panel" },
      { time: "Day 2 · 2 PM", title: "Poetry Slam & Spoken Word Championship", type: "workshop" },
      { time: "Day 2 · 6 PM", title: "Festival Closing Concert: Ama Christabel & Guests", speaker: "Ama Christabel", type: "worship" },
    ],
    highlights: ["Free admission for all events", "6 performance stages", "Outdoor art gallery", "Film screenings", "Nigerian and international artists", "Global livestream available"],
    faqs: [
      { q: "Is this a Christian-only event?", a: "Absolutely not. The Festival is intentionally open to everyone. Many non-believers attend out of curiosity and encounter the Gospel through art." },
      { q: "How do I watch via livestream?", a: "Register free on the Vine platform to receive the livestream link for all main stage events." },
    ],
  },
};

const scheduleTypeColors: Record<string, string> = {
  worship: "#3a7d56",
  teaching: "#6B4FBB",
  break: "#6A6A88",
  prayer: "#F59E0B",
  panel: "#3B82F6",
  workshop: "#EC4899",
};

const scheduleTypeLabels: Record<string, string> = {
  worship: "Worship",
  teaching: "Teaching",
  break: "Break",
  prayer: "Prayer",
  panel: "Panel",
  workshop: "Workshop",
};

export async function generateStaticParams() {
  return Object.keys(events).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const event = events[id];
  if (!event) return { title: "Event — Vine" };
  return {
    title: `${event.title} — Vine Events`,
    description: event.description,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events[id];

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: "#07070F" }}>
        <Navbar />
        <main className="flex-1 flex items-center justify-center page-body">
          <div className="text-center">
            <p className="text-5xl font-black mb-4" style={{ color: "#1E1E32" }}>404</p>
            <p className="text-lg font-bold mb-6" style={{ color: "#F2F2F8" }}>Event Not Found</p>
            <Link href="/events" className="text-sm font-semibold" style={{ color: "#3a7d56" }}>← Back to Events</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />

      <main className="page-body pb-24">
        {/* Hero Banner */}
        <div
          className="relative py-20 px-4 sm:px-8 overflow-hidden mb-12"
          style={{ background: event.gradient }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 80% at 20% 50%, ${event.accentColor}10 0%, transparent 60%)`,
            }}
          />
          <div className="relative max-w-4xl mx-auto">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold mb-8"
              style={{ color: event.accentColor, textDecoration: "none" }}
            >
              <ArrowLeft size={16} /> Back to Events
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: `${event.accentColor}20`, color: event.accentColor, border: `1px solid ${event.accentColor}40` }}
              >
                {event.type}
              </span>
              {event.online && (
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
                  style={{ background: "rgba(79,187,170,0.15)", color: "#4FBBAA", border: "1px solid rgba(79,187,170,0.3)" }}
                >
                  <Globe size={10} /> Online Event
                </span>
              )}
              {event.livestreamed && !event.online && (
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
                  style={{ background: "rgba(59,130,246,0.15)", color: "#3B82F6", border: "1px solid rgba(59,130,246,0.3)" }}
                >
                  <Radio size={10} /> Also Livestreamed
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-3" style={{ color: "#F2F2F8" }}>
              {event.title}
            </h1>
            <p className="text-lg mb-8" style={{ color: "#A0A0C0" }}>{event.subtitle}</p>

            {/* Key details */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm" style={{ color: "#C0C0D8" }}>
                <Calendar size={15} style={{ color: event.accentColor }} />
                {event.dates}
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#C0C0D8" }}>
                {event.online ? <Globe size={15} style={{ color: "#4FBBAA" }} /> : <MapPin size={15} style={{ color: event.accentColor }} />}
                {event.location}
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#C0C0D8" }}>
                <Users size={15} style={{ color: event.accentColor }} />
                {event.registered} registered
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* About */}
              <section>
                <h2 className="text-2xl font-black mb-5" style={{ color: "#F2F2F8" }}>About This Event</h2>
                {event.longDescription.split("\n\n").map((para, i) => (
                  <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "#A0A0C0" }}>
                    {para}
                  </p>
                ))}
              </section>

              {/* Highlights */}
              <section>
                <h2 className="text-2xl font-black mb-5" style={{ color: "#F2F2F8" }}>What to Expect</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: event.accentColor }} />
                      <span className="text-sm" style={{ color: "#C0C0D8" }}>{h}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Speakers */}
              <section>
                <h2 className="text-2xl font-black mb-5" style={{ color: "#F2F2F8" }}>Speakers & Leaders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.speakers.map((speaker) => (
                    <div
                      key={speaker.name}
                      className="flex items-center gap-4 p-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                        style={{ background: `${speaker.avatarColor}20`, color: speaker.avatarColor, border: `2px solid ${speaker.avatarColor}40` }}
                      >
                        {speaker.initials}
                      </div>
                      <div>
                        <p className="font-bold text-sm" style={{ color: "#F2F2F8" }}>{speaker.name}</p>
                        <p className="text-xs leading-snug" style={{ color: "#6A6A88" }}>{speaker.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Schedule */}
              <section>
                <h2 className="text-2xl font-black mb-5" style={{ color: "#F2F2F8" }}>Schedule</h2>
                <div className="space-y-2">
                  {event.schedule.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div className="flex flex-col items-center shrink-0 w-16">
                        <Clock size={12} style={{ color: "#4A4A68" }} />
                        <span className="text-[11px] font-bold mt-1 text-center leading-tight" style={{ color: "#6A6A88" }}>
                          {item.time}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              background: `${scheduleTypeColors[item.type]}15`,
                              color: scheduleTypeColors[item.type],
                              border: `1px solid ${scheduleTypeColors[item.type]}30`,
                            }}
                          >
                            {scheduleTypeLabels[item.type]}
                          </span>
                        </div>
                        <p className="text-sm font-semibold mt-1" style={{ color: "#E0E0F0" }}>{item.title}</p>
                        {item.speaker && (
                          <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: "#6A6A88" }}>
                            <Mic size={10} /> {item.speaker}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-2xl font-black mb-5" style={{ color: "#F2F2F8" }}>
                  <BookOpen size={22} className="inline mr-3" style={{ color: event.accentColor }} />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {event.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <p className="font-bold text-sm mb-2" style={{ color: "#F2F2F8" }}>{faq.q}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#8A8AA8" }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <div
                className="rounded-2xl overflow-hidden sticky top-24"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <div
                  className="p-5"
                  style={{ borderBottom: "1px solid #1E1E32", background: `${event.accentColor}08` }}
                >
                  <p className="text-2xl font-black mb-1" style={{ color: event.accentColor }}>
                    {event.price}
                  </p>
                  <p className="text-xs" style={{ color: "#6A6A88" }}>per person</p>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm" style={{ color: "#8A8AA8" }}>
                    <Calendar size={14} style={{ color: "#3a7d56" }} />
                    {event.dates}
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "#8A8AA8" }}>
                    <MapPin size={14} style={{ color: "#3a7d56" }} />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "#8A8AA8" }}>
                    <Users size={14} style={{ color: "#6B4FBB" }} />
                    <span>
                      <span style={{ color: "#F2F2F8", fontWeight: 700 }}>{event.registered}</span> registered
                      {event.capacity !== "Unlimited" && (
                        <span style={{ color: "#4A4A68" }}> / {event.capacity} capacity</span>
                      )}
                    </span>
                  </div>

                  {/* Progress bar */}
                  {event.capacity !== "Unlimited" && (
                    <div>
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.min(100, (parseInt(event.registered.replace(",", "")) / parseInt(event.capacity.replace(",", ""))) * 100)}%`,
                            background: `linear-gradient(90deg, ${event.accentColor}, ${event.secondaryColor})`,
                          }}
                        />
                      </div>
                      <p className="text-[11px] mt-1" style={{ color: "#4A4A68" }}>
                        {Math.round((parseInt(event.registered.replace(",", "")) / parseInt(event.capacity.replace(",", ""))) * 100)}% filled
                      </p>
                    </div>
                  )}

                  <EventDetailActions
                    price={event.price}
                    accentColor={event.accentColor}
                    secondaryColor={event.secondaryColor}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="rounded-2xl p-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <h3 className="text-sm font-bold mb-3" style={{ color: "#F2F2F8" }}>Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <a
                      key={tag}
                      href={`/discussions?tag=${tag}`}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: `${event.accentColor}10`,
                        color: event.accentColor,
                        border: `1px solid ${event.accentColor}25`,
                        textDecoration: "none",
                      }}
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>

              {/* Organizer */}
              <div className="rounded-2xl p-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <h3 className="text-sm font-bold mb-3" style={{ color: "#F2F2F8" }}>Organizer</h3>
                <p className="text-sm font-semibold" style={{ color: "#A0A0C0" }}>{event.organizer}</p>
                <Link href="/events" className="text-xs mt-2 block" style={{ color: event.accentColor, textDecoration: "none" }}>
                  View all events →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
