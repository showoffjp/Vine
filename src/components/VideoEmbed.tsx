"use client";
import { useState } from "react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  style?: React.CSSProperties;
}

export default function VideoEmbed({ videoId, title, style }: VideoEmbedProps) {
  const [active, setActive] = useState(false);
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  const [imgFailed, setImgFailed] = useState(false);

  const containerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    aspectRatio: "16/9",
    overflow: "hidden",
    background: "#0d0d1a",
    ...style,
  };

  if (active) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        width="100%"
        style={{ aspectRatio: "16/9", border: "none", display: "block" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  function handleImgError() {
    // hqdefault returns HTTP 200 with a generic gray image for invalid IDs,
    // so we skip it and go straight to our custom placeholder.
    setImgFailed(true);
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Play: ${title}`}
      style={{
        ...containerStyle,
        cursor: "pointer",
        border: "none",
        padding: 0,
        display: "block",
      }}
    >
      {/* Thumbnail */}
      {imgFailed ? (
        /* Clean dark placeholder when no thumbnail is available */
        <div style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d0d1a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
        }}>
          <svg width="48" height="34" viewBox="0 0 48 34" fill="none" style={{ opacity: 0.18 }}>
            <rect width="48" height="34" rx="8" fill="white" />
            <polygon points="19,9 35,17 19,25" fill="#0d0d1a" />
          </svg>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", fontFamily: "Georgia, serif", textAlign: "center", maxWidth: "80%", lineHeight: 1.4 }}>{title}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgSrc}
          alt=""
          onError={handleImgError}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      )}

      {/* Red play button overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.30)",
      }}>
        <div style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "rgba(220,30,30,0.92)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
          flexShrink: 0,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 4 }}>
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>
    </button>
  );
}
