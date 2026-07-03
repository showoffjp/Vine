import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Numbers 6 Guide — The Aaronic Blessing — Christian Study",
  description: "A deep study of Numbers 6 and the Aaronic Blessing — God's own benediction pronounced over his people. Explore the meaning of 'the Lord bless you and keep you' and how this priestly blessing finds its fulfillment in Christ.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
