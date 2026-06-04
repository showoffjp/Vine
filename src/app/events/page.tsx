"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventRegisterButton from "@/components/EventRegisterButton";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Globe,
  Radio,
  ChevronDown,
  ArrowRight,
  X,
  Bookmark,
  Check,
} from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

/* ------------------------------------------------------------------ */
/* Data                                                                  */
/* ------------------------------------------------------------------ */

const featuredEvent = {
  id: "global-prayer-summit-2026",
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
  id: string;
  month: string;
  monthFull: string;
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
    id: "womens-gathering-rooted-rising",
    month: "JUN",
    monthFull: "Jun",
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
    id: "online-bible-study-gospel-john",
    month: "JUN",
    monthFull: "Jun",
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
    id: "apologetics-symposium-faith-reason",
    month: "JUN",
    monthFull: "Jun",
    day: "21",
    title: "Apologetics Symposium: Faith & Reason",
    location: "Dallas, TX",
    online: false,
    type: "Conference",
    host: "Reasonable Faith Dallas",
    description: "A full-day symposium on defending the Christian faith in a secular age, with Q&A sessions.",
    attendees: "412",
    price: "From $79",
    cta: "Register",
    accentColor: "#6B4FBB",
  },
  {
    id: "worship-night-heavens-frequency",
    month: "JUL",
    monthFull: "Jul",
    day: "4",
    title: "Worship Night: Heaven's Frequency",
    location: "London, UK",
    online: false,
    type: "Retreat",
    host: "All Nations Church London",
    description: "An evening of uninterrupted worship and intercession for the nations of the earth.",
    attendees: "1,820",
    price: "Free",
    cta: "Register",
    accentColor: "#3a7d56",
  },
  {
    id: "young-adults-retreat-wild-faith",
    month: "JUL",
    monthFull: "Jul",
    day: "11",
    title: "Young Adults Retreat: Wild Faith",
    location: "Toronto, Canada",
    online: false,
    type: "Retreat",
    host: "Alpha Canada",
    description: "A weekend retreat for 18–30s to deepen faith, forge friendships, and answer the big questions.",
    attendees: "280",
    price: "From $199",
    cta: "Register",
    accentColor: "#E07030",
  },
  {
    id: "online-leadership-conference-jul",
    month: "JUL",
    monthFull: "Jul",
    day: "25",
    title: "Online Leadership Conference",
    location: "Online",
    online: true,
    type: "Online",
    host: "Vine Leadership Network",
    description: "Equipping pastors, elders, and ministry leaders for faithful, Spirit-led church leadership.",
    attendees: "5,400",
    price: "Free",
    cta: "Register",
    accentColor: "#4F8FBB",
  },
  {
    id: "marriage-enrichment-weekend-nairobi",
    month: "AUG",
    monthFull: "Aug",
    day: "8",
    title: "Marriage Enrichment Weekend",
    location: "Nairobi, Kenya",
    online: false,
    type: "Workshop",
    host: "Family Life Africa",
    description: "A restorative weekend helping married couples reconnect, communicate, and covenant anew.",
    attendees: "190",
    price: "From $129",
    cta: "Register",
    accentColor: "#4FBBAA",
  },
  {
    id: "youth-camp-be-bold-brazil",
    month: "AUG",
    monthFull: "Aug",
    day: "22",
    title: "Youth Camp: Be Bold",
    location: "São Paulo, Brazil",
    online: false,
    type: "Retreat",
    host: "JOCUM Brasil",
    description: "Five-day immersive camp for teens aged 13–18 — worship, games, missions training, and discipleship.",
    attendees: "450",
    price: "From $89",
    cta: "Register",
    accentColor: "#BB4F7A",
  },
  {
    id: "seoul-christian-leadership-forum",
    month: "SEP",
    monthFull: "Sep",
    day: "5",
    title: "Seoul Christian Leadership Forum",
    location: "Seoul, South Korea",
    online: false,
    type: "Conference",
    host: "Korean Church Alliance",
    description: "East Asia's premier Christian leadership forum with speakers from the global church.",
    attendees: "1,200",
    price: "From $149",
    cta: "Learn More",
    accentColor: "#6B4FBB",
  },
  {
    id: "online-prayer-summit-24hr",
    month: "SEP",
    monthFull: "Sep",
    day: "19",
    title: "Online Prayer Summit: 24-Hour Watch",
    location: "Online",
    online: true,
    type: "Online",
    host: "Vine Global Prayer",
    description: "A continuous 24-hour prayer event with live segments hosted from every inhabited continent.",
    attendees: "12,000",
    price: "Free",
    cta: "Register",
    accentColor: "#3a7d56",
  },
  {
    id: "sydney-evangelism-conference",
    month: "OCT",
    monthFull: "Oct",
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
    id: "lagos-gospel-arts-festival",
    month: "NOV",
    monthFull: "Nov",
    day: "14",
    title: "Lagos Gospel Arts Festival",
    location: "Lagos, Nigeria",
    online: false,
    type: "Local Church",
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
  const [activeType, setActiveType] = usePersistedState("vine_events_active_type", "All");
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [nearMe, setNearMe] = useState(false);
  const [sortDir, setSortDir] = usePersistedState<string>("vine_events_sort_dir", "asc");
  const [visibleCount, setVisibleCount] = useState(6);
  const [goingEvents, setGoingEvents] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_events_going"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedEvents, setSavedEvents] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_events_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_events_going", JSON.stringify([...goingEvents])); } catch {}
  }, [goingEvents]);
  useEffect(() => {
    try { localStorage.setItem("vine_events_saved", JSON.stringify([...savedEvents])); } catch {}
  }, [savedEvents]);

  const toggleGoing = (id: string) => setGoingEvents(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleSaved = (id: string) => setSavedEvents(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const filtered = events.filter((e) => {
    const matchType = activeType === "All" || e.type === activeType;
    const matchMonth = !activeMonth || e.monthFull === activeMonth;
    const matchSearch =
      !searchQuery ||
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.host.toLowerCase().includes(searchQuery.toLowerCase());
    const matchNear = !nearMe || !e.online;
    return matchType && matchMonth && matchSearch && matchNear;
  });

  const monthOrder = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
  const eventTime = (e: EventItem) => monthOrder.indexOf(e.monthFull) * 100 + parseInt(e.day, 10);
  const sorted = [...filtered].sort((a, b) =>
    sortDir === "asc" ? eventTime(a) - eventTime(b) : eventTime(b) - eventTime(a)
  );
  const visible = sorted.slice(0, visibleCount);

  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
      <Navbar />

      <main className="page-body">
        {/* Hero */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107,79,187,0.12) 0%, rgba(58,125,86,0.06) 40%, transparent 70%)",
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
              {events.length} Upcoming Events
            </span>
            <h1 className="text-5xl sm:text-6xl font-black mb-5 leading-tight" style={{ color: "#F2F2F8" }}>
              Events{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #3a7d56 0%, #52a876 50%, #3a7d56 100%)",
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
              style={{
                background: "#12121F",
                border: `1px solid ${searchQuery ? "rgba(58,125,86,0.3)" : "#1E1E32"}`,
              }}
            >
              <Search size={16} style={{ color: "#6A6A88" }} />
              <input
                type="text"
                placeholder="Search events by name, location, or topic..."
                className="flex-1 bg-transparent text-sm outline-none"
                style={{ color: "#F2F2F8" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} style={{ color: "#6A6A88" }}>
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Filter rows */}
            <div className="flex flex-wrap gap-y-3 gap-x-2 items-center">
              {/* Type filters */}
              <div className="flex flex-wrap gap-2">
                {typeFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveType(f)}
                    className="text-xs font-semibold px-4 py-2 rounded-full transition-all duration-150"
                    style={
                      activeType === f
                        ? { background: "linear-gradient(135deg, #3a7d56 0%, #B8960C 100%)", color: "#07070F" }
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
                    onClick={() => setActiveMonth(activeMonth === m ? null : m)}
                    className="text-xs font-semibold px-3 py-2 rounded-full transition-all"
                    style={
                      activeMonth === m
                        ? { background: "rgba(107,79,187,0.25)", color: "#9B7FEB", border: "1px solid rgba(107,79,187,0.4)" }
                        : { background: "#12121F", color: "#8A8AA8", border: "1px solid #1E1E32" }
                    }
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-6 hidden sm:block" style={{ background: "#1E1E32" }} />

              {/* Near Me toggle */}
              <button
                onClick={() => setNearMe(!nearMe)}
                className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all"
                style={{
                  background: nearMe ? "rgba(58,125,86,0.2)" : "rgba(58,125,86,0.1)",
                  color: "#3a7d56",
                  border: `1px solid ${nearMe ? "rgba(58,125,86,0.5)" : "rgba(58,125,86,0.25)"}`,
                }}
              >
                <MapPin size={12} />
                {nearMe ? "In-Person Only ✓" : "Near Me"}
              </button>
            </div>

            {/* Active filter summary */}
            {(activeType !== "All" || activeMonth || searchQuery || nearMe) && (
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <span className="text-xs" style={{ color: "#6A6A88" }}>
                  {filtered.length} {filtered.length === 1 ? "event" : "events"} found
                </span>
                <button
                  onClick={() => { setActiveType("All"); setActiveMonth(null); setSearchQuery(""); setNearMe(false); }}
                  className="text-xs px-3 py-1 rounded-full font-semibold"
                  style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.2)" }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </section>

          {/* Featured Event */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>
                Featured Event
              </h2>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.25)" }}
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
                      "radial-gradient(ellipse 50% 70% at 10% 50%, rgba(58,125,86,0.12) 0%, transparent 60%)",
                  }}
                />
                <div className="relative flex flex-wrap items-end gap-4">
                  <div>
                    <span
                      className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2"
                      style={{
                        background: "rgba(58,125,86,0.2)",
                        color: "#3a7d56",
                        border: "1px solid rgba(58,125,86,0.35)",
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
                    <Calendar size={14} style={{ color: "#3a7d56" }} />
                    {featuredEvent.dates}
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "#8A8AA8" }}>
                    <MapPin size={14} style={{ color: "#3a7d56" }} />
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
                  <a
                    href={`/events/${featuredEvent.id}`}
                    className="px-7 py-3 rounded-xl text-sm font-black inline-block"
                    style={{ background: "linear-gradient(135deg, #3a7d56 0%, #52a876 100%)", color: "#07070F", textDecoration: "none" }}
                  >
                    Register Free
                  </a>
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
                {filtered.length === events.length ? "All Events" : `${filtered.length} Events Found`}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ color: "#6A6A88" }}>Sort by:</span>
                <button
                  onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
                  className="flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "#3a7d56" }}
                >
                  Date {sortDir === "asc" ? "(Earliest)" : "(Latest)"}
                  <ChevronDown size={14} style={{ transform: sortDir === "asc" ? "none" : "rotate(180deg)" }} />
                </button>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div
                className="rounded-2xl p-12 text-center"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-4xl mb-4">🔍</p>
                <p className="font-bold text-lg mb-2" style={{ color: "#F2F2F8" }}>No events match your filters</p>
                <p className="text-sm mb-4" style={{ color: "#6A6A88" }}>Try adjusting your search or clearing some filters.</p>
                <button
                  onClick={() => { setActiveType("All"); setActiveMonth(null); setSearchQuery(""); setNearMe(false); }}
                  className="px-6 py-2.5 rounded-xl text-sm font-bold text-black"
                  style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visible.map((event) => (
                  <EventCard
                    key={event.title}
                    event={event}
                    going={goingEvents.has(event.id)}
                    saved={savedEvents.has(event.id)}
                    onToggleGoing={() => toggleGoing(event.id)}
                    onToggleSaved={() => toggleSaved(event.id)}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Pagination */}
          {filtered.length > 0 && (
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm" style={{ color: "#6A6A88" }}>
                Showing{" "}
                <span style={{ color: "#F2F2F8" }}>{visible.length}</span>{" "}
                of{" "}
                <span style={{ color: "#F2F2F8" }}>{filtered.length}</span>{" "}
                events
              </p>
              {visible.length < filtered.length && (
                <button
                  onClick={() => setVisibleCount((c) => c + 6)}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold"
                  style={{
                    background: "transparent",
                    color: "#3a7d56",
                    border: "1px solid rgba(58,125,86,0.35)",
                  }}
                >
                  Load More Events
                  <ArrowRight size={15} />
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Event Card                                                            */
/* ------------------------------------------------------------------ */

function EventCard({ event, going, saved, onToggleGoing, onToggleSaved }: {
  event: EventItem;
  going: boolean;
  saved: boolean;
  onToggleGoing: () => void;
  onToggleSaved: () => void;
}) {
  const Wrapper = event.id ? "a" : "div";
  const stop = (e: React.MouseEvent, fn: () => void) => { e.preventDefault(); e.stopPropagation(); fn(); };
  return (
    <Wrapper
      {...(event.id ? { href: `/events/${event.id}`, style: { textDecoration: "none" } } : {})}
      className="rounded-2xl overflow-hidden flex flex-col group cursor-pointer transition-all hover:border-[rgba(58,125,86,0.2)]"
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
            style={{ color: event.price === "Free" ? "#4FBBAA" : "#3a7d56" }}
          >
            {event.price}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => stop(e, onToggleGoing)}
            aria-label={going ? "Cancel RSVP" : "Mark as going"}
            title={going ? "You're going" : "I'm going"}
            className="flex items-center justify-center rounded-lg transition-all"
            style={{ width: 34, height: 34, flexShrink: 0, background: going ? "rgba(58,125,86,0.15)" : "transparent", border: `1px solid ${going ? "rgba(58,125,86,0.4)" : "#1E1E32"}`, color: going ? "#3a7d56" : "#6A6A88", cursor: "pointer" }}
          >
            <Check size={15} />
          </button>
          <button
            onClick={(e) => stop(e, onToggleSaved)}
            aria-label={saved ? "Remove from saved" : "Save event"}
            title={saved ? "Saved" : "Save event"}
            className="flex items-center justify-center rounded-lg transition-all"
            style={{ width: 34, height: 34, flexShrink: 0, background: saved ? "rgba(107,79,187,0.15)" : "transparent", border: `1px solid ${saved ? "rgba(107,79,187,0.4)" : "#1E1E32"}`, color: saved ? "#A080FF" : "#6A6A88", cursor: "pointer" }}
          >
            <Bookmark size={14} fill={saved ? "#A080FF" : "none"} />
          </button>
          <EventRegisterButton cta={event.cta} price={event.price} eventTitle={event.title} />
        </div>
      </div>
    </Wrapper>
  );
}
