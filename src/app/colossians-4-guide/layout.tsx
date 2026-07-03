import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Colossians 4 Chapter Guide – Prayer, Wisdom, and Faithful Ministry | The Vine",
  description: "A deep guide to Colossians 4 covering the call to devoted and watchful prayer, praying for open doors for the gospel, walking in wisdom toward outsiders, speech that is gracious and seasoned with salt, and Paul's rich circle of ministry companions including Tychicus, Onesimus, Epaphras, Luke, and the closing autograph: Remember my chains.",
  openGraph: { title: "Colossians 4 Chapter Guide – Prayer, Wisdom, and Faithful Ministry | The Vine", description: "Colossians 4 on devoted prayer, walking wisely toward outsiders, gracious speech, and Paul's extraordinary fellowship of co-workers.", images: ["/api/og?title=Colossians+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Colossians 4 Chapter Guide – The Vine", description: "A deep guide to Colossians 4 on prayer, wisdom, and faithful ministry companions.", images: ["/api/og?title=Colossians+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
