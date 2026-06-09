"use client";

import { useState } from "react";
import Link from "next/link";

type LinkEntry = { label: string; href: string };

const HUBS: LinkEntry[] = [
  { label: "The Branches", href: "/discussions" },
  { label: "The Word", href: "/bible" },
  { label: "The Well", href: "/mental-health" },
  { label: "The Light", href: "/daily" },
  { label: "The Scroll", href: "/resources" },
  { label: "The Garden", href: "/life-hacks" },
  { label: "The Flock", href: "/community" },
  { label: "Vine TV", href: "/video" },
];

const COMMUNITY_LINKS: LinkEntry[] = [
  { label: "Discussions", href: "/discussions" },
  { label: "Groups", href: "/groups" },
  { label: "Events", href: "/events" },
  { label: "Prayer Wall", href: "/prayer" },
  { label: "Find a Church", href: "/church-finder" },
  { label: "Creators", href: "/creators" },
  { label: "Global Connect", href: "/global-connect" },
  { label: "Stories", href: "/stories" },
];

const RESOURCES_LINKS: LinkEntry[] = [
  { label: "Bible Reader", href: "/bible" },
  { label: "Devotionals", href: "/daily" },
  { label: "Commentaries", href: "/commentary-guide" },
  { label: "Study Tools", href: "/bible-study" },
  { label: "Apologetics", href: "/apologetics" },
  { label: "Theology 101", href: "/theology" },
  { label: "Podcast Library", href: "/podcast" },
  { label: "Reading Plans", href: "/reading-plan" },
  { label: "Discernment Guide", href: "/discernment-gods-will" },
  { label: "The Enneagram", href: "/enneagram-christianity" },
  { label: "Generational Trauma", href: "/generational-trauma-faith" },
  { label: "Introverts & Faith", href: "/introverts-faith-church" },
  { label: "The Ignatian Examen", href: "/ignatian-examen" },
  { label: "Digital Detox", href: "/digital-detox-faith" },
  { label: "Prosperity Gospel", href: "/prosperity-gospel" },
  { label: "Women in Ministry", href: "/complementarianism-egalitarianism" },
  { label: "Spiritual Gifts Debate", href: "/cessationism-continuationism" },
  { label: "Calvinism & Arminianism", href: "/calvinism-arminianism" },
  { label: "Christian Nationalism", href: "/christian-nationalism" },
  { label: "Open Theism", href: "/open-theism" },
  { label: "Just War & Pacifism", href: "/just-war-pacifism" },
  { label: "Christian Mindfulness", href: "/christian-mindfulness" },
  { label: "Book of Revelation", href: "/book-of-revelation" },
  { label: "Hell & Judgment", href: "/hell-eternal-judgment" },
  { label: "Theosis", href: "/theosis-union-with-christ" },
  { label: "Covenant vs. Dispensationalism", href: "/covenant-dispensationalism" },
  { label: "Christianity & Sexuality", href: "/christian-sexuality-theology" },
  { label: "Christology", href: "/christology" },
  { label: "The Five Solas", href: "/five-solas" },
  { label: "Theology of Sin", href: "/theology-of-sin" },
  { label: "Pneumatology", href: "/pneumatology" },
  { label: "Assurance of Salvation", href: "/assurance-salvation" },
  { label: "Religious Liberty", href: "/religious-liberty" },
  { label: "Sacraments & Ordinances", href: "/sacraments-ordinances" },
  { label: "Law and Gospel", href: "/law-gospel" },
  { label: "Christian Apologetics Guide", href: "/christian-apologetics-guide" },
  { label: "Theology of Beauty & Arts", href: "/theology-of-beauty" },
  { label: "Calling & Vocation", href: "/calling-vocation" },
  { label: "Hermeneutics Guide", href: "/hermeneutics-guide" },
  { label: "Justification by Faith", href: "/justification-by-faith" },
  { label: "Theology of Creation", href: "/creation-theology" },
  { label: "Christian Ethics Guide", href: "/christian-ethics-guide" },
  { label: "Theology of Marriage", href: "/marriage-theology" },
  { label: "The Resurrection", href: "/resurrection-theology" },
  { label: "Church History Survey", href: "/church-history-survey" },
  { label: "Eschatology Guide", href: "/eschatology-guide" },
  { label: "The Atonement", href: "/atonement-guide" },
  { label: "Theology of Scripture", href: "/word-of-god-theology" },
  { label: "Mental Health Theology", href: "/mental-health-theology" },
  { label: "Theology of Mission", href: "/mission-theology" },
  { label: "Kingdom of God Guide", href: "/kingdom-of-god-guide" },
  { label: "Soteriology Guide", href: "/soteriology-guide" },
  { label: "Christology Guide", href: "/christology-guide" },
  { label: "Pneumatology Guide", href: "/pneumatology-guide" },
  { label: "Trinity Guide", href: "/trinity-guide" },
  { label: "Theodicy Guide", href: "/theodicy-guide" },
  { label: "Ecclesiology Guide", href: "/ecclesiology-guide" },
  { label: "Hamartiology Guide", href: "/hamartiology-guide" },
  { label: "Covenant Theology", href: "/covenant-theology-guide" },
  { label: "Image of God Guide", href: "/image-of-god-guide" },
  { label: "Biblical Lament", href: "/lament-guide" },
  { label: "Spiritual Formation Guide", href: "/spiritual-formation-guide" },
  { label: "Theology of Prayer", href: "/prayer-theology-guide" },
  { label: "Attributes of God", href: "/theology-proper-guide" },
  { label: "Doctrine of Scripture", href: "/bibliology-guide" },
  { label: "Christian Anthropology", href: "/christian-anthropology-guide" },
  { label: "Angelology Guide", href: "/angelology-guide" },
  { label: "Sanctification Guide", href: "/sanctification-guide" },
  { label: "Preaching Guide", href: "/preaching-guide" },
  { label: "Theology of Worship", href: "/worship-theology-guide" },
  { label: "Evangelism Guide", href: "/evangelism-guide" },
  { label: "Discipleship Guide", href: "/discipleship-guide" },
  { label: "Heaven & New Creation", href: "/heaven-guide" },
  { label: "Theology of Suffering", href: "/suffering-guide" },
  { label: "Spiritual Gifts Guide", href: "/spiritual-gifts-guide" },
  { label: "Sermon on the Mount", href: "/sermon-on-the-mount-guide" },
  { label: "Pastoral Care Guide", href: "/pastoral-care-guide" },
  { label: "Christian Counseling", href: "/christian-counseling-guide" },
  { label: "Book of Romans Guide", href: "/romans-guide" },
  { label: "Science & Faith Guide", href: "/science-faith-guide" },
  { label: "OT Theology Guide", href: "/old-testament-theology-guide" },
  { label: "Doubt & Faith Guide", href: "/doubt-faith-guide" },
  { label: "Christian Marriage Guide", href: "/christian-marriage-guide" },
  { label: "Gospel of John Guide", href: "/gospel-of-john-guide" },
  { label: "Gospel of Matthew Guide", href: "/gospel-of-matthew-guide" },
  { label: "Theology of Grace", href: "/grace-theology-guide" },
  { label: "Christian Parenting Guide", href: "/christian-parenting-guide" },
  { label: "Book of Acts Guide", href: "/book-of-acts-guide" },
  { label: "Genesis Study Guide", href: "/genesis-guide" },
  { label: "Christian Joy Guide", href: "/christian-joy-guide" },
  { label: "Book of Hebrews Guide", href: "/hebrews-guide" },
  { label: "Book of Galatians Guide", href: "/galatians-guide" },
  { label: "Women in Scripture Guide", href: "/women-theology-guide" },
  { label: "Book of Philippians Guide", href: "/philippians-guide" },
  { label: "Book of Ephesians Guide", href: "/ephesians-guide" },
  { label: "Book of Colossians Guide", href: "/colossians-guide" },
  { label: "Book of 1 Corinthians Guide", href: "/first-corinthians-guide" },
  { label: "Book of James Guide", href: "/book-of-james-guide" },
  { label: "Book of 1 Peter Guide", href: "/first-peter-guide" },
  { label: "Book of Revelation Guide", href: "/revelation-guide" },
  { label: "Book of 2 Corinthians Guide", href: "/second-corinthians-guide" },
  { label: "Theology of Work Guide", href: "/theology-of-work-guide" },
  { label: "Confession & Repentance Guide", href: "/confession-repentance-guide" },
  { label: "Gospel of Mark Guide", href: "/gospel-of-mark-guide" },
  { label: "Christian Suffering Guide", href: "/christian-suffering-guide" },
  { label: "Gospel of Luke Guide", href: "/gospel-of-luke-guide" },
  { label: "Christian Community Guide", href: "/christian-community-guide" },
  { label: "Theology of Prayer Guide", href: "/theology-of-prayer-guide" },
  { label: "Book of Daniel Guide", href: "/daniel-guide" },
  { label: "Book of Isaiah Guide", href: "/isaiah-guide" },
  { label: "Pastoral Epistles Guide", href: "/pastoral-epistles-guide" },
  { label: "Book of Proverbs Guide", href: "/proverbs-guide" },
  { label: "Book of Ecclesiastes Guide", href: "/ecclesiastes-guide" },
  { label: "Book of Job Guide", href: "/job-guide" },
];

