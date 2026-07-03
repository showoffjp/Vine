import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Thessalonians 5 Guide -- Children of Light and the Day of the Lord",
  description: "A deep guide to 1 Thessalonians 5 -- the day of the Lord like a thief, children of light not darkness, the rapid-fire commands, do not quench the Spirit, test everything, and the God of peace sanctifying you completely.",
  openGraph: { title: "1 Thessalonians 5 Guide -- Vine", description: "A guide to 1 Thessalonians 5 -- watchful readiness, rejoice always, pray without ceasing, give thanks in all circumstances, and the God of peace himself sanctifying you wholly.", images: ["/api/og?title=1+Thessalonians+5+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Thessalonians 5 Guide -- Vine", description: "A deep guide to 1 Thessalonians 5 -- children of light, rapid-fire commands, and complete sanctification.", images: ["/api/og?title=1+Thessalonians+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
