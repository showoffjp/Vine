"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface JoinGroupButtonProps {
  groupId: string;
  color?: string;
}

export default function JoinGroupButton({ groupId, color = "#00FF88" }: JoinGroupButtonProps) {
  const [joined, setJoined] = useState(false);

  return (
    <button
      onClick={() => setJoined(v => !v)}
      className="px-6 py-2.5 rounded-xl font-bold text-sm shrink-0 flex items-center gap-2 transition-all"
      style={joined ? {
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "#8A8AA8",
      } : {
        background: "linear-gradient(135deg, #00FF88, #00BB55)",
        color: "#000",
      }}
    >
      {joined ? <><Check size={14} /> Joined</> : "Join Group"}
    </button>
  );
}
