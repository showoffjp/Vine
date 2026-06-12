import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Persecuted Church — Vine",
  description: "Blessed are those who are persecuted for righteousness' sake. A guide to the theology of persecution and martyrdom, the global persecuted church today, and how to stand with believers under pressure.",
  openGraph: {
    title: "The Persecuted Church — Vine",
    description: "Blessed are those who are persecuted for righteousness' sake. A guide to the theology of persecution and martyrdom, the global persecuted church today, and how to stand with believers under pressure.",
    images: ["/api/og?title=The+Persecuted+Church"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Persecuted Church — Vine",
    description: "Blessed are those who are persecuted for righteousness' sake. A guide to the theology of persecution and martyrdom, the global persecuted church today, and how to stand with believers under pressure.",
    images: ["/api/og?title=The+Persecuted+Church"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
