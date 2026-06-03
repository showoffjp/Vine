import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "End Times Guide",
  description: "A clear-headed survey of eschatology — the timeline of the end, the rapture debate, millennium views, and principles for studying prophecy. Hold your system with conviction; hold it with humility.",
  openGraph: {
    title: "End Times Guide — Vine",
    description: "A clear-headed survey of eschatology — the timeline of the end, the rapture debate, millennium views, and principles for studying prophecy. Hold your system with conviction; hold it with humility.",
    images: ["/api/og?title=End+Times+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "End Times Guide — Vine",
    description: "A clear-headed survey of eschatology — the timeline of the end, the rapture debate, millennium views, and principles for studying prophecy. Hold your system with conviction; hold it with humility.",
    images: ["/api/og?title=End+Times+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
