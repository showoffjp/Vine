import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 2 Chapter Guide – Garden of Eden and Marriage | The Vine",
  description: "A deep guide to Genesis 2 -- the seventh day Sabbath rest, the Garden of Eden, God forming Adam from dust and breathing life, Eve formed from Adam's side, the institution of marriage as covenant, and the mystery pointing to Christ and the church in Ephesians 5.",
  openGraph: { title: "Genesis 2 Chapter Guide -- Garden of Eden and Marriage | The Vine", description: "Genesis 2: the Garden of Eden, creation of Adam and Eve, and marriage as a covenant pointing to Christ and the church.", images: ["/api/og?title=Genesis+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 2 Chapter Guide | The Vine", description: "Genesis 2: the Garden of Eden, creation of Adam and Eve, and the mystery of marriage pointing to Christ.", images: ["/api/og?title=Genesis+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
