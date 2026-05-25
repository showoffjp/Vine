"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  Bookmark,
  Highlighter,
  StickyNote,
  Share2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  AlignJustify,
  Minus,
  Plus,
  BookOpen,
  X,
  GitBranch,
  ScrollText,
  Languages,
  PlayCircle,
  Headphones,
} from "lucide-react";

const translations = ["NIV", "ESV", "KJV", "NKJV", "NLT", "MSG"];

const genesisVerses = [
  {
    num: 1,
    text: "In the beginning God created the heavens and the earth.",
    hebrew: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
  },
  {
    num: 2,
    text: "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.",
  },
  {
    num: 3,
    text: 'And God said, "Let there be light," and there was light.',
  },
  {
    num: 4,
    text: "God saw that the light was good, and he separated the light from the darkness.",
  },
  {
    num: 5,
    text: 'God called the light "day," and the darkness he called "night." And there was evening, and there was morning—the first day.',
  },
  {
    num: 6,
    text: 'And God said, "Let there be a vault between the waters to separate water from water."',
  },
  {
    num: 7,
    text: "So God made the vault and separated the water under the vault from the water above it. And it was so.",
  },
  {
    num: 8,
    text: 'God called the vault "sky." And there was evening, and there was morning—the second day.',
  },
  {
    num: 9,
    text: 'And God said, "Let the water under the sky be gathered to one place, and let dry ground appear." And it was so.',
  },
  {
    num: 10,
    text: 'God called the dry ground "land," and the gathered waters he called "seas." And God saw that it was good.',
  },
];

const crossRefs = [
  { ref: "John 1:1–3", preview: "In the beginning was the Word, and the Word was with God..." },
  { ref: "Hebrews 11:3", preview: "By faith we understand that the universe was formed at God's command..." },
  { ref: "Psalm 33:6", preview: "By the word of the LORD the heavens were made, their starry host..." },
  { ref: "Colossians 1:16", preview: "For in him all things were created: things in heaven and on earth..." },
  { ref: "Revelation 4:11", preview: "You are worthy, our Lord and God, to receive glory and honor..." },
];

const hebrewBreakdown = [
  { word: "בְּרֵאשִׁית", transliteration: "bə-rê-šîṯ", meaning: "In the beginning", type: "Preposition + Noun" },
  { word: "בָּרָא", transliteration: "bā-rā", meaning: "created", type: "Verb (Qal Perfect)" },
  { word: "אֱלֹהִים", transliteration: "ʾĕ-lō-hîm", meaning: "God", type: "Noun (Masculine Plural)" },
  { word: "הַשָּׁמַיִם", transliteration: "haš-šā-ma-yim", meaning: "the heavens", type: "Noun (with article)" },
  { word: "הָאָרֶץ", transliteration: "hā-ʾā-reṣ", meaning: "the earth", type: "Noun (with article)" },
];

const relatedResources = [
  {
    type: "Article",
    title: "The Days of Creation: Literal or Figurative?",
    author: "Dr. John Walton",
    time: "12 min read",
    color: "#6B4FBB",
  },
  {
    type: "Video",
    title: "Genesis 1 Through Ancient Near Eastern Eyes",
    author: "The Bible Project",
    time: "18 min watch",
    color: "#D4AF37",
  },
  {
    type: "Study Guide",
    title: "Genesis Reading Plan — 30-Day Journey",
    author: "Vine Theology Team",
    time: "30 days",
    color: "#4FBBAA",
  },
];

const highlightColors = [
  { label: "Yellow", value: "rgba(255,230,0,0.2)", border: "rgba(255,230,0,0.5)" },
  { label: "Green", value: "rgba(100,200,100,0.2)", border: "rgba(100,200,100,0.5)" },
  { label: "Pink", value: "rgba(255,100,150,0.2)", border: "rgba(255,100,150,0.5)" },
  { label: "Purple", value: "rgba(107,79,187,0.25)", border: "rgba(107,79,187,0.5)" },
];

