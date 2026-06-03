import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Ethics",
  description: "Christian ethics begins not with rules but with character — what kind of person does God want you to become? From formed character, right action flows. The Sermon on the Mount begins with 'Blessed…",
  openGraph: {
    title: "Christian Ethics — Vine",
    description: "Christian ethics begins not with rules but with character — what kind of person does God want you to become? From formed character, right action flows. The Sermon on the Mount begins with 'Blessed…",
    images: ["/api/og?title=Christian+Ethics"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Ethics — Vine",
    description: "Christian ethics begins not with rules but with character — what kind of person does God want you to become? From formed character, right action flows. The Sermon on the Mount begins with 'Blessed…",
    images: ["/api/og?title=Christian+Ethics"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
