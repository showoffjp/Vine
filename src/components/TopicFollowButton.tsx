"use client";

import { useState } from "react";

export default function TopicFollowButton() {
  const [following, setFollowing] = useState(false);

  return (
    <button
      onClick={() => setFollowing((v) => !v)}
      className="shrink-0 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
      style={{
        background: following ? "transparent" : "linear-gradient(135deg, #00FF88, #00BB55)",
        color: following ? "#00FF88" : "#07070F",
        border: following ? "1px solid rgba(0,255,136,0.4)" : "none",
      }}
    >
      {following ? "✓ Following" : "Follow Topic"}
    </button>
  );
}
