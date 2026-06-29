"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

// Shared template for "Section / Deep Dive" style guides: custom section tabs,
// each with a heading, a reference line, and prose paragraphs, plus an optional
// Videos tab and a closing pastoral callout. Preserves the original design.
export const SECTION_COLORS = {
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

const { BG, CARD, BORDER, TEXT, MUTED } = SECTION_COLORS;

export type SectionEntry = { id: string; heading: string; reference: string; paragraphs: string[] };
export type SectionVideo = { videoId: string; title: string };

export type SectionGuideData = {
  accent: string;
  badge: string;
  title: string;
  intro: string;
  tabs: string[];
  sections: SectionEntry[];
  videos?: SectionVideo[];
  videoHeading?: string;
  videoIntro?: string;
  calloutTitle?: string;
  calloutBody?: string;
};

export default function SectionGuideTemplate({ data }: { data: SectionGuideData }) {
  const ACCENT = data.accent;
  const TABS = data.tabs;
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const currentSection = data.sections.find((s) => s.id === activeTab);
  const hasVideos = !!(data.videos && data.videos.length > 0);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: data.badge }} />
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }} dangerouslySetInnerHTML={{ __html: data.title }} />
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: data.intro }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {hasVideos && activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>{data.videoHeading || "Video Teaching"}</h2>
            {data.videoIntro && (
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: data.videoIntro }} />
            )}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {data.videos!.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.calloutTitle && data.calloutBody && (
          <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
            <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }} dangerouslySetInnerHTML={{ __html: data.calloutTitle }} />
            <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: data.calloutBody }} />
          </div>
        )}
      </main>
    </div>
  );
}