const COMPANY_LINKS: LinkEntry[] = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
  { label: "Give", href: "/giving" },
  { label: "Settings", href: "/settings" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const SOCIAL_LINKS = [
  {
    label: "BibleProject",
    href: "https://bibleproject.com",
    color: "#3B82F6",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    label: "Desiring God",
    href: "https://desiringgod.org",
    color: "#F97316",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
      </svg>
    ),
  },
  {
    label: "Gospel Coalition",
    href: "https://thegospelcoalition.org",
    color: "#6B4FBB",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 13H9v-1l1-1V11l-1-1V9h4v7l1 1v1z"/>
      </svg>
    ),
  },
  {
    label: "Hillsong Worship",
    href: "https://www.youtube.com/@HillsongWorship",
    color: "#3a7d56",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

function FooterLink({ label, href }: LinkEntry) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <Link
        href={href}
        style={{
          color: hovered ? "#f2e6c8" : "#7a7060",
          textDecoration: "none",
          fontSize: "0.83rem",
          fontWeight: 300,
          fontFamily: "var(--font-jost, system-ui, sans-serif)",
          transition: "color 0.18s ease",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          position: "relative",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          style={{
            position: "absolute",
            bottom: -1,
            left: 0,
            height: "1px",
            width: hovered ? "100%" : "0%",
            background: "linear-gradient(90deg, #3a7d56, #c9a227)",
            transition: "width 0.22s ease",
          }}
        />
        {label}
      </Link>
    </li>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(58,125,86,0.1) 0%, rgba(201,162,39,0.07) 100%)",
        border: "1px solid rgba(201,162,39,0.18)",
        borderRadius: 8,
        padding: "2rem 2rem",
        marginBottom: "3.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#3a7d56",
              marginBottom: "0.4rem",
            }}
          >
            Weekly Devotional
          </div>
          <p
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "#f2e6c8",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            Scripture, stories &amp; faith resources — weekly.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.85rem",
              color: "#52a876",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#52a876" strokeWidth="1.4" />
              <path d="M5 8l2 2 4-4" stroke="#52a876" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            You&apos;re in! Check your inbox.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="your@email.com"
              required
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${focused ? "rgba(201,162,39,0.55)" : "rgba(201,162,39,0.2)"}`,
                borderRadius: 5,
                padding: "0.55rem 1rem",
                color: "#f2e6c8",
                fontSize: "0.83rem",
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                outline: "none",
                transition: "border-color 0.2s",
                width: 220,
              }}
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #3a7d56, #2e6344)",
                border: "none",
                borderRadius: 5,
                padding: "0.55rem 1.2rem",
                color: "#f2e6c8",
                fontSize: "0.78rem",
                fontWeight: 600,
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                letterSpacing: "0.05em",
                cursor: "pointer",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #45956a, #3a7d56)";
                e.currentTarget.style.boxShadow =
                  "0 0 16px rgba(58,125,86,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #3a7d56, #2e6344)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Subscribe &rarr;
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function SocialLinks() {
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  return (
    <div style={{ display: "flex", gap: "0.75rem" }}>
      {SOCIAL_LINKS.map((s) => {
        const isHovered = hoveredLabel === s.label;
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            style={{
              width: 36,
              height: 36,
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${isHovered ? s.color + "66" : "rgba(255,255,255,0.07)"}`,
              background: isHovered ? `${s.color}11` : "rgba(255,255,255,0.02)",
              color: isHovered ? s.color : "#9898B3",
              textDecoration: "none",
              transition: "all 0.22s ease",
              boxShadow: isHovered ? `0 0 14px ${s.color}30` : "none",
            }}
            onMouseEnter={() => setHoveredLabel(s.label)}
            onMouseLeave={() => setHoveredLabel(null)}
          >
            {s.icon}
          </a>
        );
      })}
    </div>
  );
}

