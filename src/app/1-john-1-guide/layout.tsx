import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 John 1 Guide — God Is Light — Christian Study",
  description: "A deep study of 1 John 1 — the apostle John&rsquo;s declaration that God is light and in him there is no darkness at all, the call to walk in the light rather than darkness, the twin dangers of denying our sin nature and denying actual sins committed, and the magnificent promise of 1 John 1:9 that God is faithful and just to forgive and cleanse all who confess. Explore what it means to live in genuine fellowship with the Father, the Son, and one another.",
  openGraph: { title: "1 John 1 Guide — God Is Light — Vine", description: "A guide to 1 John 1 — God is light, walking in the light, confession of sins, and the cleansing blood of Jesus.", images: ["/api/og?title=1+John+1+Guide"] },
  twitter: { card: "summary_large_image", title: "1 John 1 Guide — God Is Light — Vine", description: "A deep study of 1 John 1 and walking in fellowship with a holy God.", images: ["/api/og?title=1+John+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
