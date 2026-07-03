import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 20 Bible Study Guide | The Vine",
  description: "An in-depth study of Isaiah 20 -- the prophetic sign-act where God commanded Isaiah to walk naked and barefoot for 3 years as a warning against trusting in Egypt and Cush. Covers all 6 verses, key themes, and application.",
  openGraph: {
    title: "Isaiah 20 Bible Study Guide -- Vine",
    description: "An in-depth study of Isaiah 20 -- the prophetic sign-act where God commanded Isaiah to walk naked and barefoot for 3 years as a warning against trusting in Egypt and Cush.",
    images: ["/api/og?title=Isaiah+20+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 20 Bible Study Guide -- Vine",
    description: "An in-depth study of Isaiah 20 -- the prophetic sign-act where God commanded Isaiah to walk naked and barefoot for 3 years as a warning against trusting in Egypt and Cush.",
    images: ["/api/og?title=Isaiah+20+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
