import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Jeremiah Guide - Christian Study",
  description: "A deep guide to the Book of Jeremiah - the weeping prophet, the call of Jeremiah, prophecies of judgment and exile, the new covenant promise, suffering for faithfulness, and hope beyond destruction.",
  openGraph: { title: "Book of Jeremiah Guide - Vine", description: "A guide to Jeremiah - the weeping prophet, judgment and exile, the new covenant, and hope beyond destruction.", images: ["/api/og?title=Jeremiah+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Jeremiah Guide - Vine", description: "A deep guide to the Book of Jeremiah.", images: ["/api/og?title=Jeremiah+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
