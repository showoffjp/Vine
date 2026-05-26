import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Globe,
  Radio,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Events Worldwide — Vine",
  description:
    "Connect with believers in person and online at conferences, retreats, workshops, and gatherings around the globe.",
};

/* ------------------------------------------------------------------ */
/* Data                                                                  */
/* ------------------------------------------------------------------ */

const featuredEvent = {
  title: "Global Prayer & Worship Summit 2026",
  dates: "July 18–20, 2026",
  location: "Houston, TX",
  livestreamed: true,
  organizer: "Vine Community Events",
  registered: "2,847",
  type: "Prayer Summit",
  gradient: "linear-gradient(135deg, #0D0A28 0%, #1A1050 40%, #2A1A10 100%)",
  description:
    "Three days of unified prayer, prophetic worship, and biblical teaching with speakers and worship leaders from six continents. Join in person or via free livestream.",
};

type EventItem = {
  month: string;
  day: string;
  title: string;
  location: string;
  online: boolean;
  type: string;
  host: string;
  description: string;
  attendees: string;
  price: string;
  cta: "Register" | "Learn More";
  accentColor: string;
};

const events: EventItem[] = [
  {
    month: "JUN",
    day: "7",
    title: "Women's Gathering: Rooted & Rising",
    location: "Atlanta, GA",
    online: false,
    type: "Women's Gathering",
    host: "Proverbs 31 Network",
    description: "A one-day gathering for Christian women to find renewal, community, and purpose in Christ.",
    attendees: "640",
    price: "From $49",
    cta: "Register",
    accentColor: "#BB4F7A",
  },
  {
    month: "JUN",
    day: "14",
    title: "Online Bible Study: The Gospel of John",
    location: "Online",
    online: true,
    type: "Online Bible Study",
    host: "Vine Daily Bread",
    description: "An 8-week live online study through the Gospel of John led by Dr. Emmanuel Asante.",
    attendees: "3,100",
    price: "Free",
    cta: "Register",
    accentColor: "#4FBBAA",
  },
  {
    month: "JUN",
    day: "21",
    title: "Apologetics Symposium: Faith & Reason",
    location: "Dallas, TX",
    online: false,
    type: "Apologetics Symposium",
    host: "Reasonable Faith Dallas",
    description: "A full-day symposium on defending the Christian faith in a secular age, with Q&A sessions.",
    attendees: "412",
    price: "From $79",
    cta: "Register",
    accentColor: "#6B4FBB",
  },
  {
    month: "JUL",
    day: "4",
    title: "Worship Night: Heaven's Frequency",
    location: "London, UK",
    online: false,
    type: "Worship Night",
    host: "All Nations Church London",
    description: "An evening of uninterrupted worship and intercession for the nations of the earth.",
    attendees: "1,820",
    price: "Free",
    cta: "Register",
    accentColor: "#D4AF37",
  },
  {
    month: "JUL",
    day: "11",
    title: "Young Adults Retreat: Wild Faith",
    location: "Toronto, Canada",
    online: false,
    type: "Young Adults Retreat",
    host: "Alpha Canada",
    description: "A weekend retreat for 18–30s to deepen faith, forge friendships, and answer the big questions.",
    attendees: "280",
    price: "From $199",
    cta: "Register",
    accentColor: "#E07030",
  },
  {
    month: "JUL",
    day: "25",
    title: "Online Leadership Conference",
    location: "Online",
    online: true,
    type: "Conference",
    host: "Vine Leadership Network",
    description: "Equipping pastors, elders, and ministry leaders for faithful, Spirit-led church leadership.",
    attendees: "5,400",
    price: "Free",
    cta: "Register",
    accentColor: "#4F8FBB",
  },
  {
    month: "AUG",
    day: "8",
    title: "Marriage Enrichment Weekend",
    location: "Nairobi, Kenya",
    online: false,
    type: "Marriage Enrichment",
    host: "Family Life Africa",
    description: "A restorative weekend helping married couples reconnect, communicate, and covenant anew.",
    attendees: "190",
    price: "From $129",
    cta: "Register",
    accentColor: "#4FBBAA",
  },
  {
    month: "AUG",
    day: "22",
    title: "Youth Camp: Be Bold",
    location: "São Paulo, Brazil",
    online: false,
    type: "Youth Camp",
    host: "JOCUM Brasil",
    description: "Five-day immersive camp for teens aged 13–18 — worship, games, missions training, and discipleship.",
    attendees: "450",
    price: "From $89",
    cta: "Register",
    accentColor: "#BB4F7A",
  },
  {
    month: "SEP",
    day: "5",
    title: "Seoul Christian Leadership Forum",
    location: "Seoul, South Korea",
    online: false,
    type: "Leadership Conference",
    host: "Korean Church Alliance",
    description: "East Asia's premier Christian leadership forum with speakers from the global church.",
    attendees: "1,200",
    price: "From $149",
    cta: "Learn More",
    accentColor: "#6B4FBB",
  },
  {
    month: "SEP",
    day: "19",
    title: "Online Prayer Summit: 24-Hour Watch",
    location: "Online",
    online: true,
    type: "Prayer Summit",
    host: "Vine Global Prayer",
    description: "A continuous 24-hour prayer event with live segments hosted from every inhabited continent.",
    attendees: "12,000",
    price: "Free",
    cta: "Register",
    accentColor: "#D4AF37",
  },
  {
    month: "OCT",
    day: "3",
    title: "Sydney Evangelism Conference",
    location: "Sydney, Australia",
    online: false,
    type: "Conference",
    host: "Evangelism Australia",
    description: "Practical training and inspiration for Christians who want to share their faith naturally.",
    attendees: "730",
    price: "From $99",
    cta: "Register",
    accentColor: "#E07030",
  },
  {
    month: "NOV",
    day: "14",
    title: "Lagos Gospel Arts Festival",
    location: "Lagos, Nigeria",
    online: false,
    type: "Worship Night",
    host: "Gospel Arts Nigeria",
    description: "A two-day outdoor festival celebrating Christian music, film, visual arts, and spoken word.",
    attendees: "8,500",
    price: "Free",
    cta: "Learn More",
    accentColor: "#BB4F7A",
  },
];

