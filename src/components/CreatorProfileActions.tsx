"use client";

import { useState } from "react";
import { Heart, Share2 } from "lucide-react";

export default function CreatorProfileActions({ accent }: { accent: string }) {
  const [following, setFollowing] = useState(false);
  const [shared, setShared] = useState(false);

  return (
    <div className="flex gap-3 flex-shrink-0 pb-1">
      <button
        onClick={() => setFollowing((v) => !v)}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
        style={{
          background: following
            ? "transparent"
            : `linear-gradient(135deg, ${accent} 0%, ${accent}BB 100%)`,
          color: following ? accent : "#07070F",
          border: following ? `1px solid ${accent}55` : "none",
        }}
      >
        <Heart size={14} fill={following ? accent : "none"} />
        {following ? "Following" : "Follow"}
      </button>
      <button
        onClick={() => { setShared(true); setTimeout(() => setShared(false), 2000); }}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all"
        style={{
          background: shared ? `${accent}15` : "transparent",
          color: accent,
          border: `1px solid ${accent}55`,
        }}
      >
        <Share2 size={14} /> {shared ? "Copied!" : "Share"}
      </button>
    </div>
  );
}

export function CreatorFollowSidebar({ accent, followers }: { accent: string; followers: string }) {
  const [following, setFollowing] = useState(false);

  return (
    <>
      <p className="text-xs mb-4" style={{ color: "#6A6A88" }}>
        {followers} followers and growing
      </p>
      <button
        onClick={() => setFollowing((v) => !v)}
        className="w-full py-2.5 rounded-xl font-bold text-sm transition-all"
        style={{
          background: following ? "transparent" : `linear-gradient(135deg, ${accent} 0%, ${accent}BB 100%)`,
          color: following ? accent : "#07070F",
          border: following ? `1px solid ${accent}55` : "none",
        }}
      >
        {following ? "✓ Following" : "Follow Creator"}
      </button>
    </>
  );
}
