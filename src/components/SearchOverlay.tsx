"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X, TrendingUp, Clock, BookOpen, MessageSquare, Users, Zap } from "lucide-react";

const trending = [
  { icon: "🔥", label: "Unanswered Prayer" },
  { icon: "📖", label: "Romans 8 Study" },
  { icon: "💚", label: "Anxiety & Faith" },
  { icon: "⚡", label: "Sabbath Productivity" },
  { icon: "🙏", label: "Morning Devotional" },
  { icon: "❤️", label: "Forgiveness Guide" },
];

const quickLinks = [
  { icon: BookOpen, label: "Bible — John 3:16", type: "Scripture", color: "#3a7d56" },
  { icon: MessageSquare, label: "r/FaithAndDoubt", type: "Hub", color: "#6B4FBB" },
  { icon: Zap, label: "10-10-80 Money Method", type: "Life Hack", color: "#E8A020" },
  { icon: Users, label: "Global Connect", type: "Community", color: "#3A9E72" },
];

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const runSearch = (term: string) => {
    setQuery(term);
    setSubmitted(term);
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setSubmitted(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // toggle handled by parent
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden"
        style={{
          background: "#0E0E1A",
          border: "1px solid rgba(58,125,86,0.2)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(58,125,86,0.05)",
        }}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <Search size={20} style={{ color: "#3a7d56" }} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSubmitted(query.trim());
            }}
            placeholder="Search Vine — verses, topics, discussions, guides..."
            className="flex-1 bg-transparent outline-none text-base"
            style={{ color: "#F2F2F8" }}
          />
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:block text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "#6A6A88" }}>ESC</kbd>
            <button onClick={onClose}><X size={18} style={{ color: "#6A6A88" }} /></button>
          </div>
        </div>

        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {query.length === 0 ? (
            <>
              {/* Trending */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={13} style={{ color: "#3a7d56" }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#3a7d56" }}>Trending Now</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trending.map((t) => (
                    <button key={t.label} onClick={() => runSearch(t.label)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: "#A0A0C0" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(58,125,86,0.3)"; e.currentTarget.style.color = "#F2F2F8"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#A0A0C0"; }}
                    >
                      <span>{t.icon}</span> {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={13} style={{ color: "#6A6A88" }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#6A6A88" }}>Quick Access</span>
                </div>
                <div className="space-y-1">
                  {quickLinks.map((l) => (
                    <button key={l.label} onClick={() => runSearch(l.label)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors"
                      style={{ color: "#A0A0C0" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "#F2F2F8"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#A0A0C0"; }}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${l.color}18` }}>
                        <l.icon size={15} style={{ color: l.color }} />
                      </div>
                      <span className="text-sm flex-1">{l.label}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "#6A6A88" }}>{l.type}</span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-2">
              {["Discussions", "Resources", "Bible", "Creators"].map((cat) => (
                <div key={cat}>
                  <p className="text-xs font-bold uppercase tracking-wider mb-2 px-3" style={{ color: "#6A6A88" }}>{cat}</p>
                  {[1,2].map((i) => (
                    <button key={i} onClick={() => setSubmitted(`${query} in ${cat.toLowerCase()}`)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors"
                      style={{ color: "#A0A0C0" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "#F2F2F8"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#A0A0C0"; }}
                    >
                      <Search size={14} style={{ color: "#6A6A88" }} />
                      <span className="text-sm">{query} in {cat.toLowerCase()} {i === 2 ? "— related result" : ""}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-5 py-3 border-t flex items-center justify-between text-xs" style={{ borderColor: "rgba(255,255,255,0.04)", color: "#4A4A68" }}>
          {submitted ? (
            <span style={{ color: "#3a7d56" }}>Searching for &ldquo;{submitted}&rdquo;…</span>
          ) : (
            <span>Press <kbd className="px-1 py-0.5 rounded text-xs" style={{ background: "rgba(255,255,255,0.06)" }}>↵</kbd> to search</span>
          )}
          <span>⌘K to open anywhere</span>
        </div>
      </div>
    </div>
  );
}
