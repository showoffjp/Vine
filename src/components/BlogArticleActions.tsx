"use client";

import { useState } from "react";
import { Heart, Bookmark, Share2 } from "lucide-react";

interface Props {
  slug?: string;
}

export default function BlogArticleActions({ slug }: Props) {
  const likeKey = slug ? `vine_blog_likes_${slug}` : null;
  const saveKey = slug ? `vine_blog_saves_${slug}` : null;

  const [liked, setLiked] = useState(() => {
    if (typeof window === "undefined" || !likeKey) return false;
    try { return localStorage.getItem(likeKey) === "1"; } catch { return false; }
  });
  const [saved, setSaved] = useState(() => {
    if (typeof window === "undefined" || !saveKey) return false;
    try { return localStorage.getItem(saveKey) === "1"; } catch { return false; }
  });
  const [shared, setShared] = useState(false);

  const toggleLike = () => {
    const next = !liked;
    setLiked(next);
    if (likeKey) {
      try {
        if (next) localStorage.setItem(likeKey, "1");
        else localStorage.removeItem(likeKey);
      } catch {}
    }
    // Also track in the vine_blog_article_likes set for /saved aggregation
    try {
      const likes: string[] = JSON.parse(localStorage.getItem("vine_blog_article_likes") ?? "[]");
      const updated = next ? [...new Set([...likes, slug ?? ""])] : likes.filter((s) => s !== slug);
      localStorage.setItem("vine_blog_article_likes", JSON.stringify(updated.filter(Boolean)));
    } catch {}
  };

  const toggleSave = () => {
    const next = !saved;
    setSaved(next);
    if (saveKey) {
      try {
        if (next) localStorage.setItem(saveKey, "1");
        else localStorage.removeItem(saveKey);
      } catch {}
    }
    // Update vine_blog_saved Set used by /saved page
    try {
      const existing: Record<string, boolean> = JSON.parse(localStorage.getItem("vine_blog_saved") ?? "{}");
      if (slug) {
        if (next) existing[slug] = true;
        else delete existing[slug];
        localStorage.setItem("vine_blog_saved", JSON.stringify(existing));
      }
    } catch {}
  };

  const handleShare = () => {
    try { navigator.clipboard.writeText(window.location.href); } catch {}
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <div className="flex items-center gap-4 py-6 mb-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button
        onClick={toggleLike}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
        style={{
          background: liked ? "rgba(236,72,153,0.18)" : "rgba(236,72,153,0.1)",
          color: "#EC4899",
          border: liked ? "1px solid rgba(236,72,153,0.5)" : "1px solid rgba(236,72,153,0.2)",
        }}
      >
        <Heart size={14} fill={liked ? "#EC4899" : "none"} /> {liked ? "Liked" : "Like"}
      </button>
      <button
        onClick={toggleSave}
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
        onClick={handleShare}
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
