import { Play, Eye, Clock, ArrowRight, Video } from "lucide-react";

const featured = {
  title: "When God Feels Silent: Trusting Him in the Dark Seasons",
  channel: "Pastor David Okafor",
  views: "142K views",
  duration: "48:22",
  tag: "Sermon",
  gradient: "linear-gradient(135deg, #1a0533 0%, #3d1060 40%, #1a0533 100%)",
  accentColor: "#6B4FBB",
};

const videos = [
  {
    title: "From Addiction to Grace: My Testimony",
    channel: "Grace & Truth Ministry",
    views: "38K views",
    duration: "22:14",
    tag: "Testimony",
    gradient: "linear-gradient(135deg, #0a2010 0%, #1a4a25 100%)",
    accentColor: "#2E7D52",
  },
  {
    title: "Sunday Worship: Enter His Courts with Praise",
    channel: "Hillside Worship Collective",
    views: "91K views",
    duration: "35:08",
    tag: "Worship",
    gradient: "linear-gradient(135deg, #1a1000 0%, #3d2800 100%)",
    accentColor: "#00FF88",
  },
  {
    title: "5-Minute Morning Devotional: Psalm 23",
    channel: "The Daily Vine",
    views: "27K views",
    duration: "5:03",
    tag: "Devotional",
    gradient: "linear-gradient(135deg, #001533 0%, #003366 100%)",
    accentColor: "#1565C0",
  },
  {
    title: "Does Science Disprove God? Answering Atheism",
    channel: "Apologetics Academy",
    views: "55K views",
    duration: "41:50",
    tag: "Teaching",
    gradient: "linear-gradient(135deg, #1a0000 0%, #4a1010 100%)",
    accentColor: "#B71C1C",
  },
];

const tagColors: Record<string, string> = {
  Sermon: "#6B4FBB",
  Testimony: "#2E7D52",
  Worship: "#00FF88",
  Devotional: "#1565C0",
  Teaching: "#B71C1C",
};

function TagPill({ tag }: { tag: string }) {
  return (
    <span
      style={{
        padding: "3px 10px",
        borderRadius: "999px",
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        background: `${tagColors[tag] ?? "#6B4FBB"}30`,
        color: tagColors[tag] ?? "#6B4FBB",
        border: `1px solid ${tagColors[tag] ?? "#6B4FBB"}50`,
      }}
    >
      {tag}
    </span>
  );
}

export default function VideoSpotlight() {
  return (
    <section
      style={{
        background: "#07070F",
        padding: "80px 0",
        position: "relative",
      }}
    >
      {/* Section glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(107,79,187,0.07) 0%, transparent 70%)",
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
            marginBottom: "40px",
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
              <Video size={16} style={{ color: "#00FF88" }} />
              <span
                style={{
                  color: "#00FF88",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Featured Content
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
              Video <span className="gold-gradient">Library</span>
            </h2>
          </div>
          <a
            href="/video"
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
            Watch Now <ArrowRight size={16} />
          </a>
        </div>

        {/* Featured video */}
        <div
          className="card-glow"
          style={{
            background: "#12121F",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "24px",
            cursor: "pointer",
          }}
        >
          {/* 16:9 thumbnail */}
          <div style={{ position: "relative", paddingTop: "42%" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: featured.gradient,
              }}
            />
            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(7,7,15,0.9) 0%, rgba(7,7,15,0.2) 60%, transparent 100%)",
              }}
            />
            {/* Play button */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "rgba(0,255,136,0.15)",
                  border: "2px solid rgba(0,255,136,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.2s",
                }}
              >
                <Play
                  size={28}
                  style={{
                    color: "#00FF88",
                    fill: "#00FF88",
                    marginLeft: "4px",
                  }}
                />
              </div>
            </div>
            {/* Duration badge */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                background: "rgba(7,7,15,0.85)",
                color: "#F2F2F8",
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "3px 8px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Clock size={11} />
              {featured.duration}
            </div>
            {/* Bottom content overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "24px",
                right: "100px",
              }}
            >
              <TagPill tag={featured.tag} />
              <h3
                style={{
                  color: "#F2F2F8",
                  fontSize: "clamp(1rem, 2vw, 1.4rem)",
                  fontWeight: 700,
                  marginTop: "8px",
                  marginBottom: "6px",
                  lineHeight: 1.3,
                }}
              >
                {featured.title}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#8A8AA8",
                  fontSize: "0.8rem",
                }}
              >
                <span>{featured.channel}</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Eye size={12} />
                  {featured.views}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 smaller videos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          {videos.map((v) => (
            <div
              key={v.title}
              className="card-glow"
              style={{
                background: "#12121F",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Thumbnail 16:9 */}
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: v.gradient,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(7,7,15,0.6) 0%, transparent 60%)",
                  }}
                />
                {/* Mini play button */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(0,255,136,0.15)",
                      border: "1.5px solid rgba(0,255,136,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Play
                      size={16}
                      style={{
                        color: "#00FF88",
                        fill: "#00FF88",
                        marginLeft: "2px",
                      }}
                    />
                  </div>
                </div>
                {/* Duration */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    background: "rgba(7,7,15,0.85)",
                    color: "#F2F2F8",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    padding: "2px 6px",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <Clock size={9} />
                  {v.duration}
                </div>
              </div>
              {/* Card body */}
              <div style={{ padding: "14px 16px" }}>
                <div style={{ marginBottom: "8px" }}>
                  <TagPill tag={v.tag} />
                </div>
                <h4
                  style={{
                    color: "#F2F2F8",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: "8px",
                  }}
                >
                  {v.title}
                </h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "#8A8AA8",
                    fontSize: "0.75rem",
                  }}
                >
                  <span>{v.channel}</span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    <Eye size={11} />
                    {v.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse all button */}
        <div style={{ textAlign: "center", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/video"
            className="btn-outline-gold"
            style={{
              padding: "12px 32px",
              borderRadius: "12px",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            Browse All Videos <ArrowRight size={16} />
          </a>
          <a
            href="/live"
            style={{
              padding: "12px 32px",
              borderRadius: "12px",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.3)",
              color: "#EF4444",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444", display: "inline-block", animation: "pulse 2s infinite" }} />
            Watch Live
          </a>
        </div>
      </div>
    </section>
  );
}
