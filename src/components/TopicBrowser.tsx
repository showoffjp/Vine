"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Hash } from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

type Topic = {
  label: string;
  slug?: string;
};

const TOPIC_SLUGS: Record<string, string> = {
  Prayer: "prayer-life",
  Fasting: "fasting",
  Marriage: "christian-marriage",
  Deconstruction: "faith-doubt-deconstruction",
  Depression: "mental-health",
  "Mental Health": "mental-health",
  Resurrection: "resurrection-theology",
  "Gen Z": "youth",
  Discernment: "discernment-gods-will",
  Enneagram: "enneagram-christianity",
  "Generational Trauma": "generational-trauma-faith",
  Introverts: "introverts-faith-church",
  Examen: "ignatian-examen",
  "Digital Detox": "digital-detox-faith",
  "Prosperity Gospel": "prosperity-gospel",
  Complementarianism: "complementarianism-egalitarianism",
  Egalitarianism: "complementarianism-egalitarianism",
  Cessationism: "cessationism-continuationism",
  Continuationism: "cessationism-continuationism",
  Calvinism: "calvinism-arminianism",
  Arminianism: "calvinism-arminianism",
  "Christian Nationalism": "christian-nationalism",
  "Open Theism": "open-theism",
  "Just War": "just-war-pacifism",
  Pacifism: "just-war-pacifism",
  Mindfulness: "christian-mindfulness",
  Meditation: "christian-mindfulness",
  Yoga: "christian-mindfulness",
  Revelation: "book-of-revelation",
  Hell: "hell-eternal-judgment",
  Judgment: "hell-eternal-judgment",
  Universalism: "hell-eternal-judgment",
  Theosis: "theosis-union-with-christ",
  "Union with Christ": "theosis-union-with-christ",
  "Covenant Theology": "covenant-dispensationalism",
  Dispensationalism: "covenant-dispensationalism",
  Sexuality: "christian-sexuality-theology",
  "Sexual Ethics": "christian-sexuality-theology",
  Christology: "christology",
  Incarnation: "christology",
  "Five Solas": "five-solas",
  Reformation: "five-solas",
  Sin: "theology-of-sin",
  Hamartiology: "theology-of-sin",
  Pneumatology: "pneumatology",
  "Holy Spirit Theology": "pneumatology",
  "Assurance": "assurance-salvation",
  "Eternal Security": "assurance-salvation",
  "Religious Liberty": "religious-liberty",
  "Church and State": "religious-liberty",
  "Sacraments": "sacraments-ordinances",
  "Lord's Supper": "sacraments-ordinances",
  "Ordinances": "sacraments-ordinances",
  "Law and Gospel": "law-gospel",
  Antinomianism: "law-gospel",
  Legalism: "law-gospel",
  Burnout: "burnout",
  Anxiety: "anxiety",
  Loneliness: "loneliness",
  Grief: "grief",
  Forgiveness: "theology-of-forgiveness",
  Suffering: "suffering",
  Sabbath: "sabbath",
  Lament: "lament",
  Addiction: "addiction-recovery",
  Trinity: "trinity",
  Sanctification: "spiritual-formation",
  Apologetics: "apologetics-101",
  Missions: "missions",
  Evangelism: "evangelism",
  Beauty: "theology-of-beauty",
  "Arts": "theology-of-beauty",
  "Aesthetics": "theology-of-beauty",
  Vocation: "calling-vocation",
  "Calling": "calling-vocation",
  Work: "calling-vocation",
  Hermeneutics: "hermeneutics-guide",
  "Bible Interpretation": "hermeneutics-guide",
  Exegesis: "hermeneutics-guide",
  Justification: "justification-by-faith",
  "Sola Fide": "justification-by-faith",
  Imputation: "justification-by-faith",
  Creation: "creation-theology",
  "Creatio Ex Nihilo": "creation-theology",
  "Cultural Mandate": "creation-theology",
  Ethics: "christian-ethics-guide",
  "Natural Law": "christian-ethics-guide",
  "Virtue Ethics": "christian-ethics-guide",
  "Moral Theology": "christian-ethics-guide",
  "Marriage Theology": "marriage-theology",
  "Divorce": "marriage-theology",
  "Covenant Marriage": "marriage-theology",
  "Easter": "resurrection-theology",
  "Church History": "church-history-survey",
  "Reformation History": "church-history-survey",
  "Church Fathers": "church-history-survey",
  Eschatology: "eschatology-guide",
  "End Times": "eschatology-guide",
  Millennium: "eschatology-guide",
  Rapture: "eschatology-guide",
  Atonement: "atonement-guide",
  "Penal Substitution": "atonement-guide",
  "Christus Victor": "atonement-guide",
  Bible: "word-of-god-theology",
  Inerrancy: "word-of-god-theology",
  "Scripture Authority": "word-of-god-theology",
  "Theology of Mental Health": "mental-health-theology",
  "Faith and Psychology": "mental-health-theology",
  "Biblical Counseling": "mental-health-theology",
  "Mission Theology": "mission-theology",
  Missiology: "mission-theology",
  "Missio Dei": "mission-theology",
  "Kingdom of God": "kingdom-of-god-guide",
  "Kingdom Theology": "kingdom-of-god-guide",
  "Already Not Yet": "kingdom-of-god-guide",
  Shalom: "kingdom-of-god-guide",
};

