"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

// Shared template for the "tabbed deep dive" guide design: hero with optional
// Key Verse box; Overview / Themes / Verse / Application tabs; accordions for
// themes and verses; reflection questions and a closing prayer. Preserves the
// original per-page layout exactly.
export const TABBED_COLORS = {
  BG: "#07070F",
  CARD: "#12121F",
  BORDER: "#1E1E32",
  TEXT: "#F2F2F8",
  MUTED: "#9898B3",
  GREEN: "#3a7d56",
  PURPLE: "#6B4FBB",
  GOLD: "#D97706",
  TEAL: "#0D9488",
  ROSE: "#E11D48",
};

const { BG, CARD, BORDER, TEXT, MUTED, GOLD, PURPLE } = TABBED_COLORS;

export type OverviewBlock = { heading: string; body: string };
export type ThemeItem = { id: string; title: string; color: string; body: string };
export type VerseSection = { id: string; ref: string; label: string; body: string };
export type AppBlock = { heading: string; color: string; body: string };
export type TabbedVideo = { videoId: string; title: string };

export type TabbedGuideData = {
  accent: string;
  badge: string;
  title: string;
  intro: string;
  keyVerseLabel?: string;
  keyVerse?: string;
  overviewBlocks: OverviewBlock[];
  overviewClosingHeading?: string;
  overviewClosingBody?: string;
  themesHeading?: string;
  themeItems: ThemeItem[];
  verseHeading?: string;
  verseIntro?: string;
  verseSections: VerseSection[];
  applicationHeading?: string;
  applicationBlocks: AppBlock[];
  reflectionHeading?: string;
  reflectionQuestions?: string[];
  videoHeading?: string;
  videoIntro?: string;
  videos?: TabbedVideo[];
  closingTitle?: string;
  closingBody?: string;
};

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

export default function TabbedGuideTemplate({ data }: { data: TabbedGuideData }) {
  const ACCENT = data.accent;
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);
  const hasVideos = !!(data.videos && data.videos.length > 0);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: data.badge }} />
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }} dangerouslySetInnerHTML={{ __html: data.title }} />
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: data.intro }} />
          {data.keyVerseLabel && data.keyVerse && (
            <div style={{ background: CARD, border: `1px solid ${ACCENT}55`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <div style={{ color: ACCENT, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: data.keyVerseLabel }} />
              <p style={{ margin: 0, fontSize: "1.15rem", lineHeight: 1.7, fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: data.keyVerse }} />
            </div>
          )}
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{ padding: "8px 18px", borderRadius: 8, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: tab === t ? "#fff" : MUTED, cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "inherit", transition: "all 0.15s" }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {tab === "overview" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {data.overviewBlocks.map((b, i) => (
              <div key={i}>
                <h2 style={{ fontSize: "1.45rem", fontWeight: 700, margin: "0 0 0.75rem", color: TEXT }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
              </div>
            ))}
            {data.overviewClosingHeading && data.overviewClosingBody && (
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: data.overviewClosingHeading }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: data.overviewClosingBody }} />
              </div>
            )}
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.5rem" }} dangerouslySetInnerHTML={{ __html: data.themesHeading || "Key Themes" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {data.themeItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button onClick={() => toggle(item.id)} style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: "1.1rem 1.4rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, color: TEXT, fontFamily: "inherit" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ fontSize: "1.1rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </span>
                    <span style={{ color: item.color, fontSize: 22, fontWeight: 400, lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: open === item.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 1.4rem 1.3rem", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.85, margin: "1rem 0 0" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: data.verseHeading || "Verse by Verse" }} />
            {data.verseIntro && (
              <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: data.verseIntro }} />
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {data.verseSections.map((v) => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${open === v.id ? ACCENT : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button onClick={() => toggle(v.id)} style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: "1.1rem 1.4rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, color: TEXT, fontFamily: "inherit" }}>
                    <span>
                      <span style={{ display: "block", color: ACCENT, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: v.ref }} />
                      <span style={{ fontSize: "1.08rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: v.label }} />
                    </span>
                    <span style={{ color: ACCENT, fontSize: 22, fontWeight: 400, lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: open === v.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === v.id && (
                    <div style={{ padding: "0 1.4rem 1.3rem", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.85, margin: "1rem 0 0" }} dangerouslySetInnerHTML={{ __html: v.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "application" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.5rem" }} dangerouslySetInnerHTML={{ __html: data.applicationHeading || "Application" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {data.applicationBlocks.map((b, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${b.color}`, borderRadius: 10, padding: "1.3rem 1.6rem" }}>
                    <h3 style={{ color: b.color, fontWeight: 700, margin: "0 0 0.6rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                    <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
                  </div>
                ))}
              </div>
            </div>

            {data.reflectionQuestions && data.reflectionQuestions.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }} dangerouslySetInnerHTML={{ __html: data.reflectionHeading || "Questions for Reflection" }} />
                <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                  {data.reflectionQuestions.map((q, i) => (
                    <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: `${PURPLE}33`, color: PURPLE, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                      <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.7, margin: 0, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: q }} />
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {hasVideos && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.75rem" }}>{data.videoHeading || "Video Teaching"}</h2>
                {data.videoIntro && (
                  <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: data.videoIntro }} />
                )}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                  {data.videos!.map((v) => (
                    <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <VideoEmbed videoId={v.videoId} title={v.title} />
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.closingTitle && data.closingBody && (
              <div style={{ background: CARD, border: `1px solid ${ACCENT}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }} dangerouslySetInnerHTML={{ __html: data.closingTitle }} />
                <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: data.closingBody }} />
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}
