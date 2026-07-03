import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "2 Timothy 2 Study Guide -- Soldier, Athlete, Farmer: The Call to Endure",
  description: "A verse-by-verse guide to 2 Timothy 2 -- Paul's charge to be strong in grace, entrust the gospel to faithful people, endure as a soldier, and rightly handle the word of truth.",
  openGraph: {
    title: "2 Timothy 2 Study Guide -- The Vine",
    description: "A verse-by-verse guide to 2 Timothy 2 -- strong in grace, entrusting the gospel, soldier, athlete, farmer analogies, and rightly handling the word of truth.",
    images: ["/api/og?title=2+Timothy+2+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "2 Timothy 2 Study Guide -- The Vine",
    description: "A verse-by-verse guide to 2 Timothy 2 -- strong in grace, entrusting the gospel, soldier, athlete, farmer analogies, and rightly handling the word of truth.",
    images: ["/api/og?title=2+Timothy+2+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
