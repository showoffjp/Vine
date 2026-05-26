import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Play,
  Music,
  Search,
  Users,
  Clock,
  BookOpen,
  Star,
  ChevronRight,
  Mic2,
  Globe,
  Heart,
  Upload,
  Headphones,
  ListMusic,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Worship — Vine",
  description:
    "Stream worship music, explore chord libraries, join worship circles, and discover global worship creators on Vine.",
};

const songs = [
  {
    title: "Way Maker",
    artist: "Sinach",
    plays: "4.2M",
    genre: "Contemporary",
    gradient: "linear-gradient(135deg, #6B4FBB 0%, #00FF88 100%)",
  },
  {
    title: "Goodness of God",
    artist: "Bethel Music",
    plays: "3.8M",
    genre: "Bethel",
    gradient: "linear-gradient(135deg, #4F8FBB 0%, #6B4FBB 100%)",
  },
  {
    title: "What a Beautiful Name",
    artist: "Hillsong Worship",
    plays: "5.1M",
    genre: "Hillsong",
    gradient: "linear-gradient(135deg, #00FF88 0%, #BB7A4F 100%)",
  },
  {
    title: "Total Praise",
    artist: "Richard Smallwood",
    plays: "2.9M",
    genre: "Gospel",
    gradient: "linear-gradient(135deg, #BB4F7A 0%, #6B4FBB 100%)",
  },
  {
    title: "Great Is Thy Faithfulness",
    artist: "Traditional",
    plays: "1.7M",
    genre: "Hymn",
    gradient: "linear-gradient(135deg, #4FBBAA 0%, #4F8FBB 100%)",
  },
  {
    title: "Oceans (Where Feet May Fail)",
    artist: "Hillsong United",
    plays: "6.3M",
    genre: "Hillsong",
    gradient: "linear-gradient(135deg, #6B4FBB 0%, #4FBBAA 100%)",
  },
];

const playlists = [
  {
    title: "Sunday Morning",
    songs: 24,
    duration: "1h 42m",
    contributors: 8,
    color: "#00FF88",
    emoji: "☀️",
  },
  {
    title: "Late Night Worship",
    songs: 18,
    duration: "1h 15m",
    contributors: 5,
    color: "#6B4FBB",
    emoji: "🌙",
  },
  {
    title: "Gospel Classics",
    songs: 30,
    duration: "2h 08m",
    contributors: 12,
    color: "#BB4F7A",
    emoji: "🎵",
  },
  {
    title: "Hillsong & Elevation",
    songs: 22,
    duration: "1h 31m",
    contributors: 7,
    color: "#4FBBAA",
    emoji: "🙌",
  },
];

const chords = [
  {
    song: "Amazing Grace",
    artist: "Traditional",
    key: "G",
    difficulty: "Beginner",
    diffColor: "#4FBBAA",
  },
  {
    song: "10,000 Reasons",
    artist: "Matt Redman",
    key: "C",
    difficulty: "Beginner",
    diffColor: "#4FBBAA",
  },
  {
    song: "Reckless Love",
    artist: "Cory Asbury",
    key: "D",
    difficulty: "Intermediate",
    diffColor: "#00FF88",
  },
  {
    song: "Gratitude",
    artist: "Brandon Lake",
    key: "A",
    difficulty: "Intermediate",
    diffColor: "#00FF88",
  },
  {
    song: "The Stand",
    artist: "Hillsong United",
    key: "E",
    difficulty: "Advanced",
    diffColor: "#BB4F7A",
  },
  {
    song: "King of Kings",
    artist: "Hillsong Worship",
    key: "G",
    difficulty: "Advanced",
    diffColor: "#BB4F7A",
  },
];

const circles = [
  {
    name: "Acoustic Worship Collective",
    members: "3.4k",
    description: "Acoustic guitar-led worship discussions, tutorials, and community.",
    color: "#00FF88",
  },
  {
    name: "Gospel Choir Network",
    members: "5.1k",
    description: "Choral arrangements, harmonies, and the rich tradition of gospel music.",
    color: "#BB4F7A",
  },
  {
    name: "Worship Leaders Hub",
    members: "2.8k",
    description: "Resources, setlists, and support for worship ministers and team leaders.",
    color: "#6B4FBB",
  },
  {
    name: "Global Worship Exchange",
    members: "4.7k",
    description: "Discovering worship from every nation, tongue, and culture.",
    color: "#4FBBAA",
  },
];

