"use client";

import { useState } from "react";
import { Heart, Bookmark, Share2 } from "lucide-react";

interface Props {
  initialHearts: number;
  slug?: string;
}

export default function StoryActions({ initialHearts, slug }: Props) {
  const likeKey = slug ? `vine_story_liked_${slug}` : null;
  const saveKey = slug ? `vine_story_saved_${slug}` : null;

  const [hearted, setHearted] = useState(() => {
    if (typeof window === "undefined" || !likeKey) return false;
    try { return localStorage.getItem(likeKey) === "1"; } catch { return false; }
  });
  const [hearts, setHearts] = useState(() => {
    if (typeof window === "undefined" || !likeKey) return initialHearts;
    try { return initialHearts + (localStorage.getItem(likeKey) === "1" ? 1 : 0); } catch { return initialHearts; }
  });
  const [saved, setSaved] = useState(() => {
    if (typeof window === "undefined" || !saveKey) return false;
    try { return localStorage.getItem(saveKey) === "1"; } catch { return false; }
  });
  const [shared, setShared] = useState(false);

  const handleHeart = () => {
    const next = !hearted;
    setHearted(next);
    setHearts((v) => next ? v + 1 : v - 1);
    if (likeKey) {
      try {
        if (next) localStorage.setItem(likeKey, "1");
        else localStorage.removeItem(likeKey);
      } catch {}
    }
    try {
      const likes: string[] = JSON.parse(localStorage.getItem("vine_story_article_likes") ?? "[]");
      const updated = next ? [...new Set([...likes, slug ?? ""])] : likes.filter((s) => s !== slug);
      localStorage.setItem("vine_story_article_likes", JSON.stringify(updated.filter(Boolean)));
    } catch {}
  };

  const handleSave = () => {
    const next = !saved;
    setSaved(next);
    if (saveKey) {
      try {
        if (next) localStorage.setItem(saveKey, "1");
        else localStorage.removeItem(saveKey);
      } catch {}
    }
    try {
      const existing: Record<string, boolean> = JSON.parse(localStorage.getItem("vine_stories_saved") ?? "{}");
      if (slug) {
        if (next) existing[slug] = true;
        else delete existing[slug];
        localStorage.setItem("vine_stories_saved", JSON.stringify(existing));
      }
    } catch {}
  };

  return (
    <div className="flex items-center gap-3 py-6 mb-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button
        onClick={handleHeart}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
        style={{
          background: hearted ? "rgba(236,72,153,0.18)" : "rgba(236,72,153,0.1)",
          color: "#EC4899",
          border: hearted ? "1px solid rgba(236,72,153,0.5)" : "1px solid rgba(236,72,153,0.2)",
        }}
      >
        <Heart size={14} fill={hearted ? "#EC4899" : "none"} /> {hearts.toLocaleString()}
      </button>
      <button
        onClick={handleSave}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
        style={{
          background: saved ? "rgba(58,125,86,0.15)" : "rgba(58,125,86,0.08)",
          color: "#3a7d56",
          border: saved ? "1px solid rgba(58,125,86,0.4)" : "1px solid rgba(58,125,86,0.2)",
        }}
      >
        <Bookmark size={14} fill={saved ? "#3a7d56" : "none"} /> {saved ? "Saved" : "Save"}
      </button>
      <button
        onClick={() => {
          try { navigator.clipboard.writeText(window.location.href); } catch {}
          setShared(true);
          setTimeout(() => setShared(false), 2000);
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
        style={{
          background: shared ? "rgba(58,125,86,0.08)" : "rgba(255,255,255,0.04)",
          color: shared ? "#3a7d56" : "#8A8AA8",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Share2 size={14} /> {shared ? "Copied!" : "Share"}
      </button>
    </div>
  );
}
