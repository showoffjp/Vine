import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 16 Chapter Guide – God My Refuge, Not Abandoned to Sheol | The Vine",
  description: "A deep guide to Psalm 16 of David — taking refuge in God alone, refusing to worship other gods, the blessed inheritance of the LORD’s people, and the resurrection promise ‘You will not abandon me to the realm of the dead’ — as cited by Peter at Pentecost and Paul at Antioch.",
  openGraph: { title: "Psalm 16 Chapter Guide – The Vine", description: "Psalm 16: refuge in God, beautiful inheritance, and the resurrection promise fulfilled in Jesus.", images: ["/api/og?title=Psalm+16+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 16 Chapter Guide – The Vine", description: "A deep guide to Psalm 16 — God my refuge, not abandoned to Sheol, fullness of joy.", images: ["/api/og?title=Psalm+16+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
