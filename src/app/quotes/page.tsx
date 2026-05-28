"use client";

import { useState, useEffect, useCallback } from "react";

interface Quote {
  id: string;
  text: string;
  author: string;
  source?: string;
  category: string;
  era: string;
  likes: number;
}

const allQuotes: Quote[] = [
  { id: "q1", text: "God loves each of us as if there were only one of us.", author: "Augustine of Hippo", source: "Confessions", category: "God's Love", era: "Early Church", likes: 8420 },
  { id: "q2", text: "Our heart is restless, until it repose in Thee.", author: "Augustine of Hippo", source: "Confessions", category: "Surrender", era: "Early Church", likes: 7104 },
  { id: "q3", text: "You have made us for yourself, O Lord, and our heart is restless until it rests in you.", author: "Augustine of Hippo", source: "Confessions", category: "Purpose", era: "Early Church", likes: 6830 },
  { id: "q4", text: "To fall in love with God is the greatest romance; to seek him the greatest adventure; to find him, the greatest human achievement.", author: "Augustine of Hippo", category: "God's Love", era: "Early Church", likes: 9210 },
  { id: "q5", text: "The Bible is the greatest benefit which the human race has ever experienced.", author: "Immanuel Kant", category: "Scripture", era: "18th Century", likes: 3120 },
  { id: "q6", text: "Prayer is not asking. It is a longing of the soul.", author: "Mahatma Gandhi", category: "Prayer", era: "Modern", likes: 4560 },
  { id: "q7", text: "Faith is taking the first step even when you don't see the whole staircase.", author: "Martin Luther King Jr.", category: "Faith", era: "20th Century", likes: 12430 },
  { id: "q8", text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", author: "Martin Luther King Jr.", source: "Strength to Love", category: "Love", era: "20th Century", likes: 11780 },
  { id: "q9", text: "The time is always right to do what is right.", author: "Martin Luther King Jr.", category: "Courage", era: "20th Century", likes: 9870 },
  { id: "q10", text: "God never said that the journey would be easy, but He did say that the arrival would be worthwhile.", author: "Max Lucado", category: "Perseverance", era: "Contemporary", likes: 8760 },
  { id: "q11", text: "A man's greatest calling is to love God with all his heart. Everything else flows from that.", author: "John Piper", category: "Purpose", era: "Contemporary", likes: 7430 },
  { id: "q12", text: "The Bible is not an end in itself, but a means to bring men to an intimate and satisfying knowledge of God.", author: "A.W. Tozer", source: "The Pursuit of God", category: "Scripture", era: "20th Century", likes: 8920 },
  { id: "q13", text: "What comes into our minds when we think about God is the most important thing about us.", author: "A.W. Tozer", source: "The Knowledge of the Holy", category: "God's Nature", era: "20th Century", likes: 14320 },
  { id: "q14", text: "To have found God and still to pursue Him is the soul's paradox of love.", author: "A.W. Tozer", category: "Worship", era: "20th Century", likes: 7890 },
  { id: "q15", text: "God is not looking for brilliant minds but for surrendered hearts.", author: "A.W. Tozer", category: "Surrender", era: "20th Century", likes: 9230 },
  { id: "q16", text: "I have a great need for Christ; I have a great Christ for my need.", author: "Charles Spurgeon", category: "Grace", era: "19th Century", likes: 10870 },
  { id: "q17", text: "It is not the greatness of my faith that moves mountains, but my faith in the greatness of God.", author: "Charles Spurgeon", category: "Faith", era: "19th Century", likes: 15640 },
  { id: "q18", text: "If you are renewed by grace, and were to meet your old self, I am sure you would be very anxious to get out of his company.", author: "Charles Spurgeon", category: "Transformation", era: "19th Century", likes: 6540 },
  { id: "q19", text: "Christ is not valued at all unless He is valued above all.", author: "Augustine of Hippo", category: "Worship", era: "Early Church", likes: 8340 },
  { id: "q20", text: "Prayer does not change God, but it changes him who prays.", author: "Søren Kierkegaard", category: "Prayer", era: "19th Century", likes: 11230 },
  { id: "q21", text: "The most important thing about prayer is not the words we say but the heart we bring.", author: "Timothy Keller", category: "Prayer", era: "Contemporary", likes: 7820 },
  { id: "q22", text: "Sin is not just breaking God's rules; it is breaking God's heart.", author: "Timothy Keller", category: "Repentance", era: "Contemporary", likes: 9120 },
  { id: "q23", text: "The gospel is not advice to people about what they must do; it's news about what God has done.", author: "Timothy Keller", source: "The Reason for God", category: "Gospel", era: "Contemporary", likes: 12780 },
  { id: "q24", text: "God will meet you where you are in order to take you where He wants you to go.", author: "Tony Evans", category: "God's Love", era: "Contemporary", likes: 8650 },
  { id: "q25", text: "If you want to hear God speak, read your Bible. If you want to hear God speak audibly, read it out loud.", author: "Unknown", category: "Scripture", era: "Contemporary", likes: 13450 },
  { id: "q26", text: "You can have all this world, but give me Jesus.", author: "Fanny Crosby", category: "Surrender", era: "19th Century", likes: 7340 },
  { id: "q27", text: "Grace is not simply leniency when we have sinned. Grace is the enabling gift of God not to sin. Grace is power, not just pardon.", author: "John Piper", source: "Future Grace", category: "Grace", era: "Contemporary", likes: 11890 },
  { id: "q28", text: "God is most glorified in us when we are most satisfied in Him.", author: "John Piper", source: "Desiring God", category: "Worship", era: "Contemporary", likes: 18920 },
  { id: "q29", text: "Don't ask what the world needs. Ask what makes you come alive, and go do it. Because what the world needs is people who have come alive.", author: "Howard Thurman", category: "Purpose", era: "20th Century", likes: 10340 },
  { id: "q30", text: "The secret of health for both mind and body is not to mourn for the past, worry about the future, or anticipate troubles, but to live the present moment wisely and earnestly.", author: "Siddhartha Gautama", category: "Peace", era: "Ancient", likes: 5670 },
  { id: "q31", text: "The cross is the lightning rod of grace that short-circuits God's wrath to Christ so that only the light of His love illuminates us.", author: "A.W. Tozer", category: "Gospel", era: "20th Century", likes: 8120 },
  { id: "q32", text: "Never be afraid to trust an unknown future to a known God.", author: "Corrie ten Boom", category: "Faith", era: "20th Century", likes: 16780 },
  { id: "q33", text: "Worry is a cycle of inefficient thoughts whirling around a center of fear.", author: "Corrie ten Boom", category: "Peace", era: "20th Century", likes: 9430 },
  { id: "q34", text: "There is no pit so deep that God's love is not deeper still.", author: "Corrie ten Boom", source: "The Hiding Place", category: "God's Love", era: "20th Century", likes: 19870 },
  { id: "q35", text: "Forgiveness is an act of the will, and the will can function regardless of the temperature of the heart.", author: "Corrie ten Boom", category: "Forgiveness", era: "20th Century", likes: 12340 },
  { id: "q36", text: "The greatest tragedy is not death, but life without purpose.", author: "Myles Munroe", category: "Purpose", era: "Contemporary", likes: 14230 },
  { id: "q37", text: "When the purpose of a thing is not known, abuse is inevitable.", author: "Myles Munroe", category: "Purpose", era: "Contemporary", likes: 11670 },
  { id: "q38", text: "Be faithful in small things because it is in them that your strength lies.", author: "Mother Teresa", category: "Faithfulness", era: "20th Century", likes: 13450 },
  { id: "q39", text: "If you judge people, you have no time to love them.", author: "Mother Teresa", category: "Love", era: "20th Century", likes: 15670 },
  { id: "q40", text: "Not all of us can do great things. But we can do small things with great love.", author: "Mother Teresa", category: "Service", era: "20th Century", likes: 17890 },
  { id: "q41", text: "The measure of a life, after all, is not its duration but its donation.", author: "Corrie ten Boom", category: "Service", era: "20th Century", likes: 9230 },
  { id: "q42", text: "God cannot give us a happiness and peace apart from Himself, because it is not there. There is no such thing.", author: "C.S. Lewis", source: "Mere Christianity", category: "Purpose", era: "20th Century", likes: 14560 },
  { id: "q43", text: "If I find in myself a desire which no experience in this world can satisfy, the most probable explanation is that I was made for another world.", author: "C.S. Lewis", source: "Mere Christianity", category: "Eternity", era: "20th Century", likes: 21340 },
  { id: "q44", text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "Perseverance", era: "20th Century", likes: 18760 },
  { id: "q45", text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "Hope", era: "20th Century", likes: 16230 },
  { id: "q46", text: "Friendship is born at that moment when one person says to another: What! You too? I thought I was the only one.", author: "C.S. Lewis", source: "The Four Loves", category: "Community", era: "20th Century", likes: 13450 },
  { id: "q47", text: "Joy is the serious business of Heaven.", author: "C.S. Lewis", category: "Joy", era: "20th Century", likes: 12780 },
  { id: "q48", text: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.", author: "C.S. Lewis", category: "Faith", era: "20th Century", likes: 14890 },
  { id: "q49", text: "A man can no more diminish God's glory by refusing to worship Him than a lunatic can put out the sun by scribbling the word darkness on the walls of his cell.", author: "C.S. Lewis", source: "The Problem of Pain", category: "Worship", era: "20th Century", likes: 8120 },
  { id: "q50", text: "To be a Christian means to forgive the inexcusable because God has forgiven the inexcusable in you.", author: "C.S. Lewis", source: "The Weight of Glory", category: "Forgiveness", era: "20th Century", likes: 17230 },
];

const categories = ["All", "Faith", "God's Love", "Prayer", "Scripture", "Grace", "Purpose", "Surrender", "Worship", "Love", "Perseverance", "Forgiveness", "Gospel", "Peace", "Hope", "Service", "Joy", "Transformation", "Courage"];
const eras = ["All Eras", "Early Church", "Medieval", "16th Century", "17th Century", "18th Century", "19th Century", "20th Century", "Contemporary"];
const sortOptions = ["Most Liked", "Newest", "Alphabetical (Author)"];

export default function QuotesPage() {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterEra, setFilterEra] = useState("All Eras");
  const [sortBy, setSortBy] = useState("Most Liked");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "saved">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const s = localStorage.getItem("vine_quotes_saved");
      if (s) setSavedIds(new Set(JSON.parse(s)));
      const l = localStorage.getItem("vine_quotes_liked");
      if (l) setLikedIds(new Set(JSON.parse(l)));
    } catch {}
  }, []);

  const handleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_quotes_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleLike = (id: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_quotes_liked", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleCopy = useCallback((quote: Quote) => {
    const text = `"${quote.text}" — ${quote.author}`;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedId(quote.id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const filtered = allQuotes
    .filter((q) => {
      if (activeTab === "saved" && !savedIds.has(q.id)) return false;
      if (filterCategory !== "All" && q.category !== filterCategory) return false;
      if (filterEra !== "All Eras" && q.era !== filterEra) return false;
      if (search && !q.text.toLowerCase().includes(search.toLowerCase()) && !q.author.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "Most Liked") return (b.likes + (likedIds.has(b.id) ? 1 : 0)) - (a.likes + (likedIds.has(a.id) ? 1 : 0));
      if (sortBy === "Alphabetical (Author)") return a.author.localeCompare(b.author);
      return 0;
    });

  const topQuote = allQuotes.reduce((best, q) => (q.likes > best.likes ? q : best), allQuotes[0]);

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #12082a 0%, #07070F 100%)",
          padding: "56px 24px 40px",
          textAlign: "center",
          borderBottom: "1px solid #1E1E32",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 12 }}>💬</div>
        <h1 style={{ fontSize: 38, fontWeight: 700, marginBottom: 10 }}>Christian Quotes</h1>
        <p style={{ fontSize: 16, color: "#9898B3", maxWidth: 520, margin: "0 auto 24px" }}>
          Wisdom from believers across 2,000 years of faith. Save, share, and let these words shape your day.
        </p>

        {/* Quote of the day */}
        <div
          style={{
            background: "#12121F",
            border: "1px solid #6B4FBB40",
            borderRadius: 16,
            padding: "20px 24px",
            maxWidth: 640,
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <div style={{ fontSize: 11, color: "#6B4FBB", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
            ✨ Most Loved Quote
          </div>
          <div style={{ fontSize: 17, color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
            "{topQuote.text}"
          </div>
          <div style={{ fontSize: 13, color: "#9898B3" }}>— {topQuote.author}{topQuote.source ? `, ${topQuote.source}` : ""}</div>
          <div style={{ fontSize: 12, color: "#F59E0B", marginTop: 6 }}>♥ {topQuote.likes.toLocaleString()} likes</div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px" }}>
        {/* Tabs + search */}
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <div style={{ display: "flex", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: 4, gap: 4 }}>
            {(["all", "saved"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "7px 18px", borderRadius: 7, border: "none",
                  background: activeTab === tab ? "#6B4FBB" : "transparent",
                  color: activeTab === tab ? "#fff" : "#9898B3",
                  cursor: "pointer", fontWeight: 600, fontSize: 13,
                }}
              >
                {tab === "all" ? `All (${allQuotes.length})` : `Saved (${savedIds.size})`}
              </button>
            ))}
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search quotes or authors..."
            style={{
              flex: 1, minWidth: 200, background: "#12121F", border: "1px solid #1E1E32",
              borderRadius: 10, padding: "9px 14px", color: "#F2F2F8", fontSize: 13, outline: "none",
            }}
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "9px 14px", color: "#9898B3", fontSize: 13 }}
          >
            {sortOptions.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Filters */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
            {categories.slice(0, 12).map((c) => (
              <button
                key={c}
                onClick={() => setFilterCategory(c)}
                style={{
                  padding: "4px 12px", borderRadius: 20, fontSize: 12,
                  border: `1px solid ${filterCategory === c ? "#6B4FBB" : "#1E1E32"}`,
                  background: filterCategory === c ? "#6B4FBB20" : "transparent",
                  color: filterCategory === c ? "#6B4FBB" : "#9898B3",
                  cursor: "pointer",
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {eras.map((e) => (
              <button
                key={e}
                onClick={() => setFilterEra(e)}
                style={{
                  padding: "4px 12px", borderRadius: 20, fontSize: 11,
                  border: `1px solid ${filterEra === e ? "#00FF88" : "#1E1E32"}`,
                  background: filterEra === e ? "#00FF8815" : "transparent",
                  color: filterEra === e ? "#00FF88" : "#9898B3",
                  cursor: "pointer",
                }}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 16 }}>
          {filtered.length} quote{filtered.length !== 1 ? "s" : ""}
        </div>

        {/* Masonry-style grid */}
        <div style={{ columns: "3 280px", gap: 16 }}>
          {filtered.map((quote) => {
            const liked = likedIds.has(quote.id);
            const saved = savedIds.has(quote.id);
            const copied = copiedId === quote.id;
            return (
              <div
                key={quote.id}
                style={{
                  breakInside: "avoid",
                  background: "#12121F",
                  border: `1px solid ${saved ? "#6B4FBB40" : "#1E1E32"}`,
                  borderRadius: 14,
                  padding: 20,
                  marginBottom: 16,
                  display: "inline-block",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ fontSize: 11, color: "#6B4FBB", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>
                  {quote.category}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: "#F2F2F8",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    margin: "0 0 12px",
                  }}
                >
                  "{quote.text}"
                </p>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 4 }}>
                  — {quote.author}
                </div>
                {quote.source && (
                  <div style={{ fontSize: 11, color: "#9898B3", marginBottom: 12 }}>{quote.source}</div>
                )}
                <div style={{ fontSize: 11, color: "#9898B3", marginBottom: 12 }}>
                  {quote.era}
                </div>

                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <button
                    onClick={() => handleLike(quote.id)}
                    style={{
                      padding: "4px 10px", borderRadius: 6, border: "none",
                      background: liked ? "#00FF8815" : "#1E1E32",
                      color: liked ? "#00FF88" : "#9898B3",
                      cursor: "pointer", fontSize: 12,
                    }}
                  >
                    ♥ {(quote.likes + (liked ? 1 : 0)).toLocaleString()}
                  </button>
                  <button
                    onClick={() => handleSave(quote.id)}
                    style={{
                      padding: "4px 10px", borderRadius: 6, border: "none",
                      background: saved ? "#6B4FBB20" : "#1E1E32",
                      color: saved ? "#6B4FBB" : "#9898B3",
                      cursor: "pointer", fontSize: 14,
                    }}
                  >
                    {saved ? "★" : "☆"}
                  </button>
                  <button
                    onClick={() => handleCopy(quote)}
                    style={{
                      padding: "4px 10px", borderRadius: 6, border: "none",
                      background: copied ? "#F59E0B20" : "#1E1E32",
                      color: copied ? "#F59E0B" : "#9898B3",
                      cursor: "pointer", fontSize: 12,
                    }}
                  >
                    {copied ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 24px" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <div style={{ color: "#9898B3" }}>No quotes match your filters.</div>
          </div>
        )}
      </div>
    </div>
  );
}
