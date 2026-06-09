"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Bell, ChevronDown, Sparkles } from "lucide-react";
import SearchOverlay from "./SearchOverlay";
import AuthModal from "./AuthModal";

type NavItem = { label: string; href: string };
type NavSection = { title: string; items: NavItem[] };
type NavLink = { label: string; wide?: boolean; sections: NavSection[] };

const navLinks: NavLink[] = [
  {
    label: "Community",
    sections: [
      {
        title: "Social Hub",
        items: [
          { label: "My Feed", href: "/feed" },
          { label: "Discussions", href: "/discussions" },
          { label: "Groups", href: "/groups" },
          { label: "Stories", href: "/stories" },
          { label: "Global Connect", href: "/global-connect" },
          { label: "Leaderboard", href: "/leaderboard" },
          { label: "Creators", href: "/creators" },
        ],
      },
      {
        title: "Prayer & Sharing",
        items: [
          { label: "Prayer Wall", href: "/prayer-wall" },
          { label: "Prayer Partners", href: "/prayer-partner" },
          { label: "Testimony Wall", href: "/testimony" },
          { label: "Faith Journey", href: "/faith-journey" },
          { label: "Events", href: "/events" },
          { label: "Topics", href: "/topics" },
        ],
      },
    ],
  },
  {
    label: "Scripture",
    wide: true,
    sections: [
      {
        title: "Bible Tools & Reference",
        items: [
          { label: "Bible Tools", href: "/bible" },
          { label: "Bible Overview", href: "/bible-overview" },
          { label: "Bible Study", href: "/bible-study" },
          { label: "Character Studies", href: "/character-study" },
          { label: "Bible Characters", href: "/bible-characters" },
          { label: "Biblical Archaeology", href: "/biblical-archaeology" },
          { label: "Commentary Guide", href: "/commentary-guide" },
          { label: "Bible Promises", href: "/promises" },
          { label: "Reading Challenges", href: "/bible-reading-challenges" },
        ],
      },
      {
        title: "Old Testament Books",
        items: [
          { label: "OT Survey", href: "/old-testament-survey" },
          { label: "Genesis Guide", href: "/genesis-guide" },
          { label: "Exodus Guide", href: "/exodus-guide" },
          { label: "Guide to the Psalms", href: "/psalms-guide" },
          { label: "Psalms Deep Dive", href: "/psalms-deep-dive" },
          { label: "Psalms as Prayer", href: "/psalms-as-prayer" },
          { label: "Proverbs Guide", href: "/proverbs-guide" },
          { label: "Ecclesiastes Guide", href: "/ecclesiastes-guide" },
          { label: "Book of Job Guide", href: "/job-guide" },
          { label: "The Prophets", href: "/prophets" },
          { label: "Minor Prophets Guide", href: "/minor-prophets-guide" },
          { label: "Jeremiah Guide", href: "/jeremiah-guide" },
          { label: "Ezekiel Guide", href: "/ezekiel-guide" },
          { label: "Joshua & Judges Guide", href: "/joshua-judges-guide" },
          { label: "Numbers & Deuteronomy Guide", href: "/numbers-deuteronomy-guide" },
          { label: "1 & 2 Samuel Guide", href: "/samuel-guide" },
          { label: "1 & 2 Kings Guide", href: "/kings-guide" },
          { label: "Ezra & Nehemiah Guide", href: "/ezra-nehemiah-guide" },
          { label: "Hosea Guide", href: "/hosea-guide" },
          { label: "Amos Guide", href: "/amos-guide" },
          { label: "Micah Guide", href: "/micah-guide" },
          { label: "Jonah Guide", href: "/jonah-guide" },
          { label: "Habakkuk Guide", href: "/habakkuk-guide" },
          { label: "Lamentations Guide", href: "/lamentations-guide" },
          { label: "Zechariah Guide", href: "/zechariah-guide" },
        ],
      },
      {
        title: "New Testament Books",
        items: [
          { label: "NT Survey", href: "/new-testament-survey" },
          { label: "Gospel of John Guide", href: "/gospel-of-john-guide" },
          { label: "Romans Guide", href: "/romans-guide" },
          { label: "Hebrews Guide", href: "/hebrews-guide" },
          { label: "Letters of John Guide", href: "/letters-of-john-guide" },
          { label: "Song of Songs Guide", href: "/song-of-songs-guide" },
          { label: "Ruth & Esther Guide", href: "/ruth-esther-guide" },
          { label: "Thessalonians Guide", href: "/thessalonians-guide" },
          { label: "Parables of Jesus", href: "/parables-of-jesus" },
          { label: "Miracles of Jesus", href: "/miracles-of-jesus" },
          { label: "Sermon on the Mount", href: "/sermon-on-the-mount" },
          { label: "The Armor of God", href: "/armor-of-god" },
          { label: "The Beatitudes", href: "/beatitudes" },
        ],
      },
    ],
  },
  {
    label: "Theology",
    wide: true,
    sections: [
      {
        title: "Core Christian Doctrine",
        items: [
          { label: "Theology Glossary", href: "/theology-glossary" },
          { label: "Theology in Plain English", href: "/theology" },
          { label: "Systematic Theology 101", href: "/systematic-theology-101" },
          { label: "Biblical Theology Primer", href: "/biblical-theology-primer" },
          { label: "The Holy Trinity", href: "/trinity" },
          { label: "Names of God", href: "/names-of-god" },
          { label: "Names of Jesus", href: "/names-of-jesus" },
          { label: "The Incarnation", href: "/incarnation" },
          { label: "The Resurrection", href: "/resurrection" },
          { label: "Resurrection Evidence", href: "/resurrection-evidence" },
        ],
      },
      {
        title: "Salvation & the Christian Life",
        items: [
          { label: "Theories of Atonement", href: "/atonement" },
          { label: "Atonement Deep Dive", href: "/atonement-theories" },
          { label: "Theology of Grace", href: "/grace" },
          { label: "The New Birth", href: "/new-birth" },
          { label: "Sanctification", href: "/sanctification" },
          { label: "Predestination & Election", href: "/predestination" },
          { label: "Faith and Works", href: "/faith-and-works" },
          { label: "The Holy Spirit", href: "/holy-spirit" },
          { label: "The Kingdom of God", href: "/kingdom-of-god" },
          { label: "Theology of the Church", href: "/ecclesiology" },
        ],
      },
      {
        title: "Ethics, Suffering & End Times",
        items: [
          { label: "Christian Ethics", href: "/christian-ethics" },
          { label: "Christian Bioethics", href: "/christian-bioethics" },
          { label: "Theology of the Body", href: "/theology-of-body" },
          { label: "The Problem of Evil", href: "/theodicy" },
          { label: "Theology of Suffering", href: "/suffering" },
          { label: "Heaven & Eternal Life", href: "/heaven" },
          { label: "The New Creation", href: "/new-creation" },
          { label: "Angels and Demons", href: "/angels-demons" },
          { label: "End Times & Eschatology", href: "/end-times" },
          { label: "Eschatology Views Compared", href: "/eschatology-views" },
        ],
      },
    ],
  },
  {
    label: "Church & History",
    wide: true,
    sections: [
      {
        title: "Church History",
        items: [
          { label: "Church History", href: "/church-history" },
          { label: "Great Revivals", href: "/great-revivals" },
          { label: "Church Fathers Guide", href: "/church-fathers-guide" },
          { label: "Church Fathers Writings", href: "/church-fathers-writings" },
          { label: "Saints & Martyrs", href: "/saints-martyrs" },
          { label: "Famous Conversions", href: "/conversion-stories" },
          { label: "Christians Who Changed History", href: "/christians-who-changed-history" },
          { label: "Christian Art Guide", href: "/christian-art-guide" },
        ],
      },
      {
        title: "Creeds, Confessions & Traditions",
        items: [
          { label: "Creeds & Historic Prayers", href: "/creeds" },
          { label: "The Apostles' Creed", href: "/apostles-creed" },
          { label: "Historic Confessions", href: "/confessions" },
          { label: "Classic Heresies Explained", href: "/classic-heresies" },
          { label: "Catechism Guide", href: "/catechism-guide" },
          { label: "Protestant Denominations", href: "/protestant-denominations" },
          { label: "The Catholic Faith", href: "/catholic-faith" },
          { label: "Eastern Orthodoxy", href: "/eastern-orthodox" },
          { label: "Reformed Theology", href: "/reformed-theology" },
        ],
      },
      {
        title: "Apologetics & Worldview",
        items: [
          { label: "Apologetics 101", href: "/apologetics-101" },
          { label: "Tough Questions Answered", href: "/apologetics-questions" },
          { label: "Arguments for God", href: "/apologetics-arguments" },
          { label: "Faith & Science", href: "/faith-science" },
          { label: "Christian Worldview", href: "/christian-worldview" },
          { label: "Christian Philosophy", href: "/christian-philosophy" },
          { label: "Political Theology", href: "/political-theology" },
          { label: "Covenant Theology", href: "/covenant" },
          { label: "Seminary Guide", href: "/seminary-guide" },
        ],
      },
    ],
  },
  {
    label: "Daily Bread",
    wide: true,
    sections: [
      {
        title: "Daily Practice",
        items: [
          { label: "Today's Devotional", href: "/daily" },
          { label: "Verse of the Day", href: "/verse-of-the-day" },
          { label: "Daily Office", href: "/daily-office" },
          { label: "Quiet Time Guide", href: "/quiet-time-guide" },
          { label: "Daily Examen", href: "/daily-examen" },
          { label: "Lectio Divina", href: "/lectio-divina" },
          { label: "Biblical Meditation", href: "/meditation" },
          { label: "The Sabbath", href: "/sabbath" },
        ],
      },
      {
        title: "Prayer",
        items: [
          { label: "Theology of Prayer", href: "/theology-of-prayer" },
          { label: "Prayer Methods", href: "/prayer-methods" },
          { label: "Building a Prayer Life", href: "/prayer-life" },
          { label: "The Lord's Prayer", href: "/prayer-of-jesus" },
          { label: "Intercession Guide", href: "/intercession" },
          { label: "Unanswered Prayer", href: "/unanswered-prayer" },
          { label: "Confession Guide", href: "/confession" },
          { label: "Prayer Warriors of History", href: "/prayer-warrior-history" },
          { label: "How to Pray Guide", href: "/how-to-pray-guide" },
        ],
      },
      {
        title: "Spiritual Disciplines",
        items: [
          { label: "Spiritual Disciplines", href: "/disciplines" },
          { label: "Disciplines Guide", href: "/spiritual-disciplines-guide" },
          { label: "Prayer & Fasting", href: "/prayer-fasting" },
          { label: "Complete Fasting Guide", href: "/fasting-guide" },
          { label: "Spiritual Formation", href: "/spiritual-formation" },
          { label: "Stages of Spiritual Growth", href: "/spiritual-growth-stages" },
          { label: "The Practice of Lament", href: "/lament" },
          { label: "Spiritual Gifts", href: "/spiritual-gifts" },
          { label: "Dark Night of the Soul", href: "/christian-dark-night-guide" },
        ],
      },
      {
        title: "Worship & Music",
        items: [
          { label: "Worship", href: "/worship" },
          { label: "Theology of Worship", href: "/worship-theology" },
          { label: "Essential Worship Songs", href: "/christian-worship-songs" },
          { label: "Great Hymns of the Faith", href: "/hymns" },
          { label: "Christian Music History", href: "/christian-music-history" },
          { label: "Essential Christian Albums", href: "/christian-albums" },
          { label: "Live Church", href: "/live" },
        ],
      },
      {
        title: "Church Calendar",
        items: [
          { label: "Liturgical Year", href: "/liturgical-year" },
          { label: "Advent Guide", href: "/advent" },
          { label: "Advent Devotional", href: "/advent-devotional" },
          { label: "Lent Guide", href: "/lent" },
          { label: "Lent Devotional", href: "/lent-devotional" },
          { label: "Holy Week Guide", href: "/holy-week" },
          { label: "Lectionary Guide", href: "/lectionary-guide" },
          { label: "Church Calendar", href: "/church-calendar" },
        ],
      },
      {
        title: "Personal Tools",
        items: [
          { label: "My Journal", href: "/journal" },
          { label: "Prayer Journal", href: "/prayer-journal" },
          { label: "Sermon Notes", href: "/sermon-notes" },
          { label: "Faith Goals", href: "/goals" },
          { label: "Prayer List", href: "/prayer-list" },
          { label: "Gratitude Journal", href: "/gratitude" },
          { label: "Habit Tracker", href: "/habits" },
          { label: "Verse Memory", href: "/verse-memory" },
          { label: "Reading Plans", href: "/reading-plan" },
          { label: "AI Companion", href: "/ai-companion" },
        ],
      },
    ],
  },
  {
    label: "Life & Faith",
    wide: true,
    sections: [
      {
        title: "Mental Health & Healing",
        items: [
          { label: "Mental Health Guide", href: "/mental-health-guide" },
          { label: "Anxiety & Faith", href: "/anxiety" },
          { label: "Fear & Courage", href: "/fear" },
          { label: "Anger: A Christian Guide", href: "/anger" },
          { label: "Grief & Loss", href: "/grief" },
          { label: "Grief & Lament Guide", href: "/grief-lament-guide" },
          { label: "Healing & Wholeness", href: "/healing" },
          { label: "Addiction & Recovery", href: "/addiction-recovery" },
          { label: "Biblical Counseling", href: "/biblical-counseling" },
        ],
      },
      {
        title: "Marriage & Relationships",
        items: [
          { label: "Christian Marriage", href: "/marriage" },
          { label: "Covenant Marriage", href: "/covenant-marriage" },
          { label: "Couples Devotional", href: "/couples-devotional" },
          { label: "Christian Wedding Guide", href: "/christian-wedding-guide" },
          { label: "Christian Dating", href: "/christian-dating" },
          { label: "The Single Life", href: "/singles" },
          { label: "Sexuality & Purity", href: "/purity" },
          { label: "Christian Friendship Guide", href: "/christian-friendship-guide" },
        ],
      },
      {
        title: "Family & Parenting",
        items: [
          { label: "Christian Parenting", href: "/parenting" },
          { label: "Parenting Guide", href: "/parenting-guide" },
          { label: "Parenting Teenagers", href: "/parenting-teens" },
          { label: "Homeschool Guide", href: "/homeschool-guide" },
          { label: "Family Devotions", href: "/family-devotions" },
          { label: "Body Image & Faith", href: "/body-image" },
          { label: "Caring for Aging Parents", href: "/elder-care" },
          { label: "Christian Retirement Guide", href: "/christian-retirement" },
        ],
      },
      {
        title: "Money, Work & Calling",
        items: [
          { label: "Stewardship & Finances", href: "/stewardship" },
          { label: "Christian Financial Guide", href: "/christian-financial-guide" },
          { label: "Money & Debt", href: "/money-debt" },
          { label: "Christian Giving Guide", href: "/christian-giving-guide" },
          { label: "Theology of Money", href: "/theology-of-money" },
          { label: "Vocation & Calling", href: "/vocation" },
          { label: "Theology of Work", href: "/theology-of-work" },
          { label: "Christian Leadership", href: "/christian-leadership" },
        ],
      },
      {
        title: "Discipleship & Character",
        items: [
          { label: "Discipleship Pathways", href: "/discipleship" },
          { label: "Who I Am in Christ", href: "/identity-in-christ" },
          { label: "The Virtue of Humility", href: "/humility" },
          { label: "The Practice of Joy", href: "/joy" },
          { label: "The Practice of Forgiveness", href: "/forgiveness-guide" },
          { label: "Loneliness & Community", href: "/loneliness" },
          { label: "Doubt & Honest Faith", href: "/doubt" },
          { label: "Spiritual Direction", href: "/spiritual-direction" },
          { label: "Faith Deconstruction", href: "/deconstruction" },
        ],
      },
      {
        title: "Justice & Society",
        items: [
          { label: "Justice & the Gospel", href: "/justice" },
          { label: "Biblical Justice", href: "/biblical-justice-theology" },
          { label: "Race & Reconciliation", href: "/race-reconciliation" },
          { label: "Loving Your Neighbor", href: "/neighbor" },
          { label: "Creation Care", href: "/creation-care" },
          { label: "Spiritual Warfare", href: "/spiritual-warfare" },
          { label: "Faith & Technology", href: "/technology" },
          { label: "Women in Ministry", href: "/women-in-ministry" },
        ],
      },
    ],
  },
  {
    label: "Media",
    wide: true,
    sections: [
      {
        title: "Sermons & Teaching",
        items: [
          { label: "Featured Preachers", href: "/featured-preachers" },
          { label: "Landmark Sermons", href: "/landmark-sermons" },
          { label: "Sermons That Moved History", href: "/featured-sermons" },
          { label: "Sermon Archive", href: "/sermon-archive" },
          { label: "Sermon Preparation", href: "/sermon-prep" },
          { label: "Expository Preaching", href: "/expository-preaching" },
          { label: "Devotional Creator", href: "/devotional-creator" },
          { label: "Prophecy Today", href: "/prophecy-today" },
        ],
      },
      {
        title: "Books & Reading",
        items: [
          { label: "Essential Christian Books", href: "/christian-books-guide" },
          { label: "Devotional Classics", href: "/christian-devotional-classics" },
          { label: "Books for Every Season", href: "/books-for-seasons" },
          { label: "Christian Fiction Guide", href: "/christian-fiction" },
          { label: "Reading List", href: "/reading-list" },
          { label: "Must-Read Articles", href: "/must-read-articles" },
          { label: "Christian Quotes", href: "/quotes" },
          { label: "Guides & Articles", href: "/resources" },
        ],
      },
      {
        title: "Video, Podcasts & Film",
        items: [
          { label: "Video Library", href: "/video" },
          { label: "Podcasts", href: "/podcast" },
          { label: "Top Christian Podcasts", href: "/top-christian-podcasts" },
          { label: "Essential Podcasts Guide", href: "/christian-podcasts-guide" },
          { label: "Essential Christian Films", href: "/christian-movies" },
          { label: "Christian Documentaries", href: "/christian-documentaries" },
          { label: "Top YouTube Channels", href: "/christian-youtube-channels" },
          { label: "Great Hymns Explained", href: "/great-hymns-explained" },
          { label: "Christian News Sources", href: "/christian-news-sources" },
          { label: "Christian Conferences", href: "/christian-conferences" },
        ],
      },
    ],
  },
  {
    label: "Explore",
    sections: [
      {
        title: "Getting Started",
        items: [
          { label: "Discover", href: "/explore" },
          { label: "The Gospel / Salvation", href: "/salvation" },
          { label: "First Steps of Faith", href: "/new-believer" },
          { label: "Church Finder", href: "/church-finder" },
          { label: "Mentorship", href: "/mentorship" },
          { label: "Youth & Students", href: "/youth" },
          { label: "Challenges", href: "/challenges" },
          { label: "About Vine", href: "/about" },
        ],
      },
      {
        title: "Missions & Global Church",
        items: [
          { label: "Missions", href: "/missions" },
          { label: "Global Missions Guide", href: "/global-missions" },
          { label: "Modern Missionaries", href: "/modern-missionaries" },
          { label: "The Persecuted Church", href: "/persecuted-church" },
          { label: "Church Planting", href: "/church-planting" },
          { label: "Prison Ministry", href: "/prison-ministry" },
          { label: "Christian Pilgrimage Sites", href: "/christian-pilgrimage-sites" },
          { label: "Spiritual Retreats", href: "/spiritual-retreats" },
        ],
      },
      {
        title: "Church Life",
        items: [
          { label: "Small Groups Guide", href: "/small-groups" },
          { label: "Church Membership", href: "/church-membership" },
          { label: "Baptism Guide", href: "/baptism" },
          { label: "Lord's Supper", href: "/communion" },
          { label: "Evangelism Training", href: "/evangelism" },
          { label: "Sharing the Gospel", href: "/gospel-presentation" },
          { label: "House Church Guide", href: "/house-church" },
          { label: "Elder & Deacon Training", href: "/elder-deacon-training" },
        ],
      },
    ],
  },
];

