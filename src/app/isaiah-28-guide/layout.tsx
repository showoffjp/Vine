import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 28 Study Guide | The Vine",
  description: "A deep study of Isaiah 28 -- woe to the proud crown of Ephraim, the covenant with death, and the precious tested cornerstone in Zion that is fulfilled in Jesus Christ.",
  openGraph: {
    title: "Isaiah 28 Study Guide -- The Vine",
    description: "A deep study of Isaiah 28 -- woe to the proud crown of Ephraim, the covenant with death, and the precious tested cornerstone in Zion that is fulfilled in Jesus Christ.",
    images: ["/api/og?title=Isaiah+28+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 28 Study Guide -- The Vine",
    description: "A deep study of Isaiah 28 -- woe to the proud crown of Ephraim, the covenant with death, and the precious tested cornerstone in Zion that is fulfilled in Jesus Christ.",
    images: ["/api/og?title=Isaiah+28+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
