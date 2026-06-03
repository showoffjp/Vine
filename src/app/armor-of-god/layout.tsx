import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Armor of God",
  description: "Six pieces of divine equipment for the believer's spiritual battle — plus the prayer that surrounds them all. Stand firm in the strength of the Lord against the schemes of the devil.",
  openGraph: {
    title: "The Armor of God — Vine",
    description: "Six pieces of divine equipment for the believer's spiritual battle — plus the prayer that surrounds them all. Stand firm in the strength of the Lord against the schemes of the devil.",
    images: ["/api/og?title=The+Armor+of+God"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Armor of God — Vine",
    description: "Six pieces of divine equipment for the believer's spiritual battle — plus the prayer that surrounds them all. Stand firm in the strength of the Lord against the schemes of the devil.",
    images: ["/api/og?title=The+Armor+of+God"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