const creators = [
  {
    name: "Ama Christabel",
    location: "Accra, Ghana",
    followers: "28.4k",
    specialty: "Contemporary Gospel",
    gradient: "linear-gradient(135deg, #00FF88, #BB7A4F)",
    initials: "AC",
    bio: "Bringing the sound of West African worship to the global church. Known for her powerful vocal arrangements and original compositions.",
  },
  {
    name: "Marcus Johnson",
    location: "Nashville, TN",
    followers: "41.2k",
    specialty: "Worship Piano & Production",
    gradient: "linear-gradient(135deg, #6B4FBB, #4F8FBB)",
    initials: "MJ",
    bio: "Nashville-based worship director and composer. Produces chord tutorials and leads the Worship Leaders Hub on Vine.",
  },
  {
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    followers: "19.7k",
    specialty: "Bilingual Worship (EN/JP)",
    gradient: "linear-gradient(135deg, #4FBBAA, #6B4FBB)",
    initials: "YT",
    bio: "Translating the best of Western worship for Japanese congregations. Passionate about making worship accessible across every language.",
  },
];

const genreColors: Record<string, string> = {
  Contemporary: "#6B4FBB",
  Traditional: "#8A8AA8",
  Gospel: "#BB4F7A",
  Hymn: "#4F8FBB",
  Hillsong: "#4FBBAA",
  Bethel: "#00FF88",
};

