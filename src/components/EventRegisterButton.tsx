"use client";

import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

export default function EventRegisterButton({
  cta,
  price,
  eventTitle,
}: {
  cta: string;
  price: string;
  eventTitle: string;
}) {
  const key = `vine_event_${eventTitle.replace(/[^a-z0-9]/gi, "_").toLowerCase()}`;
  const [registered, setRegistered] = useState(() => {
    try { return localStorage.getItem(key) === "1"; } catch { return false; }
  });

  useEffect(() => {
    try { if (registered) localStorage.setItem(key, "1"); else localStorage.removeItem(key); } catch {}
  }, [registered, key]);

  if (registered) {
    return (
      <button
        className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
        style={{ background: "rgba(58,125,86,0.12)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.3)" }}
        onClick={() => setRegistered(false)}
        title={`Registered for ${eventTitle}`}
      >
        <CheckCircle2 size={12} />
        Registered!
      </button>
    );
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setRegistered(true);
      }}
      className="px-4 py-2 rounded-xl text-xs font-bold transition-all hover:opacity-90"
      style={{
        background:
          price === "Free"
            ? "linear-gradient(135deg, #3a7d56 0%, #B8960C 100%)"
            : "transparent",
        color: price === "Free" ? "#07070F" : "#3a7d56",
        border: price === "Free" ? "none" : "1px solid rgba(58,125,86,0.35)",
      }}
    >
      {cta}
    </button>
  );
}
