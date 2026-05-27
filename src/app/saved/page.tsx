"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Bookmark,
  BookOpen,
  MessageSquare,
  Heart,
  Headphones,
  PlayCircle,
  Brain,
  Zap,
  Users,
  Music,
  ChevronRight,
  Calendar,
} from "lucide-react";

interface SavedItem {
  type: string;
  title: string;
  href: string;
  color: string;
  icon: string;
  subtitle?: string;
}

function loadSavedItems(): SavedItem[] {
  const items: SavedItem[] = [];

  const tryGet = (key: string, def = "[]") => {
    try { return localStorage.getItem(key) || def; } catch { return def; }
  };

  // Feed saves
  try {
    const feedSaves = JSON.parse(tryGet("vine_feed_saves", "{}"));
    const savedIds = Object.keys(feedSaves).filter((k) => feedSaves[k]);
    if (savedIds.length > 0) {
      items.push({
        type: "Feed Posts",
        title: `${savedIds.length} saved post${savedIds.length !== 1 ? "s" : ""}`,
        href: "/feed",
        color: "#6B4FBB",
        icon: "💬",
      });
    }
  } catch {}

  // Discussions saves
  try {
    const discSaved = JSON.parse(tryGet("vine_disc_saved", "{}"));
    const savedIds = Object.keys(discSaved).filter((k) => discSaved[k]);
    if (savedIds.length > 0) {
      items.push({
        type: "Discussions",
        title: `${savedIds.length} saved discussion${savedIds.length !== 1 ? "s" : ""}`,
        href: "/discussions",
        color: "#8B9BCC",
        icon: "🗣️",
      });
    }
  } catch {}

  // Blog saves
  try {
    const blogSaved = JSON.parse(tryGet("vine_blog_saved", "{}"));
    const savedIds = Object.keys(blogSaved).filter((k) => blogSaved[k]);
    if (savedIds.length > 0) {
      items.push({
        type: "Articles",
        title: `${savedIds.length} saved article${savedIds.length !== 1 ? "s" : ""}`,
        href: "/blog",
        color: "#4FBBAA",
        icon: "📄",
      });
    }
  } catch {}

  // Stories saves
  try {
    const storiesSaved = JSON.parse(tryGet("vine_stories_saved", "{}"));
    const savedIds = Object.keys(storiesSaved).filter((k) => storiesSaved[k]);
    if (savedIds.length > 0) {
      items.push({
        type: "Stories",
        title: `${savedIds.length} saved stor${savedIds.length !== 1 ? "ies" : "y"}`,
        href: "/stories",
        color: "#F59E0B",
        icon: "✝️",
      });
    }
  } catch {}

  // Podcasts saves
  try {
    const podSaved = JSON.parse(tryGet("vine_podcast_saved", "[]"));
    if (Array.isArray(podSaved) && podSaved.length > 0) {
      items.push({
        type: "Podcasts",
        title: `${podSaved.length} saved episode${podSaved.length !== 1 ? "s" : ""}`,
        href: "/podcast",
        color: "#00FF88",
        icon: "🎙️",
      });
    }
  } catch {}

  // Video saves
  try {
    const vidSaved = JSON.parse(tryGet("vine_video_saved", "[]"));
    if (Array.isArray(vidSaved) && vidSaved.length > 0) {
      items.push({
        type: "Videos",
        title: `${vidSaved.length} saved video${vidSaved.length !== 1 ? "s" : ""}`,
        href: "/video",
        color: "#BB4F7A",
        icon: "🎬",
      });
    }
  } catch {}

  // Verse Memory
  try {
    const verseMemory = JSON.parse(tryGet("vine_verse_memory", "[]"));
    if (Array.isArray(verseMemory) && verseMemory.length > 0) {
      const mastered = verseMemory.filter((v: { mastered: boolean }) => v.mastered).length;
      items.push({
        type: "Verse Memory",
        title: `${verseMemory.length} verses in your memory list`,
        subtitle: `${mastered} mastered`,
        href: "/verse-memory",
        color: "#6B4FBB",
        icon: "🧠",
      });
    }
  } catch {}

  // Life Hacks saves
  try {
    const hacksSaved = JSON.parse(tryGet("vine_lifehacks_saved", "[]"));
    if (Array.isArray(hacksSaved) && hacksSaved.length > 0) {
      items.push({
        type: "Life Hacks",
        title: `${hacksSaved.length} saved hack${hacksSaved.length !== 1 ? "s" : ""}`,
        href: "/life-hacks",
        color: "#10B981",
        icon: "⚡",
      });
    }
  } catch {}

  // Journal entries
  try {
    const journalEntries = JSON.parse(tryGet("vine_journal_entries", "[]"));
    if (Array.isArray(journalEntries) && journalEntries.length > 0) {
      items.push({
        type: "Journal",
        title: `${journalEntries.length} journal entr${journalEntries.length !== 1 ? "ies" : "y"}`,
        href: "/journal",
        color: "#EC4899",
        icon: "📔",
      });
    }
  } catch {}

  // Apologetics saves
  try {
    const apoSaved = JSON.parse(tryGet("vine_apologetics_saved", "[]"));
    const trackSaved = JSON.parse(tryGet("vine_apologetics_tracks", "[]"));
    const total = apoSaved.length + trackSaved.length;
    if (total > 0) {
      items.push({
        type: "Apologetics",
        title: `${total} saved response${total !== 1 ? "s" : ""} & tracks`,
        href: "/apologetics",
        color: "#3B82F6",
        icon: "🛡️",
      });
    }
  } catch {}

  // Events
  try {
    const eventsSaved = JSON.parse(tryGet("vine_events_saved", "[]"));
    if (Array.isArray(eventsSaved) && eventsSaved.length > 0) {
      items.push({
        type: "Events",
        title: `${eventsSaved.length} saved event${eventsSaved.length !== 1 ? "s" : ""}`,
        href: "/events",
        color: "#F59E0B",
        icon: "📅",
      });
    }
  } catch {}

  // Bible bookmarks
  try {
    const bibleBookmarks = JSON.parse(tryGet("vine_bible_bookmarks", "[]"));
    if (Array.isArray(bibleBookmarks) && bibleBookmarks.length > 0) {
      items.push({
        type: "Bible Bookmarks",
        title: `${bibleBookmarks.length} bookmarked verse${bibleBookmarks.length !== 1 ? "s" : ""}`,
        href: "/bible",
        color: "#00FF88",
        icon: "📖",
      });
    }
  } catch {}

  // Bible notes
  try {
    const bibleNotes = JSON.parse(tryGet("vine_bible_notes", "{}"));
    const noteCount = Object.keys(bibleNotes).length;
    if (noteCount > 0) {
      items.push({
        type: "Bible Notes",
        title: `${noteCount} verse note${noteCount !== 1 ? "s" : ""}`,
        href: "/bible",
        color: "#F59E0B",
        icon: "🗒️",
      });
    }
  } catch {}

  // Reading plan progress
  try {
    const readingDone = JSON.parse(tryGet("vine_reading_plan", "[]"));
    if (Array.isArray(readingDone) && readingDone.length > 0) {
      items.push({
        type: "Reading Plan",
        title: `${readingDone.length} chapter${readingDone.length !== 1 ? "s" : ""} completed`,
        href: "/reading-plan",
        color: "#3B82F6",
        icon: "📚",
      });
    }
  } catch {}

  return items;
}

