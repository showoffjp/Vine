import type { Metadata } from "next";
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
    accentColor: "#00FF88",
    secondaryColor: "#6B4FBB",
    gradient: "linear-gradient(135deg, #0D0A28 0%, #1A1050 40%, #0A1F14 100%)",
    description: "Join believers from 120+ nations for three days of unified prayer, prophetic worship, and biblical teaching.",
    longDescription: `The Global Prayer & Worship Summit 2026 is the most significant gathering of its kind — believers from every corner of the earth coming together in one voice, one prayer, one hope. For three days, we will fast, pray, worship, and listen as the Spirit moves across cultural and denominational lines.\n\nWhether you join us in Houston or via free global livestream, you are part of something historic. The summit will feature 40+ hours of programming — morning intercession, daytime Bible teaching, evening worship concerts, and late-night prayer watches.\n\nLast year's summit saw participants from 118 countries. This year, we believe for 130. Hundreds of documented healings, salvations, and life-transforming encounters have emerged from this gathering. Come expecting God to move.`,
    tags: ["Prayer", "Worship", "International", "Revival", "Missions"],
    speakers: [
      { name: "Dr. Emmanuel Asante", title: "Senior Pastor, All Nations Church Lagos", avatarColor: "#F59E0B", initials: "EA" },
      { name: "Pastor Ji-Young Kim", title: "Founder, Seoul Prayer House", avatarColor: "#6B4FBB", initials: "JK" },
      { name: "Sarah Mitchell", title: "Worship Leader & Author", avatarColor: "#00FF88", initials: "SM" },
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
      { name: "Rachel Kim", title: "Author, \"Honest Faith\"", avatarColor: "#00FF88", initials: "RK" },
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
    accentColor: "#00FF88",
    secondaryColor: "#EC4899",
    gradient: "linear-gradient(135deg, #080818 0%, #101A0A 50%, #180810 100%)",
    description: "An evening of uninterrupted worship and intercession for the nations of the earth.",
    longDescription: `Heaven's Frequency is an annual evening of worship that draws thousands to the O2 Academy Brixton in London for an experience of the presence of God that transcends culture, language, and denominational tradition.\n\nFor four hours, the sanctuary becomes a portal of prayer — voices lifted in 12 languages, instruments from every tradition, and a sense of heaven touching earth. This year's theme is 'One New Humanity' from Ephesians 2, celebrating the unity that Christ creates across every dividing wall.\n\nWhether you're in London or joining via free global livestream, prepare to encounter God in worship unlike anything you've experienced before.`,
    tags: ["Worship", "Prayer", "Intercession", "Unity", "Global Church"],
    speakers: [
      { name: "Grace Okonkwo", title: "Worship Leader & Recording Artist", avatarColor: "#00FF88", initials: "GO" },
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
    accentColor: "#00FF88",
    secondaryColor: "#6B4FBB",
    gradient: "linear-gradient(135deg, #050514 0%, #0A1020 50%, #050514 100%)",
    description: "A continuous 24-hour prayer event with live segments hosted from every inhabited continent.",
    longDescription: `The 24-Hour Watch is Vine's flagship global prayer event — a continuous, unbroken stream of intercession that circles the earth, passing the baton of prayer from continent to continent as the sun moves.\n\nBeginning at midnight UTC on September 19th, believers from Fiji to Fiji (all the way around) will pray in 1-hour segments. Asia Pacific opens the watch, passing to South Asia, then the Middle East & Africa, Europe, Latin America, and North America — then beginning again.\n\nEach segment features live worship, Scripture reading, and focused intercession led by local believers in their own language and cultural expression. This is not a polished conference — it's raw, honest, global prayer.\n\nLast year, 12,000 people joined at least one hour. We believe God for 25,000 this year.`,
    tags: ["Prayer", "Intercession", "Global", "Online", "24 Hours", "Revival"],
    speakers: [
      { name: "Vine Global Prayer Team", title: "Event Coordinators", avatarColor: "#00FF88", initials: "VG" },
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
};

const scheduleTypeColors: Record<string, string> = {
  worship: "#00FF88",
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
            <a href="/events" className="text-sm font-semibold" style={{ color: "#00FF88" }}>← Back to Events</a>
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
            <a
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold mb-8"
              style={{ color: event.accentColor, textDecoration: "none" }}
            >
              <ArrowLeft size={16} /> Back to Events
            </a>

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
                    <Calendar size={14} style={{ color: "#00FF88" }} />
                    {event.dates}
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "#8A8AA8" }}>
                    <MapPin size={14} style={{ color: "#00FF88" }} />
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
                    eventTitle={event.title}
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
                <a href="/events" className="text-xs mt-2 block" style={{ color: event.accentColor, textDecoration: "none" }}>
                  View all events →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