interface VineUser {
  name: string;
  firstName: string;
  email: string;
  avatar: string;
  interests: string[];
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");
  const [bannerVisible, setBannerVisible] = useState(true);
  const [user, setUser] = useState<VineUser | null>(() => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("vine_user");
    if (!stored) return null;
    try { return JSON.parse(stored); } catch { return null; }
  });
  const [hasUnread, setHasUnread] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      const readSet: number[] = JSON.parse(localStorage.getItem("vine_notif_read") || "[]");
      return readSet.length < 20;
    } catch { return true; }
  });
  const [allRead, setAllRead] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = useCallback((label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("vine_user");
    setUser(null);
    window.location.href = "/";
  };

  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          headerRef.current.offsetHeight + "px"
        );
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (headerRef.current) ro.observe(headerRef.current);
    return () => ro.disconnect();
  }, [bannerVisible]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ transition: "background 300ms, border-color 300ms" }}
    >
      {/* Skip navigation */}
      <a
        href="#main-content"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
        onFocus={(e) => {
          const el = e.currentTarget;
          el.style.left = "16px";
          el.style.top = "16px";
          el.style.width = "auto";
          el.style.height = "auto";
          el.style.overflow = "visible";
          el.style.background = "#3a7d56";
          el.style.color = "#fff";
          el.style.padding = "8px 16px";
          el.style.borderRadius = "6px";
          el.style.zIndex = "9999";
          el.style.fontSize = "14px";
          el.style.fontWeight = "600";
        }}
        onBlur={(e) => {
          const el = e.currentTarget;
          el.style.left = "-9999px";
          el.style.top = "auto";
          el.style.width = "1px";
          el.style.height = "1px";
          el.style.overflow = "hidden";
          el.style.background = "";
          el.style.color = "";
          el.style.padding = "";
          el.style.borderRadius = "";
          el.style.zIndex = "";
          el.style.fontSize = "";
          el.style.fontWeight = "";
        }}
      >
        Skip to main content
      </a>

      {/* Announcement Banner */}
      {bannerVisible && (
        <div
          className="flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm relative"
          style={{
            background: "linear-gradient(90deg, rgba(58,125,86,0.2) 0%, rgba(201,162,39,0.12) 50%, rgba(58,125,86,0.2) 100%)",
            borderBottom: "0.5px solid rgba(201,162,39,0.2)",
          }}
        >
          <Sparkles size={12} style={{ color: "#c9a227", flexShrink: 0 }} />
          <span style={{ color: "#c9b98a", fontFamily: "var(--font-jost, system-ui, sans-serif)", fontSize: "0.8rem" }}>
            <span className="font-bold" style={{ color: "#e8c162" }}>The Vine Beta is live.</span>{" "}
            <span className="hidden sm:inline">Join early and shape the future of Christian community.</span>{" "}
            <button onClick={() => { setAuthMode("signup"); setAuthOpen(true); }} className="underline font-semibold" style={{ color: "#c9a227" }}>
              Join free →
            </button>
          </span>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded transition-colors"
            style={{ color: "#4A4A68" }}
            aria-label="Dismiss banner"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        style={{
          background: scrolled ? "rgba(5,14,7,0.95)" : "rgba(5,14,7,0.0)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "0.5px solid rgba(201,162,39,0.15)" : "0.5px solid transparent",
          transition: "all 300ms",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0" style={{ textDecoration: "none" }}>
              <svg width="32" height="32" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="4" width="4" height="18" rx="1.5" fill="#c9a227"/>
                <rect x="8" y="10" width="18" height="4" rx="1.5" fill="#c9a227"/>
                <path d="M17 22 Q11 26 8 30" stroke="#3a7d56" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M17 22 Q23 26 26 30" stroke="#3a7d56" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="8" cy="30" r="2" fill="#3a7d56" opacity="0.8"/>
                <circle cx="26" cy="30" r="2" fill="#3a7d56" opacity="0.8"/>
                <circle cx="11" cy="27" r="1.5" fill="#3a7d56" opacity="0.5"/>
                <circle cx="23" cy="27" r="1.5" fill="#3a7d56" opacity="0.5"/>
              </svg>
              <span style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)", fontSize: "1.45rem", fontWeight: 600, color: "#f2e6c8", letterSpacing: "0.03em" }}>
                The<span style={{ color: "#c9a227" }}> Vine</span>
              </span>
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded-full hidden sm:block"
                style={{ background: "rgba(201,162,39,0.12)", color: "#c9a227", border: "1px solid rgba(201,162,39,0.25)", fontFamily: "var(--font-jost, system-ui, sans-serif)", letterSpacing: "0.08em" }}
              >
                BETA
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    aria-expanded={activeDropdown === link.label}
                    aria-haspopup="true"
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all"
                    style={{
                      color: activeDropdown === link.label ? "#3a7d56" : "#9090B0",
                      background: activeDropdown === link.label ? "rgba(58,125,86,0.07)" : "transparent",
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      style={{
                        transform: activeDropdown === link.label ? "rotate(180deg)" : "none",
                        transition: "transform 200ms",
                        opacity: 0.7,
                      }}
                    />
                  </button>

                  {/* Dropdown */}
                  {activeDropdown === link.label && (
                    <div
                      className="absolute top-full py-3 rounded-xl z-50"
                      style={{
                        left: link.wide ? "50%" : "0",
                        transform: link.wide ? "translateX(-50%)" : "none",
                        width: link.wide ? "min(760px, 90vw)" : "220px",
                        maxHeight: "80vh",
                        overflowY: "auto",
                        background: "rgba(11,11,22,0.98)",
                        border: "1px solid rgba(58,125,86,0.12)",
                        backdropFilter: "blur(24px)",
                        boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
                        paddingTop: "8px",
                      }}
                      onMouseEnter={() => openDropdown(link.label)}
                      onMouseLeave={scheduleClose}
                    >
                      {link.wide ? (
                        /* Multi-column layout for wide menus */
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "0",
                          }}
                        >
                          {link.sections.map((section, si) => (
                            <div
                              key={section.title}
                              style={{
                                padding: "4px 0",
                                borderRight: (si + 1) % 3 !== 0 ? "1px solid rgba(255,255,255,0.04)" : "none",
                              }}
                            >
                              <div
                                className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider"
                                style={{ color: "#3a7d56", opacity: 0.7 }}
                              >
                                {section.title}
                              </div>
                              {section.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  aria-current={pathname === item.href ? "page" : undefined}
                                  className="flex items-center px-4 py-1.5 text-sm transition-colors"
                                  style={{ color: pathname === item.href ? "#3a7d56" : "#8A8AA8", textDecoration: "none" }}
                                  onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "#F2F2F8";
                                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(58,125,86,0.06)";
                                  }}
                                  onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = pathname === item.href ? "#3a7d56" : "#8A8AA8";
                                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                                  }}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Single-column layout with section headers */
                        link.sections.map((section, si) => (
                          <div key={section.title}>
                            {si > 0 && (
                              <div
                                style={{
                                  height: "1px",
                                  background: "rgba(255,255,255,0.04)",
                                  margin: "4px 0",
                                }}
                              />
                            )}
                            <div
                              className="px-4 py-1 text-[10px] font-bold uppercase tracking-wider"
                              style={{ color: "#3a7d56", opacity: 0.6 }}
                            >
                              {section.title}
                            </div>
                            {section.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center px-4 py-2 text-sm transition-colors"
                                style={{ color: "#8A8AA8", textDecoration: "none" }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLAnchorElement).style.color = "#F2F2F8";
                                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(58,125,86,0.06)";
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLAnchorElement).style.color = "#8A8AA8";
                                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                                }}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all"
                style={{ color: "#6A6A88", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                title="Search (⌘K)"
              >
                <Search size={14} />
                <span className="text-xs hidden xl:block" style={{ color: "#4A4A68" }}>⌘K</span>
              </button>

              {/* Notifications */}
              <div className="relative hidden sm:block">
                <button
                  className="relative p-2 rounded-lg transition-all"
                  style={{ color: "#6A6A88" }}
                  onClick={() => setActiveDropdown(activeDropdown === "notifs" ? null : "notifs")}
                >
                  <Bell size={16} />
                  {hasUnread && (
                    <span
                      className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ background: "#3a7d56", boxShadow: "0 0 5px #3a7d56" }}
                    />
                  )}
                </button>

                {activeDropdown === "notifs" && (
                  <div
                    className="absolute right-0 top-full mt-2 w-80 rounded-2xl py-1 z-50"
                    style={{
                      background: "rgba(11,11,22,0.98)",
                      border: "1px solid rgba(58,125,86,0.12)",
                      backdropFilter: "blur(24px)",
                      boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                    }}
                  >
                    <div
                      className="px-4 py-3 flex items-center justify-between"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <span className="text-sm font-bold" style={{ color: "#F2F2F8" }}>Notifications</span>
                      <button
                        onClick={() => { setAllRead(true); setHasUnread(false); }}
                        disabled={allRead}
                        className="text-xs font-semibold"
                        style={{ color: allRead ? "#4A4A68" : "#3a7d56", cursor: allRead ? "default" : "pointer" }}
                      >
                        {allRead ? "All read" : "Mark all read"}
                      </button>
                    </div>
                    {[
                      { icon: "🙏", text: "3 people prayed for your request", time: "2m ago", unread: true },
                      { icon: "💬", text: "Sarah replied in r/FaithAndDoubt", time: "15m ago", unread: true },
                      { icon: "🔥", text: "Your post reached 500 upvotes!", time: "1h ago", unread: true },
                      { icon: "📖", text: "Day 21 devotional is ready", time: "This morning", unread: false },
                      { icon: "👥", text: "Marcus Johnson started following you", time: "Yesterday", unread: false },
                    ].map((raw, i) => {
                      const n = { ...raw, unread: raw.unread && !allRead };
                      return (
                      <Link
                        key={i}
                        href="/notifications"
                        className="flex items-start gap-3 px-4 py-3 cursor-pointer"
                        style={{ background: n.unread ? "rgba(58,125,86,0.03)" : "transparent", textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = n.unread ? "rgba(58,125,86,0.03)" : "transparent")}
                      >
                        <span className="text-base shrink-0">{n.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs leading-snug" style={{ color: n.unread ? "#D0D0E8" : "#6A6A88" }}>{n.text}</p>
                          <p className="text-xs mt-0.5" style={{ color: "#4A4A68" }}>{n.time}</p>
                        </div>
                        {n.unread && <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#3a7d56" }} />}
                      </Link>
                      );
                    })}
                    <div className="px-4 py-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                      <Link href="/notifications" className="text-xs font-semibold block text-center py-1.5" style={{ color: "#3a7d56" }}>
                        View all notifications
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Auth */}
              {user ? (
                <div className="relative">
                  <button
                    className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-xl transition-all"
                    style={{ background: "rgba(58,125,86,0.08)", border: "1px solid rgba(58,125,86,0.15)" }}
                    onClick={() => setActiveDropdown(activeDropdown === "user" ? null : "user")}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", color: "#07070F" }}>
                      {user.avatar}
                    </div>
                    <span className="text-sm font-semibold hidden sm:block" style={{ color: "#F2F2F8" }}>{user.firstName}</span>
                    <ChevronDown size={12} style={{ color: "#8A8AA8", transform: activeDropdown === "user" ? "rotate(180deg)" : "none", transition: "transform 200ms" }} />
                  </button>
                  {activeDropdown === "user" && (
                    <div
                      className="absolute right-0 top-full mt-2 w-52 rounded-2xl py-1.5 z-50"
                      style={{ background: "rgba(11,11,22,0.98)", border: "1px solid rgba(58,125,86,0.12)", backdropFilter: "blur(24px)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}
                    >
                      <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <p className="text-sm font-bold" style={{ color: "#F2F2F8" }}>{user.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#6A6A88" }}>{user.email}</p>
                      </div>
                      {[
                        { label: "My Dashboard", href: "/dashboard" },
                        { label: "My Feed", href: "/feed" },
                        { label: "My Profile", href: "/profile" },
                        { label: "My Journal", href: "/journal" },
                        { label: "My Saved", href: "/saved" },
                        { label: "My Groups", href: "/groups" },
                        { label: "Notifications", href: "/notifications" },
                        { label: "Settings", href: "/settings" },
                      ].map(item => (
                        <Link key={item.label} href={item.href} className="flex items-center px-4 py-2.5 text-sm transition-colors" style={{ color: "#8A8AA8" }}
                          onMouseEnter={e => { e.currentTarget.style.color = "#F2F2F8"; e.currentTarget.style.background = "rgba(58,125,86,0.06)"; }}
                          onMouseLeave={e => { e.currentTarget.style.color = "#8A8AA8"; e.currentTarget.style.background = "transparent"; }}
                        >{item.label}</Link>
                      ))}
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} className="mt-1 pt-1">
                        <button onClick={handleSignOut} className="w-full text-left flex items-center px-4 py-2.5 text-sm transition-colors" style={{ color: "#EF4444" }}
                          onMouseEnter={e => { e.currentTarget.style.background = "rgba(239,68,68,0.06)"; }}
                          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                        >Sign Out</button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button
                    className="hidden sm:block btn-outline-gold px-4 py-1.5 rounded-lg text-sm font-semibold"
                    onClick={() => { setAuthMode("signin"); setAuthOpen(true); }}
                  >
                    Sign In
                  </button>
                  <button
                    className="btn-gold px-4 py-1.5 rounded-lg text-sm font-semibold"
                    onClick={() => { setAuthMode("signup"); setAuthOpen(true); }}
                  >
                    Join Free
                  </button>
                </>
              )}

              {/* Hamburger */}
              <button
                className="lg:hidden p-2 rounded-lg transition-colors"
                style={{ color: "#8A8AA8" }}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="lg:hidden"
            style={{
              background: "rgba(7,7,15,0.99)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <button
                    className="w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold"
                    style={{ color: activeDropdown === link.label ? "#3a7d56" : "#C0C0D8" }}
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      style={{ transform: activeDropdown === link.label ? "rotate(180deg)" : "none", transition: "transform 200ms" }}
                    />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="ml-3 mb-1" style={{ borderLeft: "2px solid rgba(58,125,86,0.15)", paddingLeft: "12px" }}>
                      {link.sections.map((section, si) => (
                        <div key={section.title}>
                          {si > 0 && <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", margin: "4px 0" }} />}
                          <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider" style={{ color: "#3a7d56", opacity: 0.6 }}>
                            {section.title}
                          </div>
                          {section.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              aria-current={pathname === item.href ? "page" : undefined}
                              className="block px-2 py-1.5 text-sm rounded"
                              style={{ color: pathname === item.href ? "#3a7d56" : "#6A6A88", textDecoration: "none" }}
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-2 flex flex-col gap-2">
                {user ? (
                  <>
                    <Link href="/dashboard" className="btn-gold w-full py-2.5 rounded-lg text-sm text-center" onClick={() => setMobileOpen(false)}>My Dashboard</Link>
                    <Link href="/feed" className="btn-outline-gold w-full py-2.5 rounded-lg text-sm text-center" onClick={() => setMobileOpen(false)}>My Feed</Link>
                    <Link href="/saved" className="btn-outline-gold w-full py-2.5 rounded-lg text-sm text-center" onClick={() => setMobileOpen(false)}>My Saved</Link>
                    <Link href="/profile" className="btn-outline-gold w-full py-2.5 rounded-lg text-sm text-center" onClick={() => setMobileOpen(false)}>My Profile</Link>
                    <button className="w-full py-2.5 rounded-lg text-sm font-semibold" style={{ color: "#EF4444", border: "1px solid rgba(239,68,68,0.2)" }} onClick={handleSignOut}>Sign Out</button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn-outline-gold w-full py-2.5 rounded-lg text-sm font-semibold"
                      onClick={() => { setAuthMode("signin"); setAuthOpen(true); setMobileOpen(false); }}
                    >
                      Sign In
                    </button>
                    <button
                      className="btn-gold w-full py-2.5 rounded-lg text-sm"
                      onClick={() => { setAuthMode("signup"); setAuthOpen(true); setMobileOpen(false); }}
                    >
                      Join Free
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} initialMode={authMode} />
    </div>
  );
}
