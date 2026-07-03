import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 36: Sennacherib's Threat and the Rabshakeh's Blasphemy | Vine",
  description: "A verse-by-verse study guide to Isaiah 36 -- Sennacherib's invasion of Judah, the Rabshakeh's psychological warfare speech, and what it means to trust God when powerful voices mock our faith.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
