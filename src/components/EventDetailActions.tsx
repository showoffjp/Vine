"use client";

import { useState } from "react";
import { Heart, Share2, CheckCircle2 } from "lucide-react";

export default function EventDetailActions({
  price,
  accentColor,
  secondaryColor,
  eventTitle,
}: {
  price: string;
  accentColor: string;
  secondaryColor: string;
  eventTitle: string;
}) {
  const [registered, setRegistered] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  const handleShare = () => {
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={() => setRegistered((v) => !v)}
        className="w-full py-3.5 rounded-xl text-sm font-black mt-2 transition-all"
        style={{
          background: registered
            ? "rgba(58,125,86,0.15)"
            : price === "Free"
            ? `linear-gradient(135deg, ${accentColor} 0%, ${secondaryColor} 100%)`
            : accentColor,
          color: registered ? "#3a7d56" : "#07070F",
          border: registered ? "1px solid rgba(58,125,86,0.4)" : "none",
        }}
      >
        {registered ? (
          <span className="flex items-center justify-center gap-2">
            <CheckCircle2 size={15} /> Registered!
          </span>
        ) : price === "Free" ? (
          "Register Free"
        ) : (
          "Get Tickets"
        )}
      </button>

      <div className="flex gap-2">
        <button
          onClick={() => setSaved((v) => !v)}
          className="flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
          style={{
            background: saved ? "rgba(236,72,153,0.12)" : "rgba(255,255,255,0.04)",
            color: saved ? "#EC4899" : "#8A8AA8",
            border: saved ? "1px solid rgba(236,72,153,0.3)" : "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Heart size={12} fill={saved ? "#EC4899" : "none"} /> {saved ? "Saved" : "Save"}
        </button>
        <button
          onClick={handleShare}
          className="flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
          style={{
            background: shared ? "rgba(58,125,86,0.08)" : "rgba(255,255,255,0.04)",
            color: shared ? "#3a7d56" : "#8A8AA8",
            border: shared ? "1px solid rgba(58,125,86,0.2)" : "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Share2 size={12} /> {shared ? "Copied!" : "Share"}
        </button>
      </div>
    </div>
  );
}