export default function BiblePage() {
  const [selectedTranslation, setSelectedTranslation] = useState("NIV");
  const [studyMode, setStudyMode] = useState(false);
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null);
  const [highlightedVerses, setHighlightedVerses] = useState<Record<number, { bg: string; border: string }>>({});
  const [hoveredVerse, setHoveredVerse] = useState<number | null>(null);
  const [sidePanelOpen, setSidePanelOpen] = useState(true);
  const [fontSize, setFontSize] = useState(17);
  const [activeHighlightColor, setActiveHighlightColor] = useState(highlightColors[0]);
  const [bookmarkedVerses, setBookmarkedVerses] = useState<Set<number>>(new Set());

  const handleVerseClick = (verseNum: number) => {
    setSelectedVerse(selectedVerse === verseNum ? null : verseNum);
  };

  const handleHighlight = (verseNum: number) => {
    setHighlightedVerses((prev) => {
      const next = { ...prev };
      if (next[verseNum]?.bg === activeHighlightColor.value) {
        delete next[verseNum];
      } else {
        next[verseNum] = { bg: activeHighlightColor.value, border: activeHighlightColor.border };
      }
      return next;
    });
  };

  const handleBookmark = (verseNum: number) => {
    setBookmarkedVerses((prev) => {
      const next = new Set(prev);
      if (next.has(verseNum)) next.delete(verseNum);
      else next.add(verseNum);
      return next;
    });
  };

  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
      <Navbar />

      <main className="pt-20 pb-16">
        {/* Top Search + Controls Bar */}
        <div
          className="sticky top-16 z-40 border-b"
          style={{ background: "rgba(7,7,15,0.97)", borderColor: "#1E1E32", backdropFilter: "blur(20px)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            {/* Search */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }} />
                <input
                  type="text"
                  placeholder="Search any verse, word, or topic..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    color: "#F2F2F8",
                  }}
                />
              </div>
              <button
                onClick={() => setSidePanelOpen(!sidePanelOpen)}
                className="hidden lg:flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: sidePanelOpen ? "rgba(212,175,55,0.12)" : "#12121F",
                  border: `1px solid ${sidePanelOpen ? "rgba(212,175,55,0.3)" : "#1E1E32"}`,
                  color: sidePanelOpen ? "#D4AF37" : "#8A8AA8",
                }}
              >
                <ScrollText size={15} />
                Study Panel
              </button>
            </div>

            {/* Reader Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Book/Chapter/Verse selectors */}
              <div className="flex items-center gap-2">
                {["Genesis", "Chapter 1"].map((label, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                  >
                    {label}
                    <ChevronDown size={13} style={{ color: "#6A6A88" }} />
                  </button>
                ))}
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]" style={{ color: "#8A8AA8" }}>
                    <ChevronLeft size={16} />
                  </button>
                  <button className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]" style={{ color: "#8A8AA8" }}>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-5" style={{ background: "#1E1E32" }} />

              {/* Translation tabs */}
              <div
                className="flex items-center rounded-lg overflow-hidden"
                style={{ border: "1px solid #1E1E32" }}
              >
                {translations.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTranslation(t)}
                    className="px-3 py-1.5 text-xs font-bold transition-all duration-200"
                    style={{
                      background: selectedTranslation === t ? "rgba(212,175,55,0.15)" : "transparent",
                      color: selectedTranslation === t ? "#D4AF37" : "#6A6A88",
                      borderRight: "1px solid #1E1E32",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-5" style={{ background: "#1E1E32" }} />

              {/* Mode toggle */}
              <div
                className="flex items-center rounded-lg overflow-hidden"
                style={{ border: "1px solid #1E1E32" }}
              >
                <button
                  onClick={() => setStudyMode(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-all duration-200"
                  style={{
                    background: !studyMode ? "rgba(212,175,55,0.15)" : "transparent",
                    color: !studyMode ? "#D4AF37" : "#6A6A88",
                  }}
                >
                  <BookOpen size={13} />
                  Reading
                </button>
                <button
                  onClick={() => setStudyMode(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-all duration-200"
                  style={{
                    background: studyMode ? "rgba(212,175,55,0.15)" : "transparent",
                    color: studyMode ? "#D4AF37" : "#6A6A88",
                    borderLeft: "1px solid #1E1E32",
                  }}
                >
                  <ScrollText size={13} />
                  Study
                </button>
              </div>

              {/* Font size controls (right side) */}
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => setFontSize((s) => Math.max(12, s - 1))}
                  className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]"
                  style={{ color: "#8A8AA8" }}
                >
                  <Minus size={14} />
                </button>
                <span className="text-xs font-mono" style={{ color: "#6A6A88" }}>{fontSize}px</span>
                <button
                  onClick={() => setFontSize((s) => Math.min(28, s + 1))}
                  className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]"
                  style={{ color: "#8A8AA8" }}
                >
                  <Plus size={14} />
                </button>
                <div className="w-px h-4 mx-1" style={{ background: "#1E1E32" }} />
                <button className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]" style={{ color: "#6A6A88" }}>
                  <AlignJustify size={14} />
                </button>
                <button className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]" style={{ color: "#6A6A88" }}>
                  <Moon size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reading Plan Progress */}
        <div
          className="border-b"
          style={{ background: "rgba(212,175,55,0.04)", borderColor: "#1E1E32" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <BookOpen size={13} style={{ color: "#D4AF37" }} />
              <span className="text-xs font-semibold" style={{ color: "#D4AF37" }}>
                Genesis Reading Plan
              </span>
              <span className="text-xs" style={{ color: "#6A6A88" }}>
                — Day 1 of 50
              </span>
            </div>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "#1E1E32" }}>
              <div
                className="h-full rounded-full"
                style={{ width: "2%", background: "linear-gradient(90deg, #D4AF37, #F0D060)" }}
              />
            </div>
            <span className="text-xs font-mono" style={{ color: "#6A6A88" }}>2%</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-6">
            {/* Bible Text */}
            <div className="flex-1 min-w-0">
              {/* Highlight color selector (study mode) */}
              {studyMode && (
                <div
                  className="flex items-center gap-3 mb-6 p-3 rounded-xl"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <span className="text-xs font-semibold" style={{ color: "#8A8AA8" }}>
                    Highlight color:
                  </span>
                  <div className="flex items-center gap-2">
                    {highlightColors.map((c) => (
                      <button
                        key={c.label}
                        onClick={() => setActiveHighlightColor(c)}
                        className="w-6 h-6 rounded-full transition-all duration-200"
                        style={{
                          background: c.value,
                          border: `2px solid ${activeHighlightColor.label === c.label ? c.border : "transparent"}`,
                          outline: activeHighlightColor.label === c.label ? `2px solid ${c.border}` : "none",
                        }}
                        title={c.label}
                      />
                    ))}
                  </div>
                  <span className="text-xs ml-auto" style={{ color: "#6A6A88" }}>
                    Click a verse to select it, then use the action bar to highlight or bookmark
                  </span>
                </div>
              )}

              {/* Chapter Header */}
              <div className="mb-8 text-center">
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#D4AF37" }}>
                  Old Testament
                </p>
                <h1 className="text-4xl font-black mb-1" style={{ color: "#F2F2F8" }}>Genesis</h1>
                <p className="text-lg font-light" style={{ color: "#8A8AA8" }}>Chapter 1 · {selectedTranslation}</p>
              </div>

              {/* Verses */}
              <div className="space-y-1 max-w-2xl mx-auto">
                {genesisVerses.map((verse) => {
                  const isSelected = selectedVerse === verse.num;
                  const isHighlighted = highlightedVerses[verse.num];
                  const isBookmarked = bookmarkedVerses.has(verse.num);
                  const isHovered = hoveredVerse === verse.num;

                  return (
                    <div key={verse.num} className="relative group">
                      {/* Verse action bar */}
                      {(isHovered || isSelected) && (
                        <div
                          className="absolute -top-10 left-0 z-10 flex items-center gap-1 px-2 py-1.5 rounded-xl shadow-2xl"
                          style={{
                            background: "#18182A",
                            border: "1px solid #1E1E32",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                          }}
                        >
                          <button
                            onClick={() => handleBookmark(verse.num)}
                            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all hover:bg-[#1E1E32]"
                            style={{ color: isBookmarked ? "#D4AF37" : "#8A8AA8" }}
                          >
                            <Bookmark size={12} fill={isBookmarked ? "#D4AF37" : "none"} />
                            Save
                          </button>
                          <div className="w-px h-4" style={{ background: "#1E1E32" }} />
                          {highlightColors.map((c) => (
                            <button
                              key={c.label}
                              onClick={() => {
                                setActiveHighlightColor(c);
                                handleHighlight(verse.num);
                              }}
                              className="w-5 h-5 rounded-full transition-all hover:scale-110"
                              style={{ background: c.value, border: `1px solid ${c.border}` }}
                              title={`Highlight ${c.label}`}
                            />
                          ))}
                          <div className="w-px h-4" style={{ background: "#1E1E32" }} />
                          <button
                            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all hover:bg-[#1E1E32]"
                            style={{ color: "#8A8AA8" }}
                          >
                            <StickyNote size={12} />
                            Note
                          </button>
                          <button
                            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all hover:bg-[#1E1E32]"
                            style={{ color: "#8A8AA8" }}
                          >
                            <Share2 size={12} />
                            Share
                          </button>
                          <button
                            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all hover:bg-[#1E1E32]"
                            style={{ color: "#8A8AA8" }}
                          >
                            <GitBranch size={12} />
                            Refs
                          </button>
                        </div>
                      )}

                      <div
                        onClick={() => handleVerseClick(verse.num)}
                        onMouseEnter={() => setHoveredVerse(verse.num)}
                        onMouseLeave={() => setHoveredVerse(null)}
                        className="flex gap-4 px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-150"
                        style={{
                          background: isSelected
                            ? "rgba(212,175,55,0.08)"
                            : isHighlighted
                            ? isHighlighted.bg
                            : "transparent",
                          borderLeft: isSelected
                            ? "3px solid #D4AF37"
                            : isHighlighted
                            ? `3px solid ${isHighlighted.border}`
                            : "3px solid transparent",
                        }}
                      >
                        <span
                          className="text-xs font-bold mt-1 flex-shrink-0 w-5 text-right select-none"
                          style={{ color: isSelected ? "#D4AF37" : "#4A4A68" }}
                        >
                          {verse.num}
                        </span>
                        <p
                          className="leading-relaxed flex-1"
                          style={{ fontSize: `${fontSize}px`, color: "#F2F2F8", lineHeight: 1.75 }}
                        >
                          {verse.text}
                        </p>
                        {isBookmarked && (
                          <Bookmark size={13} className="mt-1 flex-shrink-0" fill="#D4AF37" style={{ color: "#D4AF37" }} />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Chapter navigation */}
              <div className="flex items-center justify-between mt-10 max-w-2xl mx-auto">
                <button
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-[#18182A]"
                  style={{ border: "1px solid #1E1E32", color: "#8A8AA8" }}
                >
                  <ChevronLeft size={16} />
                  Previous Chapter
                </button>
                <span className="text-xs" style={{ color: "#4A4A68" }}>Genesis 1 / 50 chapters</span>
                <button
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    color: "#D4AF37",
                  }}
                >
                  Next Chapter
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Related Resources */}
              <div className="mt-12 max-w-2xl mx-auto">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>
                  Related Resources
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedResources.map((r, i) => (
                    <div
                      key={i}
                      className="rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:bg-[#18182A]"
                      style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                    >
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-3"
                        style={{ background: `${r.color}18`, color: r.color, border: `1px solid ${r.color}30` }}
                      >
                        {r.type}
                      </span>
                      <p className="text-sm font-bold leading-snug mb-2" style={{ color: "#F2F2F8" }}>
                        {r.title}
                      </p>
                      <p className="text-xs" style={{ color: "#6A6A88" }}>
                        {r.author} · {r.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Study Panel (right sidebar) */}
            {sidePanelOpen && (
              <aside
                className="hidden lg:flex flex-col gap-4 w-80 flex-shrink-0"
                style={{ position: "sticky", top: "160px", maxHeight: "calc(100vh - 180px)", overflowY: "auto" }}
              >
                {/* Cross References */}
                <div
                  className="rounded-2xl p-4"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4AF37" }}>
                      Cross-References
                    </h4>
                    <span className="text-xs" style={{ color: "#6A6A88" }}>Genesis 1:1</span>
                  </div>
                  <div className="space-y-3">
                    {crossRefs.map((ref, i) => (
                      <div key={i} className="cursor-pointer group">
                        <p className="text-xs font-bold mb-0.5 group-hover:text-[#D4AF37] transition-colors" style={{ color: "#C0C0D8" }}>
                          {ref.ref}
                        </p>
                        <p className="text-xs leading-relaxed" style={{ color: "#6A6A88" }}>
                          {ref.preview}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commentary */}
                <div
                  className="rounded-2xl p-4"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#D4AF37" }}>
                    Commentary
                  </h4>
                  <p className="text-xs font-semibold mb-1" style={{ color: "#C0C0D8" }}>
                    Matthew Henry&apos;s Commentary
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6A6A88" }}>
                    The first verse of the Bible gives a grand statement of the creation. &ldquo;In the beginning&rdquo; — not from eternity, but at the commencement of time itself. God is the uncreated Creator, existing before and independent of all creation. The heavens and earth encompass the totality of the created order...
                  </p>
                  <button className="mt-2 text-xs font-semibold transition-colors hover:text-[#F0D060]" style={{ color: "#D4AF37" }}>
                    Read more →
                  </button>
                </div>

                {/* Hebrew Breakdown */}
                <div
                  className="rounded-2xl p-4"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Languages size={14} style={{ color: "#D4AF37" }} />
                    <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4AF37" }}>
                      Original Language
                    </h4>
                  </div>
                  <p className="text-lg font-bold text-right mb-4" style={{ color: "#F2F2F8", direction: "rtl" }}>
                    בְּרֵאשִׁית בָּרָא אֱלֹהִים
                  </p>
                  <div className="space-y-3">
                    {hebrewBreakdown.map((word, i) => (
                      <div key={i} className="rounded-lg p-2.5" style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.08)" }}>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-base font-bold" style={{ color: "#D4AF37", direction: "rtl" }}>
                            {word.word}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: "#1E1E32", color: "#6A6A88" }}>
                            {word.type}
                          </span>
                        </div>
                        <p className="text-xs italic mb-0.5" style={{ color: "#8A8AA8" }}>{word.transliteration}</p>
                        <p className="text-xs font-semibold" style={{ color: "#C0C0D8" }}>{word.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audio */}
                <div
                  className="rounded-2xl p-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(107,79,187,0.12) 0%, rgba(212,175,55,0.06) 100%)",
                    border: "1px solid rgba(212,175,55,0.15)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Headphones size={18} style={{ color: "#D4AF37" }} />
                    <div>
                      <p className="text-sm font-bold" style={{ color: "#F2F2F8" }}>Listen to Chapter</p>
                      <p className="text-xs" style={{ color: "#6A6A88" }}>Dramatized NIV · 4m 12s</p>
                    </div>
                  </div>
                  <button className="btn-gold w-full py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                    <PlayCircle size={16} />
                    Play Audio
                  </button>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
