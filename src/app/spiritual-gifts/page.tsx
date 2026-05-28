"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ChevronRight,
  RotateCcw,
  BookOpen,
  Heart,
  Zap,
  Users,
  Megaphone,
  Shield,
  Lightbulb,
  Music,
  Globe,
} from "lucide-react";

const GIFTS = [
  {
    id: "teaching",
    name: "Teaching",
    icon: BookOpen,
    color: "#3B82F6",
    verse: "Romans 12:7",
    description: "You communicate biblical truth in a way that brings clarity and growth. People learn deep things quickly when you explain them.",
    deployments: ["Lead Bible study", "Write devotionals", "Disciple one-on-one", "Create resources"],
  },
  {
    id: "mercy",
    name: "Mercy",
    icon: Heart,
    color: "#EC4899",
    verse: "Romans 12:8",
    description: "You feel deeply for those who suffer and are compelled to help — not out of duty, but out of genuine love. You bring comfort just by showing up.",
    deployments: ["Hospital/prison ministry", "Grief support", "Counseling", "Crisis care"],
  },
  {
    id: "evangelism",
    name: "Evangelism",
    icon: Megaphone,
    color: "#F59E0B",
    verse: "Ephesians 4:11",
    description: "You naturally turn conversations toward the Gospel and genuinely enjoy sharing your faith with those who don't know Jesus yet.",
    deployments: ["Street evangelism", "Workplace witness", "Online outreach", "Missions trips"],
  },
  {
    id: "leadership",
    name: "Leadership",
    icon: Users,
    color: "#00FF88",
    verse: "Romans 12:8",
    description: "You can cast vision, organize people around it, and motivate them toward a goal. Others naturally follow when you lead.",
    deployments: ["Lead a ministry team", "Start a group", "Church planting", "Community organizing"],
  },
  {
    id: "prophecy",
    name: "Prophecy",
    icon: Zap,
    color: "#8B5CF6",
    verse: "1 Corinthians 12:10",
    description: "You speak truth boldly, often with a sense of spiritual urgency. You can read what God is doing and articulate it in ways that challenge and clarify.",
    deployments: ["Intercession team", "Preaching", "Speaking truth in hard situations", "Worship leadership"],
  },
  {
    id: "helps",
    name: "Helps / Service",
    icon: Shield,
    color: "#10B981",
    verse: "1 Corinthians 12:28",
    description: "You find deep satisfaction in meeting practical needs and supporting the work of others behind the scenes. No task is beneath you.",
    deployments: ["Behind-the-scenes serving", "Logistics & setup", "Admin support", "Practical care"],
  },
  {
    id: "wisdom",
    name: "Wisdom",
    icon: Lightbulb,
    color: "#F59E0B",
    verse: "1 Corinthians 12:8",
    description: "You consistently give counsel that turns out to be sound. People seek you out for difficult decisions. You see what others miss.",
    deployments: ["Counseling", "Elder/deacon ministry", "Mentorship", "Strategic planning"],
  },
  {
    id: "worship",
    name: "Worship",
    icon: Music,
    color: "#EC4899",
    verse: "Psalm 150",
    description: "You have a supernatural ability to usher people into the presence of God through music, prayer, or creative expression.",
    deployments: ["Worship team", "Creative arts ministry", "Songwriting", "Prayer room leading"],
  },
  {
    id: "missions",
    name: "Apostleship",
    icon: Globe,
    color: "#00FF88",
    verse: "1 Corinthians 12:28",
    description: "You are drawn to new frontiers — planting churches, starting movements, or bringing the Gospel to unreached people. You thrive in uncharted territory.",
    deployments: ["Church planting", "Missions", "Pioneering new ministries", "Cross-cultural outreach"],
  },
];

