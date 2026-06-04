"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState } from "react";
import {
  Music,
  Heart,
  Bookmark,
  Search,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  ListMusic,
  MapPin,
  BadgeCheck,
} from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string;
  mood: string;
  duration: string;
  vibe: string;
  theme: string;
  streams: string;
  verseReference: string;
}

interface Playlist {
  name: string;
  description: string;
  songCount: number;
  mood: string;
  occasion: string;
  coverColor: string;
}

interface Artist {
  name: string;
  genre: string;
  origin: string;
  members: string;
  knownFor: string;
  topSong: string;
  verified: true;
  bio: string;
  accentColor: string;
  initials: string;
}

interface LyricSong {
  id: number;
  title: string;
  artist: string;
  verse1: string;
  chorus: string;
  verse2: string;
  bridge: string;
}

// ─── Seed Data ────────────────────────────────────────────────────────────────

const SONGS: Song[] = [
  {
    id: 1,
    title: "Goodness of God",
    artist: "Bethel Music",
    album: "Victory",
    year: 2019,
    genre: "Contemporary Worship",
    mood: "Reflective",
    duration: "5:23",
    vibe: "Intimate",
    theme: "Gratitude",
    streams: "4.2M",
    verseReference: "Psalm 23:6",
  },
  {
    id: 2,
    title: "What a Beautiful Name",
    artist: "Hillsong Worship",
    album: "Let There Be Light",
    year: 2016,
    genre: "Contemporary Worship",
    mood: "Uplifting",
    duration: "5:01",
    vibe: "Anthemic",
    theme: "Praise",
    streams: "5.1M",
    verseReference: "Philippians 2:9",
  },
  {
    id: 3,
    title: "Same God",
    artist: "Elevation Worship",
    album: "Revivals Hymns",
    year: 2022,
    genre: "Contemporary Worship",
    mood: "Uplifting",
    duration: "6:02",
    vibe: "Powerful",
    theme: "Faithfulness",
    streams: "3.7M",
    verseReference: "Hebrews 13:8",
  },
  {
    id: 4,
    title: "Graves into Gardens",
    artist: "Elevation Worship",
    album: "Graves into Gardens",
    year: 2020,
    genre: "Contemporary Worship",
    mood: "Celebratory",
    duration: "4:48",
    vibe: "Triumphant",
    theme: "Resurrection",
    streams: "3.9M",
    verseReference: "Ezekiel 37:12",
  },
  {
    id: 5,
    title: "Holy Forever",
    artist: "Chris Tomlin",
    album: "Always",
    year: 2022,
    genre: "Contemporary Worship",
    mood: "Uplifting",
    duration: "5:37",
    vibe: "Majestic",
    theme: "Worship",
    streams: "2.8M",
    verseReference: "Revelation 4:8",
  },
  {
    id: 6,
    title: "Battle Belongs",
    artist: "Phil Wickham",
    album: "Hymn of Heaven",
    year: 2021,
    genre: "Contemporary Worship",
    mood: "Uplifting",
    duration: "4:19",
    vibe: "Victorious",
    theme: "Spiritual Warfare",
    streams: "3.1M",
    verseReference: "2 Chronicles 20:15",
  },
  {
    id: 7,
    title: "Run to the Father",
    artist: "Cody Carnes",
    album: "Run to the Father",
    year: 2020,
    genre: "CCM",
    mood: "Reflective",
    duration: "4:33",
    vibe: "Tender",
    theme: "Grace",
    streams: "2.4M",
    verseReference: "Luke 15:20",
  },
  {
    id: 8,
    title: "Way Maker",
    artist: "Sinach",
    album: "Way Maker",
    year: 2016,
    genre: "Gospel",
    mood: "Uplifting",
    duration: "6:15",
    vibe: "Prophetic",
    theme: "Miracles",
    streams: "7.8M",
    verseReference: "Isaiah 43:19",
  },
  {
    id: 9,
    title: "Chain Breaker",
    artist: "Zach Williams",
    album: "Chain Breaker",
    year: 2016,
    genre: "CCM",
    mood: "Celebratory",
    duration: "3:47",
    vibe: "Liberating",
    theme: "Freedom",
    streams: "3.5M",
    verseReference: "John 8:36",
  },
  {
    id: 10,
    title: "I Can Only Imagine",
    artist: "MercyMe",
    album: "Almost There",
    year: 1999,
    genre: "CCM",
    mood: "Reflective",
    duration: "4:11",
    vibe: "Ethereal",
    theme: "Heaven",
    streams: "8.3M",
    verseReference: "1 Corinthians 2:9",
  },
  {
    id: 11,
    title: "Reckless Love",
    artist: "Cory Asbury",
    album: "Reckless Love",
    year: 2017,
    genre: "Contemporary Worship",
    mood: "Reflective",
    duration: "5:53",
    vibe: "Overwhelming",
    theme: "God's Love",
    streams: "6.2M",
    verseReference: "Romans 8:38-39",
  },
  {
    id: 12,
    title: "Amazing Grace (My Chains Are Gone)",
    artist: "Chris Tomlin",
    album: "See the Morning",
    year: 2006,
    genre: "Folk/Acoustic",
    mood: "Peaceful",
    duration: "4:57",
    vibe: "Classic",
    theme: "Salvation",
    streams: "5.6M",
    verseReference: "Ephesians 2:8",
  },
];

