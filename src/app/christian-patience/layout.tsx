import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patience: A Christian Virtue — Vine",
  description: "Patience is not passive resignation but active trust. Explore the theology of hupomone and makrothumia, Job's steadfastness, the fruit of the Spirit, and how to cultivate patience in daily life.",
  openGraph: {
    title: "Patience: A Christian Virtue — Vine",
    description: "Patience is not passive resignation but active trust. Explore the theology of hupomone and makrothumia, Job's steadfastness, the fruit of the Spirit, and how to cultivate patience in daily life.",
    images: ["/api/og?title=Patience%3A+A+Christian+Virtue"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patience: A Christian Virtue — Vine",
    description: "Patience is not passive resignation but active trust. Explore the theology of hupomone and makrothumia, Job's steadfastness, the fruit of the Spirit, and how to cultivate patience in daily life.",
    images: ["/api/og?title=Patience%3A+A+Christian+Virtue"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
