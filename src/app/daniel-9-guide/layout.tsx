import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Daniel 9 Chapter Guide – Daniel's Prayer and the Seventy Weeks | The Vine",
  description: "A deep guide to Daniel 9 — Daniel's great prayer of confession and intercession for Israel, Gabriel's swift appearance in response, and the mysterious prophecy of seventy weeks pointing to the Messiah who would be cut off.",
  openGraph: { title: "Daniel 9 Chapter Guide – Daniel's Prayer and the Seventy Weeks | The Vine", description: "Explore Daniel 9: the prayer of confession, Gabriel's appearance, and the seventy weeks prophecy pointing to the Messiah.", images: ["/api/og?title=Daniel+9+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Daniel 9 Chapter Guide | The Vine", description: "Daniel 9: confession, intercession, Gabriel's message, and the seventy weeks prophecy.", images: ["/api/og?title=Daniel+9+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
