import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Timothy 2 Guide - Prayer, the Mediator, and Worship | The Vine",
  description: "A comprehensive study guide to 1 Timothy 2 - Paul's call to pray for all people, the one mediator Christ Jesus who gave himself as a ransom for all, the disposition of holy worship, and a fair-handed examination of the debated passage on women, teaching, and authority.",
  openGraph: {
    title: "1 Timothy 2 Guide - The Vine",
    description: "Study 1 Timothy 2 - prayer for all people, one mediator between God and men, and the debated passage on women in worship.",
    images: ["/api/og?title=1+Timothy+2+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Timothy 2 Guide - The Vine",
    description: "A deep guide to 1 Timothy 2 - prayer, the one mediator, and worship.",
    images: ["/api/og?title=1+Timothy+2+Guide"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
