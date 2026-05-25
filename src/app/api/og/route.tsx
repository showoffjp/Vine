import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Grow. Connect. Thrive in Faith.";
  const type = searchParams.get("type") ?? "page";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#07070F",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #D4AF37, #8B6FDB)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              fontWeight: 900,
              color: "#07070F",
            }}
          >
            V
          </div>
          <span style={{ fontSize: "36px", fontWeight: 900, color: "#F2F2F8" }}>
            Vine
          </span>
        </div>

        {/* Type badge */}
        {type !== "page" && (
          <div
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "16px",
              zIndex: 1,
            }}
          >
            {type}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? "42px" : "56px",
            fontWeight: 900,
            color: "#F2F2F8",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.1,
            zIndex: 1,
          }}
        >
          {title}
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: "24px",
            fontSize: "20px",
            color: "#8A8AA8",
            zIndex: 1,
          }}
        >
          vine.community — The Christian Everything Platform
        </div>

        {/* Bottom verse */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "15px",
            fontStyle: "italic",
            color: "rgba(212,175,55,0.5)",
            zIndex: 1,
          }}
        >
          &quot;I am the vine; you are the branches.&quot; — John 15:5
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
