"use client";

const HUBS = [
  { label: "The Branches", href: "/discussions" },
  { label: "The Word", href: "/bible" },
  { label: "The Well", href: "/mental-health" },
  { label: "The Light", href: "/daily" },
  { label: "The Scroll", href: "/resources" },
  { label: "The Garden", href: "/life-hacks" },
  { label: "The Flock", href: "/community" },
  { label: "Vine TV", href: "/video" },
];

const COMMUNITY_LINKS = [
  { label: "Discussions", href: "/discussions" },
  { label: "Groups", href: "/groups" },
  { label: "Events", href: "/events" },
  { label: "Prayer Wall", href: "/prayer-wall" },
  { label: "Find a Church", href: "/church-finder" },
  { label: "Creators", href: "/creators" },
  { label: "Global Connect", href: "/global-connect" },
];

const RESOURCES_LINKS = [
  { label: "Bible Reader", href: "/bible" },
  { label: "Devotionals", href: "/daily" },
  { label: "Commentaries", href: "/commentary-guide" },
  { label: "Study Tools", href: "/bible-study" },
  { label: "Apologetics", href: "/apologetics" },
  { label: "Theology 101", href: "/theology" },
  { label: "Podcast Library", href: "/podcast" },
  { label: "Reading Plans", href: "/reading-plan" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
  { label: "Give", href: "/giving" },
  { label: "Settings", href: "/settings" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        style={{
          color: "#9a8f72",
          textDecoration: "none",
          fontSize: "0.82rem",
          fontWeight: 300,
          fontFamily: "var(--font-jost, system-ui, sans-serif)",
          transition: "color 0.15s",
          display: "inline-block",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#f2e6c8")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9a8f72")}
      >
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050e07",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        padding: "60px 4vw 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top: brand + links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "5rem",
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "0.5px solid rgba(242,230,200,0.06)",
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                marginBottom: "1rem",
              }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="15" y="4" width="4" height="18" rx="1.5" fill="#c9a227" />
                <rect x="8" y="10" width="18" height="4" rx="1.5" fill="#c9a227" />
                <path
                  d="M17 22 Q11 26 8 30"
                  stroke="#3a7d56"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17 22 Q23 26 26 30"
                  stroke="#3a7d56"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="30" r="2" fill="#3a7d56" opacity="0.8" />
                <circle cx="26" cy="30" r="2" fill="#3a7d56" opacity="0.8" />
              </svg>
              <span
                style={{
                  fontFamily:
                    "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#f2e6c8",
                  letterSpacing: "0.04em",
                }}
              >
                The<span style={{ color: "#c9a227" }}> Vine</span>
              </span>
            </a>
            <p
              style={{
                fontSize: "0.83rem",
                color: "#9a8f72",
                lineHeight: 1.7,
                fontWeight: 300,
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                marginBottom: "1.2rem",
              }}
            >
              Christianity&apos;s first all-in-one platform &mdash; community,
              Scripture, wellness, life guides, and more, for every believer on
              earth.
            </p>
            <p
              style={{
                fontFamily:
                  "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "#9a8f72",
              }}
            >
              &ldquo;I am the vine; you are the branches.&rdquo;
              <br />
              <span
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontStyle: "normal",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  display: "block",
                  marginTop: 4,
                }}
              >
                John 15:5
              </span>
            </p>
          </div>

          {/* Link columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
            }}
          >
            {/* Hubs */}
            <div>
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                }}
              >
                Hubs
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {HUBS.map((l) => (
                  <FooterLink key={l.label} {...l} />
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                }}
              >
                Community
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {COMMUNITY_LINKS.map((l) => (
                  <FooterLink key={l.label} {...l} />
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                }}
              >
                Resources
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {RESOURCES_LINKS.map((l) => (
                  <FooterLink key={l.label} {...l} />
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                }}
              >
                Company
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {COMPANY_LINKS.map((l) => (
                  <FooterLink key={l.label} {...l} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              color: "#9a8f72",
              fontWeight: 300,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
            }}
          >
            &copy; 2026 The Vine. Built for the Body of Christ.
          </p>
          <p
            style={{
              fontFamily:
                "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "#9a8f72",
            }}
          >
            &ldquo;I am the vine; you are the branches.&rdquo; &mdash; John 15:5
          </p>
        </div>
      </div>
    </footer>
  );
}
