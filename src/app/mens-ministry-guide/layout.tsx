import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Ministry Guide",
  description: "Men are underrepresented, under-discipled, and under-challenged in the modern church. Here is a theology, a set of practices, and a resource list for forming men who flourish as brothers, fathers,…",
  openGraph: {
    title: "Men's Ministry Guide — Vine",
    description: "Men are underrepresented, under-discipled, and under-challenged in the modern church. Here is a theology, a set of practices, and a resource list for forming men who flourish as brothers, fathers,…",
    images: ["/api/og?title=Men's+Ministry+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Men's Ministry Guide — Vine",
    description: "Men are underrepresented, under-discipled, and under-challenged in the modern church. Here is a theology, a set of practices, and a resource list for forming men who flourish as brothers, fathers,…",
    images: ["/api/og?title=Men's+Ministry+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
