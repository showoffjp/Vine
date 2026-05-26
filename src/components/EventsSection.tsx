"use client";

import { useState } from "react";
import { MapPin, Users, Calendar, Globe, ArrowRight } from "lucide-react";

type FilterKey = "All" | "Online" | "In-Person" | "Conferences" | "Retreats" | "Local";

const filters: FilterKey[] = [
  "All",
  "Online",
  "In-Person",
  "Conferences",
  "Retreats",
  "Local",
];

const events = [
  {
    id: 1,
    title: "Global Prayer Summit",
    month: "May",
    day: "31",
    location: "Online",
    host: "The Vine Community",
    type: "Online",
    category: "Online",
    description:
      "48 hours of continuous prayer with believers from 80+ nations. Join any session as we cover the world in intercession.",
    attendees: "12,400",
    color: "#6B4FBB",
  },
  {
    id: 2,
    title: "Young Adults Retreat",
    month: "Jun",
    day: "13",
    location: "Asheville, NC",
    host: "New Life Church",
    type: "Retreat",
    category: "Retreats",
    description:
      "A 3-day wilderness retreat for 18–30s exploring identity, calling, and community in Christ. Limited spots.",
    attendees: "186",
    color: "#2E7D52",
  },
  {
    id: 3,
    title: "Apologetics Conference",
    month: "Jun",
    day: "27",
    location: "Chicago, IL",
    host: "Apologetics Academy",
    type: "Conference",
    category: "Conferences",
    description:
      "Two days of rigorous, faith-strengthening sessions on science, philosophy, and the defense of the Gospel.",
    attendees: "1,850",
    color: "#B71C1C",
  },
  {
    id: 4,
    title: "Online Worship Night",
    month: "Jul",
    day: "4",
    location: "Online",
    host: "Hillside Worship Collective",
    type: "Online",
    category: "Online",
    description:
      "A live-streamed 3-hour worship experience with artists from 6 countries. Open to all — no registration required.",
    attendees: "34,000",
    color: "#00FF88",
  },
  {
    id: 5,
    title: "Women's Bible Study Weekend",
    month: "Jul",
    day: "18",
    location: "Nashville, TN",
    host: "Grace & Truth Ministry",
    type: "In-Person",
    category: "In-Person",
    description:
      "Two days of deep Scripture study, fellowship, and worship for women of all ages. Childcare available.",
    attendees: "420",
    color: "#1565C0",
  },
  {
    id: 6,
    title: "Leadership Development Summit",
    month: "Aug",
    day: "8",
    location: "Lagos, Nigeria",
    host: "African Christian Leaders Forum",
    type: "Conference",
    category: "Conferences",
    description:
      "A 4-day summit equipping the next generation of African church leaders with practical ministry tools.",
    attendees: "3,200",
    color: "#7B2FBE",
  },
];

const typeColors: Record<string, string> = {
  Online: "#6B4FBB",
  Retreat: "#2E7D52",
  Conference: "#B71C1C",
  "In-Person": "#1565C0",
};

export default function EventsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const filtered =
    activeFilter === "All"
      ? events
      : events.filter((e) => e.category === activeFilter);

  return (
    <section
      style={{
        background: "#07070F",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(107,79,187,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "36px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <Calendar size={16} style={{ color: "#00FF88" }} />
              <span
                style={{
                  color: "#00FF88",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Happening Soon
              </span>
            </div>
            <h2
              style={{
                color: "#F2F2F8",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 900,
                margin: 0,
              }}
            >
              Events <span className="gold-gradient">Worldwide</span>
            </h2>
          </div>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#00FF88",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            View All Events <ArrowRight size={16} />
          </a>
        </div>

        {/* Filter row */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          {filters.map((f) => {
            const active = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  border: active
                    ? "1px solid rgba(0,255,136,0.6)"
                    : "1px solid rgba(255,255,255,0.08)",
                  background: active
                    ? "rgba(0,255,136,0.12)"
                    : "transparent",
                  color: active ? "#00FF88" : "#8A8AA8",
                  fontSize: "0.82rem",
                  fontWeight: active ? 700 : 500,
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
            gap: "20px",
          }}
        >
          {filtered.map((event) => {
            const typeColor = typeColors[event.type] ?? "#6B4FBB";
            const isOnline = event.location === "Online";

            return (
              <div
                key={event.id}
                className="card-glow"
                style={{
                  background: "#12121F",
                  borderRadius: "18px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, ${event.color}, transparent)`,
                  }}
                />

                {/* Date + type row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  {/* Date badge */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: "56px",
                      borderRadius: "12px",
                      background: `${event.color}18`,
                      border: `1px solid ${event.color}35`,
                      padding: "8px 0",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        color: event.color,
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {event.month}
                    </p>
                    <p
                      style={{
                        color: "#F2F2F8",
                        fontSize: "1.4rem",
                        fontWeight: 900,
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
                      gap: "4px",
                      padding: "4px 12px",
                      borderRadius: "999px",
                      background: `${typeColor}20`,
                      border: `1px solid ${typeColor}44`,
                      color: typeColor,
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                    }}
                  >
                    {isOnline && <Globe size={10} />}
                    {event.type}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3
                    style={{
                      color: "#F2F2F8",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      marginBottom: "4px",
                      lineHeight: 1.35,
                    }}
                  >
                    {event.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#6A6A88",
                      fontSize: "0.75rem",
                    }}
                  >
                    <MapPin size={11} />
                    <span>{event.location}</span>
                    <span style={{ color: "#3A3A55" }}>·</span>
                    <span>{event.host}</span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "#8A8AA8",
                    fontSize: "0.82rem",
                    lineHeight: 1.65,
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
                    paddingTop: "12px",
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "#6A6A88",
                      fontSize: "0.75rem",
                    }}
                  >
                    <Users size={12} />
                    <span style={{ color: "#8A8AA8", fontWeight: 600 }}>
                      {event.attendees}
                    </span>{" "}
                    attending
                  </div>
                  <button
                    className="btn-gold"
                    style={{
                      padding: "8px 20px",
                      borderRadius: "10px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#6A6A88",
            }}
          >
            <Calendar size={40} style={{ margin: "0 auto 16px", opacity: 0.4 }} />
            <p style={{ fontSize: "1rem" }}>
              No events found for this filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
