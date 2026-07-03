import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Whatever You Do: A Christian Guide to Work | The Vine",
  description:
    "A biblical theology of work — from vocation as God's calling and Luther's doctrine of all occupations as holy, to Colossians 3:23's working for the Lord, the dignity of ordinary labor, and Sabbath as sacred rest equal to work.",
  openGraph: {
    title: "Whatever You Do: A Christian Guide to Work — Vine",
    description:
      "A biblical theology of work — from vocation as God's calling and Luther's doctrine of all occupations as holy, to Colossians 3:23's working for the Lord, the dignity of ordinary labor, and Sabbath as sacred rest equal to work.",
    images: ["/api/og?title=Christian+Work+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatever You Do: A Christian Guide to Work — Vine",
    description:
      "A biblical theology of work — from vocation as God's calling and Luther's doctrine of all occupations as holy, to Colossians 3:23's working for the Lord, the dignity of ordinary labor, and Sabbath as sacred rest equal to work.",
    images: ["/api/og?title=Christian+Work+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
