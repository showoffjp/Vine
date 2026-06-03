import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Retreats",
  description: "Jesus withdrew. The desert fathers withdrew. Every great Christian has known that sustained encounter with God requires intentional withdrawal from the normal pace of life. Here is how — and where.",
  openGraph: {
    title: "Spiritual Retreats — Vine",
    description: "Jesus withdrew. The desert fathers withdrew. Every great Christian has known that sustained encounter with God requires intentional withdrawal from the normal pace of life. Here is how — and where.",
    images: ["/api/og?title=Spiritual+Retreats"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Retreats — Vine",
    description: "Jesus withdrew. The desert fathers withdrew. Every great Christian has known that sustained encounter with God requires intentional withdrawal from the normal pace of life. Here is how — and where.",
    images: ["/api/og?title=Spiritual+Retreats"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
