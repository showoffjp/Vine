"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, Bell, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Community",
    children: ["Discussions", "Circles", "Global Connect", "Prayer Wall"],
  },
  {
    label: "Resources",
    children: ["Guides & Articles", "Bible Tools", "Video Library", "Podcasts"],
  },
  {
    label: "Daily Bread",
    children: ["Verse of the Day", "Devotionals", "Reading Plans", "Journals"],
  },
  {
    label: "Life & Faith",
    children: ["Life Hacks", "Mental Health", "Relationships", "Motivation"],
  },
  {
    label: "Explore",
    children: ["Trending", "Topics A–Z", "Creators", "Events"],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(7,7,15,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(212,175,55,0.08)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #D4AF37 0%, #8B6FDB 100%)",
              }}
            >
              <span className="text-black font-black text-sm">V</span>
            </div>
            <span
              className="text-xl font-black tracking-tight"
              style={{ color: "#F2F2F8" }}
            >
              Vine
            </span>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(212,175,55,0.1)",
                color: "#D4AF37",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              BETA
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color:
                      activeDropdown === link.label
                        ? "#D4AF37"
                        : "#A0A0C0",
                    background:
                      activeDropdown === link.label
                        ? "rgba(212,175,55,0.06)"
                        : "transparent",
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    className="transition-transform duration-200"
                    style={{
                      transform:
                        activeDropdown === link.label
                          ? "rotate(180deg)"
                          : "none",
                    }}
                  />
                </button>

                {/* Dropdown */}
                {activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-1 py-2 rounded-xl min-w-[180px]"
                    style={{
                      background: "rgba(14,14,26,0.98)",
                      border: "1px solid rgba(212,175,55,0.12)",
                      backdropFilter: "blur(20px)",
                      boxShadow:
                        "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.05)",
                    }}
                  >
                    {link.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block px-4 py-2 text-sm transition-colors duration-150"
                        style={{ color: "#8A8AA8" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#D4AF37")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#8A8AA8")
                        }
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200"
              style={{ color: "#8A8AA8" }}
            >
              <Search size={16} />
            </button>

            <button
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200"
              style={{ color: "#8A8AA8" }}
            >
              <Bell size={16} />
            </button>

            <button className="hidden sm:block btn-outline-gold px-4 py-2 rounded-lg text-sm font-semibold">
              Sign In
            </button>

            <button className="btn-gold px-4 py-2 rounded-lg text-sm">
              Join Free
            </button>

            <button
              className="lg:hidden p-2 rounded-lg"
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
          className="lg:hidden border-t"
          style={{
            background: "rgba(7,7,15,0.98)",
            borderColor: "rgba(212,175,55,0.1)",
          }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold"
                  style={{ color: "#D4AF37" }}
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === link.label ? null : link.label
                    )
                  }
                >
                  {link.label}
                </button>
                {activeDropdown === link.label && (
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block px-3 py-1.5 text-sm rounded"
                        style={{ color: "#8A8AA8" }}
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button className="btn-outline-gold w-full py-2.5 rounded-lg text-sm font-semibold">
                Sign In
              </button>
              <button className="btn-gold w-full py-2.5 rounded-lg text-sm">
                Join Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
