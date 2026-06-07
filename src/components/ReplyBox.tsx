"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface SavedReply {
  id: number;
  text: string;
  time: string;
}

export default function ReplyBox({ discussionId }: { discussionId?: string }) {
  const storageKey = discussionId ? `vine_discussion_replies_${discussionId}` : null;

  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [savedReplies, setSavedReplies] = useState<SavedReply[]>(() => {
    if (!storageKey) return [];
    try { const s = localStorage.getItem(storageKey); return s ? JSON.parse(s) : []; } catch { return []; }
  });

  const handleReply = () => {
    if (!text.trim()) return;
    const newReply: SavedReply = { id: Date.now(), text: text.trim(), time: "Just now" };
    const updated = [...savedReplies, newReply];
    setSavedReplies(updated);
    if (storageKey) {
      try { localStorage.setItem(storageKey, JSON.stringify(updated)); } catch {}
    }
    setSubmitted(true);
    setText("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {savedReplies.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3a7d56" }}>Your Replies</p>
          {savedReplies.map((r) => (
            <div key={r.id} className="rounded-xl p-4 mb-2" style={{ background: "rgba(58,125,86,0.05)", border: "1px solid rgba(58,125,86,0.15)" }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold" style={{ color: "#3a7d56" }}>You · {r.time}</span>
                <button type="button"
                  onClick={() => {
                    const updated = savedReplies.filter((x) => x.id !== r.id);
                    setSavedReplies(updated);
                    if (storageKey) { try { localStorage.setItem(storageKey, JSON.stringify(updated)); } catch {} }
                  }}
                  style={{ color: "#4A4A68", fontSize: 11, cursor: "pointer", background: "none", border: "none" }}
                >✕</button>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>{r.text}</p>
            </div>
          ))}
        </div>
      )}
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
                type="button"
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
    </div>
  );
}
