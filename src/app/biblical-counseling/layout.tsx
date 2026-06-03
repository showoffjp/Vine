import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biblical Counseling Guide",
  description: "Scripture-rooted guidance for life's hardest struggles — not replacing professional care but offering the resources of the gospel.",
  openGraph: {
    title: "Biblical Counseling Guide — Vine",
    description: "Scripture-rooted guidance for life's hardest struggles — not replacing professional care but offering the resources of the gospel.",
    images: ["/api/og?title=Biblical+Counseling+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblical Counseling Guide — Vine",
    description: "Scripture-rooted guidance for life's hardest struggles — not replacing professional care but offering the resources of the gospel.",
    images: ["/api/og?title=Biblical+Counseling+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