export default function WorshipPage() {
  return (
    <div style={{ background: "#07070F", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        {/* HERO */}
        <section
          style={{
            background:
              "linear-gradient(180deg, rgba(107,79,187,0.18) 0%, rgba(0,255,136,0.06) 60%, transparent 100%)",
            padding: "80px 0 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,255,136,0.1)",
                border: "1px solid rgba(0,255,136,0.25)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "24px",
              }}
            >
              <Music size={14} style={{ color: "#00FF88" }} />
              <span style={{ color: "#00FF88", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
                WORSHIP HUB
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "20px",
                background: "linear-gradient(135deg, #FFFFFF 0%, #00FF88 50%, #F2F2F8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Worship Without Walls
            </h1>
            <p style={{ color: "#8A8AA8", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 32px" }}>
              Music that transcends borders. From Ghana to Nashville to Tokyo — the global church is singing, and you're invited in.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #00FF88, #B8922A)",
                  color: "#07070F",
                  border: "none",
                  borderRadius: "12px",
                  padding: "12px 24px",
                  fontWeight: 700,
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                <Headphones size={16} />
                Start Listening
              </button>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  color: "#F2F2F8",
                  border: "1px solid #1E1E32",
                  borderRadius: "12px",
                  padding: "12px 24px",
                  fontWeight: 600,
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                <Globe size={16} />
                Explore Global Worship
              </button>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 80px" }}>

          {/* NOW TRENDING */}
          <section style={{ marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8" }}>
                Now Trending in Worship
              </h2>
              <button style={{ display: "flex", alignItems: "center", gap: "6px", color: "#00FF88", fontSize: "14px", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>
                See all <ChevronRight size={16} />
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "16px",
              }}
            >
              {songs.map((song, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "16px",
                    padding: "16px",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1",
                      borderRadius: "12px",
                      background: song.gradient,
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Music size={28} style={{ color: "rgba(255,255,255,0.5)" }} />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "8px",
                        right: "8px",
                        background: "rgba(0,0,0,0.5)",
                        borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Play size={14} fill="white" style={{ color: "white", marginLeft: "2px" }} />
                    </div>
                  </div>
                  <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "14px", marginBottom: "4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {song.title}
                  </p>
                  <p style={{ color: "#8A8AA8", fontSize: "12px", marginBottom: "8px" }}>{song.artist}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "100px",
                        background: `${genreColors[song.genre]}18`,
                        color: genreColors[song.genre],
                        border: `1px solid ${genreColors[song.genre]}30`,
                      }}
                    >
                      {song.genre}
                    </span>
                    <span style={{ color: "#6A6A88", fontSize: "11px" }}>{song.plays}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PLAYLISTS */}
          <section style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "24px" }}>
              Worship Playlists
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
              {playlists.map((pl, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    padding: "24px",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: pl.color,
                    }}
                  />
                  <div style={{ fontSize: "36px", marginBottom: "12px" }}>{pl.emoji}</div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: "18px", marginBottom: "8px" }}>
                    {pl.title}
                  </h3>
                  <div style={{ display: "flex", gap: "16px", color: "#8A8AA8", fontSize: "13px", marginBottom: "16px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <ListMusic size={13} /> {pl.songs} songs
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={13} /> {pl.duration}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: "#6A6A88", fontSize: "12px" }}>
                      <Users size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                      {pl.contributors} contributors
                    </span>
                    <button
                      style={{
                        background: pl.color,
                        color: "#07070F",
                        border: "none",
                        borderRadius: "8px",
                        padding: "6px 14px",
                        fontWeight: 700,
                        fontSize: "12px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Play size={11} fill="#07070F" /> Play
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CHORD LIBRARY */}
          <section style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "8px" }}>
              Chord Library
            </h2>
            <p style={{ color: "#8A8AA8", fontSize: "15px", marginBottom: "24px" }}>
              Play any song in your worship set with our curated chord sheets.
            </p>
            {/* Search bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "12px",
                padding: "0 16px",
                marginBottom: "20px",
                maxWidth: "520px",
              }}
            >
              <Search size={16} style={{ color: "#6A6A88", flexShrink: 0 }} />
              <input
                readOnly
                placeholder="Search songs, artists, or keys..."
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#F2F2F8",
                  padding: "14px 0",
                  fontSize: "14px",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "14px" }}>
              {chords.map((chord, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "16px",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "15px", marginBottom: "4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {chord.song}
                    </p>
                    <p style={{ color: "#8A8AA8", fontSize: "13px", marginBottom: "8px" }}>{chord.artist}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span
                        style={{
                          background: "rgba(0,255,136,0.12)",
                          color: "#00FF88",
                          borderRadius: "6px",
                          padding: "2px 8px",
                          fontSize: "11px",
                          fontWeight: 700,
                        }}
                      >
                        Key: {chord.key}
                      </span>
                      <span
                        style={{
                          background: `${chord.diffColor}18`,
                          color: chord.diffColor,
                          borderRadius: "100px",
                          padding: "2px 8px",
                          fontSize: "11px",
                          fontWeight: 600,
                        }}
                      >
                        {chord.difficulty}
                      </span>
                    </div>
                  </div>
                  <button
                    style={{
                      flexShrink: 0,
                      background: "transparent",
                      border: "1px solid rgba(0,255,136,0.3)",
                      color: "#00FF88",
                      borderRadius: "10px",
                      padding: "8px 14px",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <BookOpen size={12} /> View Chords
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* WORSHIP CIRCLES */}
          <section style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "24px" }}>
              Worship Circles
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
              {circles.map((circle, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `${circle.color}18`,
                      border: `1px solid ${circle.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Users size={20} style={{ color: circle.color }} />
                  </div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>
                    {circle.name}
                  </h3>
                  <p style={{ color: "#8A8AA8", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>
                    {circle.description}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: "#6A6A88", fontSize: "12px" }}>
                      <Users size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                      {circle.members} members
                    </span>
                    <button
                      style={{
                        background: `${circle.color}18`,
                        color: circle.color,
                        border: `1px solid ${circle.color}30`,
                        borderRadius: "8px",
                        padding: "6px 14px",
                        fontWeight: 700,
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                    >
                      Join Circle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CREATOR SPOTLIGHT */}
          <section style={{ marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8" }}>
                Creator Spotlight
              </h2>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.2)",
                  borderRadius: "100px",
                  padding: "4px 12px",
                  color: "#00FF88",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                <Star size={11} fill="#00FF88" /> Featured This Week
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
              {creators.map((creator, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "80px",
                      background: creator.gradient,
                    }}
                  />
                  <div style={{ padding: "0 24px 24px", marginTop: "-28px" }}>
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: creator.gradient,
                        border: "3px solid #12121F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "18px",
                        color: "white",
                        marginBottom: "12px",
                      }}
                    >
                      {creator.initials}
                    </div>
                    <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: "17px", marginBottom: "4px" }}>
                      {creator.name}
                    </h3>
                    <p style={{ color: "#8A8AA8", fontSize: "12px", marginBottom: "4px" }}>
                      <Mic2 size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                      {creator.specialty}
                    </p>
                    <p style={{ color: "#6A6A88", fontSize: "12px", marginBottom: "12px" }}>
                      📍 {creator.location} · {creator.followers} followers
                    </p>
                    <p style={{ color: "#8A8AA8", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>
                      {creator.bio}
                    </p>
                    <button
                      style={{
                        width: "100%",
                        background: "rgba(0,255,136,0.08)",
                        border: "1px solid rgba(0,255,136,0.25)",
                        color: "#00FF88",
                        borderRadius: "10px",
                        padding: "10px",
                        fontWeight: 700,
                        fontSize: "13px",
                        cursor: "pointer",
                      }}
                    >
                      Follow Creator
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SUBMIT CTA */}
          <section>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(107,79,187,0.2) 0%, rgba(0,255,136,0.1) 100%)",
                border: "1px solid rgba(0,255,136,0.2)",
                borderRadius: "24px",
                padding: "48px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "20px",
                  background: "rgba(0,255,136,0.15)",
                  border: "1px solid rgba(0,255,136,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <Upload size={28} style={{ color: "#00FF88" }} />
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#F2F2F8", marginBottom: "12px" }}>
                Submit Your Music
              </h2>
              <p style={{ color: "#8A8AA8", fontSize: "16px", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 28px" }}>
                Are you a worship creator? Share your original songs, chord sheets, and arrangements with the global Vine community.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #00FF88, #B8922A)",
                    color: "#07070F",
                    border: "none",
                    borderRadius: "12px",
                    padding: "14px 28px",
                    fontWeight: 800,
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  <Upload size={16} /> Submit Music
                </button>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "transparent",
                    color: "#F2F2F8",
                    border: "1px solid #1E1E32",
                    borderRadius: "12px",
                    padding: "14px 28px",
                    fontWeight: 600,
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  <Heart size={16} /> Creator Guidelines
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
