"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import {
  Play, Eye, Heart, Bookmark, Share2,
  TrendingUp, Star, Search, Volume2, X, ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

interface Video {
  id: number;
  youtubeId: string;
  title: string;
  channel: string;
  channelColor: string;
  views: string;
  duration: string;
  year: string;
  tag: string;
  tagColor: string;
}

const CATEGORIES = ["All", "Worship", "Teaching", "Sermons", "Apologetics", "Testimony", "Kids", "Documentary"];
const CATEGORY_ICONS: Record<string, string> = {
  All: "🎬", Worship: "🎵", Teaching: "📖", Sermons: "🎤",
  Apologetics: "🧠", Testimony: "💬", Kids: "⭐", Documentary: "🎞️",
};

const featured = {
  youtubeId: "mC-zw0zCCtg",
  title: "Jireh — Elevation Worship & Maverick City",
  channel: "Elevation Worship",
  channelAvatar: "EW",
  channelColor: "#3a7d56",
  views: "100M+",
  duration: "8:02",
  year: "2021",
  tags: ["Worship", "Praise", "Gospel"],
  description: "One of the most powerful modern worship anthems — a declaration that God is enough, that He is Provider, and that He is all we need.",
};

const VIDEOS: Video[] = [
  // ── Worship — all IDs verified via YouTube search ─────────────────────────
  { id: 1,  youtubeId: "mC-zw0zCCtg", title: "Jireh",                              channel: "Elevation Worship",    channelColor: "#3a7d56", views: "100M+",duration: "8:02", year: "2021", tag: "Worship",     tagColor: "#3a7d56" },
  { id: 2,  youtubeId: "KwX1f2gYKZ4", title: "Graves Into Gardens (Live)",         channel: "Elevation Worship",    channelColor: "#3a7d56", views: "38M",  duration: "5:06", year: "2020", tag: "Worship",     tagColor: "#3a7d56" },
  { id: 3,  youtubeId: "xrAdbH28gIg", title: "RATTLE! (Official Lyric)",           channel: "Elevation Worship",    channelColor: "#3a7d56", views: "30M",  duration: "7:44", year: "2020", tag: "Worship",     tagColor: "#3a7d56" },
  { id: 4,  youtubeId: "QS04WbSnxok", title: "Trust In God",                       channel: "Elevation Worship",    channelColor: "#3a7d56", views: "28M",  duration: "5:15", year: "2023", tag: "Worship",     tagColor: "#3a7d56" },
  { id: 5,  youtubeId: "6UortPEFcpU", title: "Worthy (Paradoxology)",              channel: "Elevation Worship",    channelColor: "#3a7d56", views: "18M",  duration: "5:40", year: "2019", tag: "Worship",     tagColor: "#3a7d56" },
  { id: 6,  youtubeId: "9__ceHaHKEE", title: "So So Good (Live)",                  channel: "Phil Wickham & EW",    channelColor: "#3a7d56", views: "14M",  duration: "5:55", year: "2025", tag: "Worship",     tagColor: "#3a7d56" },
  { id: 7,  youtubeId: "nQWFzMvCfLE", title: "What A Beautiful Name",              channel: "Hillsong Worship",     channelColor: "#6B4FBB", views: "248M", duration: "5:41", year: "2017", tag: "Worship",     tagColor: "#6B4FBB" },
  { id: 8,  youtubeId: "dQl4izxPeNU", title: "King of Kings (Live)",               channel: "Hillsong Worship",     channelColor: "#6B4FBB", views: "58M",  duration: "7:22", year: "2019", tag: "Worship",     tagColor: "#6B4FBB" },
  { id: 9,  youtubeId: "sIaT8Jl2zpI", title: "You Say",                            channel: "Lauren Daigle",        channelColor: "#EC4899", views: "180M", duration: "3:44", year: "2018", tag: "Worship",     tagColor: "#EC4899" },
  { id: 10, youtubeId: "PfpEefKiG2I", title: "Oceans (Where Feet May Fail)",       channel: "Hillsong UNITED",      channelColor: "#0EA5E9", views: "106M", duration: "8:56", year: "2013", tag: "Worship",     tagColor: "#0EA5E9" },
  { id: 11, youtubeId: "XtwIT8JjddM", title: "10,000 Reasons (Bless the Lord)",    channel: "Matt Redman",          channelColor: "#6B4FBB", views: "89M",  duration: "5:59", year: "2012", tag: "Worship",     tagColor: "#6B4FBB" },
  { id: 12, youtubeId: "m0I3GzZjxJM", title: "Way Maker",                          channel: "Sinach",               channelColor: "#F59E0B", views: "71M",  duration: "9:19", year: "2017", tag: "Worship",     tagColor: "#F59E0B" },
  { id: 13, youtubeId: "qlsQrycKKsY", title: "Good Good Father",                   channel: "Chris Tomlin",         channelColor: "#14B8A6", views: "62M",  duration: "4:03", year: "2016", tag: "Worship",     tagColor: "#14B8A6" },
  { id: 14, youtubeId: "XV4nOVmWW2A", title: "How Great Is Our God (Live)",        channel: "Chris Tomlin",         channelColor: "#14B8A6", views: "48M",  duration: "6:11", year: "2022", tag: "Worship",     tagColor: "#14B8A6" },
  { id: 15, youtubeId: "Y-4NFvI5U9w", title: "Amazing Grace (My Chains Are Gone)", channel: "Chris Tomlin",         channelColor: "#14B8A6", views: "41M",  duration: "4:17", year: "2009", tag: "Worship",     tagColor: "#14B8A6" },
  { id: 16, youtubeId: "Sc6SSHuZvQE", title: "Reckless Love (Official Lyric)",     channel: "Bethel Music",         channelColor: "#8B5CF6", views: "96M",  duration: "5:41", year: "2018", tag: "Worship",     tagColor: "#8B5CF6" },
  { id: 17, youtubeId: "IvSuGyJQ6oM", title: "Goodness of God (Official Lyric)",   channel: "Bethel Music",         channelColor: "#8B5CF6", views: "78M",  duration: "5:04", year: "2019", tag: "Worship",     tagColor: "#8B5CF6" },
  { id: 18, youtubeId: "G2XtRuPfaAU", title: "Raise A Hallelujah (Official Lyric)",channel: "Bethel Music",         channelColor: "#8B5CF6", views: "55M",  duration: "5:31", year: "2019", tag: "Worship",     tagColor: "#8B5CF6" },
  { id: 19, youtubeId: "u-1fwZtKJSM", title: "Living Hope",                        channel: "Phil Wickham",         channelColor: "#EC4899", views: "44M",  duration: "4:10", year: "2018", tag: "Worship",     tagColor: "#EC4899" },
  { id: 20, youtubeId: "qtvQNzPHn-w", title: "Battle Belongs",                     channel: "Phil Wickham",         channelColor: "#EC4899", views: "38M",  duration: "3:47", year: "2020", tag: "Worship",     tagColor: "#EC4899" },
  { id: 21, youtubeId: "FYMjO9mL0Tw", title: "Build My Life",                      channel: "Housefires",           channelColor: "#F97316", views: "32M",  duration: "5:17", year: "2016", tag: "Worship",     tagColor: "#F97316" },
  { id: 22, youtubeId: "2qUOHjnDIFs", title: "Great Are You Lord (Live)",          channel: "All Sons & Daughters", channelColor: "#6B4FBB", views: "28M",  duration: "5:44", year: "2013", tag: "Worship",     tagColor: "#6B4FBB" },

  // ── Teaching — BibleProject verified IDs ──────────────────────────────────
  { id: 31, youtubeId: "7_CGP-12AE0", title: "The Story of the Bible",             channel: "BibleProject",         channelColor: "#3B82F6", views: "5.4M", duration: "5:27", year: "2017", tag: "Teaching",    tagColor: "#3B82F6" },
  { id: 32, youtubeId: "ej_6dVdJSIU", title: "Romans — Book Overview (Pt 1)",      channel: "BibleProject",         channelColor: "#3B82F6", views: "7.2M", duration: "9:22", year: "2016", tag: "Teaching",    tagColor: "#3B82F6" },
  { id: 33, youtubeId: "0SVTl4Xa5fY", title: "Romans — Book Overview (Pt 2)",      channel: "BibleProject",         channelColor: "#3B82F6", views: "4.1M", duration: "8:04", year: "2016", tag: "Teaching",    tagColor: "#3B82F6" },
  { id: 34, youtubeId: "GQI72THyO5I", title: "Genesis 1–11 — Overview",           channel: "BibleProject",         channelColor: "#3B82F6", views: "4.8M", duration: "8:01", year: "2016", tag: "Teaching",    tagColor: "#3B82F6" },
  { id: 35, youtubeId: "j9phNEaPrv8", title: "Psalms — Book Overview",             channel: "BibleProject",         channelColor: "#3B82F6", views: "3.6M", duration: "8:20", year: "2016", tag: "Teaching",    tagColor: "#3B82F6" },
  { id: 36, youtubeId: "3Dv4-n6OYGI", title: "Matthew — Book Overview",            channel: "BibleProject",         channelColor: "#3B82F6", views: "3.1M", duration: "7:50", year: "2016", tag: "Teaching",    tagColor: "#3B82F6" },
  { id: 37, youtubeId: "G-2e9mMf7E8", title: "Gospel of John — Overview",          channel: "BibleProject",         channelColor: "#3B82F6", views: "2.9M", duration: "9:15", year: "2016", tag: "Teaching",    tagColor: "#3B82F6" },
  { id: 38, youtubeId: "5nvVVcYD-0w", title: "Revelation — Book Overview",         channel: "BibleProject",         channelColor: "#3B82F6", views: "4.2M", duration: "11:12",year: "2017", tag: "Teaching",    tagColor: "#3B82F6" },
  { id: 39, youtubeId: "f7RJATbobik", title: "Heaven and Earth — What Is It?",     channel: "BibleProject",         channelColor: "#3B82F6", views: "3.3M", duration: "8:05", year: "2017", tag: "Teaching",    tagColor: "#3B82F6" },
  { id: 40, youtubeId: "zUKzVFQn4Tc", title: "Image of God (Imago Dei)",           channel: "BibleProject",         channelColor: "#3B82F6", views: "2.8M", duration: "6:44", year: "2017", tag: "Teaching",    tagColor: "#3B82F6" },

  // ── Sermons ───────────────────────────────────────────────────────────────
  { id: 51, youtubeId: "4Eg_di-O8nM", title: "You Can Change The End",             channel: "Elevation Church",     channelColor: "#3a7d56", views: "4.7M", duration: "48:32",year: "2026", tag: "Sermons",     tagColor: "#3a7d56" },
  { id: 52, youtubeId: "fo236aPoxBc", title: "The Rattle of Resurrection",         channel: "Elevation Church",     channelColor: "#3a7d56", views: "3.1M", duration: "52:00",year: "2021", tag: "Sermons",     tagColor: "#3a7d56" },
  { id: 53, youtubeId: "QDZr4P9VbV4", title: "Keep It In Context",                 channel: "Elevation Church",     channelColor: "#3a7d56", views: "1.8M", duration: "50:00",year: "2025", tag: "Sermons",     tagColor: "#3a7d56" },
  { id: 54, youtubeId: "4jPjcOHfiV8", title: "This Is Then (God Uses Stupid)",     channel: "Elevation Church",     channelColor: "#3a7d56", views: "1.6M", duration: "48:00",year: "2024", tag: "Sermons",     tagColor: "#3a7d56" },

  // ── Apologetics ───────────────────────────────────────────────────────────
  { id: 61, youtubeId: "UJlLkZ6tCG0", title: "Who Is Jesus? — Francis Chan",       channel: "Francis Chan",         channelColor: "#EC4899", views: "3.2M", duration: "7:48", year: "2018", tag: "Apologetics", tagColor: "#EC4899" },
  { id: 62, youtubeId: "zMbUXpFiFeo", title: "Does God Exist? — Reasonable Faith", channel: "Reasonable Faith",     channelColor: "#3B82F6", views: "2.4M", duration: "35:22",year: "2014", tag: "Apologetics", tagColor: "#3B82F6" },
  { id: 63, youtubeId: "lXEHBgAGdZE", title: "The Case for Christ — Lee Strobel",  channel: "Lee Strobel",          channelColor: "#F97316", views: "1.7M", duration: "42:11",year: "2017", tag: "Apologetics", tagColor: "#F97316" },
  { id: 64, youtubeId: "yIhGt1BQ1pw", title: "Why I'm Not an Atheist — Ravi Z.",   channel: "RZIM",                 channelColor: "#14B8A6", views: "2.1M", duration: "54:08",year: "2015", tag: "Apologetics", tagColor: "#14B8A6" },
  { id: 65, youtubeId: "MrSNOo7EIy0", title: "Why Christianity Makes Sense",       channel: "CS Lewis Doodle",      channelColor: "#6B4FBB", views: "1.4M", duration: "18:33",year: "2017", tag: "Apologetics", tagColor: "#6B4FBB" },
  { id: 66, youtubeId: "O4GJYRmNnEg", title: "Evidence for the Resurrection",      channel: "Gary Habermas",        channelColor: "#EF4444", views: "880K", duration: "38:44",year: "2016", tag: "Apologetics", tagColor: "#EF4444" },

  // ── Testimony ─────────────────────────────────────────────────────────────
  { id: 71, youtubeId: "6xx0d3R2LoU", title: "Reckless Love — Cory Asbury's Story", channel: "Bethel Music",        channelColor: "#8B5CF6", views: "12M",  duration: "12:14",year: "2017", tag: "Testimony",   tagColor: "#8B5CF6" },
  { id: 72, youtubeId: "KKo3T0j9qqo", title: "Amazing Grace (Live) — Chris Tomlin", channel: "Chris Tomlin",        channelColor: "#14B8A6", views: "9.4M", duration: "6:02", year: "2016", tag: "Testimony",   tagColor: "#14B8A6" },
  { id: 73, youtubeId: "jKd5lFaNQRY", title: "Jireh (Live at Maverick City)",       channel: "Maverick City Music", channelColor: "#F59E0B", views: "8.2M", duration: "9:11", year: "2025", tag: "Testimony",   tagColor: "#F59E0B" },
  { id: 74, youtubeId: "iJCV_2H9xD0", title: "Way Maker — Leeland (Official Live)", channel: "Leeland",             channelColor: "#EF4444", views: "7.1M", duration: "7:34", year: "2019", tag: "Testimony",   tagColor: "#EF4444" },

  // ── Kids ──────────────────────────────────────────────────────────────────
  { id: 81, youtubeId: "LlMCJJ8KJUU", title: "Jesus Loves Me — Kids Worship",       channel: "Hillsong Kids",       channelColor: "#3a7d56", views: "7.8M", duration: "3:22", year: "2015", tag: "Kids",        tagColor: "#3a7d56" },
  { id: 82, youtubeId: "WFLAabNR2K0", title: "The Lord's Prayer for Kids",           channel: "Life.Church Kids",    channelColor: "#6B4FBB", views: "3.1M", duration: "4:05", year: "2018", tag: "Kids",        tagColor: "#6B4FBB" },
  { id: 83, youtubeId: "Kt0JWi12DjY", title: "Great Are You Lord — Kids Lyric",     channel: "All Sons & Daughters",channelColor: "#F59E0B", views: "2.8M", duration: "5:12", year: "2014", tag: "Kids",        tagColor: "#F59E0B" },

  // ── Documentary ───────────────────────────────────────────────────────────
  { id: 91, youtubeId: "JG_BBH8DVPI", title: "Jesus Film — Official Full Movie",    channel: "Jesus Film Project",  channelColor: "#F97316", views: "22M",  duration: "2:08:11",year:"1979",tag: "Documentary", tagColor: "#F97316" },
  { id: 92, youtubeId: "jxaJZ5lBM5U", title: "Rescued: Underground Church Story",   channel: "Voice of the Martyrs",channelColor: "#EF4444", views: "1.9M", duration: "22:15",year: "2019", tag: "Documentary", tagColor: "#EF4444" },

  // ── Elevation Church — Sermons (expanded) ─────────────────────────────────
  { id: 100, youtubeId: "rtkS_8VWfB0", title: "This Is Bigger Than Them",          channel: "Elevation Church", channelColor: "#3a7d56", views: "2.1M", duration: "47:22", year: "2026", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 101, youtubeId: "ccNvwDPguNU", title: "It Still Works",                     channel: "Elevation Church", channelColor: "#3a7d56", views: "1.8M", duration: "49:05", year: "2026", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 102, youtubeId: "gV9JugO_5Mk", title: "Faith To Stay",                      channel: "Elevation Church", channelColor: "#3a7d56", views: "1.4M", duration: "46:00", year: "2026", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 103, youtubeId: "Bp2MzyoHa7k", title: "Don't Forget Where You Come From",  channel: "Elevation Church", channelColor: "#3a7d56", views: "1.2M", duration: "51:30", year: "2026", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 104, youtubeId: "57LVVwba6_8", title: "Not Something, But Someone",         channel: "Elevation Church", channelColor: "#3a7d56", views: "900K", duration: "44:18", year: "2026", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 105, youtubeId: "KdzW643uIQU", title: "He Answered",                        channel: "Elevation Church", channelColor: "#3a7d56", views: "2.4M", duration: "48:55", year: "2025", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 106, youtubeId: "HquJPN3pHOo", title: "Hand Him The Plan",                  channel: "Elevation Church", channelColor: "#3a7d56", views: "2.8M", duration: "52:40", year: "2025", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 107, youtubeId: "8wFEr-jtwDI", title: "More Ready Than You Recognize",      channel: "Elevation Church", channelColor: "#3a7d56", views: "1.1M", duration: "46:10", year: "2026", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 108, youtubeId: "y4y_B0khuWo", title: "Put Your Passion In Its Place",      channel: "Elevation Church", channelColor: "#3a7d56", views: "1.3M", duration: "50:22", year: "2026", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 109, youtubeId: "LJHxNuvDVkI", title: "New Number Same Name",               channel: "Elevation Church", channelColor: "#3a7d56", views: "1.9M", duration: "47:00", year: "2025", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 110, youtubeId: "XbRsIlPktPc", title: "Something In Between",               channel: "Elevation Church", channelColor: "#3a7d56", views: "1.5M", duration: "44:30", year: "2024", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 111, youtubeId: "8jeOejEmiYo", title: "Torn But Trusting",                  channel: "Elevation Church", channelColor: "#3a7d56", views: "2.2M", duration: "49:15", year: "2024", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 112, youtubeId: "1IoYYFHKkGk", title: "Reverse The Ripple",                 channel: "Elevation Church", channelColor: "#3a7d56", views: "1.7M", duration: "51:00", year: "2024", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 113, youtubeId: "yFDzIGMgYcE", title: "What Are You Doing?",                channel: "Elevation Church", channelColor: "#3a7d56", views: "1.4M", duration: "46:45", year: "2024", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 114, youtubeId: "1aB4dLRK6cY", title: "This Is What A Miracle Feels Like",  channel: "Elevation Church", channelColor: "#3a7d56", views: "3.1M", duration: "48:30", year: "2024", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 115, youtubeId: "sUHN8FuH7yY", title: "When You Just Can't Win",            channel: "Elevation Church", channelColor: "#3a7d56", views: "2.0M", duration: "52:12", year: "2024", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 116, youtubeId: "2a1D624CAFg", title: "When God Gets Ready",                 channel: "Elevation Church", channelColor: "#3a7d56", views: "1.8M", duration: "47:50", year: "2024", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 117, youtubeId: "z28Nd7cScFg", title: "The Blessing Of Letting Go",          channel: "Elevation Church", channelColor: "#3a7d56", views: "1.6M", duration: "49:08", year: "2024", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 118, youtubeId: "O8JL80_XcOk", title: "Look Forward Not Far",               channel: "Elevation Church", channelColor: "#3a7d56", views: "1.3M", duration: "45:20", year: "2024", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 119, youtubeId: "JzHga9SmA1w", title: "What Comes After",                   channel: "Elevation Church", channelColor: "#3a7d56", views: "2.5M", duration: "50:00", year: "2024", tag: "Sermons", tagColor: "#3a7d56" },
  { id: 120, youtubeId: "KOgKql0UEpI", title: "The War Of Whispers",                channel: "Elevation Church", channelColor: "#3a7d56", views: "2.3M", duration: "48:45", year: "2024", tag: "Sermons", tagColor: "#3a7d56" },

  // ── Elevation Worship — expanded ──────────────────────────────────────────
  { id: 200, youtubeId: "0B_lnQIITxU", title: "Do It Again (Official Lyric Video)", channel: "Elevation Worship", channelColor: "#3a7d56", views: "42M",  duration: "5:30", year: "2017", tag: "Worship", tagColor: "#3a7d56" },
  { id: 201, youtubeId: "ZOBIPb-6PTc", title: "Do It Again (Live)",                  channel: "Elevation Worship", channelColor: "#3a7d56", views: "18M",  duration: "6:02", year: "2017", tag: "Worship", tagColor: "#3a7d56" },
  { id: 202, youtubeId: "OpfuKKH_SCE", title: "O Come To The Altar (Lyric Video)",   channel: "Elevation Worship", channelColor: "#3a7d56", views: "35M",  duration: "4:55", year: "2016", tag: "Worship", tagColor: "#3a7d56" },
  { id: 203, youtubeId: "rYQ5yXCc_CA", title: "O Come To The Altar (Live)",          channel: "Elevation Worship", channelColor: "#3a7d56", views: "14M",  duration: "5:12", year: "2016", tag: "Worship", tagColor: "#3a7d56" },
  { id: 204, youtubeId: "gcZ_chRtwLI", title: "The Blessing ft. Kari Jobe",          channel: "Elevation Worship", channelColor: "#3a7d56", views: "55M",  duration: "5:39", year: "2020", tag: "Worship", tagColor: "#3a7d56" },
  { id: 205, youtubeId: "Rf8Zzn4nOzc", title: "Resurrecting (Live)",                 channel: "Elevation Worship", channelColor: "#3a7d56", views: "22M",  duration: "6:44", year: "2016", tag: "Worship", tagColor: "#3a7d56" },
  { id: 206, youtubeId: "YNd-PbVhnvA", title: "See A Victory (Live)",                channel: "Elevation Worship", channelColor: "#3a7d56", views: "16M",  duration: "5:22", year: "2019", tag: "Worship", tagColor: "#3a7d56" },
  { id: 207, youtubeId: "raFnjGVkHe8", title: "Praise ft. Brandon Lake",             channel: "Elevation Worship", channelColor: "#3a7d56", views: "28M",  duration: "5:04", year: "2021", tag: "Worship", tagColor: "#3a7d56" },
  { id: 208, youtubeId: "OXsxw1fRHMA", title: "Talking To Jesus (EW & Maverick City)",channel:"Elevation Worship", channelColor: "#3a7d56", views: "21M",  duration: "5:50", year: "2021", tag: "Worship", tagColor: "#3a7d56" },
  { id: 209, youtubeId: "FaJ3ZvAKOIM", title: "Come Again (EW & Maverick City)",     channel: "Elevation Worship", channelColor: "#3a7d56", views: "9M",   duration: "6:18", year: "2021", tag: "Worship", tagColor: "#3a7d56" },
  { id: 210, youtubeId: "ZErLEnRNfbE", title: "Jireh (Official Lyric Video)",        channel: "Elevation Worship", channelColor: "#3a7d56", views: "44M",  duration: "5:52", year: "2021", tag: "Worship", tagColor: "#3a7d56" },
  { id: 211, youtubeId: "DzHx9OnhEdM", title: "RATTLE! (Live, Praise Party 2020)",   channel: "Elevation Worship", channelColor: "#3a7d56", views: "12M",  duration: "8:30", year: "2020", tag: "Worship", tagColor: "#3a7d56" },

  // ── Maverick City Music — expanded ────────────────────────────────────────
  { id: 300, youtubeId: "q5m09rqOoxE", title: "Promises ft. Joe L Barnes & Naomi Raine", channel: "Maverick City Music", channelColor: "#F59E0B", views: "28M", duration: "5:48", year: "2019", tag: "Worship", tagColor: "#F59E0B" },
  { id: 301, youtubeId: "lnHfNb0UNf4", title: "For My Good (Official Music Video)",   channel: "Maverick City Music", channelColor: "#F59E0B", views: "14M", duration: "4:15", year: "2023", tag: "Worship", tagColor: "#F59E0B" },
  { id: 302, youtubeId: "TD6wY8v8C-g", title: "God Problems ft. Chandler Moore",       channel: "Maverick City Music", channelColor: "#F59E0B", views: "18M", duration: "5:10", year: "2023", tag: "Worship", tagColor: "#F59E0B" },

  // ── Chris Tomlin — expanded ───────────────────────────────────────────────
  { id: 400, youtubeId: "Q7W9GOWMtls", title: "Jesus My Redeemer (Lyric Video)",      channel: "Chris Tomlin", channelColor: "#14B8A6", views: "6M",  duration: "4:22", year: "2023", tag: "Worship", tagColor: "#14B8A6" },
  { id: 401, youtubeId: "R-JZ9KsI7YI", title: "Our God (Live)",                       channel: "Chris Tomlin", channelColor: "#14B8A6", views: "18M", duration: "4:48", year: "2014", tag: "Worship", tagColor: "#14B8A6" },
  { id: 402, youtubeId: "r4-tGQD6sUA", title: "Indescribable (Live)",                 channel: "Chris Tomlin", channelColor: "#14B8A6", views: "12M", duration: "5:33", year: "2013", tag: "Worship", tagColor: "#14B8A6" },
  { id: 403, youtubeId: "58-twWe3yvU", title: "Good Good Father / Great Are You Lord", channel: "Chris Tomlin", channelColor: "#14B8A6", views: "4M",  duration: "7:02", year: "2024", tag: "Worship", tagColor: "#14B8A6" },

  // ── Hillsong Worship / UNITED — expanded ──────────────────────────────────
  { id: 500, youtubeId: "fEwDx8YJndU", title: "What A Beautiful Name (w/ Break Every Chain)", channel: "Hillsong Worship", channelColor: "#6B4FBB", views: "28M", duration: "7:12", year: "2016", tag: "Worship", tagColor: "#6B4FBB" },
  { id: 501, youtubeId: "GfVd5x9W1Xc", title: "So Will I (100 Billion X)",            channel: "Hillsong Worship", channelColor: "#6B4FBB", views: "92M",  duration: "5:44", year: "2017", tag: "Worship", tagColor: "#6B4FBB" },
  { id: 502, youtubeId: "hrSJwO5dJXg", title: "Even When It Hurts (Live)",            channel: "Hillsong UNITED", channelColor: "#0EA5E9", views: "24M",  duration: "7:08", year: "2015", tag: "Worship", tagColor: "#0EA5E9" },
  { id: 503, youtubeId: "6GGFb6LcX3U", title: "Oceans (Where Feet May Fail) Lyrics",  channel: "Hillsong UNITED", channelColor: "#0EA5E9", views: "120M", duration: "8:56", year: "2013", tag: "Worship", tagColor: "#0EA5E9" },
  { id: 504, youtubeId: "OP-00EwLdiU", title: "Oceans (Live in Israel)",              channel: "Hillsong UNITED", channelColor: "#0EA5E9", views: "32M",  duration: "9:22", year: "2017", tag: "Worship", tagColor: "#0EA5E9" },

  // ── Bethel Music / Jesus Culture — expanded ───────────────────────────────
  { id: 600, youtubeId: "oOXvQz_gtfA", title: "Holy Forever ft. Jenn Johnson",        channel: "Bethel Music", channelColor: "#8B5CF6", views: "38M",  duration: "5:22", year: "2022", tag: "Worship", tagColor: "#8B5CF6" },
  { id: 601, youtubeId: "ybzr6M5z1ZI", title: "Holy Forever (Lyric Video)",           channel: "Bethel Music", channelColor: "#8B5CF6", views: "15M",  duration: "5:22", year: "2022", tag: "Worship", tagColor: "#8B5CF6" },
  { id: 602, youtubeId: "4B0pifSHEp8", title: "You Make Me Brave (Live)",             channel: "Bethel Music", channelColor: "#8B5CF6", views: "18M",  duration: "6:15", year: "2014", tag: "Worship", tagColor: "#8B5CF6" },
  { id: 603, youtubeId: "i-66KeF1LQ4", title: "I Need You More — Kim Walker",         channel: "Bethel Music", channelColor: "#8B5CF6", views: "9M",   duration: "5:04", year: "2012", tag: "Worship", tagColor: "#8B5CF6" },
  { id: 610, youtubeId: "ZO-3dj33k-I", title: "Love Has A Name (Live)",               channel: "Jesus Culture", channelColor: "#8B5CF6", views: "14M", duration: "5:48", year: "2016", tag: "Worship", tagColor: "#8B5CF6" },
  { id: 611, youtubeId: "JoC1ec-lYps", title: "How He Loves Us — Kim Walker-Smith",   channel: "Jesus Culture", channelColor: "#8B5CF6", views: "32M", duration: "5:12", year: "2010", tag: "Worship", tagColor: "#8B5CF6" },
  { id: 612, youtubeId: "q_uLYfpgwP4", title: "More Than Enough (Live)",              channel: "Jesus Culture", channelColor: "#8B5CF6", views: "7M",  duration: "6:30", year: "2016", tag: "Worship", tagColor: "#8B5CF6" },
  { id: 613, youtubeId: "HAIdo707Sac", title: "Freedom Reigns (Come Away)",           channel: "Jesus Culture", channelColor: "#8B5CF6", views: "5M",  duration: "7:05", year: "2011", tag: "Worship", tagColor: "#8B5CF6" },

  // ── Phil Wickham — expanded ───────────────────────────────────────────────
  { id: 700, youtubeId: "XFRjr_x-yxU", title: "This Is Amazing Grace",               channel: "Phil Wickham", channelColor: "#EC4899", views: "16M", duration: "3:58", year: "2013", tag: "Worship", tagColor: "#EC4899" },
  { id: 701, youtubeId: "JdCkPewFsc8", title: "It Really Is Amazing Grace ft. Crowder",channel:"Phil Wickham", channelColor: "#EC4899", views: "8M",  duration: "4:12", year: "2022", tag: "Worship", tagColor: "#EC4899" },
  { id: 702, youtubeId: "ifFovH-dhHw", title: "Living Hope (Official Lyric Video)",   channel: "Phil Wickham", channelColor: "#EC4899", views: "11M", duration: "4:10", year: "2018", tag: "Worship", tagColor: "#EC4899" },
  { id: 703, youtubeId: "johgSkNj3-A", title: "Battle Belongs (Official Lyric Video)", channel: "Phil Wickham", channelColor: "#EC4899", views: "12M", duration: "3:47", year: "2020", tag: "Worship", tagColor: "#EC4899" },

  // ── Lauren Daigle — expanded ──────────────────────────────────────────────
  { id: 800, youtubeId: "gYR0xP1j4PY", title: "Rescue (Official Music Video)",        channel: "Lauren Daigle", channelColor: "#EC4899", views: "62M", duration: "4:02", year: "2018", tag: "Worship", tagColor: "#EC4899" },
  { id: 801, youtubeId: "a2zeEQq0bKo", title: "Still Rolling Stones (Official Video)", channel: "Lauren Daigle", channelColor: "#EC4899", views: "28M", duration: "3:55", year: "2018", tag: "Worship", tagColor: "#EC4899" },
  { id: 802, youtubeId: "n_aVFVveJNs", title: "Trust In You (Live)",                  channel: "Lauren Daigle", channelColor: "#EC4899", views: "14M", duration: "4:38", year: "2015", tag: "Worship", tagColor: "#EC4899" },
  { id: 803, youtubeId: "7NAYz0zh_Es", title: "Look Up Child (Audio)",                channel: "Lauren Daigle", channelColor: "#EC4899", views: "18M", duration: "3:22", year: "2018", tag: "Worship", tagColor: "#EC4899" },
  { id: 804, youtubeId: "yHCsANscc4E", title: "Look Up Child (Lyric Video)",          channel: "Lauren Daigle", channelColor: "#EC4899", views: "9M",  duration: "3:22", year: "2018", tag: "Worship", tagColor: "#EC4899" },

  // ── BibleProject — expanded ───────────────────────────────────────────────
  { id: 900, youtubeId: "F4isSyennFo", title: "Genesis Part 2 — Book Overview",       channel: "BibleProject", channelColor: "#3B82F6", views: "2.8M", duration: "8:22", year: "2016", tag: "Teaching", tagColor: "#3B82F6" },
  { id: 901, youtubeId: "jH_aojNJM3E", title: "Exodus Part 1 — Book Overview",        channel: "BibleProject", channelColor: "#3B82F6", views: "3.4M", duration: "7:58", year: "2016", tag: "Teaching", tagColor: "#3B82F6" },
  { id: 902, youtubeId: "oNpTha80yyE", title: "Exodus Part 2 — Book Overview",        channel: "BibleProject", channelColor: "#3B82F6", views: "2.1M", duration: "7:32", year: "2016", tag: "Teaching", tagColor: "#3B82F6" },
  { id: 903, youtubeId: "9Sduhkq8xNY", title: "Proverbs — Book Overview",             channel: "BibleProject", channelColor: "#3B82F6", views: "2.5M", duration: "6:55", year: "2016", tag: "Teaching", tagColor: "#3B82F6" },
  { id: 904, youtubeId: "Cus-z1hgAXw", title: "Isaiah Part 1 — Book Overview",        channel: "BibleProject", channelColor: "#3B82F6", views: "2.2M", duration: "8:08", year: "2016", tag: "Teaching", tagColor: "#3B82F6" },
  { id: 905, youtubeId: "iVwauTiyFjM", title: "Isaiah Part 2 — Book Overview",        channel: "BibleProject", channelColor: "#3B82F6", views: "1.9M", duration: "7:45", year: "2016", tag: "Teaching", tagColor: "#3B82F6" },
  { id: 906, youtubeId: "GGCF3OPWN14", title: "Matthew Part 2 — Book Overview",       channel: "BibleProject", channelColor: "#3B82F6", views: "1.8M", duration: "8:15", year: "2017", tag: "Teaching", tagColor: "#3B82F6" },
  { id: 907, youtubeId: "E65KV3M8RZE", title: "Luke — Book Overview",                 channel: "BibleProject", channelColor: "#3B82F6", views: "2.3M", duration: "9:02", year: "2017", tag: "Teaching", tagColor: "#3B82F6" },
  { id: 908, youtubeId: "JQhkWmFJKnA", title: "Acts Part 1 — Book Overview",          channel: "BibleProject", channelColor: "#3B82F6", views: "3.0M", duration: "8:44", year: "2017", tag: "Teaching", tagColor: "#3B82F6" },
  { id: 909, youtubeId: "oE9qqW1-BkU", title: "Philippians — Book Overview",          channel: "BibleProject", channelColor: "#3B82F6", views: "1.7M", duration: "6:28", year: "2016", tag: "Teaching", tagColor: "#3B82F6" },

  // ── Matt Redman — expanded ────────────────────────────────────────────────
  { id: 1000, youtubeId: "SzG-WKIVH0w", title: "10,000 Reasons (Live)",               channel: "Matt Redman", channelColor: "#6B4FBB", views: "14M", duration: "5:55", year: "2013", tag: "Worship", tagColor: "#6B4FBB" },
  { id: 1001, youtubeId: "Fo--H_yx2vg", title: "10,000 Reasons — Live in Times Square",channel: "Matt Redman", channelColor: "#6B4FBB", views: "8M",  duration: "5:02", year: "2012", tag: "Worship", tagColor: "#6B4FBB" },
  { id: 1002, youtubeId: "Kq9NwmEXkoo", title: "10,000 Reasons (Sing! 2018 Live)",    channel: "Matt Redman", channelColor: "#6B4FBB", views: "4M",  duration: "6:18", year: "2018", tag: "Worship", tagColor: "#6B4FBB" },

  // ── Casting Crowns ────────────────────────────────────────────────────────
  { id: 1100, youtubeId: "0YUGwUgBvTU", title: "Praise You In This Storm (Lyric)",    channel: "Casting Crowns", channelColor: "#F97316", views: "34M", duration: "4:43", year: "2005", tag: "Worship", tagColor: "#F97316" },
  { id: 1101, youtubeId: "MgpaULjZOl8", title: "Praise You In This Storm (Live)",     channel: "Casting Crowns", channelColor: "#F97316", views: "6M",  duration: "5:12", year: "2016", tag: "Worship", tagColor: "#F97316" },
  { id: 1102, youtubeId: "3rT8Re1EIQc", title: "Who Am I (Official Lyric Video)",     channel: "Casting Crowns", channelColor: "#F97316", views: "22M", duration: "4:05", year: "2003", tag: "Worship", tagColor: "#F97316" },
  { id: 1103, youtubeId: "9cKm_mYVPQE", title: "Voice of Truth (Official Lyric Video)",channel: "Casting Crowns", channelColor: "#F97316", views: "18M", duration: "3:58", year: "2003", tag: "Worship", tagColor: "#F97316" },

  // ── MercyMe ───────────────────────────────────────────────────────────────
  { id: 1200, youtubeId: "BRPGRdbGHSs", title: "I Can Only Imagine (Official Video)", channel: "MercyMe", channelColor: "#3B82F6", views: "58M",  duration: "3:50", year: "2001", tag: "Worship", tagColor: "#3B82F6" },
  { id: 1201, youtubeId: "ZNDEyxEMNp0", title: "I Can Only Imagine (Movie Version)",  channel: "MercyMe", channelColor: "#3B82F6", views: "28M",  duration: "4:02", year: "2018", tag: "Worship", tagColor: "#3B82F6" },
  { id: 1202, youtubeId: "wjLlLPZderk", title: "Flawless (Official Music Video)",     channel: "MercyMe", channelColor: "#3B82F6", views: "14M",  duration: "3:44", year: "2014", tag: "Worship", tagColor: "#3B82F6" },
  { id: 1203, youtubeId: "B6fA35Ved-Y", title: "Even If (Official Lyric Video)",      channel: "MercyMe", channelColor: "#3B82F6", views: "22M",  duration: "4:38", year: "2017", tag: "Worship", tagColor: "#3B82F6" },
  { id: 1204, youtubeId: "T9XFO1oSk68", title: "Greater (Official Music Video)",      channel: "MercyMe", channelColor: "#3B82F6", views: "12M",  duration: "3:32", year: "2014", tag: "Worship", tagColor: "#3B82F6" },

  // ── Switchfoot ────────────────────────────────────────────────────────────
  { id: 1300, youtubeId: "jE-Krlqi4fk", title: "Dare You To Move (Official Video)",   channel: "Switchfoot", channelColor: "#14B8A6", views: "8M",  duration: "3:56", year: "2003", tag: "Worship", tagColor: "#14B8A6" },
  { id: 1301, youtubeId: "cxWt0nlTd9s", title: "Meant To Live (Official Video)",      channel: "Switchfoot", channelColor: "#14B8A6", views: "18M", duration: "3:42", year: "2003", tag: "Worship", tagColor: "#14B8A6" },
  { id: 1302, youtubeId: "Sx9RcI_EueM", title: "This Is Your Life (Audio)",           channel: "Switchfoot", channelColor: "#14B8A6", views: "6M",  duration: "3:51", year: "2003", tag: "Worship", tagColor: "#14B8A6" },

  // ── for KING & COUNTRY ────────────────────────────────────────────────────
  { id: 1400, youtubeId: "Q5cPQg3oq-o", title: "God Only Knows (Official Video)",     channel: "for KING & COUNTRY", channelColor: "#EF4444", views: "44M", duration: "3:48", year: "2018", tag: "Worship", tagColor: "#EF4444" },
  { id: 1401, youtubeId: "UFiyEFmIXvA", title: "God Only Knows ft. Dolly Parton",     channel: "for KING & COUNTRY", channelColor: "#EF4444", views: "28M", duration: "3:55", year: "2019", tag: "Worship", tagColor: "#EF4444" },
  { id: 1402, youtubeId: "lA7n7TwPDmw", title: "joy. (Official Music Video)",          channel: "for KING & COUNTRY", channelColor: "#EF4444", views: "18M", duration: "3:22", year: "2018", tag: "Worship", tagColor: "#EF4444" },

  // ── Kari Jobe ─────────────────────────────────────────────────────────────
  { id: 1500, youtubeId: "huFra1mnIVE", title: "Forever (Live)",                       channel: "Kari Jobe", channelColor: "#F59E0B", views: "22M", duration: "7:15", year: "2014", tag: "Worship", tagColor: "#F59E0B" },
  { id: 1501, youtubeId: "8v_PWr98uuk", title: "Healer (Official Live Concert)",       channel: "Kari Jobe", channelColor: "#F59E0B", views: "12M", duration: "8:02", year: "2009", tag: "Worship", tagColor: "#F59E0B" },
  { id: 1502, youtubeId: "OiirKDvMjNY", title: "The Garden (Live)",                   channel: "Kari Jobe", channelColor: "#F59E0B", views: "16M", duration: "6:44", year: "2017", tag: "Worship", tagColor: "#F59E0B" },
  { id: 1503, youtubeId: "n5gRgJhCue4", title: "The Garden (Lyric Video)",            channel: "Kari Jobe", channelColor: "#F59E0B", views: "8M",  duration: "6:44", year: "2017", tag: "Worship", tagColor: "#F59E0B" },

  // ── Testimony & Ministry ──────────────────────────────────────────────────
  { id: 1600, youtubeId: "CsnMTWxFNRU", title: "Todd White — My Testimony",           channel: "Todd White",  channelColor: "#8B5CF6", views: "4.2M", duration: "22:00", year: "2014", tag: "Testimony", tagColor: "#8B5CF6" },
  { id: 1601, youtubeId: "0B36Bq44a6I", title: "Heidi Baker's Testimony",             channel: "Heidi Baker", channelColor: "#8B5CF6", views: "2.8M", duration: "28:00", year: "2011", tag: "Testimony", tagColor: "#8B5CF6" },
  { id: 1602, youtubeId: "Rh-9V3aGNzY", title: "A Life on the Altar — Heidi Baker",  channel: "Heidi Baker", channelColor: "#8B5CF6", views: "1.4M", duration: "52:00", year: "2024", tag: "Testimony", tagColor: "#8B5CF6" },
  { id: 1603, youtubeId: "ArQo6RJSW7s", title: "The Place of Surrender — Heidi Baker",channel: "Heidi Baker", channelColor: "#8B5CF6", views: "900K", duration: "45:00", year: "2017", tag: "Testimony", tagColor: "#8B5CF6" },
  { id: 1604, youtubeId: "nBwV8A7DI60", title: "Heidi Baker Testimony",               channel: "Heidi Baker", channelColor: "#8B5CF6", views: "1.1M", duration: "18:00", year: "2016", tag: "Testimony", tagColor: "#8B5CF6" },

  // ── Teaching — David Platt, Francis Chan, Desiring God ───────────────────
  { id: 1700, youtubeId: "yhiHSf_L6_E", title: "Radical Sermon — David Platt (Passion 2011)", channel: "David Platt", channelColor: "#EC4899", views: "3.2M", duration: "50:00", year: "2011", tag: "Teaching", tagColor: "#EC4899" },
  { id: 1701, youtubeId: "IEIl7wp-zLw", title: "The Gospel Demands Radical Sacrifice", channel: "David Platt", channelColor: "#EC4899", views: "1.8M", duration: "55:00", year: "2012", tag: "Teaching", tagColor: "#EC4899" },
  { id: 1702, youtubeId: "R1UfwuEae5U", title: "What Part of the Gospel Is Optional?", channel: "David Platt", channelColor: "#EC4899", views: "1.2M", duration: "28:00", year: "2020", tag: "Teaching", tagColor: "#EC4899" },
  { id: 1703, youtubeId: "EYqyu1iAGtQ", title: "If I Believe This Gospel — Chan & Platt",channel:"Francis Chan", channelColor: "#EC4899", views: "900K", duration: "12:00", year: "2012", tag: "Teaching", tagColor: "#EC4899" },
  { id: 1704, youtubeId: "vxhU3JzVWbg", title: "Gospel Opportunities — Chan & Platt",  channel: "Francis Chan", channelColor: "#EC4899", views: "600K", duration: "18:00", year: "2023", tag: "Teaching", tagColor: "#EC4899" },
  { id: 1800, youtubeId: "BkeS-kWbD-4", title: "Don't Waste Your Life — John Piper",   channel: "Desiring God",channelColor: "#F97316", views: "2.8M", duration: "35:00", year: "2000", tag: "Teaching", tagColor: "#F97316" },
  { id: 1801, youtubeId: "UqcutbJgrLE", title: "What Is Christian Hedonism? — Piper",  channel: "Desiring God",channelColor: "#F97316", views: "1.4M", duration: "8:00",  year: "2013", tag: "Teaching", tagColor: "#F97316" },
  { id: 1802, youtubeId: "CoyyVB5YOrY", title: "Pursue Better Pleasures — Piper",       channel: "Desiring God",channelColor: "#F97316", views: "700K", duration: "22:00", year: "2019", tag: "Teaching", tagColor: "#F97316" },
  { id: 1803, youtubeId: "PsoE9GxSIcA", title: "Having a Heart on Fire for God — Piper",channel: "Desiring God",channelColor: "#F97316", views: "1.1M", duration: "42:00", year: "2020", tag: "Teaching", tagColor: "#F97316" },
];

