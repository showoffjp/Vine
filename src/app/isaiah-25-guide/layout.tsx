import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 25 Bible Study Guide",
  description: "Isaiah 25 is a triumphant song of praise anticipating the eschatological feast, the defeat of death, and the removal of the veil from all nations. A deep guide to this glorious chapter.",
  openGraph: {
    title: "Isaiah 25 Bible Study Guide -- Vine",
    description: "Isaiah 25 is a triumphant song of praise anticipating the eschatological feast, the defeat of death, and the removal of the veil from all nations.",
    images: ["/api/og?title=Isaiah+25+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 25 Bible Study Guide -- Vine",
    description: "Isaiah 25 is a triumphant song of praise anticipating the eschatological feast, the defeat of death, and the removal of the veil from all nations.",
    images: ["/api/og?title=Isaiah+25+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
