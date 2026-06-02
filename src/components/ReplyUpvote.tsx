"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ReplyUpvote({ initialCount, size = 11 }: { initialCount: number; size?: number }) {
  const [upvoted, setUpvoted] = useState(false);
  const [count, setCount] = useState(initialCount);

  const toggle = () => {
    if (upvoted) {
      setCount((v) => v - 1);
    } else {
      setCount((v) => v + 1);
    }
    setUpvoted((v) => !v);
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg shrink-0 transition-all"
      style={{
        background: upvoted ? "rgba(58,125,86,0.12)" : "rgba(255,255,255,0.04)",
        color: upvoted ? "#3a7d56" : "#6A6A88",
        border: upvoted ? "1px solid rgba(58,125,86,0.25)" : "none",
      }}
    >
      <ChevronUp size={size} /> {count.toLocaleString()}
    </button>
  );
}
