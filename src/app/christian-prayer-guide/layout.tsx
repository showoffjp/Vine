import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Prayer Guide",
  description:
    "A deep theology of prayer — the Lord's Prayer unpacked phrase by phrase, intercessory prayer and how it works, unanswered prayer, ACTS and other models, prayer and the Holy Spirit, and learning to pray when you don't know how.",
  openGraph: {
    title: "Christian Prayer Guide — Vine",
    description:
      "A deep theology of prayer — the Lord's Prayer unpacked phrase by phrase, intercessory prayer and how it works, unanswered prayer, ACTS and other models, prayer and the Holy Spirit, and learning to pray when you don't know how.",
    images: ["/api/og?title=Christian+Prayer+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Prayer Guide — Vine",
    description:
      "A deep theology of prayer — the Lord's Prayer unpacked phrase by phrase, intercessory prayer and how it works, unanswered prayer, ACTS and other models, prayer and the Holy Spirit, and learning to pray when you don't know how.",
    images: ["/api/og?title=Christian+Prayer+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
