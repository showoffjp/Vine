"use client";

import { useState } from "react";
import { ChevronUp, Bookmark, Share2 } from "lucide-react";

interface Props {
  initialUpvotes: number;
  id?: string;
}

export default function DiscussionActions({ initialUpvotes, id }: Props) {
  const upvoteKey = id ? `vine_discussion_upvoted_${id}` : null;
  const saveKey = id ? `vine_discussion_saved_${id}` : null;

  const [upvoted, setUpvoted] = useState(() => {
    if (typeof window === "undefined" || !upvoteKey) return false;
    try { return localStorage.getItem(upvoteKey) === "1"; } catch { return false; }
  });
  const [upvotes, setUpvotes] = useState(() => {
    if (typeof window === "undefined" || !upvoteKey) return initialUpvotes;
    try { return initialUpvotes + (localStorage.getItem(upvoteKey) === "1" ? 1 : 0); } catch { return initialUpvotes; }
  });
  const [saved, setSaved] = useState(() => {
    if (typeof window === "undefined" || !saveKey) return false;
    try { return localStorage.getItem(saveKey) === "1"; } catch { return false; }
  });
  const [shared, setShared] = useState(false);

  const handleUpvote = () => {
    const next = !upvoted;
    setUpvoted(next);
    setUpvotes((v) => next ? v + 1 : v - 1);
    if (upvoteKey) {
      try {
        if (next) localStorage.setItem(upvoteKey, "1");
        else localStorage.removeItem(upvoteKey);
      } catch {}
    }
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
      const existing: Record<string, boolean> = JSON.parse(localStorage.getItem("vine_discussions_saved") ?? "{}");
      if (id) {
        if (next) existing[id] = true;
        else delete existing[id];
        localStorage.setItem("vine_discussions_saved", JSON.stringify(existing));
      }
    } catch {}
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
          background: upvoted ? "rgba(58,125,86,0.15)" : "rgba(58,125,86,0.08)",
          border: upvoted ? "1px solid rgba(58,125,86,0.4)" : "1px solid rgba(58,125,86,0.15)",
          color: "#3a7d56",
        }}
      >
        <ChevronUp size={12} /> {upvotes.toLocaleString()}
      </button>
      <button
        onClick={handleSave}
        className="p-1.5 rounded-lg transition-all"
        style={{ color: saved ? "#EC4899" : "#4A4A68" }}
        title={saved ? "Unsave" : "Save"}
      >
        <Bookmark size={14} fill={saved ? "#EC4899" : "none"} />
      </button>
      <button
        onClick={handleShare}
        className="flex items-center gap-1 p-1.5 rounded-lg transition-all text-xs font-semibold"
        style={{ color: shared ? "#3a7d56" : "#4A4A68" }}
        title={shared ? "Link copied!" : "Copy link"}
      >
        <Share2 size={14} />
        {shared && <span style={{ fontSize: "10px" }}>Copied!</span>}
      </button>
    </div>
  );
}
