"use client";

import { useState, useRef, useCallback, useId } from "react";
import Link from "next/link";
import { parseReference, bibleHref, type ParsedRef } from "@/lib/bibleRef";

const GREEN = "#3a7d56";
const GREEN_LIGHT = "#5fae7f";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#c9a227";

interface VerseData {
  reference: string;
  text: string;
  context: { num: number; text: string }[];
  verse: number;
  version: string;
}

// Module-level cache so a verse fetched once is instant everywhere after.
const cache = new Map<string, VerseData>();
const inflight = new Map<string, Promise<VerseData | null>>();

async function fetchVerse(ref: ParsedRef): Promise<VerseData | null> {
  const key = `${ref.bookId}-${ref.chapter}-${ref.verse}`;
  if (cache.has(key)) return cache.get(key)!;
  if (inflight.has(key)) return inflight.get(key)!;
  const p = (async () => {
    try {
      const url = `/api/bible?action=verse&bookId=${encodeURIComponent(ref.bookId)}&chapter=${ref.chapter}&verse=${ref.verse}&context=1`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const json = (await res.json()) as VerseData;
      cache.set(key, json);
      return json;
    } catch {
      return null;
    } finally {
      inflight.delete(key);
    }
  })();
  inflight.set(key, p);
  return p;
}

interface VerseRefProps {
  /** A reference such as "John 3:16", "Romans 8:28-30", or "Psalm 23". */
  reference: string;
  /** Optional display text. Defaults to the reference itself. */
  children?: React.ReactNode;
  /** Render inline (default) — set false to render as a block pill. */
  inline?: boolean;
}

/**
 * An interactive Scripture reference. Hovering (or focusing) reveals the full
 * verse text with one verse of surrounding context; clicking opens the Bible
 * reader scrolled and highlighted to that exact verse.
 */
export default function VerseRef({ reference, children, inline = true }: VerseRefProps) {
  const parsed = parseReference(reference);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<VerseData | null>(null);
  const [loading, setLoading] = useState(false);
  const [above, setAbove] = useState(false);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tipId = useId();

  // If the reference can't be parsed, render plain text — never a broken link.
  const show = useCallback(() => {
    if (!parsed || !parsed.verse) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // Decide whether to flip the card above the anchor (near the top of viewport).
    if (anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setAbove(rect.top > 260);
    }
    setOpen(true);
    if (!data && !loading) {
      setLoading(true);
      fetchVerse(parsed).then((d) => {
        setData(d);
        setLoading(false);
      });
    }
  }, [parsed, data, loading]);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }, []);

  if (!parsed) {
    return <span>{children ?? reference}</span>;
  }

  const href = bibleHref(parsed.bookId, parsed.chapter, parsed.verse);
  // Chapter-only reference: link, but no hover card.
  const hasVerse = parsed.verse != null;

  const linkStyle: React.CSSProperties = inline
    ? {
        color: GREEN_LIGHT,
        textDecoration: "none",
        borderBottom: `1px dotted ${GREEN}`,
        cursor: "pointer",
        fontWeight: 600,
        transition: "color 0.15s, border-color 0.15s",
        whiteSpace: "nowrap",
      }
    : {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 10px",
        borderRadius: 999,
        background: `${GREEN}18`,
        border: `1px solid ${GREEN}44`,
        color: GREEN_LIGHT,
        textDecoration: "none",
        cursor: "pointer",
        fontWeight: 700,
        fontSize: "0.85em",
        whiteSpace: "nowrap",
      };

  return (
    <span
      ref={anchorRef}
      style={{ position: "relative", display: "inline" }}
      onMouseEnter={hasVerse ? show : undefined}
      onMouseLeave={hasVerse ? scheduleClose : undefined}
    >
      <Link
        href={href}
        prefetch={false}
        aria-describedby={open ? tipId : undefined}
        style={linkStyle}
        onFocus={hasVerse ? show : undefined}
        onBlur={hasVerse ? scheduleClose : undefined}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = GOLD;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = GREEN_LIGHT;
        }}
      >
        {children ?? reference}
      </Link>

      {open && hasVerse && (
        <span
          id={tipId}
          role="tooltip"
          onMouseEnter={show}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            [above ? "bottom" : "top"]: "calc(100% + 10px)",
            zIndex: 9999,
            width: "min(340px, 86vw)",
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
            boxShadow: "0 18px 50px rgba(0,0,0,0.55)",
            padding: "14px 16px",
            textAlign: "left",
            display: "block",
            animation: "verseRefIn 0.16s ease-out",
            cursor: "default",
          } as React.CSSProperties}
        >
          <span
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: GREEN_LIGHT,
              marginBottom: 8,
            }}
          >
            {data?.reference ?? parsed.bookName + " " + parsed.chapter + ":" + parsed.verse}
          </span>

          {loading && (
            <span style={{ display: "block", color: MUTED, fontSize: 13, fontStyle: "italic" }}>
              Loading verse…
            </span>
          )}

          {!loading && data && (
            <span style={{ display: "block", lineHeight: 1.6 }}>
              {data.context.map((c) => (
                <span
                  key={c.num}
                  style={{
                    fontSize: 14.5,
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    color: c.num === data.verse ? TEXT : MUTED,
                    background: c.num === data.verse ? `${GREEN}22` : "transparent",
                    borderRadius: 4,
                    padding: c.num === data.verse ? "1px 3px" : 0,
                  }}
                >
                  <sup style={{ color: GREEN_LIGHT, fontSize: "0.7em", fontWeight: 800, marginRight: 2 }}>
                    {c.num}
                  </sup>
                  {c.text}{" "}
                </span>
              ))}
            </span>
          )}

          {!loading && !data && (
            <span style={{ display: "block", color: MUTED, fontSize: 13 }}>
              Tap to read {parsed.bookName} {parsed.chapter}:{parsed.verse} in the Bible reader.
            </span>
          )}

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              marginTop: 10,
              paddingTop: 9,
              borderTop: `1px solid ${BORDER}`,
              fontSize: 11.5,
              fontWeight: 700,
              color: GOLD,
            }}
          >
            Open in Bible reader
            <span aria-hidden style={{ fontSize: 13 }}>→</span>
            {data?.version && (
              <span style={{ marginLeft: "auto", color: MUTED, fontWeight: 600 }}>{data.version}</span>
            )}
          </span>
        </span>
      )}
    </span>
  );
}
