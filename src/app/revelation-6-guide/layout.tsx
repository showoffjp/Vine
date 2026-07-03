import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 6: The Seven Seals and the Four Horsemen of the Apocalypse | Vine",
  description:
    "A comprehensive study guide to Revelation 6 -- the Lamb opens the seven-sealed scroll, the four horsemen ride (white, red, black, pale), the martyrs cry under the altar, and cosmic signs herald the wrath of the Lamb.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
