"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, Bell, ChevronDown, Sparkles } from "lucide-react";
import SearchOverlay from "./SearchOverlay";
import AuthModal from "./AuthModal";

const navLinks = [
  {
    label: "Community",
    children: [
      { label: "My Feed", href: "/feed" },
      { label: "Discussions", href: "/discussions" },
      { label: "Groups", href: "/groups" },
      { label: "Prayer Wall", href: "/prayer-wall" },
      { label: "Testimony Wall", href: "/testimony" },
      { label: "Faith Journey", href: "/faith-journey" },
      { label: "Global Connect", href: "/global-connect" },
      { label: "Stories", href: "/stories" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Guides & Articles", href: "/resources" },
      { label: "Video Library", href: "/video" },
      { label: "Podcasts", href: "/podcast" },
      { label: "Bible Tools", href: "/bible" },
      { label: "Bible Study", href: "/bible-study" },
      { label: "Reading Plan", href: "/reading-plan" },
      { label: "Reading List", href: "/reading-list" },
      { label: "Apologetics", href: "/apologetics" },
    ],
  },
  {
    label: "Daily Bread",
    children: [
      { label: "Today's Devotional", href: "/daily" },
      { label: "Spiritual Disciplines", href: "/disciplines" },
      { label: "Bible Reader", href: "/bible" },
      { label: "Reading Plans", href: "/reading-plan" },
      { label: "Verse Memory", href: "/verse-memory" },
      { label: "Spiritual Gifts", href: "/spiritual-gifts" },
      { label: "Worship", href: "/worship" },
      { label: "Live Church", href: "/live" },
      { label: "My Journal", href: "/journal" },
      { label: "Sermon Notes", href: "/sermon-notes" },
      { label: "Faith Goals", href: "/goals" },
      { label: "Fasting Tracker", href: "/fasting" },
      { label: "Prayer List", href: "/prayer-list" },
      { label: "Gratitude Journal", href: "/gratitude" },
      { label: "Habit Tracker", href: "/habits" },
      { label: "Accountability", href: "/accountability" },
      { label: "Faith Journey", href: "/faith-journey" },
    ],
  },
  {
    label: "Life & Faith",
    children: [
      { label: "Life Hacks", href: "/life-hacks" },
      { label: "Mental Health", href: "/mental-health" },
      { label: "Relationships", href: "/relationships" },
      { label: "Work & Leadership", href: "/work-leadership" },
    ],
  },
  {
    label: "Explore",
    children: [
      { label: "Discover", href: "/explore" },
      { label: "Challenges", href: "/challenges" },
      { label: "Church Finder", href: "/church-finder" },
      { label: "Missions", href: "/missions" },
      { label: "Events", href: "/events" },
      { label: "Leaderboard", href: "/leaderboard" },
      { label: "Creators", href: "/creators" },
      { label: "About Vine", href: "/about" },
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");
  const [bannerVisible, setBannerVisible] = useState(true);
  const [user, setUser] = useState<VineUser | null>(null);
  const [hasUnread, setHasUnread] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_user");
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { /* ignore */ }
    }
    try {
      const readSet: number[] = JSON.parse(localStorage.getItem("vine_notif_read") || "[]");
      const totalNotifs = 20;
      setHasUnread(readSet.length < totalNotifs);
    } catch { setHasUnread(true); }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("vine_user");
    setUser(null);
    window.location.href = "/";
  };

  // Keep --header-height CSS var in sync with actual rendered height
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

  // Keyboard shortcut ⌘K
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

  // Scroll detection
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
      {/* Announcement Banner */}
      {bannerVisible && (
        <div
          className="flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm relative"
          style={{
            background: "linear-gradient(90deg, rgba(107,79,187,0.25) 0%, rgba(0,255,136,0.12) 50%, rgba(107,79,187,0.25) 100%)",
            borderBottom: "1px solid rgba(0,255,136,0.15)",
          }}
        >
          <Sparkles size={12} style={{ color: "#00FF88", flexShrink: 0 }} />
          <span style={{ color: "#C0C0D8" }}>
            <span className="font-bold" style={{ color: "#00FF88" }}>Vine Beta is live.</span>{" "}
            <span className="hidden sm:inline">Join early and shape the future of Christian community.</span>{" "}
            <button onClick={() => { setAuthMode("signup"); setAuthOpen(true); }} className="underline font-semibold" style={{ color: "#44FFAA" }}>
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
          background: scrolled ? "rgba(7,7,15,0.96)" : "rgba(7,7,15,0.0)",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,255,136,0.08)" : "1px solid transparent",
          transition: "all 300ms",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00FF88 0%, #8B6FDB 100%)" }}
              >
                <span className="text-black font-black text-sm">V</span>
              </div>
              <span className="text-xl font-black tracking-tight" style={{ color: "#F2F2F8" }}>
                Vine
              </span>
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded-full hidden sm:block"
                style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}
              >
                BETA
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all"
                    style={{
                      color: activeDropdown === link.label ? "#00FF88" : "#9090B0",
                      background: activeDropdown === link.label ? "rgba(0,255,136,0.07)" : "transparent",
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
                      className="absolute top-full left-0 mt-1.5 py-1.5 rounded-xl min-w-[190px] z-50"
                      style={{
                        background: "rgba(11,11,22,0.98)",
                        border: "1px solid rgba(0,255,136,0.12)",
                        backdropFilter: "blur(24px)",
                        boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
                      }}
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="flex items-center px-4 py-2.5 text-sm transition-colors"
                          style={{ color: "#8A8AA8" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#F2F2F8";
                            e.currentTarget.style.background = "rgba(0,255,136,0.06)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#8A8AA8";
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {child.label}
                        </a>
                      ))}
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
                      style={{ background: "#00FF88", boxShadow: "0 0 5px #00FF88" }}
                    />
                  )}
                </button>

                {activeDropdown === "notifs" && (
                  <div
                    className="absolute right-0 top-full mt-2 w-80 rounded-2xl py-1 z-50"
                    style={{
                      background: "rgba(11,11,22,0.98)",
                      border: "1px solid rgba(0,255,136,0.12)",
                      backdropFilter: "blur(24px)",
                      boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                    }}
                  >
                    <div
                      className="px-4 py-3 flex items-center justify-between"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <span className="text-sm font-bold" style={{ color: "#F2F2F8" }}>Notifications</span>
                      <button className="text-xs font-semibold" style={{ color: "#00FF88" }}>Mark all read</button>
                    </div>
                    {[
                      { icon: "🙏", text: "3 people prayed for your request", time: "2m ago", unread: true },
                      { icon: "💬", text: "Sarah replied in r/FaithAndDoubt", time: "15m ago", unread: true },
                      { icon: "🔥", text: "Your post reached 500 upvotes!", time: "1h ago", unread: true },
                      { icon: "📖", text: "Day 21 devotional is ready", time: "This morning", unread: false },
                      { icon: "👥", text: "Marcus Johnson started following you", time: "Yesterday", unread: false },
                    ].map((n, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 px-4 py-3 cursor-pointer"
                        style={{ background: n.unread ? "rgba(0,255,136,0.03)" : "transparent" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = n.unread ? "rgba(0,255,136,0.03)" : "transparent")}
                      >
                        <span className="text-base shrink-0">{n.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs leading-snug" style={{ color: n.unread ? "#D0D0E8" : "#6A6A88" }}>{n.text}</p>
                          <p className="text-xs mt-0.5" style={{ color: "#4A4A68" }}>{n.time}</p>
                        </div>
                        {n.unread && <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#00FF88" }} />}
                      </div>
                    ))}
                    <div className="px-4 py-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                      <a href="/notifications" className="text-xs font-semibold block text-center py-1.5" style={{ color: "#00FF88" }}>
                        View all notifications
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Auth */}
              {user ? (
                <div className="relative">
                  <button
                    className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-xl transition-all"
                    style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.15)" }}
                    onClick={() => setActiveDropdown(activeDropdown === "user" ? null : "user")}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", color: "#07070F" }}>
                      {user.avatar}
                    </div>
                    <span className="text-sm font-semibold hidden sm:block" style={{ color: "#F2F2F8" }}>{user.firstName}</span>
                    <ChevronDown size={12} style={{ color: "#8A8AA8", transform: activeDropdown === "user" ? "rotate(180deg)" : "none", transition: "transform 200ms" }} />
                  </button>
                  {activeDropdown === "user" && (
                    <div
                      className="absolute right-0 top-full mt-2 w-52 rounded-2xl py-1.5 z-50"
                      style={{ background: "rgba(11,11,22,0.98)", border: "1px solid rgba(0,255,136,0.12)", backdropFilter: "blur(24px)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}
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
                        <a key={item.label} href={item.href} className="flex items-center px-4 py-2.5 text-sm transition-colors" style={{ color: "#8A8AA8" }}
                          onMouseEnter={e => { e.currentTarget.style.color = "#F2F2F8"; e.currentTarget.style.background = "rgba(0,255,136,0.06)"; }}
                          onMouseLeave={e => { e.currentTarget.style.color = "#8A8AA8"; e.currentTarget.style.background = "transparent"; }}
                        >{item.label}</a>
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
                    style={{ color: activeDropdown === link.label ? "#00FF88" : "#C0C0D8" }}
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      style={{ transform: activeDropdown === link.label ? "rotate(180deg)" : "none", transition: "transform 200ms" }}
                    />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="ml-3 mb-1 space-y-0.5" style={{ borderLeft: "2px solid rgba(0,255,136,0.15)", paddingLeft: "12px" }}>
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-2 py-2 text-sm rounded"
                          style={{ color: "#6A6A88" }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-2 flex flex-col gap-2">
                {user ? (
                  <>
                    <a href="/dashboard" className="btn-gold w-full py-2.5 rounded-lg text-sm text-center" onClick={() => setMobileOpen(false)}>My Dashboard</a>
                    <a href="/feed" className="btn-outline-gold w-full py-2.5 rounded-lg text-sm text-center" onClick={() => setMobileOpen(false)}>My Feed</a>
                    <a href="/saved" className="btn-outline-gold w-full py-2.5 rounded-lg text-sm text-center" onClick={() => setMobileOpen(false)}>My Saved</a>
                    <a href="/profile" className="btn-outline-gold w-full py-2.5 rounded-lg text-sm text-center" onClick={() => setMobileOpen(false)}>My Profile</a>
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