const PLAYLISTS: Playlist[] = [
  {
    name: "Morning Worship",
    description: "Start the day with praise",
    songCount: 15,
    mood: "Uplifting",
    occasion: "Morning",
    coverColor: "#3a7d56",
  },
  {
    name: "Deep Focus Prayer",
    description: "Instrumental and meditative",
    songCount: 12,
    mood: "Peaceful",
    occasion: "Prayer",
    coverColor: "#6B4FBB",
  },
  {
    name: "Sunday Morning Ready",
    description: "High-energy worship starters",
    songCount: 20,
    mood: "Celebratory",
    occasion: "Church",
    coverColor: "#4F8FBB",
  },
  {
    name: "Driving & Praise",
    description: "Upbeat anthems for the road",
    songCount: 18,
    mood: "Uplifting",
    occasion: "Energetic",
    coverColor: "#BB7A4F",
  },
  {
    name: "Late Night Worship",
    description: "Quiet and contemplative",
    songCount: 14,
    mood: "Reflective",
    occasion: "Evening",
    coverColor: "#4FBBAA",
  },
  {
    name: "Wedding Worship",
    description: "Sacred celebration songs",
    songCount: 16,
    mood: "Celebratory",
    occasion: "Celebration",
    coverColor: "#BB4F7A",
  },
];

const ARTISTS: Artist[] = [
  {
    name: "Hillsong Worship",
    genre: "Contemporary Worship",
    origin: "Sydney, Australia",
    members: "Collective",
    knownFor: "Global anthems like 'What a Beautiful Name'",
    topSong: "What a Beautiful Name",
    verified: true,
    bio: "Born out of Hillsong Church in Sydney, Hillsong Worship has shaped modern worship music for over three decades, producing anthems sung in churches worldwide. Their sound blends powerful orchestration with intimate devotion.",
    accentColor: "#4FBBAA",
    initials: "HW",
  },
  {
    name: "Bethel Music",
    genre: "Contemporary Worship",
    origin: "Redding, CA",
    members: "Collective",
    knownFor: "Soaking worship and powerful declarations",
    topSong: "Goodness of God",
    verified: true,
    bio: "Rooted in Bethel Church in Redding, California, Bethel Music has become synonymous with spontaneous, Spirit-led worship. Their music calls listeners into deeper encounter with God.",
    accentColor: "#3a7d56",
    initials: "BM",
  },
  {
    name: "Elevation Worship",
    genre: "Contemporary Worship",
    origin: "Charlotte, NC",
    members: "Collective",
    knownFor: "High-energy anthems and revival songs",
    topSong: "Graves into Gardens",
    verified: true,
    bio: "The worship ministry of Elevation Church in Charlotte, NC, Elevation Worship creates bold, cinematic worship that moves congregations to declaration and encounter. Known for sonically rich productions.",
    accentColor: "#6B4FBB",
    initials: "EW",
  },
  {
    name: "Chris Tomlin",
    genre: "Contemporary Worship",
    origin: "Nashville, TN",
    members: "Solo",
    knownFor: "Writing the most widely sung worship songs in the world",
    topSong: "How Great Is Our God",
    verified: true,
    bio: "Often called the most-sung artist in the world, Chris Tomlin has written worship standards that echo from small group meetings to stadium events. Based in Nashville, his heart for congregational worship is evident in every song.",
    accentColor: "#BB7A4F",
    initials: "CT",
  },
  {
    name: "Lauren Daigle",
    genre: "CCM",
    origin: "Lafayette, LA",
    members: "Solo",
    knownFor: "Bridging Christian and mainstream audiences",
    topSong: "You Say",
    verified: true,
    bio: "With a voice that transcends genre boundaries, Lauren Daigle has brought Christian music to mainstream culture without compromising her faith message. Her albums have topped both Christian and pop charts.",
    accentColor: "#BB4F7A",
    initials: "LD",
  },
  {
    name: "Kirk Franklin",
    genre: "Gospel",
    origin: "Fort Worth, TX",
    members: "Solo",
    knownFor: "Revolutionizing gospel music with hip-hop and R&B",
    topSong: "Stomp",
    verified: true,
    bio: "Kirk Franklin is the titan of contemporary gospel, having transformed the genre by fusing it with hip-hop, R&B, and funk. A Grammy-winning artist, producer, and author, his music is both culturally prophetic and deeply devotional.",
    accentColor: "#E8A020",
    initials: "KF",
  },
  {
    name: "For King & Country",
    genre: "CCM",
    origin: "Nashville, TN",
    members: "Brother duo",
    knownFor: "Cinematic, theatrical live performances",
    topSong: "God Only Knows",
    verified: true,
    bio: "Australian brothers Joel and Luke Smallbone make up For King & Country, a Nashville-based duo renowned for their spectacular live shows and anthemic songs of hope, identity, and faith. Their music speaks powerfully to a generation searching for meaning.",
    accentColor: "#4F8FBB",
    initials: "FK",
  },
  {
    name: "Maverick City Music",
    genre: "Contemporary Worship",
    origin: "Atlanta, GA",
    members: "Collective",
    knownFor: "Diverse, raw, unpolished worship experiences",
    topSong: "Jireh",
    verified: true,
    bio: "Maverick City Music is a multiethnic worship collective from Atlanta committed to creating music from the margins. Their sound is raw, diverse, and Spirit-filled, drawing from gospel, R&B, and contemporary worship to reflect the full breadth of the Body of Christ.",
    accentColor: "#A855F7",
    initials: "MC",
  },
];

