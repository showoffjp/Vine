import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Fasting Guide",
  description: "Why Jesus assumed His disciples would fast, the great biblical fasts of Moses, Elijah, Daniel, and Esther, and how fasting functions as spiritual warfare, intercession, and a path to breakthrough.",
  openGraph: {
    title: "Christian Fasting Guide — Vine",
    description: "Why Jesus assumed His disciples would fast, the great biblical fasts of Moses, Elijah, Daniel, and Esther, and how fasting functions as spiritual warfare, intercession, and a path to breakthrough.",
    images: ["/api/og?title=Christian+Fasting+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Fasting Guide — Vine",
    description: "Why Jesus assumed His disciples would fast, the great biblical fasts of Moses, Elijah, Daniel, and Esther, and how fasting functions as spiritual warfare, intercession, and a path to breakthrough.",
    images: ["/api/og?title=Christian+Fasting+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
