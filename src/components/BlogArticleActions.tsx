"use client";

import { useState } from "react";
import { Heart, Bookmark, Share2 } from "lucide-react";

export default function BlogArticleActions() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  const handleShare = () => {
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <div className="flex items-center gap-4 py-6 mb-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button
        onClick={() => setLiked((v) => !v)}
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
        onClick={() => setSaved((v) => !v)}
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
        onClick={handleShare}
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
