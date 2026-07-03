import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "3 John: Gaius, Diotrephes, and the Test of Hospitality | Vine",
  description:
    "A comprehensive guide to 3 John -- the shortest NT book by word count, covering John's joy over Gaius walking in truth, the call to support traveling missionaries as fellow workers for the truth, Diotrephes who loves preeminence and rejects apostolic authority, the commendation of Demetrius by the truth itself, and the closing hope for face-to-face fellowship.",
  openGraph: {
    title: "3 John Guide -- Gaius, Diotrephes, and Hospitality | Vine",
    description: "Guide to 3 John: faithful Gaius, the Diotrephes spirit of preeminence, Demetrius commended by the truth itself, and the theology of mission hospitality.",
    images: ["/api/og?title=3+John+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 John Guide -- Vine",
    description: "A deep guide to the Third Epistle of John: Gaius, Diotrephes, Demetrius, and the test of hospitality.",
    images: ["/api/og?title=3+John+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
