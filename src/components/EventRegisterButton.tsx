"use client";

import { useState } from "react";
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
  const [registered, setRegistered] = useState(false);

  if (registered) {
    return (
      <button
        className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
        style={{ background: "rgba(0,255,136,0.12)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.3)" }}
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
            ? "linear-gradient(135deg, #00FF88 0%, #B8960C 100%)"
            : "transparent",
        color: price === "Free" ? "#07070F" : "#00FF88",
        border: price === "Free" ? "none" : "1px solid rgba(0,255,136,0.35)",
      }}
    >
      {cta}
    </button>
  );
}
