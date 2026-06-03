import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anger: A Christian Guide",
  description: "God gets angry. Jesus got angry. The question is not whether anger is appropriate but whether ours is righteous, rightly expressed, and quickly resolved. Be angry — and do not sin.",
  openGraph: {
    title: "Anger: A Christian Guide — Vine",
    description: "God gets angry. Jesus got angry. The question is not whether anger is appropriate but whether ours is righteous, rightly expressed, and quickly resolved. Be angry — and do not sin.",
    images: ["/api/og?title=Anger%3A+A+Christian+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anger: A Christian Guide — Vine",
    description: "God gets angry. Jesus got angry. The question is not whether anger is appropriate but whether ours is righteous, rightly expressed, and quickly resolved. Be angry — and do not sin.",
    images: ["/api/og?title=Anger%3A+A+Christian+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
