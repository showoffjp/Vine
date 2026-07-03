import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Mark 9 Guide — Transfiguration, Faith, and Servant Greatness",
  description: "A deep guide to Mark 9 — the Transfiguration on the mountain, the healing of a demonized boy through prayer, Jesus predicting his death, and his teaching that whoever would be first must be last of all and servant of all.",
  openGraph: { title: "Mark 9 Guide — Vine", description: "Mark 9: the Transfiguration, healing the demonized boy through prayer, and Jesus teaching that greatness in the kingdom means servant of all.", images: ["/api/og?title=Mark+9+Guide"] },
  twitter: { card: "summary_large_image", title: "Mark 9 Guide — Vine", description: "A deep guide to Mark 9 — the Transfiguration, faith, prayer, and servant greatness in the kingdom of God.", images: ["/api/og?title=Mark+9+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