const QUESTIONS: { q: string; giftIds: string[] }[] = [
  { q: "I love explaining Scripture in a way that helps people understand it deeply.", giftIds: ["teaching", "wisdom"] },
  { q: "When someone is hurting, I feel a strong pull to drop everything and be with them.", giftIds: ["mercy", "helps"] },
  { q: "I naturally bring conversations around to faith and the Gospel.", giftIds: ["evangelism", "missions"] },
  { q: "People often look to me to organize and guide a group toward a goal.", giftIds: ["leadership", "missions"] },
  { q: "I feel compelled to speak truth even when it's uncomfortable.", giftIds: ["prophecy", "evangelism"] },
  { q: "I find great satisfaction in serving behind the scenes without recognition.", giftIds: ["helps", "mercy"] },
  { q: "Friends often come to me when they need to make a hard decision.", giftIds: ["wisdom", "teaching"] },
  { q: "I feel most alive when I'm worshiping God through music or creative expression.", giftIds: ["worship"] },
  { q: "I'm drawn to starting new ministries or going where the Gospel hasn't gone.", giftIds: ["missions", "evangelism"] },
  { q: "I can take a complex theological idea and make it clear to anyone.", giftIds: ["teaching"] },
  { q: "I feel genuine joy when I'm caring for someone who is sick, grieving, or alone.", giftIds: ["mercy", "helps"] },
  { q: "I regularly share my faith with coworkers, neighbors, or strangers.", giftIds: ["evangelism"] },
  { q: "I can motivate and unite a group around a vision effectively.", giftIds: ["leadership"] },
  { q: "I often sense what's spiritually happening in a situation before others do.", giftIds: ["prophecy", "wisdom"] },
  { q: "Practical service — setup, logistics, behind-the-scenes work — is genuinely fulfilling to me.", giftIds: ["helps"] },
  { q: "My counsel has a way of bringing clarity and peace to complex situations.", giftIds: ["wisdom"] },
  { q: "I feel God's presence most tangibly when I'm worshiping.", giftIds: ["worship"] },
  { q: "I dream about seeing the Gospel spread into unreached communities or nations.", giftIds: ["missions", "leadership"] },
  { q: "I find it easy to connect Scripture to everyday life in a way that's practical.", giftIds: ["teaching", "wisdom"] },
  { q: "I carry other people's pain deeply — almost feeling it with them.", giftIds: ["mercy"] },
];

type Answer = 0 | 1 | 2 | 3 | 4;

const scaleLabels: Record<Answer, string> = {
  0: "Strongly disagree",
  1: "Somewhat disagree",
  2: "Neutral",
  3: "Somewhat agree",
  4: "Strongly agree",
};

function computeScores(answers: (Answer | null)[]): Record<string, number> {
  const scores: Record<string, number> = {};
  GIFTS.forEach((g) => (scores[g.id] = 0));

  QUESTIONS.forEach((q, i) => {
    const ans = answers[i];
    if (ans == null) return;
    q.giftIds.forEach((gid) => {
      scores[gid] = (scores[gid] ?? 0) + ans;
    });
  });

  return scores;
}

function topGifts(scores: Record<string, number>, n = 3): string[] {
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([id]) => id);
}

