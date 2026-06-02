"use client";

import { useState } from "react";

export default function TopicFollowButton() {
  const [following, setFollowing] = useState(false);

  return (
    <button
      onClick={() => setFollowing((v) => !v)}
      className="shrink-0 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
      style={{
        background: following ? "transparent" : "linear-gradient(135deg, #3a7d56, #3a7d56)",
        color: following ? "#3a7d56" : "#07070F",
        border: following ? "1px solid rgba(58,125,86,0.4)" : "none",
      }}
    >
      {following ? "✓ Following" : "Follow Topic"}
    </button>
  );
}