const colorToIcon: Record<string, typeof BookOpen> = {};
void colorToIcon;

export default function SavedPage() {
  const [items, setItems] = useState<SavedItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setItems(loadSavedItems());
    setLoaded(true);
  }, []);

  const iconMap: Record<string, React.ReactNode> = {
    "Feed Posts": <MessageSquare size={20} />,
    "Discussions": <MessageSquare size={20} />,
    "Articles": <BookOpen size={20} />,
    "Stories": <Heart size={20} />,
    "Podcasts": <Headphones size={20} />,
    "Videos": <PlayCircle size={20} />,
    "Verse Memory": <Brain size={20} />,
    "Life Hacks": <Zap size={20} />,
    "Journal": <BookOpen size={20} />,
    "Apologetics": <BookOpen size={20} />,
    "Events": <Calendar size={20} />,
    "Bible Bookmarks": <Bookmark size={20} />,
    "Bible Notes": <BookOpen size={20} />,
    "Reading Plan": <BookOpen size={20} />,
  };

  const quickLinks = [
    { label: "Journal", href: "/journal", icon: BookOpen, color: "#EC4899" },
    { label: "Verse Memory", href: "/verse-memory", icon: Brain, color: "#6B4FBB" },
    { label: "Faith Goals", href: "/goals", icon: Zap, color: "#00FF88" },
    { label: "Gifts Quiz", href: "/spiritual-gifts", icon: Music, color: "#8B5CF6" },
    { label: "Bible Reader", href: "/bible", icon: BookOpen, color: "#00FF88" },
    { label: "Discussion Hubs", href: "/discussions", icon: MessageSquare, color: "#8B9BCC" },
    { label: "Video Library", href: "/video", icon: PlayCircle, color: "#BB4F7A" },
    { label: "Life Hacks", href: "/life-hacks", icon: Heart, color: "#10B981" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Bookmark size={20} style={{ color: "#00FF88" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>My Library</span>
            </div>
            <h1 className="text-3xl font-black">Saved Content</h1>
            <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>Everything you&apos;ve bookmarked, saved, and collected across Vine.</p>
          </div>

          {!loaded ? (
            <div className="text-center py-20">
              <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin mx-auto mb-4" style={{ borderColor: "#00FF88", borderTopColor: "transparent" }} />
              <p style={{ color: "#6A6A88" }}>Loading your saved content...</p>
            </div>
          ) : items.length === 0 ? (
            <div>
              <div className="text-center py-16 rounded-2xl mb-10" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <div className="text-5xl mb-4">📚</div>
                <h2 className="text-xl font-black mb-2" style={{ color: "#F2F2F8" }}>Nothing saved yet</h2>
                <p className="text-sm max-w-md mx-auto mb-6" style={{ color: "#6A6A88" }}>
                  As you use Vine — saving articles, bookmarking Bible verses, adding verses to memory — it will all appear here.
                </p>
                <a
                  href="/explore"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-black"
                  style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
                >
                  Explore Vine <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ) : (
            <div>
              {/* Saved items grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="rounded-2xl p-5 flex items-center gap-4 transition-all group"
                    style={{ background: "#12121F", border: `1px solid ${item.color}20`, textDecoration: "none" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${item.color}40`; e.currentTarget.style.background = `${item.color}06`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${item.color}20`; e.currentTarget.style.background = "#12121F"; }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: `${item.color}15` }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: item.color }}>
                        {item.type}
                      </p>
                      <p className="font-bold text-sm" style={{ color: "#F2F2F8" }}>{item.title}</p>
                      {item.subtitle && (
                        <p className="text-xs mt-0.5" style={{ color: "#6A6A88" }}>{item.subtitle}</p>
                      )}
                    </div>
                    <ChevronRight size={16} style={{ color: "#4A4A68" }} />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Quick access to save more */}
          <div>
            <h2 className="text-lg font-black mb-4" style={{ color: "#F2F2F8" }}>Find More to Save</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-all"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", textDecoration: "none" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = `${link.color}08`; e.currentTarget.style.borderColor = `${link.color}30`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#12121F"; e.currentTarget.style.borderColor = "#1E1E32"; }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${link.color}18` }}>
                      <Icon size={18} style={{ color: link.color }} />
                    </div>
                    <span className="text-xs font-semibold leading-tight" style={{ color: "#8A8AA8" }}>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Pro tip */}
          <div
            className="mt-10 rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(107,79,187,0.06) 100%)", border: "1px solid rgba(0,255,136,0.12)" }}
          >
            <Users size={24} style={{ color: "#00FF88" }} className="mx-auto mb-3" />
            <h3 className="text-base font-black mb-2" style={{ color: "#F2F2F8" }}>Your library grows as you engage</h3>
            <p className="text-sm max-w-md mx-auto mb-4" style={{ color: "#6A6A88" }}>
              Save articles from the blog, bookmark Bible verses, add verses to memory, save discussions — it all collects here automatically.
            </p>
            <a href="/dashboard" className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold" style={{ background: "rgba(0,255,136,0.12)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)" }}>
              View Full Dashboard <ChevronRight size={13} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