const typeFilters = ["All", "Conference", "Retreat", "Workshop", "Online", "Local Church"];
const monthFilters = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

/* ------------------------------------------------------------------ */
/* Page                                                                  */
/* ------------------------------------------------------------------ */

export default function EventsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107,79,187,0.12) 0%, rgba(212,175,55,0.06) 40%, transparent 70%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto">
            <span
              className="inline-block mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(107,79,187,0.12)",
                color: "#9B7FEB",
                border: "1px solid rgba(107,79,187,0.25)",
              }}
            >
              87 Upcoming Events
            </span>
            <h1 className="text-5xl sm:text-6xl font-black mb-5 leading-tight" style={{ color: "#F2F2F8" }}>
              Events{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #D4AF37 0%, #F0D060 50%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Worldwide
              </span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#8A8AA8" }}>
              Connect with believers in person and online at conferences, retreats, workshops, and gatherings around the globe.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Filters */}
          <section className="mb-10">
            {/* Search */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl mb-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <Search size={16} style={{ color: "#6A6A88" }} />
              <input
                type="text"
                placeholder="Search events by name, location, or topic..."
                className="flex-1 bg-transparent text-sm outline-none"
                style={{ color: "#F2F2F8" }}
              />
            </div>

            {/* Filter rows */}
            <div className="flex flex-wrap gap-y-3 gap-x-2 items-center">
              {/* Type filters */}
              <div className="flex flex-wrap gap-2">
                {typeFilters.map((f, i) => (
                  <button
                    key={f}
                    className="text-xs font-semibold px-4 py-2 rounded-full transition-all duration-150"
                    style={
                      i === 0
                        ? { background: "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)", color: "#07070F" }
                        : { background: "#12121F", color: "#8A8AA8", border: "1px solid #1E1E32" }
                    }
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-6 hidden sm:block" style={{ background: "#1E1E32" }} />

              {/* Month filters */}
              <div className="flex flex-wrap gap-2">
                {monthFilters.map((m) => (
                  <button
                    key={m}
                    className="text-xs font-semibold px-3 py-2 rounded-full"
                    style={{ background: "#12121F", color: "#8A8AA8", border: "1px solid #1E1E32" }}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-6 hidden sm:block" style={{ background: "#1E1E32" }} />

              {/* Near Me toggle */}
              <button
                className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full"
                style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}
              >
                <MapPin size={12} />
                Near Me
              </button>
            </div>
          </section>

          {/* Featured Event */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>
                Featured Event
              </h2>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}
              >
                Editor&apos;s Pick
              </span>
            </div>

            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              {/* Banner */}
              <div
                className="relative h-48 sm:h-64 flex flex-col justify-end p-6 sm:p-8"
                style={{ background: featuredEvent.gradient }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 50% 70% at 10% 50%, rgba(212,175,55,0.12) 0%, transparent 60%)",
                  }}
                />
                <div className="relative flex flex-wrap items-end gap-4">
                  <div>
                    <span
                      className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2"
                      style={{
                        background: "rgba(212,175,55,0.2)",
                        color: "#D4AF37",
                        border: "1px solid rgba(212,175,55,0.35)",
                      }}
                    >
                      {featuredEvent.type}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black leading-tight" style={{ color: "#F2F2F8" }}>
                      {featuredEvent.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm" style={{ color: "#8A8AA8" }}>
                    <Calendar size={14} style={{ color: "#D4AF37" }} />
                    {featuredEvent.dates}
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "#8A8AA8" }}>
                    <MapPin size={14} style={{ color: "#D4AF37" }} />
                    {featuredEvent.location}
                  </div>
                  {featuredEvent.livestreamed && (
                    <div className="flex items-center gap-2 text-sm" style={{ color: "#4FBBAA" }}>
                      <Radio size={14} />
                      Also livestreamed
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm" style={{ color: "#8A8AA8" }}>
                    <Users size={14} style={{ color: "#6B4FBB" }} />
                    {featuredEvent.registered} registered
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: "#A0A0C0" }}>
                  {featuredEvent.description}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    className="px-7 py-3 rounded-xl text-sm font-black"
                    style={{ background: "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)", color: "#07070F" }}
                  >
                    Register Free
                  </button>
                  <span className="text-sm" style={{ color: "#6A6A88" }}>
                    By{" "}
                    <span style={{ color: "#8A8AA8" }}>{featuredEvent.organizer}</span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Events Grid */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>
                All Events
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ color: "#6A6A88" }}>Sort by:</span>
                <button
                  className="flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "#D4AF37" }}
                >
                  Date
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {events.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          </section>

          {/* Pagination */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm" style={{ color: "#6A6A88" }}>
              Showing{" "}
              <span style={{ color: "#F2F2F8" }}>12</span>{" "}
              of{" "}
              <span style={{ color: "#F2F2F8" }}>87</span>{" "}
              events
            </p>
            <button
              className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold"
              style={{
                background: "transparent",
                color: "#D4AF37",
                border: "1px solid rgba(212,175,55,0.35)",
              }}
            >
              Load More Events
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Event Card                                                            */
/* ------------------------------------------------------------------ */

function EventCard({ event }: { event: EventItem }) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "#12121F", border: "1px solid #1E1E32" }}
    >
      {/* Date badge + type */}
      <div className="p-5 pb-0">
        <div className="flex items-start justify-between mb-4">
          {/* Date badge */}
          <div
            className="flex flex-col items-center justify-center w-14 h-14 rounded-xl flex-shrink-0"
            style={{ background: `${event.accentColor}18`, border: `1px solid ${event.accentColor}30` }}
          >
            <span className="text-[10px] font-black uppercase" style={{ color: event.accentColor }}>
              {event.month}
            </span>
            <span className="text-2xl font-black leading-none" style={{ color: "#F2F2F8" }}>
              {event.day}
            </span>
          </div>

          {/* Type tag */}
          <span
            className="text-[10px] font-bold px-2.5 py-1 rounded-full"
            style={{
              background: `${event.accentColor}15`,
              color: event.accentColor,
              border: `1px solid ${event.accentColor}30`,
            }}
          >
            {event.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-black mb-2 leading-snug" style={{ color: "#F2F2F8" }}>
          {event.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-1">
          {event.online ? (
            <Globe size={12} style={{ color: "#4FBBAA" }} />
          ) : (
            <MapPin size={12} style={{ color: "#6A6A88" }} />
          )}
          <span
            className="text-xs font-semibold"
            style={{ color: event.online ? "#4FBBAA" : "#8A8AA8" }}
          >
            {event.online ? "🌐 Online" : event.location}
          </span>
        </div>

        {/* Host */}
        <p className="text-xs mb-3" style={{ color: "#6A6A88" }}>
          {event.host}
        </p>

        {/* Description */}
        <p className="text-xs leading-relaxed mb-4" style={{ color: "#8A8AA8" }}>
          {event.description}
        </p>
      </div>

      {/* Footer */}
      <div
        className="px-5 py-4 mt-auto flex items-center justify-between"
        style={{ borderTop: "1px solid #1E1E32" }}
      >
        <div>
          <div className="flex items-center gap-1 mb-0.5">
            <Users size={11} style={{ color: "#6A6A88" }} />
            <span className="text-xs" style={{ color: "#8A8AA8" }}>
              {event.attendees}
            </span>
          </div>
          <p
            className="text-xs font-bold"
            style={{ color: event.price === "Free" ? "#4FBBAA" : "#D4AF37" }}
          >
            {event.price}
          </p>
        </div>
        <button
          className="px-4 py-2 rounded-xl text-xs font-bold"
          style={{
            background:
              event.price === "Free"
                ? "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)"
                : "transparent",
            color: event.price === "Free" ? "#07070F" : "#D4AF37",
            border: event.price === "Free" ? "none" : "1px solid rgba(212,175,55,0.35)",
          }}
        >
          {event.cta}
        </button>
      </div>
    </div>
  );
}
