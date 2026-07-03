import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Kings 2 Chapter Guide – David's Final Charge to Solomon | The Vine",
  description: "A deep study of 1 Kings 2 covering David's deathbed charge to Solomon, the call to walk in God's ways and keep the law of Moses, the Davidic covenant promise, and Solomon's establishment of his kingdom through justice over Adonijah, Abiathar, Joab, and Shimei.",
  openGraph: { title: "1 Kings 2 Chapter Guide – David's Final Charge to Solomon | The Vine", description: "David's dying charge to Solomon: be strong, keep the law of Moses, walk in God's ways. Then Solomon establishes his kingdom through covenant justice.", images: ["/api/og?title=1+Kings+2+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 2 Chapter Guide | The Vine", description: "David's final charge to Solomon and the establishment of Solomon's kingdom through justice.", images: ["/api/og?title=1+Kings+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
