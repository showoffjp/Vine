import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Proverbs 21 Guide - The King's Heart and the Sovereignty of the LORD - Christian Study",
  description: "A deep study of Proverbs 21 - the king's heart is a stream of water in the hand of the LORD. Explore divine sovereignty over rulers and human plans, the LORD who weighs the heart, righteousness and justice over sacrifice, diligence over haste, the consequences of ignoring the cry of the poor, the discipline of speech, and the famous closing verse that the horse is made ready for battle but the victory belongs to the LORD.",
  openGraph: {
    title: "Proverbs 21 Guide - The Sovereignty of the LORD - Vine",
    description: "Study Proverbs 21: God's sovereignty over kings and plans, the LORD who weighs the heart, justice over sacrifice, care for the poor, the discipline of the tongue, and the victory that belongs to the LORD.",
    images: ["/api/og?title=Proverbs+21+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proverbs 21 Guide - The Sovereignty of the LORD - Vine",
    description: "A deep guide to Proverbs 21 - the king's heart in the hand of the LORD, justice over sacrifice, and the victory that belongs to the LORD.",
    images: ["/api/og?title=Proverbs+21+Guide"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
