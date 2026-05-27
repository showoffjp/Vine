"use client";

import { useState } from "react";
import { ChevronUp, Bookmark, Share2 } from "lucide-react";

export default function DiscussionActions({
  initialUpvotes,
}: {
  initialUpvotes: number;
}) {
  const [upvoted, setUpvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  const handleUpvote = () => {
    if (upvoted) {
      setUpvotes((v) => v - 1);
    } else {
      setUpvotes((v) => v + 1);
    }
    setUpvoted((v) => !v);
  };

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
    } catch {}
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleUpvote}
        className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
        style={{
          background: upvoted ? "rgba(0,255,136,0.15)" : "rgba(0,255,136,0.08)",
          border: upvoted ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(0,255,136,0.15)",
          color: "#00FF88",
        }}
      >
        <ChevronUp size={12} /> {upvotes.toLocaleString()}
      </button>
      <button
        onClick={() => setSaved((v) => !v)}
        className="p-1.5 rounded-lg transition-all"
        style={{ color: saved ? "#EC4899" : "#4A4A68" }}
        title={saved ? "Unsave" : "Save"}
      >
        <Bookmark size={14} fill={saved ? "#EC4899" : "none"} />
      </button>
      <button
        onClick={handleShare}
        className="flex items-center gap-1 p-1.5 rounded-lg transition-all text-xs font-semibold"
        style={{ color: shared ? "#00FF88" : "#4A4A68" }}
        title={shared ? "Link copied!" : "Copy link"}
      >
        <Share2 size={14} />
        {shared && <span style={{ fontSize: "10px" }}>Copied!</span>}
      </button>
    </div>
  );
}
