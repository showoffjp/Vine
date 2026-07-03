import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of 2 Chronicles Guide — Christian Study",
  description: "A deep guide to the Book of 2 Chronicles — Solomon building and dedicating the temple as the glory of God fills it, the divided kingdom seen through the kings of Judah, the godly reformer kings Asa, Jehoshaphat, Hezekiah, and Josiah, the great revivals and Passover celebrations, and the fall of Jerusalem closing with the hope of the decree of Cyrus.",
  openGraph: { title: "Book of 2 Chronicles Guide — Vine", description: "A guide to 2 Chronicles — Solomon's temple, the kings of Judah, the reformer kings, revival, and the hope of return.", images: ["/api/og?title=Book+of+2+Chronicles+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 2 Chronicles Guide — Vine", description: "A deep guide to the Book of 2 Chronicles.", images: ["/api/og?title=Book+of+2+Chronicles+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
