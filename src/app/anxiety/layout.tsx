import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anxiety & Faith",
  description: "Anxiety is one of the most common human experiences — and one of the most mishandled in the church. The biblical response is not 'just trust God more' but honest prayer, embodied practice, and real…",
  openGraph: {
    title: "Anxiety & Faith — Vine",
    description: "Anxiety is one of the most common human experiences — and one of the most mishandled in the church. The biblical response is not 'just trust God more' but honest prayer, embodied practice, and real…",
    images: ["/api/og?title=Anxiety+%26+Faith"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anxiety & Faith — Vine",
    description: "Anxiety is one of the most common human experiences — and one of the most mishandled in the church. The biblical response is not 'just trust God more' but honest prayer, embodied practice, and real…",
    images: ["/api/og?title=Anxiety+%26+Faith"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
