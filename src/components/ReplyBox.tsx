"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ReplyBox() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleReply = () => {
    if (!text.trim()) return;
    setSubmitted(true);
    setText("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(58,125,86,0.15)" }}>
      <p className="text-sm font-bold mb-3" style={{ color: "#F2F2F8" }}>Join the conversation</p>
      {submitted ? (
        <div className="flex items-center gap-2 py-3 px-4 rounded-xl" style={{ background: "rgba(58,125,86,0.08)", border: "1px solid rgba(58,125,86,0.2)" }}>
          <CheckCircle2 size={16} style={{ color: "#3a7d56" }} />
          <p className="text-sm font-semibold" style={{ color: "#3a7d56" }}>Reply posted! Your voice matters here.</p>
        </div>
      ) : (
        <>
          <textarea
            rows={4}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Share your thoughts, Scripture, or experience..."
            className="w-full rounded-xl p-4 text-sm resize-none outline-none mb-3"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
          />
          <div className="flex items-center justify-between">
            <p className="text-xs" style={{ color: "#4A4A68" }}>Be kind, be honest. Ephesians 4:29.</p>
            <button
              onClick={handleReply}
              disabled={!text.trim()}
              className="px-5 py-2 rounded-xl font-bold text-sm text-black"
              style={{
                background: "linear-gradient(135deg, #3a7d56, #3a7d56)",
                opacity: text.trim() ? 1 : 0.4,
                cursor: text.trim() ? "pointer" : "not-allowed",
              }}
            >
              Reply
            </button>
          </div>
        </>
      )}
    </div>
  );
}
