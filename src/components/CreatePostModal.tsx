"use client";

import { useState } from "react";
import { X, Plus, ArrowRight, CheckCircle2 } from "lucide-react";

const hubs = [
  "r/FaithAndDoubt", "r/Theology", "r/MentalHealth", "r/YoungAdults",
  "r/ChristianParenting", "r/FaithAndCareer", "r/Prayer", "r/Marriage",
];

interface CreatePostModalProps {
  label?: string;
  variant?: "gold" | "outline";
}

export default function CreatePostModal({ label = "Create Post", variant = "gold" }: CreatePostModalProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [hub, setHub] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!title.trim() || !body.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
      setTitle("");
      setBody("");
      setHub("");
    }, 2500);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`w-full py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${variant === "gold" ? "btn-gold" : "btn-outline-gold"}`}
      >
        <Plus size={14} />
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
          onClick={e => e.target === e.currentTarget && setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-3xl overflow-hidden relative"
            style={{ background: "#0E0E1A", border: "1px solid rgba(58,125,86,0.15)", boxShadow: "0 40px 80px rgba(0,0,0,0.8)" }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-black" style={{ color: "#F2F2F8" }}>Create a Post</h2>
                <button onClick={() => setOpen(false)} style={{ color: "#6A6A88" }}>
                  <X size={18} />
                </button>
              </div>

              {submitted ? (
                <div className="py-8 text-center">
                  <CheckCircle2 size={40} className="mx-auto mb-3" style={{ color: "#3a7d56" }} />
                  <p className="text-base font-bold" style={{ color: "#F2F2F8" }}>Post submitted!</p>
                  <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>Your post is now live in the community.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <select
                    value={hub}
                    onChange={e => setHub(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: hub ? "#F2F2F8" : "#6A6A88" }}
                  >
                    <option value="">Select a hub...</option>
                    {hubs.map(h => <option key={h} value={h} style={{ background: "#0E0E1A" }}>{h}</option>)}
                  </select>

                  <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Post title..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />

                  <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder="Share your thoughts, question, or testimony..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8", lineHeight: 1.6 }}
                  />

                  <div className="flex gap-3">
                    <button
                      onClick={handleSubmit}
                      disabled={!title.trim() || !body.trim()}
                      className="btn-gold flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 group"
                      style={!title.trim() || !body.trim() ? { opacity: 0.5, cursor: "not-allowed" } : {}}
                    >
                      Post <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="px-5 py-3 rounded-xl text-sm font-semibold"
                      style={{ border: "1px solid rgba(255,255,255,0.08)", color: "#8A8AA8" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
