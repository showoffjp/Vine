import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Disciplines",
  description: "The classical practices of Christian formation — Lectio Divina, the Daily Examen, fasting, Sabbath, centering prayer — with practical how-to instructions, common mistakes, and the best resources to…",
  openGraph: {
    title: "Spiritual Disciplines — Vine",
    description: "The classical practices of Christian formation — Lectio Divina, the Daily Examen, fasting, Sabbath, centering prayer — with practical how-to instructions, common mistakes, and the best resources to…",
    images: ["/api/og?title=Spiritual+Disciplines"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Disciplines — Vine",
    description: "The classical practices of Christian formation — Lectio Divina, the Daily Examen, fasting, Sabbath, centering prayer — with practical how-to instructions, common mistakes, and the best resources to…",
    images: ["/api/og?title=Spiritual+Disciplines"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
