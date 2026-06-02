"use client";

import { useState } from "react";
import { MapPin, Users, Calendar, Globe, ArrowRight } from "lucide-react";

type FilterKey = "All" | "Online" | "In-Person" | "Conferences" | "Retreats";

const FILTERS: FilterKey[] = ["All", "Online", "In-Person", "Conferences", "Retreats"];

const EVENTS = [
  {
    id: 1,
    title: "Global Prayer Summit",
    month: "May",
    day: "31",
    location: "Online",
    host: "The Vine Community",
    type: "Online" as const,
    category: "Online" as FilterKey,
    description: "48 hours of continuous prayer with believers from 80+ nations. Join any session as we cover the world in intercession.",
    attendees: "12,400",
  },
  {
    id: 2,
    title: "Young Adults Retreat",
    month: "Jun",
    day: "13",
    location: "Asheville, NC",
    host: "New Life Church",
    type: "Retreat" as const,
    category: "Retreats" as FilterKey,
    description: "A 3-day wilderness retreat for 18–30s exploring identity, calling, and community in Christ. Limited spots available.",
    attendees: "186",
  },
  {
    id: 3,
    title: "Apologetics Conference",
    month: "Jun",
    day: "27",
    location: "Chicago, IL",
    host: "Apologetics Academy",
    type: "Conference" as const,
    category: "Conferences" as FilterKey,
    description: "Two days of rigorous, faith-strengthening sessions on science, philosophy, and the defense of the Gospel.",
    attendees: "1,850",
  },
  {
    id: 4,
    title: "Online Worship Night",
    month: "Jul",
    day: "4",
    location: "Online",
    host: "Hillside Worship Collective",
    type: "Online" as const,
    category: "Online" as FilterKey,
    description: "A live-streamed 3-hour worship experience with artists from 6 countries. Open to all — no registration required.",
    attendees: "34,000",
  },
  {
    id: 5,
    title: "Women's Bible Study Weekend",
    month: "Jul",
    day: "18",
    location: "Nashville, TN",
    host: "Grace & Truth Ministry",
    type: "In-Person" as const,
    category: "In-Person" as FilterKey,
    description: "Two days of deep Scripture study, fellowship, and worship for women of all ages. Childcare available.",
    attendees: "420",
  },
  {
    id: 6,
    title: "Leadership Development Summit",
    month: "Aug",
    day: "8",
    location: "Lagos, Nigeria",
    host: "African Christian Leaders Forum",
    type: "Conference" as const,
    category: "Conferences" as FilterKey,
    description: "A 4-day summit equipping the next generation of African church leaders with practical ministry tools.",
    attendees: "3,200",
  },
];

export default function EventsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const filtered = activeFilter === "All" ? EVENTS : EVENTS.filter((e) => e.category === activeFilter);

  return (
    <section
      style={{
        background: "#050e07",
        padding: "100px 4vw",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: 500,
          height: 500,
          background: "radial-gradient(ellipse, rgba(58,125,86,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
              Happening Soon
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                fontWeight: 300,
                color: "#f2e6c8",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Events
              <em style={{ fontStyle: "italic", color: "#e8c162" }}> Worldwide.</em>
            </h2>
          </div>
          <a
            href="/events"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.78rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c9a227",
              textDecoration: "none",
            }}
          >
            View All Events <ArrowRight size={14} />
          </a>
        </div>

        {/* Filter row */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {FILTERS.map((f) => {
            const active = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: "5px 16px",
                  borderRadius: 2,
                  border: active ? "0.5px solid rgba(201,162,39,0.55)" : "0.5px solid rgba(201,162,39,0.2)",
                  background: active ? "rgba(201,162,39,0.1)" : "transparent",
                  color: active ? "#c9a227" : "#9a8f72",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.75rem",
                  fontWeight: active ? 600 : 400,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Events grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1rem",
          }}
        >
          {filtered.map((event) => {
            const isOnline = event.location === "Online";

            return (
              <div
                key={event.id}
                style={{
                  background: "#0a1a0e",
                  border: "0.5px solid rgba(201,162,39,0.13)",
                  borderTop: "1.5px solid rgba(201,162,39,0.35)",
                  borderRadius: 3,
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  position: "relative",
                  transition: "border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.13)";
                }}
              >
                {/* Date + type */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  {/* Date badge */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 52,
                      background: "rgba(201,162,39,0.08)",
                      border: "0.5px solid rgba(201,162,39,0.25)",
                      borderRadius: 2,
                      padding: "6px 0",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-jost, system-ui, sans-serif)",
                        fontSize: "0.58rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#c9a227",
                      }}
                    >
                      {event.month}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant, Georgia, serif)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#f2e6c8",
                        lineHeight: 1,
                      }}
                    >
                      {event.day}
                    </p>
                  </div>

                  {/* Type pill */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "3px 10px",
                      borderRadius: 2,
                      background: "rgba(201,162,39,0.06)",
                      border: "0.5px solid rgba(201,162,39,0.2)",
                      color: "#9a8f72",
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.62rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {isOnline && <Globe size={9} />}
                    {event.type}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: "#f2e6c8",
                      marginBottom: 4,
                      lineHeight: 1.3,
                    }}
                  >
                    {event.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.72rem",
                      color: "#9a8f72",
                    }}
                  >
                    <MapPin size={10} />
                    <span>{event.location}</span>
                    <span style={{ color: "rgba(201,162,39,0.25)" }}>·</span>
                    <span>{event.host}</span>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.82rem",
                    color: "#9a8f72",
                    lineHeight: 1.65,
                    fontWeight: 300,
                    flex: 1,
                  }}
                >
                  {event.description}
                </p>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 10,
                    borderTop: "0.5px solid rgba(201,162,39,0.08)",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.72rem",
                      color: "#9a8f72",
                    }}
                  >
                    <Users size={11} />
                    <strong style={{ color: "#c9b98a" }}>{event.attendees}</strong> attending
                  </div>
                  <button
                    style={{
                      padding: "6px 18px",
                      borderRadius: 2,
                      background: "#c9a227",
                      color: "#1a0e00",
                      border: "none",
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e8c162"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#c9a227"; }}
                  >
                    Register
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem", color: "#9a8f72" }}>
            <Calendar size={36} style={{ margin: "0 auto 1rem", opacity: 0.3 }} />
            <p
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.9rem",
              }}
            >
              No events found for this filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
