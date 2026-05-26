"use client";

import { useState } from "react";
import { X, Sparkles } from "lucide-react";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="relative flex items-center justify-center gap-3 px-4 py-2.5 text-sm"
      style={{
        background: "linear-gradient(90deg, rgba(107,79,187,0.3) 0%, rgba(0,255,136,0.15) 50%, rgba(107,79,187,0.3) 100%)",
        borderBottom: "1px solid rgba(0,255,136,0.12)",
      }}
    >
      <Sparkles size={14} style={{ color: "#00FF88" }} />
      <span style={{ color: "#C0C0D8" }}>
        <span className="font-bold" style={{ color: "#00FF88" }}>Vine Beta is live.</span>{" "}
        Join early and shape the future of Christian community online.{" "}
        <a href="#join" className="underline font-semibold" style={{ color: "#44FFAA" }}>
          Join free →
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-0.5 rounded"
        style={{ color: "#6A6A88" }}
      >
        <X size={14} />
      </button>
    </div>
  );
}
