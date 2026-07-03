import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Obadiah Guide — Christian Study",
  description: "A deep guide to the Book of Obadiah — the shortest book in the Old Testament — covering the pride of Edom dwelling in the high rocks of Petra, the betrayal of its brother Israel in the day of Jerusalem's fall, the coming Day of the Lord upon all nations, the judgment on Edom, and the closing promise that the kingdom shall be the Lord's.",
  openGraph: { title: "Book of Obadiah Guide — Vine", description: "A guide to Obadiah — the pride of Edom, the brother betrayal, the Day of the Lord, judgment on Edom, and the kingdom restored.", images: ["/api/og?title=Book+of+Obadiah+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Obadiah Guide — Vine", description: "A deep guide to the Book of Obadiah.", images: ["/api/og?title=Book+of+Obadiah+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
