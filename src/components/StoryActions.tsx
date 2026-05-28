"use client";

import { useState, useEffect } from "react";
import { Heart, Bookmark, Share2 } from "lucide-react";

interface Props {
  initialHearts: number;
  slug?: string;
}

export default function StoryActions({ initialHearts, slug }: Props) {
  const likeKey = slug ? `vine_story_liked_${slug}` : null;
  const saveKey = slug ? `vine_story_saved_${slug}` : null;

  const [hearted, setHearted] = useState(false);
  const [hearts, setHearts] = useState(initialHearts);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    if (likeKey) {
      try { setHearted(localStorage.getItem(likeKey) === "1"); } catch {}
    }
    if (saveKey) {
      try { setSaved(localStorage.getItem(saveKey) === "1"); } catch {}
    }
  }, [likeKey, saveKey]);

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
          background: saved ? "rgba(0,255,136,0.15)" : "rgba(0,255,136,0.08)",
          color: "#00FF88",
          border: saved ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(0,255,136,0.2)",
        }}
      >
        <Bookmark size={14} fill={saved ? "#00FF88" : "none"} /> {saved ? "Saved" : "Save"}
      </button>
      <button
        onClick={() => {
          try { navigator.clipboard.writeText(window.location.href); } catch {}
          setShared(true);
          setTimeout(() => setShared(false), 2000);
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
        style={{
          background: shared ? "rgba(0,255,136,0.08)" : "rgba(255,255,255,0.04)",
          color: shared ? "#00FF88" : "#8A8AA8",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Share2 size={14} /> {shared ? "Copied!" : "Share"}
      </button>
    </div>
  );
}
