import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Spiritual Disciplines Guide",
  description:
    "The classical spiritual disciplines — Richard Foster's Celebration of Discipline, Dallas Willard's spirituality of training, the disciplines of abstinence and engagement, lectio divina, examen, and forming Christ in you.",
  openGraph: {
    title: "Christian Spiritual Disciplines Guide — Vine",
    description:
      "The classical spiritual disciplines — Richard Foster's Celebration of Discipline, Dallas Willard's spirituality of training, the disciplines of abstinence and engagement, lectio divina, examen, and forming Christ in you.",
    images: ["/api/og?title=Christian+Spiritual+Disciplines+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Spiritual Disciplines Guide — Vine",
    description:
      "The classical spiritual disciplines — Richard Foster's Celebration of Discipline, Dallas Willard's spirituality of training, the disciplines of abstinence and engagement, lectio divina, examen, and forming Christ in you.",
    images: ["/api/og?title=Christian+Spiritual+Disciplines+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
