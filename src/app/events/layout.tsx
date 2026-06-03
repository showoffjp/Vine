import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Worldwide",
  description: "Connect with believers in person and online at conferences, retreats, workshops, and gatherings around the globe.",
  openGraph: {
    title: "Events Worldwide — Vine",
    description: "Connect with believers in person and online at conferences, retreats, workshops, and gatherings around the globe.",
    images: ["/api/og?title=Events+Worldwide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events Worldwide — Vine",
    description: "Connect with believers in person and online at conferences, retreats, workshops, and gatherings around the globe.",
    images: ["/api/og?title=Events+Worldwide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