const CHANNELS = [
  { name: "Elevation Church",    avatar: "EC", color: "#3a7d56", subscribers: "5.4M",  videos: 2600 },
  { name: "Elevation Worship",   avatar: "EW", color: "#3a7d56", subscribers: "4.8M",  videos: 890  },
  { name: "Hillsong Worship",    avatar: "HW", color: "#6B4FBB", subscribers: "5.1M",  videos: 1200 },
  { name: "BibleProject",        avatar: "BP", color: "#3B82F6", subscribers: "4.2M",  videos: 312  },
  { name: "Bethel Music",        avatar: "BM", color: "#8B5CF6", subscribers: "2.1M",  videos: 540  },
  { name: "Maverick City Music", avatar: "MC", color: "#F59E0B", subscribers: "2.8M",  videos: 480  },
  { name: "Lauren Daigle",       avatar: "LD", color: "#EC4899", subscribers: "3.2M",  videos: 210  },
  { name: "Desiring God",        avatar: "DG", color: "#F97316", subscribers: "1.8M",  videos: 4200 },
  { name: "Casting Crowns",      avatar: "CC", color: "#F97316", subscribers: "1.4M",  videos: 380  },
  { name: "MercyMe",             avatar: "MM", color: "#3B82F6", subscribers: "1.1M",  videos: 290  },
  { name: "Kari Jobe",           avatar: "KJ", color: "#F59E0B", subscribers: "980K",  videos: 340  },
  { name: "for KING & COUNTRY",  avatar: "FK", color: "#EF4444", subscribers: "1.6M",  videos: 320  },
];

