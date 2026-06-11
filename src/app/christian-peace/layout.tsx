import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Peace of God — Vine",
  description: "Peace I leave with you; my peace I give to you. A theological and practical guide to shalom — peace with God, the peace of God, and perfect peace in the middle of the storm.",
  openGraph: {
    title: "The Peace of God — Vine",
    description: "Peace I leave with you; my peace I give to you. A theological and practical guide to shalom — peace with God, the peace of God, and perfect peace in the middle of the storm.",
    images: ["/api/og?title=The+Peace+of+God"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Peace of God — Vine",
    description: "Peace I leave with you; my peace I give to you. A theological and practical guide to shalom — peace with God, the peace of God, and perfect peace in the middle of the storm.",
    images: ["/api/og?title=The+Peace+of+God"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