const ALL_TOPICS: Topic[] = [
  { label: "Addiction" },
  { label: "Anxiety" },
  { label: "Apologetics" },
  { label: "Baptism" },
  { label: "Bible Study" },
  { label: "Career" },
  { label: "Community" },
  { label: "Creation" },
  { label: "Dating" },
  { label: "Depression" },
  { label: "Devotionals" },
  { label: "Doubt" },
  { label: "End Times" },
  { label: "Evangelism" },
  { label: "Family" },
  { label: "Fasting" },
  { label: "Finance" },
  { label: "Forgiveness" },
  { label: "Grief" },
  { label: "Grace" },
  { label: "Holy Spirit" },
  { label: "Hope" },
  { label: "Identity" },
  { label: "Integrity" },
  { label: "Jesus" },
  { label: "Leadership" },
  { label: "Love" },
  { label: "Marriage" },
  { label: "Mental Health" },
  { label: "Ministry" },
  { label: "Miracles" },
  { label: "Missions" },
  { label: "Kingdom of God" },
  { label: "Missiology" },
  { label: "Parenting" },
  { label: "Prayer" },
  { label: "Prophecy" },
  { label: "Purpose" },
  { label: "Relationships" },
  { label: "Repentance" },
  { label: "Resurrection" },
  { label: "Salvation" },
  { label: "Sanctification" },
  { label: "Scripture" },
  { label: "Serving" },
  { label: "Sexuality" },
  { label: "Suffering" },
  { label: "Theology" },
  { label: "Trinity" },
  { label: "Trust" },
  { label: "Unity" },
  { label: "Worship" },
  { label: "Youth" },
  { label: "Discernment" },
  { label: "Enneagram" },
  { label: "Generational Trauma" },
  { label: "Introverts" },
  { label: "Lament" },
  { label: "Examen" },
  { label: "Digital Detox" },
  { label: "Prosperity Gospel" },
  { label: "Complementarianism" },
  { label: "Egalitarianism" },
  { label: "Cessationism" },
  { label: "Continuationism" },
  { label: "Calvinism" },
  { label: "Arminianism" },
  { label: "Christian Nationalism" },
  { label: "Open Theism" },
  { label: "Just War" },
  { label: "Pacifism" },
  { label: "Mindfulness" },
  { label: "Yoga" },
  { label: "Revelation" },
  { label: "Hell" },
  { label: "Universalism" },
  { label: "Theosis" },
  { label: "Covenant Theology" },
  { label: "Dispensationalism" },
  { label: "Sexuality" },
  { label: "Christology" },
  { label: "Incarnation" },
  { label: "Five Solas" },
  { label: "Reformation" },
  { label: "Sin" },
  { label: "Hamartiology" },
  { label: "Pneumatology" },
  { label: "Assurance" },
  { label: "Religious Liberty" },
  { label: "Sacraments" },
  { label: "Law and Gospel" },
  { label: "Legalism" },
  { label: "Beauty" },
  { label: "Arts" },
  { label: "Aesthetics" },
  { label: "Vocation" },
  { label: "Calling" },
  { label: "Work" },
  { label: "Hermeneutics" },
  { label: "Bible Interpretation" },
  { label: "Exegesis" },
  { label: "Justification" },
  { label: "Sola Fide" },
  { label: "Imputation" },
  { label: "Creation" },
  { label: "Cultural Mandate" },
  { label: "Ethics" },
  { label: "Natural Law" },
  { label: "Virtue Ethics" },
  { label: "Moral Theology" },
  { label: "Marriage Theology" },
  { label: "Divorce" },
  { label: "Easter" },
  { label: "Church History" },
  { label: "Church Fathers" },
  { label: "Reformation History" },
  { label: "Eschatology" },
  { label: "End Times" },
  { label: "Millennium" },
  { label: "Rapture" },
  { label: "Atonement" },
  { label: "Penal Substitution" },
  { label: "Inerrancy" },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function TopicBrowser() {
  const [activeLetter, setActiveLetter] = usePersistedState("vine_home_topic_letter", "All");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggested, setSuggested] = useState(false);

  const filtered = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return ALL_TOPICS.filter((t) => t.label.toLowerCase().includes(q));
    }
    if (activeLetter !== "All") {
      return ALL_TOPICS.filter((t) => t.label.toUpperCase().startsWith(activeLetter));
    }
    return ALL_TOPICS;
  }, [activeLetter, searchQuery]);

  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter);
    setSearchQuery("");
  };

  return (
    <section
      style={{
        background: "#0a1a0e",
        padding: "100px 4vw",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 500,
          background: "radial-gradient(ellipse, rgba(58,125,86,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
            <Hash size={11} style={{ display: "inline", marginRight: 5 }} />
            60+ Topics
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 300,
              color: "#f2e6c8",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Explore every
            <em style={{ fontStyle: "italic", color: "#e8c162" }}> topic.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.95rem",
              color: "#9a8f72",
              fontWeight: 300,
              maxWidth: 460,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Find discussions, resources, and community around every aspect of
            the Christian life.
          </p>
        </div>

        {/* Search bar */}
        <div style={{ maxWidth: 480, margin: "0 auto 2.5rem", position: "relative" }}>
          <Search
            size={15}
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9a8f72",
              pointerEvents: "none",
            }}
          />
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value) setActiveLetter("All");
            }}
            style={{
              width: "100%",
              padding: "11px 14px 11px 38px",
              borderRadius: 2,
              background: "#050e07",
              border: "0.5px solid rgba(201,162,39,0.2)",
              color: "#f2e6c8",
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.88rem",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(201,162,39,0.5)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(201,162,39,0.2)";
            }}
          />
        </div>

        {/* Alphabet pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          <button
            onClick={() => handleLetterClick("All")}
            style={{
              padding: "5px 14px",
              borderRadius: 2,
              border:
                activeLetter === "All" && !searchQuery
                  ? "0.5px solid rgba(201,162,39,0.55)"
                  : "0.5px solid rgba(201,162,39,0.15)",
              background:
                activeLetter === "All" && !searchQuery
                  ? "rgba(201,162,39,0.1)"
                  : "transparent",
              color:
                activeLetter === "All" && !searchQuery ? "#c9a227" : "#9a8f72",
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.72rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            All
          </button>

          {ALPHABET.map((letter) => {
            const hasTopics = ALL_TOPICS.some((t) => t.label.toUpperCase().startsWith(letter));
            const isActive = activeLetter === letter && !searchQuery;
            return (
              <button
                key={letter}
                onClick={() => hasTopics && handleLetterClick(letter)}
                disabled={!hasTopics}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 2,
                  border: isActive
                    ? "0.5px solid rgba(201,162,39,0.55)"
                    : "0.5px solid rgba(201,162,39,0.1)",
                  background: isActive ? "rgba(201,162,39,0.1)" : "transparent",
                  color: isActive ? "#c9a227" : hasTopics ? "#9a8f72" : "rgba(201,162,39,0.15)",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  cursor: hasTopics ? "pointer" : "default",
                  transition: "all 0.15s",
                }}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Count */}
        <p
          style={{
            fontFamily: "var(--font-jost, system-ui, sans-serif)",
            fontSize: "0.72rem",
            color: "#9a8f72",
            textAlign: "center",
            marginBottom: "1.5rem",
            letterSpacing: "0.05em",
          }}
        >
          {searchQuery
            ? `${filtered.length} topic${filtered.length !== 1 ? "s" : ""} matching "${searchQuery}"`
            : activeLetter === "All"
            ? `Showing all ${filtered.length} topics`
            : `${filtered.length} topic${filtered.length !== 1 ? "s" : ""} starting with "${activeLetter}"`}
        </p>

        {/* Topics cloud */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
          {filtered.map((topic) => {
            const href = TOPIC_SLUGS[topic.label]
              ? `/${TOPIC_SLUGS[topic.label]}`
              : `/discussions?tag=${encodeURIComponent(topic.label)}`;
            return (
              <Link
                key={topic.label}
                href={href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "7px 16px",
                  borderRadius: 2,
                  background: "transparent",
                  border: "0.5px solid rgba(201,162,39,0.2)",
                  color: "#9a8f72",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.82rem",
                  fontWeight: 400,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(201,162,39,0.08)";
                  el.style.borderColor = "rgba(201,162,39,0.45)";
                  el.style.color = "#c9a227";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "transparent";
                  el.style.borderColor = "rgba(201,162,39,0.2)";
                  el.style.color = "#9a8f72";
                }}
              >
                <Hash size={10} style={{ opacity: 0.6 }} />
                {topic.label}
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem", color: "#9a8f72" }}>
            <Hash size={32} style={{ margin: "0 auto 0.8rem", opacity: 0.25 }} />
            <p
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.88rem",
              }}
            >
              No topics found for &ldquo;{searchQuery}&rdquo;
            </p>
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.82rem",
              color: "#9a8f72",
              marginBottom: "1rem",
            }}
          >
            Don&apos;t see your topic? Request it from the community.
          </p>
          <button
            onClick={() => setSuggested(true)}
            disabled={suggested}
            style={{
              padding: "0.7rem 1.8rem",
              borderRadius: 2,
              background: suggested ? "rgba(201,162,39,0.1)" : "transparent",
              border: suggested
                ? "0.5px solid rgba(201,162,39,0.5)"
                : "0.5px solid rgba(201,162,39,0.25)",
              color: suggested ? "#e8c162" : "#c9b98a",
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.78rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              cursor: suggested ? "default" : "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              if (suggested) return;
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.5)";
              (e.currentTarget as HTMLButtonElement).style.color = "#e8c162";
            }}
            onMouseLeave={(e) => {
              if (suggested) return;
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.25)";
              (e.currentTarget as HTMLButtonElement).style.color = "#c9b98a";
            }}
          >
            {suggested ? "✓ Thanks — Topic Suggested" : "+ Suggest a Topic"}
          </button>
        </div>
      </div>
    </section>
  );
}
