import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Samuel 2 Chapter Guide – Hannah's Song and the Fall of Eli's House | The Vine",
  description: "1 Samuel 2 covers Hannah's magnificent song of praise, the wickedness of Eli's sons Hophni and Phinehas, the faithful boy Samuel growing in favor with God and man, and God's word of judgment on Eli's house through the man of God.",
  openGraph: { title: "1 Samuel 2 Chapter Guide – Hannah's Song and the Fall of Eli's House | The Vine", description: "Hannah's song, Eli's wicked sons, the boy Samuel, and God's judgment on Eli's house — a guide to 1 Samuel 2.", images: ["/api/og?title=1+Samuel+2+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Samuel 2 Chapter Guide | The Vine", description: "Hannah's song, Eli's wicked sons, and the boy Samuel — a guide to 1 Samuel 2.", images: ["/api/og?title=1+Samuel+2+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