export default function SpiritualGiftsPage() {
  const [answers, setAnswers] = useState<(Answer | null)[]>(() => {
    try {
      const s = localStorage.getItem("vine_sg_answers");
      return s ? (JSON.parse(s) as (Answer | null)[]) : Array(QUESTIONS.length).fill(null);
    } catch {
      return Array(QUESTIONS.length).fill(null);
    }
  });
  const [currentQ, setCurrentQ] = useState(() => {
    try { return parseInt(localStorage.getItem("vine_sg_current") ?? "0", 10); } catch { return 0; }
  });
  const [showResults, setShowResults] = useState(() => {
    try { return localStorage.getItem("vine_sg_done") === "true"; } catch { return false; }
  });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    try { localStorage.setItem("vine_sg_answers", JSON.stringify(answers)); } catch {}
  }, [answers]);

  useEffect(() => {
    try { localStorage.setItem("vine_sg_current", String(currentQ)); } catch {}
  }, [currentQ]);

  useEffect(() => {
    try { localStorage.setItem("vine_sg_done", String(showResults)); } catch {}
  }, [showResults]);

  const answered = answers.filter((a) => a !== null).length;
  const progress = Math.round((answered / QUESTIONS.length) * 100);

  const setAnswer = (q: number, v: Answer) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[q] = v;
      return next;
    });
    if (q === currentQ && q < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQ(q + 1), 300);
    }
  };

  const scores = computeScores(answers);
  const top = topGifts(scores);
  const maxScore = Math.max(...Object.values(scores));
  const primaryGift = GIFTS.find((g) => g.id === top[0]);

  const reset = () => {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setCurrentQ(0);
    setShowResults(false);
    try {
      localStorage.removeItem("vine_sg_answers");
      localStorage.removeItem("vine_sg_current");
      localStorage.removeItem("vine_sg_done");
    } catch {}
  };

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles size={18} style={{ color: "#00FF88" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Spiritual Gifts</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-3">
              Discover Your{" "}
              <span style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Spiritual Gifts
              </span>
            </h1>
            <p className="text-base" style={{ color: "#6A6A88" }}>
              20 questions · ~5 minutes · Based on Romans 12, 1 Corinthians 12, and Ephesians 4
            </p>
          </div>

          {!showResults ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs mb-2" style={{ color: "#4A4A68" }}>
                  <span>Question {currentQ + 1} of {QUESTIONS.length}</span>
                  <span>{progress}% complete</span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: "#1E1E32" }}>
                  <div
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%`, background: "linear-gradient(90deg, #00FF88, #6B4FBB)" }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <div
                className="rounded-2xl p-8 mb-6"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <p className="text-lg font-bold leading-relaxed mb-8 text-center" style={{ color: "#F2F2F8" }}>
                  &ldquo;{QUESTIONS[currentQ].q}&rdquo;
                </p>

                <div className="space-y-3">
                  {([0, 1, 2, 3, 4] as Answer[]).map((v) => {
                    const selected = answers[currentQ] === v;
                    return (
                      <button
                        key={v}
                        onClick={() => setAnswer(currentQ, v)}
                        className="w-full text-left px-5 py-3 rounded-xl font-medium text-sm transition-all"
                        style={{
                          background: selected ? "rgba(0,255,136,0.12)" : "rgba(255,255,255,0.03)",
                          border: `1px solid ${selected ? "rgba(0,255,136,0.4)" : "rgba(255,255,255,0.06)"}`,
                          color: selected ? "#00FF88" : "#8A8AA8",
                        }}
                        onMouseEnter={(e) => {
                          if (!selected) {
                            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                            e.currentTarget.style.color = "#C0C0D8";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!selected) {
                            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                            e.currentTarget.style.color = "#8A8AA8";
                          }
                        }}
                      >
                        <span className="font-bold mr-3" style={{ color: selected ? "#00FF88" : "#4A4A68" }}>
                          {v === 0 ? "①" : v === 1 ? "②" : v === 2 ? "③" : v === 3 ? "④" : "⑤"}
                        </span>
                        {scaleLabels[v]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setCurrentQ((q) => Math.max(0, q - 1))}
                  disabled={currentQ === 0}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{ background: "#12121F", border: "1px solid #1E1E32", color: currentQ === 0 ? "#3A3A58" : "#8A8AA8" }}
                >
                  ← Previous
                </button>

                <div className="flex gap-1 flex-wrap justify-center">
                  {QUESTIONS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentQ(i)}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{
                        background: i === currentQ ? "#00FF88" : answers[i] !== null ? "#3A5A3A" : "#1E1E32",
                        transform: i === currentQ ? "scale(1.5)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>

                {currentQ < QUESTIONS.length - 1 ? (
                  <button
                    onClick={() => setCurrentQ((q) => Math.min(QUESTIONS.length - 1, q + 1))}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", color: "#8A8AA8" }}
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={() => answered >= 15 && setShowResults(true)}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-black transition-all"
                    style={{
                      background: answered >= 15 ? "linear-gradient(135deg, #00FF88, #00BB55)" : "#1E1E32",
                      color: answered >= 15 ? "#07070F" : "#4A4A68",
                    }}
                  >
                    See My Results →
                  </button>
                )}
              </div>

              {answered >= 15 && answered < QUESTIONS.length && (
                <p className="text-center text-xs mt-4" style={{ color: "#4A4A68" }}>
                  {QUESTIONS.length - answered} question{QUESTIONS.length - answered !== 1 ? "s" : ""} left — or see results now
                </p>
              )}
            </div>
          ) : (
            <div>
              {/* Results Header */}
              {primaryGift && (
                <div
                  className="rounded-2xl p-8 mb-6 text-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${primaryGift.color}12 0%, rgba(107,79,187,0.08) 100%)`,
                    border: `1px solid ${primaryGift.color}30`,
                  }}
                >
                  <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at 70% 30%, ${primaryGift.color}, transparent 60%)` }} />
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ background: `${primaryGift.color}20` }}
                    >
                      <primaryGift.icon size={28} style={{ color: primaryGift.color }} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primaryGift.color }}>Your Primary Gift</p>
                    <h2 className="text-3xl font-black mb-3" style={{ color: "#F2F2F8" }}>{primaryGift.name}</h2>
                    <p className="text-base leading-relaxed mb-4 max-w-lg mx-auto" style={{ color: "#8A8AA8" }}>
                      {primaryGift.description}
                    </p>
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: `${primaryGift.color}15`, color: primaryGift.color, border: `1px solid ${primaryGift.color}30` }}
                    >
                      📜 {primaryGift.verse}
                    </span>
                  </div>
                </div>
              )}

              {/* Top 3 */}
              <h3 className="text-base font-black mb-4" style={{ color: "#F2F2F8" }}>Your Top 3 Gifts</h3>
              <div className="space-y-3 mb-8">
                {top.map((gid, rank) => {
                  const gift = GIFTS.find((g) => g.id === gid)!;
                  const score = scores[gid];
                  const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
                  const Icon = gift.icon;
                  return (
                    <div
                      key={gid}
                      className="rounded-xl p-5"
                      style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${gift.color}20` }}
                        >
                          <Icon size={18} style={{ color: gift.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="font-black" style={{ color: "#F2F2F8" }}>{gift.name}</span>
                              {rank === 0 && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(0,255,136,0.12)", color: "#00FF88" }}>
                                  Primary
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-bold" style={{ color: gift.color }}>{pct}%</span>
                          </div>
                          <div className="h-1.5 rounded-full" style={{ background: "#1E1E32" }}>
                            <div
                              className="h-1.5 rounded-full transition-all duration-700"
                              style={{ width: `${pct}%`, background: gift.color }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* How to deploy */}
              {primaryGift && (
                <div className="rounded-2xl p-6 mb-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                  <h3 className="font-black mb-4" style={{ color: "#F2F2F8" }}>How to Deploy Your Gift</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {primaryGift.deployments.map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl"
                        style={{ background: `${primaryGift.color}08`, border: `1px solid ${primaryGift.color}15` }}
                      >
                        <ChevronRight size={14} style={{ color: primaryGift.color }} />
                        <span className="text-sm font-semibold" style={{ color: "#C0C0D8" }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* All gifts score chart */}
              <div className="rounded-2xl p-6 mb-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-black" style={{ color: "#F2F2F8" }}>Full Gift Profile</h3>
                  <div className="flex gap-2">
                    {GIFTS.map((g, i) => (
                      <button
                        key={g.id}
                        onClick={() => setActiveTab(i)}
                        className="w-2 h-2 rounded-full transition-all"
                        style={{ background: activeTab === i ? g.color : "#1E1E32" }}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {GIFTS.map((g) => {
                    const score = scores[g.id];
                    const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
                    const Icon = g.icon;
                    return (
                      <div key={g.id} className="flex items-center gap-3">
                        <Icon size={13} style={{ color: g.color, flexShrink: 0 }} />
                        <span className="text-xs w-24 shrink-0" style={{ color: "#6A6A88" }}>{g.name}</span>
                        <div className="flex-1 h-1 rounded-full" style={{ background: "#1E1E32" }}>
                          <div
                            className="h-1 rounded-full transition-all duration-700"
                            style={{ width: `${pct}%`, background: g.color }}
                          />
                        </div>
                        <span className="text-xs w-8 text-right shrink-0" style={{ color: "#4A4A68" }}>{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="/groups"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-black"
                  style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
                >
                  Find a Ministry That Fits <ChevronRight size={14} />
                </a>
                <a
                  href="/verse-memory"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#C0C0D8" }}
                >
                  <BookOpen size={14} /> Memorize Key Verses
                </a>
              </div>

              <button
                onClick={reset}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{ color: "#4A4A68", border: "1px solid #1E1E32" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#8A8AA8"; e.currentTarget.style.borderColor = "#2E2E48"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#4A4A68"; e.currentTarget.style.borderColor = "#1E1E32"; }}
              >
                <RotateCcw size={14} /> Retake Assessment
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