const LYRIC_SONGS: LyricSong[] = [
  {
    id: 1,
    title: "Goodness of God",
    artist: "Bethel Music",
    verse1:
      "I love You, Lord\nOh, Your mercy never fails me\nAll my days, I've been held in Your hands\nFrom the moment that I wake up\nUntil I lay my head\nI will sing of the goodness of God",
    chorus:
      "All my life You have been faithful\nAll my life You have been so, so good\nWith every breath that I am able\nI will sing of the goodness of God",
    verse2:
      "I love Your voice\nYou have led me through the fire\nIn darkest night You are close like no other\nI've known You as a Father\nI've known You as a Friend\nI have lived in the goodness of God",
    bridge:
      "Your goodness is running after\nIt's running after me\nYour goodness is running after\nIt's running after me\nWith my life laid down, I'm surrendered now\nI give You everything",
  },
  {
    id: 2,
    title: "What a Beautiful Name",
    artist: "Hillsong Worship",
    verse1:
      "You were the Word at the beginning\nOne with God, the Lord Most High\nYour hidden glory in creation\nNow revealed in You our Christ",
    chorus:
      "What a beautiful Name it is\nWhat a beautiful Name it is\nThe Name of Jesus Christ my King\nWhat a beautiful Name it is\nNothing compares to this\nWhat a beautiful Name it is\nThe Name of Jesus",
    verse2:
      "You didn't want heaven without us\nSo Jesus, You brought heaven down\nMy sin was great, Your love was greater\nWhat could separate us now",
    bridge:
      "Death could not hold You\nThe veil tore before You\nYou silenced the boast of sin and grave\nThe heavens are roaring\nThe praise of Your glory\nFor You are raised to life again",
  },
  {
    id: 3,
    title: "Reckless Love",
    artist: "Cory Asbury",
    verse1:
      "Before I spoke a word, You were singing over me\nYou have been so, so good to me\nBefore I took a breath, You breathed Your life in me\nYou have been so, so kind to me",
    chorus:
      "Oh, the overwhelming, never-ending, reckless love of God\nOh, it chases me down, fights 'til I'm found, leaves the ninety-nine\nI couldn't earn it, I don't deserve it, still You give Yourself away\nOh, the overwhelming, never-ending, reckless love of God",
    verse2:
      "When I was Your foe, still Your love fought for me\nYou have been so, so good to me\nWhen I felt no worth, You paid it all for me\nYou have been so, so kind to me",
    bridge:
      "There's no shadow You won't light up\nMountain You won't climb up\nComing after me\nThere's no wall You won't kick down\nLie You won't tear down\nComing after me",
  },
  {
    id: 4,
    title: "Way Maker",
    artist: "Sinach",
    verse1:
      "You are here, moving in our midst\nI worship You, I worship You\nYou are here, working in this place\nI worship You, I worship You",
    chorus:
      "Way Maker, Miracle Worker, Promise Keeper\nLight in the darkness, my God, that is who You are\nWay Maker, Miracle Worker, Promise Keeper\nLight in the darkness, my God, that is who You are",
    verse2:
      "You are here, touching every heart\nI worship You, I worship You\nYou are here, healing every heart\nI worship You, I worship You",
    bridge:
      "Even when I don't see it, You're working\nEven when I don't feel it, You're working\nYou never stop, You never stop working\nYou never stop, You never stop working",
  },
];

// ─── Genre & Mood config ──────────────────────────────────────────────────────

const GENRE_COLORS: Record<string, string> = {
  "Contemporary Worship": "#6B4FBB",
  Gospel: "#BB4F7A",
  CCM: "#4F8FBB",
  "Folk/Acoustic": "#4FBBAA",
};

const MOOD_COLORS: Record<string, string> = {
  Uplifting: "#3a7d56",
  Reflective: "#6B4FBB",
  Celebratory: "#BB7A4F",
  Peaceful: "#4FBBAA",
};

const GENRES = ["All", "Contemporary Worship", "Gospel", "CCM", "Folk/Acoustic"];
const MOODS = ["All", "Uplifting", "Reflective", "Celebratory", "Peaceful"];

