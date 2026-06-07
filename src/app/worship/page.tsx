"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Play,
  Pause,
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
  CheckCircle2,
  X,
  Volume2,
} from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";


type Tab = "songs" | "theology" | "voices" | "journal" | "videos";

const songs = [
  {
    title: "Way Maker",
    artist: "Sinach",
    plays: "4.2M",
    genre: "Contemporary",
    gradient: "linear-gradient(135deg, #6B4FBB 0%, #3a7d56 100%)",
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
    gradient: "linear-gradient(135deg, #3a7d56 0%, #BB7A4F 100%)",
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
    color: "#3a7d56",
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
    diffColor: "#3a7d56",
  },
  {
    song: "Gratitude",
    artist: "Brandon Lake",
    key: "A",
    difficulty: "Intermediate",
    diffColor: "#3a7d56",
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
    color: "#3a7d56",
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
    gradient: "linear-gradient(135deg, #3a7d56, #BB7A4F)",
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
  Bethel: "#3a7d56",
};

const WORSHIP_THEOLOGY = [
  {
    id: "revelation",
    title: "Worship as Response to Revelation",
    icon: "🙏",
    scripture: "In the year that King Uzziah died, I saw the Lord, high and exalted, seated on a throne; and the train of his robe filled the temple.",
    scriptureRef: "Isaiah 6:1",
    description: "When Isaiah encounters the living God in Isaiah 6, he does not plan a worship service — worship erupts from him involuntarily. The seraphim cover their faces. Isaiah cries out his undoing. True worship is never a program; it is the only possible human response to genuine revelation of who God is. The initiative belongs entirely to God: he reveals, we respond.",
    application: "Before you plan a worship set or enter a prayer time, ask: have I actually encountered God recently, or am I performing a ritual? Worship that does not arise from some encounter with God tends toward performance. Seek the revelation first.",
  },
  {
    id: "psalms",
    title: "Psalms as the Worship Curriculum",
    icon: "📖",
    scripture: "Praise the Lord. Praise God in his sanctuary; praise him in his mighty heavens. Praise him for his acts of power; praise him for his surpassing greatness.",
    scriptureRef: "Psalm 150:1-2",
    description: "The Psalter is the church's original hymnal — and what a strange hymnal it is. More than a third of the 150 psalms are laments. There are psalms of rage, confusion, abandonment, and grief alongside psalms of ecstatic praise. The psalter teaches us that worship encompasses the full emotional range of human experience: lament, praise, confession, thanksgiving, and questioning are all legitimate postures before God.",
    application: "If your worship diet consists only of celebratory praise songs, you are using less than half the curriculum. Try praying a lament psalm (22, 88, 130) slowly this week. Let the psalmist give you words for what you cannot say yourself.",
  },
  {
    id: "spirit-truth",
    title: "Spirit and Truth",
    icon: "🕊️",
    scripture: "God is spirit, and his worshipers must worship in the Spirit and in truth.",
    scriptureRef: "John 4:24",
    description: "In his conversation with the Samaritan woman, Jesus dismantles the assumption that worship is primarily about location, tradition, or technique. He redefines worship as something internal before it is external: it must be in Spirit (animated by the Holy Spirit, not human performance) and in truth (grounded in the actual nature of God, not a projection). This is the most radical redefinition of worship in the New Testament.",
    application: "Before your next worship gathering, spend five minutes asking the Holy Spirit to be the animator of what happens rather than your own musical or emotional effort. Worship in truth also means being honest about where you actually are before God, not performing a spiritual state you do not have.",
  },
  {
    id: "corporate-private",
    title: "Corporate vs. Private Worship",
    icon: "👥",
    scripture: "Let us not give up meeting together, as some are in the habit of doing, but encouraging one another — and all the more as you see the Day approaching.",
    scriptureRef: "Hebrews 10:25",
    description: "Hebrews 10:24-25 and Ephesians 5:19 both assume a community of worshipers addressing one another in psalms, hymns, and spiritual songs. Corporate worship is not optional for the Christian — it is one of the means by which we encourage, exhort, and bear one another's burdens. And yet private worship, the hidden devotion of the individual heart, is equally essential. Neither replaces the other. The health of one feeds the health of the other.",
    application: "If you attend corporate worship but have no private prayer or devotion, you are a consumer rather than a worshiper. If you have rich private devotion but have given up corporate assembly, you are cutting yourself off from the communal dimension of the body of Christ. Both are necessary.",
  },
  {
    id: "music-theology",
    title: "Music as Theology",
    icon: "🎵",
    scripture: "Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit.",
    scriptureRef: "Colossians 3:16",
    description: "What we sing shapes what we believe. The church has always understood that its hymnody functions as doctrinal formation — which is why theological controversies have often been fought through song. Arius spread his heresy partly through popular hymns. Athanasius countered with orthodox ones. The Reformation was carried forward as much by Luther's chorales as by his theology. Contemporary worship is no different: the songs we sing week after week form the working theology of the congregation.",
    application: "Examine the last five worship songs your congregation sang. What doctrine of God do they convey? What is the posture of the self before God? What is assumed about suffering, salvation, the cross? Music that is theologically thin will produce congregations that are theologically thin.",
  },
  {
    id: "sacrifice-praise",
    title: "Sacrifice of Praise",
    icon: "🔥",
    scripture: "Through Jesus, therefore, let us continually offer to God a sacrifice of praise — the fruit of lips that openly profess his name.",
    scriptureRef: "Hebrews 13:15",
    description: "Hebrews 13:15 uses the language of Old Testament sacrifice to describe Christian worship. A sacrifice costs something. David's insistence on purchasing Araunah's threshing floor rather than accepting it as a gift — 'I will not sacrifice to the Lord my God burnt offerings that cost me nothing' (2 Samuel 24:24) — models what genuine worship requires. When worship is entirely pleasant, comfortable, and convenient, it may not be worship in the full sense. The model of David bringing the ark includes dancing until he was undignified, at personal cost to his reputation.",
    application: "What does worship cost you? If it costs nothing — no time, no effort, no vulnerability, no inconvenience — it is worth examining whether it is truly sacrifice. Attend the service when you are tired. Sing when you do not feel like it. Give when it is a stretch. Let worship be costly.",
  },
];

const VOICES_WOR = [
  {
    id: "calvin",
    name: "John Calvin",
    era: "1509-1564",
    context: "Institutes of the Christian Religion; Geneva liturgical reform; the Genevan Psalter (1562)",
    bio: "John Calvin's contribution to worship theology was twofold: a rigorous theological framework for what worship is, and a practical reformation of how the church sings. His 'regulative principle' held that public worship should include only what Scripture explicitly commands or warrants — a standard that shaped Reformed and Presbyterian worship for centuries. More immediately influential was his insistence that the congregation should sing the Psalms in their own language. The Genevan Psalter, with all 150 Psalms set to metrical verse and memorable tunes, became one of the most widely used worship resources in Reformation-era Europe and established the Psalms as the church's primary songbook in the Reformed tradition.",
    quote: "We will not find better songs nor more fitting for the purpose than the Psalms of David, which the Holy Spirit spoke and made through him. And therefore, when we sing them, we are certain that God puts the words in our mouths, as if he himself were singing in us to exalt his glory.",
    contribution: "Calvin's insistence on congregational Psalm-singing democratized worship in an era when most congregations only listened. The Genevan Psalter gave the Reformed tradition a sung theology that shaped worship from Geneva to Scotland to South Africa. His regulative principle, however contested, forced the church to ask hard questions about the basis of its worship practices.",
  },
  {
    id: "watts",
    name: "Isaac Watts",
    era: "1674-1748",
    context: "Hymns and Spiritual Songs (1707); The Psalms of David Imitated (1719); 'When I Survey the Wondrous Cross'",
    bio: "Isaac Watts is rightly called the Father of English Hymnody. Before Watts, English Protestant worship was almost entirely restricted to Psalm-singing — the idea of composing new songs for Christian worship was considered presumptuous. Watts changed everything. His argument was simple: the Psalms were written before the Incarnation, before the cross, before Pentecost. Why should the New Testament church sing as if Christ had not come? His 'christianizing' of the Psalms and his original hymns gave the English-speaking church a vocabulary for New Testament worship. 'When I Survey the Wondrous Cross' is widely considered the greatest hymn in the English language.",
    quote: "Should we not blush to sing the same sense in Christian worship that was sung by the Jewish synagogue, when we have so much more reason to praise God, and so much richer matter for praise?",
    contribution: "Watts wrote approximately 750 hymns, many of which remain in active use more than three centuries later. 'Joy to the World,' 'O God, Our Help in Ages Past,' 'Jesus Shall Reign,' and 'When I Survey the Wondrous Cross' represent a body of work unmatched in English hymnody. He unlocked the door for the tradition of original Christian hymnody that runs from Charles Wesley through Fanny Crosby to the present.",
  },
  {
    id: "tozer",
    name: "A.W. Tozer",
    era: "1897-1963",
    context: "The Pursuit of God (1948); The Knowledge of the Holy (1961); pastor of Southside Alliance Church, Chicago",
    bio: "A.W. Tozer was largely self-educated — he never attended seminary or college — but became one of the most theologically serious voices in 20th-century American evangelicalism. His essay 'The Missing Jewel of the Evangelical Church,' later collected as a chapter in various compilations, argued that worship had been displaced from the center of evangelical church life by programs, entertainment, and pragmatic ministry activity. He warned that a church that has forgotten how to worship has lost its reason for existence. His two most important books, The Pursuit of God and The Knowledge of the Holy, were attempts to recover the sense of God's transcendence and majesty that he believed was the precondition for genuine worship.",
    quote: "Worship is the missing jewel in modern evangelicalism. We're organized, we work, we have our agendas. We have almost everything, but there's one thing that the churches, even the gospel churches, do not have: that is the ability to worship.",
    contribution: "Tozer's diagnosis of evangelical church life — that it had become busy, productive, and spiritually shallow precisely because it had lost its orientation toward the worship of God — has proven prophetically accurate across the decades since his death. His recovery of classical theology's emphasis on divine transcendence, beauty, and majesty gave a generation of evangelical pastors the theological vocabulary to critique the entertainment model of church.",
  },
  {
    id: "redman",
    name: "Matt Redman",
    era: "b. 1974",
    context: "Songwriter; 'Heart of Worship' (1999); 'Blessed Be Your Name'; 'Ten Thousand Reasons'",
    bio: "Matt Redman is one of the most theologically substantive songwriters in the contemporary worship movement. His most famous song, 'Heart of Worship,' was written out of a moment of pastoral crisis: his pastor, Mike Pilavachi at Soul Survivor, Watford, stripped away the entire music program — PA system, band, everything — for a season, because the congregation had begun to come for the worship experience rather than for God. When the music was reinstated, Redman wrote 'Heart of Worship' ('I'll bring you more than a song / For a song in itself is not what you have required') to capture what the season without music had taught him. The song is a confession about the seduction of production in worship.",
    quote: "Worship is not a performance — it is a response. The moment we are more conscious of the congregation watching us than of the God we are singing to, something has gone wrong. The heart of worship is always bringing ourselves, not presenting ourselves.",
    contribution: "Redman's body of work — including 'Blessed Be Your Name,' 'You Never Let Go,' 'Ten Thousand Reasons,' and 'Our God' — represents the most theologically careful strand of contemporary worship songwriting. His willingness to write about suffering, loss, and the costly nature of worship distinguishes him from much of the genre. 'Heart of Worship' became a generational corrective to the professionalization of worship ministry.",
  },
  {
    id: "best",
    name: "Harold Best",
    era: "b. 1933",
    context: "Music Through the Eyes of Faith (1993); Unceasing Worship (2003); Dean of Wheaton College Conservatory of Music",
    bio: "Harold Best spent decades as Dean of Wheaton College Conservatory of Music developing a theology of worship and the arts that has influenced worship theology more than almost any contemporary academic. His central argument in Unceasing Worship is that we are continuous worshipers — the question is never whether we are worshiping but what or whom. Every human being, by virtue of being created in the image of God, is continuously outpouring toward something: God, or an idol. This reframes worship from an activity we perform (going to church, singing songs) to a condition of the human soul that is always in operation. Music Through the Eyes of Faith gave Christian musicians a theological framework for their work in and outside the church.",
    quote: "We are not human beings who sometimes worship. We are worshipers — continuous outpourers — who happen to be human. The only question is what or whom we are pouring ourselves out toward.",
    contribution: "Best's theology of continuous worship — that worship is not an event but a condition, not an activity but an orientation — has given worship theologians and church musicians a far more robust framework than the standard church-service-centered account. His work at Wheaton trained a generation of church musicians in theologically serious engagement with music and worship.",
  },
];

const WORSHIP_VIDEOS = [
  {
    id: "giglio-laminin",
    title: "How Great Is Our God",
    preacher: "Louie Giglio",
    videoId: "dQl4izxPeNU",
    description: "The iconic Passion message showing God’s majesty through the science of laminin and the universe",
  },
  {
    id: "giglio-universe",
    title: "How Great Is Our God (Universe)",
    preacher: "Louie Giglio",
    videoId: "dy9nwe9zeU8",
    description: "Extended version featuring the vast expanse of the cosmos and the glory of God",
  },
  {
    id: "sproul-holiness",
    title: "The Holiness of God",
    preacher: "R.C. Sproul",
    videoId: "3Dv4-n6OYGI",
    description: "Sproul’s landmark lecture on the holiness that makes worship both terrifying and beautiful",
  },
  {
    id: "sproul-trauma",
    title: "The Trauma of Holiness",
    preacher: "R.C. Sproul",
    videoId: "sIaT8Jl2zpI",
    description: "Lecture 2 from The Holiness of God series — why Isaiah’s vision undoes and remakes the worshiper",
  },
  {
    id: "gYR0xP1j4PY",
    title: "Don’t Waste Your Life",
    preacher: "John Piper",
    videoId: "Wt5X91ciE6Y",
    description: "Passion conference message that became a generation’s call to live for the glory of God",
  },
  {
    id: "evans-kingdom",
    title: "Your Role in Advancing the Kingdom",
    preacher: "Tony Evans",
    videoId: "cL4mTVpP73o",
    description: "Evans shows how every believer has a role in God’s kingdom agenda",
  },
];

export default function WorshipPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_worship_tab", "songs");
  const [playingSong, setPlayingSong] = useState<number | null>(null);
  const [joinedCircles, setJoinedCircles] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_worship_circles"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [followedCreators, setFollowedCreators] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_worship_creators"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [viewChord, setViewChord] = useState<number | null>(null);
  const [chordSearch, setChordSearch] = useState("");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_worship_voice", "calvin");
  const [worshipLogs, setWorshipLogs] = useState<{ id: string; date: string; song: string; moment: string; prayer: string; }[]>(() => {
    try { const s = localStorage.getItem("vine_worship_logs"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [wForm, setWForm] = useState({ song: "", moment: "", prayer: "" });
  const [wSaved, setWSaved] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_worship_logs", JSON.stringify(worshipLogs)); } catch {} }, [worshipLogs]);

  const saveWorshipLog = () => {
    setWorshipLogs(prev => [{ id: Date.now().toString(), date: new Date().toISOString().split("T")[0], ...wForm }, ...prev]);
    setWForm({ song: "", moment: "", prayer: "" });
    setWSaved(true);
    setTimeout(() => setWSaved(false), 2000);
  };

  const deleteWorshipLog = (id: string) => setWorshipLogs(prev => prev.filter(l => l.id !== id));

  useEffect(() => {
    try { localStorage.setItem("vine_worship_circles", JSON.stringify([...joinedCircles])); } catch {}
  }, [joinedCircles]);
  useEffect(() => {
    try { localStorage.setItem("vine_worship_creators", JSON.stringify([...followedCreators])); } catch {}
  }, [followedCreators]);

  const togglePlay = (i: number) => setPlayingSong(playingSong === i ? null : i);
  const toggleJoin = (i: number) => setJoinedCircles(prev => {
    const next = new Set(prev);
    if (next.has(i)) next.delete(i); else next.add(i);
    return next;
  });
  const toggleFollow = (i: number) => setFollowedCreators(prev => {
    const next = new Set(prev);
    if (next.has(i)) next.delete(i); else next.add(i);
    return next;
  });
  const handleSubmit = () => {
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3500);
  };

  const voiceItem = VOICES_WOR.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: "#07070F", minHeight: "100vh" }}>
      <Navbar />

      {/* TAB BAR */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(7,7,15,0.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid #1E1E32", paddingTop: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", gap: 4 }}>
            {([
              ["songs", "Songs & Music"],
              ["theology", "Theology of Worship"],
              ["voices", "Voices"],
              ["journal", "Journal"],
              ["videos", "Videos"],
            ] as const).map(([t, label]) => (
              <button type="button"
                key={t}
                onClick={() => setActiveTab(t)}
                style={{
                  padding: "14px 20px",
                  fontSize: 14,
                  fontWeight: 600,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: activeTab === t ? "#3a7d56" : "#6A6A88",
                  borderBottom: `2px solid ${activeTab === t ? "#3a7d56" : "transparent"}`,
                  marginBottom: -1,
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main id="main-content">
        {/* ─── SONGS TAB ─── */}
        {activeTab === "songs" && (
          <>
            {/* HERO */}
            <section
              style={{
                background:
                  "linear-gradient(180deg, rgba(107,79,187,0.18) 0%, rgba(58,125,86,0.06) 60%, transparent 100%)",
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
                    background: "rgba(58,125,86,0.1)",
                    border: "1px solid rgba(58,125,86,0.25)",
                    borderRadius: "100px",
                    padding: "6px 16px",
                    marginBottom: "24px",
                  }}
                >
                  <Music size={14} style={{ color: "#3a7d56" }} />
                  <span style={{ color: "#3a7d56", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
                    WORSHIP HUB
                  </span>
                </div>
                <h1
                  style={{
                    fontSize: "clamp(40px, 6vw, 72px)",
                    fontWeight: 900,
                    lineHeight: 1.05,
                    marginBottom: "20px",
                    background: "linear-gradient(135deg, #FFFFFF 0%, #3a7d56 50%, #F2F2F8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Worship Without Walls
                </h1>
                <p style={{ color: "#8A8AA8", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 32px" }}>
                  Music that transcends borders. From Ghana to Nashville to Tokyo &mdash; the global church is singing, and you&rsquo;re invited in.
                </p>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button type="button"
                    onClick={() => togglePlay(0)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "linear-gradient(135deg, #3a7d56, #B8922A)",
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
                    {playingSong === 0 ? "Now Playing..." : "Start Listening"}
                  </button>
                  <button type="button"
                    onClick={() => setActiveTab("videos")}
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
                  <Link href="/christian-worship-songs" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#3a7d56", fontSize: "14px", fontWeight: 600, background: "none", border: "none", cursor: "pointer", textDecoration: "none" }}>
                    See all <ChevronRight size={16} />
                  </Link>
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
                      onClick={() => togglePlay(i)}
                      style={{
                        background: "#12121F",
                        border: `1px solid ${playingSong === i ? "rgba(58,125,86,0.4)" : "#1E1E32"}`,
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
                            background: playingSong === i ? "#3a7d56" : "rgba(0,0,0,0.5)",
                            borderRadius: "50%",
                            width: "32px",
                            height: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "background 0.2s",
                          }}
                        >
                          {playingSong === i
                            ? <Pause size={14} fill="#07070F" style={{ color: "#07070F" }} />
                            : <Play size={14} fill="white" style={{ color: "white", marginLeft: "2px" }} />
                          }
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
                        <button type="button"
                          onClick={(e) => { e.stopPropagation(); togglePlay(songs.length + i); }}
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
                          {playingSong === songs.length + i
                            ? <><Pause size={11} fill="#07070F" /> Pause</>
                            : <><Play size={11} fill="#07070F" /> Play</>
                          }
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
                    value={chordSearch}
                    onChange={(e) => { setChordSearch(e.target.value); setViewChord(null); }}
                    aria-label="Search songs, artists, or keys..." placeholder="Search songs, artists, or keys..."
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
                  {chords.filter((chord) => {
                    if (!chordSearch.trim()) return true;
                    const q = chordSearch.toLowerCase();
                    return chord.song.toLowerCase().includes(q) || chord.artist.toLowerCase().includes(q) || chord.key.toLowerCase().includes(q);
                  }).map((chord, i) => (
                    <div key={i}>
                    <div
                      style={{
                        background: "#12121F",
                        border: `1px solid ${viewChord === i ? "rgba(58,125,86,0.3)" : "#1E1E32"}`,
                        borderRadius: viewChord === i ? "16px 16px 0 0" : "16px",
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
                              background: "rgba(58,125,86,0.12)",
                              color: "#3a7d56",
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
                      <button type="button"
                        onClick={() => setViewChord(viewChord === i ? null : i)}
                        style={{
                          flexShrink: 0,
                          background: viewChord === i ? "rgba(58,125,86,0.15)" : "transparent",
                          border: "1px solid rgba(58,125,86,0.3)",
                          color: "#3a7d56",
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
                        <BookOpen size={12} /> {viewChord === i ? "Hide Chords" : "View Chords"}
                      </button>
                    </div>
                    {viewChord === i && (
                      <div style={{ padding: "16px", borderTop: "1px solid rgba(58,125,86,0.15)", background: "rgba(58,125,86,0.04)", borderRadius: "0 0 16px 16px", border: "1px solid rgba(58,125,86,0.3)", borderTopWidth: 0 }}>
                        <p style={{ color: "#3a7d56", fontWeight: 700, fontSize: "13px", marginBottom: "8px" }}>
                          Key of {chord.key} &mdash; Basic Progression
                        </p>
                        <p style={{ color: "#8A8AA8", fontSize: "12px", lineHeight: 1.7 }}>
                          <strong style={{ color: "#F2F2F8" }}>Verse:</strong> {chord.key === "G" ? "G · Em · C · D" : chord.key === "C" ? "C · Am · F · G" : chord.key === "D" ? "D · Bm · G · A" : chord.key === "A" ? "A · F#m · D · E" : chord.key === "E" ? "E · C#m · A · B" : "G · Em · C · D"}
                        </p>
                        <p style={{ color: "#8A8AA8", fontSize: "12px", lineHeight: 1.7 }}>
                          <strong style={{ color: "#F2F2F8" }}>Chorus:</strong> {chord.key === "G" ? "C · G · Em · D" : chord.key === "C" ? "F · C · Am · G" : chord.key === "D" ? "G · D · Bm · A" : chord.key === "A" ? "D · A · F#m · E" : chord.key === "E" ? "A · E · C#m · B" : "C · G · Em · D"}
                        </p>
                        <p style={{ color: "#6A6A88", fontSize: "11px", marginTop: "8px" }}>Full chord charts available in the Vine chord library →</p>
                      </div>
                    )}
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
                        <button type="button"
                          onClick={() => toggleJoin(i)}
                          style={{
                            background: joinedCircles.has(i) ? circle.color : `${circle.color}18`,
                            color: joinedCircles.has(i) ? "#07070F" : circle.color,
                            border: `1px solid ${circle.color}30`,
                            borderRadius: "8px",
                            padding: "6px 14px",
                            fontWeight: 700,
                            fontSize: "12px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            transition: "all 0.2s",
                          }}
                        >
                          {joinedCircles.has(i) ? <><CheckCircle2 size={11} /> Joined!</> : "Join Circle"}
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
                      background: "rgba(58,125,86,0.1)",
                      border: "1px solid rgba(58,125,86,0.2)",
                      borderRadius: "100px",
                      padding: "4px 12px",
                      color: "#3a7d56",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    <Star size={11} fill="#3a7d56" /> Featured This Week
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
                        <button type="button"
                          onClick={() => toggleFollow(i)}
                          style={{
                            width: "100%",
                            background: followedCreators.has(i) ? "rgba(58,125,86,0.2)" : "rgba(58,125,86,0.08)",
                            border: "1px solid rgba(58,125,86,0.25)",
                            color: "#3a7d56",
                            borderRadius: "10px",
                            padding: "10px",
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
                          {followedCreators.has(i) ? <><CheckCircle2 size={14} /> Following</> : "Follow Creator"}
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
                    background: "linear-gradient(135deg, rgba(107,79,187,0.2) 0%, rgba(58,125,86,0.1) 100%)",
                    border: "1px solid rgba(58,125,86,0.2)",
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
                      background: "rgba(58,125,86,0.15)",
                      border: "1px solid rgba(58,125,86,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <Upload size={28} style={{ color: "#3a7d56" }} />
                  </div>
                  <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#F2F2F8", marginBottom: "12px" }}>
                    Submit Your Music
                  </h2>
                  <p style={{ color: "#8A8AA8", fontSize: "16px", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 28px" }}>
                    Are you a worship creator? Share your original songs, chord sheets, and arrangements with the global Vine community.
                  </p>
                  {submitSuccess ? (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "16px 24px", background: "rgba(58,125,86,0.12)", border: "1px solid rgba(58,125,86,0.3)", borderRadius: "16px", maxWidth: "360px", margin: "0 auto" }}>
                      <CheckCircle2 size={20} style={{ color: "#3a7d56" }} />
                      <div style={{ textAlign: "left" }}>
                        <p style={{ color: "#3a7d56", fontWeight: 700, fontSize: "15px", marginBottom: "2px" }}>Music Submitted!</p>
                        <p style={{ color: "#8A8AA8", fontSize: "12px" }}>The Vine team will review and be in touch within 3 business days.</p>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                      <button type="button"
                        onClick={handleSubmit}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "linear-gradient(135deg, #3a7d56, #B8922A)",
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
                      <Link
                        href="/about"
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
                          textDecoration: "none",
                        }}
                      >
                        <Heart size={16} /> Creator Guidelines
                      </Link>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </>
        )}

        {/* ─── THEOLOGY TAB ─── */}
        {activeTab === "theology" && (
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 80px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#F2F2F8", marginBottom: "12px" }}>
                The Theology of Worship
              </h2>
              <p style={{ color: "#9898B3", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
                What Scripture teaches about why, how, and to whom we worship &mdash; the doctrinal foundations beneath every song.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))", gap: "24px" }}>
              {WORSHIP_THEOLOGY.map(entry => (
                <div
                  key={entry.id}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    padding: "28px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "28px", flexShrink: 0 }}>{entry.icon}</span>
                    <div>
                      <p style={{ color: "#3a7d56", fontSize: "13px", fontStyle: "italic", lineHeight: 1.5, marginBottom: "6px" }}>
                        &ldquo;{entry.scripture}&rdquo; &mdash; {entry.scriptureRef}
                      </p>
                      <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: "18px" }}>{entry.title}</h3>
                    </div>
                  </div>
                  <p style={{ color: "#C0C0D8", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
                    {entry.description}
                  </p>
                  <div
                    style={{
                      borderLeft: "3px solid #6B4FBB",
                      paddingLeft: "16px",
                      background: "rgba(107,79,187,0.08)",
                      borderRadius: "0 8px 8px 0",
                      padding: "14px 16px",
                    }}
                  >
                    <p style={{ color: "#9898B3", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                      Application
                    </p>
                    <p style={{ color: "#C0C0D8", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                      {entry.application}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── VOICES TAB ─── */}
        {activeTab === "voices" && (
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 80px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#F2F2F8", marginBottom: "12px" }}>
                Voices on Worship
              </h2>
              <p style={{ color: "#9898B3", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
                Theologians, songwriters, and pastors who have shaped the church&rsquo;s understanding of worship across the centuries.
              </p>
            </div>
            <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
              {/* Left panel */}
              <div style={{ width: "210px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", position: "sticky", top: "80px" }}>
                {VOICES_WOR.map(v => (
                  <button type="button"
                    key={v.id}
                    onClick={() => setSelectedVoice(v.id)}
                    style={{
                      background: selectedVoice === v.id ? "#6B4FBB" : "#12121F",
                      border: `1px solid ${selectedVoice === v.id ? "#6B4FBB" : "#1E1E32"}`,
                      borderRadius: "10px",
                      padding: "12px 14px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "14px" }}>{v.name}</div>
                    <div style={{ color: "#9898B3", fontSize: "12px", marginTop: "2px" }}>{v.era}</div>
                  </button>
                ))}
              </div>
              {/* Right panel */}
              <div style={{ flex: 1 }}>
                <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "16px", padding: "32px" }}>
                  <h2 style={{ color: "#3a7d56", fontWeight: 900, fontSize: "24px", margin: "0 0 4px" }}>{voiceItem.name}</h2>
                  <div style={{ color: "#6B4FBB", fontSize: "13px", fontWeight: 700, marginBottom: "6px" }}>{voiceItem.era}</div>
                  <div style={{ color: "#9898B3", fontSize: "13px", marginBottom: "20px", lineHeight: 1.6 }}>{voiceItem.context}</div>
                  <p style={{ color: "#F2F2F8", lineHeight: 1.8, fontSize: "15px", marginBottom: "24px" }}>{voiceItem.bio}</p>
                  <div style={{ background: "#07070F", borderLeft: "3px solid #3a7d56", borderRadius: "0 8px 8px 0", padding: "16px 20px", marginBottom: "24px" }}>
                    <p style={{ color: "#3a7d56", fontStyle: "italic", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                      &ldquo;{voiceItem.quote}&rdquo;
                    </p>
                  </div>
                  <div style={{ background: "rgba(107,79,187,0.12)", borderRadius: "12px", padding: "20px" }}>
                    <div style={{ color: "#6B4FBB", fontWeight: 700, fontSize: "13px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Legacy &amp; Contribution</div>
                    <p style={{ color: "#F2F2F8", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>{voiceItem.contribution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── JOURNAL TAB ─── */}
        {activeTab === "journal" && (
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 24px 80px" }}>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: "#F2F2F8", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Worship shapes us. Record the moments when God met you in music, prayer, or Scripture — and watch a history of encounter accumulate.
              </p>
            </div>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: "#3a7d56", fontWeight: 800, fontSize: 18, marginBottom: 20 }}>Log a Worship Moment</h3>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: "#9898B3", fontSize: 13, fontWeight: 600 }}>Song or hymn</label>
                <input value={wForm.song} onChange={e => setWForm(f => ({ ...f, song: e.target.value }))}
                  placeholder="e.g. 'Before the Throne of God Above', 'Be Thou My Vision'..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: "1px solid #1E1E32", background: "#07070F", color: "#F2F2F8", fontSize: 14, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: "#9898B3", fontSize: 13, fontWeight: 600 }}>Moment that stood out</label>
                <textarea value={wForm.moment} onChange={e => setWForm(f => ({ ...f, moment: e.target.value }))} rows={3}
                  placeholder="A lyric that struck you, a sense of God's presence, something you saw clearly during worship..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: "1px solid #1E1E32", background: "#07070F", color: "#F2F2F8", fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: "#9898B3", fontSize: 13, fontWeight: 600 }}>Prayer that arose</label>
                <textarea value={wForm.prayer} onChange={e => setWForm(f => ({ ...f, prayer: e.target.value }))} rows={2}
                  placeholder="What you found yourself praying, a desire that surfaced, a surrender you made..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: "1px solid #1E1E32", background: "#07070F", color: "#F2F2F8", fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveWorshipLog}
                style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: "#3a7d56", color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                {wSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {worshipLogs.length > 0 && (
              <div>
                <h3 style={{ color: "#9898B3", fontSize: 14, fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Worship History</h3>
                {worshipLogs.map(log => (
                  <div key={log.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 18, marginBottom: 14, position: "relative" }}>
                    <button type="button" onClick={() => deleteWorshipLog(log.id)}
                      style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", color: "#9898B3", cursor: "pointer", fontSize: 16 }}>×</button>
                    <div style={{ color: "#9898B3", fontSize: 12, marginBottom: 8 }}>{log.date}</div>
                    {log.song && <p style={{ color: "#6B4FBB", fontWeight: 700, fontSize: 14, margin: "0 0 8px" }}>🎵 {log.song}</p>}
                    {log.moment && <p style={{ color: "#F2F2F8", fontSize: 13, lineHeight: 1.7, margin: "0 0 8px" }}>{log.moment}</p>}
                    {log.prayer && <p style={{ color: "#3a7d56", fontSize: 13, fontStyle: "italic", margin: 0 }}>🙏 {log.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ─── VIDEOS TAB ─── */}
        {activeTab === "videos" && (
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 80px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#F2F2F8", marginBottom: "12px" }}>
                Worship Videos
              </h2>
              <p style={{ color: "#9898B3", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
                Messages and lectures that will deepen your understanding of what it means to worship the living God.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))", gap: "28px" }}>
              {WORSHIP_VIDEOS.map(video => (
                <div
                  key={video.id}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ padding: "20px 20px 0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                      <span
                        style={{
                          background: "rgba(107,79,187,0.2)",
                          color: "#A080FF",
                          border: "1px solid rgba(107,79,187,0.35)",
                          borderRadius: "100px",
                          padding: "4px 12px",
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        {video.preacher}
                      </span>
                    </div>
                    <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: "17px", marginBottom: "8px" }}>
                      {video.title}
                    </h3>
                    <p style={{ color: "#9898B3", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>
                      {video.description}
                    </p>
                  </div>
                  <div style={{ padding: "0 20px 20px" }}>
                    <VideoEmbed videoId={video.videoId} title={video.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Now Playing Bar */}
      {playingSong !== null && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(7,7,15,0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(58,125,86,0.25)",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            zIndex: 100,
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              background: playingSong < songs.length ? songs[playingSong].gradient : "linear-gradient(135deg,#3a7d56,#6B4FBB)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Music size={16} style={{ color: "rgba(255,255,255,0.7)" }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "14px", marginBottom: "1px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {playingSong < songs.length ? songs[playingSong].title : playlists[playingSong - songs.length].title}
            </p>
            <p style={{ color: "#8A8AA8", fontSize: "12px" }}>
              {playingSong < songs.length ? songs[playingSong].artist : `${playlists[playingSong - songs.length].songs} songs`}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Volume2 size={14} style={{ color: "#6A6A88" }} />
            <div style={{ width: "80px", height: "3px", background: "#1E1E32", borderRadius: "2px" }}>
              <div style={{ width: "60%", height: "100%", background: "#3a7d56", borderRadius: "2px" }} />
            </div>
          </div>
          <button type="button"
            onClick={() => setPlayingSong(null)}
            style={{ background: "none", border: "none", color: "#6A6A88", cursor: "pointer", padding: "4px" }}
          >
            <X size={16} />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