const PAGE_SIZE = 24;

function initials(name: string) {
  return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
}

export default function VideoPage() {
  const [activeCategory, setActiveCategory] = usePersistedState("vine_video_active_category", "All");
  const [search, setSearch] = useState("");
  const [likedVideos, setLikedVideos] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_video_liked"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedVideos, setSavedVideos] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_video_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [followedChannels, setFollowedChannels] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_video_followed"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [featuredPlaying, setFeaturedPlaying] = useState(false);
  const [copiedVideo, setCopiedVideo] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  const shareVideo = async (id: number, title: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title, text: `Watch "${title}" on The Vine`, url });
      } else {
        await navigator.clipboard.writeText(`${title} — ${url}`);
      }
      setCopiedVideo(id);
      setTimeout(() => setCopiedVideo((c) => (c === id ? null : c)), 1800);
    } catch {}
  };

  const allFiltered = VIDEOS.filter((v) => {
    const matchCat = activeCategory === "All" || v.tag === activeCategory;
    const matchSearch = !search || v.title.toLowerCase().includes(search.toLowerCase()) || v.channel.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const visibleVideos = allFiltered.slice(0, page * PAGE_SIZE);
  const hasMore = visibleVideos.length < allFiltered.length;

  const toggleFollow  = (name: string) => setFollowedChannels(prev => { const n = new Set(prev); if (n.has(name)) n.delete(name); else n.add(name); return n; });
  const toggleLike    = (id: number)   => setLikedVideos(prev => { const n = new Set(prev); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const toggleSave    = (id: number)   => setSavedVideos(prev => { const n = new Set(prev); if (n.has(id)) n.delete(id); else n.add(id); return n; });

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main id="main-content">
      <div className="page-body pb-20">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <div style={{ background: "linear-gradient(to bottom, rgba(58,125,86,0.07) 0%, transparent 100%)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)" }}>
                    <Play size={14} className="text-white" fill="white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Video Library</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black leading-tight">
                  Watch.{" "}
                  <span style={{ background: "linear-gradient(135deg, #3a7d56 30%, #6B4FBB 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Be transformed.
                  </span>
                </h1>
                <div className="flex items-center gap-4 mt-3">
                  {[
                    { v: `${VIDEOS.length}+`, l: "Videos" },
                    { v: "7", l: "Categories" },
                    { v: "500+", l: "Hours" },
                  ].map(({ v, l }) => (
                    <div key={l} className="flex items-center gap-1.5">
                      <span className="text-sm font-black" style={{ color: "#F2F2F8" }}>{v}</span>
                      <span className="text-xs" style={{ color: "#4A4A68" }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl sm:w-80"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Search size={15} style={{ color: "#4A4A68", flexShrink: 0 }} />
                <input
                  type="text"
                  aria-label="Search videos"
                  placeholder="Search videos, channels..."
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="bg-transparent outline-none text-sm flex-1"
                  style={{ color: "#F2F2F8" }}
                />
                {search && (
                  <button type="button" aria-label="Clear search" onClick={() => handleSearch("")}>
                    <X size={13} style={{ color: "#4A4A68" }} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">

          {/* ── Featured ────────────────────────────────────────────────────── */}
          <div className="rounded-3xl overflow-hidden mb-10" style={{ background: "#0F0F1A", border: "1px solid rgba(58,125,86,0.15)" }}>
            <div className="flex flex-col lg:flex-row">

              {/* Player / Poster */}
              <div className="lg:w-3/5 relative" style={{ aspectRatio: "16/9", minHeight: 240 }}>
                {featuredPlaying ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${featured.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={featured.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                  />
                ) : (
                  <button
                    type="button"
                    className="absolute inset-0 group w-full"
                    aria-label={`Play ${featured.title}`}
                    onClick={() => setFeaturedPlaying(true)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Gradient poster */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `linear-gradient(135deg, ${featured.channelColor}25 0%, rgba(107,79,187,0.15) 50%, #07070F 100%)`,
                    }} />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "radial-gradient(ellipse at 30% 40%, rgba(58,125,86,0.18) 0%, transparent 60%)",
                    }} />

                    {/* Large channel monogram */}
                    <div style={{
                      position: "absolute", left: 32, bottom: 32,
                      width: 64, height: 64, borderRadius: 16,
                      background: "rgba(58,125,86,0.15)",
                      border: "1px solid rgba(58,125,86,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22, fontWeight: 900, color: "#3a7d56",
                    }}>
                      {featured.channelAvatar}
                    </div>

                    {/* Duration */}
                    <div style={{
                      position: "absolute", bottom: 32, right: 16,
                      background: "rgba(0,0,0,0.85)", padding: "4px 10px", borderRadius: 6,
                      fontSize: 13, fontWeight: 700, color: "#fff",
                    }}>
                      {featured.duration}
                    </div>

                    {/* Featured badge */}
                    <div style={{
                      position: "absolute", top: 16, left: 16,
                      background: "rgba(58,125,86,0.9)", padding: "4px 10px", borderRadius: 20,
                      fontSize: 11, fontWeight: 700, color: "#fff",
                    }}>
                      ⭐ Featured
                    </div>

                    {/* Play button */}
                    <div style={{
                      position: "absolute", top: "50%", left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}>
                      <div
                        className="transition-transform group-hover:scale-110"
                        style={{
                          width: 80, height: 80, borderRadius: "50%",
                          background: "rgba(58,125,86,0.92)",
                          boxShadow: "0 0 50px rgba(58,125,86,0.4)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        <Play size={32} fill="white" color="white" style={{ marginLeft: 4 }} />
                      </div>
                    </div>
                  </button>
                )}
              </div>

              {/* Info panel */}
              <div className="p-7 lg:w-2/5 flex flex-col justify-center">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {featured.tags.map((t) => (
                    <span key={t} className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(58,125,86,0.12)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.25)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-black mb-3 leading-tight">{featured.title}</h2>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: "#6A6A88" }}>{featured.description}</p>

                <div className="flex items-center gap-3 mb-6 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black shrink-0"
                    style={{ background: `${featured.channelColor}20`, color: featured.channelColor, border: `1px solid ${featured.channelColor}30` }}>
                    {featured.channelAvatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "#E0E0F0" }}>{featured.channel}</p>
                    <p className="text-xs" style={{ color: "#4A4A68" }}>{featured.views} views · {featured.year}</p>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <button type="button"
                    onClick={() => setFeaturedPlaying((p) => !p)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #3a7d56, #52a876)", boxShadow: "0 4px 16px rgba(58,125,86,0.3)" }}>
                    <Play size={14} fill="white" />
                    {featuredPlaying ? "Now Playing" : "Play Now"}
                  </button>
                  <a href={`https://www.youtube.com/watch?v=${featured.youtubeId}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#8A8AA8" }}>
                    <Eye size={14} /> YouTube ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Category Tabs ─────────────────────────────────────────────── */}
          <div className="flex gap-2 flex-wrap mb-8">
            {CATEGORIES.map((cat) => {
              const count = cat === "All" ? VIDEOS.length : VIDEOS.filter(v => v.tag === cat).length;
              const active = activeCategory === cat;
              return (
                <button type="button" key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                  style={{
                    background: active ? "#3a7d56" : "rgba(255,255,255,0.04)",
                    color: active ? "#fff" : "#6A6A88",
                    border: `1px solid ${active ? "#3a7d56" : "rgba(255,255,255,0.08)"}`,
                  }}>
                  <span>{CATEGORY_ICONS[cat]}</span>
                  {cat}
                  <span className="text-xs opacity-70">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── Video Grid ──────────────────────────────────────────────── */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} style={{ color: "#3a7d56" }} />
                  <h2 className="text-lg font-black">
                    {allFiltered.length === VIDEOS.length
                      ? `${VIDEOS.length} Curated Videos`
                      : `${allFiltered.length} Results`}
                  </h2>
                </div>
                {(search || activeCategory !== "All") && (
                  <button type="button"
                    onClick={() => { handleSearch(""); handleCategoryChange("All"); }}
                    className="text-xs px-3 py-1.5 rounded-full transition-all"
                    style={{ color: "#3a7d56", border: "1px solid rgba(58,125,86,0.3)" }}>
                    Clear filters
                  </button>
                )}
              </div>

              {allFiltered.length === 0 ? (
                <div className="rounded-2xl p-12 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-4xl mb-3">🎬</p>
                  <p className="font-bold mb-2">No videos found</p>
                  <button type="button"
                    onClick={() => { handleCategoryChange("All"); handleSearch(""); }}
                    className="text-sm mt-1"
                    style={{ color: "#3a7d56" }}>
                    Clear filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {visibleVideos.map((v) => (
                      <div
                        key={v.id}
                        className="group rounded-2xl overflow-hidden transition-all"
                        style={{ background: "#0F0F1A", border: "1px solid rgba(255,255,255,0.06)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${v.channelColor}40`; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 32px ${v.channelColor}12`; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                      >
                        {/* Thumbnail — click-to-play inline */}
                        <VideoEmbed videoId={v.youtubeId} title={v.title} />

                        {/* Meta */}
                        <div className="p-3.5">
                          <h3 className="font-bold text-sm mb-1.5 leading-snug line-clamp-2" style={{ color: "#F2F2F8" }}>
                            {v.title}
                          </h3>
                          <p className="text-xs mb-3 font-semibold" style={{ color: v.channelColor }}>{v.channel}</p>

                          <div className="flex items-center gap-2 pt-2.5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                            <button type="button"
                              aria-label={likedVideos.has(v.id) ? "Unlike" : "Like"}
                              onClick={() => toggleLike(v.id)}
                              className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs transition-all"
                              style={{ background: likedVideos.has(v.id) ? "rgba(236,72,153,0.1)" : "transparent", border: `1px solid ${likedVideos.has(v.id) ? "rgba(236,72,153,0.25)" : "rgba(255,255,255,0.06)"}`, color: likedVideos.has(v.id) ? "#EC4899" : "#4A4A68" }}>
                              <Heart size={11} fill={likedVideos.has(v.id) ? "#EC4899" : "none"} />
                            </button>
                            <button type="button"
                              aria-label={savedVideos.has(v.id) ? "Unsave" : "Save"}
                              onClick={() => toggleSave(v.id)}
                              className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs transition-all"
                              style={{ background: savedVideos.has(v.id) ? "rgba(58,125,86,0.1)" : "transparent", border: `1px solid ${savedVideos.has(v.id) ? "rgba(58,125,86,0.25)" : "rgba(255,255,255,0.06)"}`, color: savedVideos.has(v.id) ? "#3a7d56" : "#4A4A68" }}>
                              <Bookmark size={11} fill={savedVideos.has(v.id) ? "#3a7d56" : "none"} />
                            </button>
                            <button type="button"
                              aria-label="Share"
                              onClick={() => shareVideo(v.id, v.title)}
                              className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs transition-all"
                              style={{ color: copiedVideo === v.id ? "#3a7d56" : "#4A4A68", border: `1px solid ${copiedVideo === v.id ? "rgba(58,125,86,0.3)" : "rgba(255,255,255,0.06)"}` }}>
                              <Share2 size={11} />
                              {copiedVideo === v.id && <span>Copied!</span>}
                            </button>
                            <a href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                              target="_blank" rel="noopener noreferrer"
                              aria-label="Watch on YouTube"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ml-auto transition-all hover:opacity-80"
                              style={{ background: "rgba(255,0,0,0.08)", border: "1px solid rgba(255,0,0,0.2)", color: "#FF4444" }}>
                              <Play size={10} fill="#FF4444" />
                              Watch
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {hasMore && (
                    <div className="mt-8 text-center">
                      <button type="button"
                        onClick={() => setPage((p) => p + 1)}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-80"
                        style={{ background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)", color: "#3a7d56" }}>
                        <ChevronDown size={16} />
                        Load More ({allFiltered.length - visibleVideos.length} remaining)
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* ── Sidebar ──────────────────────────────────────────────────── */}
            <div className="space-y-6">

              {/* Stats */}
              <div className="rounded-2xl p-5" style={{ background: "#0F0F1A", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ color: "#3a7d56" }}>Library Stats</h3>
                {[
                  { label: "Total Videos",    value: `${VIDEOS.length}` },
                  { label: "Categories",       value: "7" },
                  { label: "Channels Featured",value: "40+" },
                  { label: "Hours of Content", value: "80+" },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between items-center py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span className="text-sm" style={{ color: "#6A6A88" }}>{s.label}</span>
                    <span className="text-sm font-black" style={{ color: "#F2F2F8" }}>{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Top Channels */}
              <div className="rounded-2xl p-5" style={{ background: "#0F0F1A", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Star size={14} style={{ color: "#3a7d56" }} />
                  <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Top Channels</h3>
                </div>
                <div className="space-y-3">
                  {CHANNELS.map((ch) => (
                    <div key={ch.name} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-transform group-hover:scale-105"
                        style={{ background: `${ch.color}18`, color: ch.color, border: `1px solid ${ch.color}28` }}>
                        {ch.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate" style={{ color: "#E0E0F0" }}>{ch.name}</p>
                        <p className="text-xs" style={{ color: "#4A4A68" }}>{ch.subscribers} subs</p>
                      </div>
                      <button type="button"
                        onClick={() => toggleFollow(ch.name)}
                        className="text-xs px-2.5 py-1 rounded-full font-semibold shrink-0 transition-all"
                        style={{ background: followedChannels.has(ch.name) ? `${ch.color}22` : "rgba(255,255,255,0.04)", color: followedChannels.has(ch.name) ? ch.color : "#4A4A68", border: `1px solid ${followedChannels.has(ch.name) ? ch.color + "40" : "rgba(255,255,255,0.08)"}` }}>
                        {followedChannels.has(ch.name) ? "✓" : "+"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Worship Playlist */}
              <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, rgba(107,79,187,0.12) 0%, rgba(58,125,86,0.06) 100%)", border: "1px solid rgba(107,79,187,0.2)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Volume2 size={15} style={{ color: "#6B4FBB" }} />
                  <h3 className="text-sm font-bold" style={{ color: "#F2F2F8" }}>Worship Radio</h3>
                </div>
                <p className="text-xs mb-4" style={{ color: "#6A6A88" }}>Curated Christian worship playlists on YouTube.</p>
                <div className="space-y-2 mb-4">
                  {[
                    { song: "What A Beautiful Name — Hillsong", id: "nQWFzMvCfLE" },
                    { song: "Goodness of God — Bethel Music",   id: "IvSuGyJQ6oM" },
                    { song: "Oceans — Hillsong UNITED",         id: "PfpEefKiG2I" },
                  ].map(({ song, id }, idx) => (
                    <a key={song}
                      href={`https://www.youtube.com/watch?v=${id}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 group py-1"
                      style={{ textDecoration: "none" }}>
                      <div className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: idx === 0 ? "#6B4FBB" : "#4A4A68" }} />
                      <span className="text-xs group-hover:text-white transition-colors truncate"
                        style={{ color: idx === 0 ? "#C0C0D8" : "#4A4A68" }}>
                        {song}
                      </span>
                    </a>
                  ))}
                </div>
                <a
                  href="https://www.youtube.com/playlist?list=PLs1gJc4paTD6dpPWQ7pBSPiHlhYnbXETU"
                  target="_blank" rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all hover:opacity-80"
                  style={{ background: "rgba(107,79,187,0.2)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.3)", textDecoration: "none" }}>
                  <Play size={13} />
                  Open Playlist on YouTube
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