const MUSIC_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "The Theology of Worship Music — Tim Keller", channel: "Gospel in Life", description: "Why music is uniquely suited to Christian worship and how we should think about the music we bring before God." },
  { videoId: "ACZbpLkY8To", title: "Music and the Soul — Why Worship Sounds Like This", channel: "Ligonier Ministries", description: "A theological exploration of why music moves us spiritually and what that means for how we worship." },
  { videoId: "fJnGJN6laqE", title: "The Psalms as Worship — Singing God's Word", channel: "Desiring God", description: "Piper on recovering the Psalter as the backbone of Christian worship and what we lose when we abandon it." },
  { videoId: "Z8lkuuhVkOI", title: "Contemporary vs. Traditional Worship — Moving Past the Debate", channel: "The Gospel Coalition", description: "A thoughtful theological framework for thinking about worship music styles beyond the culture war." },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ChristianMusicPage() {
  // Tab
  const [activeTab, setActiveTab] = usePersistedState<"featured" | "playlists" | "artists" | "lyrics" | "videos">("vine_christian-music_active_tab", "featured");

  // Filters
  const [genreFilter, setGenreFilter] = useState<string>(() => "All");
  const [moodFilter, setMoodFilter] = useState<string>(() => "All");
  const [searchQuery, setSearchQuery] = useState<string>(() => "");

  // Liked songs
  const [likedSongs, setLikedSongs] = useState<Set<number>>(() => {
    try {
      const s = localStorage.getItem("vine_music_liked");
      return s ? new Set(JSON.parse(s) as number[]) : new Set();
    } catch {
      return new Set();
    }
  });

  // Saved songs
  const [savedSongs, setSavedSongs] = useState<Set<number>>(() => {
    try {
      const s = localStorage.getItem("vine_music_saved");
      return s ? new Set(JSON.parse(s) as number[]) : new Set();
    } catch {
      return new Set();
    }
  });

  // Like counts (seed with realistic values)
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>(() => {
    try {
      const s = localStorage.getItem("vine_music_like_counts");
      if (s) return JSON.parse(s) as Record<number, number>;
    } catch {}
    return {
      1: 2841, 2: 3204, 3: 1987, 4: 2156, 5: 1743,
      6: 1628, 7: 1392, 8: 4831, 9: 2093, 10: 5217,
      11: 3876, 12: 4102,
    };
  });

  // Artist modal
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  // Now-playing playlist (index into PLAYLISTS)
  const [playingPlaylist, setPlayingPlaylist] = useState<number | null>(null);

  // Lyrics state
  const [selectedLyricId, setSelectedLyricId] = useState<number>(1);
  const [meditateMode, setMeditateMode] = useState(false);
  const [stanzaIndex, setStanzaIndex] = useState(0);

  // ─── Handlers ──────────────────────────────────────────────────────────────

  const toggleLike = (id: number) => {
    setLikedSongs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_music_liked", JSON.stringify([...next])); } catch {}
      return next;
    });
    setLikeCounts((prev) => {
      const delta = likedSongs.has(id) ? -1 : 1;
      const next = { ...prev, [id]: (prev[id] ?? 0) + delta };
      try { localStorage.setItem("vine_music_like_counts", JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const toggleSave = (id: number) => {
    setSavedSongs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_music_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  // ─── Derived data ──────────────────────────────────────────────────────────

  const filteredSongs = SONGS.filter((s) => {
    const matchGenre = genreFilter === "All" || s.genre === genreFilter;
    const matchMood = moodFilter === "All" || s.mood === moodFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.artist.toLowerCase().includes(q) ||
      s.album.toLowerCase().includes(q);
    return matchGenre && matchMood && matchSearch;
  });

  const filteredArtists = ARTISTS.filter((a) => {
    const q = searchQuery.toLowerCase();
    return !q || a.name.toLowerCase().includes(q) || a.genre.toLowerCase().includes(q) || a.origin.toLowerCase().includes(q);
  });

  const selectedLyric = LYRIC_SONGS.find((l) => l.id === selectedLyricId) ?? LYRIC_SONGS[0];
  const stanzas = [
    { label: "Verse 1", text: selectedLyric.verse1 },
    { label: "Chorus", text: selectedLyric.chorus },
    { label: "Verse 2", text: selectedLyric.verse2 },
    { label: "Bridge", text: selectedLyric.bridge },
  ];

  // ─── Sub-renders ───────────────────────────────────────────────────────────

  const renderSongCard = (song: Song) => {
    const genreColor = GENRE_COLORS[song.genre] ?? "#6B4FBB";
    const isLiked = likedSongs.has(song.id);
    const isSaved = savedSongs.has(song.id);

    return (
      <div
        key={song.id}
        style={{
          background: "#12121F",
          border: "1px solid #1E1E32",
          borderRadius: "16px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          transition: "border-color 0.2s",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
          {/* Album art placeholder */}
          <div
            style={{
              flexShrink: 0,
              width: "52px",
              height: "52px",
              borderRadius: "10px",
              background: `linear-gradient(135deg, ${genreColor}40, ${genreColor}90)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Music size={22} style={{ color: genreColor }} />
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                color: "#F2F2F8",
                fontWeight: 700,
                fontSize: "15px",
                marginBottom: "2px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {song.title}
            </p>
            <p style={{ color: "#9898B3", fontSize: "13px", marginBottom: "6px" }}>
              {song.artist} · {song.album} ({song.year})
            </p>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  padding: "3px 8px",
                  borderRadius: "100px",
                  background: `${genreColor}18`,
                  color: genreColor,
                  border: `1px solid ${genreColor}35`,
                }}
              >
                {song.genre}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  padding: "3px 8px",
                  borderRadius: "100px",
                  background: "rgba(152,152,179,0.1)",
                  color: "#9898B3",
                  border: "1px solid rgba(152,152,179,0.2)",
                }}
              >
                {song.mood}
              </span>
            </div>
          </div>
        </div>

        {/* Theme + verse */}
        <div
          style={{
            background: "rgba(107,79,187,0.08)",
            border: "1px solid rgba(107,79,187,0.18)",
            borderRadius: "8px",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          <span style={{ color: "#9898B3", fontSize: "11px" }}>
            Theme: <span style={{ color: "#F2F2F8", fontWeight: 600 }}>{song.theme}</span>
          </span>
          <span style={{ color: "#6B4FBB", fontSize: "11px", fontWeight: 600 }}>
            {song.verseReference}
          </span>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {/* Duration */}
            <span style={{ color: "#9898B3", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}>
              <Play size={11} style={{ color: "#9898B3" }} />
              {song.duration}
            </span>
            {/* Streams */}
            <span style={{ color: "#9898B3", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}>
              <Music size={11} style={{ color: "#9898B3" }} />
              {song.streams}
            </span>
          </div>
          {/* Actions */}
          <div style={{ display: "flex", gap: "8px" }}>
            <button type="button"
              onClick={() => toggleLike(song.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                background: isLiked ? "rgba(255,80,80,0.12)" : "transparent",
                border: isLiked ? "1px solid rgba(255,80,80,0.3)" : "1px solid #1E1E32",
                borderRadius: "8px",
                padding: "5px 10px",
                color: isLiked ? "#FF5050" : "#9898B3",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <Heart
                size={13}
                fill={isLiked ? "#FF5050" : "none"}
                style={{ color: isLiked ? "#FF5050" : "#9898B3" }}
              />
              {(likeCounts[song.id] ?? 0).toLocaleString()}
            </button>
            <button type="button"
              onClick={() => toggleSave(song.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                background: isSaved ? "rgba(58,125,86,0.12)" : "transparent",
                border: isSaved ? "1px solid rgba(58,125,86,0.3)" : "1px solid #1E1E32",
                borderRadius: "8px",
                padding: "5px 10px",
                color: isSaved ? "#3a7d56" : "#9898B3",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              title={isSaved ? "Saved" : "Save to playlist"}
            >
              <Bookmark
                size={13}
                fill={isSaved ? "#3a7d56" : "none"}
                style={{ color: isSaved ? "#3a7d56" : "#9898B3" }}
              />
              {isSaved ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <div style={{ background: "#07070F", minHeight: "100vh", color: "#F2F2F8" }}>
      <Navbar />
      <main>
      {/* ── Header ── */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(58,125,86,0.08) 0%, rgba(107,79,187,0.12) 50%, transparent 100%)",
          padding: "56px 24px 48px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(58,125,86,0.1)",
            border: "1px solid rgba(58,125,86,0.25)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "20px",
          }}
        >
          <Music size={13} style={{ color: "#3a7d56" }} />
          <span style={{ color: "#3a7d56", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em" }}>
            VINE · MUSIC
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "12px",
            background: "linear-gradient(135deg, #FFFFFF 0%, #3a7d56 60%, #6B4FBB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Christian Music
        </h1>
        <p style={{ color: "#9898B3", fontSize: "17px", maxWidth: "480px", margin: "0 auto" }}>
          Worship through every genre
        </p>
      </section>

      {/* ── Tabs ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(7,7,15,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #1E1E32",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            gap: "0",
          }}
        >
          {(["featured", "playlists", "artists", "lyrics", "videos"] as const).map((tab) => {
            const labels: Record<string, string> = {
              featured: "Featured",
              playlists: "Playlists",
              artists: "Artists",
              lyrics: "Lyrics",
              videos: "Videos",
            };
            const isActive = activeTab === tab;
            return (
              <button type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: isActive ? "2px solid #3a7d56" : "2px solid transparent",
                  color: isActive ? "#3a7d56" : "#9898B3",
                  padding: "16px 20px",
                  fontSize: "14px",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px 80px" }}>

        {/* ══════════════════════ FEATURED TAB ══════════════════════ */}
        {activeTab === "featured" && (
          <div>
            {/* Search + Filters */}
            <div style={{ marginBottom: "28px" }}>
              {/* Search */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: "12px",
                  padding: "0 16px",
                  marginBottom: "16px",
                  maxWidth: "480px",
                }}
              >
                <Search size={15} style={{ color: "#9898B3", flexShrink: 0 }} />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search songs, artists, albums..." placeholder="Search songs, artists, albums..."
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#F2F2F8",
                    padding: "13px 0",
                    fontSize: "14px",
                    width: "100%",
                  }}
                />
                {searchQuery && (
                  <button type="button"
                    onClick={() => setSearchQuery("")}
                    style={{ background: "none", border: "none", color: "#9898B3", cursor: "pointer", padding: "2px" }}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Genre filter */}
              <div style={{ marginBottom: "10px" }}>
                <p style={{ color: "#9898B3", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "8px" }}>
                  GENRE
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {GENRES.map((g) => {
                    const active = genreFilter === g;
                    const col = GENRE_COLORS[g] ?? "#3a7d56";
                    return (
                      <button type="button"
                        key={g}
                        onClick={() => setGenreFilter(g)}
                        style={{
                          background: active ? (g === "All" ? "rgba(58,125,86,0.15)" : `${col}18`) : "transparent",
                          border: active
                            ? `1px solid ${g === "All" ? "rgba(58,125,86,0.4)" : `${col}50`}`
                            : "1px solid #1E1E32",
                          borderRadius: "100px",
                          padding: "5px 14px",
                          color: active ? (g === "All" ? "#3a7d56" : col) : "#9898B3",
                          fontSize: "12px",
                          fontWeight: active ? 700 : 500,
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        {g}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mood filter */}
              <div>
                <p style={{ color: "#9898B3", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "8px" }}>
                  MOOD
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {MOODS.map((m) => {
                    const active = moodFilter === m;
                    const col = MOOD_COLORS[m] ?? "#3a7d56";
                    return (
                      <button type="button"
                        key={m}
                        onClick={() => setMoodFilter(m)}
                        style={{
                          background: active ? (m === "All" ? "rgba(58,125,86,0.15)" : `${col}18`) : "transparent",
                          border: active
                            ? `1px solid ${m === "All" ? "rgba(58,125,86,0.4)" : `${col}50`}`
                            : "1px solid #1E1E32",
                          borderRadius: "100px",
                          padding: "5px 14px",
                          color: active ? (m === "All" ? "#3a7d56" : col) : "#9898B3",
                          fontSize: "12px",
                          fontWeight: active ? 700 : 500,
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Song grid */}
            {filteredSongs.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 0", color: "#9898B3" }}>
                <Music size={40} style={{ marginBottom: "16px", opacity: 0.4 }} />
                <p>No songs match your filters.</p>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "16px",
                }}
              >
                {filteredSongs.map(renderSongCard)}
              </div>
            )}
          </div>
        )}

        {/* ══════════════════════ PLAYLISTS TAB ══════════════════════ */}
        {activeTab === "playlists" && (
          <div>
            <div style={{ marginBottom: "28px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "6px" }}>Curated Playlists</h2>
              <p style={{ color: "#9898B3", fontSize: "14px" }}>
                Hand-picked collections for every moment with God
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
              {PLAYLISTS.map((pl, i) => {
                const isPlaying = playingPlaylist === i;
                return (
                <div
                  key={i}
                  style={{
                    background: isPlaying ? `${pl.coverColor}0A` : "#12121F",
                    border: `1px solid ${isPlaying ? `${pl.coverColor}40` : "#1E1E32"}`,
                    borderRadius: "20px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                >
                  {/* Cover bar */}
                  <div
                    style={{
                      height: "6px",
                      background: `linear-gradient(90deg, ${pl.coverColor}, ${pl.coverColor}80)`,
                    }}
                  />
                  <div
                    style={{
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: `${pl.coverColor}18`,
                        border: `1px solid ${pl.coverColor}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ListMusic size={22} style={{ color: pl.coverColor }} />
                    </div>

                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "4px" }}>{pl.name}</h3>
                      <p style={{ color: "#9898B3", fontSize: "13px", lineHeight: 1.5 }}>{pl.description}</p>
                    </div>

                    <div style={{ display: "flex", gap: "16px", color: "#9898B3", fontSize: "12px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Music size={12} />
                        {pl.songCount} songs
                      </span>
                      <span
                        style={{
                          padding: "2px 8px",
                          borderRadius: "100px",
                          background: `${pl.coverColor}14`,
                          color: pl.coverColor,
                          fontWeight: 600,
                          fontSize: "11px",
                          border: `1px solid ${pl.coverColor}28`,
                        }}
                      >
                        {pl.occasion}
                      </span>
                      <span
                        style={{
                          padding: "2px 8px",
                          borderRadius: "100px",
                          background: "rgba(152,152,179,0.08)",
                          color: "#9898B3",
                          fontWeight: 600,
                          fontSize: "11px",
                        }}
                      >
                        {pl.mood}
                      </span>
                    </div>

                    <button type="button"
                      onClick={() => setPlayingPlaylist(isPlaying ? null : i)}
                      style={{
                        width: "100%",
                        background: isPlaying ? `${pl.coverColor}28` : `${pl.coverColor}14`,
                        border: `1px solid ${isPlaying ? `${pl.coverColor}60` : `${pl.coverColor}30`}`,
                        borderRadius: "10px",
                        padding: "10px",
                        color: pl.coverColor,
                        fontWeight: 700,
                        fontSize: "13px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        transition: "all 0.2s",
                      }}
                    >
                      <Play size={14} fill={isPlaying ? "currentColor" : "none"} />
                      {isPlaying ? "Now Playing" : "Play Playlist"}
                    </button>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ══════════════════════ ARTISTS TAB ══════════════════════ */}
        {activeTab === "artists" && (
          <div>
            <div style={{ marginBottom: "28px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "6px" }}>Artists</h2>
              <p style={{ color: "#9898B3", fontSize: "14px", marginBottom: "16px" }}>
                Explore the voices shaping Christian music today
              </p>
              {/* Artist search */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: "12px",
                  padding: "0 16px",
                  maxWidth: "400px",
                }}
              >
                <Search size={15} style={{ color: "#9898B3", flexShrink: 0 }} />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search artists..." placeholder="Search artists..."
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#F2F2F8",
                    padding: "13px 0",
                    fontSize: "14px",
                    width: "100%",
                  }}
                />
                {searchQuery && (
                  <button type="button"
                    onClick={() => setSearchQuery("")}
                    style={{ background: "none", border: "none", color: "#9898B3", cursor: "pointer", padding: "2px" }}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
              {filteredArtists.map((artist, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedArtist(artist)}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    padding: "24px",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                >
                  {/* Avatar */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "14px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${artist.accentColor}60, ${artist.accentColor}20)`,
                        border: `2px solid ${artist.accentColor}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "16px",
                        color: artist.accentColor,
                        flexShrink: 0,
                      }}
                    >
                      {artist.initials}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                        <p style={{ fontWeight: 800, fontSize: "15px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {artist.name}
                        </p>
                        {artist.verified && (
                          <BadgeCheck size={15} style={{ color: "#3a7d56", flexShrink: 0 }} />
                        )}
                      </div>
                      <p style={{ color: "#9898B3", fontSize: "12px", marginBottom: "4px" }}>{artist.genre}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#9898B3", fontSize: "11px" }}>
                        <MapPin size={10} />
                        {artist.origin}
                      </div>
                    </div>
                  </div>

                  {/* Members badge */}
                  <div style={{ marginBottom: "12px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        padding: "3px 9px",
                        borderRadius: "100px",
                        background: `${artist.accentColor}14`,
                        color: artist.accentColor,
                        border: `1px solid ${artist.accentColor}30`,
                      }}
                    >
                      {artist.members}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        padding: "3px 9px",
                        borderRadius: "100px",
                        background: "rgba(152,152,179,0.08)",
                        color: "#9898B3",
                      }}
                    >
                      {artist.genre}
                    </span>
                  </div>

                  <p style={{ color: "#9898B3", fontSize: "12px", lineHeight: 1.6, marginBottom: "14px" }}>
                    Known for: <span style={{ color: "#F2F2F8" }}>{artist.knownFor}</span>
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#9898B3",
                      fontSize: "11px",
                      padding: "8px 12px",
                      background: "rgba(152,152,179,0.06)",
                      borderRadius: "8px",
                    }}
                  >
                    <Music size={11} style={{ color: "#3a7d56" }} />
                    <span>Top song: </span>
                    <span style={{ color: "#3a7d56", fontWeight: 600 }}>{artist.topSong}</span>
                  </div>

                  <p style={{ color: "#6B4FBB", fontSize: "11px", marginTop: "12px", textAlign: "right", fontWeight: 600 }}>
                    Click to view bio →
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════ LYRICS TAB ══════════════════════ */}
        {activeTab === "lyrics" && (
          <div>
            <div style={{ marginBottom: "28px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "6px" }}>Lyrics</h2>
              <p style={{ color: "#9898B3", fontSize: "14px" }}>
                Read and meditate on worship lyrics
              </p>
            </div>

            {/* Song selector */}
            <div style={{ marginBottom: "24px", maxWidth: "400px" }}>
              <label style={{ display: "block", color: "#9898B3", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "8px" }}>
                SELECT SONG
              </label>
              <select aria-label="SELECT SONG"
                value={selectedLyricId}
                onChange={(e) => {
                  setSelectedLyricId(Number(e.target.value));
                  setStanzaIndex(0);
                }}
                style={{
                  width: "100%",
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  color: "#F2F2F8",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  outline: "none",
                  appearance: "none",
                  WebkitAppearance: "none",
                }}
              >
                {LYRIC_SONGS.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.title} — {l.artist}
                  </option>
                ))}
              </select>
            </div>

            {/* Meditate toggle */}
            <div style={{ marginBottom: "24px" }}>
              <button type="button"
                onClick={() => {
                  setMeditateMode((m) => !m);
                  setStanzaIndex(0);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: meditateMode ? "rgba(107,79,187,0.2)" : "rgba(107,79,187,0.08)",
                  border: meditateMode ? "1px solid rgba(107,79,187,0.5)" : "1px solid rgba(107,79,187,0.25)",
                  borderRadius: "10px",
                  padding: "10px 18px",
                  color: "#6B4FBB",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {meditateMode ? <X size={14} /> : <Music size={14} />}
                {meditateMode ? "Exit Meditate Mode" : "Meditate Mode"}
              </button>
            </div>

            {/* Lyrics card */}
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  padding: "24px 28px 20px",
                  borderBottom: "1px solid #1E1E32",
                  background: "linear-gradient(135deg, rgba(107,79,187,0.12) 0%, rgba(58,125,86,0.06) 100%)",
                }}
              >
                <h3 style={{ fontWeight: 900, fontSize: "24px", marginBottom: "4px" }}>
                  {selectedLyric.title}
                </h3>
                <p style={{ color: "#9898B3", fontSize: "14px" }}>{selectedLyric.artist}</p>
              </div>

              {/* Card body */}
              <div style={{ padding: "28px" }}>
                {meditateMode ? (
                  /* Meditate: one stanza at a time */
                  <div>
                    <div
                      style={{
                        minHeight: "220px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "24px",
                        background: "rgba(107,79,187,0.06)",
                        border: "1px solid rgba(107,79,187,0.15)",
                        borderRadius: "14px",
                        marginBottom: "24px",
                      }}
                    >
                      <p
                        style={{
                          color: "#6B4FBB",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          marginBottom: "16px",
                          textTransform: "uppercase",
                        }}
                      >
                        {stanzas[stanzaIndex].label}
                      </p>
                      <p
                        style={{
                          color: "#F2F2F8",
                          fontSize: "17px",
                          lineHeight: 1.9,
                          whiteSpace: "pre-line",
                          maxWidth: "560px",
                        }}
                      >
                        {stanzas[stanzaIndex].text}
                      </p>
                    </div>

                    {/* Nav */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <button type="button"
                        onClick={() => setStanzaIndex((n) => Math.max(0, n - 1))}
                        disabled={stanzaIndex === 0}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          background: stanzaIndex === 0 ? "transparent" : "rgba(107,79,187,0.12)",
                          border: "1px solid rgba(107,79,187,0.25)",
                          borderRadius: "10px",
                          padding: "9px 16px",
                          color: stanzaIndex === 0 ? "#4A4A6A" : "#6B4FBB",
                          fontSize: "13px",
                          fontWeight: 700,
                          cursor: stanzaIndex === 0 ? "not-allowed" : "pointer",
                        }}
                      >
                        <ChevronLeft size={15} />
                        Prev
                      </button>

                      <div style={{ display: "flex", gap: "6px" }}>
                        {stanzas.map((_, idx) => (
                          <button type="button"
                            key={idx}
                            onClick={() => setStanzaIndex(idx)}
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background: idx === stanzaIndex ? "#6B4FBB" : "#1E1E32",
                              border: idx === stanzaIndex ? "1px solid #6B4FBB" : "1px solid #2A2A42",
                              cursor: "pointer",
                              padding: 0,
                              transition: "all 0.2s",
                            }}
                          />
                        ))}
                      </div>

                      <button type="button"
                        onClick={() => setStanzaIndex((n) => Math.min(stanzas.length - 1, n + 1))}
                        disabled={stanzaIndex === stanzas.length - 1}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          background: stanzaIndex === stanzas.length - 1 ? "transparent" : "rgba(107,79,187,0.12)",
                          border: "1px solid rgba(107,79,187,0.25)",
                          borderRadius: "10px",
                          padding: "9px 16px",
                          color: stanzaIndex === stanzas.length - 1 ? "#4A4A6A" : "#6B4FBB",
                          fontSize: "13px",
                          fontWeight: 700,
                          cursor: stanzaIndex === stanzas.length - 1 ? "not-allowed" : "pointer",
                        }}
                      >
                        Next
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Full lyrics view */
                  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    {stanzas.map((stanza, idx) => (
                      <div key={idx}>
                        <p
                          style={{
                            color: "#6B4FBB",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: "10px",
                          }}
                        >
                          {stanza.label}
                        </p>
                        <p
                          style={{
                            color: "#F2F2F8",
                            fontSize: "15px",
                            lineHeight: 2,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {stanza.text}
                        </p>
                        {idx < stanzas.length - 1 && (
                          <div style={{ marginTop: "24px", borderBottom: "1px solid #1E1E32" }} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════ VIDEOS TAB ══════════════════════ */}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {MUSIC_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: "#3a7d56", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: "#9898B3", fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Artist Modal ── */}
      {selectedArtist && (
        <div
          onClick={() => setSelectedArtist(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(6px)",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#12121F",
              border: "1px solid #1E1E32",
              borderRadius: "24px",
              maxWidth: "520px",
              width: "100%",
              overflow: "hidden",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {/* Modal header stripe */}
            <div
              style={{
                height: "6px",
                background: `linear-gradient(90deg, ${selectedArtist.accentColor}, ${selectedArtist.accentColor}50)`,
              }}
            />

            <div style={{ padding: "28px" }}>
              {/* Close + title */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${selectedArtist.accentColor}60, ${selectedArtist.accentColor}20)`,
                      border: `2px solid ${selectedArtist.accentColor}50`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "20px",
                      color: selectedArtist.accentColor,
                      flexShrink: 0,
                    }}
                  >
                    {selectedArtist.initials}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                      <h2 style={{ fontWeight: 900, fontSize: "20px" }}>{selectedArtist.name}</h2>
                      <BadgeCheck size={17} style={{ color: "#3a7d56" }} />
                    </div>
                    <p style={{ color: "#9898B3", fontSize: "13px" }}>{selectedArtist.genre}</p>
                  </div>
                </div>
                <button type="button"
                  onClick={() => setSelectedArtist(null)}
                  style={{
                    background: "rgba(152,152,179,0.1)",
                    border: "1px solid #1E1E32",
                    borderRadius: "8px",
                    padding: "6px",
                    color: "#9898B3",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Meta badges */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: "rgba(152,152,179,0.08)",
                    color: "#9898B3",
                  }}
                >
                  <MapPin size={10} />
                  {selectedArtist.origin}
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: `${selectedArtist.accentColor}14`,
                    color: selectedArtist.accentColor,
                    border: `1px solid ${selectedArtist.accentColor}28`,
                  }}
                >
                  <Users size={10} />
                  {selectedArtist.members}
                </span>
              </div>

              {/* Bio */}
              <p style={{ color: "#9898B3", fontSize: "14px", lineHeight: 1.75, marginBottom: "20px" }}>
                {selectedArtist.bio}
              </p>

              {/* Top song */}
              <div
                style={{
                  background: "rgba(58,125,86,0.06)",
                  border: "1px solid rgba(58,125,86,0.18)",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <Music size={16} style={{ color: "#3a7d56", flexShrink: 0 }} />
                <div>
                  <p style={{ color: "#9898B3", fontSize: "11px", marginBottom: "2px" }}>Top Song</p>
                  <p style={{ color: "#3a7d56", fontWeight: 700, fontSize: "14px" }}>
                    {selectedArtist.topSong}
                  </p>
                </div>
              </div>

              {/* Known for */}
              <div
                style={{
                  background: `${selectedArtist.accentColor}08`,
                  border: `1px solid ${selectedArtist.accentColor}20`,
                  borderRadius: "10px",
                  padding: "12px 16px",
                }}
              >
                <p style={{ color: "#9898B3", fontSize: "11px", marginBottom: "4px" }}>Known For</p>
                <p style={{ color: "#F2F2F8", fontSize: "13px", fontWeight: 500, lineHeight: 1.5 }}>
                  {selectedArtist.knownFor}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
}
