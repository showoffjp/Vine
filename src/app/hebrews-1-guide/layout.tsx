import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Hebrews 1 Chapter Guide – The Son, Radiance of God's Glory | The Vine",
  description: "A deep guide to Hebrews 1 — the magnificent Christological prologue introducing Christ as the Son through whom God spoke in these last days: radiance of God’s glory, exact imprint of his nature, heir of all things, creator of worlds, superior to angels, seated at the right hand of the Majesty on high.",
  openGraph: { title: "Hebrews 1 Chapter Guide – The Son, Radiance of God’s Glory | The Vine", description: "Hebrews 1 opens with a sevenfold description of the Son and a chain of Old Testament quotations proving his superiority to angels. God has spoken his final word in the Son.", images: ["/api/og?title=Hebrews+1+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Hebrews 1 Chapter Guide | The Vine", description: "A guide to Hebrews 1 — the Son as radiance of God’s glory, exact imprint of his nature, superior to angels.", images: ["/api/og?title=Hebrews+1+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
