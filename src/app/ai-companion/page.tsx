"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Send,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Heart,
  HelpCircle,
  Cross,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  streaming?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SUGGESTED_QUESTIONS = [
  { category: "Scripture", icon: BookOpen, questions: [
    "Explain Romans 8:28 in depth",
    "What is the meaning of John 3:16?",
    "Walk me through the Sermon on the Mount",
    "What is 1 Corinthians 13 about?",
  ]},
  { category: "Life & Faith", icon: Heart, questions: [
    "What does the Bible say about anxiety?",
    "How do I forgive someone who hurt me?",
    "What does Scripture say about purpose?",
    "What does the Bible say about fasting?",
  ]},
  { category: "Theology", icon: Cross, questions: [
    "Who was the Apostle Paul?",
    "What is the Trinity?",
    "What is the evidence for the resurrection?",
    "What is the armor of God in Ephesians 6?",
  ]},
];

const ALL_SUGGESTED = SUGGESTED_QUESTIONS.flatMap((c) => c.questions);

const STARTER_CARDS = [
  { label: "Explain Romans 8:28", icon: "📖" },
  { label: "What does the Bible say about anxiety?", icon: "🕊️" },
  { label: "Who was the Apostle Paul?", icon: "✝️" },
  { label: "How do I start reading the Bible?", icon: "🌱" },
];

const DROPDOWN_QUESTIONS = [
  "What is the fruit of the Spirit?",
  "Explain the Lord's Prayer",
  "What does grace mean in the Bible?",
  "How do I pray effectively?",
  "What does the Bible say about forgiveness?",
  "Who wrote the book of Psalms?",
  "What is the evidence for the resurrection?",
  "What does the armor of God mean?",
  "What does the Bible say about fasting?",
  "Explain 1 Corinthians 13 on love",
];

