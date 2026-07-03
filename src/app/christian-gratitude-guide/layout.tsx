import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Gratitude",
  description: "Gratitude and the Christian faith - thanksgiving as a command and a way of life, the theology of grace and gratitude, giving thanks in all circumstances, the research on gratitude and wellbeing, the danger of ingratitude, and practices for cultivating a thankful heart.",
  openGraph: { title: "Christian Guide to Gratitude - Vine", description: "Gratitude and faith - thanksgiving as a way of life, grace and gratitude, giving thanks in all circumstances, and a thankful heart.", images: ["/api/og?title=Christian+Gratitude"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Gratitude - Vine", description: "Gratitude and the Christian faith.", images: ["/api/og?title=Christian+Gratitude"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
