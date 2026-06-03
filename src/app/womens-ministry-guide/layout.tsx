import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women’s Ministry Guide",
  description: "Theology, practices, teachers, and resources for building a women’s ministry that forms disciples rather than fills calendars.",
  openGraph: {
    title: "Women’s Ministry Guide — Vine",
    description: "Theology, practices, teachers, and resources for building a women’s ministry that forms disciples rather than fills calendars.",
    images: ["/api/og?title=Women%E2%80%99s+Ministry+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Women’s Ministry Guide — Vine",
    description: "Theology, practices, teachers, and resources for building a women’s ministry that forms disciples rather than fills calendars.",
    images: ["/api/og?title=Women%E2%80%99s+Ministry+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