function makeWelcomeMessage(): Message {
  return {
    id: "welcome",
    role: "assistant",
    content:
      "Peace be with you! I'm your AI Bible companion. Ask me anything — a verse you want to understand, a topic you're wrestling with, or wisdom for something you're going through.",
    timestamp: new Date(),
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 0" }}>
      {/* Avatar */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #3a7d56, #6B4FBB)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: 14,
          fontWeight: 700,
          color: "#07070F",
        }}
      >
        V
      </div>
      <div
        style={{
          background: "#12121F",
          border: "1px solid #1E1E32",
          borderRadius: 18,
          borderBottomLeftRadius: 4,
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#3a7d56",
              animation: "dot-bounce 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isUser ? "row-reverse" : "row",
        gap: 12,
        padding: "6px 0",
        alignItems: "flex-end",
        animation: "fade-slide-up 0.3s ease-out both",
      }}
    >
      {/* Avatar */}
      {isUser ? (
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#1E1E32",
            border: "1px solid #2E2E4E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: 13,
            fontWeight: 700,
            color: "#8A8AA8",
          }}
        >
          Y
        </div>
      ) : (
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3a7d56, #6B4FBB)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: 14,
            fontWeight: 700,
            color: "#07070F",
          }}
        >
          V
        </div>
      )}

      {/* Bubble */}
      <div style={{ maxWidth: "72%", minWidth: 0 }}>
        {!isUser && (
          <div style={{ fontSize: 11, color: "#6A6A88", marginBottom: 4, paddingLeft: 2 }}>
            Vine AI
          </div>
        )}
        <div
          style={{
            background: isUser
              ? "linear-gradient(135deg, rgba(58,125,86,0.12), rgba(107,79,187,0.08))"
              : "#12121F",
            border: isUser
              ? "1px solid rgba(58,125,86,0.25)"
              : "1px solid #1E1E32",
            borderRadius: 18,
            borderBottomRightRadius: isUser ? 4 : 18,
            borderBottomLeftRadius: isUser ? 18 : 4,
            padding: "12px 16px",
            lineHeight: 1.65,
            fontSize: 15,
            color: "#F2F2F8",
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          {message.content}
          {message.streaming && (
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: 16,
                background: "#3a7d56",
                marginLeft: 2,
                verticalAlign: "text-bottom",
                animation: "cursor-blink 0.8s step-end infinite",
              }}
            />
          )}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#6A6A88",
            marginTop: 4,
            textAlign: isUser ? "right" : "left",
            paddingLeft: isUser ? 0 : 2,
            paddingRight: isUser ? 2 : 0,
          }}
        >
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AICompanionPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const s = localStorage.getItem("vine_ai_history");
      if (s) {
        const parsed = JSON.parse(s) as Message[];
        return parsed.map((m) => ({ ...m, timestamp: new Date(m.timestamp), streaming: false }));
      }
    } catch {}
    return [makeWelcomeMessage()];
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const userMessages = messages.filter((m) => m.role === "user");

  // Persist conversation history (skip streaming messages)
  useEffect(() => {
    const done = messages.filter((m) => !m.streaming);
    try { localStorage.setItem("vine_ai_history", JSON.stringify(done.slice(-40))); } catch {}
  }, [messages]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 140)}px`;
    }
  }, [input]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = {
      id: generateId(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };

    const assistantId = generateId();
    const assistantMsg: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
      streaming: true,
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const history = messages
        .filter((m) => m.id !== "welcome")
        .concat(userMsg)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/ai-companion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) throw new Error("Stream failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: accumulated, streaming: true }
              : m
          )
        );
      }

      // Mark streaming done
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, streaming: false } : m
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content:
                  "I'm sorry, I had trouble responding. Please try again in a moment.",
                streaming: false,
              }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, messages]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      <style>{`
        @keyframes dot-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fade-slide-up {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(58,125,86,0.3); }
          50% { box-shadow: 0 0 0 6px rgba(58,125,86,0); }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #07070F; }
        ::-webkit-scrollbar-thumb { background: #1E1E32; border-radius: 3px; }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#07070F" }}>
        <Navbar />
        <main>

        {/* ── Top bar ───────────────────────────────────────────────────────── */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 40,
            background: "rgba(7,7,15,0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #1E1E32",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <button type="button"
            onClick={() => router.back()}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#12121F",
              border: "1px solid #1E1E32",
              color: "#F2F2F8",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ArrowLeft size={18} />
          </button>

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <h1 style={{ fontSize: 18, fontWeight: 700, color: "#F2F2F8", margin: 0 }}>
                AI Bible Companion
              </h1>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#07070F",
                  background: "linear-gradient(135deg, #3a7d56, #00cc66)",
                  borderRadius: 20,
                  padding: "2px 10px",
                  letterSpacing: 0.3,
                }}
              >
                Powered by Vine AI
              </span>
            </div>
            <div style={{ fontSize: 12, color: "#6A6A88", marginTop: 1 }}>
              Always online · Grounded in Scripture
            </div>
          </div>

          {/* Clear history */}
          {messages.length > 1 && (
            <button type="button"
              onClick={() => {
                setMessages([makeWelcomeMessage()]);
                try { localStorage.removeItem("vine_ai_history"); } catch {}
              }}
              style={{
                fontSize: 11,
                color: "#6A6A88",
                background: "transparent",
                border: "1px solid #1E1E32",
                borderRadius: 8,
                padding: "6px 10px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Clear
            </button>
          )}

          {/* Dropdown button */}
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <button type="button"
              onClick={() => setShowDropdown((v) => !v)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: 10,
                color: "#F2F2F8",
                padding: "8px 14px",
                fontSize: 13,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              <HelpCircle size={15} style={{ color: "#3a7d56" }} />
              Suggested Questions
              {showDropdown ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: 14,
                  padding: 8,
                  width: 280,
                  zIndex: 100,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                }}
              >
                {DROPDOWN_QUESTIONS.map((q) => (
                  <button type="button"
                    key={q}
                    onClick={() => {
                      setInput(q);
                      setShowDropdown(false);
                      textareaRef.current?.focus();
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderRadius: 10,
                      padding: "10px 12px",
                      textAlign: "left",
                      color: "#F2F2F8",
                      fontSize: 13,
                      cursor: "pointer",
                      lineHeight: 1.4,
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1E1E32"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Main content area ─────────────────────────────────────────────── */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* Message area */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "24px 20px 20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ maxWidth: 720, width: "100%", margin: "0 auto", flex: 1 }}>
              {/* Messages */}
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}

              {/* Typing indicator */}
              {isLoading && messages[messages.length - 1]?.streaming === true && messages[messages.length - 1]?.content === "" && (
                <TypingIndicator />
              )}

              {/* Starter cards — shown when no user messages yet */}
              {userMessages.length === 0 && !isLoading && (
                <div style={{ marginTop: 32 }}>
                  <div style={{ fontSize: 13, color: "#6A6A88", marginBottom: 14, textAlign: "center" }}>
                    Or start with one of these
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 10,
                    }}
                  >
                    {STARTER_CARDS.map((card) => (
                      <button type="button"
                        key={card.label}
                        onClick={() => sendMessage(card.label)}
                        style={{
                          background: "#12121F",
                          border: "1px solid #1E1E32",
                          borderRadius: 14,
                          padding: "16px",
                          textAlign: "left",
                          cursor: "pointer",
                          transition: "border-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "#3a7d56";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "#1E1E32";
                        }}
                      >
                        <div style={{ fontSize: 22, marginBottom: 8 }}>{card.icon}</div>
                        <div style={{ fontSize: 13, color: "#F2F2F8", lineHeight: 1.4, fontWeight: 500 }}>
                          {card.label}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div style={{ textAlign: "center", marginTop: 14 }}>
                    <button type="button"
                      onClick={() => sendMessage(ALL_SUGGESTED[Math.floor(Math.random() * ALL_SUGGESTED.length)])}
                      style={{
                        background: "transparent",
                        border: "1px solid #1E1E32",
                        borderRadius: 20,
                        padding: "8px 18px",
                        color: "#8A8AA8",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.color = "#F2F2F8";
                        btn.style.borderColor = "rgba(58,125,86,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.color = "#8A8AA8";
                        btn.style.borderColor = "#1E1E32";
                      }}
                    >
                      🎲 Surprise me
                    </button>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>
          </div>

          {/* ── Desktop sidebar ─────────────────────────────────────────────── */}
          <aside
            style={{
              width: 280,
              borderLeft: "1px solid #1E1E32",
              padding: "24px 16px",
              overflowY: "auto",
              flexShrink: 0,
              display: "none", // hidden on mobile by default; enabled via media-aware wrapper below
            }}
            className="vine-sidebar"
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: "#3a7d56", marginBottom: 16, letterSpacing: 0.5, textTransform: "uppercase" }}>
              Try asking...
            </div>
            {SUGGESTED_QUESTIONS.map((cat) => (
              <div key={cat.category} style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, color: "#6A6A88", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>
                  {cat.category}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {cat.questions.map((q) => (
                    <button type="button"
                      key={q}
                      onClick={() => {
                        setInput(q);
                        textareaRef.current?.focus();
                      }}
                      style={{
                        background: "#12121F",
                        border: "1px solid #1E1E32",
                        borderRadius: 20,
                        padding: "8px 14px",
                        textAlign: "left",
                        color: "#8A8AA8",
                        fontSize: 12,
                        cursor: "pointer",
                        lineHeight: 1.4,
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.color = "#F2F2F8";
                        btn.style.borderColor = "rgba(58,125,86,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.color = "#8A8AA8";
                        btn.style.borderColor = "#1E1E32";
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </aside>
        </div>

        {/* ── Bottom input ──────────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid #1E1E32",
            background: "rgba(7,7,15,0.98)",
            backdropFilter: "blur(12px)",
            padding: "14px 20px 20px",
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 10,
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: 18,
                padding: "8px 8px 8px 16px",
                transition: "border-color 0.2s",
              }}
              onFocusCapture={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(58,125,86,0.4)";
              }}
              onBlurCapture={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1E1E32";
              }}
            >
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Ask about any verse, topic, or question..." placeholder="Ask about any verse, topic, or question..."
                rows={1}
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  resize: "none",
                  color: "#F2F2F8",
                  fontSize: 15,
                  lineHeight: 1.6,
                  fontFamily: "inherit",
                  padding: "4px 0",
                  minHeight: 30,
                  maxHeight: 140,
                  overflowY: "auto",
                }}
              />
              <button type="button"
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background:
                    isLoading || !input.trim()
                      ? "#1E1E32"
                      : "linear-gradient(135deg, #3a7d56, #00cc66)",
                  border: "none",
                  color: isLoading || !input.trim() ? "#6A6A88" : "#07070F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
                  flexShrink: 0,
                  transition: "all 0.2s",
                }}
              >
                <Send size={16} />
              </button>
            </div>

            {/* Character count + hint */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 8,
                padding: "0 4px",
              }}
            >
              <span style={{ fontSize: 11, color: "#6A6A88" }}>
                Enter to send · Shift+Enter for new line
              </span>
              {input.length > 200 && (
                <span
                  style={{
                    fontSize: 11,
                    color: input.length > 1000 ? "#ef4444" : "#8A8AA8",
                  }}
                >
                  {input.length} chars
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar show on desktop */}
        <style>{`
          @media (min-width: 1024px) {
            .vine-sidebar { display: block !important; }
          }
        `}</style>

        </main>
        <Footer />
      </div>
    </>
  );
}