const LINK_COLUMNS = [
  { title: "Hubs", links: HUBS },
  { title: "Community", links: COMMUNITY_LINKS },
  { title: "Resources", links: RESOURCES_LINKS },
  { title: "Company", links: COMPANY_LINKS },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "#050a07",
        borderTop: "1px solid rgba(201,162,39,0.15)",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(58,125,86,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(58,125,86,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      {/* Top radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(201,162,39,0.3) 40%, rgba(58,125,86,0.3) 60%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 4vw 44px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Newsletter section */}
        <NewsletterSection />

        {/* Main grid: brand + link columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(220px, 260px) 1fr",
            gap: "4.5rem",
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                marginBottom: "1.2rem",
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
                <path d="M17 22 Q11 26 8 30" stroke="#3a7d56" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M17 22 Q23 26 26 30" stroke="#3a7d56" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8" cy="30" r="2" fill="#3a7d56" opacity="0.8" />
                <circle cx="26" cy="30" r="2" fill="#3a7d56" opacity="0.8" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#f2e6c8",
                  letterSpacing: "0.04em",
                }}
              >
                The<span style={{ color: "#c9a227" }}> Vine</span>
              </span>
            </Link>

            <p
              style={{
                fontSize: "0.83rem",
                color: "#7a7060",
                lineHeight: 1.75,
                fontWeight: 300,
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                marginBottom: "1.4rem",
              }}
            >
              Christianity&apos;s first all-in-one platform — community,
              Scripture, wellness, life guides, and more, for every believer on
              earth.
            </p>

            <p
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "#6a6050",
                lineHeight: 1.6,
                marginBottom: "1.4rem",
              }}
            >
              &ldquo;I am the vine; you are the branches.&rdquo;
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontStyle: "normal",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  marginTop: 4,
                  opacity: 0.85,
                }}
              >
                John 15:5
              </span>
            </p>

            <SocialLinks />
          </div>

          {/* Link columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
            }}
          >
            {LINK_COLUMNS.map(({ title, links }) => (
              <div key={title}>
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#c9a227",
                    marginBottom: "1.1rem",
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  }}
                >
                  {title}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65rem",
                  }}
                >
                  {links.map((l) => (
                    <FooterLink key={l.label} {...l} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              color: "#4a4440",
              fontWeight: 300,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
            }}
          >
            &copy; {new Date().getFullYear()} The Vine. Built for the Body of Christ.
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontStyle: "italic",
              fontSize: "0.88rem",
              color: "#4a4440",
            }}
          >
            &ldquo;I am the vine; you are the branches.&rdquo; &mdash; John 15:5
          </p>
        </div>
      </div>
    </footer>
  );
}
