import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Kings 2 Chapter Guide - Elijah Taken to Heaven, Elisha's Calling | The Vine",
  description: "A deep study of 2 Kings 2 - Elijah and Elisha's final journey together, Elisha's persistent request for a double portion of Elijah's spirit, the whirlwind and chariot of fire, and Elisha beginning his own miracle ministry.",
  openGraph: { title: "2 Kings 2 Guide - The Vine", description: "Elijah taken to heaven, Elisha's double portion, the chariot of fire, and the beginning of Elisha's miracle ministry.", images: ["/api/og?title=2+Kings+2+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 2 Guide - The Vine", description: "A deep study of 2 Kings 2 - Elijah's departure, Elisha's double portion, and the chariot of fire.", images: ["/api/og?title=2+Kings+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
