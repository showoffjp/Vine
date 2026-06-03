import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expository Preaching Guide",
  description: "The most important thing that happens in a local church every Sunday — what expository preaching is, how to do it, which books of Scripture to preach, and who does it best.",
  openGraph: {
    title: "Expository Preaching Guide — Vine",
    description: "The most important thing that happens in a local church every Sunday — what expository preaching is, how to do it, which books of Scripture to preach, and who does it best.",
    images: ["/api/og?title=Expository+Preaching+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expository Preaching Guide — Vine",
    description: "The most important thing that happens in a local church every Sunday — what expository preaching is, how to do it, which books of Scripture to preach, and who does it best.",
    images: ["/api/og?title=Expository+Preaching+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
